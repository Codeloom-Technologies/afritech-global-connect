import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Headphones,
  FileText,
  Video,
  Globe,
  Mic,
  Languages,
  Laptop,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const mainServices = [
    {
      icon: Headphones,
      title: "Conference Interpreting",
      description: "Professional simultaneous and consecutive interpreting for conferences, summits, and high-level meetings.",
      features: [
        "Simultaneous interpreting in soundproof booths",
        "Consecutive interpreting for smaller meetings",
        "Whispered interpreting (chuchotage)",
        "Liaison interpreting for business negotiations",
      ],
    },
    {
      icon: FileText,
      title: "Document Translation",
      description: "Accurate, culturally-sensitive translation of all document types by certified professionals.",
      features: [
        "Legal document translation",
        "Technical and scientific translation",
        "Medical and pharmaceutical translation",
        "Business and marketing materials",
      ],
    },
    {
      icon: Video,
      title: "Remote Simultaneous Interpreting",
      description: "State-of-the-art RSI solutions for virtual and hybrid events with seamless audio delivery.",
      features: [
        "Cloud-based RSI platforms",
        "Multi-channel audio streaming",
        "Integration with major meeting platforms",
        "Technical support and backup systems",
      ],
    },
    {
      icon: Globe,
      title: "Event Language Support",
      description: "Comprehensive end-to-end language services for conferences and international events.",
      features: [
        "Interpreting equipment rental",
        "On-site technical support",
        "Project management and coordination",
        "Pre-event consultation and planning",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Mic,
      title: "Voice-Over & Subtitling",
      description: "Professional voice-over recording and subtitling services for multimedia content.",
    },
    {
      icon: Languages,
      title: "Language Training",
      description: "Corporate language training programs tailored to your business needs.",
    },
    {
      icon: Laptop,
      title: "Transcription Services",
      description: "Accurate transcription of audio and video content in multiple languages.",
    },
    {
      icon: Users,
      title: "Cultural Consulting",
      description: "Expert guidance on cultural nuances and cross-cultural communication strategies.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0">
              Comprehensive language solutions designed to meet the demands of today's global landscape
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto`}
              >
                <div className="flex-1 w-full">
                  <Card className="border-border shadow-elegant p-6 sm:p-8">
                    <CardContent className="p-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                        <service.icon className="w-7 h-7 sm:w-9 sm:h-9 text-accent" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">{service.title}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{service.description}</p>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5 sm:mt-1" />
                            <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1 w-full flex items-center justify-center">
                  <div className="w-full h-48 sm:h-56 md:h-64 bg-secondary/30 rounded-lg flex items-center justify-center">
                    <service.icon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-accent/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Expanding your communication capabilities beyond traditional interpretation and translation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
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
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Languages We Cover
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Our network of certified linguists covers over 80 language pairs, with particular expertise in
              African languages alongside major international languages.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 text-center">
              {[
                "English",
                "French",
                "Swahili",
                "Portuguese",
                "Spanish",
                "Amharic",
                "Hausa",
                "Yoruba",
                "Zulu",
                "Somali",
                "Afrikaans",
                "Chinese",
                "German",
                "Italian",
                "Russian",
              ].map((language, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                >
                  <span className="text-sm sm:text-base font-medium text-foreground">{language}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4 sm:mt-6 text-sm sm:text-base">And many more...</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 px-4 sm:px-0">
              Every project is unique. Let's discuss your specific language service requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/quote" className="flex-1 sm:flex-none">
                <Button variant="hero" size="lg" className="text-lg w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/contact" className="flex-1 sm:flex-none">
                <Button variant="outline" size="lg" className="text-lg w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
                  Contact Our Team
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

export default Services;