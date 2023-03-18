import { formatIsbn, formatAppendix, checkIsbn } from '../utils/functions';

function Description({ book, setBook, isMobile }) {
	const isIsbnValid = checkIsbn(book.isbn);

	return (
		<div className='description'>
			{isMobile && (
				<span className='backBtn' onClick={() => setBook(null)}>
					{`< Back`}
				</span>
			)}

			<img
				className='bookCover'
				src={`/covers/${isIsbnValid ? book.isbn : 'default'}.jpg`}
				alt='cover'
			></img>
			<div className='bookInformation'>
				{isIsbnValid ? (
					<>
						<p className='bookTitle'>{book.title}</p>
						<p className='bookData'>{`ISBN: ${formatIsbn(book.isbn)}`}</p>
						<p className='bookData'>{`Appendix: ${formatAppendix(
							book.appendixPage
						)}`}</p>
					</>
				) : (
					<>
						<h2 className='bookTitle'>
							The ISBN number entered is invalid. Please check it and try again.
						</h2>
					</>
				)}
			</div>
		</div>
	);
}

export default Description;
