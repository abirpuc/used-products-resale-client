import React, { useEffect, useState } from 'react';
import BookingModal from '../../Products/BookingModal/BookingModal';
import Advertise from './Advertise';

const AdvertisedItem = () => {
    const [advertisedItem, setAdvertisedItem] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [buy, setBuy] = useState(false);
    useEffect(() => {
        setSpinner(true)
        fetch('https://used-products-reasel-market-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
               
                setAdvertisedItem(data)
                setSpinner(false)
            })
    }, [])
    const sell = advertisedItem.filter(sell => sell.sell_status === true)
    console.log(sell);
    return (
        <>
            {
                (sell.length <= 0) ? <></> :
                    <div className='mt-10 w-3/4 mx-auto'>
                        <div className='text-center text-info w-3/4 mx-auto'>
                            <h1 className='text-5xl'>Advertised Products</h1>
                            <p className='text-xl mt-3'>Advertised products for Customer this products are so special for customer and flexible price.</p>
                        </div>
                        <div className='px-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10'>
                            {
                                advertisedItem.map(ad => <Advertise
                                    key={ad.id}
                                    ad={ad}
                                    setBuy={setBuy}
                                ></Advertise>)
                            }

                        </div>
                        {
                            buy && <BookingModal
                                setBuy={setBuy}
                                buy={buy}
                            ></BookingModal>
                        }
                    </div>
            }
        </>
    );
};

export default AdvertisedItem;