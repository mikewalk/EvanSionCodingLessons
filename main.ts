input.onButtonPressed(Button.A, function () {
    MusicOn = !(MusicOn)
    if (MusicOn) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
    } else {
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.B, function () {
    LightsOn = !(LightsOn)
})
let RandomMove = 0
let MusicOn = false
let LightsOn = false
radio.setGroup(123)
let RGBLights = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
LightsOn = false
MusicOn = false
// Dance Code
basic.forever(function () {
    if (LightsOn && MusicOn) {
        RandomMove = randint(1, 8)
        if (RandomMove == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        } else if (RandomMove == 2) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        } else if (RandomMove == 3) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 200)
        } else if (RandomMove == 4) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
        } else if (RandomMove == 5) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        } else if (RandomMove == 6) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        } else if (RandomMove == 7) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        }
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(100)
    }
})
// Lights Code
basic.forever(function () {
    if (LightsOn) {
        RGBLights.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        RGBLights.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(500)
        RGBLights.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        RGBLights.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
        RGBLights.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.pause(500)
    } else {
        RGBLights.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
