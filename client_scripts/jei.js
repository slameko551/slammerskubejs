console.info('Loaded the jei.js file for JEI changes.')
onEvent('jei.hide.items', event => {
    event.hide('kubejs:silver_popcoin')
})

onEvent('jei.remove.categories', event => {
  console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt

})