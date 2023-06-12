onEvent('block.loot_tables', event => {
  event.modifyBlock('minecraft:wheat', table => {
    table.addPool(pool => {
      pool.addItem('kubejs:dirt_piece').randomChance(0.05)
    })
  })
})