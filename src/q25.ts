// type Combine<N extends number, S extends string> = `${N}.${S}`

function combine < N extends number, S extends string > (n: N, s: S): `${N}.${S}`{
    return `${n}.${s}`
}

const x25 = combine(2, "b");

