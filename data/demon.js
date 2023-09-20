﻿var demon =
{

	adjective:
	[
		"Al-",
		"Fang",
		"Impious",
		"Undead",
		"Behemoth",
		"Lil'",
		"Ravenous",
		"No",
		"The",
		"Forked",
		"Eldritch",
		"Vengeful",
		"Vigor",
		"Twisted",
		"Necro",
		"Nightmare",
		"All-Seeing",
		"Unbroken",
		"Grotesque",
		"Horrid",
		"Asylum",
		"Gaping",
		"Chaos",
		"Great",
		"Dark",
		"Grave",
		"Ceaseless",
		"Black",
		"Covetous",
		"Baneful",
		"Rotten",
		"Cursed",
		"Enslaved",
		"Bleeding",
		"Accursed",
		"Brain",
		"Acrid",
		"Infernal",
		"Infested",
		"Malignant",
		"Mutilated",
	],

	noun:
	[
		"Hadikhia",
		"Gu",
		"Imp",
		"Legion",
		"Leviathan",
		"Monsta",
		"Lleech",
		"Dashii",
		"Po",
		"Pukka",
		"Shabaloth",
		"Riot",
		"Mortis",
		"Vortox",
		"Zombuul",
		"Ix",
		"Loa",
		"Onryo",
		"Tyrant",
		"Vampire",
		"Eye",
		"Kraken",
		"Gargoyle",
		"Dragon",
		"Lord",
		"Nightmare",
		"Chaos",
		"Father",
		"Sinner",
		"Queen",
		"Lurker",
		"Basilisk",
		"One",
		"Soul",
		"Beast",
		"Failure",
		"Skinner",
		"Kaiju",
	],

	frequency:
	[
		"Each day,",
		"Each night,",
		"Each night,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
		"Each night*,",
	],

	styles:
	[
		[ // choice
			[ // choice-power
				"choose 2 players:",
				"choose 3 players (all players learn who):",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"if no-one died today, choose a player:",
				"the Storyteller chooses a player:",
				"you may choose a player. If your last choice was no-one, choose 3 players tonight. After choosing,",
				"choose 1 good player & 1 living Minion (if able):",
				"choose 1 or 2 players:",
				"choose a character:",
				"choose a player who voted today:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"choose a player:",
				"guess up to 4 player's characters. For any that you get correct (up to 3):",
				"you may publically choose a player:",
				"choosing a living player:",
			],
			[ // choice-effect
				"each silently chooses to live or die, but if all live, all die.",
				"they are poisoned. The previously chosen player(s) die then become healthy.",
				"they die, and one of their living neighbors might die.",
				"they die, even if for some reason they could not.",
				"they die. If you choose yourself this way, a Minion dies instead.",
				"they die. They might become an evil Minion & learn who you are.",
				"they are poisoned. You die if (& only if) they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
			]
		],
		[ // conditional
			[ // conditional-power
				"a player might die. If only Evil voted,",
				"if more than 1 good player is executed,",
				"If 5 or more players are alive and an evil player is executed,",
				"if a good player died yesterday,",
				"if no-one dies by execution,",
				"if someone makes a nomination,",
			],
			[ // conditional-effect
				"evil wins.",
				"executions fail.",
				"a living neighbor of a dead Minion becomes this Demon.",
				"an evil player dies. Otherwise, a good player dies.",
				"evil wins.",
				"the most recent nominee dies but can nominate again immediately (on day 3, they must).",
			]
		]
	],

	extraChance: 0.75,

	extraEffects:
	[
		"[-1 Outsider]",
		"[+1 Minion]",
		"[+1 Outsider]",
		"[All minions are Demons]",
		"[Most players are Demons]",
		"A dead player you chose last night might be regurgitated.",
		"After day 3, evil wins.",
		"After day 5, evil wins.",
		"All players know you are in play.",
		"Each day, if no-one is executed, evil wins.",
		"If you kill yourself, a Minion becomes your Demon.",
		"The 1st Outsider this kills becomes your Demon & you die instead.",
		"The 1st time you die, you live but register as dead.",
		"Your 2 Townsfolk neighbors are poisoned",
		"Minions you kill keep their ability & poison 1 Townsfolk neighbor.",
		"Townsfolk abilities yield false info."
		"[-1 Minion and +1 Outsider]",
		"[-1 Outsider]",
		"[+1 or -1 Outsider]",
		"[+1 Outsider]",
		"A Minion who nominates and executes you becomes your Demon.",
		"All other players who do not wake at night are poisoned.",
		"All players know who you are. You die if (& only if) all your minions die.",
		"Each day, if no-one was executed, a player becomes an Outsider or an evil Minion.",
		"Each night you choose 1 Minion who gets to kill again.",
		"Each night you learn the characters of your good neighbors.",
		"Every other night you learn a living player and their character.",
		"Minions are good & Townsfolk are evil, but do not know it.",
		"Minions know the demon bluffs.",
		"On your 1st night you may look at the Grimoire.",
		"On your 1st night, choose as many players as there should be Minions. They become evil and learn who you are. [No Minions]",
		"Players who nominate you die at night.",
		"The 1st time you kill an Outsider, 1 of their living good neighbors dies too.",
		"You do not receive bluffs.",
		"Your ability malfunctions if another Demon chooses a different player. 1 Minion is also your Demon.",
		"Your power works even if you are dead.",
	],

};
