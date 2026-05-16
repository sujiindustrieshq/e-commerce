
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext.jsx';
import { useWishlist } from '@/context/WishlistContext.jsx';
import { toast } from 'sonner';

const ProductCard = ({ book, index = 0 }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(book.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(book);
    toast.success('Added to cart');
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(book.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(book);
      toast.success('Added to wishlist');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/product/${book.id}`}>
        <div className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {book.discount > 0 && (
              <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                {book.discount}% OFF
              </Badge>
            )}
            {book.newArrival && (
              <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                New
              </Badge>
            )}
            <Button
              size="icon"
              variant={inWishlist ? 'default' : 'secondary'}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleWishlistToggle}
            >
              <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
            </Button>
          </div>

          <div className="p-4 flex flex-col flex-1">
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                {book.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{book.author}</p>

              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{book.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({book.reviewCount.toLocaleString()})
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary">
                  ${book.price}
                </span>
                {book.originalPrice > book.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${book.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                className="flex-1 transition-all duration-200 active:scale-95"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
