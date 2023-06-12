//This is for recipe sequence events.

onEvent('recipes', event => {

    event.remove({id: 'create:splashing/sand'})

    //this whole madness is just for making manyullyn in deployers wow.
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:unpressed_manyullyn_popcoin').withChance(150.0), // this is the item that will appear in JEI as the result
		Item.of('kubejs:silver_popcoin').withChance(2.0), // the rest of these items will part of the scrap
	],'kubejs:incomplete_manyullyn_popcoin',[
		event.recipes.createDeploying('kubejs:incomplete_manyullyn_popcoin',['kubejs:incomplete_manyullyn_popcoin','tconstruct:cobalt_ingot']),
		event.recipes.createDeploying('kubejs:incomplete_manyullyn_popcoin',['kubejs:incomplete_manyullyn_popcoin','minecraft:diamond']),
		event.recipes.createDeploying('kubejs:incomplete_manyullyn_popcoin',['kubejs:incomplete_manyullyn_popcoin','minecraft:slime_ball'])
	]).transitionalItem('kubejs:incomplete_manyullyn_popcoin').loops(2)

        //pressing section
	    event.recipes.create.pressing('kubejs:manyullyn_popcoin', 'kubejs:unpressed_manyullyn_popcoin')


	    //mixing section
	        //copper popcoin
	    event.recipes.create.mixing('kubejs:copper_popcoin', ['4x minecraft:copper_ingot', '3x kubejs:popcorn'])
            //brass popcoin
        event.recipes.create.mixing('kubejs:brass_popcoin', ['8x create:brass_ingot', '2x create:zinc_ingot', '6x kubejs:copper_popcoin'] ).heated()
        // for muddedseeds
        event.recipes.create.splashing([Item.of("kubejs:salt").withChance(0.30), Item.of("minecraft:clay_ball").withChance(0.25)], 'minecraft:sand')
        event.recipes.create.splashing([Item.of("kubejs:popcorn_kernel").withChance(0.6), Item.of('minecraft:wheat_seeds').withChance(0.3)], 'kubejs:dirt_piece')
        event.recipes.create.sandpaperPolishing('kubejs:popcorn_kernel', 'kubejs:dirt_piece')

        event.recipes.create.mixing('kubejs:popcorn', ['kubejs:popcorn_kernel', '2x kubejs:salt'])
	})