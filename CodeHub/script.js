var BE  =  { varient: { petrol:20 , disel: 70, battery: 30 } } //server API DATA 

function Vechiles() {
    const car = BE;
    const bikes = { varient: { petrol: 90, disel: 270, battery: 130 } }
    //100
    console.log("Fuel intaken by cars last year 2024 car:", 'car:', car, 'bikes:', bikes);
    function carbrand() {
        //200
        const toyoto = car.varient.petrol; // petrol
        const audi = car.varient.disel;
        const tata = car.varient.battery;
        console.log('Cars Brand:', 'Toyoto shared:', toyoto, 'Audi shared:', audi, 'Tata shared', tata);
    }
    carbrand();
    function bike() {
        //200
        const honda = bikes.varient.petrol; // petrol
        const java = bikes.varient.disel;
        const Enfield = bikes.varient.battery;
        console.log('Bike Brand:', 'Honda shared:', honda, 'Java shared:', java, 'Enfield shared', Enfield);
    }
    bike();
    function SportsBike() {
        //200
        const honda = bikes.varient.petrol; // petrol
        const java = bikes.varient.disel;
        const Enfield = bikes.varient.battery;
        console.log('Bike Brand:', 'Honda shared:', honda, 'Java shared:', java, 'Enfield shared', Enfield);
    }
    SportsBike()
}
Vehile()