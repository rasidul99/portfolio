/**
 * SPW - Main Application Scripts
 * Handles mobile drawer, smooth fallback reveals, and interactive behaviors.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Reveal any elements that might be hidden by Webflow inline opacity:0
    setTimeout(function() {
        var animatedElements = document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]');
        animatedElements.forEach(function(el) {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }, 150);

    // ==========================================
    // Full Page Navigation Menu Drawer
    // ==========================================
    var hamburgerBtn = document.getElementById('hamburgerBtn') || document.querySelector('.hamburger-menu');
    var menuDrawer = document.getElementById('menuDrawer') || document.querySelector('.nav-menu-wrapper.full-page-menu');
    var menuCloseBtn = document.getElementById('menuCloseBtn') || document.querySelector('.card-menu---close-button');
    var menuBackdrop = document.getElementById('menuBackdrop') || document.querySelector('.full-page-menu---bg');

    function openMenu() {
        if (menuDrawer) {
            menuDrawer.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMenu() {
        if (menuDrawer) {
            menuDrawer.classList.remove('is-open');
            document.body.style.overflow = '';
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMenu();
        });
    }

    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
    }

    if (menuBackdrop) {
        menuBackdrop.addEventListener('click', function() {
            closeMenu();
        });
    }

    // Close menu when clicking internal anchor links
    var menuLinks = document.querySelectorAll('.card-menu a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // ==========================================
    // Keyboard Shortcuts (ESC to close menu)
    // ==========================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // ==========================================
    // Testimonials Slider
    // ==========================================
    var testimonialSlider = document.querySelector('.testimonial-slider-v1');
    if (testimonialSlider) {
        var slides = testimonialSlider.querySelectorAll('.w-slide');
        var prevBtn = testimonialSlider.querySelector('.testimonial-v1---left');
        var nextBtn = testimonialSlider.querySelector('.testimonial-v1---right');
        var currentIndex = 0;

        function showSlide(index) {
            if (!slides.length) return;
            if (index >= slides.length) currentIndex = 0;
            else if (index < 0) currentIndex = slides.length - 1;
            else currentIndex = index;

            slides.forEach(function(slide, i) {
                if (i === currentIndex) {
                    slide.classList.add('active-slide');
                } else {
                    slide.classList.remove('active-slide');
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showSlide(currentIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showSlide(currentIndex + 1);
            });
        }

        // Swipe support for mobile
        var startX = 0;
        testimonialSlider.addEventListener('touchstart', function(e) {
            startX = e.changedTouches[0].screenX;
        }, { passive: true });

        testimonialSlider.addEventListener('touchend', function(e) {
            var endX = e.changedTouches[0].screenX;
            if (startX - endX > 45) {
                showSlide(currentIndex + 1);
            } else if (endX - startX > 45) {
                showSlide(currentIndex - 1);
            }
        }, { passive: true });
    }

    // ==========================================
    // Smart Navbar: Hide on Scroll Down, Show on Scroll Up
    // ==========================================
    var headerContainer = document.querySelector('.header-container.sticky-alt');
    if (headerContainer) {
        var lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        var scrollThreshold = 8;
        var topThreshold = 40;
        var isHeaderHidden = false;

        window.addEventListener('scroll', function() {
            var currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

            // Don't hide if full-page menu drawer is currently open
            if (menuDrawer && menuDrawer.classList.contains('is-open')) {
                return;
            }

            // Always show navbar near the top of the page
            if (currentScrollY <= topThreshold) {
                if (isHeaderHidden) {
                    headerContainer.classList.remove('header-hidden');
                    isHeaderHidden = false;
                }
                lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
                return;
            }

            var delta = currentScrollY - lastScrollY;

            // Ignore micro-movements below threshold
            if (Math.abs(delta) < scrollThreshold) {
                return;
            }

            if (delta > 0 && !isHeaderHidden) {
                // Scrolling down -> hide navbar
                headerContainer.classList.add('header-hidden');
                isHeaderHidden = true;
            } else if (delta < 0 && isHeaderHidden) {
                // Scrolling up -> show navbar
                headerContainer.classList.remove('header-hidden');
                isHeaderHidden = false;
            }

            lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
        }, { passive: true });
    }

    // ==========================================
    // FAQs Accordion Interactivity
    // ==========================================
    var accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach(function(item) {
            var top = item.querySelector('.accordion-top');
            var bottom = item.querySelector('.accordion-bottom');

            if (top && bottom) {
                top.addEventListener('click', function() {
                    var isOpen = item.classList.contains('is-open');

                    // Close all other open accordion items
                    accordionItems.forEach(function(otherItem) {
                        if (otherItem !== item && otherItem.classList.contains('is-open')) {
                            otherItem.classList.remove('is-open');
                            var otherBottom = otherItem.querySelector('.accordion-bottom');
                            if (otherBottom) {
                                otherBottom.style.height = '0px';
                            }
                        }
                    });

                    // Toggle current item
                    if (isOpen) {
                        item.classList.remove('is-open');
                        bottom.style.height = '0px';
                    } else {
                        item.classList.add('is-open');
                        bottom.style.height = bottom.scrollHeight + 'px';
                    }
                });
            }
        });
    }

    // ==========================================
    // Contact Form AJAX Simulation
    // ==========================================
    var contactForm = document.getElementById('wf-form-Contact-V1-Form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var successBlock = document.querySelector('.success-message-wrapp.w-form-done');
            var errorBlock = document.querySelector('.error-message-wrapper.w-form-fail');

            contactForm.style.display = 'none';
            if (errorBlock) errorBlock.style.display = 'none';
            if (successBlock) {
                successBlock.style.display = 'block';
            }
        });
    }

    // ==========================================
    // Custom Premium Service Dropdown
    // ==========================================
    var customSelectWrapper = document.getElementById('customSelectWrapper');
    if (customSelectWrapper) {
        var trigger = document.getElementById('customSelectTrigger');
        var textEl = document.getElementById('customSelectText');
        var menu = document.getElementById('customSelectMenu');
        var nativeSelect = document.getElementById('select-service');
        var selectOptions = customSelectWrapper.querySelectorAll('.custom-select-option');

        function toggleDropdown(force) {
            var isOpen = force !== undefined ? force : !customSelectWrapper.classList.contains('is-open');
            customSelectWrapper.classList.toggle('is-open', isOpen);
            if (trigger) trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }

        if (trigger) {
            trigger.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleDropdown();
            });

            trigger.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDropdown();
                } else if (e.key === 'Escape') {
                    toggleDropdown(false);
                }
            });
        }

        selectOptions.forEach(function(option) {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                var val = option.getAttribute('data-value');
                var titleEl = option.querySelector('.option-title');
                var title = titleEl ? titleEl.textContent.trim() : val;
                var iconBox = option.querySelector('.option-icon-box');
                var iconSvg = iconBox ? iconBox.innerHTML : '';
                var iconColorClass = iconBox ? (iconBox.classList[1] || '') : '';

                if (textEl) {
                    textEl.classList.remove('placeholder');
                    textEl.innerHTML = '<span class="option-icon-box ' + iconColorClass + '" style="width:24px;height:24px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;margin-right:8px;vertical-align:middle;flex-shrink:0;">' + iconSvg + '</span><span>' + title + '</span>';
                }

                selectOptions.forEach(function(opt) {
                    opt.classList.remove('is-selected');
                });
                option.classList.add('is-selected');

                if (nativeSelect) {
                    nativeSelect.value = val;
                    var evt = new Event('change', { bubbles: true });
                    nativeSelect.dispatchEvent(evt);
                }

                toggleDropdown(false);
            });
        });

        document.addEventListener('click', function(e) {
            if (!customSelectWrapper.contains(e.target)) {
                toggleDropdown(false);
            }
        });
    }

    console.log('SPW Portfolio initialized successfully.');
});

