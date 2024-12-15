import { useState } from "react";

const TodoElement = (props) => {
    
    const [taskName, setTaskName] = useState(props.name); 
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editTask(props.id, taskName);
        setTaskName("");
        setIsEditing(false);
    };

    const editingTemplate = (
        <tr>
            <td>
                <label>Enter updated task</label> 
            </td>
            <td>
                <input 
                    type="text" 
                    id="taskName" 
                    className="form-control" 
                    name="taskName" 
                    value={taskName}
                    onChange={handleChange}
                />
            </td>
            <td>
                <div>
                    <button 
                        type="button" 
                        className="btn btn-light" 
                        id={props.id} 
                        name={props.id} 
                        onClick={handleSubmit} 
                    > Save
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-light" 
                        onClick={() => setIsEditing(false)} 
                    > Cancel
                    </button>
                </div>
            </td>
        </tr>
    );

    const viewTemplate = (
        <tr>
            <td>
                <input 
                    id={props.id} 
                    type="checkbox" 
                    defaultChecked={props.completed} 
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
            </td>
            <td>
                <span>{props.name}</span>
            </td>
            <td>
                <div>
                    <button 
                        type="button" 
                        className="btn btn-light" 
                        id={props.id} 
                        name={props.id} 
                        onClick={() => setIsEditing(true)} 
                    > Modify </button>
                    <button 
                        type="button" 
                        className="btn btn-light" 
                        id={props.id} 
                        name={props.id} 
                        onClick={ props.deleteTask } 
                    > Delete </button>
                </div>
            </td>
        </tr>
    );

    return (
        <>
            {isEditing ? editingTemplate : viewTemplate}
        </>
    );
};

export default TodoElement;