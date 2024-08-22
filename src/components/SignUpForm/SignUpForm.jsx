import React, { useState } from "react";
import FormField from "./FormField/FormField";
import Button from "../common/Button/Button";

const SignUpForm = () => {
  // Define the initial variables for the form fields.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Define a function to handle the form submission event
  const handleSubmit = (e) => {
    e.preventDefault();
    //Log data to the console upon form submission.
    console.log("User Details:", { name, email });
  };

  // Render the sign up form component with form fields and a submit button
  // Uses the FormField to for the sign up form.
  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input-field"
        />
        <FormField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input-field"
        />
        <Button variant="primary">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
