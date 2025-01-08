# Cafe Management System - Frontend Documentation

## Overview
The frontend of the Cafe Management System is built using **Angular**, a powerful and popular UI framework for developing single-page applications. The project incorporates various libraries and components to enhance the user experience and streamline development.

---

## Key Features
- **Responsive Design**: Built with Angular Material, ensuring a consistent and visually appealing user interface.
- **Notifications**: Snackbar used for displaying short messages or notifications.
- **Loading Indicators**: Integrated ngx-ui-loader to provide loading animations during asynchronous operations.
- **Smooth Animations**: Transitions and animations are used across the application for a seamless user experience.

---

## Technologies and Libraries Used

### 1. **Angular**
![Angular Logo](https://angular.io/assets/images/logos/angular/angular.png)
   - Angular is the core UI framework used to build the application.
   - Version: 11.2.x

### 2. **Snackbar**
![Snackbar Example](https://i.ytimg.com/vi/G2xtPmmxIJE/hqdefault.jpg)
   - Used for displaying brief, actionable messages to users.

### 3. **Angular Material UI**
![Angular Material Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjINVNYSL-lVVk3LlsiqKKT-LsTUn1VQGOKQ&s)
   - A library of reusable, high-quality UI components based on Google’s Material Design guidelines.
   - Provides a consistent design and interaction pattern for the application.

### 4. **ngx-ui-loader**
![Loader Example](https://cdn.dribbble.com/userupload/14639301/file/original-7b0d2c979b986b10276663fbbbcf2471.jpg?resize=300x420&vertical)
   - A spinner component used to display loading indicators during HTTP requests or other asynchronous operations.

---

## Package.json
The `package.json` file manages the dependencies, scripts, and configurations for the Angular project. Below is the content of the file:

```json
{
  "name": "frontend",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "node --openssl-legacy-provider ./node_modules/@angular/cli/bin/ng serve --o",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~11.2.10",
    "@angular/cdk": "^11.2.13",
    "@angular/common": "~11.2.10",
    "@angular/compiler": "~11.2.10",
    "@angular/core": "^11.0.0",
    "@angular/flex-layout": "^11.0.0-beta.33",
    "@angular/forms": "~11.2.10",
    "@angular/material": "^11.2.13",
    "@angular/platform-browser": "~11.2.10",
    "@angular/platform-browser-dynamic": "~11.2.10",
    "@angular/router": "~11.2.10",
    "@types/file-saver": "^2.0.7",
    "file-saver": "^2.0.5",
    "jwt-decode": "^4.0.0",
    "ngx-ui-loader": "^11.0.0",
    "rxjs": "~6.6.0",
    "tslib": "^2.0.0",
    "zone.js": "~0.11.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.1102.9",
    "@angular/cli": "~11.2.9",
    "@angular/compiler-cli": "~11.2.10",
    "@types/jasmine": "~3.6.0",
    "@types/node": "^12.11.1",
    "codelyzer": "^6.0.0",
    "jasmine-core": "~3.6.0",
    "jasmine-spec-reporter": "~5.0.0",
    "karma": "~6.1.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.0.3",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "^1.5.0",
    "protractor": "~7.0.0",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~4.1.5"
  }
}
```

---

## How to Run the Project
1. Navigate to the backend folder:
   ```bash
   cd frontend
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   This command starts the Angular development server and opens the application in the default web browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   This command creates an optimized production build of the application.

---

## Additional Notes
- **Version Compatibility**: Ensure you are using Node.js and npm versions compatible with Angular 11.


---

## Credits
- **Framework**: Angular
- **UI Library**: Angular Material
- **Loader Component**: ngx-ui-loader

---


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.