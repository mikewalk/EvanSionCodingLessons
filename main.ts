gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    radio.sendString("LEFT")
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    radio.sendString("RIGHT")
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    radio.sendString("BACk")
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendString("BACk")
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    radio.sendString("STOP")
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
    radio.sendString("PLAY")
})
radio.setGroup(123)
