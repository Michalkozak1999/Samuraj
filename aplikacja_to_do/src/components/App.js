import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTask from './Addtask';



class App extends Component {
  conuter = 4
  state = {
    task: [
      {
        id: 0,
        text: "zagrać wreszcie w wiedzmina 3",
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zagrać wreszcie w wiedzmina 2",
        date: '2019-03-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "zagrać wreszcie w wiedzmina 1",
        date: '2019-03-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "zagrać wreszcie w wiedzmina 1111",
        date: '2019-03-15',
        important: true,
        active: true,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id) => {
    console.log("delete elemetu op id +" + id)
    console.log(tasks)
    const tasks = [...this.state.task]
    //jest to kopia tablicy pamiętaj o tym !!!!!!
    const index = tasks.findIndex(task => task.id === id)
    // jeśli by nieznalazało indexu w tablicy by zwróciło -1 a jeśli zanjdzie to wartości od 0 do nieskończonosci( ile isteniej indexów w danej tablicy)
    tasks.splice(index, 1)
    //metoda splice  usunie dany element z tablicyw który wskarzemy



    // dla drugiej metody można:
    // tworzymy nowa tablice 
    //metoda filter tasks = tasks.filter(task=> task.id !==id)
    // w tym momęcie przeniesie namm do nowej tablicy wszystkie elementu rozne od id naciśniętego w naszym buutonie
    // jakbyśmy dali === to by przenioslo nam do nowej tablicy tylko tene element który jest rowny
    // jakbyśmy napisali true to by przeniosło wszytskie elementy
    console.log(tasks)
    this.setState({
      task:tasks
    })
  }
  changeTaskStatus = (id) => {
    console.log("change w stanie o id" + id)
    let tasks = [...this.state.task]
    tasks.forEach(task =>{
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
     task:tasks
   
     
    })
  }


addTask = (text, date, important) =>{
  console.log("dodany obiekt")
  const task = {
    id: this.conuter,
    text: text,//text z inputa
    date: date, //text z inputa
    important: important, // wartośc z inputa // !!!!! sprawdz czemu zmiana checked na true (zaznaczenie sie priorytetu powoduje zmiane important na true)
    active: true,
    finishDate: null,
  }
  this.conuter++
  console.log(task, this.conuter)


this.setState(prevstate => ({
task: [...prevstate.task, task]
}))

  return true
}

  render() {
    return (
      <div >
       <h1>TO DO APP</h1>
        <AddTask addtask={this.addTask}/>
        <TaskList tasks={this.state.task} delete={this.deleteTask} changes={this.changeTaskStatus} />

      </div>
    );
  }
}

export default App;


// render() {
//   return (
//     <div >
//      <h1>TO DO APP</h1>
//       <AddTask addtask={this.addTask}/>
//       <TaskList tasks={this.state.task} delete={this.deleteTask} changes={this.changeTaskStatus} />

//     </div>
//   );
// }
// }

// id: 0,
// text: "zagrać wreszcie w wiedzmina 3",
// date: '2018-02-15',
// important: true,
// active: true,
// finishDate: null,
// },
// {
// id: 1,
// text: "zagrać wreszcie w wiedzmina 2",
// date: '2019-03-15',
// important: true,
// active: true,
// finishDate: null,
// },
// {
// id: 2,
// text: "zagrać wreszcie w wiedzmina 1",
// date: '2019-03-15',
// important: false,
// active: true,
// finishDate: null,