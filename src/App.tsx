import { useState } from 'react'
import { NumList } from "./components/NumList";
import { useAppDispatch} from "./hook";
import { addNumber } from "./store/pageSlice";


function App() {
  const [title, setTitle] = useState('')
  const [UId, setUId] = useState(0)
  const dispatch = useAppDispatch()


  

  const addPageHandler = () => {
    if (title) {
      dispatch(addNumber({
        id: UId,
        title: title,
      }))
      setUId(UId + 1)
      setTitle('')
    }
  }



  return (
    <div className="App">
      <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      <button onClick={() => addPageHandler()}>click</button>
      <NumList />

    </div>
  );
}

export default App;
