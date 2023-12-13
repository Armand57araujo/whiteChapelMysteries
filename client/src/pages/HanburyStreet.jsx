import AutoSave from '../components/AutoSave';
import TypingWithSound from '../components/TypingWithSound'
const HanburyDialogue = [
    {
        name: "...",
        dialogue: "*You arrive at {location} and make your way to {respective alley}, where you have sent word that you wish to speak with Patrica again regarding the murder nearby.*"
    },
    {
        name: "...",
        dialogue: "*No sooner had you arrived, did Patrica arrive to meet you*"
    },
    {
        name: "MC",
        dialogue: "Good evening, Miss Patrica."
    },
    {
        name: "Patrica",
        dialogue: "G-Good evenin’ sir"
    },
    {
        name: "...",
        dialogue: "*She’s visibly uncomfortable, more-than-likely due to your appearance*"
    },
    {
        name: "...",
        dialogue: "*Understandable considering the horrific case we are associated*"
    },
    {
        name: "MC",
        dialogue: "It’s been some time, I hope you’ve been well"
    },
    {
        name: "Patrica",
        dialogue: "Doin’ my best sir… considerin’"
    },
    {
        name: "...",
        dialogue: "*You nod understandingly*"
    },
    {
        name: "MC",
        dialogue: "Patrica, I’ve come to ask you more questions about that night… the night when you found…"
    },
    {
        name: "Patrica",
        dialogue: "{respective victim}"
    },
    {
        name: "MC",
        dialogue: "Yes…"
    },
    {
        name: "Patrica",
        dialogue: "….he’s come back…"
    },
    {
        name: "MC",
        dialogue: "I don’t wish to frighten you madam, when I say I do not believe he ever truly left."
    },
    {
        name: "MC",
        dialogue: "That is why I need to ask you everything I possibly can about that night again."
    },
    {
        name: "...",
        dialogue: "*She’s deeply troubled by what she remembers. But she musters her resolve and begins*"
    },
    {
        name: "Miss Cordelia",
        dialogue: "Y-yes, sir."
    },
    {
        name: "MC",
        dialogue: "Thank you, when you’re prepared madam"
    },
    {
        name: "...",
        dialogue: "*she takes a breath*"
    },
    {
        name: "Patrica",
        dialogue: "That night… I heard heated voices. A man and a woman… {respective victim}. She’d walked into that alley where they… where I… found her… and the gentleman followed her…"
    },
    {
        name: "MC",
        dialogue: "Can you describe him again?"
    },
    {
        name: "Patrica",
        dialogue: "Honestly sir he was an common enough lookin’ bloke… just one of those faces…"
    },
    {
        name: "MC",
        dialogue: "I understand… but any information might help…"
    },
    {
        name: "Patrica",
        dialogue: "…yes sir. He wasn’t very tall… about average height… light-hair… a slightly wider build"
    },
    {
        name: "MC",
        dialogue: "Good good… every detail helps"
    },
    {
        name: "Patrica",
        dialogue: "O-Ok"
    },
    {
        name: "...",
        dialogue: "*Visible fear takes hold of her features*"
    },
    {
        name: "...",
        dialogue: "*What came next was horrifying beyond measure*"
    },
    {
        name: "MC",
        dialogue: "*You place your hand on her shoulder, and give her a reassuring smile*"
    },
    {
        name: "MC",
        dialogue: "Take your time"
    },
    {
        name: "...",
        dialogue: "*She nods, then proceeds*"
    },
    {
        name: "Patrica",
        dialogue: "That’s when… that’s when I heard it… that horrible, sickenin’ sound… like a butcher cleavin’ through game."
    },
    {
        name: "Patrica",
        dialogue: "The man came runnin’ out… covered in blood, pale as a sheet… fleein’ quickly"
    },
    {
        name: "Patrica",
        dialogue: "I don’t know what took hold of me… but I had to know what happened… what was the sound?… what was all that blood?… was she ok?… my nightmares curse me at night for my curiosity to this day sir"
    },
    {
        name: "Patrica",
        dialogue: "There she was… bloodied from head to toe… torn open like… like… sir I’d never seen nothin so horrible in all my life"
    },
    {
        name: "MC",
        dialogue: "I know… believe me madam… I know"
    },
    {
        name: "...",
        dialogue: "*You pause as you see her trembling, you don’t know what to say…*"
    },
    {
        name: "MC",
        dialogue: "My sincerest apologies for having to question you on such an unpleasant matter… I beg your forgiveness in all this… and will leave you in peace"
    },
    {
        name: "...",
        dialogue: "*You turn to leave. But that’s when she grabs hold of your arm*"
    },
    {
        name: "Patrica",
        dialogue: "I-I… I can’t tell what was real and what is solely of my nightmares invention… what if it was real sir? What if it wasn’t a terror of my mind…"
    },
    {
        name: "MC",
        dialogue: "W-What… what are you— ?"
    },
    {
        name: "Patrica",
        dialogue: "The figure sir, that night, tall and loomin’ in the darkness… starin’ into me soul. It seemed almost... malformed… like a shadows meldin together in the dark, constantly shiftin."
    },
    {
        name: "MC",
        dialogue: "I… I understa—"
    },
    {
        name: "Patrica",
        dialogue: "It’s in the shadows! It’S iN ThE shADOwS!! IT’S IN THE SHADOWS!!!"
    },
    {
        name: "MC",
        dialogue: "I’m… I’m so sorry… so very sorry…"
    },
    {
        name: "Patrica",
        dialogue: "Let it end… please make it end…"
    },
    {
        name: "...",
        dialogue: "*Her pleading words echo to your core, deepening your resolve and determination*"
    },
    {
        name: "MC",
        dialogue: "I will end this… I *will* find him"
    },
    {
        name: "...",
        dialogue: "*She found a measure of calm in your words before she bid you farewell*"
    },
    {
        name: "...",
        dialogue: "*We should return to our office and go over everything we’ve learned so far*"
    }
]

const HanburyStreet = () => {
    return(
        <div className="text-white">
            <AutoSave />
            <img id="hanburyBG" src="assets/images/locations/hanbury-street.png"></img>
            <h1>
            <TypingWithSound
                    arr={HanburyDialogue}
                />
            </h1>
        </div>
    )
    };
    
    export default HanburyStreet;