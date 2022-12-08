const msgpackr = require('msgpackr');
const {unpack, pack, Packr, Unpackr} = msgpackr;

const packr = new Packr({structures: []});

{
    const obj = {hello: 'world'};
    const serializedAsBuffer = pack(obj);
    console.log(serializedAsBuffer);

    const data = unpack(serializedAsBuffer);
    console.log(data);
}

{
    const obj = {hello: 'world'};
    const serializedAsBuffer = packr.pack(obj);
    console.log(serializedAsBuffer);

    const data = packr.unpack(serializedAsBuffer);
    console.log(data);
}

