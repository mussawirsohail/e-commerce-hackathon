import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
        <div className="Footer-header" >
            <h1 className="text-2xl font-bold" >Bandage</h1>
            <div className=" flex w-[236px] m-[5px]">
                <img src="facebookB.png" alt="" className='h-[24px] ml-[15px] w-[24px]'/>
                <img src="instaB.png" alt="" className='h-[24px] w-[24px] ml-[15px]'/>
                <img src="twitterB.png" alt="" className='h-[24px] w-[24px] ml-[15px]'/>
            </div>


        </div>
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3>Company Info</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/carrier">Carrier</Link></li>
            <li><Link href="/hiring">We are hiring</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/carrier">Carrier</Link></li>
            <li><Link href="/we-are-hiring">We are hiring</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Feature</h3>
          <ul>
            <li><Link href="/about-us">Business Marketing</Link></li>
            <li><Link href="/carrier">User Analytic</Link></li>
            <li><Link href="/we-are-hiring">Live Chat</Link></li>
            <li><Link href="/blog">Unlimited Support</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Rosources</h3>
          <ul>
            <li><Link href="/about-us">IOS & Android</Link></li>
            <li><Link href="/carrier">Watch a demo</Link></li>
            <li><Link href="/we-are-hiring">Customers</Link></li>
            <li><Link href="/blog">API</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
        <p className='ml-[65px]'>Made With Love By Finland All Right Reserved</p>
      
    </footer>
  );
};

export default Footer;