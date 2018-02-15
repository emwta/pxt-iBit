# iBit Package for Microbit Robot

The package adds support for the iBit add-on board from INEX.

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
basic.showNumber(iBIT.ReadADC(readADC.ADC0))
```

##Example