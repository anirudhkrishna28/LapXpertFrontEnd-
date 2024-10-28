import React, { useState } from 'react';
import axios from 'axios';
// import {localStorage} from 'local-storage';

function AddShop() {
    const [formData, setFormData] = useState({
        name: '',
        id:'',
        admin: true,
        description: '',
        location: '',
        rating: 0,
        mobile_no: 0,
        photo_url: '',
        laptops: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLaptopChange = (index, e) => {
        const { name, value } = e.target;
        const laptops = [...formData.laptops];
        laptops[index][name] = value;
        setFormData({
            ...formData,
            laptops
        });
    };

    const addLaptop = () => {
        setFormData({
            ...formData,
            laptops: [...formData.laptops, {
                
            }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
// get userid from local storage
            const id = localStorage.getItem('id');
            console.log(id);
            setFormData({
                ...formData,
                id: id
            });
            console.log(formData);
           console.log(formData.laptops);
            if(formData.id !== ""){
            const response = await axios.post('http://127.0.0.1:8000/shop/add', formData);
            console.log(response);
            if (!response.data.error) {
                throw new Error('Failed to add shop details');
            }
            alert('Shop details added successfully');
        }
            // Optionally, you can redirect the user or do something else after successful submission
        } catch (error) {
            console.error('Error adding shop details:', error);
            alert('Error adding shop details. Please try again.');
        }
        
    };

    return (
        <div>
            <h1>Add Shop Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />

                

                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea><br />

                <label htmlFor="location">Location:</label><br />
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} /><br />


                <label htmlFor="mobile_no">Mobile No:</label><br />
                <input type="text" id="mobile_no" maxLength={10} name="mobile_no" value={formData.mobile_no} onChange={handleChange} /><br />

                <label htmlFor="photo_url">Photo URL:</label><br />
                <input type="text" id="photo_url" name="photo_url" value={formData.photo_url} onChange={handleChange} /><br />


                

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddShop;
