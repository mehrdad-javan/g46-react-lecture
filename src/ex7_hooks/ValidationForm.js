import React, { useState } from "react";

const ValidationForm = () => {

    /*const [email,setEmail] = useState(''); 
    const [name,setName] = useState(''); */

    const [person, setPerson] = useState({name: '', email:''});

    const [errorMessage, setErrorMessage] = useState({email: '', name:'' });

    const emailChangeHandler = (e) => {
        //setEmail(e.target.value);
        const _person = {...person}; //{name: 'mehrdad javan' , email: 'mehrdad.javan@lexicon.se'}
        _person.email = e.target.value; 
        setPerson(_person);
    }

    
    const nameChangeHandler = (e) => {
        //setName(e.target.value);
        const _person = {...person}; // {name: 'mehrdad javan' , email: 'test.test@test.se'}
        _person.name = e.target.value; 
        setPerson(_person);
    }

    const buttonClickHandler = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let error= {name:'', email:''};
        let isValid = true;

        if(!emailRegex.test(person.email)) {
            error.email = 'email is not valid!';
            isValid = false;
        } 
        if(person.name === ''){
            error.name = 'name is not valid!';
            isValid = false;
        }
        setErrorMessage(error);

        if(isValid){
            setErrorMessage({name:'', email:''});
            //const person = {'email': email, 'name': name};
            console.log(person);
            console.log('send data to backend...');
            // call post funtion from service class that is a JS class
        }

      
    }

    const buttonResetHandler = () => {
        //setEmail('');
        //setName('');
        setPerson({name:'', email:''});
        setErrorMessage({name:'', email:''});
    }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={person.email}
                onChange={emailChangeHandler}
              />
              {errorMessage && errorMessage.email && (<p className="text-danger">{errorMessage.email}</p>)}
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Enter name"
                name="name"
                value={person.name}
                onChange={nameChangeHandler}
              />
                {errorMessage && errorMessage.name && (<p className="text-danger">{errorMessage.name}</p>)}
            </div>
            <button type="button" className="btn btn-primary" onClick={buttonClickHandler} >Click</button>
            <button type="button" className="btn btn-danger" onClick={buttonResetHandler} >Reset</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ValidationForm;
