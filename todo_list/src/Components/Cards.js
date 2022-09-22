import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import EditTask from './EditTask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({ taskObj, index, deleteTask, updateListArray, taskStatus }) => {

    const [modal, setModal] = useState(false);
    const [complete, setComplete] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    const updateTask = (Obj) => {
        updateListArray(Obj, index);
    }


    const handleDelete = () => {
        deleteTask(index);
        toast('Task Deleted Successfully', {
            position: toast.POSITION.BOTTOM_LEFT,
        });
    }


    const completeTask = (e) => {
        taskStatus(taskObj, index);
        const { value, checked } = e.target;
        if (e.target.checked) {
            taskObj["Status"] = "Complete"
            console.log(`${value} is ${checked}`);
        } else {
            taskObj["Status"] = "incomplete"
            console.log(`${value} is ${checked}`);
        }
        setComplete(current => !current);
    }
console.log(taskObj);

    return (
        <div class="card-wrapper">
            <div class="card-top" style={{ backgroundColor: "#F67280" }}></div>
            <div class="task-holder">
                <span class="card-header" style={{ backgroundColor: "#F2FAF1", borderRadius: "10px" }}>{taskObj.Title}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div style={{ "position": "absolute", "left": "20px", "bottom": "20px" }}>
                    <input type="checkbox" style={{ color: '#E56E94', cursor: 'pointer' }} value='task' onChange={completeTask} />
                </div>
                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <FiEdit style={{ color: '#E56E94', cursor: 'pointer', marginRight: '3px' }} onClick={() => setModal(true)} />
                    <MdDelete style={{ color: '#FA2A55', cursor: 'pointer' }} onClick={handleDelete} />
                </div>
                <ToastContainer />
            </div>
            <EditTask toggle={toggle} modal={modal} update={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Cards;
