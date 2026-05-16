
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Subscribed to newsletter');
      setEmail('');
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl">BookStore</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Your trusted source for books across all genres. Discover your next great read.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Browse books
              </Link>
              <Link to="/products?category=bestseller" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Best sellers
              </Link>
              <Link to="/products?category=new" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                New arrivals
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Customer service</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/account" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                My account
              </Link>
              <Link to="/orders" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Order tracking
              </Link>
              <span className="text-sm text-secondary-foreground/80">
                Privacy policy
              </span>
              <span className="text-sm text-secondary-foreground/80">
                Terms of service
              </span>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background text-foreground"
              />
              <Button type="submit" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/80">
            © 2026 BookStore. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-secondary-foreground">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-secondary-foreground">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-secondary-foreground">
              <Instagram className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
