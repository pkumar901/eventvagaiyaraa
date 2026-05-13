import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star, Menu, X, Calendar, Users, MapPin, Trophy,
  Briefcase, Heart, PartyPopper, Music, Building2, ClipboardCheck,
  Quote, Phone, Mail, MapPin as Pin, Facebook, Instagram, Linkedin, Youtube, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-event.jpg";
import aboutImg from "@/assets/about-event.jpg";
import workCorporate from "@/assets/work-corporate.jpg";
import workWedding from "@/assets/work-wedding.jpg";
import workConcert from "@/assets/work-concert.jpg";
import workOutdoor from "@/assets/work-outdoor.jpg";
import workExhibition from "@/assets/work-exhibition.jpg";
import workGala from "@/assets/work-gala.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({ component: Index });

const navLinks = ["Home", "About Us", "Services", "Our Work", "Clients", "Testimonials", "Contact"];

const services = [
  { icon: Briefcase, title: "Corporate Events", desc: "Conferences, Seminars, Product Launches & More." },
  { icon: Heart, title: "Weddings", desc: "Dream Weddings crafted with elegance and perfection." },
  { icon: PartyPopper, title: "Social Events", desc: "Birthday Parties, Anniversaries, Private Parties & More." },
  { icon: Music, title: "Entertainment", desc: "Artist Management, Live Shows, Celebrity Appearances." },
  { icon: Building2, title: "Exhibitions", desc: "Stall Design, Brand Activations, Trade Shows." },
  { icon: ClipboardCheck, title: "End-to-End Planning", desc: "Concept, Planning, Execution & On-site Management." },
];

const stats = [
  { icon: Calendar, value: "350+", label: "Events" },
  { icon: Users, value: "250+", label: "Happy Clients" },
  { icon: MapPin, value: "15+", label: "Cities" },
  { icon: Trophy, value: "10+", label: "Awards" },
];

const works = [
  { img: workCorporate, label: "Corporate Event", cat: "corporate" },
  { img: workWedding, label: "Tamil Wedding", cat: "weddings" },
  { img: workConcert, label: "Live Concert", cat: "social" },
  { img: workOutdoor, label: "Outdoor Event", cat: "social" },
  { img: workExhibition, label: "Exhibition Stall", cat: "exhibitions" },
  { img: workGala, label: "Gala Dinner", cat: "corporate" },
];

const filters = ["All", "Corporate", "Weddings", "Social Events", "Exhibitions"];

const clients = ["Google", "TATA", "Microsoft", "SAMSUNG", "adidas", "Coca-Cola"];

const testimonials = [
  { img: t1, name: "Karthik Subramanian", role: "Marketing Head, Pricol", text: "Event Vagaiyaraa made our corporate launch in Coimbatore a huge success. Professionalism and attention to detail are impeccable." },
  { img: t2, name: "Priya & Arjun", role: "Wedding Clients", text: "Our wedding was nothing short of a fairy tale! Thank you Event Vagaiyaraa team for making our special day unforgettable." },
  { img: t3, name: "Lakshmi Narayanan", role: "Brand Manager, KG Hospitals", text: "Creative, reliable, and extremely well-organized. Our brand activation in RS Puram was executed flawlessly." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col items-center leading-none">
      <Star className="h-5 w-5 fill-gold text-gold mb-1" />
      <div className={`font-display text-xl font-bold tracking-wide ${light ? "text-white" : "text-dark"}`}>EVENT VAGAIYARAA</div>
      <div className="mt-0.5 text-[9px] tracking-[0.3em] text-gold">EVENTS & EXPERIENCES</div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredWorks = activeFilter === "All"
    ? works
    : works.filter(w => w.cat === activeFilter.toLowerCase().replace(" events", ""));

  return (
    <div className="min-h-screen bg-background">
      {/* HERO with overlay nav */}
      <header className="relative isolate overflow-hidden bg-dark">
        <img src={heroImg} alt="Grand event stage" width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-dark/30" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo light />
          <div className="hidden lg:flex items-center gap-7 text-sm text-white/90">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-gold transition-colors">{l}</a>
            ))}
            <a href="#contact" className="ml-2 rounded bg-gold px-5 py-2 text-sm font-semibold text-gold-foreground hover:opacity-90 transition">GET A QUOTE</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden relative z-10 bg-dark/95 px-6 py-4 space-y-3 border-t border-white/10">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "")}`} onClick={() => setMenuOpen(false)}
                className="block text-white/90 hover:text-gold">{l}</a>
            ))}
          </div>
        )}

        <div id="home" className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-20 md:pt-32">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
            We Plan.<br />You Celebrate.
          </h1>
          <p className="font-script text-4xl md:text-5xl text-gold mt-4">We Make It Unforgettable!</p>
          <p className="mt-6 max-w-md text-white/80">
            From corporate events to dream weddings, we create experiences in Coimbatore that leave lasting memories.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#ourwork" className="rounded bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground hover:opacity-90 transition">OUR WORK</a>
            <a href="#contact" className="rounded border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">GET A QUOTE</a>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="aboutus" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={aboutImg} alt="Elegant Tamil wedding decor" width={800} height={900}
              loading="lazy" className="rounded shadow-card w-full" />
            <div className="absolute -bottom-6 -right-2 md:right-12 bg-dark text-dark-foreground rounded p-6 text-center shadow-gold">
              <div className="font-display text-4xl text-gold font-bold">10+</div>
              <div className="text-xs tracking-wider mt-1">Years of Experience</div>
            </div>
          </div>
          <div>
            <p className="section-label">ABOUT US ━━</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Turning Ideas Into<br />Extraordinary Events
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Event Vagaiyaraa is a full-service event management company based in Coimbatore, passionate
              about crafting unique and seamless experiences. We take care of every detail, so you can focus on making memories.
            </p>
            <button className="mt-7 bg-dark text-dark-foreground px-7 py-3 text-xs font-semibold tracking-widest hover:bg-gold hover:text-gold-foreground transition">READ MORE</button>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(s => (
                <div key={s.label} className="bg-card border rounded p-5 text-center shadow-card">
                  <s.icon className="mx-auto h-7 w-7 text-gold" />
                  <div className="font-display text-2xl font-bold mt-2">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-dark text-dark-foreground py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="section-label">OUR SERVICES</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">What We Do</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {services.map(s => (
              <div key={s.title} className="border border-white/10 rounded p-6 hover:border-gold transition group cursor-pointer">
                <s.icon className="mx-auto h-10 w-10 text-gold group-hover:scale-110 transition" />
                <h3 className="font-display text-base font-semibold mt-4">{s.title}</h3>
                <p className="text-xs text-white/60 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section id="ourwork" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="section-label">OUR WORK</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Some Of Our Best Work</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-xs font-semibold tracking-wider rounded transition ${
                  activeFilter === f ? "bg-gold text-gold-foreground" : "text-muted-foreground hover:text-foreground"
                }`}>{f.toUpperCase()}</button>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredWorks.map(w => (
              <div key={w.label} className="group relative overflow-hidden rounded shadow-card aspect-[4/3]">
                <img src={w.img} alt={w.label} width={800} height={600} loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-5">
                  <span className="text-white font-display text-lg">{w.label}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 border-2 border-gold text-gold px-8 py-3 text-xs font-semibold tracking-widest hover:bg-gold hover:text-gold-foreground transition rounded">VIEW MORE</button>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="bg-dark text-dark-foreground py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="section-label">OUR CLIENTS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Brands That Trust Us</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map(c => (
              <div key={c} className="bg-white/5 border border-white/10 rounded p-8 flex items-center justify-center hover:border-gold transition">
                <span className="font-display text-2xl text-white/80">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="section-label">TESTIMONIALS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">What Our Clients Say</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-card border rounded-lg p-6 text-left shadow-card">
                <Quote className="h-8 w-8 text-gold" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.img} alt={t.name} width={48} height={48} loading="lazy"
                    className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="bg-dark text-dark-foreground pt-16 pb-6">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-3xl font-bold">Let's Create Something</h3>
            <p className="font-script text-3xl text-gold mt-1">Amazing Together!</p>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Have an idea? We'd love to hear it and turn it into an unforgettable experience.
            </p>
            <a href="mailto:hello@eventvagaiyaraa.com" className="mt-6 inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3 text-xs font-semibold tracking-widest rounded hover:opacity-90 transition">
              GET IN TOUCH <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navLinks.map(l => (
                <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> +91 98765 43210</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> hello@eventvagaiyaraa.com</li>
              <li className="flex items-center gap-3"><Pin className="h-4 w-4 text-gold" /> Coimbatore, Tamil Nadu, India</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-white/50">
          <p>© 2026 Event Vagaiyaraa. All Rights Reserved.</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
}
