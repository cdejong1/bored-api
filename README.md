# 🎯 Bored API

The **Bored API** is a simple, flexible RESTful API that suggests fun activities, hobbies, and events to help users defeat boredom.  
It provides random ideas, allows filtering by activity type, cost, and category, and plans for future enhancements like event-based recommendations.

---

## 🚀 Features

- 🎲 Get random activity suggestions
- 🏠 Filter by indoor/outdoor activities
- 💵 Filter by cost (free/paid)
- 🎨 Filter by category (creative, physical, learning, social)
- 📅 (Coming Soon) Weekly trending activity
- 📆 (Future Roadmap) Upcoming event suggestions by location

---

## 📚 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## ⚙️ Installation

### Requirements:
- Node.js (v18+ recommended)
- npm (Node package manager)

### Steps:

```bash
# Clone the repository
git clone https://github.com/your-username/bored-api.git

# Navigate into the project directory
cd bored-api

# Install dependencies
npm install

# (Optional) Install nodemon for auto-reloading during development:
npm install --save-dev nodemon
```

---

## 📡 API Endpoints

```bash 
Method | Endpoint | Description
GET | /health | Health check to verify server is running.
GET | /activity | Get a random activity suggestion.
GET | /activity?type=indoor | Filter activities by type. (Coming in Sprint 1)
POST | /activity/suggest | Submit a new activity idea. (Coming in Sprint 1)
```
More detailed API documentation available via OpenAPI/Swagger UI (coming soon).

---

## 🏗️ Project Structure

```bash 
bored-api/
├── src/
│   ├── controllers/
│   │   └── activityController.js
│   ├── routes/
│   │   └── activityRoutes.js
│   ├── models/
│   ├── services/
│   ├── middleware/
│   ├── data/
│   │   └── activities.json
│   └── app.js
├── tests/
│   └── activity.test.js
├── docs/
│   └── api-spec.yaml
├── server.js
├── package.json
├── .gitignore
└── README.md
```

---

## 📄 License
This project is licensed under the MIT License.
