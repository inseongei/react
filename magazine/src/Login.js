import React  from "react";
import './css/Login.css';
import { useHistory } from "react-router-dom";
import { auth,db } from "./firebase";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {getDocs,where,query,collection} from 'firebase/firestore'


const Login = () =>{
    const id_ref = React.useRef();
    const pw_ref = React.useRef();
    const history = useHistory();

    // 회원가입했던 로그인정보로 로그인 확인
    const  LoginFB =  async ()=>{
    const user = await signInWithEmailAndPassword(auth,id_ref.current.value,pw_ref.current.value)
    console.log(user);  // UserCredentialImpl 의 정보가 뜨면 로그인 성공

    // 유저 정보 받아오기
    const user_docs = await getDocs(query(collection(db,'users'), where('user_id', '==', user.user.email)))
    console.log(user_docs)
    
    // 배열로 돌려서  우리가 볼수 있는 배열안에 유저 데이터 값으로 확인
    user_docs.forEach(user=>{console.log(user.data())})
}




// 로그인 이메일 빈칸 인지 검사
const login_check = () =>{
    if(id_ref.current.value.length == 0 ){
        alert('이메일 입력하세요')
        document.getElementById('email').focus()
    } else{
        pw_check()
    }
}

const pw_check = () =>{
    if(pw_ref.current.value.length == 0 ){
        alert('패스워드를 입력하세요')
        document.getElementById('pw').focus()
    } else{
        LoginFB()
    }
}

    return(
        <>
        <h1 className="Login_title"> Ins magazine</h1>
        <div className="container">
            <h2 className="Login_subtitle"> 로그인</h2>
            <div>
                <div className="IDPW">
                    <input type="text" ref={id_ref} placeholder="ID ( 이메일 )" id="email" /> 
                    <input type="password" ref={pw_ref} placeholder="비밀번호" id ="pw" /> 
                </div>
                <span className="btn">
                    <button className="New" onClick={()=>{history.push("./Signup");}}>회원가입</button>
                    <button className="Log" onClick={login_check} id="login">ID 로그인</button>  
                </span>
            </div>
        </div>
        </>
    )
}

export default Login;