document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		if (window.scrollY > 50) {
			document.getElementById("navbar").classList.add("fixed-top");
			navbar_height = document.querySelector(".navbar").offsetHeight;
			document.body.style.paddingTop = navbar_height + "px";
		} else {
			document.getElementById("navbar").classList.remove("fixed-top");
			document.body.style.paddingTop = "0";
		}
	});
});

var operation = "A"; //"A"=Adding; "E"=Editing
var selected_index = -1;
var works = new Array(); //Index of the selected list item
// const getWorks = function () {
// 	works = localStorage.getItem("works"); //Retrieve the stored data
// 	works = JSON.parse(works); //Converts string to object
// 	if (works == null) {
// 		works = [];
// 	}
// };
// getWorks();

// form.addEventListener("submit", function (e) {
// 	e.preventDefault();
// 	if (operation == "A") return Add();
// 	else return Edit();
// });

const Add = function () {
	var client = JSON.stringify({
		assign: form.elements.Aname,
		sub: form.elements.sbj,
		date: form.elements.dateyt,
		time: form.elements.timeyt,
	});
	works.push(client);
	localStorage.setItem("works", JSON.stringify(works));
	alert("The data was saved.");
	console.log(works, form.elements.sbj, form.elements.dateyt);
	return true;
};

function Edit() {
	works[selected_index] = JSON.stringify({
		assign: $("Aname").val(),
		sub: $("sbj").val(),
		date: $("dateyt").val(),
		time: $("timeyt").val(),
	}); //Alter the selected item on the table
	localStorage.setItem("works", JSON.stringify(works));
	alert("The data was edited.");
	operation = "A"; //Return to default value return true;
}

function Delete() {
	works.splice(selected_index, 1);
	localStorage.setItem("works", JSON.stringify(works));
	alert("Client deleted.");
}

function List() {
	for (var i in works) {
		var cli = JSON.parse(works[i]);

		const item = document.createElement("li");
		item.innerText = `${cli.ID} ${cli.Name} Due on ${cli.Email}`;
		list.appendChild(item);
	}
}
/*
$("#frmCadastre").bind("submit", function () {
	if (operation == "A") return Add();
	else return Edit();
});

$(".btnEdit").bind("click", function () {
	operation = "E";
	selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
	var cli = JSON.parse(works[selected_index]);
	$("#txtID").val(cli.ID);
	$("#txtName").val(cli.Name);
	$("#txtPhone").val(cli.Phone);
	$("#txtEmail").val(cli.Email);
	$("#txtID").attr("readonly", "readonly");
	$("#txtName").focus();
});

$(".btnDelete").bind("click", function () {
	selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
	Delete();
	List();
});
*/

// assign = $("Aname;
//     const sub = form.elements.sbj;
//     const date = form.elements.date;

/*
const addItem = (prdt, quan, date) => {
    const item = document.createElement("li");
    item.innerText = `${quan} ${prdt} Due on ${date}`;
    list.appendChild(item);
// } */
