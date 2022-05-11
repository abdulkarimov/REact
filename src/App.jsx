import { useEffect, useState } from 'react'
import './App.css';
import Axios from "axios";

function App() {
  const [count, setCount] = useState(2);
  const [arr, setArr] = useState(
    [
      {id : 1 ,todolist : 'hello'}
    ]
  )
  const [qwerty, setqwerty] = useState(
    [
      {id : 1 ,completeList : 'qwe'}
    ]
  )

const onAddObject = (e) => {
  setCount(count + 1)
  setArr((arr) => [...arr, { id:count, todolist : todolist}]);
}

const onDeleteObject  = (e) => {
  const data = arr.filter(a => a.id != e.target.value);
  setArr(data);
}

const onNextObject  = (e) => {
  setqwerty((qwerty) => [...qwerty, {  completeList :e.target.value.slice(0, -1)}]);
  const data = arr.filter(a => a.id != e.target.value[e.target.value.length-1])
  setArr(data);
}
const [todolist , setTodolist] = useState("");

return (
  <div  class="wrapper">
    <div>
        <label htmlFor="">title</label>
        <input type="text" value={todolist} onChange={event => setTodolist(event.target.value)} />
        <button onClick={onAddObject}>add</button>
    </div>
  <div className='card'>
  {
      arr.map(a => {
        return(
          <div key={a.id}>
            <p>{a.todolist}</p>
            <button value={a.id} onClick={onDeleteObject}>delete</button>
            <button value={[a.todolist + a.id]} onClick={onNextObject}>next</button>
          </div>
        )
      })
    }
  </div>
<div className='card'> 
        {
          qwerty.map(a => {
            return(
              <div key={a.id}>
                <p>{a.completeList}</p>
              </div>
            )
          })
      }
</div>
  </div>
)

}

export default App
