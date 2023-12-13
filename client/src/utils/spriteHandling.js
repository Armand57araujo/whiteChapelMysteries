const handleSpeakingSprite = (name) => {
    switch(name){
        case "MC": return "assets/images/detective/sprite.png";
        case "Chloe": return 'assets/images/woman1/sprite.png';
        case "{woman#2 name}": return 'assets/images/woman2/sprite.png';
        case "{woman#3 name}": return 'assets/images/woman3/sprite.png';
        case "{woman#4 name}": return 'assets/images/woman4/sprite.png';
        case "{fisherman}": return 'assets/images/fisherman/sprite.png';
        default: return;
    }
};

export default handleSpeakingSprite;