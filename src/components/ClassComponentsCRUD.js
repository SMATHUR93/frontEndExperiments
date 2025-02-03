import React, { Component } from "react";

class ClassComponentsCRUD extends Component {
  state = {
    users: [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ],
    formData: { id: null, name: "", email: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { users, formData } = this.state;
    if (formData.id) {
      this.setState({
        users: users.map((u) => (u.id === formData.id ? formData : u)),
        formData: { id: null, name: "", email: "" },
      });
    } else {
      this.setState({
        users: [...users, { ...formData, id: Date.now() }],
        formData: { id: null, name: "", email: "" },
      });
    }
  };

  handleEdit = (user) => this.setState({ formData: user });

  handleDelete = (id) => {
    this.setState({ users: this.state.users.filter((u) => u.id !== id) });
  };

  handleInputChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  render() {
    const { users, formData } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>ClassComponentsCRUD</h3>
          <br/>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={this.handleInputChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={this.handleInputChange}
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
                  <button onClick={() => this.handleEdit(user)}>Update</button>
                  <button onClick={() => this.handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassComponentsCRUD;
