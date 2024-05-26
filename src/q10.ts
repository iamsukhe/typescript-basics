const aObj = {
    hello: "world"
} as const

const aObj2 = {
    hello: "world"
} 

aObj.hello = "123" // should not be allowed