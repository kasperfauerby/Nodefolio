function login() {
    fetch("/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            pass: document.getElementById("credentials").value,
        })
    }).then(res => {
        if (res.status == 200) {
            setTimeout(() => location.href= "/dashboard", 1500);
        }
        
    }) 
}

document.getElementById("login-button").addEventListener("click", login)