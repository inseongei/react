import React from "react"
import "./CardDetail.css"
import { useHistory,} from "react-router-dom";
import { useDispatch} from "react-redux"
import {addCardFB} from "./redux/modules/Reducer"


const CardDetail = (props) =>{
    // 사용하는 훅들
    const dispatch = useDispatch();
    const history = useHistory();



    // input 태그의 값
    const Word = React.useRef();
    const Comment = React.useRef();
    const Example = React.useRef();    

    
    // 카드 추가 함수
    const addCardList = () =>{
        dispatch(addCardFB({ Word:Word.current.value , Comment:Comment.current.value , Example:Example.current.value }))
        history.goBack()
    }


    // 리턴값들
	return (   		
    <div className="Container2">
        <h1> 영단어 등록하기</h1>

        <div className="sitepos">
        <h2> 단어 </h2>
        <input ref={Word} type = "text"/>
        </div>

        <div className="sitepos">
        <h2> 설명 </h2>
        <input ref={Comment} type = "text"/>
        </div>


        <div className="sitepos">
        <h2> 예시 </h2>
        <input ref={Example} type = "text"/>
        </div>

        <div className="sitepos">
        <button onClick={()=>{history.push('/')}}>뒤로가기</button>      
        <button onClick={addCardList}>추가하기</button>
        </div>

        

    </div>
    )};

    export default CardDetail;