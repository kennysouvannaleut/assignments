let GameManger = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        thisSetFight();
    },
    resetPlayer:function(classType) {
        switch (classType) {
        case " ":
            player = new playe(classType, 200, 0, 200, 100, 50);
        break;     
        case " ":
            player = new playe(classType, 100, 0, 100, 150, 200);
        break;
        case " ":
            player = new playe(classType, 200, 0, 50, 200, 100);
        break;
        }
    }
}
