import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Quote = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    serviceType: "",
    languages: "",
    duration: "",
    location: "",
    attendees: "",
    details: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // Basic validation
  //   if (!formData.name || !formData.email || !formData.serviceType) {
  //     toast.error("Please fill in all required fields");
  //     return;
  //   }

  //   // Here you would typically send the data to a backend
  //   toast.success("Quote request submitted! Our team will contact you within 24 hours.");
    
  //   // Reset form
  //   setFormData({
  //     name: "",
  //     organization: "",
  //     email: "",
  //     phone: "",
  //     serviceType: "",
  //     languages: "",
  //     duration: "",
  //     location: "",
  //     attendees: "",
  //     details: "",
  //   });
  //   setDate(undefined);
  // };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.name || !formData.email || !formData.serviceType) {
    toast.error("Please fill in all required fields");
    return;
  }

  // Create email content for quote request
  const subject = `Quote Request for ${formData.serviceType} - ${formData.organization || formData.name}`;
  const body = `
QUOTE REQUEST DETAILS:

Contact Information:
- Name: ${formData.name}
- Organization: ${formData.organization || 'Not provided'}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

Service Details:
- Service Type: ${formData.serviceType}
- Languages Required: ${formData.languages || 'Not specified'}
- Event Date: ${date ? date.toLocaleDateString() : 'Not specified'}
- Duration: ${formData.duration || 'Not specified'}
- Location: ${formData.location || 'Not specified'}
- Expected Attendees: ${formData.attendees || 'Not specified'}

Additional Details:
${formData.details || 'No additional details provided.'}

---
This quote request was submitted through the Afritech Symposia website.
  `.trim();

  // Encode the subject and body for the mailto link
  const mailtoLink = `mailto:timothyjeff@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the email client
  window.location.href = mailtoLink;

  // Show success message
  toast.success("Opening your email client... Please send the email to submit your quote request.");
  
  // Optional: Reset form after a delay
  setTimeout(() => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      serviceType: "",
      languages: "",
      duration: "",
      location: "",
      attendees: "",
      details: "",
    });
    setDate(undefined);
  }, 3000);
};

  const features = [
    "Free, no-obligation quote",
    "Response within 24 hours",
    "Customized pricing for your needs",
    "Expert consultation included",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Request a Quote</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tell us about your project and we'll provide a customized quote within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Project Details</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                          id="organization"
                          type="text"
                          placeholder="Company/Organization name"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+254 123 456 789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType">
                        Service Type <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      >
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conference">Conference Interpreting</SelectItem>
                          <SelectItem value="translation">Document Translation</SelectItem>
                          <SelectItem value="rsi">Remote Simultaneous Interpreting</SelectItem>
                          <SelectItem value="event">Event Language Support</SelectItem>
                          <SelectItem value="other">Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="languages">Language Pairs Required</Label>
                        <Input
                          id="languages"
                          type="text"
                          placeholder="e.g., English to French, Swahili"
                          value={formData.languages}
                          onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Event Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal border-border",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Input
                          id="duration"
                          type="text"
                          placeholder="e.g., 3 days, 5 hours"
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="attendees">Number of Attendees</Label>
                        <Input
                          id="attendees"
                          type="text"
                          placeholder="Approximate number"
                          value={formData.attendees}
                          onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Event Location</Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="City, Country"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">Additional Details</Label>
                      <Textarea
                        id="details"
                        placeholder="Tell us more about your project requirements..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="min-h-[150px] border-border"
                      />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="w-full">
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-border shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft bg-secondary/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Need Urgent Assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    For time-sensitive requests or emergency interpreting needs, contact us directly.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+2348034526617"
                      className="block text-accent hover:underline font-medium"
                    >
                       +234 803 452 6617
                    </a>
                    <a
                      href="mailto:urgent@afritechsymposia.com"
                      className="block text-accent hover:underline font-medium"
                    >
                      timothyjeff@yahoo.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Quote Process</h3>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">1.</span>
                      <span>Submit your requirements via this form</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">2.</span>
                      <span>Our team reviews and assesses your needs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">3.</span>
                      <span>Receive a detailed quote within 24 hours</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">4.</span>
                      <span>Consultation call to finalize details</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
