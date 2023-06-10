console.info('Loaded the Custom fluid recipes from fluidrecipes.js')

//This is a base function for making custom two material alloying.
onEvent('recipes', event => {
    const reg2Alloy = (input1Tag, amount1Int, input2Tag, amount2Int, outputFluidName, outputAmountInt, temperatureInt) =>
    	{
    		event.custom(
    		{
    			"type": "tconstruct:alloy",
    			"inputs":
    			[
    				{
    					"tag": input1Tag,
    					"amount": amount1Int
    				},
    				{
    					"tag": input2Tag,
    					"amount": amount2Int
    				}
    			],
    			"result":
    			{
    				"fluid": outputFluidName,
    				"amount": outputAmountInt
    			},
    			"temperature": temperatureInt
    		})
    	}

    	const reg3Alloy = (input1Tag, amount1Int, input2Tag, amount2Int, input3Tag, amount3Int, outputFluidName, outputAmountInt, temperatureInt) =>
            	{
            		event.custom(
            		{
            			"type": "tconstruct:alloy",
            			"inputs":
            			[
            				{
            					"tag": input1Tag,
            					"amount": amount1Int
            				},
            				{
            					"tag": input2Tag,
            					"amount": amount2Int
            				},
            				{
            				    "tag": input3Tag,
            				    "amount": amount3Int
            				}
            			],
            			"result":
            			{
            				"fluid": outputFluidName,
            				"amount": outputAmountInt
            			},
            			"temperature": temperatureInt
            		})
            	}

    //A custom function for casting table as well!
    const tableItemCast = (itemTag, consumedBool, fluidTag, amountInt, resultName, coolingTicks) =>
    	{
    		event.custom(
    		{
    			"type": 'tconstruct:casting_table',
    			"cast":
    			{
    				"item": itemTag
    			},
    			"cast_consumed": consumedBool,
    			"fluid":
    			{
    				"tag": fluidTag,
    				"amount": amountInt
    			},
    			"result": resultName,
    			"cooling_time": coolingTicks
    		})
    	}

    const tableCast = (castTag, consumedBool, fluidTag, amountInt, resultName, coolingTicks) =>
    	{
    		event.custom(
    		{
    			"type": 'tconstruct:casting_table',
    			"cast":
    			{
    				"tag": castTag
    			},
    			"cast_consumed": consumedBool,
    			"fluid":
    			{
    				"tag": fluidTag,
    				"amount": amountInt
    			},
    			"result": resultName,
    			"cooling_time": coolingTicks
    		})
    	}


///-----------------------------------------------------------------------------------------




    //And this is how to use the function
    //          Required molten 1 /   amount   /  required motlen 2     / amount / output molten  / output amount / temp
    reg2Alloy('tconstruct:molten_gold', 810, 'tconstruct:molten_zinc', 360, 'kubejs:molten_hardened_gold', 450 , 850)
    //Molten Hard Manyullyn
    reg3Alloy('tconstruct:molten_manyullyn', 180, 'forge:molten_hardened_gold', 450, 'tconstruct:molten_emerald', 200, 'kubejs:molten_hardened_manyullyn', 180, 1150)

    //this is for tablecast function
    tableItemCast("kubejs:brass_popcoin", true, "forge:molten_hardened_gold", 90, "kubejs:golden_popcoin", 600 / 8)
    tableItemCast("kubejs:golden_popcoin", true, "forge:molten_hardened_manyullyn", 90, "kubejs:incomplete_manyullyn_popcoin", 1200 / 8)
})