import React, {Component} from 'react';
import './list.css';

class List extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<img className="smallImage" src="images/tophat.jpg"/>
					<div className="nameContainer">Top Hat</div>
					<div className="priceContainer">$16.20</div>
					<div className="colorContainer">
						<div className="colorSquare" style={{backgroundColor: 'black'}}></div>
						<div className="colorSquare" style={{backgroundColor: 'blue'}}></div>
						<div className="colorSquare" style={{backgroundColor: 'red'}}></div>
						<div className="colorSquare" style={{backgroundColor: 'grey'}}></div>
					</div>
					<div className="actionContainer">
						<div className="action">+</div>
					</div>
				</div>
				<div className="row">
					<img className="smallImage" src="images/tophat.jpg"/>
					<div className="nameContainer">Top Hat</div>
					<div className="priceContainer">$16.20</div>
					<div className="colorContainer">
						<div className="colorSquare" style={{backgroundColor: 'black'}}></div>
						<div className="colorSquare" style={{backgroundColor: 'blue'}}></div>
						<div className="colorSquare" style={{backgroundColor: 'red'}}></div>
						<div className="colorSquare" style={{backgroundColor: 'grey'}}></div>
					</div>
					<div className="actionContainer">
						<div className="action">+</div>
					</div>
				</div>
			</div>
		)
	}
}

export default List;