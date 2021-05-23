const titleFactory = array => {
	const container = document.getElementById('bodyContainer');
	const titleDiv = document.createElement('div');
	titleDiv.classList.add('titleContainer');
	const titleH1 = document.createElement('h1');
	titleH1.classList.add('bodyH1');
	titleH1.innerText = array[0].banner;
	container.appendChild(titleDiv);
	titleDiv.appendChild(titleH1);
};

const blocksFactory = array => {
	const container = document.getElementById('bodyContainer');
	for (const element of array) {
		const blocksContainer = document.createElement('div');
		blocksContainer.classList.add('boxContainer');
		container.appendChild(blocksContainer);
		if (element.title) {
			const blockHeader = document.createElement('h3');
			blockHeader.classList.add('bodyH3');
			blockHeader.innerText = element.title;
			blocksContainer.appendChild(blockHeader);
		}

		if (element.times) {
			const timeBlockHeader = document.createElement('h3');
			timeBlockHeader.classList.add('bodyH3');
			timeBlockHeader.innerText = element.times.title;
			blocksContainer.appendChild(timeBlockHeader);
			Object.values(element.times.hours).forEach(elem => {
				const timePara = document.createElement('p');
				timePara.classList.add('bodyP');
				timePara.innerText = elem;
				blocksContainer.appendChild(timePara);
			});
		}

		if (element.img) {
			const imgDiv = document.createElement('div');
			imgDiv.classList.add('imgDiv');
			const imgContainer = document.createElement('img');
			imgContainer.classList.add('img');
			imgContainer.setAttribute('src', element.img);
			blocksContainer.appendChild(imgDiv);
			imgDiv.appendChild(imgContainer);
		}

		if (element.p) {
			const para = document.createElement('p');
			para.classList.add('bodyP');
			para.innerText = element.p;
			blocksContainer.appendChild(para);
		}
	}
};

export { titleFactory, blocksFactory };
