//This is for recipe sequence events.

onEvent('recipes', event => {

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
	    event.recipes.create.mixing('kubejs:copper_popcoin', ['12x minecraft:copper_ingot', 'kubejs:popcorn'])
            //brass popcoin
        event.recipes.create.mixing('kubejs:brass_popcoin', ['8x create:brass_ingot', '2x create:zinc_ingot', 'kubejs:copper_popcoin'] ).heated()
	})