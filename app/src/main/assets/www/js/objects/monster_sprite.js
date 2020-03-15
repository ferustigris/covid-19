Crafty.c('MonsterSprite', {
    init: function() {
        this.requires("monster");
        this.requires("SpriteAnimation");

        this.animate("walk_left",  0, 2, 5);
        this.animate("walk_right", 0, 1, 5);
        this.animate("walk_up",    0, 3, 5);
        this.animate("walk_down",  0, 0, 5);
        
        var self = this;
        this.bind("Moved", function(e) {
            if(self.x > e.x) {
                if(!self.isPlaying("walk_left")) {
                    self.stop().animate("walk_left", 18, 10);
                };
            };
            if(self.x < e.x) {
                if(!self.isPlaying("walk_right")) {
                    self.stop().animate("walk_right", 18, 10);
                };
            };
            if(self.y > e.y) {
                if(!self.isPlaying("walk_up")) {
                    self.stop().animate("walk_up", 18, 10);
                };
            };
            if(self.y < e.y) {
                if(!self.isPlaying("walk_down")) {
                    self.stop().animate("walk_down", 18, 10);
                }
            }
        });

    },

    clear: function() {
        this.removeComponent('monster');
        this.removeComponent('MonsterSprite');
        this._visible = false;
        this.destroy();
    }
});