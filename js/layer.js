import {createTile} from "./tile";

export function createLayer(width,height, tileArray, tileWidth, tileHeight)
{
    let layer = {};
    layer.width = width;
    layer.height = height;
    //layer.tiles = tileArray;
    let array = [tileArray.length];
    for(let i = 0; i < tileArray.length; i++)
    {
       // array[i] = createTile(tileWidth,tileHeight,);
    }
    layer.render = function(context,locx,locy)
    {

    };
    return layer;
}