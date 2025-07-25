import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Form() {
    const [formdata, setFormdata] = useState({ fname: '', address: '', number: '', anumber:'', vnumber: '', engine: '', model: '', year: '', colour: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
    
        axios.post('http://localhost:5000/addservice', {formdata} )
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
    <div>
        {/* <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i><br/><br/><br/> */}
        <div id='contact' className='row mus'>
            <div className='col-md-12'>
                <h1 className='text-white p-5'>Get A Fair Quote Along With Free Doorstep Pick-up & Drop Facility</h1>
                <button onClick={openModal} type='submit' className="btn2 mb-5">Request a Callback</button>
                {isOpen && (
                    <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h5 style={{color: 'red'}}>Job Card</h5>
                        <form onSubmit={handleSubmit}>
                        <h4 style={{color:'red'}}>Customer Details</h4>
                        <label>Name:</label>
                        <input onChange={(e) => setFormdata({ ...formdata, fname: e.target.value})} name='fname' type='text' /><br/>
                        <label>Address:</label>
                        <input onChange={(e) => setFormdata({ ...formdata, address: e.target.value})} name='address' type='text' /><br/>
                        <label>Phone Number:</label>
                        <input onChange={(e) => setFormdata({ ...formdata, number: e.target.value})} name='number' type='text' /><br/>
                        <label>Alternative Number (Optional):</label>
                        <input onChange={(e) => setFormdata({ ...formdata, anumber: e.target.value})} name='anumber' type='text' /><br/>
                        <h4 style={{color:'red'}}>Vehicle Details</h4>
                        <label>Vehicle Number:</label>
                        <input onChange={(e) => setFormdata({ ...formdata, vnumber: e.target.value})} name='vnumber' type='text' /><br/>
                        <label>Engine Number:</label>
                        <input onChange={(e) => setFormdata({ ...formdata, engine: e.target.value})} name='engine' type='text' /><br/>
                        <label>Model:</label>
                        <input onChange={(e) => setFormdata({ ...formdata, model: e.target.value})} name='model' type='text' /><br/>
                        <label>Year:</label>
                        <input onChange={(e) => setFormdata({ ...formdata, year: e.target.value})} name='year' type='text' /><br/>
                        <label>Colour:</label>
                        <input onChange={(e) => setFormdata({ ...formdata, colour: e.target.value})} name='colour' type='text' /><br/>
                        <input className='das' type='submit' value='Submit' />
                        </form>
                    </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
