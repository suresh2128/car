import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import car from './Models/car';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect('connect your account', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(5000, () => {
    console.log("Connected to Database & Listening to localhost 3001");
});

const cartItemSchema = new mongoose.Schema({
    title: String,
    price: Number,
  });

  const CartItem = mongoose.model('CartItem', cartItemSchema);

  app.post('/api/addToCart', async (req, res) => {
    try {
      const { title, price } = req.body;
      const cartItem = new CartItem({ title, price });
      await cartItem.save();
      res.status(201).json(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
  });
  

  app.get('/getitems', async (req, res, next) => {
    let cart;
    try {
      cart = await CartItem.find(); // Use the correct model here
    } catch (err) {
      console.log(err);
    }
  
    if (!cart) {
      return res.status(404).json({ message: "No items found in the cart" });
    }
    return res.status(200).json({ cart });
  });
  

app.post('/addservice', (req, res) => {
    console.log(req.body.formdata);
    const { fname, address, number, anumber, vnumber, engine, model, year, colour } = req.body.formdata;
    const stud = new car({
        fname, address, number, anumber, vnumber, engine, model, year, colour});        
    stud.save()
        .then(() => {
            res.send({});
            
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error while saving data");
        });
});

app.delete('/deleteitem/:id', (req, res) => {
  const cartId = req.params.id;

  CartItem.findByIdAndRemove(cartId)
    .then(() => {
      res.send({ message: 'Cart Item Deleted Successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error while deleting cart item' });
    });
});





app.use('/', (req, res, next) => {
    res.send('Hi, Dude');
});