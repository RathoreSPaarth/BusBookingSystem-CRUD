const Volvo2210 = require("../models/volvo2210");

const newuser = [
  {
    seatNumber: 1,
    status: true,
    busid: 1
  },
  {
    seatNumber: 2,
    status: false,
    busid: 1
  },
  {
    seatNumber: 3,
    status: false,
    busid: 1
  },
  {
    seatNumber: 4,
    status: true,
    busid: 1
  },
  {
    seatNumber: 5,
    status: false,
    busid: 1
  },
  {
    seatNumber: 6,
    status: true,
    busid: 1
  },
  {
    seatNumber: 7,
    status: true,
    busid: 1
  },
  {
    seatNumber: 8,
    status: false,
    busid: 1
  },
  {
    seatNumber: 9,
    status: false,
    busid: 1
  },
  {
    seatNumber: 10,
    status: true,
    busid: 1
  },
  {
    seatNumber: 11,
    status: false,
    busid: 1
  },
  {
    seatNumber: 12,
    status: true,
    busid: 1
  },
  {
    seatNumber: 13,
    status: true,
    busid: 1
  },
  {
    seatNumber: 14,
    status: false,
    busid: 1
  },
  {
    seatNumber: 15,
    status: false,
    busid: 1
  },
  {
    seatNumber: 16,
    status: true,
    busid: 1
  },
  {
    seatNumber: 17,
    status: false,
    busid: 1
  },
  {
    seatNumber: 18,
    status: true,
    busid: 1
  },
  {
    seatNumber: 19,
    status: true,
    busid: 1
  },
  {
    seatNumber: 20,
    status: false,
    busid: 1
  },
  {
    seatNumber: 21,
    status: false,
    busid: 1
  },
  {
    seatNumber: 22,
    status: true,
    busid: 1
  },
  {
    seatNumber: 23,
    status: false,
    busid: 1
  },
  {
    seatNumber: 24,
    status: true,
    busid: 1
  },
  {
    seatNumber: 25,
    status: true,
    busid: 1
  },
  {
    seatNumber: 26,
    status: false,
    busid: 1
  },
  {
    seatNumber: 27,
    status: false,
    busid: 1
  },
  {
    seatNumber: 28,
    status: true,
    busid: 1
  },
  {
    seatNumber: 29,
    status: false,
    busid: 1
  },
  {
    seatNumber: 30,
    status: true,
    busid: 1
  }
];

const bus1Seeder = async () => {
  await Volvo2210.sync({ force: true });
  newuser.forEach(async user => {
    try {
      const result = await Volvo2210.create(user);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

bus1Seeder();
