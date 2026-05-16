
export const generateOrderId = () => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `ORD-${timestamp}-${random}`.toUpperCase();
};

export const generateReviews = (count = 5) => {
  const reviewers = [
    { name: 'Maya Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { name: 'Raj Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { name: 'Lucia Torres', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
    { name: 'Kwame Asante', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    { name: 'Anika Bergström', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' }
  ];

  const reviewTexts = [
    'This book completely changed my perspective. The writing is engaging and the insights are profound.',
    'A masterpiece that I couldn\'t put down. Highly recommend to anyone looking for a thought-provoking read.',
    'Well-written and thoroughly researched. The author presents complex ideas in an accessible way.',
    'An absolute page-turner. The narrative keeps you hooked from start to finish.',
    'Insightful and beautifully crafted. This is a book I\'ll be recommending to friends.',
    'The depth of research is impressive. A must-read for anyone interested in the subject.',
    'Engaging storytelling combined with valuable lessons. Worth every page.',
    'A compelling read that offers fresh perspectives on familiar topics.'
  ];

  return Array.from({ length: count }, (_, i) => {
    const reviewer = reviewers[i % reviewers.length];
    return {
      id: `review-${Date.now()}-${i}`,
      userId: `user-${i + 1}`,
      userName: reviewer.name,
      userAvatar: reviewer.avatar,
      rating: Math.floor(Math.random() * 2) + 4,
      comment: reviewTexts[i % reviewTexts.length],
      date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      helpful: Math.floor(Math.random() * 50)
    };
  });
};

export const calculateCartTotal = (items) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return {
    subtotal: subtotal.toFixed(2),
    shipping: shipping.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  };
};

export const getOrderStatus = (status) => {
  const statuses = {
    pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
    processing: { label: 'Processing', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
    shipped: { label: 'Shipped', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
    delivered: { label: 'Delivered', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
    cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' }
  };

  return statuses[status] || statuses.pending;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const getEstimatedDelivery = (orderDate, status) => {
  const date = new Date(orderDate);
  let daysToAdd = 7;

  if (status === 'shipped') daysToAdd = 3;
  if (status === 'delivered') return 'Delivered';
  if (status === 'cancelled') return 'Cancelled';

  date.setDate(date.getDate() + daysToAdd);
  return formatDate(date.toISOString());
};
