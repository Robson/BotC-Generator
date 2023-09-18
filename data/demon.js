﻿var demon =
{

	adjective:
	[
		"Al-",
		"Fang",
		"Impious",
		"We Are",
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
	],

	frequency:
	[
		"Each day...",
		"Each night...",
		"Each night...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
		"Each night*...",
	],

	styles:
	[
		[ // choice
			[ // choice-power
				"choose 2 players...",
				"choose 3 players (all players learn who)...",
				"choose a player...",
				"choose a player...",
				"choose a player...",
				"choose a player...",
				"choose a player...",
				"choose a player...",
				"choose a player...",
				"if no-one died today, choose a player...",
				"if someone makes a nomination, they die but can nominate again immediately (on day 3, they must).",
				"the Storyteller chooses a player...",
				"you may choose a player. If your last choice was no-one, choose 3 players tonight. After choosing...",
			],
			[ // choice-effect
				"each silently chooses to live or die, but if all live, all die.",
				"they are poisoned. The previously chosen player(s) die then become healthy.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die.",
				"they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor.",
				"they die. Townsfolk abilities yield false info.",
			]
		],
		[ // conditional
			[ // conditional-power
				"a player might die. If only Evil voted...",
				"if more than 1 good player is executed...",
				"You start by choosing an alive player: they are poisoned. If (& only if) they die...",
			],
			[ // conditional-effect
				"evil wins.",
				"executions fail.",
				"you die.",
			]
		]
	],

	extraChance: 0.25,

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
	],

};