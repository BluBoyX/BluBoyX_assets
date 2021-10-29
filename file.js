const fs = require('fs').promises
const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

const _json_path = "./assets/";
const _json_save_path = "./assets_new/";
const _img_path = "https://gateway.pinata.cloud/ipfs/QmUKAVathXn6k6mNUWr5creHSAoaHonk9j22mrm5RWNsuT/";

const files = readdirSync(_json_path);

const _count = files.length;

const setValue = (fn, value, fn_to) => 
  fs.readFile(fn)
    .then(body => JSON.parse(body))
    .then(json => {
      // manipulate your data here
      json.image = _img_path + value + ".png"
      return json
    })
    .then(json => JSON.stringify(json))
    .then(body => fs.writeFile(fn_to, body))
    .catch(error => console.warn(error));

function zeroPad(num_str, places) {
  var zero = places - num_str.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num_str;
}

async function change_metadata(){
  for(var i = 0; i < _count; i++){
    var fn_to = i.toString(16);
    console.log(fn_to);

    fn_to = './assets_new/'+ zeroPad(fn_to, 64) + ".json"
    await setValue('./assets/'+ (i) + ".json", i+1, fn_to);
  }
}

change_metadata();


