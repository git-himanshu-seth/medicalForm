import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  ButtonGroup,
  Button,
} from "@material-ui/core";
function Summary(props) {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const [formData, setFormData] = useState([]);
  const data = useSelector((state) => state.summary.summaryData);
  useEffect(() => {
    if (data && data.length > 0) {
      setFormData(data);
    }
  }, [data]);
  return (
    <div style={{ margin: "30px 20px" }}>
      <TableContainer style={{ width: "100%" }}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell> </StyledTableCell>
              <StyledTableCell align='right'>Sno.</StyledTableCell>
              <StyledTableCell align='right'>problemsList</StyledTableCell>
              <StyledTableCell align='right'>
                Have you been diagnosed with this problems?
              </StyledTableCell>
              <StyledTableCell align='right'>
                Did the problem start after a physical trauma?
              </StyledTableCell>
              <StyledTableCell align='right'>
                Did the problem start after a mental trauma?
              </StyledTableCell>
              <StyledTableCell align='right'>
                How often do you experince the problem?
              </StyledTableCell>
              <StyledTableCell align='right'>
                Did the problem start after a mental trauma?
              </StyledTableCell>
              <StyledTableCell align='right'> rate the problem</StyledTableCell>
              <StyledTableCell align='right'>
                Other? For example in rotaions, side bends,...
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((data, formIdx) => (
              <StyledTableRow key={formIdx}>
                <td> </td>
                <StyledTableCell align='right'>{++formIdx}</StyledTableCell>
                {data.problemsList ? (
                  <StyledTableCell align='right'>
                    {data.problemsList}
                  </StyledTableCell>
                ) : (
                  <td></td>
                )}
                {data.problem ? (
                  <StyledTableCell align='right'>
                    {data.problem}
                  </StyledTableCell>
                ) : (
                  <td></td>
                )}
                {data.physicalTrauma ? (
                  <StyledTableCell align='right'>
                    {data.physicalTrauma}
                  </StyledTableCell>
                ) : (
                  <td></td>
                )}
                {data.mentalTrauma ? (
                  <StyledTableCell align='right'>
                    {data.mentalTrauma}
                  </StyledTableCell>
                ) : (
                  <td></td>
                )}
                {data.problemOccurs ? (
                  <StyledTableCell align='right'>
                    {data.problemOccurs}
                  </StyledTableCell>
                ) : (
                  <td></td>
                )}
                {data.problemHappened ? (
                  <StyledTableCell align='right'>
                    {data.problemHappened.join(", ")}
                  </StyledTableCell>
                ) : (
                  <td></td>
                )}
                {data.otherProblems ? (
                  <StyledTableCell align='right'>
                    {data.otherProblems}
                  </StyledTableCell>
                ) : (
                  <td></td>
                )}
                {data.rateScale ? (
                  <StyledTableCell align='right'>
                    {data.rateScale}
                  </StyledTableCell>
                ) : (
                  <td></td>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonGroup
        variant='contained'
        color='primary'
        aria-label='contained primary button group'>
        <Button onClick={() => props.navigate("/")}> BACK</Button>
      </ButtonGroup>
    </div>
  );
}

export default Summary;
