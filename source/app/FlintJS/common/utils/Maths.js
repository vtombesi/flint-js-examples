export default class Maths {

  static get RADTODEG() {
    return 180 / Math.PI;
  }

  static get DEGTORAD() {
    return Math.PI / 180;
  }

  /**
   * Converts an angle from radians to degrees
   *
   * @param radians The angle in radians
   * @return The angle in degrees
   */
  static asDegrees(radians) {
    return radians * Maths.RADTODEG;
  }

  /**
   * Converts an angle from degrees to radians
   *
   * @param radians The angle in degrees
   * @return The angle in radians
   */
  static asRadians(degrees) {
    return degrees * Maths.DEGTORAD;
  }
}
