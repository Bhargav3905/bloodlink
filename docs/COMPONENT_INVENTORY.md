# BloodLink UI Component Library

**Version:** 1.0.0

**Project:** BloodLink

**Status:** Production Ready

---

## Overview

This document defines the reusable UI component library used throughout the BloodLink frontend.

The objective is to maintain consistency, improve reusability, reduce duplication, and accelerate development by treating the interface as a design system rather than isolated pages.

This document complements:

- DESIGN.md
- FRONTEND_GUIDE.md

---

## Component Philosophy

Every reusable component should:

- Have a single responsibility.
- Be configurable through props.
- Support Light, Dark, and System themes.
- Be responsive.
- Be accessible.
- Avoid business logic.
- Remain reusable across multiple features.
- Follow the BloodLink design language.
- Follow frontend engineering standards.

Reusable components should solve generic UI problems rather than feature-specific requirements.

---

## Component Categories

The UI library consists of:

- Layout Components
- Navigation Components
- Form Components
- Feedback Components
- Data Display Components
- Dashboard Components
- Charts
- Domain Components
- Utility Components
- Skeleton Components

---

## Layout Components

## DashboardLayout

Primary authenticated application layout.

Contains:

- Sidebar
- Navbar
- Main Content

Used by:

- Admin
- Donor
- Patient
- Hospital

---

## AuthLayout

Authentication wrapper.

Used for:

- Login
- Register
- Forgot Password
- Reset Password

Provides:

- Branding Panel
- Responsive Layout
- Consistent Authentication Experience

---

## Public Layout

Used by:

- Landing Page
- About
- Contact
- CTA Sections

---

## Navigation Components

## Sidebar

Features:

- Role-Based Navigation
- Active Route Highlighting
- Desktop Collapse
- Mobile Drawer
- Tooltip Support
- Responsive Layout

---

## Navbar

Features:

- Branding
- Theme Toggle
- User Information
- Logout

Designed to remain lightweight and distraction-free.

---

## Form Components

Reusable components include:

- FormField
- Input
- Select
- Password Input

Features:

- Labels
- Validation
- Error Messages
- Helper Text
- Disabled State
- Loading State

Validation is handled with React Hook Form while business rules remain on the backend.

---

## Button Component

Supported variants:

- Primary
- Outline
- Danger

Supported sizes:

- Small
- Medium
- Large

Supported states:

- Default
- Hover
- Active
- Disabled
- Loading

Features:

- Icon Support
- Full Width Option
- Loading Indicator

Buttons should prevent duplicate submissions during asynchronous operations.

---

## Card Components

Reusable components:

- Card
- CardHeader
- CardContent
- CardTitle

Used throughout:

- Dashboard
- Inventory
- Donation
- Requests
- Profile
- Analytics

Cards provide consistent spacing, borders, and shadows across the application.

---

## Badge Component

Supported variants:

- Default
- Success
- Warning
- Danger
- Info

Used for:

- Request Status
- Payment Status
- User Roles
- Inventory Indicators

Badges communicate system status without overwhelming the interface.

---

## Modal Components

Reusable modal system.

Current implementation:

- Modal
- ConfirmationDialog

Used for:

- Delete Confirmation
- Approval Confirmation
- Reject Confirmation
- Logout Confirmation

All destructive actions should require explicit confirmation.

---

## Feedback Components

Reusable feedback components include:

- Loader
- ButtonLoader
- PageLoader
- SkeletonDashboard
- SkeletonProfile
- SkeletonTable
- EmptyState
- ConfirmationDialog

Purpose:

- Improve perceived performance.
- Provide clear user feedback.
- Maintain consistent asynchronous behavior.

---

## Data Display Components

## Tables

Reusable tables support:

- Responsive Layout
- Status Badges
- Action Buttons
- Hover Feedback

Examples:

- Donation History
- User Management
- Request Management
- Inventory Tables

---

## Dashboard Components

Reusable dashboard widgets include:

- DashboardStatCard
- InventorySummary
- LowStockCard
- RecentDonations

These components present key metrics using a consistent visual language.

---

## Analytics Components

Built using Recharts.

Current charts:

- Blood Distribution
- Request Statistics

Design goals:

- Responsive
- Theme Compatible
- Accessible
- Empty State Support
- Loading Support

---

## Domain Components

BloodLink contains reusable domain-specific components.

Examples:

- InventoryCard
- RequestForm
- DonationForm
- ProfileCard
- RequestStatusBadge
- PaymentStatusBadge

Domain components encapsulate BloodLink-specific UI while remaining reusable within their feature modules.

---

## Utility Components

Reusable utility components simplify common interactions across the application.

Current components include:

- ThemeToggle
- SidebarItem
- Tooltip
- Route Guards

Future additions may include:

- Pagination
- Search Bar
- Filter Dropdown
- Sort Controls
- Date Range Picker

Utility components should remain lightweight and independent of business logic.

---

## Skeleton Components

Skeleton loaders improve perceived performance while asynchronous data is loading.

Current skeletons include:

- SkeletonDashboard
- SkeletonProfile
- SkeletonTable

Guidelines:

- Match the final layout structure.
- Support both themes.
- Avoid layout shifts.
- Replace loading spinners for page-level content whenever possible.

---

## Empty State Components

The reusable `EmptyState` component standardizes how the application communicates the absence of data.

Examples include:

- No Donations
- No Requests
- No Inventory
- No Pending Users
- No Pending Requests
- No Search Results

Every empty state should include:

- Meaningful Icon
- Clear Title
- Helpful Description
- Optional Call-to-Action

---

## Error Handling Components

Errors should always remain user-friendly.

Current implementations include:

- API Error Toasts
- Confirmation Dialogs
- Validation Messages
- Route Protection

Future reusable components may include:

- ErrorCard
- RetrySection
- Unauthorized Page
- Server Error Page

Never expose backend implementation details to end users.

---

## Component Naming Standards

| Type | Convention |
| ------ | ------------ |
| Components | PascalCase |
| Hooks | useSomething |
| Contexts | SomethingContext |
| Providers | SomethingProvider |
| Utilities | camelCase |
| Constants | UPPER_SNAKE_CASE |

File names should always match their default export.

---

## Component Folder Structure

```text
components/

dashboard/
feedback/
public/
shared/
ui/

ui/
├── badge/
├── button/
├── card/
├── input/
├── loader/
└── modal/

feedback/
├── empty-state/
├── dialog/
└── skeleton/

dashboard/
├── layout/
└── ...

shared/
└── theme-toggle/
```

The folder structure should remain modular and predictable as the project grows.

---

## Component Development Checklist

Before creating a new component verify:

- Can an existing component be reused?
- Can an existing variant be extended?
- Does it support light and dark themes?
- Is it responsive?
- Is it accessible?
- Does it follow DESIGN.md?
- Does it follow FRONTEND_GUIDE.md?
- Is it independent of business logic?

Only create a new component if extending an existing one is not appropriate.

---

## Reusability Rules

To maintain consistency:

- Reuse before creating.
- Prefer variants over duplicate components.
- Keep props simple and predictable.
- Separate presentation from business logic.
- Avoid feature-specific UI inside shared components.
- Keep components focused on one responsibility.

---

## Component Lifecycle

Every reusable component follows the same lifecycle.

```text
Requirement

↓

Check Existing Component

↓

Extend Existing Variant

↓

Create New Component (if necessary)

↓

Theme Support

↓

Responsive Testing

↓

Accessibility Testing

↓

Production Review

↓

Reuse Across Features
```

---

## Future Expansion

The component library is designed to support future enhancements without requiring architectural changes.

Potential additions include:

- Notification Components
- Advanced Filters
- Pagination
- Data Tables with Sorting
- Export Utilities
- Audit Log Components
- Multi-language UI
- Mobile-specific Components

Future components should follow the existing design language and engineering standards.

---

## Production Component Checklist

Before release every reusable component should satisfy:

## Design

- Consistent Spacing
- Consistent Typography
- Responsive
- Theme Compatible

---

## Engineering

- Reusable
- Accessible
- Single Responsibility
- Clean Props
- No Business Logic

---

## Quality

- Loading State
- Error State
- Empty State
- Production Tested

---

## Component Principles

BloodLink is built around a reusable component system rather than page-specific implementations.

Every component should:

- Encourage reuse.
- Reduce duplication.
- Improve maintainability.
- Support scalability.
- Remain visually consistent.
- Follow accessibility standards.
- Support responsive layouts.
- Work seamlessly across all supported themes.

These principles ensure the frontend remains clean, modular, and production-ready as the application evolves.

---

## Document Information

| Property | Value |
| ---------- | ------- |
| Project | BloodLink |
| Document | UI Component Library |
| Version | 2.0.0 |
| Status | Production Ready |
| Framework | React 19 |
| Styling | Tailwind CSS |
| Architecture | Feature-Based |
| Theme | Light / Dark / System |
| Last Updated | Final Release (v1.0.0) |

---

## Final Notes

This document serves as the single source of truth for reusable UI components within BloodLink.

Every future component should align with:

- DESIGN.md
- FRONTEND_GUIDE.md
- Existing Component Library

Following these standards ensures consistency, scalability, maintainability, and a professional user experience throughout the application.
