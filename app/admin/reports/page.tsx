'use client';

import { useState } from 'react';
import ReportGenerator from '@/components/admin/ReportGenerator';
import ReportPreview from '@/components/admin/ReportPreview';
import {
  ReportType,
  generateCSV,
  downloadCSV,
  formatDateForFilename,
} from '@/lib/reports/reportGenerators';
import {
  getOrdersData,
  getRevenueData,
  getCustomersData,
  getCateringData,
  getProductPerformanceData,
} from '@/lib/reports/sampleReportData';

interface ReportState {
  type: ReportType;
  data: unknown[];
  fromDate: Date;
  toDate: Date;
}

export default function ReportsPage() {
  const [report, setReport] = useState<ReportState | null>(null);

  const handleGenerateReport = (reportType: ReportType, fromDate: Date, toDate: Date) => {
    let data: unknown[] = [];

    switch (reportType) {
      case 'orders':
        data = getOrdersData();
        break;
      case 'revenue':
        data = getRevenueData(fromDate, toDate);
        break;
      case 'customers':
        data = getCustomersData();
        break;
      case 'catering':
        data = getCateringData();
        break;
      case 'products':
        data = getProductPerformanceData();
        break;
    }

    setReport({
      type: reportType,
      data,
      fromDate,
      toDate,
    });
  };

  const handleDownloadCSV = () => {
    if (!report) return;

    const csv = generateCSV(report.data, report.type);
    const filename = `sean-marks-${report.type}-${formatDateForFilename(new Date())}.csv`;

    downloadCSV(csv, filename);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">Reports</h1>
        <p className="text-brand-dark/60">Generate and download business reports</p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
        {/* Left: Report Generator */}
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6">
          <h2 className="text-xl font-semibold text-brand-dark mb-6">Generate Report</h2>
          <ReportGenerator
            onGenerate={handleGenerateReport}
            onDownload={handleDownloadCSV}
            isReportGenerated={report !== null}
          />
        </div>

        {/* Right: Report Preview */}
        <div>
          {report ? (
            <ReportPreview reportType={report.type} data={report.data} />
          ) : (
            <div className="flex items-center justify-center h-96 bg-white rounded-lg border-2 border-brand-dark/10">
              <p className="text-brand-dark/60">Select report options and click &quot;Generate Report&quot;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
