/*
 * Auto Bot Test
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

basic.forever(function () {
    if (autoBot.equal(autoBot.senseLine(), autoBot.EnumDir.Stop)) {
        autoBot.stop()
    } else {
        if (autoBot.equal(autoBot.senseLine(), autoBot.EnumDir.Right)) {
            autoBot.setSpeed3(autoBot.EnumSpeed.Second)
            autoBot.turnDirection(autoBot.EnumSteeringwheel.Front)
        } else {
            if (autoBot.equal(autoBot.senseLine(), autoBot.EnumDir.Left)) {
                autoBot.turnDirection(autoBot.EnumSteeringwheel.Left)
            } else {
                if (autoBot.equal(autoBot.senseLine(), autoBot.EnumDir.Forward)) {
                    autoBot.turnDirection(autoBot.EnumSteeringwheel.Front)
                }
            }
        }
    }
})
