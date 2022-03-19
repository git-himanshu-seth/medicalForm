import { Fragment } from "react";

function CheckBoxField({formIdx, name, handleChange, options, selected}) {
    return (
        <div>
        {options.map((option, index) => (
            <Fragment key={index}>
                <input
                    type="checkbox"
                    name={name}
                    value={option}
                    onChange={(e) => handleChange(formIdx, name, e.target.value, e.target.checked)}
                    checked={!!selected.includes(option)}
                />
                <label>{option}</label>
            </Fragment>
        ))}
    </div>
    );
}

export default CheckBoxField;
