import React, {useState} from 'react';
import SingleCard from './singleCard';
import { connect } from 'react-redux';
import { appendResult } from '../redux/action';
import { Row, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import API from '../API';

function MainBody(props) {
   const { result, pageCount, animeName, appendResult } = props;
   const [isLoading, setIsLoading]= useState(false);

   function handleClick() {
      const url = API.getByNameAndPage(animeName, pageCount+1);
      setIsLoading(true);

      fetch(url)
      .then((res) => {
         return res.json()
      })
      .then((res) => {
         appendResult(res.results, pageCount);
         setIsLoading(false);
      })
      .catch((err) => {
         console.log(err);
         setIsLoading(false);
      })
   }

   const html = result.map((val,i) => {
      return <SingleCard value={val} key={i} />
   })
  
   return (
      <div className="mainBody">
         <div className="mainBody__container">
            <Row>
               {html}
            </Row>

            <div>
               {result.length == 0 ? <p>Search Anime by Name</p> : ''}
               {result.length != 0 && !isLoading ? <Button onClick={handleClick}>Load More</Button> : ''}
               {isLoading ? <LoadingOutlined style={{fontSize: '50px'}} /> : ''}
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
   appendResult: appendResult
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);