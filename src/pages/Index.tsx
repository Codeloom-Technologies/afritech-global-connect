import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Users,
  FileText,
  Video,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Award,
  Clock,
  Shield,
} from "lucide-react";
import heroImage from "@/assets/hero-interpreting.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: Headphones,
      title: "Conference Interpreting",
      description:
        "Professional simultaneous and consecutive interpreting for conferences, summits, and international events.",
    },
    {
      icon: FileText,
      title: "Document Translation",
      description:
        "Accurate translation of legal, technical, medical, and business documents by certified linguists.",
    },
    {
      icon: Video,
      title: "Remote Simultaneous Interpreting",
      description:
        "State-of-the-art RSI technology for virtual events and hybrid conferences with seamless delivery.",
    },
    {
      icon: Globe,
      title: "Event Language Support",
      description:
        "Comprehensive multilingual support including equipment rental, technicians, and on-site coordination.",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "ISO-certified interpreters and translators with proven track records.",
    },
    {
      icon: Shield,
      title: "Confidentiality Guaranteed",
      description: "Strict NDAs and data protection protocols for all projects.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support for urgent requests and time-sensitive projects.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to 500+ professional linguists covering 80+ language pairs.",
    },
  ];

  const clients = [
    "African Union",
    "United Nations",
    "World Health Organization",
    "Tech Summit Africa",
    "Pan-African Parliament",
    "Regional Economic Communities",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional conference interpreting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Bridging Languages.
              <br />
              <span className="text-accent">Connecting Africa</span> to the World.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed">
              Professional conference interpreting, translation services, and multilingual communication
              solutions that empower global connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/quote" className="flex-1 sm:flex-none">
                <Button variant="hero" size="lg" className="text-lg w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto">
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services" className="flex-1 sm:flex-none">
                <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Your Trusted Language Partner
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
              Afritech Symposia is a leading provider of language services across Africa and beyond. With over
              15 years of experience, we specialize in conference interpreting, translation, and multilingual
              communication solutions that break down language barriers and foster global understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Comprehensive language solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/services">
              <Button variant="default" size="lg" className="text-base sm:text-lg">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Excellence, reliability, and professionalism in every engagement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center px-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
              We're proud to serve prestigious clients across Africa and globally
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 sm:p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors min-h-[80px] sm:min-h-[120px]"
              >
                <span className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
              Ready to Break Down Language Barriers?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 px-4 sm:px-0">
              Let us help you connect with your global audience. Request a quote or book an interpreter today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/quote" className="flex-1 sm:flex-none">
                <Button variant="hero" size="lg" className="text-lg w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/contact" className="flex-1 sm:flex-none">
                <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
                  Book an Interpreter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;