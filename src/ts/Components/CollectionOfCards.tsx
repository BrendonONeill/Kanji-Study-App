
import GlobalContext from "../GlobalContext";
import { useContext, useEffect } from "react";
import KanjiDeck from "./KanjiDeck";
import LetterDeck from "./LetterDeck";

function CollectionOfCards() {
    const GlobalItems = useContext(GlobalContext);
    useEffect(() => {
        if (GlobalItems) {
            GlobalItems.setMaxNumber(0)
        }
    }, [])

    return (
        <div className=" bg-blue-300 dark:bg-[#7B2CBF] w-[100%] p-[1rem] flex rounded-[5px] gap-2 flex-col my-[5rem]">

            {
                GlobalItems?.typeOfDeck === "kanji" || GlobalItems?.typeOfDeck === "" ?
                    <KanjiDeck GlobalItems={GlobalItems} />
                    : GlobalItems?.typeOfDeck === "hiragana" || GlobalItems?.typeOfDeck === "katakana" ? <LetterDeck GlobalItems={GlobalItems} type={GlobalItems?.typeOfDeck} /> : null
            }
        </div>
    )
}

export default CollectionOfCards