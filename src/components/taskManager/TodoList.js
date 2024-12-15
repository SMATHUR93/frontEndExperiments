import { useState } from "react";
import TodoElement from "./TodoElement";

const TodoList = (props) => {

    const todos = props.tasks.map((todo)=>{
        return (
            <TodoElement 
                key={todo.id}
                id={todo.id}
                name={todo.name}
                completed={todo.completed}
                editTask = {props.editTask}
                deleteTask={props.deleteTask}
                toggleTaskCompleted={props.toggleTaskCompleted}
            />
        );
    });
    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Completed or Not</th>
                        <th>To do</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos}
                </tbody>
            </table>
        </>

    );
};

export default TodoList;