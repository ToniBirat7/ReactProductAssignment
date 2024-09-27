import Todo from './components/Todo';
import Form from "./components/Form.jsx";
import FilterButton from "./components/FilterButton.jsx";
import NewForm from "./components/NewForm.jsx";
import {useState} from "react";
// eslint-disable-next-line
function App(props) {
    console.log(props.tasks)
    
    const [tasks, setTasks] = useState(props.tasks);
    const taskList = tasks?.map((task) => <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}/>);
    
    const taskNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} ${taskNoun} remaining`;
    
    function addTask(name) {
        const newTask = {id: "todo-" + Math.random(), name: name, completed: false};
        setTasks([...tasks, newTask]);
    }
    
    return (
        <div className="todoapp stack-large">
            <h1 className="fancy-paragraph">TodoMatic</h1>
            <Form onSubmit={addTask}/>
            <div className="filters btn-group stack-exception" >
                <FilterButton/>
                <FilterButton/>
                <FilterButton/>
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList}
            </ul>
            
        </div>
    );
}

export default App;