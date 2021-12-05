import React from 'react';
import external from "../images/external.svg";

class Footer extends React.Component {
   render() {
      return (
				<div id="footer">
					<div className="container mx-auto white px-5">
						<div className="flex flex-col lg:flex-row w-full">
							<div className="flex flex-col lg:flex-row justify-between flex-1">
								<div className="col mb-8 lg:mb-0">
									<ul>
										<li className="font-bold mb-10 text-2xl">One</li>
										<li className="mb-5">Vitae Nec</li>
										<li className="mb-5">Purus</li>
										<li className="mb-5">Nibh</li>
										<li className="mb-5">Proin</li>
										<li className="mb-5">Blandit</li>
										<li className="mb-5">Malesuada</li>
									</ul>
								</div>
								<div className="col mb-8 lg:mb-0">
									<ul>
										<li className="font-bold mb-10 text-2xl">Two</li>
										<li className="mb-5">Vitae Nec</li>
										<li className="mb-5">Purus</li>
										<li className="mb-5">Nibh</li>
										<li className="mb-5">Proin</li>
										<li className="mb-5">Blandit</li>
										<li className="mb-5">Malesuada</li>
									</ul>
								</div>
								<div className="col mb-8 lg:mb-0">
									<ul>
										<li className="font-bold mb-10 text-2xl">Three</li>
										<li className="mb-5">Vitae Nec</li>
										<li className="mb-5">Purus</li>
										<li className="mb-5">Nibh</li>
										<li className="mb-5">Proin</li>
										<li className="mb-5">Blandit</li>
										<li className="mb-5">Malesuada</li>
									</ul>
								</div>
								<div className="col mb-8 lg:mb-0 pr-0 lg:pr-48">
									<ul>
										<li className="font-bold mb-10 text-2xl">Four</li>
										<li className="mb-5">Vitae Nec</li>
										<li className="mb-5">Purus</li>
										<li className="mb-5">Nibh</li>
										<li className="mb-5">Proin</li>
										<li className="mb-5">Blandit</li>
										<li className="mb-5">Malesuada</li>
									</ul>
								</div>
							</div>
							<div className="flex w-full lg:w-1/4 relative">
								<p className="border all grey m-0 p-5 flex self-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat arcu hendrerit eleifend ullamcorper. Ut fermentum.</p>
								<img src={external} className="absolute external" alt="product"/>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row pt-12 pb-12 lg:pt-24 pb-20">
							<div className="flex-1 text-xs">
								<p className="font-bold">Diam egestas ultrices odio vitae.</p>
								<p className="w-full lg:w-3/4 mt-7 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor proin tempor sed fermentum sit pretium pellentesque. Dictumst risus elementum dignissim risus, lobortis molestie.</p>
							</div>
							<div>
								<ul className="flex flex-row justify-between mt-6 lg:mt-0">
									<li className="">Ultrices posuere</li>
									<li className="mx-0 lg:mx-10">Ac blandit</li>
									<li className="">Ut hac et</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
      );
   }
}
export default Footer;
