# Invoice Management System

This is a simple Invoice Management System built with Node.js, Express, Prisma, and PostgreSQL.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- PostgreSQL database

## Installation

1. Clone the repository:

git clone https://github.com/your-username/invoice-management-system.git
cd invoice-management-system

2. Install the dependencies:

npm install
or
yarn install

## Configuration

3. Configuration

touch .env

Add the following environment variables to the .env file:
JWT_KEY="your-secret-key"
DATABASE_URL="your-database-url"

## Running the Application

4. Running the Application

npx prisma generate

npx prisma migrate dev

npm run dev
or
yarn dev


The server will start on http://localhost:3000.






