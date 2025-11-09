import { Calendar, FileText, IndianRupee, CheckCircle2, UserCheck, GraduationCap } from "lucide-react";

// Remove local UI component definitions and import from UI library
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

export  function AdmissionsPage() {
  // Updated steps based on Maharashtra CAP process
  const steps = [
    {
      icon: GraduationCap,
      title: "Step 1: Entrance Exam",
      description: "Appear for MHT-CET, JEE Main (Paper-I), or GATE (for M.Tech) and secure a valid non-zero score.",
    },
    {
      icon: FileText,
      title: "Step 2: CAP Registration",
      description: "Register for the Centralized Admission Process (CAP) on the official Maharashtra State CET Cell website.",
    },
    {
      icon: UserCheck,
      title: "Step 3: Allotment",
      description: "Participate in CAP rounds for counselling and seat allotment based on your merit rank.",
    },
    {
      icon: IndianRupee,
      title: "Step 4: Institute Reporting",
      description: "Report to the institute with the allotment letter, original documents, and fees to confirm admission.",
    },
  ];

  // Specific programs offered by DYPCET
  const programs = [
    {
      level: "Undergraduate (B.Tech)",
      degrees: [
        "Computer Science & Engineering",
        "CSE (Artificial Intelligence & Machine Learning)",
        "CSE (Data Science)",
        "Electronics & Telecommunication Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
      ],
      duration: "4 years",
    },
    {
      level: "Postgraduate (M.Tech)",
      degrees: [
        "Computer Science & Engineering",
        "Electronics & Telecommunication Engineering",
        // Add other M.Tech specializations if known, e.g., CAD/CAM, Construction Mgmt
      ],
      duration: "2 years",
    },
    {
      level: "Doctoral (Ph.D.)",
      degrees: [
        "Computer Science & Engineering",
        "Electronics & Telecommunication Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
      ],
      duration: "3-5 years",
    },
  ];

  // Specific FAQs based on DYPCET context
  const faqs = [
    {
      question: "What are the eligibility criteria for B.Tech First Year?",
      answer: "Candidates must have passed HSC (10+2) with Physics, Mathematics, and Chemistry/Biotechnology/Biology/Technical Vocational subject. A minimum of 45% marks (40% for reserved categories) in these subjects combined is required, along with a valid MHT-CET or JEE Main (Paper-I) score.",
    },
    {
      question: "What is the admission process for B.Tech?",
      answer: "Admissions are primarily conducted through the Centralized Admission Process (CAP) managed by the State CET Cell, Maharashtra, based on MHT-CET/JEE scores. A portion of seats (20%) are available for Institute Level Quota (ILQ) and are filled based on merit.",
    },
    {
      question: "What documents are required for admission?",
      answer: "You will need your MHT-CET/JEE Score Card, CAP Allotment Letter, 10th & 12th Mark Sheets, Leaving Certificate, Domicile/Nationality Certificate, and (if applicable) Caste Certificate, Validity Certificate, and Non-Creamy Layer Certificate.",
    },
    {
      question: "What is the fee structure?",
      answer: "The college fee structure is finalized and approved by the 'Fee Regulating Authority' (FRA), Government of Maharashtra. You can find the detailed, program-wise fee structure on our website's 'Fee Structure' page.",
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, students can avail various scholarships offered by the State and Central Government, including EBC, SC/ST, OBC, VJNT, and Minority scholarships. Our admission cell provides guidance on the application process for these.",
    },
  ];

  return (
    <div className="font-sans">

      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6">Admission Process</h1>
            <p className="text-xl text-blue-100">
Follow these simple steps for admission through the Centralized Admission Process (CAP).
            </p>
          </div>
        </div>
      </section>
    {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-600">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon size={40} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programs Offered</h2>
            <p className="text-xl text-gray-600">
              Explore our wide range of accredited engineering programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle>{program.level}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-3">Duration: {program.duration}</p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {program.degrees.map((degree, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center gap-3">
                          <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                          <span>{degree}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the official admission schedule.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Calendar size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Official Schedule</h3>
                <p className="text-gray-600 mt-1">
                  All dates for CAP registration, document verification, and allotment rounds are published by the
                  <strong className="text-gray-800"> State Common Entrance Test Cell, Maharashtra</strong>.
                  We recommend all candidates to regularly check the official CET Cell website for the latest updates.
                </p>
                <Button size="sm" variant="outline" className="mt-4 border-gray-300 hover:bg-gray-100" onClick={() => window.open('https://cetcell.mahacet.org/', '_blank')}>
                  Visit CET Cell Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about admissions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-2 border shadow-sm">
                  <AccordionTrigger className="hover:no-underline text-lg px-6 py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base px-6 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}