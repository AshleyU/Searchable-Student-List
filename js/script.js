/*
Data Pagination and Filtering: Student List
*/

/*
The "showPage" function creates and inserts the elements needed 
to display the page of nine students
*/

function showPage (list, page) {
	const startIndex = (page * 9) - 9;
	const endIndex = page * 9;
	const studentList = document.querySelector(".student-list");
	studentList.innerHTML = "";
	for (let i = 0; i < list.length; i++) {
		if ( i >= startIndex && i < endIndex ) {
			let studentItem = list[i];
			let studentTemplate = getStudentTemplate(studentItem);
			studentList.insertAdjacentHTML("beforeend", studentTemplate);
		}
	}
}

/*
The "getStudentTemplate" function puts together the template for each
student's information and returns the template to make things more organized
*/

function getStudentTemplate (studentItem) {
	let studentTemplate = ` <li class="student-item cf">
    	<div class="student-details">
			<img class="avatar" src="${studentItem.picture.medium}" alt="Profile Picture">
			<h3>${studentItem.name.title} ${studentItem.name.first} ${studentItem.name.last}</h3>
			<span class="email">${studentItem.email}</span>
		</div>
		<div class="joined-details">
			<span class="date">Joined ${studentItem.registered.date}</span>
		</div>
		</li>`;
	return studentTemplate;
}

/*
The "addPagination" function creates and inserts the elements 
needed for the pagination buttons
*/

function addPagination (list) {
	const numOfButtons = Math.ceil(list.length / 9);
	const linkList = document.querySelector(".link-list");
	linkList.innerHTML = "";
	for ( let i = 1; i <= numOfButtons; i++ ) {
		let pageNumButtons = list[i];
		let buttonTemplate = `<li>
   		<button type="button">${i}</button>
 		</li>`
 		linkList.insertAdjacentHTML("beforeend", buttonTemplate);
	}
	document.querySelector(".link-list > li:first-child > button").className = "active";
	linkList.addEventListener('click', (e) => {
		if ( e.target.tagName === 'BUTTON') {
			let activeButton = document.querySelector(".active");
			activeButton.className = "";
			e.target.className = "active";
			showPage(data, e.target.textContent);
		}
	}); 
}

// Calling functions

showPage(data, 1);

addPagination(data);





