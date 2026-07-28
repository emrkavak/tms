'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  country: z.string().optional(),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, 'Please describe your requirement'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  productId?: string;
  productName?: string;
}

export function QuoteForm({ productId, productName }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { product: productName || '' },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      try {
        await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch {
        console.log('Form submitted (API unavailable in static mode)');
      }
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Request Sent</h3>
        <p className="text-muted-foreground">We will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input type="email" {...form.register('email')} className="w-full p-3 border border-gray-200 rounded-lg" />
          {form.formState.errors.email && <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input type="tel" {...form.register('phone')} className="w-full p-3 border border-gray-200 rounded-lg" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <input {...form.register('country')} className="w-full p-3 border border-gray-200 rounded-lg" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Product of Interest</label>
        <input {...form.register('product')} className="w-full p-3 border border-gray-200 rounded-lg" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Your Requirement *</label>
        <textarea {...form.register('message')} rows={4} className="w-full p-3 border border-gray-200 rounded-lg" />
        {form.formState.errors.message && <p className="text-sm text-red-500 mt-1">{form.formState.errors.message.message}</p>}
      </div>

      <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer">
        <input type="checkbox" {...form.register('consent', { required: true })} className="accent-accent mt-1" />
        <span className="text-sm text-muted-foreground">
          I consent to TMG Power processing my data to respond to my request.
        </span>
      </label>
      {form.formState.errors.consent && <p className="text-sm text-red-500">{form.formState.errors.consent.message}</p>}

      <Button type="submit" loading={isSubmitting} className="w-full">
        Request a Quote
      </Button>
    </form>
  );
}
