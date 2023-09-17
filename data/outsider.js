var outsider =
{

	adjective:
	[
		"Acrobatic",
		"Pretentious",
		"Hired",
		"Distressed",
		"Drunken",
		"Ancient",
		"Foolish",
		"Apostate",
		"Bumbling",
		"Mad",
		"Moon",
		"Deformed",
		"Plague",
		"Civic",
		"Puzzle",
		"Hermetic",
		"Pious",
		"Verbose",
		"Innocent",
		"Reckless",
	],

	noun:
	[
		"Acrobat",
		"Barber",
		"Butler",
		"Damsel",
		"Drunk",
		"Golem",
		"Goon",
		"Heretic",
		"Klutz",
		"Lunatic",
		"Child",
		"Mutant",
		"Doctor",
		"Politician",
		"Master",
		"Recluse",
		"Saint",
		"Snitch",
		"Sweetheart",
		"Tinker",
	],

	frequency:
	[
		"At any time...",
		"At the end of the final day...",
		"At the start of the game...",
		"Each day and night...",
		"Each day and night...",
		"Each day and night...",
		"Each day and night...",
		"Each day and night...",
		"Each day and night...",
		"Each day and night...",
		"Each day...",
		"Each night...",
		"Each night...",
		"Each night*...",
		"Once per game, during the day...",
		"On your 1st night...",
	],

	styles:
	[
		[ // standard
			[ // standard-power
				"you might die.",
				"Minions learn 3 not-in-play characters.",
			]
		],
		[ // conditional
			[ // conditional-power
				"1 player is drunk, even if you die. If you guess (once) wrong get false info, but guess who it is and...",
				"If a minion publicly guesses you (once)...",
				"if either good living neighbor is drunk or poisoned...",
				"if you are \"mad\" about being an Outsider...",
				"if you are the player most responsible for your team losing...",
				"if you die by execution...",
				"if you die...",
				"if you died...",
				"when you die...",
				"when you learn that you died, publicly choose 1 alive player: if they are evil...",
				"choose a player (not yourself). Tomorrow, if, and only if, they are voting...",
				"the first player to choose you with their ability is drunk until dusk. If they were a different alignment...",
				"you may nominate (once per game). When you do, if the nominee is not the Demon...",
				"When you learn that you died...",
			],
			[ // conditional-effect
				"1 player is drunk from now on.",
				"learn the Demon player.",
				"the Demon may choose 2 players (not another Demon) to swap characters",
				"the Storyteller gains a not-in-play Minion ability",
				"you change alignment & win, even if dead.",
				"you die.",
				"you might be executed.",
				"your team loses.",
				"your team loses.",
				"your team loses.",
				"you may vote on executions.",
				"you change alignment.",
				"the most recently nominated player dies.",
				"publicly choose 1 alive player. Tonight, if it was a good player, they die.",
			]
		]
	],

	extraChance: 0.25,

	extraEffects:
	[
		"All Minions know you are in play",
		"The Demon knows who you are & who you choose at night.",
		"You might register as evil & as a Minion or Demon, even if dead.",
	],

};