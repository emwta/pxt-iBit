/**
  * Enumeration of Motor.
  */
enum motor {
    //% block="Forward \u21c8"
    Forward,
    //% block="Backward \u21ca"
    Backward
}

/**
  * Enumeration of TurnMotor.
  */
enum turn {
    //% block="Left \u27f5"
    Left,
    //% block="Right \u27f6"
    Right
}

/**
  * Enumeration of SpinMotor.
  */
enum spin {
    //% block="Left \u21f5"
    Left,
    //% block="Right \u21c5"
    Right
}

/**
  * Enumeration of ReadADC.
  */
enum readADC {
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

/**
  * Enumeration of Servo.
  */
enum servo{
    //% block="1"
    SV1,
    //% block="2"
    SV2
}

enum motorCH {
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
      
    /**Motor Block to drives motor forward and backward. The speed motor is adjustable between 0 to 100.
      * @param speed percent of maximum speed, eg: 50
      */
    //% blockId="ibit_Motor" block="Motor %motor|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=95
    export function Motor(Motor: motor, speed: number): void {  
        let motorspeed = pins.map(speed,0,100,0,1023)     
        if (Motor == motor.Forward) {
           pins.digitalWritePin(DigitalPin.P13, 1)
           pins.analogWritePin(AnalogPin.P14, motorspeed)
           pins.digitalWritePin(DigitalPin.P15, 0)
           pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        if (Motor == motor.Backward) {
           pins.digitalWritePin(DigitalPin.P13, 0)
           pins.analogWritePin(AnalogPin.P14, motorspeed)
           pins.digitalWritePin(DigitalPin.P15, 1)
           pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }

     /**Turn Block set direction TurnLeft or TurnRight. The speed motor is adjustable between 0 to 100.
      * @param speed percent of maximum speed, eg: 50
      */
    //% blockId="ibit_Turn" block="Turn %motor|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=90
    export function Turn(Turn: turn, speed: number): void {       
      let motorspeed = pins.map(speed,0,100,0,1023)      
        if (Turn == turn.Left) {           
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        if (Turn == turn.Right) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, 0)
        }
    }

    /**Spin Block set direction SpinLeft or SpinRight. The speed motor is adjustable between 0 to 100.  
      * @param speed percent of maximum speed, eg: 50
      */
    //% blockId="ibit_Spin" block="Spin %motor|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=85
    export function Spin(Spin: spin, speed: number): void {   
        let motorspeed = pins.map(speed,0,100,0,1023)    
        if (Spin == spin.Left) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        if (Spin == spin.Right) {
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
    export function MotorStop():void{
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P16, 0)
    }


    /**ReadADC for read analog sensor, Select ADC channel 0-7. 
      *
      */
    //% blockId="ibit_readADC" block="Read %readADC"
    //% weight=60
    export function ReadADC(ReadADC:readADC): number{ 
            let ADCValue:number;

            pins.i2cWriteNumber(
            72,
            ReadADC,
            NumberFormat.UInt8LE,
            false
            )
            return ReadADC = pins.i2cReadNumber(72, NumberFormat.UInt16BE, false)      
    }

    /**
     * Control Servo 1 or 2 set degree between 0 - 180
     * @param Degree servo degree 0-180, eg: 90
     */
    //% blockId="ibit_Servo" block="Servo %servo|Degree %Degree"
    //% Degree.min=0 Degree.max=180
    //% weight=75
    export function Servo(Servo:servo, Degree:number): void{
        if(Servo == servo.SV1){
            pins.servoWritePin(AnalogPin.P8, Degree)
        }
        if(Servo == servo.SV2){
            pins.servoWritePin(AnalogPin.P12, Degree)
        }
    }
    
     /**
     * Control Servo 1 or 2 set to freedom
     */
    //% blockId="ibit_ServoStop" block="Servo Stop %servo"
    //% weight=70
    export function ServoStop(Servo:servo): void{
        if(Servo == servo.SV1){
           pins.servoSetPulse(AnalogPin.P8, 0)
        }
        if(Servo == servo.SV2){
           pins.servoSetPulse(AnalogPin.P12, 0)
        }
    }

    /**MotorCH set Motor Channel and Direction. The speed motor is adjustable between 0 to 100.   
      * @param Speed percent of maximum Speed, eg: 50
      */
    //% blockId="ibit_MotorCH" block="Motor %motorCH | Direction %Motor | Speed %Speed"
    //% Speed.min=0 Speed.max=100
    //% weight=100
    export function MotorCH(Channel:motorCH, Direction:motor, Speed:number): void {
        let motorspeed = pins.map(Speed, 0, 100, 0, 1023)  
        
        if (Channel == motorCH.M1 && Direction == motor.Forward) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, motorspeed)            
        }
        else if (Channel == motorCH.M2 && Direction == motor.Forward) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        else if (Channel == motorCH.M1 && Direction == motor.Backward) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorspeed)  
        }
        else if (Channel == motorCH.M2 && Direction == motor.Backward) {
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }
}
