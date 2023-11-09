class Reward{
    constructor(ctx, pos, size, rewardPos){
        this.ctx = ctx;
        this.pos = [(pos[0] + rewardPos[0]), (pos[1] + rewardPos[1])];
        this.size = size;

        this.smallRewardSound = new Audio('assets/audio/little_robot_sound_factory_fantasy_Pickup_Gold_00.mp3');
        this.bigRewardSound = new Audio('assets/audio/arcade-game-fruit-machine-jackpot-001-short.mp3');

        if(!localStorage.getItem("maxLoot")){
            localStorage.setItem("maxLoot", 80)
        }

        if(!localStorage.getItem("minLoot")){
            localStorage.setItem("minLoot", 1)
        }
    }

    get maxLoot(){
        return parseFloat(localStorage.getItem("maxLoot"))
    }

    get minLoot(){
        return parseFloat(localStorage.getItem("minLoot"))
    }

    get loadSpeed(){
        return parseFloat(localStorage.getItem("loadSpeed"))
    }

    static calculateReward(){
        let num = 0;
        let percent = (Math.random() * 100);
        let max = parseFloat(localStorage.getItem("maxLoot")) ? parseFloat(localStorage.getItem("maxLoot")) : 80;
        let min = (4/5) * max;
        const smallRewardSound = new Audio('assets/audio/little_robot_sound_factory_fantasy_Pickup_Gold_00.mp3');
        const bigRewardSound = new Audio('assets/audio/arcade-game-fruit-machine-jackpot-001-short.mp3')

        if(percent <= 15){
            num = Math.ceil(Math.random() * (max - min) + min);
            bigRewardSound.play();
        }else{
            min = parseFloat(localStorage.getItem("minLoot")) ? parseFloat(localStorage.getItem("minLoot")) : 1;
            num = Math.ceil(Math.random() * ((max / 20) - min) + min);
            num = num < min ? min : num;
            smallRewardSound.play();
        }
        return num;
    }

    renderReward(num){
        this.ctx.fillStyle = "rgb(253 214 67)";
        this.ctx.strokeStyle = "rgb(178 98 18)";
        this.ctx.font = "42px Luckiest Guy";
        this.ctx.fillText(`+$${num}`, ...this.pos);
        this.ctx.strokeText(`+$${num}`, ...this.pos);

        let textMetrix = this.ctx.measureText(`+$${num}`);
        let textWidth = textMetrix.width;

        setTimeout( ()=> this.ctx.clearRect(this.pos[0], (this.pos[1] - 38), textWidth, 38), 
            (800 / this.loadSpeed));
    }
}

export default Reward