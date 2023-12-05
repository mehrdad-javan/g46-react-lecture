import React from "react";
import { useForm } from "react-hook-form";

// npm install react-hook-form
// https://react-hook-form.com/form-builder

const HookFormDemo = () => {
    const initialData = {email: '', name:''};
   const {register, handleSubmit, formState: {errors}, reset } = useForm(initialData);

   const sendData = (data) => {
    console.log('data:', data);
    console.log('send data to api...');
   }

  return (
    <div className="container mt-4">
        <h2>React Hook Form</h2>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(sendData)}>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Enter email"
                {...register('email', {required: true, maxLength: 40})}
              />
              {errors.email && errors.email.type === 'required' && (<div className="invalid-feedback">Email is Required!</div>)}
              {errors.email && errors.email.type === 'maxLength' && (<div className="invalid-feedback">Max length Exceeded!</div>)}

            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Enter name"
                {...register('name', {required: true, maxLength: 40})}
              />
                {errors.name && errors.name.type === 'required' && (<div className="invalid-feedback">Name is Required!</div>)}
                {errors.name && errors.name.type === 'maxLength' && (<div className="invalid-feedback">Max length Exceeded!</div>)}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-danger" onClick={()=> reset(initialData)}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HookFormDemo;
