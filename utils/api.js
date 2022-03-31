
let URL = `https://api.reddit.com/r/pics`;


export const API_DETAIL = 'https://www.reddit.com';

export function getReddit (category, after = '') {
  return fetch(`${URL}/${category}.json?limit=10&after=${after}`);
}