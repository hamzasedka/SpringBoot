class Value {
  async getValue(req, res) {
    try {
      let resultWs = await getValue();
      console.log('resultWs', resultWs);
      if (resultWs) {
        res.status(200).send({ value: resultWs });
      } else {
        res.status(200).send({
          message: 'Value not found!'
        });
      }
    } catch (error) {
      console.log('getValueError', {
        name: error.name,
        message: error.message
      });
      res.status(500).send({
        error: error.name,
        errorMessage: error.message.toString()
      });
    }
  }
}

function getValue() {
  const value = Math.floor(Math.random() * 1000 + 1);
  const valuePromise = new Promise((resolve, _reject) => resolve(value));
  return valuePromise;
}

const ValueController = new Value();
module.exports = ValueController;
