import React, {Component} from 'react';
import './list.css';
import axios from 'axios';

class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			listData: 
		}
	}
	componentDidMount(){
		axios.get('/data/list.json').then( (response)=>{
			console.log(response);
			this.setState({
				listData: response.data
			})
		})
	}
	createRows(){
		return this.state.listData.map( (item, index) =>
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
		)
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
			</div>
		)
	}
}

export default List;