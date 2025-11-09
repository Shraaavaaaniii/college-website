import { TrendingUp, Users, Briefcase, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PlacementsPage() {
  const stats = [
    {
      icon: TrendingUp,
      value: "90%",
      label: "Placement Rate",
      description: "Students placed in top companies",
    },
    {
      icon: Users,
      value: "100+",
      label: "Recruiting Companies",
      description: "Global and national recruiters",
    },
    {
      icon: Briefcase,
      value: "4-6 LPA",
      label: "Average Package",
      description: "Competitive salary offerings",
    },
    {
      icon: Award,
      value: "60 LPA",
      label: "Highest Package",
      description: "Record-breaking offers",
    },
  ];

  const topRecruiters = [
    "Google", "Microsoft", "Amazon", "Apple", "Meta",
    "Goldman Sachs", "JP Morgan", "McKinsey & Company",
    "Deloitte", "KPMG", "Accenture", "IBM",
    "Intel", "Cisco", "Adobe", "Salesforce"
  ];

  const placementsByDepartment = [
    { department: "Computer Science Engineering", percentage: 90 },
    { department: "Computer Science Engineering (Data Science)", percentage: 80 },
    { department: "Computer Science Engineering (Artificial Intelligence & Machine Learning)", percentage: 95 },
    { department: "Civil Engineering", percentage: 85 },
    { department: "Mechanical Engineering", percentage: 88 },
    { department: "Electronics & Telecommunication", percentage: 85 },
    { department: "Chemical Engineering", percentage: 83 },
  ];

  const testimonials = [
    {
      name: "Anamika Dakare",
      company: "Adobe",
      role: "Software Engineer",
      quote: "The placement cell at DYPCET College provided exceptional support throughout my job search. The training and guidance helped me land my dream job at Adobe.",
      year: "Class of 2023",
    },
    {
      name: "Rahul Patil",
      company: "Cisco Systems",
      role: "Network Engineer",
      quote: "I am grateful for the placement opportunities and the professional development sessions offered by the college. They played a crucial role in my successful placement at Cisco.",
      year: "Class of 2023",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Placements</h1>
            <p className="text-xl text-blue-100">
              Our track record speaks for itself. DYPCET College has consistently achieved outstanding placement results, connecting our graduates with leading companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Icon size={40} className="text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl text-gray-900 mb-2">{stat.value}</div>
                    <div className="mb-2">{stat.label}</div>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Top Recruiters</h2>
            <p className="text-xl text-gray-600">
              Leading companies that trust our graduates
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {topRecruiters.map((company, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement by Department */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Placement Success by Department</h2>
            <p className="text-xl text-gray-600">
              Consistent excellence across all disciplines
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {placementsByDepartment.map((dept, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-900">{dept.department}</span>
                    <span className="text-blue-600">{dept.percentage}%</span>
                  </div>
                  <Progress value={dept.percentage} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="h-96 overflow-hidden rounded-lg max-w-5xl mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623461487986-9400110de28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNjE1NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Graduation ceremony"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Our Placement Process</h2>
            <p className="text-xl text-gray-600">
              Comprehensive support from training to placement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Career Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  One-on-one guidance to help students identify their career goals and interests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Training programs in technical skills, soft skills, and industry-specific knowledge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mock Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Practice sessions with industry professionals to build confidence and readiness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Placement Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Coordination with companies and support throughout the recruitment process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our successful alumni
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-center mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-blue-600 text-center mb-1">{testimonial.role}</p>
                    <p className="text-sm text-gray-600 text-center">{testimonial.company}</p>
                  </div>
                  <p className="text-gray-600 text-sm italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-xs text-gray-500 text-center">{testimonial.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-gray-900 mb-6">Ready to Launch Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join DYPCET College and benefit from our extensive industry connections and dedicated placement support.
          </p>
        </div>
      </section>
    </div>
  );
}
