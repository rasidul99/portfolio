# 🌟 Portfolix X - Personal Portfolio Hero Section (SPW)

এই প্রজেক্টটিতে **Portfolix X** প্রিমিয়াম ওয়েবসাইটের **Floating Header / Navbar** এবং সম্পূর্ণ **Hero Section** নিখুঁতভাবে কপি এবং কনফিগার করা হয়েছে।

---

## 📁 প্রজেক্ট স্ট্রাকচার (Project Structure)

```text
g:/Development/SPW/
├── 📄 index.html                  <-- মূল ওয়েবপেজ (Header + Hero Section + Marquee)
├── 📖 README.md                   <-- নির্দেশিকা ফাইল
└── 📂 assets/                     <-- সমস্ত লোকাল অ্যাসেট (১০০% অফলাইন সাপোর্ট)
    ├── 📂 css/
    │   ├── webflow.css            <-- পোর্টফোলিক্স মূল ওয়েবফ্লো স্টাইল
    │   └── custom.css             <-- মসৃণ অ্যানিমেশন, মার্কিউ স্ক্রল ও হোভার ইফেক্ট
    ├── 📂 js/
    │   ├── jquery.min.js          <-- লোকাল jQuery লাইব্রেরি
    │   ├── webflow.js             <-- Webflow IX2 ইন্টারেকশন ইঞ্জিন
    │   └── main.js                <-- মোবাইল মেনু ড্রয়ার টগল ও ফলব্যাক স্ক্রিপ্ট
    ├── 📂 fonts/                  <-- লোকাল আইকন ফন্ট (Brix Icon, Fontello) ও Inter
    └── 📂 images/                 <-- লোগো, হাই-ফাইভ আইকন, অ্যাভাটার
        ├── 📂 badges/             <-- ৪টি ফ্লোটিং স্কিল ব্যাজ (UX, Icons, Branding, Web)
        └── 📂 projects/           <-- মার্কিউতে প্রদর্শিত ৭টি প্রজেক্ট থাম্বনেইল
```

---

## ✨ কী কী ফিচার যুক্ত করা হয়েছে (Included Features)

1. **Floating Header & Navbar**:
   - ড্রপশ্যাডো ও ব্লার সম্বলিত ফ্লোটিং হেডার।
   - ব্র্যান্ড লোগো (`assets/images/logo.png`)।
   - **"Go to shop"** ডিরেক্ট বাটন (গাঢ় ক্যাপসুল ব্যাকগ্রাউন্ড ও গোল্ডেন সার্কেলে ডায়াগোনাল ↗ তীরচিহ্ন সহ), যা সরাসরি শপ সেকশনে নিয়ে যায়।
   - আসল সাইটের ইন্টারঅ্যাক্টিভ ডার্ক হ্যামবার্গার মেনু বাটন (`hamburger-menu v2`)।
   - ডেস্কটপে সরাসরি সেন্টারে নেভিগেশন লিঙ্ক (Home, About me, Work, Contact)।

2. **Full Page Menu Drawer**:
   - মেনু ওপেন/ক্লোজ অ্যানিমেশন (ক্লিক বা কিবোর্ড `ESC` প্রেস করলে বন্ধ হবে)।
   - হোম, অ্যাবাউট, ওয়ার্ক, শপ, ব্লগ এবং সার্ভিস নেভিগেশন লিঙ্ক।
   - সোশ্যাল মিডিয়া লিঙ্ক সেকশন।

3. **Hero Main Section**:
   - হাতের ওয়েভিং অ্যানিমেশন (👋 `high-five.png`)।
   - আধুনিক টাইপোগ্রাফি: *"Hi, I’m John Carter"* & *"Product Designer from New York"*।
   - প্রোফাইল অ্যাভাটার কার্ড এবং এতে গ্লোয়িং পালসিং স্ট্যাটাস পিল।
   - অ্যাভাটারের চারপাশে ভাসমান ৪টি অ্যানিমেটেড স্কিল ব্যাজ (UX Design, Icons, Branding, Web Design)।

4. **Infinite Project Showcase Marquee**:
   - মসৃণ অনুভূমিক (Horizontal) ইনফিনিট স্ক্রলিং মার্কিউ স্লাইডার।
   - ৭টি আসল প্রজেক্ট কার্ড ছবি।
   - কার্ডের উপর মাউস হোভার করলে জুম ও সফট গ্লো ইফেক্ট এবং মার্কিউ পজ (Pause) হয়।
   - দুই পাশে নরম গ্রেডিয়েন্ট ফেড মাস্ক।

5. **About Me Section**:
   - রোটেটেড পোট্রেট ফটো কার্ড (`assets/images/about-me.jpg`) ও ফ্রেম ডট।
   - সাব-হেডিং এবং নিউ ইয়র্ক ব্যাজ (`ny-badge.png`)।
   - ডেসক্রিপশন প্যারাগ্রাফ এবং ৪টি চেকমার্ক ফিচার পয়েন্ট (Graphic design, 3D modeling, Webflow development, Market research) সহ আইকন (`check-icon.png`)।
   - কল-টু-অ্যাকশন (CTA) বাটন: *"Let’s talk"* এবং *"More about me"*।

6. **My Projects Section (৩য় সেকশন - পারফেক্ট ওভারল্যাপিং ও ৩ডি স্ট্যাকিং)**:
   - সেকশন হেডার: *"My projects"* টাইটেল এবং *"Browse all projects"* বাটন।
   - **স্টিকি ওভারল্যাপিং কার্ড ডেক (Sticky Overlapping Stack)**:
     - ফ্লোটিং ন্যাভবারের নিচে সুন্দর স্পেসিং বজায় রেখে প্রথম কার্ড `top: 105px` এ স্টিকি হয়।
     - পরের কার্ডগুলো ৪০px ধাপে ধাপে ওভারল্যাপ করে (`top: 145px` এবং `top: 185px`), ফলে প্রতিটি কার্ডের হেডার সুন্দর ট্যাবের মতো দৃশ্যমান থাকে।
     - রিয়ালিস্টিক ৩ডি শ্যাডো: পরের কার্ডগুলো তাদের নিচের কার্ডের ওপর সফট শ্যাডো তৈরি করে।
     - স্ক্রল করার সাথে সাথে নিচের কার্ডগুলো হালকা জুম-আউট (`scale: 0.95`) ও ডিম হয়ে ৩ডি ডেপথ তৈরি করে।
   - ৩টি প্রিমিয়াম প্রজেক্ট কার্ড:
     - **Invstor X** (Fintech & SaaS • `Q4 2025`): থাম্বনেইল ছবি (`assets/images/projects/invstor-x.jpg`), বিবরণী ও *"View project"* লিঙ্ক।
     - **Creativflow X** (Creative Tool • `Q3 2025`): থাম্বনেইল ছবি (`assets/images/projects/creativflow-x.jpg`), বিবরণী ও লিঙ্ক।
     - **Bnkify X** (Mobile Banking • `Q2 2025`): থাম্বনেইল ছবি (`assets/images/projects/bnkify-x.jpg`), বিবরণী ও লিঙ্ক।
   - প্রিমিয়াম হোভার ইফেক্ট (কার্ড লিফট, সফট শ্যাডো, কর্নারে সার্কুলার অ্যারো বাটন রিভিল এবং ইমেজ জুম)।

7. **Social Links Bar**:
   - Dribbble, Behance, LinkedIn এবং Medium লিঙ্ক।

8. **সম্পূর্ণ অফলাইন সাপোর্ট (100% Offline Capable)**:
   - কোনো এক্সটার্নাল সিডিএন (CDN) এর উপর নির্ভরশীল নয়। ইন্টারনেট ছাড়াও পেজটি যেকোনো ব্রাউজারে পুরোপুরি ওপেন হবে এবং সব অ্যানিমেশন কাজ করবে।

---

## 🚀 কীভাবে চালু করবেন (How to Run & Preview)

### উপায় ১: সরাসরি ব্রাউজারে ওপেন করুন
- `g:\Development\SPW\index.html` ফাইলটিতে ডাবল-ক্লিক করুন। যেকোনো ব্রাউজারে (Chrome, Edge, Firefox) এটি সরাসরি ওপেন হবে।

### উপায় ২: লোকাল সার্ভার (VS Code Live Server অথবা Python)
টার্মিনালে এই কমান্ডটি চালিয়ে প্রিভিউ দেখতে পারেন:
```bash
cd g:\Development\SPW
python -m http.server 8080
```
এরপর ব্রাউজারে যান: `http://localhost:8080`

---

## 🎨 কীভাবে কাস্টমাইজ করবেন (How to Customize)

- **নাম ও ডেসিগনেশন পরিবর্তন**: `index.html` ফাইলে `Hi, I’m John Carter` এবং `Product Designer from New York` লেখা পরিবর্তন করুন।
- **ছবি পরিবর্তন**:
  - আপনার নিজের প্রোফাইল ছবি দিতে `assets/images/avatar.png` রিপ্লেস করুন।
  - আপনার লোগো দিতে `assets/images/logo.png` রিপ্লেস করুন।
  - প্রজেক্ট ছবি পরিবর্তন করতে `assets/images/projects/` ফোল্ডারের ছবিগুলো রিপ্লেস করুন।
