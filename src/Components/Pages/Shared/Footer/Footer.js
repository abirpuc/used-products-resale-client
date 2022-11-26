import React from 'react';

const Footer = () => {
    return (
        <footer data-reactroot className="footer p-10 bg-secondary text-neutral">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Used Bike Selling</a>
                <a className="link link-hover">Used Bike Buying</a>
                <a className="link link-hover">Used Marketing</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">ResaleMarket</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">resale@gmail.com</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;