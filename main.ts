namespace SpriteKind {
    export const Title = SpriteKind.create()
    export const Seasaw = SpriteKind.create()
    export const Spring = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spring, function (sprite, otherSprite) {
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . 
        . . . . b b b b . . . . 
        . . . b 4 4 4 4 b . . . 
        . . . b 4 4 4 4 b . . . 
        . . b 4 4 4 4 4 4 b . . 
        . b 4 4 4 4 4 4 4 4 b . 
        . b 4 4 b b b b 4 4 b . 
        b 4 4 b 2 2 2 2 b 4 4 b 
        b b b 2 2 2 2 2 2 b b b 
        . . . d d d d d d . . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        . . d d d d d d d d . . 
        . . . d d d d d d . . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        `,img`
        . . . . b b b b . . . . 
        . . . b 4 4 4 4 b . . . 
        . . . b 4 4 4 4 b . . . 
        . . b 4 4 4 4 4 4 b . . 
        . b 4 4 4 4 4 4 4 4 b . 
        . b 4 4 b b b b 4 4 b . 
        b 4 4 b 2 2 2 2 b 4 4 b 
        b b b 2 2 2 2 2 2 b b b 
        . . . . . . . . . . . . 
        . . . d d d d d d . . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        . . d d d d d d d d . . 
        . . . d d d d d d . . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . b b b b . . . . 
        . . . b 4 4 4 4 b . . . 
        . . . b 4 4 4 4 b . . . 
        . . b 4 4 4 4 4 4 b . . 
        . b 4 4 4 4 4 4 4 4 b . 
        . b 4 4 b b b b 4 4 b . 
        b 4 4 b 2 2 2 2 b 4 4 b 
        b b b 2 2 2 2 2 2 b b b 
        . . . d d d d d d . . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        . . d d d d d d d d . . 
        . . . d d d d d d . . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . b b b b . . . . 
        . . . b 4 4 4 4 b . . . 
        . . . b 4 4 4 4 b . . . 
        . . b 4 4 4 4 4 4 b . . 
        . b 4 4 4 4 4 4 4 4 b . 
        . b 4 4 b b b b 4 4 b . 
        b 4 4 b 2 2 2 2 b 4 4 b 
        b b b 2 2 2 2 2 2 b b b 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        `],
    100,
    false
    )
    if (Curdis.vy == 0) {
        Curdis.vy = -175
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (TitleScreen == 1) {
        TitleScreen = 0
        LeapOfFaith = 0
        music.stopAllSounds()
        sprites.destroy(CurdisTitle, effects.none, 0)
        FrenchFry = sprites.create(img`
            ................
            ................
            ................
            ..eeeeeeeeeeee..
            ..444444444444..
            ..444444444444..
            ..1eeff1eeeeee..
            ..1ee1f1eeeeee..
            ..1eeff1eeeeee..
            ..444444444444..
            ..444444444444..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..e4444444444e..
            ...4444444444...
            ...eeeeeeeeee...
            ...eeeeeeeeee...
            ...eeeeeeeeee...
            ...4444444444...
            ..e4444444444e..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..444444444444..
            ..444444444444..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..444444444444..
            ..444444444444..
            `, SpriteKind.Enemy)
        scene.cameraFollowSprite(Curdis)
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            dddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd
            ddddbdddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd
            dddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd
            ddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdd
            ddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdd
            dbdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddd
            ddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddd
            ddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddd
            dddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddd
            dddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddd
            ddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddd
            ddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddd
            ddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddd
            dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddd
            dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddd
            dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddd
            dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddbd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddbdddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddbddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddbdddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddbddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddbddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddbddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddbddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddbdddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddbddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddbdddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddd
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddd
            `)
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnTile(Curdis, tiles.getTileLocation(0, 18))
        tiles.placeOnTile(SpoonSeasaw, tiles.getTileLocation(3, 6))
        tiles.placeOnTile(FrenchFry, tiles.getTileLocation(25, 16))
        Curdis.ay = 200
        FrenchFry.ay = 200
        animation.runImageAnimation(
        FrenchFry,
        [img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            .eeeeeeeeeeeee..
            .4444444444444..
            .4444444444444..
            .f1ee1f1eeeeee..
            .f1eeff1eeeeee..
            .4444444444444..
            .eeeeeeeeeeeee..
            .eeeeeeeeeeeee..
            .ee4444444444e..
            ...4444444444...
            ...eeeeeeeeee...
            ...eeeeeeeeee...
            ...4444444444...
            .ee4444444444e..
            .eeeeeeeeeeeee..
            .eeeeeeeeeeeee..
            .4444444444444..
            .eeeeeeeeeeeee..
            .eeeeeeeeeeeee..
            .eeeeeeeeeeeee..
            .4444444444444..
            `,img`
            ..eeeeeeeeeeee..
            ..444444444444..
            ..444444444444..
            ..1eeff1eeeeee..
            ..1ee1f1eeeeee..
            ..1eeff1eeeeee..
            ..444444444444..
            ..444444444444..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..e4444444444e..
            ...4444444444...
            ...eeeeeeeeee...
            ...eeeeeeeeee...
            ...eeeeeeeeee...
            ...4444444444...
            ..e4444444444e..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..444444444444..
            ..444444444444..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..eeeeeeeeeeee..
            ..444444444444..
            ..444444444444..
            ................
            ................
            ................
            `],
        300,
        true
        )
        FrenchFry.setVelocity(50, 0)
        controller.moveSprite(Curdis, 100, 0)
        music.play(music.createSong(hex`005a000408050207001c00020a006400f401640000040000000000000000000000000000000003540020002400012024002800012428003000012734003800012938003c0001273c004000012440004800012058005c0001205c00600001246000680001276c007000012970007400012774007800012478008000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800f0000000010001040400050001060800090001040c000d0001061000110001041400150001061800190001041c001d0001062000210001042400250001062800290001042c002d0001063000310001043400350001063800390001043c003d0001064000410001044400450001064800490001044c004d0001065000510001045400550001065800590001045c005d0001066000610001046400650001066800690001046c006d0001067000710001047400750001067800790001047c007d0001068000810001048400850001068800890001048c008d0001069000910001049400950001069800990001049c009d000106`), music.PlaybackMode.LoopingInBackground)
    } else if (TitleScreen == 0) {
        if (Curdis.vy == 0) {
            Curdis.vy = -100
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Curdis,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 1 8 8 8 5 8 8 8 5 5 5 5 5 . . 
        . 5 8 5 5 8 5 5 5 8 5 5 5 5 . . 
        . 5 8 8 8 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 8 8 . . . 8 8 . . . . . 
        5 5 . 8 8 8 . . . 8 8 8 . . . . 
        5 5 5 8 8 . . . . . 8 8 5 . . . 
        . 5 5 5 . . . . . . . 5 5 . . . 
        . . 5 5 . . . . . 5 5 5 5 . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 8 1 8 8 8 5 8 8 8 5 5 5 5 . . 
        . 8 5 8 5 5 8 5 5 5 8 5 5 5 . . 
        . 8 5 8 8 8 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 8 8 . . . 8 8 . . . . . 
        . . . . 8 8 . . . 8 8 . . . . . 
        . . . . 8 8 . . . 8 8 . . . . . 
        . . 5 5 5 5 . 5 5 5 5 . . . . . 
        . . 5 5 5 5 . 5 5 5 5 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 8 8 1 8 8 8 5 8 8 8 5 5 5 . . 
        . 5 8 5 8 5 5 8 5 5 5 8 5 5 . . 
        . 8 8 5 8 8 8 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . . c c 8 8 8 . . . . . . 
        . . . 5 5 . 8 8 8 8 . . . . . . 
        . . . 5 5 5 8 8 8 c 5 . . . . . 
        . . . . 5 5 5 . . 5 5 . . . . . 
        . . . . . 5 5 . 5 5 5 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 8 1 8 8 8 5 8 8 8 5 5 5 5 . . 
        . 8 5 8 5 5 8 5 5 5 8 5 5 5 . . 
        . 8 5 8 8 8 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 8 8 . . . 8 8 . . . . . 
        . . . . 8 8 . . . 8 8 . . . . . 
        . . . . 8 8 . . . 8 8 . . . . . 
        . . 5 5 5 5 . 5 5 5 5 . . . . . 
        . . 5 5 5 5 . 5 5 5 5 . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Curdis,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 8 5 8 8 8 1 8 8 8 5 8 5 . 
        . . 5 5 8 5 5 8 5 8 5 5 8 5 5 . 
        . . 5 5 5 8 8 8 5 8 8 8 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . 5 5 5 8 . . . 8 5 5 5 . . 
        . . . 5 5 5 5 . . . 5 5 5 5 . . 
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Curdis,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 8 5 8 8 8 1 8 8 8 5 8 5 . 
        . . 5 5 8 5 5 8 5 8 5 5 8 5 5 . 
        . . 5 5 5 8 8 8 5 8 8 8 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . 5 5 5 8 . . . 8 5 5 5 . . 
        . . . 5 5 5 5 . . . 5 5 5 5 . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    sprites.destroy(FrenchFry, effects.none, 0)
    game.splash("Under the Counter:", "Completed")
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666688888888888888666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666688888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888866666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666688888888888888888888888888888888888888888888888666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666888888888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666688888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666688888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666688888888888888888888886666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666688888888888888888888888888888888888888888888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc86666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc86666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc86666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc86666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888886666666666666666666666666666666666666666666666666666666
        666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888886666666666666666666666666666666666666666666666666666666
        66666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888886666666666666666666666666666666666666666666666666666666
        6666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888888888888888888888886666666666666666666666bbbbbbbbbbbb666666666666666666666
        bbbbbbbbbbb66cccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888bbbbbbb8bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    game.splash("Cashier Desk:", "Incompleted")
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 18))
    tiles.placeOnTile(SpoonSeasaw, tiles.getTileLocation(22, 18))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Seasaw, function (sprite, otherSprite) {
    animation.runImageAnimation(
    SpoonSeasaw,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..1888.....................1888.
        .881dd8.......6666........88cc88
        .8cddd888888861966688888888cccc8
        .8cddd888888869666688888888cccc8
        .88cc88......666666.......88cc88
        ..8888.......666666........8888.
        ..............6666..............
        `,img`
        ..1dd...........................
        ..ddd...........................
        ..ddd...........................
        .1888...........................
        8cccc8..........................
        8cccc888........................
        8ccc888888......................
        .888.888888.....................
        .......88888....................
        .........8888...................
        ...........8886666..............
        ............8619666888...18888..
        .............6966668888888cccc8.
        .............666666...888ccccc8.
        .............666666.....88cccc8.
        ..............6666.......88888..
        `,img`
        ................................
        ..1dd...........................
        ..ddd...........................
        .1ddd...........................
        8cccc8..........................
        8cccc888........................
        8ccc888888......................
        .888.888888.....................
        .......88888....................
        .........8888...................
        ...........8886666..............
        ............8619666888...18888..
        .............6966668888888cccc8.
        .............666666...888ccccc8.
        .............666666.....88cccc8.
        ..............6666.......88888..
        `,img`
        ................................
        ................................
        ..1dd...........................
        .1ddd...........................
        8cddd8..........................
        8cccc888........................
        8ccc888888......................
        .888.888888.....................
        .......88888....................
        .........8888...................
        ...........8886666..............
        ............8619666888...18888..
        .............6966668888888cccc8.
        .............666666...888ccccc8.
        .............666666.....88cccc8.
        ..............6666.......88888..
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..1888.....................1888.
        .881dd8.......6666........88cc88
        .8cddd888888861966688888888cccc8
        .8cddd888888869666688888888cccc8
        .88cc88......666666.......88cc88
        ..8888.......666666........8888.
        ..............6666..............
        `,img`
        ................................
        ................................
        ................................
        ...........................1888.
        ..........................8cccc8
        ........................888cccc8
        ......................888888ccc8
        .....................888888.888.
        ....................88888.......
        ...................8888.........
        ..............6666888...........
        ..18888...8886196668............
        .8c1dd8888888696666.............
        .8cdddc888...666666.............
        .8cddd88.....666666.............
        ..88888.......6666..............
        `,img`
        ................................
        ................................
        ................................
        ...........................1888.
        ..........................8cccc8
        ........................888cccc8
        ......................888888ccc8
        .....................888888.888.
        ....................88888.......
        ...................8888.........
        ..............6666888...........
        ..18888...8886196668............
        .8c1dd8888888696666.............
        .8cdddc888...666666.............
        .8cddd88.....666666.............
        ..88888.......6666..............
        `],
    100,
    false
    )
    if (Curdis.vy == 0) {
        Curdis.vy = -150
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (HitWall == 0) {
        HitWall = 1
        sprite.setVelocity(0, 0)
        sprite.setVelocity(-50, 0)
    } else if (HitWall == 1) {
        HitWall = 0
        sprite.setVelocity(0, 0)
        sprite.setVelocity(50, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Curdis,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 8 8 8 5 8 8 8 1 . 
        . . 5 5 5 5 8 5 5 5 8 5 5 8 5 . 
        . . 5 5 5 5 5 5 5 5 5 8 8 8 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . 8 8 8 . . . 8 8 8 . 5 5 
        . . . 5 8 8 . . . . . 8 8 5 5 5 
        . . . 5 5 . . . . . . . 5 5 5 . 
        . . . 5 5 5 5 . . . . . 5 5 . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 8 8 8 5 8 8 8 1 8 . 
        . . 5 5 5 8 5 5 5 8 5 5 8 5 8 . 
        . . 5 5 5 5 5 5 5 5 8 8 8 5 8 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 5 5 5 5 . 5 5 5 5 . . 
        . . . . . 5 5 5 5 . 5 5 5 5 . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 8 8 8 5 8 8 8 1 8 8 . 
        . . 5 5 8 5 5 5 8 5 5 8 5 8 5 . 
        . . 5 5 5 5 5 5 5 8 8 8 5 8 8 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . . 8 8 8 c c . . . . . 
        . . . . . . 8 8 8 8 . 5 5 . . . 
        . . . . . 5 c 8 8 8 5 5 5 . . . 
        . . . . . 5 5 . . 5 5 5 . . . . 
        . . . . . 5 5 5 . 5 5 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 8 8 8 5 8 8 8 1 8 . 
        . . 5 5 5 8 5 5 5 8 5 5 8 5 8 . 
        . . 5 5 5 5 5 5 5 5 8 8 8 5 8 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 8 8 . . . 8 8 . . . . 
        . . . . . 5 5 5 5 . 5 5 5 5 . . 
        . . . . . 5 5 5 5 . 5 5 5 5 . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    LeapOfFaith = 1
    game.splash("Food Tray:", "Completed")
    game.splash("Leap of Faith:", "Incompleted")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    game.splash("Cashier Desk:", "Completed")
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666eeeeeeeeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666eeeeeeeeeeeeeee8eeeeee8eeeeeeeeeeeeeeeeccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666eeeeeeeeeeeeee88eeeee88eeeeeeeeeeeeeeecccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666eeeeeeeeeeeeeee88eeeee88eeeeeeeeee8eeeecccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666eeeeeeeeeeeeeee88eeee8ee8eeeeeeee8eeeeccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666eeeeee8eeeee8e8ee88ee8ee8eeeeeee8eeeeeccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666eeeeeee8eeee88e8ee88ee8ee8eeeeee8eeeeeeccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666eeeeeeeee8ee8e8e8ee8888eeee8eee8e8eeeeeeccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666eeeeeeeee8ee8e88eeeee88eeeee8e888eeeeeecccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666eeeeeeeeeee8e8e88eeeeeeeeeeeee88e8eeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666eeeeeeeeeee8e8ee8eeeeeeeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666eeeeeeeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666eeeeeeeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8eeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888eeeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8ee8eeeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeee88eee88ee8eeeeeeeeeee8ee88eeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeee8ee8e8ee888eeeeeee88888eee8eeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeee88eee8eee888eeeeeee8eee8eeeeeeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeee8eeeeeeeeee8e88eeee8eee8eeeeeeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeeeeeeeee8ee8eee8eeeeeeeeeeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeeeeeeeeeeee8eee8eeeeeeeeeeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeeeeeeeeeeeee8ee8eeeeeeeeeeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeeeeeeeeeeeee8ee8eeeeeeeeeeeeecccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeeee8eeeeeeeeeeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeeeee8e8e8888eeeeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeeee88ee88eeee8eee888eeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666eeeeeeeeeee8eeeeeeeeeee888ee8eeeee8eeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeee888eeeeeeeeeeeeeeeeee8eee8eeeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeee888e8eeeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee88eeeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeee888eeeeeeeeeeeeeeeeeeeeeeeeeeccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeee88ee8888eee888e88eeeeeeeeeeeeeeccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeee888eee8ee8eeeeeeeeeeeeeccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc666666666666666666666666666666666666666666666666662226666666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeee8888eeeeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666662222266666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeee88eeee8888eeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666662222226666666666666666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666662222222666666222266666666666666666666666666666666666666666
        6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666662222222266662222222666666666666666666666666666666666666666
        6666eeeeeeeeeeeee8888888888eeeeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666662222222226622222222266666666666666666666666666666666666666
        6666eeeeeeeeeeee88eeeeeeee888eeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666446662222244446222222222226666666666666666666666666666666666666
        6666eeeeeeeeeeee8eeeeeeeeeee88eeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666444442222244444222244442226666446666666666666666666666666666666
        6666eeeeeeeeeeee8eeeeeeeeee8888eeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666444444222244444422244444426644444666666666666666666666666666666
        6666eeeeeeeeeeeee8eeeeeeee8eeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666644444422444444442444444426444444466666666666666777777777666666
        6666eeeeeeeeeeeee8eeeeeee88eeeeeeeeeeeeeeeeeeccccccc666666666666666666666666666666666666666666666644444444444444442444444464444444466666666666677777777777766666
        6666eeeeeeeeeeeee8eeeeeee88eeeeeeeeeeeeeeeeeecccccc6666666666666666666666666666666666666666666666644444444444444444444444444444444466666666667777777777777776666
        6666eeeeeeeeeeee8eeeeeeeee88eeeeeeeeeeeeeeeeecccccc666666666666666666666666666666666666666666666666244444444444444444444444444444446666666667777777777777fff7ff6
        6666eeeeeeeeeeee8eee8eeeeeee88eeeeeeeeeeeeeeccccccc66666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffff7777ffffffffffff6
        6666eeeeeeeeeeee8eee8888e8888e8eeeeeeeeeeeeeccccaac66666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66
        6666eeeeeeeeeeee8eee8e88e8ee8e8eeeeeeeeeeeeecccaaac666666666666666666666662222266666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666
        666888eeeeeeeeee8eeee88ee8888e8eeeeeeeeeeee88aaacaa666666666666666666662222222222226ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666
        666ee8888eeeeeee8eeeeeeeeeeeee8eeeeeeeee8888cccccca6666666666666666bbb2222222222bb2bbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666
        666eeeeee888eeeee8eeeee8eeeeee8eeeeeeee8eeeecccccca6666666666666666bbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666
        666eeeeeeeee88eeee88eee88ee8888eeeee888eeeeecccccca6666666666666666bbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666
        666eeeeeeeeeee88ee88eee8e8888eeeee88eeeeeeeecccccaa6666666666666666bbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666
        6668888eeeeeeeee888eeeee8ee88e8888eeeee88888aaaaaac6666666666666666bbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666
        666eeee8888eeeeeee8eeeee8ee888eeeeee8888eeeeccccccc66666666666666666bbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666
        666eeeeeeee888eeee8eeeee88888eeeee888eeeeeeeccccccc66666666666666666bbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666666666
        866eeeeeeeeeee8888eeeeeeeeee888888eeeeeeeeeeccccccc66666666666666666bbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666668
        886eeeeeeeeeeeeee8eeeeeeeeee88eeeeeeeeeeeeeeccccccc666666666666666666bbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666666666688
        888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbb8888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    game.splash("Food Tray:", "Incompleted")
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 18))
    Spring = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . b b b b . . . . 
        . . . b 4 4 4 4 b . . . 
        . . . b 4 4 4 4 b . . . 
        . . b 4 4 4 4 4 4 b . . 
        . b 4 4 4 4 4 4 4 4 b . 
        . b 4 4 b b b b 4 4 b . 
        b 4 4 b 2 2 2 2 b 4 4 b 
        b b b 2 2 2 2 2 2 b b b 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        `, SpriteKind.Spring)
    Spring2 = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . b b b b . . . . 
        . . . b 4 4 4 4 b . . . 
        . . . b 4 4 4 4 b . . . 
        . . b 4 4 4 4 4 4 b . . 
        . b 4 4 4 4 4 4 4 4 b . 
        . b 4 4 b b b b 4 4 b . 
        b 4 4 b 2 2 2 2 b 4 4 b 
        b b b 2 2 2 2 2 2 b b b 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        . . . d d d d d d . . . 
        . . d d d d d d d d . . 
        `, SpriteKind.Spring)
    tiles.placeOnTile(Spring, tiles.getTileLocation(25, 18))
    tiles.placeOnTile(Spring2, tiles.getTileLocation(8, 10))
    tiles.placeOnTile(SpoonSeasaw, tiles.getTileLocation(8, 16))
})
let Spring2: Sprite = null
let Spring: Sprite = null
let HitWall = 0
let FrenchFry: Sprite = null
let CurdisTitle: Sprite = null
let SpoonSeasaw: Sprite = null
let Curdis: Sprite = null
let LeapOfFaith = 0
let TitleScreen = 0
TitleScreen = 1
LeapOfFaith = 0
Curdis = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 8 5 8 8 8 1 8 8 8 5 8 5 . 
    . . 5 5 8 5 5 8 5 8 5 5 8 5 5 . 
    . . 5 5 5 8 8 8 5 8 8 8 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 8 8 . . . 8 8 . . . . 
    . . . . . 8 8 . . . 8 8 . . . . 
    . . . . . 8 8 . . . 8 8 . . . . 
    . . . 5 5 5 8 . . . 8 5 5 5 . . 
    . . . 5 5 5 5 . . . 5 5 5 5 . . 
    `, SpriteKind.Player)
SpoonSeasaw = sprites.create(img`
    ................................
    ................................
    ................................
    ...........................1888.
    ..........................8cccc8
    ........................888cccc8
    ......................888888ccc8
    .....................888888.888.
    ....................88888.......
    ...................8888.........
    ..............6666888...........
    ..18888...8886196668............
    .8c1dd8888888696666.............
    .8cdddc888...666666.............
    .8cddd88.....666666.............
    ..88888.......6666..............
    `, SpriteKind.Seasaw)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555555555888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555555558888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555555888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555555555555588888888888888888888888
    8888888888888811111111888888888888888888888888888888888111118888888888888888888888888888888888888888888888888888888555555555554445555555558888888888888888888888
    8888888888888111111111181111118888888888888888888888881111111188888888888888888888888888888888888888888888888881118555555554444444455555555888888888888888888888
    8888888888888111111111111111111888888888888888888888111111111188888888888888888888888888888888888888888888888111111115555544444444445555555588888888888888888888
    8888888888811111111111111111111188888888888888888881111111111118888888811188888888888888888888888888888888888111111111555444444444445555555588888888888888888888
    8888888888811111111111111111111188888888888888888811111111111111888811111111888888888888888888888888888881111111111111554444444444445555555588888888888888888888
    8888888888811111111111111111111888888888888881111111111111111111111111111111188888888888888888888888888111111111111111144444444444444555555558888888888888888888
    8888888888811111111111111111111888888888888881111111111111111111111111111111188888888888888888888888811111111111111111114444444444444555555558888888888888888888
    8888888888811111111111111811118888888888888881111111111111111111111111111111118888888888888888888888811111111111111111114444444444444555555558888888888888888888
    8888888888811111111111111888888888888888888881111111111111111111111111111111118888888888888888888888111111111111111111114444444444444555555558888888888888888888
    8888888888811111111118888888888888888888888881111111111111111111111111111111118888888888888888888881111111111111111111111114444444444555555588888888888888888888
    8888888888811111111118888888888888888888888881111111111111111111111111111111111888888888888888888881111111111111111111111114444444444555555588888888888888888888
    8888888888881111111888888888888888888888888881111111111111111111111111111111111888888888888888888881111111111111111111111114444444444555555888888888888888888888
    8888888888888111118888888888888888888888888881111111111111111111111111111111118888888888888888888881111111111111111111111144444444444555555888888888888888888888
    8888888888888811188888888888888888888888888881111111111888111111111111111111188888888888888888888881111111111111111111111144444444444555558888888888888888888888
    8888888888888888888888888888888888888888888888111111118888111111111111111118888888888888888888888888811111111111111111111144444444445555588888888888888888888888
    8888888888888888888888888888888888888888888888888118888888811111111111118888888888888888888888888888881111111111111111111555544444555555888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888881111111111118888888888888888888888888888881111111111181111111555555555555555888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888811111111188888888888888888888888888888881111111111188111115555555555555558888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888111118888888888888888888888888888888881111111111188888855555555555555588888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881111111111888888855555555555558888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888111111111888888888885555558888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888881188888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    6dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    6dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    6dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666999999999999999999999996666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666666666666666666666666666666666666666666666666666666699999999999999999999999966666666666666666666666666666666666999999999999999999999999996666666666666
    6666666666666666666666666666666666666666666666666666666666666699999999999999999999999966666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
music.play(music.createSong(hex`0078000408040205001c000f0a006400f4010a0000040000000000000000000000000000000002660004000800011e08000c00011e10001400011b18001c00011b20002400012024002800011d28002c00011934003800011e38003c00011e40004400011b48004c00011b50005400012054005800011e58005c00011d5c006400011b68007000012474007c00012408001c000e050046006603320000040a002d0000006400140001320002010002480000000c00012210001c00011e20002400012224002800012528002c00012930003c00012240004c00011e50005400012754005800012958005c00012a5c006400012c68007c000119`), music.PlaybackMode.LoopingInBackground)
CurdisTitle = sprites.create(img`
    ................................................
    ........555.....................................
    ......55555.55.55.555555..5555..555555...55.....
    ......55555.55.55.55..55..55555.555555..5555....
    .....555555.55.55.55..55..55.55.5555555.5555....
    .....5555...55.55.55555...55.55...55....555.....
    .....5555...55555.555555..55.55...55.....555....
    ......55555.55555.555555..55555.555555....55....
    .......5555..555..555.55..5555..555555...555....
    .......5555.............................5555....
    ........................................5555....
    ..........5555555555555555555555555555..........
    .........555555555555555555555555555555.........
    ........55555555555555555555555555555555........
    .......5555555555555555555555555555555555.......
    ......555555555555555555555555555555555555......
    ......555555555555555555555555555555555555......
    ......555555555555555555555555555555555555......
    ......555555555555555555555555555555555555......
    ......855555555555555555555555555555555588......
    ......888888888888888111111888888888888888......
    ......88855555555555811111d855555555558885......
    ......5585555555555581111dd855555555558555......
    ......558555555555558551d55855555555558555......
    ......558555555555558555555855555555558555......
    ......558555555555558555555855555555558555......
    ......555855555555585555555585555555585555......
    ......555588888888855555555558888888855555......
    ......555555555555555555555555555555555555......
    ......555555555555555555555555555555555555......
    ......555555555555555555555555555555555555......
    ......555555555555555555555555555555555555......
    .......5555555555555555555555555555555555.......
    ........55555555555555555555555555555555........
    .........555555555555555555555555555555.........
    ..........5555555555555555555555555555..........
    ...........8855588.............8855588..........
    ..........88888888..............888888..........
    .555....888888888...............8888888.........
    .5555..888888888.................8888888........
    .5555558888888....................8888888.......
    5555555588888.....................88888888..555.
    555555558888.......................8888885555555
    .5555555555.........................888885555555
    ..55555555...........................85555555555
    ....55555.............................555555555.
    ......55................................555555..
    .........................................555....
    `, SpriteKind.Title)
forever(function () {
    if (LeapOfFaith == 1) {
    	
    }
})
