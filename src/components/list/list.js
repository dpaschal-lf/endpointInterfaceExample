import React, {Component} from 'react';
import './list.css';

class List extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div class="container">
					<div class="row">
						<img class="smallImage" src="images/tophat.jpg">
						<div class="nameContainer">Top Hat</div>
						<div class="priceContainer">$16.20</div>
						<div class="colorContainer">
							<div class="colorSquare" style="background-color: black"></div>
							<div class="colorSquare" style="background-color: blue"></div>
							<div class="colorSquare" style="background-color: red"></div>
							<div class="colorSquare" style="background-color: grey"></div>
						</div>
						<div class="actionContainer">
							<div class="action">+</div>
						</div>
					</div>
					<div class="row">
						<img class="smallImage" src="images/tophat.jpg">
						<div class="nameContainer">Top Hat</div>
						<div class="priceContainer">$16.20</div>
						<div class="colorContainer">
							<div class="colorSquare" style="background-color: black"></div>
							<div class="colorSquare" style="background-color: blue"></div>
							<div class="colorSquare" style="background-color: red"></div>
							<div class="colorSquare" style="background-color: grey"></div>
						</div>
						<div class="actionContainer">
							<div class="action">+</div>
						</div>
					</div>
				</div
			</div>
		)
	}
}

export default List;