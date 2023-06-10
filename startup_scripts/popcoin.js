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
        .displayName('§7Forgotten Silver Popcoin')
        .tooltip("")
        .tooltip("§7It was scrapped due to Brass Popcoin added.")
        .tooltip("§7But Silver popcoin is hella rare..")
        .group('misc')

    event.create('brass_popcoin')
        .displayName('§6Brass Popcoin')
        .tooltip("")
        .tooltip("§6An upgraded and valuable popcoin.")
        .tooltip("§7Mighty dwarfs says it taste like red sugar!")
        .group('misc')
        .food(food => {
            food
                .hunger(3)
                .saturation(2)
                .effect('speed', 600, 1, 1)
                .effect('haste', 400, 2, 1)
        })

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
                .effect('alexsmobs:oiled', 7000, 3, 1) // https://www.youtube.com/watch?v=xURlT84IpcY
                .alwaysEdible()
        })

    event.create('incomplete_manyullyn_popcoin')
        .unstackable()
        .displayName('§5Incomplete Manyullyn Popcoin')
        .tooltip("")
        .tooltip("§8You need to complete this popcoin upgrade")
        .tooltip("§8for making Manyullyn Popcoin.")
        .group('misc')

    event.create('unpressed_manyullyn_popcoin')
        .unstackable()
        .displayName('§5Unpressed Manyullyn Popcoin')
        .tooltip("")
        .tooltip("§8Use Mechanical Press to finish your manyullyn popcoin.")
        .group('misc')

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