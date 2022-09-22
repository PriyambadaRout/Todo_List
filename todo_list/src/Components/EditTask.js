import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';


const EditTask = ({ modal, toggle, update, taskObj }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleChange = (e) => {
        const {name, value} = e.target
        if (name === "title"){
            setTitle(value)
        }else {
            setDescription(value);
        }
        console.log(value);
    }

    useEffect(() => {
        setTitle(taskObj.Title);
        setDescription(taskObj.Description);
    }, [])  

    const updateTask = (e) => {
        e.preventDefault();
        let tempObj= {};
        tempObj['Title'] = title;
        tempObj['Description'] = description;
        update(tempObj);
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label>Task Title:</label>
                            <input type="text" className='form-control mt-3' value={title} name="title" onChange={handleChange}/>
                        </div>
                        <div className='form-group mt-3'>
                            <label>Task Description:</label>
                            <textarea rows="5" className='form-control mt-3' value={description} name="description" onChange={handleChange}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={updateTask}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>

    )

}

export default EditTask