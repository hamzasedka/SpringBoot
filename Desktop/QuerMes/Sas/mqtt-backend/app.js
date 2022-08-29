const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const http = require('http');
const mqtt = require('mqtt');

// Routes
const valueRouter = require('./routes/value');

const httpServer = http.Server(app);

const host = 'broker.emqx.io';
const port = 8083;
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
console.log(clientId);
const connectUrl = `ws://${host}:${port}/mqtt`;
const client = mqtt.connect(connectUrl, {
  'x-content-type-options': '',
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000
});

const postMessage1 = 'CADENCE';
const postMessage2 = 'METRAGE';
const postMessage3 = 'CADENCE_CHART';
const postMessage4 = 'TOPIC_1';

client.on('connect', () => {
  console.log('Mqtt connected');

  setInterval(() => {
    const value1 = randomIntFromInterval(2000, 6000);
    const value2 = 1000 + randomIntFromInterval(2000, 6000);
    const value4 = randomIntFromInterval(1000, 2000);
    // const message = JSON.stringify({ value });
    const message1 = value1 + '';
    const message2 = value2 + '';
    const message4 = value4 + '';
    console.log(
      'message1:',
      message1,
      '|',
      'message2:',
      message2,
      '|',
      'message4:',
      message4
    );
    client.publish(
      postMessage1,
      message1,
      { qos: 0, retain: false },
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
    // client.publish(
    //   postMessage2,
    //   message2,
    //   { qos: 0, retain: false },
    //   (error) => {
    //     if (error) {
    //       console.error(error);
    //     }
    //   }
    // );
    client.publish(
      postMessage4,
      JSON.stringify({ value: message4, status: 't' }),
      { qos: 0, retain: false },
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
  }, 1 * 1000);

  setInterval(() => {
    const value3 = randomIntFromInterval(2000, 6000);
    const message3 = value3 + '';
    console.log('message3:', message3);
    client.publish(
      postMessage3,
      message3,
      { qos: 0, retain: false },
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
  }, 60 * 1000);
});

client.on('reconnect', (error) => {
  console.log(`Reconnecting...`, error);
});

client.on('error', (error) => {
  console.log(`Cannot connect:`, error.toString());
});

client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString());
});

listenToNodejsServer();

// Middleware
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors(corsOptions), bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', valueRouter);

// Run Server
function listenToNodejsServer() {
  const PORT = process.env.PORT || 8000;
  httpServer.listen(PORT, (err) => {
    if (err) console.log('Error in Nodejs server !!!');
    console.log(
      '============== Nodejs server is running on port: ' +
        PORT +
        ' =============='
    );
  });
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
