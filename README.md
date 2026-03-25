# 🧩 Angular Assignment 1: Routing & Data Grid Application

---

## 🎯 Objective

Build an Angular application that demonstrates **routing**, **component structure** (HTML & SCSS), and integration of a **data grid**.

---

## 📌 Task Requirements

### 🛠️ Environment

| Tool | Version |
|------|---------|
| Node Version Manager | NVM |
| Node.js | v16 |
| Angular | v20 |

---

### 🏗️ Application Structure

- Angular application with **routing enabled**
- **SCSS** used for all styling

---

### 🖼️ Layout

The application must have **two sections**:

| Section | Content |
|---------|---------|
| **Left** | Menu / Sidebar |
| **Right** | Page Content |

> ⚠️ The layout must remain **consistent across all pages/routes**.

---

### 🗺️ Menu & Routing

Create **3 menu items**, each of which must:

- [ ] Navigate to a **unique route**
- [ ] **Update the URL** when clicked
- [ ] Display its **respective page** in the content section

---

### 🧱 Components

Create **separate components** for:

- Layout
- Sidebar / Menu
- Page 1
- Page 2
- Page 3

Each component **must include**:

- `component.html` — Template file
- `component.scss` — Stylesheet file

---

### 📊 Data Grid

- Install and use **[AG Grid](https://www.ag-grid.com/)**
- **One of the 3 pages** must:
  - [ ] Display a table using AG Grid
  - [ ] Use **JSON data** to populate the table

---

### ✅ General Expectations

- Proper and clean **project structure**
- Clean and **readable code**
- **Functional navigation** between all pages
- **Consistent UI layout** across all routes

---

## 📦 Deliverables

| Deliverable | Details |
|-------------|---------|
| 📁 Project | Complete Angular project source code |
| 🐙 GitHub | Public repository on personal GitHub account |
| 🌐 Deployment | Live deployment via [Netlify](https://www.netlify.com/), [ngrok](https://ngrok.com/), or any free hosting service |

---

## 🚀 Getting Started

```bash
# Install dependencies using the correct Node version
nvm use 16

# Install Angular CLI globally
npm install -g @angular/cli@20

# Create a new Angular project with routing and SCSS
ng new my-app --routing --style=scss

# Navigate into the project
cd my-app

# Install AG Grid
npm install ag-grid-community ag-grid-angular

# Serve the application locally
ng serve
```

---

## 🔗 Resources

- [Angular Documentation](https://angular.dev/)
- [AG Grid Angular Docs](https://www.ag-grid.com/angular-data-grid/)
- [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [Netlify Deployment Guide](https://docs.netlify.com/)
