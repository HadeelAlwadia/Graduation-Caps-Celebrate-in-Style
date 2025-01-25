

import { IoIosWarning } from "react-icons/io";
import { MdError } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';
import './toast.css'


type typeOfToast='success'|'warning'|'failure'
type location='top-left'|'top-right'|'botom-left'|'bottom-right'


interface Itoast{
    message:string,
    type:typeOfToast,
    location?:location,
    display?:string


}

const Toast = ({ message, type,location,display}:Itoast) => {
    const [isClose,setClose]= useState(false)
     const  handleCloseTost=()=>{setClose(true)}
     const iconMap = {
    success: <FaThumbsUp />,
    failure: <MdError />,
    warning: <IoIosWarning />,
  };


  const toastIcon = iconMap[type] || null;

  return (
    <div className={`toast toast--${type} toast-${location} `}  style={{display:`${isClose?'none':display}`}} role="alert" >


      {toastIcon && (
          <div className="icon icon--lg icon--thumb">{toastIcon}</div>
        )}
      <p>{message}</p>
        <span className="icon" onClick={handleCloseTost} >
          <IoMdCloseCircle />
        </span>
      
    </div>
  );
};

export default Toast;

