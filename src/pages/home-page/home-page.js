import { useState, useEffect } from "react";
import CheckBoxField from "../../components/form-fields/checkbox";
import RadioField from "../../components/form-fields/radio";
import formFields from "../../form-data/data.json";
import { initFormFieldValues } from "../../utils/functions";
import { setSummeryAction } from "../../redux/reducer/summary.action";
import { connect, useSelector } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  InputLabel,
  Paper,
  FormControl,
  Container,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import "../../styles/form.styles.css";
function HomePage(props) {
  const data = useSelector((state) => state.summary.summaryData);
  console.log(data);
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
          <RadioField
            handleChange={(e) => handleChange(formIdx, name, e.target.value)}
            options={otherFieldProps.options}
            selected={data[name]}
          />
        );

      case "checkbox":
        return (
          <CheckBoxField
            formIdx={formIdx}
            name={name}
            handleChange={handleCheckBoxChange}
            options={otherFieldProps.options}
            selected={data[name]}
          />
        );

      default:
        inputField = (
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={data[name]}
            onChange={(e) => handleChange(formIdx, name, e.target.value)}
            className={name !== "problemsList" ? "textArea" : "textField"}
          />
        );
    }
    return inputField;
  };

  const getForm = (data, formIdx) => {
    return (
      <Paper
        elevation={9}
        style={{
          marginTop: "20px",
          border: "1px solid grey 0.5",
          padding: "36px 10px",
          borderRadius: "12px",
        }}>
        <FormControl
          key={formIdx}
          style={{ margin: "14px 7px", display: "contents" }}>
          {formFields.fields.map((fieldData, idx) => {
            let inputField = getInputField(fieldData, data, formIdx);
            return (
              <div
                key={idx}
                style={{
                  display: fieldData.name === "problemsList" ? "" : "flex",
                }}>
                <span style={{ margin: "20px 15px" }}>
                  <InputLabel
                    htmlFor='my-input'
                    style={{ display: "contents" }}>
                    {fieldData.label}
                  </InputLabel>
                </span>
                <span style={{ margin: "20px 15px", width: "500px" }}>
                  <InputLabel
                    htmlFor='my-input'
                    style={{ display: "contents", marginRight: "5px" }}>
                    {inputField}
                  </InputLabel>
                </span>
              </div>
            );
          })}
        </FormControl>
      </Paper>
    );
  };

  return (
    <div style={{ margin: "20px 9px" }}>
      <div>
        <div style={{ color: "blue" }}>
          <strong>Pain & Functional Description</strong>
        </div>
        <div>
          <p>
            The description of the current situation gives your Optimum Trainer
            a picture of and clues of the underling causes of your problems
          </p>
        </div>
        <Container
          maxWidth='md'
          style={{
            padding: "20px 10px",
          }}>
          {formData.map((data, formIdx) => getForm(data, formIdx))}
        </Container>
      </div>
      <div>
        <ButtonGroup
          variant='contained'
          color='primary'
          aria-label='contained primary button group'
          style={{ boxShadow: "none" }}>
          <AddCircleIcon onClick={handleAppendFields} color='primary' />
        </ButtonGroup>
        <hr style={{ color: "grey" }} />
        <ButtonGroup
          variant='contained'
          color='primary'
          aria-label='contained primary button group'>
          <Button className={"success"}>Back</Button>
          <Button
            onClick={handleAction}
            className={"success"}
            style={{ marginLeft: "5px", border: "none" }}>
            Next
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default connect(null)(HomePage);
