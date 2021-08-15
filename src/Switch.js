import React from "react";

const Switch = ({
  title = "Title",
  id = "",
  show = {},
  setShow = () => {},
}) => {
  return (
    <label className="Switch">
      <span className="Switch-title">{title}</span>
      <label className="Switch-label">
        <input
          type="checkbox"
          checked={show[id]}
          onChange={() => {
            if (show[id]) {
              let obj = {};
              setShow({ ...show, [id]: !show[id] });
              for (const prop in show) {
                obj = { ...obj, [prop]: false };
              }
              setShow(obj);
            } else {
              let obj = {};
              setShow({ ...show, [id]: !show[id] });
              for (const prop in show) {
                obj = { ...obj, [prop]: false };
              }
              setShow({ ...obj, [id]: !show[id] });
            }
          }}
        />
        <span className="Switch-slider Switch-round"></span>
      </label>
    </label>
  );
};

export default Switch;
