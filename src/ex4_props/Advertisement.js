import React from 'react';

const Advertisement = (props) => {

    const {advertisement, buttonClickHandler} = props;

    /*const showAlert = () => {
        alert(advertisement.contact);
    }*/

    return (
        <div class="card mb-4 col-md-4">
            <img class="card-img-top" src={advertisement.image} alt={advertisement.image} />
            <div class="card-body">
              <h5 class="card-title">{advertisement.title}</h5>
              <p class="card-text">{advertisement.description}</p>
              <p class="card-text">Contact: {advertisement.contact}</p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-info btn-block" onClick={()=> buttonClickHandler(advertisement.contact)}>Details</button>
            </div>
          </div>
    );
};

export default Advertisement;