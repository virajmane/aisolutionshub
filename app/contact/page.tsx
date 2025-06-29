"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Calendar, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "virajmane5439@gmail.com",
      link: "mailto:virajmane5439@gmail.com"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Free Consultation",
      content: "Book a 30-minute strategy call",
      link: "#"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      link: null
    }
  ];

  const benefits = [
    "Free 30-minute strategy consultation",
    "Custom AI solution roadmap",
    "ROI analysis and cost projections",
    "Implementation timeline planning",
    "Ongoing support and maintenance"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-sm font-medium text-blue-700 dark:text-blue-300 mb-8">
            <Send className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Something 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Intelligent Together
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Ready to transform your business with AI? Start with a free consultation 
            to discover how our solutions can drive real results for your organization.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        {...register('name')}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        {...register('email')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Company Name (Optional)"
                      {...register('company')}
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Tell us about your project, current challenges, and how we can help..."
                      rows={6}
                      {...register('message')}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Get in touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* What You'll Get */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What you'll get</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Action */}
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                <CardContent className="p-8 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">Prefer to talk directly?</h3>
                  <p className="opacity-90 mb-6">
                    Book a free 30-minute consultation call to discuss your project in detail.
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions about our AI solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">How quickly can we see results?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Most clients see measurable improvements within 2-4 weeks of implementation, 
                with full ROI typically achieved within 90 days.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Do you work with small businesses?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Absolutely! Our solutions are designed to scale from startups to enterprise, 
                with flexible pricing and implementation approaches.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What's included in the consultation?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                We'll analyze your current processes, identify automation opportunities, 
                and provide a custom roadmap with ROI projections.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Do you provide ongoing support?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Yes, we offer comprehensive support packages including maintenance, 
                updates, and continuous optimization of your AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}