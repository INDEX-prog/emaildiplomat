import { NextRequest, NextResponse } from 'next/server';

// This is a simplified transformation for MVP
// In production, this would connect to an AI service like OpenAI
function transformEmail(email: string): string {
  // Basic transformations for common passive-aggressive phrases
  const transformations: Array<{ pattern: RegExp; replacement: string }> = [
    {
      pattern: /as (I|we) (already|previously) (mentioned|said|stated|told you)/gi,
      replacement: 'To recap our earlier discussion'
    },
    {
      pattern: /as per my (last|previous) email/gi,
      replacement: 'Following up on my previous message'
    },
    {
      pattern: /per my (last|previous) email/gi,
      replacement: 'Following up on my previous message'
    },
    {
      pattern: /I('m| am) not sure (if|whether) you (saw|read|received)/gi,
      replacement: 'I wanted to make sure you had a chance to see'
    },
    {
      pattern: /I guess (some|we|you)/gi,
      replacement: 'Perhaps we'
    },
    {
      pattern: /going forward,?\s*(please|I need you to|you (need|should))/gi,
      replacement: 'Moving ahead, I suggest we'
    },
    {
      pattern: /just (to be clear|so we('re| are) clear)/gi,
      replacement: 'To ensure alignment'
    },
    {
      pattern: /correct me if I('m| am) wrong/gi,
      replacement: 'From my understanding'
    },
    {
      pattern: /(?:with all due respect|respectfully)/gi,
      replacement: 'I appreciate your perspective, and'
    },
    {
      pattern: /I('ll| will) handle it( myself)?/gi,
      replacement: "I'm happy to take the lead on this"
    },
    {
      pattern: /thanks in advance/gi,
      replacement: 'Thank you for your help with this'
    },
    {
      pattern: /please advise/gi,
      replacement: 'I would appreciate your thoughts'
    },
    {
      pattern: /as you (should|can) (see|know)/gi,
      replacement: 'As you may recall'
    },
    {
      pattern: /not sure (why|what)/gi,
      replacement: "I'd like to understand"
    },
    {
      pattern: /any update\??/gi,
      replacement: 'When you have a moment, could you share an update?'
    },
    {
      pattern: /obviously/gi,
      replacement: 'clearly'
    },
    {
      pattern: /apparently/gi,
      replacement: 'it seems'
    },
    {
      pattern: /did you (even|actually)/gi,
      replacement: 'were you able to'
    },
    {
      pattern: /I thought (it was|this was) clear/gi,
      replacement: 'Allow me to clarify'
    },
  ];

  let transformed = email;
  
  for (const { pattern, replacement } of transformations) {
    transformed = transformed.replace(pattern, replacement);
  }

  // Add a friendly greeting if not present
  const hasGreeting = /^(hi|hello|hey|dear|good morning|good afternoon|good evening)/i.test(transformed.trim());
  if (!hasGreeting && transformed.trim().length > 0) {
    transformed = 'Hi,\n\n' + transformed;
  }

  // Add a friendly closing if the email seems incomplete
  const hasClosing = /(regards|thanks|best|sincerely|cheers)\s*,?\s*$/i.test(transformed.trim());
  if (!hasClosing && transformed.trim().length > 0) {
    transformed = transformed.trim() + '\n\nBest regards';
  }

  return transformed;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json() as { email?: string };
    
    if (!body.email || typeof body.email !== 'string') {
      return NextResponse.json(
        { error: 'Email content is required' },
        { status: 400 }
      );
    }

    if (body.email.length > 10000) {
      return NextResponse.json(
        { error: 'Email is too long. Maximum 10,000 characters.' },
        { status: 400 }
      );
    }

    // Simulate a slight delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));

    const transformed = transformEmail(body.email);

    return NextResponse.json({ transformed });
  } catch {
    return NextResponse.json(
      { error: 'Failed to transform email' },
      { status: 500 }
    );
  }
}
