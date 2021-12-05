import React from 'react';

class Search extends React.Component {
   render() {
      return (
				<div id="search">
					<div className="container mx-auto pt-16 lg:pt-24 pb-20 lg:pb-44">
						<div className="flex flex-col lg:flex-row px-5 ">
							<div className="copy flex flex-1 flex-col white">
								<h1 class="text-3xl lg:text-5xl font-bold pr-0 lg:pr-8 mb-3">Tristique tempus tincidunt.</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
								<div className="flex flex-col items-center lg:flex-row mt-6">
									<input className="pl-6 w-full lg:w-80 mr-0 lg:mr-4 mb-2 lg:mb-0 py-3 text-center lg:text-left" placeholder="Enter your email address"></input>
									<div className="btn px-5 py-3 w-full lg:w-32 light text-center">Get a demo</div>
								</div>
							</div>
						</div>
					</div>
				</div>
      );
   }
}
export default Search;
