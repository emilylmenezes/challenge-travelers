class Traveler {
    constructor(name) {
        this.name = name,
        this.food = 1,
        this.isHealthy = true;
    }

    eat(){
        if(this.food > 0){
            return this.food -= 1;

        }else{
            return this.isHealthy = false;
        }
    }

    hunt(){
        return this.food += 2;
    }

}  

class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = [];
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length; 
    }
    join(pessoas){
        let funcao = this.getAvailableSeatCount()
        if(funcao > 0){
            return this.passengers.push(pessoas)
        }else{
            return null;
        }
    }
    shouldQuarantine(){
        return this.passengers.some(x => x.isHealthy === false); 
    }
    totalFood(){
        return this.passengers.reduce((acc, num) => acc += num.food, 0);
    }
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);