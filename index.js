const content = [{
    "name": "SSB Kaio-ken",
    "preview_image": "https://i.dlpng.com/static/png/6827547_thumb.webp",
    "video": "https://www.youtube.com/embed/SxlaQKLcQFs",
    "description": "Super Saiyan Blue Kaio-ken (超サイヤ人ブルー界王拳 Sūpā Saiya-jin Burū Kaiōken, lit. 'Super Saiyan Blue: Fist of the King of the Worlds'),[1] also known as Super Saiyan God Super Saiyan: Kaio-ken[3] or simply Kaio-ken Blue,[5] is a technique which consists of using the Kaio-ken while transformed as a Super Saiyan Blue."
}, {
    "name": "SS God Evolved",
    "preview_image": "https://vignette.wikia.nocookie.net/lookout/images/9/9a/The_Grand_Dragon_Balls.png/revision/latest?cb=20141117012457",
    "video": "https://www.youtube.com/embed/qWAsFzdXmu0",
    "description": "Super Saiyan God SS Evolved (超サイヤ人ゴッドSS・進化 Sūpā Saiyajin Goddo SS・Shinka, lit. 'Super Saiyan God SS・ Evolution') is the power beyond Super Saiyan Blue,[9] and as such it is an empowered state of Super Saiyan Blue."
}, {
    "name": "Golden Frieza",
    "preview_image": "https://vignette.wikia.nocookie.net/lookout/images/9/9a/The_Grand_Dragon_Balls.png/revision/latest?cb=20141117012457",
    "video": "https://www.youtube.com/embed/MZogLdRgCe0",
    "description": "Golden Frieza (ゴールデンフリーザ Gōruden Furīza) is the Ultimate Evolution[3][7][4] (究極進化 Kyūkyoku Shinka) of the Frieza Race. It was first created and named by Frieza himself. This transformation is achieved by Frieza through vigorous training methods due to his obsessive need for revenge against Goku, as Frieza is a natural prodigy in terms of power, he never trained prior to his endeavor to defeat Goku. Unlike the other forms that are able to be used constantly and are for power-suppression, this form is an acquired, non-permanent transformation used to power up."
}, {
    "name": "Jiren",
    "preview_image": "https://vignette.wikia.nocookie.net/lookout/images/9/9a/The_Grand_Dragon_Balls.png/revision/latest?cb=20141117012457",
    "video": "https://www.youtube.com/embed/vnJjO0U24d8",
    "description": "Jiren (ジレン Jiren), also referred to as 'Jiren The Gray' (灰色のジレン Haiiro no Jiren), is a member of the Pride Troopers who participated in the Tournament of Power with the purpose of obtaining a wish from the Super Dragon Balls. He is an extraordinary powerful mortal in the multiverse who is even stronger than a Destroyer. He is a quiet and honorable fighter, who believes in strength and justice. He previously did not trust anyone and never considered teamwork at all during battle, opting to fight enemies single-handly, and almost always winning."
}, {
    "name": "Hit",
    "preview_image": "https://vignette.wikia.nocookie.net/lookout/images/9/9a/The_Grand_Dragon_Balls.png/revision/latest?cb=20141117012457",
    "video": "https://www.youtube.com/embed/ur5nYlLRHWA",
    "description": "Hit (ヒット Hitto), renowned as 'Never-Miss Hit' (百発百中のヒット Hyappatsu-hyakuchū no Hitto, lit. 'Hit the Infallible') and as the 'Legendary Hitman' (伝説の殺し屋 Densetsu no Koroshi-ya, lit. 'Legendary Assassin') is the legendary assassin of Universe 6. In addition, he also later on becomes the leader for Team Universe 6."
}, {
    "name": "Broly",
    "preview_image": "https://vignette.wikia.nocookie.net/lookout/images/9/9a/The_Grand_Dragon_Balls.png/revision/latest?cb=20141117012457",
    "video": "https://www.youtube.com/embed/8Dw7Wgdsb0k",
    "description": "Broly (ブロリー Burorī, lit. 'Broli') is the misguided antagonist of Dragon Ball Super: Broly. He is the latest of the Legendary Super Saiyans, a demonic warrior who appears every thousand years. Because of his extreme power, he was stranded on the planet Vampa by King Vegeta, where he was raised by his father until rescued years later by the Frieza Force."
}, {
    "name": "Gogeta",
    "preview_image": "https://vignette.wikia.nocookie.net/lookout/images/9/9a/The_Grand_Dragon_Balls.png/revision/latest?cb=20141117012457",
    "video": "https://www.youtube.com/embed/8Dw7Wgdsb0k",
    "description": "Gogeta (ゴジータ Gojīta) is the resulting fusion of Goku and Vegeta, when they perform the Fusion Dance properly. His voice is a dual voice that contains both Goku's and Vegeta's voices. Like his Potara Fusion counterpart, Vegito, he is regarded as one of the most powerful characters in the Dragon Ball franchise."
}];


function addCharacters() {
    const rows = content.map(character => {
        let div = document.createElement('div')
        div.classList.add('character')

        div.innerHTML = `
            <img class='character-image' src='${character.preview_image}'>
            
            <div>
                <p class='character-name'>${character.name}</p>
                <p class='character-description'>${character.description}</p>
            </div>

            <iframe 
                class='character-video'
                width="560" 
                height="315" 
                src='${character.video}'
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `
        return div
    })

    let root = document.getElementById('content')
    rows.forEach(row => root.appendChild(row))
}

window.addEventListener('DOMContentLoaded', addCharacters)