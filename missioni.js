/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              LIBRO DELLE MISSIONI — missioni.js                  ║
 * ║                                                                  ║
 * ║  Modifica questo file per aggiungere, modificare o rimuovere    ║
 * ║  missioni. Ogni missione è un oggetto nel array MISSIONI.        ║
 * ║                                                                  ║
 * ║  STRUTTURA DI UNA MISSIONE:                                      ║
 * ║  {                                                               ║
 * ║    titolo: "Nome della missione",                                ║
 * ║    tags: [                                                       ║
 * ║      { testo: "Principale", classe: "tag-type" },               ║
 * ║      { testo: "Rango 10",   classe: "tag-rank" },               ║
 * ║      { testo: "Ishalgen",   classe: "tag-zone" },               ║
 * ║      { testo: "Kinah ×500", classe: "tag-reward" },             ║
 * ║      { testo: "Solo",       classe: "tag-group" },              ║
 * ║    ],                                                            ║
 * ║    sezioni: [                                                    ║
 * ║      {                                                           ║
 * ║        titolo: "Descrizione",       ← intestazione sezione      ║
 * ║        contenuto: "<p>Testo...</p>" ← HTML libero               ║
 * ║      },                                                          ║
 * ║      { titolo: "Obiettivi", contenuto: "<ul><li>...</li></ul>" },║
 * ║      { titolo: "Ricompense", contenuto: "<p>...</p>" },         ║
 * ║    ],                                                            ║
 * ║    nota: "Nota personale opzionale in corsivo dorato",           ║
 * ║  }                                                               ║
 * ║                                                                  ║
 * ║  CLASSI TAG DISPONIBILI:                                         ║
 * ║   tag-type   → sfondo rosso scuro  (tipo missione)              ║
 * ║   tag-rank   → sfondo oro          (livello / rango)            ║
 * ║   tag-zone   → sfondo marrone      (zona / regione)             ║
 * ║   tag-reward → sfondo verde scuro  (ricompensa)                 ║
 * ║   tag-group  → sfondo blu scuro    (gruppo / solo)              ║
 * ║                                                                  ║
 * ║  Nel campo "contenuto" puoi usare HTML:                          ║
 * ║   <p>paragrafo</p>                                               ║
 * ║   <ul><li>voce</li></ul>  per elenchi puntati                   ║
 * ║   <strong>grassetto</strong>                                     ║
 * ║   <em>in rosso / enfasi</em>                                     ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const MISSIONI = [

  // ─────────────────────────────────────────────────────────────────
  //  ESEMPIO 1 — missione principale
  // ─────────────────────────────────────────────────────────────────
  {
    titolo: "Il Risveglio dell'Ombra",
    tags: [
      { testo: "Principale",   classe: "tag-type" },
      { testo: "Rango 5",      classe: "tag-rank" },
      { testo: "Ishalgen",     classe: "tag-zone" },
      { testo: "Exp ×1200",    classe: "tag-reward" },
      { testo: "Solo",         classe: "tag-group" },
    ],
    sezioni: [
      {
        titolo: "Descrizione",
        contenuto: `
          <p>Le forze oscure si stanno radunando nei pressi del <strong>Lago delle Lacrime</strong>.
          Morheim ha riportato avvistamenti di creature corrotte che emergono dalla nebbia al tramonto.</p>
          <p>Raggiungi il luogo e scopri la fonte della corruzione prima che si espanda verso il villaggio.</p>
        `
      },
      {
        titolo: "Obiettivi",
        contenuto: `
          <ul>
            <li>Parla con <strong>Balthazar</strong> al villaggio di Akarios</li>
            <li>Raccogli <em>5 Frammenti di Tenebra</em> dai Shadeling</li>
            <li>Distruggi il <strong>Cristallo del Risveglio</strong> nel sito antico</li>
            <li>Ritorna da Balthazar per la ricompensa</li>
          </ul>
        `
      },
      {
        titolo: "Ricompense",
        contenuto: `
          <p><strong>Exp:</strong> 1.200 &nbsp;|&nbsp; <strong>Kinah:</strong> 500 &nbsp;|&nbsp; <strong>Oggetto:</strong> Stivali dell'Ombra (Raro)</p>
        `
      },
    ],
    nota: "Portare pozioni di cura extra — i Shadeling usano maledizioni che riducono la rigenerazione HP."
  },

  // ─────────────────────────────────────────────────────────────────
  //  ESEMPIO 2 — missione secondaria
  // ─────────────────────────────────────────────────────────────────
  {
    titolo: "Rifornimenti per il Fronte",
    tags: [
      { testo: "Secondaria",   classe: "tag-type" },
      { testo: "Rango 8",      classe: "tag-rank" },
      { testo: "Altgard",      classe: "tag-zone" },
      { testo: "Kinah ×800",   classe: "tag-reward" },
      { testo: "Gruppo 3",     classe: "tag-group" },
    ],
    sezioni: [
      {
        titolo: "Descrizione",
        contenuto: `
          <p>La guarnigione di <strong>Fort Bakarma</strong> è a corto di provviste.
          Le rotte di approvvigionamento sono state tagliate dalle incursioni degli Elyos.</p>
        `
      },
      {
        titolo: "Obiettivi",
        contenuto: `
          <ul>
            <li>Scorta il <strong>Carro dei Rifornimenti</strong> da Morheim fino al forte (punti di controllo: A, B, C)</li>
            <li>Elimina i <em>Cecchini Elyos</em> che bloccano la strada (0/5)</li>
            <li>Consegna i rifornimenti al <strong>Comandante Vrath</strong></li>
          </ul>
        `
      },
      {
        titolo: "Note Strategiche",
        contenuto: `
          <p>Il punto più critico è il <strong>Passo di Krug</strong> al punto di controllo B:
          solitamente sono presenti 2–3 cecchini in posizione elevata sulla rupe sinistra.</p>
        `
      },
      {
        titolo: "Ricompense",
        contenuto: `
          <p><strong>Exp:</strong> 3.800 &nbsp;|&nbsp; <strong>Kinah:</strong> 800 &nbsp;|&nbsp;
          <strong>Oggetto:</strong> Armatura di Bakarma (Normale) + Titolo <em>"Soccorritore del Forte"</em></p>
        `
      },
    ],
    nota: "Missione a tempo! Il carro si distrugge se subisce troppi danni — assegnare un tank a corpo a corpo fisso sul carro."
  },

  // ─────────────────────────────────────────────────────────────────
  //  ESEMPIO 3 — missione caccia
  // ─────────────────────────────────────────────────────────────────
  {
    titolo: "La Purga dei Lupi di Ghiaccio",
    tags: [
      { testo: "Caccia",       classe: "tag-type" },
      { testo: "Rango 3",      classe: "tag-rank" },
      { testo: "Pandemonium",  classe: "tag-zone" },
      { testo: "Exp ×600",     classe: "tag-reward" },
      { testo: "Solo",         classe: "tag-group" },
    ],
    sezioni: [
      {
        titolo: "Descrizione",
        contenuto: `
          <p>I <strong>Lupi di Ghiaccio</strong> di Ishalgen si sono riprodotti in modo incontrollato
          nelle pianure meridionali. La loro presenza mette a rischio i viaggiatori e le carovane.</p>
        `
      },
      {
        titolo: "Obiettivi",
        contenuto: `
          <ul>
            <li>Uccidi <strong>10 Lupi di Ghiaccio</strong> (0/10)</li>
            <li>Porta la <em>Zanna del Capobranco</em> come prova all'Anziano Laimos</li>
          </ul>
        `
      },
      {
        titolo: "Ricompense",
        contenuto: `
          <p><strong>Exp:</strong> 600 &nbsp;|&nbsp; <strong>Kinah:</strong> 200 &nbsp;|&nbsp; <strong>Oggetto:</strong> Mantello di Pelliccia (Base)</p>
        `
      },
    ],
    // nota: omessa — campo opzionale
  },

  // ═════════════════════════════════════════════════════════════════
  //  ↓ AGGIUNGI LE TUE MISSIONI QUI SOPRA QUESTA RIGA ↓
  //  Copia uno degli esempi sopra, incollalo qui e modificalo.
  // ═════════════════════════════════════════════════════════════════

];
