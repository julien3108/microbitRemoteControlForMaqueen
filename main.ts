enum RadioMessage {
    message1 = 49434,
    avancer = 29696,
    gauche = 43105,
    droite = 37890,
    reculer = 19224,
    stop = 61268
}
radio.setGroup(100)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(500)
        if (input.buttonIsPressed(Button.A)) {
            radio.sendString("gauche")
        } else if (input.buttonIsPressed(Button.B)) {
            radio.sendString("stop")
        } else {
            radio.sendString("avancer")
        }
    } else if (input.buttonIsPressed(Button.B)) {
        basic.pause(500)
        if (input.buttonIsPressed(Button.B)) {
            radio.sendString("droite")
        } else if (input.buttonIsPressed(Button.A)) {
            radio.sendString("stop")
        } else {
            radio.sendString("reculer")
        }
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendString("gauche")
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendString("droite")
    } else if (input.logoIsPressed()) {
        basic.pause(500)
        radio.sendString("pince")
    } else if (input.isGesture(Gesture.Shake)) {
        radio.sendString("stop")
    }
})
