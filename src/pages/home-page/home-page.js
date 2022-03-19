import { useState, useEffect } from "react";
import CheckBoxField from "../../components/form-fields/checkbox";
import RadioField from "../../components/form-fields/radio";
import formFields from "../../form-data/data.json";
import { initFormFieldValues } from "../../utils/functions";
import { setSummeryAction } from "../../redux/reducer/summary.action";
import { connect, useSelector } from "react-redux";
import "../../styles/form.styles.css";
function HomePage(props) {
  const data = useSelector((state) => state.summary.summaryData);
  const [formData, setFormData] = useState([
    initFormFieldValues(formFields.fields),
  ]);
  useEffect(() => {
    if (data && data.length > 0) {
      setFormData(data);
    }
  }, [data]);
  const handleAppendFields = (e) => {
    e.preventDefault();
    setFormData([...formData, initFormFieldValues(formFields.fields)]);
  };

  const handleChange = (formIdx, name, value) => {
    formData[formIdx][name] = value;
    setFormData([...formData]);
  };

  const handleCheckBoxChange = (formIdx, name, value, checked) => {
    if (checked) formData[formIdx][name].push(value);
    else
      formData[formIdx][name] = formData[formIdx][name].filter(
        (option) => option !== value
      );
    setFormData([...formData]);
  };

  const handleAction = () => {
    props.dispatch(setSummeryAction(formData));
    props.navigate("/summary");
  };

  const getInputField = (
    { name, label, placeholder, type, ...otherFieldProps },
    data,
    formIdx
  ) => {
    let inputField;
    switch (type) {
      case "radio":
        return (
          <div>
            <RadioField
              name={name}
              handleChange={(e) => handleChange(formIdx, name, e.target.value)}
              options={otherFieldProps.options}
              selected={data[name]}
            />
          </div>
        );

      case "checkbox":
        return (
          <div>
            {" "}
            <CheckBoxField
              formIdx={formIdx}
              name={name}
              handleChange={handleCheckBoxChange}
              options={otherFieldProps.options}
              selected={data[name]}
            />{" "}
          </div>
        );

      default:
        inputField = (
          <div>
            {" "}
            <input
              type={type}
              placeholder={placeholder}
              name={name}
              value={data[name]}
              onChange={(e) => handleChange(formIdx, name, e.target.value)}
              className={"textArea"}
            />
          </div>
        );
    }
    return inputField;
  };

  const getForm = (data, formIdx) => {
    return (
      <form key={formIdx} style={{ margin: "14px 7px" }}>
        {formFields.fields.map((fieldData, idx) => {
          let inputField = getInputField(fieldData, data, formIdx);
          return (
            <div
              key={idx}
              className={"fields"}
              style={{
                display: fieldData.name === "problemsList" ? "" : "flex",
              }}>
              <label>{fieldData.label}</label>
              <span>{inputField}</span>
            </div>
          );
        })}
      </form>
    );
  };

  return (
    <div style={{ margin: "20px 9px" }}>
      <div style={{ color: "blue" }}>
        <strong>Pain & Functional Description</strong>
      </div>
      <div>
        <p>
          The description of the current situation gives your Optimum Trainer a
          picture of and clues of the underling causes of your problems
        </p>
      </div>

      {formData.map((data, formIdx) => getForm(data, formIdx))}
      <button onClick={handleAppendFields} className={"newForm"}>
        +
      </button>
      <hr style={{ marginTop: "-9px" }} />

      <div>
        {" "}
        <button className={"success"}>Back</button>
        <button onClick={handleAction} className={"success"}>
          Next
        </button>
      </div>
    </div>
  );
}

export default connect(null)(HomePage);
