import FooterBottom from "../molecules/footerBottom.molecule";
import FooterTop from "../molecules/footerTop.molecule";

const Footer =()=>{
    return (<div className="container-fluid " style={{padding:"3%",backgroundColor:"black",color:"white"}}>
    <FooterTop/>
    <FooterBottom/>
    </div>
    );
}

export default Footer;