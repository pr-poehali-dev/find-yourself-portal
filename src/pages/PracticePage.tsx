import { useParams, Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const TG_LINK = "https://t.me/find_yourself_in_yourse1f";

type IconName = "Brain" | "Heart" | "Users" | "Compass" | "Leaf" | "Star" | "ArrowLeft" | "Send" | "CheckCircle";

const PRACTICES_DATA: Record<string, {
  icon: IconName;
  color: string;
  title: string;
  subtitle: string;
  description: string;
  about: string[];
  exercises: { title: string; desc: string }[];
  forWhom: string[];
  quote: string;
}> = {
  reflexia: {
    icon: "Brain",
    color: "#8FA880",
    title: "Рефлексия",
    subtitle: "Искусство честного самонаблюдения",
    description: "Рефлексия — это не самокопание и не самокритика. Это способность мягко и честно наблюдать за собой: своими реакциями, мыслями, желаниями.",
    about: [
      "Многие из нас живут «на автопилоте» — реагируют привычно, не замечая, что происходит внутри. Рефлексия помогает остановиться и увидеть себя чуть яснее.",
      "Это не означает бесконечный самоанализ или поиск ошибок. Это — добрый и любопытный взгляд внутрь, который со временем становится естественным.",
      "На нашей платформе вы найдёте простые ежедневные практики: вопросы дня, дневник самонаблюдения, медитации осознанности.",
    ],
    exercises: [
      { title: "Три вопроса дня", desc: "Каждый вечер задайте себе: что я чувствовал сегодня? что меня удивило? что я хотел бы повторить?" },
      { title: "Дневник реакций", desc: "Записывайте ситуации, которые вызвали сильную реакцию. Не оценивайте — просто описывайте." },
      { title: "Пауза в моменте", desc: "Несколько раз в день останавливайтесь на 30 секунд и спрашивайте: «Что я сейчас чувствую в теле? О чём думаю?»" },
    ],
    forWhom: [
      "Тем, кто хочет лучше понимать свои реакции",
      "Тем, кто чувствует, что живёт «по инерции»",
      "Тем, кто хочет принимать более осознанные решения",
    ],
    quote: "«Неисследованная жизнь не стоит того, чтобы жить» — Сократ",
  },
  emotions: {
    icon: "Heart",
    color: "#C9A0A0",
    title: "Эмоциональный интеллект",
    subtitle: "Учимся чувствовать и понимать себя",
    description: "Эмоциональный интеллект — это не умение не злиться. Это способность замечать, называть и принимать любые свои чувства без осуждения.",
    about: [
      "Многих из нас учили: «не плачь», «не злись», «будь сильным». В результате мы научились прятать чувства от других — и от себя.",
      "Развитие эмоционального интеллекта — это путь обратно к себе. К своим настоящим потребностям, к пониманию других людей, к более живым отношениям.",
      "Практики включают работу с колесом эмоций, техники телесного отслеживания, безопасное выражение чувств через письмо и творчество.",
    ],
    exercises: [
      { title: "Колесо эмоций", desc: "Каждый день определяйте своё состояние через колесо Плутчика. Начните с базовых: радость, грусть, страх, злость, удивление." },
      { title: "Письмо эмоции", desc: "Напишите письмо от лица своей эмоции. Что она хочет вам сказать? Зачем она пришла? Что ей нужно?" },
      { title: "Телесный сканер", desc: "Закройте глаза. Медленно «просканируйте» тело от головы до ног. Где напряжение? Где тепло? Какую эмоцию несёт это ощущение?" },
    ],
    forWhom: [
      "Тем, кто плохо понимает свои чувства",
      "Тем, кто часто «застревает» в негативных состояниях",
      "Тем, кто хочет улучшить отношения с близкими",
    ],
    quote: "«Эмоции — это информация, а не приговор»",
  },
  communication: {
    icon: "Users",
    color: "#C4785A",
    title: "Коммуникация",
    subtitle: "Слышать и быть услышанным",
    description: "Осознанная коммуникация — это когда вы говорите о себе, а не нападаете на другого. Когда слушаете, чтобы понять, а не чтобы ответить.",
    about: [
      "Большинство конфликтов — это не столкновение злых людей, а столкновение людей, которые не умеют говорить о своих потребностях.",
      "Ненасильственное общение, активное слушание, «я-высказывания» — это не манипуляции, а инструменты честного контакта.",
      "Практики помогут вам говорить о сложном без обвинений, слышать за словами другого человека его боль, и строить по-настоящему близкие отношения.",
    ],
    exercises: [
      { title: "Я-высказывания", desc: "Замените «ты всегда опаздываешь» на «я чувствую беспокойство, когда жду и не знаю, где ты». Попробуйте три таких замены сегодня." },
      { title: "Активное слушание", desc: "В следующем разговоре сосредоточьтесь только на слушании. Не перебивайте. В конце перескажите, что услышали." },
      { title: "Четыре шага НВО", desc: "Наблюдение (без оценок) → Чувства → Потребности → Просьба. Попробуйте выразить любую свою просьбу через эту структуру." },
    ],
    forWhom: [
      "Тем, кто часто чувствует себя непонятым",
      "Тем, кто избегает конфликтов или наоборот — часто в них попадает",
      "Тем, кто хочет более глубоких и честных отношений",
    ],
    quote: "«Самое важное в общении — слышать то, что не было сказано» — Питер Друкер",
  },
  values: {
    icon: "Compass",
    color: "#D4906F",
    title: "Ценности и смысл",
    subtitle: "Найти свой путь среди чужих ожиданий",
    description: "Ценности — это не то, что вы должны делать. Это то, что делает вашу жизнь настоящей. Когда вы живёте в согласии с ними, появляется смысл.",
    about: [
      "Многие из нас живут по чужим сценариям: родительским, социальным, медийным. И в какой-то момент чувствуют пустоту — «всё есть, а чего-то не хватает».",
      "Работа с ценностями помогает разобраться: чего хочу именно я? Что для меня по-настоящему важно? Куда я хочу двигаться?",
      "Это не быстрый процесс — но самый важный. Потому что без ответа на эти вопросы любые цели и достижения остаются пустыми.",
    ],
    exercises: [
      { title: "Список 100 желаний", desc: "Напишите 100 вещей, которые вы хотите. Без цензуры, без «но». Потом найдите повторяющиеся темы — это ваши ценности." },
      { title: "Некролог наоборот", desc: "Представьте, что вам 90 лет. Что вы хотите, чтобы о вас сказали близкие? Что было важным в вашей жизни?" },
      { title: "Мои 5 ценностей", desc: "Выберите из длинного списка (честность, свобода, творчество, семья...) сначала 20, потом 10, потом 5. Как они присутствуют в вашей жизни сейчас?" },
    ],
    forWhom: [
      "Тем, кто на перепутье или в поиске",
      "Тем, кто чувствует внутреннюю пустоту несмотря на внешние успехи",
      "Тем, кто хочет принимать решения из себя, а не из страха",
    ],
    quote: "«Человек может вынести любое «как», если у него есть «зачем»» — Виктор Франкл",
  },
  body: {
    icon: "Leaf",
    color: "#8FA880",
    title: "Телесность",
    subtitle: "Вернуться домой — в своё тело",
    description: "Тело — это не просто оболочка. Оно хранит всю историю нашей жизни: радости, травмы, страхи, любовь. И оно всегда говорит правду.",
    about: [
      "Многие из нас «живут в голове» — постоянный поток мыслей, анализ, планирование. И почти не замечают тело, пока оно не заболеет.",
      "Телесные практики помогают восстановить связь с собой на самом глубоком уровне: почувствовать, где в теле живёт тревога, где — радость, где — застарелая боль.",
      "Дыхательные практики, медитации сканирования тела, мягкое движение — всё это инструменты возвращения домой.",
    ],
    exercises: [
      { title: "Дыхание 4-7-8", desc: "Вдох на 4 счёта, задержка на 7, выдох на 8. Повторите 4 раза. Активирует парасимпатическую систему и снижает тревогу." },
      { title: "Сканирование тела", desc: "Лягте удобно. Медленно переводите внимание от ступней к голове, задерживаясь в каждой зоне. Не анализируйте — просто замечайте." },
      { title: "Заземление 5-4-3-2-1", desc: "Назовите 5 вещей, которые видите. 4 — которые слышите. 3 — к которым можете прикоснуться. 2 — которые чувствуете запахом. 1 — на вкус." },
    ],
    forWhom: [
      "Тем, кто часто тревожится или «выпадает» из настоящего",
      "Тем, кто чувствует телесное напряжение или хроническую усталость",
      "Тем, кто хочет лучше слышать сигналы своего тела",
    ],
    quote: "«Тело никогда не лжёт» — Марта Грэм",
  },
  digital: {
    icon: "Star",
    color: "#C4785A",
    title: "Цифровая психология",
    subtitle: "Технологии на службе самопознания",
    description: "Цифровые инструменты могут стать мощными помощниками в работе над собой — если использовать их осознанно, а не как очередной способ избежать себя.",
    about: [
      "Трекеры настроения, психологические тесты, дневники, медитации по запросу — всё это доступно сегодня каждому.",
      "На платформе мы собрали проверенные инструменты цифровой психологии: от классических тестов (MBTI, Белбина, Big Five) до авторских практик наших специалистов.",
      "Главный принцип: данные о себе — не для того, чтобы «разгадать» себя, а чтобы лучше с собой познакомиться.",
    ],
    exercises: [
      { title: "Трекер настроения", desc: "Каждый день в одно и то же время ставьте оценку своему состоянию от 1 до 10 и пишите одно слово. Через месяц увидите паттерны." },
      { title: "Тест Big Five", desc: "Пройдите тест пяти факторов личности. Не ищите «правильные» ответы — ищите точки роста и принятия." },
      { title: "Цифровой детокс", desc: "Выберите один день в неделю без соцсетей. Запишите: что вы чувствуете? Что хочется делать вместо скроллинга?" },
    ],
    forWhom: [
      "Тем, кто хочет структурированный подход к самопознанию",
      "Тем, кому комфортнее начинать с тестов и аналитики",
      "Тем, кто хочет отслеживать своё развитие в динамике",
    ],
    quote: "«Познай себя — и ты познаешь весь мир»",
  },
};

const NAV_ITEMS = [
  { label: "О проекте", href: "/#about" },
  { label: "Практики", href: "/#practices" },
  { label: "Сообщество", href: "/#community" },
  { label: "Блог", href: "/#blog" },
  { label: "Поддержка", href: "/#support" },
  { label: "Контакты", href: "/#contacts" },
];

export default function PracticePage() {
  const { slug } = useParams<{ slug: string }>();
  const practice = slug ? PRACTICES_DATA[slug] : null;

  if (!practice) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#FBF7EE" }}>
        <p style={{ fontFamily: "Cormorant, serif", fontSize: "2rem", color: "#3A2D24" }}>Практика не найдена</p>
        <Link to="/" className="btn-terra mt-6 inline-block" style={{ textDecoration: "none" }}>На главную</Link>
      </div>
    );
  }

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
          Записаться на консультацию
        </a>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ paddingTop: "80px" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 70% 50%, ${practice.color}22 0%, transparent 60%)` }}
        />
        <div className="container mx-auto max-w-4xl px-6 md:px-12 py-20">
          <Link
            to="/#practices"
            className="inline-flex items-center gap-2 mb-8 text-sm transition-all"
            style={{ color: "#8A7060", textDecoration: "none" }}
          >
            <Icon name="ArrowLeft" size={16} />
            Все практики
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${practice.color}20` }}
            >
              <Icon name={practice.icon} size={28} style={{ color: practice.color }} />
            </div>
            <div>
              <p className="text-sm tracking-widest uppercase" style={{ color: practice.color }}>Практика</p>
              <h1 style={{ fontFamily: "Cormorant, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: "#3A2D24" }}>
                {practice.title}
              </h1>
            </div>
          </div>

          <p style={{ fontFamily: "Cormorant, serif", fontSize: "1.4rem", color: "#6A5545", fontStyle: "italic", marginBottom: "1.5rem" }}>
            {practice.subtitle}
          </p>
          <p className="text-lg max-w-2xl" style={{ color: "#5A4535", lineHeight: 1.75 }}>
            {practice.description}
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-padding" style={{ background: "rgba(232,208,192,0.15)" }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title mb-10">О чём эта практика</h2>
          <div className="flex flex-col gap-5">
            {practice.about.map((text, i) => (
              <div key={i} className="flex gap-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-medium"
                  style={{ background: `${practice.color}20`, color: practice.color }}
                >
                  {i + 1}
                </div>
                <p className="text-base leading-relaxed" style={{ color: "#5A4535" }}>{text}</p>
              </div>
            ))}
          </div>

          <blockquote
            className="mt-12 p-8 rounded-3xl"
            style={{ background: `${practice.color}12`, borderLeft: `3px solid ${practice.color}` }}
          >
            <p style={{ fontFamily: "Cormorant, serif", fontSize: "1.3rem", color: "#3A2D24", fontStyle: "italic" }}>
              {practice.quote}
            </p>
          </blockquote>
        </div>
      </section>

      {/* EXERCISES */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title mb-4">Упражнения для начала</h2>
          <p className="text-base mb-10" style={{ color: "#7A6555" }}>Попробуйте прямо сегодня — без подготовки и специальных условий</p>
          <div className="flex flex-col gap-5">
            {practice.exercises.map((ex, i) => (
              <div key={i} className="warm-card p-7"
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(6px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${practice.color}18` }}
                  >
                    <Icon name="CheckCircle" size={20} style={{ color: practice.color }} />
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ fontFamily: "Cormorant, serif", fontSize: "1.3rem", color: "#3A2D24" }}>
                      {ex.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6A5545" }}>{ex.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="section-padding" style={{ background: "rgba(143,168,128,0.07)" }}>
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-8">Кому подойдёт</h2>
              <div className="flex flex-col gap-4">
                {practice.forWhom.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: practice.color }} />
                    <p style={{ color: "#4A3728" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="warm-card p-8 text-center"
              style={{ boxShadow: "0 12px 40px rgba(196,120,90,0.1)" }}
            >
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="mb-3" style={{ fontFamily: "Cormorant, serif", fontSize: "1.6rem", color: "#3A2D24" }}>
                Хотите работать с практикой глубже?
              </h3>
              <p className="text-sm mb-6" style={{ color: "#7A6555", lineHeight: 1.6 }}>
                Я помогу вам персонально — в безопасном пространстве, без спешки
              </p>
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terra inline-flex items-center gap-2 text-sm"
                style={{ textDecoration: "none" }}
              >
                <Icon name="Send" size={16} />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PRACTICES */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="section-title mb-4">Другие направления</h2>
          <p className="text-base mb-10" style={{ color: "#7A6555" }}>Исследуйте все грани самопознания</p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(PRACTICES_DATA)
              .filter(([key]) => key !== slug)
              .map(([key, p]) => (
                <Link
                  key={key}
                  to={`/practices/${key}`}
                  className="inline-flex items-center gap-2 px-5 py-3 warm-card text-sm"
                  style={{ textDecoration: "none", color: "#4A3728", transition: "transform 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <Icon name={p.icon} size={16} style={{ color: p.color }} />
                  {p.title}
                </Link>
              ))}
          </div>
          <Link to="/" className="btn-outline-terra inline-block mt-10" style={{ textDecoration: "none" }}>
            ← На главную
          </Link>
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
          <p className="text-xs" style={{ color: "#9A8878" }}>© 2026 НайТи себя в себе</p>
        </div>
      </footer>

    </div>
  );
}