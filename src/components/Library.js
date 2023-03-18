import { useState, useEffect } from 'react';

import { formatIsbn, listenerResize } from '../utils/functions';

function Library({ books, book, setBook, isMobile, setIsMobile }) {
	const classLibrary = book && isMobile ? 'no-Library' : 'library';

	useEffect(() => {
		listenerResize(setIsMobile);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const numberBooks = books.books.length;

	const initialState = numberBooks < 4 ? null : true;

	const [isCollapsed, setIsCollapsed] = useState(initialState);

	const sliceA =
		numberBooks < 4 || !isCollapsed || !isMobile ? books.books.length : 3;

	return (
		<div className={classLibrary}>
			{books.books.slice(0, sliceA).map((elemBook) => {
				return (
					<span
						className={`isbn-number ${
							book && elemBook.isbn === book.isbn && 'isbn-active'
						}`}
						key={elemBook.isbn}
						onClick={() => {
							setBook(elemBook);
						}}
					>
						<span>{formatIsbn(elemBook.isbn)}</span>
						<span style={{ marginLeft: '30px' }}>{'>'}</span>
					</span>
				);
			})}
			{isMobile &&
				isCollapsed !== null &&
				(isCollapsed ? (
					<span className='showBtn' onClick={() => setIsCollapsed(false)}>
						show more...
					</span>
				) : (
					<span className='showBtn' onClick={() => setIsCollapsed(true)}>
						show less...
					</span>
				))}
		</div>
	);
}

export default Library;
