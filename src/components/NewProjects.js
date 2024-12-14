// src/components/NewProjectForm.js

import React, { useState } from 'react';
import axios from 'axios';

function NewProjectForm({ setProjects }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/projects', { name })
      .then((response) => {
        setProjects((prevProjects) => [...prevProjects, response.data]);
        setName('');
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError('Error adding project');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project Name"
        required
      />
      <button type="submit">Add Project</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default NewProjectForm;
