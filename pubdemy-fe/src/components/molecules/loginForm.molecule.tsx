import { useForm, SubmitHandler } from 'react-hook-form';
import FlatButton from '../atoms/flatButton.atom';

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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
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
      <FlatButton text={'Log In'} backgroundColor={'purple'} textColor={'white'} inheritParentWidth={true} onClick={function (): void {
        console.log("clicked");
      } } />
      </div>
    </form>
  );
};

export default LoginForm;