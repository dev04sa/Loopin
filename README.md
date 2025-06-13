

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

### Home Feed
![Home Feed](./assets/home.png)

### Create Post
![Create Post](./assets/create-post.png)

### Chat Functionality
![Chat](./assets/chat.png)

### Responsive Design
![Responsive Design](./assets/responsive.png)

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
