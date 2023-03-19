import { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import Library from './components/Library';
import Description from './components/Description';

function App() {
	const [book, setBook] = useState(null);
	const [isMobile, setIsMobile] = useState(false);

	return (
		<div className='App'>
			<Header />
			<SearchBox setBook={setBook} />
			<Navbar />
			<div className='container'>
				<Library
					setBook={setBook}
					book={book}
					isMobile={isMobile}
					setIsMobile={setIsMobile}
				/>
				{book && (
					<Description setBook={setBook} book={book} isMobile={isMobile} />
				)}
			</div>
		</div>
	);
}

export default App;
