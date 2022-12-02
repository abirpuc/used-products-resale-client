import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hooks/Title/UseTile';

const AllCustomer = () => {
    UseTitle('All-Customer');
    const [customers, setCustomer] = useState([])
    useEffect(() => {
        fetch('https://used-products-reasel-market-server.vercel.app/users/buyer')
            .then(res => res.json())
            .then(data => setCustomer(data))
    }, [])

    const handleDelete = (id) => {
        const bookingDelete = window.confirm("Are want to delete this")
        if (bookingDelete){
            fetch(`https://used-products-reasel-market-server.vercel.app/users/buyer/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('your delete successfully done!')
                        const remaining = customers.filter(rev => rev._id !== id)
                        setCustomer(remaining)
                    }
                })
        }

    }

    const handleMakeAdmin = (id)=>{
        fetch(`https://used-products-reasel-market-server.vercel.app/users/admin/${id}`,{
            method:"PUT"
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                const remaining = customers.filter(rev => rev.userType !== 'admin')
                setCustomer(remaining)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 className='text-center text-primary text-2xl'>All Buyers</h1>
            <div className="overflow-x-auto m-8">
                <table className="table w-full">
                    <thead className='text-white'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>change status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers?.map(customer =>
                                <tr>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.mobile}</td>
                                    <td>
                                        <button onClick={()=>handleMakeAdmin(customer._id)} className='btn btn-xs btn-secondary'>make admin</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(customer._id)} className='btn btn-xs btn-error'>Delete</button>
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

export default AllCustomer;