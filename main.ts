/*
 * Auto Bot
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 * /

/**
 * Custom graphic block
 */

// import { gestures } from "./enums.d.ts"

//% weight=100 color=#fa8f13 icon="\uf1b9" block="AutoBot"
// groups=['Directions', 'Movements', 'Sensors', 'Logic']
namespace autoBot {

    const MIN_VEL = 150;  //   0 km/hr
    const MAX_VEL = 1023;  // 100 km/hr

    /**
     * Setup variables, pins and enumerations
     */

    // Disable LED Matrix
    led.enable(true)

    // Stop motors
    stop()

    // Set initial speed
    setSpeed(50)

    let gestures = {
        uno: {
            icon: "data:image/png;base64,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"
        },
        dos: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVR4nO2b4XWbMBSFP3r6P2wQOkGcCUonqDtB0wnqbuBO0GSCJhvYG5AJiiconaD2BK8/JGpZAVtIYJGEew7HRAi9x0W670kiiYjwmvEmtgOxMREQ24HYmAiI7YCJBMoEVme1OaYokIAACCTnsjmqHtCEBIoEloO1P/YeMHSvGH0PGBoTAbEMJyAJlLHs//cjlga4jvdJAwbGREBsB2JjIiC2A7ExERDR9hr441DvDngcyonRzwWGxqsfAm9jO2DhOzA7p8G+hkAO3AOX+u8NUKFy/dI4Hx36ICBDPdwFStQq4H1L3Ud9vQIK4zwa+iBgAfwAHoAbozzTR278XtKMaMT0QcA98Bl4R7PTqa6TsicjQy1+ruhGTAlsQx0+gIiEHqWIVC3Xcn1NRGSpyzLjnhsR2Uo3bEWkEJFbEVloG6mv/6EPn2qnVg3Xbi3Hc88HdkUhHkSEEpBr40ujbCbqDTc5ODSKBh+PHqGJUK5/C/27AH4BVw1168iwQY1tlzS4K9qiTytCE6E6aalQJBxzYI0iqLLKcw4jxgwVUn2w63pDaBQwFfmY02aInKEiAux7jo0URdbiRLs21sC8Q/0gDcgcx2UdIVJp1oFKly9FZC5KQ0w96QJTiwYXwbmjUze6/tJ66GOoRBFs33cK+RF/exfB3LFeZdW/A25P3HNp1Lnv4FPn+UaICPrO2r4eufaA0oWfwEddVjm2u8EjSwzpAa4hpybq1FsHJWB1vTpMZo52vGabvgTYb38NfEO9BRtLlKqvgA+ot9xUD5Ti16pfE5E7+uQ33e4qGvpYGMJTGuVtql0aooZVf66FbiUqGhSyF85UTgtmDTN6OB++GmD2gMI4T2nGFfAb9fbLhqPps5hUt902U7Th1QN8E6GSw3T3C0qAbnF3GFTm1rRqNEclTq5J0CPuQ+UAPgSkwF8fYz1hw9O5xh0qa+wMHxE866KlgR1wre1/sq4Vvo36EJD7GgtEPVTgqWZ4L7g+px4wY58TLI3yHQHrhz5RIPc1FogLVCSxNaAIabRrD8jwn6v3BVsAg/YbfAgYG4qQm1/C3uBZe0BBex4fA14zQBO+YbDes++8BtczgvcbfaLAlsOsK0WFqDpM1efnEMtgAob8QCLjcG8ww2PZ+gSuCSQhxhciGf0Qs6N99umMGB9IVOz3EUxkHBIzo3mDpYbLCtNJjOoboRbY2gJqobSXf615DgQMipeQCAVhIiC2A7ExERDbgdh49QT8A9YP5MUcc2wYAAAAAElFTkSuQmCC"
        },
        tres: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADSUlEQVR4nO2a63XaQBCFP+Xkv9WB1QG4AquD0EFwBy6BElwC7oBUEFxBoAKLDnAFkx+jjVZCbyQNOeieswehx+7cuzOzDykQEe4Z36wNsMYsgLUB1pgFsDbAGqYCBLAJYGNqg9UwGMAS+JP+fRI4WNhh6QHbiuNJYSJA6vYL79TCKhQmD4EAIuCz4vLkoWDhAduaa29TGeEwqQABvALPNbc8p/dMBrNRACAAARAIrGy4+4nQd8vGLXve4e49wHoqLC4PWOHuPWDOAdYGWGPOAZaN3wLmHGBtgDXmHGDZ+C3g7nPAWAKE6Lp+DTym577Q3R5XEmA/UvutMcZ+wBIl9gC8k5GMgDj9ffTuP5GJkZAJNAmGFsCRByVbR+QV3QjdoaIsUdEcjuQFcV4zKIYUoIl8mJ5fpeUBeCHbI1yhIXNOy5q8IA4fqBAJmdckfY0eSoAq8hFKLAZ+FJ75hfb+qnDtRD5E2sDPL4l3fG56cAgBiuRDMtKL0iemgxNm75UcrhXAT3hHtMfL3LZo1I7MfR2itD5Xmurpg4th9xoBfPJt8IUmvi35EQHyrusQkokRoV7VNTSK7YcXZ0WkT1mKyFna4yAiYVq2Le7dichGRFYiEnntvnZo08dZ1OYLLlOQT0SJIyJ77/y68L8OK6/9Q4e2RWrISw8Bysg3ibHxnm+LveR729URtmivaFsleekoQJH8oVB5Vc/svHtW6f+kheEOiWRh0BQ+xTpqyUsHAcp6PvauN8XmTvJu7EosGgpvor1eJL4R7fVI2oeLSEvyItJqFKjL9h90H7JOXE5vq6bMS3Tk+Nmh/i+ap+H/0CRA16HuGhzJz9z6zAU6kYd6AaYk3xZuZgflr9mf6LiSrNoPCNHZ2i2Rf0cXSA5n8va90GMZXbYlFqI9f82sawy4r0eWXHaOv6rshLIQiIHffSozQm/yUO4BBzS7/w+4ijw0jwIxuhCJ0uOxVml9cDV56LcaLK7Sxly+VmEQ8jDsllhEfpkbUf9FWF8MRh6m+UosIr/REdF/p2hQ8mD7mZwfQjGX2+U+TugcYD+0EabfCVYgJgsh0DF/tPcEtyjApLj7l6OzANYGWGMWwNoAa8wCWBtgjVkAawOs8ReItTjrXj7vnAAAAABJRU5ErkJggg=="
        }
    }

    declare const enum Gesture2 {

        //% block="izquierda"
        //% jres=gestures.uno
        Uno = 1,  // MICROBIT_ACCELEROMETER_EVT_SHAKE

        //% block="adelante"
        //% jres=gestures.iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVR4nO2b4XWbMBSFP3r6P2wQOkGcCUonqDtB0wnqbuBO0GSCJhvYG5AJiiconaD2BK8
        Dos = 2,  // MICROBIT_ACCELEROMETER_EVT_TILT_UP
   
        //% block="derecha"
        //% jres=gestures.tres
        Tres = 3,  // MICROBIT_ACCELEROMETER_EVT_TILT_DOWN
    }

    // Motor Directions
    export enum EnumDir {
        //% block="forward"
        //% block.loc.es-ES="adelante"
        Forward = 1,
        //% block="backward"
        //% block.loc.es-ES="atrás"
        Backward = 2,
        //% block="left"
        //% block.loc.es-ES="izquierda"
        Left = 3,
        //% block="right"
        //% block.loc.es-ES="derecha"
        Right = 4,
        //% block="stop"
        //% block.loc.es-ES="alto"
        Stop = 0
    }

    // Set speed to both motors
    function setSpeed(speed: number): void {
        let s = speed * (MAX_VEL - MIN_VEL) / 100 + MIN_VEL; // Adjust to the min and max PWM values
        // PWM para izquierdo
        pins.analogWritePin(AnalogPin.P8, s)
        // PWM para derecho
        pins.analogWritePin(AnalogPin.P16, s)
    }

    /**
     * Do something when when a gesture is done (like shaking the micro:bit).
     * @param gesture the type of gesture to track, eg: Gesture.Shake
     * @param body code to run when gesture is raised
     */
    //% blockId=device_gesture_event2 
    //% block="on $gesture"
    //% parts="accelerometer"
    //% gesture.fieldEditor="gestures" gesture.fieldOptions.columns=3 shim=input::onGesture
    //% group="Sensors"
    export function onGesture2(gesture: Gesture2): number {
        return gesture
    };

    /**
     * Detects the tilt of the micro:bit card via the accelerometer
     * @returns 
     */
    //% blockId=senseAcelerometer
    //% block="sense acelerometer"
    //% block.loc.es-ES="detectar acelerómetro"
    //% group="Sensors"
    export function senseAcelerometer(): number {
        return 0
    }

    /**
     * Detects distance through ultrasonic sensor
     * @returns 
     */
    //% blockId=senseDistance
    //% block="sense distance"
    //% block.loc.es-ES="detectar distancia"
    //% group="Sensors"
    export function senseDistance(): number {
        return 0
    }

    /**
     * Detects the line through the five infrared sensors in front of the AutoBot, and returns forward, backward, left, right or stop.
     */
    //% blockId=senseLine
    //% block="sense line"
    //% block.loc.es-ES="detectar línea"
    //% group="Sensors"
    export function senseLine(): EnumDir {
        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
            return EnumDir.Forward
        } else
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                return EnumDir.Left
            } else
                if (pins.digitalReadPin(DigitalPin.P0) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                    return EnumDir.Left
                } else
                    if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 0 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                        return EnumDir.Right
                    } else
                        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 0)))) {
                            return EnumDir.Right
                        } else
                            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                                return EnumDir.Stop
                            }
        return EnumDir.Stop // If no condition then Stop motors
    }

    /**
     * Stop the autobot
     */
    //% blockId=stop
    //% block="stop"
    //% block.loc.es-ES="alto"
    //% group="Movements"
    export function stop(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Turn the autobot right at speed between 0 and 100 km/hr
     * @param speed
     */
    //% blockId=right
    //% block="turn right $speed km/hr"
    //% block.loc.es-ES="derecha $speed km/hr"
    //% group="Movements"
    //% speed.min=0 speed.max=100
    //% speed.defl=50
    export function right(speed: number): void {
        setSpeed(speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }


    /**
     * Turn the autobot left at speed between 0 and 100 km/hr
     * @param speed
     */
    //%blockId=left
    //%block="turn left $speed km/hr"
    //% block.loc.es-ES="izquierda $speed km/hr"
    //% group="Movements"
    //% speed.min=0 speed.max=100
    //% speed.defl=50
    export function left(speed: number): void {
        setSpeed(speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Moves the autobot backward at speed between 0 and 100 km/hr
     * @param speed
     */
    //%blockId=backward
    //%block="go backward $speed km/hr"
    //%block.loc.es-ES="atrás $speed km/hr"
    //% group="Movements"
    //% speed.min=0 speed.max=100
    //% speed.defl=50
    export function backward
        (speed: number): void {
        setSpeed(speed)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }


    /**
     * Moves the autobot forward at speed between 0 and 100 km/hr
     * @param speed
     */
    //%blockId=forward
    //%block="go forward $speed km/hr"
    //%block.loc.es-ES="adelante $speed km/hr"
    //% group="Movements"
    //% speed.min=0 speed.max=100
    //% speed.defl=50
    export function forward(speed: number): void {
        setSpeed(speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Direction constants
     */

    /**
     * Returns the value of stop to compare with the value returned by the line sensor.
     */
    //% blockId=stopDir
    //% block="stop"
    //% block.loc.es-ES="alto"
    //% group="Directions"
    export function stopDir(): number {
        return EnumDir.Stop
    }

    /**
     * Returns the value of right to compare with the value returned by the line sensor.
     */
    //% blockId=rightDir
    //% block="right"
    //% block.loc.es-ES="derecha"
    //% group="Directions"
    export function rightDir(): number {
        return EnumDir.Right
    }


    /**
     * Returns the value of left to compare with the value returned by the line sensor.
     */
    //% blockId=leftDir
    //% block="left"
    //% block.loc.es-ES="izquierda"
    //% group="Directions"
    export function leftDir(): number {
        return EnumDir.Left
    }

    /**
     * Returns the value of backward to compare with the value returned by the line sensor.
     */
    //% blockId=backwardDir
    //% block="backforward"
    //% block.loc.es-ES="atrás"
    //% group="Directions"
    export function backwardDir(): number {
        return EnumDir.Backward
    }

    /**
     * Returns the value of forward to compare with the value returned by the line sensor.
     */
    //% blockId=forwardDir
    //% block="forward"
    //% block.loc.es-ES="adelante"
    //% group="Directions"
    export function forwardDir(): number {
        return EnumDir.Forward
    }

    /**
     * Compares two values and returns true if equal or false if not equal
     */
    //% blockId=compareDir
    //% block="$directionA equal to $directionB"
    //% block.loc.es-ES="$directionA igual a $directionB"
    //% group="Logic"
    export function equal(directionA: number, directionB: number): boolean {
        return directionA == directionB
    }
}