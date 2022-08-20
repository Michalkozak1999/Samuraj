// const Item = (props) => (
//   <li
//     className={props.active ? "enabled" : "disabled"}

//     onClick={() => props.changeStatus(props.id)}
//   >
//     {props.name}
//   </li>
// )

// style={props.active ? { fontWeight: 'bold' } : { color: 'gray' }}

const Item = (props) =>{
    return(
        <li
        className = {props.active ? "enabled": "disabled"}
        
         onClick= {() =>props.change(props.id)}
        //  dodanie takiej funcki na on clicku powoduje ze dobiepo po klicknieciu odbywa się fuckja change(props.id)
         >
             
             {props.name}</li>
    )
}


// style ={props.active ? {fontWeight: "bold" }: {color: 'gray'}}