class Labs{
    constructor(){
        this.wbc1 = createElement("h2");
        this.wbc = createInput("");

        this.hmg = createElement("h2");
        this.hmg1 = createInput("");

        this.platelet = createElement("h2");
        this.platelet1 = createInput("");
        this.today = createElement("h2");
        this.calendar = createElement("h2");

        this.bsa = createButton("Calculate BSA");
        this.counts = createButton("Labs");
        this.tablets = createButton("Tablets");
        this.dashboard = createButton("Dashboard");

        this.progressI = createInput("");
        this.progress = createElement("h2");

        this.enter = createButton("Enter");
        this.enter2 = createButton("Enter");

        this.pText = createElement("h2");
        this.wbcVal = createElement("h2");
        this.hmgVal = createElement("h2");
        this.pVal = createElement("h2");
    }

    display(){
        this.bsa.show();
        this.bsa.position(0,height*1100/1200);
        this.bsa.mousePressed(()=>{
            state = "BSA";
        });

        this.counts.show();
        this.counts.position(width*1/3,height*1100/1200);
        this.counts.mousePressed(()=>{
            state = "counts"
            labs.display();
        });

        this.tablets.show();
        this.tablets.position(width*2/3,height*1100/1200);
        this.tablets.mousePressed(()=>{
            state = "tablets"
        });

        this.dashboard.show();
        this.dashboard.position(width*5/6,height*1100/1200);
        this.dashboard.mousePressed(()=>{
            state = "dashboard";
        });

        this.wbc1.show();
        this.wbc.show();
        this.wbc1.html("Enter WBC count:");
        this.wbc1.position(width/6, height*3/8);
        this.wbc.position(width/6, height/2);

        //this.hmg.show();
        //this.hmg1.show();
        this.hmg.html("Enter Haemoglobin Count:");
        this.hmg.position(width/2, height*3/8);
        this.hmg1.position(width/2, height/2);

        //this.platelet.show();
        //this.platelet1.show();
        this.platelet.html("Enter platelet Count: ");
        this.platelet.position(width*5/6,height*3/8);
        this.platelet1.position(width*5/6, height/2);

        this.today.html("Day "+dayIndex);
        this.today.position(width/6, height*2/8);

        this.calendar.html("Calendar");
        this.calendar.position(width/2, 0);

        this.progressI.show();
        this.progress.show();
        this.progress.html("Enter Day No. to check progress:");
        this.progress.position(width*19/24,height*80/1200);
        this.progressI.position(width*19/24, height*120/1200);
        dayVal = this.progressI.value();

        this.enter2.show();
        this.enter2.position(width*19/24, height*160/1200);

        if(dayVal!==null){
            data.getWbc();
            data.getHmg();
            data.getPl();
        }
        this.enter2.mousePressed(()=>{

            this.pText.show();
            this.pText.html("Your progress on day"+dayVal+" was: ");
            this.pText.position(width/2,height/3);

            this.pVal.show();
            this.pVal.html("Platelet Count: "+pl);
            this.pVal.position(width/2,height*440/1200);

            this.wbcVal.show();
            this.wbcVal.html("WBC Count: "+wbc);
            this.wbcVal.position(width/2,height*480/1200);

            this.hmgVal.show();
            this.hmgVal.html("Haemoglobin: "+hmg);
            this.hmgVal.position(width/2,height*520/1200);
        });

        this.enter.show();
        this.enter.position(width/2, height*3/4);
        this.enter.mousePressed(()=>{
            database.ref("username: "+username+"/Day/Day"+dayIndex+"/counts").update({
                wbc: this.wbc.value(),
                hmg: this.hmg1.value(),
                platelet: this.platelet1.value()
            });
            this.wbc.hide();
            this.wbc1.hide();
            this.hmg.hide();
            this.hmg1.hide();
            this.platelet.hide();
            this.platelet1.hide();
        });



        

    }
    hide(){
        this.wbc.hide();
        this.wbc1.hide();
        this.hmg.hide();
        this.hmg1.hide();
        this.platelet.hide();
        this.platelet1.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
        this.today.hide();
        this.enter.hide();
        this.progress.hide();
        this.progressI.hide();
        this.enter2.hide();
        this.pText.hide();
        this.pVal.hide();
        this.wbcVal.hide();
        this.hmgVal.hide();
    }
}