const User = require("../models/userData");

const newuser = [
  {
    name: "test",
    age: 20,
    email: "test@test.com",
    password: "0000"
  }
];

const userSeeder = async () => {
  await User.sync({ force: true });
  newuser.forEach(async users => {
    try {
      const result = await User.create(users);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

userSeeder();
