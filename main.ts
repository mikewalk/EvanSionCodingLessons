radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        basic.showArrow(ArrowNames.North)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
    if (receivedString == "B") {
        basic.showArrow(ArrowNames.South)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (receivedString == "L") {
        basic.showArrow(ArrowNames.East)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (receivedString == "R") {
        basic.showArrow(ArrowNames.West)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (receivedString == "X") {
        basic.showIcon(IconNames.No)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
basic.showIcon(IconNames.No)
radio.setGroup(123)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        radio.sendString("VIBON")
    } else {
        radio.sendString("VIBOFF")
    }
})
