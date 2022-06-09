import React from "react";
import './css/Card.css'
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";
import { AiFillDelete,AiTwotoneHeart,AiOutlinePlusCircle} from "react-icons/ai";
import { collection,addDoc,getDocs,doc,query,where,orderBy, deleteDoc } from "firebase/firestore";
import { auth, db ,storage} from './firebase';
import { useDispatch} from "react-redux"



const Card = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const Card = useSelector((state)=> state.Reducer.list);





    return(
        <>
        {Card && Card.map((list,index)=>{
        return(
        <div className="Card" key={index}>
            <div className="nav-Card">
                <p>닉네임</p>
                <span className="nav-Sec">
                    <span>2022-06-05</span>
                    <p className="Delete-icon"><AiFillDelete/></p>
                    <p className="Detail-icon" onClick={()=>{history.push("/Detailpage");}}><AiOutlinePlusCircle/></p>
                </span>
            </div>

            <div className="Picture">
            <img src={list.images} className="Card-one"/>
            </div>
            <div className="comment">
            {list.title}
            </div>

            <div className="footer">
            <span className="like">
                <p className="heart-icon"> <AiTwotoneHeart/></p>
                <p>좋아요: 1</p>
                
            </span>
            <span className="footer-2">
                <input className="card-comment" type="text" placeholder="댓글 달기"/>
                <button>등록</button>
            </span>
            </div>
        </div>
    )
    })}
        </>
    )

    
}

export default Card;