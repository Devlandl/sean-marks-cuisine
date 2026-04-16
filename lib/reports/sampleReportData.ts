export function getOrdersData() {
  return [
    {
      id: 'SMC-001',
      customerName: 'David Brown',
      email: 'david@example.com',
      phone: '(609) 555-0123',
      totalAmount: 89.99,
      status: 'delivered',
      deliveryDate: '2026-04-10',
      createdDate: '2026-04-09',
    },
    {
      id: 'SMC-002',
      customerName: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '(609) 555-0124',
      totalAmount: 124.50,
      status: 'pending',
      deliveryDate: '2026-04-16',
      createdDate: '2026-04-15',
    },
    {
      id: 'SMC-003',
      customerName: 'Michael Johnson',
      email: 'michael@example.com',
      phone: '(609) 555-0125',
      totalAmount: 156.75,
      status: 'preparing',
      deliveryDate: '2026-04-17',
      createdDate: '2026-04-14',
    },
  ];
}

export function getRevenueData(fromDate?: Date, toDate?: Date) {
  return [
    {
      date: '2026-04-15',
      orderCount: 12,
      totalRevenue: 1450.0,
      avgOrderValue: 120.83,
      discounts: 50.0,
      tax: 96.04,
    },
    {
      date: '2026-04-14',
      orderCount: 10,
      totalRevenue: 1200.0,
      avgOrderValue: 120.0,
      discounts: 40.0,
      tax: 79.2,
    },
    {
      date: '2026-04-13',
      orderCount: 8,
      totalRevenue: 950.0,
      avgOrderValue: 118.75,
      discounts: 30.0,
      tax: 62.7,
    },
  ];
}

export function getCustomersData() {
  return [
    {
      name: 'Alice Chen',
      email: 'alice@example.com',
      phone: '(609) 555-0100',
      totalOrders: 5,
      lifetimeSpend: 425.5,
      joinDate: '2026-01-15',
      lastOrderDate: '2026-04-10',
      location: 'Allendale, NJ',
    },
    {
      name: 'Robert Martinez',
      email: 'robert@example.com',
      phone: '(609) 555-0101',
      totalOrders: 3,
      lifetimeSpend: 245.75,
      joinDate: '2026-02-20',
      lastOrderDate: '2026-04-12',
      location: 'Lebanon, NJ',
    },
    {
      name: 'Emma Johnson',
      email: 'emma@example.com',
      phone: '(609) 555-0102',
      totalOrders: 8,
      lifetimeSpend: 678.25,
      joinDate: '2025-12-10',
      lastOrderDate: '2026-04-15',
      location: 'Califon, NJ',
    },
  ];
}

export function getCateringData() {
  return [
    {
      id: 'CAT-001',
      type: 'Individual',
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '(609) 555-0200',
      eventType: 'Wedding',
      guestCount: 150,
      budget: 3000,
      status: 'booked',
      createdDate: '2026-03-20',
    },
    {
      id: 'CAT-002',
      type: 'Corporate',
      name: 'Michael Johnson',
      email: 'michael@example.com',
      phone: '(609) 555-0201',
      eventType: 'Corporate Event',
      guestCount: 75,
      budget: 1500,
      status: 'contacted',
      createdDate: '2026-03-25',
    },
    {
      id: 'CAT-003',
      type: 'Individual',
      name: 'Lisa Garcia',
      email: 'lisa@example.com',
      phone: '(609) 555-0202',
      eventType: 'Birthday Party',
      guestCount: 50,
      budget: 800,
      status: 'new',
      createdDate: '2026-04-10',
    },
  ];
}

export function getProductPerformanceData() {
  return [
    {
      name: 'Herb Roasted Chicken',
      category: 'Main',
      unitsSold: 267,
      revenue: 2670.0,
      avgRating: 4.8,
      inStock: true,
    },
    {
      name: 'Oxtail Stew',
      category: 'Main',
      unitsSold: 189,
      revenue: 2835.0,
      avgRating: 4.9,
      inStock: true,
    },
    {
      name: 'Callaloo Soup',
      category: 'Appetizer',
      unitsSold: 342,
      revenue: 1368.0,
      avgRating: 4.7,
      inStock: true,
    },
    {
      name: 'Bread Pudding',
      category: 'Dessert',
      unitsSold: 198,
      revenue: 1188.0,
      avgRating: 4.9,
      inStock: true,
    },
  ];
}
