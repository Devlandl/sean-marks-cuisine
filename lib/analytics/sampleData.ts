// Sample analytics data for the last 6 months
export const monthlyRevenue = [
  { month: 'Oct 2025', revenue: 8200 },
  { month: 'Nov 2025', revenue: 9800 },
  { month: 'Dec 2025', revenue: 11200 },
  { month: 'Jan 2026', revenue: 10500 },
  { month: 'Feb 2026', revenue: 11800 },
  { month: 'Mar 2026', revenue: 12450 },
];

export const topDishes = [
  { name: 'Herb Roasted Chicken', orders: 124 },
  { name: 'Mediterranean Quinoa Bowl', orders: 98 },
  { name: 'Grilled Salmon', orders: 87 },
  { name: 'Roasted Vegetables', orders: 76 },
  { name: 'Chocolate Mousse', orders: 65 },
];

export const customerGrowth = [
  { month: 'Oct 2025', newCustomers: 28 },
  { month: 'Nov 2025', newCustomers: 35 },
  { month: 'Dec 2025', newCustomers: 42 },
  { month: 'Jan 2026', newCustomers: 38 },
  { month: 'Feb 2026', newCustomers: 45 },
  { month: 'Mar 2026', newCustomers: 52 },
];

export const categoryBreakdown = [
  { name: 'Mains', value: 65 },
  { name: 'Add-ons', value: 20 },
  { name: 'Desserts', value: 15 },
];

// Calculate metrics from sample data
export const calculateMetrics = () => {
  const totalRevenue = 12450; // Last 30 days
  const totalOrders = 156; // Last 30 days
  const avgOrderValue = (totalRevenue / totalOrders).toFixed(2);
  const repeatCustomerRate = 34; // Percentage
  const topDish = 'Herb Roasted Chicken';
  const pendingOrders = 3;

  return {
    totalRevenue,
    totalOrders,
    avgOrderValue,
    repeatCustomerRate,
    topDish,
    pendingOrders,
  };
};
