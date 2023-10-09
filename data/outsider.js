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
		"Paranoid",
		"Sinful",
		"Conspiracy",
		"Nervous",
		"Court",
		"Lost",
		"Earthly",
		"Gentle",
		"Fettered",
		"Homeless",
		"Wandering",
		"Siege",
		"Outlaw",
		"Daft",
		"Forlorn",
		"Gutter",
		"Chicken",
		"Sleepy",
		"Conspiracy",
		"Shifty",
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
		"Jester",
		"Survivor",
		"Theorist",
		"Wreck",
		"Dunce",
		"Soul",
		"Vessel",
		"Squire",
		"Busker",
		"Brewer",
		"Wanderer",
		"Hitchhiker",
		"Scout",
		"Fence",
		"Friar",
		"Pilgrim",
		"Buffoon",
		"Sleepwalker",
		"Theorist",
		"Proteus",
	],

	frequency:
	[
		"At any time,",
		"At the end of the final day,",
		"At the start of the game,",
		"Each day and night,",
		"Each day and night,",
		"Each day and night,",
		"Each day and night,",
		"Each day and night,",
		"Each day and night,",
		"Each day and night,",
		"Each day,",
		"Each night,",
		"Each night,",
		"Each night*,",
		"Once per game, during the day,",
		"On your 1st night,",
		"On your 1st night,",
		"Each day,",
		"Each night,",
		"Each day,",
		"When you die,",
		"Each day and night,",
		"Each day and night,",
		"Each day and night,",
		"On your 1st night,",
		"Each day and night,",
		"Each day,",
		"When you die,",
		"Each day,",
		"Each day,",
		"Each day and night,",
		"On your 1st night,",
		"Each day,",
		"Each day and night,",
		"Each day and night,",
		"Each night*,",
	],

	styles:
	[
		[ // standard
			[ // standard-power
				"you might die.",
				"Minions learn {1;2;2;3;3;3;4} not-in-play characters.",
				"if you die you become evil. If you are resurrected you become good.",
				"the 1st time an evil player is executed, you die instead. 1 or 2 players register as an opposite alignment to you.",
				"you cannot {vote;vote or nominate}, even if dead.",
				"you might die or be resurrected.",
				"you change alignment. You might start as evil.",
			]
		],
		[ // conditional
			[ // conditional-power
				"1 player is drunk, even if you die. If you guess (once) wrong get false info, but guess who it is and",
				"if a Minion publicly guesses you (once),",
				"if either {good;Townsfolk;evil} living neighbor is {drunk;poisoned;drunk or poisoned},",
				"if you are \"mad\" about being an Outsider,",
				"if you are the player most responsible for your team losing,",
				"if you die {by execution;at night;from being killed by the Demon},",
				"if you die,",
				"if you died last night or yesterday,",
				"when you learn that you died, publicly choose 1 alive player: if they are evil,",
				"choose a player (not yourself). Tomorrow, if, and only if, they are voting,",
				"the first player to choose you with their ability is drunk until dusk. If they were a different alignment,",
				"you may nominate (once per game). When you do, if the nominee is not {the Demon;a Minion;evil;good;a Townsfolk},",
				"When you learn that you died,",
				"a living player becomes your character. If {2;3;3;4} of your character are dead,",
				"if a player nominates you,",
				"if no-one was executed,",
				"if only {5;4;4;3;3;3} players live,",
				"if you are \"mad\" about an objectively true statement,",
				"if you are executed,",
				"if you are not \"mad\" that you are having fun,",
				"if you die,",
				"if you died by execution,",
				"if you laugh,",
				"you can't die. If you speak, write, type, or draw using any medium,",
				"you can't die. If you are executed,",
				"you learn {2;3;3;4} players, one of which is the Demon. If you are not mad that a new player is the Demon each day,",
				"if a Townsfolk would wake to receive information,",
				"choose a living player (different from last night) and guess their alignment. If you guess correctly, the Demon attacks that player instead of their target. If the Demon is killed in this way,",
				"you might register as evil and as a Minion. You think you are the Saint, but you are not. If only {3;3;3;4;4;5} players are alive,",
			],
			[ // conditional-effect
				"1 player is drunk from now on.",
				"learn the {Demon player;Minion players}.",
				"the Demon may choose 2 players (not another Demon) to swap characters.",
				"the Storyteller gains a not-in-play Minion ability.",
				"you change alignment & win, even if dead.",
				"you die.",
				"you might be executed.",
				"your team loses.",
				"your team loses.",
				"your team loses.",
				"you may vote on executions. Otherwise, you cannot.",
				"you change alignment.",
				"the most recently nominated player dies.",
				"publicly choose 1 alive player. Tonight, if it was a good player, they die.",
				"a player becomes an evil Demon. A Demon becomes a good Lunatic.",
				"all good players are drunk until {tomorrow day;dusk}.",
				"everyone loses.",
				"good loses.",
				"the player that most recently nominated you dies and you change alignments.",
				"the player that most recently nominated you is drunk until you are nominated again, even if you are dead.",
				"you die.",
				"you lose your ability for the rest of the game.",
				"you might be executed.",
				"you might be executed.",
				"you might be executed.",
				"your team loses.",
				"your team loses.",
				"a waking Townsfolk might learn that your character is in play, then go back to sleep without using their power.",
				"the Demon dies and you become the new Demon.",
				"good loses."
			]
		]
	],

	extraChance: 0.25,

	extraEffects:
	[
		"{All Minions know;The Demon knows;a good player knows} you are in play",
		"The Demon knows who you are & who you choose at night.",
		"You might register as evil & as a Minion or Demon, even if dead.",
		"[+0 or +1 Outsider]",
		"You keep your ability, even if dead.",
	],

};
