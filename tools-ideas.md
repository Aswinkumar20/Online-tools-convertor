# 🧰 Tools Converter Website – Feature Modules & Tool List

This document outlines all frontend-only tools grouped into logical **feature modules** for your Angular project. These modules can guide your **folder structure**, **routing**, and **UI layout** (e.g. sidebar, tabs, dashboard).

---

## 📁 MODULE: Text Utilities

> Route: `/tools/text-utils`

- Text Case Converter
- Text to ASCII / ASCII to Text
- Remove Duplicate Lines
- Word & Character Counter
- Text Reverser / Palindrome Checker
- Base64 Encode / Decode
- Slug Generator
- Text Diff / Merge Tool
- Text File Viewer

---

## 📁 MODULE: JSON / Data Converters

> Route: `/tools/data-converters`

- JSON Formatter / Beautifier / Validator
- CSV to JSON / JSON to CSV Converter
- YAML to JSON / JSON to YAML Converter
- HTML Table to JSON Converter
- Markdown to HTML
- JSON Linter / Viewer
- Excel (XLSX) to JSON Converter

---

## 📁 MODULE: Number & Date Tools

> Route: `/tools/math-date-utils`

- Unit Converter (length, weight, temp, etc.)
- Number to Words Converter
- Percentage Calculator
- Age Calculator
- Date Difference Calculator
- Simple & Compound Interest Calculator
- BMI Calculator
- Loan / EMI Calculator
- Tip Calculator
- Currency Converter
- Fraction Calculator
- Date to Day of Week
- Zodiac Finder

---

## 📁 MODULE: PDF Tools

> Route: `/tools/pdf-tools`

### View PDFs
- PDF Viewer with Zoom, Search, Dark Mode

### Edit / Modify PDFs
- Merge PDFs
- Split PDFs
- Delete Pages
- Rotate Pages
- Reorder Pages
- Extract Pages
- Compress PDF (basic)

### Generate PDFs
- Create from HTML / Markdown
- Tables or Charts to PDF
- Resume / Invoice Generator
- Text to PDF
- Screenshot to PDF

### Annotate PDFs
- Add Text / Comments / Images / Shapes
- Highlight Text
- Add Signature (draw/upload)
- Fill PDF Form Fields

### PDF Utilities
- PDF Metadata Editor
- Add Watermark
- PDF to Base64 / Base64 to PDF
- Password Protection (basic)
- Flatten PDF Forms

---

## 📁 MODULE: Image & Color Tools

> Route: `/tools/image-color-tools`

- Image to Base64 / Base64 to Image
- Image Resizer
- Image Compressor
- Color Picker
- Hex to RGB / RGB to Hex
- Gradient Generator
- Palette Generator from Image
- Image to Text (OCR – Tesseract.js)
- Favicon Generator
- Drawing / Sketch Pad

---

## 📁 MODULE: File & Code Tools

> Route: `/tools/code-file-tools`

- HTML Minifier / Beautifier
- CSS Minifier / Beautifier
- JavaScript Minifier / Beautifier
- HTML Entity Encoder / Decoder
- Clipboard Viewer
- Clipboard History (localStorage)
- File Metadata Viewer (images, PDFs, etc.)
- Markdown to PDF
- HTML Table Exporter

---

## 📁 MODULE: Design & Web Dev Tools

> Route: `/tools/dev-design-tools`

- CSS Gradient Generator
- Box Shadow Generator
- Border Radius Preview
- Pixel to REM / EM Converter
- Responsive Breakpoint Tester
- Viewport Size Detector
- Postman-lite (REST API client)
- CORS Test Tool
- HTTP Header Decoder
- WebSocket Client
- HTTP Request Generator
- Mock JSON Generator (faker.js)

---

## 📁 MODULE: Validation & Testing Tools

> Route: `/tools/testing-tools`

- JSON Schema Validator
- Password Rule Validator
- Email / URL / IP Format Checker
- User-Agent Parser
- Credit Card Validator (Luhn's Algo)
- JWT Decoder

---

## 📁 MODULE: Security & Crypto Tools

> Route: `/tools/security-tools`

- Hash Generator (MD5, SHA1, SHA256)
- UUID Generator
- Password Strength Checker
- Random Password Generator
- Text Encrypt / Decrypt (AES – CryptoJS)
- Secure Clipboard (Auto-clear)
- Private Notes in localStorage

---

## 📁 MODULE: Media & Audio Tools

> Route: `/tools/media-tools`

- Voice Recorder
- Audio Player with Waveform
- Audio Trimmer (Web Audio API)
- Video to GIF Converter (ffmpeg.wasm)
- Webcam Snapshot Tool

---

## 📁 MODULE: System / Browser Utilities

> Route: `/tools/browser-utils`

- Screen Resolution Info
- Battery Status Viewer
- Device Orientation Logger
- LocalStorage / SessionStorage Viewer
- Cookie Editor
- Network Speed Test (simple ping)

---

## 📁 MODULE: Fun & Productivity Tools

> Route: `/tools/fun-tools`

- QR Code Generator & Scanner
- Barcode Generator
- Stopwatch / Timer
- Random Number Generator
- Coin Toss / Dice Roller
- Lorem Ipsum Generator
- Timezone Converter
- Typing Speed Test
- Pomodoro Timer
- Flashcard / Quiz Generator
- Motivational Quote Generator

---

## 🔧 Angular Project Structure Tips

### Suggested Folder Setup:



<!-- src/app/tools/
├── text-utils/
├── data-converters/
├── math-date-utils/
├── pdf-tools/
├── image-color-tools/
├── code-file-tools/
├── dev-design-tools/
├── testing-tools/
├── security-tools/
├── media-tools/
├── browser-utils/
└── fun-tools/ -->