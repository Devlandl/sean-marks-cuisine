'use client';

import { ReportType, reportColumns } from '@/lib/reports/reportGenerators';

interface ReportPreviewProps {
  reportType: ReportType;
  data: unknown[];
}

export default function ReportPreview({ reportType, data }: ReportPreviewProps) {
  const columns = reportColumns[reportType];

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-white rounded-lg border-2 border-brand-dark/10">
        <p className="text-brand-dark/60">Generate a report to view preview data</p>
      </div>
    );
  }

  // Show first 10 rows
  const previewData = data.slice(0, 10);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-brand-dark">
          Preview
          {data.length > 10 && (
            <span className="text-sm text-brand-dark/60 ml-2">
              (Showing {previewData.length} of {data.length} records)
            </span>
          )}
        </h3>
      </div>

      <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-brand-dark text-brand-cream">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-dark/10">
            {previewData.map((row, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/20'
                } hover:bg-brand-cream/40 transition-colors`}
              >
                {columns.map((col) => {
                  const rawValue = (row as Record<string, unknown>)[col.key];
                  const displayValue = col.format ? col.format(rawValue) : rawValue;

                  return (
                    <td key={col.key} className="px-4 py-3 text-sm text-brand-dark whitespace-nowrap">
                      {String(displayValue ?? '-')}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length > 10 && (
        <p className="text-xs text-brand-dark/60 text-right">
          Download CSV to see all {data.length} records
        </p>
      )}
    </div>
  );
}
