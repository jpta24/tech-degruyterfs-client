import { useState } from 'react';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';
import { formatIsbn } from '../utils/functions';

function SearchBox({ setBook, getBookInfo }) {
	const [searchText, setSearchText] = useState('');
	const [searchedBooks, setSearchedBooks] = useState(null);

	const searchBook = (text) => {
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/api/books/search/${text}`)
			.then((response) => {
				const responseSearchedBooks = response.data;
				setSearchedBooks(responseSearchedBooks);
			})
			.catch((e) => console.log(e));
	};

	return (
		<div className='searchBox'>
			<div className='seachaBox-container'>
				<input
					className='searchBox-input'
					type='text'
					value={searchText}
					placeholder='Type at least 2 characters to see results'
					onChange={(e) => {
						setSearchText(e.target.value);
						e.target.value.length > 1
							? searchBook(e.target.value)
							: setSearchedBooks(null);
					}}
				/>

				<BiSearch className='searchBoxIcon' />
			</div>
			{searchedBooks &&
				(searchedBooks.length !== 0 ? (
					<div className='seachedBooks-container'>
						{searchedBooks.sort().map((book) => {
							return (
								<div
									key={book._id}
									className='seachedBook-item'
									onClick={() => {
										setBook(book.isbn);
										setSearchText('');
										setSearchedBooks(null);
										getBookInfo(book._id);
									}}
								>
									<span>{formatIsbn(book.isbn)}</span>
									{` - `}
									<span>{book.title}</span>
								</div>
							);
						})}
					</div>
				) : (
					<div className='seachedBooks-container'>
						<span className='seachedBook-item'>No data found</span>
					</div>
				))}
		</div>
	);
}

export default SearchBox;
