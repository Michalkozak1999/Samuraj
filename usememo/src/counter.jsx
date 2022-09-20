import React from "react";


const Counter = ({ index, counter }) => {
    console.log(` render fubu nr: ${index}`)
    return (
        <div>
            Komponent Fubu nie zmienia się !
            Licznik nr {index} Wynosi: {counter}
        </div>
    )
}
// nie powoduje renerowania się elementu jesli się nie zmienia (bardzoe przydatna rzecz jak widzę :D)
// export default React.memo(Counter)

export default Counter