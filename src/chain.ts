import { Chain } from "viem/chains";

// ************ NETWORK CONFIG ************** //
export enum ChainId {
  ZK_CANDY_TESTNET = 302,
}

export const zkCandyTestnet: Chain = {
  id: 302,
  name: "ZKcandy Sepolia Testnet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.rpc.zkcandy.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "ZKcandy Block Explorer",
      url: "https://sepolia.explorer.zkcandy.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0x22414A57872dAF26c9918a5Ed5Aaf79bB7d63D36",
    },
  },
};
