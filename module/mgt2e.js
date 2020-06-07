/**
 * A Mongoose Traveller 2nd Edition System
 * Author: PhenValentia
 * Software License: GNU GPLv3
 */

// Import Modules
import { MGT2eActor } from "./actor.js";
import { MGT2eItemSheet } from "./item-sheet.js";
import { MGT2eActorSheet } from "./actor-sheet.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function() {
  console.log(`Initializing Mongoose Traveller 2nd Edition System`);

	/**
	 * Set an initiative formula for the system
	 * @type {String}
	 */
	CONFIG.Combat.initiative = {
	  formula: "2d6",
    decimals: 2
  };

	// Define custom Entity classes
  CONFIG.Actor.entityClass = MGT2eActor;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dnd5e", MGT2eActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("dnd5e", MGT2eItemSheet, {makeDefault: true});

  // Register system settings
  game.settings.register("mgt2e", "macroShorthand", {
    name: "Shortened Macro Syntax",
    hint: "Enable a shortened macro syntax which allows referencing attributes directly, for example @str instead of @attributes.str.value. Disable this setting if you need the ability to reference the full attribute model, for example @attributes.str.label.",
    scope: "world",
    type: Boolean,
    default: true,
    config: true
  });
});
