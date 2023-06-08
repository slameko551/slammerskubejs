// Server log settings
settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

// Server start message
console.info('Loaded the Items.js for custom recipes etc.')

// Function to create shaped recipes
function addShapedRecipe(event, skinID, dye) {
    event.shaped(Item.of('playingcards:card_deck','{SkinID:' + skinID + 'b}'), [
        'PPP',
        'PBP',
        'PPP'
    ], {
        P: 'minecraft:paper',
        B: dye
    });
}

//Hiding items on JEI
onEvent('jei.hide.items', event => {
    event.hide('create:crafting_blueprint')
    event.hide('create:weighted_ejector')
})


// Handle recipe events
onEvent('recipes', event => {
    const { casting_table, casting_basin } = event.recipes.tconstruct;

    // Remove specific recipes
    event.remove({ output: 'create:crafting_blueprint' });
    event.remove({ output: 'create:weighted_ejector' });

    // Add shaped recipes
    addShapedRecipe(event, 0, 'minecraft:blue_dye');
    addShapedRecipe(event, 1, 'minecraft:red_dye');
    addShapedRecipe(event, 2, 'minecraft:black_dye');
    addShapedRecipe(event, 3, 'tconstruct:pig_iron_ingot');
});

// Handle item tag events
onEvent('item.tags', event => {
    // Code related to item tags
});