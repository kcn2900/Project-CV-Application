import { useState } from "react";
import { List } from "./List";

const initialGeneralState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const initialEducationState = {
  schoolName: "",
  educationLevel: "",
  title: "",
  schoolStart: "",
  schoolEnd: "",
  achievements: ["GPA: "],
};

const initialExperienceState = {
  companyName: "",
  position: "",
  jobStart: "",
  jobEnd: "",
  description: [],
};

export function Form(prop) {
  const [general, setGeneral] = useState(initialGeneralState);
  const [education, setEducation] = useState(initialEducationState);
  const [experience, setExperience] = useState(initialExperienceState);

  function handleSubmit(e) {
    e.preventDefault();
    prop.onSubmit({
      general: general,
      education: education,
      experience: experience,
    });
  }

  function handleReset() {
    setGeneral(initialGeneralState);
    setEducation(initialEducationState);
    setExperience(initialExperienceState);
  }

  function handleGeneral(e, item) {
    setGeneral({
      ...general,
      [item]: e.target.value,
    });
  }

  function handleEducation(e, item) {
    setEducation({
      ...education,
      [item]: e.target.value,
    });
  }

  function handleExperience(e, item) {
    setExperience({
      ...experience,
      [item]: e.target.value,
    });
  }

  function handleListHelper(list) {
    handleList(list, "experience");
  }

  function handleList(list, section = "education") {
    if (section === "education") {
      setEducation({
        ...education,
        achievements: list,
      });
    } else {
      setExperience({
        ...experience,
        description: list,
      });
    }
  }

  function createLabelText(text) {
    const parts = text.split(/(?=[A-Z])/);
    const firstPart = parts[0][0].toUpperCase() + parts[0].slice(1);

    parts.splice(-1, 1, parts.slice(-1) + ": ");

    if (parts.length === 1) {
      return firstPart + ": ";
    }

    return firstPart + " " + parts.slice(1).join(" ");
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="general-form">
          {Object.keys(general).map((item) => {
            return (
              <div key={"general_" + item}>
                <label htmlFor={item}>{createLabelText(item)}</label>
                <input
                  id={item}
                  type={
                    item === "phone"
                      ? "tel"
                      : item === "email"
                      ? "email"
                      : "text"
                  }
                  value={general[item]}
                  onChange={(e) => handleGeneral(e, item)}
                />
              </div>
            );
          })}
        </div>

        <div className="education-form">
          {Object.keys(education).map((item) => {
            return (
              <div key={"education_" + item}>
                <label htmlFor={item}>{createLabelText(item)}</label>
                {item === "educationLevel" ? (
                  <select
                    id={item}
                    onChange={(e) => {
                      handleEducation(e, item);
                    }}
                    value={education[item]}
                  >
                    <option value="">Select Highest Level</option>
                    <option value="Highschool">Highschool</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="Doctorate">Doctorate</option>
                  </select>
                ) : item !== "achievements" ? (
                  <input
                    className={
                      item === "title" &&
                      ["Highschool", ""].indexOf(education["educationLevel"]) >=
                        0
                        ? "gray-out"
                        : ""
                    }
                    id={item}
                    type={
                      item.includes("Start") || item.includes("End")
                        ? "date"
                        : "text"
                    }
                    disabled={
                      item === "title" &&
                      ["Highschool", ""].indexOf(education["educationLevel"]) >=
                        0
                    }
                    value={
                      item === "title" &&
                      ["Highschool", ""].indexOf(education["educationLevel"]) >=
                        0
                        ? ""
                        : education[item]
                    }
                    onChange={(e) => handleEducation(e, item)}
                  />
                ) : (
                  <List
                    list={education[item]}
                    handler={handleList}
                    className="achievements-list"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="experience-form">
          {Object.keys(experience).map((item) => {
            return (
              <div key={"experience_" + item}>
                <label htmlFor={item}>{createLabelText(item)}</label>
                {item !== "description" ? (
                  <input
                    id={item}
                    type={
                      item.includes("Start") || item.includes("End")
                        ? "date"
                        : "text"
                    }
                    value={experience[item]}
                    onChange={(e) => handleExperience(e, item)}
                  />
                ) : (
                  <List
                    list={experience[item]}
                    handler={handleListHelper}
                    className="description-list"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
