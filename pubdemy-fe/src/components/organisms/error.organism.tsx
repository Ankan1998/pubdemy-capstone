import React, { useState } from 'react';
import './error.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { unsetErrorx } from '../../redux/reducers/error.reducer';

type ErrorProp = {
    message?:string
}

const ErrorPopup = ({message}:ErrorProp) => {
    let dispatch = useDispatch()
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    dispatch(unsetErrorx());
    setDismissed(true);
  };

  if (dismissed) {
    return null;
  }

  return (
    <div className="error-popup">
      <div className="error-content">
        <div className="close-icon" onClick={handleDismiss}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <h5>{message?message:"Something Went Wrong"}</h5>
      </div>
    </div>
  );
};

export default ErrorPopup;
