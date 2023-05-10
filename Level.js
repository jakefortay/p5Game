
class Level {
  constructor(name, floors, startPoints, endPoint, hazards, guns, custom, resizeW, resizeH) {
    
    this.name = name

    this.floors = floors; 
    this.hazards = hazards;
    
    this.startX = startPoints.x; 
    this.startY = startPoints.y; 
    
    this.endPoint = endPoint; 

    this.guns = guns; 

    if(custom != null){
      this.custom = custom;
      this.resizeW = resizeW; 
      this.resizeH = resizeH; 
    
    }
    
  }
  
  
  
  
  
}
