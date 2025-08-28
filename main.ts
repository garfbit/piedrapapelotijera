let seleccion = 0
input.onGesture(Gesture.Shake, function () {
    seleccion = randint(1, 3)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (seleccion == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (seleccion == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
