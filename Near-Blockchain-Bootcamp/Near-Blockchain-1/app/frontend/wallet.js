// near api js
import { providers } from 'near-api-js';

// wallet selector
import { distinctUntilChanged, map } from 'rxjs';
import '@near-wallet-selector/modal-ui/styles.css';
import { setupModal } from '@near-wallet-selector/modal-ui';
import { setupWalletSelector } from '@near-wallet-selector/core';
import { setupHereWallet } from '@near-wallet-selector/here-wallet';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';

const THIRTY_TGAS = '30000000000000';
const NO_DEPOSIT = '0';

export class Wallet {
    /**
     * @constructor
     * @param {Object} options - the options for the wallet
     * @param {string} options.networkId - the network id to connect to
     * @param {string} options.createAccessKeyFor - the contract to create an access key for
     * @example
     * const wallet = new Wallet({ networkId: 'testnet', createAccessKeyFor: 'contractId' });
     * wallet.startUp((signedAccountId) => console.log(signedAccountId));
     */
    constructor({ networkId = 'testnet', createAccessKeyFor = undefined }) {
      this.createAccessKeyFor = createAccessKeyFor;
      this.networkId = networkId;
    }
  
    