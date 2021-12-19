import { ADD_RESULT , APPEND_RESULT } from './action';

const initialState = {
  result: [],
  pageCount: 1,
  animeName: ''
};

function rootReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_RESULT:
         return {
         result: [...action.content],
         pageCount: 1,
         animeName: action.animeName
         };

      case APPEND_RESULT:
         return {
            ...state,
            result: [...state.result, ...action.content],
            pageCount: state.pageCount + 1
         };

      default:
         return state;
   }
}

export default rootReducer;