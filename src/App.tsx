import { useState,useEffect } from "react";
import get_data from './read_excel';
import Drill from './Drill';

function App() {
  const [drill_data, setDrillData] = useState<Record<any,any>[]>([]);
  const [drill_elements,setDrillElements]=useState<any[]>([]);

  useEffect(()=>
  {
    async function async_wrapper()
    {
      if(drill_data.length==0)
      {
        const drill_data_temp=await get_data("src/results/Analyzed Drills Stable.xlsx","Results");
        console.log(drill_data_temp);
        setDrillData(drill_data_temp);
      }
    }
    async_wrapper();
  },[]);

  useEffect(()=>{
    if(drill_data.length>0)
    {
      const drill_elements=drill_data.map(drill=>(<Drill drill={drill} key={drill.ID}></Drill>));
      setDrillElements(drill_elements);
    }
  },[drill_data])

  return (
    <>
      <h1>AI Drill Analyzer</h1>
      {drill_elements}
    </>
  );
}

export default App;