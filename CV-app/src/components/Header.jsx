export function Header(prop) {
  return (
    <>
      <div className="resume-header">
        <div className="header-top">
          <h1>{prop.general["firstName"]}</h1>
          <h1>{prop.general["lastName"]}</h1>
        </div>
        <div className="header-bottom">
          <p>{prop.general["email"]}</p>
          {prop.general["email"] && prop.general["phone"] && <span>|</span>}
          <p>{prop.general["phone"]}</p>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}
