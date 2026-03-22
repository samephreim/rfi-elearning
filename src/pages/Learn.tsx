import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses-data";
const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold  uppercase mb-6">
              Rwanda Forensic Institute
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold text-foreground  mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Master Forensic
            </h1>
            <h1>
              <span className="text-primary">Science</span> Online
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Professional forensic science courses designed by RFI experts.
              Build the skills needed to support Rwanda's justice system — from
              DNA analysis to digital forensics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold tracking-wide hover:opacity-90 transition-opacity"
              >
                Browse Courses
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 rounded-full border-2 border-foreground/20 text-foreground font-bold tracking-wide hover:bg-muted transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </section>
      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "6", label: "Courses" },
            { val: "41+", label: "Modules" },
            { val: "Expert", label: "Instructors" },
            { val: "Certificate", label: "On Completion" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-primary">{s.val}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          className="text-2xl md:text-3xl font-bold text-foreground mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Featured Courses
        </h2>
        <p className="text-muted-foreground mb-10">
          Start your forensic science journey with our most popular programs.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((c) => (
            <Link
              key={c.id}
              to={`/courses/${c.id}`}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {c.level}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {c.duration}
                </span>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {c.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">
                  {c.price.toLocaleString()} RWF
                </span>
                <span className="text-xs text-muted-foreground">
                  {c.modules} modules
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-bold tracking-wide hover:opacity-90 transition-opacity inline-block"
          >
            View All Courses →
          </Link>
        </div>
      </section>
      {/* Why RFI */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Why Study with RFI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏛️",
                title: "Government-Backed",
                desc: "Established by Presidential Order, RFI is Rwanda's official forensic science authority.",
              },
              {
                icon: "🧑‍🔬",
                title: "Expert Faculty",
                desc: "Learn from practicing forensic scientists with real casework experience.",
              },
              {
                icon: "📱",
                title: "Mobile Money Payment",
                desc: "Pay conveniently with MTN MoMo or Airtel Money — no credit card needed.",
              },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Rwanda Forensic Institute — E-Learning
          Platform
        </p>
        <p className="mt-1">Science For Justice</p>
      </footer>
    </div>
  );
};
export default Learn;
