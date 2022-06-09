// Card.js  [버킷 리스트 모듈 만드는 방법] 모듈 안에 있는 리듀서를 묶어서 스토어를 만드는 것
import {db,storage} from '../../firebase'
import {collection,getDocs,addDoc, getDoc} from "firebase/firestore";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"

// Actions      --> 저장변수 = 프로젝트명 / 모듈 명 (리듀서 명) / 액션 
const LOAD = 'Card/LOAD';
const CREATE = 'Card/CREATE';


const initialState = [{list: 'key'}];



// Action Creators      --> 액션 생성 함수
export function loadCard(CardData){
    return{type:LOAD,CardData}
}

export function createCard(title){
    return{type:CREATE,title}
}








// middleware --> 미들웨어 
export const loadCardFB = () => {
    return async function (dispatch) {
        const Card_Data = await getDocs(collection(db,"images"))
        let Card_list = [];
        Card_Data.forEach((Card)=>{
            Card_list.unshift({...Card.data()});
            // console.log(Card_list)
        });
        // 액션 일으키기 : 스토어 안에 있는 데이터 수정 가능
        dispatch(loadCard(Card_list));
    }
}


export const updateCardFB = (Card) =>{
    return function (dispatch) {

    }
}


//  유저 정보와 텍스트 위치 
export const addCardFB = (Card) =>{
    return async function (dispatch) {
      const docRef = await addDoc(collection(db, "images"),Card);
      const CardDB = {id:docRef.id, ...Card}  // ok
      console.log(CardDB)
      dispatch(createCard(CardDB.title));
    }
}






// Reducer
export default function reducer(state = initialState, action = {}){     // state의 기본값을 지정
    switch (action.type){
        case 'Card/LOAD' : {
            return {list: action.CardData};
        }
        case 'Card/CREATE' : {
            const new_AddCard = [ {title: action.title}, ...state.list];
            return { list : new_AddCard  }
        }
        default: return state;
    }
}
