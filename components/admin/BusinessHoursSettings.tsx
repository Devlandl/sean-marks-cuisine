'use client';

import { BusinessHours } from '@/lib/settings/defaultSettings';

interface BusinessHoursSettingsProps {
  hours: BusinessHours[];
  onUpdate: (hours: BusinessHours[]) => void;
}

export default function BusinessHoursSettings({
  hours,
  onUpdate,
}: BusinessHoursSettingsProps) {
  const handleToggleOpen = (day: string) => {
    const updated = hours.map((h) =>
      h.day === day ? { ...h, isOpen: !h.isOpen } : h
    );
    onUpdate(updated);
  };

  const handleTimeChange = (
    day: string,
    field: 'openTime' | 'closeTime',
    value: string
  ) => {
    const updated = hours.map((h) =>
      h.day === day ? { ...h, [field]: value } : h
    );
    onUpdate(updated);
  };

  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6">
      <h2 className="text-xl font-semibold text-brand-dark mb-6">
        Business Hours
      </h2>

      <div className="space-y-4">
        {hours.map((hour) => (
          <div
            key={hour.day}
            className="flex items-center gap-4 pb-4 border-b border-brand-dark/10 last:border-b-0"
          >
            {/* Day and Toggle */}
            <div className="w-28">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hour.isOpen}
                  onChange={() => handleToggleOpen(hour.day)}
                  className="w-5 h-5 rounded cursor-pointer"
                />
                <span className="font-medium text-brand-dark">{hour.day}</span>
              </label>
            </div>

            {/* Time Pickers */}
            {hour.isOpen ? (
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-1">
                  <label className="block text-sm text-brand-dark/70 mb-1">
                    Opens
                  </label>
                  <input
                    type="time"
                    value={hour.openTime}
                    onChange={(e) =>
                      handleTimeChange(hour.day, 'openTime', e.target.value)
                    }
                    className="w-full px-3 py-2 border-2 border-brand-dark/10 rounded text-brand-dark focus:outline-none focus:border-brand-dark"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-brand-dark/70 mb-1">
                    Closes
                  </label>
                  <input
                    type="time"
                    value={hour.closeTime}
                    onChange={(e) =>
                      handleTimeChange(hour.day, 'closeTime', e.target.value)
                    }
                    className="w-full px-3 py-2 border-2 border-brand-dark/10 rounded text-brand-dark focus:outline-none focus:border-brand-dark"
                  />
                </div>
              </div>
            ) : (
              <div className="flex-1 py-2">
                <span className="text-brand-dark/50 italic">Closed</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
