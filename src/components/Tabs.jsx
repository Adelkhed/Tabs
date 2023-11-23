import React,{useState} from 'react'
import './Tabs.css'
const Tabs = () => {
    const [changeTab,setChangeTab] = useState();
    const handleTab = (tab) =>{
          setChangeTab(tab)
    };
  return (
    <div className="container">
        <div className="tabs">
           
        <button className={`content-tab  ${changeTab ==='Tab1' ?'active':'' }`}
             onClick={() => handleTab('Tab1')}
        >
            Tab1
 
        </button>
        <button className={`content-tab  ${changeTab ==='Tab2' ?'active':'' }`}
             onClick={() => handleTab('Tab2')}
        >
            Tab2
 
        </button>
        <button className={`content-tab  ${changeTab ==='Tab3' ?'active':'' }`}
             onClick={() => handleTab('Tab3')}
        >
            Tab3
 
        </button>
    </div>
       <div className='tab-result'>
            {`${changeTab} content is showing here`}
       </div>
    </div>
  )
}

export default Tabs;