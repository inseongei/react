import React from "react"
import './style.css'; 
import { useHistory } from "react-router-dom";

const Score = (props) => {

    const history = useHistory();

// 화면에 찍어줄 날짜 객체
const week = {
    0: "일요일",
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
};

// 평점 변수      
let score_sum = 0;


// 요일의 점수를 랜덤값으로 추가
const week_score = Object.values(week).map((w,idx)=>{
    const random =
      Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
      Math.ceil(1);
      score_sum += random;
      return {
          day : w,
          score : random,
      };
});


const score_avg = (score_sum / week_score.length).toFixed(1)        // toFixed(1)는 ex) 1.23456  --> '1.2' 
const [avg,setAvg] = React.useState(score_avg)      // avg에는 state 값이 setAvg는 수정하는 함수 (score_avg(평균 점수값)) 초기값이 된다


/* 화면구성 시작 */


    return (
        <>
        <div>
        <div className="container">
            <h3>내 일주일은 ?</h3>


            {week_score.map((w,idx)=>{          // 일~월요일까지의 요일을 찍어준다
                return (
                   <div className="sub-title"
                    key={`week${idx}`}>
                <p className="daystyle">{w.day}</p>

                    
                {Array.from({length:5},(item,idx)=>{        // 5개의 동그라미를 찍어준다
                    return(
                        <div className="circle"
                        key={idx}
                        style={{backgroundColor: w.score < idx ? "#ddd" : "#97b7e8"}}>
                        </div>
                    )
                })}

                
                <div className="tryangle" onClick={()=>{history.push(`/Review/${w.day}`)}}></div>
                </div>
                )
                 })}

                <div className="font-style">
                        평균 평점 {avg}
                        <div className="avg_font" onClick={()=>{
                            setAvg(parseInt(0).toFixed(1))
                        }}>
                            <p style={{ color: "white", fontSize: "18px" }}>Reset</p>

                        </div>
                        </div>
        </div>
        </div>
        </> 
    )
};


export default Score;   