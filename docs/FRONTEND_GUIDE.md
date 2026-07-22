# BloodLink Frontend Engineering Guide

**Version:** 1.0.0

**Project:** BloodLink

**Status:** Production Ready

---

## Overview

This document defines the frontend architecture, engineering standards, development workflow, and coding guidelines used throughout the BloodLink application.

The frontend is built as a production-quality React application following a feature-based architecture, reusable component system, centralized API communication, and modern engineering practices.

This guide serves as the primary engineering reference for current development and future maintenance.

---

## Frontend Technology Stack

## Core

- React 19
- Vite
- JavaScript (ES2023)

---

## Styling

- Tailwind CSS
- CSS Variables
- Responsive Design
- Dark Mode

---

## Routing

- React Router DOM

---

## Forms

- React Hook Form

---

## API

- Axios
- Centralized API Layer

---

## UI Libraries

- Lucide React
- React Hot Toast
- Framer Motion
- Recharts

---

## Engineering Goals

Every frontend feature should be:

- Reusable
- Modular
- Maintainable
- Accessible
- Responsive
- Performant
- Predictable
- Production Ready

The frontend should remain independent from backend implementation details while consuming backend APIs consistently.

---

## Architecture

BloodLink follows a Feature-Based Architecture.

```text
src/

assets/
components/
constants/
contexts/
features/
hooks/
layouts/
pages/
providers/
services/
styles/
utils/

App.jsx
main.jsx
```

Each directory has a single responsibility.

---

## Feature Organization

Each feature owns its:

- Components
- Pages
- Services
- Hooks (when required)

Example

```text
features/

auth/
analytics/
donations/
home/
inventory/
profile/
requests/
users/
```

Feature-specific code should remain inside its feature directory.

Reusable logic belongs inside shared folders.

---

## Component Architecture

Components are organized into reusable categories.

```text
components/

dashboard/
feedback/
public/
shared/
ui/
```

The UI library contains reusable building blocks including:

- Buttons
- Inputs
- Cards
- Badges
- Modals
- Loaders
- Skeletons
- Empty States

Avoid creating duplicate UI components.

---

## Layout Architecture

BloodLink currently contains three primary layouts.

## Public Layout

Landing page

Navigation

Marketing sections

---

## Authentication Layout

Login

Register

Forgot Password

Reset Password

---

## Dashboard Layout

Sidebar

Navbar

Scrollable Content

Responsive Navigation

---

## Routing Strategy

Routes are grouped by responsibility.

Categories include:

- Public
- Authentication
- Protected
- Role-Based
- Error Routes

Protected routes should always verify authentication before rendering.

Role-based authorization is enforced by both frontend navigation and backend APIs.

---

## State Management

Global state is managed through Context API.

Current contexts include:

- Auth Context
- Theme Context
- Sidebar Context

Component state should remain local whenever global state is unnecessary.

---

## API Layer

Every backend request passes through the centralized API layer.

```text
services/

api/

analytics.api.js
auth.api.js
donation.api.js
payment.api.js
request.api.js
user.api.js
```

Business logic should never be implemented inside API files.

---

## Axios Configuration

A single Axios instance manages:

- Base URL
- Credentials
- Authorization Headers
- Access Token
- Refresh Token
- Request Interceptors
- Response Interceptors
- Error Handling

Never create additional Axios instances.

---

## Authentication Flow

The backend owns authentication.

Frontend responsibilities include:

- Persist authenticated user
- Protect routes
- Redirect unauthorized users
- Handle logout
- Refresh authentication state
- Display loading while verifying sessions

Business rules remain on the backend.

---

## Environment Variables

Never hardcode configuration.

Current variables include:

```text
VITE_API_URL
VITE_RAZORPAY_KEY_ID
```

Future configuration should also use environment variables.

---

## Form Handling

React Hook Form is the standard.

Frontend validation includes:

- Required Fields
- Input Formats
- Password Confirmation
- User Feedback

Backend validation remains the source of truth.

---

## Loading Strategy

Every asynchronous operation should provide visual feedback.

Available components include:

- Page Loader
- Button Loader
- Dashboard Skeleton
- Table Skeleton
- Profile Skeleton

Avoid blank screens whenever possible.

---

## Error Handling

Every API request should support:

- Loading
- Success
- Error
- Unauthorized
- Network Failure
- Empty State

Backend errors should always be converted into user-friendly messages.

Never expose technical implementation details.

---

## Reusable Components

Before creating a component ask:

> Can an existing component solve this problem?

If yes:

Reuse it.

If not:

Build a reusable solution rather than a page-specific implementation.

---

## Styling Guidelines

BloodLink uses Tailwind CSS exclusively.

Guidelines:

- Avoid inline styles.
- Prefer utility classes.
- Extract repeated UI into reusable components.
- Maintain consistent spacing.
- Support both themes.

---

## Icon System

Primary Library

- Lucide React

Guidelines

- Consistent icon sizes
- Consistent spacing
- Meaningful icons only

Avoid mixing icon libraries unnecessarily.

---

## Theme Support

Every component must support:

- Light Theme
- Dark Theme
- System Preference

Theme persistence is handled through Local Storage.

All new components must be verified in both themes before merging.

---

## Performance

BloodLink prioritizes responsiveness and efficient rendering.

Engineering practices include:

- Feature-Based Architecture
- Reusable Components
- Centralized API Layer
- Optimized State Management
- Parallel API Requests
- Lazy Rendering where appropriate
- Efficient Component Updates

Avoid:

- Duplicate API calls
- Unnecessary re-renders
- Heavy animations
- Large monolithic components
- Business logic inside UI components

Performance optimizations should improve maintainability rather than increase complexity.

---

## Accessibility

BloodLink follows accessibility-first engineering principles.

Every component should support:

- Semantic HTML
- Keyboard Navigation
- Focus Visibility
- Proper Form Labels
- Sufficient Color Contrast
- Screen Reader Compatibility
- Responsive Touch Targets

Accessibility should be verified before considering any feature complete.

---

## Security Guidelines

Frontend security complements backend security.

General rules:

- Never trust frontend validation.
- Never expose secrets.
- Never hardcode API URLs.
- Never expose backend implementation details.
- Sanitize user-facing content when appropriate.
- Protect authenticated routes.
- Hide unauthorized actions in the UI.

All business validation remains the responsibility of the backend.

---

## Responsive Design

BloodLink follows a mobile-first approach.

Supported breakpoints:

| Device | Width |
| --------- | ------- |
| Mobile | 0–639px |
| Small Tablet | ≥640px |
| Tablet | ≥768px |
| Laptop | ≥1024px |
| Desktop | ≥1280px |
| Large Desktop | ≥1536px |

Every page should remain functional and visually consistent across supported screen sizes.

---

## Code Quality Standards

Every contribution should satisfy the following requirements.

## Components

- Single Responsibility
- Reusable
- Responsive
- Theme Compatible
- Accessible

---

## API Standards

- Centralized
- Typed Response Structure
- Error Handling
- Loading Support

---

## Styling Standards

- Tailwind CSS Only
- No Hardcoded Colors
- Consistent Spacing
- Shared UI Components

---

## Project

- Clean Folder Structure
- No Dead Code
- No Commented-Out Code
- No Console Logs
- ESLint Clean
- Production Build Successful

---

## Git Workflow

Keep commits focused and meaningful.

Examples:

```text
feat: implement request approval workflow

feat: add reusable dashboard components

fix: resolve dynamic processing fee calculation

refactor: improve sidebar responsiveness

style: polish authentication pages

docs: update project documentation
```

Avoid unrelated changes within the same commit.

---

## Testing Checklist

Before completing a feature verify:

## Functionality

- API Integration
- Loading State
- Success State
- Error State
- Empty State

---

## UI

- Responsive Layout
- Light Theme
- Dark Theme
- Navigation
- Typography
- Component Consistency

---

## Quality

- ESLint Pass
- Production Build Pass
- No Unused Code
- No Hardcoded Values
- No Visual Regressions

---

## Deployment Checklist

Before deployment ensure:

## Frontend

- Environment Variables Configured
- Production API URL Updated
- Razorpay Key Configured
- Build Successful
- Assets Optimized
- Routes Verified
- Authentication Verified
- Payment Flow Tested

---

## Backend

- MongoDB Connected
- Environment Variables Configured
- Razorpay Configured
- Email Service Configured
- Production CORS Updated
- APIs Tested

---

## Final Verification

- Landing Page
- Authentication
- Admin
- Donor
- Patient
- Hospital
- Dark Mode
- Responsive Design
- Analytics
- Dynamic Pricing
- Payment Workflow

---

## Code Review Checklist

Before merging verify:

- Follows DESIGN.md
- Follows FRONTEND_GUIDE.md
- Uses reusable components
- No duplicated logic
- Proper error handling
- Responsive
- Accessible
- Theme Compatible
- Clean folder organization
- Consistent naming

---

## Engineering Best Practices

## Do

- Build reusable components.
- Keep features modular.
- Separate UI from API communication.
- Use environment variables.
- Write readable code.
- Prefer composition over duplication.
- Keep commits focused.
- Follow established project conventions.

---

## Don't

- Hardcode configuration.
- Duplicate components.
- Duplicate Axios instances.
- Mix business logic with presentation.
- Ignore loading or error states.
- Leave unused code.
- Commit temporary debugging code.
- Ignore responsiveness.
- Skip dark mode testing.

---

## Standard Development Workflow

Every feature should follow the same workflow.

```text
Understand Requirement

↓

Review Backend API

↓

Plan User Flow

↓

Identify Reusable Components

↓

Build UI

↓

Integrate API

↓

Handle Loading & Errors

↓

Verify Dark Mode

↓

Verify Responsiveness

↓

Run Lint & Build

↓

Commit Changes
```

Consistency across features is more valuable than individual implementation preferences.

---

## Engineering Principles

The frontend is designed to remain scalable as the application grows.

Core principles include:

- Separation of Concerns
- Reusability
- Predictability
- Maintainability
- Accessibility
- Performance
- Consistency

Every engineering decision should reinforce these principles.

---

## Document Information

| Property | Value |
| ---------- | ------- |
| Project | BloodLink |
| Document | Frontend Engineering Guide |
| Version | 2.0.0 |
| Status | Production Ready |
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| API | Axios |
| Forms | React Hook Form |
| Charts | Recharts |
| Architecture | Feature-Based |
| Theme | Light / Dark / System |
| Last Updated | Final Release (v1.0.0) |

---

## Final Notes

This document defines the engineering standards for the BloodLink frontend.

Every future contribution should:

- Follow the existing architecture.
- Reuse established components.
- Maintain design consistency.
- Preserve accessibility.
- Support responsive layouts.
- Respect dark mode.
- Keep API communication centralized.

Following these standards ensures BloodLink remains clean, scalable, maintainable, and production-ready throughout its future development.
