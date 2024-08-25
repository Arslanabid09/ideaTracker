import { createContext,useContext,useEffect,useState } from "react";
import { ID } from "appwrite";
import { account } from "../Appwrite/Appwrite";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const useUser = ()=>{
    return useContext(UserContext)
}

export  const UserProvider = (props)=>{
    const [user,setUser] = useState(null);
    let navigate = useNavigate();

      // Email and password validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  const validateEmail = (email) => emailRegex.test(email);
  const validatePassword = (password) => passwordRegex.test(password);

    const Login = async(email,password)=>{
        if (!validateEmail(email)) {
            console.error("Invalid email format");
            return;
          }
      
          if (!validatePassword(password)) {
            console.error("Password must be at least 8 characters long and include at least one letter and one number");
            return;
          }
      
          try {
            let loggedIn = await account.createEmailPasswordSession(email, password);
            setUser(loggedIn);
            if(loggedIn){
                navigate('/home')
            }
          } catch (error) {
            console.error("Login failed:", error);
            
        }
    }
    const LogOut = async()=>{
       let logout =   await account.deleteSession('current');
        setUser(null);
        if(logout){
            navigate('/')
        }
    }
    const SignUp = async(name,email,password)=>{
        if (!validateEmail(email)) {
            console.error("Invalid email format");
            return;
          }
      
          if (!validatePassword(password)) {
            console.error("Password must be at least 8 characters long and include at least one letter and one number");
            return;
          }
      
          try {
            let createUser = await account.create(ID.unique(), email, password, name);
            await Login(email, password); // Log in the user after successful signup
            if(createUser){
                navigate('/home')
            }
          } catch (error) {
            console.error("Signup failed:", error);
            // Handle signup error
          }
    }
    const init = async()=>{
        try {
            const loggedIn = await account.get();
            setUser(loggedIn);
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        init();
    },[])
    return (
        <UserContext.Provider value={{current: user,LogOut,Login,SignUp}}>
            {props.children}
        </UserContext.Provider>
    )
}