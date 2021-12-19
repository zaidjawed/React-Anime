// const URL = "https://api.jikan.moe/v3/search/anime?q=<query>&limit=16&page=<pagenu>";

const API = {
   url : "https://api.jikan.moe/v3/search/anime?",

   getByName: function(name){
      return `${this.url}q=${name}&limit=16&page=1`;
   },

   getByNameAndPage: function(name, page){
      return `${this.url}q=${name}&limit=16&page=${page}`;
   },

   getByNameAndPageAndLimit: function(name, page, limit){
      return `${this.url}q=${name}&limit=${limit}&page=${page}`;
   }
}

export default API;