const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Chitthi<br>
        <div class="subtitle">Chitthi</div>`,
        poster: "img/jubin img/1.jpg"
    },
    {
        id:'2',
        songName:` Barsaat ki Dhun<br>
        <div class="subtitle"Barsaat ki Dhun</div>`,
        poster: "img/jubin img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Meri Aashiqui<br><div class="subtitle"> Meri Aashiqui</div>`,
        poster: "img/jubin img/3.jpg",
    },
    {
        id:"4",
        songName: `Humnava Mere <br><div class="subtitle">Humnava Mere</div>`,
        poster: "img/jubin img/4.jpg",
    },
    {
        id:"5",
        songName: `Taaron Ke Seher Mein <br><div class="subtitle">Taaron Ke Seher Mein  </div>`,
        poster: "img/jubin img/5.jpeg",
    },
    {
        id:"6",
        songName: `Manike <br><div class="subtitle">Ohh God</div>`,
        poster: "img/jubin img/6.jpg",
    },
    {
        id:"7",
        songName: `Meri Zindagi Hai Tu<br><div class="subtitle">Satyamev Jayte 2</div>`,
        poster: "img/jubin img/7.jpg",
    },
    {
        id:"8",
        songName: `Tum Hi aana<br><div class="subtitle">Tum hi aana</div>`,
        poster: "img/jubin img/8.jpg",
    },
    {
        id:"9",
        songName: `Bimar Dil<br><div class="subtitle">Pagalpanti</div>`,
        poster: "img/jubin img/9.jpg",
    },
    {
        id:"10",
        songName: `Rabba Janda<br><div class="subtitle">Mission Majnu</div>`,
        poster: "img/jubin img/10.jpg",
    },
    {
        id:"11",
        songName: `Akh Lad Jaave<br><div class="subtitle">Loveratri</div>`,
        poster: "img/jubin img/11.jpg",
    },
    {
        id:"12",
        songName: `Kuch Baatein<br><div class="subtitle">Kuch Baatein</div>`,
        poster: "img/jubin img/12.jpg",
    },
    {
        id:"13",
        songName: `Bana Sharabi<br><div class="subtitle">Govinda Naam Mera</div>`,
        poster: "img/jubin img/13.jpg",
    },
    {
        id:"14",
        songName: `Teri Galliyon Se<br><div class="subtitle">Teri Galliyon Se</div>`,
        poster: "img/jubin img/14.jpg",
    },
    {
        id:"15",
        songName: `Tumse Pyaar Karke<br><div class="subtitle">Tuse Pyaar Karke</div>`,
        poster: "img/jubin img/15.jpg",
    },
    {
        id:"16",
        songName: `Meri Maa Ke Barabar Koi Nahi<br><div class="subtitle">Meri Maa Ke Barabar Koi Nahi</div>`,
        poster: "img/jubin img/16.jpg",
    },{
        id:"17",
        songName: `Lut Gaye<br><div class="subtitle">lut Gaye</div>`,
        poster: "img/jubin img/17.jpg",
    },{
        id:"18",
        songName: `Shish nawata Hun<br><div class="subtitle">Shish Nawata Hun</div>`,
        poster: "img/jubin img/18.jpg",
    },{
        id:"19",
        songName: `Dil Galti kar Baitha hai<br><div class="subtitle">Dil Galti Kar Baitha Hai</div>`,
        poster: "img/jubin img/19.jpg",
    },{
        id:"20",
        songName: `Wafa Naa Raas Aayi<br><div class="subtitle">Wafa Naa Raas Aayi</div>`,
        poster: "img/jubin img/20.jpg",
    },{
        id:"21",
        songName: `Kaash Tu Mila Hota<br><div class="subtitle">Code Blue</div>`,
        poster: "img/jubin img/21.jpg",
    },{
        id:"22",
        songName: `Meri Mai <br><div class="subtitle">Meri mai </div>`,
        poster: "img/jubin img/22.jpg",
    },{
        id:"23",
        songName: `Dil Lauta Do <br><div class="subtitle">Dil Lauta Do</div>`,
        poster: "img/jubin img/23.jpg",
    },{
        id:"24",
        songName: `Taaron Ke Seher<br><div class="subtitle">Taaron Ke Seher</div>`,
        poster: "img/jubin img/24.jpg",
    },{
        id:"25",
        songName: `Raatan lambiyan<br><div class="subtitle">Shershah</div>`,
        poster: "img/jubin img/25.jpg",
    },{
        id:"26",
        songName: `Mere Ghar Ram Aaye Hain<br><div class="subtitle">JMere Ghar Ram Aaye Hain</div>`,
        poster: "img/jubin img/26.jpg",
    },{
        id:"27",
        songName: `Mere Kanha <br><div class="subtitle">Mere Kanha</div>`,
        poster: "img/jubin img/27.jpg",
    },{
        id:"28",
        songName: `Mast Nazron Se<br><div class="subtitle">Mast Nazron Se</div>`,
        poster: "img/jubin img/28.jpg",
    },{
        id:"29",
        songName: `mere Baba <br><div class="subtitle">mere Baba</div>`,
        poster: "img/jubin img/29.jpg",
    },{
        id:"30",
        songName: `Bedardi Se Pyaar ka <br><div class="subtitle">Bedardi Se Pyaar ka</div>`,
        poster: "img/jubin img/30.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

//search data start
let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element =>{
    const{id,songName,poster} = element;
    //console.log(songName);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML =`
    <img src="${poster}">
                    <div class="content">
                        ${songName}
                    </div>`;
    search_results.appendChild(card);
})  

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup' , ()=>{
   let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
       let as = items[index].getElementsByClassName('content')[0];
       let text_value = as.textContent || as.innerHTML;

       if(text_value.toUpperCase().indexOf(input_value) > -1){
        items[index].style.display = "flex";
       } else {
        items[index].style.display = "none";
       }

       if(input.value == 0 ){
        search_results.style.display = "none";
       } else {
        search_results.style.display = "";
       }
    }
})
//search data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/jubin/${index}.mp3`;
        poster_master_play.src =`img/jubin img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/jubin/${index}.mp3`;
    poster_master_play.src =`img/jubin img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/jubin/${index}.mp3`;
    poster_master_play.src =`img/jubin img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 300
})