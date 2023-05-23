// import logo from './logo.svg';
import React from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello Egor!</h2>
}

// const Field = () => {
//   const holder = "Enter here";
//   const styledFild = {
//     width: '300px',
//     color: 'red'
//   }
//   return <input type="text" 
// 				placeholder={holder} 
// 				style={styledFild}/>
// }

class Field extends React.Component {
	render() {
		const holder = "Enter here";
		const styledFild = {
			width: '300px',
			color: 'red'
		};
		return <input type="text"
			placeholder={holder}
			style={styledFild} />
	}

}

function Btn() {
	const text = "Log in";
	const logged = false;

	return <button>{logged ? "Enter" : text}</button>
}

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
			<Header></Header>
			<Field></Field>
			<Btn></Btn>
		</div>
	);
}


export { Header };
export default App;
