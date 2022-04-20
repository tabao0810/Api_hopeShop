const express = require("express");
const User = require("../models/user");
const auth = require('../middleware/auth');
const req = require("express/lib/request");

const { updateUser, getAllUser} = require('../controllers/user');
const { route } = require("./blog");

const routerUser = express.Router();

routerUser.post("/users", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});
routerUser.post('/users/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).json({error: 'Login failed! Check authentication credentials'})
    }
}
);

routerUser.put('/users/:userId/update',updateUser);

routerUser.get('/users/me', auth, async(req,res)=>{
  res.send(req.user);
});
routerUser.post('/users/me/logout', auth, async(req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)}
    }       
      );
routerUser.get('/all-user',getAllUser)
module.exports = routerUser;