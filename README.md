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
Working with TypeScript can be rough as I really didn't like typing things as I knew my code worked but TypeScript was never happy with me. 
 
Working with tailwind was an interesting idea as i'm so use to writing my own CSS it was fun to experiment its limits me but it did make designing my page fast and might add it to more projects down the line. 


## Idea from these sites
I liked how they tested out your hiragana and katakana on this site and I wanted a simular one for kanji.  
[https://kana-quiz.tofugu.com/](https://kana-quiz.tofugu.com/)

On this site I do most of my kanji study and wanted a bit different way to study from the usual flash card design. 
[https://www.wanikani.com/](https://www.wanikani.com/)

## Potential future features
* Adding more decks
* Demo section
* Hiragana and Katakana section
* Adding some commonly used words

## Working on
* Cleaning up UI and maybe a bit of a re-design
* Making the site more accessible
* Fixing Bugs
* Cleaning up core Typescript to be more readable
* Generating sentences that need to be translated  
* Adding more Kanji
* Adding section for hiragana & katakana


## Brainstorming concept 

I am working on a system where the user will read a text in english and input the japanese translation, but I want to give the user some leeway as sometimes you just misspell or press the wrong key and I wanted to create a system to check the error percentage.

This is where I came across the levenshtein distance algorithm I know it's not the best way to compare 2 strings of text but it was a start:

```javascript

const levenshteinDistance = (s, t) => {
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
      arr[i] = [i];
      for (let j = 1; j <= s.length; j++) {
        arr[i][j] =
          i === 0 ? j : Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1));
      }
    }
    return arr[t.length][s.length];
  };

```

This would compare the data from the application to the text from the user and see the minimum changes it requires to match, then I would get a percent of the error by dividing the returned value by the largest string and multiplying it by 100.



```javascript

  function calculateErrorPercentage(s1, s2) {
    const distance = levenshteinDistance(s1, s2);
    const maxLength = Math.max(s1.length, s2.length);
    return (distance / maxLength) * 100;
}

```

But then I remembered that Japanese can be written in kanji where 車 and in hiragana as くるま both mean car so I would have to convert the kanji to hiragana before testing so I am still researching packages to help with this concept.
 


