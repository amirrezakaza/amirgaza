import { useEffect, useRef, useState } from "react";
import Reveal, { SectionTitle } from "./Reveal";

/* ---------------- About ---------------- */
const facts = [
  { icon: "🧠", t: "تفکر محصولی", d: "کد نوشتن فقط ابزار است؛ هدف ساخت محصولی است که مسئله واقعی حل کند." },
  { icon: "⚡", t: "سرعت و کیفیت", d: "معماری تمیز، تحویل سریع و کدی که سال‌ها قابل نگهداری بماند." },
  { icon: "🤖", t: "AI-First", d: "هوش مصنوعی را در قلب محصولات می‌نشانم، نه به‌عنوان یک قابلیت تزئینی." },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-blue-700/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          kicker="درباره من"
          title="سازنده محصولات دیجیتال و سیستم‌های هوشمند"
          desc="من امیر گازا هستم؛ برنامه‌نویس، توسعه‌دهنده وب و سازنده ابزارهای هوش مصنوعی."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal className="glass rounded-3xl p-8 transition">
            <p className="text-sm leading-9 text-slate-300 sm:text-base">
              بیش از هشت سال است که در دنیای نرم‌افزار کار می‌کنم؛ از نوشتن اولین خط کد تا طراحی
              معماری سیستم‌هایی که هزاران کاربر از آن‌ها استفاده می‌کنند. تمرکز اصلی من روی توسعه وب
              مدرن، ساخت اپلیکیشن‌های مبتنی بر هوش مصنوعی و آموزش برنامه‌نویسی به زبان ساده است.
            </p>
            <p className="mt-5 text-sm leading-9 text-slate-400 sm:text-base">
              باور دارم آینده متعلق به کسانی است که می‌توانند خلاقیت انسانی را با قدرت مدل‌های هوش
              مصنوعی ترکیب کنند. به همین دلیل هر پروژه را با نگاه «سریع‌تر، هوشمندتر، ساده‌تر»
              می‌سازم.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {[
                ["🌍 موقعیت", "ایران / ریموت"],
                ["💼 وضعیت", "پذیرش پروژه"],
                ["🗣 زبان‌ها", "فارسی، انگلیسی"],
                ["🎯 تمرکز", "Web · AI · SaaS"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-[11px] text-slate-500">{k}</div>
                  <div className="mt-1 text-white">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-5">
            {facts.map((f, i) => (
              <Reveal key={f.t} delay={i * 110} className="glass rounded-3xl p-6 transition hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 text-xl">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{f.t}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
const skills = [
  { n: "React / Next.js", v: 95 },
  { n: "TypeScript / JavaScript", v: 93 },
  { n: "Python & AI Engineering", v: 90 },
  { n: "Node.js / API Design", v: 88 },
  { n: "UI/UX & Tailwind CSS", v: 92 },
  { n: "DevOps & Cloud", v: 80 },
];

const tags = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "FastAPI", "OpenAI", "LangChain",
  "Vector DB", "PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "Figma", "Tailwind",
];

function Bar({ n, v, delay }: { n: string; v: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        setTimeout(() => setW(v), delay);
        o.disconnect();
      }
    }, { threshold: 0.3 });
    o.observe(el);
    return () => o.disconnect();
  }, [v, delay]);

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-200">{n}</span>
        <span className="text-violet-300">{w}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-l from-blue-500 to-violet-500 transition-[width] duration-1000 ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          kicker="مهارت‌ها"
          title="تکنولوژی‌هایی که هر روز با آن‌ها می‌سازم"
          desc="ترکیبی از مهندسی نرم‌افزار، طراحی رابط کاربری و هوش مصنوعی کاربردی."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="glass space-y-6 rounded-3xl p-8">
            {skills.map((s, i) => (
              <Bar key={s.n} n={s.n} v={s.v} delay={i * 120} />
            ))}
          </Reveal>
          <Reveal delay={150} className="glass rounded-3xl p-8">
            <h3 className="mb-5 font-bold text-white">جعبه‌ابزار من</h3>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300 transition hover:border-violet-400/50 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Frontend", "رابط‌های سریع، واکنش‌گرا و زیبا"],
                ["Backend", "API امن، پایدار و مقیاس‌پذیر"],
                ["AI", "چت‌بات، RAG و اتوماسیون هوشمند"],
                ["Growth", "سئو، سرعت و تجربه کاربری"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-4">
                  <div className="text-sm font-bold text-violet-300">{k}</div>
                  <div className="mt-1.5 text-xs leading-6 text-slate-400">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { i: "💻", t: "توسعه نرم‌افزار", d: "طراحی و پیاده‌سازی نرم‌افزارهای سفارشی، پنل‌های مدیریتی و سامانه‌های سازمانی." },
  { i: "🌐", t: "طراحی وب‌سایت", d: "وب‌سایت شرکتی، فروشگاهی و لندینگ‌پیج با سرعت بالا، سئو قوی و طراحی اختصاصی." },
  { i: "🤖", t: "راهکارهای هوش مصنوعی", d: "ساخت چت‌بات اختصاصی، دستیار هوشمند، اتوماسیون فرایندها و یکپارچه‌سازی مدل‌های زبانی." },
  { i: "📱", t: "اپلیکیشن و PWA", d: "تبدیل ایده به اپلیکیشن سریع و قابل نصب روی موبایل با تجربه کاربری بومی." },
  { i: "🎓", t: "آموزش و منتورینگ", d: "دوره‌های خصوصی و تیمی برنامه‌نویسی، ری‌ویو کد و مسیر شغلی توسعه‌دهنده." },
  { i: "🚀", t: "مشاوره فنی", d: "انتخاب استک، معماری سیستم، بهینه‌سازی عملکرد و استراتژی محصول دیجیتال." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          kicker="خدمات"
          title="چه کاری برای شما انجام می‌دهم؟"
          desc="از ایده اولیه تا تحویل نهایی و پشتیبانی، همه‌چیز با استانداردهای حرفه‌ای."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="glass group h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-2">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600/25 to-violet-600/25 text-2xl transition group-hover:glow-purple">
                  {s.i}
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-400">{s.d}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-l from-transparent via-violet-500/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
const projects = [
  { t: "پلتفرم SaaS تحلیل داده", c: "Next.js · PostgreSQL · OpenAI", d: "داشبورد تحلیلی با گزارش‌گیری خودکار و دستیار هوشمند پرسش‌وپاسخ روی داده‌ها.", cat: "وب اپلیکیشن" },
  { t: "دستیار هوش مصنوعی فارسی", c: "Python · LangChain · RAG", d: "چت‌بات سازمانی مبتنی بر اسناد داخلی با پاسخ دقیق و ارجاع به منبع.", cat: "هوش مصنوعی" },
  { t: "فروشگاه‌ساز اختصاصی", c: "React · Node.js · Redis", d: "زیرساخت فروشگاهی پرسرعت با درگاه پرداخت، انبار و پنل مدیریت کامل.", cat: "تجارت الکترونیک" },
  { t: "سیستم اتوماسیون محتوا", c: "TypeScript · Queue · LLM", d: "تولید و زمان‌بندی خودکار محتوا برای شبکه‌های اجتماعی برندها.", cat: "اتوماسیون" },
  { t: "آکادمی آنلاین برنامه‌نویسی", c: "Next.js · Video · Payments", d: "پلتفرم آموزش با پخش ویدیو، آزمون، گواهی و پیگیری پیشرفت دانشجو.", cat: "آموزش" },
  { t: "اپلیکیشن مدیریت کلینیک", c: "Flutter · FastAPI", d: "نوبت‌دهی هوشمند، پرونده الکترونیک و گزارش‌های مدیریتی لحظه‌ای.", cat: "موبایل" },
];

export function Projects() {
  const cats = ["همه", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const [active, setActive] = useState("همه");
  const list = active === "همه" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          kicker="پروژه‌ها"
          title="نمونه‌ای از کارهایی که ساخته‌ام"
          desc="پروژه‌هایی که ترکیبی از مهندسی دقیق، طراحی مدرن و هوش مصنوعی هستند."
        />
        <Reveal className="mb-10 flex flex-wrap justify-center gap-2.5">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-xl border px-4 py-2 text-xs transition ${
                active === c
                  ? "border-violet-400/60 bg-violet-500/15 text-white"
                  : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition hover:-translate-y-2">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-blue-600/20 to-violet-600/20 blur-2xl opacity-0 transition group-hover:opacity-100" />
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-violet-300">
                  {p.cat}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{p.t}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-400">{p.d}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-slate-500">
                  <span>{p.c}</span>
                  <span className="text-violet-300 transition group-hover:translate-x-[-4px]">←</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI ---------------- */
const aiItems = [
  { t: "چت‌بات اختصاصی سازمانی", d: "آموزش مدل روی داده‌های شما با معماری RAG و پاسخ دقیق فارسی." },
  { t: "اتوماسیون هوشمند فرایند", d: "حذف کارهای تکراری با ایجنت‌های هوش مصنوعی و اتصال به سرویس‌های شما." },
  { t: "تولید محتوا و تصویر", d: "خطوط تولید محتوای متنی و بصری برای برندها با کنترل کیفیت." },
  { t: "تحلیل داده با LLM", d: "پرسش به زبان طبیعی از پایگاه داده و تولید گزارش‌های مدیریتی." },
];

export function AI() {
  return (
    <section id="ai" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-80 w-[70%] rounded-full bg-violet-700/10 blur-[150px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          kicker="هوش مصنوعی"
          title="AI را به بخشی از کسب‌وکار شما تبدیل می‌کنم"
          desc="نه شعار، بلکه راهکارهای اجرایی و قابل اندازه‌گیری مبتنی بر مدل‌های زبانی."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-violet-400 to-transparent" />
            <div className="font-mono text-[12px] leading-8 text-slate-400" dir="ltr">
              <div><span className="text-violet-400">const</span> amir = <span className="text-blue-300">new</span> <span className="text-emerald-300">AICreator</span>({"{"}</div>
              <div className="ps-6">focus: <span className="text-amber-300">"LLM + Web"</span>,</div>
              <div className="ps-6">stack: [<span className="text-amber-300">"Next.js"</span>, <span className="text-amber-300">"Python"</span>],</div>
              <div className="ps-6">mission: <span className="text-amber-300">"build the future"</span>,</div>
              <div>{"}"});</div>
              <div className="mt-3 text-slate-600">// شروع پروژه بعدی شما ...</div>
              <div><span className="text-violet-400">await</span> amir.<span className="text-blue-300">build</span>(yourIdea);</div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[["99%", "دقت پاسخ"], ["3x", "سرعت اجرا"], ["24/7", "دستیار فعال"]].map(([a, b]) => (
                <div key={b} className="rounded-2xl border border-white/10 bg-white/[0.03] py-4">
                  <div className="text-xl font-black text-white">{a}</div>
                  <div className="mt-1 text-[11px] text-slate-400">{b}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {aiItems.map((a, i) => (
              <Reveal key={a.t} delay={i * 100}>
                <div className="glass h-full rounded-3xl p-6 transition hover:-translate-y-1">
                  <div className="mb-4 h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 glow-blue" />
                  <h3 className="font-bold text-white">{a.t}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-slate-400">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Learn ---------------- */
const courses = [
  { t: "دوره جامع توسعه وب مدرن", l: "مقدماتی تا پیشرفته", p: "React · Next.js · TypeScript", h: "۴۰ ساعت" },
  { t: "هوش مصنوعی برای برنامه‌نویسان", l: "متوسط", p: "Python · OpenAI · RAG", h: "۲۵ ساعت" },
  { t: "منتورینگ خصوصی مسیر شغلی", l: "همه سطوح", p: "ری‌ویو کد · رزومه · مصاحبه", h: "جلسات ۱:۱" },
];

export function Learn() {
  return (
    <section id="learn" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          kicker="آموزش"
          title="یاد بگیر، بساز، رشد کن"
          desc="آموزش پروژه‌محور با تمرکز بر مهارت‌هایی که بازار کار واقعاً می‌خواهد."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.t} delay={i * 110}>
              <div className="glass flex h-full flex-col rounded-3xl p-7 transition hover:-translate-y-2">
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-violet-500/15 px-3 py-1 text-[11px] text-violet-300">{c.l}</span>
                  <span className="text-[11px] text-slate-500">{c.h}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-8 text-white">{c.t}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-400">{c.p}</p>
                <a
                  href="#contact"
                  className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-center text-sm text-white transition hover:border-violet-400/50 hover:bg-white/10"
                >
                  ثبت‌نام و اطلاعات بیشتر
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
