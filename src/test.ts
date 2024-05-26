function rerturName<T extends string> (name:T):{ name: T}{
    return {name:name}
}

const xtest = rerturName("Chirag") 