test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('nulo', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('adicionando números positivos não é zero', () => {
      expect(10).not.toBe(0);
});

test('atribuição de objeto', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('dois mais dois é quatro', () => {
  expect('4').toBe('4')
})

test('não existe I em team', () => {
  expect('team ').not.toMatch(/I/);
});

test('mas existe "stop" em Christoph', () => {
  expect('Christoph').toMatch(/stop/);
})

const shoppingList = [
  'fraldas',
  'kleenex',
  'sacos de lixo',
  'papel toalha',
  'leite',
];

test('a lista de compras tem leite nela', () => {
  expect(shoppingList).toContain('leite')
  expect(new Set(shoppingList)).toContain('leite')
})

function compileAndroidCode() {
  throw new Error('você está usando o JDK errado');
}

test('compilando para android segue conforme esperado', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // Você também pode usar a mensagem exata de erro ou uma regexp
  expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

test('testando extend', () => {
  expect.extend({
  yourMatcher(x, y, z) {
   if(x === y ){
     return {
      pass: true,
      message: () => 'forçando true no pass',
    };
   }
    return {
      pass: false,
      message: () => 'forçando false no pass',
    };
  },
});
  expect(2).yourMatcher(2)
    expect(2).not.yourMatcher(1)
})

function randocall(fn) {
  return fn(Math.floor(Math.random() * 6 + 1));
}

test('randocall calls its callback with a number', () => {
  const mock = jest.fn();
  randocall(mock);
  expect(mock).toBeCalledWith(expect.any(Number));
});

describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});