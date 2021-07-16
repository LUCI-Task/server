##  API Documentation

### Backend deployed at [Heroku](https://luci-project.herokuapp.com/) <br>


## Getting Started

To get the server running locally:

- Clone this repo
- **npm i** to install all required dependencies
- **npm run start** to start the local server
- **npm test** to start server using testing environment

### Backend Framework

- Express for flexibility, simple routing, and middleware support
- MongoDB for data persistence

### ESLint && Prettier
- Configuration is already set up

#### Users Routes

| Method | Endpoint                    | Access Control | Description                           |
| ------ | --------------------------- | -------------- | ------------------------------------- |
| GET    | `/users`                    | admins         | Returns list of all users.            |
| PUT    | `/users/:Id`                | all users      | Update user's account info by id.     |
| POST   | `/users/:Id`                | all users      | Creates new user.                     |
| DELETE | `/users/:Id`                | all users      | Delete user's account by id.          |

## Data Model

#### USERS

---

##### EXPECTS JSON

```
{
  first_name: String,
  last_name: String,
  email: String,
  selectedFile: String,
  status: String,
  project: String,
  role: String,
  bio: String,
}

```

### [Go to Front End](https://github.com/LUCI-Task/client) =>
