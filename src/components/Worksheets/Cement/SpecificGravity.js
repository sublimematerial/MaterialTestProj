import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import "../../../assets/css/style.css";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
  
// Creating styles
const useStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
    table: {
        minWidth: 650,
    },
    snackbar: {
        bottom: "104px",
    },
});
  
function SpecificGravity() {
    // Creating style object
    const classes = useStyles();
  
    // Defining a state named rows
    // which we can update by calling on setRows function
    const [rows, setRows] = useState([
        { id: 1, firstname: "", lastname: "", city: "" },
    ]);
  
    // Initial states
    const [open, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const [showConfirm, setShowConfirm] = React.useState(false);
  
    // Function For closing the alert snackbar
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
  
    // Function For adding new row object
    const handleAdd = () => {
        setRows([
            ...rows,
            {
                id: rows.length + 1, firstname: "",
                lastname: "", city: ""
            },
        ]);
        setEdit(true);
    };
  
    // Function to handle edit
    const handleEdit = (i) => {
        // If edit mode is true setEdit will 
        // set it to false and vice versa
        setEdit(!isEdit);
    };
  
    // Function to handle save
    const handleSave = () => {
        setEdit(!isEdit);
        setRows(rows);
        console.log("saved : ", rows);
        setDisable(true);
        setOpen(true);
    };
  
    // The handleInputChange handler can be set up to handle
    // many different inputs in the form, listen for changes 
    // to input elements and record their values in state
    const handleInputChange = (e, index) => {
        setDisable(false);
        const { name, value } = e.target;
        const list = [...rows];
        list[index][name] = value;
        setRows(list);
    };
  
    // Showing delete confirmation to users
    const handleConfirm = () => {
        setShowConfirm(true);
    };
  
    // Handle the case of delete confirmation where 
    // user click yes delete a specific row of id:i
    const handleRemoveClick = (i) => {
        const list = [...rows];
        list.splice(i, 1);
        setRows(list);
        setShowConfirm(false);
    };
  
    // Handle the case of delete confirmation 
    // where user click no 
    const handleNo = () => {
        setShowConfirm(false);
    };
  
  return (
  
    <div className="container">
    <table className="mb-5 mt-5 cement-specificgravity-table">
       <tr >
           <th colspan="2">Renuks Consultants (Renuka Engineering Resarch Laboratories)</th>
       </tr>
       <tr>
           <th  className="col-6">Work sheet for Consistency of Cement(REF:IS-4031 Part-f)(Reaffirmed 2009)</th>
           <td  className="col-6"> F_CEM_o5 issue No.01,Page No.1 of 1</td>
       </tr>
    
       

   
        <tr>
            <td className="col-6">Sr.No. :</td>
            <td  className="col-6">Report No.(Submitted to Client):</td>
        </tr>
        <tr>
            <td>Date of Sample Received:</td>
            <td>Date of Testing :</td>
        </tr>
        <tr>
            <td>Type and Grade of cement:</td>
            <td>Sample Id No.:</td>
        </tr>
    </table>
      <table  className="cement-specificgravity-table">
        <tr>
            <th>Sl.No.</th>  <th>Weight of Cement in(g)</th> 
             <th>(%)Water Addes</th>  <th>Water in (ml)</th>  
            <th>Penetration in (mm)</th>  
        </tr>

        <tr>
            <td>1</td> <td></td> <td></td> <td></td> <td></td> 
        </tr>
        <tr>
            <td>2</td> <td></td> <td></td> <td></td> <td></td> 
        </tr>
        <tr>
            <td>3</td> <td></td> <td></td> <td></td> <td></td> 
        </tr>
        <tr>
            <td rowspan="5" colspan="3"></td> <td></td> <td></td>
        </tr>
        <tr>
            <td>5</td> <td></td>
        </tr>
        <tr><td></td> <td></td>
        </tr>
        <tr>
            <td>5</td> <td></td> 
        </tr>
        <tr>
            <td>5</td> <td></td> 
        </tr>
        <tr >
            <td>Specify C Gravity</td>

            
            <td>(a-b)/c(final Value=Sp Gravity</td>  
        </tr>
       

    
     
    </table>
    <div className="container">
       
        <div className="row">
            <div className="w-50 m-auto py-5 text-center col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xlg-6"><h6>Tested By:</h6></div>
            <div className="w-50 m-auto py-5 text-center col-xs-6  col-sm-6 col-md-6 col-lg-6 col-xlg-6"><h6>Checked By:</h6></div>
            
        </div>
    </div>

</div>

     
  );
}
  
export default SpecificGravity;