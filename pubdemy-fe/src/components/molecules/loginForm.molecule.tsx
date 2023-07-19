import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SagaActions } from '../../saga/saga.actions';
import { LoginModel } from '../../models/login.model';
import { AppDispatch, AppState } from '../../redux/store/store';
import { setErrorx, unsetErrorx } from '../../redux/reducers/error.reducer';
import ErrorAtom from '../atoms/error.atom';
import { logOut } from '../../redux/reducers/user.reducer';
import ErrorPopup from '../organisms/error.organism';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();
  let dispatch = useDispatch<AppDispatch>();


  const onSubmit: SubmitHandler<FormData> = (data) => {
    const loginModel:LoginModel = new LoginModel()
    loginModel.email = data.email
    loginModel.password = data.password
    dispatch({
      type: SagaActions.LOGIN_ASYNC,
      payload: loginModel,
    });
  };
  const isError = useSelector((store: AppState) => store.reduxError.isError);
  const isAuthenticated = useSelector((store:AppState)=>store.user.isUserAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/courses'); 
    }
  }, [isAuthenticated]);


  return (
    <div>
          {isError && <ErrorPopup/>} 
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          className={`form-control rounded-0 ${errors.email ? 'is-invalid' : ''}`}
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
      <button className={`btn rounded-0 w-100 text-white`} style={{backgroundColor:"purple",fontWeight:"bold"}}>Login</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;