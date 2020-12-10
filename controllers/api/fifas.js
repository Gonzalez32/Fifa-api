const Player = require('../../models/fifa')

module.exports = {
    index,
    show,
    create,
    update,
    delete: deletePlayer,
}

function index(req, res) {
    res.send('<h1>ehehheehhe</h1>')
    Player.find({})
    .then((err, players) => {
        res.status(200).json(players)
    })
}

function show(req, res) {
    Player.findById(req.params.id)
    .then((players) => {
        res.josn(players)
    })
}

function create(req, res) {
    Player.create(req.body)
    .then((players) => {
        res.status(201).json(players)
    })
}
function update(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((players) => {
        res.json(players)
    })
}
function deletePlayer(req, res) {
    Player.findByIdAndDelete(req.params.id)
    .then((players) => {
        res.status(200).json(players)
    })
}