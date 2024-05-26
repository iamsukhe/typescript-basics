type TokenType =
    | {
        type: 'universal'
    }
    | {
        type: 'platform'
        platform: string
    }

function printPlatform(token: TokenType) {
    if ("platform" in token) {
        console.log(token.platform) // Error: Property 'platform' does not exist on type 'TokenType'
    }
    if (token.type === "platform") {
        console.log(token.platform) // Error: Property 'platform' does not exist on type 'TokenType'
    }
}

printPlatform({
    type: 'platform',
    platform: 'Student',
})