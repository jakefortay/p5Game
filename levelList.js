
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
    ),
    


]





