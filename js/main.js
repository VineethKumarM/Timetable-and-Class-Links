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
	form.reset();
	// const workString = JSON.stringify(work);

	localStorage.setItem("assigns", JSON.stringify(assign));
	// if (document.querySelectorAll("li")) {
	// 	document.querySelectorAll("li").remove();
	// }
	// List();
}

function List() {
	assign = JSON.parse(localStorage.getItem("assigns"));
	console.log(assign);
	for (var i in assign) {
		var cli = assign[i];

		const item = document.createElement("li");
		const btn = document.createElement("button");
		btn.innerText = "edit";
		btn.setAttribute("style", "display: inline");
		item.innerHTML = `${cli.sbj} ${cli.Aname}  Due on ${cli.date} at ${cli.time}`;
		item.setAttribute("onclick");
		// item = item.insertAdjacentElement(btn);
		list.appendChild(item);
		// list.insertAdjacentElement(btn);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	form.addEventListener("submit", add);
	List();
});
