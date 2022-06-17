import navbar from "./component/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
import footer from "./component/footer.js";
document.getElementById("footer").innerHTML=footer();


document.getElementById("login").addEventListener("click", () => {
	let details = JSON.parse(localStorage.getItem("UserDetails")) || [];

	function User( Email, Pass) {
		this.UserEmail = Email;
		this.UserPass = Pass;
	}

	
	let Useremail = document.getElementById("SignUpemail").value;
	let Userpass = document.getElementById("SignUppass").value;

	let obj = new User( Useremail, Userpass);

	details.push(obj);

	localStorage.setItem("UserDetails", JSON.stringify(details));

	alert(`Hello ${UserfName}, Signup successful!`);

	window.location.href = "index.html";
});

