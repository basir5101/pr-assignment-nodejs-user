let users = require("../utils/userData");


module.exports.getRandomUser = (req, res) => {
    res.send(users[parseInt(Math.random() * 10)]);
}

module.exports.getAllUsers = (req, res) => {
    const query = req.query;
    if (query.limit) {
        res.send(users.slice(0, Number(query.limit)))
    } else res.send(users);

}


module.exports.saveUser = (req, res) => {
    let newUsers = [...users, req.body]
    res.send(newUsers)
}

module.exports.updateUser = (req, res) => {
    let { id } = req.body;
    const user = users.find(u => u.id === Number(id))
    res.send({ ...user, ...req.body })
}

module.exports.updateUsers = (req, res) => {
    let { data } = req.body;
    let updatedUsers = [];
    for (let i = 0; i < data.length; i++) {
        const id = data[i].id;
        const user = users.find(u => u.id === Number(id))
        updatedUsers.push({ ...user, ...req.body.data[i] })
    }
    res.send(updatedUsers)
}

module.exports.deleteUser = (req, res) => {
    let { id } = req.body;
    const newUsers = users.filter(u => u.id !== Number(id))
    res.send(newUsers)
}