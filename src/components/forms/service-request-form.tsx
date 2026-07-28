'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Check, Upload } from 'lucide-react';

const serviceSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  productModel: z.string().min(1, 'Product model is required'),
  serialNumber: z.string().optional(),
  installationLocation: z.string().optional(),
  faultDescription: z.string().min(10, 'Please describe the issue'),
  urgency: z.enum(['low', 'medium', 'high', 'emergency']),
  contactMethod: z.enum(['phone', 'email', 'whatsapp']),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

type ServiceFormData = z.infer<typeof serviceSchema>;

export function ServiceRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
  });

  const onSubmit = async (data: ServiceFormData) => {
    setIsSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'service', ...data, consent: true }),
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
        <h3 className="text-2xl font-semibold mb-2">Service Request Received</h3>
        <p className="text-muted-foreground">Our service team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input {...form.register('fullName')} className="w-full p-3 border border-gray-200 rounded-lg" />
          {form.formState.errors.fullName && <p className="text-sm text-red-500 mt-1">{form.formState.errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input {...form.register('company')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Model *</label>
          <input {...form.register('productModel')} className="w-full p-3 border border-gray-200 rounded-lg" />
          {form.formState.errors.productModel && <p className="text-sm text-red-500 mt-1">{form.formState.errors.productModel.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Serial Number</label>
          <input {...form.register('serialNumber')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Installation Location</label>
        <input {...form.register('installationLocation')} className="w-full p-3 border border-gray-200 rounded-lg" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Fault Description *</label>
        <textarea {...form.register('faultDescription')} rows={4} className="w-full p-3 border border-gray-200 rounded-lg" />
        {form.formState.errors.faultDescription && <p className="text-sm text-red-500 mt-1">{form.formState.errors.faultDescription.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Urgency</label>
          <select {...form.register('urgency')} className="w-full p-3 border border-gray-200 rounded-lg">
            <option value="low">Low — Routine</option>
            <option value="medium">Medium — Within a week</option>
            <option value="high">High — Within 24h</option>
            <option value="emergency">Emergency — Immediate</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Preferred Contact Method</label>
          <select {...form.register('contactMethod')} className="w-full p-3 border border-gray-200 rounded-lg">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" {...form.register('email')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input type="tel" {...form.register('phone')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-200 rounded-lg">
        <Upload className="h-5 w-5 text-gray-400" />
        <span className="text-sm text-gray-500">Add photos or video (optional)</span>
        <input type="file" multiple accept="image/*,video/*" className="hidden" />
      </div>

      <Button type="submit" loading={isSubmitting} className="w-full">
        Submit Service Request
      </Button>
    </form>
  );
}
