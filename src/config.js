"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "BluBoyX NFT";
const description = "BluBoyX NFT price is 0.55 sols";
const baseUri = "";
// const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  name: "BluBoyX NFT 1",
  image: "https://ipfs.io/ipfs/QmPdCq8TdVzFrZ7TuyYmX1QaJfJYua2fALaxsJtdbFvJSo/",
  price: "0.01",
  supply: "10000",
  privileges: "Access to land drops after the First & Founding BluBoyX, access to BluBoyX Discord channels, voting power",
  Headgear: "No",
};

var sample_data = {
  "name":"Citizen NFT",
  "image":"https://ipfs.io/ipfs/QmbpNYeiSpXHNZXyr6Kd6b9tiHS3srM9mJ3Uc6bcMyq9xt",
  "attributes":[
    {"trait_type":"Price",
    "value":"0.25"},
    {"trait_type":"Supply",
    "value":"10000"},
    {"trait_type":"Privileges",
    "value":"Access to land drops after the First & Founding Citizens, access to Citizens Discord channels, voting power"},
    {"trait_type":"Headgear",
    "value":"No"}
  ]
}

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Base" },
      { name: "Body" },
      { name: "Eyes" }
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
};
