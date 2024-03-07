class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') throw new TypeError('SQFT must be a number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
