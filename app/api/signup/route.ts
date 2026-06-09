import { NextRequest, NextResponse } from 'next/server';

// Note: In production, you would use actual Stripe API and database
// This is a simplified implementation for the MVP

interface SignupBody {
  email?: string;
  password?: string;
  name?: string;
  plan?: string;
}

// Simple in-memory storage for demo (use a real database in production)
const users: Map<string, { email: string; name: string; plan: string }> = new Map();

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json() as SignupBody;
    
    const { email, password, name, plan } = body;

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    // Check if user already exists
    if (users.has(email)) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 400 }
      );
    }

    // Store user (in production, hash password and use real database)
    users.set(email, { email, name, plan: plan || 'trial' });

    // If paid plan, create Stripe checkout session
    if (plan === 'professional' || plan === 'team') {
      // In production, this would be:
      // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
      // const session = await stripe.checkout.sessions.create({...});
      // return NextResponse.json({ checkoutUrl: session.url });
      
      // For MVP demo, we'll return a mock checkout URL
      // In production, replace with actual Stripe integration
      const mockCheckoutUrl = `/checkout?plan=${plan}&email=${encodeURIComponent(email)}`;
      
      return NextResponse.json({ 
        success: true,
        checkoutUrl: mockCheckoutUrl,
        message: 'Account created. Redirecting to payment...'
      });
    }

    // Free trial - no payment needed
    return NextResponse.json({ 
      success: true,
      message: 'Account created successfully'
    });

  } catch {
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}
