class Animal{
    constructor(leg){
        this.leg = leg
    }

    printAnimal(){
        console.log(this.name+"은"+String(this.leg)+"개의 다리를 가진다.")
    }


}

//Lion => Animal 유용한 기능을 가져다 쓰기
class Lion extends Animal {
    constructor(name, leg){
        super(leg) //부모의 input (constructor의 인 풋)
        this.name = name
    }

    getName(){
        console.log("내 이름은 "+ this.name)
    }
}

myLion = new Lion("king",4)
myLion.getName()
myLion.printAnimal()
