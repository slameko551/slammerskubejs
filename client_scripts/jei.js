console.info('Loaded the jei.js file for JEI changes.')

onEvent('jei.hide.items', event => {
    event.hide('kubejs:silver_popcoin')
})