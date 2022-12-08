# serialize-deserialize-data-buffer

Examples show serializing and deserializing `json` object to `Buffer` structure and measure the performance of each other.

All benchmarks were performed on Node v18.12.1 (MacOS M1 Pro 16gb).

Libs:
* `msgpack5`
* `msgpackr`
* `avro-js`

## Serializer

Benchmark results:

```
msgpack5.encode x 208,592 ops/sec ±0.23% (95 runs sampled) => 0.005ms
avro.toBuffer x 1,339,927 ops/sec ±1.01% (98 runs sampled) => 0.001ms
msgpackr.pack x 2,050,131 ops/sec ±0.22% (95 runs sampled) => 0.000ms
new Packr().pack x 2,769,945 ops/sec ±0.15% (94 runs sampled) => 0.000ms

Fastest is: new Packr().pack

```

## Deserializer

Benchmark results:
```
msgpack5.decode x 163,216 ops/sec ±0.20% (93 runs sampled) => 0.006ms
avro.fromBuffer x 2,506,071 ops/sec ±0.13% (100 runs sampled) => 0.000ms
msgpackr.unpack x 1,591,186 ops/sec ±0.28% (99 runs sampled) => 0.001ms
new Packr().unpack x 5,561,408 ops/sec ±0.25% (95 runs sampled) => 0.000ms

Fastest is: new Packr().unpack
```
