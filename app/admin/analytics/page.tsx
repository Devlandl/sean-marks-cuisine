'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { DateRangeSelector, type DateRange } from '@/components/admin/DateRangeSelector';
import { AnalyticsMetrics } from '@/components/admin/AnalyticsMetrics';
import { AnalyticsCharts } from '@/components/admin/AnalyticsCharts';
import { calculateMetrics } from '@/lib/analytics/sampleData';

export default function AnalyticsPage() {
  const { isSignedIn } = useAuth();
  const [selectedRange, setSelectedRange] = useState<DateRange>({ type: 'last30days' });

  if (!isSignedIn) {
    return <div className="p-8">Redirecting to login...</div>;
  }

  const metrics = calculateMetrics();

  const handleDateRangeApply = (range: DateRange) => {
    setSelectedRange(range);
  };

  return (
    <div className="min-h-screen bg-brand-cream p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-brand-dark mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">
            View performance metrics and trends for your restaurant
          </p>
        </div>

        {/* Date Range Selector */}
        <DateRangeSelector onApply={handleDateRangeApply} />

        {/* Selected Range Display */}
        <div className="mb-6 text-sm text-gray-600">
          <p>
            Selected range:{' '}
            {selectedRange.type === 'custom'
              ? `${selectedRange.fromDate} to ${selectedRange.toDate}`
              : selectedRange.type === 'last7days'
                ? 'Last 7 days'
                : selectedRange.type === 'last30days'
                  ? 'Last 30 days'
                  : selectedRange.type === 'last3months'
                    ? 'Last 3 months'
                    : 'Last 6 months'}
          </p>
        </div>

        {/* Metrics Cards */}
        <AnalyticsMetrics
          totalRevenue={metrics.totalRevenue}
          totalOrders={metrics.totalOrders}
          avgOrderValue={metrics.avgOrderValue}
          repeatCustomerRate={metrics.repeatCustomerRate}
          topDish={metrics.topDish}
          pendingOrders={metrics.pendingOrders}
        />

        {/* Charts */}
        <AnalyticsCharts />
      </div>
    </div>
  );
}
