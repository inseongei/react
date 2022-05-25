import React from "react"
import { useHistory, useParams } from "react-router-dom";
import "./review.css"

const Review = (props) => {
    const history = useHistory();

    const params = useParams();

    const [rate, setRate] = React.useState(0);


    return(
        <div className="box">
            <h3><span className="days">{params.week}</span>평점 남기기</h3>

            <div className="one">
                {Array.from({length:5},(item,idx)=>{
                    return(
                        <div key={idx}
                         onClick={()=>{setRate(idx+1);}} 
                         className="circle"
                         style={{backgroundColor: rate < idx + 1? "#ddd" : "#97b7e8"}}></div>
                    )
                })}
            </div>

                <button className="btn-style" onClick={()=>{
                    history.goBack();
                }}>
                    평점 남기기
                </button>

        </div>
    )
};


export default Review;