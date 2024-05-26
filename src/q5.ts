type AxisUnion = 'x' | 'y';

// let axis: Axis = 'S'

const enum Axis {
    x = 0,
    y = 5
}

// let axis = Axis.x;


function showAxis(axis: Axis) {
    console.log(axis);
}

function showAxis_(axis: AxisUnion) {
    console.log(axis);
}

showAxis(Axis.x)
// showAxis("x")

showAxis_('x')

// DECLARING AND ACCESSING - declaring and accessing a union type is easy
// Enums are not part of the js so its hard to maintin it


