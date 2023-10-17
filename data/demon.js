var demon =
{

	adjective:
	[
		"Impious",
		"Undead",
		"Behemoth",
		"Ravenous",
		"The",
		"Forked",
		"Eldritch",
		"Vengeful",
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
		"Unknowable",
		"Great",
		"Formless",
		"Beautiful",
		"Radiant",
		"Fallen",
	],

	noun:
	[
		"Monsta",
		"Ix",
		"Loa",
		"Onryo",
		"Tyrant",
		"Vampyre",
		"Eye",
		"Kraken",
		"Gargoyle",
		"Dragon",
		"Lord",
		"Nightmare",
		"Kaos",
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
		"Fomorian",
		"Typhon",
		"Hydra",
		"Draugr",
		"Kappa",
		"Horror",
		"Căpcăun",
		"Adze",
		"Dybbuk",
		"Aswang",
		"Shoggoth",
		"Annis",
		"Wendigo",
		"Nephilim",
		"Rakshasa",
		"Vetala",
		"Hundun",
		"Unseelie",
		"Myrr Um",
		"Angel",
		"Etherspring",
		"Cãoera",
		"Iworo",
		"Juy-Juy",
		"Kawtcho",
		"Aò",
		"Vasitri",
		"Mer'dur",
		"Slayn",
		"Yvel",
		"Entropy",
		"Unknown",
		"Frend",
		"K'lr",
		"Wrath",
		"Pride",
	],

	frequency:
	[
		"Each day,",
		"Each day,",
		"Each night,",
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
				"choose {2;2;2;3;3;4} players:",
				"choose {2;3;3;4} players (all players learn who):",
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
				"choose {1 or 2;1 or 2;2 or 3;1 to 3} players:",
				"choose a character:",
				"choose a player who {voted;did not vote} today:",
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
				"guess up to {2;3;4;4} player's characters. For any that you get correct (up to 3):",
				"you may publically choose a player:",
				"choose a living player:",
				"choose a player:",
				"you may choose a player:",
			],
			[ // choice-effect
				"each silently chooses to live or die, but if all live, all die.",
				"they are poisoned. The previously chosen player(s) die then become healthy.",
				"they die, and one of their living neighbors {might die;dies}.",
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
				"if dead, they become evil and are resurrected (once per game). Swap characters with them.",
				"they die.",
			]
		],
		[ // conditional
			[ // conditional-power
				"a player might die. If {only Evil;all Good players} voted,",
				"if more than 1 good player is executed,",
				"If 5 or more players are alive and {an evil;a good} player is executed,",
				"if {a good;an evil} player died yesterday,",
				"if no-one died by execution today,",
				"if someone makes a nomination,",
				"choose a player: they die. Once per game, at dusk, you may publicly guess the roles of all players. If all guesses are correct,",
				"choose a player: they are poisoned. When the poisoned outnumber the healthy,",
			],
			[ // conditional-effect
				"evil wins.",
				"executions fail.",
				"a living neighbor of a dead Minion becomes this Demon.",
				"an evil player dies. Otherwise, a good player dies.",
				"evil wins.",
				"the most recent nominee dies but can nominate again immediately (on day {2;3;4}, they must).",
				"evil wins.",
				"all but {3;3;4} players die.",
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
		"After day {2;3;3;3;4;4;5;5;5;6}, evil wins.",
		"All players know you are in play.",
		"Each day, if no-one is executed, evil wins.",
		"If you kill yourself, a Minion becomes your Demon.",
		"The {1st;1st;2nd} Outsider this kills becomes your Demon & you die instead.",
		"The 1st time you die, you live but register as dead.",
		"Your 2 Townsfolk neighbors are poisoned",
		"Minions you kill keep their ability & poison 1 Townsfolk neighbor.",
		"Townsfolk abilities yield false info.",
		"[-1 Minion and +1 Outsider]",
		"[-1 Outsider]",
		"[+1 or -1 Outsider]",
		"[+1 Outsider]",
		"A Minion who nominates and executes you becomes your Demon.",
		"All other players who do not wake at night are poisoned.",
		"All players know who you are. You die if (& only if) all your minions die.",
		"Each day, if no-one was executed, a player becomes an Outsider or an evil Minion.",
		"Each night you choose 1 Minion who gets to kill again.",
		"Each night you learn the characters of your {living;good;Townsfolk} neighbors.",
		"Every other night you learn a {living;good;Townsfolk} player and their character.",
		"Minions are good & Townsfolk are evil, but do not know it.",
		"Minions know the demon bluffs.",
		"On your {1st;1st;2nd} night you may look at the Grimoire.",
		"On your 1st night, choose as many players as there should be Minions. They become evil and learn who you are. [No Minions]",
		"Players who nominate you die at night.",
		"The {1st;1st;2nd} time you kill an Outsider, {1;1;2} of their living good neighbors dies too.",
		"You do not receive bluffs.",
		"Your ability malfunctions if another Demon chooses a different player. 1 Minion is also your Demon.",
		"Your power works even if you are dead.",
		"The Storyteller chooses one additional player. You decide whether they live or die. You do not know your Minions."
		"You do not know your Minions."
		"You receive 1 less bluff.",
		"Each day, the 1st {player;Townsfolk;good player} to nominate is poisoned until dawn.",
		"If you are executed while any evil Minions live, you live and the nominator dies instead.",
		"You do not know who your Minions are, and all players know you are in play. You cannot die while any evil Minions live.",
		"You start by choosing a player (not yourself). They are safe from the Demon. When they die, choose a new player.",
	],

};
