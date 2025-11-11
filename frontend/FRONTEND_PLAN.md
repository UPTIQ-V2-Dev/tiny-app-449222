# Frontend Implementation Plan - Minimal React 19 App

## Overview
This plan outlines the implementation of the smallest possible React 19 application using Vite, shadcn/ui, and Tailwind v4.

## Tech Stack
- React 19.1.0 with React Router DOM 7.6.3
- Vite 7.0.4 as build tool
- Tailwind CSS 4.1.11 with @tailwindcss/vite
- shadcn/ui components (pre-configured)
- TypeScript 5.8.3

## Pages Implementation Plan

### 1. Home Page (`/`)
**File:** `src/pages/HomePage.tsx`
**Components needed:**
- `Card` (from shadcn/ui)
- `Button` (from shadcn/ui)

**Features:**
- Welcome message
- Simple counter functionality
- Basic layout with centered content

**Utils/Hooks:**
- No additional utils needed

**API Endpoints:**
- None required

---

### 2. About Page (`/about`) 
**File:** `src/pages/AboutPage.tsx`
**Components needed:**
- `Card` (from shadcn/ui)
- `Badge` (from shadcn/ui)

**Features:**
- Static content about the app
- Tech stack showcase
- Simple navigation back to home

**Utils/Hooks:**
- No additional utils needed

**API Endpoints:**
- None required

---

## Common Components

### Layout Component
**File:** `src/components/Layout.tsx`
**Dependencies:**
- React Router's `Outlet`
- `Button` (from shadcn/ui)

**Features:**
- Simple header with navigation
- Footer with basic info
- Responsive container

### Navigation Component  
**File:** `src/components/Navigation.tsx`
**Dependencies:**
- React Router's `Link`
- `Button` (from shadcn/ui)

**Features:**
- Home/About navigation links
- Mobile-friendly design

---

## Routing Setup
**File:** `src/main.tsx` (update existing)
**Dependencies:**
- React Router DOM
- `createBrowserRouter`, `RouterProvider`

**Routes:**
- `/` → HomePage
- `/about` → AboutPage

---

## Utils & Types

### Types
**File:** `src/types/app.ts`
- Basic app types (minimal)

### Constants
**File:** `src/lib/constants.ts` (already exists)
- App name and version
- Navigation menu items

---

## Implementation Order

1. **Phase 1: Core Structure**
   - Update `App.tsx` with router setup
   - Create `Layout.tsx` component
   - Create `Navigation.tsx` component

2. **Phase 2: Pages**
   - Implement `HomePage.tsx` with counter
   - Implement `AboutPage.tsx` with static content

3. **Phase 3: Styling & Polish**  
   - Apply consistent Tailwind styling
   - Ensure responsive design
   - Test navigation flow

---

## File Structure Summary
```
src/
├── components/
│   ├── Layout.tsx          (new)
│   ├── Navigation.tsx      (new)
│   └── ui/                 (existing shadcn components)
├── pages/
│   ├── HomePage.tsx        (new)
│   └── AboutPage.tsx       (new)
├── types/
│   └── app.ts              (new)
├── lib/
│   └── constants.ts        (update existing)
├── App.tsx                 (update existing)
└── main.tsx                (update existing)
```

---

## Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production  
- `pnpm test` - Run tests
- `pnpm eslint` - Lint code
- `pnpm prettier` - Format code

This minimal app provides basic navigation, state management (counter), and showcases the modern React 19 + Vite + shadcn + Tailwind v4 setup.