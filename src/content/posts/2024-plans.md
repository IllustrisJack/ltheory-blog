---
published: true
timestamp: '2024-02-12T19:12:39-0500'
post_number: 3
author: 'Flatfingers'
title: 'Limit Theory Redux Development: Next Steps'
description: 'LTR development plans for 2024'
---
# A New Year of LTR Development
In our previous blog, we discussed some of the progress that we've made toward adapting the final version of Josh Parnell's Limit Theory development project into a playable game we're calling Limit Theory Redux (LTR).
<br><br>
Now we'd like to look ahead. What's next for LTR? How do we get from where we are now to a playable game that captures the spirit of what Josh described in his Kickstarter pitch?

## 2024 Development Plans:
2023 was a year of reconstructing the engine code and layering some basic playability structure onto the beautiful world-generation code Josh created. There are, very roughly, three more phases of development to go:

1. Gameplay framework and services
2. Gameplay features and controls
3. Connections, details, ease-of-use, and general polishing

## Support Systems Needed
In 2024 we will develop the gameplay support systems that connect the engine services to the player-touchable gameplay features. Some of these support systems will be:

- Completion of the user interface functionality, followed by initial versions of the many UI screens and overlays
- Complete and consistent saving/loading of resources and world state
- Good-looking procedural generation of visible objects (ships, stations, planets, asteroids)
- Enhanced generation of local star systems (full-sized and with objects spawned in reasonable places)
- Initial generation of universe containing many connected local star systems
- Level-of-detail management of assets and processes across multiple star systems
- Structuring gameplay systems into tactical (local), operational (sector), and strategic (universe) levels of play
- Creating the low-level management systems for the Factions and Projects gameplay features
- Extending Factions and Projects from local to fleet to strategic levels of play
- Focusing Factions and Projects on combat, economics, exploration, and social/political fun
- Creating triggers for dynamic music and audio effects
- Optimizing and redesigning as needed so that performance is maintained as new systems are added
- Develop a structure/process for packaging post-v1.0 mods so that they don't interfere with each other
<br>
Will most people consider all these things as exciting to work on as building gameplay features? Not really (although for the right person it can be very satisfying). But it's necessary. These systems are vital to a deep simulation game that responds in interesting ways when you poke it, which has always been a critical element of the Limit Theory concept.
<br><br>
So if we can get basic versions of most of these support services developed in 2024, we will have accomplished the necessary framework on which we can build a playable, enjoyable Limit Theory Redux game. At this point, anyone willing to learn the Lua programming language can help us build the features of the Limit Theory game we've long wanted.

## Ongoing Challenges:
In addition to the technical difficulty of designing and coding the middleware systems described above, there are some project-level challenges we'll need to address along the way:

- Volunteer effort: No one person is paying for or dictating decisions, so differences of opinion can be frustrating.
- More engine changes: The engine code is still changing, including finishing the user interface functions, so the platform is not 100% stable yet.
- Middleware versus features: Most people would rather build the (fun) visible gameplay features, but we really do need those support systems.
<br>
We've been able to navigate all these challenges so far. That's not a guarantee of future success, but being aware of these challenges should -- I hope! -- enable us to overcome them.
<br><br>
Overall, if we can maintain the progress in 2024 that we've made up through 2023, by year's end we should all be enjoying a Limit Theory Redux that is ready to be finished in 2025 into a true Limit Theory-style game.