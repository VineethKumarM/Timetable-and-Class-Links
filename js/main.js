var htmlElem = document.querySelector("html");
var form = document.getElementById("form");
const list = document.querySelector("#list");
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
	if (localStorage.getItem("assigns")) {
		assign = JSON.parse(localStorage.getItem("assigns"));
	}
	if (!document.getElementById("Aname").value) {
		List();
		return;
	}
	let work = {
		Aname: document.getElementById("Aname").value,
		sbj: document.getElementById("sbj").value,
		date: document.getElementById("date").value,
		time: document.getElementById("time").value,
	};

	assign.push(work);
	form.reset();
	// const workString = JSON.stringify(work);

	localStorage.setItem("assigns", JSON.stringify(assign));
	List();
}

function List() {
	assign = JSON.parse(localStorage.getItem("assigns"));
	console.log(assign);
	for (var i in assign) {
		var cli = assign[i];

		const item = document.createElement("li");
		item.innerText = `${cli.Aname} ${cli.sbj} Due on ${cli.date}`;
		list.appendChild(item);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	form.addEventListener("submit", add);
});
