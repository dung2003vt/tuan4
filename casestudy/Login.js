let newAccount = new Account("dung", "123", "123456", "123@gmail.com")
let arrAccount = [newAccount]

function checkAccount(username, password){
    for(let i = 0; i<arrAccount.length; i++){
        if(username === arrAccount[i].username
            && password === arrAccount[i].password){
            return true;
        }
    }
    return false;
}


function login(){
    console.log(arrAccount);
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username === "" || password === ""){
        alert("Đăng nhập thất bại")
    }
    else {
        let kq = checkAccount(username, password);
        if(kq === true){
            alert("Đăng nhập thành công");
            window.document.location.href = "caseStudy.html"
        }
        else {
            alert("Đăng nhập thất bại");
        }
    }
}

function register(){
    let name = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let acc = new Account(name, pass, phone, email);
    arrAccount.push(acc);
    alert("Đăng ký thành công")
    window.document.location.href = "dangNhap.html"
}