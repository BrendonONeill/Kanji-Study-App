export const handleKeyPress = (event, index:number)=> {
    if(event.code === "Enter")
    {
      let inputWord = event.target.value.trim();
      if(inputWord.toLowerCase() === kanji[index].english || inputWord === kanji[index].reading)
      {
        if(event.target.parentElement.style.backgroundColor === "rgb(138, 1, 1)")
        {
          setScore((prev: number) => prev + 1)
          event.target.parentElement.style.backgroundColor = "#D4D4D4"
        }
        else
        {
          setScore((prev: number) => prev + 2)
          event.target.parentElement.style.backgroundColor = "#018A26"
        }
        event.target.style.color = "#636363"
        event.target.style.backgroundColor = "#B0B0B0"
        event.target.disabled = true;
      }
      else
      {
        event.target.parentElement.style.backgroundColor = "#8A0101"
      }
    }
  };