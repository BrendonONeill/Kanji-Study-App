
export async function fetchKanji() {
    let res = await fetch(`https://yko8kw06tyklhyhrgtrg.brendon-projects.blog/kanji`);
    let data = await res.json();
    return data.record;
}
