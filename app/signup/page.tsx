"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export default function SignupPage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'trial';
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string>('');

  const planDetails: Record<string, { name: string; price: string }> = {
    trial: { name: 'Free Trial', price: '$0' },
    professional: { name: 'Professional', price: '$10/month' },
    team: { name: 'Team', price: '$8/user/month' },
  };

  const currentPlan = planDetails[plan] || planDetails.trial;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.password || !formData.name) {
      setError('Please fill in all fields.');
      setState('error');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters.');
      setState('error');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setState('error');
      return;
    }

    setState('loading');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          plan,
        }),
      });

      if (!response.ok) {
        const data = await response.json() as { error?: string };
        throw new Error(data.error || 'Failed to create account');
      }

      const data = await response.json() as { checkoutUrl?: string };
      
      // If there's a checkout URL (paid plan), redirect to Stripe
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        // Free trial - redirect to transform page
        setState('success');
        window.location.href = '/transform';
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setState('error');
    }
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="card p-8">
            <div className="text-center mb-8">
              <h1 className="font-display text-2xl font-bold text-navy-900 mb-2">
                Create your account
              </h1>
              <p className="text-muted">
                Start your {currentPlan.name} ({currentPlan.price})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Jane Smith"
                  required
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="jane@company.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-navy-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                  minLength={8}
                />
                <p className="text-xs text-muted mt-1">Minimum 8 characters</p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-navy-900 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                />
              </div>

              {state === 'error' && error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={state === 'loading'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Creating account...
                  </span>
                ) : plan !== 'trial' ? (
                  'Continue to Payment'
                ) : (
                  'Start Free Trial'
                )}
              </button>
            </form>

            <p className="text-center text-sm text-muted mt-6">
              Already have an account?{' '}
              <Link href="/login" className="text-accent hover:underline font-medium">
                Log in
              </Link>
            </p>

            <p className="text-center text-xs text-muted mt-4">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="underline hover:text-navy-900">Terms</Link>
              {' '}and{' '}
              <Link href="/privacy" className="underline hover:text-navy-900">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
