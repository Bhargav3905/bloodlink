# BloodLink Design System

Version: 1.0

Project: BloodLink

Type: Blood Bank Management System

Frontend Stack:

- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- React Hook Form
- React Hot Toast
- Framer Motion
- Recharts
- Lucide React

Design System Version:
1.0

Status:
Production Ready

Last Updated:
Sprint 0

Project Tagline:
Connecting Lives Through Smart Blood Management.

Project Goal:

BloodLink is a centralized Blood Bank Management System designed to streamline the interaction between donors, hospitals, patients, and administrators.

The application simplifies blood donation, inventory management, blood requests, approvals, and distribution through a secure, role-based workflow.

The primary objective is to provide a modern, intuitive, and trustworthy platform that improves transparency, reduces response time, and enhances the overall blood management process.

## Design Philosophy

BloodLink follows a clean, professional, and healthcare-oriented design language.

The interface should always communicate:

• Trust
• Simplicity
• Reliability
• Professionalism
• Accessibility

Every screen should feel calm and organized while ensuring users can quickly perform critical tasks with minimal effort.

The design prioritizes clarity over decoration.

Animations should support usability rather than distract from it.

Every visual element should serve a purpose.

## Brand Personality

BloodLink represents:

• Trustworthy
• Modern
• Helpful
• Compassionate
• Professional
• Efficient
• Human-Centered

The UI should inspire confidence while remaining approachable for all users regardless of technical experience.

## UI Principles

### Consistency

Every page should follow identical spacing, typography, button styles, and interaction patterns.

### Simplicity

Avoid unnecessary complexity.
Every action should be obvious.

### Readability

Content should remain easy to scan and understand.

### Accessibility

Design for everyone by maintaining strong color contrast, keyboard navigation, and semantic structure.

### Responsiveness

Every feature must work seamlessly across mobile, tablet, laptop, and desktop devices.

### Reusability

Components should be designed once and reused throughout the application.

### Performance

Prefer lightweight UI solutions and avoid unnecessary rendering or visual clutter.

## Healthcare Design Direction

The interface should never feel alarming or overwhelming.

Instead, it should communicate:

✓ Calmness
✓ Confidence
✓ Safety
✓ Professionalism
✓ Care

Red should be reserved for healthcare identity and critical states, not used excessively across the interface.

Neutral backgrounds and generous whitespace should improve readability and reduce cognitive load.

Green should indicate successful actions.

Amber should indicate warnings.

Blue should represent informational content.

Critical actions should always require user confirmation.

## Visual Style

Theme:
Modern Healthcare Dashboard

Design Style:
Minimal

Components:
Soft Rounded

Elevation:
Medium

Animations:
Subtle

Layout:
Card-Based

Navigation:
Sidebar + Top Navbar

Dark Mode:
Supported

Icons:
Lucide React

Illustrations:
Healthcare-themed vectors for authentication, empty states, and onboarding only.

Tables:
Clean, searchable, responsive

Charts:
Simple, readable, and data-focused

## Color System

### Color System Philosophy

The color system should create a feeling of trust, safety, clarity, and professionalism.

Colors should never compete for attention. Instead, they should guide users naturally through the application.

The interface should primarily use neutral backgrounds with strategic use of accent colors.

---

## Primary Brand Color

Primary 50   : #FEF2F2
Primary 100  : #FEE2E2
Primary 200  : #FECACA
Primary 300  : #FCA5A5
Primary 400  : #F87171
Primary 500  : #EF4444
Primary 600  : #DC2626
Primary 700  : #B91C1C
Primary 800  : #991B1B
Primary 900  : #7F1D1D

Primary Color Usage

• Main CTA Buttons
• Active Navigation
• Important Highlights
• Links
• Icons requiring emphasis

Never overuse primary red throughout the interface.

---

## Secondary Color

Slate

Used for

• Sidebar
• Cards
• Borders
• Secondary Buttons
• Icons
• Neutral UI

---

## Success

Emerald

Use for

• Successful donations
• Approved requests
• Completed payments
• Success alerts

---

## Warning

Amber

Use for

• Pending approvals
• Low stock
• Waiting states

---

## Danger

Red

Use only for

• Delete
• Reject
• Critical warnings
• Failed payments
• Expired requests

---

## Information

Blue

Use for

• Information cards
• Help messages
• Tooltips
• Analytics

---

## Background

Light Theme

Page Background
Gray 50

Card Background
White

Hover
Gray 100

Border
Gray 200

---

Dark Theme

Page Background
Gray 950

Card Background
Gray 900

Hover
Gray 800

Border
Gray 700

---

## Text Colors

Primary Text

Gray 900

Secondary Text

Gray 600

Muted

Gray 500

Disabled

Gray 400

Dark Mode

Primary
Gray 100

Secondary
Gray 400

Muted
Gray 500

---

## Typography

## Font Family

Primary Font

Inter

Fallback

sans-serif

Reason

Modern

Professional

Excellent readability

Perfect for dashboards

---

## Font Scale

Display

48px

H1

36px

H2

30px

H3

24px

H4

20px

Body Large

18px

Body

16px

Small

14px

Caption

12px

---

## Font Weight

Light

300

Regular

400

Medium

500

Semi Bold

600

Bold

700

Extra Bold

800

---

## Typography Rules

Maximum two font weights inside one card.

Avoid excessive bold text.

Use whitespace instead of larger fonts whenever possible.

Maintain consistent line height.

---

## Spacing System

Spacing Scale

4

8

12

16

20

24

32

40

48

64

80

96

Use only these spacing values.

Avoid random spacing.

---

Container Width

Maximum

1440px

Dashboard

1280px

Forms

480px–600px

Authentication Pages

420px–500px

---

Section Gap

Desktop

48px

Tablet

32px

Mobile

24px

---

Card Padding

Desktop

24px

Mobile

16px

---

## Border Radius

Buttons

12px

Inputs

12px

Cards

16px

Modal

20px

Avatar

Rounded Full

Badges

9999px

---

## Shadow System

Level 1

Subtle

Cards

Level 2

Hover

Interactive cards

Level 3

Modal

Dropdown

Drawer

Never use heavy shadows.

The UI should feel soft.

---

## Borders

Border Width

1px

Dividers

Gray 200

Dark

Gray 700

---

## Icons

Library

Lucide React

Secondary

React Icons

---

Icon Sizes

Small

16

Default

20

Medium

24

Large

32

Extra Large

48

---

Rules

Every button should have optional icon support.

Never mix multiple icon styles.

Icons should always align vertically.

---

## Layout System

Overall Layout

Sidebar

-

Top Navbar

-

Content Area

---

Sidebar

Fixed

Collapsible

Desktop

Hidden on mobile

Drawer on mobile

---

Navbar

Sticky

Contains

Search

Theme Toggle

Notifications

Profile Menu

---

Content

Scrollable

Centered

Consistent spacing

---

Cards

Responsive Grid

Desktop

4 columns

Laptop

3 columns

Tablet

2 columns

Mobile

1 column

---

## Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Gap

24px

---

## Responsive Breakpoints

Mobile

0–639px

Small Tablet

640px

Tablet

768px

Laptop

1024px

Desktop

1280px

Large Desktop

1536px

---

## Design Tokens

Never hardcode

Colors

Spacing

Radius

Shadow

Transition

Duration

Font Size

Always use Tailwind configuration or design tokens.

---

## Theme Rules

Support

Light

Dark

System Preference

Theme should persist using local storage.

Icons should adapt automatically.

Charts should support both themes.

---

## White Space Rules

Every screen should breathe.

Never place cards too close.

Avoid crowded dashboards.

Whitespace improves readability more than colors.

---

## Visual Hierarchy

Heading

↓

Description

↓

Primary Action

↓

Secondary Information

↓

Metadata

Users should immediately understand where to look first.

Never create competing visual elements.

## Component Design Rules

## Component Philosophy

Every UI element should be reusable.

Avoid creating page-specific components unless absolutely necessary.

Each component should have:

- Single responsibility
- Consistent API
- Accessibility support
- Responsive behavior
- Dark mode support
- Loading state (where applicable)

### General Rules

- Prefer composition over duplication.
- Keep components visually consistent.
- Never hardcode colors or spacing.
- Use Tailwind utility classes with reusable variants.
- Keep business logic outside presentational components.

---

## Button System

## Variants

- Primary
- Secondary
- Outline
- Ghost
- Success
- Warning
- Danger
- Link

## Sizes

- Small
- Medium (Default)
- Large

## States

- Default
- Hover
- Active
- Focus
- Disabled
- Loading

## Guidelines

- Primary CTA should appear only once per section.
- Use loading indicators instead of allowing multiple clicks.
- Every button should optionally support an icon.
- Destructive actions should always require confirmation.

---

## Form Design Guidelines

Forms should feel simple and easy to complete.

## Validation

- Validate before submission whenever possible.
- Show inline error messages.
- Highlight invalid fields clearly.
- Preserve user input after validation errors.

## Input Components

- Text Input
- Email
- Password
- Search
- Number
- Phone
- Select
- Textarea
- Checkbox
- Radio
- Date Picker (Future)
- File Upload (Future)

## UX Rules

- Labels should always remain visible.
- Required fields should be clearly indicated.
- Use helper text only when necessary.
- Password fields should include visibility toggle.
- Disable submit button during requests.

---

## Card Guidelines

Cards are the primary building block of the application.

Use cards for:

- Statistics
- User information
- Blood inventory
- Donation records
- Request details
- Analytics
- Dashboard widgets

Every card should include:

- Consistent padding
- Proper spacing
- Rounded corners
- Soft shadow
- Responsive layout

Avoid placing excessive information inside one card.

---

## Table Guidelines

Tables should support:

- Search
- Sorting
- Filtering
- Pagination
- Responsive layout

On smaller screens:

- Convert dense tables into stacked cards when appropriate.
- Avoid horizontal scrolling whenever possible.

Rows should include hover feedback.

Status columns should use colored badges instead of plain text.

Actions should use compact icon buttons with tooltips.

---

## Dashboard Guidelines

Every dashboard should follow a consistent structure.

## Recommended Order

1. Welcome Section
2. Statistics Cards
3. Charts
4. Recent Activity
5. Tables
6. Quick Actions

## Statistics Cards

Display only the most important metrics.

Examples:

- Total Donors
- Blood Units Available
- Pending Requests
- Completed Donations

Cards should prioritize readability over decoration.

---

## Chart Guidelines

Library

- Recharts

Supported Charts

- Bar Chart
- Line Chart
- Pie Chart
- Area Chart
- Radial Chart (where appropriate)

Guidelines

- Do not use more than five colors in one chart.
- Include legends where necessary.
- Support dark mode.
- Show empty state if data is unavailable.
- Ensure charts remain readable on mobile devices.

---

## Navigation Guidelines

## Sidebar

Contains primary navigation.

Should support:

- Collapse
- Expand
- Active state
- Icons
- Nested items (if needed)

Mobile

- Off-canvas drawer

Desktop

- Fixed sidebar

---

## Top Navbar

Contains:

- Search
- Theme Toggle
- Notifications (Future)
- User Profile
- Logout

Keep the navbar lightweight and uncluttered.

---

## Feedback Components

Use consistent feedback throughout the application.

## Toast Notifications

Library

- React Hot Toast

Success

- Green

Error

- Red

Warning

- Amber

Information

- Blue

Keep messages concise and meaningful.

---

## Confirmation Dialogs

Use a modern dialog component instead of browser alerts.

Confirm before:

- Delete
- Reject
- Logout
- Inventory updates
- Critical actions

---

## Loading Experience

Every asynchronous action should provide feedback.

Loading Types

- Full page loader
- Skeleton loader
- Button loader
- Card loader
- Table loader

Avoid long blank screens.

Skeletons are preferred over generic spinners for page content.

---

## Empty States

Every empty page should include:

- Relevant illustration or icon
- Short explanation
- Helpful action button

Examples

- No Donations
- No Blood Requests
- No Inventory
- No Search Results

Empty states should guide users toward the next action.

---

## Error States

Display friendly and actionable messages.

Avoid exposing technical errors.

Provide:

- Error message
- Retry action (where applicable)
- Navigation back to safety

Include dedicated pages for:

- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Server Error

---

## Motion & Animation

Library

- Framer Motion

Animation Philosophy

Animations should support user understanding, not distract.

Use motion for:

- Page transitions
- Modals
- Sidebar
- Cards
- Hover interactions
- Expand/Collapse
- Toasts

Avoid excessive movement.

Prefer subtle fades and smooth transforms.

---

## Responsive Design Rules

Design mobile-first.

Support:

- Mobile
- Tablet
- Laptop
- Desktop

Guidelines

- Stack layouts on smaller screens.
- Collapse navigation into drawer.
- Charts should resize gracefully.
- Cards should wrap naturally.
- Forms should remain easy to complete on touch devices.

Never sacrifice usability for visual symmetry.

---

## Accessibility Guidelines

Follow WCAG-friendly practices.

Include:

- Semantic HTML
- Keyboard navigation
- Focus indicators
- ARIA labels where needed
- Screen reader friendly components
- Sufficient color contrast

Accessibility is a requirement, not an enhancement.

---

## Dark Mode

Support:

- Light
- Dark
- System Preference

Requirements

- Theme persists across sessions.
- Charts adapt automatically.
- Icons remain visible.
- Contrast remains accessible.
- Shadows are reduced in dark mode.

---

## UI Consistency Rules

Always maintain:

- Consistent spacing
- Consistent typography
- Consistent icon sizing
- Consistent button styles
- Consistent form behavior
- Consistent animations

If a component already exists, reuse it instead of creating another variation.

---

## UX Principles

Users should always know:

- Where they are
- What they can do
- What happened
- What happens next

Reduce clicks whenever practical.

Provide immediate feedback after every meaningful action.

Design for clarity before aesthetics.

---

## Design Do's

- Build reusable components.
- Keep layouts clean.
- Prioritize readability.
- Maintain consistent spacing.
- Use meaningful icons.
- Support keyboard navigation.
- Keep interactions predictable.
- Optimize for performance.
- Test on multiple screen sizes.

---

## Design Don'ts

- Do not hardcode colors.
- Do not duplicate components.
- Do not overload dashboards.
- Do not overuse animations.
- Do not rely solely on color for meaning.
- Do not create inconsistent spacing.
- Do not introduce multiple visual styles.
- Do not expose raw backend errors.
- Do not ignore accessibility.

---

## Future Design Guidelines

The design system should be capable of supporting future enhancements such as:

- Notifications
- Multi-language support
- Additional dashboard modules
- New user roles
- Reporting features
- Mobile application consistency

Any future feature must follow the existing design language instead of introducing a new one.

---

## Final Design Checklist

Before merging any frontend feature, verify:

- Responsive on all supported devices
- Matches design system
- Supports dark mode
- Accessible by keyboard
- Uses reusable components
- Displays loading state
- Handles empty state
- Handles error state
- Uses environment variables
- No hardcoded values
- No duplicated UI
- Proper spacing and typography
- Consistent icons and colors
- Clean animations
- Production-ready quality

---

## BloodLink Design Principles

BloodLink is not designed to impress through excessive visual effects.

It is designed to inspire confidence through clarity, consistency, and reliability.

Every screen should communicate trust.

Every interaction should reduce friction.

Every component should be reusable.

Every feature should feel familiar.

Every design decision should support the healthcare mission of connecting donors, hospitals, patients, and administrators through a modern, secure, and intuitive blood management platform.
