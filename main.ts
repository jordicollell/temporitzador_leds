input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, y)
            basic.pause(500)
        }
    }
    alarma_sonora()
})
function alarma_sonora () {
    for (let index = 0; index < 10; index++) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        basic.pause(200)
    }
}
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
