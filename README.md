![logo](https://github.com/BrendonONeill/Kanji-Study-App/blob/draft-version1/src/public/images/kanjiApp.svg "App Logo")
# Kanji-Study-App
This is an app where users can study kanji by selecting their selection of cards that they must try guess the right kanji by spelling out the kanji. 
This project is a more personal project but also helps me to use typescript and tailwind within a bigger project to help me get a better understanding of them within a production build.

## Tools

* React  
* Typescript  
* Tailwind-CSS  
* Json file stored online 

## Deployment
The site is deployed on [Render](https://kanji-study.onrender.com/)

## Preview

Few Screenshots of the app.

<img src="https://github.com/BrendonONeill/Kanji-Study-App/blob/draft-version1/src/public/images/kanji1.JPG" width="500">
<img src="https://github.com/BrendonONeill/Kanji-Study-App/blob/draft-version1/src/public/images/kanji3.JPG" width="500">
<img src="https://github.com/BrendonONeill/Kanji-Study-App/blob/draft-version1/src/public/images/kanji5.JPG" width="500">

Here is the random cards function I wrote I really enjoyed mixing and matching ideas to create it.

```javascript
const random = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent, pickedNumbers: number[] ) => {
    e.preventDefault();
    if(GlobalItems !== null )
    {
      let cardsNumber = 0
      if(GlobalItems.number > GlobalItems.maxNumber)
       {
         cardsNumber = GlobalItems.maxNumber;
       }
       else
       {
         cardsNumber = GlobalItems.number
       }
      GlobalItems.setGameCards([]);
      let collectionOfCards: object[] = []
      for(let s = 0; s < pickedNumbers.length; s++ )
      {
        let test: object[] = GlobalItems?.data[0][pickedNumbers[s]];
        collectionOfCards.push(test);
      }
      let sortKanji = collectionOfCards.flat(Infinity);
      let sortedCards: object[] = []
      GlobalItems.setCardsAmount(cardsNumber * 2)
      for(let i=0; i < cardsNumber; i++)
      {
      let sortSize: number = sortKanji.length;
      let pick = Math.floor(Math.random() * sortSize);
      
      sortedCards.push(sortKanji[pick])
      sortKanji.splice(pick,1)
      }
     GlobalItems?.setGameCards(gameCards => [...gameCards, ...sortedCards]);
    } 
  }
  ```
  

## Lessons learned
Working with TypeScript can be rough as I really didnt like typing things as I knew my code worked but TypeScript was never happy with me. 
 
Working with tailwind was an interesting idea as i'm so use to writing my own CSS it was fun to experiment it's limits but it did make design my page fast and might add it to more projects down the line. 


## Idea from these sites
I liked how they tested out your hiragana and katakana on this sight and i wanted a simular one for kanji.  
[https://kana-quiz.tofugu.com/](https://kana-quiz.tofugu.com/)

On this site I do most my kanji study and wanted a bit different way to study from the usual flash card design. 
[https://www.wanikani.com/](https://www.wanikani.com/)

## Potential future features
* Adding more decks
* Demo section
* Hiragana and Katakana section

## Working on
* Cleaning up UI
* Making the site more accessible
* Fixing Bugs
