import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
function CardsSelection(idea) {
    let [pickedNumbers, setPickedNumbers] = useState([]);
    const test = (e, data) => {
        debugger;
        if (e.target.classList.contains("test")) {
            e.target.classList.remove("test");
            setPickedNumbers(prevState => (prevState.filter(p => p !== e.target.value)));
            idea.setMaxNumber(prev => prev - data[0][e.target.value].length);
        }
        else {
            e.target.classList.add("test");
            setPickedNumbers(prev => [...prev, Number(e.target.value)]);
            idea.setMaxNumber(prev => prev + data[0][e.target.value].length);
            console.log("This is the pickedNumbers: " + pickedNumbers);
        }
    };
    const maxCards = (max) => {
        idea.num(max);
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: " p-[2rem] flex gap-[1rem] justify-center", children: [_jsx("button", { value: 1, className: "p-[1.5rem] bg-[#0096C7] rounded-[10px] text-[white] font-bold", onClick: (event) => test(event, idea.data), children: "1" }), _jsx("button", { value: 2, className: "p-[1.5rem] bg-[#0096C7] rounded-[10px] text-[white] font-bold", onClick: (event) => test(event, idea.data), children: "2" })] }), _jsxs("form", { className: "max-w-[40%] mx-auto mt-2 p-[1rem] flex justify-center items-center", onSubmit: (e) => idea.random(e, idea.data, idea.number, pickedNumbers), children: [_jsx("input", { className: " border-[4px] rounded-[10px] border-[#023E8A] mx-[5px] w-[200px] p-[0.5rem]", type: "number", id: "number", placeholder: "1", min: 1, max: idea.maxNumber, onChange: (e) => idea.num(Number(e.target.value)) }), _jsxs("p", { className: " p-[1rem]", children: ["(Max ", idea.maxNumber, ")"] }), idea.maxNumber !== 0 ?
                        _jsx("button", { type: "submit", className: " p-[1rem] bg-[#D66218] text-[#fff] font-bold rounded-[10px] cursor-pointer ", children: "Generate Cards" }) : null] })] }));
}
export default CardsSelection;
