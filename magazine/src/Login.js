import React  from "react";
import './css/Login.css';
import { useHistory } from "react-router-dom";



const Login = () =>{
    const id_ref = React.useRef();
    const pw_ref = React.useRef();
    const history = useHistory();


    const  LoginFB =  async ()=>{
            history.push('/Main')

    }

    
    return(
        <>
        <h1 className="Login_title"> Ins magazine</h1>
        <div className="container">
            <h2 className="Login_subtitle"> 로그인</h2>
            <div>
                <div className="IDPW">
                    <input type="text" ref={id_ref} placeholder="ID ( 이메일 )" /> 
                    <input type="password" ref={pw_ref} placeholder="비밀번호"/> 
                </div>
                <span className="btn">
                    <button className="New" onClick={()=>{history.push("./Signup");}}>회원가입</button>
                    <button className="Log" onClick={LoginFB}>ID 로그인</button>  
                    {/* {IsLogin ? (history.push('/Main')):(history.push('/'))} */}
                </span>
            </div>
        </div>
        </>
    )
}

export default Login;