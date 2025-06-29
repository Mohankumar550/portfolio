# Portfolio Application - Mohankumar Palanisamy

## Overview

This is a modern portfolio application showcasing the professional journey and achievements of Mohankumar Palanisamy, a Software Engineer at Ramco Systems. The application is built as a full-stack solution with React frontend and Express backend, featuring interactive components, AI-powered chatbot, and comprehensive project showcase.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

- **Frontend**: React-based SPA with modern UI components
- **Backend**: Express.js server with RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **Build System**: Vite for frontend bundling and development
- **Deployment**: -optimized with auto-scaling support

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Radix UI components with Tailwind CSS styling
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for smooth transitions
- **Styling**: Tailwind CSS with custom design system

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle with PostgreSQL adapter
- **Session Storage**: Connect-pg-simple for PostgreSQL session store
- **API Integration**: OpenAI integration for chatbot functionality
- **Development**: Hot reload with Vite middleware integration

### Database Schema
The application uses three main tables:
- **users**: Authentication and user management
- **chat_messages**: Storing chatbot conversations
- **contact_messages**: Contact form submissions

### UI Components
- Modern glass-morphism design with dark theme
- Responsive layout optimized for mobile and desktop
- Interactive sections: Hero, Timeline, Projects, Skills, Awards, Contact
- AI-powered chatbot (MohanBot) for interactive engagement

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle business logic and data validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with proper error handling
5. **State Updates**: React Query manages cache invalidation and updates

### Key Endpoints
- `POST /api/chat` - AI chatbot interactions
- `POST /api/contact` - Contact form submissions
- Database operations for users and messages

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **openai**: AI chatbot functionality
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library

### UI Components
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety
- **tsx**: TypeScript execution for server
- **esbuild**: Fast bundling for production

## Deployment Strategy

The application is configured for  deployment with:

1. **Development Mode**: `npm run dev` - Runs server with Vite middleware
2. **Production Build**: `npm run build` - Builds client and server bundles
3. **Production Server**: `npm run start` - Serves built application
4. **Database**: `npm run db:push` - Syncs schema changes

### Configuration
- **Port**: 5000 (internal) mapped to 80 (external)
- **Environment**: Node.js 20 with PostgreSQL 16
- **Auto-scaling**: Configured for dynamic scaling based on traffic

### Build Process
1. Frontend builds to `dist/public` using Vite
2. Backend bundles to `dist/index.js` using esbuild
3. Static assets served by Express in production
4. Development uses Vite middleware for hot reload

## Changelog
- June 21, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.