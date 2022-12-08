const Benchmark = require('benchmark');
const avro = require('avro-js');
const msgpack5 = require('msgpack5')();
const msgpackr = require('msgpackr');

const suite = new Benchmark.Suite;

const type = avro.parse({
    name: 'example',
    type: 'record',
    fields: [
        {name: 'purchase', type: 'double'},
        {name: 'type', type: 'string'},
        {name: 'document', type: 'string'},
        {name: 'seller', type: 'string'},
        {name: 'integration', type: 'string'},
        {name: 'partner', type: 'int'},
        {name: 'product', type: 'string'},
        {name: 'purchasedAt', type: 'long', logicalType: 'timestamp-millis'},
    ]
});

const sale = {
    purchase: 640.24,
    type: 'ONLINE',
    document: '10640463479',
    seller: 'Amazon Retailer',
    integration: '26081223243',
    partner: 1,
    product: '88928',
    purchasedAt: Date.now(),
}

const packr = new msgpackr.Packr({structures: []});

suite.add('msgpack5.encode', async function () {
    msgpack5.encode(sale);
});
suite.add('avro.toBuffer', async function () {
    type.toBuffer(sale);
});
suite.add('msgpackr.pack', async function () {
    msgpackr.pack(sale);
});
suite.add('new Packr().pack', async function () {
    packr.pack(sale);
});

suite
    .on(`cycle`, function (event) {
        console.log(`${event.target} => ${(event.target.times.period * 1000).toFixed(3)}ms`)
    })
    .on(`complete`, function () {
        console.log('Fastest is: ' + this.filter('fastest').map('name'));
    })
    .run({async: true});
