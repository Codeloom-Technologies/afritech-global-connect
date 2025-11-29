import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Heart,
  GraduationCap,
  Briefcase,
  Landmark,
  Users,
  Cpu,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Industries = () => {
  const industries = [
    {
      icon: Landmark,
      title: "Government & Diplomacy",
      description:
        "Supporting governmental bodies, diplomatic missions, and international organizations with high-level interpreting and translation services for summits, treaty negotiations, and bilateral meetings.",
      examples: "African Union, Embassies, Ministerial conferences",
    },
    {
      icon: Users,
      title: "NGOs & International Development",
      description:
        "Facilitating communication for humanitarian organizations, development agencies, and civil society groups working across borders on critical social impact initiatives.",
      examples: "UN agencies, World Bank, International NGOs",
    },
    {
      icon: Cpu,
      title: "Technology & Innovation",
      description:
        "Enabling global tech companies and startups to communicate effectively at product launches, tech conferences, investor meetings, and international expansion initiatives.",
      examples: "Tech Summit Africa, Innovation Forums, Product Launches",
    },
    {
      icon: Heart,
      title: "Healthcare & Pharmaceuticals",
      description:
        "Providing specialized medical interpreting and translation for clinical trials, medical conferences, patient consultations, and pharmaceutical documentation.",
      examples: "Medical conferences, Clinical trials, WHO programs",
    },
    {
      icon: Briefcase,
      title: "Corporate & Business",
      description:
        "Supporting multinational corporations with interpreting for board meetings, AGMs, training sessions, and cross-border business negotiations across diverse sectors.",
      examples: "Annual meetings, M&A negotiations, Corporate training",
    },
    {
      icon: GraduationCap,
      title: "Education & Research",
      description:
        "Facilitating academic conferences, research symposia, international student programs, and educational exchanges with accurate scholarly interpretation and translation.",
      examples: "Academic conferences, Research symposia, University events",
    },
    {
      icon: Building2,
      title: "Events & Conferences",
      description:
        "Delivering comprehensive language services for conferences, exhibitions, trade shows, and corporate events of all sizes with state-of-the-art equipment and logistics support.",
      examples: "Trade shows, Industry conferences, Corporate retreats",
    },
    {
      icon: Globe,
      title: "Legal & Compliance",
      description:
        "Offering certified legal interpreting and translation for court proceedings, arbitrations, depositions, and legal documentation with strict confidentiality protocols.",
      examples: "Court proceedings, Arbitrations, Legal depositions",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Industries We Serve</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Specialized language solutions tailored to the unique demands of diverse sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <industry.icon className="w-9 h-9 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{industry.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Examples:</span> {industry.examples}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Real results from our partnerships across industries
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-border shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Landmark className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        African Union Summit 2023
                      </h3>
                      <p className="text-muted-foreground">
                        Provided simultaneous interpreting in 6 languages for over 2,000 delegates across 3 days,
                        ensuring seamless communication for critical continental policy discussions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Cpu className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Pan-African Tech Conference
                      </h3>
                      <p className="text-muted-foreground">
                        Delivered RSI services for 5,000+ virtual attendees across 15 African countries, enabling
                        real-time multilingual access to keynotes, panels, and workshops.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Heart className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">WHO Healthcare Initiative</h3>
                      <p className="text-muted-foreground">
                        Translated over 500 pages of medical documentation and provided on-site interpreting for a
                        major healthcare capacity-building program across 8 African nations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our interpreters and translators undergo specialized training and continuous professional development
              to master the terminology, protocols, and nuances specific to each sector we serve. This ensures not
              just linguistic accuracy, but also contextual relevance and cultural sensitivity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-secondary/30 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Certified Linguists</div>
              </div>
              <div className="p-6 bg-secondary/30 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">80+</div>
                <div className="text-sm text-muted-foreground">Language Pairs</div>
              </div>
              <div className="p-6 bg-secondary/30 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Industry, Our Expertise
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how our specialized language services can support your sector-specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
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

export default Industries;
