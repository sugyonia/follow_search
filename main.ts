function 右をむく () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function 左をむく () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 止まる () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 後ろにすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
}
function 前にすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
pins.digitalWritePin(DigitalPin.P12, 1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        止まる()
        basic.pause(500)
        後ろにすすむ()
        basic.pause(1000)
        左をむく()
        basic.pause(500)
        止まる()
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        止まる()
        basic.pause(500)
        後ろにすすむ()
        basic.pause(1000)
        右をむく()
        basic.pause(500)
        止まる()
    } else {
        前にすすむ()
    }
})
