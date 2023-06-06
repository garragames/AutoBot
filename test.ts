/*
 * Auto Bot Test
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

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
