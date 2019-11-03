function soma(a, b) {
  console.log(process.env.NODE_ENV);
  return a + b;
}

function getNodeEnv() {
  return process.env.NODE_ENV || 'postgres';
}

test('If I call soma function with 4 and 5, should return 9', () => {
  const result = soma(4, 5);
  expect(result).toBe(9);
});

test('If I call getNodeEnv method, should return test', () => {
  const result = getNodeEnv();
  expect(result).toBe('test');
});
