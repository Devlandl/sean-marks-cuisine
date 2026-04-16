'use client';

import { NotificationSettings as NotificationSettingsType } from '@/lib/settings/defaultSettings';

interface NotificationSettingsProps {
  settings: NotificationSettingsType;
  adminEmail: string;
  onUpdate: (settings: NotificationSettingsType) => void;
}

export default function NotificationSettings({
  settings,
  adminEmail,
  onUpdate,
}: NotificationSettingsProps) {
  const handleToggle = (
    field: keyof NotificationSettingsType,
    value: boolean
  ) => {
    onUpdate({
      ...settings,
      [field]: value,
    });
  };

  const handleTimeChange = (value: string) => {
    onUpdate({
      ...settings,
      dailySummaryTime: value,
    });
  };

  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6">
      <h2 className="text-xl font-semibold text-brand-dark mb-6">
        Notification Settings
      </h2>

      {/* Admin Email Display */}
      <div className="mb-6 pb-6 border-b border-brand-dark/10">
        <p className="text-sm text-brand-dark/70 mb-2">Notifications sent to:</p>
        <p className="text-brand-dark font-medium">{adminEmail}</p>
      </div>

      {/* Notification Toggles */}
      <div className="space-y-4">
        {/* Email on New Order */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="emailOnNewOrder"
            checked={settings.emailOnNewOrder}
            onChange={(e) => handleToggle('emailOnNewOrder', e.target.checked)}
            className="w-5 h-5 rounded cursor-pointer"
          />
          <label htmlFor="emailOnNewOrder" className="cursor-pointer flex-1">
            <span className="font-medium text-brand-dark">
              Email on new order
            </span>
            <p className="text-xs text-brand-dark/50 mt-0.5">
              Get notified when a customer places an order
            </p>
          </label>
        </div>

        {/* Email on Catering Inquiry */}
        <div className="flex items-center gap-3 pt-2 border-t border-brand-dark/10">
          <input
            type="checkbox"
            id="emailOnCateringInquiry"
            checked={settings.emailOnCateringInquiry}
            onChange={(e) =>
              handleToggle('emailOnCateringInquiry', e.target.checked)
            }
            className="w-5 h-5 rounded cursor-pointer"
          />
          <label htmlFor="emailOnCateringInquiry" className="cursor-pointer flex-1">
            <span className="font-medium text-brand-dark">
              Email on catering inquiry
            </span>
            <p className="text-xs text-brand-dark/50 mt-0.5">
              Get notified when someone inquires about catering services
            </p>
          </label>
        </div>

        {/* Email on Event Registration */}
        <div className="flex items-center gap-3 pt-2 border-t border-brand-dark/10">
          <input
            type="checkbox"
            id="emailOnEventRegistration"
            checked={settings.emailOnEventRegistration}
            onChange={(e) =>
              handleToggle('emailOnEventRegistration', e.target.checked)
            }
            className="w-5 h-5 rounded cursor-pointer"
          />
          <label htmlFor="emailOnEventRegistration" className="cursor-pointer flex-1">
            <span className="font-medium text-brand-dark">
              Email on event registration
            </span>
            <p className="text-xs text-brand-dark/50 mt-0.5">
              Get notified when someone registers for an event
            </p>
          </label>
        </div>

        {/* Email on New Customer Signup */}
        <div className="flex items-center gap-3 pt-2 border-t border-brand-dark/10">
          <input
            type="checkbox"
            id="emailOnNewCustomerSignup"
            checked={settings.emailOnNewCustomerSignup}
            onChange={(e) =>
              handleToggle('emailOnNewCustomerSignup', e.target.checked)
            }
            className="w-5 h-5 rounded cursor-pointer"
          />
          <label htmlFor="emailOnNewCustomerSignup" className="cursor-pointer flex-1">
            <span className="font-medium text-brand-dark">
              Email on new customer signup
            </span>
            <p className="text-xs text-brand-dark/50 mt-0.5">
              Get notified when a new customer creates an account
            </p>
          </label>
        </div>

        {/* Email Daily Summary */}
        <div className="pt-2 border-t border-brand-dark/10">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="emailDailySummary"
              checked={settings.emailDailySummary}
              onChange={(e) =>
                handleToggle('emailDailySummary', e.target.checked)
              }
              className="w-5 h-5 rounded cursor-pointer"
            />
            <label htmlFor="emailDailySummary" className="cursor-pointer flex-1">
              <span className="font-medium text-brand-dark">
                Email daily summary
              </span>
              <p className="text-xs text-brand-dark/50 mt-0.5">
                Receive a daily summary of orders and inquiries
              </p>
            </label>
          </div>

          {/* Daily Summary Time Picker */}
          {settings.emailDailySummary && (
            <div className="ml-8 mt-3">
              <label className="block text-sm font-medium text-brand-dark mb-2">
                Send daily summary at:
              </label>
              <input
                type="time"
                value={settings.dailySummaryTime}
                onChange={(e) => handleTimeChange(e.target.value)}
                className="px-3 py-2 border-2 border-brand-dark/10 rounded text-brand-dark focus:outline-none focus:border-brand-dark"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
