import React, { useEffect, useState } from "react";
import { auth, db ,storage} from './firebase';
import './css/Addpost.css';
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import { collection,addDoc,getDocs,doc,query,where,orderBy, deleteDoc } from "firebase/firestore";
import { useHistory,} from "react-router-dom";
import { useDispatch} from "react-redux"
import {signInWithEmailAndPassword} from 'firebase/auth'
import {addCardFB} from "./redux/modules/Reducer"
import { async } from "@firebase/util";

const Addpost = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const fileInput = React.useRef();
    const title = React.useRef();
    const image_center = React.useRef();
    const image_left = React.useRef();
    const image_right = React.useRef();

    const [imageSrc, setImageSrc] = React.useState('');




        const uploadFB = async() =>{

        
            // fileInput.current.files 파일 접근할 때
            console.log(fileInput.current.files)
            const upload_file = await uploadBytes(ref(storage, `images/${fileInput.current.files[0].name}`),
            fileInput.current.files[0]
            )
            console.log(upload_file)        // ref 값을 가져옴
    
            const file_url = await getDownloadURL(upload_file.ref)
            console.log(file_url)  
            fileInput.current = {url:file_url}
            console.log(fileInput)

            const addfile = await addDoc(collection(db,'images'),{images:fileInput.current.url,title:title.current.value, })

            const q = query(collection(db, 'images'),orderBy("title"),);
            const dataSnapShot = await getDocs(q)
            const data = dataSnapShot.docs.map(doc => ({...doc.data(),id: doc.id}));
            console.log(data)
            alert('성공적으로 게시하였습니다 !!')
            history.goBack();
    }






    // 이미지 미리보기 
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
        reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
        };
        });
    };






    return (
        <div className="Acontainer">
          <h1> 게시글 작성</h1>

            <div>
            <div className="button3">
                <label htmlFor="chooseFile">
                <h2>👉 파일 업로드 👈</h2>
                </label>
                
                <div className="picture">
                {imageSrc && <img src={imageSrc} alt="preview-img"  className="img-opt"/>}
                
                </div>
                <input type="file" id="chooseFile" name="chooseFile" ref={fileInput} onChange={(e) => {encodeFileToBase64(e.target.files[0]);}}/>
                <input type="text" className="Comment" placeholder="제목를 달아주세요" ref={title} id ="title" />


                <div className="radio">
                <input type="radio" ref ={image_center} value= "1"/> 이미지 가운데
                <input type="radio" ref ={image_left} value= "2"/>이미지 왼쪽
                <input type="radio" ref ={image_right} value= "3"/>이미지 오른쪽
                </div>

 

                

                <button className="Addbtn" onClick={uploadFB} > 게시하기</button>

            </div>     
            </div> 
                </div> 
)

}

export default Addpost;