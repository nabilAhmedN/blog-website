// import { createContext, useState } from "react";

// export const UserContext = createContext({});

// export const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    getUser()

  },[])

  const getUser=async()=>{
    try{
      const res=await axios.get("http://localhost:8080/api/auth/refetch",{withCredentials:true})
      setUser(res.data)

    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
