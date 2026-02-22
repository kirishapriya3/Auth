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

# Deployed Link:
https://auth-6dcz.onrender.com

# API Routes:
POST /api/user/register
POST /api/user/login
GET /api/user/getUser (Protected - Requires Token) 
Token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OWIzOWY5ZGYyZTVlYjFhYWEyODk1NyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJpYXQiOjE3NzE3ODA2NDMsImV4cCI6MTc3MTc4NDI0M30.sjZVS-FRtV9g1m0SGf5-gcbm4EEAks7oNnLRyHtq2qo

# How to Test:
1. Register
2. Login
3. Copy token
4. Use token in Authorization header
