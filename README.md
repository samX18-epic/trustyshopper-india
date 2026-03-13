# Smart BIS Verification System

A prototype web platform that helps detect **counterfeit electronic products** and enforce **Bureau of Indian Standards (BIS) compliance**.

Consumers can verify whether an electronic product is genuine by scanning a **QR code**, while regulators and manufacturers can monitor product authenticity through a centralized verification system.

This project was developed as part of the **Code for Consumer Rights Ideathon** to address safety risks caused by counterfeit electronics in India.

---

# Problem

Counterfeit electronics such as **mobile chargers, lithium batteries, and duplicate components** are widely sold in markets across India.

These products often:

- Violate BIS safety standards
- Cause electrical hazards or device damage
- Mislead consumers with fake branding or certification numbers

Consumers currently lack an **easy way to verify product authenticity before use**.

---

# Solution

The **Smart BIS Verification System** provides a digital verification platform.

Each certified product contains a **unique QR code** linked to a product identity stored in a secure database.

Consumers can scan the QR code to instantly verify:

- Manufacturer information
- BIS certification status
- Product model
- Manufacturing batch

The system also detects **counterfeit activity** when duplicated QR codes or invalid certifications are detected.

---

# Key Features

### Product Verification
Consumers scan a product QR code to check authenticity.

### BIS Certification Check
The system validates whether the product complies with BIS standards.

### Counterfeit Detection
The platform detects suspicious products based on:

- QR code duplication
- Invalid BIS certificate
- Batch mismatch

### Consumer Reporting
Users can report suspected counterfeit products to regulators.

### Regulatory Monitoring
Authorities can monitor counterfeit activity using analytics dashboards.

---

# Technology Stack

This web application is built using modern frontend technologies.

| Layer | Technology |
|------|------------|
| Frontend | React |
| Build Tool | Vite |
| Language | TypeScript |
| UI Framework | shadcn-ui |
| Styling | Tailwind CSS |

---

# Project Structure

project-root
│
├── src
│ ├── components
│ ├── pages
│ ├── hooks
│ ├── services
│ └── App.tsx
│
├── public
│
├── package.json
└── README.md


---

# Getting Started

## 1 Clone the Repository


git clone <YOUR_GIT_URL>


---

## 2 Navigate to the Project Directory


cd <YOUR_PROJECT_NAME>


---

## 3 Install Dependencies


npm install


---

## 4 Run the Development Server


npm run dev


The app will start with live reloading and instant preview.

---

# Using the Web Application

Typical user flow:

1. Consumer opens the application.
2. User scans or enters a **product QR code**.
3. The system verifies the product in the database.
4. The application displays:

✔ Genuine Product  
or  
⚠ Counterfeit Alert

Users may also report suspicious products.

---

# BIS Standards Alignment

The system supports verification of products compliant with BIS standards such as:

| Product | Indian Standard | International Equivalent |
|------|------|------|
| IT Equipment Safety | IS 13252 | IEC 60950 |
| Lithium-ion Batteries | IS 16046 | IEC 62133 |
| Mobile Chargers | IS 13252 | IEC 62368 |

---

# Local Impact (Assam & Northeast India)

The Northeast region faces unique supply chain challenges:

- Informal electronics markets
- Counterfeit imports
- Limited consumer awareness of certification standards

The Smart BIS Verification System helps by:

- Allowing instant product authenticity checks
- Improving consumer awareness
- Helping regulators track counterfeit supply chains

---

# Future Improvements

Possible enhancements include:

- AI-based counterfeit packaging detection
- Blockchain-based product certificates
- Offline verification support for rural areas
- Integration with BIS national compliance systems

---

# Ideathon Context

This project was developed for the **Code for Consumer Rights Ideathon**, which challenges participants to design technology-driven solutions to enforce consumer protection regulations.

The system aligns with the goals of:

- Consumer safety
- Regulatory enforcement
- Digital verification of product standards

---

# License

This project is developed as a prototype for educational and research purposes.
