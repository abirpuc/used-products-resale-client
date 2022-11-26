import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?cs=srgb&dl=pexels-pixabay-163210.jpg&fm=jpg")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left text-info">
                    <h1 className="text-5xl font-bold">ABOUT US</h1>
                    <p className="py-6 text-xl bg-accent">Hello customer, we provide you lots of old bike selling and buying with in flexible price.</p>
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl">
                    <h1 className='text-center text-3xl text-primary'>Contact With US</h1>
                    <div className="card-body">
                        <div className="form-control my-2">
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control my-2">

                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control my-2">
                            <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;