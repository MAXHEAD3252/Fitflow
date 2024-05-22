const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookie = require('cookie-parser')
const jwt = require('jsonwebtoken')
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');

const url ="mongodb+srv://akshat3252:akshatJoshi@maxhead.echatnd.mongodb.net/Users?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookie());


// mongoose atlas connection
async function connect() {
  await mongoose.connect(url);
  console.log("Mongoose Connected...");
}
connect();




// data schema
const newSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});



// create model
const newModel = mongoose.model("userRegister", newSchema);




// user register
//  fetching the data from frontend /signup path
// and check if the email is present or not
// then insert the data into the database model
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const data = { name: name, email: email, password: password };

    const check = await newModel.findOne({ email });
    if (check) {
      res.json("Exist");
    } else {
      res.json("notExist");
      await newModel.insertMany([data]);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
});




// login user 
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    newModel.findOne({ email:email })
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json('success')
                const generateToken = (user) => {
                  const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
                  return token;
              };
                console.log('Logged in successfully...')
                // console.log(cookie)
            }else{
                res.json('password incorrect')
                console.log({ error: 'password incorrect...' })
            }
        }else{
            res.json('user not exist')
            console.log({ error: 'User does not exist...' })
        }
    })
  } catch (err) {
    console.log({ error: "Login failed" });
  }
});


app.get('/', (req, res) => {
  const userEmail = req.cookies;
  // Check if the cookie exists
  if (!userEmail) {
    return res.status(401).json({ message: 'Unauthorized' });
  }else{
  // Here you can check if the user exists in your database or perform any other validation
  // For simplicity, let's assume the user exists
  // You can add more validation logic here if needed
  // If the user is validated, you can send a success response
  res.json({ message: 'Authorized', userEmail });
  console.log(message);
}
});




app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
