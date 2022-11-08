// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/counterSlice';

function App() {
	// const [Count, setCount] = useState(0);

	const { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Count is :{count}</h1>
				<button onClick={() => dispatch(increment())}>INC</button>
				<button onClick={() => dispatch(decrement())}>DEC</button>
			</header>
		</div>
	);
}

export default App;
