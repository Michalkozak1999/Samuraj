import React from "react";

const Curseinfo = ({id, onClickHendler, title}) =>{
//onclickhendler to ten dispatch
const handlerOnClick = () => onClickHendler({
    type: "REMOVE",
    id,
})


return(
    <div>{title}
     <button onClick={handlerOnClick}>Usuń kurs</button></div>
   
)
}
export default Curseinfo