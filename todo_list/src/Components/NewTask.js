import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const NewTask = ({ modal, toggle, save }) => {

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

    const saveTask = () => {
        let taskObj = {}
        taskObj["Title"] = title
        taskObj["Description"] = description
        taskObj["Status"]= "incomplete"
        save(taskObj)
        
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
                    <Button color="primary" onClick={saveTask}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>

    )

}

export default NewTask