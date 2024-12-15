import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilters";

const TaskManager = () => {

    const [tasks, setTasks] = useState([{
        id: 1,
        name: "Eat", 
        completed: true 
    },{
        id: 2, 
        name: "Sleep", 
        completed: false 
    },{ 
        id: 3,
        name: "Repeat", 
        completed: false 
    }]);

    const [lastCount, setLastCount] = useState(tasks.length);

    const [filter, setFilter] = useState("All");

    const filterMap = {
        "All": (task) => {return task;},
        "Active": (task) => { return task.completed!==true;},
        "Completed": (task) => { return task.completed===true;}
    };

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                return { 
                    ...task, 
                    completed: !task.completed 
                };
            }
            return task;
        });
        console.log(updatedTasks);
        setTasks(updatedTasks);
    };

    const addTask = (name) => {
        setLastCount(lastCount+1);
        const newTask = { 
            id: lastCount + 1,
            name, 
            completed: false 
        };
        setTasks([...tasks, newTask]);
    };

    const editTask = (id, newName) => {
        const editedTaskList = tasks.map((task) => {
          if (id === task.id) {
            return { ...task, name: newName };
          }
          return task;
        });
        setTasks(editedTaskList);
    };

    const deleteTask = (e) => {
        let id = Number(e.target.id);
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
    const headingText = `${tasks.length} ${tasksNoun} remaining`;

    const taskList = tasks.filter(filterMap[filter])

    return (
        <div class="container text-center">
            <div class="row justify-content-md-center">
                <div class="col">
                    <br/>
                    <h2>TODOS</h2>
                    <h3>Organize your plans</h3>
                    <br/>
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="col">
                    <div>
                        <TodoForm addTask={addTask}></TodoForm>
                        <TodoFilters filter={filter} setFilter={setFilter} filterMap={filterMap}></TodoFilters>
                        <h4 id="list-heading">{headingText}</h4>
                    </div>
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="col">
                    <TodoList tasks={taskList} editTask={editTask} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted}></TodoList>
                </div>
            </div>
                    
        </div>
    );

};

export default TaskManager;