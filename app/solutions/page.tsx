import React from 'react';
import Link from 'next/link';
import { Bot, FileText, MessageSquare, BarChart3, Users, CheckCircle, ArrowRight, Zap, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions - Intelligent Automation Tools',
  description: 'Explore our AI-powered solutions: Smart Report Generator, Internal AI Assistants, Chatbot Framework, Insight Dashboard, and Resume Matcher Tool.',
};

export default function Solutions() {
  const solutions = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Smart Report Generator",
      subtitle: "Automated Excel Reports with AI Intelligence",
      description: "Transform your manual Excel-based reporting into an intelligent, automated system powered by Python and AI. Generate comprehensive reports with data analysis, visualizations, and actionable insights.",
      features: [
        "Automated data collection from multiple sources",
        "AI-powered data analysis and pattern recognition",
        "Custom Excel templates with dynamic content",
        "Scheduled report generation and distribution",
        "Interactive dashboards and visualizations"
      ],
      roi: "Saves 20+ hours/month",
      impact: "Reduces reporting time by 85%",
      gradient: "from-blue-500 to-cyan-500",
      category: "Automation"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Internal AI Assistants",
      subtitle: "GPT-Powered Bots for Your Team",
      description: "Deploy intelligent AI assistants for HR, customer support, and content teams. Built on advanced GPT models with custom training for your specific business needs and workflows.",
      features: [
        "Custom GPT models trained on your data",
        "Multi-department functionality (HR, Support, Content)",
        "Natural language processing and understanding",
        "Integration with existing tools and platforms",
        "Continuous learning and improvement"
      ],
      roi: "80% faster response time",
      impact: "Handles 60% of routine inquiries",
      gradient: "from-purple-500 to-pink-500",
      category: "AI Assistant"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI Chatbot Framework",
      subtitle: "Custom FAQ & Product Recommendation Engine",
      description: "Intelligent chatbots that handle customer inquiries, provide product recommendations, and guide users through complex decision trees. Built with advanced NLP and machine learning.",
      features: [
        "Custom FAQ knowledge base integration",
        "Product recommendation algorithms",
        "Multi-language support",
        "Sentiment analysis and escalation",
        "Analytics and conversation insights"
      ],
      roi: "24/7 customer support",
      impact: "Increases conversion by 35%",
      gradient: "from-green-500 to-emerald-500",
      category: "Customer Service"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Insight Dashboard",
      subtitle: "AI-Generated Charts & Data Analysis",
      description: "Upload your Excel files and get instant AI-generated visualizations, insights, and answers to your business questions. Turn raw data into actionable intelligence.",
      features: [
        "Instant data visualization from Excel uploads",
        "AI-powered trend analysis and forecasting",
        "Natural language query interface",
        "Interactive charts and graphs",
        "Automated insight generation"
      ],
      roi: "Instant data visualization",
      impact: "Reduces analysis time by 70%",
      gradient: "from-orange-500 to-red-500",
      category: "Analytics"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Resume Matcher Tool",
      subtitle: "AI-Powered Recruitment Assistant",
      description: "Streamline your hiring process with AI that matches resumes to job descriptions, ranks candidates, and generates improvement suggestions for better hiring decisions.",
      features: [
        "Automated resume-to-JD matching algorithms",
        "Candidate ranking and scoring system",
        "Skill gap analysis and recommendations",
        "Bias reduction in candidate selection",
        "Bulk processing and batch analysis"
      ],
      roi: "50% faster hiring process",
      impact: "Improves match accuracy by 90%",
      gradient: "from-indigo-500 to-purple-500",
      category: "HR Tech"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Reduction",
      description: "Average 40% reduction in operational costs"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Savings",
      description: "Free up 20+ hours per week per employee"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Efficiency Boost",
      description: "Up to 85% improvement in process efficiency"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-sm font-medium text-blue-700 dark:text-blue-300 mb-8">
            <Bot className="h-4 w-4 mr-2" />
            AI-Powered Solutions
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Driven Solutions
            </span>
            <br />
            That Deliver Impact
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Transform your business operations with our proven AI-powered tools designed to 
            automate workflows, reduce costs, and drive measurable results.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-600 dark:text-blue-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-background to-muted/50">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} mb-6 flex items-center justify-center text-white`}>
                      {solution.icon}
                    </div>
                    <Badge variant="secondary" className="mb-4">
                      {solution.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{solution.subtitle}</p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm font-medium text-green-600 dark:text-green-400">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {solution.roi}
                      </div>
                      <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                        <Zap className="h-4 w-4 mr-2" />
                        {solution.impact}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss which AI solution would deliver the most impact for your business. 
              Get a free consultation and custom implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/about">Meet the Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}