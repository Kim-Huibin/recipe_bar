import React from "react";
import "./Recipe.css"



export default function Recipe(props) {
  return (
    <div className='mainContainer' className="card" style={{ width: 30 + "rem", height:50+ "rem",overflow:"scroll", marginTop: 5 + "rem", borderRadius:50+"px" }}>
      <div className='secondContainer'>
          <div className='frontSide'>
           <img src={props.image} className="card-img-top" alt="..." style={{borderRadius:50+"px"}}/>
           <div className="card-body">
             <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.instruction}</p>    
           </div>
         </div>
        
       <div className='backside' style={{ fontSize:1+"rem" }}>
          <span>{props.ingredient1}</span>
      
          <span style={{ marginLeft:2+ "rem" }}>{props.measure1}</span>
          <br/>
          <span>{props.ingredient2}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure2}</span>
          <br/>
          <span>{props.ingredient3}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure3}</span>
          <br/>
          <span>{props.ingredient4}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure4}</span>
          <br/>
          <span>{props.ingredient5}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure5}</span>
          <br/>
          <span>{props.ingredient6}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure6}</span>
          <br/>
          <span>{props.ingredient7}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure7}</span>
          <br/>
          <span>{props.ingredient8}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure8}</span>
          <br/>
          <span>{props.ingredient9}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure9}</span>
          <br/>
          <span>{props.ingredient10}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure10}</span>
          <br/>
          <span>{props.ingredient11}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure11}</span>
          <br/>
          <span>{props.ingredient12}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure12}</span>
          <br/>
          <span>{props.ingredient13}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure13}</span>
          <br/>
          <span>{props.ingredient14}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure14}</span>
          <br/>
          <span>{props.ingredient15}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure15}</span>
          <br/>
          <span>{props.ingredient16}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure16}</span>
          <br/>
          <span>{props.ingredient17}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure17}</span>
          <br/>
          <span>{props.ingredient18}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure18}</span>
          <br/>
          <span>{props.ingredient19}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure19}</span>
          <br/>
          <span>{props.ingredient20}</span>
          <span style={{ marginLeft:2+ "rem" }}>{props.measure20}</span>
        </div>
  
 
      </div>
      
    </div>
  );
}

/**

 */

