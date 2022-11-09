input.onButtonPressed(Button.A, function () {
    number = 0
    OLED.clear()
})
let number = 0
OLED.init(128, 64)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        OLED.clear()
        number += 5
        OLED.drawLoading(number)
    }
})
