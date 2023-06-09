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
        .displayName('§cCopper Popcoin')
        .tooltip("")
        .tooltip("§cNot so valuable popcoin.")
        .group('misc')


    event.create('silver_popcoin')
        .displayName('§7Silver Popcoin')
        .tooltip("")
        .tooltip("§7Your average valuabe popcoin.")
        .group('misc')
//test

    event.create('golden_popcoin')
        .maxStackSize(32)
        .displayName('§6Golden Popcoin')
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


    event.create('manyullyn_popcoin')
         .maxStackSize(16)
        .displayName('§5Manyullyn Popcoin')
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
                .effect('slowness', 2400, 3, 1)
                .effect('alexsmobs:lava_vision', 1500, 1, 1)
                .effect('farmersdelight:nourishment', 2600, 1 ,1)
                .effect('health_boost', 2000 , 3 , 1)   //SHIT FUCK CUNT
                .effect('regeneration', 600, 3, 1)
                .effect('resistance', 2000, 2, 1)
                .effect('strength', 1000, 1, 1)
                .effect('fire_resistance', 2000, 1)
        })
})