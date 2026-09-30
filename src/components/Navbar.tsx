import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "خانه" },
  { id: "about", label: "درباره من" },
  { id: "skills", label: "مهارت‌ها" },
  { id: "services", label: "خدمات" },
  { id: "projects", label: "پروژه‌ها" },
  { id: "ai", label: "هوش مصنوعی" },
  { id: "learn", label: "آموزش" },
  { id: "contact", label: "تماس با من" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      links.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 140) current = l.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#05060a]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => go("home")} className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-black text-white glow-purple">
            AG
          </span>
          <span className="text-lg font-extrabold tracking-[0.2em] text-white">
            AMIR<span className="text-violet-400"> GAZA</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === l.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-l from-blue-400 to-violet-400" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            className="hidden rounded-xl bg-gradient-to-l from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[1.03] hover:glow-blue sm:block"
          >
            شروع همکاری
          </button>
          <button
            aria-label="منو"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white xl:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/5 bg-[#05060a]/95 backdrop-blur-xl transition-all duration-500 xl:hidden ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <ul className="grid grid-cols-2 gap-2 px-5 py-5">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 hover:text-white"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="col-span-2">
            <button
              onClick={() => go("contact")}
              className="w-full rounded-xl bg-gradient-to-l from-blue-600 to-violet-600 px-4 py-3 text-sm font-bold text-white"
            >
              شروع همکاری
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
