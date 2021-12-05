import React from 'react';
import product from "../images/product2.svg";
import productDesktop from "../images/product2-desktop.svg";

class Product2 extends React.Component {
   render() {
      return (
				<div className="container mx-auto text-center flex flex-col pt-10 pb-4 lg:py-24 px-5">
						<h1 className="text-3xl lg:text-5xl font-bold mb-5">Dui tellus quis magna id ultricies eu sed.</h1>
						<p className="mb-5 w-full lg:w-1/2 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu, aenean viverra penatibus quis. Laoreet.</p>
						<img src={product} className="flex lg:hidden w-full lg:w-3/4 mx-auto" alt="product"/>
						<img src={productDesktop} className="hidden lg:flex w-full lg:w-3/4 mx-auto" alt="product"/>
				</div>
      );
   }
}
export default Product2;
