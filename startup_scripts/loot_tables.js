onEvent('block.loot_tables', event => {
  event.modifyBlock('minecraft:wheat', table => {
    table.addPool(pool => {
      pool.addItem('kubejs:mudded_seed').randomChance(0.05)
    })
  })
})