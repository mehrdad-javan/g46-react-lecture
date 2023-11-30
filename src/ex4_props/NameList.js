import React from "react";

const NameList = (props) => {
  // js codes

  const getLastName = (name) => {
    let lastName = name.split(" ")[1];
    return lastName;
  };

  return (
    <div className="container">
      <ui>
        {props.names.map((name, index) => {
          const liElement = (
            <li key={index}>
              <span className="text-info">{name}</span> - {getLastName(name)} - {getLastName(name).toUpperCase()}
            </li>
          );
          return liElement;
        })}
      </ui>
    </div>
  );
};

export default NameList;
