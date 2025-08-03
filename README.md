# 🎬 Favorite Movies & TV Shows App

A full-stack web application for managing your favorite movies and TV shows with infinite scroll, CRUD functionality, and optional user authentication.

---

## 🗂️ Project Structure

upscale-assign/
├── client/ # React frontend (Vite + TypeScript + TailwindCSS)
├── server/ # Express backend with Sequelize & MySQL
│ ├── config/ # DB connection and configuration
│ ├── controllers/ # Movie controller logic
│ ├── models/ # Sequelize models
│ ├── routes/ # Express routes
│ ├── seed/ # Dummy data seeding script
│ ├── public/ # Built frontend gets copied here
│ ├── server.js # Express entry point
├── data.json # Dummy movie data
├── .env # Environment variables
├── README.md # You're reading this
└── package.json # Root scripts for build/start


---

## 🚀 Features

- 📄 Add, edit, delete movie/show entries
- 🔍 Search and filter
- ♾️ Infinite scroll
- ✅ Input validation with Yup
- 🗃️ Sequelize ORM with MySQL
- 🎨 Responsive UI with TailwindCSS
- 🔐 (Optional) User auth with JWT
- ☁️ Deployed on Render

---

## ⚙️ Environment Variables

Create a `.env` file in root  `/` with the following:

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_DIALECT=
PORT=


---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/abhinayy58/upscale-assign.git
cd upscale-assign
```


### 2. Install root dependencies

npm install

### 3. Setup client (React)

cd client
npm install

### 4. Start the development server

npm run dev


🌐 API Endpoints
Method	    Route	          Description
GET	    /api/movies?page=1	Fetch paginated entries
POST	/api/movies	        Create a new entry
PUT	    /api/movies/:id	    Update an entry
DELETE	/api/movies/:id	    Delete an entry

🧪 Future Enhancements
User authentication (JWT + Role-based)

Image support for entries

Admin panel

Sorting & filtering

Unit & integration testing


