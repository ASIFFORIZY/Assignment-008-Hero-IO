import React from 'react';
import logo from '../../assets/logo.png'
import x from '../../assets/x.png'
import id from '../../assets/ld.png'
import fb from '../../assets/fb.png'


const Footer = () => {
    return (
        <div className='bg-[#001931]  p-15 text-white mt-10'>
            <div className=' flex justify-center items-center text-center ' >
                <div className=' footer sm:footer-horizontal  text-base-content p-10 bg-[#001931] '>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="" className='w-8'/>
                        <h1 className='font-semibold text-white'>HERO.IO</h1>
                    </div>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav >
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <div>
                    <div>
                        <h1>Social Links</h1>
                    </div>
                    <div className='flex gap-2'>
                        <a target='blank' href="https://x.com/ELc__LEE"><img src={x} alt="" /></a>
                        <a target='blank' href="https://www.linkedin.com/in/saifur-rahaman-a2561b271/"><img src={id} alt="" /></a>
                        <a target='blank' href="https://www.facebook.com/as.if.434777"><img src={fb} alt="" /></a>
                    </div>
                </div>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-center' >Copyright © 2025 - All right reserved</h1>
            </div>
        </div>
    );
};

export default Footer;
