import { createContext , useState , useEffect} from "react";


export const AuthContext = createContext();


 const AuthProvider = ({ children }) => {


    const [token, setToken] = useState(() => {
        return localStorage.getItem("token") || "";
      });
    
      useEffect(() => {
        if (token) {
          localStorage.setItem("token", token);
        } else {
          localStorage.removeItem("token");
        }
      }, [token]); 
  
    return (
      <AuthContext.Provider value={{ token , setToken}}>
        {children}
      </AuthContext.Provider>
    );
  };


  export default AuthProvider;