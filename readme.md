# Vehicle Management App - React + MobX + Firebase

## Project Overview

A CRUD application for managing vehicle makes (BMW, Ford) and models (X5, Focus).  
**Features**: Pagination, sorting, filtering via API, form validation, and MobX state management.

## Tech Stack

**Frontend**: React Vite
**State Management**: MobX
**Backend**: Firebase/Firestore
**UI**: Material-UI
**Forms**: `mobx-react-form`
**Routing**: React Router
**HTTP Client**: Axios

## Process

1. Installed React Vite and dependencies.
   npm create vite@latest
   npm install
2. Arranged project structure:
   cars-app
   ├── node_modules
   ├── public
   │ ├──
   │ src/
   │ ├── components/ # Reusable components (e.g., DataTable, Filters)
   │ ├── pages/
   │ │ ├── VehicleMake/ # Pages for VehicleMake CRUD
   │ │ └── VehicleModel/ # Pages for VehicleModel CRUD
   │ ├── stores/
   │ │ ├── BaseStore.js # Base store with common CRUD logic
   │ │ ├── VehicleMakeStore.js
   │ │ └── VehicleModelStore.js
   │ ├── services/
   │ │ ├── BaseService.js # Base API service
   │ │ ├── VehicleMakeService.js
   │ │ └── VehicleModelService.js
   │ ├── utils/
   │ │ └── validators.js # Form validation schemas
   │ ├── App.js
   │ └── index.js
   ├── .gitignore
   ├── eslint.config.js
   ├── index.html
   ├── package-lock.json
   ├── package.json
   ├── readme.md
   └── vite.config.js
