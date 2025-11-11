#!/bin/bash

# Build script for React application using npm
# This script provides an alternative to pnpm build

set -e

echo "Installing dependencies with npm..."
npm install

echo "Running TypeScript compilation..."
npx tsc -b

echo "Building with Vite..."
npx vite build

echo "Build completed successfully!"