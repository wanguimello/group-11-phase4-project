
---

# 📊 **Project Manager Frontend Tasks** by Joyce Kimani

This README provides an overview of the frontend development tasks completed by **Joyce Kimani** for the Project Manager application. The focus areas include:

1. **UI/UX & Navigation Bar Design**
2. **Data Visualization**
3. **CRUD Integration**

---

## 📝 **Table of Contents**

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Code Examples](#code-examples)
  - [Navigation Bar](#navigation-bar)
  - [Data Visualization](#data-visualization)
  - [CRUD Integration](#crud-integration)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

---

## 📌 **Project Description**

The frontend tasks handled by Joyce Kimani aim to enhance the user experience, provide dynamic data insights, and enable seamless project management. These tasks ensure a responsive and interactive interface for users to navigate, visualize project metrics, and manage projects effectively.

---

## 🚀 **Features**

1. **Responsive Navigation Bar**:
   - Provides intuitive navigation with links to key sections (Home, Projects, Resources, Profile).
   - Adjusts layout for mobile and desktop views.

2. **Data Visualization**:
   - Visualizes project metrics with dynamic charts using **Chart.js**.
   - Offers insights into project progress and resource allocation.

3. **CRUD Integration**:
   - Allows users to create, view, and delete projects.
   - Integrates frontend with backend API for real-time updates.

---

## 🛠️ **Technologies Used**

- **React** – For building component-based UI.
- **Chart.js** – For creating interactive charts and graphs.
- **Axios** – For making HTTP requests to the backend.
- **CSS** – For responsive and styled components.

---

## 💻 **Installation**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/project-manager.git
   cd project-manager
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Install Additional Packages**:

   ```bash
   npm install chart.js axios
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```

5. **Ensure the Backend API is Running**.

---

## 📚 **Usage**

1. **Navigation Bar**:
   - Access the navigation bar to explore different sections of the app.
   - Links include **Home**, **Projects**, **Resources**, and **Profile**.

2. **Data Visualization**:
   - View project metrics on the **Project Metrics** page.
   - Interactive charts display key insights.

3. **CRUD Operations**:
   - Manage projects on the **Projects** page.
   - Create, view, and delete projects seamlessly.

---

## 🧩 **Code Examples**

### 🖌️ **Navigation Bar**

File: `src/components/NavBar.js`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Project Manager</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
```

### 📈 **Data Visualization**

File: `src/components/ProjectMetrics.js`

```jsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function ProjectMetrics() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('/api/projects/metrics')
      .then(response => {
        setChartData({
          labels: response.data.labels,
          datasets: [{
            label: 'Project Metrics',
            data: response.data.values,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          }]
        });
      })
      .catch(error => console.error('Error fetching metrics:', error));
  }, []);

  return (
    <div>
      <h3>Project Metrics</h3>
      <Bar data={chartData} />
    </div>
  );
}

export default ProjectMetrics;
```

### 🔄 **CRUD Integration**

File: `src/components/Projects.js`

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewProjectForm from './NewProjectForm';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/projects/${id}`)
      .then(() => setProjects(projects.filter(project => project.id !== id)))
      .catch(error => console.error('Error deleting project:', error));
  };

  return (
    <div>
      <h2>Projects</h2>
      <NewProjectForm setProjects={setProjects} />
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name}
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
```

---

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## 🤝 **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

---

## 📧 **Contact**

For any questions or feedback, feel free to reach out:

- **Name**: Joyce Kimani
- **Email**: [joycekimani@gmail.com]

---

Happy Coding! 🚀