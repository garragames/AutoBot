/*
 * Auto Bot
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 * /

/**
 * Custom graphic block
 */

//% weight=100 color=#fa8f13 icon="\uf1b9" block="AutoBot"
// groups=['Constants', 'Movements', 'Sensors', 'Logic', 'Commands']
namespace autoBot {

    const MIN_VEL = 150;  //   0 km/hr
    const MAX_VEL = 1023; // 100 km/hr
    const FIRST   = 25;
    const SECOND  = 50;
    const THIRD   = 75;
    const FOURTH  = 100;
    const ENGINE_ON = false;
    const SEAT_BELT_FASTENED = false;
    const NEUTRAL = 0;

    /**
     * Setup variables, pins and enumerations
     */

    // Disable LED Matrix
    led.enable(true) // Set true to DEBUG

    // Steering wheel
    export enum EnumSteeringwheel {
        //% block="left"
        //% block.loc.es-ES="izquierda"
        //% jres=icons.steeringwheel-left
        Left = 1,
        //% block="front"
        //% block.loc.es-ES="frente"
        //% jres=icons.steeringwheel-front
        Front = 2,
        //% block="right"
        //% block.loc.es-ES="derecha"
        //% jres=icons.steeringwheel-right
        Right = 3
    }

    // Seat Belt 
    export enum EnumSeatbelt {
        //% block="unfasten"
        //% block.loc.es-ES="desabrochado"
        //% jres=icons.seatbelt-unfasten
        Unfasten = 1,
        //% block="fasten"
        //% block.loc.es-ES="abrochado"
        //% jres=icons.seatbelt-fasten
        Fasten = 2

    }

    // Variables
    export enum EnumSigns {
        //% block="stop"
        //% block.loc.es-ES="alto"
        //% jres=icons.stop-sign
        Stop = 0,
        //% block="left"
        //% block.loc.es-ES="izquierda"
        //% jres=icons.left-sign
        Left = 1,
        //% block="forward"
        //% block.loc.es-ES="adelante"
        //% jres=icons.forward-sign
        Forward = 2,
        //% block="backward"
        //% block.loc.es-ES="atrás"
        //% jres=icons.backward-sign
        //Backward = 3,
        //% block="right"
        //% block.loc.es-ES="derecha"
        //% jres=icons.right-sign
        Right = 4
    }

    // Speeds
    export enum EnumSpeeds {
        //% block="first gear"
        //% block.loc.es-ES="primera velocidad"
        //% jres=icons.first-gear
        First = 20,
        //% block="third gear"
        //% block.loc.es-ES="tercera velocidad"
        //% jres=icons.third-gear
        Third = 60,
        //% block="fifth gear"
        //% block.loc.es-ES="quinta velocidad"
        //% jres=icons.fifth-gear
        Fifth = 100,
        //% block="second gear"
        //% block.loc.es-ES="segunda velocidad"
        //% jres=icons.second-gear
        Second = 40,
        //% block="fourth gear"
        //% block.loc.es-ES="cuarta velocidad"
        //% jres=icons.fourth-gear
        Fourth = 80,
        //% block="reverse gear"
        //% block.loc.es-ES="reversa"
        //% jres=icons.reverse-gear
        Reverse = 20
    }

    /**
     * Set Speed
     * @param speed
     */
    function setSpeed(speed: number): void {
        let s = speed * (MAX_VEL - MIN_VEL) / 100 + MIN_VEL; // Adjust to the min and max PWM values
        // PWM para izquierdo
        pins.analogWritePin(AnalogPin.P8, s)
        // PWM para derecho
        pins.analogWritePin(AnalogPin.P16, s)
    }

    // Stop motors
    stop()

    // Set initial speed
    setSpeed(EnumSpeeds.First); /// TODO: NEUTRAL

    /**
     * Speed Selector
     * @param speed
     */
    //% blockId=getSpeed
    //% block="$speed"
    //% speed.defl=EnumSpeeds.first
    //% speed.fieldEditor="imagedropdown"
    //% speed.fieldOptions.columns=3
    //% speed.fieldOptions.width="250"
    //% speed.fieldOptions.maxRows=2
    //% group="Constants"
    export function onSpeed(speed: EnumSpeeds): number {
        return speed
    }

    /**
     * Seat belt
     * @param status
     */
    //% blockId=setSeatbelt
    //% block="seat belt $status"
    //% block.loc.es-ES="cinturón de seguridad $status"
    //% status.defl=EnumSeatbelt.unfasten
    //% status.fieldEditor="imagedropdown"
    //% status.fieldOptions.columns=2
    //% status.fieldOptions.width="166"
    //% status.fieldOptions.maxRows=1
    //% group="Commands"
    export function seatBelt(status: EnumSeatbelt): void {
        
    }
    
    /**
    * Sign Selector
    * @param direction
    */
    //% blockId=getSign
    //% block="$direction"
    //% block.
    //% sign.fieldEditor="imagedropdown"
    //% sign.fieldOptions.columns=4
    //% sign.fieldOptions.width="230"
    //% sign.fieldOptions.maxRows=2
    //% group="Constants"    
    export function getSign(sign: EnumSigns): number {
        return sign
    }

    /**
    * Speed Selector
    * @param speed
    */
    //% blockId=getSpeed2
    //% block="$speed"
    //% speed.fieldEditor="imagedropdown" 
    //% speed.fieldOptions.columns=3
    //% speed.fieldOptions.width="230"
    //% speed.fieldOptions.maxRows=2
    export function onSpeed2(speed: EnumSpeeds): number {
        return speed
    }

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
    export function senseLine(): EnumSigns {
        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
            return EnumSigns.Forward
        } else
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                return EnumSigns.Left
            } else
                if (pins.digitalReadPin(DigitalPin.P0) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                    return EnumSigns.Left
                } else
                    if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 0 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                        return EnumSigns.Right
                    } else
                        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 0)))) {
                            return EnumSigns.Right
                        } else
                            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                                return EnumSigns.Stop
                            }
        return EnumSigns.Stop // If no condition then Stop motors
    }

    /**
     * Stop the autobot
     */
    //% blockId=stop
    //% block="stop"
    //% block.loc.es-ES="alto"
    //% group="Commands"
    export function stop(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
    * Turn steeringwheel
    * @param direction
    */
    //% blockId=turnDirection
    //% block="turn steering wheel $direction"
    //% block.loc.es-ES="girar volante $direction"
    //% direction.defl=EnumSteeringwheel.front
    //% direction.fieldEditor="imagedropdown" 
    //% direction.fieldOptions.columns=3
    //% direction.fieldOptions.width="230"
    //% direction.fieldOptions.maxRows=1
    //% gropu="Commands"
    export function turnDirection(direction: EnumSteeringwheel): void {
        
    }

    /**
    * Set Speed
    * @param direction
    */
    //% blockId=setSpeed
    //% block="change velocity $speed"
    //% block.loc.es-ES="cambiar velocidad $speed"
    //% speed.defl=EnumSpeeds.stop
    //% speed.fieldEditor="imagedropdown" 
    //% speed.fieldOptions.columns=3
    //% speed.fieldOptions.width="230"
    //% speed.fieldOptions.maxRows=2
    //% group="Commands"
    export function setSpeed3(speed: EnumSpeeds): void {

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
    //% parts=""
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
    export function backward(speed: number): void {
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
    //export function stopDir(): number {
    //    return EnumSigns.Stop
    //}

    /**
     * Returns the value of right to compare with the value returned by the line sensor.
     */
    //% blockId=rightDir
    //% block="right"
    //% block.loc.es-ES="derecha"
    //% group="Directions"
    //export function rightDir(): number {
    //    return EnumSigns.Right
    //}


    /**
     * Returns the value of left to compare with the value returned by the line sensor.
     */
    //% blockId=leftDir
    //% block="left"
    //% block.loc.es-ES="izquierda"
    //% group="Directions"
    //export function leftDir(): number {
    //    return EnumSigns.Left
    //}

    /**
     * Returns the value of backward to compare with the value returned by the line sensor.
     */

    //% blockId=backwardDir
    //% block="backforward"
    //% block.loc.es-ES="atrás"
    //% group="Directions"
    //export function backwardDir(): number {
    //    return EnumSigns.Backward
    //}

    /**
     * Returns the value of forward to compare with the value returned by the line sensor.
     */
    //% blockId=forwardDir
    //% block="forward"
    //% block.loc.es-ES="adelante"
    //% group="Directions"
    //% icon="\uf0a4"
    //export function forwardDir(): number {
    //    return EnumSigns.Forward
    //}

    /**
     * Compares two values and returns true if equal or false if not equal
     */
    //% blockId=compareDir
    //% block="$directionA equal to $directionB"
    //% block.loc.es-ES="$directionA igual a $directionB"
    //% directionB.fieldEditor="imagedropdown"
    //% directionB.fieldOptions.columns=4
    //% directionB.fieldOptions.width="326"
    //% directionB.fieldOptions.maxRows=1
    //% group="Logic"
    export function equal(directionA: number, directionB: EnumSigns): boolean {
        return directionA == directionB
    }    
}