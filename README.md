<div align="center">

# 🏠 HavenHub

### A full-stack Airbnb-inspired property listing platform

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-HavenHub-FF5A5F?style=for-the-badge)](https://havenhub-eq7j.onrender.com/listings)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/SanviAswal23/HavenHub)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com)

*Explore, list, and review properties — all in one place.*

![HavenHub Banner](<img width="574" height="340" alt="Screenshot 2026-05-11 222318" src="https://github.com/user-attachments/assets/6c990128-6be4-4bfe-912d-4c5e9d3e1f98" />
)

</div>

---

## 📌 Overview

**HavenHub** is a production-deployed, full-stack web application built with the **MVC architecture** pattern. It enables users to discover and list properties, write reviews, upload images, and visualize locations on an interactive map — mirroring core features of platforms like Airbnb.

This project demonstrates end-to-end software development including **REST API design**, **cloud integrations**, **secure authentication**, and **responsive UI/UX**.

---

## 🔗 Live Demo

> **[https://havenhub-eq7j.onrender.com](https://havenhub-eq7j.onrender.com/listings)**

| Test Credentials | Value |
|-----------------|-------|
| You can register a new account directly on the site |  |

---

## ✨ Features

### 🔐 Authentication & Authorization
- Secure **Register / Login / Logout** flow using **Passport.js** Local Strategy
- Route-level authorization — only listing owners can edit or delete their listings
- Only review authors can delete their own reviews
- Session persistence using **connect-mongo** (MongoDB-backed sessions)

### 🏡 Property Listings (Full CRUD)
- Create listings with title, description, location, country, and price
- Upload and display property images via **Cloudinary** CDN
- Edit and delete listings with ownership checks
- Browse all listings with a clean, responsive card layout

### ⭐ Reviews System
- Authenticated users can leave star-rated reviews on any listing
- Review authors can delete their own reviews
- Visual star rating display on review cards

### 🗺️ Interactive Maps
- Geocoded property locations displayed on **Leaflet.js** maps
- Location visualization on individual listing pages

### 💡 UX Enhancements
- Flash messages for success/error feedback
- Form validation (client-side + server-side)
- Fully responsive design across mobile, tablet, and desktop
- Graceful error handling with custom error pages

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Runtime** | Node.js 20.x | Server-side JavaScript |
| **Framework** | Express.js | REST routing & middleware |
| **Database** | MongoDB Atlas + Mongoose | Data persistence & ODM |
| **Auth** | Passport.js (Local) | Secure user authentication |
| **Sessions** | express-session + connect-mongo | Persistent login sessions |
| **Templating** | EJS + ejs-mate | Server-side HTML rendering |
| **File Storage** | Cloudinary | Cloud image upload & delivery |
| **Maps** | Leaflet.js | Interactive property maps |
| **Deployment** | Render | Production cloud hosting |
| **Validation** | Joi | Server-side schema validation |

---

## 🏗️ Architecture
