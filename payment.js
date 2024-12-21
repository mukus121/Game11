 

const stripe = require('stripe')('your_stripe_secret_key');
const express = require('express');
const router = express.Router();

// Create Payment Intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,  // amount in cents, so ₹1000 = 100000
      currency: 'inr',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
