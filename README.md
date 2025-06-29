

---

# Loopin

Welcome to the **Loopin**, built with the MERN stack. This project features real-time chat functionality powered by **Socket.io** and is designed with **Chakra UI** for a modern and responsive user interface.

---

## 🔥 **Features**

### **Core Functionality**
1. **Authentication & Authorization**
   - Secure signup and login with JWT.
   - Password hashing for security.

2. **Post Management**
   - Create posts with text and images.
   - Delete posts for better content management.
   - Like/Unlike posts to engage with content.
   - Add comments to share your thoughts on posts.

3. **User Interactions**
   - Follow/Unfollow other users to curate your feed.
   - Freeze account feature for inactive users.

4. **Chat Functionality**
   - Real-time messaging powered by Socket.io.
   - Support for sending images in chat.
   - Seen/Unseen message status for better user experience.

5. **UI/UX Enhancements**
   - Fully responsive design for mobile and desktop.
   - Light/Dark mode for visual comfort.
   - Notification sounds for real-time updates.

6. **Deployment**
   - Free deployment setup to showcase your app online.

---

## 🛠️ **Tech Stack**

- **Frontend**: React.js, Chakra UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **Authentication**: JWT
- **Image Upload**: Cloudinary
- **Deployment**: Vercel (frontend), Render/Heroku (backend)

---

## 🚀 **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- Node.js
- MongoDB
- A Cloudinary account

### **Clone the Repository**
```bash
git clone https://github.com/your-username/threads-clone.git
cd threads-clone
```

### **Install Dependencies**
```bash
npm install
```

---

## 📝 **Environment Variables**
Create a `.env` file in the root directory and configure the following variables:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 💻 **Run the App**

### **Development Mode**
Start the backend server:
```bash
cd backend
npm start
```

Start the frontend server:
```bash
cd frontend
npm run dev
```

The app will be available at `http://localhost:3000`.

### **Production Build**
Build the app for production:
```bash
cd frontend
npm run build
```

Start the production backend server:
```bash
cd backend
npm start
```

---

## 📂 **Project Structure**

```plaintext
THREADS-CLONE/
├── backend/
│   ├── controllers/       # Handles business logic for various endpoints
│   ├── cron/              # Scheduled tasks and jobs
│   ├── db/                # Database connection and schema configurations
│   ├── middlewares/       # Middleware functions for requests
│   ├── models/            # MongoDB schemas and models
│   ├── routes/            # API routes
│   ├── socket/            # Socket.io configurations for real-time chat
│   ├── utils/             # Utility functions and helpers
│   ├── .gitignore         # Files/folders to ignore in version control
│   └── server.js          # Entry point for the backend server
│
├── frontend/
│   ├── node_modules/      # Frontend dependencies
│   ├── public/            # Static assets (HTML, icons, etc.)
│   ├── src/               # React.js components, pages, and app logic
│   ├── .eslintrc.cjs      # ESLint configuration for the frontend
│   ├── .gitignore         # Files/folders to ignore in version control
│   ├── index.html         # Main HTML file
│   ├── package-lock.json  # Dependency lock file for the frontend
│   ├── package.json       # Package configuration for the frontend
│   ├── README.md          # Frontend-specific README
│   ├── vercel.json        # Vercel deployment configuration
│   └── vite.config.js     # Vite.js configuration file
│
├── assets/                # Screenshots and static assets for documentation
│   ├── home.png           # Home page screenshot
│   ├── create-post.png    # Create post page screenshot
│   ├── chat.png           # Chat feature screenshot
│   ├── responsive.png     # Responsive view screenshot
│
├── node_modules/          # Root dependencies
├── .env                   # Environment variables
├── .gitignore             # Files/folders to ignore in version control
├── LICENSE                # Project license
├── package-lock.json      # Dependency lock file for the root
├── package.json           # Package configuration for the root
└── README.md              # Project README
```

---

## 🖼️ **Screenshots**


![Screenshot 2025-06-13 135900](https://github.com/user-attachments/assets/42c63c79-759e-4fe1-bde8-7c349b99d095)
![Screenshot 2025-06-13 135923](https://github.com/user-attachments/assets/8e8eb906-16f8-442d-b75c-f0c773b24d72)
![Screenshot 2025-06-13 135932](https://github.com/user-attachments/assets/1d22e572-7f54-45b0-b098-40c35ea9771f)
![Screenshot 2025-06-13 135945](https://github.com/user-attachments/assets/ee5477df-7417-4cd5-a2cc-0b6c42549439)
![Screenshot 2025-06-13 140005](https://github.com/user-attachments/assets/2a4d6541-6356-4236-a020-9a7dd0ec03a6)
![Screenshot 2025-06-13 140129](https://github.com/user-attachments/assets/3ee00fd6-7ac6-4a1d-a6a4-23e80983883a)
![Screenshot 2025-06-13 134942](https://github.com/user-attachments/assets/7f83886e-2f64-496c-86a6-3a85b7941317)
![Screenshot 2025-06-13 135738](https://github.com/user-attachments/assets/9d25876d-cd7e-4e9f-87dc-a9ebe79c540d)
![Screenshot 2025-06-13 135759](https://github.com/user-attachments/assets/c71a061d-b2e4-44a4-a872-a32ec8265349)
![Screenshot 2025-06-13 135816](https://github.com/user-attachments/assets/165a6477-c510-46a3-8a0a-7288738ad68a)
![Screenshot 2025-06-13 135834](https://github.com/user-attachments/assets/84ac2da1-8f9f-47be-9f94-0e908392e8e2)


---

## 🛡️ **Security**
- Passwords are hashed with `bcrypt`.
- JSON Web Tokens (JWT) secure all user sessions.
- Input validation ensures data integrity.

---

## 🎉 **Future Enhancements**
- Video support for posts and chats.
- Advanced analytics for user engagement.
- Push notifications using Firebase.
- AI-based content suggestions.

---

## 📜 **License**
This project is licensed under the [MIT License](LICENSE).

---

## 🤝 **Contributing**
We welcome contributions to improve this project! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## 📧 **Contact**
For queries or feedback, feel free to reach out:
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

Thank you for exploring the **Threads Clone Web App**! 🚀
