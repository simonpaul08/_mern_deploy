import React, { useState } from "react";
import Donate from "../components/Donate";
import { Textbox, Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

const ContactUs = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      setErrors({ ...errors, "name": "Cannot be empty" })
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        setErrors({ ...errors, "name": "Only letters" })
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      setErrors({ ...errors, "email": "Cannot be empty" })
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        setErrors({ ...errors, "email": "Email is not valid" })
      }
    }

    return formIsValid;
  }

  const contactSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  const handleChange = (field, e) => {
    console.log('filed', fields)
    console.log('error', errors)
    fields[field] = e.target.value
    setFields(fields)
    // setFields(fi)
    console.log('state.fields:', fields)
  }

  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
        <h1 className="container text-2xl screen mx-auto px-5 font-bold">
          Contact
        </h1>
      </div>
      <div className="container flex flex-col justify-between md:flex-row 
        mx-auto text-lg px-5">
        <div className="w-full md:w-3/4 mt-5">
          <form
            name="contactform"
            className="contactform"
            onSubmit={e => contactSubmit(e)}
          >
              <Textbox
                    attributesInput={{
                      // Optional.
                      id: 'Name',
                      name: 'Name',
                      type: 'text',
                      placeholder: 'Place your name here ^-^',
                    }}
                    value={name} // Optional.[String].Default: "".
                    onChange={(name, e) => {
                      this.setState({ name });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                      name: 'Name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                      check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                      required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                    }}
                  />
            <fieldset>
              <input
                type="text"
                size="30"
                placeholder="Name"
                onChange={e => handleChange("name", e)}
                value={fields["name"]}
              />
              <span style={{ color: "red" }}>{errors["name"]}</span>
              <br />
              <input
                type="text"
                size="30"
                placeholder="Email"
                onChange={e => handleChange("email", e)}
                value={fields["email"]}
              />
              <span style={{ color: "red" }}>{errors["email"]}</span>
              <br />
              <input
                type="text"
                size="30"
                placeholder="Phone"
                onChange={e => handleChange("phone", e)}
                value={fields["phone"]}
              />
              <br />
              <input
                type="text"
                size="30"
                placeholder="Address"
                onChange={e => handleChange("address", e)}
                value={fields["address"]}
              />
              <br />
            </fieldset>
            <button type="submit">submit</button>
          </form>
        </div>
        <div className="w-full md:w-1/3 min-w-60 md:pl-5 lg:pl-10 mt-5">
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
