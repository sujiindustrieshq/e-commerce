
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { books } from '@/data/books.js';
import { useCart } from '@/context/CartContext.jsx';
import { useWishlist } from '@/context/WishlistContext.jsx';
import { generateReviews } from '@/utils/mockData.js';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import ReviewSection from '@/components/ReviewSection.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { ProductDetailSkeleton } from '@/components/SkeletonLoader.jsx';

const ProductDetailPage = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === id);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!book) {
    return (
      <>
        <Header />
        <ProductDetailSkeleton />
        <Footer />
      </>
    );
  }

  const inWishlist = isInWishlist(book.id);
  const reviews = generateReviews(8);
  const relatedBooks = books
    .filter(b => b.category === book.category && b.id !== book.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(book, quantity);
    toast.success(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart`);
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(book.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(book);
      toast.success('Added to wishlist');
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${book.title} by ${book.author} - BookStore`}</title>
        <meta name="description" content={book.description} />
      </Helmet>

      <Header />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Products', href: '/products' },
            { label: book.category, href: `/products?category=${book.category}` },
            { label: book.title }
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
              <img
                src={book.images[selectedImage]}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {book.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary'
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img src={image} alt={`${book.title} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                {book.bestseller && (
                  <Badge className="bg-primary text-primary-foreground">Best seller</Badge>
                )}
                {book.newArrival && (
                  <Badge className="bg-accent text-accent-foreground">New arrival</Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-2" style={{ letterSpacing: '-0.02em' }}>
                {book.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(book.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{book.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({book.reviewCount.toLocaleString()} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">${book.price}</span>
                {book.originalPrice > book.price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${book.originalPrice}
                    </span>
                    <Badge variant="destructive">{book.discount}% OFF</Badge>
                  </>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {book.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Publisher:</span>
                  <p className="font-medium">{book.publisher}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Pages:</span>
                  <p className="font-medium">{book.pages}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Format:</span>
                  <p className="font-medium">{book.format}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">ISBN:</span>
                  <p className="font-medium">{book.isbn}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  className="flex-1 transition-all duration-200 active:scale-95"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to cart
                </Button>
                <Button
                  variant={inWishlist ? 'default' : 'outline'}
                  size="icon"
                  onClick={handleWishlistToggle}
                  className="transition-all duration-200"
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <Truck className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-medium">Free shipping</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-medium">Secure payment</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RotateCcw className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xs font-medium">Easy returns</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="description" className="mb-16">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="leading-relaxed">{book.description}</p>
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Product details</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Publisher</dt>
                    <dd className="font-medium">{book.publisher}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Publication date</dt>
                    <dd className="font-medium">{book.publishDate}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Pages</dt>
                    <dd className="font-medium">{book.pages}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Language</dt>
                    <dd className="font-medium">{book.language}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Format</dt>
                    <dd className="font-medium">{book.format}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">ISBN</dt>
                    <dd className="font-medium">{book.isbn}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <ReviewSection reviews={reviews} bookId={book.id} />
          </TabsContent>
        </Tabs>

        {relatedBooks.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBooks.map((relatedBook, index) => (
                <ProductCard key={relatedBook.id} book={relatedBook} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
