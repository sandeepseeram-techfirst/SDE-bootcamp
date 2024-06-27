const nearAPI = require("near-api-js");
const { connect, utils } = nearAPI;
const { config } = require('./config'); // loads config settings

// configure accounts, network, and amount of NEAR to send
const sender = "sender.testnet";
const receiver = "receiver.testnet";
const networkId = "testnet";
const amount = utils.format.parseNearAmount("1.5");

async function main() {
  const near = await connect(config);
  const sender = await near.account(sender);

  // TODO send those tokens here
  const result =
  console.log("Transaction Results: ", result.transaction);
  await sender.sendMoney(receiver, amount);
}
