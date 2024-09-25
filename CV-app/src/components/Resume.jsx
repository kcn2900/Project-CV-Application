import { Form } from "./Form.jsx";
import { useState } from "react";
import { Header } from "./Header.jsx";
import { Body } from "./Body.jsx";
import "../styles/App.css";

export function Resume() {
  const [info, setInfo] = useState({});
  const [isEdit, setIsEdit] = useState(true);

  function handleForm(formData) {
    // alert(JSON.stringify(formData.general));
    setInfo(formData);
    setIsEdit(false);
  }

  function handleEdit() {
    setIsEdit(true);
  }

  return (
    <>
      <div className={isEdit ? 'form-show' : 'form-hidden'}>
        <Form onSubmit={handleForm} />
      </div>

      {!isEdit && (
        <>
          <button className="edit-button" onClick={handleEdit}>Edit</button>
          <Header general={info.general} />
          <Body education={info.education} experience={info.experience} />
        </>
      )}
    </>
  );
}
