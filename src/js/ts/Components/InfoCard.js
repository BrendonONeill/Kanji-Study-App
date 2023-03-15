import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function InfoCard() {
    return (_jsxs("div", { className: "p-[1rem] border-[5px] border-[#023E8A] dark:text-[white] dark:border-[#0BB744] rounded-[10px]", children: [_jsx("p", { className: "text-[1.4rem]", children: "This is the second draft of my kanji learning website. It still has many bugs but will be fixed later." }), _jsxs("ol", { children: [_jsx("li", { children: "The user will select which decks they want to test with and input the amount of cards they want to test." }), _jsx("li", { children: "The user will import their answers into the cards and try to quess the above kanji." }), _jsx("li", { children: "If the user correctly inputs the answer the card will turn green, if not the card wikk turn red and give the user another try." }), _jsx("li", { children: "The card will turn grey if the user gets the answer if the card is red." }), _jsx("li", { children: "Once the user is finished they will press the finished button and they will be given a score." })] }), _jsx("p", { className: "bg-[#023E8A] dark:bg-[#7824BC] text-white rounded-[10px] border-[3px] p-[0.5rem] mt-2", children: "The score is caluclated by the coloured cards, green (If you do get the answer correct first try) is 2 marks grey (If you dont get the answer first try) is 1 mark and red or blue is 0 marks." })] }));
}
export default InfoCard;
