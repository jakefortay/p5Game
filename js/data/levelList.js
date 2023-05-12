const levelList = [
    { // Level 01
        name: "A New Beginning",
        playerStart: {x: 50, y: 750},
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
            {x: 700, y: 720, w: 50, h: 50}
        ]
    },
    { // Level 02:
        name: "Getting it Started (in here)",
        playerStart: {x: 50, y: 700},
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
                {x: 200, y: 770, w: 580, h: 20},
                {x: 350, y: 250, w: 20, h: 20},
                {x: 400, y: 275, w: 20, h: 20},
                {x: 450, y: 300, w: 20, h: 20}
            ],
            moving: [],
            guns: []
        },
        targets: [
            {x: 50, y: 50, w: 50, h: 50}
        ]
    },
    { // Level 03:
        name: "Tricky Little Platform",
        playerStart: {x: 50, y: 300},
        generateFullWalls: true,
        floors: {
            static: [
                // Bounding Walls
                {x: 0, y: -100, w: 20, h: HEIGHT + 100},
                {x: WIDTH - 20, y: -100, w: 20, h: HEIGHT + 100},
                {x: -100, y: 0, w: WIDTH + 200, h: 20},
                {x: -100, y: HEIGHT - 20, w: WIDTH + 200, h: 20},
                // Platforms
                {x: 0, y: 500, w: 100, h: 400},
                {x: 700, y: 500, w: 100, h: 400},
                {x: 390, y: 500, w: 20, h: 400}
            ],
            moving: [
                {x: 0, y: 0, w: 0, h: 0, dir: "horizontal", l1: 0, l2: 0, spd: 0}
            ]
        },
        hazards: {
            static: [
                {x: 100, y: 750, w: 600, h: 40}
            ],
            moving: [
                {x: 235, y: 500, w: 20, h: 150, dir: "vertical", l1: 100, l2: 550, spd: 5},
                {x: 535, y: 300, w: 20, h: 150, dir: "vertical", l1: 100, l2: 550, spd: 5}
            ],
            guns: []
        },
        targets: [
            {x: 715, y: 440, w: 25, h: 25}
        ]
    },
    { // Level 04:
        name: "The Tumultuous Tunnel",
        playerStart: {x: 50, y: 775},
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
                {x: 250, y: 450, w: 30, h: 150},
                {x: 350, y: 350, w: 30, h: 150},
                {x: 450, y: 450, w: 30, h: 150},
                {x: 550, y: 350, w: 30, h: 150}
            ],
            moving: [
                {x: 130, y: 75, w: 20, h: 25, dir: "horizontal", l1: 130, l2: 580, spd: 10},
          
                {x: 200, y: 650, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 220, y: 660, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 240, y: 670, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 260, y: 680, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 280, y: 690, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 300, y: 700, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 320, y: 710, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 340, y: 720, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 360, y: 730, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 380, y: 740, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 400, y: 750, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 420, y: 740, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 440, y: 730, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 460, y: 720, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 480, y: 710, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 500, y: 700, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 520, y: 690, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 540, y: 680, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 560, y: 670, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 580, y: 660, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5},
                {x: 600, y: 650, w: 20, h: 30, dir: "vertical", l1: 650, l2: 750, spd: 1.5}
            ],
            guns: []
        },
        targets: [
            {x: 50, y: 50, w: 25, h: 25}
        ]
    },
    { // Level 05:
        name: "The Final Frontier",
        playerStart: {x: 60, y: 720},
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
                {x: 20, y: 770, w: 760, h: 20},
          
                {x: 20, y: 100, w: 20, h: 20},
                {x: 80, y: 100, w: 20, h: 20}
            ],
            moving: [
                {x: 20, y: 120, w: 20, h: 50, dir: "horizontal", l1: 20, l2: 760, spd: 4},
                {x: 20, y: 210, w: 20, h: 240, dir: "horizontal", l1: 20, l2: 760, spd: 4},
                {x: 20, y: 495, w: 20, h: 200, dir: "horizontal", l1: 20, l2: 760, spd: 4}
            ],
            guns: []
        },
        targets: [
            {x: 382, y: 50, w: 25, h: 25}
        ]
    },
    { // Level 06:
        name: "The Chambers of Composure",
        playerStart: {x: 30, y: 750},
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
                {x: 20, y: 720, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7},
                {x: 580, y: 650, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7},
                // Bottom-Middle Room
                {x: 580, y: 540, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7},
                {x: 20, y: 470, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7},
                //Top-Middle Room
                {x: 20, y: 360, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7},
                {x: 580, y: 290, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7},
                // Top Room
                {x: 580, y: 180, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7},
                {x: 20, y: 110, w: 200, h: 25, dir: "horizontal", l1: 20, l2: 580, spd: 7},
                // End Room
                {x: 150, y: 20, w: 5, h: 40, dir: "horizontal", l1: 20, l2: 730, spd: 3}
            ],
            guns: []
        },
        targets: [
            {x: 750, y: 30, w: 20, h: 20}
        ]
    },
    { // Level 07:
        name: "Big Bertha.",
        altSize: {width: LEVEL_7_WIDTH,  height: LEVEL_7_HEIGHT},
        playerStart: {x: 50, y: 750},
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
                {x: 420, y: 760, w: 780, h: 20},
                {x: 800, y: 520, w: 20, h: 50},
                {x: 800, y: 670, w: 20, h: 70},
          
                {x: 1240, y: 220, w: 20, h: 20},
                {x: 1450, y: 220, w: 20, h: 20},
                {x: 1240, y: 250, w: 20, h: 20},
                {x: 1450, y: 250, w: 20, h: 20},
                {x: 1240, y: 280, w: 20, h: 20},
                {x: 1450, y: 280, w: 20, h: 20},
          
                {x: 1260, y: 310, w: 20, h: 20},
                {x: 1430, y: 310, w: 20, h: 20},
                {x: 1260, y: 340, w: 20, h: 20},
                {x: 1430, y: 340, w: 20, h: 20},
                {x: 1260, y: 370, w: 20, h: 20},
                {x: 1430, y: 370, w: 20, h: 20},
          
                {x: 1290, y: 400, w: 20, h: 20},
                {x: 1400, y: 400, w: 20, h: 20},
                {x: 1290, y: 430, w: 20, h: 20},
                {x: 1400, y: 430, w: 20, h: 20},
                {x: 1290, y: 460, w: 20, h: 20},
                {x: 1400, y: 460, w: 20, h: 20},
          
                {x: 1310, y: 490, w: 20, h: 20},
                {x: 1380, y: 490, w: 20, h: 20},
                {x: 1310, y: 520, w: 20, h: 20},
                {x: 1380, y: 520, w: 20, h: 20},
                {x: 1310, y: 550, w: 20, h: 20},
                {x: 1380, y: 550, w: 20, h: 20}
            ],
            moving: [],
            guns: [
                {x: 1150, y: 200, rate: 8700, bltW: 400, bltH: 400, bltVx: -1.5, bltVy: 0,  buffer: -8700, pierce: true, color: "green"},
                {x: 40, y: 495, rate: 500, bltW: 20, bltH: 20, bltVx: 5, bltVy: 0,  buffer: -500, pierce: false, color: "red"},
                {x: 360, y: 295, rate: 500, bltW: 20, bltH: 20, bltVx: -5, bltVy: 0,  buffer: -500, pierce: false, color: "red"},
            ]
        },
        targets: [
            {x: 1500, y: 700, w: 50, h: 50}
        ]
    },
    {
        name: "The End",
        altSize: null,
        playerStart: {x: 50, y: 750},
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
            {x: 700, y: 720, w: 50, h: 50}
        ]
    }
    
]

let testLevel = {
    name: "Test Environment",
    altSize: null,
    playerStart: {x: 50, y: 750},
    floors: {
        static: [
            {x: 0, y: -100, w: 20, h: HEIGHT + 100},
            {x: WIDTH - 20, y: -100, w: 20, h: HEIGHT + 100},
            {x: -100, y: 0, w: WIDTH + 200, h: 20},
            {x: -100, y: HEIGHT - 20, w: WIDTH + 200, h: 20},
            // Platforms
            {x: 0, y: 650, w: 100, h: 40},
            {x: 0, y: 660, w: 110, h: 20}
        ],
        moving: []
    },
    hazards: {
        static: [],
        moving: [],
        guns: [,
            {x: 100, y: 660, rate: 2000, bltW: 20, bltH: 20, bltVx: 2, bltVy: 0, buffer: 0, pierce: false, color: "red"},
        ]
    },
    targets: [
        {x: 375, y: 100, w: 50, h: 50}
    ]
}
