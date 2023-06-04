/*
 * Auto Bot Test
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

basic.forever(function () {
    if (autoBot.compare(autoBot.senseLine(), autoBot.EnumSigns.Stop)) {
        autoBot.stop()
    } else {
        if (autoBot.compare(autoBot.senseLine(), autoBot.EnumSigns.Right)) {
            autoBot.setGear(autoBot.EnumGears.Second)
            autoBot.turnDirection(autoBot.Direction.Front)
        } else {
            if (autoBot.compare(autoBot.senseLine(), autoBot.EnumSigns.Left)) {
                autoBot.turnDirection(autoBot.Direction.Left)
            } else {
                if (autoBot.compare(autoBot.senseLine(), autoBot.EnumSigns.Forward)) {
                    autoBot.turnDirection(autoBot.Direction.Front)
                }
            }
        }
    }
})
