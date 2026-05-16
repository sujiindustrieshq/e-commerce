
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Package, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useOrders } from '@/context/OrderContext.jsx';
import { getOrderStatus, formatDate, getEstimatedDelivery } from '@/utils/mockData.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const OrdersPage = () => {
  const { orders } = useOrders();
  const [searchParams] = useSearchParams();
  const highlightId = searchParams.get('highlight');
  const [highlightedOrder, setHighlightedOrder] = useState(null);

  useEffect(() => {
    if (highlightId) {
      setHighlightedOrder(highlightId);
      setTimeout(() => setHighlightedOrder(null), 3000);
    }
  }, [highlightId]);

  if (orders.length === 0) {
    return (
      <>
        <Helmet>
          <title>My orders - BookStore</title>
          <meta name="description" content="View your order history" />
        </Helmet>

        <Header />

        <div className="container-custom py-16">
          <div className="max-w-md mx-auto text-center">
            <Package className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-2xl font-bold mb-2">No orders yet</h1>
            <p className="text-muted-foreground mb-6">
              Start shopping to see your orders here
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
        <title>{`My orders (${orders.length}) - BookStore`}</title>
        <meta name="description" content="View and track your orders" />
      </Helmet>

      <Header />

      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-8">My orders</h1>

        <div className="space-y-4">
          {orders.map((order) => {
            const status = getOrderStatus(order.status);
            const isHighlighted = order.id === highlightedOrder;

            return (
              <div
                key={order.id}
                className={`bg-card rounded-xl p-6 border transition-all duration-300 ${
                  isHighlighted
                    ? 'border-primary shadow-lg'
                    : 'border-border hover:shadow-md'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">Order {order.id}</h3>
                      <Badge className={status.color}>{status.label}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Placed on {formatDate(order.createdAt)}
                    </p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-2xl font-bold text-primary">${order.totals.total}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Shipping to</p>
                    <p className="text-sm text-muted-foreground">
                      {order.shippingInfo.fullName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.shippingInfo.street}, {order.shippingInfo.city}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.shippingInfo.state} {order.shippingInfo.zipCode}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-1">Estimated delivery</p>
                    <p className="text-sm text-muted-foreground">
                      {getEstimatedDelivery(order.createdAt, order.status)}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-sm font-medium hover:text-primary transition-colors line-clamp-1"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs text-muted-foreground">{item.author}</p>
                        <p className="text-sm font-medium mt-1">
                          ${item.price} × {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {order.status === 'shipped' && (
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium mb-2">Tracking timeline</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <p className="text-sm">Order confirmed</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <p className="text-sm">Shipped</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Out for delivery</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Delivered</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/product/${order.items[0].id}`}>
                      View items
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrdersPage;
