// Sample data generators for different report types

interface OrderData {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  deliveryDate: string;
  createdDate: string;
}

interface RevenueData {
  date: string;
  ordersCount: number;
  totalRevenue: number;
  averageOrderValue: number;
  couponDiscounts: number;
  taxCollected: number;
}

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  lifetimeSpend: number;
  joinDate: string;
  lastOrderDate: string;
  location: string;
}

interface CateringInquiryData {
  id: string;
  type: string;
  contactName: string;
  email: string;
  phone: string;
  eventType: string;
  guestCount: number;
  budget: number;
  status: 'new' | 'contacted' | 'booked' | 'declined';
  createdDate: string;
}

interface ProductData {
  name: string;
  category: string;
  unitsSold: number;
  revenue: number;
  avgRating: number;
  inStock: string;
}

export function getOrdersData(): OrderData[] {
  return [
    {
      id: 'SMC-001',
      customerName: 'John Smith',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      total: 8950,
      status: 'pending',
      deliveryDate: '2026-04-20',
      createdDate: '2026-04-15',
    },
    {
      id: 'SMC-002',
      customerName: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '(555) 234-5678',
      total: 12500,
      status: 'preparing',
      deliveryDate: '2026-04-21',
      createdDate: '2026-04-14',
    },
    {
      id: 'SMC-003',
      customerName: 'Michael Brown',
      email: 'mbrown@example.com',
      phone: '(555) 345-6789',
      total: 15750,
      status: 'ready',
      deliveryDate: '2026-04-18',
      createdDate: '2026-04-13',
    },
    {
      id: 'SMC-004',
      customerName: 'Emily Davis',
      email: 'edavis@example.com',
      phone: '(555) 456-7890',
      total: 9200,
      status: 'delivered',
      deliveryDate: '2026-04-16',
      createdDate: '2026-04-10',
    },
    {
      id: 'SMC-005',
      customerName: 'James Wilson',
      email: 'jwilson@example.com',
      phone: '(555) 567-8901',
      total: 11300,
      status: 'delivered',
      deliveryDate: '2026-04-17',
      createdDate: '2026-04-09',
    },
  ];
}

export function getRevenueData(fromDate: Date, toDate: Date): RevenueData[] {
  const data: RevenueData[] = [];
  const current = new Date(fromDate);

  while (current < toDate) {
    const date = current.toISOString().split('T')[0];
    const ordersCount = Math.floor(Math.random() * 8) + 2;
    const totalRevenue = Math.floor(Math.random() * 80000) + 20000;
    const couponDiscounts = Math.floor(totalRevenue * 0.05);

    data.push({
      date,
      ordersCount,
      totalRevenue,
      averageOrderValue: Math.floor(totalRevenue / ordersCount),
      couponDiscounts,
      taxCollected: Math.floor(totalRevenue * 0.066),
    });

    current.setDate(current.getDate() + 1);
  }

  return data;
}

export function getCustomersData(): CustomerData[] {
  const locations = [
    'Lebanon, NJ',
    'Frenchtown, NJ',
    'Delaware, NJ',
    'Jersey City, NJ',
    'Newark, NJ',
    'Princeton, NJ',
    'Trenton, NJ',
    'Camden, NJ',
    'Atlantic City, NJ',
    'Cape May, NJ',
  ];

  return [
    {
      name: 'John Smith',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      totalOrders: 12,
      lifetimeSpend: 125000,
      joinDate: '2025-06-15',
      lastOrderDate: '2026-04-10',
      location: locations[0],
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '(555) 234-5678',
      totalOrders: 8,
      lifetimeSpend: 87500,
      joinDate: '2025-08-22',
      lastOrderDate: '2026-04-12',
      location: locations[1],
    },
    {
      name: 'Michael Brown',
      email: 'mbrown@example.com',
      phone: '(555) 345-6789',
      totalOrders: 15,
      lifetimeSpend: 195000,
      joinDate: '2025-03-10',
      lastOrderDate: '2026-04-14',
      location: locations[2],
    },
    {
      name: 'Emily Davis',
      email: 'edavis@example.com',
      phone: '(555) 456-7890',
      totalOrders: 5,
      lifetimeSpend: 45000,
      joinDate: '2025-11-05',
      lastOrderDate: '2026-04-16',
      location: locations[3],
    },
    {
      name: 'James Wilson',
      email: 'jwilson@example.com',
      phone: '(555) 567-8901',
      totalOrders: 10,
      lifetimeSpend: 98500,
      joinDate: '2025-07-18',
      lastOrderDate: '2026-04-13',
      location: locations[4],
    },
    {
      name: 'Patricia Garcia',
      email: 'pgarcia@example.com',
      phone: '(555) 678-9012',
      totalOrders: 6,
      lifetimeSpend: 72000,
      joinDate: '2025-09-12',
      lastOrderDate: '2026-04-11',
      location: locations[5],
    },
    {
      name: 'Robert Martinez',
      email: 'rmartinez@example.com',
      phone: '(555) 789-0123',
      totalOrders: 9,
      lifetimeSpend: 110000,
      joinDate: '2025-05-20',
      lastOrderDate: '2026-04-15',
      location: locations[6],
    },
    {
      name: 'Jessica Anderson',
      email: 'janderson@example.com',
      phone: '(555) 890-1234',
      totalOrders: 7,
      lifetimeSpend: 85000,
      joinDate: '2025-10-08',
      lastOrderDate: '2026-04-09',
      location: locations[7],
    },
    {
      name: 'David Taylor',
      email: 'dtaylor@example.com',
      phone: '(555) 901-2345',
      totalOrders: 11,
      lifetimeSpend: 142000,
      joinDate: '2025-04-15',
      lastOrderDate: '2026-04-14',
      location: locations[8],
    },
    {
      name: 'Linda Thomas',
      email: 'lthomas@example.com',
      phone: '(555) 012-3456',
      totalOrders: 4,
      lifetimeSpend: 38000,
      joinDate: '2025-12-20',
      lastOrderDate: '2026-04-08',
      location: locations[9],
    },
  ];
}

export function getCateringData(): CateringInquiryData[] {
  const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'Graduation', 'Reunion', 'Funeral Reception', 'Festival', 'Other'];

  return [
    {
      id: 'CAT-001',
      type: 'Business',
      contactName: 'David Johnson',
      email: 'djohnson@company.com',
      phone: '(555) 123-4567',
      eventType: eventTypes[1],
      guestCount: 150,
      budget: 450000,
      status: 'booked',
      createdDate: '2026-04-01',
    },
    {
      id: 'CAT-002',
      type: 'Individual',
      contactName: 'Maria Garcia',
      email: 'mgarcia@email.com',
      phone: '(555) 234-5678',
      eventType: eventTypes[0],
      guestCount: 200,
      budget: 750000,
      status: 'contacted',
      createdDate: '2026-04-05',
    },
    {
      id: 'CAT-003',
      type: 'Individual',
      contactName: 'Robert Lee',
      email: 'rlee@email.com',
      phone: '(555) 345-6789',
      eventType: eventTypes[2],
      guestCount: 75,
      budget: 200000,
      status: 'new',
      createdDate: '2026-04-12',
    },
    {
      id: 'CAT-004',
      type: 'Business',
      contactName: 'Angela Smith',
      email: 'asmith@corp.com',
      phone: '(555) 456-7890',
      eventType: eventTypes[3],
      guestCount: 120,
      budget: 350000,
      status: 'booked',
      createdDate: '2026-03-28',
    },
    {
      id: 'CAT-005',
      type: 'Individual',
      contactName: 'James Brown',
      email: 'jbrown@email.com',
      phone: '(555) 567-8901',
      eventType: eventTypes[4],
      guestCount: 100,
      budget: 300000,
      status: 'declined',
      createdDate: '2026-04-03',
    },
    {
      id: 'CAT-006',
      type: 'Individual',
      contactName: 'Patricia Wilson',
      email: 'pwilson@email.com',
      phone: '(555) 678-9012',
      eventType: eventTypes[5],
      guestCount: 80,
      budget: 250000,
      status: 'contacted',
      createdDate: '2026-04-08',
    },
    {
      id: 'CAT-007',
      type: 'Business',
      contactName: 'Michael Davis',
      email: 'mdavis@company.com',
      phone: '(555) 789-0123',
      eventType: eventTypes[6],
      guestCount: 500,
      budget: 1500000,
      status: 'new',
      createdDate: '2026-04-14',
    },
    {
      id: 'CAT-008',
      type: 'Individual',
      contactName: 'Elizabeth Martinez',
      email: 'emartinez@email.com',
      phone: '(555) 890-1234',
      eventType: eventTypes[7],
      guestCount: 50,
      budget: 150000,
      status: 'contacted',
      createdDate: '2026-04-10',
    },
  ];
}

export function getProductPerformanceData(): ProductData[] {
  const products = [
    { name: 'Jerk Chicken - Full', category: 'Main Course', unitsSold: 145, revenue: 174000 },
    { name: 'Oxtail Stew - Full', category: 'Main Course', unitsSold: 98, revenue: 147000 },
    { name: 'Rice & Peas', category: 'Side', unitsSold: 234, revenue: 70200 },
    { name: 'Callaloo Soup', category: 'Soup', unitsSold: 156, revenue: 62400 },
    { name: 'Fried Plantains', category: 'Side', unitsSold: 189, revenue: 56700 },
    { name: 'Bread Pudding', category: 'Dessert', unitsSold: 112, revenue: 44800 },
    { name: 'Jerk Fish - Half', category: 'Main Course', unitsSold: 87, revenue: 65250 },
    { name: 'Curry Goat', category: 'Main Course', unitsSold: 76, revenue: 114000 },
    { name: 'Cornmeal Porridge', category: 'Breakfast', unitsSold: 123, revenue: 36900 },
    { name: 'Jamaican Patty', category: 'Appetizer', unitsSold: 267, revenue: 40050 },
  ];

  return products.map((p) => ({
    name: p.name,
    category: p.category,
    unitsSold: p.unitsSold,
    revenue: p.revenue,
    avgRating: (Math.random() * 1 + 4).toFixed(1),
    inStock: Math.random() > 0.2 ? 'Yes' : 'No',
  }));
}
