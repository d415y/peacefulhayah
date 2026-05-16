import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import portrait from "@/assets/logo.png";
import {
  Brain,
  HeartHandshake,
  Users,
  GraduationCap,
  BookOpen,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Quote,
  ArrowLeft,
  Award,
  FileText,
  Lightbulb,
  Facebook,
  MessageCircle,
  Instagram,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const experiences = [
  {
    period: "حالياً",
    role: "أخصائية الإرشاد النفسي وتمكين الأسرة",
    bullets: [
      "تقديم الإرشاد النفسي الفردي والأسري وفق أحدث المقاربات العلمية.",
      "تصميم برامج تمكين الأسرة وتعزيز التواصل الصحي بين أفرادها.",
      "دعم الأمهات والمراهقين في بناء المرونة النفسية والثقة بالنفس.",
    ],
  },
  {
    period: "2021 — حتى الآن",
    role: "مستشارة صحة نفسية ومدربة حياة مستقلة",
    bullets: [
      "تقديم جلسات دعم نفسي وإرشاد قائم على العلاج المعرفي السلوكي.",
      "مساعدة الأفراد على إدارة القلق والضغوط والتحديات النفسية.",
      "تعزيز الوعي الذاتي والنمو الشخصي.",
    ],
  },
  {
    period: "2011 — 2021",
    role: "مديرة وإدارية مدرسية",
    bullets: [
      "إدارة العمليات الأكاديمية وبرامج رعاية الطلبة.",
      "تدريب الكادر التعليمي على استراتيجيات تعليمية وتربوية.",
      "تعزيز العلاقة بين المدرسة والأسرة والمجتمع.",
    ],
  },
  {
    period: "2013 — 2017",
    role: "محاضرة لغة إنجليزية — جامعة طيبة",
    bullets: [
      "تصميم مناهج تعليمية تفاعلية.",
      "دمج مبادئ علم النفس التحفيزي لتعزيز الثقة بالنفس والتفكير النقدي.",
    ],
  },
  {
    period: "1999 — 2011",
    role: "معلمة لغة إنجليزية — وزارة التربية والتعليم",
    bullets: [
      "تطوير مواد تعليمية تراعي الفروق الفردية.",
      "استخدام مهارات الإرشاد والاستماع الفعال لدعم الطلبة.",
    ],
  },
];

const services = [
  { icon: Brain, title: "العلاج المعرفي السلوكي", desc: "جلسات CBT منظمة لإدارة القلق والاكتئاب وتعديل الأنماط الفكرية." },
  { icon: HeartHandshake, title: "الإرشاد النفسي", desc: "مساحة آمنة قائمة على الاستماع الفعّال والاحتواء وفهم الذات." },
  { icon: Users, title: "تمكين الأسرة والمراهقين", desc: "برامج موجهة لبناء التواصل الصحي ودعم النمو الانفعالي للأبناء." },
  { icon: GraduationCap, title: "القيادة التربوية", desc: "تدريب الكوادر التعليمية على الدعم النفسي وتطوير بيئات تعلم داعمة." },
  { icon: Sparkles, title: "تصميم الورش التوعوية", desc: "ورش تفاعلية حول الصحة النفسية، الكفاءة الذاتية، والمرونة." },
  { icon: Lightbulb, title: "إعداد المحتوى الرقمي", desc: "محتوى نفسي علمي مبسّط يصل للجمهور العربي بلغة دافئة وواضحة." },
];

const qualifications = [
  { title: "دكتوراه في الطب النفسي السلوكي", place: "الجامعة المفتوحة للعلوم الطبية" },
  { title: "ماجستير علم النفس التربوي", place: "جامعة البلقاء التطبيقية" },
  { title: "دبلوم اختصاصي التقييم النفسي والاختبارات النفسية والنفسعصبية التطبيقي", place: "الجامعة البريطانية في ليدز" },
  
  { title: "بكالوريوس اللغة الإنجليزية وآدابها", place: "الجامعة الأردنية" },
];

const research = [
  "أثر تبني مفهوم الكفاءة الذاتية الأكاديمية وعلاقته بالتوافق النفسي عند الطلبة فاقدي البصر.",
  "أثر نظرية كارول دويك المتعلقة بنمو العقليات على دافعية الطلبة ذوي صعوبات التعلم.",
];

const publications = [
  "اضطراب ما بعد الصدمة — رحلة التعافي.",
  "حين يتكلم الألم — رحلة الوعي والنور.",
  "كتاب أطفال تعليمي مصور بعنوان I Can.",
  "موعد مع الشروق.",
  "أن تكوني أنتِ.",
  "رحلة التعلم والإيمان (4–8 سنوات).",
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="شعار د. حياة" className="h-11 w-11 rounded-full object-cover bg-sand" />
            <div className="leading-tight">
              <div className="font-bold text-lg">د. حياة حجير</div>
              <div className="text-xs text-muted-foreground">دعم نفسي وإرشاد وتمكين أسري</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">عنّي</a>
            <a href="#experience" className="hover:text-primary transition-colors">الخبرات</a>
            <a href="#services" className="hover:text-primary transition-colors">الخدمات</a>
            <a href="#works" className="hover:text-primary transition-colors">الأبحاث والمنشورات</a>
            <a href="#contact" className="hover:text-primary transition-colors">تواصل</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            احجز جلسة <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.62 0.14 145 / 0.25), transparent 50%), radial-gradient(circle at 80% 60%, oklch(0.42 0.07 55 / 0.2), transparent 55%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-7">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              معالجة معرفية سلوكية معتمدة
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] text-bark">
              مساحة آمنة <br />
              لرحلتك نحو <span className="text-primary">التعافي</span> والنمو.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              د. حياة حجير — أخصائية نفسية ومدربة تمكين، تمتلك خبرة أكاديمية ومهنية واسعة في
              العلاج المعرفي السلوكي، الإرشاد النفسي، وتمكين الأسرة، تجمع بين الأسلوب العلمي
              والاحتواء الإنساني.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition shadow-[0_20px_40px_-15px_oklch(0.42_0.07_55/0.5)]"
              >
                احجز استشارتك <ArrowLeft className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-border px-7 py-3.5 rounded-full font-semibold hover:bg-muted transition"
              >
                تعرّف على الخدمات
              </a>
            </div>
            <div className="flex flex-wrap gap-8 pt-6 text-sm">
              {[
                { num: "+25", label: "عاماً من الخبرة" },
                { num: "4", label: "مؤهلات أكاديمية" },
                { num: "6", label: "إصدارات ومؤلفات" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-secondary">{s.num}</div>
                  <div className="text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-card shadow-[var(--shadow-leaf)] aspect-[4/5]">
              <img src={portrait} alt="شعار د. حياة حجير" className="w-full h-full object-cover bg-sand" width={1024} height={1280} />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] border border-border max-w-[240px]">
              <div className="flex items-center gap-2 text-primary text-xs font-semibold mb-1">
                <Award className="h-4 w-4" /> أعلى المؤهلات
              </div>
              <div className="text-sm font-bold leading-snug">دكتوراه في الطب النفسي السلوكي</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-sand/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Quote className="h-10 w-10 text-primary mx-auto mb-6 rotate-180" />
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-bark">
            «أؤمن أن في داخل كل نفسٍ نوراً أودعه الله فيها، ينتظر يداً رفيقة تُعينه على الإشراق من جديد.
            رسالتي أن أكون عوناً وسنداً، أُصغي بقلبٍ قبل أن أُصغي بأذن، وأمشي معك في مساحةٍ آمنة يلتقي فيها العلم بالإيمان، والرحمة بالفهم، فتعود النفس إلى طمأنينتها بإذن الله.»
          </p>
          <div className="mt-8 text-muted-foreground">— د. حياة حجير</div>
        </div>
      </section>

      {/* EXPERIENCE — image right + below: main grid */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-primary font-semibold mb-2 text-sm tracking-widest uppercase">المسيرة المهنية</div>
              <h2 className="text-4xl md:text-5xl font-black text-bark">خبرات تمتد لربع قرن</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              من قاعات التدريس إلى عيادة الإرشاد النفسي — رحلة جمعت بين التربية، القيادة، والعلاج.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Experience list — LEFT in RTL means appears on the visual left */}
            <div className="md:col-span-7 order-2 md:order-1 space-y-5">
              {experiences.map((exp, i) => (
                <article
                  key={i}
                  className="group bg-card border border-border rounded-3xl p-7 hover:border-primary hover:shadow-[var(--shadow-soft)] transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="text-xl font-bold text-bark group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Image on the right */}
            <div className="md:col-span-5 order-1 md:order-2 md:sticky md:top-28">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-leaf)] aspect-[4/5]">
                <img
                  src={portrait}
                  alt="شعار د. حياة حجير"
                  className="w-full h-full object-cover bg-sand"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-7 text-primary-foreground">
                  <div className="text-xs uppercase tracking-widest opacity-80 mb-1">عمّان — الأردن</div>
                  <div className="text-2xl font-bold">جلسات حضورية وأونلاين</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-primary text-primary-foreground rounded-2xl p-5">
                  <div className="text-3xl font-black">CBT</div>
                  <div className="text-xs opacity-90 mt-1">منهج علاجي قائم على الأدلة</div>
                </div>
                <div className="bg-secondary text-secondary-foreground rounded-2xl p-5">
                  <div className="text-3xl font-black">+25</div>
                  <div className="text-xs opacity-90 mt-1">عاماً من العمل الإنساني</div>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN GRID below */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <div className="text-primary font-semibold mb-2 text-sm tracking-widest uppercase">المهارات والكفاءات</div>
              <h3 className="text-3xl md:text-4xl font-black text-bark">قسم رئيسي يجمع أدوات العمل</h3>
            </div>
            <div id="services" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group relative bg-card border border-border rounded-3xl p-7 overflow-hidden hover:border-primary transition-all"
                >
                  <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-primary/5 group-hover:bg-primary/15 transition-all" />
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-bark">{s.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white, transparent 40%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <div className="font-semibold mb-2 text-sm tracking-widest uppercase opacity-70">المؤهلات العلمية</div>
            <h2 className="text-4xl md:text-5xl font-black">مسيرة أكاديمية متعددة التخصصات</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualifications.map((q) => (
              <div key={q.title} className="bg-secondary-foreground/5 border border-secondary-foreground/15 rounded-3xl p-6 backdrop-blur-sm hover:bg-secondary-foreground/10 transition-all">
                <GraduationCap className="h-8 w-8 mb-4 text-accent" />
                <h4 className="font-bold leading-snug mb-2">{q.title}</h4>
                <p className="text-sm opacity-70">{q.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH + PUBLICATIONS */}
      <section id="works" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-bark">الأبحاث</h3>
            </div>
            <ul className="space-y-4">
              {research.map((r, i) => (
                <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                  <span className="font-black text-2xl text-primary leading-none">0{i + 1}</span>
                  <span className="flex-1">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-accent text-accent-foreground grid place-items-center">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-bark">المنشورات والمؤلفات</h3>
            </div>
            <ul className="space-y-4">
              {publications.map((p, i) => (
                <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                  <span className="font-black text-2xl text-accent leading-none">0{i + 1}</span>
                  <span className="flex-1">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-sand/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[2.5rem] bg-card border border-border p-10 md:p-14 shadow-[var(--shadow-soft)] grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-bark leading-tight mb-4">
                ابدأ خطوتك<br />نحو مساحة أكثر صفاءً.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                للحجز أو الاستفسار عن الجلسات، الورش، والاستشارات الأسرية — تواصل معي مباشرة.
              </p>
            </div>
            <div className="space-y-4">
              <a href="mailto:hayathajier@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all group">
                <Mail className="h-5 w-5" />
                <div className="text-sm">
                  <div className="opacity-70 text-xs">البريد الإلكتروني</div>
                  <div className="font-semibold" dir="ltr">hayathajier@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/962790840311" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <MessageCircle className="h-5 w-5" />
                <div className="text-sm">
                  <div className="opacity-70 text-xs">واتساب</div>
                  <div className="font-semibold" dir="ltr">+962 79 084 0311</div>
                </div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61568130736180" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="h-5 w-5" />
                <div className="text-sm">
                  <div className="opacity-70 text-xs">فيسبوك</div>
                  <div className="font-semibold">صفحتي على فيسبوك</div>
                </div>
              </a>
              <a href="https://www.instagram.com/peaceful_hayah/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="h-5 w-5" />
                <div className="text-sm">
                  <div className="opacity-70 text-xs">انستغرام</div>
                  <div className="font-semibold" dir="ltr">@peaceful_hayah</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted">
                <MapPin className="h-5 w-5" />
                <div className="text-sm">
                  <div className="opacity-70 text-xs">الموقع</div>
                  <div className="font-semibold">عمّان — الأردن</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8 rounded-full bg-sand object-cover" />
            <span>© {new Date().getFullYear()} د. حياة حجير — جميع الحقوق محفوظة.</span>
          </div>
          <div>صُمِّم بحبّ ورِفق.</div>
        </div>
      </footer>
    </div>
  );
}
