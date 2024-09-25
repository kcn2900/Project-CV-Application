export function List(prop) {
  const items = prop.list;

  function removeItem(index) {
    prop.handler(items.filter((a, i) => i !== index));
  }

  return (
    <div className={prop.className}>
      <button type="button" onClick={() => prop.handler([...items, ""])}>
        Add
      </button>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => {
                prop.handler(
                  items.map((temp) => {
                    if (temp === item) return e.target.value;
                    return temp;
                  })
                );
              }}
            />
            <button type="button" onClick={() => removeItem(index)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
