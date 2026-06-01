import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { BLOG_POSTS } from "@/data/blog";

const TG_LINK = "https://t.me/find_yourself_in_yourse1f";

const NAV_ITEMS = [
  { label: "О проекте", href: "/#about" },
  { label: "Практики", href: "/#practices" },
  { label: "Сообщество", href: "/#community" },
  { label: "Блог", href: "/blog" },
  { label: "Поддержка", href: "/#support" },
  { label: "Контакты", href: "/#contacts" },
];

const TAG_COLORS: Record<string, string> = {
  "Практика": "#8FA880",
  "Психология": "#C9A0A0",
  "Сообщество": "#C4785A",
  "О проекте": "#D4906F",
};

export default function BlogList() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="min-h-screen" style={{ background: "#FBF7EE", color: "#3A2D24" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(251,247,238,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(196,120,90,0.1)" }}
      >
        <Link to="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "Cormorant, serif", fontSize: "1.5rem", fontWeight: 500, color: "#C4785A" }}>НайТи</span>
          <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", color: "#8FA880", letterSpacing: "0.12em", textTransform: "uppercase", paddingTop: "4px" }}>себя в себе</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="nav-link text-sm">{item.label}</a>
          ))}
        </div>
        <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block btn-terra text-sm" style={{ textDecoration: "none" }}>
          Записаться
        </a>
      </nav>

      {/* HEADER */}
      <section className="section-padding" style={{ paddingTop: "120px", paddingBottom: "48px" }}>
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8FA880" }}>Блог</p>
          <h1 className="section-title mb-4">Статьи и истории</h1>
          <p className="text-base max-w-xl" style={{ color: "#5A4535" }}>
            О самопознании, психологии, сообществе и практиках — честно и без лишних слов
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 md:px-12 lg:px-20 pb-8">
        <div className="container mx-auto max-w-5xl">
          <Link
            to={`/blog/${featured.slug}`}
            className="block warm-card p-8 md:p-12 group"
            style={{ textDecoration: "none", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(196,120,90,0.12)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = ""; }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: `${TAG_COLORS[featured.tag] ?? "#C4785A"}18`, color: TAG_COLORS[featured.tag] ?? "#C4785A" }}
              >
                {featured.tag}
              </span>
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: "rgba(196,120,90,0.08)", color: "#9A8878" }}
              >
                ✦ Главное
              </span>
            </div>
            <h2
              className="mb-4"
              style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#3A2D24", lineHeight: 1.2 }}
            >
              {featured.title}
            </h2>
            <p className="text-base mb-6 max-w-2xl" style={{ color: "#5A4535", lineHeight: 1.75 }}>
              {featured.lead}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs" style={{ color: "#9A8878" }}>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} чтения</span>
              </div>
              <span className="text-sm font-medium flex items-center gap-1" style={{ color: "#C4785A" }}>
                Читать <Icon name="ArrowRight" size={14} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* REST */}
      <section className="section-padding" style={{ paddingTop: "24px" }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="warm-card p-7 block"
                style={{ textDecoration: "none", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(196,120,90,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = ""; }}
              >
                <span
                  className="inline-block text-xs px-3 py-1 rounded-full mb-4"
                  style={{ background: `${TAG_COLORS[post.tag] ?? "#C4785A"}18`, color: TAG_COLORS[post.tag] ?? "#C4785A" }}
                >
                  {post.tag}
                </span>
                <h3
                  className="mb-3 leading-snug"
                  style={{ fontFamily: "Cormorant, serif", fontSize: "1.25rem", color: "#3A2D24" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6A5545" }}>
                  {post.lead.slice(0, 100)}…
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#9A8878" }}>{post.date} · {post.readTime}</span>
                  <Icon name="ArrowRight" size={14} style={{ color: "#C4785A" }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div
            className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ background: "linear-gradient(135deg, rgba(196,120,90,0.1) 0%, rgba(143,168,128,0.1) 100%)", border: "1px solid rgba(196,120,90,0.15)" }}
          >
            <div>
              <h3 style={{ fontFamily: "Cormorant, serif", fontSize: "1.8rem", color: "#3A2D24" }} className="mb-2">
                Хотите работать с собой глубже?
              </h3>
              <p style={{ color: "#6A5545" }}>Наши специалисты помогут найти свой путь — в личной консультации</p>
            </div>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terra flex-shrink-0 inline-flex items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-12" style={{ borderTop: "1px solid rgba(196,120,90,0.15)", background: "rgba(245,237,216,0.5)" }}>
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span style={{ fontFamily: "Cormorant, serif", fontSize: "1.3rem", color: "#C4785A" }}>НайТи</span>
            <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", color: "#8FA880", marginLeft: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>себя в себе</span>
          </div>
          <Link to="/" style={{ color: "#9A8878", textDecoration: "none", fontSize: "0.8rem" }}>← На главную</Link>
          <p className="text-xs" style={{ color: "#9A8878" }}>© 2026 НайТи себя в себе</p>
        </div>
      </footer>

    </div>
  );
}
