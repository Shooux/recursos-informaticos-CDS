function play(soundName, soundVolume) {
    // Obtener el elemento de audio
    const player = document.getElementById("player");

    // Cambiar el archivo de audio a reproducir
    player.src = `audio/${soundName}.mp3`;

    // Cambiar el volumen del audio
    player.volume = soundVolume;

    // Reproducir el audio
    player.play();

}
