import { useState,useEffect } from "react";
import get_data from './read_excel';
import DrillTableRow from './DrillTableRow';
import DrillDetails from "./DrillDetails";

function App() {
  const [drill_data, setDrillData] = useState<Record<any,any>[]>([]);
  const [drill_elements,setDrillElements]=useState<any[]>([]);
  const [target_row,setTargetRow]=useState(-1);

  function HandleClick(new_target_row:number)
  {
    setTargetRow(new_target_row);
  }

  useEffect(()=>
  {
    async function async_wrapper()
    {
      if(drill_data.length==0)
      {
        let drill_data_temp=await get_data("src/results/Analyzed Drills Stable.xlsx","Results");
        drill_data_temp=drill_data_temp.filter(drill=>drill.Fun!=null);
        console.log(drill_data_temp);
        setDrillData(drill_data_temp);
      }
    }
    async_wrapper();
  },[]);

  useEffect(()=>{
    if(drill_data.length>0)
    {
      const drill_elements_temp=drill_data.map(drill=>(<DrillTableRow drill={drill} key={drill.ID} onClick={HandleClick}></DrillTableRow>));
      setDrillElements(drill_elements_temp);
    }
  },[drill_data])

  
  if(target_row!=-1)
  {
    const target_id=target_row-1;
    console.log(drill_data[target_id]);

    return(
    <>
    <h1>AI Drill Analyzer</h1>
    {<DrillDetails onClick={HandleClick} drill={drill_data[target_id]}></DrillDetails>}
    </>
    );
  }

  return (
    <>
      <h1>AI Drill Analyzer</h1>
      <table className="table table-hover">
      <thead>
      <tr>
      <th>Name</th>
      <th>Ranks</th>
      <th>Category</th>
      <th>Learning Potential</th>
      <th>Physical Development</th>
      <th>Fun</th>
      </tr>
      </thead>
      <tbody>
      {drill_elements}
      </tbody>
      </table>
    </>
  );
}

export default App;