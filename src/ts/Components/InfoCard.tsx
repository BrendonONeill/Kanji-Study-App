function InfoCard() {
  return (
    <div className=" m-[0] md:m-[2rem]  p-[1rem] border-[5px] border-[#023E8A] dark:text-[white] dark:border-[#0BB744] rounded-[5px]">
      <p className="p-[1rem] bg-[#023E8A] dark:bg-[#7824BC] text-white rounded-[10PX] text-center font-bold text-[1.4rem] mb-[0.8rem]">How to Play</p>
      <ol>
        <li>first select which decks you would like to use within the game by selecting a number button.</li>
        <li>(If you would like to preview the decks select the preview decks button).</li>
        <li>Then input the amount of cards you would like to study from the random cards selected from the decks you have picked.</li>
        <li>To start the game click on the start game button.</li>
        <li>Cards will be generated on the page with kanji on top and an input on the bottom.</li>
        <li>Input your anwsers into the input boxes using Romaji, Kun'yomi or On'yomi (colour change explained below)</li>
        <li>Once you are happy with your answers select the finished button when you will see your percentage and collection of cards.</li>
      </ol>
      <p className="bg-[#023E8A] dark:bg-[#7824BC] text-white rounded-[10px] p-[1rem] mt-2"> When playing the game you might notice the cards have changed colour when inputing answers this is part of the scoring system. Each card is worth 2 points if you get the answer correct first try you get 2 points represented by green. If you make a mistake and then get the answer correct you get a grey card and 1 point, but if you dont answer or dont fill in a card this is worth 0 points.</p>
    </div>
  )
}

export default InfoCard
