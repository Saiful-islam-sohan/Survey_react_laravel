// import { Outlet } from "react-router-dom";

import { Navigate, Outlet } from "react-router-dom";
import {useStateContext} from '../context/ContextProvider'

const GuestLayout = () => {
  const {currentUser,userToken} = useStateContext()
  if(userToken)
  {
    return <Navigate to="/"></Navigate>
  }
    return (
        <>
      
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="w-auto h-10 mx-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
           
          </div>
           <Outlet></Outlet>
        </div>
      </>
    );
};

export default GuestLayout;