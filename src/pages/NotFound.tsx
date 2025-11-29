import { Button } from "@/components/ui/button";
import { Globe, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
              <Globe className="w-16 h-16 text-accent" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Page Not Found</h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <Link to="/">
            <Button variant="default" size="lg" className="gap-2">
              <Home className="w-5 h-5" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
