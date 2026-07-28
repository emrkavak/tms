'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, Plus, Trash2 } from 'lucide-react';

interface Appliance {
  name: string;
  runningWatts: number;
  startingWatts: number;
  quantity: number;
}

const commonAppliances = [
  { name: 'Refrigerator', runningWatts: 700, startingWatts: 2200 },
  { name: 'Freezer', runningWatts: 800, startingWatts: 2400 },
  { name: 'AC Unit (1.5 HP)', runningWatts: 1500, startingWatts: 4500 },
  { name: 'AC Unit (2 HP)', runningWatts: 2000, startingWatts: 6000 },
  { name: 'Water Pump (1 HP)', runningWatts: 750, startingWatts: 2200 },
  { name: 'Water Pump (2 HP)', runningWatts: 1500, startingWatts: 4500 },
  { name: 'Elevator (5 HP)', runningWatts: 3700, startingWatts: 11000 },
  { name: 'Elevator (10 HP)', runningWatts: 7500, startingWatts: 22000 },
  { name: 'CNC Machine', runningWatts: 5000, startingWatts: 15000 },
  { name: 'Welding Machine', runningWatts: 5000, startingWatts: 10000 },
  { name: 'Server Rack', runningWatts: 3000, startingWatts: 3000 },
  { name: 'Lighting (per 1000W)', runningWatts: 1000, startingWatts: 1000 },
  { name: 'Commercial Oven', runningWatts: 5000, startingWatts: 5000 },
  { name: 'HVAC System (5 ton)', runningWatts: 5000, startingWatts: 15000 },
];

export function SizingCalculator() {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [selectedAppliance, setSelectedAppliance] = useState('');
  const [results, setResults] = useState<{
    runningVA: number;
    startingVA: number;
    recommendedKva: number;
  } | null>(null);

  const addAppliance = () => {
    if (!selectedAppliance) return;
    const app = commonAppliances.find((a) => a.name === selectedAppliance);
    if (!app) return;
    setAppliances((prev) => [...prev, { ...app, quantity: 1 }]);
    setSelectedAppliance('');
  };

  const updateQuantity = (index: number, qty: number) => {
    setAppliances((prev) =>
      prev.map((a, i) => (i === index ? { ...a, quantity: Math.max(1, qty) } : a))
    );
  };

  const removeAppliance = (index: number) => {
    setAppliances((prev) => prev.filter((_, i) => i !== index));
  };

  const calculate = () => {
    const totalRunning = appliances.reduce(
      (sum, a) => sum + a.runningWatts * a.quantity,
      0
    );
    const totalStarting = appliances.reduce(
      (sum, a) => sum + a.startingWatts * a.quantity,
      0
    );

    const safetyMargin = 1.25;
    const pf = 0.8;
    const runningVA = (totalRunning * safetyMargin) / pf;
    const startingVA = (totalStarting * safetyMargin) / pf;
    const recommendedKva = Math.ceil(Math.max(runningVA, startingVA * 0.7) / 1000) * 5;

    setResults({ runningVA, startingVA, recommendedKva });
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Add Equipment</h3>
        <div className="flex gap-3">
          <select
            value={selectedAppliance}
            onChange={(e) => setSelectedAppliance(e.target.value)}
            className="flex-1 p-3 border border-gray-200 rounded-lg bg-white"
          >
            <option value="">Select equipment...</option>
            {commonAppliances.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name} ({a.runningWatts}W running / {a.startingWatts}W starting)
              </option>
            ))}
          </select>
          <Button variant="secondary" onClick={addAppliance} disabled={!selectedAppliance}>
            <Plus className="h-4 w-4" /> Add
          </Button>
        </div>
      </div>

      {appliances.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Equipment</th>
                <th className="text-left p-4">Running (W)</th>
                <th className="text-left p-4">Starting (W)</th>
                <th className="text-left p-4">Qty</th>
                <th className="text-left p-4">Total Running (W)</th>
                <th className="text-left p-4">Total Starting (W)</th>
                <th className="p-4" />
              </tr>
            </thead>
            <tbody>
              {appliances.map((app, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="p-4 font-medium">{app.name}</td>
                  <td className="p-4">{app.runningWatts.toLocaleString()}</td>
                  <td className="p-4">{app.startingWatts.toLocaleString()}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={app.quantity}
                      onChange={(e) => updateQuantity(i, parseInt(e.target.value) || 1)}
                      className="w-16 p-1 border border-gray-200 rounded text-center"
                      min={1}
                    />
                  </td>
                  <td className="p-4">{(app.runningWatts * app.quantity).toLocaleString()}</td>
                  <td className="p-4">{(app.startingWatts * app.quantity).toLocaleString()}</td>
                  <td className="p-4">
                    <button onClick={() => removeAppliance(i)} className="text-gray-400 hover:text-red-500 cursor-pointer">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 border-t border-gray-200">
            <Button onClick={calculate} size="lg">
              <Calculator className="h-5 w-5" /> Calculate Generator Size
            </Button>
          </div>
        </div>
      )}

      {results && (
        <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
          <h3 className="text-xl font-semibold mb-4">Recommended Generator Size</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Estimated Running Load</div>
              <div className="text-2xl font-bold">{Math.round(results.runningVA).toLocaleString()} VA</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Estimated Starting Load</div>
              <div className="text-2xl font-bold">{Math.round(results.startingVA).toLocaleString()} VA</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Recommended Generator</div>
              <div className="text-3xl font-bold text-accent">{results.recommendedKva} kVA</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This is an estimate. Final selection must be confirmed by qualified technical personnel
            after reviewing real load profile, harmonics, motor starts, environmental conditions,
            altitude, temperature, and future expansion.
          </p>
        </div>
      )}
    </div>
  );
}
