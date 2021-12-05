import React from 'react';
import logo1 from "../images/logo-1.svg";
import logo2 from "../images/logo-2.svg";
import logo3 from "../images/logo-3.svg";
import logo4 from "../images/logo-4.svg";
import logo5 from "../images/logo-5.svg";
import logo6 from "../images/logo-6.svg";

class Clients extends React.Component {
   render() {
      return (
					<div className="container mx-auto text-center px-5 pt-24 lg:pt-32 pb-28">
						<h2 className="font-bold text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant.</h2>
						<ul className="flex flex-row flex-wrap justify-around items-center py-16 lg:py-12">
							<li><img src={logo1} className="m-8" alt="logo" /></li>
							<li><img src={logo2} className="m-8" alt="logo" /></li>
							<li><img src={logo3} className="m-8" alt="logo" /></li>
							<li><img src={logo4} className="m-8" alt="logo" /></li>
							<li><img src={logo5} className="m-8" alt="logo" /></li>
							<li><img src={logo6} className="m-8" alt="logo" /></li>
						</ul>
						<span className="border btm light font-bold pb-1">Ut eleifend.</span>
         </div>
      );
   }
}
export default Clients;
