# Welcome to AccomoMate

### Description

**AccomoMate** is a modern accommodation platform designed to connect property owners with individuals seeking safe, flexible, and affordable living spaces. Whether you're looking for a private room, a shared flat, or a full home, AccomoMate makes it easy to discover the right place — hassle-free.

Our mission is to simplify the rental experience by providing a secure, transparent, and user-friendly system for both tenants and property owners. We focus on trust, communication, and convenience, helping you find the right match in just a few clicks.

##

### 🚀 Features

- 🔐 JWT authentication and role management
- 🏠 List, edit, or remove properties anytime
- 🖼️ Multiple image support with carousels
- 🔍 Filter by features (WiFi, parking, balcony, etc.)
- 📄 Dynamic Terms & Conditions (Markdown-based)
- 🔒 Secure backend with helmet & bcrypt

##

### Tech Stack

Our platform is built using a modern, scalable, and secure tech stack to ensure a smooth experience for both users and property owners.

#### Frontend

- React
- React Router DOM
- Axios
- JWT Decode
- React Markdown
- React Slick, Swiper, Carousel

#### Backend

- Node.js
- Express
- MySQL2
- JWT
- Bcrypt
- CORS, dotenv, helmet, body-parser

##

### Platform Highlights

- 🔍 Smart property filtering
- 🏡 Multiple property types (whole/shared)
- 📅 Real-time availability
- 🔒 Secure user authentication
- 📤 Easy property listing for owners
- 📱 Mobile-friendly interface

##

### User Roles

#### 🏠 Landlord

- Create and manage property listings
- Upload multiple images and set features (WiFi, balcony, parking, etc.)
- Edit or delete listings at any time
- View and respond to renter inquiries
- Temporarily or permanently **disable a listing**
-

#### 🔑 Renter

- Register and browse all available listings
- Use filters like location, price, features
- View property details and images
- Save favorites or mark interest
- Contact landlords (if allowed by platform policy)

#### 🛠️ Company Staff _(Internal Use Only)_

Staff have hidden access to:

- Moderate listings and content
- Approve or remove suspicious listings
- Manage user reports or issues
- Access analytics and platform-wide settings

_This role is restricted and not visible to the public._

##

### Smart Feature

- Review & rating system
- Auto-list expiration
- Messaging between renters & landlords
- Notification system
- Payment gateway integration

##

### Admin Dashboard

- List of all users & roles
- Reported listings
- Analytics like "most searched area", "most active landlords"
- Approval system for listing

##

### UI Previews

_`UI preview screenshots coming soon. Stay tuned!`_

##

### ⚙️ How to Install This Project

- First download project from

```
https://github.com/afridipolock/accomomate.git
```

- Now go to project folder then open terminal then copy

```
npm install
```

- If you don't have necessary package installed then install them

```
npm i axios bcrypt body-parser cors dotenv express helmet jsonwebtoken jwt-decode mysql2 react-router-dom react-markdown react-responsive-carousel swiper react-slick slick-carousel
```

- Now add nodemon for backend

```
npm install --save-dev nodemon
```

- Once all done run the project using

```
npm start
```

- For backend and database navigate to /backend

- First get ready your database
- Here we use mysql
- Navigate to config/db.sql
- Run all the query to setup database and table
- your database is ready

```
cd src/backend
```

- Open .env file with editor then update according to your database

```
DB_HOST=127.0.0.1

DB_USER=

DB_PASSWORD=

DB_NAME=

DB_PORT=3306

PORT=5000

JWT_SECRET=
```

- To fill up that .env file you have to generate **JWT_SECRET** for that open terminal then type

```
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

- Now copy the value and paste on .env file

- Now run backend server

```
nodemon server.js
```

- All good enjoy
