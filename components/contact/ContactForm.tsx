'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Wire to API route for Convex/Resend integration
      console.log('Form submitted:', formData);

      // Simulated submission
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="John Smith"
          className="w-full px-4 py-3 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-colors"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
          className="w-full px-4 py-3 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-colors"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="(555) 123-4567"
          className="w-full px-4 py-3 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-colors"
        />
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-brand-dark mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-colors appearance-none bg-white"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="catering">Catering Request</option>
          <option value="event">Event Information</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us more about your inquiry&hellip;"
          rows={6}
          className="w-full px-4 py-3 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20 transition-colors resize-none"
        />
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            Thank you! Your message has been sent. We&apos;ll get back to you soon.
          </p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            There was an error sending your message. Please try again.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
