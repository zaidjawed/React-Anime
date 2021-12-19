import React from 'react'
import Header from './header'
import MainBody from './mainBody'
import '../sass/main.scss';
import { UpOutlined } from '@ant-design/icons';

export default function Spinny() {

   function scrollToTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
   }

   return (
      <div className="spinny">
         <div className="spinny__container">
            <Header />
            <MainBody />
            <div className="spinny__back-to-top">
               <UpOutlined onClick={scrollToTop} />
            </div>
         </div>
      </div>
   )
}

