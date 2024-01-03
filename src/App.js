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

import { useState } from "react";

export default function Form()

const[isSent,setIsSent]=useState(false);
const[message,setMessage]=useState("hii");
{
  return(
    <>
    
    </>
  )
}



