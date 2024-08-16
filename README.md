# **Space Quiz**

## FYI
This project is a clone of the original [Space Quiz](https://github.com/kxwhite/space-react-game). It has been modified for educational purposes and to demonstrate the integration of Next.js, MongoDB, and NextAuth. Private information has been removed and replaced. Please see a list of contributors below and in the original repository.

## **Project Description**
**Space Quiz** is a gamified learning platform designed to help users learn coding languages in an engaging and interactive way. Players travel across planets and beat levels by flying through space, avoiding asteroids, and collecting "quiz bits." The game is both educational and fun, combining the excitement of a space-themed adventure with the challenge of coding quizzes.

## **Technologies Used**
- **Next.js** for the front-end
- **MongoDB** for the database
- **NextAuth** for authentication
- **Material UI & Bootstrap** for styling and UI components

## **Features**
- **User Authentication and Profiles:** Secure login and personalized user experience.
- **Space-Themed Gameplay:** Explore planets and complete levels in a space environment.
- **Single-Player Mode:** Engage in solo missions to master coding concepts.
- **Score Tracking:** Track your progress and see how you improve over time.
- **Level Unlock:** Progress through levels as you complete quizzes and avoid obstacles.

## **Installation Instructions**

### **Prerequisites**
Before you begin, ensure you have the following installed:
- **Node.js**
- **MongoDB**
- **React**

### **Clone the Repository**
```bash
git clone https://github.com/your-username/space-quiz.git
cd space-quiz
```
### Install Dependencies
```bash
npm install
```
###  Set Up Environment Variables
Create a **`.env`** file in the root of your project and add the following environment variables:

```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-connection-string
```
Replace **`your-secret-key`** with a secure key for NextAuth.
Replace **`your-mongodb-connection-string`** with your MongoDB connection URI.

### Create MongoDB Database

1. Create a MongoDB database with any name.
2. Create a collection named **`"users"`**.

### Seed the Database
To seed the database with initial data, follow these steps:

1. Update **`package.json`** to include **`"type": "module"`**.
2. Rename **`seed.js`** to **`seed.mjs`**.
3. Rename **`next.config.js`** to **`next.config.cjs`**.
4. Run the following command to seed the database:

```bash
npm run seed
```
After seeding, `revert any file name changes` if necessary.

### Run the Project
```bash
npm run dev
```
The project will start running on **`http://localhost:3000`**.

## Usage
To play **Space Quiz**, use the following controls:

- **Arrow Key**s or **WASD Keys **to navigate your spaceship.
- **Objective:** Avoid the asteroids and collect the "quiz bits" floating in space.
- **Gameplay:** As you collect "quiz bits," you'll unlock coding challenges that you must complete to progress to the next level. Successfully avoiding obstacles while answering quiz questions allows you to advance through the game and learn coding concepts in an interactive way.

## Credits

- **Korabii** - Game Developer
- **RaimundasRa** - Front-End Developer
- **akhanna2** - Front-End Developer
- **kxwhite** - Front-End Developer

**Original Repository** - [Space Quiz](https://github.com/kxwhite/space-react-game).

## Future Features

- **Profile Page:** A personalized profile page where users can view their progress, achievements, and statistics.
- **Customization Options:** Customize your spaceship skin, avatar icons, and collect trophies.
- **Leaderboard:** Compete with other players and see where you stand on the global leaderboard.
