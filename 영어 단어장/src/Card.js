import React from "react"
import {useSelector} from "react-redux";
import "./Card.css"


const Card = (props) =>{
       
    const Card = useSelector((state)=> state.Reducer.list);
    // console.log(Card)   // 리스트값 잘 받았고
    return(
        <>
        {Card && Card.map((list,index)=>{  
            return (
                <div key={index} className="Box">
                <div className="CardBox">
                <h2>영단어 기록장</h2>
                <p>단어 : {list.Word}</p>
                <p>설명 : {list.Comment}</p>
                <p className="example">예시 : {list.Example}</p>
                </div> 
                </div>
            )
        })}
        </> 
    )
	};

export default Card;