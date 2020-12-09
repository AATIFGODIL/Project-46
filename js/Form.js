class Form {

  constructor() {
    this.input = createInput("Day");
    this.button = createButton('click');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.input1 = createInput("startTime");
    this.input2 = createInput("endTime");
    this.button1 = createButton('Add Task');


  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Time Management App");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    
    this.input1.position(displayWidth/2 - 140 , displayHeight/2 - 160);
    
    this.input2.position(displayWidth/2 - 140 , displayHeight/2 + 80);
    this.button1.position(displayWidth/2 + 30, displayHeight/2 + 160);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html( "Lets add a reminder for " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      if(playerCount>0){
        this.input1 = createInput("starTime");
    this.input2 = createInput("endTime");
      }
    });

    this.button1.mousePressed(()=>{
      
    });

  }
}
