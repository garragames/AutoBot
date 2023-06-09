/*
 * Auto Bot Test
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

input.onButtonPressed(Button.A, function () {
    autoBot.belt(autoBot.BeltStates.Fasten)
    autoBot.setGear(autoBot.ManualGears.Neutral)
    autoBot.turnDirection(autoBot.Directions.Front)
    autoBot.setEngine(autoBot.OnOff.On)
    autoBot.setGear(autoBot.ManualGears.First)
    autoBot.start()
})
input.onButtonPressed(Button.B, function () {
    autoBot.stop()
    autoBot.setGear(autoBot.ManualGears.Neutral)
    autoBot.setEngine(autoBot.OnOff.Off)
    autoBot.belt(autoBot.BeltStates.Unfasten)
})
basic.forever(function () {
    if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Stop)) {
        autoBot.stop()
    } else {
        if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Right)) {
            autoBot.setGear(autoBot.ManualGears.Second)
            autoBot.turnDirection(autoBot.Directions.Front)
        } else {
            if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Left)) {
                autoBot.turnDirection(autoBot.Directions.Left)
            } else {
                if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Forward)) {
                    autoBot.turnDirection(autoBot.Directions.Front)
                }
            }
        }
    }
})