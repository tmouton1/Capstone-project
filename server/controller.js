const database = require('./db.json')
let newID = 3
    module.exports = {
        getAllSongs: (req,res) => {
            console.log("@@@@@@@@@@")
            console.log(database)
            console.log("hihihihihihi")
            res.status(200).send(database)
},
addSong: (req,res) => {
    // console.log(req.params)
    // console.log(req.query)
    // console.log(req.body)
    let { title, rating, imageURL} = req.body
    let newSong = {
        id: newID,
        title,
        rating,
        imageURL
    }

database.push(newSong)

res.status(200).send(database)

newID++
},

updateSong: (req,res) => {
    // console.log(req.params)
    // console.log(req.query)
    // console.log(req.body)
let { id } = req.params
let{ type } = req.body

let index = database.findIndex(songObj => songObj.id === +id)
let songUpdate = database[index]
if(type === 'minus' && songUpdate.rating > 1 ){
    songUpdate.rating-- 
}  else if(type === 'plus' && songUpdate.rating < 5) {
    songUpdate.rating++
}

res.status(200).send(database)
},

deleteSong: (req,res) => {
    // console.log(req.params)
    let {id} = req.params
    let index = database.findIndex(songsObj => songsObj.id === +id)
    database.splice(index,1)
    res.status(200).send(database)

}
}



            

