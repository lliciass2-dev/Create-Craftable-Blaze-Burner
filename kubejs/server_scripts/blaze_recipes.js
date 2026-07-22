ServerEvents.recipes(event => {

  event.shapeless('kubejs:blaze_core', [
    '8x minecraft:blaze_rod',
    'minecraft:magma_cream'
  ])

  event.recipes.create.mixing('kubejs:blaze_core', [
    '8x minecraft:blaze_rod',
    'minecraft:magma_cream'
  ])

  event.shapeless('create:blaze_burner', [
    'create:empty_blaze_burner',
    '8x kubejs:blaze_core'
  ])

  event.recipes.create.mixing('create:blaze_burner', [
    'create:empty_blaze_burner',
    '8x kubejs:blaze_core'
  ])
})