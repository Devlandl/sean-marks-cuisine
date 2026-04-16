import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  menus: defineTable({
    weekStart: v.string(),
    weekEnd: v.string(),
    cutoffDate: v.string(),
    cutoffTime: v.string(),
    isLive: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_week_start', ['weekStart'])
    .index('by_is_live', ['isLive']),

  menuItems: defineTable({
    menuId: v.id('menus'),
    name: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
    halfPortionPrice: v.number(),
    fullPortionPrice: v.number(),
    isSoldOut: v.boolean(),
    sortOrder: v.number(),
    createdAt: v.number(),
  })
    .index('by_menu', ['menuId']),

  addOns: defineTable({
    menuId: v.id('menus'),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    quantityAvailable: v.optional(v.number()),
    isSoldOut: v.boolean(),
    sortOrder: v.number(),
    createdAt: v.number(),
  })
    .index('by_menu', ['menuId']),

  orders: defineTable({
    orderNumber: v.string(),
    customerId: v.id('customers'),
    status: v.string(),
    items: v.array(
      v.object({
        menuItemId: v.optional(v.id('menuItems')),
        addOnId: v.optional(v.id('addOns')),
        portionSize: v.optional(v.string()),
        quantity: v.number(),
        price: v.number(),
        name: v.string(),
      })
    ),
    subtotal: v.number(),
    total: v.number(),
    deliveryZip: v.string(),
    deliveryAddress: v.string(),
    deliveryInstructions: v.optional(v.string()),
    stripePaymentId: v.string(),
    paymentStatus: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
    deliveredAt: v.optional(v.number()),
  })
    .index('by_customer', ['customerId'])
    .index('by_order_number', ['orderNumber'])
    .index('by_status', ['status']),

  customers: defineTable({
    clerkUserId: v.optional(v.string()),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    zip: v.string(),
    isRepeatCustomer: v.boolean(),
    totalSpent: v.number(),
    orderCount: v.number(),
    createdAt: v.number(),
    lastOrderDate: v.optional(v.number()),
  })
    .index('by_clerk_user', ['clerkUserId'])
    .index('by_email', ['email']),

  events: defineTable({
    title: v.string(),
    description: v.string(),
    date: v.string(),
    time: v.string(),
    location: v.string(),
    price: v.number(),
    capacity: v.number(),
    imageUrl: v.optional(v.string()),
    isPublished: v.boolean(),
    registrationClosed: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_date', ['date'])
    .index('by_published', ['isPublished']),

  eventRegistrations: defineTable({
    eventId: v.id('events'),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    dietaryRestrictions: v.optional(v.string()),
    stripePaymentId: v.string(),
    paymentStatus: v.string(),
    registeredAt: v.number(),
    attendedAt: v.optional(v.number()),
  })
    .index('by_event', ['eventId'])
    .index('by_email', ['email']),

  cateringInquiries: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    eventDate: v.string(),
    guestCount: v.number(),
    eventType: v.string(),
    dietaryRestrictions: v.optional(v.string()),
    budgetRange: v.optional(v.string()),
    message: v.string(),
    status: v.string(),
    internalNotes: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_status', ['status']),

  messages: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    isRead: v.boolean(),
    createdAt: v.number(),
  })
    .index('by_is_read', ['isRead']),

  galleryImages: defineTable({
    url: v.string(),
    category: v.string(),
    isFeatured: v.boolean(),
    sortOrder: v.number(),
    uploadedAt: v.number(),
  })
    .index('by_category', ['category']),

  faqs: defineTable({
    question: v.string(),
    answer: v.string(),
    section: v.string(),
    isPublished: v.boolean(),
    sortOrder: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_section', ['section']),

  settings: defineTable({
    key: v.string(),
    businessName: v.string(),
    address: v.string(),
    phone: v.string(),
    email: v.string(),
    hours: v.optional(v.string()),
    deliveryZips: v.array(v.string()),
    minimumOrderAmount: v.number(),
    defaultCutoffDay: v.string(),
    defaultCutoffTime: v.string(),
    socialLinks: v.object({
      instagram: v.optional(v.string()),
      facebook: v.optional(v.string()),
      tiktok: v.optional(v.string()),
    }),
    emailNotifications: v.object({
      orders: v.boolean(),
      catering: v.boolean(),
      messages: v.boolean(),
      events: v.boolean(),
    }),
    pushNotifications: v.boolean(),
    updatedAt: v.number(),
  })
    .index('by_key', ['key']),
});
