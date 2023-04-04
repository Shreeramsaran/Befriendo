import {createContext} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id:"605b3dc77a3cf74918165c06",
        username:"jane",
        email:"jane@gmail.com",
        profilepicture:"person/1.jpeg",
        coverpicture:"",
        isAdmin:false,
        followers:[],
        following:[],
    },
    isFetching: false,
    error:false,
};

export const AuthContext = createContext{INITIAL_STATE};

export const AuthContextProvider = ({children})=>{
    const[state,dispatch] = useReducer(AuthContext,INITIAL_STATE);

    return(
        <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch}}>
        {children}
        </AuthContext.Provider>
    )
}