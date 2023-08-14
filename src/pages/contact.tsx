import React, { useState } from "react";
import { ContactContainer } from "@/components/contact";
import { Navbar } from "../components/nav";
interface FormData {
  name: string;
  email: string;
  message: string;
  statusMessage: string;
}
export default function Contact(): JSX.Element {
  const handleSubmit = async (e: React.SyntheticEvent, form: FormData) => {
    e.preventDefault();
    //verify credentials
    let isValidForm = handleValidation(form);
    if (isValidForm) {
      //send data to the sendgrid api
      await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: form?.email,
          name: form?.name,
          message: form?.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((response) => {
          console.log(response);
          setFormData({
            ...formData,
            statusMessage: "The message has been successfully sent!",
          });
          return;
        })
        .catch((error) => {
          console.log(error);
          setFormData({
            ...formData,
            statusMessage: "The message has been successfully sent!",
          });
          return;
        });
    }
  };
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    statusMessage: "",
  });
  const handleValidation = (form?: FormData) => {
    console.log(formData);
    type Errors = {
      name?: boolean;
      email?: boolean;
      message?: boolean;
    };
    let valid = true;
    let errors: Errors = {};
    //check if the fields are empty
    if (!form?.name.length) {
      errors["name"] = true;
      valid = false;
    }
    if (!form?.message.length) {
      errors["message"] = true;
      valid = false;
    }
    if (!form?.email.length) {
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
        setFormData={setFormData}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
