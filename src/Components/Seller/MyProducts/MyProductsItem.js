import React from 'react';

const MyProductsItem = ({product}) => {
    console.log(product);
    const{_id,product_name,price} = product
    return (
            <tr>
                <td className='text-neutral text-xl '>{product_name}</td>
                <td className='text-neutral text-xl '>{price}</td>
                <td>
                    <div className="flex">
                        <button className='btn btn-sm btn-warning mr-5'>Advertise</button>
                        <button className='btn btn-sm btn-info'>Details</button>
                    </div>
                </td>
                <td >
                    <div className='flex'>
                        <button className='btn btn-sm btn-success mr-5'>Update</button>
                        <button className='btn btn-sm btn-error'>Delete</button>
                    </div>
                </td>
            </tr>
    );
};

export default MyProductsItem;