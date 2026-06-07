# 📸 SnapShare

A simple full-stack social media application where users can create posts with captions and images, and view all shared posts in a modern responsive feed.

## 🚀 Features

* Create posts with image uploads
* Upload images using Multer
* Store post data in MongoDB
* Display posts in a responsive card layout
* React frontend with React Router
* Express.js backend REST API
* Tailwind CSS UI

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* CORS

---

## 📁 Project Structure

```text
project-root/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   └── package.json
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │   └── multer.js
│   ├── public/
│   ├── app.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd <project-name>
```

### Backend Setup

```bash
cd Backend

npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/snapshare
```

Start Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd Frontend

npm install
```

Start Frontend:

```bash
npm run dev
```

---

## 📡 API Endpoints

### Get All Posts

```http
GET /getPost
```

### Create Post

```http
POST /addPost
```

Form Data:

| Key     | Type |
| ------- | ---- |
| caption | text |
| image   | file |

---

## 📷 Image Upload

Images are uploaded using Multer and stored inside:

```text
Backend/public/
```

Static files are served through:

```js
app.use("/public", express.static("public"));
```

Access uploaded images:

```text
http://localhost:3000/public/<image-name>
```

---

## 🎯 Future Improvements

* User Authentication (JWT)
* Likes & Comments
* User Profiles
* Edit/Delete Posts
* Cloudinary Image Storage
* Infinite Scroll Feed
* Dark Mode

---

## 👨‍💻 Author

**Tushar Chakraborty**

GitHub: https://github.com/TusharChakraborty07
