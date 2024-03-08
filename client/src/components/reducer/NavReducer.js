export default function Navreducer(state="Login", action) {
    switch(action.type){
        case "page":
            return action.data
        default:
            return "Login"
    }
}

//store.dispatch({type:"page", data:"Register"})