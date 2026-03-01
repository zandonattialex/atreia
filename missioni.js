/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              LIBRO DELLE MISSIONI — missioni.js                  ║
 * ║                                                                  ║
 * ║  Modifica questo file per aggiungere, modificare o rimuovere    ║
 * ║  missioni. Ogni missione è un oggetto nell'array MISSIONI.       ║
 * ║                                                                  ║
 * ║  STRUTTURA DI UNA MISSIONE:                                      ║
 * ║  {                                                               ║
 * ║    titolo:   "Nome della missione",                              ║
 * ║    categoria: "main" | "secondaria" | "altra",  ← opzionale     ║
 * ║    tags: [                                                       ║
 * ║      { testo: "Principale",  classe: "tag-type"   },            ║
 * ║      { testo: "Rango 10",    classe: "tag-rank"   },            ║
 * ║      { testo: "Ishalgen",    classe: "tag-zone"   },            ║
 * ║      { testo: "Kinah ×500",  classe: "tag-reward" },            ║
 * ║      { testo: "Solo",        classe: "tag-group"  },            ║
 * ║    ],                                                            ║
 * ║    sezioni: [                                                    ║
 * ║      { titolo: "Descrizione",  contenuto: "<p>...</p>" },       ║
 * ║      { titolo: "Obiettivi",    contenuto: "<ul><li>…</li></ul>"},║
 * ║      { titolo: "Ricompense",   contenuto: "<p>...</p>" },       ║
 * ║    ],                                                            ║
 * ║    nota: "Nota personale in corsivo dorato — opzionale",        ║
 * ║  }                                                               ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const MISSIONI = [

  /* ════════════════════════════════════════════════════════════════
     ██  MAIN QUEST
  ════════════════════════════════════════════════════════════════ */

  {
    titolo:    "Le 3 Lacrime di Aion",
    categoria: "main",
    tags: [
      { testo: "Main Quest",     classe: "tag-type"  },
      { testo: "Pandemonium",    classe: "tag-zone"  },
      { testo: "In corso",       classe: "tag-group" },
    ],
    sezioni: [
      {
        titolo: "Committente",
        contenuto: `
          <p><strong>Lord Marchutan</strong> — <em>Pandemonium</em></p>
        `
      },
      {
        titolo: "Antefatto",
        contenuto: `
          <p>Un monaco veggente di fiducia ha visto le <strong>3 lacrime del dio Aion</strong>
          cadere su Atreia. Le lacrime generano <em>disordine magico</em> e da quando sono cadute
          i <strong>portali di teletrasporto non funzionano più</strong>.</p>
        `
      },
      {
        titolo: "Indizi su come trovarle",
        contenuto: `
          <p>Le lacrime sono probabilmente dei <strong>manufatti</strong> con una grande forza magica
          al loro interno. A contatto con il suolo magico di Atreia potrebbero aver reagito in maniera
          insolita, causando <em>distaccamenti del terreno</em> o altre forme di magia estranea.</p>
        `
      },
      {
        titolo: "✦ Cose Scoperte",
        contenuto: `
          <ul>
            <li>Le lacrime sono <strong>3 manufatti fisici</strong></li>
            <li>Da un libro di leggende ne avete visto una <strong>probabile raffigurazione</strong></li>
            <li>Al contatto con il terreno magico di Atreia generano <em>"interferenza magica"</em>,
                causando anche distruzione</li>
          </ul>
          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:0.6rem; justify-content:center;">
            <img src="https://i.imgur.com/ieDOTh5.png"
                 style="width:110px; border:1px solid #8b6030; border-radius:3px;"
                 alt="Lacrima 1" />
            <img src="https://i.imgur.com/aFCsmUd.png"
                 style="width:110px; border:1px solid #8b6030; border-radius:3px;"
                 alt="Lacrima 2" />
            <img src="https://i.imgur.com/ZKBDAxA.png"
                 style="width:110px; border:1px solid #8b6030; border-radius:3px;"
                 alt="Lacrima 3" />
          </div>
        `
      },
    ],
    nota: "I portali di teletrasporto sono ancora offline — spostarsi a piedi o a cavalcatura."
  },


  /* ════════════════════════════════════════════════════════════════
     ██  MISSIONI SECONDARIE
  ════════════════════════════════════════════════════════════════ */

  {
    titolo:    "Zev e l'Amico Catturato",
    categoria: "secondaria",
    tags: [
      { testo: "Secondaria",   classe: "tag-type"   },
      { testo: "Informazioni", classe: "tag-reward" },
    ],
    sezioni: [
      {
        titolo: "Richiesta",
        contenuto: `
          <p><strong>Zev</strong> vi ha chiesto di portargli informazioni riguardo a un suo
          <strong>amico imprigionato dagli Asmodian</strong>.</p>
        `
      },
      {
        titolo: "Ricompensa",
        contenuto: `
          <ul>
            <li>Informazioni riguardo alla <strong>Vestigia dei Templari</strong></li>
            <li>Informazioni riguardo all'<strong>Ascia di Ara</strong></li>
          </ul>
        `
      },
    ],
    // nota: ""   ← aggiungi note qui se necessario
  },

  {
    titolo:    "Lady Lumiel e il Calice del Silenzio",
    categoria: "secondaria",
    tags: [
      { testo: "Secondaria",  classe: "tag-type"   },
      { testo: "Altgard",     classe: "tag-zone"   },
      { testo: "3× Ceranium", classe: "tag-reward" },
    ],
    sezioni: [
      {
        titolo: "Richiesta",
        contenuto: `
          <p><strong>Lady Lumiel</strong> chiede di recuperare un oggetto magico chiamato
          <em>"Calice del Silenzio"</em>, custodito dai <strong>monaci di Altgard</strong>.</p>
          <p>Dai libri trovati in biblioteca avete scoperto la vera natura dell'oggetto e la
          sua collocazione attuale.</p>
        `
      },
      {
        titolo: "Ricompensa",
        contenuto: `
          <p>Accesso al luogo dove si trovano gli <strong>Shugo</strong> — costruttori magici
          in grado di lavorare il materiale che avete già in possesso:</p>
          <ul>
            <li><strong>3 pz di Ceranium</strong> (già in inventario)</li>
          </ul>
        `
      },
    ],
    nota: "Verificare con i monaci di Altgard prima di muoversi — potrebbero non cedere il calice volontariamente."
  },


  /* ════════════════════════════════════════════════════════════════
     ↓  AGGIUNGI NUOVE MISSIONI QUI SOPRA QUESTA RIGA  ↓
     Copia uno dei blocchi sopra e modificalo.
  ════════════════════════════════════════════════════════════════ */

];
