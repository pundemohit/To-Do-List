import React, { useState } from "react";
import './App.css';
import ToDoList from "./ToDoList";


const App = () => {

  const [inputList, setInputList]= useState("");
  const [Items, setItems]= useState([]);

  
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems,inputList];
    });
    setInputList("");
  };

  const deleteItems= (id)=>{
    console.log("aaaa");
    setItems((oldItems)=> {
      return oldItems.filter((arrElem, index)=>{
        return index !== id; 
      })
    })
};



  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems} > + </button>

          <ol>
            {/*<li>{inputList}</li> */}
            {
            Items.map((itemval, index) => {
              return <ToDoList  
              key={index} 
              text={itemval} 
              id={index}
              onSelect={deleteItems} />;
            })
            }
          </ol>

        </div>
      </div>
    </>
  );
};

export default App;






// import logo from './logo.svg';

// function App() {
//   return (
//    <div>
//     <h1>Hello World!</h1>
//    </div>
//   );
// }

// export default App;
