# Varshini's Portfolio

Create a polished, modern, mobile-responsive personal portfolio website for Varshini P, a Chartered Accountancy Intermediate candidate in India.

Build the website using React, TypeScript, Tailwind CSS, and reusable components. The finished website must feel professional, credible, minimal, and suitable for finance, accounting, audit, taxation, and compliance roles.

DESIGN DIRECTION

- Use a clean corporate finance/accounting aesthetic.
- Primary colors:
  - Navy: #0B1F3A
  - Professional blue: #1D4ED8
  - White: #FFFFFF
  - Light background: #F6F8FB
  - Muted text: #64748B
- Use a modern sans-serif font such as Inter.
- Use generous white space, clear typography, subtle borders, restrained shadows, and rounded corners.
- Use subtle line icons from Lucide React for audit, tax, GST, accounting, education, projects, and contact information.
- Do not use loud gradients, glassmorphism, excessive animation, stock photos, illustrations, skill progress bars, or decorative charts.
- Do not invent a profile photo, employment information, achievements, statistics, qualifications, or contact details.
- Make the design feel mature, trustworthy, and appropriate for recruiters, accounting firms, banks, and corporate finance teams.
- Add subtle reveal-on-scroll animations while respecting reduced-motion preferences.
- Ensure excellent contrast, keyboard navigation, semantic HTML, visible focus states, and accessible labels.

WEBSITE STRUCTURE

Create a sticky top navigation bar containing:

- Varshini P as a compact text logo
- About
- Experience
- Skills
- Education
- Projects
- Contact
- A highlighted “Hire Me” button

On mobile, use an accessible hamburger menu that closes after selecting a link.

1. HERO SECTION

Create a clean two-column desktop layout that becomes a single-column mobile layout.

Main content:

Eyebrow:
“CA Intermediate Candidate”

Heading:
“Varshini P”

Professional tagline:
“Aspiring Chartered Accountant | Audit, Taxation & GST Compliance”

Introduction:
“CA Intermediate candidate with 3 years of articleship experience in statutory audit, bank audit, taxation, and GST compliance. Seeking an opportunity to apply analytical and accounting skills in a growth-oriented organization.”

Location:
“Kallakurichi, Tamil Nadu, India - 606207”

Add two prominent CTA buttons:

- “Hire Me” — opens an email to varshup002@gmail.com
- “Download Resume” — downloads /CV_VARSHINI.pdf using the HTML download attribute

Add compact contact links with icons:

- Phone: 9345275021 using tel:9345275021
- Email: varshup002@gmail.com using mailto:varshup002@gmail.com
- LinkedIn: https://www.linkedin.com/in/varshini-p-35821622a/ — open in a new tab safely

Add a tasteful professional summary card on the right containing:

- 3+ Years Articleship Experience
- Bank & Statutory Audit
- Income Tax & GST Compliance
- Financial Analysis

Do not present these as exaggerated animated counters.

2. ABOUT SECTION

Heading:
“Professional Profile”

Use this copy:

“I am a CA Intermediate candidate with practical articleship experience across bank audits, statutory audits, income tax compliance, GST accounting, and audit documentation. I have worked with diverse clients and developed a detail-oriented approach to financial reporting, compliance, and audit execution.”

Add a “Core Strengths” grid with simple icons:

- Analytical and detail-oriented
- Client communication
- Time management during audits
- Team collaboration
- Compliance handling

3. EXPERIENCE SECTION

Heading:
“Professional Experience”

Display this as a polished vertical timeline or structured experience card.

Company:
“V R Nagarajan & Co”

Role:
“Article Assistant”

Period:
“September 2022 - October 2025”

Responsibilities:

- Conducted Bank Statutory Audits and Credit Audits for various branches; verified IRAC norms, NPA classification, and security documentation.
- Independently handled income tax computations and filed Income Tax Returns using Winman software for individuals, firms, and small companies.
- Managed accounting entries and reconciled data for GST filing through the official GST portal, ensuring timely compliance for diverse clients.
- Performed statutory audits for non-corporate entities, focusing on internal controls and financial statement accuracy.
- Prepared detailed audit workpapers and assisted in drafting tax audit reports, including Form 3CD.

Emphasize relevant terms such as IRAC norms, NPA classification, ITR filing, GST compliance, statutory audit, and Form 3CD without making the section visually crowded.

4. SKILLS SECTION

Heading:
“Technical Skills”

Create accessible grouped skill cards. Do not use percentage ratings or progress bars.

Accounting Software:
- Tally Prime
- Tally ERP 9

Tax and Audit:
- Winman - Income Tax and Audit modules
- Income Tax Portal
- TRACES
- Tax Computation
- Audit Documentation

GST and Compliance:
- GST Portal
- GST Accounting
- GST Reconciliation
- Compliance Handling

Productivity and Analysis:
- MS Excel
- VLOOKUP
- Pivot Tables
- Financial Data Analysis
- MS Word

5. EDUCATION SECTION

Heading:
“Education”

Present the information in a clean chronological timeline:

Chartered Accountancy - Intermediate
Institute of Chartered Accountants of India (ICAI)
Status: CA Intermediate Candidate

B.Com Professional Accounting
Avinashilingam Institute of Home Science and Higher Education for Women, Coimbatore
2019 - 2022
Score: 85.30%

Higher Secondary Certificate (HSC)
2019
Score: 95%

Secondary School Leaving Certificate (SSLC)
2017
Score: 97.6%

Do not describe the CA qualification as completed.

6. PROJECTS SECTION

Heading:
“Academic Project”

Create one professional project card:

Title:
“Consumer Research Project - Consumer Perception Towards Lakme Skincare Products”

Description:
“Conducted a survey-based consumer behavior study to evaluate customer perceptions, preferences, and buying patterns related to Lakme skincare products.”

Add relevant keyword tags:

- Consumer Research
- Survey Analysis
- Data Interpretation
- Buying Behaviour

Use the Indian English spelling “behaviour” where appropriate.

7. CERTIFICATIONS SECTION

Heading:
“Certifications & Professional Training”

Display clean certification cards for:

- ICITSS - ITT & Orientation Programme, ICAI
- Advanced Excel Workshop - Accent Techno Soft
- Web Designing Certificate
- Yoga for Young Empowerment

Do not add certificate dates or issuing organizations that were not provided.

8. LANGUAGES SECTION

Heading:
“Languages”

Display:

- Tamil
- English

Do not assign proficiency levels because none were provided.

9. CONTACT SECTION

Use a navy background with white text and a clean contact card.

Heading:
“Let’s Connect”

Supporting copy:
“I am open to opportunities in audit, accounting, taxation, GST compliance, and corporate finance. Please feel free to contact me to discuss a suitable role.”

Contact details:

- Location: Kallakurichi, Tamil Nadu, India - 606207
- Phone: 9345275021
- Email: varshup002@gmail.com
- LinkedIn: https://www.linkedin.com/in/varshini-p-35821622a/

Add:

- “Hire Me” mailto button
- LinkedIn button opening in a new tab
- A simple contact form with Name, Email, Subject, and Message
- Client-side validation
- A clearly documented placeholder submission handler if no backend is configured
- Do not claim the form successfully sends messages unless it is connected to a real service

10. FOOTER

Include:

“© [current year] Varshini P. All rights reserved.”

Also include compact links for Email, LinkedIn, and Back to Top.

FUNCTIONAL REQUIREMENTS

- Make the entire website responsive across mobile, tablet, laptop, and wide desktop screens.
- Use smooth scrolling with correct scroll offsets for the sticky navigation.
- Highlight the active navigation section while scrolling.
- Ensure phone, email, LinkedIn, and CTA links work correctly.
- Place the supplied resume at public/CV_VARSHINI.pdf and connect it to the Download Resume button.
- If the PDF is not yet present, preserve the button and clearly note where the file must be uploaded.
- Add a subtle floating Back to Top button after the user scrolls down.
- Use reusable components and keep content in a structured data object so it is easy to update.
- Avoid unnecessary dependencies.
- Ensure there are no TypeScript errors, console errors, broken links, missing icons, or horizontal overflow.

SEO AND ATS REQUIREMENTS

- Use semantic HTML including header, nav, main, section, article, and footer.
- Keep all professional information as selectable HTML text rather than placing it inside images.
- Use exactly one H1 and a logical heading hierarchy.
- Add an SEO title:
  “Varshini P | CA Intermediate Candidate - Audit, Taxation & GST”
- Add a meta description:
  “Portfolio of Varshini P, a CA Intermediate candidate with articleship experience in bank audit, statutory audit, income tax, GST compliance, and financial analysis.”
- Add Open Graph metadata and a sensible text-based fallback.
- Include Person structured data in JSON-LD using only the supplied information.
- Naturally incorporate recruiter-searchable keywords such as CA Intermediate, Article Assistant, Statutory Audit, Bank Audit, Credit Audit, IRAC, NPA Classification, Income Tax, ITR Filing, GST Compliance, Tally Prime, Winman, TRACES, Excel, and Form 3CD.
- Do not keyword-stuff or hide text.
- Use descriptive aria-labels and accessible icon treatment.
- Optimize for fast loading and a strong Lighthouse score.

FINAL QUALITY CHECK

Before finishing:

- Confirm that all supplied content is included and correctly spelled.
- Confirm that “varshup002@gmail.com” is displayed without an escape character.
- Confirm that the CA Intermediate qualification is not presented as completed.
- Confirm that the website does not contain fabricated information.
- Confirm that the design looks professional and finance-oriented.
- Confirm that the resume download, email, phone, LinkedIn, navigation, and mobile menu work correctly.
- Populate the website with the real content immediately; do not leave placeholder text.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ac00dac1-ce12-41ca-b5e4-e4aee3b418a0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
