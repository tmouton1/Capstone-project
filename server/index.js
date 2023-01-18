
const express = require('express')
const cors = require('cors')

const app = express()
  

app.use(express.json())
app.use(cors())

const { getAllSongs, addSong, updateSong, deleteSong } = require('./controller')

app.get('/api/songs', getAllSongs )
app.post('/api/songs', addSong)
app.put('/api/songs/:id', updateSong)
app.delete('/api/songs/:id',deleteSong)

app.listen(4004,console.log("Server running on 4004"))
 