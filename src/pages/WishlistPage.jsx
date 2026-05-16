
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/context/WishlistContext.jsx';
import { useCart } from '@/context/CartContext.jsx';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const WishlistPage = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (book) => {
    addToCart(book);
    removeFromWishlist(book.id);
    toast.success('Moved to cart');
  };

  const handleRemove = (bookId) => {
    removeFromWishlist(bookId);
    toast.success('Removed from wishlist');
  };

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>My wishlist - BookStore</title>
          <meta name="description" content="Your saved books" />
        </Helmet>

        <Header />

        <div className="container-custom py-16">
          <div className="max-w-md mx-auto text-center">
            <Heart className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-2xl font-bold mb-2">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-6">
              Save books you love to your wishlist
            </p>
            <Button asChild>
              <Link to="/products">Browse books</Link>
            </Button>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`My wishlist (${items.length}) - BookStore`}</title>
        <meta name="description" content="Your saved books" />
      </Helmet>

      <Header />

      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-8">My wishlist</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((book) => (
            <div key={book.id} className="bg-card rounded-xl overflow-hidden border border-border">
              <Link to={`/product/${book.id}`}>
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-4">
                <Link to={`/product/${book.id}`}>
                  <h3 className="font-semibold mb-1 line-clamp-2 hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-3">{book.author}</p>

                <p className="text-lg font-bold text-primary mb-4">${book.price}</p>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 transition-all duration-200 active:scale-95"
                    onClick={() => handleMoveToCart(book)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to cart
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRemove(book.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WishlistPage;
