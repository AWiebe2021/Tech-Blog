const { Post } = require('../models');

const postdata = [
  {	
    title:	"No! Alderaan is peaceful. We have no weapons. You can't possibly",
    post_content:	"You're all clear, kid. Let's blow this thing and go home! You don't believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time!",
    user_id:	10
    },	
    {	
    title:	"The Force is strong with this one. I have you now.",
    post_content:	"He is here. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. Partially, but it also obeys your commands. I find your lack of faith disturbing.",
    user_id:	8
    },	
    {	
    title:	"Don't underestimate the Force.",
    post_content:	"A tremor in the Force. The last time I felt it was in the presence of my old master. Hokey religions and ancient weapons are no match for a good blaster at your side, kid. Hokey religions and ancient weapons are no match for a good blaster at your side, kid.",
    user_id:	1
    },
    {	
    title:	"He is here.",
    post_content:	"Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you. What!?",
    user_id:	4
    },	
    {	
    title:	"Your eyes can deceive you. Don't trust them",
    post_content:	"Partially, but it also obeys your commands. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Ye-ha! Oh God, my uncle. How am I ever gonna explain this?",
    user_id:	7
    },
    {	
    title:	"Ye-ha!",
    post_content:	"I call it luck. As you wish. Your eyes can deceive you. Don't trust them. He is here. Your eyes can deceive you. Don't trust them. I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan",
    user_id:	4
    },	
    {	
    title:	"But with the blast shield down, I can't even see! How am I supposed to fight?",
    post_content:	"Remember, a Jedi can feel the Force flowing through him.ÿWhat good is a reward if you ain't around to use it?ÿBesides, attacking that battle station ain't my idea of courage.ÿIt's more like?suicide.",
    user_id:	1
    },	
    {	
    title:	"You mean it controls your actions?",
    post_content:	"Hokey religions and ancient weapons are no match for a good blaster at your side, kid. I'm trying not to, kid. The plans you refer to will soon be back in our hands. Alderaan? I'm not going to Alderaan. I've got to go home. It's late, I'm in for it as it is.",
    user_id:	1
    },	
    {	
    title:	"Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.",
    post_content:	"But with the blast shield down, I can't even see! How am I supposed to fight? You mean it controls your actions? I care. So, what do you think of her, Han? I call it luck. What!? In my experience, there is no such thing as luck.",
    user_id:	9
    },	
    {	
    title:	"Still, she's got a lot of spirit.",
    post_content:	"What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more likeƒ??suicide. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me.",
    user_id:	5
    },	
    {	
    title:	"I find your lack of faith disturbing.",
    post_content:	"I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan-- I need your help, Luke. She needs your help. I'm getting too old for this sort of thing.",
    user_id:	10
    },	
    {	
    title:	"Look, I can take you as far as Anchorhead",
    post_content:	"I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me.",
    user_id:	1
    },	
    {	
    title:	"The Force is with him.",
    post_content:	"Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. Still, she's got a lot of spirit. I don't know, what do you think?",
    user_id:	8
    },	
    {	
    title:	"You're all clear, kid.",
    post_content:	"The plans you refer to will soon be back in our hands. I find your lack of faith disturbing. I'm trying not to, kid. You mean it controls your actions? I suggest you try it again, Luke. This time, let go your conscious self and act on instinct.",
    user_id:	3
    },	
    {	
    title:	"ÿI need your help, Luke",
    post_content:	"I'm trying not to, kid. But with the blast shield down, I can't even see! How am I supposed to fight? What?! Oh God, my uncle. How am I ever gonna explain this? You don't believe in the Force, do you? Obi-Wan is here. The Force is with him.",
    user_id:	3
    },	
    {	
    title:"Red Five standing by.",
    post_content:	"No! Alderaan is peaceful. We have no weapons. You can't possiblyƒ?? Dantooine. They're on Dantooine. You are a part of the Rebel Alliance and a traitor! Take her away! But with the blast shield down, I can't even see! How am I supposed to fight?",
    user_id:	7
    },	
    {	
    title:"Don't be too proud of this technological terror you've constructed.",
    post_content:	"You mean it controls your actions? The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. But with the blast shield down, I can't even see! How am I supposed to fight?",
    user_id:	6
    },	
    {	
    title:	"I expect to be well paid. I'm in it for the money.",
    post_content:	"The plans you refer to will soon be back in our hands. You don't believe in the Force, do you? The Force is strong with this one. I have you now. Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.",
    user_id:	4
    },	
    {	
    title:	"Your eyes can deceive you. Don't trust them.",
    post_content:	"Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. What?! Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.",
    user_id:	6
    },	
    {	
    title:	"We have no weapons.",
    post_content:	"Remember, a Jedi can feel the Force flowing through him. Escape is not his plan. I must face him, alone. Remember, a Jedi can feel the Force flowing through him. In my experience, there is no such thing as luck.",
    user_id:	7
    }	
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
