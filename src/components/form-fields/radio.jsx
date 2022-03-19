import { Fragment } from "react";

function RadioField({name, handleChange, options, selected}) {
    return (
        <div onClick={handleChange}>
        {options.map((option, index) => (
            <Fragment key={index}>
                <input type="radio" name={name} value={option} checked={selected === option} />
                <label>{option}</label>
            </Fragment>
        ))}
    </div>
    );
}

export default RadioField;
