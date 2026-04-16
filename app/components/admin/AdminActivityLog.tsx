'use client';

import { useState } from 'react';

interface ActivityLog {
  id: string;
  admin: string;
  action: string;
  details: string;
  timestamp: string;
}

interface AdminActivityLogProps {
  logs: ActivityLog[];
}

function formatTimestamp(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function AdminActivityLog({ logs }: AdminActivityLogProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(logs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedLogs = logs.slice(startIndex, endIndex);

  return (
    <div className="space-y-4">
      {/* Activity Log Table */}
      <div className="bg-white rounded-lg border-2 border-brand-dark/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-brand-dark text-brand-cream">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Admin</th>
                <th className="px-6 py-3 text-left font-semibold">Action</th>
                <th className="px-6 py-3 text-left font-semibold">Details</th>
                <th className="px-6 py-3 text-left font-semibold">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-dark/10">
              {displayedLogs.map((log) => (
                <tr key={log.id} className="hover:bg-brand-cream/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-brand-dark">{log.admin}</td>
                  <td className="px-6 py-4 text-sm text-brand-dark font-semibold">{log.action}</td>
                  <td className="px-6 py-4 text-sm text-brand-dark/70">{log.details}</td>
                  <td className="px-6 py-4 text-sm text-brand-dark/60">
                    {formatTimestamp(log.timestamp)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-brand-gold text-brand-dark hover:bg-brand-gold/90'
            }`}
          >
            Previous
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg font-semibold transition-colors ${
                  currentPage === page
                    ? 'bg-brand-gold text-brand-dark'
                    : 'bg-brand-cream text-brand-dark hover:bg-brand-cream/80'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-brand-gold text-brand-dark hover:bg-brand-gold/90'
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Empty State */}
      {logs.length === 0 && (
        <div className="text-center py-8 text-brand-dark/60">
          <p>No activity logs yet.</p>
        </div>
      )}
    </div>
  );
}
