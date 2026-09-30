import { useState, type FormEvent } from "react";
import Reveal, { SectionTitle } from "./Reveal";

const channels = [
  { i: "✉️", t: "ایمیل", v: "hello@amirgaza.com", h: "mailto:hello@amirgaza.com" },
  { i: "💬", t: "تلگرام", v: "@amirgaza", h: "https://t.me/amirgaza" },
  { i: "📸", t: "اینستاگرام", v: "@amirgaza", h: "https://instagram.com/amirgaza" },
  { i: "🐙", t: "گیت‌هاب", v: "github.com/amirgaza", h: "https://github.com/" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "طراحی وب‌سایت", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", subject: "طراحی وب‌سایت", message: "" });
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:bg-white/[0.07]";

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-blue-700/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          kicker="تماس با من"
          title="بیایید پروژه بعدی شما را بسازیم"
          desc="ایده‌تان را بنویسید؛ در کمتر از ۲۴ ساعت پاسخ می‌دهم."
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="glass rounded-3xl p-8">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs text-slate-400">نام و نام خانوادگی</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={input}
                    placeholder="مثلاً علی رضایی"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-slate-400">ایمیل یا شماره تماس</label>
                  <input
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={input}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs text-slate-400">موضوع همکاری</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`${input} [&>option]:bg-[#0a0c14]`}
                >
                  {["طراحی وب‌سایت", "توسعه نرم‌افزار", "راهکار هوش مصنوعی", "آموزش و منتورینگ", "مشاوره فنی"].map(
                    (o) => (
                      <option key={o}>{o}</option>
                    ),
                  )}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs text-slate-400">توضیح پروژه</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${input} resize-none`}
                  placeholder="کمی درباره ایده، بودجه و زمان‌بندی بنویسید..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-l from-blue-600 to-violet-600 py-3.5 text-sm font-bold text-white transition hover:scale-[1.01] hover:glow-purple"
              >
                ارسال درخواست همکاری
              </button>
              {sent && (
                <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-center text-sm text-emerald-300">
                  پیام شما با موفقیت ثبت شد ✅ به‌زودی با شما تماس می‌گیرم.
                </p>
              )}
            </form>
          </Reveal>

          <div className="space-y-5">
            {channels.map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <a
                  href={c.h}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600/25 to-violet-600/25 text-xl">
                    {c.i}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{c.t}</span>
                    <span className="block text-xs text-slate-400" dir="ltr">
                      {c.v}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={400} className="glass rounded-2xl p-6 text-center">
              <p className="text-sm leading-8 text-slate-300">
                پاسخ‌گویی در ساعات کاری
                <br />
                <span className="text-violet-300">شنبه تا پنجشنبه · ۹ تا ۲۰</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-black text-white">
              AG
            </span>
            <div>
              <div className="text-sm font-extrabold tracking-[0.2em] text-white">AMIR GAZA</div>
              <div className="text-[11px] text-slate-500">ساختن آینده با کد و هوش مصنوعی</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-400">
            {[
              ["خانه", "#home"],
              ["خدمات", "#services"],
              ["پروژه‌ها", "#projects"],
              ["آموزش", "#learn"],
              ["تماس", "#contact"],
            ].map(([t, h]) => (
              <a key={t} href={h} className="transition hover:text-white">
                {t}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-[11px] text-slate-600">
          © {new Date().getFullYear()} Amir Gaza — تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
