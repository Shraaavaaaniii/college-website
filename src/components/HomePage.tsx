import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../hero.png";
import library from "../library-1.jpg";
import canteen from "../Canteen.jpeg";
import partnership from "../Design-and-Innovation-scaled.jpg";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { icon: Users, value: "10,000+", label: "Students" },
    { icon: GraduationCap, value: "95%", label: "Placement Rate" },
    { icon: Award, value: "100+", label: "Companies" },
    { icon: BookOpen, value: "50+", label: "Programs" },
  ];

  const highlights = [
    {
      title: "Library Facility",
      description: "A vast repository of knowledge featuring over 1,00,000 volumes, access to premium e-journals (IEEE, ScienceDirect), and quiet study zones for focused learning and research.",
      image: library,
    },
    {
      title: "Canteen & Dining",
      description: "A hygienic and spacious campus canteen offering a diverse menu of nutritious meals, snacks, and beverages, serving as a comfortable hub for students and faculty to relax and socialize.",
      image: canteen,
    },
    {
      title: "Modern Laboratories",
      description: "Equipped with the latest technology and tools, our labs provide hands-on experience in various fields.",
      image: partnership,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src={heroImage}
            alt="College Campus"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Welcome to D Y Patil College of Engineering & Technology
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Empowering students with knowledge, skills, and values to excel in their careers and contribute to society.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => onNavigate("admissions")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate("about")}
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon size={40} className="mx-auto mb-4" />
                  <div className="text-4xl mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Why Choose DYPCET College?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide an exceptional learning environment that prepares students for success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their lives at DYPCET College.
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate("admissions")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Explore Admission Process
          </Button>
        </div>
      </section>
    </div>
  );
}
