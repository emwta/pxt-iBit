# iBitBot Package for Microbit Robot

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

###  Using Block Motor

Use iBit block motor to drive motor forward or backward. The value speed motor between 0 to 100.

* The motor select direction must be either `Forward` or `Backward`
* Speed is an integer value between `0 - 100`
* if need to reverse motor select direction motor to backward speed 0-100. 

```blocks
iBIT.Motor(motor.Forward, 100)

iBIT.Motor(motor.Backward, 100)
```

###  Using Block Spin

* The Spin select direction must be either `Left` or `Right`
* Speed is an integer value between `0 - 100`

```blocks
iBIT.Spin(spin.Left, 100)

iBIT.Spin(spin.Right, 100)
```

### Using Block Turn

* The Turn select direction must be either `Left` or `Right`
* Speed is an integer value between `0 - 100`

```blocks
iBIT.Turn(turn.Left, 100)

iBIT.Turn(turn.Right, 100)
```

### Using Block Servo

Use iBit Servo motor analogWrite. Degree value 0-180

* 

