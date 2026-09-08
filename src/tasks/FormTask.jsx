import { useState } from "react";
import "./FormTask.css";

// ============================================================
//  TASK 5: Form Validation
// ============================================================
//
//  What you need to implement:
//  validate(fields) - A function that checks all fields and returns
//                     an errors object. If a field is invalid, add a
//                     key for it: { fieldName: "error message" }
//
//  Rules to enforce:
//  - name:     required, at least 2 characters
//  - email:    required, must contain "@" and "."
//  - password: required, at least 8 characters
//  - confirm:  required, must match fields.password exactly
//  - age:      required, must be a number between 18 and 99
//
//  Example return value when name is empty and passwords don't match:
//    { name: "Name is required.", confirm: "Passwords do not match." }
//
//  Hints:
//  - Check if a string is empty: value.trim() === ""
//  - Simple email check: value.includes("@") && value.includes(".")
//  - Convert age to number: Number(value) or parseInt(value)
//
//  Bonus challenges:
//  ★  Show a password strength indicator (weak / medium / strong)
//  ★★ Validate on every keystroke (not just on submit)
//  ★★★ Add a "terms and conditions" checkbox that is also required
// ============================================================

const emptyFields = { name: "", email: "", password: "", confirm: "", age: "" };

function validate(fields) {
  const errors = {};

  // TODO: Check each field and add to errors if invalid

  // name: required and at least 2 characters

  // email: required and must look like an email (contains @ and .)

  // password: required and at least 8 characters

  // confirm: required and must match fields.password

  // age: required and must be between 18 and 99

  return errors;
}

export default function FormTask() {
  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
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
        <p>Welcome, <strong>{fields.name}</strong>! Your account has been created.</p>
        <button className="btn btn-primary" onClick={handleReset}>
          Register Another
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} noValidate>
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
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

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
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

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
            {errors.password && <span className="error-msg">{errors.password}</span>}
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
            {errors.confirm && <span className="error-msg">{errors.confirm}</span>}
          </div>
        </div>

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
          {errors.age && <span className="error-msg">{errors.age}</span>}
        </div>

        <button type="submit" className="btn btn-primary btn-full">
          Create Account
        </button>
      </form>
    </div>
  );
}
