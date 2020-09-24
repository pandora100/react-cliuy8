import React, { useState, useRef,useEffect } from 'react';
import styled from 'styled-components';
import "./style.css";

export default function App() {
    const content = useRef(null);
    
  const [list, setList] = useState(['Boo! 👻', 'Boo! 👻', 'Boo! 👻']);
  const [height, setHeight] = useState(0);
  const [hidden,setHidden]= useState(false);
  const toggleAccordion = ()=> {
    console.log(' toggleAccordion click');
     console.log(' toggleAccordion height:',height);
   
    setHeight(height === 0 ?  content.current.scrollHeight : 0);
    setHidden (!hidden);
  };

  useEffect(()=> {
    console.log(' useEffect height:',height);
    console.log(' useEffect content.current.scrollHeight:', content.current.scrollHeight);
    if (height > 0) {
      setHeight(content.current.scrollHeight);
       content.current.className ='aparecido';
    }else if(height == 0){
       content.current.className ='escondido';
    }
  }, [list,hidden]);

  const addToList = ()=> {
    setList([...list, 'Boo! 👻']);
  };

  return <>
  <div className="container" >
   <div className="izq" >
    <h2 onClick={toggleAccordion}>Click me</h2>
    <button onClick={addToList}>Add</button>
    <ul height={height} ref={content} >
      {list.map((item, index)=> <li key={index}>{item}</li>)}
     </ul>
     </div>
     <div className="der" >x
     </div>
     </div>
     
  </>;
;
};