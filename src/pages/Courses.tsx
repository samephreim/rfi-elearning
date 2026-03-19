import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/courses";
const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;
const Courses = () => {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? courses : courses.filter((c) => c.level === filter);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Georgia', serif" }}>
          All Courses
        </h1>
        <p className="text-muted-foreground mb-8">
          Professional forensic science training programs by Rwanda Forensic Institute.
        </p>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setFilter(l)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === l
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <Link
              key={c.id}
              to={`/courses/${c.id}`}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {c.level}
                </span>
                <span className="text-[10px] text-muted-foreground">{c.duration}</span>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">{c.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-bold text-primary">{c.price.toLocaleString()} RWF</span>
                <span className="text-xs text-muted-foreground">{c.modules} modules</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Courses;