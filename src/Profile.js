import "./Profile.css";
import a from "./a.png"
const Profile = () => {
  const person = { firstName: "ahmed", lastName: "bouaziz", age: 25, Image:a}
  return (
    <div className="parent"style={{textAlign: 'center'}}>
      <h1>firstName : {person.firstName} </h1>
      <h2>lastName : {person.lastName} </h2>
      <h3>age : {person.age}</h3>
     <img src={person.Image}/>
    </div>
  );
};
export default Profile;
