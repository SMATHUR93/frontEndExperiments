import React from "react";

const FilterButton = (props) => {
    // console.log(props.name + " || " + props.isPressed);
    return (
        <button
            type="button"
            className={"btn btn-light " + (props.isPressed ? 'active' : '')}
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            {props.name}
        </button>
    );
}
  
export default FilterButton;