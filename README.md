# Smart Job Tracker

A full-stack MERN application to manage and track job applications efficiently.

## Features

* Add new job applications
* View all applied jobs
* Update application status
* Delete job entries
* Search jobs by company name
* Filter jobs by application status
* MongoDB database integration
* REST API with Express.js
* Responsive React frontend

## Tech Stack

### Frontend

* React.js
* Vite
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Project Structure

Smart-Job-Tracker/

├── client/

│ ├── src/

│ ├── public/

│ └── package.json

├── server/

│ ├── server.js

│ └── package.json

└── README.md

## Installation

### Clone Repository

git clone https://github.com/sde-akarshika-mehrotra/Smart-Job-Tracker.git

### Backend Setup

cd server

npm install

npm run dev

### Frontend Setup

cd client

npm install

npm run dev

## Environment Variables

Create a .env file inside the server folder:

MONGO_URI=your_mongodb_connection_string

PORT=5000

## API Endpoints

### Get All Jobs

GET /jobs

### Add Job

POST /jobs

### Update Job

PUT /jobs/:id

### Delete Job

DELETE /jobs/:id

## Learning Outcomes

Through this project, I learned:

* React component architecture
* State management with Hooks
* REST API development
* Express.js routing
* MongoDB CRUD operations
* Database integration using Mongoose
* Git and GitHub workflow

## Future Improvements

* Authentication & Authorization
* User Dashboard
* Job Analytics
* Interview Tracking
* Email Reminders
* Deployment on Render/Vercel

## Author

Akarshika Mehrotra

Aspiring Software Developer | Learning MERN Stack & AI
