import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
     <ApprovalCard />
      <CommentDetail 
        author="sam" 
        text="2aaa" 
        time="rrr22" 
        avatar={faker.image.avatar()}/>
      <CommentDetail 
        author="amir" 
        text="aaaaaa" 
        time="2rr2" 
        avatar={faker.image.avatar()}/>
      <CommentDetail 
        author="om jamp" 
        text="aaaaaa"  
        time="2rr2" 
        avatar={faker.image.avatar()}/>
    </div>
    
    );
  };
  ReactDOM.render(<App />, document.querySelector('#root'));
  