
# Barracuda Website — Operational Architecture PRD
Version: 3.0 (Operational Upgrade)

Purpose
This document is the implementation specification for the Barracuda website.
It is written for Codex so the system can generate the full MVP + operational site structure.

The goal is to turn Barracuda into:

• a roastery-backed cafe brand
• a curated cultural space
• a private event venue
• a coffee brand platform

---

# 1. Core Concept

Barracuda is not a menu website.

Barracuda is:

Roastery + Space + Culture + Coffee Brand

Key business models:

1 Coffee / Roastery brand
2 Cafe experience
3 Space rental
4 Cultural programming
5 Coffee beans / goods

---

# 2. Final Website Structure

/
Hero
Brand
Coffee
Space
Menu
Store
Visit

Subpages

/brand
/coffee
/space
/menu
/store
/visit

Future expansion

/events
/beans
/programs

---

# 3. Homepage Structure

Header
Hero
Brand
Coffee
Space
Menu Preview
Store Preview
Visit
Footer

Homepage goal:

• emotional brand entry
• spatial identity
• quick navigation to operational pages

---

# 4. Brand Page

/brand

Purpose
Explain Barracuda philosophy.

Sections

Brand Story
Roastery Philosophy
Space Philosophy
Culture

Tone
Editorial and calm.

---

# 5. Coffee Page

/coffee

Purpose
Establish credibility.

Sections

Roastery Introduction
Beans
Roasting
Brewing

Connection
CNC Tech Roastery

---

# 6. Space Page

/space

MOST IMPORTANT PAGE

Purpose
Promote Barracuda as an event venue.

Sections

Space Overview
Event Types
Photo Gallery
Rental Information
Inquiry CTA

Event examples

Private Party
Fashion Show
Book Club
Workshop
Brand Event

---

# 7. Menu Page

/ menu

Purpose
Introduce cafe menu and allow order requests.

Sections

Menu Hero
Coffee Menu
Signature Menu
Non Coffee
Dessert
Order Request

Order Request fields

Name
Phone
Email
Order Type
Pickup Date
Pickup Time
Order Details

No payment in MVP.

---

# 8. Store Page

/ store

Purpose
Introduce product brand.

Categories

Coffee Beans
Goods
Lifestyle Products

No checkout system in MVP.

---

# 9. Visit Page

/ visit

Purpose
Practical information.

Sections

Location
Opening Hours
Parking
Contact
Instagram
Map Link

---

# 10. Technical Architecture

Framework
Next.js App Router

Language
TypeScript

Styling
Tailwind CSS

Deployment
Vercel

Future backend
Supabase

---

# 11. Design Principles

Style

Minimal
Premium
Calm
Spatial
Editorial

Avoid

Menu-board UI
Franchise cafe style
Bright colors
Heavy animations

---

# 12. Development Order

Phase 1
Homepage

Phase 2
Space page

Phase 3
Menu page

Phase 4
Coffee page

Phase 5
Store page

Phase 6
Visit page

---

# 13. Success Criteria

• Space inquiries generated
• Brand credibility increased
• Coffee brand awareness
• Event usage growth
