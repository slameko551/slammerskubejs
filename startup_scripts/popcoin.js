console.info('Loaded the popcoin.js for Popcoins')

//Adding popcoin types
onEvent('item.registry', event => {
    event.create('popcorn')
        .displayName('Popcorn')
        .tooltip("Mmm popcorn.")
        .useAnimation('eat' (food))
        .group('misc')

    event.create('copper_popcoin')
        .displayName('Copper Popcoin')
        .tooltip("Not so valuable popcoin.")
        .group('misc')


    event.create('silver_popcoin')
        .displayName('Silver Popcoin')
        .tooltip("Your average valuabe popcoin.")
        .group('misc')
//test

    event.create('golden_popcoin')
        .displayName('Golden Popcoin')
        .tooltip("Slightly better than average popcoin.")
        .tooltip("§oThat golden butter sure tastes really good..")
        .useAnimation('eat' (food))
        .group('misc')
        .food(food => {
            food
                .hunger(7)
                .saturation(5)
                .effect('farmersdelight:nourishment', 250, 1 ,1)
                .fastToEat()
                .alwaysEdible()
        })
        .maxStackSize(32)


    event.create('manyullyn_popcoin')
        .displayName('Manyullyn Popcoin')
        .tooltip("Godlike popcoin.")
        .tooltip("§oYou wonder what happens if you eat it..")
        .useAnimation('eat' (food))
        .group('misc')
        .food(food => {
            food
                .effect('alexsmobs:earthquake', 1, 1, 1)
                .effect('slowness', 120, 0, 2)
                .effect('alexsmobs:lava_vision', 75, 1, 1)
                .
        })
        .maxStackSize(16)
})