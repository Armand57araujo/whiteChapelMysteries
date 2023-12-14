import TypingWithSound from '/src/components/TypingWithSound.jsx'
import AutoSave from '../components/AutoSave';

const WharfDialogue = [
    {
        name: "...",
        dialogue: "*You arrive at the Wharf, and begin asking around for {fisherman}. Eventually you find yourself at his vessel and make your way over. A seafaring gentleman is cleaning his nets when you approach.*"
    },
    {
        name: "MC",
        dialogue: "{fisherman} I presume?"
    },
    {
        name: "{fisherman}",
        dialogue: "Yes… can I help you sir?"
    },
    {
        name: "MC",
        dialogue: "That’s what I’m here to determine."
    },
    {
        name: "...",
        dialogue: "*He is visibly distressed by your presence*"
    },
    {
        name: "...",
        dialogue: "*Could this be him?*"
    },
    {
        name: "...",
        dialogue: "*Could he be The Ripper?*"
    },
    {
        name: "MC",
        dialogue: "It’s come to my attention that you were present at the scene of one of The Ripper’s killings..."
    },
    {
        name: "{fisherman}",
        dialogue: "T-There… there was nothing to tell or come forward about… I-I…I didn’t see anything… I swear to you sir"
    },
    {
        name: "MC",
        dialogue: "I’m not sure I believe that sir… but I digress. What were you doing there at such an hour?"
    },
    {
        name: "{fisherman}",
        dialogue: "I…. I…. I can’t…. I can’t say… sir…"
    },
    {
        name: "MC",
        dialogue: "You’ll answer me now good sir, while my altruistic mood persists"
    },
    {
        name: "{fisherman}",
        dialogue: "I… I was… I was looking for… for someone…"
    },
    {
        name: "MC",
        dialogue: "And who was it exactly you were looking for? Hmmm? Was it one of the victims?"
    },
    {
        name: "{fisherman}",
        dialogue: "N-NO SIR! I swear to you on my mother’s grave I had no part in that depravity… I swear it!"
    },
    {
        name: "MC",
        dialogue: "Then who were you looking for?"
    },
    {
        name: "...",
        dialogue: "*He turned pale as a sheet*"
    },
    {
        name: "MC",
        dialogue: "And do they know anything about what has been happening?"
    },
    {
        name: "...",
        dialogue: "*If possible, he turned paler then ever before*"
    },
    {
        name: "...",
        dialogue: "*Your eyes narrow*"
    },
    {
        name: "MC",
        dialogue: "You know who it is… you know who’s responsible don’t you?"
    },
    {
        name: "...",
        dialogue: "*His eyes grow wide with fear at your words*"
    },
    {
        name: "MC",
        dialogue: "Tell me who it is… tell me now!"
    },
    {
        name: "{fisherman}",
        dialogue: "Y-Y…you can’t… I can’t… sh… sh…"
    },
    {
        name: "MC",
        dialogue: "TELL ME WHO IT IS NOW !!!"
    },
    {
        name: "...",
        dialogue: "*At the moment of your explosive outburst, he grabs firm hold of your shoulders*"
    },
    {
        name: "{fisherman}",
        dialogue: "Listen to me… Turn back, abandon this course, only doom awaits you at its end, I implore you good sir… do not inquire further"
    },
    {
        name: "...",
        dialogue: "*His voice was hoarse with fear as he continued*"
    },
    {
        name: "{fisherman}",
        dialogue: "If this is the course you wish to take… than I have to ask. If you have not already, study each scene where the victims were murdered… maybe even speak to witnesses again. Find the pieces, and you will find who you are looking for. If you survive… come speak to me again… we will have much to discuss..."
    },
    {
        name: "MC",
        dialogue: "And you do not speak now because?"
    },
    {
        name: "{fisherman}",
        dialogue: "You would think me mad… only if you see for yourself will you understand… only then will it become clear what is happening"
    },
    {
        name: "...",
        dialogue: "*With that final insight, he climbed back aboard his vessel, and descended into the cabin*"
    },
    {
        name: "...",
        dialogue: "*You watch him depart, a mixture of confusion and concern*"
    },
    {
        name: "...",
        dialogue: "*Just what was all of that?*"
    },
    {
        name: "...",
        dialogue: "*We should return to our office and go over everything we’ve learned so far*"
    }
]


const Wharf = () => {
    return(
        <div className="text-white">
            <AutoSave />
            <img id="wharfBG" src="assets/images/locations/wharf.png"></img>
            <h1>
            <TypingWithSound
                    arr={WharfDialogue}
                />
            </h1>
        </div>
    )
    };
    
    export default Wharf;