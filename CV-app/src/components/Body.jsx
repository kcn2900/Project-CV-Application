export function Body(prop) {
  return (
    <div className="resume-body">
      <div className="body-education">
        <h2>Education</h2>
        <hr />
        <div className="education-top">
          <p>
            <b>{prop.education["schoolName"]}</b>
          </p>
          {prop.education["schoolStart"] !== "" &&
            prop.education["schoolEnd"] !== "" && (
              <p>
                {prop.education["schoolStart"] +
                  " - " +
                  prop.education["schoolEnd"]}
              </p>
            )}
        </div>

        <div className="education-bottom">
          {["Highschool", ""].indexOf(prop.education["educationLevel"]) < 0 && (
            <>
              <p>
                {prop.education["educationLevel"] +
                  "'s in " +
                  prop.education["title"]}
              </p>
            </>
          )}
          <ul>
            {prop.education["achievements"].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className="body-experience">
        <h2>Experience</h2>
        <hr />
        <div className="experience-top">
          <p>
            <b>{prop.experience["companyName"]}</b>
          </p>
          {prop.experience["jobStart"] !== "" &&
            prop.experience["jobEnd"] !== "" && (
              <p>
                {prop.experience["jobStart"] +
                  " - " +
                  prop.experience["jobEnd"]}
              </p>
            )}
        </div>
        <div className="experience-bottom">
          <p>{prop.experience["position"]}</p>
          <ul>
            {prop.experience["description"].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
