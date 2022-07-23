import React, { useState } from 'react';
import Admin from './Admin';
import Question from './Question';
function Dashboard(props) {
    const [Data, setData] = useState([ ]);
    const addData = (data)=>{
        setData(prev =>{
            return[...prev, data];
        });
    }
    return ( 
        
        <>
        <Admin addData = {addData}/>
        {Data.map((data, id  )=>{
            return <Question data={data} key={id}/>
        }
        )}
        {/* <Question /> */}
        </>
     );
}

export default Dashboard;