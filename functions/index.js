const functions = require("firebase-functions");
const express = require ('express');
const cors = require ('cors');
const stripe = require ('stripe')('sk_test_51LZnRMHLr8EOu9nuY7uRtk6ZFEYiPwoQZDF1DIBQHv9Dn5gccSZKxI6fFrfQzvf6xhpz1oN73RjcAD1OchGWWHQu00E0lFeAhs'
);

const app = express();

app.use(cors({orgin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send ('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
  // - Listen command


exports.api = functions.https.onRequest(app);

