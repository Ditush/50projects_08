const sounds = ['slavik_obecny', 'zluva_hajni', 'bekasina_otavni', 'soupalek_dlouhoprsty', 'brkoslav_severni', 'vcelojed_lesni', 'racek_cernohlavy']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}