import FlintJS, { common, twod } from '../../FlintJS/FlintJS';

export default class Snowfall extends FlintJS.twod.emitters.Emitter2D { // extends

  constructor() {
    super();

    // const counter = new common.counters.Steady(150);

    // this.addInitializer( new FlintJS.common.initializers.ImageClass() );

    // const counter = new FlintJS.common.counters.Steady(150);
    //
    // addInitializer(new FlintJS.common.initializers.ImageClass(FlintJS.common.displayObjects.RadialDot, [2]));
    // addInitializer(new Position(new LineZone(new Point(-5, -5), new Point(605, -5))));
    // addInitializer(new Velocity(new PointZone(new Point(0, 65))));
    // addInitializer(new ScaleImageInit(0.75, 2));
    //
    // addAction(new Move());
    // addAction(new DeathZone(new RectangleZone(-10, -10, 620, 420), true));
    // addAction(new RandomDrift(20, 20));
  }

}
