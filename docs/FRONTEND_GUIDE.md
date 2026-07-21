# BloodLink Frontend Engineering Guide

Version: 1.0

Project: BloodLink

Frontend Stack

* React 19 (Vite)
* Tailwind CSS
* React Router DOM
* Axios
* React Hook Form
* React Hot Toast
* Framer Motion
* Recharts
* Lucide React

Status

Production Ready

---

## Purpose

This document defines the frontend architecture, engineering standards, development workflow, and best practices for the BloodLink application.

The objective is to build a scalable, maintainable, reusable, and production-ready frontend that consumes the existing backend APIs without introducing backend logic into the UI.

This document serves as the engineering handbook for every frontend feature.

---

## Core Principles

The frontend must always be:

* Modular
* Reusable
* Responsive
* Accessible
* Maintainable
* Performant
* Secure
* Predictable

Every architectural decision should support these principles.

---

## Project Structure

```text
src/

app/
│
├── router/
├── providers/
├── layouts/
│
assets/
│
├── images/
├── illustrations/
├── icons/
│
components/
│
├── ui/
├── common/
├── forms/
├── feedback/
├── charts/
├── layout/
│
features/
│
├── auth/
├── dashboard/
├── inventory/
├── donation/
├── request/
├── profile/
├── admin/
├── hospital/
├── patient/
├── donor/
│
services/
│
├── api/
├── auth/
│
hooks/
│
contexts/
│
constants/
│
utils/
│
styles/
│
pages/
│
config/
│
types/
│
App.jsx
main.jsx
```

Every folder must have a single responsibility.

---

## Feature-Based Development

Each feature owns its own components, hooks, services, and pages where appropriate.

Example

features/

auth/

* pages
* hooks
* services
* validation

Avoid placing feature-specific code inside global folders unless it is reused across features.

---

## Routing Strategy

Use React Router DOM.

Organize routes by layout and access level.

Examples

* Public Routes
* Authentication Routes
* Protected Routes
* Role-Based Routes
* Error Routes

Each route should have a single responsibility.

Lazy load major pages.

---

## Layout Hierarchy

Public Layout

Guest pages

Authentication Layout

Login
Register
Forgot Password
Reset Password

Dashboard Layout

Sidebar

Top Navbar

Content

Footer (if applicable)

Error Layout

404

500

Unauthorized

---

## Authentication Flow

Backend already manages authentication.

Frontend responsibilities:

* Store tokens securely
* Refresh authentication state
* Redirect unauthenticated users
* Protect routes
* Handle logout gracefully
* Show loading while verifying session

Never implement authentication business logic in the frontend.

---

## API Layer

Never call Axios directly inside random components.

Structure

services/

api/

Example

auth.api.js

inventory.api.js

request.api.js

donation.api.js

payment.api.js

analytics.api.js

Each file contains only API communication.

Business decisions remain on the backend.

---

## Axios Configuration

Single Axios instance.

Responsibilities

* Base URL
* Credentials
* Authorization header
* Token refresh
* Response interceptor
* Error interceptor

Never duplicate Axios configuration.

---

## Environment Variables

Never hardcode.

Use

VITE_API_URL

VITE_APP_NAME

VITE_RAZORPAY_KEY_ID

Future configuration should also use environment variables.

---

## State Management

Use Context API.

Separate contexts by responsibility.

Examples

* Auth Context
* Theme Context
* Loading Context

Avoid placing unrelated state into one large context.

Use local component state whenever global state is unnecessary.

---

## Form Strategy

Use React Hook Form.

Validation

Frontend

* Required fields
* Input format
* User-friendly feedback

Backend

* Final validation
* Security
* Business rules

Never rely solely on frontend validation.

---

## Error Handling

Every API request must handle

Loading

Success

Failure

Unauthorized

Network Error

Unexpected Error

Display user-friendly messages.

Never expose backend stack traces.

---

## Loading Strategy

Provide visual feedback for every asynchronous operation.

Examples

* Skeletons
* Button loading
* Table loading
* Dashboard loading
* Route loading

Avoid blank screens.

---

## Reusable Components

Before creating a new component ask:

Can an existing component solve this?

If yes

Reuse it.

Never duplicate components with minor styling differences.

Use variants instead.

---

## Naming Conventions

Components

PascalCase

Hooks

useSomething

Contexts

SomethingContext

Utilities

camelCase

Constants

UPPER_SNAKE_CASE

Files

Consistent with exports.

---

## Styling Rules

Use Tailwind CSS only.

Avoid inline styles unless dynamic values require them.

Keep utility classes readable.

Extract repeated patterns into reusable components or utility functions.

---

## Icons

Primary

Lucide React

Secondary

React Icons

Avoid mixing multiple icon styles within the same interface.

---

## Dark Mode

Support:

* Light
* Dark
* System

Persist user preference.

Every new component must work in both themes.

---

## Performance

Use:

* Route lazy loading
* Dynamic imports where appropriate
* Memoization only when beneficial
* Optimized rendering
* Efficient list keys
* Debounced search inputs

Do not optimize prematurely, but avoid obvious inefficiencies.

---

## Accessibility

Use semantic HTML.

Support keyboard navigation.

Provide ARIA attributes where needed.

Maintain sufficient color contrast.

Ensure focus visibility.

---

## Security

Never trust frontend validation.

Never expose secrets.

Never hardcode API URLs.

Never expose internal backend implementation.

Always sanitize user-facing content where appropriate.

---

## Git Workflow

Use focused commits.

Examples

feat: add authentication layout

feat: implement login form

style: refine dashboard cards

fix: resolve protected route redirect

refactor: extract reusable table component

Avoid large "everything" commits.

---

## Testing Checklist

Before merging a feature:

* API works
* Loading state
* Error state
* Empty state
* Dark mode
* Responsive
* Accessibility
* No unused code

---

## Deployment Checklist

Before deployment:

* Environment variables configured
* Production API URL updated
* Build passes
* Lint passes
* No debug code
* No hardcoded values
* Assets optimized
* Routes tested
* Authentication verified

---

## Code Review Checklist

Every pull request or major commit should verify:

* Follows DESIGN.md
* Follows FRONTEND_GUIDE.md
* Reuses existing components
* No duplicated logic
* Proper error handling
* Responsive
* Accessible
* Clean folder organization

---

## Engineering Do's

* Build reusable components.
* Keep features modular.
* Separate UI from API calls.
* Use environment variables.
* Keep components small.
* Write readable code.
* Prefer composition over duplication.
* Follow the existing folder structure.
* Keep commits focused.

---

## Engineering Don'ts

* Do not hardcode API URLs.
* Do not duplicate Axios instances.
* Do not duplicate components.
* Do not mix business logic with presentation.
* Do not ignore loading or error states.
* Do not bypass reusable utilities.
* Do not commit temporary code.
* Do not ignore responsiveness.
* Do not leave unused imports or commented code.

---

## Development Workflow

For every feature:

1. Understand the backend API.
2. Plan the user flow.
3. Identify reusable components.
4. Implement UI.
5. Connect the API.
6. Handle loading, success, error, and empty states.
7. Test responsiveness.
8. Verify dark mode.
9. Check accessibility.
10. Commit with a focused Git message.

Repeat this process for every feature.

---

## Final Engineering Principles

The frontend should remain independent of backend implementation details while consuming backend APIs consistently.

Design decisions belong in DESIGN.md.

Engineering decisions belong in FRONTEND_GUIDE.md.

Every screen should be predictable.

Every component should be reusable.

Every API interaction should be centralized.

Every feature should follow the same development workflow.

The goal is not just to build a working frontend, but to build one that is clean, maintainable, scalable, and production-ready.
