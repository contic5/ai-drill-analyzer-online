import { useState,useEffect } from "react";
import get_data from './read_excel';

function App() {
  const [excel_data, setExcelData] = useState<Record<any,any>[]>([]);

  useEffect(()=>
  {
    async function async_wrapper()
    {
      if(excel_data.length==0)
      {
        const excel_data_temp=await get_data("MOCK_DATA.xlsx","data_short");
        console.log(excel_data_temp);
        setExcelData(excel_data_temp);
      }
    }
    async_wrapper();
  },[]);

  return (
    <>
      <h1>OpenAI App Template Vercel</h1>
    </>
  );
}

export default App;