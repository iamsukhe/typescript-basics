type AG<T> = (x:T) => T  //Type AG is a generic type because we have to pass generic argument while using it.
type BG = <T>(x:T) => T  //Type BG id not a generic type however its pointing to a generic function
