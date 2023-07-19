import CustomText from "./customText.atom";

type FeatureAtomProp={
    purpleTxt:string,
    greyTxt:string
}
const FeatureAtom = ({purpleTxt,greyTxt}:FeatureAtomProp)=>{
    return (
        <div className="col d-flex flex-column p-1">
            <strong><CustomText text={purpleTxt} color="purple" styles={{textDecoration:"underline"}}/></strong>
            <CustomText text={greyTxt} color="grey" />
        </div>
    );
}

export default FeatureAtom;