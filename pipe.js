class Pipe{
    constructor(){
        let spacing = 125;
        let centery = random(height/6,3/4*height);
        this.top = centery - spacing/2;
        this.bottom = height - (centery + spacing/2);
        this.x = width;
        this.w = 80;
        this.speed=6;
        this.highlight = false;
    }

    hit(bird){
        if(bird.y < this.top || bird.y>height-this.bottom){
            if(bird.x>this.x && bird.x<this.x+this.w){
                this.highlight = true
                return true;
            }  
        }
        this.highlight = false;
        return false;
    }
	
    show(){
		fill(255);
		if(this.highlight) {
			fill(255,0,0);
		}
		rect(this.x,0,this.w,this.top);
		rect(this.x,height-this.bottom,this.w,this.bottom);
    }

    update(){
        this.x-=this.speed;
    }

    offscreen(){
        if(this.x < -this.w){
            return true;
        }else{
			return false;
        }
    }
}