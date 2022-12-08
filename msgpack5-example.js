const msgpack5 = require('msgpack5')();

const {encode, decode} = msgpack5;

{
    const buff = encode({'hello': 'world'});
    console.log(buff);
    console.log(decode(buff));
}

{
    const hex = encode({'hello': 'world'}).toString('hex');
    console.log(hex);

    const obj = decode(Buffer.from(hex, 'hex'));
    console.log(obj);
}
