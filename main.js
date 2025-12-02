let musics = [
    {
        name: "Heyecanı Yok !",
        cover: "/Heyecani-Yok-By-Gazapizm.webp",
        audio: new Audio("/musicOne.mp3")
    },
    {
        name: "canbay & wolker şampiyon",
        cover: "/canbay_wolker_şampiyon.webp",
        audio: new Audio("/musicTwo.mp3")
    },

    {
        name: "ما یه مشت رفیق نابیم",
        cover: "/Alireza-Talischi-Refigh.webp",
        audio: new Audio("/nadarim az to behtar.mp3")
    },
    {
        name: "آدم و حوا من و تو مجنون و لیلا من و تو",
        cover: "/Moein-Z-Payam-Bash-1.webp",
        audio: new Audio("/moein z payam bash.mp3")
    },
    {
        name: "تیکه تیکه",
        cover: "/Hoorosh-Band-Tike-Tike.webp",
        audio: new Audio("/Horoosh band - Tike tike - 320.mp3")
    },
    {
        name: "ابی عالی مبارکه",
        cover: "/Ebi.webp",
        audio: new Audio("/Ebi Aali - Mobarakeh - 320.mp3")
    },
        {
        name: "سون بند",
        cover: "/7-band-in-baar-2024-09-06-01-00-41.webp",
        audio: new Audio("/7band.mp3")
    }
]

let range = document.querySelector("#music-time")
let play = document.querySelector("#play")
let next = document.querySelector("#next")
let pre = document.querySelector("#pre")
let musicCover = document.querySelector("#music-cover")
let musicName = document.querySelector("#music-name")

let currentMusic = 0;
let audio = musics[currentMusic].audio
musicCover.src = musics[currentMusic].cover
musicName.innerText = musics[currentMusic].name

audio.addEventListener("canplay", () => {
    console.log(audio.duration)
    range.max = audio.duration //دوریشن طول موسیک مااست
})

audio.addEventListener("timeupdate", () => {
    range.value = audio.currentTime //کارت تایم زمان فعلی آهنگمون رو بر می کردونه
})

range.addEventListener("input", () => {
    audio.currentTime = range.value  //وقتی موزیکو تغییر بدیم زمانشو از اونجا پخش بشه
})

play.addEventListener("click", () => {
    if (audio.paused) {    //ترو یا فالس بر میگردونه که به معنی خوانش اهنگ هست یا نخواندنش
        audio.play()
        musicCover.style.animationPlayState = "running"
        play.innerText = "❚❚"
    } else {
        audio.pause()
        musicCover.style.animationPlayState = "paused"
        play.innerText = "►"
    }
})

next.addEventListener("click", () => {
    changeMusic("next")
})

pre.addEventListener("click", () => {
    changeMusic("pre")
})

function changeMusic(state) {
    audio.pause()
    range.value = 0;
    play.innerText = "►"
    audio.currentMusic = 0;
    musicCover.style.animationPlayState = "paused"
    audio.currentMusic = 0;
    if (state == "next") {
        if (currentMusic == musics.length - 1)
            currentMusic = 0;
        else currentMusic += 1
    }
    if (state == "pre") {
        if (currentMusic == 0)
            currentMusic = musics.length - 1;
        else
            currentMusic -= 1;
    }

    audio = musics[currentMusic].audio
    musicCover.src = musics[currentMusic].cover
    musicName.innerText = musics[currentMusic].name

    audio.addEventListener("timeupdate", () => {
        range.value = audio.currentTime //کارت تایم زمان فعلی آهنگمون رو بر می کردونه
    })
}
