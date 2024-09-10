import { useState } from "react";

export const InputComp = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    setValue("");
  };
  return (
    <div>
      <div>
        <label htmlFor="inputLabel">inputLabel</label>
        <input type="text" name="" id="inputLabel" value={value} />
      </div>
      <div>
        <button onClick={handleSubmit}></button>
      </div>
    </div>
  );
};
