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
// groups=['Directions', 'Movements', 'Sensors', 'Logic']
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
        //% block="fasten"
        //% block.loc.es-ES="abrochado"
        //% jres=icons.seatbelt-fasten
        Fasten = 1,
        //% block="unfasten"
        //% block.loc.es-ES="desabrochado"
        //% jres=icons.seatbelt-unfasten
        Unnfasten = 2
    }

    // Directions
    export enum EnumDir {
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
        Right = 4,
        //% block="stop"
        //% block.loc.es-ES="alto"
        //% jres=icons.stop-sign
        Stop = 0
    }

    // Speeds
    export enum EnumSpeed {
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
    setSpeed(EnumSpeed.First); /// TODO: NEUTRAL

    /**
     * Speed Selector
     * @param speed
     */
    //% blockId=getSpeed
    //% block="$speed"
    //% speed.fieldEditor="imagedropdown"
    //% speed.fieldOptions.columns=3
    //% speed.fieldOptions.width="250"
    //% speed.fieldOptions.maxRows=2
    export function onSpeed(speed: EnumSpeed): number {
        return speed
    }

    /**
     * Seat belt
     * @param status
     */
    export function seatBelt(status: EnumSeatbelt): number {
        return status
    }

    /**
     * Direction Selector v1
     * @param gesture
     */
    //% blockId=getDirection1
    //% block="$direction"
    /* //% direction.fieldEditor="gestures" direction.fieldOptions.columns=5 shim=input::onGesture */
    export function onGesture2(direction: EnumDir): number {
        return direction
    }

    /**
     * Direction Selctor v2
     * @param direction2
     */
    //% blockId=getDirection2 
    //% block="$direction"
    //% direction.fieldEditor="gestures" direction.fieldOptions.columns=3 shim=input::onGesture
    export function onGesture4(direction: EnumDir): number {
        return direction
    }

    /**
     * Direction Selector v3
     * @param gesture
     */
    //% blockId=getDirection3
    //% block="$gesture3"
    //% gesture.fieldEditor="gestures" gesture.fieldOptions.columns=4
    export function onGesture3(gesture3: EnumDir): number {
        return gesture3
    }

    /**
     * Draws the selected icon on the LED screen
     * @param icon the predefined icon id
     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.
     */
    //% weight=90 blockGap=8
    //% blockId=basic_show_icon2
    //% block="show icon %i" icon="\uf00a"
    //% parts="ledmatrix"
    //% help=basic/show-icon
    //% icon.fieldEditor="imagedropdown"
    //% icon.fieldOptions.columns="5"
    //% icon.fieldOptions.width="380"
    //% icon.fieldOptions.maxRows=4
    export function showIcon(icon: IconNames, interval = 600) {
        let res = images.iconImage(icon)
        res.showImage(0, interval)
    }
    
    /**
    * Direction Selector v4
    * @param direction
    */
    //% blockId=getDirection4
    //% block="$direction"
    //% block.
    //% direction.fieldEditor="imagedropdown"
    //% direction.fieldOptions.columns=4
    //% direction.fieldOptions.width="230"
    //% direction.fieldOptions.maxRows=2
    
    export function onGesture5(direction: EnumDir): number {
        return direction
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
    export function onSpeed2(speed: EnumSpeed): number {
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
    export function turnDirection(direction: EnumSteeringwheel): void {
        
    }

    /**
    * Set Speed
    * @param direction
    */
    //% blockId=setSpeed
    //% block="change velocity $speed"
    //% block.loc.es-ES="cambiar velocidad $speed"
    //% speed.defl=EnumSpeed.stop
    //% speed.fieldEditor="imagedropdown" 
    //% speed.fieldOptions.columns=3
    //% speed.fieldOptions.width="230"
    //% speed.fieldOptions.maxRows=2
    export function setSpeed3(speed: EnumSpeed): void {

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
    //export function backwardDir(): number {
    //    return EnumDir.Backward
    //}

    /**
     * Returns the value of forward to compare with the value returned by the line sensor.
     */
    //% blockId=forwardDir
    //% block="forward"
    //% block.loc.es-ES="adelante"
    //% group="Directions"
    //% icon="\uf0a4"
    export function forwardDir(): number {
        return EnumDir.Forward
    }

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
    export function equal(directionA: number, directionB: EnumDir): boolean {
        return directionA == directionB
    }    
}