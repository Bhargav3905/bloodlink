# BloodLink UI Component Library

Version: 1.0

Project: BloodLink

Purpose

This document defines every reusable UI component used throughout the BloodLink frontend.

The goal is to ensure consistency, reduce duplication, and accelerate development by treating the UI as a component library rather than isolated pages.

---

## Component Philosophy

Every reusable component should:

* Have a single responsibility.
* Be configurable through props.
* Support Light & Dark mode.
* Be responsive.
* Be accessible.
* Be reusable across multiple features.
* Avoid embedding business logic.
* Follow the DESIGN.md visual rules.
* Follow the FRONTEND_GUIDE.md engineering rules.

---

## Component Categories

The UI library is divided into:

* Layout Components
* Navigation Components
* Form Components
* Data Display Components
* Feedback Components
* Dashboard Components
* Utility Components
* Skeleton Components

---

## Layout Components

## AppLayout

Purpose

Main application wrapper.

Contains:

* Sidebar
* Top Navbar
* Page Content
* Toast Container

Reusable

Every protected page.

---

## AuthLayout

Purpose

Wrapper for:

* Login
* Register
* Forgot Password
* Reset Password

Provides consistent spacing and authentication illustration.

---

## PublicLayout

Used for:

* Landing Page
* About
* Contact

---

## Navigation Components

## Sidebar

Features

* Collapse
* Expand
* Active Route
* Nested Navigation (Future)
* Responsive Drawer

---

## TopNavbar

Contains

* Search
* Theme Toggle
* Notifications (Future)
* Profile Menu

---

## Breadcrumb

Displays current navigation hierarchy.

---

## Button Component

Variants

* Primary
* Secondary
* Outline
* Ghost
* Success
* Warning
* Danger
* Link

Sizes

* Small
* Medium
* Large

States

* Default
* Hover
* Focus
* Active
* Disabled
* Loading

Optional

* Left Icon
* Right Icon

Used throughout the application.

---

## Form Components

Reusable Components

* Input
* PasswordInput
* SearchInput
* Select
* Textarea
* Checkbox
* Radio
* Toggle
* FileUpload (Future)

Features

* Validation
* Error Message
* Label
* Helper Text
* Disabled State

---

## Feedback Components

Toast

Loading Spinner

Confirmation Dialog

Alert

Badge

Progress Indicator

Status Chip

---

## Modal Components

Reusable

Confirmation Modal

Information Modal

Form Modal

Responsive

Keyboard Accessible

Escape to Close

Focus Trap

---

## Data Display Components

## Card

Variants

* Default
* Elevated
* Interactive
* Statistics

---

## Avatar

Sizes

Small

Medium

Large

---

## Badge

Variants

* Success
* Warning
* Error
* Information
* Neutral

---

## Tooltip

Used for:

* Icon Buttons
* Tables
* Dashboard Actions

---

## Table Components

Reusable DataTable

Supports

* Search
* Sorting
* Filtering
* Pagination
* Empty State
* Loading State

Responsive

Desktop Table

Mobile Card View

---

## Dashboard Components

Reusable Widgets


SummaryCard

QuickActionCard

ActivityCard

---

## Chart Components

Using Recharts

Components

BarChart

LineChart

AreaChart

PieChart

InventoryChart

DonationChart

RequestChart

Every chart supports

* Loading
* Empty State
* Dark Mode
* Responsive Container

---

## User Components

ProfileCard

ProfileAvatar

ProfileInformation

UserRoleBadge

ApprovalStatus

UserMenu

---

## Blood Management Components

BloodGroupBadge

InventoryCard

InventoryStatus

DonationCard

DonationTimeline

RequestCard

RequestStatusBadge

PaymentStatusBadge

AnalyticsSummary

These components represent BloodLink's domain and should be reused across all related features.

---

## Utility Components

ThemeToggle

SearchBar

Pagination

FilterDropdown

SortDropdown

DateRangePicker (Future)

BackButton

ScrollToTop

CopyButton

---

## Empty State Components

Reusable EmptyState

Props

Title

Description

Illustration

Action Button

Examples

No Donations

No Requests

No Inventory

No Search Results

No Analytics

---

## Loading Components

SkeletonCard

SkeletonTable

SkeletonChart

SkeletonProfile

SkeletonDashboard

ButtonLoader

PageLoader

Use skeletons for content loading and button loaders for actions.

---

## Error Components

ErrorMessage

ErrorCard

NotFoundPage

UnauthorizedPage

ServerErrorPage

RetrySection

Errors should be user-friendly and actionable.

---

## Component Naming Standards

Components

PascalCase

Examples

Button

DataTable

DashboardLayout

Hooks

useAuth

useTheme

usePagination

Contexts

AuthContext

ThemeContext

LoadingContext

---

## Component Development Checklist

Before creating a new component, ask:

* Can an existing component solve this?
* Can I extend an existing variant?
* Does it support dark mode?
* Is it responsive?
* Is it accessible?
* Does it match DESIGN.md?
* Is it reusable?

Only create a new component if the answer to the first two questions is "No."

---

## Component Folder Structure

components/

ui/

* Button
* Input
* Modal
* Badge
* Card
* Avatar
* Tooltip

layout/

* Sidebar
* Navbar
* Footer

forms/

* FormField
* PasswordInput
* SearchInput

feedback/

* Toast
* Loader
* EmptyState
* ErrorCard

charts/

* InventoryChart
* DonationChart

common/

* Pagination
* SearchBar
* FilterBar
* ThemeToggle

---

## Reusability Rules

Never duplicate components.

If a component differs only in appearance, add a variant.

Keep props simple and predictable.

Business logic belongs in feature modules, not reusable UI components.

---

## Future Expansion

The component library should support future additions such as:

* Notifications
* Multi-language support
* Advanced filters
* Export utilities
* Chat modules
* Mobile application consistency

New components must follow the existing design language and engineering standards.

---

## Sprint 1 Initial Component Priority

Build these components first:

1. Button
2. Input
3. PasswordInput
4. Card
5. Badge
6. ThemeToggle
7. Sidebar
8. TopNavbar
9. AuthLayout
10. AppLayout
11. EmptyState
12. PageLoader
13. SkeletonCard
14. DataTable
15. ConfirmationDialog
16. Toast Provider

These components will be reused across nearly every feature in the application.

---

## Final Component Principles

The BloodLink frontend should be built as a reusable design system rather than a collection of individual pages.

Every page is assembled from standardized components.

Every component is documented, reusable, accessible, responsive, and theme-aware.

This approach ensures consistency, simplifies maintenance, and allows future features to be developed quickly without sacrificing quality.
