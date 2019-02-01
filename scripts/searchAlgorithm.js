function searchItem ( inputId, dataId ) {

	const filter = document.getElementById(inputId).value.toUpperCase().trim();
	let dataBank = document.querySelectorAll(dataId);
	let item, txtValue;
	for (i = 0; i < dataBank.length; i++ ) {
		item = dataBank[i].querySelector('div.iw.detail.row > div > h2');
		if (item) {
			txtValue = item.textContent || item.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				dataBank[i].style.display = "";
			}
			else {
				dataBank[i].style.display = "none";
			}
		}
	}


	console.log(filter, dataBank)
}