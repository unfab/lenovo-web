import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  sl: {
    translation: {
      navbar: {
        services: "Storitve",
        references: "Reference",
        about: "O nas",
        contact: "Kontakt",
        cta: "Stopite v stik"
      },
      hero: {
        title: "Računovodski servis Koper",
        subtitle1: "Zanesljivo računovodstvo, ki ",
        subtitleHighlight: "razume vaš posel.",
        stats: {
          years: "Let<br/>Izkušenj",
          clients: "Zadovoljnih<br/>Strank"
        },
        desc: "Z našim podjetjem v Kopru ponujamo strokovno vodenje poslovnih knjig in davčno svetovanje na celotni Obali in širše. Več kot 15 let zanesljive podpore za s.p. in d.o.o.",
        cta: "Spoznajte naše storitve"
      },
      trust: {
        title: "Zaupajo nam (več kot 150+ strank)"
      },
      about: {
        subtitle: "O nas",
        title: "Računovodski servis Lenova ima vse lastnosti, ki jih mora imeti dober računovodski servis:",
        desc: "Verjamemo v strokovnost in red. Naš cilj je zagotoviti najvišjo raven storitev in poskrbeti za varnost ter rast vašega poslovanja. Zato pri nas veljajo naslednja načela:",
        list: [
          "Smo poslovno uspešni in poslujemo stabilno",
          "Imamo širok nabor strank",
          "Izvajamo najcelovitejše, najzahtevnejše in raznovrstne računovodske storitve",
          "Naš kader je strokoven in se neprestano izobražuje",
          "Imamo sklenjeno zavarovanje poklicne odgovornosti za zaščito uporabnika",
          "Vse stranke obravnavamo individualno in jih obveščamo o zakonskih spremembah"
        ]
      },
      services: {
        subtitle: "Naše Storitve",
        title: "Vse kar potrebujete za brezskrbno poslovanje",
        desc: "Nudimo strokovne storitve, ki vam omogočajo, da se osredotočite na rast vašega posla, medtem ko mi poskrbimo za vse ostalo.",
        s1: {
          title: "Računovodstvo",
          desc: "Natančno vodenje poslovnih knjig za s.p. in d.o.o. Priprava zaključnih računov, obračun DDV in strateško davčno svetovanje po meri vaše dejavnosti.",
          l1: "Optimizacija davkov",
          l2: "Digitalno poslovanje"
        },
        s2: {
          title: "Kadrovske storitve",
          desc: "Celovito urejanje kadrovske administracije. Obračun plač, priprava pogodb o zaposlitvi, prijavljanje delavcev in vodenje potnih nalogov.",
          l1: "Obračun plač in prispevkov",
          l2: "Urejanje potnih nalogov"
        },
        s3: {
          title: "Svetovanje & Ustanavljanje družb",
          desc: "Poleg poslovanja v Sloveniji vam preko naše poslovalnice v <strong class='font-bold'>Umagu</strong> nudimo tudi poslovno svetovanje in virtualno pisarno na Hrvaškem.",
          l1: "Ustanavljanje družb (SLO in HR)",
          l2: "Virtualna pisarna (Tudi v Umagu)"
        }
      },
      contact: {
        title: "Stopite v stik z nami",
        desc: "Z več kot 15 letnimi izkušnjami in več kot 150 strankami smo prava izbira. Pogovorimo se o tem, kako lahko razbremenimo vašo administracijo.",
        email: "E-pošta",
        addressTitle: "Sedež podjetja",
        addressLines: "Ankaranska cesta 5c<br/>6000 Koper, Lenova d.o.o.",
        branchTitle: "Poslovalnica",
        branchLines: "Umag, Hrvaška",
        form: {
          secure: "Zavarovano",
          name: "Ime in priimek / Podjetje",
          email: "E-poštni naslov",
          message: "Vaše sporočilo ali povpraševanje",
          button: "Pošljite povpraševanje",
          sending: "Pošiljam varno...",
          success: "Vaše sporočilo je bilo uspešno in varno poslano. Kmalu vas bomo kontaktirali.",
          errorName: "Ime mora vsebovati med 2 in 100 znakov.",
          errorMessage: "Sporočilo mora vsebovati med 10 in 2000 znakov.",
          errorEmail: "Prosimo vnesite veljaven e-poštni naslov.",
          errorSpam: "Prosimo počakajte nekaj časa pred ponovnim pošiljanjem (anti-spam zaščita)."
        }
      },
      footer: {
        desc: "Zanesljiv partner z več kot 15 leti izkušenj in več kot 150 zadovoljnimi strankami.",
        links: "Hitre povezave",
        contact: "Kontakt & Lokacija",
        hours: "Delovni čas",
        hoursLines: {
          w: "Ponedeljek - Petek",
          wt: "09:00 - 15:00",
          e: "Sobota, Nedelja",
          et: "Zaprto"
        },
        data: "Podatki podjetja",
        bank: "Bančni računi (TRR)",
        privacy: "Pravilnik o zasebnosti",
        terms: "Pogoji poslovanja",
        rights: "Vse pravice pridržane."
      },
      cookies: {
        title: "Spoštujemo vašo zasebnost",
        desc: "Uporabljamo piškotke za izboljšanje vaše izkušnje in analitiko. Z nadaljnjo uporabo soglašate z našo",
        policy: "politiko zasebnosti",
        accept: "Sprejmi vse",
        decline: "Zavrni nebistvene"
      },
      notfound: {
        title: "Stran ne obstaja",
        desc: "Žal strani, ki jo iščete, nismo našli. Morda je bila premaknjena ali pa sploh nikoli ni obstajala.",
        back: "Nazaj na prvo stran"
      }
    }
  },
  en: {
    translation: {
      navbar: {
        services: "Services",
        references: "References",
        about: "About Us",
        contact: "Contact",
        cta: "Get in Touch"
      },
      hero: {
        title: "Accounting Services Koper",
        subtitle1: "Reliable accounting that ",
        subtitleHighlight: "understands your business.",
        stats: {
          years: "Years of<br/>Experience",
          clients: "Satisfied<br/>Clients"
        },
        desc: "Based in Koper, we offer professional bookkeeping and tax advisory services across the entire Coastal region and beyond. Over 15 years of reliable support for sole traders and companies.",
        cta: "Explore our services"
      },
      trust: {
        title: "Trusted by 150+ clients"
      },
      about: {
        subtitle: "About Us",
        title: "Lenova Accounting has all the qualities of a great accounting firm:",
        desc: "We believe in expertise and order. Our goal is to provide the highest level of service and ensure the safety and growth of your business. These are the principles we follow:",
        list: [
          "We are financially stable and successful",
          "We serve a wide range of clients",
          "We provide the most comprehensive and demanding accounting services",
          "Our staff is professional and continuously trained",
          "We hold professional liability insurance to protect our clients",
          "We treat every client individually and keep them informed of regulatory changes"
        ]
      },
      services: {
        subtitle: "Our Services",
        title: "Everything you need for worry-free business",
        desc: "We offer professional services that let you focus on growing your business while we take care of the rest.",
        s1: {
          title: "Accounting",
          desc: "Accurate bookkeeping for sole traders and companies. Preparation of annual reports, VAT returns and strategic tax advisory tailored to your business.",
          l1: "Tax optimisation",
          l2: "Digital accounting"
        },
        s2: {
          title: "HR Services",
          desc: "Comprehensive HR administration management. Payroll processing, employment contracts, employee registration and travel expense management.",
          l1: "Payroll & contributions",
          l2: "Travel expense management"
        },
        s3: {
          title: "Advisory & Company Formation",
          desc: "In addition to Slovenia, through our office in <strong class='font-bold'>Umag</strong> we also offer business advisory and virtual office services in Croatia.",
          l1: "Company formation (SLO & HR)",
          l2: "Virtual office (Also in Umag)"
        }
      },
      contact: {
        title: "Get in touch with us",
        desc: "With over 15 years of experience and more than 150 clients, we are the right choice. Let's talk about how we can simplify your administration.",
        email: "Email",
        addressTitle: "Head office",
        addressLines: "Ankaranska cesta 5c<br/>6000 Koper, Lenova d.o.o.",
        branchTitle: "Branch office",
        branchLines: "Umag, Croatia",
        form: {
          secure: "Secured",
          name: "Full name / Company",
          email: "Email address",
          message: "Your message or enquiry",
          button: "Send enquiry",
          sending: "Sending securely...",
          success: "Your message has been sent successfully. We will get back to you shortly.",
          errorName: "Name must be between 2 and 100 characters.",
          errorMessage: "Message must be between 10 and 2000 characters.",
          errorEmail: "Please enter a valid email address.",
          errorSpam: "Please wait before sending another message (anti-spam protection)."
        }
      },
      footer: {
        desc: "A reliable partner with over 15 years of experience and more than 150 satisfied clients.",
        links: "Quick links",
        contact: "Contact & Location",
        hours: "Opening hours",
        hoursLines: {
          w: "Monday – Friday",
          wt: "09:00 – 15:00",
          e: "Saturday, Sunday",
          et: "Closed"
        },
        data: "Company details",
        bank: "Bank accounts",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        rights: "All rights reserved."
      },
      cookies: {
        title: "We respect your privacy",
        desc: "We use cookies to improve your experience and for analytics. By continuing to use this site, you agree to our",
        policy: "privacy policy",
        accept: "Accept all",
        decline: "Decline non-essential"
      },
      notfound: {
        title: "Page not found",
        desc: "Sorry, the page you are looking for does not exist. It may have been moved or never existed.",
        back: "Back to home"
      }
    }
  },
  hr: {
    translation: {
      navbar: {
        services: "Usluge",
        references: "Reference",
        about: "O nama",
        contact: "Kontakt",
        cta: "Stupite u kontakt"
      },
      hero: {
        title: "Računovodstveni servis Koper",
        subtitle1: "Pouzdano računovodstvo koje ",
        subtitleHighlight: "razumije vaš posao.",
        stats: {
          years: "Godina<br/>Iskustva",
          clients: "Zadovoljnih<br/>Klijenata"
        },
        desc: "S našom tvrtkom u Kopru nudimo stručno vođenje poslovnih knjiga i porezno savjetovanje na cijeloj Obali i šire. Više od 15 godina pouzdane podrške.",
        cta: "Upoznajte naše usluge"
      },
      trust: {
        title: "Vjeruje nam (više od 150+ klijenata)"
      },
      about: {
        subtitle: "O nama",
        title: "Računovodstveni servis Lenova ima sve karakteristike dobrog servisa:",
        desc: "Vjerujemo u stručnost i red. Naš cilj je pružiti najvišu razinu usluge i osigurati rast vašeg poslovanja. Zato kod nas vrijede sljedeća načela:",
        list: [
          "Poslovno smo uspješni i stabilni",
          "Imamo širok raspon klijenata",
          "Pružamo najsveobuhvatnije i najzahtjevnije računovodstvene usluge",
          "Naš tim je stručan i kontinuirano se educira",
          "Imamo policu osiguranja od profesionalne odgovornosti",
          "Sve klijente tretiramo individualno i obavještavamo o zakonskim promjenama"
        ]
      },
      services: {
        subtitle: "Naše Usluge",
        title: "Sve što vam je potrebno za bezbrižno poslovanje",
        desc: "Nudimo stručne usluge koje vam omogućuju da se usredotočite na rast vašeg poslovanja, dok mi brinemo za ostalo.",
        s1: {
          title: "Računovodstvo",
          desc: "Precizno vođenje poslovnih knjiga. Priprema završnih računa, obračun PDV-a i strateško porezno savjetovanje prilagođeno vašoj djelatnosti.",
          l1: "Optimizacija poreza",
          l2: "Digitalno poslovanje"
        },
        s2: {
          title: "Kadrovske usluge",
          desc: "Sveobuhvatno upravljanje kadrovskom administracijom. Obračun plaća, priprema ugovora o radu, prijava radnika.",
          l1: "Obračun plaća i doprinosa",
          l2: "Upravljanje putnim nalozima"
        },
        s3: {
          title: "Savjetovanje & Osnivanje tvrtki",
          desc: "Osim poslovanja u Sloveniji, preko naše poslovnice u <strong class='font-bold'>Umagu</strong> nudimo poslovno savjetovanje i virtualni ured u Hrvatskoj.",
          l1: "Osnivanje tvrtki (SLO i HR)",
          l2: "Virtualni ured (Također u Umagu)"
        }
      },
      contact: {
        title: "Stupite u kontakt s nama",
        desc: "S više od 15 godina iskustva, pravi smo izbor. Razgovarajmo o tome kako vas možemo rasteretiti administracije.",
        email: "E-pošta",
        addressTitle: "Sjedište",
        addressLines: "Ankaranska cesta 5c<br/>6000 Koper, Lenova d.o.o.",
        branchTitle: "Poslovnica",
        branchLines: "Umag, Hrvatska",
        form: {
          secure: "Osigurano",
          name: "Ime i prezime / Tvrtka",
          email: "E-mail adresa",
          message: "Vaša poruka ili upit",
          button: "Pošaljite upit",
          sending: "Šaljem sigurno...",
          success: "Vaša poruka je uspješno poslana. Kontaktirat ćemo vas uskoro.",
          errorName: "Ime mora sadržavati između 2 i 100 znakova.",
          errorMessage: "Poruka mora sadržavati između 10 i 2000 znakova.",
          errorEmail: "Molimo unesite ispravnu e-mail adresu.",
          errorSpam: "Molimo pričekajte prije ponovnog slanja (anti-spam)."
        }
      },
      footer: {
        desc: "Pouzdan partner s više od 15 godina iskustva i preko 150 zadovoljnih klijenata.",
        links: "Brzi linkovi",
        contact: "Kontakt & Lokacija",
        hours: "Radno vrijeme",
        hoursLines: {
          w: "Ponedjeljak - Petak",
          wt: "09:00 - 15:00",
          e: "Subota, Nedjelja",
          et: "Zatvoreno"
        },
        data: "Podaci o tvrtki",
        bank: "Bankovni računi",
        privacy: "Pravila privatnosti",
        terms: "Uvjeti poslovanja",
        rights: "Sva prava pridržana."
      },
      cookies: {
        title: "Poštujemo vašu privatnost",
        desc: "Koristimo kolačiće za poboljšanje vašeg iskustva i analitiku. Nastavkom korištenja pristajete na našu",
        policy: "politiku privatnosti",
        accept: "Prihvati sve",
        decline: "Odbij nebitne"
      },
      notfound: {
        title: "Stranica ne postoji",
        desc: "Nažalost, stranica koju tražite nije pronađena. Možda je premještena ili nikada nije postojala.",
        back: "Natrag na početnu"
      }
    }
  },
  it: {
    translation: {
      navbar: {
        services: "Servizi",
        references: "Referenze",
        about: "Chi siamo",
        contact: "Contatti",
        cta: "Contattaci"
      },
      hero: {
        title: "Studio Contabile Capodistria",
        subtitle1: "Contabilità affidabile che ",
        subtitleHighlight: "comprende il tuo business.",
        stats: {
          years: "Anni di<br/>Esperienza",
          clients: "Clienti<br/>Soddisfatti"
        },
        desc: "Con la nostra azienda a Capodistria offriamo gestione contabile e consulenza fiscale su tutta la Costa e oltre. Più di 15 anni di supporto affidabile.",
        cta: "Scopri i nostri servizi"
      },
      trust: {
        title: "Scelti da (oltre 150+ clienti)"
      },
      about: {
        subtitle: "Chi siamo",
        title: "Lo studio contabile Lenova ha tutte le caratteristiche di un buon servizio:",
        desc: "Crediamo nella professionalità e nell'ordine. Il nostro obiettivo è garantire la massima qualità e la crescita del tuo business. Pertanto, seguiamo questi principi:",
        list: [
          "Siamo un'azienda stabile e di successo",
          "Abbiamo una vasta gamma di clienti",
          "Forniamo servizi contabili completi e impegnativi",
          "Il nostro team è professionale e in continua formazione",
          "Abbiamo una polizza di assicurazione per responsabilità professionale",
          "Trattiamo tutti i clienti individualmente e li informiamo sui cambiamenti"
        ]
      },
      services: {
        subtitle: "I nostri servizi",
        title: "Tutto ciò di cui hai bisogno per la tua attività",
        desc: "Offriamo servizi professionali che ti permettono di concentrarti sulla crescita della tua attività, mentre noi ci occupiamo del resto.",
        s1: {
          title: "Contabilità",
          desc: "Gestione accurata dei libri contabili. Preparazione dei bilanci, calcolo IVA e consulenza fiscale strategica.",
          l1: "Ottimizzazione fiscale",
          l2: "Business digitale"
        },
        s2: {
          title: "Risorse Umane",
          desc: "Gestione completa dell'amministrazione HR. Calcolo stipendi, contratti di lavoro e registrazione dei dipendenti.",
          l1: "Buste paga e contributi",
          l2: "Gestione rimborsi spese"
        },
        s3: {
          title: "Consulenza e Costituzione Società",
          desc: "Oltre alle attività in Slovenia, attraverso la nostra filiale a <strong class='font-bold'>Umago</strong> offriamo consulenza e ufficio virtuale in Croazia.",
          l1: "Costituzione società (SLO e HR)",
          l2: "Ufficio virtuale (Anche a Umago)"
        }
      },
      contact: {
        title: "Mettiti in contatto con noi",
        desc: "Con oltre 15 anni di esperienza, siamo la scelta giusta. Parliamo di come possiamo alleviare il tuo carico amministrativo.",
        email: "E-mail",
        addressTitle: "Sede centrale",
        addressLines: "Strada di Ancarano 5c<br/>6000 Capodistria, Lenova d.o.o.",
        branchTitle: "Filiale",
        branchLines: "Umago, Croazia",
        form: {
          secure: "Protetto",
          name: "Nome e cognome / Azienda",
          email: "Indirizzo e-mail",
          message: "Il tuo messaggio o richiesta",
          button: "Invia richiesta",
          sending: "Invio sicuro in corso...",
          success: "Il tuo messaggio è stato inviato. Ti contatteremo presto.",
          errorName: "Il nome deve contenere tra 2 e 100 caratteri.",
          errorMessage: "Il messaggio deve contenere tra 10 e 2000 caratteri.",
          errorEmail: "Inserisci un indirizzo e-mail valido.",
          errorSpam: "Attendi prima di inviare un'altra richiesta (anti-spam)."
        }
      },
      footer: {
        desc: "Un partner affidabile con oltre 15 anni di esperienza e più di 150 clienti soddisfatti.",
        links: "Link rapidi",
        contact: "Contatti e Posizione",
        hours: "Orari di apertura",
        hoursLines: {
          w: "Lunedì - Venerdì",
          wt: "09:00 - 15:00",
          e: "Sabato, Domenica",
          et: "Chiuso"
        },
        data: "Dati aziendali",
        bank: "Conti bancari",
        privacy: "Informativa sulla privacy",
        terms: "Termini e Condizioni",
        rights: "Tutti i diritti riservati."
      },
      cookies: {
        title: "Rispettiamo la tua privacy",
        desc: "Utilizziamo i cookie per migliorare la tua esperienza e per analisi. Continuando a usare il sito, accetti la nostra",
        policy: "informativa sulla privacy",
        accept: "Accetta tutti",
        decline: "Rifiuta non essenziali"
      },
      notfound: {
        title: "Pagina non trovata",
        desc: "La pagina che stai cercando non esiste. Potrebbe essere stata spostata o non è mai esistita.",
        back: "Torna alla home"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "sl",
    fallbackLng: "sl",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
