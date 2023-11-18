import Prop from "./Components/Prop";
import {useState} from 'react';
import './App.css';
function App() {
    const [name,setname] = useState(false);
 const func = ()=>{
    setname(!name);
}
return(
<>
      <Prop d="KAVIN" age="19" email="727722eucs084@skcet.ac.in" dept='CSE' ph='9344155745'> </Prop>
      
    <div className={name? 'col': 'col1'}></div>
       <button className='b1' onClick={func}>click</button>
</>
   )
}
export default App; 