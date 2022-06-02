// bucket.js  [버킷 리스트 모듈 만드는 방법] 모듈 안에 있는 리듀서를 묶어서 스토어를 만드는 것
import {db} from '../../firebase'
import {
    collection,
    getDocs,
    addDoc
  } from "firebase/firestore";


// Actions      --> 저장변수 = 프로젝트명 / 모듈 명 (리듀서 명) / 액션 
const LOAD = 'Card/LOAD';
const CREATE = 'Card/CREATE';
const initialState = { list: [ {Word:"apple",Comment:"사과",Example:"apple is yummy"} ] }


// Action Creators      --> 액션 생성 함수
export function loadCard(CardData){
    return{type:LOAD,CardData}
}

export function createCard(id,Word,Comment,Example){
    return{type:CREATE,id,Word,Comment,Example}
}


// middleware --> 미들웨어 
export const loadCardFB = () => {
    return async function (dispatch) {
        const Card_Data = await getDocs(collection(db,"Card"))
        let Card_list = [];
        Card_Data.forEach((Card)=>{
            Card_list.push({id:Card.id,...Card.data()});
        });
        dispatch(loadCard(Card_list));
    }
}

export const addCardFB = (Card) =>{
    return async function (dispatch) {
      const docRef = await addDoc(collection(db, "Card"),Card);
      const CardDB = {id:docRef.id,...Card}  // ok
      
      dispatch(createCard(CardDB.id,CardDB.Word,CardDB.Comment,CardDB.Example));
    }
}




// Reducer
export default function reducer(state = initialState, action = {}){     // state의 기본값을 지정
    switch (action.type){
        case 'Card/CREATE' : {
            const new_AddCard = [  ...state.list, {id: action.id, Word: action.Word,Comment: action.Comment,Example: action.Example}   ];
            return { list : new_AddCard  }
        }
        case 'Card/LOAD' : {
            return {list: action.CardData};
        }
        default: return state;
    }
}

