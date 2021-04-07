input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, y)
            basic.pause(1000)
        }
    }
    for (let index = 0; index < 10; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
        music.stopAllSounds()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
let x = 0
let y = 0
