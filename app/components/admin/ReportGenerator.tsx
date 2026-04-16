'use client';

import { useState } from 'react';
import { ReportType, getPresetDateRange } from '@/lib/reports/reportGenerators';

interface ReportGeneratorProps {
  onGenerate: (reportType: ReportType, fromDate: Date, toDate: Date) => void;
  onDownload: () => void;
  isReportGenerated: boolean;
}

const reportOptions: Array<{ value: ReportType; label: string }> = [
  { value: 'orders', label: 'Orders Report' },
  { value: 'revenue', label: 'Revenue Report' },
  { value: 'customers', label: 'Customers Report' },
  { value: 'catering', label: 'Catering Inquiries Report' },
  { value: 'products', label: 'Product Performance Report' },
];

const presetOptions = [
  { value: 'last-7-days', label: 'Last 7 days' },
  { value: 'last-30-days', label: 'Last 30 days' },
  { value: 'last-3-months', label: 'Last 3 months' },
  { value: 'last-6-months', label: 'Last 6 months' },
  { value: 'last-12-months', label: 'Last 12 months' },
  { value: 'custom', label: 'Custom date range' },
];

export default function ReportGenerator({
  onGenerate,
  onDownload,
  isReportGenerated,
}: ReportGeneratorProps) {
  const [reportType, setReportType] = useState<ReportType>('orders');
  const [dateRangeType, setDateRangeType] = useState('last-30-days');
  const [customFromDate, setCustomFromDate] = useState('2026-03-16');
  const [customToDate, setCustomToDate] = useState('2026-04-15');

  const handleGenerate = () => {
    let fromDate: Date;
    let toDate: Date;

    if (dateRangeType === 'custom') {
      fromDate = new Date(customFromDate);
      toDate = new Date(customToDate);
    } else {
      [fromDate, toDate] = getPresetDateRange(dateRangeType);
    }

    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 999);

    onGenerate(reportType, fromDate, toDate);
  };

  return (
    <div className="space-y-6">
      {/* Report Type */}
      <div>
        <label className="block text-sm font-semibold text-brand-dark mb-2">Report Type</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value as ReportType)}
          className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
        >
          {reportOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Date Range Type */}
      <div>
        <label className="block text-sm font-semibold text-brand-dark mb-2">Date Range</label>
        <select
          value={dateRangeType}
          onChange={(e) => setDateRangeType(e.target.value)}
          className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
        >
          {presetOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Custom Date Range */}
      {dateRangeType === 'custom' && (
        <div className="space-y-4 p-4 bg-brand-cream/30 rounded-lg border-2 border-brand-dark/10">
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-2">From Date</label>
            <input
              type="date"
              value={customFromDate}
              onChange={(e) => setCustomFromDate(e.target.value)}
              className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-2">To Date</label>
            <input
              type="date"
              value={customToDate}
              onChange={(e) => setCustomToDate(e.target.value)}
              className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleGenerate}
          className="w-full px-4 py-3 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-brand-gold/90 transition-colors"
        >
          Generate Report
        </button>

        <button
          onClick={onDownload}
          disabled={!isReportGenerated}
          className={`w-full px-4 py-3 font-semibold rounded-lg transition-colors ${
            isReportGenerated
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Download CSV
        </button>
      </div>
    </div>
  );
}
