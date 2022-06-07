import React, { useState } from "react";
import { auth, db ,storage} from './firebase';
import './css/Addpost.css';
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import { collection,addDoc,getDoc,doc } from "firebase/firestore";

const Addpost = () => {
    
    const fileInput = React.useRef();
    const Comment = React.useRef();


    // 이미지 미리보기 
    // const [imageSrc, setImageSrc] = useState('');
    // const encodeFileToBase64 = (fileBlob) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(fileBlob);
    //     return new Promise((resolve) => {   
    //       reader.onload = () => {
    //         setImageSrc(reader.result);
    //         resolve();
    //       };
    //     });  
    //   };

   

    // 이미지 미리보기
  



    





    // 이미지 주소 FB에 옮기는 함수
    const uploadFB = async(event) =>{
        console.log(event.target.files)
        const upload_file = await uploadBytes(
        ref(storage, `images/${event.target.files[0].name}`),
        event.target.files[0]
        )
        console.log(upload_file)        // ref 값을 가져옴
        const file_url = await getDownloadURL(upload_file.ref)
        console.log(file_url)  
        fileInput.current = {url:file_url}
        console.log(fileInput)
        const addfile = await addDoc(collection(db,'images'),{images:fileInput.current.url})
    }

 
    




    return (
        <div className="Acontainer">
          <h1> 게시글 작성</h1>

            <div>
            <div className="button3">
                <label htmlFor="chooseFile">
                <h2>👉 파일 업로드 👈</h2>
                </label>
                
                <div className="picture">
                
                </div>

                <input type="text" className="Comment" placeholder="코멘트를 달아주세요" ref={Comment}/>
                
                <button className="Addbtn"> 게시하기</button>

            </div>
            <input type="file" id="chooseFile" name="chooseFile" ref={fileInput} onChange={uploadFB}/>         
            </div> 
                </div> 
)

}

export default Addpost;