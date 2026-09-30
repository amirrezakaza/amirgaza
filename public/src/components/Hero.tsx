import { useEffect, useState } from "react";

const roles = [
  "برنامه‌نویس و توسعه‌دهنده نرم‌افزار",
  "طراح و توسعه‌دهنده وب‌سایت",
  "سازنده ابزارهای هوش مصنوعی",
  "مدرس برنامه‌نویسی",
];

function useTyped() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = roles[i % roles.length];
    const speed = del ? 45 : 95;
    const t = setTimeout(() => {
      const next = del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1);
      setText(next);
      if (!del && next === full) setTimeout(() => setDel(true), 1400);
      if (del && next === "") {
        setDel(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

const stats = [
  { v: "+120", l: "پروژه اجرا شده" },
  { v: "+8", l: "سال تجربه" },
  { v: "+3000", l: "دانشجوی آموزش‌دیده" },
  { v: "+40", l: "ابزار هوش مصنوعی" },
];

export default function Hero() {
  const typed = useTyped();

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-20 left-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[130px] animate-pulse-glow" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 backdrop-blur">
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
            آماده همکاری در پروژه‌های جدید
          </div>

          <h1 className="mt-7 text-4xl font-black leading-[1.25] sm:text-5xl lg:text-6xl">
            <span className="grad-text">امیر گازا</span>
            <br />
            <span className="text-white/90 text-2xl sm:text-3xl lg:text-4xl">
              Programmer &amp; AI Creator
            </span>
          </h1>

          <p className="mt-6 h-8 text-lg font-bold text-transparent sm:text-xl">
            <span className="bg-gradient-to-l from-blue-400 to-violet-400 bg-clip-text">
              {typed}
            </span>
            <span className="ms-1 inline-block h-5 w-0.5 animate-pulse bg-violet-400 align-middle" />
          </p>

          <p className="mt-5 max-w-xl text-sm leading-9 text-slate-400 sm:text-base">
            شعار من ساده است: <span className="text-white">ساختن آینده با کد و هوش مصنوعی.</span>{" "}
            محصولات دیجیتال سریع، امن و مقیاس‌پذیر می‌سازم؛ از وب‌اپلیکیشن‌های مدرن تا سیستم‌های
            مبتنی بر هوش مصنوعی و اتوماسیون هوشمند.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-l from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white transition hover:scale-[1.03] hover:glow-purple"
            >
              شروع همکاری
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-violet-400/50 hover:bg-white/10"
            >
              مشاهده پروژه‌ها
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-4 text-center transition">
                <div className="text-2xl font-black text-white">{s.v}</div>
                <div className="mt-1 text-[11px] text-slate-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-floaty">
          <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <img
              src="/images/portrait.jpg"
              alt="امیر گازا"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Amir Gaza</span>
                <span className="text-violet-300">AI · Web · Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-white/5 py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm text-slate-500">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-10">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "OpenAI API",
                "LangChain",
                "PostgreSQL",
                "Tailwind CSS",
                "Docker",
                "Laravel",
                "Flutter",
              ].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  {t}
                  <span className="h-1 w-1 rounded-full bg-violet-500/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
