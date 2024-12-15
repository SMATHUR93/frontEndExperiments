import {useState} from "react";

const PeopleList = (props) => {
    
    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>AGE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(people => {
                        return (
                            <tr>
                                <td>{people.fname}</td>
                                <td>{people.lname}</td>
                                <td>{people.age}</td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-light" name={people.id} onClick={ props.modifyPerson } >Modify</button>
                                        <button type="button" className="btn btn-light" name={people.id} onClick={ props.deletePerson } >Delete</button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
        
    );
};

export default PeopleList;