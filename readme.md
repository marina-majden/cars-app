# Vehicle Management App - React + MobX + Firebase

## Project Overview

A CRUD application for managing vehicle makes (BMW, Ford, etc.) and models (X5, Focus, etc).  
**Features**: Pagination, sorting, filtering via API, form validation, and MobX state management.

## Tech Stack

**Frontend**: React Vite
**State Management**: MobX
**Backend**: Firebase/Firestore
**UI**: Material-UI
**Forms**: `mobx-react-form`
**Routing**: React Router
**HTTP Client**: Axios

## git Commit Strategy

**build:** add BaseService and BaseStore
**feat:** implement VehicleMake list page with pagination
**fix:** resolve Firestore pagination logic
**style:** apply Material-UI theme
**docs:** update README with setup steps

## Process

1. Installed React Vite and dependencies.
   npm create vite@latest
   npm install
2. Structured project fo start in this way:
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
3. Installed Firebase, MobX, axios, React Router and Material UI in the project.
   npm install firebase
   npm install @mui/x-data-grid @mui/material
   npm install mobx mobx-react-litemobx-react-form
   npm install axios
