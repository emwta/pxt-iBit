/**
  * Enumeration of Motor.
  */
enum ibitMotor {
    //% block="Forward \u21c8"
    Forward,
    //% block="Backward \u21ca"
    Backward
}
/**
  * Enumeration of Motor2.
  */
enum ibitMotor2 {
    //% block="Forward \u21c8"
    Forward,
    //% block="Backward \u21ca"
    Backward
}

/**
  * Enumeration of TurnMotor.
  */
enum ibitTurn {
    //% block="Left \u27f5"
    Left,
    //% block="Right \u27f6"
    Right
}

/**
  * Enumeration of SpinMotor.
  */
enum ibitSpin {
    //% block="Left \u21f5"
    Left,
    //% block="Right \u21c5"
    Right
}

/**
  * Enumeration of ReadADC.
  */
enum ibitReadADC {
    //% block="ADC 0"
    ADC0 = 132,
    //% block="ADC 1"
    ADC1 = 196,
    //% block="ADC 2"
    ADC2 = 148,
    //% block="ADC 3"
    ADC3 = 212,
    //% block="ADC 4"
    ADC4 = 164,
    //% block="ADC 5"
    ADC5 = 228,
    //% block="ADC 6"
    ADC6 = 180,
    //% block="ADC 7"
    ADC7 = 244
}
/*
   Set ADC Address  
*/
enum adcAddress{
    //% block="V1.x"
    iBIT_V1=0x48,
    //% block="V2.x"
    iBIT_V2=0x4A
}
/**
  * Enumeration of Servo.
  */
enum ibitServo {
    //% block="1"
    SV1,
    //% block="2"
    SV2
}

enum ibitMotorCH {
    //% block="1"
    M1,
    //% block="2"
    M2
}

/**
 * Custom blocks
 */
//% weight=50 color=#02AFEC icon="\uf135"
namespace iBIT {
    let ADC_ADDRESS=0x4A;
    /**Motor Block to drives motor forward and backward. The speed motor is adjustable between 0 to 100.
      * @param speed percent of maximum speed, eg: 50
      */
    //% blockId="ibit_Motor" block="Motor %ibitMotor|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=95
    export function Motor(Motor: ibitMotor, speed: number): void {
        let motorspeed = pins.map(speed, 0, 100, 0, 1023)
        //pins.analogSetPeriod(AnalogPin.P14, 1000)
        //pins.analogSetPeriod(AnalogPin.P16, 1000)

        if (Motor == ibitMotor.Forward) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        if (Motor == ibitMotor.Backward) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }
    /**Motor Block to drives motor forward and backward. The speed motor is adjustable between 0 to 100 and can adjustable speed 2 motors.
     * @param speed1 percent of maximum speed, eg: 50
     * @param speed2 percent of maximum speed, eg: 50
     */
    //% blockId="ibit_Motor2" block="Motor2 %ibitMotor|speed1 %speed1|speed2 %speed2"
    //% speed.min=0 speed.max=100
    //% weight=99
    export function Motor2(Motor: ibitMotor, speed1: number, speed2: number): void {
        let motorspeed1 = pins.map(speed1, 0, 100, 0, 1023)
        let motorspeed2 = pins.map(speed2, 0, 100, 0, 1023)
        //pins.analogSetPeriod(AnalogPin.P14, 1000)
        //pins.analogSetPeriod(AnalogPin.P16, 1000)

        if (Motor == ibitMotor.Forward) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed1)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed2)
        }
        if (Motor == ibitMotor.Backward) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, motorspeed2)
        }
    }

    /**Turn Block set direction TurnLeft or TurnRight. The speed motor is adjustable between 0 to 100.
     * @param speed percent of maximum speed, eg: 50
     */
    //% blockId="ibit_Turn" block="Turn %ibitTurn|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=90
    export function Turn(Turn: ibitTurn, speed: number): void {
        let motorspeed = pins.map(speed, 0, 100, 0, 1023)
        //pins.analogSetPeriod(AnalogPin.P14, 1000)
        //pins.analogSetPeriod(AnalogPin.P16, 1000)

        if (Turn == ibitTurn.Left) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        if (Turn == ibitTurn.Right) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, 0)
        }
    }

    /**Spin Block set direction SpinLeft or SpinRight. The speed motor is adjustable between 0 to 100.  
      * @param speed percent of maximum speed, eg: 50
      */
    //% blockId="ibit_Spin" block="Spin %ibitSpin|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=85
    export function Spin(Spin: ibitSpin, speed: number): void {
        let motorspeed = pins.map(speed, 0, 100, 0, 1023)
        //pins.analogSetPeriod(AnalogPin.P14, 1000)
        //pins.analogSetPeriod(AnalogPin.P16, 1000)

        if (Spin == ibitSpin.Left) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        if (Spin == ibitSpin.Right) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }

    /**The Motor Stop block is used to stop both motors. The speed is set to 0 automatic.       
       * 
       */
    //% blockId="ibit_MotorStop" block="Motor Stop"
    //% weight=80
    export function MotorStop(): void {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
    /**
     * set I2C Address for ADC chip ADS7828 
     * iBIT V1.x = 0x48 (72) 
     * iBIT V2.x = 0x4A (74) [Default]
     * @param ADDRESS ,eg : 74
    */
    //% blockId="ibit_setADC_Address" block="set ADC Address for iBIT %adcAddress"
    //% weight=62
    export function setADC_Address(ADDRESS : adcAddress) {
        ADC_ADDRESS=ADDRESS
        serial.writeNumber(ADC_ADDRESS)
    }
    /**ReadADC for read analog sensor, Select ADC channel 0-7. 
      *
      */
    //% blockId="ibit_readADC" block="Read %ibitReadADC"
    //% weight=60
    export function ReadADC(ReadADC: ibitReadADC): number {
        pins.i2cWriteNumber(
            ADC_ADDRESS,
            ReadADC,
            NumberFormat.UInt8LE,
            false
        )
        return ReadADC = pins.i2cReadNumber(ADC_ADDRESS, NumberFormat.UInt16BE, false)
    }

    /**
     * Control Servo 1 or 2 set degree between 0 - 180
     * @param Degree servo degree 0-180, eg: 90
     */
    //% blockId="ibit_Servo" block="Servo %ibitServo|Degree %Degree"
    //% Degree.min=0 Degree.max=180
    //% weight=75
    export function Servo(Servo: ibitServo, Degree: number): void {
        if (Servo == ibitServo.SV1) {
            pins.servoWritePin(AnalogPin.P8, Degree)
        }
        if (Servo == ibitServo.SV2) {
            pins.servoWritePin(AnalogPin.P12, Degree)
        }
    }

    /**
    * Control Servo 1 or 2 set to freedom
    */
    //% blockId="ibit_ServoStop" block="Servo Stop %ibitServo"
    //% weight=70
    export function ServoStop(Servo: ibitServo): void {
        if (Servo == ibitServo.SV1) {
            pins.servoSetPulse(AnalogPin.P8, 0)
        }
        if (Servo == ibitServo.SV2) {
            pins.servoSetPulse(AnalogPin.P12, 0)
        }
    }

    /**MotorCH set Motor Channel and Direction. The speed motor is adjustable between 0 to 100.   
      * @param Speed percent of maximum Speed, eg: 50
      */
    //% blockId="ibit_MotorCH" block="setMotor %ibitMotorCH  | Direction %ibitMotor | Speed %Speed"
    //% Speed.min=0 Speed.max=100
    //% weight=100
    export function setMotor(Channel: ibitMotorCH, Direction: ibitMotor, Speed: number): void {
        let motorspeed = pins.map(Speed, 0, 100, 0, 1023)
        //pins.analogSetPeriod(AnalogPin.P14, 1000)
        //pins.analogSetPeriod(AnalogPin.P16, 1000)

        if (Channel == ibitMotorCH.M1 && Direction == ibitMotor.Forward) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
        }
        else if (Channel == ibitMotorCH.M2 && Direction == ibitMotor.Forward) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        else if (Channel == ibitMotorCH.M1 && Direction == ibitMotor.Backward) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
        }
        else if (Channel == ibitMotorCH.M2 && Direction == ibitMotor.Backward) {
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }
}
