# JWT Authentication API

## Live URL
https://jwt-auth-xyz.onrender.com

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt

## API Endpoints

### Register
POST /api/users/register

### Login
POST /api/users/login

### Profile (Protected)
GET /api/users/profile
Authorization: Bearer <token>

## How to Run Locally
npm install
npm run dev
