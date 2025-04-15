import React from 'react';
import { Button } from './Button';

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-foreground/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md border border-foreground/20 bg-background"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md border border-foreground/20 bg-background"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 rounded-md border border-foreground/20 bg-background"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
