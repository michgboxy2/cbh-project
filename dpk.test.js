const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('should return the partition key from the event if it is defined', () => {
    expect(deterministicPartitionKey({ partitionKey: 'abc' })).toBe('abc');
  });

  it('should calculate the partition key from the event data if it is not defined', () => {
    const partitionKey = deterministicPartitionKey({ name: 'king' });
    expect(typeof partitionKey).toBe('string');
    expect(partitionKey.length).toBe(128);
  });

  it('should truncate the partition key if it is longer than the maximum allowed length', () => {
    const partitionKey = deterministicPartitionKey({ partitionKey: 'a'.repeat(257) });
    expect(typeof partitionKey).toBe('string');
    expect(partitionKey.length).toBe(128);
    expect(partitionKey.length).toBeLessThan(256);
  });
});



