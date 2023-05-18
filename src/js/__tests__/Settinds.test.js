import Settings from '../Settings';

test('adding custom settings', () => {
  const settingsUser = new Settings('dark', 'pop', 'easy');
  const expectation = new Map([
    ['theme', 'dark'],
    ['music', 'pop'],
    ['difficulty', 'easy'],
  ]);

  expect(settingsUser.settings).toEqual(expectation);
});

test('if there is no such parameter', () => {
  expect(() => new Settings('adark', 'pop', 'easy')).toThrow('Не найдено значение в theme!!!');
  expect(() => new Settings('dark', 'opop', 'easy')).toThrow('Не найдено значение в music!!!');
  expect(() => new Settings('dark', 'pop', 'seasy')).toThrow('Не найдено значение в difficulty!!!');
});
