import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Show from './Show'; 
import Login from './Login';
import Error from './Error';

function Page({store}) {   
      if(store.getState().NavReducer == "Login")
        return(<Login store = {store} />)
      else if (store.getState().NavReducer == "Register")
        return(<Register />)
      else if (store.getState().NavReducer == "Show")
        if(localStorage.getItem("role") == 1)
          return(<Show />)
        else
          return(<Error />)
      else
        return(<Login />)
  }

  export default Page