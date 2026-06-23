/**
 * Single source of truth for all real PromptEdit product facts.
 * Numbers/tools/pricing verified from the live contentcreator.com/prompt-edit page
 * (see ../../../Reference — *.md). Keep these accurate — credibility matters.
 */

export const SITE = {
  name: 'PromptEdit',
  domain: 'promptedit.com',
  ctaPrimary: 'Get started today',
  ctaSecondary: 'See what’s inside',
  creators: '43,943+',
  guaranteeDays: 30,
} as const

/** AI models available across the marketplace (real list). */
export const AI_TOOLS: { name: string; tag: string }[] = [
  { name: 'Nano Banana Pro', tag: 'Image' },
  { name: 'Veo 3', tag: 'Video' },
  { name: 'Kling', tag: 'Video' },
  { name: 'Seedance', tag: 'Video' },
  { name: 'Grok', tag: 'Image' },
  { name: 'HeyGen', tag: 'Avatar' },
  { name: 'ElevenLabs', tag: 'Voice' },
  { name: 'Suno', tag: 'Music' },
  { name: 'Ideogram', tag: 'Image' },
]

export interface ToolCategory {
  id: string
  label: string
  blurb: string
  uses: string[]
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: 'image',
    label: 'AI Image Tools',
    blurb: 'Generate, clone and edit visuals — from thumbnails to ad creative.',
    uses: ['AI Clones', 'Social Media Posts', 'Graphic Design', 'Image Editing', 'YouTube Thumbnails', 'Online Ads'],
  },
  {
    id: 'video',
    label: 'AI Video Tools',
    blurb: 'Turn prompts into cinematic footage, effects and short-form content.',
    uses: ['Clone Videos', 'Visual Effects', 'Cinematic Films', 'Video Ads', 'Reels & TikToks', 'YouTube Videos'],
  },
  {
    id: 'audio',
    label: 'AI Audio Tools',
    blurb: 'Voiceovers, voice clones, sound effects and original music — on demand.',
    uses: ['AI Voiceovers', 'AI Voice Clones', 'Voice Swaps', 'AI Sound Effects', 'AI Music Generation'],
  },
  {
    id: 'plugins',
    label: 'AI Editing Plugins',
    blurb: 'Generate inside Premiere Pro & DaVinci Resolve — no browser tab needed.',
    uses: ['Premiere Pro', 'DaVinci Resolve', 'Drop straight into your timeline'],
  },
]

export interface Plan {
  id: string
  badge: string
  name: string
  price: string
  period: string
  credits: string
  highlight: boolean
  features: string[]
  cta: string
}

export const PLANS: Plan[] = [
  {
    id: 'credits',
    badge: 'Pay as you go',
    name: 'Credit Pack',
    price: '$98',
    period: 'one-time',
    credits: '$110 worth of AI credits',
    highlight: false,
    features: [
      'Save 10% on your first credit pack',
      'Use credits on any AI tool on the site',
      'Nano Banana Pro, Veo, Kling, Suno & more',
      'Top up anytime — no subscription required',
    ],
    cta: 'Claim credit pack',
  },
  {
    id: 'subscription',
    badge: 'Best value',
    name: 'Monthly',
    price: '$39',
    period: 'per month',
    credits: '$49 of AI credits every month',
    highlight: true,
    features: [
      'Lifetime 20% boost on monthly credits',
      '10% off every additional credit purchase',
      '100,000+ asset Templates Library included',
      'Faster generation + run multiple at once',
      'Cancel anytime',
    ],
    cta: 'Start monthly plan',
  },
]

export interface LibraryCategory {
  name: string
  count: string
  desc: string
}

export const LIBRARY: LibraryCategory[] = [
  { name: 'LUTs', count: '4,000+', desc: 'Drag-and-drop cinematic color grades for any editor.' },
  { name: 'Sound Effects', count: '60,000+', desc: 'Pro SFX, organized and searchable. Just drag and drop.' },
  { name: 'Text Animations', count: '3,000+', desc: 'Scroll-stopping titles — pick a layout, type, done.' },
  { name: 'Overlays', count: '2,000+', desc: 'Light leaks, film grain, VHS and more — instant style.' },
  { name: 'Backgrounds', count: '5,000+', desc: 'Clean, modern animated bases to build scenes on.' },
]

export const LIBRARY_TOTAL = '100,000+'

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'My daughter and I got more editing work done today in 3 hours than we normally do in 3 days!',
    name: 'Hilda Schlueter',
    role: 'Online Course Creator',
  },
  {
    quote: "My videos wouldn't look HALF as good as they do if it wasn't for the Templates Library. I lean on it for every edit.",
    name: 'Matt Lilley',
    role: 'ContentCreator.com Student',
  },
  {
    quote: "A fantastic resource — I don't need any other digital asset subscriptions.",
    name: 'Brady Hales',
    role: 'ContentCreator.com Student',
  },
]

export interface Faq {
  q: string
  a: string
}

export const FAQS: Faq[] = [
  {
    q: 'What is PromptEdit?',
    a: 'One marketplace to access every major AI image, video and audio tool — pay-as-you-go with credits, no stacked subscriptions. Think of it as a single place to create, instead of juggling a dozen logins.',
  },
  {
    q: 'Can I use what I create for social media or commercial videos?',
    a: 'Yes. Everything you generate and download is yours to use across social, client work and commercial projects.',
  },
  {
    q: 'Is the quality the same as using each tool directly?',
    a: 'Yes — PromptEdit runs the same underlying models (Veo, Kling, Nano Banana, ElevenLabs and more). You get the same output, with one wallet and one interface.',
  },
  {
    q: 'What is the Content Creator Templates Library?',
    a: `Over ${LIBRARY_TOTAL} professionally designed assets — LUTs, sound effects, text animations, overlays and backgrounds — included with the monthly plan and compatible with every major editor.`,
  },
  {
    q: 'Do any limits apply to downloads?',
    a: 'Monthly members get unlimited downloads and unlimited usage of the Templates Library.',
  },
  {
    q: 'Will the templates work in my editing platform?',
    a: 'Yes — assets are built to drop into Premiere Pro, DaVinci Resolve, Final Cut and other major editors.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Anytime, in a couple of clicks. Within 30 days of purchase you can also get a full refund on any unused credits.',
  },
  {
    q: "What happens to templates I've downloaded if I cancel?",
    a: 'Anything you downloaded while subscribed stays yours to keep and use.',
  },
]

export const NAV_LINKS = [
  { label: 'Tools', href: '#tools' },
  { label: 'Library', href: '#library' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const
