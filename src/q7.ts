type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string
};

function getUser1(): Partial<User> {
    return { id: 1, firstName: 'Chirag', lastName: 'Jain' }
}

function getUser2(): Omit<User, "password" | "email"> {
    return { id: 1, firstName: 'Chirag', lastName: 'Jain' }
}