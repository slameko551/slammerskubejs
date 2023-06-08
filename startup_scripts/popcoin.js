console.info('Loaded the popcoin.js for Popcoins')

//Adding popcoin types
onEvent('item.registry', event => {
    event.create('popcorn')
        .displayName('Popcorn')
        .tooltip("")
        .tooltip("§7Mmm popcorn.")
        .group('misc')
        .food(food => {
            food
                .hunger(1)
                .saturation(2)
                .fastToEat()
        })

    event.create('copper_popcoin')
        .displayName('Copper Popcoin')
        .tooltip("§cNot so valuable popcoin.")
        .group('misc')


    event.create('silver_popcoin')
        .displayName('Silver Popcoin')
        .tooltip("")
        .tooltip("§8Your average valuabe popcoin.")
        .group('misc')
//test

    event.create('golden_popcoin')
        .displayName('Golden Popcoin')
        .tooltip("")
        .tooltip("§6Slightly better than average popcoin.")
        .tooltip("§7§oThat golden butter sure tastes really good..")
        .group('misc')
        .food(food => {
            food
                .hunger(5)
                .saturation(4)
                .effect('farmersdelight:nourishment', 2600, 1 ,1)
                .effect('health_boost', 1200 , 1 ,4)
                .effect('regeneration', 360, 2, 1)
                .alwaysEdible()
        })
        .maxStackSize(32)


    event.create('manyullyn_popcoin')
        .displayName('Manyullyn Popcoin')
        .tooltip("")
        .tooltip("§5Godlike popcoin.")
        .tooltip("§7§oYou wonder what happens if you eat it..")
        .group('misc')
        .food(food => {
            food
                .hunger(7)
                .saturation(5)
                .alwaysEdible()
                //effect times work as ticks, not seconds!
                .effect('alexsmobs:earthquake', 60, 1, 1)
                .effect('slowness', 2400, 0, 2)
                .effect('alexsmobs:lava_vision', 1500, 1, 1)
                .effect('farmersdelight:nourishment', 2600, 1 ,1)
                .effect('health_boost', 2000 , 1 ,7)
                .effect('regeneration' 600, 3, 1)
                .effect('resistance', 2000, 2, 1)
                .effect('strength', 1000, 1, 1)
                .effect('fire_resistance', 2000, 1)
        })
        .maxStackSize(16)
})