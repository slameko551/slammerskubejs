console.info('Loaded the popcoin.js for Popcoins')

//Helper function for creating items
const createItem = (event, config) => {
    const item = event.create(config.name)
        .displayName(config.displayName)
        .group('misc');

    if (config.maxStackSize) {
        item.maxStackSize(config.maxStackSize);
    }

    if (config.unstackable) {
        item.unstackable();
    }

    if (config.tooltips) {
        config.tooltips.forEach(tooltip => item.tooltip(tooltip));
    }

    if (config.food) {
        item.food(food => {
            food.hunger(config.food.hunger)
                .saturation(config.food.saturation);
            
            if (config.food.fastToEat) food.fastToEat();
            if (config.food.alwaysEdible) food.alwaysEdible();

            if (config.food.effects) {
                config.food.effects.forEach(effect => 
                    food.effect(effect.name, effect.duration * 20, effect.amplifier, effect.probability)
                );
            }
        });
    }
}

//Adding popcoin types
onEvent('item.registry', event => {
    const items = [{
        name: 'popcorn',
        displayName: 'Popcorn',
        tooltips: ["§7Mmm popcorn."],
        food: {
            hunger: 1,
            saturation: 2,
            fastToEat: true
        }
    }, {
        name: 'copper_popcoin',
        displayName: '§cCopper Popcoin',
        tooltips: ["" ,"§cNot so valuable popcoin."]
    }, {
        name: 'silver_popcoin',
        displayName: '§7Forgotten Silver Popcoin',
        tooltips: [
            "",
            "§7It was scrapped due to Brass Popcoin added.", 
            "§7But Silver popcoin is hella rare.."
        ]
    }, {
        name: 'brass_popcoin',
        displayName: '§6Brass Popcoin',
        tooltips: [
            "",
            "§6An upgraded and valuable popcoin.", 
            "§7Mighty dwarfs says it taste like red sugar!"
        ],
        food: {
            hunger: 3,
            saturation: 2,
            effects: [
                {name: 'speed', duration: 600, amplifier: 1, probability: 1},
                {name: 'haste', duration: 400, amplifier: 2, probability: 1}
            ]
        }
    }, {
        name: 'golden_popcoin',
        maxStackSize: 32,
        displayName: '§6Golden Popcoin',
        tooltips: [
            "",
            "§6Slightly better than average popcoin.", 
            "§7§oThat golden butter sure tastes really good.."
        ],
        food: {
            hunger: 5,
            saturation: 4,
            alwaysEdible: true,
            effects: [
                {name: 'farmersdelight:nourishment', duration: 2600, amplifier: 1, probability: 1},
                {name: 'health_boost', duration: 1200, amplifier: 1, probability: 4},
                {name: 'regeneration', duration: 360, amplifier: 2, probability: 1},
                {name: 'alexsmobs:oiled', duration: 7000, amplifier: 3, probability: 1}
            ]
        }
    }, {
        name: 'incomplete_manyullyn_popcoin',
        unstackable: true,
        displayName: '§5Incomplete Manyullyn Popcoin',
        // ...
        tooltips: [
            "",
            "§8You need to complete this popcoin upgrade",
            "§8for making Manyullyn Popcoin."
        ]
    }, {
        name: 'unpressed_manyullyn_popcoin',
        unstackable: true,
        displayName: '§5Unpressed Manyullyn Popcoin',
        tooltips: [
            "",
            "§8Use Mechanical Press to finish your manyullyn popcoin."
        ]
    }, {
        name: 'manyullyn_popcoin',
        maxStackSize: 16,
        displayName: '§5Manyullyn Popcoin',
        tooltips: [
            "",
            "§7Highly valuable §5popcoin.",
            "§7§oYou wonder what happens if you eat it.."
        ],
        food: {
            hunger: 7,
            saturation: 5,
            alwaysEdible: true,
            effects: [
                {name: 'alexsmobs:earthquake', duration: 3, amplifier: 1, probability: 1},
                {name: 'slowness', duration: 120 , amplifier: 3, probability: 1},
                {name: 'alexsmobs:lava_vision', duration: 110, amplifier: 1, probability: 1},
                {name: 'farmersdelight:nourishment', duration: 160, amplifier: 1, probability: 1},
                {name: 'health_boost', duration: 120, amplifier: 3, probability: 1},
                {name: 'regeneration', duration: 75, amplifier: 3, probability: 1},
                {name: 'resistance', duration: 95, amplifier: 2, probability: 1},
                {name: 'strength', duration: 60, amplifier: 1, probability: 1},
                {name: 'fire_resistance', duration: 120, amplifier: 1, probability: 1},
                {name: 'alexsmobs:knockback_resistance', duration: 95, amplifier: 1, probability: 1 }
            ]
        }
    }, {
        name: 'mudded_seed',
        displayName: 'Mudded Seed'
    }, {
        name: 'popcorn_kernel',
        displayName: 'Popcorn Kernel',
        tooltips: [
        "",
        "The main source of popcorns!"
        ]
    }
    ];

    items.forEach(item => createItem(event, item));
});
