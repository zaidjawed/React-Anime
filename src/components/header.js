import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addResult } from '../redux/action';
import API from '../API';

import { LoadingOutlined } from '@ant-design/icons'

function Header(props) {
   // const { result, pageCount, animeName, addResult, addPageCount } = props;
   const { addResult, pageCount } = props;
   const [searchWord, setSearchWord] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   function scrollToTop(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
   }

   function handleSubmit(e) {
      e.preventDefault();

      if(!searchWord) {
         alert('Name field cannot be empty');
         return;
      };

      scrollToTop();
      setIsLoading(true);

      const url = API.getByName(searchWord);

      fetch(url)
      .then((res) => {
         return res.json();
      })
      .then((res) => {
         addResult(res.results, searchWord);
         setIsLoading(false);
      })
      .catch((err) => {
         console.log(err);
         setIsLoading(false);
      })
   }

   const handleChange = function(e) {
      setSearchWord(e.target.value)
   }

   return (
      <div className="header">
         <div className="header__container">
            <form className="header__form" onSubmit={handleSubmit}>
               <input onChange={handleChange} type="text" placeholder="Name" />
               {isLoading ? <div className="header__loading"><LoadingOutlined/></div> : <input type="submit" value="Go" /> }
            </form>

            <div className="header__url">
               {!searchWord ? "" : (<p>Requesting : {API.getByNameAndPage(searchWord, pageCount)}<span></span></p>)}
            </div>
         </div>
      </div>
   )
}


const mapStateToProps = (state) => {
   return {
      result: state.result,
      pageCount: state.pageCount,
      animeName: state.animeName
   };
};

const mapDispatchToProps = {
   addResult: addResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
