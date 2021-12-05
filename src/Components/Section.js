import React from 'react';
import imageDesktop from "../images/section-1-image-desktop.svg";
import image from "../images/section-1-image.svg";


class Section extends React.Component {
   render() {
      return (
				<div className="container mx-auto mb-10 lg:mb-28 px-5">
					<div className="w-full lg:w-1/2 mb-8 ml-0 lg:ml-12">
						<h1 className="text-3xl lg:text-5xl font-bold pr-0 lg:pr-8 mb-5">Sem enim cursus orci at.</h1>
						<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, vitae et, vitae et cursus amet tincidunt feugiat nulla. Senectus maecenas diam risus sodales dictum eu. Eget cursus sit bibendum pulvinar faucibus vitae nam sed. Faucibus vel laoreet.</p>
						<span className="border btm light font-bold pb-1">Learn More</span>
					</div>
					<div className="">
						<img src={imageDesktop} className="hidden lg:flex mx-auto" alt="product"/>
						<img src={image} className="flex lg:hidden mx-auto" alt="product"/>
					</div>
				</div>
      );
   }
}
export default Section;
