---
published: true
timestamp: '2024-01-24T12:45:34+0100'
post_number: 2
author: 'IllustrisJack'
title: 'One year of LTR development'
description: 'A general review of 2023'
---
# One year of LTR development
The last year of Limit Theory Redux development might not have had many flashy things to show off. But great progress has been made in different areas of the project. This post is dedicated to make this progress visible to everyone that follows the LTR development.

<br>
Lets start with the major milestones of the year 2023:

## Converting the C Engine to Rust
YES. We decided to convert the C engine released by Josh to Rust. But why? 'Rust is a blazingly fast...' - You always hear the same reasons for rewriting things in Rust. But why did we choose Rust and why do we think it will benefit the project? Rust is a pretty young but heavily growing ecosystem. In the last year of 2023, Rust scored an admiration score of 84,6% on the yearly [StackOverflow survey](https://survey.stackoverflow.co/2023/#section-admired-and-desired-programming-scripting-and-markup-languages), meaning that 84,6% of the people that voted, want to use Rust on their projects in the next year again. There is high interest in Rust, which is very positive for the ecosystem as a whole since if there are more developers interested in the language, more people will write libraries or support projects associated with Rust. This is something we might profit from at some time in the future, since the LTR project currently is very unique in utilizing Rust as its engine (as a library) while having LuaJIT handle all the game code which could attract potential contributors.
<br><br>
Rust also makes it easier to write memory-safe code, while keeping everything efficient and sound.

## Swapping out C libraries with Rust libraries
Since the engine has been converted to Rust we have been working on swapping out C/C++ Libraries with Rust libraries (crates). Some of these swaps are not fully functional yet, but most notably:

- Replaced the proprietary FMOD audio library with an open source rust equivalent: Kira audio library. 
- Replaced SDL2 with Winit for Window context creation
- Replaced the Bullet physics library with the Rapier physics library which should be more performant
- Added Glam math library

## Additional engine systems
### GUI
We have also started working on expanding some of the already existing engine systems. LTRs GUI library has seen some love in the last months but things like proper tooling & general performance passes are still WIP. We will work hard to get the GUI library to a state where everything we want to design or display can be displayed & configured easily in the future. The GUI is still in prototyping phase, but first we will implement the needed general functionality before getting to styling options of the GUI.

### Shaders
Minimal shader work has been done, though the nebula shader has seen some love allowing for more beautiful backgrounds: 

![NebulaImage](/img/LTR_NEBULA.png)
<center>
You can also compare the difference on 
  <a href="https://imgsli.com/MTgxODk1" target="__blank">
    imgsli
  </a>
</center>

## Gameplay Additions
Even though there is no real gameplay loop yet, there have been quite a bit of additions to the gameplay side of LTR. These include:
- Added a nice game-like startup mode
- Added a prototype settings page to let you pick gameplay and other options
- Added saving/loading of individual player settings from a user.ini file
- Added a basic economy & the ai for it
- Added basic piracy & the ai for it
- Added additional AI behaviours: Ships defend nearby ships, stations launch fighters if attacked, zones in space change danger level dependent on combat in the area and will create security jobs for zones that are "dangerous"
- Added an prototype heads-up display (HUD) overlay with multiple modes
- Added multiple ship hull sizes, component types, and enabled hulls to accept components
- Added a prototype of ship sensors
- Modified the star system creation code for future enhancement to support multiple connected systems
- Many small quality-of-life improvements
 
## Art & Music
Some new soundtracks were added, you can find them in the [LTR source code](https://github.com/Limit-Theory-Redux/ltheory/tree/main/res/sound/system/audio/music).
<br><br>
In the art department, mostly prototyping & concept art has been created so there is not much to show for now. But we are happy about the logo for Limit Theory Redux:

![LTR Logo](/img/LTR_LOGO.png)

## Limit Theory Launcher
The launcher is the easiest way to keep up to date with the latest nightly builds / development of LTR, especially for people that are not too familiar with git or do manual updating. It was written in Rust & Nuxt 3 (Vue3) using the [Tauri framework](https://tauri.app).

With the Limit Theory Launcher you can:

- Download & install Limit Theory Redux
- Checks for updates & update your game
- Easily access your game config via a button in the program

## Whats next?
In the next blog post we'll be adressing what things are planned and the challenges we are facing for 2024. Keep tuned!
<br><br>
*I'm sorry if this was too technical, sadly at this stage of development we are still building the foundation of the game and it's engine. While progress here might be exciting for programmers & scripters - the others might have to wait for more exciting posts which go deeper into gameplay systems. Thanks for reading anyway + i'd be happy about some feedback on the Discord!*





