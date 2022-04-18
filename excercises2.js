// #1 Uždavinys:
//  Pabandykime sukurti objektus, kurie turi kitus objektus kaip savybes, naudosime jau matytą Employees ir Departments pavyzdį,
//  tik dabar kursime Department objektą ir priskirsime darbuotojus. 

/* class Department  {
    constructor(_id, _name){
        this.id = _id;
        this.name = _name;
        this.employees = [];
    };
    addEmployee(employee){
        this.employees.push(employee);
    } 

}

let managament = new Department(0, "Managament");
let marketing = new Department(1, "Marketing");
let sales = new Department(2, "Sales");
managament.addEmployee("Robin");
managament.addEmployee("Wilson");
marketing.addEmployee("Garikas");
marketing.addEmployee("Klaudija");
sales.addEmployee("Samana");
sales.addEmployee("Onute");

console.log(managament);
console.log(marketing);
console.log(sales); */


// #2 uzdavinys sukurkime klases Car { make, model, engine } ir Engine { horsePower, displacement }. Car klasė turės metodą
//   getPrice(), kuris gražins automobilio kainą, kuri bus skaičiuojama pagal formulę: bazinėKaina * horsePower + (bazinėKaina / 2 *displacement).


class Car {
    constructor(_brand, _model, _engine){
        this.brand = _brand;
        this.model = _model;
        this.engine = _engine;
        this.carBodyPrice = 400;
    }
    getPrice(){
        return `Visa kaina: ${this.carBodyPrice * this.engine.horsePower + (this.carBodyPrice / 2 * this.engine.engineDisplacement)} € `
    }
    }
    class Engine {
        constructor(_power, _displacement){
            this.horsePower = _power;
            this.engineDisplacement = _displacement;
        }
    }
    let engineV1 = new Engine(91, 1.9);
    let engineV1Turbo = new Engine(103, 1.9);
    let engineV2 = new Engine(122, 2.0);
    let engineV2x = new Engine(132, 2.0);
    let engineNex9s = new Engine(277, 3.5);


    let car1 = new Car("Audi","RS", engineV2x)
    let car2 = new Car("Jeep","XRC", engineNex9s)
    let car3 = new Car("VW","Golf", engineV1)
    let car4 = new Car("Volvo","XREW", engineV2)


    console.log(car1)
    console.log(car1.getPrice())
    console.log(car2)
    console.log(car2.getPrice())
    console.log(car3)
    console.log(car3.getPrice())
    console.log(car4)
    console.log(car4.getPrice())