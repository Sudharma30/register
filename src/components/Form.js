import styles from "./Form.module.css";
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length <= 5) {
      setNameError("Name must be greater than 5 characters");
    } else {
      setNameError("");
    }

    if (email.length < 3) {
      setEmailError("");
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }

    if (name === "") {
      setNameError("Name is required");
    }

    if (email === "") {
      setEmailError("Email is required");
    }

    if (password === "") {
      setPasswordError("Password is required");
    }

    if (name && email && password) {
      setSuccessMessage(`Hi ${name}, you have been successfully registered !!`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <span className={styles.header}>Registration Form</span>
        <div className={styles.input_wrap}></div>
        <br/>
        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          {nameError && <div>{nameError}</div>}
        </div>
        <br/>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleEmailChange}
            />
          </label>
          {emailError && <div>{emailError}</div>}
          </div>
        <br/>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <div>{passwordError}</div>}
        </div>
        <br/>
        <button className={styles.register} type="submit">
          Register
        </button>
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
}

export default Form;
