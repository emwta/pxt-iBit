/**
  * Enumeration of Motor.
  */
enum motor {
    //% block="Forward"
    Forward,
    //% block="Backward"
    Backward
}

/**
  * Enumeration of TurnMotor.
  */
enum turn {
    //% block="Left"
    Left,
    //% block="Right"
    Right
}

/**
  * Enumeration of SpinMotor.
  */
enum spin {
    //% block="Left"
    Left,
    //% block="Right"
    Right
}

/**
  * Enumeration of line sensors.
  */
enum BBLineSensor {
    //% block="left"
    Left,
    //% block="right"
    Right
}

/**
  * Enumeration of light sensors.
  */
enum BBLightSensor {
    //% block="left"
    Left,
    //% block="right"
    Right
}

/**
 * Ping unit for sesnor.
 */
enum BBPingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

/**
 * Custom blocks
 */
//% weight=20 color=#54ceb8 icon="\uf0fb"
namespace IBIT {

    let neoStrip: neopixel.Strip;

    /**
     * Return a neo pixel strip.
     */
    //% blockId="bitbot_neo" block="neo strip"
    //% weight=5
    export function neo(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB)
        }

        return neoStrip;
    }
   
    /**
      * Drive motor(s) Forward or Backward.
      *
      * @param Motor motor to drive.
      * @param speed speed of motor
      */
    //% blockId="ibit_Motor" block="motor robot %motor|speed %speed"
    //% weight=100
    export function Motor(Motor: motor, speed: number): void {       
        if (Motor == motor.Forward) {
           pins.digitalWritePin(DigitalPin.P13, 1)
           pins.analogWritePin(AnalogPin.P14, speed)
           pins.digitalWritePin(DigitalPin.P15, 0)
           pins.analogWritePin(AnalogPin.P16, speed)
        }
        if (Motor == motor.Backward) {
           pins.digitalWritePin(DigitalPin.P13, 0)
           pins.analogWritePin(AnalogPin.P14, speed)
           pins.digitalWritePin(DigitalPin.P15, 1)
           pins.analogWritePin(AnalogPin.P16, speed)
        }
    }

     /**
      * Drive motor(s) TurnLeft or TurnRight .
      *
      * @param Turn motor to drive.
      * @param speed speed of Turn
      */
    //% blockId="ibit_Turn" block="turn robot %motor|speed %speed"
    //% weight=90
    export function Turn(Turn: turn, speed: number): void {       
       if (Turn == turn.Left) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, speed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, speed)
        }
        if (Turn == turn.Right) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, speed)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, speed)
        }
    }

    /**
      * Drive motor(s) SpinLeft or SpinRight.
      *
      * @param Spin motor to drive.
      * @param speed speed of Spin
      */
    //% blockId="ibit_Spin" block="spin robot %motor|speed %speed"
    //% weight=95
    export function Spin(Spin: spin, speed: number): void {       
        if (Spin == spin.Left) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, speed)
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, speed)
        }
        if (Spin == spin.Right) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.analogWritePin(AnalogPin.P14, speed)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.analogWritePin(AnalogPin.P16, speed)
        }
    }

    /**
      * Sound a buzz.
      *
      * @param flag Flag to set (0) for off and (1) for on.
      */
    //% blockId="bitbot_buzz" block="buzz sound %flag"
    //% weight=95
    export function buzz(flag: number): void {
        pins.digitalWritePin(DigitalPin.P14, flag === 0 ? 0 : 1);
    }

    /**
      * Read line sensor.
      *
      * @param sensor Line sensor to read.
      */
    //% blockId="bitbot_read_line" block="read line sensor %sensor"
    //% weight=90
    export function readLine(sensor: BBLineSensor): number {
        if (sensor == BBLineSensor.Left) {
            return pins.digitalReadPin(DigitalPin.P11);
        } else {
            return pins.digitalReadPin(DigitalPin.P5);
        }
    }

    /**
      * Read light sensor.
      *
      * @param sensor Light sensor to read.
      */
    //% blockId="bitbot_read_light" block="read light sensor %sensor"
    //% weight=90
    export function readLight(sensor: BBLightSensor): number {
        if (sensor == BBLightSensor.Left) {
            pins.digitalWritePin(DigitalPin.P16, 0);
            return pins.analogReadPin(AnalogPin.P2);
        } else {
            pins.digitalWritePin(DigitalPin.P16, 1);
            return pins.analogReadPin(AnalogPin.P2);
        }
    }

    /**
      * Shows all LEDs to a given color (range 0-255 for r, g, b).
      *
      * @param rgb RGB color of the LED
      */
    //% blockId="bitbot_neo_set_color" block="set pixels to %rgb=neopixel_colors"
    //% weight=80
    export function neoSetColor(rgb: number) {
        neo().showColor(rgb);
    }

    /**
     * Set LED to a given color (range 0-255 for r, g, b).
     *
     * @param offset position of the NeoPixel in the strip
     * @param rgb RGB color of the LED
     */
    //% blockId="bitbot_neo_set_pixel_color" block="set pixel color at %offset|to %rgb=neopixel_colors"
    //% weight=80
    export function neoSetPixelColor(offset: number, rgb: number): void {
        neo().setPixelColor(offset, rgb);
    }

    /**
      * Show leds.
      */
    //% blockId="bitbot_neo_show" block="show leds"
    //% weight=76
    export function neoShow(): void {
        neo().show();
    }

    /**
      * Clear leds.
      */
    //% blockId="bitbot_neo_clear" block="clear leds"
    //% weight=75
    export function neoClear(): void {
        neo().clear();
    }

    /**
      * Shows a rainbow pattern on all LEDs.
      */
    //% blockId="bitbot_neo_rainbow" block="set led rainbow"
    //% weight=70
    export function neoRainbow(): void {
        neo().showRainbow(1, 360);
    }

    /**
     * Shift LEDs forward and clear with zeros.
     */
    //% blockId="bitbot_neo_shift" block="shift led pixels"
    //% weight=66
    export function neoShift(): void {
        neo().shift(1);
    }

    /**
     * Rotate LEDs forward.
     */
    //% blockId="bitbot_neo_rotate" block="rotate led pixels"
    //% weight=65
    export function neoRotate(): void {
        neo().rotate(1);
    }
    export function thongBrightness(brightness: number): void {
        neo().setBrigthness(brightness);
    }
    /**
     * Set the brightness of the strip.
     *
     * @param brightness a measure of LED brightness in 0-255. eg: 255
     */
    //% blockId="bitbot_neo_brightness" block="set led brightness %brightness"
    //% weight=10
    export function neoBrightness(brightness: number): void {
        neo().setBrigthness(brightness);
    }

    /**
    * Read distance from sonar module connected to accessory connector.
    *
    * @param unit desired conversion unit
    */
    //% blockId="bitbot_sonar" block="read sonar as %unit"
    //% weight=7
    export function sonar(unit: BBPingUnit): number {
        // send pulse
        let trig = DigitalPin.P15;
        let echo = DigitalPin.P15;

        let maxCmDistance = 500;

        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        let d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case BBPingUnit.Centimeters: return d / 58;
            case BBPingUnit.Inches: return d / 148;
            default: return d;
        }
    }
}
