import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Varshini P | CA Intermediate Candidate - Audit, Taxation & GST" },
      { name: "description", content: "Portfolio of Varshini P, a CA Intermediate candidate with articleship experience in bank audit, statutory audit, income tax, GST compliance, and financial analysis." },
      { property: "og:title", content: "Varshini P | CA Intermediate Candidate - Audit, Taxation & GST" },
      { property: "og:description", content: "Portfolio of Varshini P, a CA Intermediate candidate with articleship experience in bank audit, statutory audit, income tax, GST compliance, and financial analysis." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Varshini P", jobTitle: "CA Intermediate Candidate", address: { "@type": "PostalAddress", addressLocality: "Kallakurichi", addressRegion: "Tamil Nadu", postalCode: "606207", addressCountry: "IN" }, email: "mailto:varshup002@gmail.com", telephone: "9345275021", sameAs: ["https://www.linkedin.com/in/varshini-p-35821622a/"], alumniOf: [{ "@type": "CollegeOrUniversity", name: "Avinashilingam Institute of Home Science and Higher Education for Women" }, { "@type": "EducationalOrganization", name: "Institute of Chartered Accountants of India" }] }) }],
  }),
  component: PortfolioPage,
});
