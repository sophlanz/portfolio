import React, { useState } from "react";
import ContactContainer from "@/components/contact";
import Navbar from "../components/nav";
export default function Contact(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    //verify credentials
    let isValidForm = handleValidation();
    if (isValidForm) {
      //send data to the sendgrid api
      await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((response) => {
          console.log(response);
          setStatusMessage("The message has been successfully sent!");
        })
        .catch((error) => {
          console.log(error);
          setStatusMessage("The message failed to send.");
          return;
        });
    }
  };
  const handleValidation = () => {
    type Errors = {
      name?: boolean;
      email?: boolean;
      message?: boolean;
    };
    let valid = true;
    let errors: Errors = {};
    //check if the fields are empty
    if (!name.length) {
      errors["name"] = true;
      valid = false;
    }
    if (!message.length) {
      errors["message"] = true;
      valid = false;
    }
    if (!email.length) {
      errors["email"] = true;
      valid = false;
    }
    if (valid === false) {
      let keys = Object.keys(errors);
      alert(`please fill-out the following:${keys}`);
    }
    return valid;
  };
  return (
    <>
      <Navbar />
      <ContactContainer
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setName={setName}
        setMessage={setMessage}
        statusMessage={statusMessage}
      />
    </>
  );
}
