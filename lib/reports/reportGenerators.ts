export type ReportType = 'orders' | 'revenue' | 'customers' | 'catering' | 'products';

interface ReportColumn {
  key: string;
  label: string;
  format?: (value: unknown) => string | number;
}

export const reportColumns: Record<ReportType, ReportColumn[]> = {
  orders: [
    { key: 'id', label: 'Order ID' },
    { key: 'customerName', label: 'Customer' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'totalAmount', label: 'Total', format: (v) => `$${Number(v).toFixed(2)}` },
    { key: 'status', label: 'Status' },
    { key: 'deliveryDate', label: 'Delivery Date' },
  ],
  revenue: [
    { key: 'date', label: 'Date' },
    { key: 'orderCount', label: 'Orders' },
    { key: 'totalRevenue', label: 'Revenue', format: (v) => `$${Number(v).toFixed(2)}` },
    { key: 'avgOrderValue', label: 'Avg Order', format: (v) => `$${Number(v).toFixed(2)}` },
    { key: 'discounts', label: 'Discounts', format: (v) => `$${Number(v).toFixed(2)}` },
    { key: 'tax', label: 'Tax', format: (v) => `$${Number(v).toFixed(2)}` },
  ],
  customers: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'totalOrders', label: 'Orders' },
    { key: 'lifetimeSpend', label: 'Lifetime Spend', format: (v) => `$${Number(v).toFixed(2)}` },
    { key: 'joinDate', label: 'Join Date' },
    { key: 'lastOrderDate', label: 'Last Order' },
  ],
  catering: [
    { key: 'id', label: 'ID' },
    { key: 'type', label: 'Type' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'eventType', label: 'Event Type' },
    { key: 'guestCount', label: 'Guests' },
    { key: 'budget', label: 'Budget', format: (v) => `$${Number(v).toFixed(2)}` },
    { key: 'status', label: 'Status' },
  ],
  products: [
    { key: 'name', label: 'Product' },
    { key: 'category', label: 'Category' },
    { key: 'unitsSold', label: 'Units Sold' },
    { key: 'revenue', label: 'Revenue', format: (v) => `$${Number(v).toFixed(2)}` },
    { key: 'avgRating', label: 'Rating' },
    { key: 'inStock', label: 'In Stock', format: (v) => (v ? 'Yes' : 'No') },
  ],
};

export function generateCSV(data: unknown[], reportType: ReportType): string {
  const columns = reportColumns[reportType];

  if (!data || data.length === 0) {
    return '';
  }

  // Header
  const header = columns.map((col) => `"${col.label}"`).join(',');

  // Rows
  const rows = data.map((row) =>
    columns
      .map((col) => {
        const value = (row as Record<string, unknown>)[col.key];
        const displayValue = col.format ? col.format(value) : value;
        const stringValue = String(displayValue ?? '');
        return `"${stringValue.replace(/"/g, '""')}"`;
      })
      .join(',')
  );

  return [header, ...rows].join('\n');
}

export function downloadCSV(csvContent: string, filename: string): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function formatDateForFilename(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function getPresetDateRange(preset: string): [Date, Date] {
  const today = new Date();
  const from = new Date();

  switch (preset) {
    case 'last-7-days':
      from.setDate(today.getDate() - 7);
      break;
    case 'last-30-days':
      from.setDate(today.getDate() - 30);
      break;
    case 'last-3-months':
      from.setMonth(today.getMonth() - 3);
      break;
    case 'last-6-months':
      from.setMonth(today.getMonth() - 6);
      break;
    case 'last-12-months':
      from.setFullYear(today.getFullYear() - 1);
      break;
    default:
      from.setDate(today.getDate() - 30);
  }

  return [from, today];
}
