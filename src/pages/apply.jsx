import React, { useState } from "react";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
    console.log(formData);
  };

  return (
    <div className="apply">
    <div style={styles.container}>
      <h2>Work With Us At Funmilayo Store</h2>
      <p>Fill the form below to apply for a job in our supermarket.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <select
          name="position"
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Position</option>
          <option>Cashier</option>
          <option>Store Assistant</option>
          <option>Cleaner</option>
        </select>

        <button type="submit" style={styles.button}>
          Apply
        </button>
      </form>
    </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "lightseagreen",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default JobApplication;