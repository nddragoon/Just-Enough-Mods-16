onEvent('tags.fluids', event => {
    event.add('create:no_infinite_draining', /.*/)
    event.remove('create:no_infinite_draining', 'minecraft:water')
    event.remove('create:no_infinite_draining', 'minecraft:lava')
    event.remove('create:no_infinite_draining', 'minecraft:milk')
    event.remove('create:no_infinite_draining', 'create:chocolate')
    event.remove('create:no_infinite_draining', 'create:honey')
    event.remove('create:no_infinite_draining', 'immersivepetroleum:oil')
    event.remove('create:no_infinite_draining', 'pneumaticcraft:oil')
})
