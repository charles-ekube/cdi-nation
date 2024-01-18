import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    invitedBy: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="myFormContainer" onSubmit={handleSubmit}>
      <div className="rowContainer">
        <div className="column">
          <label>
            Name:
            <input className='inputField' type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </div>
        <div className="column">
          <label>
            Email:
            <input className='inputField' type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
      </div>

      <div className="rowContainer">
        <div className="column">
          <label>
            Phone Number:
            <input className='inputField' type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </label>
        </div>
        <div className="column">
          <label>
            Who invited you?
            <input className='inputField' type="text" name="invitedBy" value={formData.invitedBy} onChange={handleChange} />
          </label>
        </div>
      </div>

      <label className="selectField">
        <select name="interest" value={formData.interest} onChange={handleChange}>
          <option value="question">What are you interested in?</option>
          <option value="option1">Option 3</option>
          <option value="option2">Option 2</option>
        </select>
      </label>

      <label className="textareaField">
        Your Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>

      <button type="submit" className="submitButton">Submit</button>
    </form>
  );
};

export default MyForm;
