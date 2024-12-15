import {useState} from "react";
import PeopleList from "./PeopleList";
import PeopleForm from "./PeopleForm";

const CRUD = () => {

    const [formData, setFormData] = useState();

    const [peopleList, setPeopleList] = useState([{
        "id": "101",
        "fname": "John",
        "lname": "Smith",
        "age": "31"
    },{
        "id": "102",
        "fname": "Jane",
        "lname": "Smith",
        "age": "30"
    },{
        "id": "103",
        "fname": "Peter",
        "lname": "Pan",
        "age": "35"
    },{
        "id": "104",
        "fname": "Harry",
        "lname": "Price",
        "age": "28"
    },{
        "id": "105",
        "fname": "Edward",
        "lname": "Scott",
        "age": "31"
    }]);


    const addPerson = (person) => {
        let pid = person.id;
        if(pid==="NA"){
            person.id = "10" + (peopleList.length + 1);
            setPeopleList([...peopleList, person]);
        } else{
            const editedPeopleList = peopleList.map((people) => {
                if (people.id === pid) {
                  return { ...person };
                }
                return people;
              });
            setPeopleList(editedPeopleList);
        }       
    }

    const modifyPerson = (e) => {
        let idx = peopleList
            .map(function (e) {
                return e.id;
            })
            .indexOf(e.target.name);
        console.log("I am trying to update el at index = "+idx);
        setFormData(peopleList[idx]);
    }

    const deletePerson = (e) => {
        let idx = peopleList
            .map(function (e) {
                return e.id;
            })
            .indexOf(e.target.name);
        console.log("I am trying to delete el at index = "+idx);
        peopleList.splice(idx, 1);
        setPeopleList([...peopleList]);
    }

    return (

        <div class="container text-center">
            <div class="row justify-content-md-center">
                <div class="col">
                    <br/>
                    <h2>CRUD</h2>
                    <br/>
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="col">
                    <PeopleForm addPerson={addPerson} formData={formData}></PeopleForm>
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="col">
                    <PeopleList data={peopleList} modifyPerson={modifyPerson} deletePerson={deletePerson}></PeopleList>
                </div>
            </div>
                    
        </div>
    );
}
export default CRUD;