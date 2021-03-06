const gameScenes  = [
  {
    id: 1,
    text: 'As you walk down the overgrown path you can’t believe you let your friends talk you into this. You think to yourself, this place looks like it’s falling down, you don’t care if it’s haunted you don’t really want to go in there, but you’re a teenager and you can’t have your friends thinking you’re scared. As you step onto the porch you hear a noise behind you. You turn slightly. The entrance is now to your left the way back to your right.',
    options: [
      {
        text: 'Go in.',
        nextText: 2
      },
      {
        text: 'Turn around and run away (screaming like crazy if applicable).',
        nextText: 1.1
      }
    ]
  },
  {
    id: 1.1,
    text: 'A freakish horse-headed monster that reminds you of the Minotaur from Greek mythology is running down the path neighing and screaming in your general direction.', 
    options: [
      {
        text: 'Go in.',
        nextText: 2
      },
      {
        text: 'Turn around and run away (screaming like crazy if applicable).',
        nextText: 1.2
      }
    ]
  },
  {
    id: 1.2,
    text: 'Game Over! You’ve died a freakish horsey death!',
    options: [
      {
        text: 'Restart Game',
        nextText: -1
      }
    ]
  },
  {
    id: 2,
    text:'You walk through the door and it close all by itself behind you. You check the doorknob and it appears to be locked with no way to open it. It’s a musty room with coat hooks in front of you and a small desk to the left to your right and in front of you by the coat hooks you can see the darkened entrances to other rooms.',
    options:[
      {
        text: 'Investigate the small desk.',
        nextText: 2.1
      },
      {
        text: 'Go through door by coat hooks.',
        nextText: 2.2
      },
      {
        text: 'Go through first door on the right.',
        nextText: 2.2
      },
      {
        text: 'Go through first door on the right.',
        nextText: 2.2
      },
    ]
  },
  {
    id: 2.1,
    text: 'Ontop of the small desk is a candlestick with a candle placed in it. After a quick search through the drawers you have found a small book of matches. You turn slightly, observing what you can see through the doorways. To your left appears to be a small study directly in front of you are the doors to what seems to be a fair sized kitchen and living room.',
    options:[
      {
        text: 'Search Study',
        nextText: 3
      },
      {
        text: 'Search Living Room',
        nextText: 2.2
      },
      {
        text: 'Search Kitchen',
        nextText: 2.2
      }
    ]
  },
  {
    id: 2.2,
    text:'Cold hands reach out from the darkness dragging you deeper into the house, just before everything goes black you hear the faint sound of neighing.',
    options: [
      {
        text: 'Struggle to get away',
        nextText: 1.2
      },
      {
        text: 'Give up. Coming here was a dumb idea to begin with.',
        nextText: 1.2
      }
    ]
  },
  {
    id: 3,
    text: 'As you walk into the study you see a writing desk with chair, and several bookshelves are the dominant furnishing in the room. You continue walking in until you’re standing with the desk to your left, in front of you is the door to the living room.',
    options: [
      {
        text: 'Search desk.',
        nextText: 3.1
      },
      {
        text: 'Search bookshelves.',
        nextText: 3.2
      },
      {
        text: 'Go into the living room.',
        nextText: 2.2
      },
      {
        text: 'Go back the way you came.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 3.1,
    text:'After searching through the contents of the desk, you find it’s mostly rubbish. The one thing you find of interest is a revolver with the inscription “Property of Col. Algernon Mustard” engraved on the barrel. You are now facing door you came through, with the living room to your left.',
    options: [
      {
        text: 'Search bookshelves.',
        nextText: 3.2
      },
      {
        text: 'Go into the living room.',
        nextText: 4
      },
      {text: 'Go back the way you came.',
      nextText: 2.2
      }
    ]
  },
  {
    id: 3.2,
    text: 'You find nothing of interest. The desk is still on your left.',
    options: [
      {
        text: 'Search desk.',
        nextText: 3.1
      },
      {
        text: 'Search bookshelves.',
        nextText: 3.2
      },
      {
        text: 'Go into the living room.',
        nextText: 2.2
      },
      {
        text: 'Go back the way you came.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 4,
    text: 'You step though the doorway to the living room. As you look around you see the entrance to the kitchen and dining area to you right, in front of you is a moldy old living room set, and to your left is a set of stairs with something laying across the bottom step.',
    options: [
      {
        text: 'Continue into the living room.',
        nextText: 2.2
      },
      {
        text: 'Go into the kitchen.',
        nextText: 2.2
      },
      {
        text: 'Investigate the stairs.',
        nextText: 5
      },
      {
        text: 'Go back the way you came.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 5,
    text: 'You bend over peering closer with the candle providing light, and find a neatly coiled bundle of rope. You continue up the stairs to the second floor. A hallway stretches out ahead of you with three doors: one is directly in front of you, one is on the right, and the final door is on the left.',
    options: [
      {
        text: 'Go back downstairs.',
        nextText: 2.2
      },
      {
        text: 'Go in the door on the right.',
        nextText: 2.2
      },
      {
        text: 'Go in the door in front of you.',
        nextText: 2.2
      },
      {
        text: 'Go in the door on the left.',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'After walking through the door you find yourself inside a bedroom decorated in an odd shade of purple. There is a bed directly in front of you covered in decades old bedding, to the right is a chest of drawers, and to the left is an old dresser with a wrench and a book on top of it.',
    options: [
      {
        text: 'Go back the way you came.',
        nextText: 2.2
      },
      {
        text: 'Investigate the bed.',
        nextText: 2.2
      },
      {
        text: 'Investigate the chest of drawers.',
        nextText: 2.2
      },
      {
        text: 'Investigate the dresser.',
        nextText: 6.1
      }
    ]
  },
  {
    id: 6.1,
    text: 'After a brief investigation the wrench seems to rusty to be of any use, but the book proves more interesting. On the cover it reads “Property of Prof. Edgar Plum” and after turning a few pages you realize that the book is a journal. You go on to read about a murder that seems to have happened in this house years ago. You are now facing the dresser, the door to the hallway is to your left, the bed to your right, and the dresser is behind you.',
    options: [
      {
        text: 'Go back into hallway.',
        nextText: 6.2
      },
      {
        text: 'Investigate the bed.',
        nextText: 2.2
      },
      {
        text: 'Investigate the chest of drawers.',
        nextText: 2.2
      },
      {
        text: 'Investigate the dresser.',
        nextText: 6.1
      }
    ]
  },
  {
    id: 6.2,
    text: 'You exit back in to the hallway to your left is the door at the end of the hall, the stairs are to your right, and there is another door right in front of you.',
    options: [
      {
        text: 'Door on left.',
        nextText: 7
      },
      {
        text: 'Go back into the room.',
        nextText: 2.2
      },
      {
        text: 'Door in front of you.',
        nextText: 2.2
      },
      {
        text: 'Go down the stairs.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 7,
    text: 'You walk into another bedroom this one all decked out in green. In front of you is a bed, and to the left is a small writing table sitting beneath one of the boarded up windows.',
    options: [
      {
        text: 'Go back into the hallway.',
        nextText: 2.2
      },
      {
        text: 'Investigate the bed.',
        nextText: 2.2
      },
      {
        text: 'Investigate the table.',
        nextText: 7.1
      }
    ]
  },
  {
    id: 7.1,
    text: 'On the table you find many pieces of paper in various states of deterioration and a dagger with an inscription on the blade reading, “Property of Rev. John Greene.” On one of the pieces of paper you can just make out the words, “I don’t think any of us are ever getting out of this cursed house. We’ve all been locked in here and one of us is a killer. I’m betting my stipend on Ophelia in the kitchen with the pipe.” You hear a noise from one of the other bedrooms, so you put your back to the wall with the door to your left, the bed to your right, and the table across the room in front of you.',
    options: [
      {
        text: 'Go back into the hallway.',
        nextText: 7.2
      },
      {
        text: 'Investigate the bed.',
        nextText: 2.2
      },
      {
        text: 'Investigate the table.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 7.2,
    text: 'You exit back in to the hallway at the other end of the hall is the stairway, to your right is the purple room, behind you is the green room, to you’re left is the last room connected to the hall.',
    options: [
      {
        text: 'Go into the last room.',
        nextText: 8
      },
      {
        text: 'Go into the purple room.',
        nextText: 2.2
      },
      {
        text: 'Go into the green room.',
        nextText: 2.2
      },
      {
        text: 'Go down the stairs.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 8,
    text: 'You find yourself in a bedroom done all in shades of red. This is also the largest bedroom you’ve seen so far, to your right is a large four poster bed, in front of you is a red velvet chaise, to the left you see an old fashioned wardrobe, and behind you is the exit out to the hallway. ',
    options: [
      {
        text: 'Go back into the hallway.',
        nextText: 2.2
      },
      {
        text: 'Investigate the bed.',
        nextText: 2.2
      },
      {
        text: 'Investigate the wardrobe.',
        nextText: 8.1
      },
      {
        text: 'Investigate the chaise.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 8.1,
    text: 'Inside of the old wardrobe you find several dress in various shades of red and various states of decay. One which is a darker shade than the others still has a tag in it. Embroidered onto the tag are the words, “Property of Josephine Scarlett.” You are now facing the wardrobe, the bed is behind you, the chaise is to your right, and the door to the hall is to your left.',
    options: [
      {
        text: 'Go back into the hallway.',
        nextText: 8.2
      },
      {
        text: 'Investigate the bed.',
        nextText: 2.2
      },
      {
        text: 'Investigate the wardrobe.',
        nextText: 2.2
      },
      {
        text: 'Investigate the chaise.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 8.2,
    text: 'You exit back out to the hallway. The red room is behind you, the green room is to your right the door to the purple room is across the hall in front of you, and the stairs are at the opposite end of the hall from the green room on your left. Didn’t you hear a sound up here somewhere? Oh well, it was probably just a squirrel.',
    options: [
      {
        text:'Go into the green room.',
        nextText: 2.2
      },
      {
        text:'Go into the purple room.',
        nextText: 2.2
      },
      {
        text:'Go into the red room.',
        nextText: 2.2
      },
      {
        text:'Go down the stairs.',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'You walk down the stairs back into the living room, which is much the same as last time you were here. There’s a tattered old living room set to your left, the kitchen is in front of you, the first door on the right leads back to the study, and the second door to the right leads to the foyer.',
    options: [
      {
        text: 'Investigate the kitchen.',
        nextText: 2.2
      },
      {
        text: 'Investigate the living room.',
        nextText: 9.1
      },
      {
        text: 'Investigate the study.',
        nextText: 2.2
      },
      {
        text: 'Investigate the foyer.',
        nextText: 2.2
      },
      {
        text: 'Go back upstairs.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 9.1,
    text: 'You walk further into the living room looking carefully at the once tasteful furniture. Sticking out from between the cushions of the sofa is an envelope. Upon further inspection you see that a note is still inside and on the front is one word “Orchid.” ',
    options: [
      {
        text: 'Continue',
        nextText: 9.2
      }
    ]
  },
  {
    id: 9.2,
    text: 'You carefully take the note out and find it is still legible. It says, “We know it was you who murdered Dr. Black and locked us all in here. You’re crazy if you think you can take us out one by one. The game is over.” and it is signed simply “Henrietta Peacock.” The kitchen is now on your left, the stairs to your right and the doors leading to the study and foyer are facing you.',
    options: [
      {
        text: 'Investigate the kitchen.',
        nextText: 10
      },
      {
        text: 'Investigate the living room.',
        nextText: 2.2
      },
      {
        text: 'Investigate the study.',
        nextText: 2.2
      },
      {
        text: 'Investigate the foyer.',
        nextText: 2.2
      },
      {
        text: 'Go back upstairs.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 10,
    text: 'In the dim light of your candle you almost don’t see it until you’re right on top of it. It’s a skeleton wearing once fine clothing. The cause of death is pretty obvious even in this advanced state of decay, your pretty sure it has something to do with the bullet hole in the skull.',
    options: [
      {
        text: 'Continue.',
        nextText: 10.1
      }
    ]
  },
  {
    id: 10.1,
    text: 'On the left side of the body you notice an old leather handbag. After a quick search you find a driver’s license identifying her as Dr. Ophelia Orchid, and in the left most pocket of the handbag you find a key that looks like it will fit the front door. The way out is to your left.',
    options: [
      {
        text: 'Leave while you can',
        nextText: 11
      },
      {
        text: 'Investigate the kitchen.',
        nextText: 2.2
      },
      {
        text: 'Investigate the living room.',
        nextText: 2.2
      },
      {
        text: 'Investigate the study.',
        nextText: 2.2
      },
      {
        text: 'Investigate the foyer.',
        nextText: 2.2
      },
      {
        text: 'Go back upstairs.',
        nextText: 2.2
      }
    ]
  },
  {
    id: 11,
    text: 'CONGRATULATIONS!!! YOU WIN, YOU HAVE SUCCESSFULLY ESCAPED THE HOUSE!!!',
    options: [
      {
        text: 'Replay!',
        nextText: 1
      }
    ]
  }
]