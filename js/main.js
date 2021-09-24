var htmlElem = document.querySelector("html");
var form = document.getElementById("form");
const list = document.querySelector("#list");
const show = document.querySelector("#show");
let assign = [];
if (!localStorage.assigns) {
	localStorage.setItem("assigns", JSON.stringify([]));
}
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

	assign.push(work);
	localStorage.setItem("assigns", JSON.stringify(assign));
	form.reset();
	console.log("added");
	location.reload();
	// }

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

function List1() {
	var count = localStorage.length;
	if (count > 0) {
		console.log(count);
		// var key = localStorage.getItem(); //Get  the Key
		assign = JSON.parse(localStorage.getItem("assigns"));
		for (var i in assign) {
			console.log(i);
			var pre = "<pre>";
			var work = assign[i];
			// console.log(work);
			pre += `${work.sbj} ${work.Aname}  Due on ${work.date} at ${work.time}`;
			pre += `	<button ctr=${i} id="delete" onclick = "removeWork(${i})" > delete </button>`;
			// pre += `	<button ctr=${i} id="edit" onclick = "editWork(${i})" > edit </button>`;
			const item = document.createElement("li");
			item.innerHTML = pre;
			list.appendChild(item);
		}
		// render+="</table>";
		// show.append(pre);
	}
}

function removeWork(idx) {
	assign.splice(idx, 1);
	localStorage.setItem("assigns", JSON.stringify(assign));
	location.reload();
}

function editWork(idx) {
	const work = assign[idx];
	console.log(work);
	const editted = edit(work);
	// assign.splice(idx, 1, edited);
	// localStorage.setItem("assigns", JSON.stringify(assign));
	// location.reload();
}

function edit(work) {
	// event.preventDefault();
	//1
	// form.reset();
	document.getElementById("Aname").value = work.Aname;
	document.getElementById("sbj").value = work.sbj;
	document.getElementById("date").value = work.date;
	document.getElementById("time").value = work.time;
	console.log(1);
	let edited = {
		Aname: document.getElementById("Aname").value,
		sbj: document.getElementById("sbj").value,
		date: document.getElementById("date").value,
		time: document.getElementById("time").value,
	};

	// if (!edited.Aname || !edited.date || edited.sbj || edited.time) {
	// 	// List();
	// 	alert("please fill all fields");
	// 	return;
	// }
	// return edited;
	console.log(edited);

	// assign.push(work);
	// localStorage.setItem("assigns", JSON.stringify(assign));
	// form.reset();
	// console.log("added");
	// location.reload();
	// }

	// List();
}

document.addEventListener("DOMContentLoaded", () => {
	form.addEventListener("submit", add);
	List1();
	//2
});
