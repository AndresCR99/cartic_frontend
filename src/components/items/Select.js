import React from "react";


const Select = (props) => {
    return (
        <select defaultValue={props.options.selected} 
        className="form-control"
         style={{height: "35px"}} >
            {props.options.option_id.map(id =>
                <option key={id} value={id}>{props.options.options[id].name}</option>
            )}
        </select>
    )
}

export default Select;