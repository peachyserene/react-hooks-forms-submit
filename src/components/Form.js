import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitedData, setSubmitedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.length > 0) {
      let formData = { firstName: firstName, lastName: lastName };
      let dataArray = [...submitedData, formData];
      setSubmitedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First Name is Required"]);
    }
  }

  let listOfSubmissions = submitedData.map((item, index) => {
    return (
      <div key={index}>
        {item.firstName}

        {item.lastName}
      </div>
    );
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 ? <p style={{ color: "red" }}>{errors}</p> : null}
      <h3>List of Submissions</h3>
      {listOfSubmissions}
    </>
  );
}

export default Form;
