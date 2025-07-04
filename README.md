# GreenCart: Your Full-Stack Grocery Delivery Platform 🥕🛒

GreenCart is a fully functional e-commerce grocery delivery website built with the MERN (MongoDB, Express.js, React, Node.js) stack. This project provides a complete online shopping experience for users and a robust management dashboard for sellers, designed for seamless product browsing, secure ordering, and efficient order/product management. The application is designed to be deployed for free, making it live and accessible to everyone.

---

## ✨ Key Features

### 🛍️ User Features
- **Intuitive Navigation:** Clean navigation bar with logo, essential links, search bar, cart icon, and login/profile button.
- **Product Discovery:** Browse products by categories (vegetables, fruits, drinks), explore best-sellers, and use a dedicated "All Products" page.
- **Interactive Product Details:** Detailed product pages with image galleries, descriptions, pricing, and related suggestions.
- **Shopping Cart Management:** Add, update, and remove products. Cart data persists in the database.
- **Secure Checkout:**
  - **Cash on Delivery (COD):** Simple order placement for COD users.
  - **Online Payments (Stripe):** Secure payments via Stripe.
- **Address Management:** Add and select multiple delivery addresses.
- **Order Tracking:** "My Orders" section for past orders, including order ID, payment type, total, and product details.
- **Dynamic Search:** Filter products using the search bar, redirecting to "All Products" with filtered results.
- **Responsive Design:** Consistent experience on mobile and desktop.

### 🧑‍💼 Seller/Admin Features
- **Seller Dashboard:** Manage inventory and orders.
- **Product Upload:** Add new products with images, names, descriptions, categories, prices, and offers. Images stored on Cloudinary.
- **Product List Management:** View all uploaded products, toggle stock status.
- **Order Overview:** View recent orders with product, quantity, shipping, price, payment, and status details.

---

## 🛠️ Technologies Used

### Backend (Node.js & Express.js)
- **Node.js**: Backend runtime
- **Express.js**: API framework
- **MongoDB**: NoSQL database
  - **Mongoose**: ODM for MongoDB
- **bcryptjs**: Password hashing
- **jsonwebtoken (JWT)**: Authentication
- **cookie-parser**: Cookie parsing
- **cors**: Cross-Origin Resource Sharing
- **dotenv**: Environment variables
- **multer**: File uploads
- **Cloudinary**: Image storage
- **Stripe**: Payment processing
- **nodemon**: Dev utility

### Frontend (React.js)
- **React.js**: UI library
- **Vite**: Frontend build tool
- **React Router DOM**: Routing
- **React Hot Toast**: Toast notifications
- **Tailwind CSS**: Utility-first CSS
- **Axios**: HTTP client

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18 or newer ([Download here](https://nodejs.org/en/download/))

### Project Structure
- `server/`: Node.js/Express.js backend
- `client/`: React.js frontend

### Local Setup

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd GreenCart
```

#### 2. Backend Setup
- Open the `GreenCart` root folder in your editor.
- **MongoDB Setup:**
  - Create a free cluster on MongoDB Atlas.
  - Create a database user (avoid @ or # in the password).
  - Configure network access to 0.0.0.0/0.
  - Obtain your MongoDB URI.
  - In the `server` folder, create a `.env` file and add your credentials.
- **Cloudinary Setup:**
  - Sign up at Cloudinary and get your Cloud Name, API Key, and API Secret.
  - Add these to your `server/.env` file.
- **Stripe Setup (Optional):**
  - Sign up at Stripe and get your API keys (test mode for development).
  - Add these to your `server/.env` file.
- **Admin Credentials & JWT Secret:**
  - Add these to your `server/.env` file.
- **Install Dependencies & Run Server:**
  ```bash
  cd server
  npm install
  npm run dev
  # Server runs at http://localhost:4000
  ```

#### 3. Frontend Setup
- Open a new terminal, navigate to the `client` folder:
  ```bash
  cd client
  ```
- **Environment Variables:**
  - Create a `.env` file in `client` and add:
    - `VITE_CURRENCY=$` (or your chosen symbol)
    - `VITE_BACKEND_URL=<Backend-Live-URL>`
- **Install Dependencies & Run Client:**
  ```bash
  npm install
  npm run dev
  # Frontend runs at http://localhost:5173
  ```

---

## ☁️ Deployment (Vercel)

This project can be deployed for free using Vercel.

### 1. Push Project to GitHub
- Ensure both `server/` and `client/` folders are pushed.
- Add `.gitignore` to exclude `node_modules`.
- Add `vercel.json` in both `server/` and `client/` for Vercel config.

### 2. Deploy Backend on Vercel
- Import your GitHub repo to Vercel.
- Set root directory to `server`.
- Add all environment variables from your `server/.env`.
- Set `NODE_ENV=production`.
- Deploy and obtain your backend live URL.

### 3. Configure Stripe Webhooks
- Add a webhook in Stripe Dashboard:
  - Endpoint: `<Backend-Live-URL>/stripe`
  - Subscribe to: `payment_intent.succeeded`, `payment_intent.payment_failed`
  - Add the signing secret to your backend `.env` and Vercel settings.

### 4. Deploy Frontend on Vercel
- Set root directory to `client`.
- Add frontend environment variables:
  - `VITE_CURRENCY=$`
  - `VITE_BACKEND_URL=<Backend-Live-URL>`
- Deploy and obtain your frontend live URL.

### 5. Final Backend Update
- In `server/server.js`, add your frontend live URL to the allowed origins.
- Push changes to GitHub to trigger redeploy.

---
