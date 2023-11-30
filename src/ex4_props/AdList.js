import React from "react";
import Advertisement from "./Advertisement";

const AdList = (props) => {

  
    const handleButtonClick = (input) => {
        alert('Contact:' + input);
    }

  return (
    <div id="advertisements" class="row">
    {
        props.list.map(advertisement => (<Advertisement  advertisement={advertisement} buttonClickHandler={handleButtonClick} />))
    }
    </div>
  );
};

export default AdList;
