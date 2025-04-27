# # Assignment: abhishek-exam-prep-test-fullstack-db

## 📚 Overview

You are given a basic MERN stack project setup with two folders:
- `frontend/` — contains a React application.
- `backend/` — contains a basic Node.js + Express server setup.

Your task is to **build a Voting People Management System**.  
You must perform **full CRUD operations** (Create, Read, Update, Delete) on people's voting data.

---

## 📂 Project Structure

- `backend/` (server setup)
- `frontend/` (React app setup)

Both folders are already created.  
You need to **start writing code** inside them as per the requirements given below.

---

## 🧑‍💻 Backend Instructions

Inside the `backend/` folder:

1. **Create a Person Schema**  
   Fields:
   - `name` (String, required)
   - `age` (Number, required)
   - `voterId` (String, unique, required)
   - `hasVoted` (Boolean, default: false)

2. **Set up routes** for:
   - **Create Person** — Add a new person entry.
   - **Read Persons** — Fetch all person data.
   - **Update Person** — Update a person’s details (for example, change `hasVoted` status).
   - **Delete Person** — Remove a person from the database.

3. **Connect your server to MongoDB**  
   (Configure MongoDB URL in environment variables.)

4. **Use proper HTTP status codes** and send appropriate success/error messages in the API response.

---

## 🎨 Frontend Instructions

Inside the `frontend/` folder:

1. **Create a Person Management Interface**:
   - A form to **add a new person** (name, age, voter ID).
   - A list to **display all persons** fetched from the backend.

2. **CRUD Operations from UI**:
   - **Create**: Add new persons through a form.
   - **Read**: Show the list of persons.
   - **Update**: Change a person’s voting status (`hasVoted` true/false).
   - **Delete**: Remove a person from the list.

3. **API Integration**:
   - Use **Axios** or **Fetch** to call backend APIs.
   - Handle loading states and error messages properly.

4. **UI Suggestions** (optional but recommended):
   - Highlight persons who have voted vs. not voted.
   - Allow filter or search by voter ID or name.

---

## 🏁 Final Expected Behavior

- A working React app where users can manage people voting data.
- Backend APIs properly connected to MongoDB.
- Full CRUD operations working.
- Clean and user-friendly UI.

---

## 🔥 Important Points

- Do not change the basic project structure.
- Complete both backend and frontend parts.
- Write clean, modular, and readable code.
- Handle API errors gracefully.
- (Optional Bonus) Deploy your project if you have time.

---
