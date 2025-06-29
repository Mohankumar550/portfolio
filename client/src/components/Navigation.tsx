import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadCV = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Placeholder URL
    link.download = 'Mohankumar_Palanisamy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass bg-slate-800/20 rounded-2xl px-6 py-3 border border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mohankumar P
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('journey')}
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Journey
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Awards
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                onClick={downloadCV}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Download CV
              </Button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-slate-700/50">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('journey')}
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Journey
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('awards')}
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Awards
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-blue-400 transition-colors py-2 text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
