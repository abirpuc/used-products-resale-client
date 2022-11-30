import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hooks/Title/UseTile';

const AllSeller = () => {
    UseTitle('All-Seller');
    const [sellers, setSeller] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/users/seller')
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [])

    const handleDelete = (id) => {
        const bookingDelete = window.confirm("Are want to delete this")
        if (bookingDelete){
            fetch(`http://localhost:5000/users/seller/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('your delete successfully done!')
                        const remaining = sellers.filter(rev => rev._id !== id)
                        setSeller(remaining)
                      
                    }
                })
        }

    }

    const handleMakeAdmin = (id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:"PUT"
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = sellers.filter(rev => rev.userType !== 'admin')
                sellers(remaining)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 className='text-center text-primary text-2xl'>All Seller</h1>
            <div className="overflow-x-auto m-8">
                <table className="table w-full">
                    <thead className='text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>change status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map(seller =>
                                <tr>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.mobile}</td>
                                    <td>
                                        <button onClick={() => handleMakeAdmin(seller._id)} className='btn btn-xs btn-secondary'>make admin</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleMakeAdmin(seller._id)} className='btn btn-xs btn-warning'>Make Verified</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(seller._id)} className='btn btn-xs btn-error'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;