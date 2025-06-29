import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Zap, Shield, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Reduce Costs by 40%",
      description: "Automate manual processes and eliminate redundant workflows"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-Powered Intelligence",
      description: "Leverage cutting-edge Gen AI for smarter business decisions"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Built with security-first approach for enterprise-grade reliability"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scale Effortlessly",
      description: "Grow your operations without proportional increase in overhead"
    }
  ];

  const solutions = [
    {
      title: "Smart Report Generator",
      description: "Transform manual Excel reports into automated, AI-driven insights",
      impact: "Saves 20+ hours/month",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Internal AI Assistants",
      description: "GPT-powered bots for HR, support, and content teams",
      impact: "80% faster response time",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Insight Dashboard",
      description: "Upload Excel files and get AI-generated charts and answers",
      impact: "Instant data visualization",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-sm font-medium text-blue-700 dark:text-blue-300 mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Powered by Generative AI
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Build Smarter,
            </span>
            <br />
            <span className="text-foreground">Work Faster</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We develop intelligent IT solutions powered by Generative AI to automate your operations, 
            reduce costs, and scale effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
              <Link href="/solutions">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-600 dark:text-blue-400 mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              AI Solutions That Deliver 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your business operations with our proven AI-powered tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.gradient} mb-6 flex items-center justify-center`}>
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="flex items-center text-sm font-medium text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {solution.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/solutions">
                View All Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's build intelligent solutions that automate your workflows and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/about">Meet Our Founder</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}