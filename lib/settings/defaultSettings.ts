export interface BusinessHours {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  isOpen: boolean;
  openTime: string; // HH:MM format
  closeTime: string; // HH:MM format
}

export interface DeliveryZone {
  id: string;
  name: string;
  zipCodes: string[]; // Array of zip codes
  deliveryFee: number; // In dollars
  isActive: boolean;
}

export interface NotificationSettings {
  emailOnNewOrder: boolean;
  emailOnCateringInquiry: boolean;
  emailOnEventRegistration: boolean;
  emailOnNewCustomerSignup: boolean;
  emailDailySummary: boolean;
  dailySummaryTime: string; // HH:MM format
}

export interface AdminSettings {
  businessHours: BusinessHours[];
  deliveryZones: DeliveryZone[];
  notifications: NotificationSettings;
  adminEmail: string;
}

export const defaultBusinessHours: BusinessHours[] = [
  { day: 'Monday', isOpen: true, openTime: '10:00', closeTime: '18:00' },
  { day: 'Tuesday', isOpen: true, openTime: '10:00', closeTime: '18:00' },
  { day: 'Wednesday', isOpen: true, openTime: '10:00', closeTime: '18:00' },
  { day: 'Thursday', isOpen: true, openTime: '10:00', closeTime: '18:00' },
  { day: 'Friday', isOpen: true, openTime: '10:00', closeTime: '18:00' },
  { day: 'Saturday', isOpen: true, openTime: '10:00', closeTime: '18:00' },
  { day: 'Sunday', isOpen: true, openTime: '12:00', closeTime: '17:00' },
];

export const defaultDeliveryZones: DeliveryZone[] = [
  {
    id: '1',
    name: 'Zone A',
    zipCodes: ['07962'],
    deliveryFee: 3.0,
    isActive: true,
  },
  {
    id: '2',
    name: 'Zone B',
    zipCodes: ['07974'],
    deliveryFee: 3.5,
    isActive: true,
  },
  {
    id: '3',
    name: 'Zone C',
    zipCodes: ['07960'],
    deliveryFee: 4.0,
    isActive: true,
  },
];

export const defaultNotifications: NotificationSettings = {
  emailOnNewOrder: true,
  emailOnCateringInquiry: true,
  emailOnEventRegistration: true,
  emailOnNewCustomerSignup: false,
  emailDailySummary: false,
  dailySummaryTime: '09:00',
};

export const defaultSettings: AdminSettings = {
  businessHours: defaultBusinessHours,
  deliveryZones: defaultDeliveryZones,
  notifications: defaultNotifications,
  adminEmail: 'admin@seanmarkscuisine.com',
};
