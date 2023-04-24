import { useState } from 'react';
import SideBar from '../components/SideBar';
import "./Stylesheet/UserProfileView.css";

const UserProfile= () => {

  const [name, setName] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [phone_Number, setPhone_Number] = useState("");



  const handleNameChange = (event) => {
    let nameInput = event.target.value;
    setName (nameInput);
  };
  const handleLast_NameChange = (event) => {
    let last_NameInput = event.target.value;
    setLast_Name(last_NameInput);
  };
  const handlePhone_NumberChange = (event) => {
    let phone_NumberInput = event.target.value;
    setPhone_Number(phone_NumberInput);
  };

   
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let newUserProfile = { name, last_Name,  phone_Number, };
    userProfileHandler.addUserProfile(newUserProfile);
    event.target.reset()
  };



  return (
    <>
    <SideBar/>
    
    <h1 className="text-center profile-headline">My Account </h1>
    
    <div className="container-form" >
      <form onSubmit={handleSubmit}  itemID="form1" className="bg-secondary">
      <div className="row"> 
        <div className="col-md-5 text-dark" > 
        <div className="profile">

          <img src="https://user-images.githubusercontent.com/117834362/233957884-8aa4ced0-6526-4d35-b74e-d31b6dcaa667.jpg" className="rounded-circle" style={{width: 175}}></img>
          <button className="btn btn-primary" type="button" style={{backgroundColor: "#CB5F5F", marginTop: 30}}>Subir Nueva Imagen</button>
        </div>
            
        </div>
         <div className="col-md-7">

          <div>
             <div className="div1 bg-white text-dark"> <p> NAME  </p> </div>
             <div className="div2 bg-white text-dark" ><p> LAST NAME</p></div>
             <div className="div3 bg-white text-dark" ><p>PHONE NUMBER</p></div>
          </div>
        <div className="d-grid gap-3">
        
          <button className="btn btn-primary" type="button" style={{backgroundColor: "#CB5F5F"}} >My Last Orders</button>
          <button className="btn btn-primary" type="button"  style={{backgroundColor: "#CB5F5F"}}>My Favorite Address</button>
          <button className="btn btn-primary" type="button"  style={{backgroundColor: "#CB5F5F"}}>Latest Payment Method</button>

        </div>   
      </div>   
      </div>   
      </form>
    </div>
  </>
  );
};
export default UserProfile;