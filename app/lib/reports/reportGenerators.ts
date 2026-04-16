// CSV generation and report type definitions

export type ReportType = 'orders' | 'revenue' | 'customers' | 'catering' | 'products';

export interface ReportColumn {
  key: string;
  label: string;
  format?: (value: unknown) => string;
}

export const reportColumns: Record<ReportType, ReportColumn[]> = {
  orders: [
    { key: 'id', label: 'Order ID' },
    { key: 'customerName', label: 'Customer Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'total', label: 'Total Amount', format: (v) => `$${((v as number) / 100).toFixed(2)}` },
    { key: 'status', label: 'Status' },
    { key: 'deliveryDate', label: 'Delivery Date' },
    { key: 'createdDate', label: 'Created Date' },
  ],
  revenue: [
    { key: 'date', label: 'Date' },
    { key: 'ordersCount', label: 'Orders Count' },
    { key: 'totalRevenue', label: 'Total Revenue', format: (v) => `$${((v as number) / 100).toFixed(2)}` },
    { key: 'averageOrderValue', label: 'Average Order Value', format: (v) => `$${((v as number) / 100).toFixed(2)}` },
    { key: 'couponDiscounts', label: 'Coupon Discounts', format: (v) => `$${((v as number) / 100).toFixed(2)}` },
    { key: 'taxCollected', label: 'Tax Collected', format: (v) => `$${((v as number) / 100).toFixed(2)}` },
  ],
  customers: [
    { key: 'name', label: 'Customer Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'totalOrders', label: 'Total Orders' },
    { key: 'lifetimeSpend', label: 'Lifetime Spend', format: (v) => `$${((v as number) / 100).toFixed(2)}` },
    { key: 'joinDate', label: 'Join Date' },
    { key: 'lastOrderDate', label: 'Last Order Date' },
    { key: 'location', label: 'Location' },
  ],
  catering: [
    { key: 'id', label: 'Inquiry ID' },
    { key: 'type', label: 'Type' },
    { key: 'contactName', label: 'Contact Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'eventType', label: 'Event Type' },
    { key: 'guestCount', label: 'Guest Count' },
    { key: 'budget', label: 'Budget', format: (v) => `$${((v as number) / 100).toFixed(2)}` },
    { key: 'status', label: 'Status' },
    { key: 'createdDate', label: 'Created Date' },
  ],
  products: [
    { key: 'name', label: 'Product Name' },
    { key: 'category', label: 'Category' },
    { key: 'unitsSold', label: 'Units Sold' },
    { key: 'revenue', label: 'Revenue', format: (v) => `$${((v as number) / 100).toFixed(2)}` },
    { key: 'avgRating', label: 'Avg Rating' },
    { key: 'inStock', label: 'In Stock Status' },
  ],
};

// Escape CSV fields properly (handles commas, quotes, newlines)
function escapeCSVField(field: unknown): string {
  const value = String(field ?? '');
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function generateCSV(reportType: ReportType, data: unknown[]): string {
  const columns = reportColumns[reportType];

  if (!columns || data.length === 0) {
    return '';
  }

  // Header row
  const headerRow = columns.map((col) => escapeCSVField(col.label)).join(',');

  // Data rows
  const dataRows = data.map((row) =>
    columns
      .map((col) => {
        const rawValue = (row as Record<string, unknown>)[col.key];
        const formattedValue = col.format ? col.format(rawValue) : rawValue;
        return escapeCSVField(formattedValue);
      })
      .join(',')
  );

  return [headerRow, ...dataRows].join('\n');
}

export function downloadCSV(csv: string, filename: string): void {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function getPresetDateRange(preset: string): [Date, Date] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = new Date(today);

  switch (preset) {
    case 'last-7-days':
      startDate.setDate(today.getDate() - 7);
      break;
    case 'last-30-days':
      startDate.setDate(today.getDate() - 30);
      break;
    case 'last-3-months':
      startDate.setMonth(today.getMonth() - 3);
      break;
    case 'last-6-months':
      startDate.setMonth(today.getMonth() - 6);
      break;
    case 'last-12-months':
      startDate.setFullYear(today.getFullYear() - 1);
      break;
    default:
      startDate.setDate(today.getDate() - 30);
  }

  return [startDate, today];
}

export function formatDateForDisplay(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

export function formatDateForFilename(date: Date): string {
  return date.toISOString().split('T')[0];
}
