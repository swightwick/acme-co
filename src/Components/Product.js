import React from 'react';
import product from "../images/product1.svg";

class Product extends React.Component {
   render() {
      return (
				<div id="product1">
					<div className="container mx-auto flex flex-col lg:flex-row mt-6 lg:mb-10 lg:mt-20 px-5 overflow-hidden">
						<div className="flex-1 pl-0 xl:pl-32 md:pt-0 xl:pt-12">
							<h1 className="text-3xl lg:text-5xl font-bold pr-0 pr-0 xl:pr-32 xl:pr-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis.</h1>
							<p className="mb-5 pr-0 xl:pr-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ullamcorper id tristique tincidunt. Tincidunt feugiat at mi feugiat hendrerit. Ac faucibus accumsan, quis lacus, lectus eget bibendum. At praesent quisque sollicitudin fusce.</p>
						</div>
						<div className="flex flex-1 justify-center lg:justify-start">
							<img src={product} className="flex m-0 task-page" alt="product"/>
						</div>
					</div>
				</div>
      );
   }
}
export default Product;
