export const checkIsbn = (isbn) => {
	const digits = isbn.substring(0, 12).split('');

	const multipliedDigits = digits.map((digit, index) => {
		const multiplier = index % 2 === 0 ? 1 : 3;
		return digit * multiplier;
	});

	const sum = multipliedDigits.reduce((acc, curr) => acc + curr, 0);

	const remainder = sum % 10;

	const checkDigit = remainder === 0 ? 0 : 10 - remainder;

	const lastDigitISBN = isbn[isbn.length - 1] * 1;

	return checkDigit === lastDigitISBN;
};

export const formatAppendix = (num) => {
	const romanNumerals = {
		m: 1000,
		cm: 900,
		d: 500,
		cd: 400,
		c: 100,
		xc: 90,
		l: 50,
		xl: 40,
		x: 10,
		ix: 9,
		v: 5,
		iv: 4,
		i: 1,
	};
	let result = '';
	for (let key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			result += key;
			num -= romanNumerals[key];
		}
	}
	return result;
};

export const formatIsbn = (isbn) => {
	return `${isbn.slice(0, 3)}-${isbn.slice(3, 4)}-${isbn.slice(
		4,
		9
	)}-${isbn.slice(9, 12)}-${isbn.slice(12)}`;
};

export const listenerResize = (setIsMobile) => {
	const handleResize = () => {
		setIsMobile(window.innerWidth < 600);
	};
	handleResize();
	window.addEventListener('resize', handleResize);

	return () => {
		window.removeEventListener('resize', handleResize);
	};
};
