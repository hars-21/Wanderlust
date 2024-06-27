// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();

// Filter scroll buttons

const slideRight = document.getElementById("slideRight");
const slideLeft = document.getElementById("slideLeft");

slideRight.onclick = function () {
	document.getElementById("filter-container").scrollLeft += 200;
};
slideLeft.onclick = function () {
	document.getElementById("filter-container").scrollLeft -= 200;
};
