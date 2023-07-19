import CustomText from "../atoms/customText.atom";

const FooterTop = ()=>{
    return (
        
            <div className="row ">
                <div className="col-6">
                    <h4><strong><CustomText text={"Top companies choose Udemy Business to build in-demand career skills."} color="grey"/></strong></h4>
                </div>
                <div className="col-6 gap-3 justify-content-end d-flex"> 
                <img src="https://s.udemycdn.com/partner-logos/v4/apple-dark.svg" alt="" style={{height:"50px",}}/>
                <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" style={{height:"50px",}}/>
                <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="" style={{height:"50px",}}/>
                <img src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg" alt="" style={{height:"50px",}}/>
                <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="" style={{height:"50px",}}/></div>
                    

            </div>

        


    );
}

export default FooterTop;