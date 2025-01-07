# Cafe Management System - Frontend

This is the frontend part of the Cafe Management System project, developed using Angular. It provides the user interface for managing orders, inventory, employees, and more.

## Technologies Used

- **Angular**: UI framework for building the frontend
- **Angular Material**: A UI component library following Material Design guidelines
- **ngx-ui-loader**: Display loading indicators during asynchronous operations
- **Snackbar**: For showing short messages or notifications
- **RxJS**: For reactive programming and handling asynchronous operations
- **HttpClient**: For making API requests

## Folder Structure

```bash
frontend/
│
├── src/
│   ├── app/
│   │   ├── components/           # All the reusable components
│   │   ├── services/             # HTTP services for API calls
│   │   ├── modules/              # Feature-specific modules
│   │   ├── app.component.ts      # Main app component
│   │   ├── app.module.ts         # Main app module
│   │   └── app-routing.module.ts # Routing module
│   └── assets/                   # Static assets like images
└── angular.json                  # Angular project configuration
