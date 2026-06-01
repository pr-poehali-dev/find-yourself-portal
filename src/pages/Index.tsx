import { useState } from "react";
import Icon from "@/components/ui/icon";

type IconName = "Brain" | "Heart" | "Users" | "Compass" | "Leaf" | "Star" | "Shield" | "Sparkles" | "Globe" | "MessageCircle" | "BookOpen" | "Mail" | "MessageSquare" | "Instagram" | "Menu" | "X" | "ChevronDown" | "ArrowRight";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/3ec196c2-b21e-48f7-bb45-7260500b961b/files/ee81daac-327d-4fa4-8be6-093c2b0bf5a7.jpg";
const TG_LINK = "https://t.me/find_yourself_in_yourse1f";

const NAV_ITEMS = [
  { label: "О проекте", href: "#about" },
  { label: "Практики", href: "#practices" },
  { label: "Сообщество", href: "#community" },
  { label: "Блог", href: "#blog" },
  { label: "Поддержка", href: "#support" },
  { label: "Контакты", href: "#contacts" },
];

const PRACTICES = [
  { icon: "Brain", title: "Рефлексия", desc: "Ежедневные практики осознанности и самонаблюдения для глубокого понимания своих реакций и паттернов." },
  { icon: "Heart", title: "Эмоциональный интеллект", desc: "Работа с эмоциями через безопасные техники — учимся чувствовать, принимать и выражать себя." },
  { icon: "Users", title: "Коммуникация", desc: "Осознанное общение, ненасильственный диалог, умение слышать и быть услышанным." },
  { icon: "Compass", title: "Ценности и смысл", desc: "Поиск своего пути через прояснение личных ценностей и жизненных ориентиров." },
  { icon: "Leaf", title: "Телесность", desc: "Связь с телом: дыхательные практики, медитации, работа с напряжением и ресурсом." },
  { icon: "Star", title: "Цифровая психология", desc: "Инструменты самопознания через тесты, трекеры настроения и персональные дневники." },
];

const SPECIALISTS = [
  { name: "Анна Светлова", role: "Психолог-консультант", spec: "Тревога, самооценка, отношения", img: "🌸" },
  { name: "Михаил Орлов", role: "Гештальт-терапевт", spec: "Личностный рост, травма, границы", img: "🌿" },
  { name: "Екатерина Нова", role: "Коуч и фасилитатор", spec: "Цели, ценности, жизненный смысл", img: "✨" },
];

const BLOG_POSTS = [
  { tag: "Практика", title: "Как начать слышать себя: 5 вопросов на каждый день", date: "28 мая 2026" },
  { tag: "Психология", title: "Почему мы избегаем близости и как с этим быть", date: "20 мая 2026" },
  { tag: "Сообщество", title: "Истории участников: «Я впервые почувствовала, что меня понимают»", date: "14 мая 2026" },
];

const SUPPORT_ITEMS = [
  { icon: "MessageCircle", title: "Чат поддержки", desc: "Ответим на вопросы о платформе и практиках в течение дня" },
  { icon: "BookOpen", title: "База знаний", desc: "Статьи, упражнения и руководства для самостоятельной работы" },
  { icon: "Users", title: "Группы встреч", desc: "Еженедельные онлайн-встречи сообщества с мягкой модерацией" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#FBF7EE", color: "#3A2D24" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(251,247,238,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(196,120,90,0.1)" }}
      >
        <a href="#" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "Cormorant, serif", fontSize: "1.5rem", fontWeight: 500, color: "#C4785A" }}>НайТи</span>
          <span style={{ fontFamily: "Golos Text, sans-serif", fontSize: "0.7rem", color: "#8FA880", letterSpacing: "0.12em", textTransform: "uppercase", paddingTop: "4px" }}>себя в себе</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="nav-link text-sm">{item.label}</a>
          ))}
        </div>

        <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block btn-terra text-sm" style={{ textDecoration: "none" }}>
          Записаться на консультацию
        </a>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "#C4785A", background: "none", border: "none", cursor: "pointer" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden" style={{ background: "rgba(251,247,238,0.98)" }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "Cormorant, serif", fontSize: "2rem", color: "#3A2D24", textDecoration: "none" }}>
              {item.label}
            </a>
          ))}
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="btn-terra mt-4" style={{ textDecoration: "none" }}>
            Записаться на консультацию
          </a>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "80px" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(251,247,238,0.92) 0%, rgba(245,237,216,0.7) 50%, rgba(201,160,160,0.15) 100%)" }} />
        <div className="absolute top-24 right-16 w-72 h-72 animate-float pointer-events-none" style={{ background: "radial-gradient(circle, rgba(143,168,128,0.18) 0%, transparent 70%)", borderRadius: "60% 40% 70% 30% / 40% 60% 40% 60%" }} />
        <div className="absolute bottom-24 left-8 w-52 h-52 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,120,90,0.12) 0%, transparent 70%)", borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%", animation: "float 5s ease-in-out infinite 1.5s" }} />

        <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
          <div className="max-w-3xl">
            <p className="animate-fade-in opacity-0 text-sm tracking-widest uppercase mb-6" style={{ color: "#8FA880", animationFillMode: "forwards" }}>
              Платформа самопознания
            </p>
            <h1 className="animate-fade-in opacity-0 delay-100 mb-6"
              style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 400, lineHeight: 1.05, color: "#3A2D24", animationFillMode: "forwards" }}>
              Найти себя —<br />
              <em style={{ color: "#C4785A", fontStyle: "italic" }}>в себе</em>
            </h1>
            <p className="animate-fade-in opacity-0 delay-200 text-lg md:text-xl mb-10 max-w-xl"
              style={{ color: "#5A4535", lineHeight: 1.75, animationFillMode: "forwards" }}>
              Пространство для тех, кто готов встретиться с собой. Практики, сообщество, поддержка и живые консультации с психологами — всё в одном месте.
            </p>
            <div className="animate-fade-in opacity-0 delay-300 flex flex-wrap gap-4" style={{ animationFillMode: "forwards" }}>
              <a href="#practices" className="btn-terra text-base" style={{ textDecoration: "none" }}>Начать путь</a>
              <a href="#about" className="btn-outline-terra text-base" style={{ textDecoration: "none" }}>Узнать больше</a>
            </div>
            <div className="animate-fade-in opacity-0 delay-500 flex gap-10 mt-16" style={{ animationFillMode: "forwards" }}>
              {[{ num: "1 200+", label: "участников" }, { num: "6", label: "направлений" }, { num: "18", label: "специалистов" }].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "Cormorant, serif", fontSize: "2.2rem", color: "#C4785A", fontWeight: 500 }}>{s.num}</div>
                  <div style={{ fontSize: "0.78rem", color: "#8A7060", letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" style={{ color: "#C4785A" }}>
          <Icon name="ChevronDown" size={28} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8FA880" }}>О проекте</p>
              <h2 className="section-title mb-6">Место, где можно<br />быть собой</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#5A4535" }}>
                «НайТи себя в себе» — это не очередная платформа с тестами. Это живое сообщество людей, которые выбрали путь честного самопознания через контакт с другими.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#5A4535" }}>
                Мы соединяем цифровые инструменты психологии с живым человеческим присутствием. Здесь нет правильных ответов — есть поиск, который ведёт к себе.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "Shield", text: "Безопасное и поддерживающее пространство" },
                  { icon: "Sparkles", text: "Проверенные психологические практики" },
                  { icon: "Globe", text: "Онлайн-формат — в любой точке мира" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(196,120,90,0.12)" }}>
                      <Icon name={item.icon as IconName} size={16} style={{ color: "#C4785A" }} />
                    </div>
                    <span style={{ color: "#4A3728" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #F5EDD8 0%, #E8D0C0 50%, #C9A0A0 100%)", borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%", fontSize: "8rem" }}>
                🌿
              </div>
              <div className="absolute -bottom-4 -right-4 warm-card p-5 max-w-52" style={{ boxShadow: "0 8px 32px rgba(196,120,90,0.12)" }}>
                <p style={{ fontFamily: "Cormorant, serif", fontSize: "1.05rem", color: "#C4785A", fontStyle: "italic", lineHeight: 1.5 }}>
                  «Путь к себе начинается с первого честного взгляда внутрь»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section id="practices" className="section-padding" style={{ background: "rgba(232,208,192,0.18)" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8FA880" }}>Практики</p>
            <h2 className="section-title mb-4">6 направлений роста</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#5A4535" }}>Каждое направление — это отдельный путь к глубинному знанию о себе</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICES.map((p) => (
              <div key={p.title} className="warm-card p-7 cursor-pointer"
                style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(196,120,90,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = ""; }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "rgba(196,120,90,0.12)" }}>
                  <Icon name={p.icon as IconName} size={22} style={{ color: "#C4785A" }} />
                </div>
                <h3 className="mb-3" style={{ fontFamily: "Cormorant, serif", fontSize: "1.4rem", color: "#3A2D24" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6A5545" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "🌸", text: "Еженедельные встречи", bg: "rgba(201,160,160,0.22)" },
                  { emoji: "✍️", text: "Дневник самопознания", bg: "rgba(143,168,128,0.22)" },
                  { emoji: "🎙️", text: "Живые эфиры", bg: "rgba(196,120,90,0.12)" },
                  { emoji: "💬", text: "Чаты по темам", bg: "rgba(245,237,216,0.9)" },
                ].map((item) => (
                  <div key={item.text} className="warm-card p-6 text-center" style={{ background: item.bg }}>
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <p className="text-sm font-medium" style={{ color: "#4A3728" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8FA880" }}>Сообщество</p>
              <h2 className="section-title mb-6">Ты не один<br />на этом пути</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#5A4535" }}>
                В сообществе «НайТи себя в себе» собрались люди, которые ценят глубину, честность и поддержку. Здесь нет осуждения — только принятие и живой контакт.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#5A4535" }}>
                Встречи, эфиры, тематические чаты и общий дневник — всё для того, чтобы путь к себе был не одиноким.
              </p>
              <a href="#contacts" className="btn-terra inline-block" style={{ textDecoration: "none" }}>Вступить в сообщество</a>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="section-padding" style={{ background: "rgba(196,120,90,0.05)" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8FA880" }}>Консультации</p>
            <h2 className="section-title mb-4">Наши специалисты</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#5A4535" }}>Профессиональные психологи и коучи, которые помогут найти свой путь</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {SPECIALISTS.map((s) => (
              <div key={s.name} className="warm-card p-8 text-center"
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4" style={{ background: "linear-gradient(135deg, #F5EDD8, #E8D0C0)" }}>
                  {s.img}
                </div>
                <h3 style={{ fontFamily: "Cormorant, serif", fontSize: "1.3rem", color: "#3A2D24" }} className="mb-1">{s.name}</h3>
                <p className="text-sm mb-2" style={{ color: "#C4785A" }}>{s.role}</p>
                <p className="text-xs" style={{ color: "#7A6555" }}>{s.spec}</p>
              </div>
            ))}
          </div>

          <div className="max-w-lg mx-auto text-center">
            <div className="warm-card p-10 md:p-14" style={{ boxShadow: "0 16px 48px rgba(196,120,90,0.1)" }}>
              <div className="text-5xl mb-5">💬</div>
              <h3 className="mb-3" style={{ fontFamily: "Cormorant, serif", fontSize: "2rem", color: "#3A2D24" }}>
                Записаться в личку
              </h3>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: "#8A7060" }}>
                Напишите нам в Telegram — расскажите о своём запросе, и мы подберём подходящего специалиста
              </p>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terra text-base inline-flex items-center gap-2"
                style={{ textDecoration: "none" }}
              >
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
              <p className="text-xs mt-5" style={{ color: "#B0A090" }}>Обычно отвечаем в течение нескольких часов</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8FA880" }}>Блог</p>
              <h2 className="section-title">Статьи и истории</h2>
            </div>
            <a href="#contacts" className="hidden md:block btn-outline-terra text-sm" style={{ textDecoration: "none" }}>Все статьи</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="warm-card p-7 cursor-pointer"
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                <div className="inline-block text-xs px-3 py-1 rounded-full mb-4" style={{ background: "rgba(196,120,90,0.12)", color: "#C4785A" }}>
                  {post.tag}
                </div>
                <h3 className="mb-4 leading-snug" style={{ fontFamily: "Cormorant, serif", fontSize: "1.25rem", color: "#3A2D24" }}>
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#9A8878" }}>{post.date}</span>
                  <Icon name="ArrowRight" size={16} style={{ color: "#C4785A" }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="section-padding" style={{ background: "rgba(143,168,128,0.08)" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8FA880" }}>Поддержка</p>
            <h2 className="section-title mb-4">Мы рядом</h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: "#5A4535" }}>Несколько форматов, чтобы вы всегда могли получить нужную помощь</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SUPPORT_ITEMS.map((item) => (
              <div key={item.title} className="warm-card p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(143,168,128,0.25), rgba(196,120,90,0.15))" }}>
                  <Icon name={item.icon as IconName} size={26} style={{ color: "#8FA880" }} />
                </div>
                <h3 className="mb-3" style={{ fontFamily: "Cormorant, serif", fontSize: "1.4rem", color: "#3A2D24" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6A5545" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#8FA880" }}>Контакты</p>
          <h2 className="section-title mb-6">Давайте познакомимся</h2>
          <p className="text-base max-w-lg mx-auto mb-12" style={{ color: "#5A4535" }}>
            Напишите нам — мы расскажем о платформе, ответим на вопросы и поможем найти подходящий формат
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { icon: "MessageSquare" as IconName, label: "Telegram", href: TG_LINK },
              { icon: "Mail" as IconName, label: "hello@naiti-sebya.ru", href: "mailto:hello@naiti-sebya.ru" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 warm-card"
                style={{ textDecoration: "none", color: "#4A3728", transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                <Icon name={c.icon} size={18} style={{ color: "#C4785A" }} />
                <span className="text-sm font-medium">{c.label}</span>
              </a>
            ))}
          </div>

          <div className="rounded-3xl p-10 md:p-16" style={{ background: "linear-gradient(135deg, #C4785A 0%, #A05A3A 100%)" }}>
            <h3 className="mb-4" style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#FBF7EE" }}>
              Готовы начать?
            </h3>
            <p className="mb-8 text-base" style={{ color: "rgba(251,247,238,0.85)" }}>
              Первая консультация — это просто разговор. Без обязательств.
            </p>
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full font-medium text-base"
              style={{ background: "#FBF7EE", color: "#C4785A", textDecoration: "none", transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
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
            <p className="text-xs mt-1" style={{ color: "#9A8878" }}>Платформа самопознания и цифровой психологии</p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-xs nav-link" style={{ color: "#7A6555" }}>{item.label}</a>
            ))}
          </div>
          <p className="text-xs" style={{ color: "#9A8878" }}>© 2026 НайТи себя в себе</p>
        </div>
      </footer>

    </div>
  );
}