import { useState } from "react";

type ListProps = {
  items: string[];
  heading: string;
}

function ListGroup({items,heading}: ListProps)  // destructuring the items prop
{
  const[selectedIndex,setSelectedIndex] = useState(0);

  return(
     <> 
      <h3>{heading}</h3>  
      <ul className="list-group">
        {
        items?.map((item, index) => (
          <li 
          className ={selectedIndex === index ?"list-group-item active": "list-group-item"} 
          key={index} 
          onClick={()=>setSelectedIndex(index)}>{item}</li>
        ))
    }
    </ul>
  </>
    ) 
}

export default ListGroup;