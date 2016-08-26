var Game_Over = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('gameover', './assets/images/gameover.png');
    },

    create : function() {

        // Create button to start game similar to the main menu.
        this.add.button(0, 0, 'gameover', this.startGame, this);

        // Last Score Info.
        game.add.text(235, 350, "LAST SCORE", { font: "bold 16px sans-serif", fill: "#46c0f9", align: "center"});
        game.add.text(350, 348, score.toString(), { font: "bold 20px sans-serif", fill: "#fff", align: "center" });

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');

    }

};