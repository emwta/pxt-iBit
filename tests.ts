input.onButtonPressed(Button.A, () => {
    IBIT.Turn(turn.Left, 50)
    basic.pause(1000)
    IBIT.Turn(turn.Right, 50)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, () => {
    IBIT.Spin(spin.Left, 50)
    basic.pause(1000)
    IBIT.Spin(spin.Right, 50)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, () => {
    basic.showNumber(IBIT.ReadADC(readADC.ADC0))
    basic.showNumber(IBIT.ReadADC(readADC.ADC1))
    basic.showNumber(IBIT.ReadADC(readADC.ADC2))
    basic.showNumber(IBIT.ReadADC(readADC.ADC3))
    basic.showNumber(IBIT.ReadADC(readADC.ADC4))
    basic.showNumber(IBIT.ReadADC(readADC.ADC5))
    basic.showNumber(IBIT.ReadADC(readADC.ADC6))
    basic.showNumber(IBIT.ReadADC(readADC.ADC7))
})

basic.forever(() => {
    for (let Speed = 0; Speed <= 100; Speed++) {
        IBIT.Motor(motor.Forward, Speed)
        basic.pause(50)
    }
    basic.pause(1000)
    for (let Speed = 0; Speed <= 100; Speed++) {
        IBIT.Motor(motor.Backward, Speed)
        basic.pause(50)
    }
    basic.pause(1000)
    IBIT.MotorStop()
    for (let Degree = 0; Degree <= 180; Degree++) {
        IBIT.Servo(servo.SV1, Degree)
        IBIT.Servo(servo.SV2, Degree)
        basic.pause(30)
    }
    IBIT.Servo(servo.SV1, 0)
    IBIT.Servo(servo.SV2, 0)
})