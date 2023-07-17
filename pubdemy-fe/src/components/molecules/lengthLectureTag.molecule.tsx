import CustomText from "../atoms/customText.atom";

type LengthLectureProps = {
    length:number;
    lecture:number;  
}

const LengthLecture = ({length,lecture}:LengthLectureProps)=>{
    return (
        <div className="inline-flex">
            <CustomText text={`${length} total hours`} color="grey"/>
            <span style={{margin:'5px', color:'grey'}}>|</span>
            <CustomText text={`${lecture} lectures`} color="grey"/>

        </div>
    );
}

export default LengthLecture;