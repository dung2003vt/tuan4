class Account {
    username
    password
    phone
    email

    constructor(username, password, phone, email) {
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.email = email;
    }
    getUsername(){
       return this.username
    }
    setUsername(username){
        this.username = username
    }
    getPassword(){
        return this.password
    }
    setPassword(password){
        this.password = password
    }
    getPhone(){
        return this.phone
    }
    setPhone(phone){
        this.phone = phone
    }
    getEmail(){
        return this.email
    }
    setEmail(email){
        this.email = email
    }
}
