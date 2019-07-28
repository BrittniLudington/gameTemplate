# Purpose

To have a generic template whenever I intend on making a game using Javascript.
This way I won't have to make everything from scratch every time.

# Requirements

Code must be able to deal with any input (tile size, number of layers, etc).
Must be efficient, ideally not using nested for loops as they are O(n^2)

# Working with tiled levels

## Level structure

A level will be divided up into arrays. Each array is a separate layer of the level. A level is made up of the following arrays at least:

- Background
- Ground (where the player collides with objects)
- Foreground
- Collision (invisible)

Arrays should be rendered back to front: background, ground, then foreground

## Rendering array

We only want to render the tiles that are inside the canvas. To do this, we will use a camera.


# TODO

## Make a file that gets level data from json file
## Make a file that holds layer data

Layer should hold

- Array of tiles
- width
- height
- render function that calls for tiles to be rendered