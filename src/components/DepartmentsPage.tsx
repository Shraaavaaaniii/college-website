// import { Code, Beaker, Calculator, Briefcase, Palette, Languages } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Badge } from "./ui/badge";

// export function DepartmentsPage() {
//   const departments = [
//     {
//       icon: Code,
//       name: "Computer Science & Engineering",
//       description: "Leading-edge programs in software development, AI, machine learning, and cybersecurity.",
//       programs: ["B.Tech CSE", "M.Tech CSE", "Ph.D."],
//       faculty: 45,
//       students: 1200,
//       highlights: ["AI Research Lab", "Industry Internships", "Hackathon Champions"],
//     },
//     {
//       icon: Beaker,
//       name: "Sciences",
//       description: "Comprehensive programs in physics, chemistry, biology, and environmental sciences.",
//       programs: ["B.Sc", "M.Sc", "Ph.D."],
//       faculty: 38,
//       students: 800,
//       highlights: ["Advanced Laboratories", "Research Publications", "Field Studies"],
//     },
//     {
//       icon: Calculator,
//       name: "Mathematics & Statistics",
//       description: "Strong foundation in pure and applied mathematics, statistics, and data science.",
//       programs: ["B.Sc", "M.Sc", "Ph.D."],
//       faculty: 25,
//       students: 500,
//       highlights: ["Data Analytics Lab", "Mathematical Modeling", "Statistical Consulting"],
//     },
//     {
//       icon: Briefcase,
//       name: "Business & Management",
//       description: "Innovative MBA and business programs focused on leadership and entrepreneurship.",
//       programs: ["BBA", "MBA", "Ph.D."],
//       faculty: 42,
//       students: 1000,
//       highlights: ["Startup Incubator", "Corporate Partnerships", "International Exchange"],
//     },
//     {
//       icon: Palette,
//       name: "Arts & Humanities",
//       description: "Rich programs in literature, history, philosophy, and cultural studies.",
//       programs: ["BA", "MA", "Ph.D."],
//       faculty: 30,
//       students: 600,
//       highlights: ["Creative Writing", "Cultural Events", "Research Centers"],
//     },
//     {
//       icon: Languages,
//       name: "Languages",
//       description: "Comprehensive language programs including English, Spanish, French, and more.",
//       programs: ["BA", "MA", "Ph.D."],
//       faculty: 28,
//       students: 450,
//       highlights: ["Language Labs", "Study Abroad", "Translation Services"],
//     },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl mb-6">Departments</h1>
//             <p className="text-xl text-blue-100">
//               Explore our diverse range of academic departments, each committed to excellence in teaching, research, and innovation.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
//             <div>
//               <div className="text-4xl text-blue-600 mb-2">50+</div>
//               <p className="text-gray-600">Academic Programs</p>
//             </div>
//             <div>
//               <div className="text-4xl text-blue-600 mb-2">200+</div>
//               <p className="text-gray-600">Faculty Members</p>
//             </div>
//             <div>
//               <div className="text-4xl text-blue-600 mb-2">5000+</div>
//               <p className="text-gray-600">Students Enrolled</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Departments Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl text-gray-900 mb-4">Our Departments</h2>
//             <p className="text-xl text-gray-600">
//               Excellence across all disciplines
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {departments.map((dept, index) => {
//               const Icon = dept.icon;
//               return (
//                 <Card key={index} className="hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Icon size={24} className="text-blue-600" />
//                       </div>
//                       <div className="flex-grow">
//                         <CardTitle className="mb-2">{dept.name}</CardTitle>
//                         <p className="text-gray-600 text-sm">{dept.description}</p>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       <div>
//                         <p className="text-sm mb-2">Programs Offered:</p>
//                         <div className="flex flex-wrap gap-2">
//                           {dept.programs.map((program, idx) => (
//                             <Badge key={idx} variant="secondary">
//                               {program}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div>
//                           <p className="text-gray-600">Faculty</p>
//                           <p className="text-blue-600">{dept.faculty} Members</p>
//                         </div>
//                         <div>
//                           <p className="text-gray-600">Students</p>
//                           <p className="text-blue-600">{dept.students}+</p>
//                         </div>
//                       </div>

//                       <div>
//                         <p className="text-sm mb-2">Key Highlights:</p>
//                         <ul className="space-y-1">
//                           {dept.highlights.map((highlight, idx) => (
//                             <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
//                               <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
//                               {highlight}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Research & Innovation */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl text-gray-900 mb-4">Research & Innovation</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our departments are at the forefront of research, contributing to advancements in their respective fields through cutting-edge projects and publications.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <Card>
//               <CardContent className="p-6 text-center">
//                 <div className="text-3xl text-blue-600 mb-2">150+</div>
//                 <p className="text-gray-600">Research Projects</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 text-center">
//                 <div className="text-3xl text-blue-600 mb-2">500+</div>
//                 <p className="text-gray-600">Publications</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 text-center">
//                 <div className="text-3xl text-blue-600 mb-2">25+</div>
//                 <p className="text-gray-600">Research Labs</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Facilities */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl text-gray-900 mb-4">State-of-the-Art Facilities</h2>
//             <p className="text-xl text-gray-600">
//               World-class infrastructure supporting academic excellence
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             <div className="bg-gray-50 p-6 rounded-lg text-center">
//               <h3 className="mb-2">Modern Classrooms</h3>
//               <p className="text-gray-600 text-sm">Smart classrooms with latest technology</p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg text-center">
//               <h3 className="mb-2">Advanced Labs</h3>
//               <p className="text-gray-600 text-sm">Well-equipped laboratories for practical learning</p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg text-center">
//               <h3 className="mb-2">Digital Library</h3>
//               <p className="text-gray-600 text-sm">Extensive collection of books and e-resources</p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg text-center">
//               <h3 className="mb-2">Research Centers</h3>
//               <p className="text-gray-600 text-sm">Dedicated spaces for innovation and research</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Beaker, Calculator, Briefcase, Palette, Languages } from "lucide-react";

type Department = {
  name: string;
  description: string;
  programs?: string[];
  faculty?: number;
  students?: number;
  achievements?: string[];
};

export function DepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/departments");
        if (!res.ok) throw new Error("Failed to fetch departments");
        const data = await res.json();
        setDepartments(data);
      } catch (err) {
        console.error("Error:", err);
        setError("Unable to load departments.");
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  // Optional mapping for icons — fallback if backend doesn’t provide icon field
  const iconMap = {
    "Computer Engineering": Code,
    "Science": Beaker,
    "Mathematics": Calculator,
    "Business": Briefcase,
    "Arts": Palette,
    "Languages": Languages,
  };

  if (loading) return <p className="text-center py-10 text-gray-600">Loading departments...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Departments</h1>
            <p className="text-xl text-blue-100">
              Explore our diverse range of academic departments, each committed to excellence in teaching, research, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Academic Programs</p>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">200+</div>
              <p className="text-gray-600">Faculty Members</p>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">5000+</div>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">Excellence across all disciplines</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, index) => {
              const Icon = iconMap[dept.name as keyof typeof iconMap] || Code;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-blue-600" />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="mb-2">{dept.name}</CardTitle>
                        <p className="text-gray-600 text-sm">{dept.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm mb-2">Programs Offered:</p>
                        <div className="flex flex-wrap gap-2">
                          {dept.programs?.map((program, idx) => (
                            <Badge key={idx} variant="secondary">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Faculty</p>
                          <p className="text-blue-600">{dept.faculty || 0} Members</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Students</p>
                          <p className="text-blue-600">{dept.students || 0}+</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm mb-2">Key Highlights:</p>
                        <ul className="space-y-1">
                          {dept.achievements?.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
