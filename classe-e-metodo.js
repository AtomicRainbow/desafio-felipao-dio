class UserDataBase{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    escrever(){
        console.log(`User: ${this.name}`)
        console.log(`age: ${this.age}`)
    }
}
let UserData= new UserDataBase("Kauan",17)
UserData.escrever()