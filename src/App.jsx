import { useState } from 'react'
import './App.css';

function App() {
  const [num, setNum] = useState(0)
  const nums = [1,2,3,4,5,6];
  
  const users = [{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}];
  const [text , setText] = useState("Iphone");
  const handleChange = (e) => setText(e.target.value);
  
const products = [
  {id : 1 ,title: "Iphone 8" , price : 600} ,
  {id : 2 ,title: "Iphone x" , price : 800} ,
  {id : 3 ,title: "Iphone 11" , price : 1000} ,
  {id : 4 ,title: "Iphone 12" , price : 1200} ,
  {id : 5 ,title: "Iphone 13" , price : 1400} ,
  {id : 6 ,title: "mac book air 13" , price : 1600} ,
  {id : 7 ,title: "mac book pro 13" , price : 2000} ,
  {id : 8 ,title: "mac book pro 14.2" , price : 2200} ,
  {id : 9 ,title: "mac book pro 16.2" , price : 2700} 
]

// return(
//   <div>
//     <div>
//     <input type="text" value={text} onChange={handleChange} />
//       {
//         products.filter(p => p.title.includes(text)).map(f => {
//           return <div key={f.id}>
//             <p>{ f.title}</p>
//             <button>delete</button>
//           </div>
//         })
//       }
//     </div>
//   </div>
// )
  // return (
  //   <div>
  //     <div>
  //       {
  //         users.map((u) => {
  //           return (
  //             <div key={u.id} className='card'>
  //               <img src={u.avatar} alt='u.first_name'/>
  //               <p>{u.first_name}</p>
  //               <p>{u.last_name}</p>
  //               <p>{u.email}</p>
  //           </div>

  //           )
  //         })
  //       }
  //     </div>
  //   </div>
  // )



  // return(
  //   <div>
  //     <p>
  //       {text}
  //     </p>
  //     <input type="text" value={text} onChange={handleChange} />
  //   </div>
  // )


  // return (
  //   <div className="App">
  //     <h1>{num}</h1>
  //     <button onClick={()=>setNum(num +1)}>+</button>
  //     <button onClick={()=>setNum(num -1)}>-</button>
  //   </div>
  // )
}

export default App
