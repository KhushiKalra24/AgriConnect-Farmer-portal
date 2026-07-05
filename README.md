# AgriConnect – Farmer Group Coordination Portal

## Project Overview

AgriConnect is a full-stack web application developed to help agricultural coordinators efficiently manage farmer groups, monitor crop status, and organize harvest collection activities. The system provides an easy-to-use interface for creating, updating, viewing, and managing farmer group information.

---

## Features

* Create new farmer groups
* View all farmer groups
* Update existing farmer group information
* Delete farmer groups
* Responsive user interface
* RESTful API architecture

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## Project Structure

```text
W2_Submission_26101050
│
├── frontend
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env.example
│   └── server.js
│
├── README.md
└── W5_SchemaDiagram_26101050.png
```

---

## Database Choice

MongoDB was selected because it is a NoSQL database that stores information as flexible JSON-like documents. This makes it suitable for storing farmer group records while allowing future expansion of the application without requiring major schema changes.

---

## Database Schema

![Database Schema](W5_SchemaDiagram_26101050.png)

### Collection: Group

| Field       | Type   | Description                           |
| ----------- | ------ | ------------------------------------- |
| name        | String | Farmer group name                     |
| coordinator | String | Coordinator responsible for the group |
| crop        | String | Crop cultivated by the group          |
| status      | String | Growing, Ready or Harvested           |
| createdAt   | Date   | Record creation timestamp             |
| updatedAt   | Date   | Record update timestamp               |

---

## API Endpoints

| Method | Endpoint    | Description        |
| ------ | ----------- | ------------------ |
| GET    | /groups     | Get all groups     |
| GET    | /groups/:id | Get one group      |
| POST   | /groups     | Create a new group |
| PUT    | /groups/:id | Update a group     |
| DELETE | /groups/:id | Delete a group     |

---

## Database Setup

1. Clone the repository.

2. Navigate to the backend folder.

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

5. Start the backend server.

```bash
node server.js
```

6. Start the frontend application.

```bash
npm run dev
```

---

## Future Improvements

* User Authentication
* Role-Based Access Control
* Harvest Scheduling
* AI-based Crop Prediction
* Dashboard Analytics
* Notifications

---

## Author

**Khushi Kalra**

AI-Assisted Full Stack Web Development Internship

Project: **AgriConnect – Farmer Group Coordination Portal**
