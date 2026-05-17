
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext.jsx';
import { calculateCartTotal } from '@/utils/mockData.js';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CartPage = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart } = useCart();
  const totals = calculateCartTotal(items);

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(bookId);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(bookId, newQuantity);
    }
  };

  const handleRemove = (bookId) => {
    removeFromCart(bookId);
    toast.success('Item removed from cart');
  };

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping cart - BookStore</title>
          <meta name="description" content="Your shopping cart" />
        </Helmet>

        <Header />

        <div className="container-custom py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Start adding books to your cart to see them here
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
        <title>{`Shopping cart (${items.length}) - BookStore`}</title>
        <meta name="description" content="Review your shopping cart" />
      </Helmet>

      <Header />

      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex gap-6">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                  </Link>



                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold mb-1 hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4">{item.author}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}





                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemove(item.id)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Order summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${totals.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {parseFloat(totals.shipping) === 0 ? 'Free' : `$${totals.shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${totals.tax}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-bold text-2xl text-primary">${totals.total}</span>
              </div>

              <Button
                className="w-full mb-3 transition-all duration-200 active:scale-95"
                onClick={() => navigate('/checkout')}
              >
                Proceed to checkout
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link to="/products">Continue shopping</Link>
              </Button>

              {parseFloat(totals.subtotal) < 50 && (
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Add ${(50 - parseFloat(totals.subtotal)).toFixed(2)} more for free shipping
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
