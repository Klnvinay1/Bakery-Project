// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Replace 'mongodb://localhost/star_bakery' with your MongoDB connection string
mongoose.connect('mongodb://localhost/star_bakery', { useNewUrlParser: true, useUnifiedTopology: true });

const orderSchema = new mongoose.Schema({
  itemType: String,
  orderState: String,
  lastUpdateTime: Date,
  branch: Number,
  customer: String,
});

const Order = mongoose.model('Order', orderSchema);

app.use(bodyParser.json());

// GET endpoint to fetch a single order by order ID
app.get('/api/order/:orderid', async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderid);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint to create a new order
app.post('/api/order', async (req, res) => {
  try {
    const orderData = req.body;
    const order = new Order(orderData);
    await order.save();
    res.json({ orderId: order._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
