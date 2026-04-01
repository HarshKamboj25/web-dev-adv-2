import React from 'react'

// function menu(props) {
//   return (
//     <>
//         <div>menu</div>
//         <ul>
//             <li>Entertainment</li>
//             <li>Politics</li>
//             <li>Tech</li>
//         </ul>
//         <button 
//           className="counter"
//             onClick={() => props.setCount((count) => count + 1)}
//         >
//           Count: {props.count}
//         </button>
//       </>

//   )
// }

// export default menu

import React, { Component } from 'react'

export default class menu extends Component {
  render() {
    return (
        <>
        <div>menu</div>
        <ul>
            <li>Entertainment</li>
            <li>Politics</li>
            <li>Tech</li>
        </ul>
        <button 
          className="counter"
            onClick={() => props.setCount((count) => count + 1)}
        >
          Count: {props.count}
        </button>
      </>
      
    )
  }
}
