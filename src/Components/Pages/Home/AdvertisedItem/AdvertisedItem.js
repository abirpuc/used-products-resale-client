import React from 'react';
import Advertise from './Advertise';

const AdvertisedItem = () => {
    const advertisedItem = [
        {
            id: "01",
            name: "First Products"
        },
        {
            id: "02",
            name: "First Products"
        },
        {
            id: "03",
            name: "First Products"
        },
        {
            id: "04",
            name: "First Products"
        },
        {
            id: "05",
            name: "First Products"
        },
        {
            id: "06",
            name: "First Products"
        },
    ]
    return (
        <>
            {
                (advertisedItem.length <= 0) ? <></> :
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
                                ></Advertise>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default AdvertisedItem;