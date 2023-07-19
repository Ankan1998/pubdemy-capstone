import CustomText from "../atoms/customText.atom";
import FeatureAtom from "../atoms/feature.atom";

const FeatureTopic = ()=>{
    return (
    <div className="container-fluid " style={{padding:"3%",paddingLeft:"5%", marginTop:"5%",backgroundColor:"#FAFFFE",color:"white"}}>
        <h3><strong><CustomText text={"Featured topics by category"}/></strong></h3>
        <div className="row">
            <div className="col">
                <strong><CustomText text="Development"/></strong>
                <FeatureAtom purpleTxt={"Python"} greyTxt={"454,656 students"}/>
                <FeatureAtom purpleTxt={"Python"} greyTxt={"454,656 students"}/>
                <FeatureAtom purpleTxt={"Python"} greyTxt={"454,656 students"}/>

            </div>
            <div className="col">
            <strong><CustomText text="Design"/></strong>
            <FeatureAtom purpleTxt={"Python"} greyTxt={"454,656 students"}/>
            <FeatureAtom purpleTxt={"SQL"} greyTxt={"44,656 students"}/>
            <FeatureAtom purpleTxt={"Drawing"} greyTxt={"254,656 students"}/>
            </div>
            <div className="col">
            <strong><CustomText text="Business"/></strong>
            <FeatureAtom purpleTxt={"Python"} greyTxt={"454,656 students"}/>
            <FeatureAtom purpleTxt={"Cybersecurity"} greyTxt={"454,656 students"}/>
            <FeatureAtom purpleTxt={"Python"} greyTxt={"454,656 students"}/>
            </div>
            <div className="col">
            <strong><CustomText text="IT and Software"/></strong>
            <FeatureAtom purpleTxt={"AWS"} greyTxt={"454,656 students"}/>
            <FeatureAtom purpleTxt={"Python"} greyTxt={"454,656 students"}/>
            <FeatureAtom purpleTxt={"PMP"} greyTxt={"454,656 students"}/>
            </div>
        </div>
        <div className="row">
            
            </div>

    </div>);
}

export default FeatureTopic;