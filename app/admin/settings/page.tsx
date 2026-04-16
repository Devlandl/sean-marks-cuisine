'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import BusinessHoursSettings from '@/app/components/admin/BusinessHoursSettings';
import DeliveryZonesSettings from '@/app/components/admin/DeliveryZonesSettings';
import NotificationSettings from '@/app/components/admin/NotificationSettings';
import IntegrationsSettings from '@/app/components/admin/IntegrationsSettings';
import { Button } from '@/components/common/Button';
import {
  defaultSettings,
  BusinessHours,
  DeliveryZone,
  NotificationSettings as NotificationSettingsType,
  AdminSettings,
} from '@/lib/settings/defaultSettings';

function initializeSettings(userEmail?: string): AdminSettings {
  const savedSettings = localStorage.getItem('adminSettings');
  if (savedSettings) {
    try {
      const parsed = JSON.parse(savedSettings) as AdminSettings;
      if (userEmail) {
        parsed.adminEmail = userEmail;
      }
      return parsed;
    } catch {
      // If parsing fails, use default settings
      return {
        ...defaultSettings,
        adminEmail: userEmail || defaultSettings.adminEmail,
      };
    }
  }
  return {
    ...defaultSettings,
    adminEmail: userEmail || defaultSettings.adminEmail,
  };
}

export default function SettingsPage() {
  const { isSignedIn, user } = useAuth();
  const userEmail = user?.emailAddresses[0]?.emailAddress;
  const [settings, setSettings] = useState<AdminSettings>(() =>
    initializeSettings(userEmail)
  );
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleBusinessHoursUpdate = (hours: BusinessHours[]) => {
    setSettings((prev) => ({
      ...prev,
      businessHours: hours,
    }));
  };

  const handleDeliveryZonesUpdate = (zones: DeliveryZone[]) => {
    setSettings((prev) => ({
      ...prev,
      deliveryZones: zones,
    }));
  };

  const handleNotificationsUpdate = (
    notifications: NotificationSettingsType
  ) => {
    setSettings((prev) => ({
      ...prev,
      notifications,
    }));
  };

  const handleSaveChanges = () => {
    // Save to localStorage (in production, this would be saved to a database)
    localStorage.setItem('adminSettings', JSON.stringify(settings));

    // Show success toast
    setToastMessage('Settings updated successfully');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!isSignedIn) {
    return (
      <div className="p-8">
        <p className="text-brand-dark/60">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">
          Settings
        </h1>
        <p className="text-brand-dark/60">
          Manage your business settings, hours, and integrations
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Left) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Business Hours */}
          <BusinessHoursSettings
            hours={settings.businessHours}
            onUpdate={handleBusinessHoursUpdate}
          />

          {/* Delivery Zones */}
          <DeliveryZonesSettings
            zones={settings.deliveryZones}
            onUpdate={handleDeliveryZonesUpdate}
          />

          {/* Notifications */}
          <NotificationSettings
            settings={settings.notifications}
            adminEmail={settings.adminEmail}
            onUpdate={handleNotificationsUpdate}
          />

          {/* Integrations */}
          <IntegrationsSettings />
        </div>

        {/* Sidebar (Right) */}
        <div className="space-y-6">
          {/* Save Changes Card */}
          <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6 sticky top-8">
            <h3 className="font-semibold text-brand-dark mb-4">Save Changes</h3>
            <p className="text-sm text-brand-dark/60 mb-6">
              Click the button below to save all your changes to settings.
            </p>
            <Button
              variant="primary"
              onClick={handleSaveChanges}
              className="w-full"
            >
              Save Changes
            </Button>
          </div>

          {/* Info Card */}
          <div className="bg-brand-cream/20 rounded-lg border-2 border-brand-dark/10 p-6">
            <h3 className="font-semibold text-brand-dark mb-3">Quick Tips</h3>
            <ul className="text-sm text-brand-dark/70 space-y-2">
              <li className="flex gap-2">
                <span>•</span>
                <span>Uncheck a day to mark it as closed</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Add multiple delivery zones for different areas</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Customize which notifications you receive</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>API keys are stored securely in env variables</span>
              </li>
            </ul>
          </div>

          {/* Status Card */}
          <div className="bg-green-50 rounded-lg border-2 border-green-200 p-6">
            <h3 className="font-semibold text-green-900 mb-2">Status</h3>
            <p className="text-sm text-green-800">
              All systems operational and ready to use.
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
