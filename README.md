# iBit Package for Microbit Robot

![ibit](https://raw.githubusercontent.com/emwta/pxt-iBit/master/icon.png = 450x455)  

The package adds support for the iBit add-on board from [INEX](https://inex.co.th).

### iBit Pins Used 

The following micro:bit pins are used for analog and digital sensors, motor driving, servo:  

* ``P0`` -- Analog Input 0
* ``P1`` -- Analog Input 1
* ``P2`` -- Analog Input 2
* ``P8`` -- Digital Input/Output and AnalogWrite/Servo1
* ``P12`` -- Digital Input/Output and AnalogWrite/Servo2
* ``P13`` -- DigitalWrite Pin for control direction motor 1
* ``P14`` -- AnalogWrite Pin for control speed motor 1
* ``P15`` -- DigitalWrite Pin for control direction motor 2
* ``P16`` -- AnalogWrite Pin for control speed motor 2
* ``P19`` -- motor driver - SCL
* ``P20`` -- motor driver - SDA

### Block Motor

Use iBit block motor to drive motor forward or backward. The value speed motor between 0 to 100.

* The motor select direction must be either `Forward` or `Backward`
* Speed is an integer value between `0 - 100`
* if need to reverse motor select direction motor to backward speed 0-100. 

```blocks
iBIT.Motor(motor.Forward, 100)

iBIT.Motor(motor.Backward, 100)
```

### Block Spin

Block spin to control both motors will be inverse side. example if choose `Left` motor2 spin forward and motor1 spin backward.

* The Spin select direction must be either `Left` or `Right`
* Speed is an integer value between `0 - 100`

```blocks
iBIT.Spin(spin.Left, 100)

iBIT.Spin(spin.Right, 100)
```

### Block Turn

Block turn to control motor one side stop and one side spin.

* The Turn select direction must be either `Left` or `Right`
* Speed is an integer value between `0 - 100`

```blocks
iBIT.Turn(turn.Left, 100)

iBIT.Turn(turn.Right, 100)
```

### Block Motor Stop

Block Motor Stop will be stop both motors set speed to `0` automatic.

```blocks
iBIT.MotorStop()
```

### Block Servo

Use block for control servo degree value `0 - 180`

* Degree is an integer value between `0 - 180`

```blocks
iBIT.Servo(servo.SV1, 90)
```

### Block Read ADC

Block ReadADC for read analog sensor on iBit have ADC 8 Channel.

* Insert analog sensor `ADC0 - ADC7`
* Block ReadADC select channel `ADC0 - ADC7` for read analog sensor.
* Use value of sensor to create conditions for the robot to mission. 

```block
iBIT.ReadADC(readADC.ADC0)
```

### Example

* ReadADC analog show number. if need to use other channel just change ADC channel.

```blocks
basic.showNumber(iBIT.ReadADC(readADC.ADC0))
```

* Motors Forward count speed 0-100 then Backward speed count 0-100.

```blocks
let speed = 0
basic.forever(() => {
    for (let speed = 0; speed <= 100; speed++) {
        iBIT.Motor(motor.Forward, speed)
        basic.pause(50)
    }
    for (let speed = 0; speed <= 100; speed++) {
        iBIT.Motor(motor.Backward, speed)
        basic.pause(50)
    }
})
```

* When pressed button `A` Turn Left speed 50, when pressed button `B` Turn Right speed 50.

```blocks
input.onButtonPressed(Button.A, () => {
    iBIT.Turn(turn.Left, 50)
})
input.onButtonPressed(Button.B, () => {
    iBIT.Turn(turn.Right, 50)
})
```

* When pressed button `A` Spin Left speed 50, when pressed button `B` Spin Right speed 50.

```blocks
input.onButtonPressed(Button.A, () => {
    iBIT.Spin(spin.Left, 50)
})
input.onButtonPressed(Button.B, () => {
    iBIT.Spin(spin.Right, 50)
})
```

* Example for Servo, count degree servo 1,2 degree from 0 to 180 if degree as 180 set to 0 

```blocks
basic.forever(() => {
    for (let Degree = 0; Degree <= 180; Degree++) {
        iBIT.Servo(servo.SV1, Degree)
        iBIT.Servo(servo.SV2, Degree)
        basic.pause(10)
        while (Degree == 180) {
            Degree = 0
        }
    }
})
```


