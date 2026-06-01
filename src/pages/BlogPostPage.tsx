import { useParams, Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { BLOG_POSTS } from "@/data/blog";

const TG_LINK = "https://t.me/find_yourself_in_yourse1f";

const TAG_COLORS: Record<string, string> = {
  "Практика": "#8FA880",
  "Психология": "#C9A0A0",
  "Сообщество": "#C4785A",
  "О проекте": "#D4906F",
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const related = post
    ? BLOG_POSTS.filter((p) => post.related.includes(p.slug))
    : [];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#FBF7EE" }}>
        <p style={{ fontFamily: "Cormorant, serif", fontSize: "2rem", color: "#3A2D24" }}>Статья не найдена</p>
        <Link to="/blog" className="btn-terra mt-6 inline-block" style={{ textDecoration: "none" }}>В блог</Link>
      </div>
    );
  }

  const tagColor = TAG_COLORS[post.tag] ?? "#C4785A";

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
        <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block btn-terra text-sm" style={{ textDecoration: "none" }}>
          Записаться
        </a>
      </nav>

      {/* ARTICLE HEADER */}
      <article style={{ paddingTop: "80px" }}>
        <div
          className="relative overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${tagColor}12 0%, transparent 60%)` }}
        >
          <div className="container mx-auto max-w-3xl px-6 md:px-12 py-16">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 mb-8 text-sm"
              style={{ color: "#8A7060", textDecoration: "none" }}
            >
              <Icon name="ArrowLeft" size={15} />
              Все статьи
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: `${tagColor}18`, color: tagColor }}
              >
                {post.tag}
              </span>
              <span className="text-xs" style={{ color: "#9A8878" }}>{post.date}</span>
              <span className="text-xs" style={{ color: "#9A8878" }}>· {post.readTime} чтения</span>
            </div>

            <h1
              className="mb-6"
              style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.15, color: "#3A2D24" }}
            >
              {post.title}
            </h1>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#5A4535", fontFamily: "Cormorant, serif", fontStyle: "italic", fontSize: "1.25rem", borderLeft: `3px solid ${tagColor}`, paddingLeft: "1.25rem" }}
            >
              {post.lead}
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="container mx-auto max-w-3xl px-6 md:px-12 py-10">
          <div className="flex flex-col gap-8">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2
                    className="mb-4"
                    style={{ fontFamily: "Cormorant, serif", fontSize: "1.7rem", color: "#3A2D24", fontWeight: 400 }}
                  >
                    {section.heading}
                  </h2>
                )}
                {section.text.split("\n\n").map((para, j) => (
                  para.startsWith("—") || para.startsWith("1.") ? (
                    <div key={j} className="flex flex-col gap-2 pl-4 mb-2">
                      {para.split("\n").filter(Boolean).map((line, k) => (
                        <p key={k} className="text-base leading-relaxed" style={{ color: "#5A4535" }}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p key={j} className="text-base leading-relaxed mb-3" style={{ color: "#5A4535", lineHeight: 1.85 }}>
                      {para}
                    </p>
                  )
                ))}
              </div>
            ))}
          </div>

          {/* SHARE / CTA */}
          <div
            className="mt-14 warm-card p-8 text-center"
            style={{ boxShadow: "0 8px 32px rgba(196,120,90,0.08)" }}
          >
            <div className="text-4xl mb-4">🌿</div>
            <h3
              className="mb-3"
              style={{ fontFamily: "Cormorant, serif", fontSize: "1.6rem", color: "#3A2D24" }}
            >
              Хотите разобраться глубже?
            </h3>
            <p className="text-sm mb-6" style={{ color: "#7A6555", lineHeight: 1.7 }}>
              Наши специалисты работают именно с такими темами — в личной консультации, безопасно и без спешки
            </p>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terra inline-flex items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="section-padding" style={{ paddingTop: "0", background: "rgba(232,208,192,0.15)" }}>
          <div className="container mx-auto max-w-3xl">
            <h2
              className="mb-8"
              style={{ fontFamily: "Cormorant, serif", fontSize: "1.8rem", color: "#3A2D24" }}
            >
              Читайте также
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="warm-card p-6 block"
                  style={{ textDecoration: "none", transition: "transform 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <span
                    className="inline-block text-xs px-3 py-1 rounded-full mb-3"
                    style={{ background: `${TAG_COLORS[p.tag] ?? "#C4785A"}18`, color: TAG_COLORS[p.tag] ?? "#C4785A" }}
                  >
                    {p.tag}
                  </span>
                  <h3
                    className="mb-2 leading-snug"
                    style={{ fontFamily: "Cormorant, serif", fontSize: "1.15rem", color: "#3A2D24" }}
                  >
                    {p.title}
                  </h3>
                  <span className="text-xs flex items-center gap-1 mt-3" style={{ color: "#C4785A" }}>
                    Читать <Icon name="ArrowRight" size={12} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/blog" className="btn-outline-terra inline-block" style={{ textDecoration: "none" }}>
                Все статьи блога
              </Link>
            </div>
          </div>
        </section>
      )}

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
