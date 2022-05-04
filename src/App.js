import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [{
				id: 1,
				title: 'Стул серый',
				img: 'chairs-grey.jpg',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio',
				category: 'chairs',
				price: '49.99'
			},
			{
				id: 2,
				title: 'Стол',
				img: 'table.jpg',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio',
				category: 'tables',
				price: '49.99'
			},
			{
				id: 3,
				title: 'Кравать',
				img: 'bed.jpg',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio',
				category: 'beds',
				price: '49.99'
			},
			{
				id: 4,
				title: 'Люстра',
				img: 'chandelier.jpg',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio',
				category: 'chandeliers',
				price: '49.99'
			},
			{
				id: 5,
				title: 'Диван',
				img: 'sofa.jpg',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio',
				category: 'sofas',
				price: '49.99'
			},
			{
				id: 6,
				title: 'Шкаф',
				img: 'closet.jpg',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio',
				category: 'closets',
				price: '49.99'
			},
			]
		}
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
				<Items items={this.state.items} />
				<Footer />
			</div>
		)
	}

}

export default App;
