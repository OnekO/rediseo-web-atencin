# Planning Guide

A professional website for Xarela, a social organization focused on training, animation, and support for disadvantaged populations at risk of social exclusion in the Galician Autonomous Community since 1999.

**Experience Qualities**:
1. **Professional** - Conveys trust and credibility through clean, organized design that reflects institutional seriousness
2. **Accessible** - Welcoming and approachable for vulnerable populations, with clear information hierarchy
3. **Purposeful** - Every element reinforces the mission of social inclusion and support

**Complexity Level**: Content Showcase (information-focused)
- This is primarily an informational website showcasing the organization's services, mission, and news updates for beneficiaries, partners, and the community.

## Essential Features

**News Feed Section**
- Functionality: Displays recent news articles with thumbnails, titles, and dates
- Purpose: Keep stakeholders informed about programs, activities, and organizational updates
- Trigger: Page load
- Progression: User views news list → clicks article card → (would navigate to detail page)
- Success criteria: All news items display correctly with proper formatting and visual hierarchy

**Service Areas Display**
- Functionality: Showcases the two main service areas (Ocio/Leisure and Social Inclusion) with descriptions
- Purpose: Communicate core services to potential beneficiaries and partners
- Trigger: Page load, scroll to services section
- Progression: User scrolls → sees service cards with icons → reads descriptions → understands offerings
- Success criteria: Service areas are visually distinct and clearly communicate purpose

**Contact Information**
- Functionality: Displays multiple contact methods (email, phone, social media)
- Purpose: Enable easy communication from beneficiaries, partners, and volunteers
- Trigger: User scrolls to footer or contact section
- Progression: User needs contact → scrolls to footer → finds appropriate contact method → initiates communication
- Success criteria: All contact methods are clearly visible and functional

**Mission Statement Display**
- Functionality: Presents organizational mission and history
- Purpose: Build trust and communicate values to all stakeholders
- Trigger: Page load, visible in hero or about section
- Progression: User arrives → immediately understands organization's purpose → builds trust
- Success criteria: Mission is prominent and inspires confidence

## Edge Case Handling

- **Long news titles**: Truncate with ellipsis after 2-3 lines to maintain card consistency
- **Missing images**: Display placeholder with organization branding or service icon
- **No news items**: Show encouraging message about checking back for updates
- **Mobile navigation**: Hamburger menu with clear, accessible touch targets
- **Slow connection**: Progressive loading with skeleton states for content

## Design Direction

The design should evoke trust, professionalism, and warmth - balancing institutional credibility with human approachability. It must feel supportive and inclusive, never cold or bureaucratic. The aesthetic should communicate stability and competence while remaining welcoming to vulnerable populations.

## Color Selection

Navy and orange create a professional yet warm palette that balances authority with accessibility.

- **Primary Color (Navy)**: Deep navy blue `oklch(0.25 0.08 250)` - Communicates trust, stability, and professionalism; represents institutional credibility
- **Secondary Color (Soft Navy)**: Lighter navy `oklch(0.35 0.06 250)` - For secondary elements and hover states
- **Accent Color (Warm Orange)**: Vibrant orange `oklch(0.68 0.18 45)` - Creates energy, optimism, and calls-to-action; represents hope and opportunity
- **Supporting Colors**:
  - Background: Warm off-white `oklch(0.98 0.01 85)` - Softer than pure white, more welcoming
  - Text: Deep charcoal `oklch(0.20 0.01 250)` - Strong readability
  - Muted elements: Light grey-blue `oklch(0.90 0.02 250)` - Subtle backgrounds

**Foreground/Background Pairings**:
- Primary Navy (oklch(0.25 0.08 250)): White text (oklch(1 0 0)) - Ratio 9.8:1 ✓
- Accent Orange (oklch(0.68 0.18 45)): Navy text (oklch(0.25 0.08 250)) - Ratio 5.2:1 ✓
- Background (oklch(0.98 0.01 85)): Foreground (oklch(0.20 0.01 250)) - Ratio 13.5:1 ✓

## Font Selection

Typography should convey professionalism and approachability, with excellent readability for all users including those with accessibility needs.

**Primary Font**: Work Sans (sans-serif) - Modern, humanist sans-serif that feels professional yet approachable
**Secondary Font**: Crimson Pro (serif) - For emphasis and elegance in headlines where warmth is needed

- **Typographic Hierarchy**:
  - H1 (Main Heading): Work Sans Bold / 48px / -0.02em tracking / tight line-height
  - H2 (Section Headers): Work Sans SemiBold / 32px / -0.01em tracking
  - H3 (Card Titles): Work Sans SemiBold / 24px / normal tracking
  - Body Text: Work Sans Regular / 16px / 1.6 line-height / normal tracking
  - Small Text (dates, captions): Work Sans Regular / 14px / 1.5 line-height
  - Accent/Quote: Crimson Pro SemiBold / 20px / 1.5 line-height

## Animations

Animations should be subtle and purposeful, enhancing usability without distraction. Use gentle transitions that feel supportive rather than flashy.

- **Micro-interactions**: Subtle scale (1.02x) and shadow on card hover - creates tactile feedback
- **Navigation**: Smooth scroll to sections with easing - guides user attention gently
- **Content reveal**: Fade-up on scroll for sections (100ms delay per item) - progressive disclosure that doesn't overwhelm
- **Button states**: 200ms color transitions - immediate feedback without jarring changes
- **Page load**: Gentle fade-in for hero content - welcoming entrance

## Component Selection

**Components**:
- **Card**: For news items and service displays - modified with subtle shadows and rounded corners (lg)
- **Button**: For CTAs and navigation - primary (orange), secondary (navy outline), ghost for subtle actions
- **Badge**: For news categories or dates - small, subtle, muted style
- **Separator**: To divide sections elegantly - thin, muted color
- **Hover Card**: For additional information on services without cluttering interface
- **Scroll Area**: For news feed if many items exist

**Customizations**:
- **Service Cards**: Custom icon integration with circular backgrounds in accent color
- **News Grid**: Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- **Hero Section**: Custom gradient overlay on navy background with pattern
- **Footer**: Multi-column layout with organized information sections

**States**:
- **Buttons**: Default, hover (slight scale + deeper color), active (scale down), focus (ring in orange)
- **Cards**: Default (subtle shadow), hover (elevated shadow + slight lift), focus (orange ring)
- **Links**: Underline on hover with color transition to orange

**Icon Selection**:
- **Service Icons**: Users (social inclusion), GameController (leisure/play), Handshake (support)
- **Contact**: Envelope, Phone, WhatsApp, FacebookLogo, TwitterLogo
- **Navigation**: List (menu), X (close), ArrowRight (CTAs)
- **Content**: CalendarBlank (dates), MapPin (location), Info (information)

**Spacing**:
- Container: max-w-7xl with px-6 (mobile) to px-8 (desktop)
- Section gaps: gap-24 (96px) between major sections
- Card padding: p-6 to p-8
- Element spacing: gap-4 (16px) for related items, gap-8 (32px) for section divisions

**Mobile**:
- Single column layouts for all cards on mobile (< 768px)
- Hamburger menu for navigation if needed
- Larger touch targets (min 44px) for buttons
- Stacked hero content on mobile
- Footer columns stack vertically
- Reduced spacing (gap-12 instead of gap-24) on mobile
