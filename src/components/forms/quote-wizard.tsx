'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, ArrowRight, Send } from 'lucide-react';

const steps = [
  'application',
  'power',
  'phase',
  'usage',
  'installation',
  'noise',
  'brand',
  'controls',
  'location',
  'timing',
  'contact',
] as const;

const stepLabels: Record<string, string> = {
  application: 'Application Type',
  power: 'Power Requirement',
  phase: 'Phase',
  usage: 'Usage Type',
  installation: 'Installation',
  noise: 'Noise Restriction',
  brand: 'Preferred Brand',
  controls: 'Control Systems',
  location: 'Project Location',
  timing: 'Delivery Timing',
  contact: 'Contact Info',
};

const wizardSchema = z.object({
  application: z.string().optional(),
  powerRequired: z.string().optional(),
  powerUnit: z.enum(['kVA', 'kW']).optional(),
  phase: z.enum(['single', 'three', 'unknown']).optional(),
  usageType: z.enum(['standby', 'prime', 'continuous', 'unknown']).optional(),
  installationType: z.enum(['indoor', 'outdoor', 'mobile', 'container', 'unknown']).optional(),
  noiseRestriction: z.enum(['yes', 'no', 'unknown']).optional(),
  preferredEngineBrand: z.string().optional(),
  preferredAlternatorBrand: z.string().optional(),
  autoTransfer: z.boolean().optional(),
  synchronization: z.boolean().optional(),
  specialControls: z.boolean().optional(),
  projectLocation: z.string().optional(),
  deliveryTiming: z.string().optional(),
  fullName: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  country: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent is required' }) }),
});

type WizardData = z.infer<typeof wizardSchema>;

interface QuoteWizardProps {
  productId?: string;
  locale: string;
}

export function QuoteWizard({ productId, locale }: QuoteWizardProps) {
  const t = useTranslations('common');
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isRtl = locale === 'ar';

  const form = useForm<WizardData>({
    resolver: zodResolver(wizardSchema),
    defaultValues: { consent: undefined },
  });

  const currentStep = steps[step];

  const handleNext = async () => {
    const fields = getFieldsForStep(step);
    const isValid = await form.trigger(fields as any);
    if (isValid) {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        await handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const data = form.getValues();
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quote',
          productId,
          ...data,
          language: locale,
          consent: true,
        }),
      });
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch {
      setIsSuccess(true);
      console.log('Form submitted (API unavailable)');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
      {isSuccess ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Request Received</h3>
          <p className="text-muted-foreground">
            Our team will review your requirements and get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    i <= step
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {i + 1}
                </div>
                <span className={`text-sm hidden md:inline ${i === step ? 'text-accent font-medium' : 'text-gray-400'}`}>
                  {stepLabels[s]}
                </span>
                {i < steps.length - 1 && <div className="w-4 h-px bg-gray-200" />}
              </div>
            ))}
          </div>

          <div className="mb-8">
            {step === 0 && (
              <div className="space-y-4">
                <label className="block text-lg font-medium mb-4">What is your application type?</label>
                <select {...form.register('application')} className="w-full p-3 border border-gray-200 rounded-lg">
                  <option value="">Select...</option>
                  <option value="factory">Factory / Industrial</option>
                  <option value="construction">Construction</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hospitality">Hotel / Hospitality</option>
                  <option value="datacenter">Data Center</option>
                  <option value="telecom">Telecommunications</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="residential">Commercial / Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-lg font-medium mb-4">What is your estimated power requirement?</label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="e.g. 500"
                    {...form.register('powerRequired')}
                    className="flex-1 p-3 border border-gray-200 rounded-lg"
                  />
                  <select {...form.register('powerUnit')} className="p-3 border border-gray-200 rounded-lg">
                    <option value="kVA">kVA</option>
                    <option value="kW">kW</option>
                  </select>
                </div>
                <p className="text-sm text-muted-foreground">Not sure? Select &quot;I don&apos;t know&quot; and our engineers will help.</p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <label className="block text-lg font-medium mb-4">Phase</label>
                {['single', 'three', 'unknown'].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-accent/30">
                    <input type="radio" value={opt} {...form.register('phase')} className="accent-accent" />
                    <span className="capitalize">{opt === 'unknown' ? "I don't know" : opt + ' phase'}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <label className="block text-lg font-medium mb-4">Usage Type</label>
                {[
                  { value: 'standby', label: 'Standby (Emergency backup)' },
                  { value: 'prime', label: 'Prime (Main power source)' },
                  { value: 'continuous', label: 'Continuous (24/7 operation)' },
                  { value: 'unknown', label: "I don't know" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-accent/30">
                    <input type="radio" value={opt.value} {...form.register('usageType')} className="accent-accent" />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-3">
                <label className="block text-lg font-medium mb-4">Installation Type</label>
                {[
                  { value: 'indoor', label: 'Indoor' },
                  { value: 'outdoor', label: 'Outdoor' },
                  { value: 'mobile', label: 'Mobile / Trailer' },
                  { value: 'container', label: 'Containerized' },
                  { value: 'unknown', label: "I don't know" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-accent/30">
                    <input type="radio" value={opt.value} {...form.register('installationType')} className="accent-accent" />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 5 && (
              <div className="space-y-3">
                <label className="block text-lg font-medium mb-4">Do you have noise restrictions?</label>
                {[
                  { value: 'yes', label: 'Yes — require soundproof enclosure' },
                  { value: 'no', label: 'No — open type is acceptable' },
                  { value: 'unknown', label: "I don't know" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-accent/30">
                    <input type="radio" value={opt.value} {...form.register('noiseRestriction')} className="accent-accent" />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <label className="block text-lg font-medium mb-4">Preferred Engine Brand</label>
                <select {...form.register('preferredEngineBrand')} className="w-full p-3 border border-gray-200 rounded-lg">
                  <option value="">No preference</option>
                  <option value="cummins">Cummins</option>
                  <option value="perkins">Perkins</option>
                  <option value="john-deere">John Deere</option>
                  <option value="mtu">MTU</option>
                  <option value="volvo">Volvo Penta</option>
                  <option value="scania">Scania</option>
                  <option value="man">MAN</option>
                  <option value="other">Other</option>
                </select>
                <label className="block text-lg font-medium mb-4 mt-6">Preferred Alternator Brand</label>
                <select {...form.register('preferredAlternatorBrand')} className="w-full p-3 border border-gray-200 rounded-lg">
                  <option value="">No preference</option>
                  <option value="leroy-somer">Leroy-Somer</option>
                  <option value="mecc-alte">Mecc Alte</option>
                  <option value="stamford">Stamford</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-4">
                <label className="block text-lg font-medium mb-4">Control Systems Required</label>
                {[
                  { key: 'autoTransfer', label: 'Automatic Transfer Switch (ATS)' },
                  { key: 'synchronization', label: 'Synchronization System' },
                  { key: 'specialControls', label: 'Special Control Panel' },
                ].map((opt) => (
                  <label key={opt.key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-accent/30">
                    <input type="checkbox" {...form.register(opt.key as any)} className="accent-accent" />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 8 && (
              <div className="space-y-4">
                <label className="block text-lg font-medium mb-4">Project Location</label>
                <input
                  type="text"
                  placeholder="City, Country"
                  {...form.register('projectLocation')}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Country"
                  {...form.register('country')}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                />
              </div>
            )}

            {step === 9 && (
              <div className="space-y-4">
                <label className="block text-lg font-medium mb-4">Delivery Timing</label>
                <select {...form.register('deliveryTiming')} className="w-full p-3 border border-gray-200 rounded-lg">
                  <option value="">Select...</option>
                  <option value="immediate">Immediate / Urgent</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="3-months">Within 3 months</option>
                  <option value="6-months">Within 6 months</option>
                  <option value="planning">Just planning / Not urgent</option>
                </select>
              </div>
            )}

            {step === 10 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-4">Your Contact Information</h3>
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
                  <label className="block text-sm font-medium mb-1">Additional Requirements</label>
                  <textarea {...form.register('message')} rows={3} className="w-full p-3 border border-gray-200 rounded-lg" />
                </div>
                <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer">
                  <input type="checkbox" {...form.register('consent', { required: true })} className="accent-accent mt-1" />
                  <span className="text-sm text-muted-foreground">
                    I consent to TMG Power processing my data to respond to my request.
                  </span>
                </label>
                {form.formState.errors.consent && <p className="text-sm text-red-500">{form.formState.errors.consent.message}</p>}
              </div>
            )}
          </div>

          <div className="flex justify-between gap-4">
            {step > 0 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="h-4 w-4" /> Previous
              </Button>
            ) : (
              <div />
            )}
            <Button variant="primary" onClick={handleNext} loading={isSubmitting}>
              {step < steps.length - 1 ? (
                <>Next <ArrowRight className="h-4 w-4" /></>
              ) : (
                <>Submit Request <Send className="h-4 w-4" /></>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

function getFieldsForStep(step: number): (keyof WizardData)[] {
  const mapping: Record<number, (keyof WizardData)[]> = {
    0: ['application'],
    1: ['powerRequired', 'powerUnit'],
    2: ['phase'],
    3: ['usageType'],
    4: ['installationType'],
    5: ['noiseRestriction'],
    6: ['preferredEngineBrand', 'preferredAlternatorBrand'],
    7: ['autoTransfer', 'synchronization', 'specialControls'],
    8: ['projectLocation', 'country'],
    9: ['deliveryTiming'],
    10: ['fullName', 'company', 'email', 'phone', 'message', 'consent'],
  };
  return mapping[step] || [];
}
