
type InitialNameProp = {
    name:string
}

const InitialNameCircle = ({ name }:InitialNameProp) =>{
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <a href="#" className="d-inline-block text-decoration-none">
      <div className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center" style={{ width: "40px", height: "4 0px" }}>
        <span className="h6 m-0">{initials}</span>
      </div>
    </a>
  );
}

export default InitialNameCircle;