import InitialsCartHeaderComponent from "../molecules/initialsCartHeaderComponent.molecule";
import LoginSignUpHeaderComponent from "../molecules/loginSignupHeaderComponent.molecule";

const NotLoggedInHeader = ()=>{
    return(
        <header>
          <div className="row align-items-center p-2 shadow">
            <div className="col-1">
              <h4 style={{marginLeft:"10%"}}><strong>Pubdemy</strong></h4>
            </div>
            <div className="col-6">
              <div className="input-group rounded-pill">
                <input
                  type="text"
                  placeholder="Search anything"
                  className="form-control border-4 rounded-pill"
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-3 ">
              <InitialsCartHeaderComponent/>
              {/* <LoginSignUpHeaderComponent/> */}
            </div>
          </div>
      </header>
    );

}

export default NotLoggedInHeader;