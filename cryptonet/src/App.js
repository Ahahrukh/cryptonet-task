import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    dataOfApi()
  },[])
  async function dataOfApi(){
    try {
      let jsonData = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      let maindata = await jsonData.json() 
      console.log(maindata.results)
      setData(maindata.results)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="App">
       <div className='maindiv'>
          <div className='profile'>
             {data.map((elem)=>(
              <img src={elem.picture.large} alt='' />
             ))}
          </div>
          <div className='details'>
            {data.map((elem)=>(
               <div style={{display:"grid" , gap:"30px"}}>
                <div style={{display:"flex" , gap:"20px"}}>
                <h1>First Name : {elem.name.first}</h1>
                <h1>Last Name : {elem.name.last}</h1>
                </div>
                <h1 style={{textAlign:"left"}}>Gender : {elem.gender}</h1>
                <h1 style={{textAlign:"left"}}>Phone Number : {elem.phone}</h1>
               </div>
            ))}
          </div>
       </div>
    </div>
  );
}

export default App;
