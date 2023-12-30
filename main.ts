input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColors(0xff0000, 0xffff00, 0x00ff00, 1000000000)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.turnRgbLedOff()
    basic.clearScreen()
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 1000000000)
    basic.showIcon(IconNames.No)
    basic.pause(500)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.turnRgbLedOff()
    basic.clearScreen()
    basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00, 1000000000)
    basic.showIcon(IconNames.Yes)
})
