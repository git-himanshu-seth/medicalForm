import "../../styles/table.styles.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
function Summary(props) {
  const [formData, setFormData] = useState([]);
  const data = useSelector((state) => state.summary.summaryData);
  useEffect(() => {
    if (data && data.length > 0) {
      setFormData(data);
    }
  }, [data]);
  return (
    <div className='container'>
      <table>
        <tr>
          <th> Sno</th>
          <th>problemsList</th>
          <th> Have you been diagnosed with this problems?</th>
          <th> Did the problem start after a physical trauma?</th>
          <th> Did the problem start after a mental trauma</th>
          <th> How often do you experince the problem</th>
          <th>When do you experience the problem</th>
          <th> rate the problem</th>
          <th>Other? For example in rotaions, side bends,...</th>
        </tr>
        {formData.map((data, formIdx) => (
          <tr>
            <td> {++formIdx}</td>
            {data.problemsList ? <td>{data.problemsList}</td> : <td></td>}
            {data.problem ? <td>{data.problem}</td> : <td></td>}
            {data.physicalTrauma ? <td>{data.physicalTrauma}</td> : <td></td>}
            {data.mentalTrauma ? <td>{data.mentalTrauma}</td> : <td></td>}
            {data.problemOccurs ? <td>{data.problemOccurs}</td> : <td></td>}
            {data.problemHappened ? (
              <td>{data.problemHappened.join(", ")}</td>
            ) : (
              <td></td>
            )}
            {data.otherProblems ? <td>{data.otherProblems}</td> : <td></td>}
            {data.rateScale ? <td>{data.rateScale}</td> : <td></td>}
          </tr>
        ))}
      </table>
      <button onClick={() => props.navigate("/")}>Home</button>
    </div>
  );
}

export default Summary;
