
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { books } from '@/data/books.js';
import { categories } from '@/data/categories.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductCard from '@/components/ProductCard.jsx';

const HomePage = () => {
  const featuredBooks = books.filter(book => book.featured).slice(0, 8);
  const bestSellers = books.filter(book => book.bestseller).slice(0, 4);
  const newArrivals = books.filter(book => book.newArrival).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>BookStore - Discover your next great read</title>
        <meta name="description" content="Browse thousands of books across all genres. Find bestsellers, new releases, and timeless classics at BookStore." />
      </Helmet>

      <Header />

      <section className="relative min-h-[90dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1700905976495-88e81c407775"
            alt="Books background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Discover your next great read
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Browse thousands of books across all genres. From bestsellers to hidden gems, find the perfect book for every moment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="transition-all duration-200 active:scale-95">
                <Link to="/products">
                  Browse books
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-all duration-200">
                <Link to="/products?category=bestseller">View bestsellers</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured books</h2>
              <p className="text-muted-foreground">Handpicked selections just for you</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link to="/products">
                View all
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, index) => (
              <ProductCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Browse by category</h2>
            <p className="text-muted-foreground">Find books in your favorite genres</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/products?category=${category.id}`}>
                  <div className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary">Best sellers</span>
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Most popular this month
              </h2>
              <p className="text-secondary-foreground/80 leading-relaxed mb-6">
                Discover what readers around the world are loving right now. These bestselling titles are flying off our shelves.
              </p>
              <Button asChild className="transition-all duration-200 active:scale-95">
                <Link to="/products?sort=popular">
                  View all bestsellers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {bestSellers.map((book, index) => (
                <ProductCard key={book.id} book={book} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
              {newArrivals.map((book, index) => (
                <ProductCard key={book.id} book={book} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary">New arrivals</span>
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Fresh off the press
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Be the first to explore our latest additions. New titles arrive every week, bringing you the freshest stories and ideas.
              </p>
              <Button asChild className="transition-all duration-200 active:scale-95">
                <Link to="/products?category=new">
                  Explore new arrivals
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What our readers say</h2>
            <p className="text-muted-foreground">Join thousands of happy book lovers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Maya Chen',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
                rating: 5,
                text: 'The selection is incredible and delivery is always fast. My go-to bookstore for everything from bestsellers to rare finds.'
              },
              {
                name: 'Raj Patel',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
                rating: 5,
                text: 'Great prices and excellent customer service. The recommendations are always spot-on for my reading preferences.'
              },
              {
                name: 'Lucia Torres',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
                rating: 5,
                text: 'I love the variety of genres available. The website is easy to navigate and checkout is seamless every time.'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
              Start your reading journey today
            </h2>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              Join our community of book lovers and discover stories that inspire, educate, and entertain.
            </p>
            <Button size="lg" variant="secondary" asChild className="transition-all duration-200 active:scale-95">
              <Link to="/products">
                Browse our collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
