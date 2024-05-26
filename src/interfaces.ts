interface Point2D {
  x: number;
  y: number;
}

interface Point3D extends Point2D {
  z: number;
}

const point: Point3D = {
  x: 1,
  y: 1,
  z: 1,
};

class Example implements Point3D {
  x = 1;
  y = 0;
  z = 1;
}
