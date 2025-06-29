import React from 'react';
import Link from 'next/link';
import { Code, Bot, Zap, Award, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Viraj Mane - AI Solutions Expert',
  description: 'Meet Viraj Mane, founder of AI Solutions Hub. 2.5+ years at Accenture, specialized in automation, Gen AI, and intelligent business solutions.',
};

export default function About() {
  const experience = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "2.5+ Years at Accenture",
      description: "Built enterprise-grade automation tools and backend systems"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Gen AI Specialist",
      description: "Created GPT-2 powered chatbots and intelligent assistants"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automation Expert",
      description: "Specialized in Python, .NET, and workflow automation"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Testing & QA",
      description: "Developed comprehensive testing frameworks and quality assurance processes"
    }
  ];

  const skills = [
    "Python Development",
    ".NET Framework",
    "GPT-2 & Gen AI",
    "Backend Architecture",
    "Test Automation",
    "Prompt Engineering",
    "Workflow Automation",
    "API Development"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-sm font-medium text-blue-700 dark:text-blue-300 mb-8">
            <Users className="h-4 w-4 mr-2" />
            Meet the Founder
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Viraj Mane
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transforming businesses through intelligent automation and AI-powered solutions
          </p>

          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center">
            <Users className="h-24 w-24 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Journey to 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Innovation</span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-8">
              With over 2.5 years of hands-on experience at Accenture, I've witnessed firsthand how 
              the right technology can revolutionize business operations. My journey into AI and automation 
              began with a simple observation: businesses were drowning in manual, repetitive tasks that 
              could be intelligently automated.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              During my time at Accenture, I specialized in building robust automation tools using Python 
              and .NET, developed comprehensive testing frameworks, and created some of the early GPT-2 
              powered chatbots for enterprise use. This experience taught me that the most impactful 
              solutions aren't just technically impressive—they solve real business problems.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              That's why I founded AI Solutions Hub. I saw an opportunity to help businesses of all sizes 
              harness the power of Generative AI and automation, not just the Fortune 500 companies. 
              My focus is on creating practical, results-driven solutions that deliver measurable ROI 
              from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Experience & 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Built on years of enterprise experience and cutting-edge AI development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {experience.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-600 dark:text-blue-400 mb-6 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-8">Technical Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>n
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-8">
            <Lightbulb className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The Vision
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            "I believe every business, regardless of size, should have access to intelligent automation 
            that drives real results. My mission is to democratize AI and make it practical, 
            accessible, and profitable for organizations ready to embrace the future."
          </p>
          
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link href="/contact">Let's Build Something Together</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}