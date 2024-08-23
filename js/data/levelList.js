const levelList = [
    { // Level 01
        name: "A New Beginning",
        playerStart: {x: 50, y: 750},
        backgrounds: [
        
        ],
        floors: {
            static: [
                // Bounding Walls
                {x: 0, y: -100, w: 20, h: HEIGHT + 100},
                {x: WIDTH - 20, y: -100, w: 20, h: HEIGHT + 100},
                {x: -100, y: 0, w: WIDTH + 200, h: 20},
                {x: -100, y: HEIGHT - 20, w: WIDTH + 200, h: 20},
            ],
            moving: [],
        },
        hazards: {
            static: [],
            moving: [],
            guns: []
        },
        targets: [
            {x: 700, y: 720, w: 50, h: 50, c: COLORS.TARGET_COLOR}
        ]
    },
    { // Level 02:
        name: "Getting it Started (in here)",
        playerStart: {x: 50, y: 700},
        backgrounds: [
        
        ],
        floors: {
            static: [
                // Bounding Walls
                {x: 0, y: -100, w: 20, h: HEIGHT + 100},
                {x: WIDTH - 20, y: -100, w: 20, h: HEIGHT + 100},
                {x: -100, y: 0, w: WIDTH + 200, h: 20},
                {x: -100, y: HEIGHT - 20, w: WIDTH + 200, h: 20},
                // Platforms
                {x: 0, y: 750, w: 200, h: 60},
                {x: 500, y: 450, w: 400, h: 60},
                {x: 200, y: 550, w: 400, h: 60},
                {x: 0, y: 150, w: 300, h: 60},
                {x: 280, y: 20, w: 20, h: 80},
                {x: 50, y: 50, w: 50, h: 50}
            ],
            moving: [
                {x: 650, y: 350, w: 100, h: 20, dir: "horizontal", l1: 620, l2: 650, spd: 1}
            ]
        },
        hazards: {
            static: [
                {x: 200, y: 770, w: 580, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 350, y: 250, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 400, y: 275, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 450, y: 300, w: 20, h: 20, c: COLORS.HAZARD_COLOR}
            ],
            moving: [],
            guns: []
        },
        targets: [
            {x: 50, y: 50, w: 50, h: 50, c: COLORS.TARGET_COLOR}, 
        ]
    },

    { // Level 04:
        name: "The Tumultuous Tunnel",
        playerStart: {x: 50, y: 775},
        backgrounds: [
        
        ],
        floors: {
            static: [
                // Bounding Walls
                {x: 0, y: -100, w: 20, h: HEIGHT + 100},
                {x: WIDTH - 20, y: -100, w: 20, h: HEIGHT + 100},
                {x: -100, y: 0, w: WIDTH + 200, h: 20},
                {x: -100, y: HEIGHT - 20, w: WIDTH + 200, h: 20},
                // Platforms
                {x: 0, y: 600, w: 700, h: 50},
                {x: 200, y: 300, w: 700, h: 50},
                {x: 0, y: 100, w: 700, h: 50},

                {x: 50, y: 425, w: 100, h: 20},

                {x: 100, y: 80, w: 30, h: 50},
                {x: 600, y: 80, w: 30, h: 50},
                {x: 325, y: 50, w: 90, h: 25}
            ],
            moving: []
        },
        hazards: {
            static: [
                {x: 250, y: 450, w: 30, h: 150, c: COLORS.HAZARD_COLOR},
                {x: 350, y: 350, w: 30, h: 150, c: COLORS.HAZARD_COLOR},
                {x: 450, y: 450, w: 30, h: 150, c: COLORS.HAZARD_COLOR},
                {x: 550, y: 350, w: 30, h: 150, c: COLORS.HAZARD_COLOR}
            ],
            moving: [
                {x: 130, y: 75, w: 20, h: 25, dir: "horizontal", l1: 130, l2: 580, spd: 10, c: COLORS.HAZARD_COLOR},
          
                {x: 200, y: 650, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 220, y: 660, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 240, y: 670, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 260, y: 680, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 280, y: 690, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 300, y: 700, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 320, y: 710, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 340, y: 720, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 360, y: 730, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 380, y: 740, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 400, y: 750, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 420, y: 740, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 440, y: 730, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 460, y: 720, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 480, y: 710, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 500, y: 700, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 520, y: 690, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 540, y: 680, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 560, y: 670, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 580, y: 660, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR},
                {x: 600, y: 650, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5, c: COLORS.HAZARD_COLOR}
            ],
            guns: []
        },
        targets: [
            {x: 50, y: 50, w: 25, h: 25, c: COLORS.TARGET_COLOR}
        ]
    },
    { // Level 05:
        name: "The Final Frontier",
        playerStart: {x: 60, y: 720},
        backgrounds: [
        
        ],
        floors: {
            static: [
                // Bounding Walls
                {x: 0, y: -100, w: 20, h: HEIGHT + 100},
                {x: WIDTH - 20, y: -100, w: 20, h: HEIGHT + 100},
                {x: -100, y: 0, w: WIDTH + 200, h: 20},
                {x: -100, y: HEIGHT - 20, w: WIDTH + 200, h: 20},
                // Platforms
                {x: 50, y: 750, w: 40, h: 50},
                {x: 190, y: 640, w: 20, h: 50},
                {x: 50, y: 490, w: 40, h: 50},

                {x: 470, y: 490, w: 60, h: 30},
                {x: 450, y: 400, w: 20, h: 120},

                {x: 450, y: 300, w: 20, h: 50},
                {x: 20, y: 300, w: 650, h: 20},

                {x: 720, y: 480, w: 21, h: 20},
                {x: 650, y: 300, w: 21, h: 20},

                {x: 430, y: 20, w: 25, h: 100},
                {x: 100, y: 100, w: 400, h: 20}
            ],
            moving: []
        },
        hazards: {
            static: [
                {x: 20, y: 770, w: 760, h: 20, c: COLORS.HAZARD_COLOR},
          
                {x: 20, y: 100, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 80, y: 100, w: 20, h: 20, c: COLORS.HAZARD_COLOR}
            ],
            moving: [
                {x: 20, y: 120, w: 20, h: 50, dir: "horizontal", l1: 20, l2: 760, spd: 4, c: COLORS.HAZARD_COLOR},
                {x: 20, y: 210, w: 20, h: 240, dir: "horizontal", l1: 20, l2: 760, spd: 4, c: COLORS.HAZARD_COLOR},
                {x: 20, y: 495, w: 20, h: 200, dir: "horizontal", l1: 20, l2: 760, spd: 4, c: COLORS.HAZARD_COLOR}
            ],
            guns: []
        },
        targets: [
            {x: 382, y: 50, w: 25, h: 25, c: COLORS.TARGET_COLOR}
        ]
    },
    { // Level 06:
        name: "The Chambers of Composure",
        playerStart: {x: 30, y: 750},
        backgrounds: [
        
        ],
        floors: {
            static: [
                // Bounding Walls
                {x: 0, y: -100, w: 20, h: HEIGHT + 100},
                {x: WIDTH - 20, y: -100, w: 20, h: HEIGHT + 100},
                {x: -100, y: 0, w: WIDTH + 200, h: 20},
                {x: -100, y: HEIGHT - 20, w: WIDTH + 200, h: 20},
                // Bottom Room
                {x: 20, y: 600, w: 700, h: 20}, // Roof
                {x: 250, y: 761, w: 50, h: 20}, // Bumper
                {x: 500, y: 761, w: 50, h: 20}, // Bumper
                {x: 710, y: 690, w: 70, h: 20}, // Ledge
                // Bottom-Middle Room
                {x: 80, y: 420, w: 700, h: 20}, // Roof
                {x: 250, y: 581, w: 50, h: 20}, // Bumper
                {x: 500, y: 581, w: 50, h: 20}, // Bumper
                {x: 20, y: 510, w: 70, h: 20},  // Ledge
                // Top-Middle Room
                {x: 20, y: 240, w: 700, h: 20}, // Roof
                {x: 250, y: 401, w: 50, h: 20}, // Bumper
                {x: 500, y: 401, w: 50, h: 20}, // Bumper
                {x: 710, y: 330, w: 70, h: 20}, // Ledge
                // Top Room
                {x: 80, y: 60, w: 700, h: 20},  // Roof
                {x: 250, y: 221, w: 50, h: 20}, // Bumper
                {x: 500, y: 221, w: 50, h: 20}, // Bumper
                {x: 20, y: 150, w: 70, h: 20}   // Ledge
            ],
            moving: [
                {x: 0, y: 0, w: 0, h: 0, dir: "horizontal", l1: 0, l2: 0, spd: 0}
            ]
        },
        hazards: {
            static: [],
            moving: [
                // Bottom Room
                {x: 20, y: 720, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7, c: COLORS.HAZARD_COLOR},
                {x: 580, y: 650, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7, c: COLORS.HAZARD_COLOR},
                // Bottom-Middle Room
                {x: 580, y: 540, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7, c: COLORS.HAZARD_COLOR},
                {x: 20, y: 470, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7, c: COLORS.HAZARD_COLOR},
                //Top-Middle Room
                {x: 20, y: 360, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7, c: COLORS.HAZARD_COLOR},
                {x: 580, y: 290, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7, c: COLORS.HAZARD_COLOR},
                // Top Room
                {x: 580, y: 180, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7, c: COLORS.HAZARD_COLOR},
                {x: 20, y: 110, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7, c: COLORS.HAZARD_COLOR},
                // End Room
                {x: 150, y: 20, w: 5, h: 40, dir: "horizontal", l1: 20, l2: 730, spd: 3, c: COLORS.HAZARD_COLOR}
            ],
            guns: []
        },
        targets: [
            {x: 750, y: 30, w: 20, h: 20, c: COLORS.TARGET_COLOR}
        ]
    },
    { // Level 07:
        name: "Big Bertha.",
        altSize: {width: LEVEL_7_WIDTH,  height: LEVEL_7_HEIGHT},
        playerStart: {x: 50, y: 750},
        backgrounds: [
        
        ],
        floors: {
            static: [
                // Bounding Walls
                {x: 0, y: -100, w: 20, h: LEVEL_7_HEIGHT + 100},
                {x: LEVEL_7_WIDTH - 20, y: -100, w: 20, h: LEVEL_7_HEIGHT + 100},
                {x: -100, y: 0, w: LEVEL_7_WIDTH + 200, h: 20},
                {x: -100, y: LEVEL_7_HEIGHT - 20, w: LEVEL_7_WIDTH + 200, h: 20},
                // Platforms
                // Vertical Seperation Walls
                {x: 400, y: 200, w: 20, h: 700},
                {x: 800, y: -200, w: 20, h: 700},
                {x: 1200, y: 200, w: 20, h: 700},
                // First Section
                {x: 0, y: 730, w: 380, h: 20},
                {x: 40, y: 680, w: 380, h: 20},
                {x: 0, y: 630, w: 380, h: 20},
                // Safe Spots
                {x: 160, y: 420, w: 100, h: 20},
                {x: 160, y: 220, w: 100, h: 20},
                {x: 360, y: 190, w: 100, h: 20},
                // Second Section
                {x: 500, y: 740, w: 50, h: 20},
                {x: 1070, y: 740, w: 50, h: 20},
                {x: 1000, y: 550, w: 20, h: 20},
                {x: 900, y: 350, w: 20, h: 20},
                {x: 1160, y: 190, w: 100, h: 20},
                // Third Section
                {x: 1450, y: 190, w: 300, h: 20},
                // Guns
                // Gun Barrel
                {x: 1560, y: 220, w: 40, h: 360},
                // Miniguns
                {x: 0, y: 480, w: 40, h: 50},
                {x: 380, y: 280, w: 40, h: 50},
            ],
            moving: []
        },
        hazards: {
            static: [
                {x: 420, y: 760, w: 780, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 800, y: 520, w: 20, h: 50, c: COLORS.HAZARD_COLOR},
                {x: 800, y: 670, w: 20, h: 70, c: COLORS.HAZARD_COLOR},
          
                {x: 1240, y: 220, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1450, y: 220, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1240, y: 250, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1450, y: 250, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1240, y: 280, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1450, y: 280, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
          
                {x: 1260, y: 310, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1430, y: 310, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1260, y: 340, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1430, y: 340, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1260, y: 370, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1430, y: 370, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
          
                {x: 1290, y: 400, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1400, y: 400, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1290, y: 430, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1400, y: 430, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1290, y: 460, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1400, y: 460, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
          
                {x: 1310, y: 490, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1380, y: 490, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1310, y: 520, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1380, y: 520, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1310, y: 550, w: 20, h: 20, c: COLORS.HAZARD_COLOR},
                {x: 1380, y: 550, w: 20, h: 20, c: COLORS.HAZARD_COLOR}
            ],
            moving: [],
            guns: [
                {x: 1150, y: 200, rate: 8700, bltW: 400, bltH: 400, bltVx: -1.5, bltVy: 0,  buffer: -8700, pierce: true, color: "green"},
                {x: 40, y: 495, rate: 500, bltW: 20, bltH: 20, bltVx: 5, bltVy: 0,  buffer: -500, pierce: false, color: COLORS.HAZARD_COLOR},
                {x: 360, y: 295, rate: 500, bltW: 20, bltH: 20, bltVx: -5, bltVy: 0,  buffer: -500, pierce: false, color: COLORS.HAZARD_COLOR},
            ]
        },
        targets: [
            {x: 1500, y: 700, w: 50, h: 50, c: COLORS.TARGET_COLOR}
        ]
    },

    {
        name: "The End",
        altSize: null,
        playerStart: {x: 50, y: 750},
        backgrounds: [
        
        ],
        floors: {
            static: [
                // Bounding Walls
                {x: 0, y: -100, w: 20, h: HEIGHT + 100},
                {x: WIDTH - 20, y: -100, w: 20, h: HEIGHT + 100},
                {x: -100, y: 0, w: WIDTH + 200, h: 20},
                {x: -100, y: HEIGHT - 20, w: WIDTH + 200, h: 20},
                // Platforms
                {x: 150, y: 400, w: 20, h: 60},
                {x: 190, y: 400, w: 20, h: 60},
                {x: 170, y: 440, w: 20, h: 60},
          
                {x: 230, y: 400, w: 20, h: 100},
                {x: 250, y: 400, w: 20, h: 20},
                {x: 270, y: 400, w: 20, h: 100},
                {x: 250, y: 480, w: 20, h: 20},
          
                {x: 310, y: 400, w: 20, h: 100},
                {x: 350, y: 400, w: 20, h: 100},
                {x: 330, y: 480, w: 20, h: 20},
          
                {x: 390, y: 690, w: 20, h: 20},
                {x: 390, y: 550, w: 20, h: 120},
          
                {x: 430, y: 400, w: 20, h: 100},
                {x: 450, y: 480, w: 20, h: 20},
                {x: 470, y: 400, w: 20, h: 100},
                {x: 490, y: 480, w: 20, h: 20},
                {x: 510, y: 400, w: 20, h: 100},
          
                {x: 550, y: 400, w: 20, h: 100},
          
                {x: 590, y: 400, w: 20, h: 100},
                {x: 610, y: 400, w: 20, h: 20},
                {x: 630, y: 400, w: 20, h: 100}
            ],
            moving: []
        },
        hazards: {
            static: [],
            moving: [],
            guns: []
        },
        targets: [
            {x: 700, y: 720, w: 50, h: 50, c: COLORS.TARGET_COLOR}
        ]
    }
    
]

let testLevel = {
	name: "Test Level",
	altSize: {width: 1600, height: 1000},
	playerStart: {x: 50, y: 950},
    backgrounds: [

    ],
	floors: {
		static: [
			{x: 0, y: -100, w: 20, h: 1125, c: "rgba(0, 0, 0, 1)"},
			{x: 1580, y: -100, w: 20, h: 1125, c: "rgba(0, 0, 0, 1)"},
			{x: -100, y: 0, w: 1800, h: 20, c: "rgba(0, 0, 0, 1)"},
			{x: -100, y: 980, w: 1800, h: 20, c: "rgba(0, 0, 0, 1)"},
			{x: 180, y: 220, w: 240, h: 120, c: "rgba(0, 0, 0, 1)"},
		],
		moving: [
			{x: 650, y: 220, w: 390, h: 120, dir: "horizontal", l1: 650, l2: 800, spd: 3, c: "rgba(0, 0, 0, 1)"},
			{x: 170, y: 610, w: 110, h: 130, dir: "vertical", l1: 610, l2: 700, spd: 3, c: "rgba(0, 0, 0, 1)"},
		],
	},
	hazards: {
		static: [
		],
		moving: [
			{x: 670, y: 520, w: 260, h: 80, dir: "horizontal", l1: 670, l2: 800, spd: 3, c: "rgba(0, 0, 0, 1)"},
			{x: 1220, y: 660, w: 90, h: 120, dir: "vertical", l1: 660, l2: 700, spd: 3, c: "rgba(0, 0, 0, 1)"},
		],
		guns: [
		]
	},
	targets: [
	]
}












// {
//     name: "Test Level",
//     altSize: {width: 1600, height: 1000},  playerStart: {x: 180, y: 620},
//     floors: {
//       static: [
//         {x: 0, y: -100, w: 20, h: 1125, c: "rgba(0, 0, 0, 1)"},
//         {x: 1580, y: -100, w: 20, h: 1125, c: "rgba(0, 0, 0, 1)"},
//         {x: -100, y: 0, w: 1800, h: 20, c: "rgba(0, 0, 0, 1)"},
//         {x: -100, y: 980, w: 1800, h: 20, c: "rgba(0, 0, 0, 1)"},
//         {x: 20, y: 100, w: 460, h: 20, c: "rgba(81,99,108,1)"},
//         {x: 480, y: 10, w: 20, h: 120, c: "rgba(81,99,108,1)"},
//         {x: 500, y: 100, w: 10, h: 20, c: "rgba(81,99,108,1)"},
//         {x: 20, y: 210, w: 270, h: 20, c: "rgba(124,146,156,1)"},
//         {x: 280, y: 20, w: 20, h: 210, c: "rgba(124,146,156,1)"},
//         {x: 510, y: 90, w: 10, h: 40, c: "rgba(124,146,156,1)"},
//         {x: 520, y: 100, w: 10, h: 20, c: "rgba(124,146,156,1)"},
//         {x: 920, y: 20, w: 100, h: 70, c: "rgba(81,99,108,1)"},
//         {x: 880, y: 90, w: 180, h: 20, c: "rgba(81,99,108,1)"},
//         {x: 900, y: 110, w: 140, h: 40, c: "rgba(81,99,108,1)"},
//         {x: 880, y: 150, w: 180, h: 10, c: "rgba(124,146,156,1)"},
//         {x: 930, y: 20, w: 10, h: 140, c: "rgba(124,146,156,1)"},
//         {x: 1000, y: 20, w: 10, h: 140, c: "rgba(124,146,156,1)"},
//         {x: 960, y: 20, w: 20, h: 130, c: "rgba(124,146,156,1)"},
//         {x: 870, y: 80, w: 10, h: 40, c: "rgba(124,146,156,1)"},
//         {x: 1060, y: 80, w: 10, h: 40, c: "rgba(124,146,156,1)"},
//         {x: 890, y: 160, w: 160, h: 20, c: "rgba(124,146,156,1)"},
//         {x: 710, y: 90, w: 160, h: 20, c: "rgba(81,99,108,1)"},
//         {x: 700, y: 20, w: 20, h: 90, c: "rgba(81,99,108,1)"},
//         {x: 1070, y: 90, w: 10, h: 20, c: "rgba(124,146,156,1)"},
//         {x: 840, y: 80, w: 10, h: 40, c: "rgba(124,146,156,1)"},
//         {x: 700, y: 110, w: 20, h: 10, c: "rgba(81,99,108,1)"},
//         {x: 690, y: 90, w: 10, h: 20, c: "rgba(81,99,108,1)"},
//         {x: 160, y: 800, w: 30, h: 180, c: "rgba(98,118,127,1)"},
//         {x: 190, y: 740, w: 30, h: 240, c: "rgba(81,99,108,1)"},
//         {x: 170, y: 830, w: 30, h: 140, c: "rgba(179,195,203,1)"},
//         {x: 120, y: 730, w: 70, h: 70, c: "rgba(81,99,108,1)"},
//         {x: 140, y: 890, w: 40, h: 90, c: "rgba(132,157,169,1)"},
//         {x: 190, y: 690, w: 70, h: 80, c: "rgba(132,157,169,1)"},
//         {x: 80, y: 680, w: 110, h: 60, c: "rgba(179,195,203,1)"},
//         {x: 70, y: 670, w: 220, h: 20, c: "rgba(98,118,127,1)"},
//         {x: 200, y: 760, w: 40, h: 20, c: "rgba(98,118,127,1)"},
//         {x: 190, y: 740, w: 20, h: 20, c: "rgba(179,195,203,1)"},
//         {x: 140, y: 760, w: 20, h: 20, c: "rgba(179,195,203,1)"},
//         {x: 1310, y: 170, w: 110, h: 110, c: "rgba(81,99,108,1)"},
//         {x: 1320, y: 20, w: 10, h: 150, c: "rgba(81,99,108,1)"},
//         {x: 1400, y: 20, w: 10, h: 150, c: "rgba(81,99,108,1)"},
//         {x: 1360, y: 20, w: 10, h: 150, c: "rgba(81,99,108,1)"},
//         {x: 1420, y: 180, w: 160, h: 10, c: "rgba(81,99,108,1)"},
//         {x: 1420, y: 260, w: 160, h: 10, c: "rgba(81,99,108,1)"},
//         {x: 1420, y: 220, w: 160, h: 10, c: "rgba(81,99,108,1)"},
//         {x: 1320, y: 180, w: 90, h: 90, c: "rgba(132,157,169,1)"},
//         {x: 1310, y: 150, w: 110, h: 10, c: "rgba(179,195,203,1)"},
//         {x: 1440, y: 170, w: 10, h: 110, c: "rgba(179,195,203,1)"},
//         {x: 1560, y: 160, w: 20, h: 130, c: "rgba(81,99,108,1)"},
//         {x: 1360, y: 190, w: 10, h: 10, c: "rgba(0,255,17,1)"},
//         {x: 1370, y: 220, w: 20, h: 10, c: "rgba(0,255,17,1)"},
//         {x: 1340, y: 240, w: 10, h: 20, c: "rgba(0,255,17,1)"},
//         {x: 1390, y: 250, w: 10, h: 10, c: "rgba(0,255,17,1)"},
//         {x: 1330, y: 210, w: 10, h: 10, c: "rgba(0,255,17,1)"},
//         {x: 1290, y: 20, w: 150, h: 20, c: "rgba(98,118,127,1)"},
//         {x: 1260, y: 20, w: 210, h: 10, c: "rgba(81,99,108,1)"},
//         {x: 590, y: 20, w: 30, h: 160, c: "rgba(81,99,108,1)"},
//         {x: 570, y: 180, w: 70, h: 20, c: "rgba(81,99,108,1)"},
//         {x: 580, y: 200, w: 50, h: 10, c: "rgba(179,195,203,1)"},
//         {x: 770, y: 100, w: 20, h: 10, c: "rgba(179,195,203,1)"},
//         {x: 640, y: 630, w: 80, h: 10, c: "rgba(98,118,127,1)"},
//         {x: 1070, y: 550, w: 90, h: 10, c: "rgba(98,118,127,1)"},
//         {x: 1470, y: 400, w: 80, h: 10, c: "rgba(98,118,127,1)"},
//       ],
//       moving: [
//       ],
//     },
//     hazards: {
//       static: [
//         {x: 910, y: 180, w: 120, h: 10, c: "rgba(207,255,117,1)"},
//         {x: 20, y: 910, w: 1560, h: 70, c: "rgba(0,255,17,1)"},
//         {x: 80, y: 910, w: 300, h: 10, c: "rgba(238,255,0,1)"},
//         {x: 590, y: 910, w: 480, h: 10, c: "rgba(238,255,0,1)"},
//         {x: 1330, y: 910, w: 170, h: 10, c: "rgba(238,255,0,1)"},
//         {x: 590, y: 210, w: 30, h: 10, c: "rgba(238,255,0,1)"},
//         {x: 610, y: 330, w: 20, h: 80, c: "rgba(238,255,0,1)"},
//         {x: 580, y: 600, w: 40, h: 60, c: "rgba(238,255,0,1)"},
//         {x: 960, y: 250, w: 20, h: 50, c: "rgba(238,255,0,1)"},
//         {x: 940, y: 430, w: 30, h: 60, c: "rgba(238,255,0,1)"},
//         {x: 960, y: 630, w: 20, h: 90, c: "rgba(238,255,0,1)"},
//         {x: 770, y: 110, w: 10, h: 10, c: "rgba(238,255,0,1)"},
//         {x: 770, y: 270, w: 10, h: 10, c: "rgba(238,255,0,1)"},
//         {x: 740, y: 470, w: 10, h: 10, c: "rgba(238,255,0,1)"},
//         {x: 790, y: 730, w: 10, h: 10, c: "rgba(238,255,0,1)"},
//       ],
//       moving: [
//       ],
//       guns: [
//       ]
//     },
//     targets: [
//         {x: 1490, y: 340, w: 40, h: 40, c: "rgba(0,255,17,1)"},
//     ]
//   }




