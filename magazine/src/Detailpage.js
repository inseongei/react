import React from "react";
import { useDispatch} from "react-redux"
import './css/Detailpage.css'
import {AiTwotoneHeart} from "react-icons/ai";
import {db} from './firebase';
import { doc } from "firebase/firestore";
const Detailpage = () =>{


    const updateCardFB = (Card_id) =>{
        return async function (dispatch,getState){
            const docRef = doc(db,"images",Card_id)
        }
    }







    return(
            <div className="D-container">
                <h1>닉네임 님의 게시글<span className="D-heart-icon"></span></h1>
                <div className="D-Picture">
                <input type = "file"/>
                </div>
                <div className="D-comment">
                   <input type = "text"/> 
                   <button onClick={()=>{

                   }}> 완료하기 </button>
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
}

export default Detailpage;