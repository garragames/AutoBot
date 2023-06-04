/*
 * Auto Bot Test
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

basic.forever(function () {
    if (autoBot.equal(autoBot.senseLine(), autoBot.EnumSigns.Stop)) {
        autoBot.stop()
    } else {
        if (autoBot.equal(autoBot.senseLine(), autoBot.EnumSigns.Right)) {
            autoBot.setSpeed3(autoBot.EnumGears.Second)
            autoBot.turnDirection(autoBot.EnumSteeringwheel.Front)
        } else {
            if (autoBot.equal(autoBot.senseLine(), autoBot.EnumSigns.Left)) {
                autoBot.turnDirection(autoBot.EnumSteeringwheel.Left)
            } else {
                if (autoBot.equal(autoBot.senseLine(), autoBot.EnumSigns.Forward)) {
                    autoBot.turnDirection(autoBot.EnumSteeringwheel.Front)
                }
            }
        }
    }
})
