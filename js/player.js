import {controls} from './controls.js';

export const player =
{
    image : {},
    hitbox : {},
    moving: {},
    speed: 5,

    setUp: function()
    {
        // use default numbers for now
        controls.set();
        this.image = {
            width: 50,
            height: 50,
            x: 0,
            y: 0,
            color: "#191FD7"
        };
        this.hitbox = {
            width: 10,
            height: 10,
            x: 20,
            y: 20,
            color: "#00FF00"
        };

        this.moving = {
            right: false,
            left: false,
            up: false,
            down: false
        };

    },

    update: function()
    {
        if(controls.keyPressed(40))
        {
            this.image.y += this.speed;
            this.hitbox.y += this.speed;
        }
        if(controls.keyPressed(38))
        {
            this.image.y -= this.speed;
            this.hitbox.y -= this.speed;
        }
        if(controls.keyPressed(37))
        {
            this.image.x -= this.speed;
            this.hitbox.x -= this.speed
        }
        if(controls.keyPressed(39))
        {
            this.image.x += this.speed;
            this.hitbox.x += this.speed;
        }
    },

    render: function(context)
    {
        context.fillStyle = this.image.color;
        context.fillRect(this.image.x,this.image.y,this.image.width,this.image.height);

        context.fillStyle = this.hitbox.color;
        context.fillRect(this.hitbox.x,this.hitbox.y,this.hitbox.width,this.hitbox.height);
    }
}