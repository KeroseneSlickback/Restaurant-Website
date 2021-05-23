import navFactory from './navbar';
import { titleFactory, blocksFactory } from './general';
import {
	homeArray,
	blocksArray,
	menuTitleArray,
	menuArray,
	contactArray,
	contactTitleArray,
} from './infoArrays';

const divElement = document.getElementById('content');

navFactory();

const container = document.createElement('div');
container.setAttribute('id', 'bodyContainer');
divElement.appendChild(container);

titleFactory(homeArray);
blocksFactory(blocksArray);

homeBtn.addEventListener('click', () => {
	container.innerHTML = '';
	titleFactory(homeArray);
	blocksFactory(blocksArray);
	homeBtn.classList.add('navItemSelected');
	menuBtn.classList.remove('navItemSelected');
	contactBtn.classList.remove('navItemSelected');
});

menuBtn.addEventListener('click', () => {
	container.innerHTML = '';
	titleFactory(menuTitleArray);
	blocksFactory(menuArray);
	menuBtn.classList.add('navItemSelected');
	homeBtn.classList.remove('navItemSelected');
	contactBtn.classList.remove('navItemSelected');
});

contactBtn.addEventListener('click', () => {
	container.innerHTML = '';
	titleFactory(contactTitleArray);
	blocksFactory(contactArray);
	contactBtn.classList.add('navItemSelected');
	menuBtn.classList.remove('navItemSelected');
	homeBtn.classList.remove('navItemSelected');
});
