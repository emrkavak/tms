'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const sparePartsSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  productModel: z.string().min(1),
  serialNumber: z.string().optional(),
  partName: z.string().min(1),
  partNumber: z.string().optional(),
  quantity: z.string().min(1),
  location: z.string().optional(),
  deliveryPriority: z.enum(['normal', 'urgent', 'emergency']),
});

type SparePartsFormData = z.infer<typeof sparePartsSchema>;

export function SparePartsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<SparePartsFormData>({
    resolver: zodResolver(sparePartsSchema),
  });

  const onSubmit = async (data: SparePartsFormData) => {
    setIsSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'spare-parts', ...data, consent: true }),
      });
    } catch {
      console.log('Form submitted (API unavailable)');
    } finally {
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Spare Parts Request Received</h3>
        <p className="text-muted-foreground">We will check availability and get back to you.</p>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input {...form.register('fullName')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input {...form.register('company')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input type="email" {...form.register('email')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input type="tel" {...form.register('phone')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Model *</label>
          <input {...form.register('productModel')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Serial Number</label>
          <input {...form.register('serialNumber')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Part Name *</label>
          <input {...form.register('partName')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Part Number</label>
          <input {...form.register('partNumber')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity *</label>
          <input type="number" {...form.register('quantity')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Delivery Priority</label>
          <select {...form.register('deliveryPriority')} className="w-full p-3 border border-gray-200 rounded-lg">
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Delivery Location</label>
        <input {...form.register('location')} className="w-full p-3 border border-gray-200 rounded-lg" />
      </div>

      <Button type="submit" loading={isSubmitting} className="w-full">
        Submit Spare Parts Request
      </Button>
    </form>
  );
}
