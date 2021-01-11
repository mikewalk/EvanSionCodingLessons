gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    radio.sendString("L")
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    radio.sendString("R")
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    radio.sendString("B")
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendString("F")
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    radio.sendString("X")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "VIBRATESTART") {
        gamePad.vibratorMotor(gamePad.Vibrator.V1)
    }
    if (receivedString == "VIBRATEEND") {
        gamePad.vibratorMotor(gamePad.Vibrator.V0)
    }
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    radio.sendString("Y")
})
radio.setGroup(123)
