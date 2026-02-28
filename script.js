let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } 
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

function submitRSVP(response) {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeJLWc3J0Xxu99rxX7wbu1-GcQGZvyURbfaLiWzUiWddJljYQ/formResponse";

    const form = document.createElement("form");
    form.method = "POST";
    form.action = formURL;
   form.target = "hidden_iframe";

    form.innerHTML = `
        <input name="entry.1126477525" value="${name}">
        <input name="entry.918960495" value="${phone}">
        <input name="entry.1827303682" value="${response}">
    `;

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    alert("Thank you! RSVP submitted.");

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}
