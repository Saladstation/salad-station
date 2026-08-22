function umwandeln() {
    let text = document.getElementById("eingabe").value.toLowerCase();

    // Doppelbuchstaben schützen
    text = text.replaceAll("ss", "ß");
    text = text.replaceAll("bb", "¤");
    text = text.replaceAll("nn", "§");

    const kombinationen = {
        "sch": "Ś",
        "ung": "Ŋ",
        "ver": "V",
        "ie": "Ï",
        "st": "Š",
        "er": "Ə",
        "ge": "G",
        "en": "Ɛ",
        "ei": "Æ",
        "ch": "Ç",
        "ck": "K",
        "be": "B",
        "au": "A"
    };

    // Längere Kombinationen zuerst
    const sortierteKombinationen = Object.entries(kombinationen)
        .sort((a, b) => b[0].length - a[0].length);

    for (const [suchtext, ersatz] of sortierteKombinationen) {
        text = text.split(suchtext).join(ersatz);
    }

    // Geschützte Doppelbuchstaben wiederherstellen
    text = text.replaceAll("ß", "ss");
    text = text.replaceAll("¤", "bb");
    text = text.replaceAll("§", "nn");

    // Ergebnis anzeigen
    document.getElementById("ergebnis").textContent = text;
}
