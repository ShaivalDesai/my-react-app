// import { sculptureList } from './data.js';
// import { useState } from 'react';
// export default function Gallery() {
//   // let index = 0;
//   const[index,setIndex]=useState(0);

//   function handleClick() {
//     // index = index + 1;
//     setIndex(index+1);
//   }

//   let sculpture = sculptureList[index];
//   // console.log("sculpture" +sculpture)
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }
// import { useState } from "react";
// import { sculptureList } from "./data.js";

// export default function Galy() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return;
//   <>
//     <button onClick={handleNextClick}>Next</button>
//     <h2>
//       <i>{sculpture.name} </i>
//       by {sculpture.artist}
//     </h2>
//     <h3>
//       ({index + 1} of {sculptureList.length})
//     </h3>
//     <button onClick={handleMoreClick}>
//       {showMore ? "Hide" : "Show"} details
//     </button>
//     {showMore && <p>{sculpture.description}</p>}
//     <img src={sculpture.url} alt={sculpture.alt} />
//   </>;
// }

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// export default function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         // type="button"
//         onClick={() => setColor("blue")}
//       >
//         Blue
//       </button>
//       <button type="button" onClick={() => setColor("red")}>
//         Red
//       </button>
//       <button type="button" onClick={() => setColor("pink")}>
//         Pink
//       </button>
//       <button type="button" onClick={() => setColor("green")}>
//         Green
//       </button>
//     </>
//   );
// }

// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   // const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   console.log(hasPrev)
//   let hasNext = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if (hasPrev) {
//       setIndex(index - 1);
//     }
//   }

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     }
//   }

//   // function handleMoreClick() {
//   //   setShowMore(!showMore);
//   // }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button
//         onClick={handlePrevClick}
//         disabled={!hasPrev}
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleNextClick}
//         disabled={!hasNext}
//       >
//         Next
//       </button>
//       {/* <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt} */}
//       {/* /> */}
//     </>
//   );
// }
// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery(){

//   const [data,setData] = useState(0);

//   let prev = data>0;
//   let next = data<sculptureList.length-1

//   function nextData(params) {
//     if(prev){
//       setData(data-1);
//     }
//   }
//   let s = sculptureList[data];
//   return(
//     <>
//       <button onClick={nextData}>next</button>
//     </>
//   )
// }

// import Clock from "./clock";
// export default function Time()

// {
//   return(
//     <>
//     <Clock/>
//     </>
//   )
// }

// import { useState } from "react";

// export default function Form(){

// const[isSent,setIsSent]=useState(false);
// const[message,setMessage]=useState("hii");

// if(isSent)
// {
//   return <h1>Your message is sent!</h1>
// }
//   return(
//     <>

//     </>
//   )
// }

// import { useState } from "react";

// export default function Counter() {
//   const [number, setNumber] = useState(0);
//   return(
//   <>
//     <h1>{number}</h1>
//     <button
//       onClick={() => {
//         setNumber(number + 2);
//         // setNumber(number + 1);
//       }}
//     >
//       Click
//     </button>
//   </>
//   )
// }

// import { useState } from "react";

// export default function Form() {
//   const [to, setTo] = useState("Alice");
//   const [message, setMessage] = useState("Hello");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`your ${message} is to ${to} `);
//     }, 3000);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           To:
//           <select onChange={(e) => setTo(e.target.value)}>
//             <option value="Alice">Alice</option>
//             <option value="Bob">Bob</option>
//           </select>
//           <textarea
//             placeholder="Alice"
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>
//           <button type="submit">Send</button>
//         </label>
//       </form>
//     </>
//   );
// }

// import { useState } from "react";
// export default function Counter()
// {
//   const [number,setNumber]=useState(0);
//   return(
//     <>
//    <h1>{number}</h1>
//    <button onClick={()=>
//   {
//     setNumber(n=>n+1);
//     setNumber(n=>n+1);
//     setNumber(n=>n+1);

//   }}>Click</button>
//     </>
//   )
// }

// import { useState } from "react";

// export default function Form()
// {
//   const[person,setPerson]=useState({
//     firstName:"Shaival",
//     lastName:"Desai",
//     email:"shaival123@gmail.com"
//   });

//   function addfirstName(e){
//   setPerson({
//     ...person,
//     firstName:e.target.value
//   });
// }

// function addlastName(e)
// {
//   setPerson({
//     ...person,
//     lastName:e.target.value
//   })
// }

// function addEmail(e)
// {
//   setPerson({
//     ...person,
//     email:e.target.value
//   })
// }

// return
// (
//   <>
//    <label>
//         First name:
//         <input

//           onChange={addfirstName}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={person.lastName}
//           onChange={addlastName}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={person.email}
//           onChange={addEmail}
//         />
//       </label>
//       <p>
//         {person.firstName}{' '}
//         {person.lastName}{' '}
//         ({person.email})
//       </p>

//   </>
// )
// }

// import { useState } from 'react';

// let initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artists.map(artist => (
//           <li>
//             {artist.name}
//             <button onClick={() => {
//               setArtists(
//                 artists.filter(a =>
//                   a.id !== artist.id
//                 )
//               );
//             }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// async function handleFormSubmit(e) {
//   e.preventDefault();
//   disable(textarea);
//   disable(button);
//   show(loadingMessage);
//   hide(errorMessage);
//   try {
//     await submitForm(textarea.value);
//     show(successMessage);
//     hide(form);
//   } catch (err) {
//     show(errorMessage);
//     errorMessage.textContent = err.message;
//   } finally {
//     hide(loadingMessage);
//     enable(textarea);
//     enable(button);
//   }
// }

// function handleTextareaChange() {
//   if (textarea.value.length === 0) {
//     disable(button);
//   } else {
//     enable(button);
//   }
// }

// function hide(el) {
//   el.style.display = 'none';
// }

// function show(el) {
//   el.style.display = '';
// }

// function enable(el) {
//   el.disabled = false;
// }

// function disable(el) {
//   el.disabled = true;
// }

// function submitForm(answer) {
//   // Pretend it's hitting the network.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (answer.toLowerCase() === 'istanbul') {
//         resolve();
//       } else {
//         reject(new Error('Good guess but a wrong answer. Try again!'));
//       }
//     }, 1500);
//   });
// }

// let form = document.getElementById('form');
// let textarea = document.getElementById('textarea');
// let button = document.getElementById('button');
// let loadingMessage = document.getElementById('loading');
// let errorMessage = document.getElementById('error');
// let successMessage = document.getElementById('success');
// form.onsubmit = handleFormSubmit;
// textarea.oninput = handleTextareaChange;

// import { useState } from 'react';

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   )
// }

// import React from "react";
// import { useState } from "react";

// export default function FeedbackForm()
// {
// const [text,setText]=useState('');
// const [isSending,setIsSending]=useState(false);
// const [sent,isSent]=useState(false);

// async function handleSubmit(e){
//     e.preventDefault();
//     setIsSending(true);
//     await
// }

//   return(

//     <>

//     </>
//   )
// }

// import { useState } from "react";

// export default function Form()
// {
//   const[firstName,setFirstName]=useState('');
//   const[lastName,setLastName]=useState('');
//   const[fullName,setFullName]=useState('');

//   function handleFirst(e)
//   {
//     setFirstName(e.target.value);
//     setFullName(e.target.value+''+lastName);
//   }

//   function handleLast(e)
//   {
//     setLastName(e.target.value);
//     setFullName(firstName+''+e.target.value);
//   }

//   return(
//     <>

//     <h1>Check In!</h1>
// <div>
//     <label>
//       Fisrt Name:{''}
//       <input
//       value={firstName}
// onChange={handleFirst}
//       >
//       </input>
//     </label>
// </div>

// <div>
//     <label>
//       Last Name:{''}
//       <input

//       value={lastName}
//       onChange={handleLast}>

//       </input>
//     </label>
//     </div>

//     <p>Your Result is:{firstName}    {lastName}   </p>
//     </>

//   )

// }

// import { useState } from "react";

// export default function Ace() {

//   const[isActive,setIsActive]=useState(false);
//   return (
//     <>
//       <Panel title="Shaival" isActive={true}>
//         XW
//       </Panel>
//       <Panel title="Heet" isActive={true}>
//         XghgW
//       </Panel>
//     </>
//   );
// }

// function Panel({title,children,isActive})
// {
//   return(
//     <section >

//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={()=>
//         {
//           setIsActive(true)
//         }}>Show</button>
//       )}

//     </section>
//   )
// }

// import React, { useReducer } from "react";

// const xyz=
// {
//   count:0
// }

// const counterReducer = (state, action) => {

//   switch (action.type) {
//     case "Increment":
//       return { count: state.count + 1 };
//     case "Decrement":
//       return { count: state.count - 1 };
//     case "Reset":
//       return { count: 0 };
//     default:
//       return state;
//   }

// };

// const Counter = () => {
//   // useReducer returns the current state and a dispatch function
//   const [state, dispatch] = useReducer(counterReducer, {count:0} );

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'Increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'Decrement' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>

//     </div>
//   );
// };

// export default Counter;

import React from "react";
import { useRef } from "react";
import { useEffect } from "react";



// import React, { useRef, useEffect } from 'react';

// function MyComponent() {
//   const myInputRef = useRef(null);

//   useEffect(() => {
//     // Focus on the input element when the component mounts
//     myInputRef.current.focus();
//   }, []);

//   return (
//     <input type="text" ref={myInputRef} />
//   );
// }

// export default MyComponent;

// import React from "react";
// import  { useRef } from 'react';


// function MyComponent() {
//   const myArrayRef = useRef([]);

//   const handleButtonClick = () => {
//     myArrayRef.current.push('New Value');
//     console.log(myArrayRef.current);
//   };

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Add Value</button>
//     </div>
//   );
// }

// export default MyComponent;

import {Rea}
