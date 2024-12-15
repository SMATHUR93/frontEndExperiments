import { useState } from "react";

const TodoForm = (props) => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <div className="row align-items-center">
            <div className="col-3"/>
            <div className="col-4">
                <input type="text" id="name" className="form-control" name="name" value={name} onChange={handleChange}/>
            </div>
            <div className="col-2">
                <button className="btn btn-light" type="submit" onClick={handleSubmit}>Add Task</button>
            </div>
            <div className="col-3"/>
        </div>
    );
};

export default TodoForm;