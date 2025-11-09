import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function ContactUsPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Kasaba Bawada, Kolhapur", "Maharashtra 416006"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9158915999", "+91 9158615999 (Admissions)"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info.dypcet@dypgroup.edu.in", "admission.dypcet@dypgroup.edu.in"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 4:00 PM", "Saturday & Sunday: Closed"],
    },
  ];

  const departments = [
    { name: "Admissions Office", email: "admissions@dypcet.edu.in", phone: "+91 9158915999" },
    { name: "Registrar's Office", email: "registrar@dypcet.edu.in", phone: "+91 9158615999" },
    { name: "Financial Aid", email: "financialaid@dypcet.edu.in", phone: "+91 9158715999" },
    { name: "Student Affairs", email: "studentaffairs@dypcet.edu.in", phone: "+91 9158815999" },
    { name: "Career Services", email: "careers@dypcet.edu.in", phone: "+91 9158915999" },
    { name: "IT Support", email: "itsupport@dypcet.edu.in", phone: "+91 9159015999" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              We're here to help. Reach out to us with any questions, concerns, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600 mb-1">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Send us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">
              Reach out to specific departments directly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={16} className="flex-shrink-0" />
                      <a href={`mailto:${dept.email}`} className="hover:text-blue-600 break-all">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={16} className="flex-shrink-0" />
                      <a href={`tel:${dept.phone}`} className="hover:text-blue-600">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl text-gray-900 mb-4">Visit Our Campus</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Schedule a campus tour and experience DYPCET College firsthand. Meet our faculty, explore our facilities, and get a feel for student life.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule a Campus Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
