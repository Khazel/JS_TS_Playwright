const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contact: {
        email: "john.doe@example.com",
        phone: "123-456-7890"
    },
    address: {
        city: "New Yourk",
        country: "USA"
    }
};

function getUserInfo(obj) {
    const {firstName: f, lastName: l, contact: {email: e, phone: p}, address: {city: c}} = obj;
    const userInfo = {
        firstName: f,
        lastName: l,
        email: e,
        phone: p,
        city: c
    }
    return userInfo;
}

console.log(getUserInfo(user));