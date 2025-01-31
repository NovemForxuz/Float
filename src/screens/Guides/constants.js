import React from 'react';

import Med1 from '../../assets/images/med1.png';
import Med2 from '../../assets/images/med2.png';
import Med3 from '../../assets/images/med3.png';

import Sleep1 from '../../assets/images/sleep1.png';
import Sleep2 from '../../assets/images/sleep2.png';
import Sleep3 from '../../assets/images/sleep3.png';
import Sleep4 from '../../assets/images/sleep4.png';

import Mov from '../../assets/images/mov-1.png';
import Move1 from '../../assets/images/move1.png';
import Move2 from '../../assets/images/move2.png';
import Move3 from '../../assets/images/move3.png';

import Focus1 from '../../assets/images/focus-1.png';
import Focus2 from '../../assets/images/focus2.png';
import Focus3 from '../../assets/images/focus3.png';
import Focus4 from '../../assets/images/focus4.png';

import Badge1 from '../../assets/images/Badge1.png';
import Badge2 from '../../assets/images/Badges2.png';
import Badge3 from '../../assets/images/Badges3.png';

export const types = {
    meditate: "Meditate",
    sleep: "Sleep",
    move: "Move",
    focus: "Focus"
  }
  
export const Guides = [
    // Meditation Videos

    {
        title : '5 Minute Meditation You Can Do Anywhere',
        duration : 5,
        done : false,
        source : 'inpok4MKVLM',
        description : 'In just 5 minutes you can reset your day in a positive way.',
        type: 'meditate',
        thumbnail: Med3,
        key: 0,
        id: 'ME001'
    },

    {
        title : '5 Minute Meditation Before Sleeping',
        duration : 5,
        done : false,
        source : '2K4T9HmEhWE',
        description : 'A 5 minute guided meditation to be used before you sleep.',
        type: 'meditate',
        thumbnail: Med2,
        key: 1,
        id: 'ME002'
    },

    {
        title : '10 Minute Intro to Meditation',
        duration : 10,
        done : false,
        source : 'U9YKY7fdwyg',
        description : '10 Minute Meditation For Beginners.',
        type: 'meditate',
        thumbnail: Med1,
        key: 2,
        id: 'ME003'
    },

    {
        title : '10 Minute Meditation To Start The Day',
        duration : 10,
        done : false,
        source : 'ENYYb5vIMkU',
        description : 'This easy 10-minute meditation is the perfect way to start your day off right.',
        type: 'meditate',
        thumbnail: Med2,
        key: 3,
        id: 'ME004'
    },

    {
        title : '10 Minute Calming Meditation',
        duration : 10,
        done : false,
        source : 'ZToicYcHIOU',
        description : 'Mindfulness meditation to powerfully restore and re-connect with the present.',
        type: 'meditate',
        thumbnail: Med1,
        key: 4,
        id: 'ME005'
    },

    {
        title : '5 Minute Meditation Music',
        duration : 5,
        done : false,
        source : '_6_akBtKZdE',
        description : '5 Minutes of Meditation Music for positive energy and relaxation.',
        type: 'meditate',
        thumbnail: Med3,
        key: 5,
        id: 'ME006'
    },

    {
        title : '5 Minute Meditation To Improve Focus',
        duration : 5,
        done : false,
        source : 'zSkFFW--Ma0',
        description : 'Short 5 minute guided meditation designed to help you improve your focus.',
        type: 'meditate',
        thumbnail: Med2,
        key: 6,
        id: 'ME007'
    },

    // Sleep Videos

    {
        title : '10 Minute Meditation You Can Do Anywhere',
        duration : 10,
        done : false,
        source : 'aEqlQvczMJQ',
        description : 'If you are feeling restless, listen to this guided meditation to ease your mind and body into falling asleep.',
        type: 'sleep',
        thumbnail: Sleep4,
        key: 7,
        id: 'SE001'
    },

    {
        title : '9 Minute How To Sleep Better',
        duration : 9,
        done : false,
        source : 'qlxDoq9vohk',
        description : 'If you are feeling restless, listen to this guided meditation to ease your mind and body into falling asleep.',
        type: 'sleep',
        thumbnail: Sleep2,
        key: 8,
        id: 'SE002'
    },

    {
        title : '5 Minute Tips for Better Sleep',
        duration : 5,
        done : false,
        source : 't0kACis_dJE',
        description : 'In order to sleep better, and wake up early, you need to learn about the circadian rhythm - and why it’s important to wake up at a regular time.',
        type: 'sleep',
        thumbnail: Sleep3,
        key: 9,
        id: 'SE003'
    },

    {
        title : '2 Minute Hacks to Help You Sleep Better',
        duration : 2,
        done : false,
        source : 'aamF_jW-jGM',
        description : 'Entrepreneur Dave Asprey explains why eating raw honey, using incandescent or halogen lights, and modifying your smartphone’s LED display can help you sleep better.',
        type: 'sleep',
        thumbnail: Sleep2,
        key: 10,
        id: 'SE004'
    },

    {
        title : '8 Minute Video How To Improve Your Sleep',
        duration : 8,
        done : false,
        source : 'lRp5AC9W_F8',
        description : 'In this book, the first of its kind written by a scientific expert, Professor Matthew Walker explores twenty years of cutting-edge research to solve the mystery of why sleep matters',
        type: 'sleep',
        thumbnail: Sleep4,
        key: 11,
        id: 'SE005'
    },

    {
        title : '7 Minute How To Fall Asleep',
        duration : 7,
        done : false,
        source : 'EiYm20F9WXU',
        description : 'Cant fall asleep? These sleep tips are better than ASMR!',
        type: 'sleep',
        thumbnail: Sleep2,
        key: 12,
        id: 'SE006'
    },

    // Move Videos

    {
        title : '15 Minute Mindful Mobility To Move & Feel Better',
        duration : 16,
        done : false,
        source : '2cg2yiaY8qo',
        description : 'This is a 15-minute restorative practice emphasizing wrist & spine mobility...also slowing your roll for a few minutes to be mindful of your movement and check-in with your body. ',
        type: 'move',
        thumbnail: Move3,
        key: 13,
        id: 'MO001'
    },

    {
        title : '3 Minute Improve Your Cardiovascular System',
        duration : 3,
        done : false,
        source : '0yXaIsVfwzo',
        description : 'In this video we discuss how to improve your cardiovascular system, which can improve your endurance, overall health, and overall fitness.',
        type: 'move',
        thumbnail: Move1,
        key: 14,
        id: 'MO002'
    },

    {
        title : '6 Minute Increase Mobility & Flexibility',
        duration : 7,
        done : false,
        source : '4zBnM_uozXM',
        description : 'Do These 6 Exercises to Increase Your Mobility & Flexibility',
        type: 'move',
        thumbnail: Move2,
        key: 15,
        id: 'MO003'
    },

    {
        title : '9 Minute Mobility Routine',
        duration : 9,
        done : false,
        source : 'TSIbzfcnv_8',
        description : 'By the end of the video, you’ll have a personalized mobility routine based on the body areas you could use the most work.',
        type: 'move',
        thumbnail: Move1,
        key: 16,
        id: 'MO004'
    },

    {
        title : '8 Minute Mobility Exercises To Improve Joints',
        duration : 8,
        done : false,
        source : 'Ru1hYrwCZJo',
        description : 'The BEST Mobility Exercises For Each Joint!',
        type: 'move',
        thumbnail: Mov,
        key: 17,
        id: 'MO005'
    },

    // Focus Videos

    {
        title : '6 Minute How To Stay Focused Longer',
        duration : 7,
        done : false,
        source : 'O-ETErmpVxI',
        description : 'How To Stay Focused Longer',
        type: 'focus',
        thumbnail: Focus2,
        key: 18,
        id: 'FO001'
    },

    {
        title : '4 Minute Psychological Tips On Staying Focused',
        duration : 4,
        done : false,
        source : '8RV_vYsHceQ',
        description : 'So how exactly do you stay focused? Here are 11 ways. Focus better. Focus on your goals. Get focused. Be more Focused. Here we go. ',
        type: 'focus',
        thumbnail: Focus3,
        key: 19,
        id: 'FO002'
    },
    
    {
        title : '6 Minute Ways to Build Focus And Concentration',
        duration : 6,
        done : false,
        source : 'a-KCZ1sghLY',
        description : 'If your studying gets interrupted often by distractions or the temptation to multi-task, try these methods of building your ability to focus.',
        type: 'focus',
        thumbnail: Focus4,
        key: 20,
        id: 'FO003'
    },

    {
        title : '5 Minute How to Improve Focus And Concentration',
        duration : 6,
        done : false,
        source : 'MJwGovFSGb8',
        description : 'How To Improve Focus and Concentration',
        type: 'focus',
        thumbnail: Focus4,
        key: 21,
        id: 'FO004'
    },

    {
        title : '4 Minute Improve Your Attention Span & Focus',
        duration : 4,
        done : false,
        source : 'KYa9mUwrwAU',
        description : 'Our attention spans are getting shorter. We’re distracted 𝘢 𝘭𝘰𝘵. More than we realize really.',
        type: 'focus',
        thumbnail: Focus2,
        key: 22,
        id: 'FO005'
    },

    {
        title : '9 Minute How To Improve Memory, Focus & Concentration',
        duration : 10,
        done : false,
        source : 'nTYA-9OqEao',
        description : 'This video outlines some proven ways to increase your brain power using simple brain training exercises!.',
        type: 'focus',
        thumbnail: Focus3,
        key: 23,
        id: 'FO006'
    },

    {
        title : '3 Minute Yoga To Improve Focus & Awareness',
        duration : 3,
        done : false,
        source : '6tH5RIG0foU',
        description : 'Watch this video as Rashmi shows you simple and easy natural methods to get rid of this major problem by way of yoga that helps you to focus and concentrate and make you more aware.',
        type: 'focus',
        thumbnail: Focus4,
        key: 24,
        id: 'FO007'
    },

    {
        title : '2 Minute How to Improve Focus at Work ',
        duration : 2,
        done : false,
        source : 'FI-oPZnPRqI',
        description : 'How to Improve Your Concentration and Focus at Work.',
        type: 'focus',
        thumbnail: Focus1,
        key: 25,
        id: 'FO008'
    },
];

export const badges =  {
    Level1: Badge3,
    Level2: Badge1,
    Level3: Badge2,
  }
  