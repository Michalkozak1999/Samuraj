// const ListItems = (props) => {
//   const items = props.items.map(item => (
//     <Item
//       key={item.id}
//       id={item.id}
//       name={item.name}
//       active={item.active}
//       changeStatus={props.changeStatus}
//     />
//   ))
//   return (
//     <div className="list">
//       <h1>Twoje zamówienie</h1>
//       <ul>
//         {items}
//       </ul>
//     </div>
//   )
// }



const ListItems = (props) => {
  const mapfunctions = props.iteam2.map((oneiteam) =>(
    <Item 
    key= {oneiteam.id}
    id = {oneiteam.id}
    name = {oneiteam.name}
    active = {oneiteam.active}
    change = {props.changestatus} 
    // change jako funkja handle click nie zawiera sie w naszym obiekacie na ktorym odbywa się map wiec jest przekazywana w propsach odzielnie (ale z tego co widze może trafić do funkcji map jako odzielny komponent który się łaczy)
    
    />
  ) )
 
  return(
    
    <div className = "list">
    <h3>Twoje zamówienie</h3>
    <ul>
     
    {mapfunctions}


    </ul>
    </div>
    
  )
}