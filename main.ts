/*
 * Auto Bot
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 * /

/**
 * Custom graphic block
 */

// import { gestures } from "./enums.d.ts"

let gestures = {
    "*": {
        "namespace": "gestures",
        "dataEncoding": "base64"
    },
    "shake": {
        "icon": "data:image/png;base64,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"
    },
    "freefall": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVR4nO2b4XWbMBSFP3r6P2wQOkGcCUonqDtB0wnqbuBO0GSCJhvYG5AJiiconaD2BK8/JGpZAVtIYJGEew7HRAi9x0W670kiiYjwmvEmtgOxMREQ24HYmAiI7YCJBMoEVme1OaYokIAACCTnsjmqHtCEBIoEloO1P/YeMHSvGH0PGBoTAbEMJyAJlLHs//cjlga4jvdJAwbGREBsB2JjIiC2A7ExERDR9hr441DvDngcyonRzwWGxqsfAm9jO2DhOzA7p8G+hkAO3AOX+u8NUKFy/dI4Hx36ICBDPdwFStQq4H1L3Ud9vQIK4zwa+iBgAfwAHoAbozzTR278XtKMaMT0QcA98Bl4R7PTqa6TsicjQy1+ruhGTAlsQx0+gIiEHqWIVC3Xcn1NRGSpyzLjnhsR2Uo3bEWkEJFbEVloG6mv/6EPn2qnVg3Xbi3Hc88HdkUhHkSEEpBr40ujbCbqDTc5ODSKBh+PHqGJUK5/C/27AH4BVw1168iwQY1tlzS4K9qiTytCE6E6aalQJBxzYI0iqLLKcw4jxgwVUn2w63pDaBQwFfmY02aInKEiAux7jo0URdbiRLs21sC8Q/0gDcgcx2UdIVJp1oFKly9FZC5KQ0w96QJTiwYXwbmjUze6/tJ66GOoRBFs33cK+RF/exfB3LFeZdW/A25P3HNp1Lnv4FPn+UaICPrO2r4eufaA0oWfwEddVjm2u8EjSwzpAa4hpybq1FsHJWB1vTpMZo52vGabvgTYb38NfEO9BRtLlKqvgA+ot9xUD5Ti16pfE5E7+uQ33e4qGvpYGMJTGuVtql0aooZVf66FbiUqGhSyF85UTgtmDTN6OB++GmD2gMI4T2nGFfAb9fbLhqPps5hUt902U7Th1QN8E6GSw3T3C0qAbnF3GFTm1rRqNEclTq5J0CPuQ+UAPgSkwF8fYz1hw9O5xh0qa+wMHxE866KlgR1wre1/sq4Vvo36EJD7GgtEPVTgqWZ4L7g+px4wY58TLI3yHQHrhz5RIPc1FogLVCSxNaAIabRrD8jwn6v3BVsAg/YbfAgYG4qQm1/C3uBZe0BBex4fA14zQBO+YbDes++8BtczgvcbfaLAlsOsK0WFqDpM1efnEMtgAob8QCLjcG8ww2PZ+gSuCSQhxhciGf0Qs6N99umMGB9IVOz3EUxkHBIzo3mDpYbLCtNJjOoboRbY2gJqobSXf615DgQMipeQCAVhIiC2A7ExERDbgdh49QT8A9YP5MUcc2wYAAAAAElFTkSuQmCC"
    },
    "frontsideup": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADSUlEQVR4nO2a63XaQBCFP+Xkv9WB1QG4AquD0EFwBy6BElwC7oBUEFxBoAKLDnAFkx+jjVZCbyQNOeieswehx+7cuzOzDykQEe4Z36wNsMYsgLUB1pgFsDbAGqYCBLAJYGNqg9UwGMAS+JP+fRI4WNhh6QHbiuNJYSJA6vYL79TCKhQmD4EAIuCz4vLkoWDhAduaa29TGeEwqQABvALPNbc8p/dMBrNRACAAARAIrGy4+4nQd8vGLXve4e49wHoqLC4PWOHuPWDOAdYGWGPOAZaN3wLmHGBtgDXmHGDZ+C3g7nPAWAKE6Lp+DTym577Q3R5XEmA/UvutMcZ+wBIl9gC8k5GMgDj9ffTuP5GJkZAJNAmGFsCRByVbR+QV3QjdoaIsUdEcjuQFcV4zKIYUoIl8mJ5fpeUBeCHbI1yhIXNOy5q8IA4fqBAJmdckfY0eSoAq8hFKLAZ+FJ75hfb+qnDtRD5E2sDPL4l3fG56cAgBiuRDMtKL0iemgxNm75UcrhXAT3hHtMfL3LZo1I7MfR2itD5Xmurpg4th9xoBfPJt8IUmvi35EQHyrusQkokRoV7VNTSK7YcXZ0WkT1mKyFna4yAiYVq2Le7dichGRFYiEnntvnZo08dZ1OYLLlOQT0SJIyJ77/y68L8OK6/9Q4e2RWrISw8Bysg3ibHxnm+LveR729URtmivaFsleekoQJH8oVB5Vc/svHtW6f+kheEOiWRh0BQ+xTpqyUsHAcp6PvauN8XmTvJu7EosGgpvor1eJL4R7fVI2oeLSEvyItJqFKjL9h90H7JOXE5vq6bMS3Tk+Nmh/i+ap+H/0CRA16HuGhzJz9z6zAU6kYd6AaYk3xZuZgflr9mf6LiSrNoPCNHZ2i2Rf0cXSA5n8va90GMZXbYlFqI9f82sawy4r0eWXHaOv6rshLIQiIHffSozQm/yUO4BBzS7/w+4ijw0jwIxuhCJ0uOxVml9cDV56LcaLK7Sxly+VmEQ8jDsllhEfpkbUf9FWF8MRh6m+UosIr/REdF/p2hQ8mD7mZwfQjGX2+U+TugcYD+0EabfCVYgJgsh0DF/tPcEtyjApLj7l6OzANYGWGMWwNoAa8wCWBtgjVkAawOs8ReItTjrXj7vnAAAAABJRU5ErkJggg=="
    },
    "backsideup": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACbUlEQVR4nO2a75GbMBDFf2TyPXRwdHCkgqOEdJCkg5TgElyCS0gJTgVxKojdwV0Fmw9CA7H5Zwx6HOjNMCNAg/Y97a6EpMTM2DI+qA1QIwqgNkCNKIDaADWkAiSwS2AntUE1DCaQA7/L288GJ4UdSg84tJSDQiJA6fbPtUfPqlAIHgIJZMDfltfBQ0HhAYeOd/tQRngEFSCBH8BLR5WXsk4wyEYBgAQMwCBR2bD5idBHZePKnvfYvAeop8Lm84AKm/eAmAPUBqgRc4Cy8SUg5gC1AWrEHKBsfAnYfA6YS4AU91//DXgqn73hVnv8dQaOM7U/GHOsB+Q4Yp8G1r9QiXGmEigIphbgXvJd+MP/gvjypJhSgCnJX+MN+MJtyKTldR774alGgbnJFzSTP+JWmA34OerrZvbolZvZq82HfUObqZmdanVeSzua7EvNbGdmRdP7R0Ngzp6v40KVCzJcOPg2vYc05QfvJX4T5nbY7eldZc8PQVfPY2aHq7o3dcbmgFA934c97SPDAfhalr2X3GBMCCyFvEd9gnXGhUhB5fZdIXK3AEsj34dO8nDfMLg68jBcgFWSh2ECrJY89AuwavLQLcDqyUO7ACluHH0v5MGtP9z9t9gkwPX08T3gOyMPWjUJkLMR8tAswAn4NfaDgfEQeeifCRa4qWVWlnOWkxceJg/j/gVSnBA5ThhfDinMJORh2iWxjMpTfLnrRNhYTEYewpwSy6i8xHvN2CQ7KXnQHpOrh1BRlp9a6l5wewzHqY2QnhNsQUEVQuAWO2fbJ1iiAEGx+c3RKIDaADWiAGoD1IgCqA1QIwqgNkCNf+aBYPgHiIEjAAAAAElFTkSuQmCC"
    },
    "impact3g": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVR4nO2a/5XiNhDHP87L/0sqWKeCdQdxB6GDkArCVXCkA0rwdcBWcN4Kju3A2wFUMPljpEMI/5AtEXMc3/f8hKVhNJoZjWYEmYjwM+OXuQWYGw8FzC3A3HgoYG4B5sZDAXMLMDceCphbgGsig0UGVR/Nr/+TLHOhAhZ9BHfrARksgT+H6O5SARnkDLi+xV0qAF38Uwjh3SkggzXwRyj9XSkggwLYjPnOXSmAEa5vcdMKyGCZwSqQdgO8tAzlvV8UkZt9ECnMS41I0UNX9jHqmyO79SuxDFwB/wW2AgdnfAHsgecuHgJZ5wRzWznAC2qvs0GkdMa3Q0z6hm86BhjsTXs07TPwNYOdyfb+8ehfR3Gf28IBHrA0L4Wxft8XGkQWd+kBom0BvHfQHYGlGx9CkEoBOVCjAetgPm/RrKxkoCLrg0CDcX+zuJJ2N1/L5XYJmCCNq+7V06QRkVpEDnKJgxnbishanEAWsA12LX2V07H1xs4CZx/vFPcBBZqAvKJByWJhxuxTmtbP0z9QK9emtZ9dVP6kAqtMaUtRT5uGBNZfGQt3WXRprL8077mIVKJWrVs8xcJ608bMMcZj/KOzL4mKVsDWCLzw+hfOmJiFL8zCxYy1bZUhuIpZGr7+ovzc4IBuu6soYG8et68wglocRC3o9qXEylvUpkPYHZ6hUihARF3avm9aBJxi6TFofLnQ+qBqEfiAs51ia4ES+Ap8AnbmaavIQI+mCj2qcs6D5KgStgOt+X6mMu68OY5o8NzHngKFaXN0YV0LeUXL2q4kxT8xlj282vDhd5giaQ18Nl1HjJFEW6WL9IAdwzev76gVQGt2q7SGy+PPIqffm3x8wbk3MFavHBl3cnm0Ki63yKgnJKjZ468OoLXR3Z4iobHje4RHZG1Ogc6jz31iFr8IFM6nLQMWZpWwHaBzeU5aR0wtUI6gdWuBivb9/YZeeLi8dy10bahHyHKGGAUUwyTf6Rp0gdB9c2ODn4uQIuptmKQbqTzgiFqvrVTdmHaJBquucvaJU9CrTLsKkGM/TNKNmFPgwMmVfzPvBfCthfYsShsUaLS3R5+1dmWeLl4+/ibwZ7A2TFWAK9yRk/B9Qn+ge7pBrVYP8K8JywV+5/wIHYWpiZC7/584ZYGbnu88c3l/55bCNkkqgL8C5TgSsXiY7gFbLhdzbbyhnvbi9ZUxTKcGwahJJ+ALpwsVN+rXsYynKiA0RU0FNx9w64k6lvGUGFDGTjoBG04Xom7tEXUEwjQFhCZAKfGClt0uPhh5Bd6GKVugjJ00EeoUTKYoYPIdf2JEuz9MU0CdYuIESKKAmDxgRZqrrKno/sl7DJOIWgA0l8/RuGA/B/9BKQLRCZBF7J1gQ/svOTnXVUwS94fr/VW2oVsx7uVnzrSkKpkCbuUvMn5pnNOtmHcS5iK3ooAuuIoBTXwqEiRAFreugKvjR/iHyFXxUMDcAsyNhwLmFmBuPBQwtwBz4z9jSdC1TZEC4AAAAABJRU5ErkJggg=="
    },
    "impact6g": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEjElEQVR4nO2a0ZGkNhCGP1x+XxzBkcGNI7AcgdcR3GRgQsAReJwBm8FkYDYDLgKzEdxMBO0HtQotIwZGaI6hvH8VBUhNq/UjtboRmYjwf8YPaxuwNj4IWNuAtfFBwNoGrI3NEZBBmVLf5ggAygx2qZRtigDt+CfApNK5KQKAvZ5NKoXZliLBDE7AE3AWyFPo3MwIyOAZ23mAp1R+YDMEYAnwYVIo3TIBw/sobIKAzDq/p0HxLyl0b4IARt52lmAaPDwBmfX2v41Um6X6VyMggyKbt5Rdm+tmqR1rjoAc+JZBPTGU91fqZvuBDEwwjxCR1Q5EGq+gQ2SPSO7VF4OHuoAiE9BrECkRqRFpvcpDQHZVAkyg4qSG77QTft1e6/2yWssPg86G9OYBG9YjQA3otBPHCeFO5afkxo4qVPwIq0AF5GKd3a/A24hcrecmoo03se1cYu0RoG+18a5zRKqx4YudGrc28nyl7SSdyEWklh6N3ldindTF3BsYUTGQwTpA5yQPg7qhHzjp1Cix/sCva661nSodroEvwBlogQL74cKHq2uBzrs+uXhAbLr7DpoFtmKfcWUH7DON1rVenbPF4We//kJ/IgIEO3d39J3I9d4dLqAZxvSjxNxqRGaJ/9crepHrcUSSKWB02Jcj9TsRaaX3wrleu2kyhpPKHERkL4H1PjCVDiG/MfHMYgJKNThkYOV1yNUf9L4Wu7Tdik6JqZSYndcZP1D6bgS4t+iXFWqkDyN2JNwDpXZmx3sH2UzZn4IA90bc/V7s8B0iVJYS/jLpk3AR/vrHj7c6mgFyrLc/6nXNeOoK8IL13IXeG8IrRgx2QCPQqjNsgM/AH5ldKergU9fYmXEYZb+eeMOt2GkxpasU+8ZiRstwaOf0ucEJz1cM5BYRUM0w7CS9M6rETpdGRI56/yyXxg0Dqym0I53L6XOHjjskQ80M4yqVPUwJSr9cOkPnOs1QmltgI0x/ZTgG5BYRMGeomoHs84yO1dI71DnYex3KsSHxUQnYY9Pu4JK4pPPFTOMcAQ7diFw36PAtbQTn95xjSTpsZsoVen7R85jH/0Qftp71POeboQulo7CEAH9r6gz8DXwNyJXe+U/g9YpO942v1vOczY/ozgOLpoDvAN0wz0eGeC2Xc7DQ5yqxzqmRPsR1uub4GCcfdSzJBv0Hf6LP3sYUnrEBU8t0xleo7OcZdvyuslGIJcAA/3j3r9hhWzLPaIdhKnxS3f5O8BR88m9GLAEl8Fdso5H4iu2ovxfwRu9koxDrBJP9ozMTr9qmoV9NYKkDJJ4As7ThG9F4191IeRRiskGXAX5PlPTfGv3trcUjIMYHGN47wDWRLVUQMwXM0kYTIRR03YxH2BmKRZNCSQwBXYqGE2Dx/Ic4AmpsTH+ekLs3khCwdGPE3/wovOu5UVwsziT6UfJef4o6YgyWmIJEf3UpXknkjJd+FR7DCeukmkF5oYdhGTFDvdF4lH+FC+YTc9b66ATIx6MQMIaCnhiHA4k6D49PwN2x5UAoCT4IWNuAtfFBwNoGrI0PAtY2YG38B6VuuBeejFXUAAAAAElFTkSuQmCC"
    },
    "impact8g": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAFVUlEQVR4nO2a7XHjNhCGH2Tuv5kKzFQgXgXHVHDq4HQVxCUoHSgVRK4gcgWhK4hUwUkVhK5g8wOABYMACRHUUTfxO4ORjY8F8AJY7C6hRIT/CxSUAkc376eZxhKFgkJBcwW5W2Dl598cAUANfFKwnEKYIXQPfAF2fvmtEgCwVVDkCFJQobf8AjiJJuINbpmAO/S2HQWlt/s/Rg7EjpWI3ExCpAgU1CPkbAMFy0jd+SfuDGYZKDgiUiS2LxHZhwpjbW7tCNSBvHtgPdRQ6bZ79Hn38RRtOPeqeysYXD2Tqp52DwPCVz1t55+4s337Ku0DbQrC591P5Y9wBOqB8oVyjoKCEq3Zvwy0O/jWn4sfiQCABwXlwHn30TF+XCiR2/AFlF6l+4Sqp8R6Fh9DBtBrv7dAgNnO37zsF85GzFicRMuO4kNmB70wE+sdgEEVyFsBGy5bbR+92x+uTAB68n+PaHcS2Blf4M+M/pvBGt/heku5pvz04LQ/juy8TRzf1QkoEGlNxhKRNSLNQMPCaV/3TbJH1i5lfFe/BgVazvd3IbAWqAUU8BH4CvwBHEydR9PGtm+A54DoA2HdYTF4/nUHV94BzkruEWkS6pWBvMqruLW7JGUXzXoEAlu5M8HE9laXrBKOR8dsnp0AZxKbkW1LPIcIrU9CDVrTVzAGMCcBxSWrkyBvSJkK+hbZENl5390SNKGqVlKVVL+sSwd/QBtXO6top7oFSrS2FrTgxnT0gHZcXoObkhHnc6H6b4AYFmjD6l8bdZ5qB1jP7IR2aiq6dvyLqbc3dfZMEP83nqFNnxKbPcmEBFTo6OsTb2P5hSmzqTZ5PjGWtMb82r9HwaxsbVLIXT6g7RBta0ygjFaiUUfKl6LNUquRSxHZirbUGonjaMrXpo+Y/JiC3AQK9nj2wRQEbMyAfcOjcMrETLwwExdT1vYQkELMUsKGU8g+aEM3wRQE7KV7tVVmoBat6BV086bEyplQQdeBaokEVacgQERvafv/OjDAMSt9CY5ynlBo60cjyrnxgNr87tFX4S6ieO7Qt8DWqesqydzIjxs0WXllh76QWC4B9i4u0Z3EJvJkBtZGyv0bY9kjK4ST83eJvkXsQiyU9kDXwZaxrZGYrELrw1608rNKsTFpK/q41NJVTqVplwr3CL6a3CnHIJeAFKVmr78moW4jmhREE5aqO14jSBInIfiNMWfyReLg/Lp1wsQsCZuBeq7M4Dh5G5LrRIlyfIH6grruQ4ct4fP9DPzuyU51mJqesh1aAQN8Vp6SzCEg1RmxrzRsWCsW5rbKz0XKC5FOuEzBUukXJi3wF2fCn/0+ptoBL+jVOwTqrc3vEniM1AE9SKu5t+Z3lTCO1ytOQa20F1qZ/CXwq4AyqRaPgBxnqOXM7M/mf+sY+XikO5kKfWXZq8+u9takmCwfX8l5SjOSAHdwL5wH3zfoE/o8Hhl2hStTnmIL/ELP198hjDWE3PN/h57Yjv6XHPfAb16e6wpbI6li+JO3xQsZk4fxO2BDdzLXxjN6py28vDpH6FglmNXpCDyaPiveav0mV/BYAlIeJkwJ1x5w/YkmV/AYHVDndjoCa/TEa+Czkx/18lIxhoAx0dhcLOh+Zj8R9y6TMeYI1LmdToRmCiFjCMh6wDwhsrc/jCOgmaLjCTAJATl2wIr8UFYO1CRCMnwBOD+Cqp2/U7/O5CDbALLIjQkeCX/JKbkuMZNsf7jeK7EjcWLc4GfJOKNqMgJu4qEkXde4JE7M0Nugi3ArBMTgEgPa8NkygQFkcesEXB239Fp8FrwTMPcA5sY7AXMPYG68EzD3AObGf4L8LJx8Ylq2AAAAAElFTkSuQmCC"
    },
    "tiltleft": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAD5ElEQVR4nO1b7XWbMBS99PR/2CBM0HiDsEG9QckG3qDqBu4EpRt4g+AN6AZ4AzLB7Q89HTA1BiEJuYnvORwsIYn3rt6HJJKEJD4yPsUWIDbuBMQWIDbuBIQcPAFUAlQJsJFyKeVtyPdagaS3C2QOsgK5lXIrDwspc1BuQB5AbnzKYXN99sxnCeARQAPgIOVUygDwQ+7GKh7lKgHUCbAhUHuW6To8zPoO5EF+FyBrYwET/VJpb/pu5aFa0wJcOxe9ikmlJ8aqpFCDTP8XAlIRuHIVWsYqIfEAEidukgCQKuRMCREEuQ9NgHUalOD1HcATAOU7Jg2wCTz+YgvYBbaAdC0XSMj5u8EEyAGAQBVoPlaHrQsoAK8JsA8gSxTMJiDRCxrjk1UQaSLAygUA7QbvyQVmL4UToIBe0jaBZIkCmxhQAHiV+5pIoYNvkJQ46gLi84de1bPcT+isYM/zNj6RA9gB+NqrO0JvpVtvb5mx4htrUAfKzTnJiuOo6XH7PKdBPfLQ9x6+INlcUbyPlo6bLxsC8gsPlCelU0vFh3CWY26jfa+igfsSOBXh24WK93GggzxzG6WiOKF9dKniGfUOz4fifSyOCzYNcyzfnmYkywklKjcOlsUFFzOec+XUJjomsKImp9+n4HULqaTf2Li7WyAgZzejQ0EbUfILtVU0Ul/3yNjPVG6MqJIz44Lv7wIF9CJJoVss5XI/AXiBXsjkAP7Ib7OQesL09wIzZgZ9kvww0u4b9H4lm5TYw2ynMjNmJgvqgGRmpxKL6FuFQdvr14oFpFdm1hYtJ4K2q+JKXlKK4qQ235pdULqk+BAVNWmZ9PWNgp4J2LFTPOP5jFN+b9j58phSB3YzZMYMhYsZYqny7Ame8l8FjcmTWqlhIDTEGStqGB6KnghoeW5SQ+XNJqkY1LfUFpHJZdxnLVx0gyXfBh8kAkPuT4Pnbe9ZKlfbKyuJ0mviJzqZz3GJlYmLcldX2B7625bTK0Hf6MeoUX2szwQBEDqf/5poZw5Onifa+cYb9Kn1HjMOTpYScIs4QStdwuLEyPffB8TACTqulEs62xKQXqg7yn1tUz9Cz7jTmaQtAcOT2Rd0zK/lGkfoGa98DObiAr/RKa+cJZn3PgXP3yVcCDDn9QXC5fU3aBNXCPRBxjYL5NAfR0LDKpW54NaywKJU5oJbIcAplbkgNgFeUpkLbAnIPb3XaypzwdoWECSVuWANAoKnMheEJGC1VOaCEASsnspc4JOAaKnMBbYENBfqoqcyF9gSUELvAbbQf9d/wA2kMhcsORF6V7j/01RsAWLjTkBsAWLjTkBsAWLjwxPwF0Pxx3Dj8Xp5AAAAAElFTkSuQmCC"
    },
    "tiltright": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEIElEQVR4nO2a77WbRhDFf+Tk+6MD4wqsDowriFKBeRVE7oB0oFRg3IHSAelAr4KQDpQKbj7M7gHLgFj+CEnRPYejB+wuM5fZubPLiyTxf8ZPaxuwNp4ErG3A2ngSsLYBHhEUEZQRZO58765lSz53NQIiyCOoIti5Swnw0f0CbIDP/twRso/q+/NA0lUPpMT9lu5i6c4zpBwpbZwfkFKkuDFIPrM913Mc6YhUOYdSpAJpM6BvjLRv9PVjXex7SwRsGxeyiWP56DnhIupmCUDaUIf1bqrzbpzUOT/HWIs6H2NhK6TtQs/I3DOSMf2XVoENELu/Tws9Yw+8Aw6jel9hCsRLvf1GBJSMTIiR9DirwQgyQRHS5+eFbLk6IptiLxEQQsLNlMIz4Oh+NyGdHmYK+BJZUIX0e5gIcI4nEWQh64WHIcChAL4C26EdliBgiyUkuaNkwSVtYxldUtccO38tgrx3gJl1OZd00veavJWt+CrNULq21AFpT4OLa4W5DImdk0d1PzBtEJG7PnORsO+4ubtGIbTBytB3wBv9JW+JJagUC9e9OyaVyZGNdXQ2eLxpiCROZD9zIR8CP0USSYU7L3oiZ+xUGFQaT3G+CHS8SUCpesrojIjRmxzYDpII2DUaMwUSLOQ/BPb7F5MpH+4JphgvLW3/wrJ3GfIANxUOsik2DIEsp/ox5DN3L5F06HnrPultZMlp6/pkssTYhlILKMdZ1AxunHcYmZ61a8sJhWqS2u6lztGy4xnVUkQMaRSr+802nch72lUtBOSqc4Cc86lquewaJ9e8EtrbYHNm5BT4KMgutDu6Nht1E3HSTET03cwULnGXcHBGp7qsIpWMhEuEFZogoV030jC/gtB8e4naichlBPia4RIJcuMER0TXjXyUa2E4SdrLSEhUryPOkTubuqZDE0cFEtC1GgzS35F4AX4D/sY0v8Bqg9+Bfxrt/E7PEJs+EFID0L0cLoFXrHi5Bj5jRBTU64XIHX67O2irayguVYIx9vV2R3vFthTeMMdLZ0MG/DKw7yshO8MD50qs/ortluBzxqQccI4T9Rx95fs5etcYsyVWYER8whYtd40pe4IllnE/AX/OYUwAvgC/MsMLmGNTtMSWte+BbzOMNwRHLEmmWMIcjTl3hSssW78H/mBZCT1Q7/3vetpdxBLb4hVmVIIVNUsQ8YLVDSVjP4s7LPlh5IRVeAnLKcdHJtYn1/gydNMSeu1PYwU3JqFrfRssqSX0WsrRirU/jpbUyrEKEWsT4FFREzFVOZKQxrdCgEdFrRxjiUhCGt8aAR5eQmMWVo5bJaCJglpCJ5W9bbgHAjwKbFdoVgm9JwI8SvolNKg0foT/EkswBUmwVeI+pPMjEDAJ9zgFZsWTgLUNWBtPAtY2YG08CVjbgLXxH2loFxEWi9ZNAAAAAElFTkSuQmCC"
    },
    "tiltbackwards": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACyUlEQVR4nO2Z7W3bMBCGXxX9H21gbVBngmgEb1BlgqIb2BtkgzobpBNUmaDyBHE2kCe4/iAJEQo/JRKX2nwAQbJM8o6vT8czVRERbpkv3A5wUwTgdoCbIgC3A9wUAbgd4KYIwO0AN0UAbge4KQJwO8BNEYDbAW6+BrZr5PFZGACMKQYKEaAD8CuFsYRcALQQQqyi8uwINQDe1hrJxDsSRKUvB6w2kJFNikFuPglerQAVQBXg3fG9WgFCCV0G/zsIqELa3XwEXK0AJQcEskSAVwCn1I54OMXaJKAKyQOxAjxClKBbAL8j+y7lWdrbyuukxApw1K5X1+ELbB4tbT4QmgNil8FOOlED2HnanhD2j62Bu6ztAPTadVqIyHW09JGeiM6G+4oXImo845rsDI4xB8v3MTaMh+/fYAvgT4SePwE8yesa4rn10WvtewDfIuwFFTtOFkSAjV7r9xTRbySiTvar5edQrL6rC1cbIkpaB6hffgfgR0S/O4gNlwYiZ7wk9MlLSgHO8txp93zL1qt2rZJqn8KZXHWAi3F2fgewl2cT6vs59RLjFdCopc9xNPN+KQVo5fkozxuI7TTbErfBlGAvmELflziNVSGJCDw4+h1oilKtY54kuI/oNxLRjsKS4CDb9PKzKfkNhokMpraUYRk8YArr1MvgSfozynYPMDzjlbD5d3b7nmyVq00Zio8ARa5CqNbaWyNARsFeu7F32U4dATpLSuELxLI4H6edjdXDEgGKSj7v5NnZzrklFlPRAdPLDj18TZMPpQtp9Fn2BE1vetZMHhRYT3DuCKnlbMnkG3kOSbJOfAIkeQFpQE3wjLjJbyHqhQ2EcNnfDQKisPm+1lAGHhGxQWIjRABAJJQdFpapiTlDTLxPMVioAFdL2RbndoCbIgC3A9wUAbgd4KYIwO0AN0UAbge4KQJwO8BNEYDbAW5uXoB/c4v7pl/dd2gAAAAASUVORK5CYII="
    },
    "tiltforward": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAC2klEQVR4nO2Y3ZHaMBRGjzN5hw5CB0sqiNMBqSCUQDogHZAKQjqgg7AVLFtB2ApiKrh5kDxoja0fY+9liM6MByMk67ufpCuZQkT4n3mnLUCbbIC2AG2yAdoCtMkGaAvQJhugLUCbbIC2AG2yAdoCtMkGaAvQJmTAFNgDckPXEZhfFbVDEfhDZA98svePnnpz4NBRNgcmPfV1cQJmQHX1k0TEd9XMPXWWto5bthWRvfPbGJQB7VFXjAF7z+9ugG7wIiLVsPFeMIgB1yTBJfCzUbYFvtr7oaf9KPQ1YIk/eHUKKAsoQ/Xe93j2ksvg4Rz8I7DjMim2McOIHMO4rdNHN4E1IvI6B/iSWiUii55rcS7pOaMzByCydgrWvr5D26BgRrSke+RrvmBGHlt3gTlH+NhhRqrCbJd74nPHZ1v/FYV5zlOj+KN0zcjIGRDaztxZsg3UbXIQkaltu0lo1zoDEDm0BHJoqyuR22DM1FzZ+gunbB9o4xpVty8j+qq5MKAx9ZtX61KIMSBFzLpRduyofxSRmfN7PYOmPfqsA5lHJJuLA12fXaCNev266+y3p/4H4I/zvW7X+4xv13iR2m6ot8GF/dwBz4ltT8DG3pcD6aEAKUwS99eT8C4QS52Vp8CKuGCOwNp+zjCjeNUuUFMHL6FZEVg2KVTNdZlwzcRk6hT69tU7B5ww+zuYvbs5UhPMuv+FWQqxr6oL+9yukf+GmRkb4CFWbDQBh1zcU95C3oaN02dzh/DOACcAb4wpSbDquB+T0ftMMWCDSXBTzll7bFact8ZtSkOBIpgASXsbfAD+pogYgAmX5/pBudt/hWPPAXdrQCxDHYVvjpj1D3kG3K8BOQdEknPA2EJunZABP95ERTrPeF6FUwgZsAK+Ay9DdDYAL5i3zXKoB4b+ELl7cg7QFqBNNkBbgDbZAG0B2mQDtAVokw3QFqBNNkBbgDbZAG0B2mQDtAVo8w/leGQvtJ6OAwAAAABJRU5ErkJggg=="
    }
}

//% weight=100 color=#fa8f13 icon="\uf1b9" block="AutoBot"
// groups=['Directions', 'Movements', 'Sensors', 'Logic']
namespace autoBot {

    const MIN_VEL = 150;  //   0 km/hr
    const MAX_VEL = 1023;  // 100 km/hr

    /**
     * Setup variables, pins and enumerations
     */

    // Disable LED Matrix
    led.enable(true)

    // Stop motors
    stop()

    // Set initial speed
    setSpeed(50)

    let gestures2 = {
        uno: {
            icon: "data:image/png;base64,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"
        },
        dos: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVR4nO2b4XWbMBSFP3r6P2wQOkGcCUonqDtB0wnqbuBO0GSCJhvYG5AJiiconaD2BK8/JGpZAVtIYJGEew7HRAi9x0W670kiiYjwmvEmtgOxMREQ24HYmAiI7YCJBMoEVme1OaYokIAACCTnsjmqHtCEBIoEloO1P/YeMHSvGH0PGBoTAbEMJyAJlLHs//cjlga4jvdJAwbGREBsB2JjIiC2A7ExERDR9hr441DvDngcyonRzwWGxqsfAm9jO2DhOzA7p8G+hkAO3AOX+u8NUKFy/dI4Hx36ICBDPdwFStQq4H1L3Ud9vQIK4zwa+iBgAfwAHoAbozzTR278XtKMaMT0QcA98Bl4R7PTqa6TsicjQy1+ruhGTAlsQx0+gIiEHqWIVC3Xcn1NRGSpyzLjnhsR2Uo3bEWkEJFbEVloG6mv/6EPn2qnVg3Xbi3Hc88HdkUhHkSEEpBr40ujbCbqDTc5ODSKBh+PHqGJUK5/C/27AH4BVw1168iwQY1tlzS4K9qiTytCE6E6aalQJBxzYI0iqLLKcw4jxgwVUn2w63pDaBQwFfmY02aInKEiAux7jo0URdbiRLs21sC8Q/0gDcgcx2UdIVJp1oFKly9FZC5KQ0w96QJTiwYXwbmjUze6/tJ66GOoRBFs33cK+RF/exfB3LFeZdW/A25P3HNp1Lnv4FPn+UaICPrO2r4eufaA0oWfwEddVjm2u8EjSwzpAa4hpybq1FsHJWB1vTpMZo52vGabvgTYb38NfEO9BRtLlKqvgA+ot9xUD5Ti16pfE5E7+uQ33e4qGvpYGMJTGuVtql0aooZVf66FbiUqGhSyF85UTgtmDTN6OB++GmD2gMI4T2nGFfAb9fbLhqPps5hUt902U7Th1QN8E6GSw3T3C0qAbnF3GFTm1rRqNEclTq5J0CPuQ+UAPgSkwF8fYz1hw9O5xh0qa+wMHxE866KlgR1wre1/sq4Vvo36EJD7GgtEPVTgqWZ4L7g+px4wY58TLI3yHQHrhz5RIPc1FogLVCSxNaAIabRrD8jwn6v3BVsAg/YbfAgYG4qQm1/C3uBZe0BBex4fA14zQBO+YbDes++8BtczgvcbfaLAlsOsK0WFqDpM1efnEMtgAob8QCLjcG8ww2PZ+gSuCSQhxhciGf0Qs6N99umMGB9IVOz3EUxkHBIzo3mDpYbLCtNJjOoboRbY2gJqobSXf615DgQMipeQCAVhIiC2A7ExERDbgdh49QT8A9YP5MUcc2wYAAAAAElFTkSuQmCC"
        },
        tres: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADSUlEQVR4nO2a63XaQBCFP+Xkv9WB1QG4AquD0EFwBy6BElwC7oBUEFxBoAKLDnAFkx+jjVZCbyQNOeieswehx+7cuzOzDykQEe4Z36wNsMYsgLUB1pgFsDbAGqYCBLAJYGNqg9UwGMAS+JP+fRI4WNhh6QHbiuNJYSJA6vYL79TCKhQmD4EAIuCz4vLkoWDhAduaa29TGeEwqQABvALPNbc8p/dMBrNRACAAARAIrGy4+4nQd8vGLXve4e49wHoqLC4PWOHuPWDOAdYGWGPOAZaN3wLmHGBtgDXmHGDZ+C3g7nPAWAKE6Lp+DTym577Q3R5XEmA/UvutMcZ+wBIl9gC8k5GMgDj9ffTuP5GJkZAJNAmGFsCRByVbR+QV3QjdoaIsUdEcjuQFcV4zKIYUoIl8mJ5fpeUBeCHbI1yhIXNOy5q8IA4fqBAJmdckfY0eSoAq8hFKLAZ+FJ75hfb+qnDtRD5E2sDPL4l3fG56cAgBiuRDMtKL0iemgxNm75UcrhXAT3hHtMfL3LZo1I7MfR2itD5Xmurpg4th9xoBfPJt8IUmvi35EQHyrusQkokRoV7VNTSK7YcXZ0WkT1mKyFna4yAiYVq2Le7dichGRFYiEnntvnZo08dZ1OYLLlOQT0SJIyJ77/y68L8OK6/9Q4e2RWrISw8Bysg3ibHxnm+LveR729URtmivaFsleekoQJH8oVB5Vc/svHtW6f+kheEOiWRh0BQ+xTpqyUsHAcp6PvauN8XmTvJu7EosGgpvor1eJL4R7fVI2oeLSEvyItJqFKjL9h90H7JOXE5vq6bMS3Tk+Nmh/i+ap+H/0CRA16HuGhzJz9z6zAU6kYd6AaYk3xZuZgflr9mf6LiSrNoPCNHZ2i2Rf0cXSA5n8va90GMZXbYlFqI9f82sawy4r0eWXHaOv6rshLIQiIHffSozQm/yUO4BBzS7/w+4ijw0jwIxuhCJ0uOxVml9cDV56LcaLK7Sxly+VmEQ8jDsllhEfpkbUf9FWF8MRh6m+UosIr/REdF/p2hQ8mD7mZwfQjGX2+U+TugcYD+0EabfCVYgJgsh0DF/tPcEtyjApLj7l6OzANYGWGMWwNoAa8wCWBtgjVkAawOs8ReItTjrXj7vnAAAAABJRU5ErkJggg=="
        }
    }

    export enum Gesture2 {

        //% block="izquierda"
        //% jres=gestures.uno
        Uno = 1,  

        //% block="adelante"
        //% jres=gestures.dos
        Dos = 2,  
   
        //% block="derecha"
        //% jres=gestures.tres
        Tres = 3,  
    }

    // Motor Directions
    export enum EnumDir {
        //% block="forward"
        //% block.loc.es-ES="adelante"
        Forward = 1,
        //% block="backward"
        //% block.loc.es-ES="atrás"
        Backward = 2,
        //% block="left"
        //% block.loc.es-ES="izquierda"
        Left = 3,
        //% block="right"
        //% block.loc.es-ES="derecha"
        Right = 4,
        //% block="stop"
        //% block.loc.es-ES="alto"
        Stop = 0
    }

    // Set speed to both motors
    function setSpeed(speed: number): void {
        let s = speed * (MAX_VEL - MIN_VEL) / 100 + MIN_VEL; // Adjust to the min and max PWM values
        // PWM para izquierdo
        pins.analogWritePin(AnalogPin.P8, s)
        // PWM para derecho
        pins.analogWritePin(AnalogPin.P16, s)
    }

    /**
     * Do something when when a gesture is done (like shaking the micro:bit).
     * @param gesture the type of gesture to track, eg: Gesture.Shake
     * @param body code to run when gesture is raised
     */
    //% blockId=device_gesture_event2 
    //% block="on $gesture"
    //% gesture.fieldEditor="gestures" gesture.fieldOptions.columns=3 shim=input::onGesture
    //% group="Sensors"
    export function onGesture2(gesture: Gesture2): number {
        return gesture
    };

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
    export function backward
        (speed: number): void {
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
    export function backwardDir(): number {
        return EnumDir.Backward
    }

    /**
     * Returns the value of forward to compare with the value returned by the line sensor.
     */
    //% blockId=forwardDir
    //% block="forward"
    //% block.loc.es-ES="adelante"
    //% group="Directions"
    export function forwardDir(): number {
        return EnumDir.Forward
    }

    /**
     * Compares two values and returns true if equal or false if not equal
     */
    //% blockId=compareDir
    //% block="$directionA equal to $directionB"
    //% block.loc.es-ES="$directionA igual a $directionB"
    //% group="Logic"
    export function equal(directionA: number, directionB: number): boolean {
        return directionA == directionB
    }
}