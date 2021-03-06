import React, {Component} from 'react';
import './list.css';
import axios from 'axios';

class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			listData: []
		}
	}
	componentDidMount(){
		axios.get('http://localhost:8866/_classes/c12.18/samplecomponent/server/getlist.php').then( (response)=>{
			console.log(response);
			this.setState({
				listData: response.data.data
			})
		})
	}
	createRows(){
		return this.state.listData.map( (item, index) =>
			<div className="row" key={index+item.name}>
				<img className="smallImage" src={item.image}/>
				<div className="nameContainer">{item.name}</div>
				<div className="priceContainer">{item.price}</div>
				<div className="colorContainer">
					{this.createColors( item.colors )}
				</div>
				<div className="actionContainer">
					<div className="action">+</div>
				</div>
			</div>			
		)
	}
	createColors(colors){
		return colors.map( (color, index) =>
			<div key={index} className="colorSquare" style={{backgroundColor: color}}></div>
		)
	}
	render(){
		return(
			<div className="container">
				{ this.createRows()}
			</div>
		)
	}
}

export default List;
