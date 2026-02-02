Car Rental Backend (TypeScript + Express)

This repository contains the backend for a Car Rental Management System built using Node.js, Express, and TypeScript.

The project follows a clean, layered architecture commonly used in real-world backend systems. It is designed to be scalable, maintainable, and easy to extend as new features are added.

At the moment, the backend can run without a database connection. MongoDB integration can be enabled later when required.

Tech Stack

Node.js

Express

TypeScript

ts-node-dev

Project Structure
src/
│
├── app.ts              # Express app setup
├── server.ts           # Server entry point
│
├── config/             # Environment & configuration files
├── controllers/        # Handles incoming HTTP requests
├── routes/             # API route definitions
├── services/           # Business logic layer
├── repositories/       # Data access layer
├── models/             # Database models
├── middlewares/        # Custom Express middlewares
├── utils/              # Helper and utility functions
