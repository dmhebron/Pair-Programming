const car = {
    make: "Ford",
    model: "Explorer",
    year: "2022",
    color: "black",
    mileage: 500,
    driveToWork: function () {
        console.log(`old mileage: ${this.mileage}`);
        this.mileage += 33;
        console.log(`new mileage: ${this.mileage}`);
      },
      driveAroundTheWorld: function () {
        console.log(`old mileage: ${this.mileage}`);
        this.mileage += 24000;
        console.log(`new mileage: ${this.mileage}`);
      },
      runErrands: function () {
        console.log(`old mileage: ${this.mileage}`);
        this.mileage += 30;
        console.log(`new mileage: ${this.mileage}`);
      },
    };
    
    car.driveToWork();
    car.driveAroundTheWorld();
    car.runErrands();