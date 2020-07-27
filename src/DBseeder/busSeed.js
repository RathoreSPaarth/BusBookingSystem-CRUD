const Bus = require("../models/busData");

const newBus = [
  {
    busName: "Volvo 2210",
    from: "Delhi",
    to: "Jaipur",
    time: "10:00 AM to 5:00 PM",
    type: "AC",
    price: 800
  },
  {
    busName: "Amma 1665",
    from: "Gudvancheri",
    to: "Mahabalipuram",
    time: "05:00 AM to 08:00 AM",
    type: "NON AC",
    price: 200
  },
  {
    busName: "Volvo 0070",
    from: "Delhi",
    to: "Kanpur",
    time: "08:00 AM to 10:00 PM",
    type: "deluxe AC",
    price: 3800
  },
  {
    busName: "MTC 010",
    from: "Mylapore",
    to: "Potheri",
    time: "10:00 AM to 12:00 PM",
    type: "NON AC",
    price: 80
  },
  {
    busName: "DTC 2210",
    from: "Delhi",
    to: "Faridabad",
    time: "10:00 AM to 01:00 PM",
    type: "AC",
    price: 200
  }
];

const busSeeder = async () => {
  await Bus.sync({ force: true });
  newBus.forEach(async bus => {
    try {
      const result = await Bus.create(bus);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

busSeeder();
