import React from 'react';
import person from "../images/person.png";

class Testimonial extends React.Component {
   render() {
      return (
				<div className="container mx-auto flex flex-col lg:flex-row white mt-12 mb-16 lg:my-24 purple">
					<div className="flex-1 px-5 lg:px-12">
						<img src={person} className="flex w-full" alt="product"/>
					</div>
					<div className="flex-1 px-5 lg:px-12">
						<p className="mt-12 lg:mt-16">Viverra enim diam gravida risus nisl.</p>
						<p className="font-bold mb-10">Lectus eu.</p>
						<p className="text-2xl font-bold mb-10 pr-0 lg:pr-28">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim vel.</p>
						<div className="flex text-left justify-center lg:justify-start">
							<p className="border btm light font-bold pb-1">Ut convallis massa.</p>
						</div>
					</div>
				</div>
      );
   }
}
export default Testimonial;
