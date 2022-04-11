// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [score,setScore]=useState(76)
  const [wicket,setWicket]=useState(2)
  const [ball,setBall]=useState(50)

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
        Score:{score}
          <h1 className="scoreCount">
            {
              
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{ball}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{

      if(score>=101){
        return;
      }   
       setScore(score+1);
        }}>
          
          Add 1</button>
        <button className="addScore4"
        onClick={()=>{
          if(score>=101){
            return;
          }
          setScore(score+4);
        }}
        >Add 4</button>
        <button className="addScore6"
        onClick={()=>{
          if(score>=101){
            return;
          }
          setScore(score+6);
        }}
        >Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
        onClick={()=>{
          if(score>=101){
            return;
          }   
          if(wicket>=12){
            return;
          }
          setWicket(wicket+1);

        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
         onClick={()=>{
          if(score>=101){
            return;
          }   
          setBall(ball+.1);
        }}
        >Add 1</button>
      </div>
{
//  if (score>100) {
//   <h1>"India is Won"</h1>
   
//  }
}
    
     
    </div>
  );
}

export default App;;
