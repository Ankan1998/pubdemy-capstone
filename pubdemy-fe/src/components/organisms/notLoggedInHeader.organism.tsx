import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginSignUp from "../molecules/loginSignup.molecule";

const NotLoggedInHeader = ()=>{
    return(
        <header>
          <div className="row align-items-center p-2 shadow-sm">
            <div className="col-1">
              <h4><strong>Pubdemy</strong></h4>
            </div>
            <div className="col-8">
              <div className="input-group rounded-pill">
                <input
                  type="text"
                  placeholder="Search anything"
                  className="form-control border-4 rounded-pill"
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="col-3">
              <LoginSignUp/>
            </div>
          </div>
      </header>
    );

}

export default NotLoggedInHeader;