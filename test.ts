/*
 * Auto Bot Test
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

basic.forever(function () {
    if (autoBot.equal(autoBot.senseLine(), autoBot.forwardDir())) {
        autoBot.forward(80)
    }
    if (autoBot.equal(autoBot.senseLine(), autoBot.leftDir())) {
        autoBot.left(50)
    }
    if (autoBot.equal(autoBot.senseLine(), autoBot.rightDir())) {
        autoBot.right(50)
    }
    if (autoBot.equal(autoBot.senseLine(), autoBot.stopDir())) {
        autoBot.stop()
    }
})