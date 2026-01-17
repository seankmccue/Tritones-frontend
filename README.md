# 🎶 Tritones Frontend ✨

Frontend package for **The UCSD Tritones' Website Project** built with **Angular CLI (v16.2.5)** and **TypeScript**. 

Developed in collaboration with [CSES](https://csesucsd.com/)-[Webdev](https://www.linkedin.com/company/cses-webdev/) during Summer 2023.

This repository contains the user-facing interface of the Tritones website, including pages for auditions, photos, bookings, and contact info, along with service integrations for Spotify and the backend API.

## 🧰 Prerequisites
Before running the project, make sure you have: 
* [**Node.js**](https://nodejs.org/en/download) (LTS version recommended -- e.g. via [nvm](https://github.com/nvm-sh/nvm.git))
* **npm** (automatically installed with Node)
* [**Angular CLI**](https://github.com/angular/angular-cli) v16.2.5
  ```bash
  npm install -g @angular/cli@16.2.5
  ```
* **TypeScript** (auto-installed via Angular, but can be updated manually)
  ```bash
  npm install -g typescript
  ```
🧠 *If you’re new to Angular, it’s highly recommended to go through the [official Angular tutorial](https://v16.angular.io/tutorial/first-app) before contributing.*

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## 🗂️ Project Structure
The project follows standard Angular conventions. Each page of the site is represented by its own component, organized inside /src/app.

```bash
Tritones-frontend/
├── src/
│   ├── app/                           # Main application folder
│   │   ├── about-us/                  # About Us page component
│   │   ├── auditions/                 # Auditions page component
│   │   ├── bookings/                  # Bookings page component
│   │   ├── contact-us/                # Contact page component
│   │   ├── home/                      # Home page component
│   │   ├── photos/                    # Photo gallery page component
│   │   ├── models/                    # TypeScript interfaces and data models
│   │   ├── services/                  # API services and helpers
│   │   │   ├── contact.service.ts
│   │   │   ├── members.service.ts
│   │   │   ├── photos.service.ts
│   │   │   ├── spotifytracks.service.ts
│   │   │   └── theme.service.ts       # Handles dark/light mode
│   │   ├── theme-toggle/              # Component for switching site theme
│   │   ├── app-routing.module.ts      # Page routing definitions
│   │   ├── app.component.*            # Root app component files
│   │   └── app.module.ts              # Root Angular module
│   │
│   ├── assets/
│   │   ├── images/                    # Static image assets
│   │   │   ├── Auditions/
│   │   │   ├── Booking/
│   │   │   ├── Home-page/
│   │   │   ├── Logo/
│   │   │   ├── Members/
│   │   │   ├── Photos/
│   │   │   └── Social-logo/
│   │   └── .gitkeep
│   │
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json                      # Angular build and project config
├── package.json                      # Dependencies and scripts
├── package-lock.json
├── tsconfig*.json                    # TypeScript configs
├── README.md
└── .gitignore
```

## ⚙️ Setup & Development

#### 1. Clone the repository
  ```bash
 git clone <https://github.com/therxtr/Tritones-frontend.git>
 cd tritones-frontend
```
#### 2. Install dependencies
 ```bash
  npm install
  ```
#### 3. Run the development server
 ```bash
  ng serve
```
 The app will be available at:
 👉 `http://localhost:4200/`
(To open automatically, run `ng serve -o`)
 
 Angular’s live reload will automatically refresh the browser when you edit source files.

#### 4. Build the project
```bash
  ng build
```
 Build artifacts are stored in the `dist/` directory.



## 🧪 Testing
Most testing was done visually, though it would be a best practice to implement unit tests before deployment.
* **Unit Tests**
  ```bash
    ng test
  ```
  Run unit tests with [Karma](https://karma-runner.github.io/latest/index.html).
* **End-to-end tests**
  ```bash
  ng e2e
  ```
  Requires an E2E testing package to be configured first.

## 🌿 Branching Strategy
To maintain a clean and stable codebase:
* `main` → production-ready, always stable
* `dev` → development/integration
* **feature branches** → create from `dev` for specific updates or fixes

Typical flow:
```feature → dev → main```

Commit small, testable changes into `dev` before merging into `main`.

## 🌐 Deployment Notes
We'll need to do some full-stack testing and project reorganization before we deploy. Other things will include:
* Update API endpoints in the service files to match the backend's hosted URL.
* Configure environment variables in `src/environments/` for dev vs. prod builds
* To deploy a production build:
```bash
  ng build --configuration production
```
