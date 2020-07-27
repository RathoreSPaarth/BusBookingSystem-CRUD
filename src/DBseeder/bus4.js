const Mtc = require("../models/mtc");

const newuser = [
  {
    seatNumber: 1,
    status: true,
    busid: 4
  },
  {
    seatNumber: 2,
    status: false,
    busid: 4
  },
  {
    seatNumber: 3,
    status: false,
    busid: 4
  },
  {
    seatNumber: 4,
    status: true,
    busid: 4
  },
  {
    seatNumber: 5,
    status: false,
    busid: 4
  },
  {
    seatNumber: 6,
    status: true,
    busid: 4
  },
  {
    seatNumber: 7,
    status: true,
    busid: 4
  },
  {
    seatNumber: 8,
    status: false,
    busid: 4
  },
  {
    seatNumber: 9,
    status: false,
    busid: 4
  },
  {
    seatNumber: 10,
    status: true,
    busid: 4
  },
  {
    seatNumber: 11,
    status: false,
    busid: 4
  },
  {
    seatNumber: 12,
    status: true,
    busid: 4
  },
  {
    seatNumber: 13,
    status: true,
    busid: 4
  },
  {
    seatNumber: 14,
    status: false,
    busid: 4
  },
  {
    seatNumber: 15,
    status: false,
    busid: 4
  },
  {
    seatNumber: 16,
    status: true,
    busid: 4
  },
  {
    seatNumber: 17,
    status: false,
    busid: 4
  },
  {
    seatNumber: 18,
    status: true,
    busid: 4
  },
  {
    seatNumber: 19,
    status: true,
    busid: 4
  },
  {
    seatNumber: 20,
    status: false,
    busid: 4
  },
  {
    seatNumber: 21,
    status: false,
    busid: 4
  },
  {
    seatNumber: 22,
    status: true,
    busid: 4
  },
  {
    seatNumber: 23,
    status: false,
    busid: 4
  },
  {
    seatNumber: 24,
    status: true,
    busid: 4
  },
  {
    seatNumber: 25,
    status: true,
    busid: 4
  },
  {
    seatNumber: 26,
    status: false,
    busid: 4
  },
  {
    seatNumber: 27,
    status: false,
    busid: 4
  },
  {
    seatNumber: 28,
    status: true,
    busid: 4
  },
  {
    seatNumber: 29,
    status: false,
    busid: 4
  },
  {
    seatNumber: 30,
    status: true,
    busid: 4
  }
];

const bus2Seeder = async () => {
  await Mtc.sync({ force: true });
  newuser.forEach(async user => {
    try {
      const result = await Mtc.create(user);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

bus2Seeder();
