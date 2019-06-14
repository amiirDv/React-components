import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Warning</h4>
            Are you sure you want to do this?
          </div>
          </ApprovalCard>       

     <ApprovalCard>
      <CommentDetail 
        author="sam" 
        text="never say Hello" 
        time="20:00PM" 
        avatar={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
      <CommentDetail 
        author="amir" 
        text="need to get the users physical loaction" 
        time="2:AM" 
        avatar={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
      <CommentDetail 
        author="jamp" 
        text="Need to determine the current month"  
        time="12:30PM" 
        avatar={faker.image.avatar()}/>
        </ApprovalCard>       
        
    </div>
    
    );
  };
  ReactDOM.render(<App />, document.querySelector('#root'));
  