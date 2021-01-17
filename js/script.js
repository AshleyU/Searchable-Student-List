/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
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

showPage(data, 1);

function appendButtons (list) {
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

}
appendButtons(data);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
