class vechile {
    

    constructor(name, band, year) {
        this.name = name;
        this.band = band;
        this.year = year;
    }

    move() {
        console.log(`${this.name},can move`);
    }

    hone() {
        console.log(`${this.name}, can hone.`);
    }
}

class Car extends vechile {
    constructor(name, band, year, seats) {
        super(name, band, year),
            this.seats = seats;
    }
}

class Bus extends vechile{
    constructor(name,band,year,seats,root){
        super(name,band,year);
        this.seats=seats;
        this.root=root;
    }
}

const c2 = new Car("BMW","B5",2019,4);
const b2 =new Bus("Toyota","Mechites",2010,44);

c2.move();
b2.move();

c2.hone();
b2.hone();