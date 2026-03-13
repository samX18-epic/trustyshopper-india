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
