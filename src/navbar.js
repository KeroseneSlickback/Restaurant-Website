function navFactory(array) {
	const divElement = document.getElementById('content');
	const header = document.createElement('header');
	header.setAttribute('id', 'headerContainer');
	const headerUl = document.createElement('ul');
	headerUl.setAttribute('id', 'headerUl');
	divElement.appendChild(header);
	header.appendChild(headerUl);

	const homeBtn = document.createElement('li');
	homeBtn.classList.add('navItem');
	homeBtn.setAttribute('id', 'homeBtn');
	homeBtn.innerText = 'Home';
	headerUl.appendChild(homeBtn);
	homeBtn.classList.add('navItemSelected');

	const menuBtn = document.createElement('li');
	menuBtn.classList.add('navItem');
	menuBtn.setAttribute('id', 'menuBtn');
	menuBtn.innerText = 'Menu';
	headerUl.appendChild(menuBtn);

	const contactBtn = document.createElement('li');
	contactBtn.classList.add('navItem');
	contactBtn.setAttribute('id', 'contactBtn');
	contactBtn.innerText = 'Contact';
	headerUl.appendChild(contactBtn);
}

export default navFactory;
