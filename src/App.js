import React, { useState } from 'react';
import './index.css';

const App = () => {
	// HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([]);

	const [inputValue, setInputValue] = useState('');
	//const [totalItemCount, setTotalItemCount] = useState(1);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		// calculateTotal();
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		// calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		// calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	// const calculateTotal = () => {
		// const totalItemCount = items.reduce((total, item) => {
			// return total + item.quantity;
		// }, 0);

		// setTotalItemCount(totalItemCount);
	// };

	 const clearAll =(itemList) => {
		 document.getElementById("itemList").innerHTML = "" ;
		 
	 }

	return (
		<div className='app-background'>
			<div className='main-container'>
			<h1>Grocery List</h1>
				<span><div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<span><button className="add" onClick={() => handleAddButtonClick()}> Add</button></span>
					 <div><input type="button" value="Clear" onClick={clearAll} /></div> 
					</div></span>
					{/* <button className="clearButton" onClick={clearAll}>clear</button> */}


					
				
				
				<div id='itemList'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ? (
									<>
										
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>								
								<button onClick={() => handleQuantityDecrease(index)}>-</button>
								<span> {item.quantity} </span>
								<button onClick={() => handleQuantityIncrease(index)}> + </button>
							</div>
						</div>
					))}
				</div>
				{/* <div className='total'>Total: {totalItemCount}</div> */}
			</div>
		</div>
	);
};

export default App;
