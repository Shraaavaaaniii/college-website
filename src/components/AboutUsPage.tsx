// import { Target, Eye, Award, Users } from "lucide-react";
// import { Card, CardContent } from "./ui/card";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function AboutUsPage() {
//   const values = [
//     {
//       icon: Target,
//       title: "Excellence",
//       description: "We strive for excellence in everything we do, from academics to extracurricular activities.",
//     },
//     {
//       icon: Users,
//       title: "Inclusivity",
//       description: "We celebrate diversity and create an inclusive environment for all students.",
//     },
//     {
//       icon: Award,
//       title: "Innovation",
//       description: "We encourage creative thinking and innovative solutions to real-world problems.",
//     },
//     {
//       icon: Eye,
//       title: "Integrity",
//       description: "We uphold the highest standards of honesty and ethical behavior.",
//     },
//   ];

//   const milestones = [
//     { year: "1975", event: "College founded with 200 students" },
//     { year: "1990", event: "Expanded to include engineering programs" },
//     { year: "2005", event: "Achieved national accreditation status" },
//     { year: "2015", event: "Ranked among top 50 colleges nationally" },
//     { year: "2025", event: "Celebrating 50 years of excellence" },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl mb-6">About Excellence College</h1>
//             <p className="text-xl text-blue-100">
//               For over five decades, we have been at the forefront of higher education, nurturing talent and shaping future leaders.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission and Vision */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl text-gray-900 mb-6">Our Mission</h2>
//               <p className="text-gray-600 mb-4">
//                 To provide transformative education that empowers students with knowledge, skills, and values to excel in their chosen fields and contribute positively to society.
//               </p>
//               <p className="text-gray-600">
//                 We are committed to fostering critical thinking, creativity, and leadership qualities while maintaining the highest standards of academic excellence.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl text-gray-900 mb-6">Our Vision</h2>
//               <p className="text-gray-600 mb-4">
//                 To be recognized globally as a premier institution of higher learning that shapes innovative leaders and contributes to the advancement of knowledge and society.
//               </p>
//               <p className="text-gray-600">
//                 We envision a future where our graduates are equipped to tackle global challenges and drive positive change in their communities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Image Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="h-80 overflow-hidden rounded-lg">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1625111380820-9a371d413cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYyNjM0Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                 alt="Students collaborating"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="h-80 overflow-hidden rounded-lg">
//               <ImageWithFallback
//                 src="https://images.unsplash.com/flagged/photo-1580408453889-ed5e1b51924a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyNjU3OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                 alt="Campus building"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-xl text-gray-600">
//               These principles guide everything we do
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => {
//               const Icon = value.icon;
//               return (
//                 <Card key={index} className="text-center hover:shadow-lg transition-shadow">
//                   <CardContent className="p-8">
//                     <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <Icon size={32} className="text-blue-600" />
//                     </div>
//                     <h3 className="text-xl mb-3">{value.title}</h3>
//                     <p className="text-gray-600">{value.description}</p>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl text-gray-900 mb-4">Our Journey</h2>
//             <p className="text-xl text-gray-600">
//               Key milestones in our history
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="space-y-8">
//               {milestones.map((milestone, index) => (
//                 <div key={index} className="flex gap-6 items-start">
//                   <div className="flex-shrink-0">
//                     <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white">
//                       {milestone.year}
//                     </div>
//                   </div>
//                   <div className="flex-grow bg-white p-6 rounded-lg shadow-sm">
//                     <p className="text-lg text-gray-900">{milestone.event}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Accreditation */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl text-gray-900 mb-6">Accreditations & Recognitions</h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Excellence College is accredited by leading educational bodies and has received numerous awards for academic excellence, research contributions, and student outcomes.
//           </p>
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <Card>
//               <CardContent className="p-6">
//                 <Award size={40} className="text-blue-600 mx-auto mb-4" />
//                 <h3 className="text-xl mb-2">National Accreditation</h3>
//                 <p className="text-gray-600">Accredited by National Assessment and Accreditation Council</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6">
//                 <Award size={40} className="text-blue-600 mx-auto mb-4" />
//                 <h3 className="text-xl mb-2">Top 50 Ranking</h3>
//                 <p className="text-gray-600">Ranked among the top 50 colleges nationally</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6">
//                 <Award size={40} className="text-blue-600 mx-auto mb-4" />
//                 <h3 className="text-xl mb-2">Excellence Award</h3>
//                 <p className="text-gray-600">Recipient of multiple excellence awards in education</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ICONS = { Target, Eye, Award, Users };

type AboutData = {
  mission: string;
  vision: string;
  values: { icon: keyof typeof ICONS; title: string; description: string }[];
  milestones: { year: string; event: string }[];
};

export function AboutUsPage() {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((err) => console.error("Error fetching About data:", err));
  }, []);

  if (!data) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-6">About us:</h1>
          <p className="text-xl text-blue-100">
            D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur is a self-financing Autonomous Institute established in the year 1984 under the visionary leadership of Padmashree Dr. D. Y. Patil, Former Governor of Tripura, Bihar and West Bengal. UGC, New Delhi and Shivaji University, Kolhapur has conferred Autonomous status to the Institute in 2020. The Institution is approved by All India Council for Technical Education (AICTE), New Delhi, Government of Maharashtra and affiliated to Shivaji University, Kolhapur. The Institute is accredited by National Assessment and Accreditation Council (NAAC), Bangalore with ‘A’ grade (CGPA- 3.08).
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600">{data.mission}</p>
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600">{data.vision}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.values.map((value, i) => {
              const Icon = ICONS[value.icon] || Target;
              return (
                <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-8">Our Journey</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {data.milestones.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {item.year}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                  <p className="text-lg text-gray-900">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
