
let levelList = [
    new Level([

        // LEVEL 01: A New Beginning

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
        {x:50, y:750},
        new Floor(700, 720, 50, 50)
    ),
    new Level([

        // LEVEL 02: Getting it Started (in here)

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
        new Floor(650, 350, 100, 20, true, 620, 650, 1),
        
        // Non-Moving
        new Floor(0, 750, 200, 60),
        new Floor(500, 450, 400, 60),
        new Floor(200, 550, 400, 60),
        new Floor(0, 150, 300, 60),
        new Floor(280, 20, 20, 80)
        ],
        {x:50, y:700}
        ,
        new Floor(50, 50, 50, 50)
        ,

        // Hazards

        [
        new Floor(200, 770, 580, 20),
        new Floor(350, 250, 20, 20),
        new Floor(400, 275, 20, 20),
        new Floor(450, 300, 20, 20)
        ]
    ),

    new Level([

        // LEVEL 03: Tricky Little Platform

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
        {x:50, y:300}
        ,
        new Floor(715, 440, 25, 25)
        ,

        // Hazards

        [
        new Floor(100, 750, 600, 40),
        new Floor(235, 500, 20, 150, false, 100, 550, 5),
        new Floor(535, 300, 20, 150, false, 100, 550, 5)
        ]
    ),

    new Level([

        // LEVEL 04: The Tumultuous Tunnel 

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
        {x:50, y:775}
        ,
        new Floor(50, 50, 25, 25)
        ,

        // Hazards

        [

            new Floor(250, 450, 30, 150),
            new Floor(350, 350, 30, 150),
            new Floor(450, 450, 30, 150),
            new Floor(550, 350, 30, 150),
            



            new Floor(130, 75, 20, 25, true, 130, 580, 10),
            new Floor(560, 75, 20, 25, true, 130, 580, 10),

        new Floor(200, 650, 20, 30, false, 650, 750, 1.5),
        new Floor(220, 660, 20, 30, false, 650, 750, 1.5),
        new Floor(240, 670, 20, 30, false, 650, 750, 1.5),
        new Floor(260, 680, 20, 30, false, 650, 750, 1.5),
        new Floor(280, 690, 20, 30, false, 650, 750, 1.5),
        new Floor(300, 700, 20, 30, false, 650, 750, 1.5),
        new Floor(320, 710, 20, 30, false, 650, 750, 1.5),
        new Floor(340, 720, 20, 30, false, 650, 750, 1.5),
        new Floor(360, 730, 20, 30, false, 650, 750, 1.5),
        new Floor(380, 740, 20, 30, false, 650, 750, 1.5),
        new Floor(400, 750, 20, 30, false, 650, 750, 1.5),
        new Floor(420, 740, 20, 30, false, 650, 750, 1.5),
        new Floor(440, 730, 20, 30, false, 650, 750, 1.5),
        new Floor(460, 720, 20, 30, false, 650, 750, 1.5),
        new Floor(480, 710, 20, 30, false, 650, 750, 1.5),
        new Floor(500, 700, 20, 30, false, 650, 750, 1.5),
        new Floor(520, 690, 20, 30, false, 650, 750, 1.5),
        new Floor(540, 680, 20, 30, false, 650, 750, 1.5),
        new Floor(560, 670, 20, 30, false, 650, 750, 1.5),
        new Floor(580, 660, 20, 30, false, 650, 750, 1.5),
        new Floor(600, 650, 20, 30, false, 650, 750, 1.5),
        ]
    ),

    new Level([

        // LEVEL 05: The Final Frontier

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


        new Floor(430, 20, 25, 80),
        new Floor(100, 100, 400, 20),

        


        ],
        {x:60, y:720}
        ,
        new Floor(382, 50, 25, 25),

        

        // Hazards

        [

            new Floor(20, 770, 760, 20),

            new Floor(20, 100, 20, 20),
            new Floor(80, 100, 20, 20),

            new Floor(20, 120, 20, 50, true, 20, 760, 4),
            new Floor(20, 210, 20, 240, true, 20, 760, 4),
            new Floor(20, 495, 20, 200, true, 20, 760, 4),
            
        ]
    ),

    new Level([

        // LEVEL 06: The End

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
        {x:50, y:750},
        new Floor(700, 720, 50, 50)
    )
    


]





