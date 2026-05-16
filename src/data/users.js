
export const sampleUsers = [
  {
    id: 'user-1',
    email: 'maya.chen@example.com',
    name: 'Maya Chen',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    role: 'customer',
    createdAt: '2025-01-15',
    addresses: [
      {
        id: 'addr-1',
        type: 'home',
        street: '742 Maple Avenue',
        city: 'Portland',
        state: 'OR',
        zipCode: '97204',
        country: 'USA',
        isDefault: true
      }
    ]
  },
  {
    id: 'user-2',
    email: 'raj.patel@example.com',
    name: 'Raj Patel',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    role: 'customer',
    createdAt: '2025-02-20',
    addresses: []
  },
  {
    id: 'user-3',
    email: 'lucia.torres@example.com',
    name: 'Lucia Torres',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    role: 'customer',
    createdAt: '2025-03-10',
    addresses: []
  },
  {
    id: 'admin-1',
    email: 'admin@bookstore.com',
    name: 'Admin User',
    password: 'admin123',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    role: 'admin',
    createdAt: '2024-01-01',
    addresses: []
  }
];
