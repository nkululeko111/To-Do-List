# Todo List Application

## Overview

The Todo List Application is a web application built with Angular that enables users to manage their tasks effectively. This application includes user authentication, registration, and task management capabilities. Users can create, update, and delete tasks, set priorities, and manage deadlines. The application provides a user-friendly interface and highlights overdue tasks to enhance productivity.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [User Authentication](#user-authentication)
- [Task Management](#task-management)
- [Protected Routes](#protected-routes)
- [Local Storage](#local-storage)
- [License](#license)

## Features

- User authentication and registration
- Secure access to the todo list through protected routes
- Create, update, and delete tasks
- Set task priorities (High, Medium, Low) with color representation (Red, Orange, Green)
- Date picker for selecting due dates
- Highlight overdue tasks
- Data stored in local storage for persistence

## Technologies Used

- Angular
- TypeScript
- HTML/CSS
- JSON Server (for user details and tasks storage)
- Local Storage

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nkululeko111/Todo-Do-List.git
   cd todo-list
   ```

2. **Install the required dependencies:**
   ```bash
   npm install
   ```

3. **Run the JSON server for user details and tasks:**
   Make sure you have `json-server` installed. If not, install it globally:
   ```bash
   npm install -g json-server
   ```
   Then start the JSON server:
   ```bash
   json-server --watch db.json
   ```

4. **Start the Angular application:**
   ```bash
   ng serve
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:4200/
   ```

## Usage

### User Authentication

- **Login Page:** Users can enter their credentials to log in. Input validation is provided, with appropriate error messages for invalid login attempts.
- **Registration Page:** New users can sign up by providing their name, email, and password. Input validation ensures no duplicate registrations.

### Task Management

- After logging in, users can access the todo list where they can:
  - **Create Tasks:** Users can add new tasks with a title, description, priority, and due date.
  - **Update Tasks:** Users can edit existing tasks.
  - **Delete Tasks:** Users can remove tasks from their list.
  - **Set Priorities:** Tasks can be prioritized as High (Red), Medium (Orange), or Low (Green).
  - **Due Dates:** Users can select a due date for each task using a date picker.
  - **Overdue Highlighting:** Tasks that are past their due date will be highlighted.

## Protected Routes

The application implements protected routes to ensure that only authenticated users can access sensitive features like the todo list. Unauthenticated users attempting to access these routes will be redirected to the login page.

## Local Storage

User login email and todo list entries are stored in local storage for persistence, ensuring that user data remains accessible even after refreshing the page.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any sections to better suit your project's specifics or add more details as needed!