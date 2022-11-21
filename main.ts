input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
let heading = 0
input.calibrateCompass()
basic.forever(function () {
    heading = input.compassHeading()
    if (heading > 357 || heading < 3) {
        basic.showString("N")
    } else if (heading > 180) {
        basic.showString(">")
    } else {
        basic.showString("<")
    }
})
