export const ADD_RESULT = 'ADD_RESULT';
export const APPEND_RESULT = 'APPEND_RESULT';

export function addResult(content, animeName) {
  return { type: ADD_RESULT, content: content, animeName: animeName };
}

export function appendResult(content) {
   return { type: APPEND_RESULT, content: content };
}
