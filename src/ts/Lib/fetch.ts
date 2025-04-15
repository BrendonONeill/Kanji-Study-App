
export async function fetchKanji() {
    let res = await fetch(`https://q8gs8gw0s8wwg0804wcw8ogo.brendons-projects.online/kanji`);
    let data = await res.json();
    return data.record;
}
