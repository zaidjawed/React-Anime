import React from 'react';
import { Col } from 'antd';

export default function SingleCard(props) {
   const {value} = props;
   return (
      <>
         <Col lg={{span:6}} md={{span: 8}} sm={{span: 12}} xs={{span: 24}} className="singleCard">
            <div className="singleCard__item">
               <img src={value.image_url} alt="" />
               <div>
                  <h3>{value.title}</h3>
               </div>
            </div>
         </Col>
      </>
   )
}
