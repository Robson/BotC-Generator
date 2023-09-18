﻿var minion =
{

	adjective:
	[
		"Bloodthirsty",
		"Pompous",
		"Boom",
		"Manipulative",
		"Devil's",
		"Evil",
		"Fear",
		"Tricksy",
		"God",
		"Hateful",
		"Stringed",
		"Master",
		"Scholarly",
		"Organ",
		"Pit",
		"Toxic",
		"Furious",
		"Scarlet",
		"Sneaky",
		"Loyal",
		"Black",
		"Wicked",
	],

	noun:
	[
		"Assassin",
		"Baron",
		"Dandy",
		"Cerenovus",
		"Advocate",
		"Twin",
		"Reaper",
		"Goblin",
		"Father",
		"Harpy",
		"Marionette",
		"Mind",
		"Mezepheles",
		"Grinder",
		"Hag",
		"Poisoner",
		"Psychopath",
		"Woman",
		"Spy",
		"Vizier",
		"Widow",
		"Witch",
	],

	frequency:
	[
		"Once per game, at night*...",
		"Each day...",
		"Each night...",
		"Each night...",
		"On your first night...",
		"Each night...",
		"Each day...",
		"On your first night...",
		"Each night...",
		"Each day...",
		"At the start of the game...",
		"Each day...",
		"Each night*...",
		"Each night...",
		"Each day, before nominations...",
		"Each day and night...",
		"Each night...",
		"Each day...",
		"On your 1st night...",
		"Each night...",
	],

	styles:
	[
		[ // standard
			[ // standard-power
				"all players keep their eyes closed when voting & the vote tally is secret.",
				"you see the Grimoire.",
			]
		],
		[ // choice
			[ // choice-power
				"choose a living player (different to last night)...",
				"choose a player...",
				"choose a player...",
				"choose a player...",
				"choose a player...",
				"choose a player...",
				"look at the Grimoire & choose a player...",
				"you learn a secret word. If a good player says this word when no other good player has said it...",
				"you may publicly choose a player...",
			],
			[ // choice-effect
				"if executed tomorrow, they don't die.",
				"if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
				"they are \"mad\" they are a chosen good character tomorrow, or might be executed.",
				"they are poisoned tonight and tomorrow day.",
				"they are poisoned.",
				"they become a chosen character (if not in play). If a Demon is made, deaths tonight are arbitrary.",
				"they become evil that night.",
				"they die, even if for some reason they could not.",
				"they die.",
			]
		],
		[ // conditional
			[ // conditional-power
				"choose a player (all players know if you choose a new player). If you nominate and execute them...",
				"If a good player voted on a nomination...",
				"if the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed...",
				"if there are 5 or more players alive & the Demon dies...",
				"if you are executed...",
				"if you publicly claim to be your role when nominated & are executed that day...",
				"you & an opposing player know each other. Good can't win if you both live. if the good player is executed...",
				"you learn which Outsiders are in-play. If 1 died today...",
			],
			[ // conditional-effect
				"all but 3 players die. 1 minute later, the player with the most players pointing at them dies.",
				"choose a player tonight: they die.",
				"evil wins.",
				"the most recently executed player's team loses.",
				"the most recently executed player's team loses.",
				"you become the Demon.",
				"you may choose to execute the most recently nominated player immediately.",
				"your team wins.",
			]
		]
	],

	extraChance: 0.25,

	extraEffects:
	[
		"[-1 or +1 Outsiders]",
		"[+2 Outsiders]",
		"1 good player knows you are in play.",
		"All players know who you are. You can not die during the day.",
		"If executed, you only die if you lose roshambo.",
		"The Demon knows who you are",
		"Votes for you only count if you vote.",
		"You might register as good & as a Townsfolk or Outsider, even if dead.",
	],

};
