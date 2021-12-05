import React from 'react';
import logo from '../images/logo.svg';
import headerImageDesktop from "../images/header-image-desktop.png";
import headerImage from "../images/header-image.png";
import burger from "../images/burger-menu.svg";

class Header extends React.Component {
   render() {
      return (
         <div>
						<div className="announcement text-center py-1.5 text-sm">
							<p>Scelerisque egestas et euismod<span class="ml-1 underline">Take me there</span></p>
						</div>
						<div id="header">
							<div className="container mx-auto">
								<div className="flex flex-row justify-between items-center py-10 px-5">
									<nav>
										<ul className="flex flex-row white">
											<li><img src={logo} className="logo mr-10" alt="logo" /></li>
											<li className="px-10 hidden lg:flex">One</li>
											<li className="px-10 hidden lg:flex">Two</li>
											<li className="px-10 hidden lg:flex">Three</li>
											<li className="px-10 hidden lg:flex">Four</li>
										</ul>
									</nav>
									<div className="flex flex-row">
										<div className="btn px-5 py-3 transparent hidden lg:flex">Log In</div>
										<div className="btn px-5 py-3 light hidden lg:flex">Request a demo</div>
										<img src={burger} className="flex lg:hidden mx-auto" alt="product"/>
									</div>
								</div>
							</div>
							<div className="container mx-auto mt-4 lg:mt-32 pb-20 lg:pb-44">
								<div className="flex flex-col lg:flex-row px-5 lg:mx-14">
									<div className="copy flex flex-1 flex-col white">
										<h1 class="text-4xl lg:text-7xl font-bold pr-0 lg:pr-8 mb-5">Vel quis feugiat pharetra diam viverra quis.</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus hendrerit dignissim duis fringilla sit. Lacus porttitor neque ipsum.</p>
										<div className="flex flex-col items-center lg:flex-row mt-6">
											<input className="pl-6 w-full lg:w-80 mr-0 lg:mr-2 mb-2 lg:mb-0 py-3 text-center lg:text-left" placeholder="Enter your email address"></input>
											<div className="btn px-5 py-3 w-full lg:w-32 light font-bold text-center">Get a demo</div>
										</div>
									</div>
									<div className="flex flex-1 mt-12 lg:mt-0 items-start">
										<img src={headerImageDesktop} className="hidden lg:flex mx-auto" alt="product"/>
										<img src={headerImage} className="flex lg:hidden mx-auto" alt="product"/>
									</div>
								</div>
							</div>
						</div>
         </div>
      );
   }
}
export default Header;
