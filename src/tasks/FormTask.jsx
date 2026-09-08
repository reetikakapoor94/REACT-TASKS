import { useState } from "react";
import "./FormTask.css";

// ============================================================
// TASK 5: Form Validation
// ============================================================

const emptyFields = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  age: "",
};

function validate(fields) {
  const errors = {};

  // Name: required and at least 2 characters
  if (fields.name.trim() === "") {
    errors.name = "Name is required.";
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  // Email: required and must contain @ and .
  if (fields.email.trim() === "") {
    errors.email = "Email is required.";
  } else if (
    !fields.email.includes("@") ||
    !fields.email.includes(".")
  ) {
    errors.email = "Please enter a valid email address.";
  }

  // Password: required and at least 8 characters
  if (fields.password === "") {
    errors.password = "Password is required.";
  } else if (fields.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  // Confirm password: required and must match password
  if (fields.confirm === "") {
    errors.confirm = "Please confirm your password.";
  } else if (fields.confirm !== fields.password) {
    errors.confirm = "Passwords do not match.";
  }

  // Age: required and must be between 18 and 99
  if (fields.age.trim() === "") {
    errors.age = "Age is required.";
  } else {
    const age = Number(fields.age);

    if (isNaN(age) || age < 18 || age > 99) {
      errors.age = "Age must be a number between 18 and 99.";
    }
  }

  return errors;
}

export default function FormTask() {
  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });

    // Remove error as soon as user starts correcting the field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    // If confirm password changes, also clear confirm error
    if (name === "password" && errors.confirm) {
      setErrors({
        ...errors,
        password: "",
        confirm: "",
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(fields);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  }

  function handleReset() {
    setFields(emptyFields);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-icon">🎉</div>

        <h3>Registration Successful!</h3>

        <p>
          Welcome, <strong>{fields.name}</strong>! Your account has been
          created.
        </p>

        <button
          className="btn btn-primary"
          onClick={handleReset}
        >
          Register Another
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            value={fields.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />

          {errors.name && (
            <span className="error-msg">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={fields.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />

          {errors.email && (
            <span className="error-msg">{errors.email}</span>
          )}
        </div>

        {/* Password + Confirm Password */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Min. 8 characters"
              value={fields.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />

            {errors.password && (
              <span className="error-msg">
                {errors.password}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>

            <input
              id="confirm"
              name="confirm"
              type="password"
              placeholder="Repeat password"
              value={fields.confirm}
              onChange={handleChange}
              className={errors.confirm ? "input-error" : ""}
            />

            {errors.confirm && (
              <span className="error-msg">
                {errors.confirm}
              </span>
            )}
          </div>
        </div>

        {/* Age */}
        <div className="form-group form-group-sm">
          <label htmlFor="age">Age</label>

          <input
            id="age"
            name="age"
            type="number"
            placeholder="18–99"
            value={fields.age}
            onChange={handleChange}
            className={errors.age ? "input-error" : ""}
          />

          {errors.age && (
            <span className="error-msg">{errors.age}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary btn-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
