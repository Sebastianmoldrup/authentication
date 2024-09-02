# Authentication with Next.js and Supabase

This project is a simple authentication system built with **Next.js** and **Supabase**. The goal is to learn how to implement user authentication using modern tools and practices, including routing, server-side rendering, middleware, and cookie management.

## Project Overview

The application includes the following features:

- **User Signup and Login**: Users can create an account or log in using Supabase's authentication services.
- **Protected Routes**: Only authenticated users can access the dashboard.
- **Middleware**: Next.js middleware is used to protect certain routes and manage session-based authentication.
- **Server-Side and Client-Side Rendering**: The project demonstrates handling authentication in both SSR (e.g., `getServerSideProps`) and CSR contexts.
- **Cookie Management**: Supabase sessions are managed using cookies, with custom handling for both server and client sides.

## Why This Project?

The purpose of this project is to gain a deeper understanding of how authentication works in a full-stack JavaScript environment. By building this app, I aim to learn how to:

- Integrate Supabase with Next.js for seamless authentication.
- Use Next.js middleware to enforce route protection.
- Manage user sessions securely using cookies.
- Handle authentication logic in both server-side and client-side environments.

## What's Included?

- **Login Page**: A simple form to log in users.
- **Signup Page**: Allows new users to create an account.
- **Dashboard**: A protected page that only logged-in users can access.
- **Middleware**: Used to protect routes and manage session checks.
- **Server-Side Authentication**: Demonstrates how to handle authentication in SSR with `getServerSideProps`.
- **Client-Side Authentication**: Manages user sessions and redirects on the client side.
