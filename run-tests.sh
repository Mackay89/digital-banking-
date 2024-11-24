#!/bin/bash

# Exit on error
set -e

# Install dependencies for both frontend and backend
echo "Installing backend dependencies..."
cd ./backend && npm install

echo "Installing frontend dependencies..."
cd ../frontend && npm install

# Run backend unit tests
echo "Running backend unit tests..."
cd ../backend && npm run test

# Run frontend unit tests
echo "Running frontend unit tests..."
cd ../frontend && npm run test

# Run integration tests
echo "Running integration tests..."
cd ../tests && npm run test:integration

echo "All tests completed successfully!"

