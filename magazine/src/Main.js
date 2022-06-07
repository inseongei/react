import React from "react";
import './css/main.css';
import { FiLogOut,FiFilePlus } from "react-icons/fi";
import Card from './Card';
import { useHistory } from "react-router-dom";
import Leftcard from "./Leftcard";
import Rightcard from "./Rightcard";
import {loadCardFB} from "./redux/modules/Reducer"
import { useDispatch} from "react-redux"


const Main = () =>{
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(loadCardFB());
      })

    const logoOut = ()=>{
        history.push('./')
    }


    return(
        <>
        <div className="Mcontainer">
            <div className="nav">
            <h1>Ins magazine</h1>
            <span className="icon-first"onClick={()=>{history.push("/Addpost");}}><FiFilePlus/></span>
            <span className="icon-second" onClick={logoOut}><FiLogOut/></span>
            </div>
            {/* {IsLogin ? (history.push('/Main')):(history.push('/'))} */}
            <Card/>
            <Leftcard/>
            <Rightcard/>
        </div>
        </>
    )
}

export default Main;