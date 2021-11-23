function sendContactMessage() {
    console.log("send")
fetch("/contact/", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify ({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    })
}).then(response => {
    if (response.status === 200) {
        toastr.success("Your message has been successfully sent!")
        setTimeout(() => location.href= "/", 3000);
    } else {
        console.log("Error sending", response.status)
    }
});

}

document.getElementById("contact-button").addEventListener("click", sendContactMessage)