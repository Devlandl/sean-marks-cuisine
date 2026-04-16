'use client';

interface AnalyticsMetricsProps {
  totalRevenue: number;
  totalOrders: number;
  avgOrderValue: string;
  repeatCustomerRate: number;
  topDish: string;
  pendingOrders: number;
}

export function AnalyticsMetrics({
  totalRevenue,
  totalOrders,
  avgOrderValue,
  repeatCustomerRate,
  topDish,
  pendingOrders,
}: AnalyticsMetricsProps) {
  const metrics = [
    {
      label: 'Total Revenue (Last 30 Days)',
      value: `$${totalRevenue.toLocaleString()}`,
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700',
    },
    {
      label: 'Total Orders (Last 30 Days)',
      value: totalOrders.toString(),
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-700',
    },
    {
      label: 'Average Order Value',
      value: `$${avgOrderValue}`,
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700',
    },
    {
      label: 'Repeat Customer Rate',
      value: `${repeatCustomerRate}%`,
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-700',
    },
    {
      label: 'Top Dish This Month',
      value: topDish,
      color: 'bg-pink-50 border-pink-200',
      textColor: 'text-pink-700',
    },
    {
      label: 'Pending Orders',
      value: pendingOrders.toString(),
      color: 'bg-yellow-50 border-yellow-200',
      textColor: 'text-yellow-700',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`p-6 bg-white rounded-lg shadow-sm border ${metric.color}`}
        >
          <p className="text-sm font-medium text-gray-600 mb-2">{metric.label}</p>
          <p className={`text-2xl font-bold ${metric.textColor}`}>{metric.value}</p>
        </div>
      ))}
    </div>
  );
}
