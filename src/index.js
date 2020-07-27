const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");
const User = require("./models/userData");
const Bus = require("./models/busData");
const Volvo2210 = require("./models/volvo2210");
const Amma = require("./models/amma");
const Volvo = require("./models/volvo");
const Mtc = require("./models/mtc");
const Dtc = require("./models/dtc");
var methodOverride = require("method-override");

//const { where } = require("sequelize/types");
//const { _attributes } = require("./config/busDB");


const app = express();

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Creating handlebars engine
const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
});

//funcitons

const getAllBus = async () => {
  const result = await Bus.findAll();
  // TODO: Find a better way to get plain json
  return JSON.parse(JSON.stringify(result));
};

const getBusById = async id => {
  const result = await Bus.findByPk(id);
  // TODO: Find a better way to get plain json
  return JSON.parse(JSON.stringify(result));
};

const getSeatData1 = async () => {
  const result = await Volvo2210.findAll();
  let currentId = 1;
  // TODO: Find a better way to get plain json
  console.log(JSON.parse(JSON.stringify(result)))
  return JSON.parse(JSON.stringify(result));
};

const getSeatData2 = async () => {
  const result = await Amma.findAll();
  // TODO: Find a better way to get plain json
  console.log(JSON.parse(JSON.stringify(result)))
  return JSON.parse(JSON.stringify(result));
};


const getSeatData3 = async () => {
  const result = await Volvo.findAll();
  // TODO: Find a better way to get plain json
  console.log(JSON.parse(JSON.stringify(result)))
  return JSON.parse(JSON.stringify(result));
};


const getSeatData4 = async () => {
  const result = await Mtc.findAll();
  // TODO: Find a better way to get plain json
  console.log(JSON.parse(JSON.stringify(result)))
  return JSON.parse(JSON.stringify(result));
};


const getSeatData5 = async () => {
  const result = await Dtc.findAll();
  // TODO: Find a better way to get plain json
  console.log(JSON.parse(JSON.stringify(result)))
  return JSON.parse(JSON.stringify(result));
};





// Let express know to use handlebars
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.get('/',(req,res)=>{
    res.status(200).render("signUp",{
        layout: "hero",
        title: "Bus.com | Sign Up"
    })
})

app.post("/", async (req, res) => {
    console.log(req.body)
    try {
      if (req.body.name && req.body.age && req.body.email && req.body.password) {
       
        const rr = await User.create(req.body);
        console.log("step1")
        // res.status(200).json({
        //   message: "User added Successfully",
        //   data: await result.get()
        // });
          res.status(200).render("busList",{
          layout: "hero",
          title: "Bus.com | Bus List",
          data: await getAllBus()
        })
      } else {
        res.status(400).send("Invalid User | Enter unique email id");
        console.log("error")
      }
    } catch (e) {
      res.status(500).send("Internal Server Error | Enter unique email id");
    }
  })



  app.get('/:id',async(req,res)=>{
    const id = req.params.id
    const busId = parseInt(id)
    if(busId == 1){
      try{
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData1(),
          // currentId: busId
        })
      }catch(e){
        res.status(500).send("error!")
        console.log(e.sql)
      }
    }

    else if(busId == 2){
      try{
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData2(),
          currentId: busId
        })
      }catch(e){
        res.status(500).send("error!")
        console.log(e.sql)
      }
    }

    else if(busId == 3){
      try{
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData3(),
          currentId: busId
        })
      }catch(e){
        res.status(500).send("error!")
        console.log(e.sql)
      }
    }

    else if(busId == 4){
      try{
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData4(),
          currentId: busId
        })
      }catch(e){
        res.status(500).send("error!")
        console.log(e.sql)
      }
    }

    else if(busId == 5){
      try{
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData5(),
          currentId: busId
        })
      }catch(e){
        res.status(500).send("error!")
        console.log(e.sql)
      }
    }
  
  })

  app.put('/:id/:seat',async(req,res)=>{
    const id = req.params.id
    const sn = req.params.seat
    const seat = parseInt(sn)
    const busId = parseInt(id)
    try{
      if(busId == 1){
        const result = await Volvo2210.update({status:false},{ where:{
          seatNumber: seat
        }})
        if (result.length) {
          console.log("booked")
        } else 
        console.log('failed')
          
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData1(),
          currentId: busId
        })
      }
  
      if(busId == 2){
        const result = await Amma.update({status:false},{ where:{
          seatNumber: seat
        }})
        if (result.length) {
          console.log("booked")
        } else 
        console.log('failed')
          
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData1(),
          currentId: busId
        })
      }
  
      if(busId == 3){
        const result = await Volvo.update({status:false},{ where:{
          seatNumber: seat
        }})
        if (result.length) {
          console.log("booked")
        } else 
        console.log('failed')
          
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData1(),
          currentId: busId
        })
      }
  
      if(busId == 4){
        const result = await Mtc.update({status:false},{ where:{
          seatNumber: seat
        }})
        if (result.length) {
          console.log("booked")
        } else 
        console.log('failed')
          
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData1(),
          currentId: busId
        })
      }
  
      if(busId == 5){
        const result = await Dtc.update({status:false},{ where:{
          seatNumber: seat
        }})
        if (result.length) {
          console.log("booked")
        } else 
        console.log('failed')
          
        res.status(200).render("busDetails",{
          layout: "hero",
          title: "Bus.com | Results",
          data: await getBusById(busId),
          busData: await getSeatData1(),
          currentId: busId
        })
      }
  
    } catch(e){
      res.send(500)
    }
   
  })



app.listen(3000)