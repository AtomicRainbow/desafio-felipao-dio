class hero{
    constructor(name,age,type){
        this.name=name
        this.age=age
        this.type=type
    }
    Details(){
        console.log("Hero name: "+ this.name)
        console.log("Hero age: "+ this.age)
        console.log("Hero type: "+ this.type)

    }
    attack(){
        if(this.type==="Mage"){
        console.log(`The ${this.type} attacked using shadow magic`)
    }
        else if(this.type==="Warrior"){
            console.log(`The ${this.type} attacked using devastating cut`)}
        
        else if( this.type==="Monk"){
                console.log(`The ${this.type} attacked using martial arts`)}

        else if(this.type==="Ninja"){
                console.log(`The ${this.type} attacked using ninja stars`)}
        }
    }
let HeroDetails= new hero("Kauan",17,"Monk")
HeroDetails.Details()
console.log("-------------")
HeroDetails.attack()