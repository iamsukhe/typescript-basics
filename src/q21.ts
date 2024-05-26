function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number) {
    if (!c) {
        return a + b;
    }
    return a + b + c
}



console.log(add(1, 2, 3))