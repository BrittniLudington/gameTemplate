let keys = {};

/*
    38 == up
    37 == left
    40 == down
    39 == right
    32 == space
    p == 80
    esc == 27
    i == 73
*/

export const controls = 
{
    set : function()
    {
        window.addEventListener("keydown",function(e)
        {
            e = e || event;
            //console.log("key is " + e.key);
            var Kkey = e.keyCode;
            keys[Kkey] = true;//e.type == 'keydown';
            //console.log("key's " + Kkey + " log" + " is " + keys[Kkey]);
        }, true);
        
        window.addEventListener("keyup",function(event)
        {
            var Kkey = event.keyCode;
            keys[Kkey] = false;
            //console.log("key's" + Kkey + " log" + " is " + key[Kkey]);
        });
    },

    keyPressed : function(key)
    {
        return keys[key];
    },

    anyKeyPressed : function()
    {
        for(let key in keys)
        {
            if(keys[key] == true)
                return true;
        }
        return false;
    }
};