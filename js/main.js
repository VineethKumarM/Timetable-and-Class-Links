var htmlElem = document.querySelector("html");
var form = document.getElementById("form");
const list = document.querySelector("#list");
const show = document.querySelector("#show");
let assign = [];
/*
Assignment Object: 
    {
      "title": ,
      "subject":,
      "date": ,
      "time":,
    }
*/
function add(event) {
	event.preventDefault();
	//1

	if (!document.getElementById("Aname").value) {
		// List();
		return;
	}

	let work = {
		Aname: document.getElementById("Aname").value,
		sbj: document.getElementById("sbj").value,
		date: document.getElementById("date").value,
		time: document.getElementById("time").value,
	};
	if (localStorage.getItem("assigns")) {
		assign = JSON.parse(localStorage.getItem("assigns"));
	}

	assign.push(work);

	localStorage.setItem("assigns", JSON.stringify(assign));

	form.reset();
	console.log("added");
	location.reload();
	// List();
}

function List() {
	assign = JSON.parse(localStorage.getItem("assigns"));
	//4
	for (var i in assign) {
		var cli = assign[i];
		const item = document.createElement("li");

		item.innerHTML = `${cli.sbj} ${cli.Aname}  Due on ${cli.date} at ${cli.time}`;
		// item.setAttribute("onclick");
		// item = item.insertAdjacentElement(btn);

		list.appendChild(item);

		// list.insertAdjacentElement(btn);
	}
	//3
}

// const remo = localStorage.removeItem("work_2");

document.addEventListener("DOMContentLoaded", () => {
	form.addEventListener("submit", add);
	List();
	//2
});
