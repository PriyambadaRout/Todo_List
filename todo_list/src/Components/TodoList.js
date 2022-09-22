import React, { useEffect, useState } from 'react'
import NewTask from './NewTask';
import Cards from './Cards';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
    const [modal, setModal] = useState(false);

    const [taskList, setTaskList] = useState([]);


    useEffect(() => {
        let arr = localStorage.getItem("taskList");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, [])

    

    const deleteTask = (index) => {
        let templist = taskList;
        templist.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(templist));
        setTaskList(templist);
        window.location.reload();
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let templist = taskList;
        templist.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(templist));
        setTaskList(templist)
        setModal(false)
        console.log(templist);
        toast('Task Added Successfully', {
            position: toast.POSITION.BOTTOM_LEFT,
        });
    }

    const taskStatus= (taskObj, index) => {
        console.log("task status", taskObj);
    }


    const updateListArray = (obj, index) => {
        let templist = taskList;
        templist[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(templist));
        setTaskList(templist)
        window.location.reload();
    }
    

    return (
        <>
            <div className='task-header text-center'>
                <h3>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className='row'>
                <div className='task-body col-6'>
                    <h4>Tasks</h4>
                    {taskList && taskList.map((obj, index) => <Cards taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} taskStatus={taskStatus}/>)}
                </div>
                <div className='task_section col-6'>
                    <h4>Section</h4>
                </div>
            </div>
            <NewTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
}

export default TodoList;
