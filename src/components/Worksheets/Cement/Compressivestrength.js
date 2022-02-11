import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../../../assets/css/style.css"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
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


    snackbar: {
        bottom: "104px",
    },
});

function Compressivestrength() {
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
    var linkStyle;

    linkStyle = { border: '1pxsolid black' }

    return (


        <div className="container">
            <table className="mt-5 cement-cs-table">
                <tr>
                    <th colspan="11" className="text-center">
                        Renuks Consultants (Renuka Engineering Resarch Laboratories)

                    </th>
                </tr>
                <tr>
                    <th colspan="7" class="text-left">Work sheet for Compresive Strength of Cement Cubs(IS :4031)</th>

                    <th colspan="4">F/CEM/01,issue No.Page No.1 of 1</th>
                </tr>
                <tr >
                    <th colspan="6" class="text-left">
                        Sr No:
                    </th>
                    <th colspan="5">
                        Report No.(submitted to client):
                    </th>
                </tr>
                <tr>
                    <th colspan="11" class="text-left">Date of Received Sample :</th>
                </tr>
                <tr>
                    <th colspan="11" class="text-left">Type and grade of cement:</th>
                </tr>
                <tr>
                    <th colspan="11" class="text-left">Date of casting :  Time of Casting :</th>

                </tr>
                <tr>
                    <th rowspan="2" colspan="2">Curing Start</th>
                    <th>Date</th>
                    <th></th>
                    <th>Temp</th>
                    <th rowspan="2" colspan="2">Curing End</th>
                    <th>Date</th>
                    <th></th>
                    <th>Temp</th>
                </tr>
                <tr>
                    <th>Time</th>
                    <td></td>
                    <td></td>
                    <td>Time</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td colspan="11">h</td>
                </tr>


                <tr>

                    <th className="labID">Lab ID No:</th>
                    <th>Date and Time of Testing</th>
                    <th>Age of Testing(Days)</th>
                    <th>Weight of Cube(g)</th>
                    <th>Dimension of cube L X B X H(mm)</th>
                    <th>Cross Sectional Area (mm^3)</th>
                    <th>Maximum load(kN)</th>
                    <th>Comprehensive Strength(N/mm^3)</th>
                    <th>Average comprehensive Strength (N/mm^3)</th>
                    <th>Remark</th>
                    </tr>
                    <tr className="belloTableRow">

                        <td rowspan="3"></td>  <td></td>  <td></td>
                        <td></td>  <td></td>  <td></td>  <td ></td>
                        <td ></td>
                        <td rowspan="3"></td>
                        <td rowspan="3">d</td>

                    </tr>
                    <tr className="belloTableRow">
                        <td></td>  <td></td>  <td></td>
                        <td></td>  <td></td>  <td></td>  <td></td>

                    </tr>
                    <tr className="belloTableRow">
                        <td></td>  <td></td>  <td></td>
                        <td></td>  <td></td>  <td></td>  <td></td>

                    </tr>

                    <tr>

                        <th colspan="11">
                            Comprehensive Strength =Maximum Load /Area
                        </th>

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

export default Compressivestrength;