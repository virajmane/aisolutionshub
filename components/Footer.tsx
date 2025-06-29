import React from 'react';
import Link from 'next/link';
import { Brain, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Solutions Hub
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering businesses with intelligent AI solutions to automate operations, 
              reduce costs, and scale effortlessly.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@aisolutionshub.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/virajmane"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/virajmane"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:contact@aisolutionshub.com" className="hover:text-primary transition-colors">
                  contact@aisolutionshub.com
                </a>
              </li>
              <li>Ready to transform your business?</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AI Solutions Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;