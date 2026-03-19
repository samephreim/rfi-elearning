import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/Courses";
import { useState } from "react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);
  const [openModule, setOpenModule] = useState<number | null>(0);

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">← Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/courses" className="text-sm mb-4 inline-block">
          ← All Courses
        </Link>
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="mb-4">{course.longDescription}</p>
        <div className="text-2xl font-bold mb-4">{course.price.toLocaleString()} RWF</div>
        <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
        <div className="space-y-2">
          {course.curriculum.map((mod: { title: string; topics: string[] }, i: number) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenModule(openModule === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span>Module {i + 1}: {mod.title}</span>
              </button>
              {openModule === i && (
                <div className="px-5 py-4 border-t">
                  <ul className="space-y-2">
                    {mod.topics.map((t: string, j: number) => (
                      <li key={j} className="text-sm">• {t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;