const bildZuordnung = {
    "Ś": "sch_20260822145739.png",
    "Ŋ": "ung_20260822145925.png",
    "V": "ver_20260822145941.png",
    "Š": "st_20260822150029.png",
    "Ə": "er_20260822150004.png",
    "G": "ge_20260822150123.png",
    "Ɛ": "en_20260822150017.png",
    "Æ": "ei_20260822150040.png",
    "Ï": "ie_20260822150052.png",
    "Ç": "ch_20260822150103.png",
    "K": "ck_20260822150113.png",
    "B": "be_20260822145953.png",
    "A": "au_20260822150205.png",

    "a": "a_20260822144857.png",
    "b": "b_20260822144910.png",
    "c": "c_20260822144937.png",
    "d": "d_20260822144951.png",
    "e": "e_20260822145003.png",
    "f": "f_20260822145015.png",
    "g": "g_20260822145028.png",
    "h": "h_20260822145042.png",
    "i": "i_20260822145052.png",
    "j": "j_20260822145107.png",
    "k": "k_20260822145123.png",
    "l": "l_20260822145141.png",
    "m": "m_20260822145152.png",
    "n": "n_20260822145204.png",
    "o": "o_20260822145217.png",
    "p": "p_20260822145609.png",
    "q": "q_20260822145622.png",
    "r": "r_20260822145650.png",
    "s": "s_20260822145703.png",
    "t": "t_20260822145716.png",
    "u": "u_20260822145727.png",
    "v": "v_20260822145805.png",
    "w": "w_20260822145818.png",
    "x": "x_20260822145828.png",
    "y": "y_20260822145839.png",
    "z": "z_20260822145851.png",

    "ä": "ä_20260822145902.png",
    "ö": "ö_20260822145912.png",
    "ü": "ü_20260822145752.png"
};

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
