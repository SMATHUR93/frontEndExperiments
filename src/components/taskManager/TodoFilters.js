import { useState } from "react";
import FilterButton from "./FilterButton";

const TodoFilters = (props) => {
    const filterNames = Object.keys(props.filterMap);
    const filterButtons = filterNames.map((filterObj)=> {
        return (
            <>
                <FilterButton
                    key={filterObj}
                    name={filterObj}
                    isPressed={filterObj === props.filter}
                    setFilter={props.setFilter}
                />
                &nbsp;&nbsp;&nbsp;
            </>    
        );
    });
    return (
        <>
            <br/>
            <div className="row align-items-center">
                <div className="col-3"/>
                <div className="col-1">
                    <label className="col-form-label"><h4>Filters</h4></label>
                </div>
                <div className="col-4">
                    {filterButtons}
                </div>
                <div className="col-4"/>
            </div>
            <br/>
        </>
    );
};

export default TodoFilters;