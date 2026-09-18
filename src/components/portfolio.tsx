import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowUp,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Download,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  ReceiptIndianRupee,
  Send,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { navigation, portfolio } from "@/data/portfolio";

const strengthIcons = [CheckCircle2, MessageSquareText, FileCheck2, Users, ShieldCheck];
const skillIcons = [Calculator, ReceiptIndianRupee, FileCheck2, Landmark];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="section-kicker">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function Header({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-nav">
        <a href="#top" className="brand" aria-label="Varshini P, back to top" onClick={() => setOpen(false)}>
          <span>VP</span> Varshini P
        </a>
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild className="desktop-hire">
          <a href={`mailto:${portfolio.email}`}>Hire Me</a>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="mobile-trigger"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-nav">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button asChild>
            <a href={`mailto:${portfolio.email}`} onClick={() => setOpen(false)}>Hire Me</a>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}

function ContactLink({ href, icon, children, external = false }: { href: string; icon: ReactNode; children: ReactNode; external?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="contact-link">
      {icon}<span>{children}</span>{external ? <ExternalLink className="external-icon" aria-hidden="true" /> : null}
    </a>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());
    const nextErrors: Record<string, string> = {};
    if (!String(values["name"] ?? "").trim()) nextErrors["name"] = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(values["email"] ?? ""))) nextErrors["email"] = "Please enter a valid email address.";
    if (!String(values["subject"] ?? "").trim()) nextErrors["subject"] = "Please enter a subject.";
    if (String(values["message"] ?? "").trim().length < 10) nextErrors["message"] = "Please enter a message of at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setNotice("Please review the highlighted fields.");
      return;
    }
    const subject = encodeURIComponent(String(values["subject"]));
    const body = encodeURIComponent(`Name: ${values["name"]}\nEmail: ${values["email"]}\n\n${values["message"]}`);
    setNotice("Your email application is opening. Please send the prepared message from there.");
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  }

  const fieldError = (name: string) => errors[name] ? <p className="field-error" id={`${name}-error`}>{errors[name]}</p> : null;

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>Name<Input name="name" autoComplete="name" aria-invalid={Boolean(errors["name"])} aria-describedby={errors["name"] ? "name-error" : undefined} placeholder="Your name" />{fieldError("name")}</label>
        <label>Email<Input name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors["email"])} aria-describedby={errors["email"] ? "email-error" : undefined} placeholder="you@example.com" />{fieldError("email")}</label>
      </div>
      <label>Subject<Input name="subject" aria-invalid={Boolean(errors["subject"])} aria-describedby={errors["subject"] ? "subject-error" : undefined} placeholder="Role or opportunity" />{fieldError("subject")}</label>
      <label>Message<Textarea name="message" rows={5} aria-invalid={Boolean(errors["message"])} aria-describedby={errors["message"] ? "message-error" : undefined} placeholder="Tell me about the opportunity" />{fieldError("message")}</label>
      <Button type="submit" size="lg"><Send />Prepare Email</Button>
      <p className="form-note" aria-live="polite">{notice || "Submitting prepares an email in your email application; no message is sent automatically."}</p>
    </form>
  );
}

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.3] });
    navigation.forEach(({ id }) => { const section = document.getElementById(id); if (section) sectionObserver.observe(section); });
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { revealObserver.disconnect(); sectionObserver.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span />{portfolio.eyebrow}</p>
              <h1 id="hero-title">{portfolio.name}</h1>
              <p className="tagline">{portfolio.tagline}</p>
              <p className="hero-intro">{portfolio.intro}</p>
              <p className="location"><MapPin aria-hidden="true" />{portfolio.location}</p>
              <div className="hero-actions">
                <Button asChild size="lg"><a href={`mailto:${portfolio.email}`}><Mail />Hire Me</a></Button>
                <Button asChild variant="outline" size="lg"><a href="/CV_VARSHINI.pdf" download><Download />Download Resume</a></Button>
              </div>
              <div className="hero-contacts" aria-label="Contact links">
                <ContactLink href={`tel:${portfolio.phone}`} icon={<Phone aria-hidden="true" />}>{portfolio.phone}</ContactLink>
                <ContactLink href={`mailto:${portfolio.email}`} icon={<Mail aria-hidden="true" />}>{portfolio.email}</ContactLink>
                <ContactLink href={portfolio.linkedin} external icon={<Linkedin aria-hidden="true" />}>LinkedIn</ContactLink>
              </div>
            </div>
            <aside className="summary-card reveal" aria-label="Professional summary">
              <div className="summary-icon"><BriefcaseBusiness aria-hidden="true" /></div>
              <p className="summary-label">Professional snapshot</p>
              <h2>Practical finance and compliance experience</h2>
              <ul>{portfolio.summary.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section light-section">
          <div className="container">
            <SectionHeading eyebrow="About" title="Professional Profile" />
            <div className="about-layout">
              <p className="about-copy reveal">{portfolio.about}</p>
              <div className="strengths reveal"><h3>Core Strengths</h3><div className="strength-grid">{portfolio.strengths.map((strength, index) => { const Icon = strengthIcons[index] ?? CheckCircle2; return <div key={strength}><Icon aria-hidden="true" /><span>{strength}</span></div>; })}</div></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionHeading eyebrow="Experience" title="Professional Experience" />
            <article className="experience-card reveal">
              <div className="experience-marker"><BriefcaseBusiness aria-hidden="true" /></div>
              <div className="experience-top"><div><p className="role">{portfolio.experience.role}</p><h3>{portfolio.experience.company}</h3></div><p className="period">{portfolio.experience.period}</p></div>
              <ul>{portfolio.experience.responsibilities.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" /><span>{item}</span></li>)}</ul>
              <div className="keyword-row" aria-label="Key experience areas">{["IRAC norms", "NPA classification", "ITR filing", "GST compliance", "Statutory audit", "Form 3CD"].map((term) => <span key={term}>{term}</span>)}</div>
            </article>
          </div>
        </section>

        <section id="skills" className="section light-section">
          <div className="container">
            <SectionHeading eyebrow="Capabilities" title="Technical Skills" />
            <div className="card-grid skills-grid">{portfolio.skills.map((group, index) => { const Icon = skillIcons[index] ?? Calculator; return <article className="skill-card reveal" key={group.title}><Icon aria-hidden="true" /><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}</div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionHeading eyebrow="Qualifications" title="Education" />
            <div className="timeline">{portfolio.education.map((item) => <article className="timeline-item reveal" key={item.title}><div className="timeline-dot"><GraduationCap aria-hidden="true" /></div><div>{"period" in item ? <p className="timeline-period">{item.period}</p> : null}<h3>{item.title}</h3>{"institution" in item ? <p className="institution">{item.institution}</p> : null}<p className="education-detail">{item.detail}</p></div></article>)}</div>
          </div>
        </section>

        <section id="projects" className="section light-section">
          <div className="container">
            <SectionHeading eyebrow="Research" title="Academic Project" />
            <article className="project-card reveal"><div className="project-icon"><BookOpen aria-hidden="true" /></div><div><h3>{portfolio.project.title}</h3><p>{portfolio.project.description}</p><div className="keyword-row">{portfolio.project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <SectionHeading eyebrow="Development" title="Certifications & Professional Training" />
            <div className="card-grid certification-grid">{portfolio.certifications.map((item) => <article className="cert-card reveal" key={item}><BadgeCheck aria-hidden="true" /><h3>{item}</h3></article>)}</div>
            <div className="languages reveal"><h2>Languages</h2><div>{portfolio.languages.map((language) => <span key={language}>{language}</span>)}</div></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout">
            <div className="contact-copy reveal"><p className="section-kicker">Contact</p><h2>Let’s Connect</h2><p>I am open to opportunities in audit, accounting, taxation, GST compliance, and corporate finance. Please feel free to contact me to discuss a suitable role.</p><div className="contact-list"><ContactLink href={`https://maps.google.com/?q=${encodeURIComponent(portfolio.location)}`} external icon={<MapPin aria-hidden="true" />}>{portfolio.location}</ContactLink><ContactLink href={`tel:${portfolio.phone}`} icon={<Phone aria-hidden="true" />}>{portfolio.phone}</ContactLink><ContactLink href={`mailto:${portfolio.email}`} icon={<Mail aria-hidden="true" />}>{portfolio.email}</ContactLink><ContactLink href={portfolio.linkedin} external icon={<Linkedin aria-hidden="true" />}>LinkedIn profile</ContactLink></div><div className="contact-actions"><Button asChild size="lg"><a href={`mailto:${portfolio.email}`}><Mail />Hire Me</a></Button><Button asChild variant="outline" size="lg"><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn</a></Button></div></div>
            <div className="reveal"><ContactForm /></div>
          </div>
        </section>
      </main>
      <footer><div className="container footer-inner"><p>© {new Date().getFullYear()} Varshini P. All rights reserved.</p><nav aria-label="Footer navigation"><a href={`mailto:${portfolio.email}`}>Email</a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="#top">Back to Top</a></nav></div></footer>
      {showTop ? <Button type="button" size="icon" className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp /></Button> : null}
    </>
  );
}