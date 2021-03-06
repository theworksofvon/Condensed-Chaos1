import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

const Tezos = new TezosToolkit("https://testnet-tezos.giganode.io");

const options = {
  name: "CondensedChaos",
  iconUrl: "https://tezostaquito.io/img/favicon.png",
  preferredNetwork: "mainnet",
};

const wallet = new BeaconWallet(options);

const getActiveAccount = async () => {
  return await wallet.client.getActiveAccount();
};

const connectWallet = async () => {
  let account = await wallet.client.getActiveAccount();

  if (!account) {
    await wallet
      .requestPermissions({ network: { type: "mainnet" } })
      .then((_) => wallet.getPKH())
      .then((address) => console.log(`Your address: ${address}`));

    account = await wallet.client.getActiveAccount();
  }
  return { success: true, wallet: account.address };
};

const disconnectWallet = async () => {
  await wallet.disconnect();
  return { success: true, wallet: null };
};

const checkIfWalletConnected = async (wallet) => {
  try {
    const activeAccount = await wallet.client.getActiveAccount();
    if (!activeAccount) {
      await wallet.client.requestPermissions({
        type: { network: "mainnet" },
      });
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};

{
  /*export const mintItem = async (amount) => {
  const response = await checkIfWalletConnected(wallet);

  if (response.success) {
    const tezos = new TezosToolkit(rpcURL);
    tezos.setWalletProvider(wallet);
    const contract = await tezos.wallet.at(config.contractAddress);
    const mint = await contract.methods.default(amount).send();
    const result = await Operation.confirmation();
    console.log(`${amount} minted`);
  }
}; */
}
export {
  connectWallet,
  disconnectWallet,
  getActiveAccount,
  checkIfWalletConnected,
};
