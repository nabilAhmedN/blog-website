import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"


const Menu = () => {
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)

  const hanldeLogout = async()=>{
    try{
      const res = await axios.get("http://localhost:8080/api/auth/logout", { withCredentials: true })
      console.log(res)
      setUser(null)
    }
    catch(error){
      console.error(error.message);
    }
  }
  return (
    <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-4">
      {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Login</h3>}
      {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Register</h3>}
      {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Profile</h3>}
      {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Write</h3>}
      {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">My Blog</h3>}
      {user && <h3 onClick={hanldeLogout} className="text-white text-sm hover:text-gray-500 cursor-pointer">Log out</h3>}
    </div>
  )
}

export default Menu
