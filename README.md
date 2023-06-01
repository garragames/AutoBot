
> Open this page at [https://garragames.github.io/autobot/](https://garragames.github.io/pxt-autobot/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/garragames/autobot** and import

## Edit this project ![Build status badge](https://github.com/garragames/autobot/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/garragames/autobot** and click import

## Usage

### Line follower

```blocks
basic.forever(function () {
    if (autoBot.equal(autoBot.senseLine(), autoBot.EnumDir.Stop)) {
        autoBot.stop()
    } else {
        if (autoBot.equal(autoBot.senseLine(), autoBot.EnumDir.Right)) {
            autoBot.setSpeed3(autoBot.EnumSpeed2.First2)
            autoBot.turnDirection(autoBot.EnumSteeringwheel.Right)
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
```

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
