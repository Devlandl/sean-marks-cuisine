'use client';

import { useState } from 'react';
import FAQManagementTable from '@/app/components/admin/FAQManagementTable';
import { Button } from '@/components/common/Button';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const sampleFAQs: FAQItem[] = [
  {
    id: '1',
    category: 'Ordering',
    question: 'How do I place an order?',
    answer: 'Simply browse our menu, select items, and checkout with credit card or other accepted payment methods.',
  },
  {
    id: '2',
    category: 'Ordering',
    question: 'What is the minimum order?',
    answer: 'The minimum order is $40 to ensure quality delivery and proper meal preparation.',
  },
  {
    id: '3',
    category: 'Ordering',
    question: 'Can I customize portions?',
    answer: 'Yes, each item offers half and full portion options to suit your appetite and budget.',
  },
  {
    id: '4',
    category: 'Delivery',
    question: 'Do you offer delivery?',
    answer: 'Yes, we deliver throughout the Lebanon, NJ area Tuesday through Friday with reliable service.',
  },
  {
    id: '5',
    category: 'Delivery',
    question: 'Can I pick up my order?',
    answer: 'Absolutely! Local pickup is available at our kitchen location during service hours.',
  },
  {
    id: '6',
    category: 'Dietary',
    question: 'Do you have vegan options?',
    answer: 'Yes, we offer vegetarian and vegan options each week based on our rotating menu.',
  },
  {
    id: '7',
    category: 'Dietary',
    question: 'Are you allergen-free?',
    answer: 'We handle allergens in our kitchen. Contact us directly for special dietary needs and accommodations.',
  },
  {
    id: '8',
    category: 'Catering',
    question: 'What is the minimum for catering?',
    answer: 'Catering orders have a minimum of 10 guests to ensure we can properly serve your event.',
  },
  {
    id: '9',
    category: 'Catering',
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2 weeks in advance for catering events to guarantee availability.',
  },
  {
    id: '10',
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and digital payment methods for your convenience.',
  },
  {
    id: '11',
    category: 'Payment',
    question: 'What is your cancellation policy?',
    answer: 'Cancellations must be made by Friday 5 PM before your delivery week.',
  },
  {
    id: '12',
    category: 'Payment',
    question: 'Do you offer refunds?',
    answer: 'We stand behind our quality and will make it right if you are not satisfied.',
  },
];

export default function FAQManagementPage() {
  const [faqs, setFAQs] = useState<FAQItem[]>(sampleFAQs);
  const [showForm, setShowForm] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<FAQItem | null>(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const filtered = filterCategory === 'all' ? faqs : faqs.filter((faq) => faq.category === filterCategory);

  const handleAdd = () => {
    setEditingFAQ(null);
    setShowForm(true);
  };

  const handleEdit = (faq: FAQItem) => {
    setEditingFAQ(faq);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      setFAQs(faqs.filter((f) => f.id !== id));
    }
  };

  const categories = ['all', ...new Set(faqs.map((f) => f.category))];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold text-brand-dark mb-2">FAQ Management</h1>
          <p className="text-brand-dark/60">Manage frequently asked questions</p>
        </div>
        {!showForm && (
          <Button variant="primary" onClick={handleAdd}>
            + Add FAQ
          </Button>
        )}
      </div>

      {/* Form Placeholder */}
      {showForm && (
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6 max-w-2xl">
          <h2 className="text-xl font-semibold text-brand-dark mb-4">
            {editingFAQ ? 'Edit FAQ' : 'Add New FAQ'}
          </h2>
          <p className="text-brand-dark/60">Form coming soon</p>
        </div>
      )}

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-semibold text-brand-dark mb-3">Filter by Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filterCategory === cat
                  ? 'bg-brand-dark text-brand-cream'
                  : 'border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-cream'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Table */}
      <FAQManagementTable items={filtered} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Total FAQs</p>
          <p className="text-3xl font-bold text-brand-dark">{faqs.length}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Categories</p>
          <p className="text-3xl font-bold text-brand-dark">{new Set(faqs.map((f) => f.category)).size}</p>
        </div>
        <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-4">
          <p className="text-sm text-brand-dark/60">Visible</p>
          <p className="text-3xl font-bold text-brand-dark">{filtered.length}</p>
        </div>
      </div>
    </div>
  );
}
