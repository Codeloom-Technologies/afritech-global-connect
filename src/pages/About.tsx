import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Globe, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to the highest standards of quality and professionalism in every project.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Tailored solutions that meet unique client needs with personalized attention.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting Africa to the world through seamless multilingual communication.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Leveraging cutting-edge technology for superior language service delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Afritech Symposia</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empowering global communication through professional language services since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2008, Afritech Symposia emerged from a vision to bridge communication gaps across
                Africa's diverse linguistic landscape. What began as a small team of passionate linguists has
                evolved into one of Africa's most trusted language service providers.
              </p>
              <p>
                Over the years, we've had the privilege of serving prestigious organizations including the African
                Union, United Nations agencies, and leading multinational corporations. Our commitment to
                excellence and innovation has made us the go-to partner for high-stakes international conferences,
                diplomatic meetings, and cross-border business negotiations.
              </p>
              <p>
                Today, with a network of over 500 certified interpreters and translators covering 80+ language
                pairs, we continue to push the boundaries of what's possible in multilingual communication. Our
                state-of-the-art remote interpreting platform and commitment to technology integration ensure we're
                always at the forefront of industry innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border shadow-soft">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver world-class language services that break down communication barriers, foster mutual
                  understanding, and enable meaningful connections across cultures. We strive to be the most
                  reliable partner for organizations seeking seamless multilingual communication solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's leading language service provider and a globally recognized partner in
                  multilingual communication. We envision a world where language is never a barrier to progress,
                  collaboration, or understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our strength lies in our people. Afritech Symposia brings together some of the most experienced and
              qualified linguists in Africa. Every member of our team undergoes rigorous certification processes
              and continuous professional development to ensure they deliver excellence in every engagement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From conference interpreters with decades of experience at international summits to specialized
              technical translators and project managers, our diverse team is united by a passion for language and
              a commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how we can support your multilingual communication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                  Request a Quote
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

export default About;
