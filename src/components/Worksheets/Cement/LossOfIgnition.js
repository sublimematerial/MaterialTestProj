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
  
function LossOfIgnition() {
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
  

    <div class="container">
        <table className="mb-5 mt-5 cement-lossofignition-table">
           <tr >
               <th colspan="6">Renuks Consultants (Renuka Engineering Resarch Laboratories)</th>
           </tr>
           <tr>
               <th colspan="3">Work sheet for Consistency of Cement(REF:IS-4031 Part-f)(Reaffirmed 2009)</th>
               <td colspan="3"> F_CEM_o5 issue No.01,Page No.1 of 1</td>
           </tr>
        
           

      
            <tr>
                <td colspan="3">Sr.No. :</td>
                <td colspan="3">Report No.(Submitted to Client):</td>
            </tr>
            <tr>
                <td colspan="3">Date of Sample Received:</td>
                <td colspan="3">Date of Testing :</td>
            </tr>
            <tr>
                <td colspan="3">Type and Grade of cement:</td>
                <td colspan="3">Sample Id No.:</td>
            </tr>
    
            <tr>
                <th >Sr.N0.</th>  <th > Discription</th> 
                 <th >Unit</th>  
                 <th >Reading 1</th>  
                 <th >Reading 2</th>  
                 <th >Reading 3</th>  
                
            </tr>
            <tr>
                <td>1</td>
                <td>Weight of Cubic+Cement(W)</td> <td>gm</td>
                <td></td> <td></td>
                <td></td>
            </tr>

           
            <tr>
                <td>2</td> <td> Weight of Cubic+Cement After Heating(W) </td> <td>gm</td> <td></td>  <td></td><td></td>
            </tr>
            <tr>
                <td>3</td> <td> Loss on Ignition=(-W)*100</td> <td>%</td> <td>%</td>  <td></td><td></td>
            </tr>
         


        
         
        </table>
 
    
        <div class="container">
           
            <div class="row">
                <div class="w-50 m-auto py-5 text-center col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xlg-6"><h6>Tested By:</h6></div>
                <div class="w-50 m-auto py-5 text-center col-xs-6  col-sm-6 col-md-6 col-lg-6 col-xlg-6"><h6>Checked By:</h6></div>
                
            </div>
        </div>

    </div>
     
  );
}
  
export default LossOfIgnition;