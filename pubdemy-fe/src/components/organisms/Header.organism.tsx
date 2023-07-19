import { useDispatch, useSelector } from "react-redux";
import InitialsCartHeaderComponent from "../molecules/initialsCartHeaderComponent.molecule";
import LoginSignUpHeaderComponent from "../molecules/loginSignupHeaderComponent.molecule";
import { SagaActions } from "../../saga/saga.actions";
import { AppState } from "../../redux/store/store";
import { useSearchBarContext } from "../../context/searchBar.context";
import { Link } from "react-router-dom";

type HeaderProp = {
  isAuthenticated:boolean;
}

const Header = ({isAuthenticated}:HeaderProp)=>{
  const token = useSelector((store: AppState) => store.user.token);
  const {isEmpty,setSearchBarState} = useSearchBarContext();
  
  let dispatch = useDispatch();
    return(
        <header>
          <div className="row align-items-center p-2 shadow">
            <div className="col-1">
            <Link to={`/`} style={{ textDecoration: 'none', color:"black" }}>
              <h4 style={{marginLeft:"10%"}}><strong>Pubdemy</strong></h4>
              </Link>
            </div>
            {isAuthenticated?<div className="col-6">
              <div className="input-group rounded-pill">
                <input
                  type="text"
                  placeholder="Search anything"
                  className="form-control border-4 rounded-pill"
                  aria-label="Search"
                  onChange={(event)=>{
                    if(event.target.value.length===0){
                      setSearchBarState(true)
                      
                    }
                    if(event.target.value.length>0){
                      setSearchBarState(false)
                      dispatch({ type: SagaActions.FETCH_SEARCH_COURSES_ASYNC, payload: [token, event.target.value]})
                    }
                    
                  }}
                />
              </div>
            </div>:<div className="col-6"></div>}
            <div className="col-2"></div>
            <div className="col-3 ">{
              isAuthenticated?<InitialsCartHeaderComponent/>:<LoginSignUpHeaderComponent/> 
            }
            </div>
          </div>
      </header>
    );

}

export default Header;

// {
//   if(event.target.value.length===0){
//     setSearchBarState(true)
//   }
//   if(event.target.value.length>0){
//     console.log("not 0 before dispatch")
//     setSearchBarState(false)
//     dispatch({ type: SagaActions.FETCH_SEARCH_COURSES_ASYNC, payload: [token, event.target.value]})
//     console.log("not 0 after dispatch")
//   }
  
// }