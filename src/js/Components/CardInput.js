export const handleKeyPress = (event, index, kanji, setScore) => {
    if (event.code === "Enter") {
        let inputWord = event.target.value.trim();
        if (inputWord.toLowerCase() === kanji[index]?.romaji || kanji[index].onyomi.includes(inputWord) || kanji[index].kunyomi.includes(inputWord)) {
            if (event.target.parentElement.style.backgroundColor === "rgb(138, 1, 1)") {
                setScore((prev) => prev + 1);
                event.target.parentElement.style.backgroundColor = "#D4D4D4";
            }
            else {
                setScore((prev) => prev + 2);
                event.target.parentElement.style.backgroundColor = "#018A26";
            }
            event.target.style.color = "#636363";
            event.target.style.backgroundColor = "#B0B0B0";
            event.target.disabled = true;
        }
        else {
            event.target.parentElement.style.backgroundColor = "#8A0101";
        }
    }
};
