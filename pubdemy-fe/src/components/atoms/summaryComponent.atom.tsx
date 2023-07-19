
type SumaryComponentProp ={
    leftText:string,
    rightText:string,
    isStrong:boolean
}

function SummaryComponent({leftText,rightText,isStrong}:SumaryComponentProp) {
    let leftT = isStrong?<strong><p>{leftText}</p></strong>:<p>{leftText}</p>
    let rightT = isStrong?<strong><p>{rightText}</p></strong>:<p>{rightText}</p>
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {leftT}
        </div>
        <div className="col-6 text-end">
          {rightT}
        </div>
      </div>
    </div>
  );
}

export default SummaryComponent;