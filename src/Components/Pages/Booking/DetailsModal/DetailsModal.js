import React from 'react';

const DetailsModal = ({ book }) => {
    console.log(book);
    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Name: {book.productName}</h3>
                    <h3 className="font-bold text-lg">Price{book.productPrice}</h3>
                    <img src={book.productImg} alt="" />
                    <p className="py-4">Description: {book.description}</p>
                    <p className="py-4">Meeting Address: {book.meetingAddress}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-error text-white">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsModal;