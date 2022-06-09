import React from "react";
import './css/Signup.css';
import { auth, db } from './firebase';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { collection,addDoc } from "firebase/firestore";



const Signup = () => {
    
    // input 태그 Ref로 요소 잡음   
    const id_ref = React.useRef();
    const pw_ref = React.useRef();
    const name_ref = React.useRef();

    
    //======== 회원가입 정보 FB에 저장함수 =========
    const SignupFB = async() =>{
        const user = await createUserWithEmailAndPassword(auth,id_ref.current.value,pw_ref.current.value,name_ref.current.value)
        const user_doc = await addDoc(collection(db,'users'),{user_id: user.user.email, name : name_ref.current.value,})
        console.log(user_doc) 
        alert('축하합니다 로그인에 성공했습니다')
    }



// --------이메일 패스워드 닉네임 유효성 검사--------

    // 이메일 형식 체크 ( '@'의 유무 )
    const checkEmail = () =>{ 
    const id_arr = Array.from(id_ref.current.value)  
        if(!id_arr.includes('@')){
            alert('이메일형식에 맞게 작성해주세요')
            document.getElementById('id').focus()
        } else{
            checkPw()
        }
    }
    // 비밀번호 형식 체크 ( 8자리 이상의 비밀번호 )
    const checkPw = () =>{
        if(pw_ref.current.value.length < 8){
            alert('비밀번호를 8자리 이상으로 만들어주세요')
            document.getElementById('pw').focus()
        } else{
            checknickname()
        }
    }
    // 닉네임 형식 체크 (2자리 이상의 닉네임)
    const checknickname = () =>{
        if(name_ref.current.value.length < 2){
            alert('2글자이상의 닉네임을 정해주세요')
            document.getElementById('name').focus()
        } else{
            SignupFB()
        }
}



// 화면 뷰 
    return(
        <>
        <h1 className="title"> Ins magazine</h1>
        <div className="container">
        <h2 className="subtitle"> 회원가입 신청서</h2>
        <div className="sec-box">
        <div>
            <p className="sign-p">아이디</p>
            <input className="Sign" ref={id_ref} id="id"/>
        </div>

        <div>
            <p className="sign-p">비밀번호</p>
            <input type="password" className="Sign" ref={pw_ref} id ="pw"/>
        </div>

        {/* <div>
            <p className="sign-p">비밀번호 확인</p>
            <input type="password" className="Sign"/>
        </div> */}

        <div>
            <p className="sign-p" id ="name">닉네임</p>
            <input className="Sign" ref={name_ref}/>
        </div>
        <button className="btn2" onClick={checkEmail}>회원가입 하기</button>
        </div>
        
        </div>
        </>
    )
}

export default Signup;