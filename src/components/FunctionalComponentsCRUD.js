import React, { useState } from "react";

const FunctionalComponentsCRUD = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);
  const [formData, setFormData] = useState({ id: null, name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Update user
      setUsers(users.map((u) => (u.id === formData.id ? formData : u)));
    } else {
      // Create new user
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: null, name: "", email: "" });
  };

  const handleEdit = (user) => setFormData(user);

  const handleDelete = (id) => setUsers(users.filter((u) => u.id !== id));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>FunctionalComponentsCRUD</h3>
        <br/>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <button type="submit">{formData.id ? "Update" : "Create"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Update</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FunctionalComponentsCRUD;
