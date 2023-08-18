import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/Ai"
import { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore'
import {db} from "./config/firebase"



const App = () => {


const[contacts, setContacts] = useState([]);

useEffect(() =>{

const getContacts = async() =>{
  try {

    const contactsRef = collection(db, "contacts");
    const contactsSnapshot = await getDocs(contactsRef)
    console.log(contactsSnapshot)
  } catch (error) {
    console.log(error)
  }
}

getContacts();

}, [])







  return <div className=" max-w-[370px] px-4 mx-auto"><Navbar/>
  <div className="flex gap-2">
  <div className="flex relative items-center flex-grow">
    <FiSearch className="ml-1 text-white text-3xl absolute"/>
  <input type="text" className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9" />
  </div>
    <AiFillPlusCircle className="text-5xl cursor-pointer text-white "/>
  </div>
  </div>;
};

export default App;
