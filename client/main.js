const songsContainer = document.querySelector('#songs-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/songs`

const songsCallback = ({ data: songs }) => displaySongs(songs)
const errCallback = err => console.log(err.response.data)


const getAllSongs = () => axios.get(baseURL).then(songsCallback).catch(errCallback)
const addSong = body => axios.post(baseURL, body).then(songsCallback).catch(errCallback)
const deleteSong = id => axios.delete(`${baseURL}/${id}`).then(songsCallback).catch(errCallback)
const updateSong = (id,type) => axios.put(`${baseURL}/${id}`,{type}).then(songsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')
    let rating = document.querySelector('input[name="ratings"]:checked')

    let bodyObj = { 
        title: title.value,
        imageURL: imageURL.value,
        rating: rating.value
    }

addSong(bodyObj)

title.value =''
imageURL.value = '' 
rating.checked = false

    } 

     function addSongCard(song) {
        const songCard = document.createElement('div')
        songCard.classList.add('song-card')

        songCard.innerHTML = `<img class="image" alt='song cover' src=${song.imageURL} class="song-cover"/>
        <p class="song-title">${song.title}</p>
        <div class=btns-container">
        <button onclick="updateSong(${song.id}, 'minus')">-</button>
        <p class="song-rating">${song.rating} stars</p>
        <button onClick="updateSong(${song.id}, 'plus')">+</button>
        </div>
    
        <button onclick="deleteSong(${song.id})">delete</button>
         `

         songsContainer.appendChild(songCard)
    }
         function displaySongs(arr) {
            songsContainer.innerHTML = ``
            for(let i =  0; i < arr.length; i++) {
                addSongCard(arr[i])
            } 
         }
        
         form.addEventListener('submit', submitHandler)

         getAllSongs()
        
console.log(addSong)

       