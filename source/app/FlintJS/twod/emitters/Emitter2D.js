import Emitter from '../../common/emitters/Emitter';
import Maths from '../../common/utils/Maths';
import ParticleCreator2D from '../../twod/particles/ParticleCreator2D';

export default class Emitter2D extends Emitter {

  static get defaultParticleFactory() {
    return this._creator;
  }

  constructor() {
    super();
    this._creator = new ParticleCreator2D();
    this._particleFactory = this._creator;

    this._x = 0;
    this._y = 0;
  }

  get rotation() {
    return Maths.asDegrees(this._rotation);
  }
  set rotation(v) {
    this._rotation = Maths.asRadians(v)
  }

  get rotRadians() {
    return this._rotation;
  }
  set rotRadians(v) {
    this._rotation = v;
  }

  initParticle(particle) {
    particle.x = this._x;
    particle.y = this._y;
    particle.previousX = this._x;
    particle.previousY = this._y;
    particle.rotation = this._rotation;
  }

  sortParticles() {
    this._particles.sortOn('x', Array.NUMERIC);
    for (let i = 0; i < _particles.length; i += 1) {
      this._particles[i].sortID = i;
    }
  }

}
