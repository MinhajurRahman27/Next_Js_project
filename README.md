# 🔫 AK-47 Parts Catalog – Next.js Project
<img width="1346" height="542" alt="d" src="https://github.com/user-attachments/assets/6a6e3e9c-9399-46ee-b30c-447b72cc8d31" />

<img width="1336" height="600" alt="Capturdsfe" src="https://github.com/user-attachments/assets/9c0adf52-ca68-427a-8406-1e742bed8e6d" />


Alhamdulillah! This is my **first production-ready Next.js project**, built to practice real-world frontend concepts such as routing, authentication, API handling, and deployment.

The project showcases an **AK-47 parts & accessories catalog**, where users can browse products, view detailed information, and explore a modern UI built with Next.js.

🌐 **Live Demo:**  
https://ak-47-alpha.vercel.app/

---

## 🚀 Tech Stack

- **Next.js** (App Router)
- **NextAuth.js** (Authentication)
- **Tailwind CSS**
- **Vercel** (Deployment)

---

## 📖 Project Description

This project is a dynamic product catalog application focused on AK-47 parts and components.  
It demonstrates how to build scalable pages using **server-side rendering**, **API routes**, and **authentication flows** with NextAuth.

The goal of this project was to:
- Strengthen my understanding of Next.js App Router
- Work with real-world routing and data fetching
- Learn deployment and production debugging on Vercel

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/MinhajurRahman27/Next_Js_project.git

# Go to project directory
cd Next_Js_project

# Install dependencies
npm install

# Run the development server
npm run dev
Now open:
👉 http://localhost:3000

🗂️ Route Summary
Route	Description
/	Home page
/allguns	Displays all available products
/allguns/[id]	Product details page
/dashboard	User dashboard (protected)
/api/data	API route for fetching product data
/api/auth/*	NextAuth authentication routes

✨ Implemented Features
Dynamic product listing
Individual product detail pages
Server-side data fetching
Authentication with NextAuth
Protected routes
Responsive and modern UI
Deployed on Vercel

🧠 Feature Explanation
Dynamic Routing:
Product details are rendered using dynamic routes (/allguns/[id]) for scalability.

NextAuth Authentication:
Secure login system implemented using NextAuth for protected pages like the dashboard.

Server-Side Rendering:
Data is fetched on the server to improve performance and SEO.

Reusable Components:
Components like ProductCard and Title are reusable and cleanly structured.

Production Deployment:
Successfully deployed on Vercel with environment variable handling and build optimizations.

📌 Future Improvements
Add toast notifications for product actions

Implement search and filtering

Add admin product management

Improve accessibility and SEO

🤝 Author
Minhajur Rahman Khondaker
Aspiring Frontend Developer
Learning Next.js, modern web technologies, and best practices.

⭐ If you like this project, feel free to give it a star!
