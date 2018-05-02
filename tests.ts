input.onButtonPressed(Button.A, () => {
    IBIT.Turn(ibitturn.Left, 50)
    basic.pause(1000)
    IBIT.Turn(ibitturn.Right, 50)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, () => {
    IBIT.Spin(ibitspin.Left, 50)
    basic.pause(1000)
    IBIT.Spin(ibitspin.Right, 50)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, () => {
    basic.showNumber(IBIT.ReadADC(ibitreadADC.ADC0))
    basic.showNumber(IBIT.ReadADC(ibitreadADC.ADC1))
    basic.showNumber(IBIT.ReadADC(ibitreadADC.ADC2))
    basic.showNumber(IBIT.ReadADC(ibitreadADC.ADC3))
    basic.showNumber(IBIT.ReadADC(ibitreadADC.ADC4))
    basic.showNumber(IBIT.ReadADC(ibitreadADC.ADC5))
    basic.showNumber(IBIT.ReadADC(ibitreadADC.ADC6))
    basic.showNumber(IBIT.ReadADC(ibitreadADC.ADC7))
})

basic.forever(() => {
    for (let Speed = 0; Speed <= 100; Speed++) {
        IBIT.Motor(ibitmotor.Forward, Speed)
        basic.pause(50)
    }
    basic.pause(1000)
    for (let Speed = 0; Speed <= 100; Speed++) {
        IBIT.Motor(ibitmotor.Backward, Speed)
        basic.pause(50)
    }
    basic.pause(1000)
    IBIT.MotorStop()
    for (let Degree = 0; Degree <= 180; Degree++) {
        IBIT.Servo(ibitservo.SV1, Degree)
        IBIT.Servo(ibitservo.SV2, Degree)
        basic.pause(30)
    }
    IBIT.Servo(ibitservo.SV1, 0)
    IBIT.Servo(ibitservo.SV2, 0)
})