import {useEffect, useState} from "react";

const PeopleForm = (props) => {
    
    useEffect(()=>{
        if(props.formData){
            setPerson(props?.formData);
        }
    },[props?.formData]);
    
    const [person, setPerson] =  useState({
        "id": "NA",
        "fname": "",
        "lname": "",
        "age": ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
        props.addPerson(person);
        clearForm(e);
    }

    const clearForm = (e)=>{
        e.preventDefault();
        setPerson({
            "id": "NA",
            "fname": "",
            "lname": "",
            "age": ""
        });
    }

    const handleChange = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }
    
    return (
        <div className="align-items-center">
            <form onSubmit={onSubmit}>
                <div className="row align-items-center">
                    <div className="col-3"></div>
                    <div className="col-2">
                        <label for="fname" className="col-form-label">First name</label>
                    </div>
                    <div className="col-4">
                        <input type="text" id="fname" className="form-control" name="fname" value={person.fname} onChange={handleChange}/>
                    </div>
                    <div className="col-3"></div>
                </div>
                <br/>

                <div className="row align-items-center">
                    <div className="col-3"></div>
                    <div className="col-2">
                        <label for="lname" className="col-form-label">Last name</label>
                    </div>
                    <div className="col-4">
                        <input type="text" id="lname" className="form-control" name="lname" value={person.lname} onChange={handleChange}/>
                    </div>
                    <div className="col-3"></div>
                </div>
                <br/>

                <div className="row align-items-center">
                    <div className="col-3"></div>
                    <div className="col-2">
                        <label for="lname" className="col-form-label">Age</label>
                    </div>
                    <div className="col-4">
                        <input type="text" id="age" className="form-control" name="age" value={person.age} onChange={handleChange}/>
                    </div>
                    <div className="col-3"></div>
                </div>
                <br/>


                <div className="row align-items-center">
                    <div className="col-5"></div>
                    <div className="col-3">
                        <button className="btn btn-light" type="submit" value="Submit" >SUBMIT</button>
                        &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light" onClick={clearForm}>CLEAR</button>
                    </div>
                    <div className="col-4"></div>
                </div>                
                <br/>
            </form> 
        </div>
    );
};

export default PeopleForm;