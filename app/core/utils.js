export class Utils {

  static toNumber(value, defaultValue) {
    try {

      if (
        typeof value === 'boolean'
        || value === null
        || value === undefined
        || (typeof value === 'string' && value.trim() === '')
        || Array.isArray(value)
        || typeof value === 'object'
      ) {
        throw new TypeError(`Invalid number: ${value}`);
      }

      const num = Number(value);
      if (!Number.isFinite(num)) {
        throw new TypeError(`Invalid number: ${value}`);
      }

      return num;

    } catch {

      if (arguments.length > 1) {
        return defaultValue;
      }

      throw new TypeError(`Invalid number: ${value}`);

    }
  }

  static toRational(value) {
    if (typeof value === 'object' && value !== null && 'p' in value) {
      // Fraction object: { p, q }
      const p = Utils.toNumber(value.p);
      const q = 'q' in value ? Utils.toNumber(value.q) : 1.0;
      return new Rational(p, q);
    }
    if (typeof value === 'number') {
      // Single number: treat as p/1
      return new Rational(Utils.toNumber(value), 1.0);
    }
    if (typeof value === 'string') {
      // String: parse as number
      return new Rational(Utils.toNumber(value), 1.0);
    }
    throw new TypeError(`Cannot convert to Rational: ${value}`);
  }

}