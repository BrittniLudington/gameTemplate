
export function createTile(width,height,x,y,id)
{
    let tile = {};
    tile.width = width;
    tile.height = height;
    tile.x = x;
    tile.y = y;
    tile.id = id;

    tile.render = function(context)
    {

    };
    return tile;
}