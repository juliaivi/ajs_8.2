export default class Settings {
  constructor(theme, music, difficulty) {
    this.byUserSettings = new Map();
    this.possibleValues = new Map([
      ['theme', ['dark', 'light', 'grey']],
      ['music', ['pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);

    this.byDefaultSettings = new Map(
      [
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy'],
      ],
    );

    if (this.possibleValues.get('theme').includes(theme)) {
      this.byUserSettings.set('theme', theme);
    } else {
      throw new Error('Не найдено значение в theme!!!');
    }

    if (this.possibleValues.get('music').includes(music)) {
      this.byUserSettings.set('music', music);
    } else {
      throw new Error('Не найдено значение в music!!!');
    }

    if (this.possibleValues.get('difficulty').includes(difficulty)) {
      this.byUserSettings.set('difficulty', difficulty);
    } else {
      throw new Error('Не найдено значение в difficulty!!!');
    }
  }

  get settings() {
    return new Map([...this.byDefaultSettings, ...this.byUserSettings]);
  }
}
