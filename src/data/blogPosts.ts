export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Minimalist Living",
    excerpt: "Discover how embracing simplicity can lead to a more fulfilling and intentional life. Learn practical steps to declutter your space and mind.",
    content: `
# The Art of Minimalist Living

Minimalism isn't just about having fewer possessions—it's about making room for more of what matters. In our increasingly complex world, the minimalist approach offers a refreshing perspective on how we can live more intentionally.

## What is Minimalism?

At its core, minimalism is the practice of reducing excess and focusing on what truly adds value to your life. This philosophy extends beyond physical possessions to include our time, relationships, and mental energy.

## Benefits of Minimalist Living

### Clarity of Mind
When we reduce physical clutter, we often find that mental clutter dissipates as well. A clean, organized space promotes focus and creativity.

### Financial Freedom
By purchasing only what we need and truly value, we naturally save more money and reduce financial stress.

### Time Liberation
Fewer possessions mean less time spent cleaning, organizing, and maintaining. This frees up time for experiences and relationships that matter.

## Getting Started

Begin with one area of your life. Perhaps it's your wardrobe, your digital files, or your daily schedule. Ask yourself: *Does this add value to my life?* If the answer isn't a clear yes, it might be time to let it go.

Remember, minimalism isn't about perfection—it's about progress. Start small, be patient with yourself, and enjoy the journey toward a simpler, more intentional life.
    `,
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Lifestyle",
  },
  {
    id: "2",
    title: "Finding Peace in the Present Moment",
    excerpt: "Mindfulness practices that can transform your daily routine and help you stay grounded in an ever-changing world.",
    content: `
# Finding Peace in the Present Moment

In our fast-paced world, the present moment often eludes us. We're either dwelling on the past or anxious about the future. But what if the key to contentment lies in the here and now?

## The Power of Now

Being present doesn't mean ignoring responsibilities or planning. It means fully engaging with whatever we're doing in this moment, whether that's having a conversation, eating a meal, or simply breathing.

## Simple Mindfulness Practices

### Morning Meditation
Start your day with just five minutes of quiet reflection. Sit comfortably, close your eyes, and focus on your breath. When thoughts arise, acknowledge them and gently return to your breathing.

### Mindful Walking
Transform your daily walk into a meditation. Notice each step, the sensation of your feet touching the ground, the rhythm of your breathing, the sounds around you.

### Digital Detox Hours
Designate specific times each day to disconnect from devices. Use this time for activities that ground you—reading, journaling, or spending time in nature.

## The Ripple Effect

When we cultivate presence, we notice improvements in multiple areas of life: better relationships, enhanced creativity, reduced stress, and deeper appreciation for simple pleasures.

The present moment is all we truly have. Learning to inhabit it fully is perhaps the most valuable skill we can develop.
    `,
    date: "March 12, 2025",
    readTime: "4 min read",
    category: "Mindfulness",
  },
  {
    id: "3",
    title: "Designing Your Ideal Morning Routine",
    excerpt: "How to create a morning ritual that sets the tone for productive, peaceful days ahead.",
    content: `
# Designing Your Ideal Morning Routine

The way we begin our day often determines how the rest of it unfolds. A thoughtfully crafted morning routine can be transformative, setting a positive tone and building momentum for the hours ahead.

## Why Morning Routines Matter

Our willpower and decision-making abilities are strongest in the morning. By establishing a consistent routine, we make positive choices automatic, preserving our mental energy for what truly matters.

## Elements of an Effective Morning Routine

### Wake Up Naturally
If possible, allow your body to wake naturally rather than relying on an alarm. This might mean going to bed earlier, but the quality of rest improves significantly.

### Hydration First
Before coffee, drink a full glass of water. After hours of sleep, your body is dehydrated and needs this simple yet powerful reset.

### Movement
Whether it's yoga, stretching, or a brief walk, gentle movement helps wake up your body and mind. Even 10 minutes makes a difference.

### Nourishing Breakfast
Take time to prepare and enjoy a wholesome breakfast. This isn't just about nutrition—it's a practice in self-care and mindfulness.

### Intention Setting
Spend a few minutes journaling or simply thinking about your priorities for the day. What matters most? What can you let go of?

## Making It Sustainable

Start small. Don't try to implement a two-hour routine overnight. Begin with one or two practices and gradually add more as they become habits.

Remember, the goal isn't to have a perfect routine—it's to create a morning ritual that makes you feel grounded, energized, and ready to meet the day with intention.
    `,
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Productivity",
  },
  {
    id: "4",
    title: "The Beauty of Slow Living",
    excerpt: "In a world that values speed, discover the profound benefits of slowing down and savoring life's simple moments.",
    content: `
# The Beauty of Slow Living

We live in a culture that glorifies busyness. But what if the path to a richer, more fulfilling life lies in doing less, not more?

## Understanding Slow Living

Slow living isn't about moving at a snail's pace—it's about being intentional with your time and energy. It's the opposite of rushing through life on autopilot.

## Core Principles

### Quality Over Quantity
Rather than cramming more into each day, focus on doing fewer things with greater presence and care.

### Sustainable Pace
Honor your natural rhythms instead of pushing yourself to exhaustion. Rest isn't laziness—it's essential.

### Deeper Connections
Spend quality time with people who matter, having real conversations rather than superficial interactions.

### Appreciation
Notice and savor small pleasures: the warmth of sunlight, the taste of good food, the comfort of a familiar chair.

## Practical Steps

Start by identifying one area where you're rushing. Perhaps it's mealtime, your commute, or bedtime routines. Choose just one and experiment with slowing down, being fully present, and noticing how it feels.

You might be surprised at how much richness exists in ordinary moments when we give them our full attention.

## The Paradox

Ironically, when we slow down, we often accomplish more of what truly matters. We make better decisions, form deeper relationships, and experience greater satisfaction.

Slow living isn't about rejecting modern life—it's about engaging with it more thoughtfully, on our own terms.
    `,
    date: "March 8, 2025",
    readTime: "5 min read",
    category: "Lifestyle",
  },
];
