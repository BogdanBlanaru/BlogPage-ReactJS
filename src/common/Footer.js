import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className='footer_container mx-auto'>
				<img
					className='logo_footer'
					src='https://i0.wp.com/www.namecheap.com/blog/wp-content/uploads/2016/11/Blog_RGB_Color_Digital_General_Logo_Large-1.jpg?quality=100'
				/>
				<div className='util_links'>
					<Link className='links' to='/'>
						Home
					</Link>
					<Link className='links' to='/wishlist'>
						Wishlist
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
