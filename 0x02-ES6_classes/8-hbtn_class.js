export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](prim) {
    if (prim === 'number') return this._size;
    if (prim === 'string') return this._location;
    return undefined;
  }
}
