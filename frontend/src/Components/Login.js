// Import React and useState hook from React library
import React, { useState } from 'react';

// Import CSS styles for the Login component
import './Login.css';

// FormValidationExample component
const FormValidationExample = () => {

  // Initialize state variables for form data and errors
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

// Handle changes in form input fields
  const handleChange = (e) => {
    const {name, value} = e.target;

     // Update the formData state with the new input value
    setFormData({
        ...formData, [name] : value
    })
  }
 // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}

    // Validate the email field
    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

     // Validate the password field
    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }

// Set the validation errors in the state
    setErrors(validationErrors)

    // If there are no validation errors, display a success alert and open a new page
    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")

        const newPageURL = 'http://localhost:3000/Page'; // Replace with the URL of the page you want to open
    window.open(newPageURL, '_self');
    }

  }

  return (

    // front end part returns

    <div className=" container-fluid">
          
       <div className="row  pb-4 pt-4">
         <div className="mx-auto col-10 col-8 ">
    <form className='box' onSubmit={handleSubmit}>
      <h3>LOGIN FORM</h3>

      <div class="form-group mb-4">
   <label class="form-label">E-mail</label>
        <input
        class="input1 form-control"
          type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.email && <span>{errors.email}</span>}  
      </div>
      <div  class="form-group mb-4">
        <label class="form-label">Password:</label>
        <input
        class="input1 form-control"
          type="password"
          name="password"
          placeholder='******'
          onChange={handleChange} 
        />
          {errors.password && <span>{errors.password}</span>}  
      </div>

      <div className='button1'><button className="btn btn-success btn-lg" type="submit">Submit</button></div>

      
    </form>
    </div>
    </div>

    </div>
  );
};

export default FormValidationExample;