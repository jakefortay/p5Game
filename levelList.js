let levelList = [
  new Level(
    // LEVEL 01:
    "A New Beginning",
    [
      // Bounding Walls

      // Left Wall
      new Floor(0, -100, 20, HEIGHT + 100),
      // Right Wall
      new Floor(WIDTH - 20, -100, 20, HEIGHT + 100),
      // Ceiling
      new Floor(-100, 0, WIDTH + 200, 20),
      // Floor
      new Floor(-100, HEIGHT - 20, WIDTH + 200, 20),
    ],
    { x: 50, y: 750 },
    new Floor(700, 720, 50, 50)
  ),
  new Level(
    // LEVEL 02:
    "Getting it Started (in here)",
    [
      // Bounding Walls

      // Left Wall
      new Floor(0, -100, 20, HEIGHT + 100),
      // Right Wall
      new Floor(WIDTH - 20, -100, 20, HEIGHT + 100),
      // Ceiling
      new Floor(-100, 0, WIDTH + 200, 20),
      // Floor
      new Floor(-100, HEIGHT - 20, WIDTH + 200, 20),

      // Unique Floors

      // Moving
      new MovingFloor(650, 350, 100, 20, "horizontal", 620, 650, 1),

      // Non-Moving
      new Floor(0, 750, 200, 60),
      new Floor(500, 450, 400, 60),
      new Floor(200, 550, 400, 60),
      new Floor(0, 150, 300, 60),
      new Floor(280, 20, 20, 80),
    ],
    { x: 50, y: 700 },
    new Floor(50, 50, 50, 50),
    // Hazards

    [
      new Floor(200, 770, 580, 20),
      new Floor(350, 250, 20, 20),
      new Floor(400, 275, 20, 20),
      new Floor(450, 300, 20, 20),
    ]
  ),

  new Level(
    // LEVEL 03:
    "Tricky Little Platform",
    [
      // Bounding Walls

      // Left Wall
      new Floor(0, -100, 20, HEIGHT + 100),
      // Right Wall
      new Floor(WIDTH - 20, -100, 20, HEIGHT + 100),
      // Ceiling
      new Floor(-100, 0, WIDTH + 200, 20),
      // Floor
      new Floor(-100, HEIGHT - 20, WIDTH + 200, 20),

      // Unique Floors

      // Non-Moving
      new Floor(0, 500, 100, 400),
      new Floor(700, 500, 100, 400),
      new Floor(390, 500, 20, 400),
    ],
    { x: 50, y: 300 },
    new Floor(715, 440, 25, 25),
    // Hazards

    [
      new Floor(100, 750, 600, 40),
      new MovingFloor(235, 500, 20, 150, "vertical", 100, 550, 5),
      new MovingFloor(535, 300, 20, 150, "vertical", 100, 550, 5),
    ]
  ),

  new Level(
    // LEVEL 04:
    "The Tumultuous Tunnel",
    [
      // Bounding Walls

      // Left Wall
      new Floor(0, -100, 20, HEIGHT + 100),
      // Right Wall
      new Floor(WIDTH - 20, -100, 20, HEIGHT + 100),
      // Ceiling
      new Floor(-100, 0, WIDTH + 200, 20),
      // Floor
      new Floor(-100, HEIGHT - 20, WIDTH + 200, 20),

      // Unique Floors

      // Non-Moving
      new Floor(0, 600, 700, 50),
      new Floor(200, 300, 700, 50),
      new Floor(0, 100, 700, 50),

      new Floor(50, 425, 100, 20),

      new Floor(100, 80, 30, 50),
      new Floor(600, 80, 30, 50),
      new Floor(325, 50, 90, 25),
    ],
    { x: 50, y: 775 },
    new Floor(50, 50, 25, 25),
    // Hazards

    [
      new Floor(250, 450, 30, 150),
      new Floor(350, 350, 30, 150),
      new Floor(450, 450, 30, 150),
      new Floor(550, 350, 30, 150),

      new MovingFloor(130, 75, 20, 25, "horizontal", 130, 580, 10),

      new MovingFloor(200, 650, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(220, 660, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(240, 670, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(260, 680, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(280, 690, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(300, 700, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(320, 710, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(340, 720, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(360, 730, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(380, 740, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(400, 750, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(420, 740, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(440, 730, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(460, 720, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(480, 710, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(500, 700, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(520, 690, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(540, 680, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(560, 670, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(580, 660, 20, 30, "vertical", 650, 750, 1.5),
      new MovingFloor(600, 650, 20, 30, "vertical", 650, 750, 1.5),
    ]
  ),

  new Level(
    // LEVEL 05:
    "The Final Frontier",
    [
      // Bounding Walls

      // Left Wall
      new Floor(0, -100, 20, HEIGHT + 100),
      // Right Wall
      new Floor(WIDTH - 20, -100, 20, HEIGHT + 100),
      // Ceiling
      new Floor(-100, 0, WIDTH + 200, 20),
      // Floor
      new Floor(-100, HEIGHT - 20, WIDTH + 200, 20),

      // Unique Floors

      // Non-Moving

      new Floor(50, 750, 40, 50),
      new Floor(190, 640, 20, 50),
      new Floor(50, 490, 40, 50),

      new Floor(470, 490, 60, 30),
      new Floor(450, 400, 20, 120),

      new Floor(450, 300, 20, 50),
      new Floor(20, 300, 650, 20),

      new Floor(720, 480, 21, 20),
      new Floor(650, 300, 21, 20),

      new Floor(430, 20, 25, 100),
      new Floor(100, 100, 400, 20),
    ],
    { x: 60, y: 720 },
    new Floor(382, 50, 25, 25),

    // Hazards

    [
      new Floor(20, 770, 760, 20),

      new Floor(20, 100, 20, 20),
      new Floor(80, 100, 20, 20),

      new MovingFloor(20, 120, 20, 50, "horizontal", 20, 760, 4),
      new MovingFloor(20, 210, 20, 240, "horizontal", 20, 760, 4),
      new MovingFloor(20, 495, 20, 200, "horizontal", 20, 760, 4),
    ]
  ),

  new Level(
    // LEVEL 06:
    "The Chambers of Composure",
    [
      // Bounding Walls

      // Left Wall
      new Floor(0, -100, 20, HEIGHT + 100),
      // Right Wall
      new Floor(WIDTH - 20, -100, 20, HEIGHT + 100),
      // Ceiling
      new Floor(-100, 0, WIDTH + 200, 20),
      // Floor
      new Floor(-100, HEIGHT - 20, WIDTH + 200, 20),

      // Bottom Room
      // Roof
      new Floor(20, 600, 700, 20),
      // Bumpers
      new Floor(250, 761, 50, 20),
      new Floor(500, 761, 50, 20),
      // Ledge
      new Floor(710, 690, 70, 20),

      // Bottom-Middle Room
      // Roof
      new Floor(80, 420, 700, 20),
      // Bumpers
      new Floor(250, 581, 50, 20),
      new Floor(500, 581, 50, 20),
      // Ledge
      new Floor(20, 510, 70, 20),

      // Top-Middle Room
      // Roof
      new Floor(20, 240, 700, 20),
      // Bumpers
      new Floor(250, 401, 50, 20),
      new Floor(500, 401, 50, 20),
      // Ledge
      new Floor(710, 330, 70, 20),

      // Top Room
      // Roof
      new Floor(80, 60, 700, 20),
      // Bumpers
      new Floor(250, 221, 50, 20),
      new Floor(500, 221, 50, 20),
      // Ledge
      new Floor(20, 150, 70, 20),
    ],
    { x: 30, y: 750 },
    // {x:750, y:30},
    new Floor(750, 30, 20, 20),
    // Hazards
    [
      // Bottom Room
      new MovingFloor(20, 720, 200, 25, "horizontal", 20, 580, 7),
      new MovingFloor(580, 650, 200, 25, "horizontal", 20, 580, 7),
      // Bottom-Middle Room
      new MovingFloor(580, 540, 200, 25, "horizontal", 20, 580, 7),
      new MovingFloor(20, 470, 200, 25, "horizontal", 20, 580, 7),
      //Top-Middle Room
      new MovingFloor(20, 360, 200, 25, "horizontal", 20, 580, 7),
      new MovingFloor(580, 290, 200, 25, "horizontal", 20, 580, 7),
      // Top Room
      new MovingFloor(580, 180, 200, 25, "horizontal", 20, 580, 7),
      new MovingFloor(20, 110, 200, 25, "horizontal", 20, 580, 7),
      // End Room
      new MovingFloor(150, 20, 5, 40, "horizontal", 20, 730, 3),
    ]
  ),

  new Level(
    // LEVEL 07

    "Big Bertha.",

    // Floors
    [
      // Left Wall
      new Floor(0, -100, 20, LEVEL_7_HEIGHT + 100),
      // Right Wall
      new Floor(LEVEL_7_WIDTH - 20, -100, 20, LEVEL_7_HEIGHT + 100),
      // Ceiling
      new Floor(-100, 0, LEVEL_7_WIDTH + 200, 20),
      // Floor
      new Floor(-100, LEVEL_7_HEIGHT - 20, LEVEL_7_WIDTH + 200, 20),

      // Gun Barrel
      new Floor(1560, 220, 40, 360),

      // Vertical Seperation Walls
      new Floor(400, 200, 20, 700),
      new Floor(800, -200, 20, 700),
      new Floor(1200, 200, 20, 700),

      // First Section
      new Floor(0, 730, 380, 20),
      new Floor(40, 680, 380, 20),
      new Floor(0, 630, 380, 20),

      // Miniguns
      new Floor(0, 480, 40, 50),
      new Floor(380, 280, 40, 50),

      // Safe Spots
      new Floor(160, 420, 100, 20),
      new Floor(160, 220, 100, 20),
      new Floor(360, 190, 100, 20),

      // Second Section

      new Floor(500, 740, 50, 20),
      new Floor(1070, 740, 50, 20),

      new Floor(1000, 550, 20, 20),
      new Floor(900, 350, 20, 20),
      new Floor(1160, 190, 100, 20),

      // Third Section

      new Floor(1450, 190, 300, 20),
    ],
    // Start Point
    { x: 50, y: 750 },

    // End Point
    new Floor(1500, 700, 50, 50),

    // Hazards
    [
      new Floor(420, 760, 780, 20),
      new Floor(800, 520, 20, 50),
      new Floor(800, 670, 20, 70),

      new Floor(1240, 220, 20, 20),
      new Floor(1450, 220, 20, 20),
      new Floor(1240, 250, 20, 20),
      new Floor(1450, 250, 20, 20),
      new Floor(1240, 280, 20, 20),
      new Floor(1450, 280, 20, 20),

      new Floor(1260, 310, 20, 20),
      new Floor(1430, 310, 20, 20),
      new Floor(1260, 340, 20, 20),
      new Floor(1430, 340, 20, 20),
      new Floor(1260, 370, 20, 20),
      new Floor(1430, 370, 20, 20),

      new Floor(1290, 400, 20, 20),
      new Floor(1400, 400, 20, 20),
      new Floor(1290, 430, 20, 20),
      new Floor(1400, 430, 20, 20),
      new Floor(1290, 460, 20, 20),
      new Floor(1400, 460, 20, 20),

      new Floor(1310, 490, 20, 20),
      new Floor(1380, 490, 20, 20),
      new Floor(1310, 520, 20, 20),
      new Floor(1380, 520, 20, 20),
      new Floor(1310, 550, 20, 20),
      new Floor(1380, 550, 20, 20),
    ],

    [
      new Gun(1150, 200, 8700, 400, 400, -1.5, 0, -8700, true, "green"),
      new Gun(40, 495, 500, 20, 20, 5, 0, -500, false, "red"),
      new Gun(360, 295, 500, 20, 20, -5, 0, -500, false, "red"),
    ],

    true,

    1600,

    800
  ),

  new Level(
    // LEVEL 0X:
    "The End",
    [
      // Bounding Walls

      // Left Wall
      new Floor(0, -100, 20, HEIGHT + 100),
      // Right Wall
      new Floor(WIDTH - 20, -100, 20, HEIGHT + 100),
      // Ceiling
      new Floor(-100, 0, WIDTH + 200, 20),
      // Floor
      new Floor(-100, HEIGHT - 20, WIDTH + 200, 20),

      new Floor(150, 400, 20, 60),
      new Floor(190, 400, 20, 60),
      new Floor(170, 440, 20, 60),

      new Floor(230, 400, 20, 100),
      new Floor(250, 400, 20, 20),
      new Floor(270, 400, 20, 100),
      new Floor(250, 480, 20, 20),

      new Floor(310, 400, 20, 100),
      new Floor(350, 400, 20, 100),
      new Floor(330, 480, 20, 20),

      new Floor(390, 690, 20, 20),
      new Floor(390, 550, 20, 120),

      new Floor(430, 400, 20, 100),
      new Floor(450, 480, 20, 20),
      new Floor(470, 400, 20, 100),
      new Floor(490, 480, 20, 20),
      new Floor(510, 400, 20, 100),

      new Floor(550, 400, 20, 100),

      new Floor(590, 400, 20, 100),
      new Floor(610, 400, 20, 20),
      new Floor(630, 400, 20, 100),
    ],
    { x: 50, y: 750 },
    new Floor(700, 720, 50, 50)
  ),
];

let testLevel = new Level(
  "Test Environment",

  // Floors
  [
    // Left Wall
    new Floor(0, -100, 20, HEIGHT + 100),
    // Right Wall
    new Floor(WIDTH - 20, -100, 20, HEIGHT + 100),
    // Ceiling
    new Floor(-100, 0, WIDTH + 200, 20),
    // Floor
    new Floor(-100, HEIGHT - 20, WIDTH + 200, 20),

    new Floor(0, 650, 100, 40),
    new Floor(0, 660, 110, 20),
  ],
  // Start Point
  { x: 50, y: 750 },

  // End Point
  new Floor(375, 100, 50, 50),

  // Hazards
  [],

  [
    new Gun(100, 660, 2000, 20, 20, 2, 0, 0),
    new Gun(100, 560, 2000, 20, 20, 2, 0, 0),
    new Gun(100, 610, 2000, 20, 20, 2, 0, 1000),
  ],

  true,

  1600,

  800
);
