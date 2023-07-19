import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import ErrorAtom from '../atoms/error.atom';
import ErrorPopup from '../organisms/error.organism';


type FormData = {
    name:string;
  email: string;
  password: string;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:5555/user/signup',
        data
      );
      if(response.status >=200 && response.status<300){
        navigate('/')
      }
    } catch (error) {
      setShowError(true)
    }
  };
  const handleCancelClick = () => {
    setShowError(false);
  };

  return (<div>
    
    {showError && <ErrorPopup/>}
    <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
        <input
          type="name"
          placeholder="Full Name"
          className={`form-control rounded-0 ${errors.name ? 'is-invalid' : ''} `}
          id="name"
          {...register('name', {
            required: 'Name is required',
          })}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          className={`form-control rounded-0 ${errors.email ? 'is-invalid' : ''}`}
          style={{"marginTop":"10px"}}
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Enter a valid email address',
            },
          })}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          className={`form-control rounded-0 ${errors.password ? 'is-invalid' : ''}`}
          style={{"marginTop":"10px"}}
          id="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>
      <div style={{ marginTop: '10px' }}>
      <button className={`btn rounded-0 w-100 text-white`} style={{backgroundColor:"purple",fontWeight:"bold"}}>Signup</button>
      </div>
    </form>
    </div>
  );
};

export default SignupForm;