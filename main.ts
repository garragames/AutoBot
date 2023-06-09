/*
 * Auto Bot
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

/**
 * Custom graphic block
 */

//% weight=100 color=#fa8f13 icon="\uf1b9" block="AutoBot"
// groups=['Variables', 'Movements', 'Sensors', 'Logic', 'Commands']
namespace autoBot {

    // Example function to create an error block
    function createErrorBlock(): any {
        const block = {
            opcode: "myExtension.errorBlock",
            blockType: "reporter",
            text: "Error!",
            color1: "#FF0000", // Set the background color to red
            tooltip: "This block indicates an error.",
        };

        return block;
    }




    const MIN_VEL = 150;  //   0 km/hr
    const MAX_VEL = 1023; // 100 km/hr

    const FIRST_GEAR = 20;
    const SECOND_GEAR = 40;
    const THIRD_GEAR = 60;
    const FOURTH_GEAR = 80;
    const FIFTH_GEAR = 100;
    const DRIVE_GEAR = 100;
    const NEUTRAL_GEAR = 0;
    const PARKING_GEAR = 0;
    const REVERSE_GEAR = 20;

    /**
     * Setup variables, pins and enumerations
     */

    // Disable LED Matrix
    led.enable(true) // Set true to DEBUG

    // Engine Sates
    export enum Engine {
        //% block="off"
        //% block.loc.es-ES="apagado"
        //% jres=icons.engine-off
        Off = 0,
        //% block="on"
        //% block.loc.es-ES="encendido"
        //% jres=icons.engine-on
        On = 1
    }

    // Directions
    export enum Directions {
        //% block="left"
        //% block.loc.es-ES="izquierda"
        //% jres=icons.direction-left
        Left = 1,
        //% block="front"
        //% block.loc.es-ES="frente"
        //% jres=icons.direction-front
        Front = 2,
        //% block="right"
        //% block.loc.es-ES="derecha"
        //% jres=icons.direction-right
        Right = 3
    }

    // Seat Belt States
    export enum BeltStates {
        //% block="unfasten"
        //% block.loc.es-ES="desabrochado"
        //% jres=icons.belt-unfasten
        Unfasten = 0,
        //% block="fasten"
        //% block.loc.es-ES="abrochado"
        //% jres=icons.belt-fasten
        Fasten = 1
    }

    // Signs
    export enum Signs {
        //% block="stop"
        //% block.loc.es-ES="alto"
        //% jres=icons.stop-sign
        Stop = 0,
        //% block="left"
        //% block.loc.es-ES="izquierda"
        //% jres=icons.left-sign
        Left = 1,
        //% block="straight"
        //% block.loc.es-ES="derecho"
        //% jres=icons.straight-sign
        Straight = 2,
        //% block="backward"
        //% block.loc.es-ES="atrás"
        //% jres=icons.backward-sign
        //Backward = 3,
        //% block="right"
        //% block.loc.es-ES="derecha"
        //% jres=icons.right-sign
        Right = 4
    }

    // Manual Gears
    export enum ManualGears {
        //% block="first gear"
        //% block.loc.es-ES="primera velocidad"
        //% jres=icons.first-gear
        First = FIRST_GEAR,
        //% block="third gear"
        //% block.loc.es-ES="tercera velocidad"
        //% jres=icons.third-gear
        Third = THIRD_GEAR,
        //% block="fifth gear"
        //% block.loc.es-ES="quinta velocidad"
        //% jres=icons.neutral-gear
        Neutral = NEUTRAL_GEAR,
        //% block="second gear"
        //% block.loc.es-ES="segunda velocidad"
        //% jres=icons.second-gear
        Second = SECOND_GEAR,
        //% block="fourth gear"
        //% block.loc.es-ES="cuarta velocidad"
        //% jres=icons.fourth-gear
        Fourth = FOURTH_GEAR,
        //% block="reverse gear"
        //% block.loc.es-ES="reversa"
        //% jres=icons.reverse-gear
        Reverse = REVERSE_GEAR
    }

    // Automatic Gears
    export enum AutomaticGears {
        //% block="first gear"
        //% block.loc.es-ES="primera velocidad"
        //% jres=icons.parking-gear
        Parking = PARKING_GEAR,
        //% block="third gear"
        //% block.loc.es-ES="tercera velocidad"
        //% jres=icons.reverse-gear
        Reverse = REVERSE_GEAR,
        //% block="fifth gear"
        //% block.loc.es-ES="quinta velocidad"
        //% jres=icons.neutral-gear
        Neutral = NEUTRAL_GEAR,
        //% block="second gear"
        //% block.loc.es-ES="segunda velocidad"
        //% jres=icons.drive-gear
        Drive = DRIVE_GEAR,
        //% block="fourth gear"
        //% block.loc.es-ES="cuarta velocidad"
        //% jres=icons.second-gear
        Second = SECOND_GEAR,
        //% block="reverse gear"
        //% block.loc.es-ES="reversa"
        //% jres=icons.first-gear
        First = FIRST_GEAR
    }

    let SIGN           = Signs.Straight
    let BELT           = BeltStates.Unfasten
    let DIRECTION      = Directions.Front
    let ENGINE         = Engine.Off
    let AUTOMATIC_GEAR = AutomaticGears.Parking
    let MANUAL_GEAR    = ManualGears.Neutral
    let SPEED          = 0

    /**
     * Set Speed
     * @param gear
     */
    function _setSpeed(speed: number): void {
        let s = speed * (MAX_VEL - MIN_VEL) / 100 + MIN_VEL; // Adjust to the min and max PWM values
        // PWM para motor izquierdo
        pins.analogWritePin(AnalogPin.P8, s)
        // PWM para motor derecho
        pins.analogWritePin(AnalogPin.P16, s)
    }

    // Stop motors
    _stop()

    // Set initial gear
    // setSpeed(Gears.First); /// TODO: NEUTRAL

    /**
     * Manual Gear Selector
     * @param gear
     */
    //% blockId=getManualGear
    //% block="$gear"
    //% gear.defl=ManualGears.third
    //% gear.fieldEditor="imagedropdown"
    //% gear.fieldOptions.columns=3
    //% gear.fieldOptions.width="225"
    //% gear.fieldOptions.maxRows=2
    //% group="Variables"
    export function getManualGear(gear: ManualGears): number {
        return gear
    }

    /**
     * Automatic Gear Selector
     * @param gear
     */
    //% blockId=getAutomaticGear
    //% block="$gear"
    //% gear.defl=AutomaticGears.third
    //% gear.fieldEditor="imagedropdown"
    //% gear.fieldOptions.columns=3
    //% gear.fieldOptions.width="225"
    //% gear.fieldOptions.maxRows=2
    //% group="Variables"
    export function getAutomaticGear(gear: AutomaticGears): number {
        return gear
    }

    /**
    * Direction Selector
    * @param direction
    */
    //% blockId=getDirection
    //% block="$direction"
    //% direction.defl=Directions.front
    //% direction.fieldEditor="imagedropdown"
    //% direction.fieldOptions.columns=3
    //% direction.fieldOptions.width="225"
    //% direction.fieldOptions.maxRows=2
    //% group="Variables"
    export function getDirection(direction: Directions): number {
        return direction
    }

    /**
     * Set seat belt state
     * @param status
     */
    //% blockId=setSeatbelt
    //% block="seat belt $state"
    //% block.loc.es-ES="cinturón de seguridad $state"
    //% state.defl=BeltStates.unfasten
    //% state.fieldEditor="imagedropdown"
    //% state.fieldOptions.columns=2
    //% state.fieldOptions.width="150"
    //% state.fieldOptions.maxRows=1
    //% group="Commands"
    export function setSeatbelt(state: BeltStates): void {
        if (state == BeltStates.Unfasten) {
            if (ENGINE == Engine.Off) {
                BELT = state
            } else {
                console.warn('Do not unfasten your seat belt while the engine is on')
            }
        } else {
            BELT = state
        }
    }

    /**
    * Sign Selector
    * @param sign
    */
    //% blockId=getSign
    //% block="$sign"
    //% block.
    //% sign.fieldEditor="imagedropdown"
    //% sign.fieldOptions.columns=4
    //% sign.fieldOptions.width="300"
    //% sign.fieldOptions.maxRows=2
    //% group="Variables"    
    export function getSign(sign: Signs): number {
        return sign
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
     * Detects the line through the five infrared sensors in front of the AutoBot, and returns straight, left, right or stop.
     */
    //% blockId=senseLine
    //% block="sense line"
    //% block.loc.es-ES="detectar línea"
    //% group="Sensors"
    export function senseLine(): Signs {
        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
            return Signs.Straight
        } else
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                return Signs.Left
            } else
                if (pins.digitalReadPin(DigitalPin.P0) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                    return Signs.Left
                } else
                    if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 0 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                        return Signs.Right
                    } else
                        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 0)))) {
                            return Signs.Right
                        } else
                            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                                return Signs.Stop
                            }
        return Signs.Stop // If no condition then Stop motors
    }

    /**
     * Stop the autobot
     */
    export function _stop(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Turn the autobot right
     */
    export function _right(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
    * Turn the autobot left
    */
    export function _left(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Moves the autobot backward
     */
    export function _backward(): void {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }

    /**
     * Moves the autobot straight
     */
    export function _forward(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
    * Turn Engine On/Off
    * @param state
    */
    //% blockId=setEngine
    //% block="turn engine $state"
    //% block.loc.es-ES="motor $state"
    //% state.defl=Engine.off
    //% state.fieldEditor="imagedropdown" 
    //% state.fieldOptions.columns=2
    //% state.fieldOptions.width="150"
    //% state.fieldOptions.maxRows=1
    //% group="Commands"
    export function setEngine(state: Engine): void {
        /*
        console.log('Gear: ' + MANUAL_GEAR)
        console.log('Engine: ' + ENGINE)
        console.log('State: ' + state)
        */

        if (BELT == BeltStates.Unfasten && state == Engine.On) {
            console.warn('You cannot start the engine if you have not fastened your seat belt.')
            return;
        }

        if (MANUAL_GEAR != ManualGears.Neutral && state == Engine.On) {
            console.warn('You need to put the AutoBot in neutral or parking to start the engine.')
            return;
        }

        if (MANUAL_GEAR != ManualGears.Neutral && state == Engine.Off) {
            console.warn('You need to put the AutoBot in neutral or parking to be able to turn off the engine.')
            return;
        }

        ENGINE = state;
    }


    /**
    * Set Direction
    * @param direction
    */
    //% blockId=turnDirection
    //% block="turn direction $direction"
    //% block.loc.es-ES="girar volante $direction"
    //% direction.defl=Directions.front
    //% direction.fieldEditor="imagedropdown" 
    //% direction.fieldOptions.columns=3
    //% direction.fieldOptions.width="225"
    //% direction.fieldOptions.maxRows=1
    //% group="Commands"
    export function turnDirection(direction: Directions): void {
        DIRECTION = direction
    }

    /**
    * Set Manual Gear
    * @param gear
    */
    //% blockId=setManualGear
    //% block="set gear $gear"
    //% block.loc.es-ES="cambiar velocidad $gear"
    //% blockImage=icons.first-gear
    //% gear.defl=Gears.Third
    //% gear.fieldEditor="imagedropdown" 
    //% gear.fieldOptions.columns=3
    //% gear.fieldOptions.width="225"
    //% gear.fieldOptions.maxRows=2
    //% group="Commands"
    export function setManualGear(gear: ManualGears): void {
        if (BELT == BeltStates.Fasten) {
            MANUAL_GEAR = gear
            SPEED = gear
        } else {
            console.warn('You cannot shift gears if you do not have your seat belt fastened.')
        }
    }

    /**
        * Set Automatic Gear 
        * @param gear
        */
    //% blockId=setAutomaticGear
    //% block="set gear $gear"
    //% block.loc.es-ES="cambiar velocidad $gear"
    //% gear.defl=Gears.Third
    //% gear.fieldEditor="imagedropdown" 
    //% gear.fieldOptions.columns=1
    //% gear.fieldOptions.width="75"
    //% gear.fieldOptions.maxRows=6
    //% group="Commands"
    export function setAutomaticGear(gear: AutomaticGears): void {
        if (BELT == BeltStates.Fasten) {
            AUTOMATIC_GEAR = gear
            SPEED = gear
        } else {
            console.warn('You cannot shift gears if you do not have your seat belt fastened.')
        }
    }

    /**
     * Move
     */
    //% blockId=move
    //% block="move"
    //% block.loc.es-ES="moverse"
    //% group="Movements"
    export function move(): void {
        _setSpeed(SPEED)
        switch (DIRECTION) {
            case Directions.Front: 
                _forward()
                break
            case Directions.Left:
                _left()
                break
            case Directions.Right:
                _right()
                break
        }
    }

    /**
     * Stop
     */
    //% blockId=brake
    //% block="stop"
    //% block.loc.es-ES="detenerse"
    //% group="Movements"
    export function stop(): void {
        _stop()
    }

    /**
     * Compares two values and returns true if equal or false if not equal
     * @param A
     * @param B
     */
    //% blockId=compare
    //% block="$A equal to $B"
    //% block.loc.es-ES="$A igual a $B"
    //% B.fieldEditor="imagedropdown"
    //% B.fieldOptions.columns=4
    //% B.fieldOptions.width="300"
    //% B.fieldOptions.maxRows=1
    //% group="Logic"
    export function compare(A: number, B: Signs): boolean {
        return A == B
    }
}
