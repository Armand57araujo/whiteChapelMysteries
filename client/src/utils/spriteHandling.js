const handleSpeakingSprite = (name) => {
    switch(name){
        case "Mac": return "assets/images/detective/sprite.png";
        case "Chloe": return 'assets/images/Chloe/sprite.png';
        case "Patrisha": return 'assets/images/patrisha/sprite.png';
        case "Priya": return 'assets/images/Priya/sprite.png';
        case "Sofia": return 'assets/images/Sofia/sprite.png';
        case "Edmonten Xaviar": return 'assets/images/fisherman/sprite.png';
        default: return;
    }
};

export default handleSpeakingSprite;