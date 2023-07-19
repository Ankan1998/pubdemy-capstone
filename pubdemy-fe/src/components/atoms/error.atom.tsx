type ErrorProp = {
    onHandleClick:any
}
const ErrorAtom = ({onHandleClick}:ErrorProp)=>{
    return (  <div className="error-popup p-3">
    <p style={{color:'red'}}>An error occurred. Would you like to retry?</p>
    <button className="btn btn-danger"onClick={onHandleClick}>Cancel</button>
  </div>);
}

export default ErrorAtom;