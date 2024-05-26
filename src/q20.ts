// 20. Create a function `print` which takes `n` number of arguments & prints them all using console.log

function print(...args: (number | string)[]) {
    args.forEach((val) => {
        console.log(val)
    })
}

print(1, "2", 3)