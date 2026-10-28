const APP_VERSION = '2026.10.28-beta.4';
const SAMPLE_DATE = '2026-06-24';

const dictionary = {
  ad:{meaning:'to, toward',lemma:'ad',grammar:'Preposition + accusative',pronunciation:'ahd',context:'toward / to'},
  altare:{meaning:'altar',lemma:'altare, altaris',grammar:'Noun · neuter accusative singular',pronunciation:'ahl-TAH-reh',context:'to the altar'},
  dei:{meaning:'of God',lemma:'Deus, Dei',grammar:'Noun · masculine genitive singular',pronunciation:'DEH-ee',context:'of God'},
  deum:{meaning:'God',lemma:'Deus, Dei',grammar:'Noun · masculine accusative singular',pronunciation:'DEH-oom',context:'unto God'},
  qui:{meaning:'who',lemma:'qui, quæ, quod',grammar:'Relative pronoun · masculine nominative singular',pronunciation:'kwee',context:'who'},
  lætificat:{meaning:'makes joyful',lemma:'lætifico, lætificare',grammar:'Verb · present active, 3rd singular',pronunciation:'leh-TEE-fee-kaht',context:'who gives joy'},
  juventutem:{meaning:'youth',lemma:'juventus, juventutis',grammar:'Noun · feminine accusative singular',pronunciation:'yoo-ven-TOO-tem',context:'my youth'},
  meam:{meaning:'my',lemma:'meus, mea, meum',grammar:'Possessive adjective · feminine accusative singular',pronunciation:'MEH-ahm',context:'my'},
  domine:{meaning:'O Lord',lemma:'Dominus, Domini',grammar:'Noun · masculine vocative singular',pronunciation:'DOH-mee-neh',context:'addressing the Lord'},
  dominus:{meaning:'the Lord',lemma:'Dominus, Domini',grammar:'Noun · masculine nominative singular',pronunciation:'DOH-mee-noos',context:'the Lord'},
  vobiscum:{meaning:'with you',lemma:'vobiscum',grammar:'Pronoun + preposition',pronunciation:'voh-BEES-koom',context:'with you'},
  spiritu:{meaning:'spirit',lemma:'spiritus, spiritus',grammar:'Noun · masculine ablative singular',pronunciation:'SPEE-ree-too',context:'with thy spirit'},
  tuo:{meaning:'your / thy',lemma:'tuus, tua, tuum',grammar:'Possessive adjective · masculine ablative singular',pronunciation:'TOO-oh',context:'thy'},
  gloria:{meaning:'glory',lemma:'gloria, gloriæ',grammar:'Noun · feminine nominative singular',pronunciation:'GLOH-ree-ah',context:'glory'},
  in:{meaning:'in / on',lemma:'in',grammar:'Preposition',pronunciation:'een',context:'in'},
  excelsis:{meaning:'the highest',lemma:'excelsus, -a, -um',grammar:'Adjective · neuter ablative plural',pronunciation:'ek-SHEL-sees',context:'in the highest'},
  pax:{meaning:'peace',lemma:'pax, pacis',grammar:'Noun · feminine nominative singular',pronunciation:'pahks',context:'peace'},
  hominibus:{meaning:'to people',lemma:'homo, hominis',grammar:'Noun · dative plural',pronunciation:'oh-MEE-nee-boos',context:'to men / to people'},
  bonæ:{meaning:'of good',lemma:'bonus, bona, bonum',grammar:'Adjective · feminine genitive singular',pronunciation:'BOH-neh',context:'of good'},
  voluntatis:{meaning:'will',lemma:'voluntas, voluntatis',grammar:'Noun · feminine genitive singular',pronunciation:'voh-loon-TAH-tees',context:'of good will'},
  kyrie:{meaning:'Lord',lemma:'κύριε (Greek)',grammar:'Vocative · Greek liturgical acclamation',pronunciation:'KEE-ree-eh',context:'Lord, have mercy'},
  eleison:{meaning:'have mercy',lemma:'ἐλέησον (Greek)',grammar:'Verb · aorist imperative',pronunciation:'eh-LEH-ee-son',context:'have mercy'},
  christe:{meaning:'O Christ',lemma:'Christus, Christi',grammar:'Noun · masculine vocative singular',pronunciation:'KREES-teh',context:'Christ, have mercy'},
  credo:{meaning:'I believe',lemma:'credo, credere',grammar:'Verb · present active, 1st singular',pronunciation:'KREH-doh',context:'I believe'},
  unum:{meaning:'one',lemma:'unus, una, unum',grammar:'Adjective · masculine accusative singular',pronunciation:'OO-noom',context:'in one God'},
  patrem:{meaning:'Father',lemma:'pater, patris',grammar:'Noun · masculine accusative singular',pronunciation:'PAH-trem',context:'the Father'},
  omnipotentem:{meaning:'almighty',lemma:'omnipotens, omnipotentis',grammar:'Adjective · masculine accusative singular',pronunciation:'om-nee-poh-TEN-tem',context:'almighty'},
  sanctus:{meaning:'holy',lemma:'sanctus, sancta, sanctum',grammar:'Adjective · masculine nominative singular',pronunciation:'SAHNK-toos',context:'Holy'},
  pleni:{meaning:'full',lemma:'plenus, plena, plenum',grammar:'Adjective · masculine nominative plural',pronunciation:'PLEH-nee',context:'full are'},
  sunt:{meaning:'are',lemma:'sum, esse',grammar:'Verb · present, 3rd plural',pronunciation:'soont',context:'are'},
  cæli:{meaning:'heavens',lemma:'cælum, cæli',grammar:'Noun · masculine nominative plural',pronunciation:'CHEH-lee',context:'the heavens'},
  terra:{meaning:'earth',lemma:'terra, terræ',grammar:'Noun · feminine nominative singular',pronunciation:'TEHR-rah',context:'the earth'},
  agnus:{meaning:'lamb',lemma:'agnus, agni',grammar:'Noun · masculine nominative singular',pronunciation:'AH-nyoos',context:'Lamb of God'},
  tollis:{meaning:'you take away',lemma:'tollo, tollere',grammar:'Verb · present active, 2nd singular',pronunciation:'TOHL-lees',context:'who takes away'},
  peccata:{meaning:'sins',lemma:'peccatum, peccati',grammar:'Noun · neuter accusative plural',pronunciation:'pek-KAH-tah',context:'the sins'},
  mundi:{meaning:'of the world',lemma:'mundus, mundi',grammar:'Noun · masculine genitive singular',pronunciation:'MOON-dee',context:'of the world'},
  miserere:{meaning:'have mercy',lemma:'misereor, misereri',grammar:'Verb · imperative, 2nd singular',pronunciation:'mee-seh-REH-reh',context:'have mercy'},
  nobis:{meaning:'on us / to us',lemma:'nos',grammar:'Pronoun · dative or ablative plural',pronunciation:'NOH-bees',context:'on us'},
  corpus:{meaning:'body',lemma:'corpus, corporis',grammar:'Noun · neuter nominative singular',pronunciation:'KOR-poos',context:'Body'},
  meum:{meaning:'my',lemma:'meus, mea, meum',grammar:'Possessive adjective · neuter nominative singular',pronunciation:'MEH-oom',context:'my'},
  amen:{meaning:'truly / so be it',lemma:'amen',grammar:'Liturgical acclamation',pronunciation:'ah-MEN',context:'Amen'},
  ecce:{meaning:'behold',lemma:'ecce',grammar:'Particle',pronunciation:'EHK-cheh',context:'behold'},
  dignus:{meaning:'worthy',lemma:'dignus, digna, dignum',grammar:'Adjective · masculine nominative singular',pronunciation:'DEE-nyoos',context:'worthy'},
  intres:{meaning:'you should enter',lemma:'intro, intrare',grammar:'Verb · present subjunctive, 2nd singular',pronunciation:'EEN-tres',context:'that Thou shouldst enter'},
  tectum:{meaning:'roof',lemma:'tectum, tecti',grammar:'Noun · neuter accusative singular',pronunciation:'TEK-toom',context:'under my roof'},
  anima:{meaning:'soul',lemma:'anima, animæ',grammar:'Noun · feminine nominative singular',pronunciation:'AH-nee-mah',context:'my soul'},
  mea:{meaning:'my',lemma:'meus, mea, meum',grammar:'Possessive adjective · feminine nominative singular',pronunciation:'MEH-ah',context:'my'},
  dic:{meaning:'say',lemma:'dico, dicere',grammar:'Verb · imperative, 2nd singular',pronunciation:'deek',context:'only say'},
  verbo:{meaning:'word',lemma:'verbum, verbi',grammar:'Noun · neuter ablative singular',pronunciation:'VEHR-boh',context:'with a word'},
  sanabitur:{meaning:'will be healed',lemma:'sano, sanare',grammar:'Verb · future passive, 3rd singular',pronunciation:'sah-nah-BEE-toor',context:'shall be healed'},
  puer:{meaning:'boy / child',lemma:'puer, pueri',grammar:'Noun · masculine vocative singular',pronunciation:'POO-ehr',context:'thou, child'},
  propheta:{meaning:'prophet',lemma:'propheta, prophetæ',grammar:'Noun · masculine nominative singular',pronunciation:'proh-FEH-tah',context:'prophet'},
  altissimi:{meaning:'of the Most High',lemma:'Altissimus, Altissimi',grammar:'Adjective used as noun · genitive singular',pronunciation:'ahl-TEES-see-mee',context:'of the Most High'},
  vocaberis:{meaning:'you will be called',lemma:'voco, vocare',grammar:'Verb · future passive, 2nd singular',pronunciation:'voh-KAH-beh-rees',context:'shall be called'},
  præibis:{meaning:'you will go before',lemma:'præeo, præire',grammar:'Verb · future active, 2nd singular',pronunciation:'preh-EE-bees',context:'shall go before'},
  ante:{meaning:'before',lemma:'ante',grammar:'Preposition + accusative',pronunciation:'AHN-teh',context:'before'},
  faciem:{meaning:'face / presence',lemma:'facies, faciei',grammar:'Noun · feminine accusative singular',pronunciation:'FAH-chee-em',context:'before the face'},
  parare:{meaning:'to prepare',lemma:'paro, parare',grammar:'Verb · present active infinitive',pronunciation:'pah-RAH-reh',context:'to prepare'},
  vias:{meaning:'ways',lemma:'via, viæ',grammar:'Noun · feminine accusative plural',pronunciation:'VEE-ahs',context:'His ways'},
  ejus:{meaning:'his / of him',lemma:'is, ea, id',grammar:'Pronoun · genitive singular',pronunciation:'EH-yoos',context:'His'}
};

const vocabularyLexicon = {
  et:{
    key:'et',num:'L6540',
    lemma:'et',
    meaning:'and',
    grammar:'Conjunction',
    pronunciation:'eht',
    context:'and; also sometimes "even" in Latin context',
    forms:['et'],
    englishRules:[
      {pattern:/\band\b/gi,replacement:'et',matchCase:true}
    ]
  },
  amen:{
    key:'amen',num:'L6541',
    lemma:'Amen',
    meaning:'truly / so be it',
    grammar:'Liturgical acclamation',
    pronunciation:'ah-MEN',
    context:'Amen; a Hebrew acclamation kept in Latin and English prayer',
    forms:['amen'],
    englishRules:[
      {pattern:/\bAmen\b/g,replacement:'Amen'},
      {pattern:/\bamen\b/g,replacement:'amen'}
    ]
  },
  in:{
    key:'in',num:'L2972',
    lemma:'in',
    meaning:'in / on / into',
    grammar:'Preposition - takes ablative for “in/on”; accusative for “into/toward”',
    pronunciation:'een',
    context:'in, on, into, toward; very common in Mass prayers',
    forms:['in'],
    englishRules:[
      {pattern:/\bin\b/gi,replacement:'in',matchCase:true},
      {pattern:/\binto\b/gi,replacement:'in',matchCase:true},
      {pattern:/\bon\b/gi,replacement:'in',matchCase:true},
      {pattern:/\bupon\b/gi,replacement:'in',matchCase:true},
      {pattern:/\btoward\b/gi,replacement:'in',matchCase:true}
    ]
  },
  oro:{
    key:'oro',num:'L4169',
    lemma:'oro, orare',
    meaning:'pray / beseech',
    grammar:'Verb - first conjugation',
    pronunciation:'OH-roh, oh-RAH-reh',
    context:'to pray, beg, beseech, entreat',
    forms:['oro','oras','orat','oramus','oratis','orant','orare','orari','orabo','orabis','orabit','orabimus','orabitis','orabunt','orabam','orabas','orabat','orabamus','orabatis','orabant','oravi','oravit','oraverunt','orem','ores','oret','oremus','oretis','orent','orate','orato'],
    englishRules:[
      {pattern:/\bwe\s+beseech\b/gi,replacement:'Oramus'},
      {pattern:/\bwe\s+pray\b/gi,replacement:'Oramus'},
      {pattern:/\bbeseech\b/gi,replacement:'orare'},
      {pattern:/\bpray\b/gi,replacement:'orare'},
      {pattern:/\bprays\b/gi,replacement:'orat'},
      {pattern:/\bprayer\b/gi,replacement:'oratio'}
    ]
  },
  sanctus:{
    key:'sanctus',num:'L5462',
    lemma:'sanctus, sancta, sanctum',
    meaning:'holy / saint',
    grammar:'Adjective used also as a noun - first/second declension',
    pronunciation:'SAHNK-toos',
    context:'holy; as a noun, a saint or holy one',
    forms:['sanctus','sancta','sanctum','sancte','sancti','sanctae','sancto','sanctam','sanctos','sanctas','sancta','sanctorum','sanctarum','sanctis'],
    englishRules:[
      {pattern:/\bholy\b/gi,replacement:'sanctus'},
      {pattern:/\bHoly\b/g,replacement:'Sanctus'},
      {pattern:/\bSaints\b/g,replacement:'Sanctorum'},
      {pattern:/\bsaints\b/g,replacement:'sanctorum'},
      {pattern:/\bSaint\b/g,replacement:'Sanctus'},
      {pattern:/\bsaint\b/g,replacement:'sanctus'}
    ]
  },
  meritum:{
    key:'meritum',num:'L6542',
    lemma:'meritum, meriti',
    meaning:'merit',
    grammar:'Noun - neuter second declension',
    pronunciation:'MEH-ree-toom',
    context:'merit, desert, reward; merita means merits',
    forms:['meritum','meriti','merito','merita','meritorum','meritis'],
    englishRules:[
      {pattern:/\bmerits\b/gi,replacement:'merita'},
      {pattern:/\bmerit\b/gi,replacement:'meritum'},
      {pattern:/\breward\b/gi,replacement:'meritum'},
      {pattern:/\bdeserving\b/gi,replacement:'meritum'}
    ]
  },
  dignor:{
    key:'dignor',num:'L6543',
    lemma:'dignor, dignari',
    meaning:'deem worthy / vouchsafe',
    grammar:'Deponent verb - first conjugation',
    pronunciation:'DEEG-nor, deeg-NAH-ree',
    context:'to deem worthy; in prayer, to vouchsafe or graciously grant',
    forms:['dignor','dignaris','dignatur','dignamur','dignamini','dignantur','dignari','dignare','digner','digneris','dignetur','dignemur','dignemini','dignentur','dignatus','dignata','dignatum'],
    englishRules:[
      {pattern:/\bvouchsafe\b/gi,replacement:'digneris'},
      {pattern:/\bgraciously\s+grant\b/gi,replacement:'digneris'},
      {pattern:/\bdeem\s+worthy\b/gi,replacement:'dignari'},
      {pattern:/\bworthy\b/gi,replacement:'dignus'}
    ]
  },
  indulgeo:{
    key:'indulgeo',num:'L6544',
    lemma:'indulgeo, indulgere',
    meaning:'forgive / grant',
    grammar:'Verb - second conjugation',
    pronunciation:'een-DOOL-geh-oh',
    context:'to grant, concede, indulge; in prayer, to forgive or pardon',
    forms:['indulgeo','indulges','indulget','indulgemus','indulgetis','indulgent','indulgere','indulgeam','indulgeas','indulgeat','indulgeamus','indulgeatis','indulgeant','indulgebam','indulgebas','indulgebat','indulgebamus','indulgebatis','indulgebant','indulsi','indulsit','indulserunt','indultus','indulta','indultum'],
    englishRules:[
      {pattern:/\bforgive\b/gi,replacement:'indulgere'},
      {pattern:/\bpardon\b/gi,replacement:'indulgere'},
      {pattern:/\bgrant\b/gi,replacement:'indulgere'},
      {pattern:/\bconcede\b/gi,replacement:'indulgere'}
    ]
  },
  peccatum:{
    key:'peccatum',num:'L4310',
    lemma:'peccatum, peccati',
    meaning:'sin',
    grammar:'Noun - neuter second declension',
    pronunciation:'pek-KAH-toom',
    context:'sin; peccata means sins',
    forms:['peccatum','peccati','peccato','peccata','peccatorum','peccatis'],
    englishRules:[
      {pattern:/\bsins\b/gi,replacement:'peccata'},
      {pattern:/\bsin\b/gi,replacement:'peccatum'}
    ]
  },
  omnis:{
    key:'omnis',num:'L6545',
    lemma:'omnis, omne',
    meaning:'all / every',
    grammar:'Adjective - third declension',
    pronunciation:'OHM-nees',
    context:'all, every; omnia means all things',
    forms:['omnis','omne','omnem','omni','omnia','omnes','omnium','omnibus'],
    englishRules:[
      {pattern:/\ball\s+things\b/gi,replacement:'omnia'},
      {pattern:/\ball\b/gi,replacement:'omnia'},
      {pattern:/\bevery\b/gi,replacement:'omnis'}
    ]
  },
  noster:{
    key:'noster',num:'L4007',
    lemma:'noster, nostra, nostrum',
    meaning:'our',
    grammar:'Possessive adjective',
    pronunciation:'NOH-ster',
    context:'our; nostrum is a neuter or masculine accusative form',
    forms:['noster','nostra','nostrum','nostri','nostrae','nostro','nostram','nostros','nostras','nostrorum','nostrarum','nostris'],
    englishRules:[
      {pattern:/\bour\b/gi,replacement:'noster'},
      {pattern:/\bours\b/gi,replacement:'nostrum'}
    ]
  },
  meus:{
    key:'meus',num:'L3754',
    lemma:'meus, mea, meum',
    meaning:'my',
    grammar:'Possessive adjective',
    pronunciation:'MEH-oos',
    context:'my; mea can mean my feminine singular or neuter plural',
    forms:['meus','mea','meum','mei','meae','meo','meam','meos','meas','meorum','mearum','meis'],
    englishRules:[
      {pattern:/\bmy\b/gi,replacement:'meus'},
      {pattern:/\bmine\b/gi,replacement:'meus'}
    ]
  },
  pater:{
    key:'pater',num:'L6546',
    lemma:'Pater, Patris',
    meaning:'Father',
    grammar:'Noun - masculine; irregular third-declension family word',
    pronunciation:'PAH-ter, PAH-tris',
    context:'Father; Patris means "of the Father"',
    forms:['pater','patris','patri','patrem','patre','patres','patrum','patribus'],
    formInfo:{
      pater:'Nominative/vocative singular - Father',
      patris:'Genitive singular - of the Father',
      patri:'Dative singular - to/for the Father',
      patrem:'Accusative singular - the Father',
      patre:'Ablative singular - by/with/from the Father',
      patres:'Nominative/accusative plural - fathers',
      patrum:'Genitive plural - of the fathers',
      patribus:'Dative/ablative plural - to/with/by the fathers'
    },
    englishRules:[
      {pattern:/\bof\s+the\s+Father\b/gi,replacement:'Patris'},
      {pattern:/\bto\s+the\s+Father\b/gi,replacement:'Patri'},
      {pattern:/\bfor\s+the\s+Father\b/gi,replacement:'Patri'},
      {pattern:/\bfrom\s+the\s+Father\b/gi,replacement:'Patre'},
      {pattern:/\bwith\s+the\s+Father\b/gi,replacement:'Patre'},
      {pattern:/\bby\s+the\s+Father\b/gi,replacement:'Patre'},
      {pattern:/\bthe\s+Father\b/gi,replacement:'Pater'},
      {pattern:/\bFather\b/gi,replacement:'Pater'},
      {pattern:/\bfather\b/gi,replacement:'pater'}
    ]
  },
  filius:{
    key:'filius',num:'L6547',
    lemma:'Filius, Filii',
    meaning:'Son',
    grammar:'Noun - masculine second declension',
    pronunciation:'FEE-lee-oos, FEE-lee-ee',
    context:'Son; Filii means "of the Son"',
    forms:['filius','filii','filio','filium','filie','fili','filios','filiorum','filiis'],
    formInfo:{
      filius:'Nominative singular - Son',
      filii:'Genitive singular or nominative plural - of the Son / sons',
      filio:'Dative or ablative singular - to/with/by the Son',
      filium:'Accusative singular - the Son',
      fili:'Vocative singular - O Son',
      filios:'Accusative plural - sons',
      filiorum:'Genitive plural - of the sons',
      filiis:'Dative/ablative plural - to/with/by the sons'
    },
    englishRules:[
      {pattern:/\bof\s+the\s+Son\b/gi,replacement:'Filii'},
      {pattern:/\bto\s+the\s+Son\b/gi,replacement:'Filio'},
      {pattern:/\bfrom\s+the\s+Son\b/gi,replacement:'Filio'},
      {pattern:/\bthe\s+Son\b/gi,replacement:'Filius'},
      {pattern:/\bSon\b/gi,replacement:'Filius'},
      {pattern:/\bson\b/gi,replacement:'filius'}
    ]
  },
  spiritus:{
    key:'spiritus',num:'L6548',
    lemma:'Spiritus, Spiritus',
    meaning:'Spirit',
    grammar:'Noun - masculine fourth declension',
    pronunciation:'SPEE-ree-toos',
    context:'Spirit; Spiritus can mean Spirit or of the Spirit',
    forms:['spiritus','spiritui','spiritum','spiritu','spirituum','spiritibus'],
    formInfo:{
      spiritus:'Nominative or genitive singular - Spirit / of the Spirit',
      spiritui:'Dative singular - to/for the Spirit',
      spiritum:'Accusative singular - the Spirit',
      spiritu:'Ablative singular - by/with/from the Spirit',
      spirituum:'Genitive plural - of spirits',
      spiritibus:'Dative/ablative plural - to/with/by spirits'
    },
    englishRules:[
      {pattern:/\bof\s+the\s+Holy\s+Ghost\b/gi,replacement:'Spiritus Sancti'},
      {pattern:/\bthe\s+Holy\s+Ghost\b/gi,replacement:'Spiritus Sanctus'},
      {pattern:/\bHoly\s+Ghost\b/gi,replacement:'Spiritus Sanctus'},
      {pattern:/\bof\s+the\s+Spirit\b/gi,replacement:'Spiritus'},
      {pattern:/\bthe\s+Spirit\b/gi,replacement:'Spiritus'},
      {pattern:/\bSpirit\b/gi,replacement:'Spiritus'}
    ]
  },
  deus:{
    key:'deus',num:'L6549',
    lemma:'Deus, Dei',
    meaning:'God',
    grammar:'Noun - masculine second declension, irregular vocative',
    pronunciation:'DEH-oos, DEH-ee',
    context:'God; Dei means "of God"',
    forms:['deus','dei','deo','deum','dee','diis','dis'],
    formInfo:{
      deus:'Nominative singular - God',
      dei:'Genitive singular - of God',
      deo:'Dative or ablative singular - to/with/by God',
      deum:'Accusative singular - God'
    },
    englishRules:[
      {pattern:/\bof\s+God\b/gi,replacement:'Dei'},
      {pattern:/\bto\s+God\b/gi,replacement:'Deo'},
      {pattern:/\bfrom\s+God\b/gi,replacement:'Deo'},
      {pattern:/\bwith\s+God\b/gi,replacement:'Deo'},
      {pattern:/\bGod\b/gi,replacement:'Deus'}
    ]
  },
  dominus:{
    key:'dominus',num:'L6550',
    lemma:'Dominus, Domini',
    meaning:'Lord',
    grammar:'Noun - masculine second declension',
    pronunciation:'DOH-mee-noos, DOH-mee-nee',
    context:'Lord; Domini means "of the Lord"',
    forms:['dominus','domini','domino','dominum','domine','dominos','dominorum','dominis'],
    formInfo:{
      dominus:'Nominative singular - Lord',
      domini:'Genitive singular - of the Lord',
      domino:'Dative or ablative singular - to/with/by the Lord',
      dominum:'Accusative singular - the Lord',
      domine:'Vocative singular - O Lord'
    },
    englishRules:[
      {pattern:/\bof\s+the\s+Lord\b/gi,replacement:'Domini'},
      {pattern:/\bto\s+the\s+Lord\b/gi,replacement:'Domino'},
      {pattern:/\bwith\s+the\s+Lord\b/gi,replacement:'Domino'},
      {pattern:/\bO\s+Lord\b/gi,replacement:'Domine'},
      {pattern:/\bthe\s+Lord\b/gi,replacement:'Dominus'},
      {pattern:/\bLord\b/gi,replacement:'Dominus'}
    ]
  },
  ego:{
    key:'ego',num:'L6600',
    lemma:'ego',
    meaning:'I',
    grammar:'Personal pronoun - first person singular, nominative ("I", emphatic); the oblique forms me/mei/mihi come from a different stem',
    pronunciation:'EH-goh',
    context:'I; Latin verbs already show person, so ego is used for emphasis - "I myself"',
    forms:['ego'],
    englishRules:[
      {pattern:/\bI\b/g,replacement:'ego',matchCase:true}
    ]
  },
  ero:{
    key:'ero',num:'L6601',
    lemma:'sum, esse, fui',
    meaning:'I shall be / I will be',
    grammar:'Verb - irregular - future active indicative, 1st person singular',
    pronunciation:'EH-roh',
    context:'I will be / I shall be (future tense of sum, "to be")',
    forms:['ero'],
    englishRules:[
      {pattern:/\bI\s+(?:will|shall)\s+be\b/gi,replacement:'ero'}
    ]
  },
  eum:{
    key:'eum',num:'L6602',
    lemma:'is, ea, id',
    meaning:'him',
    grammar:'Pronoun - accusative singular masculine ("him")',
    pronunciation:'EH-oom',
    context:'him (direct object)',
    forms:['eum'],
    englishRules:[
      {pattern:/\bhim\b/gi,replacement:'eum'}
    ]
  },
  eam:{
    key:'eam',num:'L6603',
    lemma:'is, ea, id',
    meaning:'her',
    grammar:'Pronoun - accusative singular feminine ("her")',
    pronunciation:'EH-ahm',
    context:'her (direct object)',
    forms:['eam'],
    englishRules:[
      {pattern:/\bher\b/gi,replacement:'eam'}
    ]
  },
  eos:{
    key:'eos',num:'L6604',
    lemma:'is, ea, id',
    meaning:'them',
    grammar:'Pronoun - accusative plural masculine ("them")',
    pronunciation:'EH-ohs',
    context:'them (direct object, masculine)',
    forms:['eos'],
    englishRules:[
      {pattern:/\bthem\b/gi,replacement:'eos'}
    ]
  },
  eis:{
    key:'eis',num:'L6605',
    lemma:'is, ea, id',
    meaning:'to/for them; by them',
    grammar:'Pronoun - dative or ablative plural ("to/for them", "by/with them")',
    pronunciation:'EH-ees',
    context:'to them; by them',
    forms:['eis'],
    englishRules:[
      {pattern:/\bto\\s+them\b/gi,replacement:'eis'}
    ]
  },
  eorum:{
    key:'eorum',num:'L6606',
    lemma:'is, ea, id',
    meaning:'their / of them',
    grammar:'Pronoun - genitive plural masculine/neuter ("of them", "their")',
    pronunciation:'eh-OH-room',
    context:'their; of them',
    forms:['eorum'],
    englishRules:[
      {pattern:/\btheir\b/gi,replacement:'eorum'}
    ]
  },
  iam:{
    key:'iam',num:'L6607',
    lemma:'iam',
    meaning:'now / already',
    grammar:'Adverb',
    pronunciation:'YAHM',
    context:'now, already',
    forms:['iam'],
    englishRules:[
      {pattern:/\balready\b/gi,replacement:'iam'}
    ]
  },
  ite:{
    key:'ite',num:'L6608',
    lemma:'eo, ire',
    meaning:'go!',
    grammar:'Verb - imperative plural ("go!")',
    pronunciation:'EE-teh',
    context:'Go! (as in "Ite, missa est" - "Go, the Mass is ended")',
    forms:['ite'],
    englishRules:[
      {pattern:/\bgo\b/gi,replacement:'ite'}
    ]
  },
  exite:{
    key:'exite',num:'L6609',
    lemma:'exeo, exire',
    meaning:'go out!',
    grammar:'Verb - imperative plural ("go out!")',
    pronunciation:'ex-EE-teh',
    context:'Go out! Depart!',
    forms:['exite'],
    englishRules:[
      {pattern:/\bgo\\s+out\b/gi,replacement:'exite'}
    ]
  },
  ibimus:{
    key:'ibimus',num:'L6610',
    lemma:'eo, ire',
    meaning:'we will go',
    grammar:'Verb - future active indicative, 1st person plural',
    pronunciation:'EE-bee-moos',
    context:'we will go, we shall go',
    forms:['ibimus'],
    englishRules:[
      {pattern:/\bwe\\s+will\\s+go\b/gi,replacement:'ibimus'}
    ]
  },
  illis:{
    key:'illis',num:'L6611',
    lemma:'ille, illa, illud',
    meaning:'to/for them; by them',
    grammar:'Pronoun - dative or ablative plural ("to/for those", "by those")',
    pronunciation:'EEL-lees',
    context:'to them; by them (demonstrative "those")',
    forms:['illis'],
    englishRules:[
      {pattern:/\bto\\s+them\b/gi,replacement:'illis'}
    ]
  },
  dico:{
    key:'dico',num:'L6612',
    lemma:'dico, dicere',
    meaning:'I say',
    grammar:'Verb - third conjugation, present active indicative, 1st singular',
    pronunciation:'DEE-koh',
    context:'I say, I tell',
    forms:['dico'],
    englishRules:[
      {pattern:/\bI\\s+say\b/gi,replacement:'dico'}
    ]
  },
  dic:{
    key:'dic',num:'L6613',
    lemma:'dico, dicere',
    meaning:'say!',
    grammar:'Verb - imperative singular ("say!")',
    pronunciation:'DEEK',
    context:'Say! Tell!',
    forms:['dic'],
    englishRules:[
      {pattern:/\bsay\b/gi,replacement:'dic'}
    ]
  },
  die:{
    key:'die',num:'L6614',
    lemma:'dies, diei',
    meaning:'day',
    grammar:'Noun - fifth declension, ablative singular ("on/in a day")',
    pronunciation:'DEE-eh',
    context:'day; "in illo die" = "on that day"',
    forms:['die'],
    englishRules:[
      {pattern:/\bday\b/gi,replacement:'die'}
    ]
  },
  diem:{
    key:'diem',num:'L6615',
    lemma:'dies, diei',
    meaning:'day',
    grammar:'Noun - fifth declension, accusative singular',
    pronunciation:'DEE-em',
    context:'day (direct object)',
    forms:['diem'],
    englishRules:[
      {pattern:/\bday\b/gi,replacement:'diem'}
    ]
  },
  dies:{
    key:'dies',num:'L6616',
    lemma:'dies, diei',
    meaning:'day / days',
    grammar:'Noun - fifth declension, nominative singular, or nominative/accusative plural',
    pronunciation:'DEE-ehs',
    context:'day; days',
    forms:['dies'],
    englishRules:[
      {pattern:/\bdays\b/gi,replacement:'dies'}
    ]
  },
  iungit:{
    key:'iungit',num:'L6617',
    lemma:'iungo, iungere',
    meaning:'joins / unites',
    grammar:'Verb - third conjugation, present active indicative, 3rd singular',
    pronunciation:'YOON-geet',
    context:'he/she/it joins, unites',
    forms:['iungit'],
    englishRules:[
      {pattern:/\bjoins\b/gi,replacement:'iungit'}
    ]
  },
  ter:{
    key:'ter',num:'L6618',
    lemma:'ter',
    meaning:'three times',
    grammar:'Adverb (numeral)',
    pronunciation:'TEHR',
    context:'three times, thrice (as in a rubric said three times)',
    forms:['ter'],
    englishRules:[
      {pattern:/\bthree\\s+times\b/gi,replacement:'ter'}
    ]
  },
  lucem:{
    key:'lucem',num:'L6619',
    lemma:'lux, lucis',
    meaning:'light',
    grammar:'Noun - third declension, accusative singular',
    pronunciation:'LOO-kem',
    context:'light (direct object); "lux perpetua" = "light perpetual"',
    forms:['lucem'],
    englishRules:[
      {pattern:/\blight\b/gi,replacement:'lucem'}
    ]
  },
  soror:{
    key:'soror',num:'L6620',
    lemma:'soror, sororis',
    meaning:'sister',
    grammar:'Noun - third declension, nominative singular',
    pronunciation:'SOH-ror',
    context:'sister',
    forms:['soror'],
    englishRules:[
      {pattern:/\bsister\b/gi,replacement:'soror'}
    ]
  },
  eiusdem:{
    key:'eiusdem',num:'L6621',
    lemma:'idem, eadem, idem',
    meaning:'of the same',
    grammar:'Pronoun - genitive singular ("of the same")',
    pronunciation:'eh-YOOS-dem',
    context:'of the same (person or thing)',
    forms:['eiusdem'],
    englishRules:[
      {pattern:/\bof\\s+the\\s+same\b/gi,replacement:'eiusdem'}
    ]
  },
  ait:{
    key:'ait',num:'L6622',
    lemma:'aio',
    meaning:'he/she said',
    grammar:'Verb - defective, present/perfect active indicative, 3rd singular',
    pronunciation:'AH-eet',
    context:'he/she says, said',
    forms:['ait'],
    englishRules:[
      {pattern:/\bhe\\s+said\b/gi,replacement:'ait'}
    ]
  },
  sol:{
    key:'sol',num:'L6623',
    lemma:'sol, solis',
    meaning:'sun',
    grammar:'Noun - third declension, nominative singular',
    pronunciation:'SOHL',
    context:'the sun',
    forms:['sol'],
    englishRules:[
      {pattern:/\bsun\b/gi,replacement:'sol'}
    ]
  },
  discamus:{
    key:'discamus',num:'L6624',
    lemma:'disco, discere',
    meaning:'let us learn',
    grammar:'Verb - third conjugation, present subjunctive, 1st plural (hortatory)',
    pronunciation:'dees-KAH-moos',
    context:'let us learn',
    forms:['discamus'],
    englishRules:[
      {pattern:/\blet\\s+us\\s+learn\b/gi,replacement:'discamus'}
    ]
  },
  cui:{
    key:'cui',num:'L6625',
    lemma:'qui, quae, quod',
    meaning:'to whom / to which',
    grammar:'Pronoun - dative singular ("to whom", "to which")',
    pronunciation:'KOO-ee',
    context:'to whom, to which',
    forms:['cui'],
    englishRules:[
      {pattern:/\bto\\s+whom\b/gi,replacement:'cui'}
    ]
  },
  vir:{
    key:'vir',num:'L6626',
    lemma:'vir, viri',
    meaning:'man',
    grammar:'Noun - second declension, nominative singular',
    pronunciation:'WEER',
    context:'man',
    forms:['vir'],
    englishRules:[
      {pattern:/\bman\b/gi,replacement:'vir'}
    ]
  },
  ordo:{
    key:'ordo',num:'L6627',
    lemma:'ordo, ordinis',
    meaning:'order / rank',
    grammar:'Noun - third declension, nominative singular',
    pronunciation:'OR-doh',
    context:'order, rank, arrangement',
    forms:['ordo'],
    englishRules:[
      {pattern:/\border\b/gi,replacement:'ordo'}
    ]
  },
  rite:{
    key:'rite',num:'L6628',
    lemma:'rite',
    meaning:'duly / properly',
    grammar:'Adverb',
    pronunciation:'REE-teh',
    context:'duly, properly, rightly (as in a rubric)',
    forms:['rite'],
    englishRules:[
      {pattern:/\bduly\b/gi,replacement:'rite'}
    ]
  },
  seu:{
    key:'seu',num:'L6629',
    lemma:'seu',
    meaning:'or',
    grammar:'Conjunction',
    pronunciation:'SEH-oo',
    context:'or, or else',
    forms:['seu'],
    englishRules:[
      {pattern:/\bor\b/gi,replacement:'seu'}
    ]
  },
  orbis:{
    key:'orbis',num:'L6630',
    lemma:'orbis, orbis',
    meaning:'world / circle',
    grammar:'Noun - third declension, nominative singular',
    pronunciation:'OR-bees',
    context:'the world; a circle (as in "urbi et orbi")',
    forms:['orbis'],
    englishRules:[
      {pattern:/\bworld\b/gi,replacement:'orbis'}
    ]
  },
  pia:{
    key:'pia',num:'L6631',
    lemma:'pius, pia, pium',
    meaning:'pious, devout',
    grammar:'Adjective - feminine nominative or ablative singular',
    pronunciation:'PEE-ah',
    context:'pious, devout, dutiful',
    forms:['pia'],
    englishRules:[
      {pattern:/\bpious\b/gi,replacement:'pia'}
    ]
  },
  sumere:{
    key:'sumere',num:'L6632',
    lemma:'sumo, sumere',
    meaning:'to receive / to take',
    grammar:'Verb - third conjugation, present active infinitive',
    pronunciation:'SOO-meh-reh',
    context:'to take, to receive (as in receiving Communion)',
    forms:['sumere'],
    englishRules:[
      {pattern:/\bto\\s+receive\b/gi,replacement:'sumere'}
    ]
  },
  erue:{
    key:'erue',num:'L6633',
    lemma:'eruo, eruere',
    meaning:'deliver! / rescue!',
    grammar:'Verb - imperative singular ("deliver!")',
    pronunciation:'EH-roo-eh',
    context:'Deliver! Rescue! Snatch out!',
    forms:['erue'],
    englishRules:[
      {pattern:/\bdeliver\b/gi,replacement:'erue'}
    ]
  },
  cum:{
    key:'cum',num:'L6571',
    lemma:'cum',
    meaning:'when / with',
    grammar:'Conjunction (when, since, although) or Preposition + ablative (with)',
    pronunciation:'koom',
    context:'cum ingreditur (when he enters); alternatim cum Ministris (alternately with the servers)',
    forms:['cum'],
    englishRules:[]
  },
  de:{
    key:'de',num:'L6572',
    lemma:'de',
    meaning:'of / from / concerning',
    grammar:'Preposition - takes ablative',
    pronunciation:'deh',
    context:'discerne causam meam de gente non sancta (judge my cause... from the nation which is not holy)',
    forms:['de'],
    englishRules:[]
  },
  quare:{
    key:'quare',num:'L6573',
    lemma:'quare',
    meaning:'why',
    grammar:'Adverb (interrogative)',
    pronunciation:'KWAH-reh',
    context:'quare me repulisti (why hast Thou cast me off); quare tristis es (why art thou sad)',
    forms:['quare'],
    englishRules:[]
  },
  virgini:{
    key:'virgini',num:'L6574',
    lemma:'virgo, virginis',
    meaning:'virgin (to the Virgin)',
    grammar:'Noun - 3rd declension feminine - dative singular',
    pronunciation:'veer-JEE-nee',
    context:'beatae Mariae semper Virgini (to blessed Mary, ever Virgin)',
    forms:['virgini'],
    englishRules:[]
  },
  iungens:{
    key:'iungens',num:'L6575',
    lemma:'iungo, iungere',
    meaning:'joining',
    grammar:'Verb - 3rd conjugation - present active participle, nominative singular',
    pronunciation:'YOON-jenss',
    context:'extendens et iungens manus (extending and joining his hands)',
    forms:['iungens'],
    englishRules:[]
  },
  exaudi:{
    key:'exaudi',num:'L6576',
    lemma:'exaudio, exaudire',
    meaning:'hear, listen to',
    grammar:'Verb - 4th conjugation - present imperative active, 2nd person singular',
    pronunciation:'eks-OW-dee',
    context:'Domine, exaudi orationem meam (O Lord, hear my prayer)',
    forms:['exaudi'],
    englishRules:[]
  },
  laetabitur:{
    key:'laetabitur',num:'L6577',
    lemma:'laetor, laetari',
    meaning:'shall rejoice, will be glad',
    grammar:'Verb - deponent 1st conjugation - future indicative, 3rd person singular',
    pronunciation:'leh-tah-BEE-toor',
    context:'plebs tua laetabitur in te (thy people shall rejoice in Thee)',
    forms:['laetabitur'],
    englishRules:[]
  },
  quaesumus:{
    key:'quaesumus',num:'L6578',
    lemma:'quaeso, quaesere (idiomatic)',
    meaning:'we beseech, we pray, we ask',
    grammar:'Verb - present indicative active, 1st person plural (used idiomatically like "please")',
    pronunciation:'KWEH-soo-moos',
    context:'Aufer a nobis, quaesumus, Domine (take away from us, we beseech Thee, O Lord)',
    forms:['quaesumus'],
    englishRules:[]
  },
  puris:{
    key:'puris',num:'L6579',
    lemma:'purus, pura, purum',
    meaning:'pure, clean',
    grammar:'Adjective - 1st/2nd declension - ablative plural, describing mentibus (minds)',
    pronunciation:'POO-reess',
    context:'puris mereamur mentibus introire (we may be worthy to enter with pure minds)',
    forms:['puris'],
    englishRules:[]
  },
  mereamur:{
    key:'mereamur',num:'L6580',
    lemma:'mereor, mereri',
    meaning:'we may deserve, we may be worthy',
    grammar:'Verb - deponent 2nd conjugation - present subjunctive, 1st person plural',
    pronunciation:'meh-reh-AH-moor',
    context:'puris mereamur mentibus introire (we may be worthy to enter with pure minds)',
    forms:['mereamur'],
    englishRules:[]
  },
  osculatur:{
    key:'osculatur',num:'L6581',
    lemma:'osculor, osculari',
    meaning:'he kisses',
    grammar:'Verb - deponent 1st conjugation - present indicative, 3rd person singular',
    pronunciation:'oh-skoo-LAH-toor',
    context:'Osculatur Altare in medio (he kisses the middle of the altar)',
    forms:['osculatur'],
    englishRules:[]
  },
  finita:{
    key:'finita',num:'L6582',
    lemma:'finio, finire',
    meaning:'finished, having ended',
    grammar:'Verb - 4th conjugation - perfect passive participle, ablative singular feminine',
    pronunciation:'fee-NEE-tah',
    context:'Qua finita (this being finished)',
    forms:['finita'],
    englishRules:[]
  },
  immediate:{
    key:'immediate',num:'L6583',
    lemma:'immediate (adv.)',
    meaning:'immediately, at once',
    grammar:'Adverb',
    pronunciation:'eem-meh-dee-AH-teh',
    context:'immediate dicit Kyrie eleison (he immediately says the Kyrie eleison)',
    forms:['immediate'],
    englishRules:[]
  },
  consueto:{
    key:'consueto',num:'L6584',
    lemma:'consuetus, consueta, consuetum',
    meaning:'usual, customary',
    grammar:'Adjective - 1st/2nd declension - ablative singular',
    pronunciation:'kohn-soo-EH-toh',
    context:'modo consueto (in the usual/customary manner)',
    forms:['consueto'],
    englishRules:[]
  },
  laudamus:{
    key:'laudamus',num:'L6585',
    lemma:'laudo, laudare',
    meaning:'we praise',
    grammar:'Verb - 1st conjugation - present indicative active, 1st person plural',
    pronunciation:'lau-DAH-moos',
    context:'Laudamus te (we praise Thee)',
    forms:['laudamus'],
    englishRules:[]
  },
  glorificamus:{
    key:'glorificamus',num:'L6586',
    lemma:'glorifico, glorificare',
    meaning:'we glorify',
    grammar:'Verb - 1st conjugation - present indicative active, 1st person plural',
    pronunciation:'gloh-ree-fee-KAH-moos',
    context:'Glorificamus te (we glorify Thee)',
    forms:['glorificamus'],
    englishRules:[]
  },
  unigenite:{
    key:'unigenite',num:'L6587',
    lemma:'unigenitus, unigenita, unigenitum',
    meaning:'only-begotten',
    grammar:'Adjective - 1st/2nd declension - vocative singular masculine',
    pronunciation:'oo-nee-JEH-nee-teh',
    context:'Domine Fili unigenite (O Lord, the only-begotten Son)',
    forms:['unigenite'],
    englishRules:[]
  },
  altissimus:{
    key:'altissimus',num:'L6588',
    lemma:'altissimus, altissima, altissimum',
    meaning:'most high, highest',
    grammar:'Adjective - superlative of altus - nominative singular masculine',
    pronunciation:'ahl-TEES-see-moos',
    context:'Tu solus Altissimus (Thou alone art most high)',
    forms:['altissimus'],
    englishRules:[]
  },
  caputque:{
    key:'caputque',num:'L6589',
    lemma:'caput, capitis + -que',
    meaning:'and the head',
    grammar:'Noun (caput, 3rd declension neuter, accusative singular) + enclitic "-que" (and)',
    pronunciation:'KAH-poot-kweh',
    context:'caputque aliquantulum inclinans (and bowing the head a little)',
    forms:['caputque'],
    englishRules:[]
  },
  prosequitur:{
    key:'prosequitur',num:'L6590',
    lemma:'prosequor, prosequi',
    meaning:'he continues, proceeds, follows on',
    grammar:'Verb - deponent 3rd conjugation - present indicative, 3rd person singular',
    pronunciation:'proh-SEH-kwee-toor',
    context:'et prosequitur iunctis manibus (and he continues with hands joined)',
    forms:['prosequitur'],
    englishRules:[]
  },
  inclinat:{
    key:'inclinat',num:'L6591',
    lemma:'inclino, inclinare',
    meaning:'he bows, inclines',
    grammar:'Verb - 1st conjugation - present indicative active, 3rd person singular',
    pronunciation:'een-KLEE-naht',
    context:'inclinat caput (he bows his head)',
    forms:['inclinat'],
    englishRules:[]
  },
  pulsantur:{
    key:'pulsantur',num:'L6592',
    lemma:'pulso, pulsare',
    meaning:'are rung, are struck',
    grammar:'Verb - 1st conjugation - present indicative passive, 3rd person plural',
    pronunciation:'pool-SAHN-toor',
    context:'pulsantur campanae (the bells are rung)',
    forms:['pulsantur'],
    englishRules:[]
  },
  discooperiuntur:{
    key:'discooperiuntur',num:'L6593',
    lemma:'discooperio, discooperire',
    meaning:'are uncovered',
    grammar:'Verb - 4th conjugation - present indicative passive, 3rd person plural',
    pronunciation:'dees-koh-oh-peh-ree-OON-toor',
    context:'discooperiuntur imagines (the images are uncovered)',
    forms:['discooperiuntur'],
    englishRules:[]
  },
  imagines:{
    key:'imagines',num:'L6594',
    lemma:'imago, imaginis',
    meaning:'images, statues',
    grammar:'Noun - 3rd declension feminine - nominative plural',
    pronunciation:'ee-MAH-jee-ness',
    context:'discooperiuntur imagines (the images are uncovered)',
    forms:['imagines'],
    englishRules:[]
  },
  campanarum:{
    key:'campanarum',num:'L6595',
    lemma:'campana, campanae',
    meaning:'of the bells',
    grammar:'Noun - 1st declension feminine - genitive plural',
    pronunciation:'kahm-pah-NAH-room',
    context:'pulsatio campanarum (the ringing of the bells)',
    forms:['campanarum'],
    englishRules:[]
  },
  dicti:{
    key:'dicti',num:'L6596',
    lemma:'dictus, dicta, dictum (from dico)',
    meaning:'of the said, of the aforementioned',
    grammar:'Adjective/participle - 1st/2nd declension - genitive singular masculine',
    pronunciation:'DEEK-tee',
    context:'dicti hymni (of the said hymn)',
    forms:['dicti'],
    englishRules:[]
  },
  hymni:{
    key:'hymni',num:'L6597',
    lemma:'hymnus, hymni',
    meaning:'of the hymn',
    grammar:'Noun - 2nd declension masculine - genitive singular',
    pronunciation:'HEEM-nee',
    context:'dicti hymni incipit cantus (the singing of the said hymn begins)',
    forms:['hymni'],
    englishRules:[]
  },
  peragantur:{
    key:'peragantur',num:'L6598',
    lemma:'perago, peragere',
    meaning:'may be carried out, may be performed',
    grammar:'Verb - 3rd conjugation - present subjunctive passive, 3rd person plural',
    pronunciation:'peh-rah-GAHN-toor',
    context:'sacrae caeremoniae peragantur (the sacred ceremonies may be carried out)',
    forms:['peragantur'],
    englishRules:[]
  },
  diverso:{
    key:'diverso',num:'L6599',
    lemma:'diversus, diversa, diversum',
    meaning:'different',
    grammar:'Adjective - 1st/2nd declension - ablative singular neuter',
    pronunciation:'dee-VEHR-soh',
    context:'tempore diverso (at a different time)',
    forms:['diverso'],
    englishRules:[]
  },
  cathedralis:{
    key:'cathedralis',num:'L6600',
    lemma:'cathedralis, cathedrale',
    meaning:'cathedral (main church of a diocese)',
    grammar:'Adjective - 3rd declension - genitive singular feminine',
    pronunciation:'kah-teh-DRAH-lees',
    context:'ecclesiae cathedralis (of the cathedral church)',
    forms:['cathedralis'],
    englishRules:[]
  },
  ordinarius:{
    key:'ordinarius',num:'L6601',
    lemma:'ordinarius, ordinarii',
    meaning:'the Ordinary (the local bishop)',
    grammar:'Noun - 2nd declension masculine - nominative singular',
    pronunciation:'or-dee-NAH-ree-oos',
    context:'adeatur Ordinarius loci (the Ordinary of the place is to be consulted)',
    forms:['ordinarius'],
    englishRules:[]
  },
  principalis:{
    key:'principalis',num:'L6602',
    lemma:'principalis, principale',
    meaning:'principal, chief',
    grammar:'Adjective - 3rd declension - nominative/genitive singular feminine',
    pronunciation:'preen-chee-PAH-lees',
    context:'matrix aut principalis (the mother church or principal church)',
    forms:['principalis'],
    englishRules:[]
  },
  pulsentur:{
    key:'pulsentur',num:'L6603',
    lemma:'pulso, pulsare',
    meaning:'may be rung, may be struck',
    grammar:'Verb - 1st conjugation - present subjunctive passive, 3rd person plural',
    pronunciation:'pool-SEHN-toor',
    context:'campanae pulsentur (the bells may be rung)',
    forms:['pulsentur'],
    englishRules:[]
  },
  per:{
    key:'per',num:'L6604',
    lemma:'per',
    meaning:'through, by, by means of, for the sake of',
    grammar:'Preposition - takes accusative',
    pronunciation:'pehr',
    context:'per merita Sanctorum tuorum (by the merits of Thy Saints); Per Christum, Dominum nostrum (through Christ our Lord)',
    forms:['per'],
    englishRules:[]
  },
  caput:{
    key:'caput',num:'L6605',
    lemma:'caput, capitis',
    meaning:'head',
    grammar:'Noun - 3rd declension neuter - accusative singular',
    pronunciation:'KAH-poot',
    context:'caputque aliquantulum inclinans (and bowing the head a little)',
    forms:['caput'],
    englishRules:[]
  },
  rex:{
    key:'rex',num:'L6606',
    lemma:'rex, regis',
    meaning:'king',
    grammar:'Noun - 3rd declension masculine - nominative singular',
    pronunciation:'rehks',
    context:'Rex caelestis (heavenly King)',
    forms:['rex'],
    englishRules:[]
  },
  sedes:{
    key:'sedes',num:'L6607',
    lemma:'sedeo, sedere',
    meaning:'you sit, thou sittest',
    grammar:'Verb - 2nd conjugation - present indicative active, 2nd person singular',
    pronunciation:'SEH-dess',
    context:'Qui sedes ad dexteram Patris (Who sittest at the right hand of the Father)',
    forms:['sedes'],
    englishRules:[]
  },
  unus:{
    key:'unus',num:'L6610',
    lemma:'unus, una, unum',
    meaning:'one',
    grammar:'Numeral adjective - irregular declension (genitive singular -ius, dative singular -i for all genders)',
    pronunciation:'OO-nus, OO-nah, OO-num',
    context:'one; e.g. Credo in unum Deum ("I believe in one God"), unam sanctam catholicam Ecclesiam ("one holy catholic Church")',
    forms:['unus','una','unum','unius','uni','unam','uno'],
    formInfo:{
      unus:'Nominative masculine singular - one',
      una:'Nominative/ablative feminine singular - one',
      unum:'Nominative/accusative neuter singular, or accusative masculine singular - one',
      unius:'Genitive singular (all genders) - of one',
      uni:'Dative singular (all genders) - to/for one',
      unam:'Accusative feminine singular - one',
      uno:'Ablative masculine/neuter singular - one'
    },
    englishRules:[]
  },
  semel:{
    key:'semel',num:'L6611',
    lemma:'semel',
    meaning:'once',
    grammar:'Adverb - invariable',
    pronunciation:'SEH-mel',
    context:'once; a single time (not to be confused with unus, "one")',
    forms:['semel'],
    englishRules:[]
  }
};

const johnBaptistSections = [
  {id:'preparation',title:'At the Foot of the Altar',part:'Prayers of preparation',rubric:'The priest begins at the foot of the altar. Make the responses shown in burgundy.',blocks:[
    {la:'In nomine Patris, et Filii, et Spiritus Sancti. Amen.',en:'In the name of the Father, and of the Son, and of the Holy Ghost. Amen.'},
    {la:'Introibo ad altare Dei.',en:'I will go unto the altar of God.'},
    {la:'Ad Deum qui lætificat juventutem meam.',en:'Unto God, who gives joy to my youth.',response:true},
    {la:'Adjutorium nostrum in nomine Domini.',en:'Our help is in the name of the Lord.'},
    {la:'Qui fecit cælum et terram.',en:'Who made heaven and earth.',response:true}
  ]},
  {id:'introit',title:'Introit',part:'Proper of the day · Isaias 49',rubric:'The priest ascends the altar and reads the Introit.',blocks:[
    {la:'De ventre matris meæ vocavit me Dominus nomine meo: et posuit os meum ut gladium acutum: sub tegumento manus suæ protexit me, et posuit me quasi sagittam electam.',en:'From the womb of my mother the Lord called me by my name; and He made my mouth like a sharp sword. In the shadow of His hand He protected me, and made me as a chosen arrow.'},
    {la:'Bonum est confiteri Domino: et psallere nomini tuo, Altissime. Gloria Patri, et Filio, et Spiritui Sancto.',en:'It is good to give praise to the Lord, and to sing to Thy name, O Most High. Glory be to the Father, and to the Son, and to the Holy Ghost.',ref:'Psalm 91:2'}
  ]},
  {id:'kyrie',title:'Kyrie',part:'Ordinary of the Mass',blocks:[
    {la:'Kyrie, eleison. Kyrie, eleison. Kyrie, eleison.',en:'Lord, have mercy. Lord, have mercy. Lord, have mercy.'},
    {la:'Christe, eleison. Christe, eleison. Christe, eleison.',en:'Christ, have mercy. Christ, have mercy. Christ, have mercy.'},
    {la:'Kyrie, eleison. Kyrie, eleison. Kyrie, eleison.',en:'Lord, have mercy. Lord, have mercy. Lord, have mercy.'}
  ]},
  {id:'gloria',title:'Gloria',part:'Ordinary of the Mass',rubric:'The Gloria is said on this first-class feast.',blocks:[
    {la:'Gloria in excelsis Deo. Et in terra pax hominibus bonæ voluntatis. Laudamus te. Benedicimus te. Adoramus te. Glorificamus te.',en:'Glory to God in the highest. And on earth peace to people of good will. We praise Thee. We bless Thee. We adore Thee. We glorify Thee.'},
    {la:'Gratias agimus tibi propter magnam gloriam tuam. Domine Deus, Rex cælestis, Deus Pater omnipotens.',en:'We give Thee thanks for Thy great glory. Lord God, heavenly King, God the Father almighty.'},
    {la:'Domine Fili unigenite, Jesu Christe. Domine Deus, Agnus Dei, Filius Patris. Qui tollis peccata mundi, miserere nobis.',en:'O Lord Jesus Christ, the Only-begotten Son. Lord God, Lamb of God, Son of the Father. Thou who takest away the sins of the world, have mercy on us.'},
    {la:'Quoniam tu solus Sanctus. Tu solus Dominus. Tu solus Altissimus, Jesu Christe. Cum Sancto Spiritu, in gloria Dei Patris. Amen.',en:'For Thou alone art holy. Thou alone art Lord. Thou alone art Most High, Jesus Christ. With the Holy Ghost, in the glory of God the Father. Amen.'}
  ]},
  {id:'collect',title:'Collect',part:'Proper of the day',blocks:[
    {la:'Dominus vobiscum.',en:'The Lord be with you.'},
    {la:'Et cum spiritu tuo.',en:'And with thy spirit.',response:true},
    {la:'Deus, qui præsentem diem honorabilem nobis in beati Joannis nativitate fecisti: da populis tuis spiritualium gratiam gaudiorum; et omnium fidelium mentes dirige in viam salutis æternæ.',en:'O God, who hast made this present day honorable to us by the birth of blessed John: grant to Thy people the grace of spiritual joys, and direct the minds of all the faithful into the way of eternal salvation.'},
    {la:'Per Dominum nostrum Jesum Christum, Filium tuum. Amen.',en:'Through our Lord Jesus Christ, Thy Son. Amen.',response:true}
  ]},
  {id:'epistle',title:'Epistle',part:'Isaias 49:1–3, 5–7',rubric:'Sit and listen to the prophecy of the servant called from the womb.',blocks:[
    {la:'Audite, insulæ, et attendite, populi de longe: Dominus ab utero vocavit me, de ventre matris meæ recordatus est nominis mei.',en:'Give ear, ye islands, and hearken, ye people from afar. The Lord hath called me from the womb; from the bowels of my mother He hath been mindful of my name.'},
    {la:'Et posuit os meum quasi gladium acutum; in umbra manus suæ protexit me, et posuit me sicut sagittam electam; in pharetra sua abscondit me.',en:'And He hath made my mouth like a sharp sword; in the shadow of His hand He hath protected me, and hath made me as a chosen arrow; in His quiver He hath hidden me.'},
    {la:'Et nunc dicit Dominus, formans me ex utero servum sibi: Dedi te in lucem gentium, ut sis salus mea usque ad extremum terræ.',en:'And now saith the Lord, who formed me from the womb to be His servant: I have given thee to be the light of the nations, that thou mayest be My salvation even to the farthest part of the earth.'}
  ]},
  {id:'gradual',title:'Gradual & Alleluia',part:'Proper chants',blocks:[
    {la:'Priusquam te formarem in utero, novi te: et antequam exires de ventre, sanctificavi te.',en:'Before I formed thee in the womb, I knew thee; and before thou camest forth out of the womb, I sanctified thee.',ref:'Jeremias 1:5'},
    {la:'Alleluia, alleluia. Tu, puer, propheta Altissimi vocaberis: præibis ante Dominum parare vias ejus. Alleluia.',en:'Alleluia, alleluia. Thou, child, shalt be called the prophet of the Most High; thou shalt go before the Lord to prepare His ways. Alleluia.',ref:'Luke 1:76'}
  ]},
  {id:'gospel',title:'Holy Gospel',part:'Luke 1:57–68',rubric:'Stand. Trace a small cross on your forehead, lips, and heart.',blocks:[
    {la:'Dominus vobiscum. Sequentia sancti Evangelii secundum Lucam.',en:'The Lord be with you. The continuation of the holy Gospel according to Luke.'},
    {la:'Gloria tibi, Domine.',en:'Glory be to Thee, O Lord.',response:true},
    {la:'Elisabeth impletum est tempus pariendi, et peperit filium. Et audierunt vicini et cognati ejus quia magnificavit Dominus misericordiam suam cum illa, et congratulabantur ei.',en:'Elizabeth’s time was fulfilled that she should be delivered, and she brought forth a son. And her neighbors and kinsfolk heard that the Lord had shown His great mercy toward her, and they rejoiced with her.'},
    {la:'Et factum est in die octavo, venerunt circumcidere puerum, et vocabant eum nomine patris sui Zachariam. Et respondens mater ejus dixit: Nequaquam, sed vocabitur Joannes.',en:'And it came to pass that on the eighth day they came to circumcise the child, and they called him by his father’s name Zachary. And his mother answering said: Not so, but he shall be called John.'},
    {la:'Et dixerunt ad illam: Quia nemo est in cognatione tua, qui vocetur hoc nomine. Innuebant autem patri ejus, quem vellet vocari eum.',en:'And they said to her: There is none of thy kindred that is called by this name. And they made signs to his father, what he would have him called.'},
    {la:'Et postulans pugillarem scripsit, dicens: Joannes est nomen ejus. Et mirati sunt universi. Apertum est autem illico os ejus et lingua ejus, et loquebatur benedicens Deum.',en:'And demanding a writing tablet, he wrote, saying: John is his name. And they all wondered. And immediately his mouth was opened and his tongue loosed, and he spoke, blessing God.'},
    {la:'Et factus est timor super omnes vicinos eorum: et super omnia montana Judææ divulgabantur omnia verba hæc. Etenim manus Domini erat cum illo.',en:'And fear came upon all their neighbors; and all these things were spoken abroad over all the hill country of Judea. For the hand of the Lord was with him.'},
    {la:'Et Zacharias pater ejus repletus est Spiritu Sancto, et prophetavit, dicens: Benedictus Dominus Deus Israël: quia visitavit et fecit redemptionem plebis suæ.',en:'And Zachary his father was filled with the Holy Ghost, and prophesied, saying: Blessed be the Lord God of Israel, because He hath visited and wrought the redemption of His people.'},
    {la:'Laus tibi, Christe.',en:'Praise be to Thee, O Christ.',response:true}
  ]},
  {id:'creed',title:'Credo',part:'Nicene Creed',rubric:'The Creed is said. Genuflect at “Et incarnatus est.”',blocks:[
    {la:'Credo in unum Deum, Patrem omnipotentem, factorem cæli et terræ, visibilium omnium et invisibilium.',en:'I believe in one God, the Father almighty, maker of heaven and earth, and of all things visible and invisible.'},
    {la:'Et in unum Dominum Jesum Christum, Filium Dei unigenitum. Et ex Patre natum ante omnia sæcula. Deum de Deo, lumen de lumine, Deum verum de Deo vero.',en:'And in one Lord Jesus Christ, the only-begotten Son of God. Born of the Father before all ages. God of God, light of light, true God of true God.'},
    {la:'Et incarnatus est de Spiritu Sancto ex Maria Virgine: et homo factus est.',en:'And He became incarnate by the Holy Ghost of the Virgin Mary: and was made man.'},
    {la:'Crucifixus etiam pro nobis: sub Pontio Pilato passus et sepultus est. Et resurrexit tertia die, secundum Scripturas.',en:'He was also crucified for us, suffered under Pontius Pilate, and was buried. And on the third day He rose again according to the Scriptures.'},
    {la:'Et vitam venturi sæculi. Amen.',en:'And the life of the world to come. Amen.'}
  ]},
  {id:'offertory',title:'Offertory',part:'Psalm 91:13',rubric:'The gifts are prepared. This is a fitting time for quiet personal prayer.',blocks:[
    {la:'Justus ut palma florebit: sicut cedrus, quæ in Libano est, multiplicabitur.',en:'The just man shall flourish like the palm tree; he shall grow up like the cedar of Lebanon.'},
    {la:'Orate, fratres: ut meum ac vestrum sacrificium acceptabile fiat apud Deum Patrem omnipotentem.',en:'Pray, brethren, that my sacrifice and yours may be acceptable to God the Father almighty.'},
    {la:'Suscipiat Dominus sacrificium de manibus tuis, ad laudem et gloriam nominis sui, ad utilitatem quoque nostram, totiusque Ecclesiæ suæ sanctæ.',en:'May the Lord receive the sacrifice from thy hands, to the praise and glory of His name, to our benefit and that of all His holy Church.',response:true}
  ]},
  {id:'preface',title:'Preface',part:'Common Preface',blocks:[
    {la:'Dominus vobiscum. Sursum corda. Gratias agamus Domino Deo nostro.',en:'The Lord be with you. Lift up your hearts. Let us give thanks to the Lord our God.'},
    {la:'Et cum spiritu tuo. Habemus ad Dominum. Dignum et justum est.',en:'And with thy spirit. We have lifted them to the Lord. It is meet and just.',response:true},
    {la:'Vere dignum et justum est, æquum et salutare, nos tibi semper et ubique gratias agere: Domine sancte, Pater omnipotens, æterne Deus.',en:'It is truly meet and just, right and profitable for our salvation, that we should at all times and in all places give thanks unto Thee, O holy Lord, Father almighty, eternal God.'}
  ]},
  {id:'sanctus',title:'Sanctus',part:'Ordinary of the Mass',blocks:[
    {la:'Sanctus, Sanctus, Sanctus, Dominus Deus Sabaoth. Pleni sunt cæli et terra gloria tua. Hosanna in excelsis.',en:'Holy, Holy, Holy, Lord God of hosts. Heaven and earth are full of Thy glory. Hosanna in the highest.'},
    {la:'Benedictus qui venit in nomine Domini. Hosanna in excelsis.',en:'Blessed is He who comes in the name of the Lord. Hosanna in the highest.'}
  ]},
  {id:'canon',title:'The Roman Canon',part:'Silent prayer',rubric:'The Canon is prayed in silence. Kneel. At each elevation, look upon the Sacred Host and then the Chalice.',blocks:[
    {la:'Te igitur, clementissime Pater, per Jesum Christum Filium tuum Dominum nostrum, supplices rogamus ac petimus, uti accepta habeas et benedicas hæc dona, hæc munera, hæc sancta sacrificia illibata.',en:'Therefore, most merciful Father, through Jesus Christ Thy Son our Lord, we humbly pray and beseech Thee to accept and bless these gifts, these offerings, these holy and unspotted sacrifices.'},
    {la:'Hoc est enim Corpus meum.',en:'For this is My Body.'},
    {la:'Hic est enim calix Sanguinis mei, novi et æterni testamenti: mysterium fidei: qui pro vobis et pro multis effundetur in remissionem peccatorum.',en:'For this is the Chalice of My Blood, of the new and eternal testament: the mystery of faith, which shall be shed for you and for many unto the remission of sins.'},
    {la:'Per ipsum, et cum ipso, et in ipso, est tibi Deo Patri omnipotenti, in unitate Spiritus Sancti, omnis honor et gloria. Amen.',en:'Through Him, and with Him, and in Him, is unto Thee, God the Father almighty, in the unity of the Holy Ghost, all honor and glory. Amen.',response:true}
  ]},
  {id:'pater',title:'Pater Noster',part:'The Lord’s Prayer',blocks:[
    {la:'Pater noster, qui es in cælis: sanctificetur nomen tuum: adveniat regnum tuum: fiat voluntas tua, sicut in cælo et in terra.',en:'Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven.'},
    {la:'Panem nostrum quotidianum da nobis hodie: et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem.',en:'Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation.'},
    {la:'Sed libera nos a malo. Amen.',en:'But deliver us from evil. Amen.',response:true}
  ]},
  {id:'agnus',title:'Agnus Dei',part:'Ordinary of the Mass',blocks:[
    {la:'Agnus Dei, qui tollis peccata mundi: miserere nobis.',en:'Lamb of God, who takest away the sins of the world: have mercy on us.'},
    {la:'Agnus Dei, qui tollis peccata mundi: miserere nobis.',en:'Lamb of God, who takest away the sins of the world: have mercy on us.'},
    {la:'Agnus Dei, qui tollis peccata mundi: dona nobis pacem.',en:'Lamb of God, who takest away the sins of the world: grant us peace.'}
  ]},
  {id:'communion',title:'Holy Communion',part:'Luke 1:76',rubric:'When the bell rings, the server says the Confiteor. Prepare to receive Communion.',blocks:[
    {la:'Ecce Agnus Dei, ecce qui tollit peccata mundi.',en:'Behold the Lamb of God; behold Him who takes away the sins of the world.'},
    {la:'Domine, non sum dignus ut intres sub tectum meum: sed tantum dic verbo, et sanabitur anima mea.',en:'Lord, I am not worthy that Thou shouldst enter under my roof; but only say the word, and my soul shall be healed.',response:true},
    {la:'Tu, puer, propheta Altissimi vocaberis: præibis enim ante faciem Domini parare vias ejus.',en:'Thou, child, shalt be called the prophet of the Most High; for thou shalt go before the face of the Lord to prepare His ways.',ref:'Communion antiphon'}
  ]},
  {id:'dismissal',title:'Postcommunion & Dismissal',part:'Concluding rites',blocks:[
    {la:'Súmat Ecclésia tua, Deus, beáti Joánnis Baptístæ generatióne lætítiam: per quem suæ regeneratiónis cognóvit auctórem, Dóminum nostrum Jesum Christum, Fílium tuum.',en:'May Thy Church, O God, rejoice at the birth of blessed John the Baptist, through whom she knew the Author of her regeneration, our Lord Jesus Christ, Thy Son.'},
    {la:'Dominus vobiscum. Ite, missa est.',en:'The Lord be with you. Go, the Mass is ended.'},
    {la:'Deo gratias.',en:'Thanks be to God.',response:true},
    {la:'Benedicat vos omnipotens Deus, Pater, et Filius, et Spiritus Sanctus. Amen.',en:'May almighty God bless you, the Father, and the Son, and the Holy Ghost. Amen.',response:true}
  ]}
];

function cloneSection(section) {
  return JSON.parse(JSON.stringify(section));
}

const johnPaulSections = johnBaptistSections.map(section => {
  if (section.id === 'introit') return {
    id:'introit', title:'Introit', part:'Proper of the day · Psalm 33', rubric:'The Mass of Saints John and Paul, Martyrs, begins with the afflictions and deliverance of the just.',
    blocks:[
      {la:'Multæ tribulationes justorum, et de his omnibus liberavit eos Dominus: Dominus custodit omnia ossa eorum: unum ex his non conteretur.', en:'Many are the afflictions of the just; but out of them all will the Lord deliver them. The Lord keepeth all their bones; not one of them shall be broken.', ref:'Psalm 33:20-21'},
      {la:'Benedicam Dominum in omni tempore: semper laus ejus in ore meo. Gloria Patri, et Filio, et Spiritui Sancto.', en:'I will bless the Lord at all times; His praise shall be always in my mouth. Glory be to the Father, and to the Son, and to the Holy Ghost.', ref:'Psalm 33:2'}
    ]
  };
  if (section.id === 'collect') return {
    id:'collect', title:'Collect', part:'Proper of the day', blocks:[
      {la:'Dominus vobiscum.', en:'The Lord be with you.'},
      {la:'Et cum spiritu tuo.', en:'And with thy spirit.', response:true},
      {la:'Quæsumus, omnipotens Deus: ut nos geminata lætitia hodiernæ festivitatis excipiat, quæ de beatorum Joannis et Pauli glorificatione procedit; quos eadem fides et passio vere fecit esse germanos.', en:'We beseech Thee, almighty God, that on this feast-day we may have the double joy of celebrating blessed John and Paul, true brothers who obtained eternal glory through one faith and one martyrdom.'},
      {la:'Per Dominum nostrum Jesum Christum, Filium tuum. Amen.', en:'Through our Lord Jesus Christ, Thy Son. Amen.', response:true}
    ]
  };
  if (section.id === 'epistle') return {
    id:'epistle', title:'Lesson', part:'Ecclesiasticus 44:10–15', rubric:'Sit. The Lesson praises righteous men whose name lives on in the Church.',
    blocks:[
      {la:'Hi viri misericordiæ sunt, quorum pietates non defuerunt: cum semine eorum permanent bona, hereditas sancta nepotes eorum, et in testamentis stetit semen eorum.', en:'These were godly men whose virtues have not been forgotten; their wealth remains in their families, their posterity are a holy inheritance, and their seed has stood in the covenants.'},
      {la:'Corpora ipsorum in pace sepulta sunt, et nomen eorum vivit in generationem et generationem. Sapientiam ipsorum narrent populi, et laudem eorum nuntiet Ecclesia.', en:'Their bodies are buried in peace, but their name lives on and on. At gatherings their wisdom is retold and the assembly sings their praises.'},
      {la:'Deo gratias.', en:'Thanks be to God.', response:true}
    ]
  };
  if (section.id === 'gradual') return {
    id:'gradual', title:'Gradual & Alleluia', part:'Proper chants', blocks:[
      {la:'Ecce, quam bonum et quam jucundum, habitare fratres in unum! Sicut unguentum in capite, quod descendit in barbam, barbam Aaron.', en:'Behold, how good it is, and how pleasant, where brethren dwell as one! It is as when the precious ointment upon the head runs down over the beard, the beard of Aaron.', ref:'Psalm 132:1-2'},
      {la:'Alleluia, alleluia. Hæc est vera fraternitas, quæ vicit mundi crimina: Christum secuta est, inclita tenens regna cœlestia. Alleluia.', en:'Alleluia, alleluia. This is the true fraternal love, which conquers the wickedness of the world: holding fast to the glory of the heavenly kingdom, it has followed Christ. Alleluia.'}
    ]
  };
  if (section.id === 'gospel') return {
    id:'gospel', title:'Holy Gospel', part:'Luke 12:1–8', rubric:'Stand. Trace a small cross on your forehead, lips, and heart.',
    blocks:[
      {la:'Dominus vobiscum. Sequentia sancti Evangelii secundum Lucam.', en:'The Lord be with you. The continuation of the holy Gospel according to Luke.'},
      {la:'Gloria tibi, Domine.', en:'Glory be to Thee, O Lord.', response:true},
      {la:'In illo tempore: Dixit Jesus discipulis suis: Attendite a fermento pharisæorum, quod est hypocrisis. Nihil autem opertum est, quod non reveletur: neque absconditum, quod non sciatur.', en:'At that time, Jesus said to His disciples: Beware of the leaven of the Pharisees, which is hypocrisy. But there is nothing concealed that will not be disclosed, and nothing hidden that will not be made known.'},
      {la:'Dico autem vobis amicis meis: Ne terreamini ab his, qui occidunt corpus, et post hæc non habent amplius quid faciant. Ostendam autem vobis, quem timeatis.', en:'But I say to you, My friends: Do not be afraid of those who kill the body, and after that have nothing more that they can do. But I will show you whom you shall fear.'},
      {la:'Nolite ergo timere: multis passeribus pluris estis vos. Dico autem vobis: Omnis, quicumque confessus fuerit me coram hominibus, et Filius hominis confitebitur illum coram Angelis Dei.', en:'Therefore do not be afraid; you are of more value than many sparrows. And I say to you: everyone who acknowledges Me before men, him will the Son of Man also acknowledge before the angels of God.'},
      {la:'Laus tibi, Christe.', en:'Praise be to Thee, O Christ.', response:true}
    ]
  };
  if (section.id === 'creed') return {id:'creed', title:'Credo', part:'Omitted today', rubric:'The Creed is not said at this third-class feast.', blocks:[{la:'Credo omittitur.', en:'The Creed is omitted.'}]};
  if (section.id === 'offertory') return {
    id:'offertory', title:'Offertory', part:'Psalm 5:12–13', blocks:[
      {la:'Gloriabuntur in te omnes, qui diligunt nomen tuum: quoniam tu, Domine, benedices justo: Domine, ut scuto bonæ voluntatis tuæ coronasti nos.', en:'All who love Thy name shall glory in Thee; for Thou, O Lord, blessest the just man. O Lord, Thou surroundest us with the shield of Thy good will.'},
      {la:'Orate, fratres: ut meum ac vestrum sacrificium acceptabile fiat apud Deum Patrem omnipotentem.', en:'Pray, brethren, that my sacrifice and yours may be acceptable to God the Father almighty.'},
      {la:'Suscipiat Dominus sacrificium de manibus tuis, ad laudem et gloriam nominis sui, ad utilitatem quoque nostram, totiusque Ecclesiæ suæ sanctæ.', en:'May the Lord receive the sacrifice from thy hands, to the praise and glory of His name, to our benefit and that of all His holy Church.', response:true}
    ]
  };
  if (section.id === 'communion') return {
    id:'communion', title:'Holy Communion', part:'Wisdom 3:4–6', rubric:'Prepare to receive Communion.',
    blocks:[
      {la:'Ecce Agnus Dei, ecce qui tollit peccata mundi.', en:'Behold the Lamb of God; behold Him who takes away the sins of the world.'},
      {la:'Domine, non sum dignus ut intres sub tectum meum: sed tantum dic verbo, et sanabitur anima mea.', en:'Lord, I am not worthy that Thou shouldst enter under my roof; but only say the word, and my soul shall be healed.', response:true},
      {la:'Et si coram hominibus tormenta passi sunt, Deus tentavit eos: tamquam aurum in fornace probavit eos, et quasi holocausta accepit eos.', en:'For if before men they be punished, God tried them; as gold in the furnace He proved them, and as sacrificial offerings He took them to Himself.', ref:'Communion antiphon'}
    ]
  };
  if (section.id === 'dismissal') return {
    id:'dismissal', title:'Postcommunion & Dismissal', part:'Concluding rites', blocks:[
      {la:'Sumpsimus, Domine, sanctorum Martyrum tuorum Joannis et Pauli solemnia celebrantes, sacramenta cœlestia: præsta, quæsumus; ut, quod temporaliter gerimus, æternis gaudiis consequamur.', en:'We have partaken of the heavenly sacrament, O Lord, as we celebrate the feast of Thy holy Martyrs John and Paul; grant, we beseech Thee, that what we do in time we may reap in joy in eternity.'},
      {la:'Dominus vobiscum. Ite, missa est.', en:'The Lord be with you. Go, the Mass is ended.'},
      {la:'Deo gratias.', en:'Thanks be to God.', response:true},
      {la:'Benedicat vos omnipotens Deus, Pater, et Filius, et Spiritus Sanctus. Amen.', en:'May almighty God bless you, the Father, and the Son, and the Holy Ghost. Amen.', response:true}
    ]
  };
  return cloneSection(section);
});

johnPaulSections.splice(johnPaulSections.findIndex(section => section.id === 'preface'), 0, {
  id:'secret', title:'Secret', part:'Proper of the day', rubric:'The Secret is prayed quietly after the Offertory.',
  blocks:[
    {la:'Hostias tibi, Domine, sanctorum Martyrum tuorum Joannis et Pauli dicatas meritis, benignus assume: et ad perpetuum nobis tribue provenire subsidium.', en:'O Lord, graciously accept, through the merits of Thy holy Martyrs John and Paul, the sacrificial gifts dedicated to Thee, and grant they may prove to be for us a lasting help.'},
    {la:'Per Dominum nostrum Jesum Christum, Filium tuum. Amen.', en:'Through our Lord Jesus Christ, Thy Son. Amen.', response:true}
  ]
});

const embeddedMasses = {
  [SAMPLE_DATE]: {
    title:'The Nativity of St. John the Baptist',
    latinTitle:'In Nativitate S. Joannis Baptistæ',
    meta:'First class · White',
    vestment:'white',
    sections:johnBaptistSections,
    note:'Built-in sample Mass.'
  },
  '2026-06-26': {
    title:'Saints John and Paul, Martyrs',
    latinTitle:'Ss. Joannis et Pauli Martyrum',
    meta:'Third class · Red',
    vestment:'red',
    sections:johnPaulSections,
    note:'Loaded from the installed daily Mass library.'
  }
};

function computerDateISO(date = new Date()) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0,10);
}

function missingMassSections(value) {
  return [{
    id:'calendar-pending',
    title:'Daily Mass not installed yet',
    part:value,
    rubric:'The app is reading your computer date correctly, but this date is not in the installed Mass library yet.',
    blocks:[
      {la:'Calendarium plenum nondum insertum est.', en:'The complete 1962 calendar import has not been installed yet.'},
      {la:'Proxima pars operis est omnes dies Missalis ordinare.', en:'The next production step is to import and structure every day of the 1962 Missal.'}
    ]
  }];
}

let currentMass = embeddedMasses[computerDateISO()] || embeddedMasses[SAMPLE_DATE];
let sections = currentMass.sections;
const importedMasses = {};
const importedYears = new Set();

function readStoredArray(storageKey) {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

const state = {
  mode: localStorage.getItem('ad-altare-mode') || 'follow',
  saved: readStoredArray('ad-altare-saved'),
  learning: readStoredArray('ad-altare-learning'),
  known: readStoredArray('ad-altare-known'),
  alignments: readStoredArray('ad-altare-alignments').filter(item =>
    item && item.key && item.latinForm && item.latinSurface && item.englishPhrase
  ),
  explored: new Set(readStoredArray('ad-altare-explored')),
  activeWord: null,
  editorUnlocked: false,
  editorActive: false,
  alignmentLatin: null,
  alignmentEnglishAnchor: null,
  alignmentEnglishStart: null,
  alignmentEnglishEnd: null,
  cardIndex: 0,
  cardRevealed: false,
  wakeLock: null
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[character]));
}

function normalizeWord(word) {
  return String(word ?? '')
    .toLocaleLowerCase('la')
    .replace(/[æǽ]/g,'ae')
    .replace(/[œ]/g,'oe')
    .replace(/j/g,'i')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/gi,'');
}

const normalizedDictionary = new Map();
Object.entries(dictionary).forEach(([key,entry]) => {
  normalizedDictionary.set(normalizeWord(key),entry);
});

function dictionaryEntryForKey(key) {
  return dictionary[key] || normalizedDictionary.get(normalizeWord(key));
}

const vocabularyForms = new Map();
Object.values(vocabularyLexicon).forEach(entry => {
  entry.forms.forEach(form => vocabularyForms.set(normalizeWord(form),entry.key));
});

const generatedLexicon = window.AD_ALTARE_LATIN_LEXICON || { entries:{}, formIndex:{} };
const bundledMassLibraries = window.AD_ALTARE_MASS_LIBRARIES || {};
const vocabularyFormCorrections = new Map([
  // "tua" is a form of the possessive adjective tuus, not the pronoun tu.
  ['tua','tuus'],
  // The auto-generated lexicon's form index wrongly points "altare" to "ali" (another).
  // "altare" already has its own correct entry (altar), so point it at itself.
  ['altare','altare']
]);

function cleanVisibleForm(form) {
  return String(form ?? '').replace(/^[^A-Za-zÀ-ſÆæŒœ]+|[^A-Za-zÀ-ſÆæŒœ]+$/g,'');
}

function moveSingleCrossToLineStart(line) {
  const crosses = String(line ?? '').match(/✠/g) || [];
  if (crosses.length !== 1) return line;
  const marker = String(line).match(/^(\s*(?:[℣℟]\.|[PSM]\.)\s*)/u);
  if (!marker) return line;
  const withoutCross = String(line).replace(/\s*✠\s*/u,' ').replace(/\s{2,}/g,' ');
  return withoutCross.replace(marker[1],`${marker[1]}✠ `);
}

function normalizeSingleCrossPlacement(text) {
  return String(text ?? '').split('\n').map(moveSingleCrossToLineStart).join('\n');
}

function protectPhraseAbbreviations(text) {
  return String(text ?? '')
    .replace(/(^|\s)((?:[℣℟]|[PSM])\.)/gu,(_match,prefix,marker) => `${prefix}${marker.replace('.','\uE000')}`)
    .replace(
      /\b(?:St|Ss|Ps|Isa|Tit|Rom|Cor|Luc|Matt|Joann|Cap|Cf|N)\./gi,
      match => match.replace('.','\uE000')
    );
}

function splitPhraseParts(text,separator) {
  return protectPhraseAbbreviations(text)
    .split(separator)
    .map(part => part.replace(/\uE000/g,'.').trim())
    .filter(Boolean);
}

function splitStrongPhrases(text) {
  return splitPhraseParts(text,/(?<=[.;:!?])\s+/);
}

function splitCommaPhrases(text) {
  return splitPhraseParts(text,/(?<=,)\s+/);
}

function pairedLineSegments(latinText,englishText) {
  const latinLines = normalizeSingleCrossPlacement(latinText).split('\n');
  const englishLines = normalizeSingleCrossPlacement(englishText).split('\n');
  if (latinLines.length !== englishLines.length) return sequentialPhraseSegments(latinText,englishText);
  return latinLines.flatMap((latin,lineIndex) => {
    const english = englishLines[lineIndex] || '';
    const reviewedRows = confirmedAlignedPhraseSegments(latin,english,lineIndex);
    if (reviewedRows) return reviewedRows;
    return sequentialPhraseSegments(latin,english).map((segment,phraseIndex) => ({
      ...segment,
      lineIndex,
      phraseIndex
    }));
  });
}

function pairedPhraseSegments(latinText,englishText) {
  const normalizedLatin = normalizeSingleCrossPlacement(latinText);
  const normalizedEnglish = normalizeSingleCrossPlacement(englishText);
  const latinLines = normalizedLatin.split('\n');
  const englishLines = normalizedEnglish.split('\n');
  const segments = [];

  const appendCommaPairs = (pair,lineIndex,phraseIndex) => {
    const latinComma = splitCommaPhrases(pair.latin);
    const englishComma = splitCommaPhrases(pair.english);
    const commaPairs = latinComma.length === englishComma.length && latinComma.length > 1
      ? latinComma.map((latin,index) => ({latin,english:englishComma[index]}))
      : [pair];
    commaPairs.forEach(item => {
      segments.push({
        latin:item.latin,
        english:item.english,
        lineIndex,
        phraseIndex:phraseIndex.value++
      });
    });
  };

  const appendLinePair = (latinLine,englishLine,lineIndex) => {
    const latinStrong = splitStrongPhrases(latinLine);
    const englishStrong = splitStrongPhrases(englishLine);
    const strongPairs = latinStrong.length === englishStrong.length && latinStrong.length > 1
      ? latinStrong.map((latin,index) => ({latin,english:englishStrong[index]}))
      : [{latin:latinLine.trim(),english:englishLine.trim()}];
    const phraseIndex = {value:0};
    strongPairs.forEach(pair => appendCommaPairs(pair,lineIndex,phraseIndex));
  };

  if (latinLines.length === englishLines.length) {
    latinLines.forEach((latinLine,lineIndex) => appendLinePair(latinLine,englishLines[lineIndex] || '',lineIndex));
    return segments;
  }

  const latinStrong = splitStrongPhrases(normalizedLatin);
  const englishStrong = splitStrongPhrases(normalizedEnglish);
  if (latinStrong.length === englishStrong.length && latinStrong.length > 1) {
    const phraseIndex = {value:0};
    latinStrong.forEach((latin,index) => {
      appendCommaPairs({latin,english:englishStrong[index]},index,phraseIndex);
    });
    return segments;
  }

  segments.push({
    latin:normalizedLatin,
    english:normalizedEnglish,
    lineIndex:0,
    phraseIndex:0
  });
  return segments;
}

function phraseWordCount(text) {
  return correspondenceWordTokens(text).length;
}

function phraseHasSpeaker(text) {
  return /^\s*(?:[℣℟]|[PSM])\./u.test(String(text || ''));
}

function sequentialPairCost(latin,english,latinCount,englishCount,latinWords,englishWords,exactPair) {
  if (!latin || !english) {
    return 3.4 + 0.04 * (latinWords || englishWords);
  }
  if (exactPair) return -4 + 0.2 * (latinCount + englishCount - 2);
  const logRatio = Math.abs(Math.log((latinWords + 2) / (englishWords + 2)));
  const lengthCost = 1.35 * logRatio * logRatio + 0.65 * logRatio;
  const markerCost = phraseHasSpeaker(latin) === phraseHasSpeaker(english) ? 0 : 1.8;
  const rubricCost = isInstructionLine(latin,english) ? 0 : 0.15;
  return lengthCost + markerCost + rubricCost + 0.45 * (latinCount + englishCount - 2);
}

// Align translated clauses in sequence while allowing a translator to split
// one clause into two (or combine two into one). This is visual alignment only:
// it never creates learning links. Exact word replacement still requires a
// reviewed correspondence specification.
function sequentialPhraseSegments(latinText,englishText) {
  const latinParts = alignmentPhraseParts(normalizeSingleCrossPlacement(latinText));
  const englishParts = alignmentPhraseParts(normalizeSingleCrossPlacement(englishText));
  if (latinParts.length <= 1 && englishParts.length <= 1) {
    return [{latin:String(latinText).trim(),english:String(englishText).trim(),lineIndex:0,phraseIndex:0}];
  }
  const rows = latinParts.length + 1;
  const columns = englishParts.length + 1;
  const groupedParts = parts => parts.map((part,start) => {
    const groups = {};
    [1,2].forEach(count => {
      if (start + count > parts.length) return;
      const text = parts.slice(start,start + count).join(' ').trim();
      groups[count] = {
        text,
        words:phraseWordCount(text),
        key:correspondenceTextKey(text)
      };
    });
    return groups;
  });
  const latinGroups = groupedParts(latinParts);
  const englishGroups = groupedParts(englishParts);
  const dp = Array.from({length:rows},() => Array(columns).fill(null));
  dp[0][0] = {cost:0,previous:null,move:null};
  const moves = [
    [1,1],[1,2],[2,1],[1,0],[0,1]
  ];
  for (let latinIndex = 0; latinIndex < rows; latinIndex += 1) {
    for (let englishIndex = 0; englishIndex < columns; englishIndex += 1) {
      const current = dp[latinIndex][englishIndex];
      if (!current) continue;
      moves.forEach(([latinCount,englishCount]) => {
        const nextLatin = latinIndex + latinCount;
        const nextEnglish = englishIndex + englishCount;
        if (nextLatin >= rows || nextEnglish >= columns) return;
        const latinGroup = latinCount ? latinGroups[latinIndex]?.[latinCount] : {text:'',words:0,key:''};
        const englishGroup = englishCount ? englishGroups[englishIndex]?.[englishCount] : {text:'',words:0,key:''};
        const latin = latinGroup?.text || '';
        const english = englishGroup?.text || '';
        const exactPair = !!latin && !!english && confirmedCorrespondenceMap.has(`${latinGroup.key}||${englishGroup.key}`);
        const cost = current.cost + sequentialPairCost(
          latin,english,latinCount,englishCount,latinGroup.words,englishGroup.words,exactPair
        );
        if (!dp[nextLatin][nextEnglish] || cost < dp[nextLatin][nextEnglish].cost) {
          dp[nextLatin][nextEnglish] = {
            cost,
            previous:[latinIndex,englishIndex],
            move:[latinCount,englishCount],
            latin,
            english
          };
        }
      });
    }
  }
  const result = [];
  let cursor = [latinParts.length,englishParts.length];
  while (cursor[0] || cursor[1]) {
    const cell = dp[cursor[0]][cursor[1]];
    if (!cell?.previous) return pairedPhraseSegments(latinText,englishText);
    result.push({latin:cell.latin,english:cell.english,lineIndex:0,phraseIndex:0});
    cursor = cell.previous;
  }
  result.reverse();
  return result.flatMap((segment,index) => {
    const reviewedRows = segment.latin && segment.english
      ? confirmedAlignedPhraseSegments(segment.latin,segment.english,0)
      : null;
    return reviewedRows || [{...segment,phraseIndex:index}];
  }).map((segment,index) => ({...segment,phraseIndex:index}));
}

function vocabularyKeyForWord(word) {
  const normalized = normalizeWord(word);
  return vocabularyFormCorrections.get(normalized) || vocabularyForms.get(normalized) || generatedLexicon.formIndex?.[normalized] || normalized;
}

function fallbackEntry(word) {
  const form = normalizeWord(word);
  return {key:form, meaning:'Tap to add this word to your study list', lemma:form, grammar:'Latin word - fuller parsing coming with the complete lexicon', pronunciation:form.replace(/c(?=[eæi])/g,'ch'), context:'Study this word in its prayer context'};
}

function wordStatus(key) {
  if (state.known.includes(key)) return 'known';
  if (state.learning.includes(key)) return 'learning';
  return '';
}

function buildWordEntry(surfaceWord, visibleForm = surfaceWord) {
  const surfaceKey = normalizeWord(surfaceWord);
  const key = vocabularyKeyForWord(surfaceKey);
  const lexiconEntry = vocabularyLexicon[key];
  const generatedEntry = generatedLexicon.entries?.[key];
  const dictionaryEntry = dictionaryEntryForKey(surfaceKey) || dictionaryEntryForKey(key);
  const fallback = fallbackEntry(surfaceKey);
  const form = cleanVisibleForm(visibleForm) || surfaceWord;

  if (!lexiconEntry && generatedEntry) {
    return {
      key,
      surfaceKey,
      form,
      meaning:generatedEntry.meaning || dictionaryEntry?.meaning || fallback.meaning,
      lemma:generatedEntry.lemma || dictionaryEntry?.lemma || key,
      grammar:generatedEntry.grammar || dictionaryEntry?.grammar || fallback.grammar,
      pronunciation:dictionaryEntry?.pronunciation || generatedEntry.pronunciation || form,
      context:generatedEntry.context || dictionaryEntry?.context || fallback.context,
      num:generatedEntry.num || '',
      display:`${generatedEntry.lemma || key} - ${generatedEntry.meaning || 'Latin word'}`
    };
  }

  if (!lexiconEntry) return {key,surfaceKey,form,num:generatedEntry?.num || '',...(dictionaryEntry || fallback)};

  return {
    key,
    surfaceKey,
    form,
    meaning:lexiconEntry.meaning,
    lemma:lexiconEntry.lemma,
    grammar:dictionaryEntry?.grammar || lexiconEntry.formInfo?.[surfaceKey] || lexiconEntry.grammar,
    pronunciation:dictionaryEntry?.pronunciation || lexiconEntry.pronunciation,
    context:dictionaryEntry?.context || lexiconEntry.formInfo?.[surfaceKey] || lexiconEntry.context,
    num:lexiconEntry.num || generatedEntry?.num || '',
    display:`${lexiconEntry.lemma} - ${lexiconEntry.meaning}`
  };
}

function studyWordForKey(key) {
  const lexiconEntry = vocabularyLexicon[key];
  if (lexiconEntry) {
    return {
      key,
      form:lexiconEntry.forms[0],
      lemma:lexiconEntry.lemma,
      meaning:lexiconEntry.meaning,
      grammar:lexiconEntry.grammar,
      pronunciation:lexiconEntry.pronunciation,
      context:lexiconEntry.context,
      display:`${lexiconEntry.lemma} - ${lexiconEntry.meaning}`
    };
  }
  const generatedEntry = generatedLexicon.entries?.[key];
  if (generatedEntry) {
    return {
      key,
      form:generatedEntry.forms?.[0] || key,
      lemma:generatedEntry.lemma || key,
      meaning:generatedEntry.meaning || 'Latin word',
      grammar:generatedEntry.grammar || 'Latin word',
      pronunciation:generatedEntry.pronunciation || generatedEntry.lemma || key,
      context:generatedEntry.context || generatedEntry.meaning || 'Latin word',
      display:`${generatedEntry.lemma || key} - ${generatedEntry.meaning || 'Latin word'}`
    };
  }
  const entry = dictionaryEntryForKey(key) || fallbackEntry(key);
  return {key,form:key,...entry};
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
}

function englishPatternForPhrase(phrase) {
  const escaped = escapeRegExp(phrase).replace(/\s+/g,'\\s+');
  const left = /^[A-Za-z]/.test(phrase) ? '\\b' : '';
  const right = /[A-Za-z]$/.test(phrase) ? '\\b' : '';
  return new RegExp(`${left}${escaped}${right}`,'gi');
}

function splitEnglishHints(value) {
  return String(value || '')
    .replace(/\([^)]*\)/g,'')
    .replace(/\baddressing\s+/gi,'')
    .split(/\s*(?:\/|;|,)\s*/g)
    .map(part => part.trim())
    .filter(part => part && !/^tap to add/i.test(part) && !/^study this word/i.test(part));
}

const interlinearEnglishTerms = {
  ad:['unto','to','toward','towards'],
  deus:['God'],
  qui:['who'],
  laetificat:['giveth joy to','gives joy to','giveth joy','gives joy','makes joyful','gladdens'],
  iuventutem:['youth'],
  meus:['my','mine']
};

const interlinearFormEnglishTerms = {
  deus:['God','the God'],
  dei:['of God','of the God'],
  deo:['to God','to the God','the God','of God','of the God','from God','from the God','with God','with the God','by God','by the God'],
  deum:['God','the God'],
  dominus:['the Lord','Lord'],
  domini:['of the Lord'],
  domino:['to the Lord','from the Lord','with the Lord','by the Lord'],
  dominum:['the Lord','Lord'],
  eiusdem:['of the same'],
  domine:['O Lord','Lord'],
  filius:['the Son','Son'],
  filii:['of the Son'],
  filio:['to the Son','from the Son','with the Son','by the Son'],
  filium:['the Son','Son'],
  nomen:['the Name','the name','Name','name'],
  nomine:['the Name','the name','Name','name'],
  nomini:['to the Name','to the name'],
  nominis:['of the Name','of the name'],
  nomina:['the names','names'],
  patris:['of the Father'],
  patri:['to the Father','for the Father'],
  patre:['from the Father','with the Father','by the Father'],
  patrem:['the Father','Father'],
  pater:['the Father','Father']
};

// Confirmed occurrence-level links for the first two parts of the Mass.
// Each entry is [Latin token index, English token group, optional additional groups].
// The indices identify correspondence only; they do not imply matching word order.
const confirmedCorrespondenceSectionIds = new Set([
  'beginning',
  'then-joining-his-hands-before-his-breast-he-begins-the-anthem',
  'introit',
  'collect',
  'lesson',
  'gradual',
  'gospel',
  'the-priest-kisses-the-altar-and-turning-towards-the-people-extending-then-joining-his-hands-says-audibly',
  'communion',
  'post-communion',
  'kyrie',
  'the-priest-signing-himself-with-the-sign-of-the-cross-says',
  'bowing-down-he-proceeds',
  'gloria',
  'gospel-response',
  'creed',
  'then-the-priest-reads-the-offertory-verse-a-short-quotation-from-holy-scripture-which-varies-with-the-mass-of-each-day-this-being-finished-he-offers-the-bread-and-wine-which-by-virtue-of-the-words-of-consecration-he-is-going-to-change-into-the-adorable-body-and-blood-of-jesus-christ-he-takes-the-paten-with-the-host-and-offering-it-up-says',
  'making-the-sign-of-the-cross-with-the-paten-he-places-the-host-upon-the-corporal-he-pours-wine-and-water-into-the-chalice-blessing-the-water-before-it-is-mixed-he-pours-a-few-drops-of-water-into-the-chalice-containing-wine-in-remembrance-of-the-water-and-blood-which-flowed-from-the-side-of-jesus-when-pierced-by-the-soldier-s-lance',
  'then-the-priest-takes-the-chalice-and-offers-it-saying',
  'the-priest-washes-his-fingers-to-symbolize-the-great-purity-and-inner-cleanliness-of-those-who-offer-or-participate-in-this-great-sacrifice',
  'bowing-down-before-the-middle-of-the-alter-the-priest-with-joined-hands-says',
  'preface',
  'canon',
  'commemoration-of-the-living',
  'we-pray-in-union-with-and-honor-the-memory-especially-of-the-glorious-ever-virgin-mary-mother-of-our-god-and-lord-jesus-christ-as-also-of-the-blessed-joseph-her-spouse',
  'spreading-his-hands-over-the-oblation-he-says',
  'the-words-of-the-consecration-of-the-host',
  'consecration-of-the-wine-then-uncovering-the-chalice-the-priest-says',
  'the-words-of-consecration-of-the-chalice',
  'with-his-hands-held-apart-he-then-proceeds',
  'extending-his-hands-he-proceeds',
  'bowing-down-with-his-hands-joined-and-placed-upon-the-altar-he-says',
  'commemoration-of-the-dead',
  'pronounces-in-a-somewhat-elevated-tone-of-voice-to-symbolize-an-act-of-public-self-humiliation-at-the-same-time-he-strikes-his-breast-in-a-token-of-contrition',
  'he-pronounces-the-first-words-in-a-somewhat-elevated-tone-of-voice-to-symbolize-an-act-of-public-self-humiliation-at-the-same-time-he-strikes-his-breast-in-a-token-of-contrition',
  'by-whom-o-lord-thou-dost-ever-create-he-signs-thrice-the-host-and-the-chalice-saying-sanctify-quicken-bless-and-give-unto-us-all-these-good-things',
  'preparation-for-communion',
  'then-the-priest-takes-the-paten-between-the-first-and-second-finger-and-says',
  'he-puts-the-particle-into-the-chalice-saying',
  'lamb-of-god-who-takest-away-the-sins-of-the-world-have-mercy-on-us',
  'the-priest-genuflects-rises-and-says',
  'then-with-his-right-hand-making-the-sign-of-the-cross-with-the-host-over-the-paten-he-says',
  'with-his-hands-joined-and-resting-on-the-altar-standing-inclined-he-says-the-three-following-prayers',
  'then-he-uncovers-the-chalice-genuflects-collects-whatever-fragments-may-remain-on-the-corporal-and-purifies-the-paten-over-the-chalice-saying',
  'the-priest-says-silently',
  'go-the-mass-is-ended',
  'conclusion',
  'he-kisses-the-altar-and-raising-his-eyes-extending-raising-and-joining-his-hands-he-bows-down-his-head-and-says',
  'leonine-prayers',
  'then-turning-to-the-gospel-side-of-the-altar-the-priest-says',
  'may-the-performance-of-my-homage-be-pleasing-to-thee-o-holy-trinity-and-grant-that-the-sacrifice-which-i-though-unworthy-have-offered-up-in-the-sight-of-thy-majesty-may-be-acceptable-to-thee-and-through-thy-mercy-be-a-propitiation-for-me-and-for-all-those-for-whom-i-have-offered-it-through-christ-our-lord-amen'
]);

const confirmedCorrespondenceSpecs = [{"latin":"Fratres: Renovámini spíritu mentis vestræ, et indúite novum hóminem, qui secúndum Deum creátus est in iustítia et sanctitáte veritátis. Propter quod deponéntes mendácium, loquímini veritátem unusquísque cum próximo suo: quóniam sumus ínvicem membra. Irascímini, et nolíte peccáre: sol non occídat super iracúndiam vestram. Nolíte locum dare diábolo: qui furabátur, iam non furétur; magis autem labóret, operándo mánibus suis, quod bonum est, ut hábeat, unde tríbuat necessitátem patiénti.","english":"Brethren: Be renewed in the spirit of your mind, and put on the new man, which has been created according to God in justice and holiness of truth. Wherefore, put away lying and speak truth each one with his neighbor, because we are members of one another. Be angry and do not sin; do not let the sun go down upon your anger; do not give place to the devil. He who was wont to steal, let him steal no longer; but rather let him labor, working with his hands at what is good, that he may have something to share with him who suffers need.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4,5]],[[3,4],[6,7,8]],[[5],[9]],[[6],[10,11]],[[7],[12,13]],[[8],[14]],[[9],[15]],[[10,11],[19,20,21]],[[12,13],[16,17,18]],[[14],[22]],[[15],[23]],[[16],[24]],[[17],[25]],[[18],[26,27]],[[19,20],[28]],[[21],[29,30]],[[22],[31]],[[23],[33]],[[24],[34]],[[25],[35,36]],[[26],[37]],[[27,28],[38,39]],[[29],[40]],[[30],[41,42]],[[31],[44,45,46]],[[32],[43]],[[33],[47,48]],[[34],[49]],[[35,36],[50,51,52]],[[37],[56,57]],[[38],[53,54]],[[39],[55,58,59]],[[40],[60]],[[41,42],[61,62]],[[43],[63,64]],[[44],[66]],[[45],[65]],[[46],[67,68,69]],[[47],[70,71]],[[48],[72,73,74,75]],[[49,50],[79,80]],[[51],[76,77,78]],[[52],[82]],[[53],[81]],[[54],[83,84,85]],[[55],[86]],[[56,57],[87,88,89]],[[58],[90,91]],[[59],[93]],[[60],[92]],[[61],[94]],[[62],[95,96,97]],[[63],[98]],[[64],[99,100]],[[65],[105]],[[66],[101,102,103,104]]]},{"latin":"Fratres: Grátias ago Deo meo semper pro vobis in grátia Dei, quæ data est vobis in Christo Iesu: quod in ómnibus dívites facti estis in illo, in omni verbo et in omni sciéntia: sicut testimónium Christi confirmátum est in vobis: ita ut nihil vobis desit in ulla grátia, exspectántibus revelatiónem Dómini nostri Iesu Christi, qui et confirmábit vos usque in finem sine crímine, in die advéntus Dómini nostri Iesu Christi.","english":"Brethren: I give thanks to my God always concerning you for the grace of God which was given you in Christ Jesus, because in everything you have been enriched in Him, in all utterance and in all knowledge; even as the witness to the Christ has been made so firm in you that you lack no grace, while awaiting the appearance of our Lord Jesus Christ, Who will also keep you secure unto the end, unimpeachable in the day of the coming of our Lord Jesus Christ.","links":[[[0],[0]],[[1,2],[1,2,3]],[[3,4],[4,5,6]],[[5],[7]],[[6,7],[8,9]],[[8,9],[10,11,12]],[[10],[13,14]],[[11],[15]],[[12,13],[16,17]],[[14],[18]],[[15,16,17],[19,20,21]],[[18],[22]],[[19,20],[23,24]],[[21,22,23],[25,26,27,28]],[[24,25],[29,30]],[[26,27,28],[31,32,33]],[[29],[34]],[[30,31,32],[35,36,37]],[[33],[38,39]],[[34],[40,41]],[[35],[42,43,44]],[[36,37,38,39],[45,46,47,48,49,50,51]],[[40,41],[52]],[[42,43,44,45,46,47],[53,54,55,56]],[[48],[57,58]],[[49],[59,60]],[[50,51,52,53],[61,62,63,64,65]],[[54],[66]],[[55],[68]],[[56],[67,69,71]],[[57],[70]],[[58,59,60],[72,73,74]],[[61,62],[75]],[[63,64],[76,77,78]],[[65],[79,80,81]],[[66,67,68,69],[82,83,84,85,86]]]},{"latin":"Dóminus possédit me in inítio viárum suárum, ántequam quidquam fáceret a princípio. Ab ætérno ordináta sum et ex antíquis, ántequam terra fíeret. Nondum erant abýssi, et ego iam concépta eram. Nunc ergo, fílii, audíte me: Beáti, qui custódiunt vias meas. Audíte disciplínam, et estóte sapiéntes, et nolíte abiícere eam. Beátus homo, qui audit me et qui vígilat ad fores meas cotídie, et obsérvat ad postes óstii mei. Qui me invénerit, invéniet vitam et háuriet salútem a Dómino.","english":"The Lord begot me, the firstborn of His ways, the forerunner of His prodigies of long ago; from of old I was poured forth, at the first, before the earth. When there were no depths I was brought forth. So now, O children, listen to me; happy those who keep my ways. Hear instruction, and be wise, and refuse it not. Happy the man who obeys me, watching daily at my gates, waiting at my doorposts; for he who finds me finds life, and wins favor from the Lord.","links":[[[0,1,2],[0,1,2,3]],[[3,4,5,6],[4,5,6,7,8]],[[7,8,9,10,11],[9,10,11,12,13,14,15,16]],[[12,13],[17,18,19]],[[14,15],[20,21,22,23]],[[16,17,18],[24,25,26]],[[19,20,21],[27,28,29]],[[22,23,24],[30,31,32,33,34]],[[25,26,27,28,29],[35,36,37,38]],[[30,31],[39,40]],[[32],[41,42]],[[33,34],[43,44,45]],[[35],[46]],[[36,37],[47,48,49]],[[38,39],[50,51]],[[40,41],[52,53]],[[42],[54]],[[43,44],[55,56]],[[45],[57]],[[46,47,48],[58,59,60]],[[49,50],[61,62,63]],[[51,52,53],[64,65,66]],[[54,55,56],[67]],[[57,58,59,60],[68,69,70,71]],[[61,62],[72]],[[63,64,65,66],[73,74,75]],[[67],[77,78]],[[68,69],[79,80]],[[70,71],[81,82]],[[72],[83]],[[73,74],[84,85]],[[75,76],[86,87,88]]]},{"latin":"Diléctus Deo et homínibus, cuius memória in benedictióne est. Símilem illum fecit in glória sanctórum, et magnificávit eum in timóre inimicórum, et in verbis suis monstra placávit. Glorificávit illum in conspéctu regum, et iussit illi coram pópulo suo, et osténdit illi glóriam suam. In fide et lenitáte ipsíus sanctum fecit illum, et elégit eum ex omni carne. Audívit enim eum et vocem ipsíus, et indúxit illum in nubem. Et dedit illi coram præcépta, et legem vitæ et disciplínæ.","english":"Beloved of God and men, whose memory is held in benediction. He made him like the Saints in glory, and magnified him in the fear of his enemies, and with his words He made prodigies to cease. He glorified him in the sight of kings, and gave him Commandments in the sight of his people, and revealed to him His glory. He sanctified him in his faith and meekness, and chose him out of all flesh. For He heard him and his voice, and brought him into a cloud. And, face to face, He gave him the Commandments, the law of life and understanding.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[9]],[[7],[10]],[[8],[7,8]],[[9],[14]],[[10],[13]],[[11],[11,12]],[[12],[17]],[[13],[18]],[[14],[15,16]],[[15],[19]],[[16],[20]],[[17],[21]],[[18],[22]],[[19],[23,24]],[[20],[25,26,27]],[[21],[28]],[[22],[29]],[[23],[31]],[[24],[30]],[[25],[34]],[[26],[32,33,35,36]],[[27],[37,38]],[[28],[39]],[[29],[40]],[[30],[41,42]],[[31],[43,44]],[[32],[45]],[[33],[46,48]],[[34],[47]],[[35],[49,50,51,52]],[[36],[54]],[[37],[53]],[[38],[55]],[[39],[56]],[[40],[57,58]],[[41],[60]],[[42],[59]],[[43],[64]],[[44],[66]],[[45],[67]],[[46],[68]],[[47],[65]],[[48,49],[61,62]],[[50],[63]],[[51],[69]],[[52],[70]],[[53],[71]],[[54],[72,73]],[[55],[74]],[[56],[75]],[[57],[77,78]],[[58],[76]],[[59],[79]],[[60],[80]],[[61],[82]],[[62],[81]],[[63],[83]],[[64],[84]],[[65],[85]],[[66],[86,87]],[[67],[88]],[[68],[89]],[[69],[93,94]],[[70],[95]],[[71],[90,91,92]],[[72],[96,97]],[[73,74],[98,99]],[[75],[100,101]],[[76],[102]],[[77],[103]]]},{"latin":"Fratres: Vidéte, quómodo caute ambulétis: non quasi insipiéntes, sed ut sapiéntes, rediméntes tempus, quóniam dies mali sunt. Proptérea nolíte fíeri imprudéntes, sed intellegéntes, quæ sit volúntas Dei. Et nolíte inebriári vino, in quo est luxúria: sed implémini Spíritu Sancto, loquéntes vobismetípsis in psalmis et hymnis et cánticis spirituálibus, cantántes et psalléntes in córdibus vestris Dómino: grátias agéntes semper pro ómnibus, in nómine Dómini nostri Iesu Christi, Deo et Patri. Subiecti ínvicem in timóre Christi.","english":"Brethren: See to it that you walk with care: not as unwise but as wise, making the most of your time, because the days are evil. Therefore, do not become foolish, but understand what the will of the Lord is. And do not be drunk with wine, for in that is debauchery; but be filled with the Spirit, speaking to one another in psalms and hymns and spiritual songs, singing and making melody in your hearts to the Lord, giving thanks always for all things in the name of our Lord Jesus Christ to God the Father. Be subject to one another in the fear of Christ.","links":[[[0],[0]],[[1],[1]],[[2],[2,3,4]],[[3],[7,8]],[[4],[5,6]],[[5],[9]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[13]],[[10],[14]],[[11],[15,16,17,18]],[[12],[19,20]],[[13],[21]],[[14],[22,23]],[[15],[25]],[[16],[24]],[[17],[26]],[[18],[27,28]],[[19],[29]],[[20],[30]],[[21],[31]],[[22],[32]],[[23],[33]],[[24],[39]],[[25],[34,35]],[[26],[36,37,38]],[[27],[40]],[[28],[41,42]],[[29],[43,44]],[[30],[45,46]],[[31],[47,48]],[[32],[49]],[[33],[50]],[[34],[51]],[[35],[52]],[[36],[53,54]],[[37,38],[55,56,57]],[[39],[58]],[[40],[59,60,61]],[[41],[62]],[[42],[63]],[[43],[64]],[[44],[65]],[[45],[66]],[[46],[68]],[[47],[67]],[[48],[69]],[[49],[70]],[[50],[71,72]],[[51],[73]],[[52],[75]],[[53],[74]],[[54],[76,77,78]],[[55],[80]],[[56],[79]],[[57],[81]],[[58],[82]],[[59],[83,84]],[[60],[85]],[[61],[86,87,88]],[[62],[90]],[[63],[89]],[[64],[91]],[[65],[92]],[[66],[93,94]],[[67,68],[95,96]],[[69],[97,98]],[[70],[99,100,101]],[[71],[102]],[[72],[103,104]],[[73],[105,106]]]},{"latin":"Hæc dicit Dóminus: Ecce, ego declinábo super eam quasi flúvium pacis, et quasi torréntem inundántem glóriam géntium, quam sugétis: ad úbera portabímini, et super génua blandiéntur vobis. Quómodo si cui mater blandiátur, ita ego consolábor vos, et in Ierúsalem consolabímini. Vidébitis, et gaudébit cor vestrum, et ossa vestra quasi herba germinábunt, et cognoscétur manus Dómini servis eius.","english":"Thus says the Lord: Lo, I will spread prosperity over her like a river, and the wealth of the nations like an overflowing torrent. As nurslings, you shall be carried in her arms, and fondled in her lap; as a mother comforts her son, so will I comfort you; in Jerusalem you shall find your comfort. When you see this, your heart shall rejoice, and your bodies flourish like the grass; the Lord's power shall be known to His servants.","links":[[[0,1,2],[0,1,2,3]],[[3,4,5,6,7,8,9,10],[4,5,6,7,8,9,10,11,12,13]],[[11,12,13,14,15,16,17,18],[14,15,16,17,18,19,20,21,22,23]],[[19,20,21],[24,25,26,27,28,29,30,31,32]],[[22,23,24,25,26],[33,34,35,36,37]],[[27,28,29,30,31],[38,39,40,41,42,43]],[[32,33,34,35],[44,45,46,47,48]],[[36,37,38,39],[49,50,51,52,53,54,55]],[[40],[56,57,58,59]],[[41,42,43,44],[60,61,62,63]],[[45,46,47,48,49,50],[64,65,66,67,68,69,70]],[[51,52,53,54],[71,72,73,74,75,76]],[[55,56],[77,78,79]]]},{"latin":"Ab inítio et ante sǽcula creáta sum, et usque ad futúrum sǽculum non désinam, et in habitatióne sancta coram ipso ministrávi. Et sic in Sion firmáta sum, et in civitáte sanctificáta simíliter requiévi, et in Ierúsalem potéstas mea. Et radicávi in pópulo honorificáto, et in parte Dei mei heréditas illíus, et in plenitúdine sanctórum deténtio mea.","english":"Before all ages, in the beginning, He created me, and through all ages I shall not cease to be. In the holy Tent I ministered before Him, and in Sion I fixed my abode. Thus in the chosen city He has given me rest, in Jerusalem is my domain. I have struck root among the glorious people, in the portion of my God, His heritage, and my abode is in the full assembly of Saints.","links":[[[0,1],[3,4,5]],[[2,3,4],[0,1,2]],[[5,6],[6,7,8]],[[7],[9]],[[8,9,10,11],[10,11,12]],[[12,13],[13,14,15,16,17,18]],[[14,15,16,17],[19,20,21,22]],[[18,19,20],[23,24,25,26]],[[21],[27]],[[22],[34]],[[23,24],[28,29]],[[25,26],[30,31,32,33]],[[27,28,29,30],[35,36,37,38]],[[31,32],[39,40,41,42,43]],[[33,34,35],[44,45]],[[36,37],[46,47,48]],[[38,39],[49,50,51,52]],[[40,41,42],[53,54,55,56]],[[43,44,45,46,47],[57,58,59,60,61,62]],[[48,49],[63,64]],[[50],[65]],[[51,52,53],[69,70,71,72,73,74]],[[54,55],[66,67,68]]]},{"latin":"Hæc dicit Dóminus Deus: Ecce, ego mittam Angelum meum, qui præcédat te, et custódiat in via, et intróducat in locum, quem parávi. Obsérva eum, et audi vocem eius, nec contemnéndum putes: quia non dimíttet, cum peccáveris, et est nomen meum in illo. Quod si audiéris vocem eius et féceris ómnia, quæ loquor, inimícus ero inimícis tuis et affligam affligéntes te: præcedétque te Angelus meus.","english":"Thus says the Lord God: See, I am sending My Angel before you, to guard you on the way and bring you to the place I have prepared. Be attentive to him and heed his voice. Do not rebel against him, for he will not forgive your sin. My authority resides in him. If you heed his voice and carry out all I tell you, I will be an enemy to your enemies and a foe to your foe, and My Angel will go before you.","links":[[[0,1],[0,1]],[[2,3],[2,3,4]],[[4],[5]],[[5],[6]],[[6],[7,8]],[[7,8],[9,10]],[[9,10,11],[11,12]],[[12,13,14,15],[13,14,15,16,17,18]],[[16,17,18,19],[19,20,21,22,23,24]],[[20,21],[25,26,27]],[[22,23],[28,29,30,31]],[[24,25,26,27],[32,33,34,35]],[[28,29,30],[36,37,38,39,40]],[[31,32,33,34,35],[41,42,43,44,45,46,47]],[[36,37,38,39,40,41],[48,49,50,51,52]],[[42,43,44,45,46],[53,54,55,56,57]],[[47,48,49,50,51],[58,59,60,61,62,63,64]],[[52,53,54,55],[65,66,67,68,69,70,71,72]],[[56,57,58,59],[73,74,75,76,77,78]],[[60,61,62,63],[79,80,81,82,83,84,85]]]},{"latin":"Fratres: Qui gloriátur, in Dómino gloriétur. Non enim, qui seípsum comméndat, ille probátus est; sed quem Deus comméndat. Utinam sustinerétis módicum quid insipiéntiæ meæ, sed et supportáte me: æmulor enim vos Dei æmulatióne. Despóndi enim vos uni viro vírginem castam exhibére Christo.","english":"Brothers: He that glorieth, let him glory in the Lord. For not he who commendeth himself, is approved, but he, whom God commendeth. Would to God you could bear with some little of my folly: but do bear with me. For I am jealous of you with the jealousy of God. For I have espoused you to one husband that I may present you as a chaste virgin to Christ.","links":[[[0],[0]],[[1,2],[1,2,3]],[[3,4,5],[4,5,6,7,8,9]],[[6,7],[10,11]],[[8],[12,13]],[[9],[15]],[[10],[14]],[[11],[19]],[[12,13],[16,17]],[[14],[18]],[[15],[20]],[[16],[21]],[[17],[22]],[[18],[23]],[[19],[26,27,28,29]],[[20,21],[30,31]],[[22,23],[32,33,34]],[[24,25,26,27],[35,36,37,38,39]],[[28,29],[40,41,42,43]],[[30],[44,45]],[[31,32],[46,47,48,49,50]],[[33,34],[51,52,53,54]],[[35],[55,63]],[[36,37],[56,57,58]],[[40],[59,60,61,62]],[[38,39],[64,65,66,67]],[[41],[68,69]]]},{"latin":"Beátus vir, qui invéntus est sine mácula, et qui post aurum non ábiit, nec sperávit in pecúnia et thesáuris. Quis est hic, et laudábimus eum? fecit enim mirabília in vita sua. Qui probátus est in illo, et perféctus est, erit illi glória ætérna: qui potuit tránsgredi, et non est transgréssus: fácere mala, et non fecit: ídeo stabilíta sunt bona illíus in Dómino, et eleemósynas illíus enarrábit omnis ecclésia sanctórum.","english":"Happy the man found without fault, who turns not aside after gain, nor puts his trust in money nor in treasures! Who is he, that we may praise him? For he has done wonders in his life. He has been tested by gold and come off safe, and this remains his glory forever; he could have sinned but did not, could have done evil but would not, so that his possessions are secure in the Lord, and the assembly of the Saints shall recount his alms.","links":[[[0],[0]],[[1],[1,2]],[[2,3,4,5,6],[3,4,5]],[[7,8,9,10,11,12],[6,7,8,9,10,11]],[[13],[12]],[[14],[13,14,15]],[[15],[16]],[[16],[17]],[[17],[18]],[[18],[19,20]],[[19],[21]],[[20],[22]],[[21],[23]],[[22],[24]],[[23],[25,26,27]],[[24],[28]],[[26],[29]],[[25],[30,31,32]],[[27],[33]],[[28],[34]],[[30],[35]],[[29],[36]],[[31,32,33,34,35],[37,38,39,40,41,42]],[[36,37,38],[43,44,45,46]],[[39],[47,48,49]],[[40],[50]],[[41],[51]],[[42],[52]],[[43,44,45],[53,54,55,56]],[[46,47,48,49],[57,58,59]],[[50],[60,61,62]],[[51],[63]],[[52],[64]],[[53,54],[65,66]],[[55],[67,68]],[[59],[69]],[[58],[70]],[[57],[71]],[[56],[72]],[[60],[73]],[[61],[74,75]],[[62],[76]],[[66,67,68],[77,78,79,80,81]],[[65],[82,83]],[[64],[84]],[[63],[85]]]},{"latin":"Léctio libri Exodi","english":"Lesson from the book of Exodus","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4,5]]]},{"latin":"Exod 23:20-23","english":"Exod 23:20-23","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Léctio Isaíæ Prophétæ","english":"Lesson from the book of Isaias","links":[[[0],[0]],[[1,2],[1,2,3,4,5]]]},{"latin":"Is 66:12-14","english":"Isa 66:12-14","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Léctio libri Sapiéntiæ","english":"Lesson from the book of Ecclesiasticus","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4,5]]]},{"latin":"Léctio libri Sapiéntiæ","english":"Lesson from the book of Proverbs","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4,5]]]},{"latin":"Prov 8:22-24; 8:32-35","english":"Prov 8:22-24, 32-35.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4,5],[4]],[[6],[5]]]},{"latin":"Léctio Epístolæ beáti Pauli Apóstoli ad Timótheum","english":"Lesson from the first letter of St Paul the Apostle to Timotheus","links":[[[0],[0]],[[1],[1,2,3,4]],[[2],[5,6]],[[3],[7]],[[4],[8,9]],[[5],[10]],[[6],[11]]]},{"latin":"1 Tim 5:3-10","english":"1 Tim. 5:3-10.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Léctio Epístolæ beáti Pauli Apóstoli ad Corinthios","english":"Lesson from the second letter of St. Paul the Apostle to the Corinthians","links":[[[0],[0]],[[1],[1,2,3,4]],[[2],[5,6]],[[3],[7]],[[4],[8,9]],[[5],[10]],[[6],[11,12]]]},{"latin":"2 Cor 4:1-6, 15-18","english":"2 Cor 4:1-6; 4:15-18","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5,6]],[[6],[7]]]},{"latin":"Léctio Epístolæ beáti Petri Apóstoli","english":"Lesson from the first letter of St Peter the Apostle","links":[[[0],[0]],[[1],[1,2,3,4]],[[2],[5,6]],[[3],[7]],[[4],[8,9]]]},{"latin":"1 Pet 5:1-4; 5:10-11","english":"1 Pet 5:1-4; 5:10-11.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]],[[7],[7]]]},{"latin":"Léctio Epístolæ beáti Pauli Apóstoli ad Corínthios","english":"Lesson from the second letter of St. Paul the Apostle to the Corinthians","links":[[[0],[0]],[[1],[1,2,3,4]],[[2],[5,6]],[[3],[7]],[[4],[8,9]],[[5],[10]],[[6],[11,12]]]},{"latin":"2 Cor 10:17-18; 11:1-2","english":"2 Cor 10:17-18; 11:1-2","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]],[[7],[7]]]},{"latin":"Léctio Epístolæ beáti Iacóbi Apóstoli","english":"Lesson from the letter of St James the Apostle","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4,5]],[[3],[6]],[[4],[7,8]]]},{"latin":"Iac 2:12-17","english":"James 2:12-17","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Heb 7:23-27.","english":"Heb 7:23-27","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Léctio libri Tobíæ","english":"Lesson from the book of Tobias","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4,5]]]},{"latin":"Tob 12:7-15","english":"Tob 12:7-15","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Léctio Epístolæ beáti Pauli Apóstoli ad Colossénses.","english":"Lesson from the letter of St. Paul the Apostle to the Colossians","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4,5]],[[3],[6]],[[4],[7,8]],[[5],[9]],[[6],[10,11]]]},{"latin":"Eph 4:7-13","english":"Eph 4:7-13","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ephes 3:8-9; 14-19.","english":"Eph 3:8-9, 14-19","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]]]},{"latin":"In illo témpore: Dixit Iesus discípulis suis parábolam hanc: Símile est regnum cœlórum thesáuro abscóndito in agro: quem qui invénit homo, abscóndit, et præ gáudio illíus vadit, et vendit univérsa, quæ habet, et emit agrum illum. Íterum símile est regnum cœlórum hómini negotiatóri, quærénti bonas margarítas. Invénta autem una pretiósa margaríta, ábiit, et véndidit ómnia, quæ hábuit, et emit eam. Íterum símile est regnum cœlórum sagénæ missæ in mare et ex omni génere píscium congregánti. Quam, cum impléta esset, educéntes, et secus litus sedéntes, elegérunt bonos in vasa, malos autem foras misérunt. Sic erit in consummatióne sǽculi: exíbunt Angeli, et separábunt malos de médio iustórum, et mittent eos in camínum ignis: ibi erit fletus et stridor déntium. Intellexístis hæc ómnia? Dicunt ei: Etiam. Ait illis: Ideo omnis scriba doctus in regno cœlórum símilis est hómini patrifamílias, qui profert de thesáuro suo nova et vétera.","english":"At that time, Jesus spoke this parable to His disciples: The kingdom of heaven is like a treasure hidden in a field; he who finds it hides it, and in his joy goes and sells all that he has and buys that field. Again, the kingdom of heaven is like a merchant in search of fine pearls. When he finds a single pearl of great price, he goes and sells all that he has and buys it. Again, the kingdom of heaven is like a net cast into the sea that gathered in fish of every kind. When it was filled, they hauled it out, and sitting down on the beach, they gathered the good fish into vessels, but threw away the bad. So will it be at the end of the world. The angels will go out and separate the wicked from among the just, and will cast them into the furnace of fire, where there will be the weeping, and the gnashing of teeth. Have you understood all these things? They said to Him, Yes. And He said to them, So then, every Scribe instructed in the kingdom of heaven is like a householder who brings forth from his storeroom things new and old.","links":[[[0,1,2],[0,1,2]],[[3],[4]],[[4],[3]],[[5,6],[7,8,9]],[[7,8],[5,6]],[[9,10],[14,15]],[[11,12],[10,11,12,13]],[[13],[16,17]],[[14],[18]],[[15,16],[19,20,21]],[[17,18,19,20],[22,23,24,25]],[[21],[26,27]],[[22],[28]],[[23,24,25],[29,30,31]],[[26],[32]],[[27],[33]],[[28],[34]],[[29],[35]],[[30,31],[36,37,38]],[[32],[39]],[[33],[40]],[[34,35],[41,42]],[[36],[43]],[[37,38],[48,49]],[[39,40],[44,45,46,47]],[[41,42],[50,51]],[[43],[52,53]],[[44,45],[54,55,56]],[[46,47],[57,58,59]],[[48,49,50],[60,61,62,63,64,65]],[[51],[66,67]],[[52],[68]],[[53],[69]],[[54],[70]],[[55,56],[71,72,73]],[[57],[74]],[[58],[75]],[[59],[76]],[[60],[77]],[[61,62],[82,83]],[[63,64],[78,79,80,81]],[[65],[84,85]],[[66],[86]],[[67,68],[87,88,89]],[[69],[90]],[[70,71,72],[94,95,96]],[[73],[93]],[[74],[91,92]],[[75,76],[97,98]],[[77,78],[99,100]],[[79],[101,102,103,104]],[[80],[105]],[[81,82],[108,109,110]],[[83],[106,107]],[[84],[111,112]],[[85],[113,114,115]],[[86,87],[116,117]],[[88],[121,122]],[[89],[118]],[[90,91],[119,120]],[[92],[123]],[[93],[124,125,126]],[[94,95,96],[127,128,129,130,131,132]],[[97],[135,136,137]],[[98],[133,134]],[[99],[138]],[[100],[139]],[[101],[140,141]],[[102,103],[142,143]],[[104],[144,145]],[[105],[146]],[[106],[147,148]],[[107],[149]],[[108,109],[150,151,152]],[[110],[153,154]],[[111],[155,156]],[[112],[157,158]],[[113],[159,160]],[[114],[161]],[[115],[162,163]],[[116],[164,165]],[[117],[166,167,168]],[[118,119],[169,170,171]],[[120],[172,173]],[[121],[174,175]],[[122],[176]],[[123],[177,178,179]],[[124],[180,181]],[[125],[182,183]],[[126,127],[184,185]],[[128],[186]],[[129,130,131],[187,188,189,190,191]],[[132,133],[192,193]],[[134,135],[194,195]],[[136],[196]],[[137],[197,198]],[[138,139,140],[199,200,201]],[[141],[202,203]],[[142],[204]],[[143],[205]]]},{"latin":"In illo témpore: Dixit Iesus discípulis suis: Hæc mando vobis, ut diligátis ínvicem. Si mundus vos odit: scitóte, quia me priórem vobis odio hábuit. Si de mundo fuissétis, mundus quod suum erat dilígeret; quia vero de mundo non estis, sed ego elegi vos de mundo, proptérea odit vos mundus. Mementóte sermónis mei, quem ego dixi vobis: Non est servus maior dómino suo. Si me persecúti sunt, et vos persequántur: si sermónem meum servavérunt, et vestrum servábunt. Sed hæc ómnia fácient vobis propter nomen meum: quia nésciunt eum, qui misit me. Si non veníssem et locútus fuíssem eis, peccátum non háberent: nunc autem excusatiónem non habent de peccáto suo. Qui me odit: et Patrem meum odit. Si ópera non fecíssem in eis, quæ nemo álius fecit, peccátum non háberent: nunc autem et vidérunt et odérunt et me et Patrem meum. Sed ut adimpleátur sermo, qui in lege eórum scriptus est: Quia ódio habuérunt me gratis.","english":"At that time, Jesus said to His disciples, These things I command you, that you may love one another. If the world hates you, know that it has hated Me before you. If you were of the world, the world would love what is its own. But because you are not of the world, but I have chosen you out of the world, therefore the world hates you. Remember the word that I have spoken to you: No servant is greater than his master. If they persecuted Me, they will persecute you also; if they have kept My word, they will keep yours also. But all these things they will do to you for My name's sake, because they do not know Him Who sent me. If I had not come and spoken to them, they would have no sin. But now they have no excuse for their sin. He who hates Me hates My Father also. If I had not done among them works such as no one else has done, they would have no sin. But now they have seen, and have hated both Me and My Father; but that the word written in their Law may be fulfilled, 'They have hated Me without cause.'","links":[[[0,1,2],[0,1,2]],[[3],[4]],[[4],[3]],[[5],[5,7]],[[6],[6]],[[7],[8,9]],[[8],[10,11]],[[9],[12]],[[10],[13]],[[11],[14,15,16]],[[12],[17,18]],[[13],[19]],[[14],[20,21]],[[16],[22]],[[15],[23]],[[17],[24]],[[18],[25]],[[19,20,21,22,23],[26,27,28,29,30,31]],[[24],[32]],[[25,26],[35,36,37]],[[27],[33,34]],[[28],[38,39]],[[29],[42]],[[31],[43]],[[30],[44,45]],[[32],[40,41]],[[33],[47]],[[34],[46]],[[35,36],[51,52,53]],[[37],[50]],[[38],[48,49]],[[39],[54]],[[40],[55]],[[41],[56,57]],[[42],[58]],[[43,44],[59,60,61,62]],[[45],[63]],[[46],[66]],[[47],[67]],[[48],[64,65]],[[49],[68]],[[50,51],[69,70]],[[52],[71]],[[53],[72]],[[54],[73,74]],[[55],[75,76]],[[56],[77]],[[58],[78]],[[57],[79]],[[59],[80,81]],[[61],[82]],[[60],[83]],[[62],[84]],[[64,65],[85,86]],[[63],[87]],[[68],[88,89,90]],[[67],[91]],[[66],[92]],[[69],[93]],[[72],[94,95,96]],[[70,71],[97,98]],[[75],[99,100,101]],[[74],[102]],[[73],[103]],[[76],[104]],[[78],[105]],[[77],[106,107]],[[79],[108,109,110]],[[80],[111,112]],[[81],[113]],[[83],[114]],[[82],[115,116]],[[84],[117]],[[85],[118,119,120,121]],[[86],[122]],[[87],[123]],[[88],[124]],[[89],[125]],[[90],[126]],[[92],[127,128,130]],[[91],[129]],[[93],[131]],[[94,95],[132]],[[96],[133,134]],[[99],[135,136,137]],[[98],[138]],[[97],[139]],[[101],[140]],[[100],[141]],[[104],[142,143]],[[103],[144]],[[102],[145]],[[105],[146]],[[107],[147]],[[106],[148]],[[108],[149,150]],[[110],[151]],[[109],[152]],[[114],[153]],[[113],[154]],[[112],[155]],[[111],[156]],[[115],[157]],[[118],[158,159,161]],[[117],[160]],[[119,120],[162,163]],[[116],[164]],[[121],[165,166]],[[122],[167,168]],[[123],[169]],[[124],[170,171]],[[127],[172,173,174]],[[126],[175]],[[125],[176]],[[129],[177]],[[128],[178]],[[130,131],[179,180,181]],[[132],[182]],[[133],[183,184]],[[134],[185]],[[135],[186]],[[136],[187]],[[138],[188]],[[137],[189]],[[139],[190]],[[140],[191]],[[142],[192,193]],[[143,147,148],[194]],[[144,145,146],[195,196,197]],[[141],[198,199,200]],[[149,150,151],[201,202,203]],[[152],[204]],[[153],[205,206]]]},{"latin":"In illo témpore: Dixit Iesus discípulis suis parábolam hanc: Símile erit regnum coelórum decem virgínibus: quæ, accipiéntes lámpades suas, exiérunt óbviam sponso et sponsæ. Quinque autem ex eis erant fátuæ, et quinque prudéntes: sed quinque fátuæ, accéptis lampádibus, non sumpsérunt óleum secum: prudéntes vero accepérunt óleum in vasis suis cum lampádibus. Moram autem faciénte sponso, dormitavérunt omnes et dormiérunt. Média autem nocte clamor factus est: Ecce, sponsus venit, exíte óbviam ei. Tunc surrexérunt omnes vírgines íllæ, et ornavérunt lámpades suas. Fátuæ autem sapiéntibus dixérunt: Date nobis de óleo vestro: quia lámpades nostræ exstinguúntur. Respondérunt prudéntes, dicéntes: Ne forte non suffíciat nobis et vobis, ite pótius ad vendéntes, et émite vobis. Dum autem irent émere, venit sponsus: et quæ parátæ erant, intravérunt cum eo ad núptias, et clausa est iánua. Novíssime vero véniunt et réliquæ vírgines, dicéntes: Dómine, Dómine, áperi nobis. At ille respóndens, ait: Amen, dico vobis, néscio vos. Vigiláte ítaque, quia nescítis diem neque horam.","english":"At that time Jesus spoke this parable to His disciples: “Then will the kingdom of heaven be like ten virgins who took their lamps and went forth to meet the bridegroom and the bride. Five of them were foolish and five wise. But the five foolish, when they took their lamps, took no oil with them, while the wise did take oil in their vessels with the lamps. Then as the bridegroom was long in coming, they all became drowsy and slept. And at midnight a cry arose, 'Behold, the bridegroom is coming, go forth to meet him!' Then all those virgins arose and trimmed their lamps. And the foolish said to the wise, 'Give us some of your oil, for our lamps are going out.' The wise answered, saying, 'Lest there may not be enough for us and for you, go rather to those who sell it, and buy some for yourselves.' Now while they were gone to buy it, the bridegroom came; and those who were ready went in with him to the marriage feast, and the door was shut. Finally there came also the other virgins, who said, 'Sir, sir, open the door for us!' But he answered and said, 'Amen I say to you, I do not know you.' Watch therefore, for you know neither the day nor the hour.”","links":[[[0,1,2],[0,1,2]],[[3],[4]],[[4],[3]],[[5,6],[7,8,9]],[[7,8],[5,6]],[[9],[17]],[[10],[11,16]],[[11],[12,13]],[[12],[14,15]],[[13],[18]],[[14],[19]],[[15],[20]],[[16],[21]],[[17,18],[22,23]],[[19],[24,25]],[[20],[26,27,28]],[[21],[29,30]],[[22],[31]],[[23],[32,33]],[[24,25],[34]],[[26,27],[35,36]],[[28],[37]],[[29],[38]],[[30],[39]],[[31],[40]],[[32],[41]],[[33],[42]],[[34,35],[43,44,45]],[[36,37],[46,47,48,49,50]],[[38,39],[51,52]],[[40],[53]],[[41],[54,55]],[[42,43],[56,57,58]],[[44],[59,60]],[[45],[61]],[[46],[62]],[[47,48],[63,64]],[[49],[65]],[[50],[66,67]],[[51,52,53,54],[68,69,70,71,72,73,74,75]],[[55],[78,79]],[[56],[76,77]],[[57],[80]],[[58],[81]],[[59,60,61],[82,83,84]],[[62,63,64],[85,86,87]],[[65],[88]],[[66],[89,90]],[[67],[91,92]],[[68],[93,94]],[[69],[95,96]],[[70],[97]],[[71],[98]],[[72],[102]],[[73],[99]],[[74,75],[100,101]],[[76],[103]],[[77],[104]],[[78,79],[105,106]],[[80,81],[107,108,109]],[[82],[111,112,113]],[[83],[110]],[[84],[114]],[[85],[115]],[[86,87,88],[116,117,118,119]],[[89],[120]],[[90,91],[121,122]],[[92],[123,124,125]],[[94],[126,127]],[[93],[128]],[[95],[129]],[[96,97,98,99],[130,131,132,133,134,135]],[[100],[136,137]],[[101],[138]],[[102],[139,140]],[[103],[141]],[[104],[142]],[[105,106],[143,144,145,146,147]],[[107],[148]],[[108],[149,150]],[[109],[151,152]],[[110,111],[153,154]],[[112],[155,156,157]],[[113],[158,159,160]],[[115],[161,162]],[[114],[163]],[[116],[164]],[[117,118,119],[165,166,167,168]],[[120],[169,170]],[[121,122],[171,172]],[[123,124],[173,174,175,176]],[[125],[177]],[[126,127,128],[178,179,180,181]],[[129,130],[182]],[[131],[183,184]],[[132],[185]],[[133,134],[186,187,188]],[[135],[189,190]],[[136,137],[191,192]],[[138],[193]],[[139],[194,195,196,197]],[[140],[198]],[[141],[199]],[[142],[200,201]],[[143],[202]],[[144],[203]],[[145],[204,205]],[[146],[206,207]],[[147],[208,209,210,211]],[[148],[212]],[[149],[213]],[[150],[214]],[[151],[215]],[[152],[216,217,218]],[[153],[219,220]],[[154],[221]],[[155],[222,223]]]},{"latin":"In illo témpore: Accessérunt discípuli ad Iesum, dicéntes: Quis, putas, maior est in regno cœlórum? Et ádvocans Iesus párvulum, státuit eum in médio eórum et dixit: Amen, dico vobis, nisi convérsi fuéritis et efficiámini sicut párvuli, non intrábitis in regnum cœlórum. Quicúmque ergo humiliáverit se sicut párvulus iste, hic est maior in regno cœlórum. Et qui suscéperit unum párvulum talem in nómine meo, me súscipit. Qui autem scandalizáverit unum de pusíllis istis, qui in me credunt, expédit ei, ut suspendátur mola asinária in collo eius, et demergátur in profúndum maris. Væ mundo a scándalis! Necésse est enim, ut véniant scándala: verúmtamen væ hómini illi, per quem scándalum venit! Si autem manus tua vel pes tuus scandalízat te, abscíde eum et proiíce abs te: bonum tibi est ad vitam ingrédi débilem vel claudum, quam duas manus vel duos pedes habéntem niitti in ignem ætérnum. Et si óculus tuus scandalízat te, érue eum et proiice abs te: bonum tibi est cum uno óculo in vitam intráre, quam duos óculos habéntem mitti in gehénnam ignis. Vidéte, ne contemnátis unum ex his pusíllis: dico enim vobis, quia Angeli eórum in cœlis semper vident fáciem Patris mei, qui in cœlis est.","english":"At that time, the disciples came to Jesus, saying, Who then is greatest in the kingdom of heaven? And Jesus called a little child to Him, set him in their midst, and said, Amen I say to you, unless you turn and become like little children, you will not enter into the kingdom of heaven. Whoever, therefore, humbles himself as this little child, he is the greatest in the kingdom of heaven. And whoever receives one such little child for My sake, receives Me. But whoever causes one of these little ones who believe in Me to sin, it were better for him to have a great millstone hung around his neck, and to be drowned in the depths of the sea. Woe to the world because of scandals! For it must needs be that scandals come, but woe to the man through whom scandal does come! And if your hand or your foot is an occasion of sin to you, cut it off and cast it from you! It is better for you to enter life maimed or lame, than, having two hands or two feet, to be cast into the everlasting fire. And if your eye is an occasion of sin to you, pluck it out and cast it from you! It is better for you to enter into life with one eye, than, having two eyes, to be cast into hell-fire. See that you do not despise one of these little ones; for I tell you, their Angels in heaven always behold the face of My Father in heaven.","links":[[[0,1,2],[0,1,2]],[[3],[5]],[[4],[3,4]],[[5],[6]],[[6],[7]],[[7],[8]],[[8],[9]],[[9],[10]],[[10],[12]],[[11],[11]],[[12],[13]],[[13],[14,15]],[[14],[16,17]],[[15],[18]],[[16],[20,24,25]],[[17],[19]],[[18],[21,22,23]],[[19],[26]],[[20],[27]],[[21],[28]],[[22],[30]],[[23],[29]],[[24],[31]],[[25],[32]],[[26],[33]],[[27],[34,35]],[[28],[36,37]],[[29],[38]],[[30,31],[39,40]],[[32],[41]],[[33],[42]],[[34],[43]],[[35],[44,45]],[[37],[46,47,49]],[[36],[48]],[[38],[50]],[[39],[51,52]],[[40],[53,54]],[[41],[55]],[[42],[56]],[[43],[57]],[[44],[58]],[[45],[59]],[[47],[60]],[[46],[61,62]],[[48],[63]],[[49],[64]],[[50],[65,66]],[[51],[67]],[[52],[68,69]],[[53],[70,71]],[[54],[72]],[[55],[73]],[[56],[74]],[[57],[75]],[[59],[76]],[[58],[77,78]],[[60,61,62],[79,80,81]],[[63],[83]],[[64],[82]],[[66],[84]],[[65],[85]],[[67],[86,96,97]],[[68],[87]],[[69],[88]],[[71],[89]],[[70],[90,91]],[[72],[92]],[[73],[94]],[[74],[95]],[[75],[93]],[[76,77],[98,99,100,101,102]],[[78,79],[103,104,108]],[[80,81],[105,106,107]],[[82,83,84],[109,110,111]],[[85],[112]],[[86],[113,114,115]],[[87,88,89],[116,117,118,119,120,121]],[[90],[122]],[[91],[123,124,125]],[[92],[126,127]],[[93],[128]],[[96],[129]],[[94,95],[130,131,132,133]],[[97],[134]],[[99],[135]],[[98],[136]],[[100],[137]],[[101],[138]],[[102,103],[139,140,141]],[[104,105],[142,143]],[[106],[144]],[[107],[145,146]],[[108,109],[147,148]],[[111],[149]],[[110],[150]],[[112],[151]],[[114],[152]],[[113],[153]],[[115],[154,155,156,157,158]],[[116],[159,160]],[[117],[161,163]],[[118],[162]],[[119],[164]],[[120],[165,166]],[[121],[167]],[[122],[168]],[[125],[169,170]],[[123],[171]],[[124],[172,173]],[[126],[174]],[[128],[175]],[[127],[176]],[[129],[177]],[[130],[178]],[[131],[179]],[[132],[180]],[[133,134],[182,183]],[[135],[184]],[[136,137],[185,186]],[[138],[181]],[[139],[187,188,189]],[[140],[190]],[[142],[192]],[[141],[191,193]],[[143],[194]],[[144],[195]],[[146],[196]],[[145],[197]],[[147],[198,199,200,201,202]],[[148],[203,204]],[[149],[205,207]],[[150],[206]],[[151],[208]],[[152],[209,210]],[[153],[211]],[[154],[212]],[[157],[213,214]],[[155],[215]],[[156],[216,217]],[[163],[218,219]],[[161],[220]],[[162],[221]],[[158],[222]],[[159],[223]],[[160],[224]],[[164],[225]],[[167],[226]],[[165],[227]],[[166],[228]],[[168],[229,230,231]],[[169],[232]],[[170,171],[233,234]],[[172],[235]],[[173,174],[236,237,238,239,240]],[[175],[241]],[[176],[242]],[[177],[243]],[[178],[244,245]],[[180],[246]],[[179],[247,248]],[[181,182],[249]],[[183],[251]],[[184],[250]],[[185],[252]],[[186],[253]],[[187],[254]],[[188],[255]],[[189],[256,257,258]],[[191],[259]],[[190,192],[260]],[[193,194,195],[261,262]]]},{"latin":"In illo témpore: Dixit Iesus discípulis suis parábolam hanc: Assimilátum est regnum cœlórum hómini regi, qui vóluit ratiónem pónere cum servis suis. Et cum cœpísset ratiónem pónere, oblátus est ei unus, qui debébat ei decem mília talénta. Cum autem non habéret, unde rédderet, iussit eum dóminus eius venúmdari et uxórem eius et fílios et ómnia, quæ habébat, et reddi. Prócidens autem servus ille, orábat eum, dicens: Patiéntiam habe in me, et ómnia reddam tibi. Misértus autem dóminus servi illíus, dimísit eum et débitum dimísit ei. Egréssus autem servus ille, invénit unum de consérvis suis, qui debébat ei centum denários: et tenens suffocábat eum, dicens: Redde, quod debes. Et prócidens consérvus eius, rogábat eum, dicens: Patiéntiam habe in me, et ómnia reddam tibi. Ille autem nóluit: sed ábiit, et misit eum in cárcerem, donec rédderet débitum. Vidéntes autem consérvi eius, quæ fiébant, contristáti sunt valde: et venérunt et narravérunt dómino suo ómnia, quæ facta fúerant. Tunc vocávit illum dóminus suus: et ait illi: Serve nequam, omne débitum dimísi tibi, quóniam rogásti me: nonne ergo opórtuit et te miseréri consérvi tui, sicut et ego tui misértus sum? Et irátus dóminus eius, trádidit eum tortóribus, quoadúsque rédderet univérsum débitum. Sic et Pater meus cœléstis fáciet vobis, si non remiséritis unusquísque fratri suo de córdibus vestris.","english":"At that time, Jesus spoke to His disciples this parable: The kingdom of heaven is likened to a king who desired to settle accounts with his servants. And when he had begun the settlement, one was brought to him who owed him ten thousand talents. And as he had no means of paying, his master ordered him to be sold, with his wife and children and all that he had, and payment to be made. But the servant fell down and besought him, saying, 'Have patience with me and I will pay you all!' And moved with compassion, the master of that servant released him, and forgave him the debt. But as that servant went out, he met one of his fellow-servants who owed him a hundred denarii and he laid hold of him, and throttled him, saying, 'Pay what you owe.' His fellow-servant therefore fell down and began to entreat him, saying, 'Have patience with me and I will pay you all.' But he would not; but went away and cast him into prison until he should pay what was due. His fellow-servants therefore, seeing what had happened, were very much saddened, and they went and informed their master of what had taken place. Then his master called him, and said to him, 'Wicked servant! I forgave you all the debt, because you entreated me. Should not you also have had pity on your fellow-servant, even as I had pity on you?' And his master, being angry, handed him over to the torturers until he should pay all that was due to him. So also My heavenly Father will do to you, if you do not each forgive your brothers from your hearts.","links":[[[0,1,2],[0,1,2]],[[4],[3]],[[3],[4,5]],[[5,6],[6,7]],[[7,8],[8,9]],[[9,10],[14,15]],[[11],[10,11]],[[12],[12,13]],[[13,14],[16,17,18]],[[15],[19]],[[16],[20]],[[17,18],[21,22,23]],[[19],[24]],[[20,21],[25,26]],[[22],[27]],[[23],[28]],[[24],[29,30,31]],[[25,26],[32,33]],[[27,28],[35,36]],[[29],[37,38]],[[30],[34]],[[31],[39]],[[32],[40]],[[33],[41]],[[34,35,36],[42,43,44]],[[37,38],[45,46]],[[39,40,41,42],[47,48,49,50,51,52]],[[43],[55]],[[44],[56]],[[45,46],[53,54]],[[47],[57,58,59]],[[48],[60]],[[49,50],[61,62]],[[51],[63]],[[52],[64]],[[53],[65]],[[54,55,56],[66,67,68,69]],[[57],[70]],[[58],[71,72,73,74]],[[59],[78,79]],[[60],[75]],[[61,62],[76,77]],[[63],[80,81]],[[64],[82]],[[65],[83]],[[66,67],[84,85]],[[68,69],[86,87]],[[70],[88]],[[71,72,73],[89,90,91,92,93]],[[74,75],[94,95,96,97]],[[76,77,78],[98,99,100,101,102]],[[79,80],[103,104]],[[81],[105]],[[83,84],[106,107]],[[82],[108,109]],[[86],[110]],[[85],[111,114,115]],[[87,88],[112,113]],[[89],[116,117]],[[90],[118]],[[91,92,93],[119,120,121,122]],[[94],[123]],[[95],[124]],[[96],[125]],[[97,98],[126,127,128]],[[99],[129]],[[100],[130,131,132,133,134]],[[101,102],[135,136,137]],[[103],[138]],[[104],[139]],[[105,106],[140,141,142]],[[107],[146]],[[108],[147,148]],[[109,110],[143,144,145]],[[111],[149,150,151,152]],[[112],[153]],[[113],[154]],[[114,115],[155,156]],[[116,117],[157,158]],[[118],[159]],[[119,120,121],[160,161,162,163,164]],[[123],[165]],[[122],[166]],[[124],[167,168]],[[125],[169]],[[126],[170,171]],[[127],[172]],[[128,129],[173,174]],[[130,131],[175,176]],[[132],[177]],[[133],[178,179,180]],[[134],[181,182,183]],[[136],[187]],[[137,138],[184,185,186]],[[135],[188]],[[139,140],[189,190,191]],[[141,142],[192,195]],[[143],[193,194]],[[144],[196,197]],[[145],[198]],[[146],[199]],[[147],[200]],[[148,149],[201,202]],[[150,151,152,153],[203,204,205,206,207]],[[154],[208]],[[157,158],[209,210]],[[155,156],[211,212]],[[159],[213]],[[160,161],[214,215,216]],[[162,163],[217,218]],[[164,165,166,167],[219,220,221,222,223,224]],[[168,169,170],[225,226,227,228]],[[171,172],[229,230]],[[174],[232]],[[175],[231]],[[173],[233,234]],[[176],[235,236]],[[177,178],[237,238,239]],[[179,180],[240,241]],[[181],[242]],[[182,183,184],[243,244,245,246]],[[185],[247]],[[187,188],[248,249]],[[186],[250,251]],[[189,190],[252,253,254]],[[191],[255,256,257]],[[192],[258]],[[193],[259,260,261]],[[194,195],[262,263,264,265,266,267]],[[196],[268]],[[197],[269]],[[198,199],[270,272]],[[200],[271]],[[201],[273,274]],[[202],[275,276]],[[203],[277]],[[204],[279,280]],[[205],[278,282]],[[206],[281]],[[207,208],[283,284]],[[209,210,211],[285,286,287]]]},{"latin":"In illo témpore: Dixit Pilátus ad Iesum: Tu es Rex Iudæórum? Respóndit Iesus: A temetípso hoc dicis, an álii dixérunt tibi de me? Respóndit Pilátus: Numquid ego Iudǽus sum? Gens tua et pontífices tradidérunt te mihi: quid fecísti? Respóndit Iesus: Regnum meum non est de hoc mundo. Si ex hoc mundo esset regnum meum, minístri mei útique decertárent, ut non tráderer Iudǽis: nunc autem regnum meum non est hinc. Dixit ítaque ei Pilátus: Ergo Rex es tu? Respóndit Iesus: Tu dicis, quia Rex sum ego. Ego in hoc natus sum et ad hoc veni in mundum, ut testimónium perhíbeam veritáti: omnis, qui est ex veritáte, audit vocem meam.","english":"At that time, Pilate said to Jesus, Are You the King of the Jews? Jesus answered, Do you say this of yourself, or have others told you of Me? Pilate answered, Am I a Jew? Your own people and the chief priests have delivered You to me. What have You done? Jesus answered, My kingdom is not of this world. If My kingdom were of this world, My followers would certainly have fought that I might not be delivered to the Hebrews. But, as it is, My kingdom is not from here. Pilate therefore said to Him, You are then a King? Jesus answered, You say it: I am a King. This is why I was born, and why I have come into the world, to bear witness to the truth. Everyone who is of the truth hears My voice.","links":[[[0,1,2],[0,1,2]],[[3,4,5,6],[3,4,5,6]],[[7,8,9,10],[7,8,9,10,11,12,13]],[[11,12],[14,15]],[[13,14,15,16],[16,17,18,19,20,21]],[[17,18,19,20,21,22],[22,23,24,25,26,27,28]],[[23,24],[29,30]],[[25,26,27,28],[31,32,33,34]],[[29,30],[35,36,37]],[[31],[38]],[[32],[39,40,41]],[[33],[42,43]],[[34],[44]],[[35],[45,46]],[[36,37],[47,48,49,50]],[[38,39],[51,52]],[[40,41],[53,54]],[[42,43],[55,56]],[[44,45,46],[57,58,59]],[[47],[60]],[[48,49,50],[64,65,66]],[[51],[63]],[[52,53],[61,62]],[[54,55],[67,68]],[[56],[70]],[[57],[69,71,72]],[[58],[73]],[[59],[76]],[[60],[74,75,77,78]],[[61],[79,80,81]],[[62,63],[82,83,84,85]],[[64,65],[86,87]],[[66,67],[88,89]],[[68],[90,91]],[[69],[94]],[[70],[93]],[[71],[95,96]],[[72],[92]],[[73],[99]],[[74],[100,101]],[[75],[98]],[[76],[97]],[[77,78],[102,103]],[[79,80,81],[104,105,106]],[[82,83,84],[107,108,109,110]],[[85,86,87,88,89],[111,112,113,114,115,116]],[[90,91,92,93,94,95],[117,118,119,120,121,122,123,124]],[[96],[125]],[[97,98],[126,127]],[[99],[128,129,130]],[[100,101],[131,132]],[[102,103,104],[133,134,135,136]],[[105],[137]],[[106,107],[138,139]]]},{"latin":"In illo témpore: Ascéndens Iesus in navículam, transfretávit et venit in civitátem suam. Et ecce, offerébant ei paralýticum iacéntem in lecto. Et videns Iesus fidem illórum, dixit paralýtico: Confíde, fili, remittúntur tibi peccáta tua. Et ecce, quidam de scribis dixérunt intra se: Hic blasphémat. Et cum vidísset Iesus cogitatiónes eórum, dixit: Ut quid cogitátis mala in córdibus vestris? Quid est facílius dícere: Dimittúntur tibi peccáta tua; an dícere: Surge et ámbula? Ut autem sciátis, quia Fílius hóminis habet potestátem in terra dimitténdi peccáta, tunc ait paralýtico: Surge, tolle lectum tuum, et vade in domum tuam. Et surréxit et ábiit in domum suam. Vidéntes autem turbæ timuérunt, et glorificavérunt Deum, qui dedit potestátem talem homínibus.","english":"At that time, Jesus, getting into a boat, crossed over and came to his own town. And behold, they brought to Him a paralytic lying on a pallet. And Jesus, seeing their faith, said to the paralytic, Take courage, son; your sins are forgiven you. And behold, some of the scribes said within themselves, This man blasphemes. And Jesus, knowing their thoughts, said, Why do you harbor evil thoughts in your hearts? For which is easier, to say, 'Your sins are forgiven you,' or to say, 'Arise, and walk'? But that you may know that the Son of Man has power on earth to forgive sins, - then He said to the paralytic - Arise, take up your pallet and go to your house. And he arose, and went away to his house. But when the crowds saw it, they were struck with fear, and glorified God Who had given such power to men.","links":[[[0,1,2],[0,1,2]],[[3],[4]],[[4],[3]],[[5,6],[5,6,7]],[[7],[8,9]],[[8],[10]],[[9],[11]],[[10,11,12],[12,13,14,15]],[[13],[16]],[[14],[17]],[[15],[18,19]],[[16],[20,21]],[[17],[22,23]],[[18],[24]],[[19,20],[25,26,27]],[[21],[28]],[[22],[30]],[[23],[29]],[[24,25],[31,32]],[[26],[33]],[[27],[34,35,36]],[[28],[37,38]],[[29],[39]],[[30,31,32,33],[40,41,42,43,44]],[[34],[45]],[[35],[46]],[[36],[47]],[[37,38],[48,49,50]],[[39],[51]],[[40,41],[52,53]],[[42],[54,55]],[[43],[56]],[[44],[57]],[[45,46],[59]],[[47],[58]],[[48,49],[60,61]],[[50],[62]],[[51,52],[63]],[[53],[64,65,66]],[[54],[67,68]],[[55,56,57],[69,70,71]],[[58,59,60],[72,73,74,75]],[[61],[76,77]],[[62,63,64,65],[78,79,80,81,82]],[[66],[83]],[[67],[84,85]],[[68],[86]],[[69],[87]],[[70],[88]],[[72],[89]],[[71,73],[90,91,92,93]],[[74],[94]],[[75,76],[95,96,97,98]],[[77,78],[99,100]],[[79,80],[101,102]],[[81,82],[103,104,105]],[[83],[106]],[[84],[107,108]],[[85],[109,110,111]],[[86],[112]],[[87],[113,114]],[[88,89],[115,116]],[[90],[117]],[[91],[118]],[[92,93,94],[119,120,121]],[[95],[122]],[[96],[123,124]],[[97],[125]],[[98],[126,127]],[[99,100,101],[128,129,130]],[[103],[131]],[[102],[132,135,136]],[[104],[133,134]],[[105],[137,138,139,140,141]],[[106],[142]],[[107],[143]],[[108],[144]],[[109],[145]],[[110],[146,147]],[[111,112],[148,149]],[[113],[150,151]]]},{"latin":"In illo témpore: Venit Iesus in partes Cæsaréæ Philíppi, et interrogábat discípulos suos, dicens: Quem dicunt hómines esse Fílium hóminis? At illi dixérunt: Alii Ioánnem Baptístam, alii autem Elíam, álii vero Ieremíam, aut unum ex prophétis. Dicit illis Iesus: Vos autem quem me esse dícitis? Respóndens Simon Petrus, dixit: Tu es Christus, Fílius Dei vivi. Respóndens autem Iesus, dixit ei: Beátus es, Simon Bar Iona: quia caro et sanguis non revelávit tibi, sed Pater meus, qui in cœlis est. Et ego dico tibi, quia tu es Petrus, et super hanc petram ædificábo Ecclésiam meam, et portæ ínferi non prævalébunt advérsus eam. Et tibi dabo claves regni cœlórum. Et quodcúmque ligáveris super terram, erit ligátum et in cœlis: et quodcúmque sólveris super terram, erit solútum et in cœlis.","english":"In that time: Jesus came into the quarters of Caesarea Philippi: and he asked his disciples, saying: Whom do men say that the Son of man is? But they said: Some John the Baptist, and other some Elias, and others Jeremias, or one of the prophets. Jesus saith to them: But whom do you say that I am? Simon Peter answered and said: Thou art Christ, the Son of the living God. And Jesus answering, said to him: Blessed art thou, Simon Bar-Jona: because flesh and blood hath not revealed it to thee, but my Father who is in heaven. And I say to thee: That thou art Peter; and upon this rock I will build My Church, and the gates of hell shall not prevail against it. And I will give to thee the keys of the kingdom of heaven. And whatsoever thou shalt bind upon earth, it shall be bound also in heaven: and whatsoever thou shalt loose upon earth, it shall be loosed also in heaven.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[4]],[[4],[3]],[[5],[5]],[[6],[6,7]],[[7],[8,9]],[[8],[10]],[[9],[11]],[[10],[12,13]],[[11],[15]],[[12],[14]],[[13],[16]],[[14],[17]],[[15],[18,20]],[[16],[19]],[[17],[21,26]],[[18],[22,23]],[[19],[24,25]],[[20],[27]],[[21],[28]],[[22],[29]],[[23],[30]],[[24],[31]],[[25],[32,33]],[[26],[35,36]],[[27],[34]],[[28],[37]],[[29],[39]],[[30],[38]],[[31],[40]],[[32],[41]],[[33],[42]],[[34],[43]],[[35],[44,45]],[[36],[47]],[[37],[48,49]],[[38],[46]],[[39],[53]],[[40],[50]],[[41],[51]],[[42],[56]],[[43],[55,57]],[[44],[52,54]],[[45],[60,61]],[[46],[58]],[[47],[59]],[[48],[62]],[[49],[63]],[[50],[64]],[[51],[65]],[[52],[66,67]],[[53],[68,71]],[[54],[69,70]],[[55],[74]],[[56],[72]],[[57],[73]],[[58],[75]],[[59],[76,77]],[[60],[78]],[[61],[79,80]],[[62],[81]],[[63],[82]],[[64],[83]],[[65],[84]],[[66],[85]],[[67],[86]],[[68],[87]],[[69],[89]],[[70],[88,90,91]],[[71],[92,93]],[[72],[94]],[[73],[96]],[[74],[95]],[[75],[97]],[[76],[99]],[[77],[100]],[[78],[98]],[[79],[101]],[[80],[102]],[[81],[103]],[[82],[104,105]],[[83],[106]],[[84],[107]],[[85],[108]],[[86],[109]],[[87],[110]],[[88],[111]],[[89],[112]],[[90],[113]],[[91],[114,115,116]],[[92],[118]],[[93],[117]],[[94],[119]],[[95],[120,121]],[[96],[122,123]],[[97],[125]],[[98],[124,126]],[[99],[127]],[[100],[128]],[[101],[129]],[[102],[133,134]],[[103],[130,131,132]],[[104],[135,136]],[[105],[137,138,139]],[[106],[140,141]],[[107],[142]],[[108],[143]],[[109],[144,145,146]],[[110],[147]],[[111],[148]],[[112],[149,150,151]],[[113],[152]],[[114],[153]],[[115],[154]],[[116],[155]],[[117],[156]],[[118],[157]],[[119],[158,159,160]],[[120],[161]],[[121],[162]],[[122],[163,164,165]],[[123],[166]],[[124],[167]],[[125],[168]],[[126],[169]]]},{"latin":"In illo témpore: Erat quidam régulus, cuius fílius infirmabátur Caphárnaum. Hic cum audísset, quia Iesus adveníret a Iudǽa in Galilǽam, ábiit ad eum, et rogábat eum, ut descénderet et sanáret fílium eius: incipiébat enim mori. Dixit ergo Iesus ad eum: Nisi signa et prodígia vidéritis, non créditis. Dicit ad eum régulus: Dómine, descénde, priúsquam moriátur fílius meus. Dicit ei Iesus: Vade, fílius tuus vivit. Crédidit homo sermóni, quem dixit ei Iesus, et ibat. Iam autem eo descendénte, servi occurrérunt ei et nuntiavérunt, dicéntes, quia fílius eius víveret. Interrogábat ergo horam ab eis, in qua mélius habúerit. Et dixérunt ei: Quia heri hora séptima relíquit eum febris. Cognóvit ergo pater, quia illa hora erat, in qua dixit ei Iesus: Fílius tuus vivit: et crédidit ipse et domus eius tota.","english":"At that time, there was a certain royal official whose son was lying sick at Capharnaum. When he heard that Jesus had come from Judea into Galilee, he went to Him and besought Him to come down and heal his son, for he was at the point of death. Jesus therefore said to him, Unless you see signs and wonders, you do not believe. The royal official said to Him, Sir, come down before my child dies. Jesus said to him, Go your way, your son lives. The man believed the word that Jesus spoke to him, and departed. But even as he was now going down, his servants met him and brought word saying that his son lived. He asked of them therefore the hour in which he had got better. And they told him, Yesterday, at the seventh hour, the fever left him. The father knew then that it was at that very hour in which Jesus had said to him, Your son lives. And he himself believed, and his whole household.","links":[[[0,1,2],[0,1,2]],[[3],[3,4]],[[4],[5,6]],[[5],[7,8]],[[6],[9]],[[7],[10]],[[8],[11,12,13]],[[9],[14,15]],[[11],[16]],[[10],[17]],[[12],[18]],[[13],[19]],[[14],[20]],[[15],[21,22]],[[16],[23]],[[17],[24]],[[18],[25]],[[19],[26]],[[20],[27,28]],[[21],[29]],[[22],[30]],[[23],[31]],[[24],[32]],[[25],[33]],[[26],[34]],[[27],[35,36]],[[28],[37]],[[29],[38]],[[30,31],[39,40]],[[33],[41]],[[32],[42,43,44,45,46]],[[34],[47,48]],[[35],[51]],[[36],[50]],[[37],[49]],[[38],[52]],[[39],[53]],[[40],[54]],[[41],[57]],[[42],[58]],[[43],[59]],[[44],[55,56]],[[45],[62]],[[46],[60,61,63]],[[50],[64,65,66]],[[47],[67]],[[48],[68]],[[49],[69]],[[51],[70]],[[52],[71,72]],[[53],[73]],[[55,56],[74,75]],[[54],[76]],[[59],[77]],[[57],[78]],[[58],[79,80]],[[60],[81,82,83]],[[61,62],[84,85]],[[63],[86]],[[65],[87,88]],[[64],[89]],[[66],[90,91]],[[67],[92]],[[70],[93]],[[68],[94]],[[69],[95,96]],[[71],[97]],[[72],[98]],[[74],[99,100]],[[76],[101,103,105,106]],[[75],[102]],[[73],[104]],[[77],[107,108]],[[78],[109]],[[79],[110]],[[80],[111]],[[81],[112,113]],[[82],[114]],[[83],[115]],[[84,85],[116,117]],[[86],[118]],[[87],[119,120]],[[90],[121]],[[91],[122]],[[88],[123]],[[89],[124,125]],[[92],[126]],[[93],[127]],[[95],[128,129,130]],[[94],[131]],[[96],[132]],[[97,98,99],[133,134,135]],[[100],[136]],[[101,102],[137,138,139,140]],[[105],[141,142]],[[103],[143]],[[104],[144]],[[108],[145,146]],[[106],[147]],[[107],[148]],[[109],[149]],[[112],[150,151]],[[110,111],[152,153,154,155]],[[113],[156]],[[114],[157]],[[117],[158]],[[115],[159,160]],[[116],[161,162]],[[118,119],[163,164]],[[120],[165]],[[121],[166]],[[123],[167,168]],[[122],[169]],[[124],[170]],[[125,126,127],[171,172,173]]]},{"latin":"In illo témpore: Designávit Dóminus et álios septuagínta duos: et misit illos binos ante fáciem suam in omnem civitátem et locum, quo erat ipse ventúrus. Et dicebat illis: Messis quidem multa, operárii autem pauci. Rogáte ergo Dóminum messis, ut mittat operários in messem suam. Ite: ecce, ego mitto vos sicut agnos inter lupos. Nolíte portáre sácculum neque peram neque calceaménta; et néminem per viam salutavéritis. In quamcúmque domum intravéritis, primum dícite: Pax huic dómui: et si ibi fúerit fílius pacis, requiéscet super illum pax vestra: sin autem, ad vos revertétur. In eádem autem domo manéte, edéntes et bibéntes quæ apud illos sunt: dignus est enim operárius mercéde sua. Nolíte transíre de domo in domum. Et in quamcúmque civitátem intravéritis, et suscéperint vos, manducáte quæ apponúntur vobis: et curáte infírmos, qui in illa sunt, et dícite illis: Appropinquávit in vos regnum Dei.","english":"At that time, the Lord appointed seventy-two others, and sent them forth two by two before Him into every town and place where He Himself was about to come. And He said to them, The harvest indeed is great, but the laborers are few. Pray therefore the Lord of the harvest to send forth laborers into His harvest. Go. Behold, I send you forth as lambs in the midst of wolves. Carry neither purse, nor wallet, nor sandals, and greet no one on the way. Whatever house you enter, first say, 'Peace to this house!' And if a son of peace be there, your peace will rest upon him; but if not, it will return to you. And remain in the same house, eating and drinking what they have; for the laborer deserves his wages. Do not go from house to house. And whatever town you enter, and they receive you, eat what is set before you, and cure the sick who are there, and say to them, 'The kingdom of God is at hand for you.'","links":[[[0,1,2],[0,1,2]],[[3,4,5],[3,4,5]],[[6,7,8],[6,7,8]],[[9],[9]],[[10],[10,12]],[[11],[11]],[[12],[13,14,15]],[[13],[16]],[[14,15],[17]],[[16],[18]],[[17],[19]],[[18],[20]],[[19],[21]],[[20],[22]],[[21],[23]],[[22],[26]],[[23],[24,25]],[[24],[27,28,29]],[[25],[30]],[[26],[31,32]],[[27],[33,34]],[[28],[35,36]],[[29],[37]],[[30],[38,39]],[[31],[41,42]],[[32],[40]],[[33],[43,44]],[[34],[45]],[[35],[46]],[[36],[47,48]],[[37],[49,50,51]],[[38,39],[52,53,54]],[[40],[55]],[[41],[56]],[[42,43],[57,58]],[[44],[59]],[[45],[60]],[[46],[61]],[[47],[62,64]],[[48],[63]],[[49],[65]],[[50],[66]],[[51],[67,68,69,70]],[[52],[71]],[[53,54],[72,73]],[[55],[74]],[[56],[75]],[[57],[76]],[[58],[77]],[[59],[78]],[[60],[79]],[[61],[81,82]],[[62],[83]],[[63],[84,85]],[[64],[80]],[[65,66,67],[86,87]],[[68],[88,89]],[[69],[90]],[[70],[91]],[[71,72,73],[92,93,94,95]],[[74],[96]],[[75],[97]],[[78],[98,99]],[[79],[100,101]],[[77],[102]],[[76],[103]],[[83],[105]],[[84],[104]],[[80],[106,107]],[[81],[108]],[[82],[109]],[[85,86],[110,111,112]],[[87],[116]],[[88],[117]],[[89],[113,114,115]],[[90,93],[120,121,123]],[[91],[122]],[[92],[118]],[[94],[119]],[[95],[124]],[[96],[125]],[[97],[126]],[[98,99,100,101],[127,128,129]],[[102,103],[133]],[[104],[130]],[[105],[131,132]],[[107],[134]],[[106],[135]],[[108],[136,137]],[[109],[138]],[[110],[139]],[[111],[140]],[[112],[141]],[[113],[142]],[[114],[143]],[[115,116,117],[144,145]],[[118],[146,147]],[[119],[148]],[[120],[149,150]],[[121],[151]],[[122],[152]],[[123],[153]],[[124],[154,155,156]],[[125],[157]],[[126],[158]],[[127],[159]],[[128],[160,161]],[[129],[162]],[[130,131],[164]],[[132],[163]],[[133],[165]],[[134],[166]],[[135],[167,168]],[[139],[169,170]],[[140],[171,172]],[[136],[173,174,175]],[[137],[176]],[[138],[177]]]},{"latin":"In illo témpore: Erat dies festus Iudæórum, et ascéndit Iesus Ierosólymam. Est autem Ierosólymis Probática piscína, quæ cognominátur hebráice Bethsaida, quinque pórticus habens. In his iacébat multitúdo magna languéntium, cæcórum, claudórum, aridórum exspectántium aquæ motum. Angelus autem Dómini descendébat secúndum tempus in piscínam, et movebátur aqua. Et, qui prior descendísset in piscínam post motiónem aquæ, sanus fiebat, a quacúmque detinebátur infirmitáte.","english":"At that time, there was a feast of the Jews, and Jesus went up to Jerusalem. Now there is at Jerusalem, by the Sheepgate, a pool called in Hebrew Bethsaida, having five porticoes. In these were lying a great multitude of the sick, blind, lame, and those with shriveled limbs, waiting for the moving of the water. For an Angel of the Lord used to come down at certain times into the pool, and the water was troubled. And the first to go down into the pool after the troubling of the water was cured of whatever infirmity he had.","links":[[[0,1,2],[0,1,2]],[[3],[3,4]],[[4,5],[5,6]],[[6],[7,8,9]],[[7],[10]],[[9],[11]],[[8],[12,13]],[[10],[14,15]],[[11,12],[16,17,18]],[[13],[19,20]],[[14],[21,22,23]],[[15],[24,25]],[[16,17],[26]],[[18],[27,28]],[[19],[29]],[[22],[30]],[[20],[31]],[[21],[32]],[[23],[33]],[[24],[34]],[[25],[35,36]],[[26,27],[37,38,39]],[[28],[40,41,42]],[[29],[43]],[[30],[44]],[[31],[45,46,47,48,49]],[[32],[50,51]],[[33,34],[52,53,54,55,56]],[[36],[57]],[[35],[58,59]],[[37],[60,61,62]],[[38],[63,64,65,66]],[[39,40],[67,68,69]],[[41],[70]],[[42],[71,72]],[[43],[73]],[[45],[74,75]],[[44],[76,77]],[[46],[78]],[[47,48,49],[79,80,81,82,83]],[[50],[84]],[[51],[85,86]],[[52],[87]],[[53],[88,89]],[[54],[90,91,92]],[[56],[93]],[[55],[94]],[[57],[95]],[[58],[96]],[[60],[97]],[[59],[98,99]]]},{"latin":"In illo témpore: Dixit Petrus ad Iesum: Ecce, nos relíquimus ómnia, et secúti sumus te: quid ergo erit nobis? Iesus autem dixit illis: Amen, dico vobis, quod vos, qui secúti estis me, in regeneratióne, cum séderit Fílius hóminis in sede maiestátis suæ, sedébitis et vos super sedes duódecim, iudicántes duódecim tribus Israël. Et omnis, qui relíquerit domum, vel fratres, aut soróres, aut patrem, aut matrem, aut uxórem, aut fílios, aut agros, propter nomen meum, céntuplum accípiet, et vitam ætérnam possidébit.","english":"At that time, Peter said to Jesus, Behold, we have left all and followed You; what then shall we have? And Jesus said to them, Amen I say to you that you who have followed Me, in the regeneration when the Son of Man shall sit on the throne of His glory, shall also sit on twelve thrones, judging the twelve tribes of Israel. And everyone who has left house, or brothers, or sisters, or father, or mother, or wife, or children, or lands, for My name's sake, shall receive a hundredfold, and shall possess life everlasting.","links":[[[0,1,2],[0,1,2]],[[3,4,5,6],[3,4,5,6]],[[7],[7]],[[8,9,10],[8,9,10,11]],[[11,12,13,14],[12,13,14]],[[15,16,17,18],[15,16,17,18,19]],[[19,20,21,22],[20,21,22,23,24]],[[23,24,25],[25,26,27,28,29]],[[26,27,28,29,30,31],[30,31,32,33,34,35]],[[32,33],[36,37,38]],[[34,35,36,37],[39,40,41,42,43,44,45]],[[38,39,40,41],[46,47,48,49,50,51]],[[42,43,44,45,46,47],[52,53,54,55,56,57]],[[48,49,50,51],[58,59,60,61,62,63]],[[52,53,54,55,56],[64,65,66,67,68,69]],[[57,58],[70,71]],[[59,60],[72,73]],[[61,62],[74,75]],[[63,64],[76,77]],[[65,66],[78,79]],[[67,68],[80,81]],[[69,70],[82,83]],[[71,72,73],[84,85,86,87]],[[74,75],[88,89,90,91]],[[76,77,78,79],[92,93,94,95,96]]]},{"latin":"In illo témpore: Respóndens Iesus, dixit: Confíteor tibi, Pater, Dómine cæli et terræ, quia abscondísti hæc a sapiéntibus et prudéntibus, et revelásti ea párvulis. Ita, Pater: quóniam sic fuit plácitum ante te. Omnia mihi trádita sunt a Patre meo. Et nemo novit Fílium nisi Pater: neque Patrem quis novit nisi Fílius, et cui volúerit Fílius reveláre. Veníte ad me, omnes, qui laborátis et oneráti estis, et ego refíciam vos. Tóllite iugum meum super vos, et discite a me, quia mitis sum et húmilis corde: et inveniétis réquiem animábus vestris. Iugum enim meum suave est et onus meum leve.","english":"At that time, Jesus spoke and said, I praise You, Father, Lord of heaven and earth, that You hid these things from the wise and prudent, and revealed them to little ones. Yes, Father, for such was Your good pleasure. All things have been delivered to Me by My Father; and no one knows the Son except the Father; nor does anyone know the Father except the Son, and him to whom the Son chooses to reveal Him. Come to Me, all you who labor and are burdened, and I will give you rest. Take My yoke upon you, and learn from Me, for I am meek and humble of heart; and you will find rest for your souls. For My yoke is easy, and My burden light.","links":[[[0,1,2],[0,1,2]],[[3,4,5],[3,4,5,6]],[[6,7,8],[7,8,9,10]],[[9,10,11,12],[11,12,13,14,15]],[[13],[16]],[[14],[17,18]],[[15],[19,20]],[[16],[21]],[[17],[22,23]],[[18],[24]],[[19],[25]],[[20],[26]],[[21],[27]],[[22],[28]],[[23],[29,30,31]],[[24,25],[32,33]],[[26],[34]],[[27],[35]],[[28],[36]],[[30,31],[37]],[[29],[38,39]],[[32],[40,41]],[[33],[45,46]],[[34,35],[42,43,44]],[[36],[47]],[[38],[48]],[[37],[49]],[[39],[50]],[[40],[51,52]],[[41],[53]],[[42],[54,55]],[[43],[56]],[[44],[57,58]],[[45],[59]],[[47],[61]],[[48],[60,62]],[[46],[63,64]],[[49],[65]],[[50],[66,67]],[[51],[68]],[[52],[69,70,71]],[[54],[72,73]],[[53],[74]],[[55],[75,76,77]],[[56],[78]],[[57],[79]],[[58],[80]],[[59],[81,82]],[[60],[83]],[[61],[84]],[[62],[85]],[[63,64],[86,87]],[[65],[88]],[[66],[89]],[[67],[90,91,93]],[[68],[92]],[[69],[94]],[[71],[95]],[[70],[96]],[[72],[97]],[[73],[98]],[[74],[99]],[[75],[100]],[[76],[101]],[[77],[102]],[[78],[103]],[[80],[104,105]],[[79],[106]],[[81],[107]],[[82],[108]],[[83],[109,110]],[[84],[111]],[[85],[112,113,114]],[[86],[115]],[[87,88],[116,117,118]],[[90],[119]],[[91],[120]],[[89],[121]],[[93],[122]],[[92],[123]],[[94],[124]],[[96],[125]],[[95],[126]],[[97],[127]]]},{"latin":"In illo témpore: Dixit Iesus discípulis suis: Vigiláte ergo, quia nescítis qua hora Dóminus vester ventúrus sit. Illud autem scitóte, quóniam si sciret paterfamílias qua hora fur ventúrus esset, vigiláret útique, et non síneret pérfodi domum suam. Ideo et vos estóte paráti: quia qua nescítis hora Fílius hóminis ventúrus est. Quis, putas, est fidélis servus, et prudens, quem constítuit dóminus suus super famíliam suam ut det illis cibum in témpore? Beátus ille servus, quem cum vénerit dóminus eius, invénerit sic faciéntem. Amen dico vobis, quóniam super ómnia bona sua constítuet eum.","english":"At that time, Jesus said to His disciples, “Watch, for you do not know at what hour your Lord is to come. But of this be assured, that if the householder had known at what hour the thief was coming, he would certainly have watched, and not have let his house be broken into. Therefore you also must be ready, because at an hour that you do not expect, the Son of Man will come. Who, do you think, is the faithful and prudent servant whom his master has set over his household to give them their food in due time? Blessed is that servant whom his master, when he comes, shall find so doing. Amen I say to you, he will set him over all his goods.”","links":[[[0,1,2],[0,1,2]],[[3,4,5,6],[3,4,5,6,7]],[[7,8],[8]],[[9],[9]],[[10],[10,11,12,13]],[[11,12],[14,15,16]],[[13,14],[17,18]],[[15,16],[19,20,21]],[[17,18,19],[22,23,24,25,26]],[[20],[27]],[[21,22,23],[28,29,30,31,32]],[[24,25],[33,34,35]],[[26,27,28],[36,37,38,39]],[[29,30],[40,41,42,43,44]],[[31,32,33,34,35,36],[45,46,47,48,49,50,51,52,53]],[[37,38,39,40,41],[54,55,56,57,58,59]],[[42,43,44,45],[60,61,62,63,64,65,66,67,68]],[[46,47],[69,70,71,72]],[[48,49],[73,74]],[[50],[75]],[[51],[76,77,78]],[[52,53,54,55,56],[79,80,81,82,83,84]],[[57,58,59,60],[85,86,87,88,89]],[[61,62,63],[90,91,92]],[[64,65,66,67],[93,94,95,96,97]],[[68,69],[98,99,100]],[[70,71,72],[101,102,103,104]],[[73],[105]],[[76,77],[106,107]],[[74,75],[108,109,110]],[[78],[111,112]],[[79,80],[113,114]],[[81,82,83],[115,116,117,118,119]],[[89],[120,121,122]],[[90],[123]],[[84,85,86,87,88],[124,125,126,127]]]},{"latin":"In illo témpore: Abeúntes pharisǽi consílium iniérunt, ut cáperent Iesum in sermóne. Et mittunt ei discípulos suos cum Herodiánis, dicéntes: Magíster, scimus, quia verax es et viam Dei in veritáte doces, et non est tibi cura de áliquo: non enim réspicis persónam hóminum: dic ergo nobis, quid tibi vidétur, licet censum dare Cǽsari, an non? Cógnita autem Iesus nequítia eórum, ait: Quid me tentátis, hypócritæ? Osténdite mihi numísma census. At illi obtulérunt ei denárium. Et ait illis Iesus: Cuius est imágo hæc et superscríptio? Dicunt ei: Cǽsaris. Tunc ait illis: Réddite ergo, quæ sunt Cǽsaris, Cǽsari; et, quæ sunt Dei, Deo.","english":"At that time, the Pharisees went and took counsel how they might trap Jesus in His talk. And they sent to Him their disciples with the Herodians, saying, Master, we know that You are truthful, and that You teach the way of God in truth, and that You care naught for any man; for You do not regard the person of men. Tell us, therefore, what do You think: Is it lawful to give tribute to Caesar, or not? But Jesus, knowing their wickedness, said, Why do you test Me, you hypocrites? Show Me the coin of the tribute. So they offered Him a denarius. Then Jesus said to them, Whose are this image and the inscription? They said to Him, Caesar's. Then He said to them, Render, therefore, to Caesar the things that are Caesar's, and to God the things that are God's.","links":[[[0,1,2],[0,1,2]],[[3],[5]],[[4],[3,4]],[[5,6],[6,7,8]],[[7],[9]],[[8],[10,11,12]],[[9],[13]],[[10],[14]],[[11],[15,16]],[[12],[17]],[[13],[18,19]],[[14],[20,21]],[[15],[23]],[[16],[22]],[[17],[24]],[[18],[25,26]],[[19],[27]],[[20],[28]],[[21],[29,30]],[[22],[31]],[[23,24],[32,33,34]],[[25],[35,36]],[[26,27,28,29,30],[37,38,39,40,41,42,43,44]],[[31],[45,46]],[[34],[47]],[[32,33,35],[48,49]],[[36,37],[50,51,52]],[[39],[53]],[[38,40],[54,55,56,57]],[[41],[58,59]],[[42],[60,61]],[[43],[62]],[[45],[63]],[[44],[64]],[[46],[65]],[[47],[67]],[[48],[66,68]],[[49],[69,70,71]],[[51],[72,73]],[[50],[74]],[[52],[75,76]],[[53],[77]],[[54],[78]],[[56],[79]],[[55],[81]],[[57],[80]],[[58],[83]],[[59],[82]],[[60],[84]],[[61],[85]],[[63],[86,87,88]],[[62],[89]],[[64],[90,91]],[[65],[92]],[[66],[93]],[[67],[94,95]],[[68],[96,97,98]],[[69],[99]],[[70],[100]],[[71],[101]],[[72],[102]],[[73],[103,104]],[[74],[105]],[[77],[106]],[[75],[107]],[[76],[108,109]],[[78],[110]],[[79],[111]],[[81],[112]],[[80],[113]],[[82],[114]],[[83],[115,116]],[[84],[117,118]],[[85],[119,120]],[[86],[121]],[[87],[122]],[[88],[123,124]],[[89],[125,126]],[[90],[127]],[[91],[128]],[[95],[129,130]],[[92,93],[131,132,133,134]],[[94],[135]],[[96],[136]],[[100],[137,138]],[[97,98],[139,140,141,142]],[[99],[143]]]},{"latin":"In illo témpore: Accessérunt discípuli ad Iesum, dicéntes: Quis, putas, maior est in regno cœlórum? Et advocans Iesus párvulum, státuit eum in médio eórum, et dixit; Amen, dico vobis, nisi convérsi fuéritis, et efficiámini sicut párvuli, non intrábitis in regnum cœlorum. Quicúmque ergo humiliáverit se sicut párvulus iste, hic est maior in regno cœlórum.","english":"At that time, the disciples came to Jesus, saying, Who then is greater in the kingdom of heaven? And Jesus called a little child to Him, set him in their midst, and said, Amen I say to you, unless you turn and become like little children, you will not enter into the kingdom of heaven. Whoever, therefore, humbles himself as this little child, he is the greatest in the kingdom of heaven.","links":[[[0,1,2],[0,1,2]],[[3],[5]],[[4],[4]],[[5],[6]],[[6],[7]],[[7],[8]],[[8],[9]],[[9],[10]],[[10],[12]],[[11],[11]],[[12],[13]],[[13],[15]],[[14],[17]],[[15],[18]],[[16],[20,24,25]],[[17],[19]],[[18],[21,22,23]],[[19],[26]],[[20],[27]],[[21],[28]],[[22],[30]],[[23],[29]],[[24],[31]],[[25],[32]],[[26],[33]],[[27],[34,35]],[[28],[36,37]],[[29],[38]],[[30,31],[39,40]],[[32],[41]],[[33],[42]],[[34],[43]],[[35],[44,45]],[[36],[48]],[[37],[46,47,49]],[[38],[50]],[[39],[52]],[[40],[54]],[[41],[55]],[[42],[56]],[[43],[57]],[[44],[58]],[[45],[59]],[[46],[61,62]],[[47],[60]],[[48],[63]],[[49],[64]],[[50],[66]],[[51],[67]],[[52],[69]],[[53],[71]]]},{"latin":"In illo témpore: Dixit Iesus discípulis suis: Nolíte timére, pusíllus grex, quia complácuit Patri vestro dare vobis regnum. Véndite quæ possidétis, et date eleemósynam. Fácite vobis sácculos, qui non veteráscunt, thesáurum non deficiéntem in cœlis: quo fur non apprópiat, neque tínea corrúmpit. Ubi enim thesáurus vester est, ibi et cor vestrum erit.","english":"At that time, Jesus said to His disciples, Do not be afraid, little flock, for it has pleased your Father to give you the kingdom. Sell what you have and give alms. Make for yourselves purses that do not grow old, a treasure unfailing in heaven, where neither thief draws near nor moth destroys. For where your treasure is, there also will your heart be.","links":[[[0,1,2],[0,1,2]],[[3],[4]],[[4],[3]],[[5],[7]],[[6],[6]],[[7,8],[8,9,10,11]],[[9,10],[12,13]],[[11],[14]],[[12],[16,17]],[[13],[19]],[[14],[18]],[[15],[20,21]],[[16],[22]],[[17],[24]],[[18],[25]],[[19],[26]],[[20],[27,28]],[[21],[29]],[[22],[30]],[[23],[31]],[[24],[32]],[[25],[33,34]],[[26],[35]],[[27],[36]],[[28,29],[37,38,39,40]],[[30],[42]],[[31,32],[43]],[[33],[44]],[[34],[45]],[[35],[46]],[[36],[48]],[[37],[47]],[[38],[49,50]],[[39],[51]],[[40],[52]],[[41],[53]],[[42],[55]],[[43],[54]],[[44],[57]],[[45],[56]],[[46],[58]],[[47],[59]],[[48],[60]],[[49],[63]],[[50],[62]],[[51],[61,64]]]},{"latin":"In illo témpore: Loquénte Iesu ad turbas, extóllens vocem quædam múlier de turba, dixit illi: Beátus venter, qui te portávit, et úbera, quæ suxísti. At ille dixit: Quinímmo beáti, qui áudiunt verbum Dei, et custódiunt illud.","english":"At that time, as Jesus was speaking to the multitudes, a certain woman from the crowd lifted up her voice and said to Him, Blessed is the womb that bore You, and the breasts that nursed You! But He said, Rather, blessed are they who hear the word of God and keep it.","links":[[[0,1,2],[0,1,2]],[[3],[3,5,6]],[[4],[4]],[[5],[7]],[[6],[8,9]],[[7],[16,17]],[[8],[18,19]],[[9],[10,11]],[[10],[12]],[[11],[13]],[[12],[14,15]],[[13],[20,21]],[[14],[22,23]],[[15],[24,25]],[[16],[26,27]],[[17],[28]],[[18],[30]],[[19],[29]],[[20],[31]],[[21],[32,33]],[[22],[34]],[[23],[35]],[[24],[37]],[[25],[38]],[[26],[39]],[[27],[40]],[[28],[41,42]],[[29],[43,44]],[[30],[45]],[[31],[46,47]],[[32],[48,49]],[[33],[50]],[[34],[51]],[[35],[52]]]},{"latin":"In illo témpore: Dixit Iesus discípulis suis: Sint lumbi vestri præcíncti, et lucernæ ardéntes in mánibus vestris, et vos símiles homínibus exspectántibus dóminum suum, quando revertátur a núptiis: ut, cum vénerit et pulsáverit, conféstim apériant ei. Beáti servi illi, quos, cum vénerit dóminus, invénerit vigilántes: amen, dico vobis, quod præcínget se, et fáciet illos discúmbere, et tránsiens ministrábit illis. Et si vénerit in secúnda vigília, et si in tértia vigília vénerit, et ita invénerit, beáti sunt servi illi. Hoc autem scitóte, quóniam, si sciret paterfamílias, qua hora fur veníret, vigiláret útique, et non síneret pérfodi domum suam. Et vos estóte paráti, quia, qua hora non putátis, Fílius hóminis véniet.","english":"At that time, Jesus said to His disciples, Let your loins be girt about and your lamps burning, and you yourselves like men waiting for their master’s return from the wedding; so that when he comes and knocks, they may straight-way open to him. Blessed are those servants whom the master, on his return, shall find watching. Amen I say to you, he will gird himself, and will make them recline at table, and will come and serve them. And if he comes in the second watch, and if in the third, and finds them so, blessed are those servants! But of this be assured, that if the householder had known at what hour the thief was coming, he would certainly have watched, and not have let his house be broken into. You also must be ready, because at an hour that you do not expect, the Son of Man is coming.","links":[[[0,1,2],[0,1,2]],[[3],[4]],[[4],[3]],[[5],[5,6,7]],[[7],[8,11]],[[8],[10]],[[9],[9]],[[10],[12,13]],[[11],[14]],[[12],[16]],[[13],[17]],[[17],[18]],[[18],[19,20]],[[19],[21]],[[20],[22]],[[21],[23,24]],[[22],[25,26]],[[25],[27]],[[26],[28,29]],[[27],[30]],[[28],[31,32]],[[29],[33]],[[30],[34,35]],[[31],[36]],[[32],[37]],[[33],[40,41]],[[34],[38,39,42]],[[35],[43,44]],[[36],[45,46]],[[37],[48]],[[38],[47]],[[39],[49]],[[40],[52]],[[41],[53,54]],[[42],[50,51]],[[43],[55,56]],[[44],[57]],[[45],[58]],[[46],[59,60]],[[47],[61,62]],[[49],[64,65]],[[50],[66]],[[51],[67]],[[52],[68,69]],[[53],[70]],[[54],[71,72,73]],[[55],[74]],[[56],[75,76,77]],[[57],[78]],[[58],[79]],[[59],[80]],[[60],[81]],[[61],[82,83]],[[62],[84]],[[63],[85,86]],[[64],[87]],[[65],[88]],[[66],[89]],[[67],[90]],[[68],[91,92]],[[71],[93]],[[72],[96]],[[73],[94]],[[74],[97]],[[75],[98]],[[76],[100]],[[77],[99]],[[79],[101]],[[78],[102,103]],[[80],[104,105]],[[81],[106]],[[82],[107]],[[83],[110,111]],[[84],[108,109]],[[85],[112,113]],[[86],[114]],[[87],[115,116]],[[88],[117,118]],[[89],[120,122,123]],[[90],[121]],[[91],[124]],[[92],[125]],[[93],[126,127]],[[94],[130,131,132]],[[95],[128,129]],[[98],[133,134]],[[99],[135,136]],[[100],[137]],[[101],[138]],[[102],[139,140]],[[103],[141]],[[104],[144,145]],[[105],[143,146]],[[106],[147,148]],[[107],[149,150]],[[108],[151,152]]]},{"latin":"Lectio sancti Evangelii secundum Matthǽum","english":"Continuation ✠ of the Holy Gospel according to Matthew","links":[[[0],[0,1]],[[1],[2,3]],[[2],[4]],[[3],[5,6]],[[4],[7]]]},{"latin":"Benedícta et venerábilis es, Virgo María: quæ sine tactu pudóris invénta es Mater Salvatóris.","english":"Blessed and venerable are you, O Virgin Mary, who, with unsullied virginity, were found to be the Mother of the Saviour.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3,4]],[[4],[5,6]],[[5],[7]],[[6],[8]],[[7],[9]],[[8],[10]],[[9],[11]],[[10],[12,13]],[[11],[14,15]],[[12],[16,17]],[[13],[18,19,20]]]},{"latin":"℣. Virgo, Dei Génetrix, quem totus non capit orbis, in tua se clausit víscera factus homo. Allelúia, allelúia.","english":"℣. O Virgin, Mother of God, He Whom the whole world does not contain, becoming man, shut Himself in your womb. Alleluia, alleluia.","links":[[[0],[0,1]],[[1],[3,4]],[[2],[2]],[[3],[5,6]],[[4],[7,8]],[[5],[10,11]],[[6],[12]],[[7],[9]],[[8],[17]],[[9],[18]],[[10],[16]],[[11],[15]],[[12],[19]],[[13],[13]],[[14],[14]],[[15],[20]],[[16],[21]]]},{"latin":"℣. Post partum, Virgo, invioláta permansísti: Dei Génetrix, intercéde pro nobis. Allelúia.","english":"℣. After childbirth you remained a pure virgin, O Mother of God, intercede for us. Alleluia.","links":[[[0],[0]],[[1],[1]],[[2],[4,6]],[[3],[5]],[[4],[2,3]],[[5],[9,10]],[[6],[7,8]],[[7],[11]],[[8],[12]],[[9],[13]],[[10],[14]]]},{"latin":"Constítues eos príncipes super omnem terram: mémores erunt nóminis tui, Dómine.","english":"You shall make them princes through all the land; they shall remember Your name, O Lord.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[4]],[[3],[5]],[[4],[6]],[[5],[7,8]],[[6],[11]],[[7],[9,10]],[[8],[13]],[[9],[12]],[[10],[14,15]]]},{"latin":"℣. Pro pátribus tuis nati sunt tibi fílii: proptérea pópuli confitebúntur tibi. Allelúia, allelúia","english":"℣. The place of your father your sons shall have; therefore shall nations praise You. Alleluia, alleluia.","links":[[[0],[0,1,2]],[[1],[3,4]],[[3],[7,8]],[[6],[5,6]],[[7],[9]],[[8],[11]],[[9],[10,12]],[[10],[13]],[[11],[14]],[[12],[15]]]},{"latin":"Nimis honoráti sunt amíci tui, Deus: nimis confortátus est principátus eórum. Allelúia.","english":"℣. Your friends, O God, are made exceedingly honorable; their principality is exceedingly strengthened. Alleluia.","links":[[[0],[6]],[[1],[5,7]],[[2],[4]],[[3],[1]],[[4],[0]],[[5],[2,3]],[[6],[11]],[[7],[12]],[[8],[10]],[[9],[9]],[[10],[8]],[[11],[13]]]},{"latin":"Dominábitur a mari usque ad mare, et a flúmine usque ad términos orbis terrárum.","english":"He shall rule from sea to sea, and from the River to the ends of the earth.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[4]],[[4],[5]],[[5],[6]],[[6],[7]],[[7],[8]],[[8],[9,10]],[[10],[11]],[[11],[12,13]],[[12],[14,15]],[[13],[16]]]},{"latin":"℣. Et adorábunt eum omnes reges terræ: omnes gentes sérvient ei. Allelúia, allelúia.","english":"℣. All kings shall pay Him homage, all nations shall serve Him. Alleluia, alleluia.","links":[[[1],[2,3,5]],[[2],[4]],[[3],[0]],[[4],[1]],[[6],[6]],[[7],[7]],[[8],[8,9]],[[9],[10]],[[10],[11]],[[11],[12]]]},{"latin":"Potéstas eius, potéstas ætérna, quæ non auferétur: et regnum eius, quod non corrumpétur. Allelúia.","english":"℣. His dominion is an everlasting dominion that shall not be taken away: and His kingdom shall not be destroyed. Alleluia.","links":[[[0],[1]],[[1],[0]],[[2],[2,3]],[[3],[4,5]],[[4],[6]],[[5],[7,8]],[[6],[9,10,11]],[[7],[12]],[[8],[14]],[[9],[13]],[[11],[15,16]],[[12],[17,18]],[[13],[19]]]},{"latin":"℣. Sacerdótes eius índuam salutári, et sancti eius exsultatióne exsultábunt.","english":"Her priests I will clothe with salvation, and her faithful ones shall shout merrily for joy.","links":[[[0],[1]],[[1],[0]],[[2],[2,3,4]],[[3],[5,6]],[[4],[7]],[[5],[9,10]],[[6],[8]],[[7],[13,14,15]],[[8],[11,12]]]},{"latin":"℣. Illuc prodúcam cornu David; parávi lucérnam christo meo. Allelúia, allelúia.","english":"℣. In her will I make a horn to sprout for David; I will place a lamp for My anointed. Alleluia, alleluia.","links":[[[0],[0,1]],[[1],[2,3,4,7,8]],[[2],[5,6]],[[3],[9,10]],[[4],[11,12,13]],[[5],[14,15]],[[6],[16,17,18]],[[8],[19]],[[9],[20]]]},{"latin":"℣. Iurávit Dóminus, et non pœnitébit eum: Tu es sacérdos in ætérnum secúndum órdinem Melchísedech. Allelúia.","english":"℣. The Lord has sworn, and He will not repent: “You are a priest forever, according to the order of Melchisedec.” Alleluia.","links":[[[0],[2,3]],[[1],[0,1]],[[2],[4]],[[3],[6,7]],[[4],[8]],[[5],[5]],[[6],[9]],[[7],[10]],[[8],[11,12]],[[10],[13]],[[11],[14,15]],[[12],[16,17]],[[13],[18,19]],[[14],[20]]]},{"latin":"Confiteántur Dómino misericórdiæ eius: et mirabília eius fíliis hóminum.","english":"Let them give thanks to the Lord for His kindness and His wondrous deeds to the children of men.","links":[[[0],[0,1,2,3]],[[1],[4,5,6]],[[2],[7,8,9]],[[4],[10]],[[5],[11,12,13]],[[7],[14,15,16]],[[8],[17,18]]]},{"latin":"℣. Quia satiávit ánimam inánem: et ánimam esuriéntem satiavit bonis. Allelúia, allelúia.","english":"℣. Because He satisfied the longing soul and filled the hungry soul with good things. Alleluia, alleluia.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,5]],[[3],[4]],[[4],[6]],[[5],[8,10]],[[6],[9]],[[7],[7]],[[8],[11,12,13]],[[9],[14]],[[10],[15]]]},{"latin":"Ps 31:20","english":"Prov 31:20","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Manum suam apéruit ínopi: et palmas suas exténdit ad páuperem. Allelúia.","english":"℣. He extends his arms to the needy, and reaches out his hands to the poor. Alleluia.","links":[[[0],[2,3]],[[2],[0,1]],[[3],[4,5,6]],[[4],[7]],[[5],[10,11]],[[7],[8,9]],[[8],[12]],[[9],[13,14]],[[10],[15]]]},{"latin":"Os iusti meditábitur sapiéntiam, et lingua eius loquétur iudícium.","english":"The mouth of the just tells of wisdom, and his tongue utters what is right.","links":[[[0],[0,1]],[[1],[2,3,4]],[[2],[5]],[[3],[6,7]],[[4],[8]],[[5],[10]],[[6],[9]],[[7],[11]],[[8],[12,13,14]]]},{"latin":"℣. Lex Dei eius in corde ipsíus: et non supplantabúntur gressus eius. Allelúia, allelúia.","english":"℣. The law of his God is in his heart, and his steps do not falter. Alleluia, alleluia.","links":[[[0],[0,1]],[[1],[4]],[[2],[2,3]],[[3],[5,6]],[[4],[8]],[[5],[7]],[[6],[9]],[[7],[12,13]],[[8],[14]],[[9],[11]],[[10],[10]],[[11],[15]],[[12],[16]]]},{"latin":"Beátus vir, qui timet Dóminum: in mandátis eius cupit nimis. Allelúia.","english":"Happy the man who fears the Lord, who greatly delights in His commands. Alleluia.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4]],[[4],[5,6]],[[5],[10]],[[6],[11,12]],[[8],[7,9]],[[9],[8]],[[10],[13]]]},{"latin":"Aquæ multæ non potuérunt exstínguere caritátem, nec flúmina óbruent illam.","english":"Deep waters cannot quench love, nor floods sweep it away.","links":[[[0],[1]],[[1],[0]],[[2,3],[2]],[[4],[3]],[[5],[4]],[[6],[5]],[[7],[6]],[[8],[7,9]],[[9],[8]]]},{"latin":"Defécit caro mea et cor meum: Deus cordis mei, et pars mea Deus in ætérnum. Allelúia, allelúia.","english":"℣. My flesh and my heart waste away; God is the God of my heart and my portion forever. Alleluia, alleluia.","links":[[[0],[5,6]],[[1],[1]],[[2],[0]],[[3],[2]],[[4],[4]],[[5],[3]],[[6],[7,8,9,10]],[[7],[11,13]],[[8],[12]],[[9],[14]],[[10],[16]],[[11],[15]],[[14],[17]],[[15],[18]],[[16],[19]]]},{"latin":"Ego dilécto meo, et ad me conversio eius. Allelúia.","english":"℣. I belong to my lover and for me He yearns. Alleluia.","links":[[[0],[0,1]],[[1],[2,3,4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8,9]],[[8],[10]]]},{"latin":"℣. Vitam pétiit a te, et tribuísti ei longitúdinem diérum in sǽculum sǽculi. Allelúia, allelúia.","english":"℣. He asked life of You: You gave him length of days forever and ever. Alleluia, alleluia.","links":[[[1],[0,1]],[[0],[2]],[[2],[3]],[[3],[4]],[[5],[5,6]],[[6],[7]],[[7],[8]],[[8],[9,10]],[[9,10,11],[11,12,13]],[[12],[14]],[[13],[15]]]},{"latin":"Iustus ut palma florébit: sicut cedrus Líbani multiplicábitur. Allelúia.","english":"The just man shall flourish like the palm tree, like a cedar of Lebanon shall he grow. Alleluia.","links":[[[0],[0,1,2]],[[3],[3,4]],[[1],[5]],[[2],[6,7,8]],[[4],[9]],[[5],[10,11]],[[6],[12,13]],[[7],[14,15,16]],[[8],[17]]]},{"latin":"Inflammátum est cor meum, et renes mei commutáti sunt: zelus domus tuæ comédit me.","english":"My heart was embittered and my soul was pierced; zeal for Your house consumed me.","links":[[[0],[3]],[[1],[2]],[[2],[1]],[[3],[0]],[[4],[4]],[[5],[6]],[[6],[5]],[[7],[8]],[[8],[7]],[[9],[9,10]],[[10],[12]],[[11],[11]],[[12],[13]],[[13],[14]]]},{"latin":"Pósuit os meum quasi gládium acutum: in umbra manus suæ protéxit me, et pósuit me sicut sagíttam eléctam. Allelúia, allelúia.","english":"℣. He made of me a sharp-edged sword and concealed me in the shadow of His arm. He made me a polished arrow. Alleluia, alleluia.","links":[[[0],[0,1]],[[1,2],[2,3]],[[4],[7]],[[5],[5,6]],[[6],[11]],[[7],[12,13]],[[8],[14,16]],[[9],[15]],[[10],[9]],[[11],[10]],[[13],[17,18]],[[14],[19]],[[16],[22]],[[17],[21]],[[18],[23]],[[19],[24]]]},{"latin":"Tamquam prodígium factus sum multis: et tu adiútor fortis, Allelúia.","english":"℣. A portent am I to many, but You are my strong refuge! Alleluia.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4,5]],[[5],[6]],[[6],[7]],[[7],[8,9,11]],[[8],[10]],[[9],[12]]]},{"latin":"Dirigátur orátio mea, sicut incénsum in conspéctu tuo, Dómine.","english":"Let my prayer come like incense before You, O Lord.","links":[[[0],[0,3]],[[1],[2]],[[2],[1]],[[3],[4]],[[4],[5]],[[5,6],[6]],[[7],[7]],[[8],[8,9]]]},{"latin":"℣. Elevatio mánuum meárum sacrifícium vespertínum. Allelúia, allelúia","english":"℣. The lifting up of my hands, like the evening sacrifice. Alleluia, alleluia.","links":[[[0],[0,1,2]],[[1],[3,5]],[[2],[4]],[[3],[7,9]],[[4],[8]],[[5],[10]],[[6],[11]]]},{"latin":"Confitémini Dómino, et invocáte nomen eius: annuntiáte inter gentes ópera eius. Allelúia.","english":"℣. Give thanks to the Lord, invoke His name; make known among the nations His deeds. Alleluia.","links":[[[0],[0,1]],[[1],[2,3,4]],[[3],[5]],[[4],[7]],[[5],[6]],[[6],[8,9]],[[7],[10]],[[8],[11,12]],[[9],[14]],[[10],[13]],[[11],[15]]]},{"latin":"Diffúsa est grátia in labiis tuis: proptérea benedíxit te Deus in ætérnum.","english":"Grace is poured out upon your lips; thus God has blessed you forever.","links":[[[0],[2,3]],[[1],[1]],[[2],[0]],[[3],[4]],[[4],[6]],[[5],[5]],[[6],[7]],[[7],[9,10]],[[8],[11]],[[9],[8]],[[11],[12]]]},{"latin":"℣. Propter veritátem et mansuetúdinem et iustítiam: et dedúcet te mirabíliter déxtera tua. Allelúia, allelúia.","english":"℣. In the cause of truth and mercy and for the sake of justice: may your right hand show you wondrous deeds. Alleluia, alleluia.","links":[[[0],[0,1,2,3]],[[1],[4]],[[2],[5]],[[3],[6]],[[4],[7,8,9,10,11]],[[5],[12]],[[7],[13,17]],[[8],[18]],[[9],[19,20]],[[10],[14,15,16]],[[12],[21]],[[13],[22]]]},{"latin":"Spécie tua et pulchritúdine tua inténde, próspere procéde et regna. Allelúia.","english":"℣. In your splendor and your beauty ride on triumphant, and reign. Alleluia.","links":[[[0],[0,2]],[[1],[1]],[[2],[3]],[[3],[5]],[[4],[4]],[[5,7],[6,7]],[[6],[8]],[[8],[9]],[[9],[10]],[[10],[11]]]},{"latin":"Iustus ut palma florébit: sicut cedrus Líbani multiplicábitur in domo Dómini.","english":"The just man shall flourish like the palm tree, like a cedar of Lebanon shall he grow in the house of the Lord.","links":[[[0],[0,1,2]],[[3],[3,4]],[[1],[5]],[[2],[6,7,8]],[[4],[9]],[[5],[10,11]],[[6],[12,13]],[[7],[14,15,16]],[[8],[17]],[[9],[18,19]],[[10],[20,21,22]]]},{"latin":"Ad annuntiándum mane misericórdiam tuam, et veritátem tuam per noctem. Allelúia, allelúia","english":"℣. To proclaim Your kindness at dawn and Your faithfulness throughout the night. Alleluia, alleluia.","links":[[[0],[0]],[[1],[1]],[[2],[4,5]],[[3],[3]],[[4],[2]],[[5],[6]],[[6],[8]],[[7],[7]],[[8],[9]],[[9],[10,11]],[[10],[12]],[[11],[13]]]},{"latin":"Ia 1:12","english":"Jas 1:12","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Beátus vir, qui suffert tentatiónem: quóniam, cum probátus fúerit, accípiet corónam vitæ. Allelúia.","english":"℣. Blessed is the man who endures temptation; for when he has been tried, he will receive the crown of life. Alleluia.","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8,9]],[[7,8],[10,11,12]],[[9],[13,14,15]],[[10],[16,17]],[[11],[18,19]],[[12],[20]]]},{"latin":"Dómine, refúgium factus es nobis, a generatióne et progénie.","english":"O Lord, You have been our refuge through all generations.","links":[[[0],[0,1]],[[1],[6]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[7]],[[6],[8,9]]]},{"latin":"℣. Priúsquam montes fíerent aut formarétur terra et orbis: a sǽculo et usque in sǽculum tu es, Deus.","english":"℣. Before the mountains were begotten and the earth and the world were brought forth, from everlasting to everlasting You are God.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4]],[[3],[5]],[[5],[6,7]],[[6],[8]],[[7],[9,10]],[[4],[11,12,13]],[[8],[14]],[[9],[15]],[[10,11],[16]],[[13],[17]],[[14],[18]],[[15],[19]],[[16],[20]]]},{"latin":"In éxitu Israël de Ægýpto, domus Iacob de pópulo bárbaro. Allelúia.","english":"When Israel went out of Egypt, the house of Jacob from a barbarous people. Alleluia.","links":[[[0],[0]],[[1],[2,3]],[[2],[1]],[[3],[4]],[[4],[5]],[[5],[6,7]],[[6],[8,9]],[[7],[10]],[[8],[11,13]],[[9],[12]],[[10],[14]]]},{"latin":"Ecce, quam bonum et quam iucúndum, habitáre fratres in unum!","english":"Behold how good it is, and how pleasant where brethren dwell as one!","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[10]],[[7],[9]],[[8],[11]],[[9],[12]]]},{"latin":"℣. Sicut unguéntum in cápite, quod descéndit in barbam, barbam Aaron.","english":"℣. It is as when the precious ointment upon the head runs down over the beard, the beard of Aaron.","links":[[[0],[0,1,2,3]],[[1],[4,6]],[[2],[7]],[[3],[8,9]],[[4,5],[10,11]],[[6],[12]],[[7],[13,14]],[[8],[15,16]],[[9],[17,18]]]},{"latin":"Qui timent Dóminum sperent in eo: adiútor et protéctor eórum est. Allelúia.","english":"Those who fear the Lord trust in the Lord: He is their help and their shield. Alleluia.","links":[[[0],[0,1]],[[1],[2]],[[2],[3,4]],[[3],[5]],[[4],[6]],[[5],[7,8]],[[6],[9,10,11,12]],[[7],[13]],[[8],[15]],[[9],[14]],[[11],[16]]]},{"latin":"Si vero Sacerdos sine Diacono et Subdiacono celebrat, delato libro ad aliud cornu Altaris, inclinatus in medio, iunctis manibus dicit:","english":"The Missal is transferred to the other side of the altar. At Low Masses, the priest, bowing down at the middle of the altar, with his hands joined, says:","links":[[[0,1,3,4,5,6,7],[11,12,13]],[[2],[14,15]],[[8],[2,3]],[[9],[0,1]],[[10],[4,5]],[[11],[6]],[[12],[7]],[[13],[8,9,10]],[[14],[16,17]],[[15],[18]],[[16],[19,20]],[[17],[27]],[[18],[24,25,26]],[[19],[28]]]},{"latin":"Ps 144:15-16\nOculi ómnium in te sperant, Dómine: et tu das illis escam in témpore opportúno. ℣. Aperis tu manum tuam: et imples omne ánimal benedictióne. Allelúia, allelúia\nPs 107:2\nParátum cor meum, Deus, parátum cor meum: cantábo, et psallam tibi, glória mea. Allelúia.","english":"Ps 144:15-16\nThe eyes of all look hopefully to You, O Lord, and You give them their food in due season.\n℣. You open Your hand and satisfy the desire of every living thing. Alleluia, alleluia.\nPs 107:2\n℣. My heart is steadfast, O God; my heart is steadfast; I will sing and chant praise to You, my glory. Alleluia.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4,5]],[[5],[6,7]],[[6,7],[10,11]],[[8],[8,9]],[[9],[12,13]],[[10],[14]],[[11],[15]],[[12],[16]],[[13],[17]],[[14],[18,19]],[[15],[20]],[[16],[22]],[[17],[21]],[[18],[24]],[[19],[23]],[[20],[26]],[[21],[25]],[[22],[27]],[[23,26],[28,29,30,31]],[[24],[32]],[[25],[33,34]],[[27],[35]],[[28],[36]],[[29],[37]],[[30],[38]],[[31],[39]],[[32],[42,43]],[[33],[41]],[[34],[40]],[[35],[44,45]],[[36],[48,49]],[[37],[47]],[[38],[46]],[[39],[50,51,52]],[[40],[53]],[[41],[54,55]],[[42],[56,57]],[[43],[59]],[[44],[58]],[[45],[60]]]},{"latin":"Tob 8:3\nAngelus Dómini Raphaël apprehéndit et ligávit dæmonem.\nPs 146:5.\n℣. Magnus Dóminus noster, et magna virtus eius.\nAllelúia, allelúia.\nPs 137:1-2.\n℣. In conspéctu Angelórum psallam tibi: adorábo ad templum sanctum tuum, et confitébor nómini tuo, Dómine. Allelúia.","english":"Tob 8:3\nThe Angel of the Lord, Raphael, took and bound the devil.\nPs 146:5\n℣. Great is our Lord and mighty in power. Alleluia, alleluia.\nPs 137:1-2\n℣. In the presence of the Angels I will sing Your praise; I will worship at Your holy temple and give thanks to Your name, O Lord. Alleluia.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3,4]],[[4],[5,6,7]],[[5],[8]],[[6],[9]],[[7],[10]],[[8],[11]],[[9],[12,13]],[[10],[14]],[[11],[15]],[[12],[16]],[[13],[17,18]],[[14],[20]],[[15],[19]],[[16],[21]],[[17],[22,23]],[[18,19],[24]],[[20],[25]],[[21],[26]],[[22],[27]],[[23],[28]],[[24],[29]],[[25],[30]],[[26],[31]],[[27],[32,33]],[[28],[34,35,36]],[[29],[37,38,39]],[[30],[40,41]],[[31],[42,43,44]],[[32],[45]],[[33],[48]],[[34],[47]],[[35],[46]],[[36],[49]],[[37],[50,51]],[[38],[52,54]],[[39],[53]],[[40],[55,56]],[[41],[57]]]},{"latin":"Ps 44:5\nSpécie tua et pulchritúdine tua inténde, próspere procéde et regna.","english":"Ps 44:5\nWith thy comeliness and thy beauty set out, proceed prosperously, and reign.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3,5]],[[4],[4]],[[5],[6]],[[6],[8]],[[7],[7]],[[8],[9,10]],[[9],[12]],[[10],[11]],[[11],[13]],[[12],[14]]]},{"latin":"Propter veritátem et mansuetúdinem et iustítiam:","english":"Because of truth and meekness and justice:","links":[[[0],[0,1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]]]},{"latin":"et dedúcet te mirabíliter déxtera tua.","english":"and thy right hand shall conduct thee wonderfully.","links":[[[0],[0]],[[1],[4,5]],[[2],[6]],[[3],[7]],[[4],[2,3]],[[5],[1]]]},{"latin":"Allelúia,","english":"Alleluja,","links":[[[0],[0]]]},{"latin":"allelúia.","english":"alleluja.","links":[[[0],[0]]]},{"latin":"Ps 44:15-16\nAdducéntur Regi Vírgines post eam:","english":"Ps 44:15-16\nAfter her shall virgins be brought to the king:","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[6,8,9]],[[5],[10,11,12]],[[6],[7]],[[7],[4]],[[8],[5]]]},{"latin":"próximæ eius afferéntur tibi in lætítia.","english":"They shall be brought with gladness and rejoicing.","links":[[[0,1],[0]],[[2],[1,2,3]],[[3,4,5],[4,5,6,7]]]},{"latin":"Allelúia.","english":"Alleluja.","links":[[[0],[0]]]},{"latin":"Ps 106:32; 106:31.\nExáltent eum in ecclésia plebis: et in cáthedra seniórum laudent eum.\n℣. Confiteántur Dómino misericórdiæ eius, et mirabília eius fíliis hóminum.\nAllelúia, allelúia.\nMatt 16:18\nTu es Petrus, et super hanc petram ædificábo Ecclésiam meam. Allelúia.","english":"Ps 106:32; 106:31\nAnd let them exalt him in the church of the people: and praise him in the chair of the ancients.\n℣. Let the mercies of the Lord give glory to him, and his wonderful works to the children of men. Allelúja, allelúja.\nMatt 16:18\nAnd I say to thee: That thou art Peter; and upon this rock I will build My Church. Allelúja.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5,6,7,8]],[[6],[9]],[[7],[10,11]],[[8],[12]],[[9],[13,14,15]],[[10],[16]],[[11],[19,20]],[[12],[21]],[[13],[22,23,24]],[[14],[17]],[[15],[18]],[[16,17,18,19],[25,26,27,28,29,30,31,32,33,34]],[[20],[35]],[[21,22],[36,37,38]],[[23,24],[39,40,41,42,43]],[[25],[44]],[[26],[45]],[[27],[46]],[[28],[47]],[[29],[48]],[[30],[55]],[[31],[56]],[[32],[57]],[[33],[58]],[[34],[59]],[[35],[60]],[[36],[61]],[[37],[62,63,64]],[[38],[66]],[[39],[65]],[[40],[67]]]},{"latin":"Ps 44:5; 44:11; 44:12\nPropter veritátem et mansuetúdinem et iustítiam, et dedúcet te mirabíliter déxtera tua.\n℣. Audi, fília, et vide, et inclína aurem tuam: quia concupívit Rex spéciem tuam.\nAllelúia, allelúia.\n℣. Sollémnitas gloriósæ Vírginis Maríæ ex sémine Abrahæ, ortæ de tribu Iuda, clara ex stirpe David. Allelúia.","english":"Ps 44:5, 11-12.\nIn the cause of truth and mercy and for the sake of justice: may your right hand show you wondrous deeds.\n℣. Hear, O daughter, and see; turn your ear; for the King shall desire your beauty. Alleluia, alleluia.\n℣. The solemnity of the glorious Virgin Mary, of the seed of Abraham, sprung from the tribe of Juda, of the noble line of David. Alleluia.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3,4],[3]],[[5,6],[4]],[[7,8,9,10,11,12],[5,6,7,8,9,10,11,12,13,14,15,16,17]],[[13,14,15,16,17,18],[18,19,20,21,22,23,24,25]],[[19],[26]],[[20],[27,28]],[[21],[29]],[[22],[30]],[[23,24],[31]],[[25],[33]],[[26],[32]],[[27],[34]],[[28],[37,38]],[[29],[35,36]],[[30],[40]],[[31],[39]],[[32],[41]],[[33],[42]],[[34],[43,44]],[[35],[45,46,47]],[[36],[48]],[[37],[49]],[[38,39],[50,51,52]],[[40],[53,54]],[[41],[55]],[[42],[56]],[[43],[57,58]],[[44],[59,60]],[[45,46,47],[61,62,63,64,65]],[[48],[66]],[[49],[67]]]},{"latin":"Matt 11:25\nConfíteor tibi, Pater, Dómine cœli et terræ, quia abscondísti hæc a sapiéntibus, et prudéntibus, et revelásti ea párvulis.","english":"Matt 11:25\nI praise You, Father, Lord of heaven and earth, that You did hide these things from the wise and prudent, and did reveal them to little ones.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3,4]],[[4],[5]],[[5],[6]],[[6],[7]],[[7],[8,9]],[[8],[10]],[[9],[11]],[[10],[12]],[[11],[13,14,15]],[[12],[16,17]],[[13],[18]],[[14],[19,20]],[[15],[21]],[[16],[22]],[[17],[23]],[[18],[24,25]],[[19],[26]],[[20],[27,28,29]]]},{"latin":"Ps 70:5\nDómine, spes mea a iuventúte mea.","english":"Ps 70:5\n℣. My trust, O Lord, from my youth.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[5,6]],[[4],[4]],[[5],[3]],[[6],[7]],[[7],[9]],[[8],[8]]]},{"latin":"Allelúia,","english":"Alleluia,","links":[[[0],[0]]]},{"latin":"allelúia.","english":"alleluia.","links":[[[0],[0]]]},{"latin":"Ps 39:17-19\nQuasi rosa plantáta super rivos aquárum fructificate:","english":"Sir 39:17-19\n℣. Open up your petals, like roses planted near running waters;","links":[[[1],[1]],[[2],[2]],[[3],[3]],[[4,5,6,7,8,9,10],[4,5,6,7,8,9,10,11,12,13]]]},{"latin":"quasi Libanus odórem suavitátis habete:","english":"send up a sweet odor like Lebanon.","links":[[[0,1,2,3,4],[0,1,2,3,4,5,6]]]},{"latin":"florete, flores, quasi lílium, et date odórem, et frondete in grátiam, et collaudate cánticum, et benedicite Dóminum in opéribus suis.","english":"Break forth in blossoms like the lily, and yield a smell, and bring forth leaves in grace, and praise with canticles, and bless the Lord in His works.","links":[[[0,1,2,3],[0,1,2,3,4,5,6]],[[4,5,6],[7,8,9,10]],[[7,8,9,10],[11,12,13,14,15,16]],[[11,12,13],[17,18,19,20]],[[14,15,16,17,18,19],[21,22,23,24,25,26,27]]]},{"latin":"Allelúia.","english":"Alleluia.","links":[[[0],[0]]]},{"latin":"Ps 90:11-12\nAngelis suis Deus mandávit de te, ut custódiant te in ómnibus viis tuis.\n℣. In mánibus portábunt te, ne umquam offéndas ad lápidem pedem tuum.\nAllelúia, allelúia.\nPs 102:21.\nBenedícite Dómino, omnes virtútes eius: minístri eius, qui fácitis voluntátem eius. Allelúia.","english":"Ps 90:11-12\nTo His Angels God has given command about you, that they guard you in all your ways.\n℣. Upon their hands they shall bear you up, lest you dash your foot against a stone. Alleluia, alleluia.\nPs 102:21\nBless the Lord all you His hosts, His ministers, who do His will. Alleluia.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4,6]],[[5],[5]],[[6],[7]],[[7],[8,9,10]],[[8],[11]],[[9],[12]],[[10],[13]],[[11],[14,15]],[[12],[16]],[[13],[17]],[[14],[18]],[[15],[20]],[[16],[19]],[[17],[21]],[[18],[22,23]],[[19],[24,25,26,28]],[[20],[27]],[[21,22],[29]],[[23],[30,31]],[[24],[34]],[[25],[35,36]],[[26],[33]],[[27],[32]],[[28],[37]],[[29],[38]],[[30],[39]],[[31],[40]],[[32],[41]],[[33],[42]],[[34],[43,44]],[[35],[45,46]],[[36],[48]],[[37],[47]],[[38],[50]],[[39],[49]],[[40],[51]],[[41],[52]],[[42],[54]],[[43],[53]],[[44],[55]]]},{"latin":"℣. Fiat pax in virtúte tua: et abundántia in túrribus tuis. Allelúia, allelúia","english":"℣. May peace be within your walls, prosperity in your buildings. Alleluia, alleluia.","links":[[[0],[0,2]],[[1],[1]],[[2,3,4],[3,4,5]],[[5,6],[6]],[[7,8,9],[7,8,9]],[[10],[10]],[[11],[11]]]},{"latin":"Timébunt gentes nomen tuum, Dómine, et omnes reges terræ glóriam tuam. Allelúia.","english":"℣. The nations shall revere Your name, O Lord, and all the kings of the earth Your glory. Alleluia.","links":[[[0],[2,3]],[[1],[0,1]],[[2],[5]],[[3],[4]],[[4],[6,7]],[[5],[8]],[[6],[9]],[[7],[10,11]],[[8],[12,13,14]],[[9],[16]],[[10],[15]],[[11],[17]]]},{"latin":"Posuísti, Dómine, in cápite eius corónam de lápide pretióso.","english":"You placed on his head, O Lord, a crown of pure gold.","links":[[[0],[0,1]],[[1],[5,6]],[[2],[2]],[[3],[4]],[[4],[3]],[[5],[7,8]],[[6],[9]],[[7],[11]],[[8],[10]]]},{"latin":"In nómine Patris, et Fílii, et Spíritus Sancti. Amen.","english":"In the Name of the Father, and of the Son, and of the Holy Ghost. Amen.","links":[[0,[0]],[1,[1,2]],[2,[3,4,5]],[3,[6]],[4,[7,8,9]],[5,[10]],[6,[11,12,14]],[7,[13]],[8,[15]]]},{"latin":"Introíbo ad altáre Dei.","english":"I will go in to the altar of God.","links":[[0,[0,1,2,3]],[1,[4]],[2,[5,6]],[3,[7,8]]]},{"latin":"Ad Deum, qui lætíficat iuventútem meam.","english":"To God who giveth joy to my youth.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4,5]],[4,[7]],[5,[6]]]},{"latin":"Iúdica me, Deus, et discérne causam meam de gente non sancta: ab hómine iníquo et dolóso érue me.","english":"Judge me, O God, and distinguish my cause from the nation which is not holy: deliver me from the unjust and deceitful man.","links":[[0,[0]],[1,[1]],[2,[2,3]],[3,[4]],[4,[5]],[5,[7]],[6,[6]],[7,[8]],[8,[9,10]],[9,[11,12,13]],[10,[14]],[11,[17]],[12,[18,22]],[13,[19]],[14,[20]],[15,[21]],[16,[15]],[17,[16]]]},{"latin":"Quia tu es, Deus, fortitúdo mea: quare me repulísti, et quare tristis incédo, dum afflígit me inimícus?","english":"For Thou, O God, art my strength: why hast Thou cast me off? and why go I sorrowful whilst the enemy afflicteth me?","links":[[0,[0]],[1,[1]],[2,[4]],[3,[2,3]],[4,[6]],[5,[5]],[6,[7]],[7,[11]],[8,[8,9,10,12]],[9,[13]],[10,[14]],[11,[17]],[12,[15,16]],[13,[18]],[14,[21]],[15,[22]],[16,[19,20]]]},{"latin":"Emítte lucem tuam et veritátem tuam: ipsa me deduxérunt, et adduxérunt in montem sanctum tuum et in tabernácula tua.","english":"Send forth Thy light and Thy truth: they have conducted me and brought me unto Thy holy mount, and into Thy tabernacles.","links":[[0,[0,1]],[1,[3]],[2,[2]],[3,[4]],[4,[6]],[5,[5]],[6,[7]],[7,[10],[13]],[8,[8,9]],[9,[11]],[10,[12]],[11,[14]],[12,[17]],[13,[16]],[14,[15]],[15,[18]],[16,[19]],[17,[21]],[18,[20]]]},{"latin":"Et introíbo ad altáre Dei: ad Deum, qui lætíficat iuventútem meam.","english":"And I will go in to the altar of God: to God who giveth joy to my youth.","links":[[0,[0]],[1,[1,2,3,4]],[2,[5]],[3,[6,7]],[4,[8,9]],[5,[10]],[6,[11]],[7,[12]],[8,[13,14,15]],[9,[17]],[10,[16]]]},{"latin":"Confitébor tibi in cíthara, Deus, Deus meus: quare tristis es, ánima mea, et quare contúrbas me?","english":"To Thee, O God, my God, I will give praise upon the harp; why art thou sad, O my soul, and why dost thou disquiet me?","links":[[0,[6,7,8,9]],[1,[0,1]],[2,[10]],[3,[11,12]],[4,[2,3]],[5,[5]],[6,[4]],[7,[13]],[8,[16]],[9,[14,15]],[10,[19]],[11,[17,18]],[12,[20]],[13,[21]],[14,[22,23,24]],[15,[25]]]},{"latin":"Spera in Deo, quóniam adhuc confitébor illi: salutáre vultus mei, et Deus meus.","english":"Hope in God, for I will still give praise to Him: the salvation of my countenance and my God.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[6]],[5,[4,5,7,8]],[6,[9,10]],[7,[11,12]],[8,[15]],[9,[13,14]],[10,[16]],[11,[18]],[12,[17]]]},{"latin":"Glória Patri, et Fílio, et Spirítui Sancto.","english":"Glory be to the Father, and to the Son, and to the Holy Ghost.","links":[[0,[0,1]],[1,[2,3,4]],[2,[5]],[3,[6,7,8]],[4,[9]],[5,[10,11,13]],[6,[12]]]},{"latin":"Sicut erat in princípio, et nunc, et semper: et in sǽcula sæculórum. Amen.","english":"As it was in the beginning, is now, and ever shall be, world without end. Amen.","links":[[0,[0]],[1,[1,2]],[2,[3]],[3,[4,5]],[4,[6]],[5,[7]],[6,[8]],[7,[9,10,11]],[[8,9,10],[12]],[11,[13,14]],[12,[15]]]},{"latin":"Ps 85:3; 85:5","english":"Ps 85:3; 85:5","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]]]},{"latin":"Ps 85:1","english":"Ps 85:1","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Dóminus vobíscum.","english":"The Lord be with you.","links":[[0,[0,1]],[1,[2,3,4]]]},{"latin":"Et cum spíritu tuo.","english":"And with thy spirit.","links":[[0,[0]],[1,[1]],[2,[3]],[3,[2]]]},{"latin":"Orémus.","english":"Let us pray.","links":[[0,[0,1,2]]]},{"latin":"Amen.","english":"Amen.","links":[[0,[0]]]},{"latin":"Léctio Epístolæ beáti Pauli Apóstoli ad Ephésios.","english":"Lesson from the letter of St. Paul the Apostle to the Ephesians.","links":[[0,[0]],[1,[1,2,3,4]],[2,[5]],[3,[6]],[4,[7,8]],[5,[9]],[6,[10,11]]]},{"latin":"Ephes 3:13-21.","english":"Eph 3:13-21.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Deo grátias.","english":"Thanks be to God.","links":[[1,[0,1]],[0,[2,3]]]},{"latin":"Ps 101:16-17.","english":"Ps 101:16-17.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Ps 97:1.","english":"Ps 97:1.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Minister seu circumstantes respondent; alioquin ipsemet Sacerdos.","english":"The server answers.","links":[[0,[0,1]],[[1,2],[]],[3,[2]],[[4,5,6],[]]]},{"latin":"Sacerdos submissa voce dicit:","english":"The priest answers in a low voice:","links":[[0,[0,1]],[[1,2],[3,4,5,6]],[3,[2]]]},{"latin":"Secreta","english":"Secret","links":[[0,[0]]]},{"latin":"Ps 70:16-17; 70:18.","english":"Ps 70:16, 18.","links":[[0,[0]],[1,[1]],[[2,3],[2]],[[4,5],[3]]]},{"latin":"Gal 6:14.","english":"Gal 6:14.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Ps 66:2.","english":"Ps 66:2.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Léctio Epístolæ beáti Pauli Apóstoli ad Philippénses.","english":"Lesson from the letter of St. Paul the Apostle to the Philippians.","links":[[0,[0]],[1,[1,2,3,4]],[2,[5]],[3,[6]],[4,[7,8]],[5,[9]],[6,[10,11]]]},{"latin":"Philipp 2:5-11.","english":"Phil 2:5-11.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Phil 2:8-9.","english":"Phil 2:8-9.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Ioann 19:25.","english":"Jn 19:25.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Ioann 19:26-27.","english":"Jn 19:26-27.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Commemoratio S. Nicomedis Martyris.","english":"Commemoration St. Nicomedes, Martyr.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Léctio libri Iudith.","english":"Lesson from the book of Judith.","links":[[0,[0]],[1,[1,2,3,4]],[2,[5]]]},{"latin":"Iudith 13:22, 13:23-25.","english":"Judith 13:22, 13:25.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[[4,5],[4]]]},{"latin":"Allelúia, allelúia.","english":"Alleluia, alleluia.","links":[[0,[0]],[1,[1]]]},{"latin":"Sequentia","english":"Sequentia","links":[[0,[0]]]},{"latin":"Ps 78:11-12, 78:10.","english":"Ps 78:11, 78:12, 78:10.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4]],[4,[5]],[5,[6]]]},{"latin":"Ps 78:1.","english":"Ps 78:1.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Commemoratio Ss. Euphemiæ, Luciæ et Geminiani Martyrum.","english":"Commemoration Ss. Euphemia, Lucy and Geminian, Martyrs.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]],[5,[5]],[6,[6]]]},{"latin":"Léctio libri Sapiéntiæ.","english":"Lesson from the book of Wisdom.","links":[[0,[0]],[1,[1,2,3,4]],[2,[5]]]},{"latin":"Sap 3:1-8.","english":"Wis 3:1-8.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Exod 15:11.","english":"Exo 15:11.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Exod 15:6.","english":"Exo 15:6.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Eccl 44:14.","english":"Sir 44:14.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Sap 3:4-6.","english":"Wis 3:4-6.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Commemoratio Impressionis Stigmatum S. Francisci.","english":"Commemoration Impression of the Stigmata of St. Francis.","links":[[0,[0]],[1,[1,2,3]],[2,[4,5]],[3,[6]],[4,[7]]]},{"latin":"Eccli 1:14-15.","english":"Ecclus 1:14-15.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Ps 83:2.","english":"Ps 83:2.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Léctio Epístolæ beáti Pauli Apóstoli ad Corínthios.","english":"Lesson from the first letter of St. Paul the Apostle to the Corinthians.","links":[[0,[0]],[1,[1,2,3,4,5]],[2,[6]],[3,[7]],[4,[8,9]],[5,[10]],[6,[11,12]]]},{"latin":"1 Cor 13:1-8.","english":"1 Cor 13:1-8.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]]]},{"latin":"Ps 20:4-5.","english":"Ps 20:4-5.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Eccle 11:13.","english":"Ecclus 11:13.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Ps 68:30-31.","english":"Ps 68:30-31.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Ps 36:39.","english":"Ps 36:39.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Ps 36:1.","english":"Ps 36:1.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Léctio Epístolæ beáti Pauli Apóstoli ad Hebrǽos.","english":"Lesson from the letter of St. Paul the Apostle to the Hebrews.","links":[[0,[0]],[1,[1,2,3,4]],[2,[5]],[3,[6]],[4,[7,8]],[5,[9]],[6,[10,11]]]},{"latin":"Hebr 10:32-38.","english":"Heb 10:32-38.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Ps 33:18-19.","english":"Ps 39:18-19.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Te Mártyrum candidátus laudat exércitus, Dómine, Allelúia.","english":"The white-robed army of Martyrs praises You, O Lord. Alleluia.","links":[[2,[0,1,2]],[4,[3]],[1,[4,5]],[3,[6]],[0,[7]],[5,[8,9]],[6,[10]]]},{"latin":"Matt 10:27.","english":"Matt 10:27.","links":[[0,[0]],[1,[1]],[2,[2]]]},{"latin":"Noli æmulári in malignántibus, neque zeláveris faciéntes iniquitátem.","english":"Be not vexed over evildoers, nor jealous of those who do wrong.","links":[[0,[0,1]],[1,[2]],[2,[3]],[3,[4]],[4,[5]],[5,[6]],[6,[7,8,9,10]],[7,[11]]]},{"latin":"Cantáte Dómino cánticum novum, quia mirabília fecit Dóminus. Allelúia.","english":"Sing to the Lord a new song, for the Lord has done wondrous deeds. Alleluia.","links":[[0,[0]],[1,[1,2,3]],[3,[4,5]],[2,[6]],[4,[7]],[5,[12,13]],[6,[10,11]],[7,[8,9]],[8,[14]]]},{"latin":"Deinde manibus extensis, absolute (sine Orémus), subiungit Orationes secretas.","english":"Then with outstretched hands, he recites the Secret Prayers, not beginning with Oremus. The Secret Prayers vary with the Mass, and are found in the Mass of the Day. These being finished, the priest says or sings: P. World without end. S. Amen.","links":[[0,[0]],[[1,2],[1,2,3]],[6,[4,5]],[[3,4],[9,10,11]],[5,[12]],[8,[6,7]],[7,[8]]]},{"latin":"Deinde osculatur Altare in medio, et versus ad populum dicit:","english":"Then the priest kisses the altar, and turning to the people says:","links":[[0,[0]],[1,[3]],[2,[4,5]],[[3,4],[]],[5,[6]],[6,[7]],[7,[8]],[8,[9,10]],[9,[11]]]},{"latin":"Per signum Crucis, de inimícis nostris, líbera nos, Deus noster.","english":"Through the sign of the Cross, deliver us from our enemies, O our God.","links":[[0,[0]],[1,[1,2]],[2,[3,4,5]],[3,[8]],[4,[10]],[5,[9]],[6,[6]],[7,[7]],[8,[11,13]],[9,[12]]]},{"latin":"Gloriósus Deus in Sanctis suis, mirábilis in maiestáte, fáciens prodígia.","english":"God is glorious in His Saints, wonderful in majesty, a worker of wonders.","links":[[0,[1,2]],[1,[0]],[2,[3]],[3,[5]],[4,[4]],[5,[6]],[6,[7]],[7,[8]],[8,[9,10,11]],[9,[12]]]},{"latin":"Timébunt gentes nomen tuum, Dómine, et omnes reges terræ glóriam tuam.","english":"The nations shall revere Your name, O Lord, and all the kings of the earth Your glory.","links":[[0,[2,3]],[1,[0,1]],[2,[5]],[3,[4]],[4,[6,7]],[5,[8]],[6,[9]],[7,[10,11]],[8,[12,13,14]],[9,[16]],[10,[15]]]},{"latin":"Quóniam ædificávit Dóminus Sion, et vidébitur in maiestáte sua. Allelúia, allelúia.","english":"For the Lord has rebuilt Sion, and He shall appear in His glory. Alleluia, alleluia.","links":[[0,[0]],[1,[3,4]],[2,[1,2]],[3,[5]],[4,[6]],[5,[7,8,9]],[6,[10]],[7,[12]],[8,[11]],[9,[13]],[10,[14]]]},{"latin":"Christus factus est pro nobis obœ́diens usque ad mortem, mortem autem crucis.","english":"Christ became obedient for us to death, even to death on a cross.","links":[[0,[0]],[[1,2],[1]],[5,[2]],[3,[3]],[4,[4]],[[6,7],[5]],[8,[6]],[10,[7,8]],[9,[9]],[11,[10,11,12]]]},{"latin":"Múlier, ecce fílius tuus, dixit Iesus; ad discípulum autem: Ecce Mater tua.","english":"Woman, behold your son, said Jesus; and to the disciple: Behold your mother.","links":[[0,[0]],[1,[1]],[2,[3]],[3,[2]],[4,[4]],[5,[5]],[6,[7]],[7,[8,9]],[8,[6]],[9,[10]],[10,[12]],[11,[11]]]},{"latin":"Salus autem iustórum a Dómino, et protéctor eórum est in témpore tribulatiónis.","english":"The salvation of the just is from the Lord; He is their refuge in time of distress.","links":[[[0,1],[0,1]],[2,[2,3,4]],[[3,4],[5,6,7,8]],[5,[9]],[7,[11]],[6,[12]],[8,[10]],[9,[13]],[10,[14]],[11,[15,16]]]},{"latin":"Oráte fratres, ut meum ac vestrum sacrifícium acceptábile fiat apud Deum Patrem omnipoténtem.","english":"Brethren, pray that my Sacrifice and yours may be acceptable to God the Father almighty.","links":[[0,[1]],[1,[0]],[2,[2]],[3,[3]],[4,[5]],[5,[6]],[6,[4]],[7,[9]],[8,[7,8]],[9,[10]],[10,[11]],[11,[12,13]],[12,[14]]]},{"latin":"Súscipe, Dómine, múnera propítius obláta: quæ maiestáti tuæ beáti Nicomédis Mártyris comméndet orátio.","english":"Graciously accept, O Lord, the gifts we offer You; and may the prayer of the blessed Martyr Nicomedes make them pleasing to Your Majesty.","links":[[3,[0]],[0,[1]],[1,[2,3]],[[2,4],[4,5,6,7,8]],[5,[9]],[12,[10,11,12,13]],[8,[14,15]],[10,[16]],[9,[17]],[11,[18,19,20]],[6,[21,23]],[7,[22]]]},{"latin":"Clamavérunt iusti, et Dóminus exaudívit eos, et ex ómnibus tribulatiónibus eórum liberávit eos.","english":"When the just cry out, the Lord hears them, and from all their distress He rescues them.","links":[[[0,2],[0,3,4]],[1,[1,2]],[3,[5,6]],[4,[7]],[5,[8]],[6,[9]],[7,[10]],[8,[11]],[9,[13]],[10,[12]],[11,[14,15]],[12,[16]]]},{"latin":"Inclína, Dómine, aurem tuam mihi, et exáudi me: quóniam inops, et pauper sum ego.","english":"Incline Your ear, O Lord; answer me, for I am afflicted and poor.","links":[[0,[0]],[1,[3,4]],[2,[2]],[3,[1]],[[4],[]],[[5],[]],[6,[5]],[7,[6]],[8,[7]],[9,[10]],[10,[11]],[11,[12]],[12,[8,9]],[[13],[]]]},{"latin":"Deus misereátur nostri, et benedícat nobis: illúminet vultum suum super nos, et misereátur nostri.","english":"May God have pity on us and bless us; may He let His face shine upon us, and may He have pity on us.","links":[[0,[0,1]],[1,[2,3]],[2,[4,5]],[3,[6]],[4,[7]],[5,[8]],[6,[9,10,11,14]],[7,[13]],[8,[12]],[9,[15]],[10,[16]],[11,[17]],[12,[18,19,20,21]],[13,[22,23]]]},{"latin":"Dolorósa et lacrimábilis es, Virgo María, stans iuxta Crucem Dómini Iesu, Fílii tui, Redemptóris.","english":"Sorrowful and tearful are you, O Virgin Mary, standing by the Cross of the Lord Jesus, your Son and Redeemer.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4]],[4,[5,6]],[5,[7]],[6,[8]],[7,[9]],[8,[10,11]],[9,[12,13,14]],[10,[15]],[11,[17]],[12,[16]],[13,[18,19]]]},{"latin":"Felíces sensus beátæ Maríæ Vírginis, qui sine morte meruérunt martýrii palmam sub Cruce Dómini.","english":"Happy the Heart of the Blessed Virgin Mary, which without dying earned the palm of martyrdom beneath the Cross of our Lord.","links":[[0,[0]],[1,[1,2]],[2,[3,4,5]],[4,[6]],[3,[7]],[5,[8]],[6,[9]],[7,[10]],[8,[11]],[9,[14,15]],[10,[12,13]],[11,[16]],[12,[17,18]],[13,[19,20,21]]]},{"latin":"Déxtera tua, Dómine, glorificáta est in virtúte: déxtera manus tua confrégit inimícos. Allelúia, allelúia.","english":"Your right hand, O Lord, is magnificent in power; Your right hand has shattered the enemy. Alleluia, alleluia.","links":[[0,[1,2]],[1,[0]],[2,[3,4]],[[3,4],[5,6]],[5,[7]],[6,[8]],[7,[10]],[8,[11]],[9,[9]],[10,[12,13]],[11,[14,15]],[12,[16]],[13,[17]]]},{"latin":"Quam dilécta tabernácula tua, Dómine virtútum! Concupíscit et déficit ánima mea in átria Dómini.","english":"How lovely is Your dwelling place, O Lord of Hosts! My soul yearns and pines for the courts of the Lord.","links":[[0,[0]],[1,[1,2]],[2,[4,5]],[3,[3]],[4,[6,7]],[5,[8,9]],[6,[12]],[7,[13]],[8,[14]],[9,[11]],[10,[10]],[11,[15,16]],[12,[17]],[13,[18,19,20]]]},{"latin":"Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum.","english":"Who livest and reignest with God the Father, in the unity of the Holy Spirit, God, world without end.","links":[[0,[0]],[1,[4,5,6,7]],[2,[1]],[3,[2]],[4,[3]],[5,[8]],[6,[9,10,11]],[7,[12,14]],[8,[13]],[9,[15]],[[10,11,12,13],[16,17,18]]]},{"latin":"Dómine, prævenísti eum in benedictiónibus dulcédinis: posuísti in cápite eius corónam de lápide pretióso.","english":"O Lord, You welcomed him with goodly blessings; You placed on his head a crown of pure gold.","links":[[0,[0,1]],[1,[2,3]],[2,[4]],[3,[5]],[4,[7]],[5,[6]],[6,[8,9]],[7,[10]],[8,[12]],[9,[11]],[10,[13,14]],[11,[15]],[12,[17]],[13,[16]]]},{"latin":"Iuxta est Dóminus his, qui tribuláto sunt corde, et húmiles spíritu salvábit. Allelúia, allelúia.","english":"The Lord is close to those who are contrite of heart, and those who are humble of spirit He saves. Alleluia, alleluia.","links":[[2,[0,1]],[1,[2]],[0,[3,4]],[3,[5]],[4,[6]],[6,[7]],[5,[8]],[7,[9,10]],[8,[11]],[9,[12,13,14,15]],[10,[16,17]],[11,[18,19]],[12,[20]],[13,[21]]]},{"latin":"Stabat sancta María, cœli Regína et mundi Dómina, iuxta Crucem Dómini nostri Iesu Christi dolorósa.","english":"Holy Mary, the Queen of heaven and mistress of the world, stood by the Cross of our Lord Jesus Christ, full of sorrows.","links":[[0,[11]],[1,[0]],[2,[1]],[4,[2,3]],[3,[4,5]],[5,[6]],[7,[7]],[6,[8,9,10]],[8,[12]],[9,[13,14]],[10,[15,17]],[11,[16]],[12,[18]],[13,[19]],[14,[20,21,22]]]},{"latin":"Deus, venérunt gentes in hereditátem tuam: polluérunt templum sanctum tuum: posuérunt Ierúsalem in pomórum custódiam.","english":"O God, the nations have come into Your inheritance; they have defiled Your holy temple; they have made Jerusalem as a place to keep fruit.","links":[[0,[0,1]],[2,[2,3]],[1,[4,5]],[3,[6]],[4,[8]],[5,[7]],[6,[9,10,11]],[7,[14]],[8,[13]],[9,[12]],[10,[15,16,17]],[11,[18]],[12,[19,20,21,22]],[14,[24]],[13,[23]]]},{"latin":"Córpora Sanctórum in pace sepúlta sunt, et nómina eórum vivent in generatiónem et generatiónem. Allelúia.","english":"The bodies of the Saints are buried in peace, but their name lives on and on. Alleluia.","links":[[0,[0,1]],[1,[2,3,4]],[2,[7]],[3,[8]],[[4,5],[5,6]],[6,[9]],[7,[11]],[8,[10]],[9,[12]],[[10,11,12,13],[13,14,15]],[14,[16]]]},{"latin":"Múnera tibi, Dómine, dicata sanctífica: et, intercedénte beáto Francísco, ab omni nos culpárum labe purífica.","english":"Make holy the gifts dedicated to You, O Lord; and, by the intercession of blessed Francis, cleanse us from every stain of sin.","links":[[4,[0,1]],[0,[2,3]],[[1,3],[4,5,6]],[2,[7,8]],[5,[9]],[6,[10,11,12]],[7,[13,14]],[8,[15]],[14,[16]],[11,[17]],[9,[18]],[10,[19]],[13,[20]],[12,[21,22]]]},{"latin":"Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum.","english":"Who livest and reignest with God the Father, in the unity of the Holy Spirit, God, world without end.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]],[5,[5]],[6,[6,7]],[7,[8]],[8,[9,10,11]],[9,[12,14]],[10,[13]],[11,[15]],[[12,13,14,15],[16,17,18]]]},{"latin":"Virgo Dei Génetrix, quem totus non capit orbis, hoc crucis fert supplícium, auctor vitæ factus homo.","english":"O Virgin Mother of God, He Whom the whole earth contains not, the Author of life, made man, bears this anguish of the Cross.","links":[[0,[0,1]],[2,[2]],[1,[3,4]],[3,[5,6]],[4,[7,8]],[7,[9]],[6,[10]],[5,[11]],[12,[12,13]],[13,[14,15]],[14,[16]],[15,[17]],[10,[18]],[8,[19]],[11,[20]],[9,[21,22,23]]]},{"latin":"Vota pópuli tui, quǽsumus, Dómine, propítius inténde: et quorum nos tríbuis sollémnia celebráre, fac gaudére suffrágiis.","english":"Graciously look upon the prayers of Your people, O Lord, and grant that we may enjoy the spiritual help of those whose festival You permit us to celebrate.","links":[[5,[0]],[6,[1,2]],[0,[3,4]],[[1,2],[5,6,7]],[4,[8,9]],[3,[]],[7,[10]],[[13,14],[11,12,13,14,15]],[15,[16,17,18]],[8,[19,20,21]],[11,[22]],[10,[23,24]],[9,[25]],[12,[26,27]]]},{"latin":"Tua nos, quǽsumus, Dómine, grátia semper et prævéniat et sequátur, ac bonis opéribus iúgiter præstet esse inténtos.","english":"May Your grace, we beseech You, O Lord, ever go before us and follow us, and may it make us ever intent upon good works.","links":[[0,[1]],[4,[0,2]],[1,[3]],[2,[4,5]],[3,[6,7]],[5,[8]],[6,[]],[7,[9,10,11]],[8,[12]],[9,[13,14]],[10,[15]],[14,[16,17,18]],[15,[19]],[13,[20]],[16,[21,22]],[[11,12],[23,24]]]},{"latin":"In illo témpore: Stabant iuxta Crucem Iesu Mater eius, et soror Matris eius, María Cléophæ, et María Magdaléne. Cum vidísset ergo Iesus Matrem, et discípulum stantem, quem diligébat, dicit Matri suæ: Múlier, ecce fílius tuus. Deinde dicit discípulo: Ecce Mater tua. Et ex illa hora accépit eam discípulus in sua.","english":"At that time, there were standing by the Cross of Jesus His Mother and His Mother's sister, Mary of Cleophas, and Mary Magdalene. When Jesus, therefore, saw His Mother and the disciple standing by, whom He loved, He said to His Mother, Woman, behold your son. Then He said to the disciple, Behold your Mother. And from that hour the disciple took her into his home.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4,5]],[4,[6]],[5,[7,8]],[6,[9,10]],[7,[12]],[8,[11]],[9,[13]],[10,[16]],[11,[15]],[12,[14]],[13,[17]],[14,[18,19]],[15,[20]],[16,[21]],[17,[22]],[18,[23]],[19,[26]],[20,[25]],[21,[24]],[22,[27,28]],[23,[29]],[24,[30,31]],[25,[32,33]],[26,[34]],[27,[35,36]],[28,[37,38]],[29,[39,41]],[30,[40]],[31,[42]],[32,[43]],[34,[44]],[33,[45]],[35,[46]],[36,[47,48]],[37,[49,50,51]],[38,[52]],[39,[54]],[40,[53]],[41,[55]],[42,[56]],[43,[57]],[44,[58]],[45,[61]],[46,[62]],[47,[59,60]],[48,[63]],[49,[64,65]]]},{"latin":"In illo témpore: Dixit Iesus turbis Iudæórum: Nunc iudícium est mundi: nunc princeps huius mundi eiiciétur foras. Et ego si exaltátus fuero a terra, ómnia traham ad meipsum. (Hoc autem dicébat, signíficans qua morte esset moritúrus.) Respóndit ei turba. Nos audívimus ex lege, quia Christus manet in ætérnum: et quómodo tu dicis: Opórtet exaltári Fílium hóminis? Quis est iste Fílius hóminis? Dixit ergo eis Iesus: Adhuc módicum lumen in vobis est. Ambuláte, dum lucem habétis, ut non vos ténebræ comprehéndant: et qui ámbulat in ténebris, nescit, quo vadat. Dum lucem habétis, crédite in lucem, ut fílii lucis sitis.","english":"At that time, Jesus said to the multitudes of the Jews, Now is the judgment of the world; now will the prince of the world be cast out. And I, if I be lifted up from the earth, will draw all things to Myself. Now he said this signifying by what death He was to die. The crowd answered Him, We have heard from the Law that the Christ abides forever. And how can You say, The son of Man must be lifted up? Who is this Son of Man? Jesus therefore said to them, Yet a little while the light is among you. Walk while you have the light, that darkness may not overtake you. He who walks in the darkness does not know where he goes. While you have the light, believe in the light, that you may become sons of light.","links":[[0,[0]],[1,[1]],[2,[2]],[4,[3]],[3,[4]],[5,[5,6,7]],[6,[8,9,10]],[7,[11]],[9,[12]],[8,[13,14]],[10,[15,16,17]],[11,[18]],[12,[20,21]],[13,[]],[14,[22,23,24]],[15,[19,25,26]],[16,[27]],[17,[28]],[18,[29]],[19,[30]],[21,[31,32]],[20,[33,34]],[22,[35]],[23,[36,37]],[24,[40,41]],[25,[38,39]],[26,[42]],[27,[43]],[28,[47]],[29,[44]],[30,[45,46]],[31,[48]],[32,[49,50]],[33,[51]],[34,[52,53]],[35,[54,55]],[36,[58]],[37,[59]],[38,[56,57]],[39,[60]],[40,[61,62]],[41,[63]],[42,[64,65]],[43,[66]],[44,[67,68]],[45,[69]],[[46,47],[70]],[48,[71]],[49,[72]],[50,[73,74]],[51,[75]],[54,[76,77]],[55,[78,79]],[52,[80]],[53,[81,82,83]],[56,[84]],[57,[85]],[58,[86]],[59,[87]],[60,[88,89]],[61,[92]],[62,[91]],[63,[93,94]],[64,[90]],[[65,66],[95,96,97,98]],[67,[99,100]],[70,[101]],[68,[102]],[69,[103]],[71,[104]],[72,[105]],[73,[108,109]],[74,[106,107]],[75,[110]],[76,[112,113]],[77,[115]],[78,[111]],[79,[114]],[80,[116]],[81,[117]],[82,[118]],[83,[119]],[84,[120,121]],[85,[122,123,124]],[86,[125]],[87,[126,127]],[88,[128]],[89,[131,132]],[90,[129,130]],[91,[133]],[92,[134]],[93,[135,136]],[94,[137]],[97,[138,139,140]],[95,[141]],[96,[142,143]]]},{"latin":"Munda cor meum ac lábia mea, omnípotens Deus, qui lábia Isaíæ Prophétæ cálculo mundásti igníto: ita me tua grata miseratióne dignáre mundáre, ut sanctum Evangélium tuum digne váleam nuntiáre. Per Christum, Dóminum nostrum. Amen.","english":"Cleanse my heart and my lips, O almighty God, who didst cleanse the lips of the prophet Isaias with a burning coal, and vouchsafe, through Thy gracious mercy, so to purify me, that I may worthily announce Thy holy Gospel. Through Christ our Lord. Amen.","links":[[0,[0]],[2,[1]],[1,[2]],[3,[3]],[5,[4]],[4,[5]],[6,[7]],[7,[6,8]],[8,[9]],[13,[10,11]],[9,[12,13]],[11,[14,15,16]],[10,[17]],[12,[18,19,21]],[14,[20]],[15,[28]],[20,[22,23]],[19,[24,27]],[17,[25]],[18,[26]],[21,[29,30]],[16,[31]],[22,[32]],[27,[33,34]],[26,[35]],[28,[36]],[25,[37]],[23,[38]],[24,[39]],[29,[40]],[30,[41]],[32,[42]],[31,[43]],[33,[44]]]},{"latin":"Iube, Dómine, benedícere. Dóminus sit in corde meo et in lábiis meis: ut digne et competénter annúntiem Evangélium suum. Amen.","english":"Give me Thy blessing, O Lord. The Lord be in my heart and on my lips, that I may worthily and in a becoming manner, proclaim His holy Gospel. Amen.","links":[[0,[0]],[1,[4,5]],[2,[1,2,3]],[3,[6,7]],[4,[8]],[5,[9]],[6,[11]],[7,[10]],[8,[12]],[9,[13]],[10,[15]],[11,[14]],[12,[16]],[13,[19]],[14,[20]],[15,[21,22,23,24]],[16,[17,18,25]],[17,[28]],[18,[26,27]],[19,[29]]]},{"latin":"℟. Glória tibi, Dómine.","english":"℟. Glory be to Thee, O Lord.","links":[[0,[0]],[1,[1,2,3]],[2,[4,5]]]},{"latin":"℟. Laus tibi, Christe.","english":"℟. Praise be to Thee, O Christ.","links":[[0,[0]],[1,[1,2,3]],[2,[4,5]]]},{"latin":"S. Per Evangélica dicta, deleántur nostra delícta.","english":"S. By the words of the Gospel may our sins be blotted out.","links":[[0,[0]],[2,[1,2]],[1,[3,4,5]],[3,[6,9,10,11]],[4,[7]],[5,[8]]]},{"latin":"Luc 14:1-11","english":"Luke 14:1-11","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Ioann 12:31-36","english":"John 12:31-36","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Ioann 19:25-27.","english":"John 19:25-27","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Luc 21:9-19","english":"Luke 21:9-19","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Matt 22:1-14","english":"Matt 22:1-14","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"Matt 24:3-13","english":"Matt 24:3-13","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]]]},{"latin":"In illo témpore: Cum intráret Iesus in domum cuiúsdam príncipis pharisæórum sábbato manducáre panem, et ipsi observábant eum. Et ecce, homo quidam hydrópicus erat ante illum. Et respóndens Iesus dixit ad legisperítos et pharisǽos, dicens: Si licet sábbato curáre? At illi tacuérunt. Ipse vero apprehénsum sanávit eum ac dimísit. Et respóndens ad illos, dixit: Cuius vestrum ásinus aut bos in púteum cadet, et non contínuo éxtrahet illum die sábbati? Et non póterant ad hæc respóndere illi. Dicebat autem et ad invitátos parábolam, inténdens, quómodo primos accúbitus elígerent, dicens ad illos: Cum invitátus fúeris ad núptias, non discúmbas in primo loco, ne forte honorátior te sit invitátus ab illo, et véniens is, qui te et illum vocávit, dicat tibi: Da huic locum: et tunc incípias cum rubóre novíssimum locum tenére. Sed cum vocátus fúeris, vade, recúmbe in novíssimo loco: ut, cum vénerit, qui te invitávit, dicat tibi: Amíce, ascénde supérius. Tunc erit tibi glória coram simul discumbéntibus: quia omnis, qui se exáltat, humiliábitur: et qui se humíliat, exaltábitur.","english":"At that time, when Jesus entered the house of one of the rulers of the Pharisees on the Sabbath to take food, they watched Him. And behold, there was a certain man before Him who had the dropsy. And Jesus asked the lawyers and Pharisees, saying, Is it lawful to cure on the Sabbath? But they remained silent. And He took and healed him and let him go. Then addressing them, He said, Which of you shall have an ass or an ox fall into a pit, and will not immediately draw him up on the Sabbath? And they could give Him no answer to these things. But He also spoke a parable to those invited, observing how they were choosing the first places at table, and He said to them, When you are invited to a wedding feast, do not recline in the first place, lest perhaps one more distinguished than you have been invited by him, and he who invited you and him come and say to you, Make room for this man; and then you begin with shame to take the last place. But when you are invited go and recline in the last place; that when he who invited you comes in, he may say to you, Friend, go up higher! Then you will be honored in the presence of all who are at table with you. For everyone who exalts himself shall be humbled, and he who humbles himself shall be exalted.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[5,[4]],[4,[5]],[6,[]],[7,[6,7]],[8,[8,9,10]],[9,[11,12]],[10,[13,14,15]],[11,[16,17,18]],[12,[19,20]],[13,[21]],[14,[]],[15,[22]],[16,[23]],[17,[24]],[18,[25]],[19,[26]],[23,[27,28]],[21,[29,30]],[20,[31]],[24,[32]],[25,[33]],[22,[34,35,36,37]],[26,[38]],[27,[]],[28,[39]],[29,[40]],[30,[41]],[31,[42]],[32,[43]],[33,[44]],[34,[45]],[35,[46,47]],[36,[48]],[37,[51,52,53]],[38,[49,50]],[39,[54]],[40,[55]],[41,[56,57]],[42,[59]],[43,[58]],[44,[60]],[45,[61,62]],[46,[63]],[47,[64,65]],[48,[66,67]],[49,[68]],[50,[69]],[[51,52],[70]],[53,[71,72]],[54,[73]],[55,[74,75]],[56,[78,79]],[57,[80]],[58,[81,82]],[61,[76,77,83]],[59,[84]],[60,[85,86]],[62,[87]],[63,[88,89]],[64,[90]],[65,[91,93]],[66,[92]],[67,[94,95]],[68,[96]],[69,[97]],[75,[98]],[71,[99]],[74,[100,103]],[72,[104]],[73,[105,106]],[70,[102]],[76,[108,110]],[77,[107]],[78,[109]],[79,[113]],[80,[114,115]],[81,[111,112]],[82,[116]],[83,[117]],[84,[122]],[85,[121,123,124,125]],[86,[118,119,120]],[87,[126,127,128]],[88,[129]],[89,[130]],[90,[131]],[91,[133,134]],[92,[132]],[93,[135]],[94,[136,137,138]],[95,[139,140]],[96,[141]],[97,[142]],[98,[143,144]],[99,[145]],[100,[146]],[101,[147]],[102,[148,149,150]],[103,[151,152]],[104,[153,154]],[105,[155]],[106,[156]],[107,[157]],[108,[158]],[111,[160]],[112,[162]],[113,[163]],[114,[164]],[115,[161]],[109,[165]],[110,[159]],[116,[166,167]],[117,[168,169]],[118,[170]],[119,[172,173]],[120,[171,174]],[121,[175]],[122,[176]],[123,[177,178]],[124,[179]],[125,[180]],[126,[183,184]],[127,[185]],[128,[181,182]],[129,[186]],[130,[187]],[131,[189,190]],[132,[188]],[133,[191,192]],[134,[193]],[135,[194]],[136,[195,196]],[137,[197]],[138,[198]],[139,[199]],[140,[204,205]],[141,[200,201]],[142,[203]],[143,[202]],[144,[206,207,208]],[145,[209,210]],[146,[211]],[147,[212,213]],[148,[214]],[149,[215]],[151,[216]],[150,[217,218]],[152,[219]],[153,[220,221,222,223]],[154,[224,225,226]],[155,[227,228,229,230]],[156,[231]],[157,[232]],[158,[233]],[159,[235]],[160,[234]],[161,[236,237,238]],[162,[239,240]],[163,[241]],[164,[243]],[165,[242]],[166,[244,245,246]]]},{"latin":"In illo témpore: Dixit Iesus discípulis suis: Cum audiéritis prǽlia et seditiónes, nolíte terréri: opórtet primum hæc fíeri, sed nondum statim finis. Tunc dicébat illis: Surget gens contra gentem, et regnum advérsus regnum. Et terræmótus magni erunt per loca, et pestiléntiæ, et fames, terrorésque de coelo, et signa magna erunt. Sed ante hæc ómnia iniícient vobis manus suas, et persequéntur tradéntes in synagógas et custódias, trahéntes ad reges et praesides propter nomen meum: contínget autem vobis in testimónium. Pónite ergo in córdibus vestris non præmeditári, quemádmodum respondeátis. Ego enim dabo vobis os et sapiéntiam, cui non potérunt resístere et contradícere omnes adversárii vestri. Tradémini autem a paréntibus, et frátribus, et cognátis, et amícis, et morte affícient ex vobis: et éritis ódio ómnibus propter nomen meum: et capíllus de cápite vestro non períbit. In patiéntia vestra possidébitis ánimas vestras.","english":"At that time, Jesus said to His disciples, When you hear of wars and insurrections, do not be terrified; these things must first come to pass, but the end will not be at once. Then He said to them, Nation will rise against nation, and kingdom against kingdom; and there will be great earthquakes in various places, and pestilences and famines, and there will be terrors and great signs from heaven. But before all these things they will arrest you and persecute you, delivering you up to the synagogues and prisons, dragging you before kings and governors for My name's sake. It shall lead to your bearing witness. Resolve therefore in your hearts not to meditate beforehand how you are to make your defense. For I Myself will give you utterance and wisdom, which all your adversaries will not be able to resist or gainsay. But you will be delivered up by your parents and brothers and relatives and friends; and some of you they will put to death. And you will be hated by all for My name's sake; yet not a hair of your head shall perish. By your patience you will win your souls.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[4]],[4,[3]],[5,[5,6,7]],[6,[]],[7,[8]],[9,[11,12]],[8,[9,10]],[10,[13]],[11,[14]],[12,[15,16,17]],[13,[18]],[14,[21]],[15,[22]],[16,[19,20]],[17,[23,24,25]],[18,[26]],[19,[29,30,31]],[20,[32,33]],[21,[27,28]],[22,[34]],[23,[35,36]],[24,[37,38]],[25,[40,41]],[26,[39]],[27,[42]],[28,[43]],[29,[44]],[30,[45]],[31,[46]],[32,[47]],[33,[48]],[34,[53]],[35,[52]],[36,[49,50,51]],[37,[54]],[38,[55,56]],[39,[57]],[40,[58]],[41,[59]],[42,[60]],[43,[61,65]],[44,[69]],[45,[70]],[46,[66]],[47,[68]],[48,[67]],[49,[62,63,64]],[50,[71]],[51,[72]],[52,[74,75]],[53,[73]],[54,[76,77,78]],[55,[79]],[56,[]],[57,[]],[58,[80]],[59,[81,82]],[60,[83,84,85,86]],[61,[87]],[62,[88]],[63,[89]],[64,[90]],[65,[91,92]],[66,[93]],[67,[94]],[68,[95]],[69,[96]],[70,[97]],[71,[99,100]],[72,[98]],[73,[101,102,103]],[74,[]],[75,[105]],[76,[104]],[77,[106,107]],[78,[108]],[79,[109]],[80,[110]],[81,[112]],[82,[111]],[83,[113]],[84,[114,115,116]],[85,[117]],[86,[118,119,120,121,122,123]],[87,[125,126]],[88,[124]],[89,[127,128]],[90,[129]],[91,[130]],[92,[131]],[93,[132]],[94,[133]],[95,[137,138]],[96,[139,140,141]],[97,[142]],[98,[143]],[99,[144]],[100,[134]],[101,[136]],[102,[135]],[103,[146,147,148,149,150]],[104,[145]],[105,[151]],[106,[152,153]],[107,[154]],[108,[155]],[109,[156]],[110,[157]],[111,[158]],[112,[159]],[113,[160]],[114,[168]],[115,[164,165,166,167]],[116,[162]],[117,[161,163]],[118,[169]],[119,[170,171,172]],[120,[173]],[121,[174,175]],[122,[176]],[123,[178,179]],[124,[177]],[125,[180]],[130,[181]],[126,[182,183]],[127,[184]],[128,[186]],[129,[185]],[131,[187,188]],[132,[189]],[133,[191]],[134,[190]],[135,[192,193,194]],[136,[196]],[137,[195]]]},{"latin":"In illo témpore: Loquebátur Iesus princípibus sacerdótum et pharisǽis in parábolis, dicens: Símile factum est regnum cœlórum hómini regi, qui fecit núptias fílio suo. Et misit servos suos vocáre invitátos ad nuptias, et nolébant veníre. Iterum misit álios servos, dicens: Dícite invitátis: Ecce, prándium meum parávi, tauri mei et altília occísa sunt, et ómnia paráta: veníte ad núptias. Illi autem neglexérunt: et abiérunt, álius in villam suam, álius vero ad negotiatiónem suam: réliqui vero tenuérunt servos eius, et contuméliis afféctos occidérunt. Rex autem cum audísset, iratus est: et, missis exercítibus suis, pérdidit homicídas illos et civitátem illórum succéndit. Tunc ait servis suis: Núptiæ quidem parátæ sunt, sed, qui invitáti erant, non fuérunt digni. Ite ergo ad exitus viárum et, quoscúmque invenéritis, vocáte ad núptias. Et egréssi servi eius in vias, congregavérunt omnes, quos invenérunt, malos et bonos: et implétæ sunt núptiæ discumbéntium. Intrávit autem rex, ut vidéret discumbéntes, et vidit ibi hóminem non vestítum veste nuptiáli. Et ait illi: Amíce, quómodo huc intrásti non habens vestem nuptiálem? At ille obmútuit. Tunc dixit rex minístris: Ligátis mánibus et pédibus eius, míttite eum in ténebras exterióres: ibi erit fletus et stridor déntium. Multi enim sunt vocáti, pauci vero elécti.","english":"At that time, Jesus spoke to the chief priests and the Pharisees in parables, saying, The kingdom of heaven is like a king who made a marriage feast for his son. And he sent his servants to call in those invited to the marriage feast, but they would not come. Again he sent out other servants, saying, Tell those who are invited, behold, I have prepared my dinner; my oxen and fatlings are killed, and everything is ready; come to the marriage feast. But they made light of it, and went off, one to his farm, and another to his business; and the rest laid hold of his servants, treated them shamefully, and killed them. But when the king heard of it, he was angry; and he sent his armies, destroyed those murderers, and burnt their city. Then he said to his servants, The marriage feast indeed is ready, but those who were invited were not worthy; go therefore to the crossroads, and invite to the marriage feast whomever you shall find. And his servants went out into the roads, and gathered all whom they found, both good and bad; and the marriage feast was filled with guests. Now the king went in to see the guests, and he saw there a man who had not on a wedding garment. And he said to him, Friend, how did you come in here without a wedding garment? But he was speechless. Then the king said to the attendants, Bind his hands and feet and cast him forth into the darkness outside, where there will be the weeping and the gnashing of teeth. For many are called, but few are chosen.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[4]],[4,[3]],[5,[5,6]],[6,[7,8]],[7,[9]],[8,[10,11]],[9,[12]],[10,[13]],[11,[14]],[12,[20]],[13,[]],[14,[19]],[15,[15,16]],[16,[17,18]],[17,[21,22]],[18,[]],[19,[23]],[20,[24]],[21,[25,26,27]],[22,[28,30]],[23,[29]],[24,[31]],[25,[32,33]],[26,[35]],[27,[34]],[28,[36,37]],[29,[38,39,40]],[30,[41]],[31,[42,43,44]],[32,[45]],[33,[46,47,48]],[34,[49]],[35,[50]],[36,[51,52,53]],[37,[54]],[38,[55]],[39,[56]],[40,[57]],[41,[58,59,60,61]],[42,[62]],[43,[67]],[44,[66]],[45,[63,64,65]],[46,[69]],[47,[68]],[48,[70]],[49,[71]],[50,[73]],[51,[72]],[52,[74]],[53,[75]],[54,[76,77]],[55,[78]],[56,[79]],[57,[80,81,82]],[58,[84]],[59,[83]],[60,[85,86,87,88]],[61,[89]],[62,[90,91]],[63,[92]],[64,[93]],[65,[95]],[66,[94]],[67,[97]],[68,[96]],[69,[98]],[70,[100]],[71,[99]],[72,[102,103]],[73,[101]],[74,[104,105,106]],[75,[108]],[76,[107]],[77,[112]],[78,[109,110,111]],[79,[]],[80,[113,114]],[81,[117,118]],[82,[115]],[83,[116]],[84,[119,120,121]],[85,[124]],[86,[122,123]],[87,[125]],[88,[126,127]],[89,[128]],[90,[129]],[91,[130]],[92,[132]],[93,[131]],[94,[133]],[95,[136]],[96,[135]],[97,[134]],[98,[137]],[99,[138,139]],[100,[140,142]],[101,[141]],[102,[143,144,145]],[103,[146]],[104,[148]],[105,[147]],[106,[149]],[107,[150,151]],[108,[153]],[109,[152]],[110,[155]],[111,[154]],[112,[156]],[113,[157]],[114,[158]],[115,[159]],[116,[161]],[117,[160]],[118,[162]],[119,[168,169]],[120,[170,171]],[121,[163]],[122,[164]],[123,[165,166,167]],[124,[172]],[126,[174]],[127,[173]],[125,[175,176]],[128,[177]],[129,[178,179]],[130,[180,181]],[131,[182]],[132,[183]],[133,[184,185]],[134,[186,187]],[135,[188]],[136,[189]],[137,[190]],[138,[195]],[139,[194]],[140,[191,192,193]],[141,[196,197]],[142,[201,202]],[143,[198]],[144,[199,200]],[145,[203]],[146,[204]],[147,[205,206]],[148,[207]],[149,[208,209]],[150,[210]],[151,[211,212]],[152,[213,214,215]],[153,[216]],[154,[217,218,219]],[155,[]],[156,[220]],[157,[221,222]],[158,[223,224]],[159,[225]],[160,[226]],[162,[227,228,229]],[161,[230,231]],[163,[232]],[164,[]],[165,[233,234]],[166,[235]],[167,[236]],[168,[237]],[169,[238,239]],[170,[240]],[172,[241,242]],[171,[243]],[173,[244,245,246]],[174,[247]],[175,[248,249]],[176,[250]],[177,[251]],[178,[]],[179,[252,253,255]],[180,[254]],[181,[256]],[182,[257,258]],[183,[259]],[184,[260,261]],[185,[262,263]],[186,[264,265]],[187,[266]],[188,[267,268]],[189,[269,270]],[191,[271]],[190,[272]],[192,[273]],[193,[274]],[195,[275]],[194,[276]],[196,[277,278]]]},{"latin":"In illo témpore: Sedénte Iesu super montem Olivéti, accessérunt ad eum discípuli secréto, dicéntes: Dic nobis, quando hæc erunt? et quod signum advéntus tui et consummatiónis sǽculi? Et respóndens Iesus, dixit eis: Vidéte, ne quis vos sedúcat. Multi enim vénient in nómine meo, dicéntes: Ego sum Christus: et multos sedúcent. Auditúri enim estis prælia et opiniónes prœliórum. Vidéte, ne turbémini. Opórtet enim hæc fíeri, sed nondum est finis. Consúrget enim gens in gentem, et regnum in regnum, et erunt pestiléntiæ et fames et terræmótus per loca. Hæc autem ómnia inítia sunt dolórum. Tunc tradent vos in tribulatiónem et occídent vos: et éritis odio ómnibus géntibus propter nomen meum. Et tunc scandalizabúntur multi, et ínvicem tradent, et odio habébunt ínvicem. Et multi pseudoprophétæ surgent, et sedúcent multos. Et quóniam abundávit iníquitas, refrigéscet cáritas multórum. Qui autem perseveráverit usque in finem, hic salvus erit.","english":"At that time, as Jesus was sitting on the Mount of Olives, the disciples came to Him privately, saying, Tell us, when are these things to happen, and what will be the sign of Your coming and of the end of the world? And in answer Jesus said to them, Take care that no one leads you astray. For many will come in My name, saying, I am the Christ, and they will lead many astray. For you shall hear of wars and rumors of wars. Take care that you do not be alarmed, for these things must come to pass, but the end is not yet. For nation will rise against nation, and kingdom against kingdom; and there will be pestilences and famines and earthquakes in various places. But all these things are the beginnings of sorrows. Then they will deliver you up to tribulation, and will put you to death; and you will be hated by all nations for My name's sake. And then many will fall away, and will betray one another, and will hate one another. And many false prophets will arise, and will lead many astray. And because iniquity will abound, the charity of the many will grow cold. But whoever perseveres to the end, he shall be saved.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,5,6]],[4,[4]],[5,[7]],[6,[8,9]],[7,[10,11]],[8,[14]],[9,[15]],[10,[16]],[11,[12,13]],[12,[17]],[13,[18]],[14,[19]],[15,[20]],[16,[21]],[17,[23,24]],[18,[22,25,26]],[19,[27]],[20,[28]],[21,[31,32]],[22,[29,30,33,35]],[23,[34]],[24,[36]],[25,[37,38,39]],[26,[40,41,42]],[27,[43]],[28,[44,45]],[29,[46]],[30,[47]],[31,[48,49]],[32,[50,51]],[33,[52]],[34,[53,54]],[36,[55,57]],[35,[56]],[38,[58]],[37,[59]],[39,[60,61]],[40,[62]],[41,[64]],[42,[63]],[43,[65]],[44,[66]],[45,[67,68]],[46,[69]],[47,[70]],[48,[71,74]],[49,[72,73,75]],[51,[76]],[52,[77,78]],[50,[79]],[53,[80,81]],[54,[82]],[55,[83]],[56,[84,85]],[57,[86,87]],[58,[88]],[59,[89,90,91,92,93]],[61,[94]],[62,[95,96]],[60,[97]],[63,[98,99,100]],[64,[101]],[65,[105,106]],[66,[104]],[67,[102,103]],[69,[107]],[70,[108]],[68,[109,110]],[71,[111]],[72,[112]],[73,[113]],[74,[114]],[75,[115]],[76,[116]],[77,[117]],[78,[118,119,120]],[79,[121]],[80,[122]],[81,[123]],[82,[124]],[83,[125]],[84,[126]],[85,[127,128]],[87,[129]],[88,[130]],[86,[131,132]],[90,[133]],[89,[134,135]],[91,[136,137]],[92,[138]],[93,[139,140,141,143]],[94,[142]],[95,[144]],[96,[145]],[97,[146]],[98,[147,148,150]],[99,[149,151]],[100,[152]],[101,[153,154,155]],[102,[156]],[103,[157,158]],[104,[159]],[105,[160]],[107,[162,163]],[106,[161]],[108,[164]],[109,[165]],[111,[166]],[110,[167,168,169]],[112,[170]],[114,[171,172]],[113,[173,174]],[115,[175]],[117,[176,177]],[116,[]],[118,[178,179]],[119,[180]],[120,[181]],[121,[182,183]],[122,[184,185]],[123,[186]],[124,[187,188,190]],[125,[189]],[126,[191]],[127,[192]],[129,[193]],[128,[194,195]],[131,[196,197]],[132,[198,199,200]],[130,[201,202,203]],[134,[204]],[133,[205]],[135,[206]],[136,[207]],[137,[208]],[138,[209]],[139,[210]],[141,[211,212]],[140,[213]]]},{"latin":"Fratres: Obsecro vos, ne deficiátis in tribulatiónibus meis pro vobis: quæ est glória vestra. Huius rei grátia flecto génua mea ad Patrem Dómini nostri Iesu Christi, ex quo omnis patérnitas in cœlis et in terra nominátur, ut det vobis secúndum divítias glóriæ suæ, virtúte corroborári per Spíritum eius in interiórem hóminem, Christum habitáre per fidem in córdibus vestris: in caritáte radicáti et fundáti, ut póssitis comprehéndere cum ómnibus sanctis, quæ sit latitúdo et longitúdo et sublímitas et profúndum: scire étiam supereminéntem sciéntiæ caritátem Christi, ut impleámini in omnem plenitúdinem Dei. Ei autem, qui potens est ómnia fácere superabundánter, quam pétimus aut intellégimus, secúndum virtútem, quæ operátur in nobis: ipsi glória in Ecclésia et in Christo Iesu, in omnes generatiónes sǽculi sæculórum. Amen.","english":"Brethren: I pray you not to be disheartened at my tribulations for you, for they are your glory. For this reason I bend my knees to the Father of our Lord Jesus Christ, from Whom all fatherhood in heaven and on earth receives its name, that He may grant you from His glorious riches to be strengthened with power through His Spirit unto the progress of the inner man; and to have Christ dwelling through faith in your hearts: so that, being rooted and grounded in love, you may be able to comprehend with all the saints what is the breadth and length and height and depth, and to know Christ's love which surpasses knowledge, in order that you may be filled unto all the fullness of God. Now, to Him Who is able to accomplish all things in a measure far beyond what we ask or conceive, in keeping with the power that is at work in us - to Him be glory in the Church and in Christ Jesus down through all the ages of time without end. Amen.","links":[[0,[0]],[1,[1,2]],[2,[3]],[3,[4]],[4,[5,6,7]],[5,[8]],[6,[10]],[7,[9]],[8,[11]],[9,[12]],[10,[13,14]],[11,[15]],[12,[17]],[13,[16]],[16,[18]],[14,[19]],[15,[20]],[17,[21,22]],[18,[24]],[19,[23]],[20,[25,26]],[21,[27]],[22,[28,30]],[23,[29]],[24,[31]],[25,[32]],[26,[33]],[27,[34]],[28,[35]],[29,[36]],[30,[37]],[31,[38]],[32,[39]],[33,[40]],[34,[41]],[35,[42,43,44]],[36,[45]],[37,[46,47,48]],[38,[49]],[39,[50]],[42,[51]],[40,[52,53]],[41,[]],[43,[57,58]],[44,[54,55,56]],[45,[59]],[46,[61]],[47,[60]],[48,[62,64,65]],[49,[63,66,67]],[50,[68]],[51,[72]],[52,[69,70,71,73]],[53,[74]],[54,[75]],[55,[76]],[56,[78]],[57,[77]],[63,[79,80]],[60,[81,82]],[61,[83]],[62,[84]],[58,[85]],[59,[86]],[64,[87,88,89,90]],[65,[91,92]],[66,[93]],[67,[94,95]],[68,[96]],[69,[97]],[70,[98]],[71,[99,100]],[72,[101]],[73,[102]],[74,[103]],[75,[104]],[76,[105]],[77,[106]],[78,[107,108,109]],[79,[]],[80,[112,113]],[81,[114]],[82,[111]],[83,[110]],[84,[115,116,117]],[85,[118,119,120,121]],[86,[122]],[87,[123,124]],[88,[125]],[89,[126,127]],[91,[128]],[90,[129,130]],[92,[131]],[93,[132,133]],[94,[]],[96,[134,135]],[95,[136,137]],[97,[138,139,140,141,142]],[98,[143]],[99,[144,145]],[100,[146]],[101,[147]],[102,[148,149,150]],[103,[151,152]],[104,[153]],[105,[154,155,156]],[106,[157]],[107,[158]],[108,[159,160,161]],[109,[162]],[110,[163]],[111,[164,165]],[112,[166]],[113,[167]],[114,[168]],[115,[169]],[116,[170,171]],[117,[172]],[118,[173,174]],[119,[175,176]],[120,[177,178]],[121,[179]]]},{"latin":"Fratres: Hoc enim sentíte in vobis, quod et in Christo Iesu: qui, cum in forma Dei esset, non rapinam arbitrátus est esse se æquálem Deo: sed semetípsum exinanívit, formam servi accipiens, in similitudinem hóminum factus, et hábitu inventus ut homo. Humiliávit semetípsum, factus obœ́diens usque ad mortem, mortem autem crucis. Propter quod et Deus exaltávit illum: et donávit illi nomen, quod est super omne nomen: hic genuflectitur ut in nomine Iesu omne genu flectátur cœléstium, terréstrium et infernórum: et omnis lingua confiteátur, quia Dóminus Iesus Christus in glória est Dei Patris.","english":"Brethren: Have this mind in you which was also in Christ Jesus, Who though He was by nature God, did not consider being equal to God a thing to be clung to, but emptied Himself, taking the nature of a slave and being made like unto men. And appearing in the form of man, He humbled Himself, becoming obedient to death, even to death on a cross. Therefore God also has exalted Him and has bestowed upon Him the name that is above every name, here all genuflect so that at the name of Jesus every knee should bend of those in heaven, on earth and under the earth, and every tongue should confess that the Lord Jesus Christ is in the glory of God the Father.","links":[[0,[0]],[2,[]],[3,[1]],[1,[2,3]],[4,[4]],[5,[5]],[6,[6]],[7,[7,8]],[8,[9]],[9,[10]],[10,[11]],[11,[12]],[12,[13]],[16,[14,15]],[13,[16]],[14,[17]],[15,[18]],[17,[19,20]],[19,[21]],[20,[]],[[18,21],[22,26,27,28,29,30,31]],[22,[]],[23,[23]],[24,[24,25]],[25,[32]],[27,[33]],[26,[34]],[30,[35]],[28,[36,37,38]],[29,[39,40]],[34,[41,42,43]],[31,[44]],[32,[45]],[33,[46]],[35,[47]],[37,[48]],[36,[49,50,51]],[38,[52]],[39,[53]],[40,[54,55]],[41,[56]],[42,[57]],[43,[58]],[44,[61,62]],[45,[59]],[46,[60]],[47,[63]],[48,[64,65]],[49,[66]],[50,[67]],[51,[]],[52,[69]],[53,[68]],[54,[70,71]],[55,[72]],[56,[73]],[57,[74,75]],[58,[76,77]],[59,[78,79]],[60,[80]],[61,[81]],[62,[82]],[63,[83]],[64,[84]],[65,[85]],[66,[86,87]],[67,[88,89]],[68,[90]],[69,[91,92]],[70,[93,94]],[71,[95]],[72,[96]],[73,[97,98]],[74,[99,100,101,102]],[75,[103,104]],[76,[105]],[77,[106,107,108]],[78,[109]],[79,[110]],[80,[111]],[81,[112,113]],[82,[114]],[83,[115,116]],[84,[117]],[85,[118]],[88,[119]],[86,[120]],[87,[121,122]],[89,[123,124]],[90,[125,126]]]},{"latin":"Benedíxit te Dóminus in virtúte sua, quia per te ad níhilum redégit inimícos nostros. Benedícta es tu, fília, a Dómino, Deo excélso, præ ómnibus muliéribus super terram. Benedíctus Dóminus, qui creávit cœlum et terram: quia hódie nomen tuum ita magnificávit, ut non recédat laus tua de ore hóminum, qui mémores fúerint virtútis Dómini in ætérnum, pro quibus non pepercísti ánimæ tuæ propter angústias et tribulatiónem géneris tui, sed subvenísti ruínæ ante conspéctum Dei nostri.","english":"The Lord has blessed you by His power, Who by you has brought our enemies to nought. Blessed are you, O daughter, by the Lord the Most High God, above all women upon the earth. Blessed be the Lord Who made heaven and earth, because He has so magnified your name this day, that your praise shall not depart out of the mouth of men, who shall be mindful of the power of the Lord forever: for you have not spared your life by reason of the distress and tribulation of your people, but have prevented our ruin in the presence of our God.","links":[[2,[0,1]],[0,[2,3]],[1,[4]],[3,[5]],[4,[6,7]],[5,[]],[6,[8]],[7,[9]],[8,[10]],[11,[11,12]],[9,[15]],[10,[16]],[12,[14]],[13,[13]],[14,[17]],[15,[18]],[16,[19]],[17,[20,21]],[18,[22]],[19,[23,24]],[20,[25,28]],[21,[26,27]],[22,[29]],[23,[30]],[24,[31]],[25,[32]],[26,[33,34]],[27,[35,36]],[28,[37,38]],[29,[39]],[30,[40]],[31,[41]],[32,[42]],[33,[43]],[34,[44]],[35,[51,52]],[38,[47]],[36,[50]],[37,[49]],[39,[45,46,48]],[40,[53]],[41,[56,57]],[42,[58]],[43,[55]],[44,[54]],[45,[59,60]],[46,[61,62]],[47,[63,64]],[48,[65]],[49,[68]],[50,[66,67]],[51,[69,70,71]],[52,[72,73,74]],[53,[]],[54,[75]],[55,[76]],[56,[77]],[57,[78,79]],[58,[80]],[59,[82]],[60,[81]],[61,[83,84,85]],[62,[86,87]],[63,[88]],[64,[89]],[65,[90,92]],[66,[91]],[67,[93]],[68,[94,95]],[69,[96,97]],[70,[98]],[71,[99,100]],[72,[101,103]],[73,[102]]]},{"latin":"Iustorum ánimæ in manu Dei sunt, et non tanget illos torméntum mortis. Visi sunt oculis insipiéntium mori: et æstimála est afflíctio exitus illórum: et quod a nobis est iter, extermínium: illi autem sunt in pace. Et si coram homínibus torménta passi sunt, spes illórum immortalitáte plena est. In paucis vexáti, in multis bene disponéntur: quóniam Deus tentávit eos, et invenit illos dignos se. Tamquam aurum in fornáce probávit illos, et quasi holocáusti hóstiam accépit illos, et in témpore erit respéctus illorum. Fulgébunt iusti, et tamquam scintíllæ in arundinéto discúrrent. Iudicábunt natiónes, et dominabúntur pópulis, et regnábit Dóminus illórum in perpétuum.","english":"The souls of the just are in the hands of God, and no torment of death shall touch them. They seemed, in the view of the foolish, to be dead; and their passing away was judged an affliction, and their going forth from us, utter destruction. But they are in peace. For if before men, indeed, they be punished, yet is their hope full of immortality; chastised a little, they shall be greatly blessed, because God tried them and found them worthy of Himself. As gold in the furnace, He proved them, and as sacrificial offerings He took them to Himself. In the time of their visitation they shall shine, and shall dart about as sparks through stubble; they shall judge nations and rule over peoples, and the Lord shall be their King forever.","links":[[1,[0,1]],[0,[2,3,4]],[5,[5]],[2,[6]],[3,[7,8]],[4,[9,10]],[6,[11]],[7,[12]],[10,[13]],[11,[14,15]],[8,[16,17]],[9,[18]],[12,[19,20]],[14,[21,22,23]],[15,[24,25,26]],[13,[]],[16,[27,28,29]],[17,[30]],[20,[36,37]],[18,[32,33,35]],[19,[34]],[21,[39,40,41]],[22,[31]],[23,[38]],[24,[]],[25,[42]],[26,[43]],[27,[]],[28,[]],[29,[44,45]],[31,[46]],[30,[47]],[32,[48]],[33,[49]],[34,[50]],[35,[51]],[36,[52]],[37,[53]],[38,[54,55]],[39,[57,58]],[40,[]],[41,[56]],[42,[62]],[43,[61]],[44,[64,65]],[45,[63]],[46,[59,60]],[49,[66]],[47,[67]],[48,[68]],[53,[69,70,71,73]],[50,[]],[51,[]],[52,[72]],[54,[74]],[55,[75]],[56,[76]],[57,[77]],[58,[78]],[59,[79]],[60,[80]],[61,[81,82]],[62,[83]],[63,[84]],[64,[85]],[65,[86]],[66,[87,88]],[67,[89,90]],[68,[91]],[69,[92]],[70,[93]],[71,[94]],[72,[95]],[73,[96,97]],[74,[98]],[75,[]],[76,[101]],[77,[102,103]],[78,[]],[79,[106]],[80,[104,105]],[82,[107]],[81,[108,109]],[83,[110]],[88,[111,112,113]],[84,[114]],[85,[115]],[86,[116]],[87,[117]],[89,[118,119,120]],[90,[121]],[91,[122]],[92,[123,124]],[93,[125]],[94,[126]],[95,[129,130,132]],[96,[127,128]],[97,[131]],[98,[]],[99,[133]]]},{"latin":"Fratres: Si linguis hóminum loquar et Angelorum, caritátem autem non hábeam, factus sum velut æs sonans aut cýmbalum tínniens. Et si habúero prophetiam, et nóverim mystéria ómnia et omnem sciéntiam: et si habúero omnem fidem, ita ut montes tránsferam, caritátem autem non habúero, nihil sum. Et si distribúere in cibos páuperum omnes facultátes meas, et si tradídere corpus meum, ita ut árdeam, caritátem autem non habúero, nihil mihi prodest. Cáritas pátiens est, benígna est: cáritas non æmulátur, non agit pérperam, non inflátur, non est ambitiósa, non quærit quæ sua sunt, non irritátur, non cógitat malum, non gaudet super iniquitáte, congáudet autem veritáti: ómnia suffert, ómnia credit, ómnia sperat, ómnia sústinet. Cáritas numquam éxcidit: sive prophétiæ evacuabúntur, sive linguæ cessábunt, sive sciéntia destruétur.","english":"Brethren: If I should speak with tongues of men and of angels, but do not have charity, I have become as sounding brass or a tinkling cymbal. And if I have prophecy and know all mysteries and all knowledge, and if I have all faith so as to remove mountains, yet do not have charity, I am nothing. And if I distribute all my goods to feed the poor, and if I deliver my body to be burned, yet do not have charity, it profits me nothing. Charity is patient, is kind; charity does not envy, is not pretentious, is not puffed up, is not ambitious, is not self-seeking, is not provoked; thinks no evil, does not rejoice over wickedness, but rejoices with the truth; bears with all things, believes all things, hopes all things, endures all things. Charity never fails, whereas prophecies will disappear, and tongues will cease, and knowledge will be destroyed.","links":[[0,[0]],[1,[1]],[4,[2,3,4]],[2,[5,6,7]],[3,[8]],[5,[9,10]],[6,[11]],[8,[12]],[10,[13,14,15]],[7,[16]],[9,[]],[11,[18,19]],[12,[17]],[13,[20]],[14,[22]],[15,[21]],[16,[23]],[17,[24,26]],[18,[25]],[19,[27]],[20,[28]],[21,[29,30]],[22,[31]],[23,[32]],[24,[33]],[26,[35]],[25,[34]],[27,[36]],[28,[37]],[29,[38]],[30,[39]],[31,[40]],[32,[41,42]],[33,[43]],[34,[44]],[35,[45,46]],[36,[47]],[38,[48]],[37,[49]],[40,[50]],[42,[51,52,53]],[39,[54]],[41,[]],[44,[55,56]],[43,[57]],[45,[58]],[46,[59]],[47,[60,61]],[51,[62]],[53,[63]],[52,[64]],[48,[65,66]],[49,[67]],[50,[68]],[54,[69]],[55,[70]],[56,[71,72]],[58,[73]],[57,[74]],[59,[75,76]],[60,[]],[61,[77]],[63,[78]],[65,[79,80,81]],[62,[82]],[64,[]],[68,[83,84]],[67,[85]],[66,[86]],[69,[87]],[71,[88]],[70,[89]],[73,[90]],[72,[91]],[74,[92]],[75,[93,94]],[76,[95]],[77,[96,97]],[78,[]],[79,[98]],[80,[99,100]],[81,[101,102]],[82,[103,104]],[83,[]],[84,[105]],[85,[106,107]],[86,[]],[87,[]],[88,[108]],[89,[109]],[90,[110,111]],[91,[112]],[92,[113,114]],[93,[]],[94,[115]],[95,[116,117]],[96,[118]],[97,[119]],[98,[120]],[99,[121,122]],[100,[123]],[101,[124,125]],[103,[126,127]],[102,[128,129]],[105,[130]],[104,[131,132]],[107,[133]],[106,[134,135]],[109,[136]],[108,[137,138]],[110,[139]],[111,[140]],[112,[141]],[113,[142]],[114,[143]],[115,[144,145]],[116,[146]],[117,[147]],[118,[148,149]],[119,[150]],[120,[151]],[121,[152,153,154]]]},{"latin":"Fratres: Rememorámini prístinos dies, in quibus illumináti magnum certámen sustinuístis passiónum: et in áltero quidem oppróbriis et tribulatiónibus spectáculum facti: in áltero autem sócii táliter conversántium effécti. Nam et vinctis compássi estis, et rapínam bonórum vestrórum cum gáudio suscepístis, cognoscéntes vos habere meliórem et manéntem substántiam. Nolíte itaque amíttere confidéntiam vestram, quæ magnam habet remuneratiónem. Patiéntia enim vobis necessária est: ut, voluntátem Dei faciéntes, reportétis promissiónem. Adhuc enim módicum aliquántulum, qui ventúrus est, véniet, et non tardábit. Iustus autem meus ex fide vivit.","english":"Brethren: Call to mind the days gone by, in which, after you had been enlightened, you endured a great conflict of sufferings; partly by being made a public spectacle through reproaches and tribulations, and partly by making common cause with those who fared thus. For you both have had compassion on those in prison and have joyfully accepted the plundering of your own goods, knowing that you have a better possession and a lasting one. Do not, therefore, lose your confidence, which has a great reward. For you have need of patience that, doing the will of God, you may receive the promise: For yet a very little while, and He Who is to come, will come, and will not delay. Now My just one lives by faith.","links":[[0,[0]],[1,[1,2,3]],[3,[5]],[2,[4,6,7]],[4,[8]],[5,[9]],[6,[10,11,12,13,14]],[9,[15,16]],[7,[18]],[8,[17,19]],[10,[20,21]],[13,[22]],[19,[23,24,25]],[18,[26,27,28]],[15,[29,30]],[16,[31]],[17,[32]],[21,[33,34]],[26,[35,36]],[23,[37,38]],[25,[39,40,41,42]],[24,[43]],[11,[]],[12,[]],[14,[]],[20,[]],[22,[]],[27,[44]],[28,[46]],[29,[50,51,52,53]],[30,[48,49]],[31,[45,47]],[32,[54]],[38,[55,57]],[37,[56]],[33,[58,59,60]],[35,[61,62]],[34,[63]],[36,[]],[39,[64,65]],[40,[66]],[41,[67]],[42,[68,69,70]],[43,[71]],[44,[72,73]],[45,[74]],[46,[75,76]],[47,[77]],[48,[78]],[49,[80]],[50,[79]],[51,[81]],[53,[82]],[52,[83,84]],[54,[85]],[56,[86]],[57,[87]],[58,[88,89,90]],[55,[91]],[59,[]],[60,[92]],[63,[93]],[61,[94,95]],[62,[96,97]],[64,[98,99,100]],[65,[101,102]],[67,[103]],[66,[104]],[68,[105,107,108]],[69,[106]],[70,[109,110,111]],[71,[112,113,114]],[72,[]],[73,[115,116]],[74,[117]],[75,[119]],[76,[118,120]],[78,[121]],[79,[122]],[77,[123,124]],[82,[125]],[80,[126]],[81,[127]]]},{"latin":"M. Suscípiat Dóminus sacrifícium de mánibus tuis vel meis ad laudem et glóriam nominis sui, ad utilitátem quoque nostram, totiúsque Ecclésiæ suæ sanctæ.","english":"S. May the Lord receive the Sacrifice from thy hands, to the praise and glory of His Name, to our benefit and that of all His holy Church.","links":[[0,[0,3]],[1,[1,2]],[2,[4,5]],[3,[6]],[4,[8]],[5,[7]],[6,[]],[7,[]],[8,[9]],[9,[10,11]],[10,[12]],[11,[13]],[12,[14,16]],[13,[15]],[14,[17]],[15,[19]],[16,[20]],[17,[18]],[18,[21,22,23]],[19,[26]],[20,[24]],[21,[25]]]},{"latin":"Per Dóminum nostrum Iesum Christum, Fílium tuum: qui tecum vivit et regnat in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum.","english":"Through Jesus Christ, thy Son our Lord, Who liveth and reigneth with thee, in the unity of the Holy Ghost, God, world without end.","links":[[0,[0]],[3,[1]],[4,[2]],[5,[3,4]],[2,[5]],[1,[6]],[6,[]],[7,[7]],[9,[8]],[10,[9]],[11,[10]],[8,[11,12]],[12,[13]],[13,[14,15]],[14,[16,17,18]],[15,[19]],[16,[20]],[17,[]],[18,[21]],[19,[22]],[20,[23]]]},{"latin":"Deinde, conversus ad librum, iunctis manibus, dicit:","english":"Then, turning to the book, with hands joined, he says:","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4]],[4,[7]],[5,[5,6]],[6,[8,9]]]},{"latin":"Et pronuntians: Inítium, sive Sequéntia sancti Evangélii, signat librum, et se in fronte, ore et pectore, et legit Evangelium, ut dictum est. Quo finito, respondet Minister: Laus tibi, Christe, et Sacerdos osculatur Evangelium, dicens: per evangelica dicta, ut supra.","english":"And saying, The beginning, or Continuation, of the holy Gospel, he signs the book, and himself on the forehead, mouth, and breast, and reads the Gospel as directed above. This being finished, the server answers, Praise be to Thee, O Christ, and the priest kisses the Gospel book, saying, By the words of the Gospel, as above.","links":[[0,[0]],[1,[1]],[2,[2,3]],[3,[4]],[4,[5]],[5,[8]],[6,[6,7,9]],[7,[10,11]],[8,[12,13]],[9,[14]],[10,[15]],[11,[16]],[12,[17,18]],[13,[19]],[14,[20]],[15,[21]],[16,[22]],[17,[23]],[18,[24,25]],[19,[26]],[[20,21],[27,28]],[22,[29]],[23,[30,31]],[24,[34]],[25,[32,33]],[26,[35,36]],[27,[37,38]],[28,[39,40]],[29,[41]],[30,[42,43]],[31,[44]],[32,[45,46,47]],[33,[48]],[34,[49]],[35,[52,53,54]],[36,[50,51]],[37,[55]],[38,[56]]]},{"latin":"Sequéntia + sancti Evangélii secúndum Lucam.","english":"Continuation ✠ of the Holy Gospel according to Luke","links":[[0,[0]],[1,[3]],[2,[1,2,4]],[3,[5,6]],[4,[7]]]},{"latin":"Sequéntia + sancti Evangélii secúndum Ioánnem","english":"Continuation ✠ of the Holy Gospel according to John","links":[[0,[0]],[1,[3]],[2,[1,2,4]],[3,[5,6]],[4,[7]]]},{"latin":"Sequéntia + sancti Evangélii secúndum Matthǽum","english":"Continuation ✠ of the Holy Gospel according to Matthew","links":[[0,[0]],[1,[3]],[2,[1,2,4]],[3,[5,6]],[4,[7]]]},{"latin":"Qua finita, iunctis manibus, et alternatim cum Ministris, dicit:","english":"This being finished, with hands joined, and alternately with the servers, he says:","links":[[[0,1],[0,1,2]],[2,[5]],[3,[3,4]],[4,[6]],[5,[7]],[6,[8]],[7,[9,10]],[8,[11,12]]]},{"latin":"Deinde in médio altáris stans, immediáte dicit Kýrie, eléison, modo consuéto.","english":"Then, standing at the middle of the altar, the celebrant immediately recites the 'Kyrie eleison' in the usual manner.","links":[[0,[0]],[1,[2]],[2,[3,4]],[3,[5,6,7]],[4,[1]],[5,[10]],[6,[8,9,11]],[7,[12,13]],[8,[14]],[9,[15,16]],[10,[17,18]]]},{"latin":"Kýrie, eléison.","english":"Lord, have mercy.","links":[[0,[0]],[1,[1,2]]]},{"latin":"Christe, eléison.","english":"Christ, have mercy.","links":[[0,[0]],[1,[1,2]]]},{"latin":"℣. Adiutórium nostrum ✠ in nómine Dómini.","english":"P. Our help ✠ is in the Name of the Lord.","links":[[1,[0]],[0,[1]],[2,[2,3]],[3,[4,5]],[4,[6,7,8]]]},{"latin":"℟. Qui fecit cælum et terram.","english":"S. Who made heaven and earth.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]]]},{"latin":"Deinde iunctis manibus profunde inclinatus facit Confessionem.","english":"Then, joining his hands, and humbly bowing down, he says the Confiteor:","links":[[0,[0]],[1,[1]],[2,[2,3]],[3,[5]],[4,[4,6,7]],[5,[8,9]],[6,[10,11]]]},{"latin":"Confíteor Deo omnipoténti, beátæ Maríæ semper Vírgini, beáto Michaéli Archángelo, beáto Ioánni Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus Sanctis, et vobis, fratres: quia peccávi nimis cogitatióne, verbo et ópere: Percutit sibi pectus ter, dicens: mea culpa, mea culpa, mea máxima culpa. Ideo precor beátam Maríam semper Vírginem, beátum Michaélem Archángelum, beátum Ioánnem Baptístam, sanctos Apóstolos Petrum et Paulum, omnes Sanctos, et vos, fratres, oráre pro me ad Dóminum, Deum nostrum.","english":"P. I confess to almighty God, to the blessed Mary ever Virgin, blessed Michael the Archangel, blessed John the Baptist, the holy Apostles Peter and Paul, to all the Saints, and to you, brothers, that I have sinned exceedingly in thought, word, and deed, Here he strikes his breast thrice. through my fault, through my fault, through my most grievous fault. Therefore I beseech the blessed Mary, ever Virgin, blessed Michael the Archangel, blessed John the Baptist, the holy Apostles Peter and Paul, all the Saints, and you, brothers, to pray to the Lord our God for me.","links":[[0,[0,1]],[1,[2,4]],[2,[3]],[3,[5,6,7]],[4,[8]],[5,[9]],[6,[10]],[7,[11]],[8,[12,13]],[9,[14]],[10,[15]],[11,[16,17]],[12,[18]],[13,[19,20]],[14,[21]],[15,[22]],[16,[23]],[17,[24]],[18,[25,26,27]],[19,[28]],[20,[29]],[21,[30,31]],[22,[32]],[23,[33]],[24,[34,35,36]],[25,[37]],[26,[38,39]],[27,[40]],[28,[41]],[29,[42]],[30,[43,44,45]],[31,[46]],[32,[47]],[33,[48]],[34,[]],[35,[50]],[36,[49,51]],[37,[53]],[38,[52,54]],[39,[56]],[40,[57,58]],[41,[55,59]],[42,[60]],[43,[61,62]],[44,[63,64]],[45,[65]],[46,[66]],[47,[67]],[48,[68]],[49,[69,70]],[50,[71]],[51,[72]],[52,[73,74]],[53,[75]],[54,[76,77]],[55,[78]],[56,[79]],[57,[80]],[58,[81]],[59,[82,83]],[60,[84]],[61,[85]],[62,[86]],[63,[87]],[64,[88,89]],[65,[95]],[66,[96]],[67,[90,91]],[68,[92]],[69,[94]],[70,[93]]]},{"latin":"M. Misereátur tui omnípotens Deus, et, dimíssis peccátis tuis, perdúcat te ad vitam ætérnam.","english":"S. May almighty God be merciful to thee, and forgiving thy sins, bring thee to everlasting life.","links":[[0,[0,3,4]],[1,[5,6]],[2,[1]],[3,[2]],[4,[7]],[5,[8]],[6,[10]],[7,[9]],[8,[11]],[9,[12]],[10,[13]],[11,[15]],[12,[14]]]},{"latin":"Sacerdos dicit:","english":"The priest answers:","links":[[0,[0,1]],[1,[2]]]},{"latin":"M. Confíteor Deo omnipoténti, beátæ Maríæ semper Vírgini, beáto Michaéli Archángelo, beáto Ioánni Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus Sanctis, et tibi, pater: quia peccávi nimis cogitatióne, verbo et ópere: mea culpa, mea culpa, mea máxima culpa. Ideo precor beátam Maríam semper Vírginem, beátum Michaélem Archángelum, beátum Ioánnem Baptístam, sanctos Apóstolos Petrum et Paulum, omnes Sanctos, et te, pater, oráre pro me ad Dóminum, Deum nostrum.","english":"S. I confess to almighty God, to the blessed Mary ever Virgin, blessed Michael the Archangel, blessed John the Baptist, the holy Apostles Peter and Paul, to all the Saints, and to you, Father, that I have sinned exceedingly in thought, word, and deed, through my fault, through my fault, through my most grievous fault. Therefore I beseech the blessed Mary, ever Virgin, blessed Michael the Archangel, blessed John the Baptist, the holy Apostles Peter and Paul, all the Saints, and you, Father, to pray to the Lord our God for me.","links":[[0,[0,1]],[1,[2,4]],[2,[3]],[3,[5,6,7]],[4,[8]],[5,[9]],[6,[10]],[7,[11]],[8,[12,13]],[9,[14]],[10,[15]],[11,[16,17]],[12,[18]],[13,[19,20]],[14,[21]],[15,[22]],[16,[23]],[17,[24]],[18,[25,26,27]],[19,[28]],[20,[29]],[21,[30,31]],[22,[32]],[23,[33]],[24,[34,35,36]],[25,[37]],[26,[38,39]],[27,[40]],[28,[41]],[29,[42]],[30,[44]],[31,[43,45]],[32,[47]],[33,[46,48]],[34,[50]],[35,[51,52]],[36,[49,53]],[37,[54]],[38,[55,56]],[39,[57,58]],[40,[59]],[41,[60]],[42,[61]],[43,[62]],[44,[63,64]],[45,[65]],[46,[66]],[47,[67,68]],[48,[69]],[49,[70,71]],[50,[72]],[51,[73]],[52,[74]],[53,[75]],[54,[76,77]],[55,[78]],[56,[79]],[57,[80]],[58,[81]],[59,[82,83]],[60,[89]],[61,[90]],[62,[84,85]],[63,[86]],[64,[88]],[65,[87]]]},{"latin":"Postea Sacerdos, iunctis manibus, facit absolutionem, dicens:","english":"Then the priest, with his hands joined, says:","links":[[0,[0]],[1,[1,2]],[2,[6]],[3,[3,4,5]],[4,[]],[5,[]],[6,[7]]]},{"latin":"S. Misereátur vestri omnípotens Deus, et, dimíssis peccátis vestris, perdúcat vos ad vitam ætérnam.","english":"P. May almighty God be merciful to thee, and forgiving thy sins, bring thee to everlasting life.","links":[[0,[0,3,4]],[1,[5,6]],[2,[1]],[3,[2]],[4,[7]],[5,[8]],[6,[10]],[7,[9]],[8,[11]],[9,[12]],[10,[13]],[11,[15]],[12,[14]]]},{"latin":"Signat se signo crucis, dicens:","english":"Signing himself with the Sign of the Cross, the priest says:","links":[[0,[0]],[1,[1]],[2,[2,3,4]],[3,[5,6,7]],[4,[8,9,10]]]},{"latin":"S. Indulgéntiam, ✠ absolutiónem et remissiónem peccatórum nostrórum tríbuat nobis omnípotens et miséricors Dóminus.","english":"P. May the ✠ almighty and merciful Lord grant us pardon, absolution, and remission of our sins.","links":[[0,[8]],[1,[9]],[2,[10]],[3,[11]],[4,[12,14]],[5,[13]],[6,[0,6]],[7,[7]],[8,[2]],[9,[3]],[10,[4]],[11,[1,5]]]},{"latin":"℣. Deus, tu convérsus vivificábis nos.","english":"P. O God, Thou wilt turn again and quicken us.","links":[[0,[0,1]],[1,[2]],[2,[3,4,5]],[3,[6,7]],[4,[8]]]},{"latin":"℟. Et plebs tua lætábitur in te.","english":"S. And thy people shall rejoice in Thee.","links":[[0,[0]],[1,[2]],[2,[1]],[3,[3,4]],[4,[5]],[5,[6]]]},{"latin":"℣. Osténde nobis, Dómine, misericórdiam tuam.","english":"P. Show us, O Lord, Thy mercy.","links":[[0,[0]],[1,[1]],[2,[2,3]],[3,[5]],[4,[4]]]},{"latin":"℟. Et salutáre tuum da nobis.","english":"S. And grant us Thy salvation.","links":[[0,[0]],[1,[4]],[2,[3]],[3,[1]],[4,[2]]]},{"latin":"℣. Dómine, exáudi oratiónem meam.","english":"P. O Lord, hear my prayer.","links":[[0,[0,1]],[1,[2]],[2,[4]],[3,[3]]]},{"latin":"℟. Et clamor meus ad te véniat.","english":"S. And let my cry come before Thee.","links":[[0,[0]],[1,[3]],[2,[2]],[3,[5]],[4,[6]],[5,[1,4]]]},{"latin":"℣. Dóminus vobíscum.","english":"P. The Lord be with you.","links":[[0,[0,1]],[1,[2,3,4]]]},{"latin":"℟. Et cum spíritu tuo.","english":"S. And with thy spirit.","links":[[0,[0]],[1,[1]],[2,[3]],[3,[2]]]},{"latin":"Et extendens ac iungens manus, clara voce dicit:","english":"Then, extending and joining his hands, he says in a clear voice:","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4,5]],[5,[10]],[6,[11]],[7,[6,7,8,9]]]},{"latin":"Orémus.","english":"Let us pray.","links":[[0,[0,1,2]]]},{"latin":"Et ascendens ad Altare, dicit secreto:","english":"And ascending to the altar, he says secretly:","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4]],[4,[5,6]],[5,[7]]]},{"latin":"Aufer a nobis, quǽsumus, Dómine, iniquitátes nostras: ut ad Sancta sanctórum puris mereámur méntibus introíre. Per Christum, Dóminum nostrum. Amen.","english":"Take away from us our iniquities, we beseech Thee, O Lord, that we may be worthy to enter with pure minds into the Holy of Holies, through Christ our Lord. Amen.","links":[[0,[0,1]],[1,[2]],[2,[3]],[3,[6,7,8]],[4,[9,10]],[5,[5]],[6,[4]],[7,[11]],[8,[21]],[9,[22,23]],[10,[24,25]],[11,[18,19]],[12,[12,13,14,15]],[13,[20]],[14,[16,17]],[15,[26]],[16,[27]],[17,[29]],[18,[28]],[19,[30]]]},{"latin":"Deinde, manibus iunctis super Altare, inclinatus dicit:","english":"His hands joined, and bowing down over the altar, the priest says:","links":[[0,[]],[1,[0,1]],[2,[2,3]],[3,[6]],[4,[4,5]],[5,[7,8]],[6,[9,10,11]]]},{"latin":"Orámus te, Dómine, per mérita Sanctórum tuórum, Osculatur Altare in medio quorum relíquiæ hic sunt, et ómnium Sanctórum: ut indulgére dignéris ómnia peccáta mea. Amen.","english":"We beseech Thee, O Lord, by the merits of Thy Saints, He kisses the sacred stone whose relics are here, and of all the Saints, that Thou wouldst vouchsafe to forgive me all my sins. Amen.","links":[[0,[0,1]],[1,[2]],[2,[3,4]],[3,[5]],[4,[6,7]],[5,[8,10]],[6,[9]],[7,[11,12]],[8,[13,14,15]],[9,[]],[10,[16]],[11,[]],[12,[17]],[13,[19]],[14,[18]],[15,[20]],[16,[21,22]],[17,[23,24]],[18,[25]],[19,[29,30,31]],[20,[26,27,28]],[21,[32]],[22,[34]],[23,[33]],[24,[35]]]},{"latin":"Glória in excélsis Deo. Et in terra pax homínibus bonæ voluntátis.","english":"Glory be to God on high, and on earth peace to men of good will.","links":[[0,[0,1]],[1,[4]],[2,[5]],[3,[2,3]],[4,[6]],[5,[7]],[6,[8]],[7,[9]],[8,[10,11]],[9,[13]],[10,[12,14]]]},{"latin":"Laudámus te.","english":"We praise Thee.","links":[[0,[0,1]],[1,[2]]]},{"latin":"Benedícimus te.","english":"We bless Thee.","links":[[0,[0,1]],[1,[2]]]},{"latin":"Adorámus te.","english":"We adore Thee.","links":[[0,[0,1]],[1,[2]]]},{"latin":"Glorificámus te.","english":"We glorify Thee.","links":[[0,[0,1]],[1,[2]]]},{"latin":"Grátias ágimus tibi propter magnam glóriam tuam.","english":"We give Thee thanks for Thy great glory.","links":[[0,[3]],[1,[0,1]],[2,[2]],[3,[4]],[4,[6]],[5,[7]],[6,[5]]]},{"latin":"Dómine Deus, Rex cæléstis, Deus Pater omnípotens.","english":"O Lord God, heavenly King, God the Father almighty.","links":[[0,[0,1]],[1,[2]],[2,[4]],[3,[3]],[4,[5]],[5,[6,7]],[6,[8]]]},{"latin":"Dómine Fili unigénite, Iesu Christe.","english":"O Lord Jesus Christ, the only begotten Son.","links":[[0,[0,1]],[1,[7]],[2,[4,5,6]],[3,[2]],[4,[3]]]},{"latin":"Dómine Deus, Agnus Dei, Fílius Patris.","english":"O Lord God, Lamb of God, Son of the Father.","links":[[0,[0,1]],[1,[2]],[2,[3]],[3,[4,5]],[4,[6]],[5,[7,8,9]]]},{"latin":"Qui tollis peccáta mundi, miserére nobis.","english":"Who takest away the sins of the world, have mercy on us.","links":[[0,[0]],[1,[1,2]],[2,[3,4]],[3,[5,6,7]],[4,[8,9]],[5,[10,11]]]},{"latin":"Qui tollis peccáta mundi, súscipe deprecatiónem nostram.","english":"Who takest away the sins of the world, receive our prayer.","links":[[0,[0]],[1,[1,2]],[2,[3,4]],[3,[5,6,7]],[4,[8]],[5,[10]],[6,[9]]]},{"latin":"Qui sedes ad déxteram Patris, miserére nobis.","english":"Who sittest at the right hand of the Father, have mercy on us.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4,5]],[4,[6,7,8]],[5,[9,10]],[6,[11,12]]]},{"latin":"Quóniam tu solus Sanctus.","english":"For Thou only art holy.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4]]]},{"latin":"Tu solus Dóminus.","english":"Thou only art the Lord.","links":[[0,[0]],[1,[1]],[2,[2,3,4]]]},{"latin":"Tu solus Altíssimus, Iesu Christe.","english":"Thou only art most high, O Jesus Christ.","links":[[0,[0]],[1,[1]],[2,[2,3,4]],[3,[5,6]],[4,[7]]]},{"latin":"Cum Sancto Spíritu ✠ in glória Dei Patris. Amen.","english":"Together with the Holy Ghost ✠ in the glory of God the Father. Amen.","links":[[0,[0,1]],[1,[3]],[2,[2,4]],[3,[5]],[4,[6,7]],[5,[8,9]],[6,[10,11]],[7,[12]]]},{"latin":"Deinde, conversus ad librum, iunctis manibus, dicit:","english":"Then, turning to the book, with hands joined, he says:","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3,4]],[4,[7]],[5,[5,6]],[6,[8,9]]]},{"latin":"Et pronuntians: Inítium, sive Sequéntia sancti Evangélii, signat librum, et se in fronte, ore et pectore, et legit Evangelium, ut dictum est. Quo finito, respondet Minister: Laus tibi, Christe, et Sacerdos osculatur Evangelium, dicens: per evangelica dicta, ut supra.","english":"And saying, The beginning, or Continuation, of the holy Gospel, he signs the book, and himself on the forehead, mouth, and breast, and reads the Gospel as directed above. This being finished, the server answers, Praise be to Thee, O Christ, and the priest kisses the Gospel book, saying, By the words of the Gospel, as above.","links":[[0,[0]],[1,[1]],[2,[2,3]],[3,[4]],[4,[5]],[5,[8]],[6,[6,7,9]],[7,[10,11]],[8,[12,13]],[9,[14]],[10,[15]],[11,[16]],[12,[17,18]],[13,[19]],[14,[20]],[15,[21]],[16,[22]],[17,[23]],[18,[24,25]],[19,[26]],[20,[27]],[21,[28]],[22,[29]],[23,[30,31]],[24,[34]],[25,[32,33]],[26,[35]],[27,[36,37,38]],[28,[39,40]],[29,[41]],[30,[42,43]],[31,[44]],[32,[45,46,47]],[33,[48]],[34,[49]],[35,[52,53,54]],[36,[50,51]],[37,[55]],[38,[56]]]},{"latin":"℟. Glória tibi, Dómine.","english":"℟. Glory be to Thee, O Lord.","links":[[0,[0,1]],[1,[2,3]],[2,[4,5]]]},{"latin":"℟. Laus tibi, Christe.","english":"℟. Praise be to Thee, O Christ.","links":[[0,[0,1]],[1,[2,3]],[2,[4,5]]]},{"latin":"S. Per Evangélica dicta, deleántur nostra delícta.","english":"S. By the words of the Gospel may our sins be blotted out.","links":[[0,[0]],[1,[3,4,5]],[2,[1,2]],[3,[6,9,10,11]],[4,[7]],[5,[8]]]},{"latin":"Credo in unum Deum, Patrem omnipoténtem, factórem cæli et terræ, visibílium ómnium et invisibílium.","english":"I believe in one God, the Father almighty, Maker of heaven and earth, and of all things, visible and invisible.","links":[[0,[0,1]],[1,[2]],[2,[3]],[3,[4]],[4,[5,6]],[5,[7]],[6,[8]],[7,[9,10]],[8,[11]],[9,[12]],[10,[17]],[11,[13,14,15,16]],[12,[18]],[13,[19]]]},{"latin":"Et in unum Dóminum Iesum Christum, Fílium Dei unigénitum.","english":"And in one Lord Jesus Christ, the only begotten Son of God.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]],[5,[5]],[6,[6,9]],[7,[10,11]],[8,[7,8]]]},{"latin":"Et ex Patre natum ante ómnia sǽcula.","english":"And born of the Father, before all ages.","links":[[0,[0]],[1,[2]],[2,[3,4]],[3,[1]],[4,[5]],[5,[6]],[6,[7]]]},{"latin":"Deum de Deo, Lumen de Lúmine, Deum verum de Deo vero.","english":"God of God: Light of Light: true God of true God.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]],[5,[5]],[6,[7]],[7,[6]],[8,[8]],[9,[10]],[10,[9]]]},{"latin":"Génitum, non factum, consubstantiálem Patri: per quem ómnia facta sunt.","english":"Begotten, not made, consubstantial with the Father, by whom all things were made.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4,5,6]],[5,[7]],[6,[8]],[7,[9,10]],[8,[12]],[9,[11]]]},{"latin":"Qui propter nos hómines et propter nostram salútem descéndit de cælis.","english":"Who, for us men, and for our salvation, came down from heaven.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]],[5,[5]],[6,[6]],[7,[7]],[8,[8,9]],[9,[10]],[10,[11]]]},{"latin":"Hic genuflectitur","english":"Here kneel down.","links":[[0,[0]],[1,[1,2]]]},{"latin":"Et incarnátus est de Spíritu Sancto ex María Vírgine: Et homo factus est.","english":"And became incarnate by the Holy Ghost of the Virgin Mary: and was made man.","links":[[0,[0]],[1,[2]],[2,[1]],[3,[3]],[4,[6]],[5,[4,5]],[6,[7]],[7,[10]],[8,[8,9]],[9,[11]],[10,[14]],[11,[13]],[12,[12]]]},{"latin":"Crucifíxus étiam pro nobis: sub Póntio Piláto passus, et sepúltus est.","english":"He was crucified also for us, suffered under Pontius Pilate, and was buried.","links":[[0,[0,1,2]],[1,[3]],[2,[4]],[3,[5]],[4,[7]],[5,[8]],[6,[9]],[7,[6]],[8,[10]],[9,[12]],[10,[11]]]},{"latin":"Et resurréxit tértia die, secúndum Scriptúras.","english":"And the third day He rose again according to the Scriptures.","links":[[0,[0]],[1,[4,5,6]],[2,[2]],[3,[1,3]],[4,[7,8]],[5,[9,10]]]},{"latin":"Et ascéndit in cælum: sedet ad déxteram Patris.","english":"And ascended into heaven, and sitteth at the right hand of the Father.","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4,5]],[5,[6]],[6,[7,8,9]],[7,[10,11,12]]]},{"latin":"Et íterum ventúrus est cum glória iudicáre vivos et mórtuos: cuius regni non erit finis.","english":"And He shall come again with glory to judge both the living and the dead, of whose kingdom there shall be no end.","links":[[0,[0]],[1,[4]],[2,[1,2,3]],[3,[]],[4,[5]],[5,[6]],[6,[7,8]],[7,[9,10,11]],[8,[12]],[9,[13,14]],[10,[15,16]],[11,[17]],[12,[21]],[13,[18,19,20]],[14,[22]]]},{"latin":"Et in Spíritum Sanctum, Dóminum et vivificántem: qui ex Patre Filióque procédit.","english":"And in the Holy Ghost, the Lord and Giver of Life, proceeding from the Father and the Son.","links":[[0,[0]],[1,[1]],[2,[4]],[3,[2,3]],[4,[5,6]],[5,[7]],[6,[8,9,10]],[7,[]],[8,[12]],[9,[13,14]],[10,[15,16,17]],[11,[11]]]},{"latin":"Qui cum Patre et Fílio simul adorátur et conglorificátur: qui locútus est per Prophétas.","english":"Who together, with the Father and the Son, is adored and glorified: Who spoke by the prophets.","links":[[0,[0]],[1,[2]],[2,[3,4]],[3,[5]],[4,[6,7]],[5,[1]],[6,[8,9]],[7,[10]],[8,[11]],[9,[12]],[10,[13]],[11,[]],[12,[14]],[13,[15,16]]]},{"latin":"Et unam sanctam cathólicam et apostólicam Ecclésiam.","english":"And in one, holy, Catholic and Apostolic Church.","links":[[0,[0]],[1,[1,2]],[2,[3]],[3,[4]],[4,[5]],[5,[6]],[6,[7]]]},{"latin":"Confíteor unum baptísma in remissiónem peccatórum.","english":"I confess one baptism for the remission of sins.","links":[[0,[0,1]],[1,[2]],[2,[3]],[3,[4]],[4,[5,6]],[5,[7,8]]]},{"latin":"Et exspécto resurrectiónem mortuórum.","english":"And I look for the resurrection of the dead.","links":[[0,[0]],[1,[1,2,3]],[2,[4,5]],[3,[6,7,8]]]},{"latin":"Et vitam ventúri sæculi. Amen.","english":"And the life of the world to come. Amen.","links":[[0,[0]],[1,[1,2]],[2,[6,7]],[3,[3,4,5]],[4,[8]]]},{"latin":"Súscipe, sancte Pater, omnípotens ætérne Deus, hanc immaculátam hóstiam, quam ego indígnus fámulus tuus óffero tibi Deo meo vivo et vero, pro innumerabílibus peccátis, et offensiónibus, et neglegéntiis meis, et pro ómnibus circumstántibus, sed et pro ómnibus fidélibus christiánis vivis atque defúnctis: ut mihi, et illis profíciat ad salútem in vitam ætérnam. Amen.","english":"Accept, O holy Father, almighty and eternal God, this unspotted host, which I, Thy unworthy servant, offer unto Thee, my living and true God, for my innumerable sins, offenses, and negligences, and for all here present: as also for all faithful Christians, both living and dead, that it may avail both me and them for salvation unto life everlasting. Amen.","links":[[0,[0]],[1,[1,2]],[2,[3]],[3,[4]],[4,[5,6]],[5,[7]],[6,[8]],[7,[9]],[8,[10]],[9,[11]],[10,[12]],[11,[14]],[12,[15]],[13,[13]],[14,[16]],[15,[17,18]],[16,[23]],[17,[19]],[18,[20]],[19,[21]],[20,[22]],[21,[24]],[22,[25,26]],[23,[27]],[24,[]],[25,[28]],[26,[29]],[27,[30]],[28,[]],[29,[31]],[30,[32]],[31,[33]],[32,[34,35]],[33,[36]],[34,[37]],[35,[38]],[36,[39]],[37,[40]],[38,[41]],[39,[42,43]],[40,[44]],[41,[45]],[42,[46]],[43,[50,51]],[44,[52]],[45,[53]],[46,[47,48,49]],[47,[54]],[48,[55]],[49,[56]],[50,[57]],[51,[58]],[52,[59]]]},{"latin":"Deus, ✠ qui humánæ substántiæ dignitátem mirabíliter condidísti, et mirabílius reformásti: da nobis per huius aquæ et vini mystérium, eius divinitátis esse consórtes, qui humanitátis nostræ fíeri dignátus est párticeps, Iesus Christus, Fílius tuus, Dóminus noster: Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus: per ómnia sǽcula sæculórum. Amen.","english":"O God, who, in creating human nature, didst wonderfully dignify it, and still more wonderfully restore it, grant that, by the Mystery of this water and wine, we may be made partakers of His divine nature, who vouchsafed to be made partaker of our human nature, even Jesus Christ our Lord, Thy Son, who with Thee, liveth and reigneth in the unity of the Holy Ghost, God: world without end. Amen.","links":[[0,[0,1]],[1,[2]],[2,[5]],[3,[6]],[4,[7,9,10]],[5,[8]],[6,[3,4]],[7,[11]],[8,[12,13,14]],[9,[15,16]],[10,[17,18]],[11,[27]],[12,[19]],[13,[23]],[14,[24]],[15,[25]],[16,[26]],[17,[20,21,22]],[18,[33]],[19,[34,35]],[20,[28,29,30]],[21,[31,32]],[22,[36]],[23,[44,45]],[24,[43]],[25,[38,39,40]],[[26,27],[37]],[28,[41,42]],[29,[46,47]],[30,[48]],[31,[52]],[32,[51]],[33,[50]],[34,[49]],[35,[53]],[36,[54,55]],[37,[56]],[38,[57]],[39,[58]],[40,[59]],[41,[60,61,62]],[42,[63,65]],[43,[64]],[44,[66]],[[45,46,47,48],[67,68,69]],[49,[70]]]},{"latin":"Offérimus tibi, Dómine, cálicem salutáris, tuam deprecántes cleméntiam: ut in conspéctu divínæ maiestátis tuæ, pro nostra et totíus mundi salúte, cum odóre suavitátis ascéndat. Amen.","english":"We offer unto Thee, O Lord, the chalice of salvation, beseeching Thy clemency, that it may ascend before Thy divine Majesty, as a sweet savor, for our salvation, and for that of the whole world. Amen.","links":[[0,[0,1]],[1,[2,3]],[2,[4,5]],[3,[6,7]],[4,[8,9]],[5,[11]],[6,[10]],[7,[12]],[8,[13]],[[9,10],[17]],[11,[19]],[12,[20]],[13,[18]],[14,[25]],[15,[26]],[16,[28]],[17,[29,31,32,33]],[18,[34]],[19,[27,30]],[20,[21,22]],[21,[24]],[22,[23]],[23,[14,15,16]],[24,[35]]]},{"latin":"Deinde facit signum crucis cum Calice, et illum ponit super Corporale, et Palla cooperit: tum, iunctis manibus super Altare, aliquantulum inclinatus, dicit:","english":"The priest makes the Sign of the Cross with the chalice, places it upon the corporal, and covers it with the pall. Then, with his hands joined upon the Altar, and slightly bowing down, he says:","links":[[0,[0,1]],[1,[2]],[2,[3,4]],[3,[5,6,7]],[4,[8]],[5,[9,10]],[6,[]],[7,[12]],[8,[11]],[9,[13]],[10,[14,15]],[11,[16]],[12,[19,20,21]],[13,[17,18]],[14,[22]],[15,[26]],[16,[23,24,25]],[17,[27]],[18,[28,29]],[19,[30,31]],[20,[32,33]],[21,[34,35]]]},{"latin":"In spíritu humilitátis et in ánimo contríto suscipiámur a te, Dómine: et sic fiat sacrifícium nostrum in conspéctu tuo hódie, ut pláceat tibi, Dómine Deus.","english":"Accept us, O Lord, in the spirit of humility and contrition of heart, and grant that the sacrifice which we offer this day in Thy sight may be pleasing to Thee, O Lord God.","links":[[0,[4]],[1,[5,6]],[2,[7,8]],[3,[9]],[4,[]],[5,[12]],[6,[10,11]],[7,[0,1]],[8,[]],[9,[]],[10,[2,3]],[11,[13]],[12,[]],[13,[14,15]],[14,[16,17]],[15,[18,19,20]],[16,[23]],[17,[25]],[18,[24]],[19,[21,22]],[20,[]],[21,[26,27,28]],[22,[29,30]],[23,[31,32]],[24,[33]]]},{"latin":"Veni, sanctificátor omnípotens ætérne Deus: Benedicit Oblata, prosequendo: et béne ✠ dic hoc sacrifícium, tuo sancto nómini præparátum.","english":"Come, O almighty and eternal God, the Sanctifier, and bless ✠ this Sacrifice, prepared for the glory of Thy holy Name.","links":[[0,[0]],[1,[6,7]],[2,[1,2]],[3,[3,4]],[4,[5]],[5,[]],[6,[]],[7,[]],[8,[8]],[[9,10],[9]],[11,[10]],[12,[11]],[13,[17]],[14,[18]],[15,[13,14,15,16,19]],[16,[12]]]},{"latin":"Lavábo inter innocéntes manus meas: et circúmdabo altáre tuum, Dómine: Ut áudiam vocem laudis, et enárrem univérsa mirabília tua. Dómine, diléxi decórem domus tuæ et locum habitatiónis glóriæ tuæ. Ne perdas cum ímpiis, Deus, ánimam meam, et cum viris sánguinum vitam meam: In quorum mánibus iniquitátes sunt: déxtera eórum repléta est munéribus. Ego autem in innocéntia mea ingréssus sum: rédime me et miserére mei. Pes meus stetit in dirécto: in ecclésiis benedícam te, Dómine.","english":"I will wash my hands among the innocent: and I will compass Thine altar, O Lord, That I may hear the voice of praise: and tell of all Thy wonderous works. I have loved, O Lord, the beauty of Thy house and the place where Thy glory dwelleth. Take not away my soul, O God, with the wicked: nor my life with blood-thirsty men. In whose hands are iniquities, their right hand is filled with gifts. But I have walked in my innocence: redeem me, and have mercy on me. My foot hath stood in the direct way, in the churches I will bless Thee, O Lord.","links":[[0,[0,1,2]],[1,[5]],[2,[6,7]],[3,[4]],[4,[3]],[5,[8]],[6,[9,10,11]],[7,[13]],[8,[12]],[9,[14,15]],[10,[16]],[11,[17,18,19]],[12,[20,21]],[13,[22,23]],[14,[24]],[15,[25,26]],[16,[27]],[17,[29,30]],[18,[28]],[19,[34,35]],[20,[31,32,33]],[21,[36,37,38]],[22,[40]],[23,[39]],[24,[41]],[25,[42,43]],[26,[44,47]],[27,[46]],[28,[45]],[29,[49]],[30,[48,50]],[31,[55,56]],[32,[57]],[33,[53,54]],[34,[52]],[35,[51]],[36,[58]],[37,[61]],[38,[64]],[39,[62,63]],[40,[60]],[41,[59]],[42,[65]],[43,[66]],[44,[67]],[45,[69]],[46,[68]],[47,[71,72]],[48,[70]],[49,[74]],[50,[73]],[51,[75,76]],[52,[78]],[53,[77]],[54,[81]],[55,[83]],[56,[82]],[57,[80]],[58,[79]],[59,[84]],[60,[85]],[61,[86]],[62,[87,88]],[63,[89,90]],[64,[92]],[65,[91]],[66,[93,94]],[67,[95]],[68,[96,97,98]],[69,[99]],[70,[100,101]],[71,[102,103,104]],[72,[105]],[73,[106,107]]]},{"latin":"Súscipe, sancta Trínitas, hanc oblatiónem, quam tibi offérimus ob memóriam passiónis, resurrectiónis, et ascensiónis Iesu Christi, Dómini nostri: et in honórem beátæ Maríæ semper Vírginis, et beáti Ioannis Baptistæ, et sanctórum Apostolórum Petri et Pauli, et istórum et ómnium Sanctórum: ut illis profíciat ad honórem, nobis autem ad salútem: et illi pro nobis intercédere dignéntur in cælis, quorum memóriam ágimus in terris. Per eúndem Christum, Dóminum nostrum. Amen.","english":"Receive, O holy Trinity, this oblation which we make to Thee, in memory of the Passion, Resurrection and Ascension of our Lord Jesus Christ, and in honor of Blessed Mary, ever Virgin, blessed John the Baptist, the holy Apostles Peter and Paul, and of all the Saints, that it may avail unto their honor and our salvation, and may they vouchsafe to intercede for us in heaven, whose memory we celebrate on earth. Through the same Christ our Lord. Amen.","links":[[0,[0]],[1,[1,2]],[2,[3]],[3,[4]],[4,[5]],[5,[6]],[6,[10]],[7,[7,8,9]],[8,[11]],[9,[12,13]],[10,[14,15]],[11,[16]],[12,[17]],[13,[18,19]],[14,[22]],[15,[23]],[16,[21]],[17,[20]],[18,[24]],[19,[25]],[20,[26,27]],[21,[28]],[22,[29]],[23,[30]],[24,[31]],[25,[]],[26,[32]],[27,[33]],[28,[34,35]],[29,[]],[30,[36,37]],[31,[38]],[32,[39]],[33,[40]],[34,[41]],[35,[]],[36,[]],[37,[42]],[38,[43,44]],[39,[45,46]],[40,[47]],[41,[52]],[42,[48,49,50]],[43,[51]],[44,[53]],[45,[55]],[46,[54]],[47,[]],[48,[56]],[49,[57]],[50,[59]],[51,[63]],[52,[64]],[53,[62]],[54,[58,60,61]],[55,[65]],[56,[66]],[57,[67]],[58,[68]],[59,[69,70]],[60,[71]],[61,[72]],[62,[73]],[63,[74,75]],[64,[76]],[65,[78]],[66,[77]],[67,[79]]]},{"latin":"Súscipe, sancta Trínitas, hanc oblatiónem, quam tibi offérimus ob memóriam passiónis, resurrectiónis, et ascensiónis Iesu Christi, Dómini nostri: et in honórem beátæ Maríæ semper Vírginis, et beáti Ioánnis Baptístæ, et sanctórum Apostolórum Petri et Pauli, et istórum et ómnium Sanctórum: ut illis profíciat ad honórem, nobis autem ad salútem: et illi pro nobis intercédere dignéntur in cœlis, quorum memóriam ágimus in terris. Per eúndem Christum, Dóminum nostrum. Amen.","english":"Receive, O holy Trinity, this oblation which we make to Thee, in memory of the Passion, Resurrection and Ascension of our Lord Jesus Christ, and in honor of Blessed Mary, ever Virgin, blessed John the Baptist, the holy Apostles Peter and Paul, and of all the Saints, that it may avail unto their honor and our salvation, and may they vouchsafe to intercede for us in heaven, whose memory we celebrate on earth. Through the same Christ our Lord. Amen.","links":[[0,[0]],[1,[1,2]],[2,[3]],[3,[4]],[4,[5]],[5,[6]],[6,[10]],[7,[7,8,9]],[8,[11]],[9,[12,13]],[10,[14,15]],[11,[16]],[12,[17]],[13,[18,19]],[14,[22]],[15,[23]],[16,[21]],[17,[20]],[18,[24]],[19,[25]],[20,[26,27]],[21,[28]],[22,[29]],[23,[30]],[24,[31]],[25,[]],[26,[32]],[27,[33]],[28,[34,35]],[29,[]],[30,[36,37]],[31,[38]],[32,[39]],[33,[40]],[34,[41]],[35,[]],[36,[]],[37,[42]],[38,[43,44]],[39,[45,46]],[40,[47]],[41,[52]],[42,[48,49,50]],[43,[51]],[44,[53]],[45,[55]],[46,[54]],[47,[]],[48,[56]],[49,[57]],[50,[59]],[51,[63]],[52,[64]],[53,[62]],[54,[58,60,61]],[55,[65]],[56,[66]],[57,[67]],[58,[68]],[59,[69,70]],[60,[71]],[61,[72]],[62,[73]],[63,[74,75]],[64,[76]],[65,[78]],[66,[77]],[67,[79]]]},{"latin":"Oráte, fratres: ut meum ac vestrum sacrifícium acceptábile fiat apud Deum Patrem omnipoténtem.","english":"Brethren, pray that my Sacrifice and yours may be acceptable to God the Father almighty.","links":[[0,[1]],[1,[0]],[2,[2]],[3,[3]],[4,[5]],[5,[6]],[6,[4]],[7,[9]],[8,[7,8]],[9,[10]],[10,[11,12]],[11,[13]],[12,[14]]]},{"latin":"Sacerdos submissa voce dicit:","english":"The priest answers in a low voice:","links":[[0,[0,1]],[1,[5]],[2,[4,6]],[3,[2,3]]]},{"latin":"Sursum corda.","english":"Lift up your hearts.","links":[[0,[0,1]],[1,[2,3]]]},{"latin":"Habémus ad Dóminum.","english":"We have lifted them up to the Lord.","links":[[0,[0,1,2,3,4]],[1,[5]],[2,[6,7]]]},{"latin":"Grátias agámus Dómino, Deo nostro.","english":"Let us give thanks to the Lord our God.","links":[[0,[3]],[1,[0,1,2]],[2,[4,5,6]],[3,[8]],[4,[7]]]},{"latin":"Dignum et iustum est.","english":"It is meet and just.","links":[[0,[2]],[1,[3]],[2,[4]],[3,[0,1]]]},{"latin":"Sanctus, Sanctus, Sanctus Dóminus, Deus Sábaoth. Pleni sunt cæli et terra glória tua. Hosánna in excélsis. Benedíctus, qui venit in nómine Dómini. Hosánna in excélsis.","english":"Holy, Holy, Holy, Lord God of Sabaoth! Heaven and earth are full of Thy glory! Hosanna in the highest! Blessed is He that cometh in the Name of the Lord! Hosanna in the highest!","links":[[0,[0]],[1,[1]],[2,[2]],[3,[3]],[4,[4]],[5,[5,6]],[6,[11]],[7,[10]],[8,[7]],[9,[8]],[10,[9]],[11,[12,14]],[12,[13]],[13,[15]],[14,[16,17]],[15,[18]],[16,[19,20,21]],[17,[22]],[18,[23]],[19,[24,25]],[20,[26]],[21,[27,28,29]],[22,[30]],[23,[31,32]],[24,[33]]]},{"latin":"de Nativitate Domini","english":"Nativity","links":[[[0,1,2],[0]]]},{"latin":"de Beata Maria Virgine","english":"Blessed Virgin","links":[[[0,1,2,3],[0,1]]]},{"latin":"de Epiphania Domini","english":"Epiphany","links":[[[0,1,2],[0]]]},{"latin":"Communis","english":"Common","links":[[[0],[0]]]},{"latin":"de Apostolis","english":"of Apostles","links":[[[0,1],[0,1]]]},{"latin":"de sanctissima Trinitate","english":"Holy Trinity","links":[[[0,1,2],[0,1]]]},{"latin":"de Quadragesima","english":"Lent","links":[[[0,1],[0]]]},{"latin":"de S. Ioseph","english":"St. Joseph","links":[[[0,1,2],[0,1]]]},{"latin":"de Sancta Cruce","english":"Holy Cross","links":[[[0,1,2],[0,1]]]},{"latin":"Præfatio paschalis","english":"Preface for Easter","links":[[[0,1],[0,1,2]]]},{"latin":"Paschalis","english":"Easter","links":[[[0],[0]]]},{"latin":"de Ascensione Domini","english":"Ascension","links":[[[0,1,2],[0]]]},{"latin":"de Spiritu Sancto","english":"Holy Spirit","links":[[[0,1,2],[0,1]]]},{"latin":"de Sanctissimo Sacramento","english":"Blessed Sacrament","links":[[[0,1,2],[0,1]]]},{"latin":"de sacratissimo Cordis Iesu","english":"Sacred Heart","links":[[[0,1,2,3],[0,1]]]},{"latin":"de S. Ioannis Baptistæ","english":"St. John the Baptist","links":[[[0,1,2,3],[0,1,2,3]]]},{"latin":"de D.N. Iesu Christi Rege","english":"Christ the King","links":[[[0,1,2,3,4,5],[0,1,2]]]},{"latin":"Defunctorum","english":"Dead","links":[[[0],[0]]]},{"latin":"in Dedicatione Ecclesiae","english":"Dedication of a Church","links":[[[0,1,2],[0,1,2,3]]]},{"latin":"de Adventu","english":"Advent","links":[[[0,1],[0]]]},{"latin":"Vere dignum et iustum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: per Christum, Dóminum nostrum. Per quem maiestátem tuam laudant Angeli, adórant Dominatiónes, tremunt Potestátes. Cæli cælorúmque Virtútes ac beáta Séraphim sócia exsultatióne concélebrant. Cum quibus et nostras voces ut admítti iubeas, deprecámur, súpplici confessione dicéntes:","english":"It is truly meet and just, and profitable unto salvation, that we should at all times, and in all places, give thanks to Thee, O Holy Lord, Father Almighty, eternal God, through Christ, our Lord. Through whom the Angels praise Thy Majesty, the Dominions adore it, the Powers are in awe. Which the heavens and the hosts of heaven together with the blessed Seraphim joyfully do magnify. And do Thou command that it be permitted us to join with them in confessing Thee, while we say with lowly praise:","links":[[[0,1,2,3,4],[0,1,2,3,4,5]],[[5,6,7],[6,7,8,9]],[[8],[11]],[[14],[10,12,20]],[[13],[21]],[[9],[22,23]],[[10],[13,14,15]],[[11],[16]],[[12],[17,18,19]],[[15],[26]],[[16],[24,25]],[[17],[27]],[[18],[28]],[[19],[29]],[[20],[30]],[[21],[31]],[[22],[32]],[[23],[34]],[[24],[33]],[[25],[35]],[[26],[36]],[[27,28],[40,41]],[[29],[39]],[[30],[37,38]],[[31],[44,45]],[[32],[42,43]],[[33],[48,49,50]],[[34],[46,47]],[[35,36,37],[51,52,53,54,55,56,57,58]],[[38],[59,60]],[[41,42],[64]],[[39],[61,62]],[[40],[63]],[[43],[65,66]],[[44,45],[78,79]],[[46],[67]],[[47,48],[75]],[[49,50],[71,72,73,74,76,77]],[[51],[68,69,70]],[[52],[80,81,82]],[[53],[87]],[[54],[88]],[[55],[83,84,85,86]]]},{"latin":"Te ígitur, clementíssime Pater, per Iesum Christum, Fílium tuum, Dóminum nostrum, súpplices rogámus, ac pétimus, osculatur Altare et, iunctis manibus ante pectus, dicit: uti accépta hábeas et benedícas, Signat ter super Hostiam et Calicem simul, dicens: hæc ✠ dona, hæc ✠ múnera, hæc ✠ sancta sacrifícia illibáta, Extensis manibus prosequitur: in primis, quæ tibi offérimus pro Ecclésia tua sancta cathólica: quam pacificáre, custodíre, adunáre et régere dignéris toto orbe terrárum: una cum fámulo tuo Papa nostro Leone et Antístite nostro nomen Episcopi in casu ablativus et ómnibus orthodóxis, atque cathólicæ et apostólicæ fídei cultóribus.","english":"We therefore, humbly pray and beseech Thee, most merciful Father, through Jesus Christ; Thy Son, our Lord, He kisses the altar that Thou wouldst vouchsafe to accept and bless He joins his hands and signs the oblation thrice with the Sign of the Cross. these ✠ gifts, these ✠ presents, these ✠ holy unspotted Sacrifices, Then extending his hands, he proceeds: which in the first place we offer Thee for Thy holy Catholic Church to which vouchsafe to grant peace, as also to preserve, unite, and govern it throughout the world, together with Thy servant Leo our Pope, and name of Bishop our Bishop, and all orthodox believers and professors of the Catholic and Apostolic Faith.","links":[[[1],[1]],[[11],[2]],[[12],[0,3]],[[13],[4]],[[14],[5]],[[0],[6]],[[2],[7,8]],[[3],[9]],[[4],[10]],[[5],[11]],[[6],[12]],[[8],[13]],[[7],[14]],[[10],[15]],[[9],[16]],[[15],[17,18]],[[16],[19,20]],[[23],[21]],[[25],[22,23,24]],[[24],[25,26]],[[26],[27]],[[27],[28]],[[28,29,30,31,32,33,34,35],[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]],[[36],[44]],[[37],[45]],[[38],[46]],[[39],[47]],[[40],[48]],[[41],[49]],[[43],[50]],[[42],[51]],[[44],[52,53]],[[45],[54,55]],[[46],[56,57]],[[47],[59,60]],[[48],[61,62]],[[49],[58]],[[50],[65]],[[51],[63,64]],[[52],[66]],[[53],[70]],[[54],[67]],[[55],[68]],[[56],[69]],[[57],[71,72]],[[63],[73]],[[58],[74,75,76]],[[59],[77,78,79,80]],[[60],[81]],[[61],[82]],[[62],[83,84]],[[64],[85]],[[65],[86]],[[66],[87]],[[67],[88]],[[68],[89]],[[69],[91]],[[70],[90]],[[71],[94]],[[72],[93]],[[73],[92]],[[74],[95]],[[75,76,77,78,79,80,81],[96,97,98,99,100]],[[82],[101]],[[83],[102]],[[84],[103,104]],[[85],[105]],[[90],[106,107,108]],[[86],[109]],[[87],[110]],[[88],[111]],[[89],[112]]]},{"latin":"Te ígitur, clementíssime Pater, per Iesum Christum, Fílium tuum, Dóminum nostrum, súpplices rogámus, ac pétimus, (osculatur Altare et, iunctis manibus ante pectus, dicit:) uti accépta hábeas et benedícas, (Signat ter super Hostiam et Calicem simul, dicens:) hæc ✠ dona, hæc ✠ múnera, hæc ✠ sancta sacrifícia illibáta, (Extensis manibus prosequitur:) in primis, quæ tibi offérimus pro Ecclésia tua sancta cathólica: quam pacificáre, custodíre, adunáre et régere dignéris toto orbe terrárum: una cum fámulo tuo Papa nostro N.p et Antístite nostro N.b et ómnibus orthodóxis, atque cathólicæ et apostólicæ fídei cultóribus.","english":"We therefore, humbly pray and beseech Thee, most merciful Father, through Jesus Christ; Thy Son, our Lord, (He kisses the altar) that Thou wouldst vouchsafe to accept and bless (He joins his hands and signs the oblation thrice with the Sign of the Cross.) these ✠ gifts, these ✠ presents, these ✠ holy unspotted Sacrifices, (Then extending his hands, he proceeds:) which in the first place we offer Thee for Thy holy Catholic Church to which vouchsafe to grant peace, as also to preserve, unite, and govern it throughout the world, together with Thy servant N.p our Pope, and N.b our Bishop, and all orthodox believers and professors of the Catholic and Apostolic Faith.","links":[[[1],[1]],[[11],[2]],[[12],[0,3]],[[13],[4]],[[14],[5]],[[0],[6]],[[2],[7,8]],[[3],[9]],[[4],[10]],[[5],[11]],[[6],[12]],[[8],[13]],[[7],[14]],[[10],[15]],[[9],[16]],[[15],[17,18]],[[16],[19,20]],[[23],[21]],[[25],[22,23,24]],[[24],[25,26]],[[26],[27]],[[27],[28]],[[28,29,30,31,32,33,34,35],[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]],[[36],[44]],[[37],[45]],[[38],[46]],[[39],[47]],[[40],[48]],[[41],[49]],[[43],[50]],[[42],[51]],[[44],[52,53]],[[45],[54,55]],[[46],[56,57]],[[47],[59,60]],[[48],[61,62]],[[49],[58]],[[50],[65]],[[51],[63,64]],[[52],[66]],[[53],[70]],[[54],[67]],[[55],[68]],[[56],[69]],[[57],[71,72]],[[63],[73]],[[58],[74,75,76]],[[59],[77,78,79,80]],[[60],[81]],[[61],[82]],[[62],[83,84]],[[64],[85]],[[65],[86]],[[66],[87]],[[67],[88]],[[68],[89]],[[69],[91]],[[70],[90]],[[71],[95]],[[72],[94]],[[73],[92]],[[74],[93]],[[75],[96]],[[76],[100]],[[77],[99]],[[78],[97]],[[79],[98]],[[80],[101]],[[81],[102]],[[82],[103,104]],[[83],[105]],[[84],[109]],[[85],[110]],[[86],[111]],[[87],[112]],[[88],[106,107,108]]]},{"latin":"Meménto, Dómine, famulórum famularúmque tuarum N. et N. Iungit manus, orat aliquantulum pro quibus orare intendit: deinde manibus extensis prosequitur: et ómnium circumstántium, quorum tibi fides cógnita est et nota devótio, pro quibus tibi offérimus: vel qui tibi ófferunt hoc sacrifícium laudis, pro se suísque ómnibus: pro redemptióne animárum suárum, pro spe salútis et incolumitátis suæ: tibíque reddunt vota sua ætérno Deo, vivo et vero.","english":"Be mindful, O Lord, of Thy servants and handmaidens, N. and N. The priest joins his hands and prays silently for those for whom he intends to pray. Then extending his hands, he proceeds: and of all here present, whose faith and devotion are known unto Thee, for whom we offer, or who offer up to Thee, this sacrifice of praise for themselves, their families and friends, for the redemption of their souls, for the health and salvation they hope for; and who now pay their vows to Thee, the everlasting, living and true God.","links":[[[0],[0,1]],[[1],[2,3]],[[2,4],[4,5,6]],[[3],[7,8]],[[5],[9]],[[6],[10]],[[7],[11]],[[8],[12,13,14]],[[9],[15,16]],[[10],[17,18]],[[11],[19]],[[12],[20,21,22]],[[13],[23]],[[15],[24,25]],[[14],[26,27]],[[16],[28]],[[18],[29]],[[17],[30,31]],[[19],[32,33]],[[20],[34]],[[21],[35,36]],[[22],[37,38]],[[23],[39]],[[24],[45,46]],[[25],[40]],[[26,29],[44]],[[27],[43]],[[28],[41]],[[30],[42]],[[31],[47]],[[32],[48]],[[33,34],[49,50]],[[35],[51]],[[36],[52]],[[37,38],[53,54,55,56]],[[39],[57]],[[40],[58]],[[41],[59,60]],[[42],[61]],[[43],[62]],[[44,45],[63,64,65,66]],[[46],[67]],[[47],[68,69]],[[48],[72]],[[49],[70,71]],[[50],[73]],[[51],[78,79,80]],[[52],[77]],[[53],[76]],[[54],[75]],[[55],[74]],[[56],[87,88]],[[57],[81,82,83,84]],[[58],[86]],[[59],[85]],[[60],[90]],[[61],[89,94]],[[62],[91]],[[63],[92]],[[64],[93]]]},{"latin":"et beatórum Apostolórum ac Mártyrum tuórum, Petri et Pauli, Andréæ, Iacóbi, Ioánnis, Thomæ, Iacóbi, Philíppi, Bartholomǽi, Matthǽi, Simónis et Thaddǽi: Lini, Cleti, Cleméntis, Xysti, Cornélii, Cypriáni, Lauréntii, Chrysógoni, Ioánnis et Pauli, Cosmæ et Damiáni: et ómnium Sanctórum tuórum; quorum méritis precibúsque concédas, ut in ómnibus protectiónis tuæ muniámur auxílio. Iungit manus Per eúndem Christum, Dóminum nostrum. Amen.","english":"and of the blessed Apostles and Martyrs Peter and Paul, Andrew, James, John, Thomas, James, Philip, Bartholomew, Matthew, Simon, and Thaddeus; Linus, Cletus, Clement, Xystus, Cornelius, Cyprian, Lawrence, Chrysogonus, John and Paul, Cosmas and Damian, and of all Thy Saints, through whose merits and prayers, grant that we may in all things be defended by the help of Thy protection. He joins his hands. Through the same Christ our Lord. Amen.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[4]],[[3],[5]],[[4],[6]],[[6],[7]],[[7],[8]],[[8],[9]],[[9],[10]],[[10],[11]],[[11],[12]],[[12],[13]],[[13],[14]],[[14],[15]],[[15],[16]],[[16],[17]],[[17],[18]],[[18],[19]],[[19],[20]],[[20],[21]],[[21],[22]],[[22],[23]],[[23],[24]],[[24],[25]],[[25],[26]],[[26],[27]],[[27],[28]],[[28],[29]],[[29],[30]],[[30],[31]],[[31],[32]],[[32],[33]],[[33],[34]],[[34],[35]],[[35],[37]],[[36],[39]],[[37],[36,38]],[[38],[40,41]],[[39],[42]],[[40],[43,44]],[[41],[45]],[[42],[46]],[[43],[49]],[[44],[50,51]],[[45],[59]],[[46],[58]],[[47],[47,48,52,53,54]],[[48],[55,56,57]],[[49],[60,61]],[[50],[62,63]],[[51],[64,65]],[[52],[66]],[[53],[67]],[[54],[69]],[[55],[68]],[[56],[70]]]},{"latin":"Hanc ígitur oblatiónem servitútis nostræ, sed et cunctæ famíliæ tuæ,","english":"We therefore beseech Thee, O Lord, graciously to accept this oblation of our service, as also of Thy whole family;","links":[[[0],[9]],[[1],[1]],[[2],[10]],[[3],[13]],[[4],[12]],[[5],[14]],[[6],[15]],[[7],[18]],[[8],[19]],[[9],[17]]]},{"latin":"quǽsumus, Dómine, ut placátus accípias: diésque nostros in tua pace dispónas, atque ab ætérna damnatióne nos éripi, et in electórum tuórum iúbeas grege numerári. Iungit manus Per Christum, Dóminum nostrum. Amen.","english":"and to dispose our days in Thy peace, preserve us from eternal damnation, and rank us in the number of Thine Elect. He joins his hands. Through the same Christ our Lord. Amen.","links":[[[5],[0,4]],[[10],[1,2]],[[6],[3]],[[7],[5]],[[8],[6]],[[9],[7]],[[16],[8]],[[15],[9]],[[12],[10]],[[13],[11]],[[14],[12]],[[17],[13]],[[21],[14]],[[23],[15]],[[18],[16]],[[22],[17,18]],[[19],[19,21]],[[20],[20]],[[24],[22,23]],[[25],[24,25]],[[26],[26,27,28]],[[27],[29]],[[28],[31]],[[29],[30]],[[30],[32]]]},{"latin":"quam tibi offérimus pro his quoque, quos regeneráre dignatus es ex aqua et Spíritu Sancto, tríbuens eis remissiónem omnium peccatórum,","english":"which we make unto Thee on behalf of these whom Thou hast vouchsafed to bring to a new birth by water and the Holy Ghost, granting them remission of all their sins:","links":[[[0],[0]],[[1],[3,4]],[[2],[1,2]],[[3],[5,6,7]],[[4],[8]],[[6],[9]],[[7],[13,14,15,16,17,18]],[[8,9],[10,11,12]],[[10],[19]],[[11],[20]],[[12],[21]],[[13,14],[22,23,24]],[[15],[25]],[[16],[26]],[[17],[27,28]],[[18],[29,30]],[[19],[31]]]},{"latin":"HOC EST ENIM CORPUS MEUM.","english":"FOR THIS IS MY BODY.","links":[[[0],[1]],[[1],[2]],[[2],[0]],[[3],[4]],[[4],[3]]]},{"latin":"Hanc ígitur oblatiónem servitútis nostræ, sed et cunctæ famíliæ tuæ, quǽsumus, Dómine, ut placátus accípias: diésque nostros in tua pace dispónas, atque ab ætérna damnatióne nos éripi, et in electórum tuórum iúbeas grege numerári. Iungit manus Per Christum, Dóminum nostrum. Amen.","english":"We therefore beseech Thee, O Lord, graciously to accept this oblation of our service, as also of Thy whole family; and to dispose our days in Thy peace, preserve us from eternal damnation, and rank us in the number of Thine Elect. He joins his hands. Through the same Christ our Lord. Amen.","links":[[[0],[9]],[[1],[1]],[[2],[10]],[[3],[13]],[[4],[12]],[[5],[14]],[[6],[15]],[[7],[18]],[[8],[19]],[[9],[17]],[[10],[0,2]],[[11],[4,5]],[[12,13,14],[6,7,8]],[[15],[20,24]],[[20],[21,22]],[[16],[23]],[[17],[25]],[[18],[26]],[[19],[27]],[[26],[28]],[[25],[29]],[[22],[30]],[[23],[31]],[[24],[32]],[[27],[33]],[[31],[34]],[[33],[35]],[[28],[36]],[[32],[37,38]],[[29],[39,41]],[[30],[40]],[[34],[42,43]],[[35],[44,45]],[[36],[46,47,48]],[[37],[49]],[[38],[51]],[[39],[50]],[[40],[52]]]},{"latin":"Quibus verbis prolatis, statim Hostiam consecratam genuflexus adorat: surgit, ostendit populo, reponit super Corporale, et genuflexus iterum adorat: nec amplius pollices et indices disiungit, nisi quando Hostia tractanda est, usque ad ablutionem digitorum.","english":"After pronouncing the words of the Consecration, the priest, kneeling, adores the Sacred Host; rising, he elevates It. -- Look up at the Sacred Host, with faith, piety, and love, saying: \"My Lord and my God.\" -- and then placing It on the corporal, again adores It. After this he never disjoins his fingers and thumbs, except when he is to take the Host, until after the washing of his fingers.","links":[[[0,1,2],[0,1,3]],[[4],[13]],[[5],[12]],[[6],[9]],[[7],[10]],[[8],[14]],[[14],[35]],[[11],[37]],[[12],[39]],[[13],[41]],[[16],[42]],[[17],[43]],[[18,19],[45,46,47,48]],[[23],[49]],[[20],[53]],[[21],[52]],[[22],[51]],[[24],[54]],[[25],[55]],[[26],[61]],[[27,28],[57,58,59]],[[29,30],[62,63]],[[31],[65]],[[32],[68]]]},{"latin":"Símili modo postquam cenátum est, Ambabus manibus accipit Calicem, accípiens et hunc præclárum Cálicem in sanctas ac venerábiles manus suas: item Caput inclinat, item tibi grátias agens, Sinistra tenens Calicem, dextera signat super eum, bene ✠ díxit, dedítque discípulis suis, dicens: Accípite, et bíbite ex eo omnes.","english":"In like manner, after He had supped, He takes the chalice with both his hands. taking also this excellent chalice into His holy and venerable hands He takes the chalice in his left hand, and with his right he signs it with the Sign of the Cross. He blessed ✠ , and gave it to His disciples, saying: Take and drink ye all of this,","links":[[[0,1],[0,1,2]],[[2],[3]],[[3,4],[4,5,6]],[[7],[8]],[[8],[10]],[[5,6],[11,12,13,14]],[[9],[15]],[[10],[16]],[[11],[17]],[[12],[18]],[[13],[19]],[[14],[20]],[[15],[22]],[[16],[23]],[[17],[24]],[[18],[25]],[[19],[21]],[[28],[27]],[[29],[29]],[[27],[32,33]],[[30],[37]],[[31],[39]],[[33],[40]],[[34,35],[48]],[[36],[49,50]],[[37],[54]],[[38],[53]],[[39],[55]],[[40],[56]],[[41],[57]],[[42],[58]],[[45],[60]],[[43],[61]],[[44],[62]]]},{"latin":"HIC EST ENIM CALIX SANGUINIS MEI, NOVI ET ÆTERNI TESTAMENTI: MYSTERIUM FIDEI: QUI PRO VOBIS ET PRO MULTIS EFFUNDETUR IN REMISSIONEM PECCATORUM.","english":"FOR THIS IS THE CHALICE OF MY BLOOD OF THE NEW AND ETERNAL TESTAMENT, THE MYSTERY OF FAITH; WHICH SHALL BE SHED FOR YOU AND FOR MANY UNTO THE REMISSION OF SINS.","links":[[[2],[0]],[[0],[1]],[[1],[2]],[[3],[4]],[[4],[7]],[[5],[6]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[13]],[[10],[15]],[[11],[17]],[[12],[18]],[[13],[22]],[[14],[23]],[[15],[24]],[[16],[25]],[[17],[26]],[[18],[19,20,21]],[[19],[27]],[[20],[29]],[[21],[31]]]},{"latin":"Quibus verbis prolatis, deponit Calicem super Corporale, et dicens secrete:","english":"After the elevation of the Chalice, the priest says in a low voice:","links":[[[8],[8]],[[9],[9,10,11,12]],[[4],[5]]]},{"latin":"Hæc quotiescúmque fecéritis, in mei memóriam faciétis.","english":"As often as ye do these things, ye shall do them in remembrance of Me.","links":[[[0],[5,6]],[[1],[0,1,2]],[[2],[3,4]],[[3],[11]],[[4],[14]],[[5],[12]],[[6],[7,8,9,10]]]},{"latin":"Genuflexus adorat: surgit, ostendit populo, deponit, cooperit, et genuflexus iterum adorat.","english":"The priest kneels and adores the Precious Blood; rising, he elevates the Chalice, and setting it down he covers it and adores it again.","links":[[[0],[2]],[[1],[4]],[[2],[8]],[[5],[14,16]],[[6],[18]],[[7],[20]],[[9],[23]],[[10],[21]]]},{"latin":"Unde et mémores, Dómine, nos servi tui, sed et plebs tua sancta, eiúsdem Christi Fílii tui, Dómini nostri, tam beátæ passiónis, nec non et ab ínferis resurrectiónis, sed et in cælos gloriósæ ascensiónis: offérimus præcláræ maiestáti tuæ de tuis donis ac datis, Iungit manus, et signat ter super Hostiam, et Calicem simul, dicens: Hóstiam ✠ puram, Hóstiam ✠ sanctam, Hóstiam ✠ immaculátam, Signat semel super Hostiam, dicens: Panem ✠ sanctum vitæ ætérnæ, et semel super Calicem, dicens: et Cálicem ✠ salútis perpétuæ.","english":"Wherefore, O Lord, we Thy servants, as also Thy holy people, calling to mind the blessed Passion of the same Christ, Thy Son, our Lord, and also His Resurrection from the dead and His glorious Ascension into heaven: do offer unto Thy most excellent Majesty of Thine own gifts, bestowed upon us, He joins his hands and signs thrice the Host and Chalice with the Sign of the Cross. a pure ✠ Host, a holy ✠ Host, an unspotted ✠ Host, He signs the Host and the Chalice, with the Sign of the Cross. the holy ✠ Bread of eternal life, and the Chalice ✠ of everlasting salvation.","links":[[[0],[0]],[[1,2],[11,12,13]],[[3],[1,2]],[[4],[3]],[[5],[5]],[[6],[4]],[[7,8],[6,7]],[[9],[10]],[[10],[8]],[[11],[9]],[[12],[19]],[[13],[20]],[[14],[22]],[[15],[21]],[[16],[24]],[[17],[23]],[[19],[15]],[[20],[16]],[[21,22,23],[25,26]],[[24],[29]],[[25],[30,31]],[[26],[28]],[[27,28],[32]],[[29],[36]],[[30],[37]],[[31],[34]],[[32],[35]],[[33],[38,39]],[[34],[42,43]],[[35],[44]],[[36],[41]],[[37],[45]],[[38],[46]],[[39],[48]],[[41],[49]],[[42],[53]],[[43],[55]],[[44],[56]],[[45],[57]],[[46],[58]],[[48],[60]],[[49],[61]],[[50],[62]],[[53],[71]],[[54],[70]],[[55],[74]],[[56],[73]],[[57],[77]],[[58],[76]],[[59],[79]],[[62],[81]],[[64],[93]],[[65],[92]],[[66],[96]],[[67],[95]],[[73],[97]],[[74],[99]],[[75],[102]],[[76],[101]]]},{"latin":"Supra quæ propítio ac seréno vultu respícere dignéris: et accépta habére, sicúti accépta habére dignátus es múnera púeri tui iusti Abel, et sacrifícium Patriárchæ nostri Abrahæ: et quod tibi óbtulit summus sacérdos tuus Melchísedech, sanctum sacrifícium, immaculátam hóstiam.","english":"Upon which vouchsafe to look with a propitious and serene countenance, and to accept them, as Thou wert graciously pleased to accept the gifts of Thy just servant Abel, and the sacrifice of our patriarch Abraham, and that which Thy high priest Melchisedech offered to Thee, a holy sacrifice, an unspotted victim.","links":[[[0,1],[0,1]],[[2],[7]],[[3],[8]],[[4],[9]],[[5],[10]],[[6],[3,4]],[[7],[2]],[[8],[11]],[[9,10],[12,13]],[[11],[15]],[[14,15],[16,17,18,19]],[[12,13],[20,21]],[[16],[23]],[[17],[27]],[[18],[25]],[[19],[26]],[[20],[28]],[[21],[29]],[[22],[31]],[[23],[34]],[[24],[33]],[[25],[35]],[[26],[36]],[[27],[37,38]],[[28],[44,45]],[[29],[43]],[[30],[40]],[[31],[41]],[[32],[39]],[[33],[42]],[[34],[47]],[[35],[48]],[[36],[50]],[[37],[51]]]},{"latin":"Súpplices te rogámus, omnípotens Deus: iube hæc perférri per manus sancti Angeli tui in sublíme altáre tuum, in conspéctu divínæ maiestátis tuæ: ut, quotquot Osculatur Altare, ex hac altáris participatióne sacrosánctum Fílii tui Iungit manus, et signat semel super Hostiam, et semel super Calicem, Cor ✠ pus, et Sán ✠ guinem sumpsérimus, Seipsum signat, dicens: omni benedictióne cælésti et grátia repleámur. Iungit manus. Per eúndem Christum, Dóminum nostrum. Amen.","english":"We most humbly beseech Thee, almighty God, command these offerings to be borne by the hands of Thy holy Angels to Thine altar on high, in the sight of Thy divine majesty, that as many He kisses the altar. as shall partake of the most holy He joins his hand, and signs the Host and the Chalice with the Sign of the Cross. Body ✠ and Blood ✠ of Thy Son He signs himself with the Sign of the Cross. at this altar, may be filled with every heavenly grace and blessing. Through the same Christ our Lord. Amen.","links":[[[0],[2]],[[2],[0,3]],[[1],[4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8]],[[7],[11,12]],[[8],[13]],[[9],[15]],[[10],[18]],[[11],[19]],[[12],[17]],[[13],[20]],[[14],[24]],[[15],[22]],[[16],[21]],[[17],[25]],[[18],[27]],[[19],[30]],[[20],[31]],[[21],[29]],[[22],[32]],[[23],[33,34]],[[24],[36]],[[25],[38]],[[27],[79]],[[28],[80]],[[30],[44,45]],[[31],[68]],[[32],[67]],[[33],[47]],[[34],[49]],[[35],[50]],[[36],[51]],[[39],[53]],[[40],[54]],[[43],[56]],[[44,45],[63]],[[46],[64]],[[47,48],[65]],[[49],[39,40,41]],[[50],[71]],[[51],[70]],[[53],[85]],[[54],[89]],[[55],[86]],[[56],[88]],[[57],[87]],[[58],[81,82,83]],[[61],[90]],[[62],[92]],[[63],[93]],[[64],[95]],[[65],[94]],[[66],[96]]]},{"latin":"Meménto étiam, Dómine, famulórum famularúmque tuárum N. et N., qui nos præcessérunt cum signo fídei, et dórmiunt in somno pacis. Iungit manus, orat aliquántulum pro iis defunctis, pro quibus orare intendit, deinde extensis manibus prosequitur: Ipsis, Dómine, et ómnibus in Christo quiescéntibus locum refrigérii, lucis, et pacis, ut indúlgeas, deprecámur. Iungit manus, et caput inclinat, dicens: Per eúndem Christum, Dóminum nostrum. Amen.","english":"Remember also, O Lord, Thy servants and handmaids N. and N., who are gone before us with the sign of faith, and rest in the sleep of peace. He joins his hands and prays for such of the dead as he intends to pray for, then extending his hands he proceeds: To these, O Lord, and to all that rest in Christ, grant, we beseech Thee, a place of refreshment, light, and peace; He joins his hands, and bows his head: Through the same Christ our Lord. Amen.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[5]],[[4],[6,7]],[[5],[4]],[[6],[8]],[[7],[9]],[[8],[10]],[[9],[11]],[[11],[12,13,14]],[[10],[15]],[[12],[16]],[[13],[18]],[[14],[20]],[[15],[21]],[[16],[22]],[[17],[23]],[[18],[25]],[[19],[27]],[[20],[28,29]],[[21],[31]],[[22],[33]],[[24],[34]],[[25],[35]],[[26],[38]],[[27],[44]],[[28],[39]],[[29],[43]],[[30],[41]],[[31],[45]],[[32],[48]],[[33],[46]],[[34],[49,50]],[[35],[51,52]],[[36],[53,54]],[[37],[55]],[[38],[57]],[[39],[60]],[[40],[61]],[[41],[58,59]],[[42],[67]],[[43],[69]],[[44],[70]],[[45],[71]],[[46],[72]],[[48],[62]],[[49],[63,64,65]],[[50],[73,74]],[[51],[76]],[[52],[77]],[[53],[80]],[[54],[78]],[[56],[81]],[[57],[83]],[[58],[84]],[[59],[86]],[[60],[85]],[[61],[87]]]},{"latin":"Súpplices te rogámus, omnípotens Deus: iube hæc perférri per manus sancti Angeli tui in sublíme altáre tuum, in conspéctu divínæ maiestátis tuæ: ut, quotquot Osculatur Altare, ex hac altáris participatióne sacrosánctum Fílii tui Iungit manus, et signat semel super Hostiam, et semel super Calicem, Cor ✠ pus, et Sán ✠ guinem sumpsérimus, Seipsum signat, dicens: omni benedictióne coelésti et grátia repleámur. Iungit manus. Per eúndem Christum, Dóminum nostrum. Amen.","english":"We most humbly beseech Thee, almighty God, command these offerings to be borne by the hands of Thy holy Angels to Thine altar on high, in the sight of Thy divine majesty, that as many He kisses the altar. as shall partake of the most holy He joins his hand, and signs the Host and the Chalice with the Sign of the Cross. Body ✠ and Blood ✠ of Thy Son He signs himself with the Sign of the Cross. at this altar, may be filled with every heavenly grace and blessing. Through the same Christ our Lord. Amen.","links":[[[0],[2]],[[2],[0,3]],[[1],[4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8]],[[7],[11,12]],[[8],[13]],[[9],[15]],[[10],[18]],[[11],[19]],[[12],[17]],[[13],[20]],[[14],[24]],[[15],[22]],[[16],[21]],[[17],[25]],[[18],[27]],[[19],[30]],[[20],[31]],[[21],[29]],[[22],[32]],[[23],[33,34]],[[24],[36]],[[25],[38]],[[27],[79]],[[28],[80]],[[30],[44,45]],[[31],[68]],[[32],[67]],[[33],[47]],[[34],[49]],[[35],[50]],[[36],[51]],[[39],[53]],[[40],[54]],[[43],[56]],[[44,45],[63]],[[46],[64]],[[47,48],[65]],[[49],[39,40,41]],[[50],[71]],[[51],[70]],[[53],[85]],[[54],[89]],[[55],[86]],[[56],[88]],[[57],[87]],[[58],[81,82,83]],[[61],[90]],[[62],[92]],[[63],[93]],[[64],[95]],[[65],[94]],[[66],[96]]]},{"latin":"Nobis quoque peccatóribus Extensis manibus ut prius, secrete prosequitur: fámulis tuis, de multitúdine miseratiónum tuárum sperántibus, partem áliquam et societátem donáre dignéris, cum tuis sanctis Apóstolis et Martýribus: cum Ioánne, Stéphano, Matthía, Bárnaba, Ignátio, Alexándro, Marcellíno, Petro, Felicitáte, Perpétua, Agatha, Lúcia, Agnéte, Cæcília, Anastásia, et ómnibus Sanctis tuis: intra quorum nos consórtium, non æstimátor mériti, sed véniæ, quǽsumus, largítor admítte. Iungit manus. Per Christum, Dóminum nostrum.","english":"To us also, Thy sinful servants, confiding in the multitude of Thy mercies, vouchsafe to grant some part and fellowship with Thy holy Apostles and Martyrs, with John, Stephen, Matthias, Barnabas, Ignatius, Alexander, Marcellinus, Peter, Felicitas, Perpetua, Agatha, Lucy, Agnes, Cecilia, Anastasia, and with all Thy Saints, into whose company we beseech Thee to admit us, not weighing our merits, but pardoning our offenses. He joins his hands. Through Christ our Lord.","links":[[[0],[1]],[[1],[2]],[[2],[4,5]],[[11],[10]],[[12],[9]],[[13],[12]],[[14],[11]],[[15],[6]],[[16],[17]],[[17],[16]],[[18],[18]],[[19],[19]],[[20],[15]],[[21],[13]],[[22],[20]],[[23],[21]],[[24],[22]],[[25],[23]],[[26],[24]],[[27],[25]],[[28],[26]],[[29],[27]],[[30],[28]],[[31],[29]],[[32],[30]],[[33],[31]],[[34],[32]],[[35],[33]],[[36],[34]],[[37],[35]],[[38],[36]],[[39],[37]],[[40],[38]],[[41],[39]],[[42],[40]],[[43],[41]],[[44],[42]],[[45],[44]],[[46],[46]],[[47],[45]],[[48],[47]],[[49],[48]],[[51],[49]],[[50],[55]],[[57],[50,51,52]],[[59],[54]],[[52],[56]],[[53],[57]],[[54],[59]],[[55],[60]],[[58],[61]],[[56],[63]],[[60],[65]],[[61],[67]],[[62],[68]],[[63],[69]],[[64],[71]],[[65],[70]]]},{"latin":"Discooperit Calicem, genuflectit, accipit Hostiam inter pollicem et indicem manus dexteræ: et tenens sinistra Calicem, cum Hostia signat ter a labio ad labium Calicis, dicens:","english":"He uncovers the Chalice, and genuflects: then taking the Host in his right hand, and holding the Chalice in his left, he signs with the Sign of the Cross three times across the Chalice, saying:","links":[[[0],[1]],[[1],[3]],[[2],[5]],[[3],[7]],[[4],[9]],[[9],[13]],[[10],[12]],[[11],[14]],[[12],[15]],[[13],[20]],[[14],[17]],[[17],[22]],[[18],[29,30]],[[19,20,21,22],[31]],[[23],[33]],[[24],[34]]]},{"latin":"Per Ip ✠ sum, et cum Ip ✠ so, et in Ip ✠ so, Cum ipsa Hostia signat bis inter se et Calicem, dicens: est tibi Deo Patri ✠ omnipoténti, in unitáte Spíritus ✠ Sancti, Elevans parum Calicem cum Hostia, dicit: omnis honor, et glória.","english":"By Him, ✠ and with Him, ✠ and in Him ✠ He signs twice between the Chalice and his breast. is to Thee, God the Father ✠ almighty, in the unity of the Holy ✠ Ghost, He elevates a little the Chalice with the Host. all honor and glory.","links":[[[0],[0]],[[1,2],[1]],[[3],[2]],[[4],[3]],[[5,6],[4]],[[7],[5]],[[8],[6]],[[9,10],[7]],[[14],[9]],[[15],[10]],[[16],[11]],[[17],[15,16]],[[18],[14]],[[19],[13]],[[21],[17]],[[22],[18,19]],[[23],[20]],[[24],[22]],[[25],[23]],[[26],[24]],[[27],[26]],[[28],[30]],[[29],[29]],[[30],[32]],[[31],[33,34]],[[32],[36]],[[33],[37]],[[34],[39]],[[36],[40]],[[37],[41]],[[38],[42]],[[39],[43]]]},{"latin":"ponit Hostiam, Calicem Palla cooperit, genuflectit, surgit, et dicit intellegibili voce vel cantat:","english":"Replacing the Host, and covering the Chalice, he kneels down, and rising again, he says or sings:","links":[[[0],[0]],[[1],[2]],[[2],[6]],[[4],[4]],[[5],[8]],[[6],[11]],[[7],[10]],[[8],[14]],[[11],[15]],[[12],[16]]]},{"latin":"Per ómnia sǽcula sæculórum.","english":"P. World without end.","links":[[[0,1,2,3],[0,1,2]]]},{"latin":"℟. Amen.","english":"S. Amen.","links":[[[0],[0]]]},{"latin":"Per Ip ✠ sum, et cum Ip ✠ so, et in Ip ✠ so, (Cum ipsa Hostia signat bis inter se et Calicem, dicens:) est tibi Deo Patri omnipóténti, in unitáte Spíritus ✠ Sancti,","english":"By Him, ✠ and with Him, ✠ and in Him ✠ (He signs twice between the Chalice and his breast.) is to Thee, God the Father ✠ almighty, in the unity of the Holy ✠ Ghost,","links":[[[0],[0]],[[1,2],[1]],[[3],[2]],[[4],[3]],[[5,6],[4]],[[7],[5]],[[8],[6]],[[9,10],[7]],[[14],[9]],[[15],[10]],[[16],[11]],[[17],[15,16]],[[18],[14]],[[19],[13]],[[21],[17]],[[22],[18,19]],[[23],[20]],[[24],[22]],[[25],[23]],[[26],[24]],[[27],[26]],[[28],[30]],[[29],[29]]]},{"latin":"Elevans parum Calicem cum Hostia, dicit:","english":"He elevates a little the Chalice with the Host.","links":[[[0],[1]],[[1],[2,3]],[[2],[5]],[[3],[6]],[[4],[8]]]},{"latin":"omnis honor, et glória.","english":"all honor and glory.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Iungit manus. Orémus: Præcéptis salutáribus móniti, et divína institutióne formáti audémus dícere:Extendit manus. Pater noster, qui es in cælis. Sanctificétur nomen tuum. Advéniat regnum tuum. Fiat volúntas tua, sicut in cælo et in terra. Panem nostrum quotidiánum da nobis hódie. Et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris. Et ne nos indúcas in tentatiónem: ℟. Sed líbera nos a malo. S. Sacerdos secrete dicit : Amen.","english":"Let us pray. Instructed by Thy saving precepts, and following Thy divine institution, we are bold to say: Our Father, who art in heaven, hallowed be Thy Name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation. M. But deliver us from evil. P. Amen.","links":[[[2],[0,1,2]],[[5],[3]],[[4],[6]],[[3],[7]],[[6],[8]],[[9],[9]],[[7],[11]],[[8],[12]],[[10],[13,14,15]],[[11],[16,17]],[[15],[18]],[[14],[19]],[[16],[20]],[[17],[21]],[[18],[22]],[[19],[23]],[[20],[24,25]],[[22],[26]],[[21],[27]],[[25],[28]],[[24],[29]],[[23],[30]],[[28],[31]],[[27],[32]],[[26],[33,34]],[[33],[35]],[[34],[36]],[[29],[37]],[[30],[40]],[[31],[41]],[[36],[46]],[[37],[47]],[[35],[48]],[[38],[42]],[[39],[43]],[[40],[44,45]],[[41],[49]],[[42],[50]],[[43],[51]],[[45],[52]],[[44],[53]],[[46],[54]],[[48],[55]],[[49],[56]],[[50],[57,58,59,60]],[[51],[61]],[[52],[62]],[[55],[63]],[[54],[64]],[[53],[65]],[[56],[66]],[[57],[67]],[[58],[69]],[[59],[70]],[[60],[71]],[[61],[72]],[[62],[73]],[[67],[75]]]},{"latin":"Orémus: Præcéptis salutáribus móniti, et divína institutione formati audemus dicere: Pater noster, qui es in cælis, Sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in coelo et in terra. Panem nostrum quotidianum da nobis hodie. Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem: ℟. Sed libera nos a malo. S. Amen.","english":"Let us pray. Instructed by Thy saving precepts, and following Thy divine institution, we are bold to say: Our Father, who art in heaven, hallowed be Thy Name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation. M. But deliver us from evil. P. Amen.","links":[[[0],[0,1,2]],[[3],[3]],[[2],[6]],[[1],[7]],[[4],[8]],[[7],[9]],[[5],[11]],[[6],[12]],[[8],[13,14,15]],[[9],[16,17]],[[11],[18]],[[10],[19]],[[12],[20]],[[13],[21]],[[14],[22]],[[15],[23]],[[16],[24,25]],[[18],[26]],[[17],[27]],[[21],[28]],[[20],[29]],[[19],[30]],[[24],[31]],[[23],[32]],[[22],[33,34]],[[29],[35]],[[30],[36]],[[25],[37]],[[26],[40]],[[27],[41]],[[32],[46]],[[33],[47]],[[31],[48]],[[34],[42]],[[35],[43]],[[36],[44,45]],[[37],[49]],[[38],[50]],[[39],[51]],[[41],[52]],[[40],[53]],[[42],[54]],[[44],[55]],[[45],[56]],[[46],[57,58,59,60]],[[47],[61]],[[48],[62]],[[51],[63]],[[50],[64]],[[49],[65]],[[52],[66]],[[53],[67]],[[54],[69]],[[55],[70]],[[56],[71]],[[57],[72]],[[58],[73]],[[60],[75]]]},{"latin":"Líbera nos, quǽsumus, Dómine, ab ómnibus malis, prætéritis, præséntibus et futúris: et intercedénte beáta et gloriósa semper Vírgine Dei Genetríce María, cum beátis Apóstolis tuis Petro et Paulo, atque Andréa, et ómnibus Sanctis, Signat se cum Patena a fronte ad pectus, da propítius pacem in diébus nostris: Patenam osculatur, ut, ope misericórdiæ tuæ adiúti, et a peccáto simus semper líberi et ab omni perturbatióne secúri.","english":"Deliver us, we beseech Thee, O Lord, from all evils, past, present, and to come; and by the intercession of the Blessed and glorious ever Virgin Mary, Mother of God, and of the holy Apostles, Peter and Paul, and of Andrew, and of all the Saints, He signs himself with the paten, and then kisses it. mercifully grant peace in our days, that through the assistance of Thy mercy we may be always free from sin, and secure from all disturbance.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[5,6]],[[4],[7]],[[5],[8]],[[6],[9]],[[7],[10]],[[8],[11]],[[9],[12]],[[10],[13,14]],[[11],[15]],[[12],[18]],[[13],[21]],[[14],[22]],[[15],[23]],[[16],[24]],[[17],[25]],[[20],[26]],[[19],[27]],[[18],[28,29]],[[21],[30,31,32]],[[22],[33]],[[23],[34]],[[25],[35]],[[26],[36]],[[27],[37]],[[28],[38,39]],[[29],[40]],[[30],[41,42]],[[31],[43]],[[32],[45]],[[42],[56]],[[41],[57]],[[43],[58]],[[44],[59]],[[46],[60]],[[45],[61]],[[49],[62]],[[50],[65]],[[52],[67]],[[51],[68]],[[57],[69,70,71]],[[58],[72]],[[59],[73]],[[55],[74]],[[56],[75]],[[60],[76]],[[64],[77]],[[61],[78]],[[62],[79]],[[63],[80]]]},{"latin":"Submittit Patenam Hostiæ, discooperit Calicem, genuflectit, surgit, accipit Hostiam, et eam super Calicem tenens utraque manu, frangit per medium, dicens:","english":"He places the paten under the Host, uncovers the Chalice, and makes a genuflection; rising, he takes the Host and breaks It in the middle over the Chalice, saying:","links":[[[0],[0,1,4]],[[1],[3]],[[2],[6]],[[3],[7]],[[4],[9]],[[5],[11,12,13]],[[6],[14,15]],[[7],[16]],[[8],[18]],[[9],[19]],[[10],[21]],[[16],[20]],[[17],[22]],[[18],[24]],[[11],[25]],[[12],[27]],[[19],[28]]]},{"latin":"Per eúndem Dóminum nostrum Iesum Christum, Fílium tuum.","english":"Through the same Jesus Christ, Thy Son, our Lord.","links":[[[0],[0]],[[1],[2]],[[4],[3]],[[5],[4]],[[6],[6]],[[7],[5]],[[2],[8]],[[3],[7]]]},{"latin":"Et mediam partem, quam in dextera manu tenet, ponit super Patenam. Deinde ex parte, quæ in sinistra remanserat, frangit particulam, dicens:","english":"He puts the Part which is in his right hand upon the paten, and breaks a Particle from the other Part in his left hand, saying:","links":[[[2],[3]],[[3],[4]],[[7],[5]],[[4],[6]],[[5],[8]],[[6],[9]],[[8],[0,1]],[[9],[10]],[[10],[12]],[[18],[14]],[[19],[16]],[[12],[17]],[[17],[19]],[[13],[20]],[[15],[21]],[[16],[23]],[[20],[25]]]},{"latin":"Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus.","english":"Who with Thee in the unity of the Holy Ghost liveth and reigneth God,","links":[[[0],[0]],[[1],[1,2]],[[2],[10]],[[3],[11]],[[4],[12]],[[5],[3]],[[6],[5]],[[7],[9]],[[8],[8]],[[9],[13]]]},{"latin":"Aliam mediam partem, quam in sinistra manu habet, adiungit mediæ super Patenam positæ, et particulam parvam dextera retinens super Calicem, quem sinistra per nodum infra cuppam tenet, dicit intellegibili voce vel cantat:","english":"He places the Half which is in his left hand on the paten, and holding the Particle which he broke off in his right hand, and the Chalice in his left, he says:","links":[[[2],[3]],[[3],[4]],[[4],[6]],[[5],[8]],[[6],[9]],[[7],[5]],[[8],[1]],[[10],[10]],[[11],[12]],[[13],[13]],[[14],[16]],[[16],[23,24]],[[17],[19,20]],[[19],[27]],[[21],[30]],[[27],[31,32]]]},{"latin":"℣. Per ómnia sǽcula sæculórum.","english":"P. World without end.","links":[[[0,1,2,3],[0,1,2]]]},{"latin":"℟. Amen.","english":"S. Amen.","links":[[[0],[0]]]},{"latin":"Cum ipsa particula signat ter super Calicem, dicens:","english":"The priest makes the Sign of the Cross with the Particle over the Chalice, saying:","links":[[[0],[8]],[[2],[10]],[[3],[0,1,2,4,7]],[[5],[11]],[[6],[13]],[[7],[14]]]},{"latin":"Pax Dómini sit semper vobíscum.","english":"P. The peace ✠ of the Lord be ✠ always with ✠ you.","links":[[[0],[1]],[[1],[2,3,4]],[[2],[5]],[[3],[6]],[[4],[7,8]]]},{"latin":"℟. Et cum spíritu tuo.","english":"S. And with thy spirit.","links":[[[0],[0]],[[1],[1]],[[2],[3]],[[3],[2]]]},{"latin":"Pacis osculum non datur.","english":"The kiss of peace is not given.","links":[[[0],[2,3]],[[1],[1]],[[2],[5]],[[3],[4,6]]]},{"latin":"Hæc commíxtio, et consecrátio Córporis et Sánguinis Dómini nostri Iesu Christi, fiat accipiéntibus nobis in vitam ætérnam. Amen.","english":"May this mixture and consecration of the Body and Blood of our Lord Jesus Christ be to us who receive it effectual unto eternal life. Amen.","links":[[[0],[1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[6,7]],[[5],[8]],[[6],[9]],[[7],[12]],[[8],[11]],[[9],[13]],[[10],[14]],[[11],[0,15]],[[12],[18,19]],[[13],[16,17]],[[14],[22]],[[15],[24]],[[16],[23]],[[17],[25]]]},{"latin":"Cooperit Calicem, genuflectit, surgit, et inclinatus Sacramento, iunctis manibus, et ter pectus percutiens, intellegibili voce dicit:","english":"He covers the Chalice, genuflects and rises; than bowing down and striking his breast thrice, he says:","links":[[[0],[0,1]],[[1],[3]],[[2],[4]],[[3],[6]],[[4],[5]],[[5],[8,9]],[[9],[10]],[[10],[14]],[[11],[13]],[[12],[11]],[[15],[15,16]]]},{"latin":"Agnus Dei, qui tollis peccáta mundi: miserére nobis.","english":"Lamb of God, who takest away the sins of the world, have mercy on us.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4,5]],[[4],[7]],[[5],[8,9,10]],[[6],[11,12]],[[7],[13,14]]]},{"latin":"Agnus Dei, qui tollis peccáta mundi: dona nobis pacem.","english":"Lamb of God, who takest away the sins of the world, grant us peace.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4,5]],[[4],[7]],[[5],[8,9,10]],[[6],[11]],[[7],[12]],[[8],[13]]]},{"latin":"Panem cæléstem accípiam, et nomen Dómini invocábo.","english":"I will take the Bread of heaven, and will call upon the Name of the Lord.","links":[[[0],[4]],[[1],[5,6]],[[2],[0,1,2]],[[3],[7]],[[4],[12]],[[5],[15]],[[6],[8,9,10]]]},{"latin":"Deinde parum inclinatus, accipit ambas partes Hostiæ inter pollicem et indicem sinistræ manus, et Patenam inter eundem indicem et medium supponit, et dextera tribus vicibus percutiens pectus, elata aliquantulum voce, ter dicit devote et humiliter:","english":"Slightly inclining, he takes both halves of the Host between the thumb and forefinger of his left hand, and the paten between the same forefinger and the middle one; then striking his breast with his right hand, and raising his voice a little, he says three times devoutly and humbly:","links":[[[0],[29]],[[1],[0]],[[2],[1]],[[3],[2,3]],[[4],[4]],[[5],[5]],[[6],[8]],[[7],[9]],[[8],[11]],[[9],[12]],[[10],[13]],[[11],[16]],[[12],[17]],[[13],[18]],[[14],[20]],[[15],[21]],[[16],[23]],[[17],[24]],[[18],[25]],[[19],[27]],[[21],[37]],[[22],[33,34,35,36]],[[23],[45]],[[24],[46]],[[25],[30]],[[26],[32]],[[27],[38]],[[28],[41,42]],[[29],[40]],[[31],[43,44]],[[32],[47]],[[33],[48]],[[34],[49]]]},{"latin":"℣. Dómine, non sum dignus, Et secrete prosequitur: ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea.","english":"℣. Lord, I am not worthy that Thou shouldst enter under my roof; say but the word, and my soul shall be healed.","links":[[[0],[0]],[[1],[3]],[[2],[1,2]],[[3],[4]],[[7],[5]],[[8],[6,7,8]],[[9],[9]],[[10],[11]],[[11],[10]],[[12],[13]],[[14],[12]],[[15],[15]],[[16],[16]],[[17],[19,20,21]],[[18],[18]],[[19],[17]]]},{"latin":"Corpus Dómini nostri Iesu Christi custódiat ánimam meam in vitam ætérnam. Amen.","english":"The Body of our Lord Jesus Christ preserve my soul unto life everlasting. Amen.","links":[[[0],[0,1]],[[1],[4]],[[2],[3]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[9]],[[7],[8]],[[8],[10]],[[9],[11]],[[10],[12]],[[11],[13]]]},{"latin":"Et se inclinans, reverenter sumit ambas partes Hostiæ: quibus sumptis, deponit Patenam super Corporale, et erigens se iungit manus, et quiescit aliquantulum in meditatione Sanctissimi Sacramenti.","english":"He then reverently receives both halves of the Host, joins his hands, and meditates a short time.","links":[[[3],[2]],[[4],[0,3]],[[5],[4]],[[6],[5]],[[7],[8]],[[14],[12]],[[17],[9]],[[18],[11]],[[20],[13]],[[21],[14,15,16]]]},{"latin":"Dómine Iesu Christe, qui dixísti Apóstolis tuis: Pacem relínquo vobis, pacem meam do vobis: ne respícias peccáta mea, sed fidem Ecclésiæ tuæ; eámque secúndum voluntátem tuam pacificáre et coadunáre dignéris: Qui vivis et regnas Deus per ómnia sǽcula sæculórum. Amen.","english":"O Lord Jesus Christ, who saidst to Thine Apostles: Peace I leave you, My peace I give you: regard not my sins, but the faith of Thy Church; and vouchsafe to grant her that peace and unity which is agreeable to Thy will: Who livest and reignest God, world without end. Amen.","links":[[[0],[1]],[[1,2],[2,3]],[[3],[4]],[[4],[5]],[[6],[7]],[[5],[8]],[[7],[9]],[[8],[11]],[[9],[12]],[[10],[14]],[[11],[13]],[[12],[16]],[[13],[17]],[[14],[19]],[[15],[18]],[[16],[21]],[[17],[20]],[[18],[22]],[[19],[24]],[[20],[27]],[[21],[26]],[[22],[28,32]],[[23],[39]],[[24],[42]],[[25],[41]],[[26],[34]],[[27],[35]],[[28],[36]],[[29],[29,31]],[[30],[43]],[[31],[44]],[[32],[45]],[[33],[46]],[[34],[47]],[[35,36,37,38],[48,49,50]],[[39],[51]]]},{"latin":"Dómine Iesu Christe, Fili Dei vivi, qui ex voluntáte Patris, cooperánte Spíritu Sancto, per mortem tuam mundum vivificásti: líbera me per hoc sacrosánctum Corpus et Sánguinem tuum ab ómnibus iniquitátibus meis, et univérsis malis: et fac me tuis semper inhærére mandátis, et a te numquam separári permíttas: Qui cum eódem Deo Patre et Spíritu Sancto vivis et regnas Deus in sǽcula sæculórum. Amen.","english":"O Lord Jesus Christ, Son of the living God, who, by the will of the Father, with the cooperation of the Holy Ghost, hast by Thy death given life to the world: deliver me by this Thy most sacred Body and Blood from all my iniquities, and from every evil: and make me always cleave to Thy commandments, and never suffer me to be separated from Thee: Who with the same God the Father and the Holy Ghost livest and reignest God, world without end. Amen.","links":[[[0],[1]],[[1,2],[2,3]],[[3],[4]],[[4],[8]],[[5],[7]],[[6],[9]],[[7],[10]],[[8],[12]],[[9],[15]],[[10],[18]],[[11,12],[21,22]],[[13],[24]],[[14],[26]],[[15],[25]],[[16],[31]],[[17],[23,27,28]],[[18],[32]],[[19],[33]],[[20],[34]],[[21],[35]],[[22],[38]],[[23],[39]],[[24],[40]],[[25],[41]],[[26],[36]],[[27],[42]],[[28],[43]],[[29],[45]],[[30],[44]],[[31],[46]],[[32],[48]],[[33],[49]],[[34],[50]],[[35],[51]],[[36],[52]],[[37],[56]],[[38],[53]],[[39],[54]],[[40],[57]],[[41],[58]],[[42],[65]],[[43],[66]],[[44],[59]],[[45],[63,64]],[[46],[60]],[[47],[67]],[[48],[68]],[[49],[70]],[[50],[71]],[[51],[73]],[[52],[74]],[[53,54],[76,77]],[[55],[78]],[[56],[79]],[[57],[80]],[[58],[81]],[[59,60,61],[82,83,84]],[[62],[85]]]},{"latin":"Percéptio Córporis tui, Dómine Iesu Christe, quod ego indígnus súmere præsúmo, non mihi provéniat in iudícium et condemnatiónem: sed pro tua pietáte prosit mihi ad tutaméntum mentis et córporis, et ad medélam percipiéndam: Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum. Amen.","english":"Let not the partaking of Thy Body, O Lord Jesus Christ, which I, though unworthy, presume to receive, turn to my judgment and condemnation: but through Thy mercy may it be unto me a safeguard and remedy, both of mind and body: Who with God the Father in the unity of the Holy Ghost, livest and reignest God, world without end. Amen.","links":[[[0],[3]],[[1],[6]],[[2],[5]],[[3],[8]],[[4,5],[9,10]],[[6],[11]],[[7],[12]],[[8],[14]],[[9],[17]],[[10],[15]],[[11],[0,1]],[[12],[20]],[[13],[18]],[[14],[19]],[[15],[21]],[[16],[22]],[[17],[23]],[[18],[24]],[[19],[25]],[[20],[26]],[[21],[27]],[[22],[28,30]],[[23],[32]],[[25],[34]],[[26],[39]],[[27],[40]],[[28],[41]],[[29],[35]],[[31],[36]],[[33],[42]],[[34],[54]],[[35],[55]],[[36],[56]],[[37],[43]],[[38],[44]],[[39],[46]],[[40],[47]],[[41],[49]],[[42],[53]],[[43],[52]],[[44],[57]],[[45,46,47,48],[58,59,60]],[[49],[61]]]},{"latin":"Quid retríbuam Dómino pro ómnibus, quæ retríbuit mihi? Cálicem salutáris accípiam, et nomen Dómini invocábo. Laudans invocábo Dóminum, et ab inimícis meis salvus ero.","english":"What return shall I make to the Lord for all He has given to me? I will take the chalice of salvation, and call upon the Name of the Lord. Praising I will call upon the Lord, and I shall be saved from my enemies.","links":[[[0],[0]],[[1],[1,2,3,4]],[[2],[7]],[[3],[8]],[[4],[9]],[[6],[11,12]],[[7],[14]],[[8],[19]],[[9],[21]],[[10],[15,16,17]],[[11],[22]],[[12],[26]],[[13],[29]],[[14],[23,24]],[[15],[30]],[[16],[31,32,33,34]],[[17],[36]],[[18],[37]],[[19],[42]],[[20],[44]],[[21],[43]],[[22,23],[38,39,40,41]]]},{"latin":"Accipit Calicem manu dextera, et eo se signans, dicit:","english":"The priest takes the Chalice and making the Sign of the Cross with it, says:","links":[[[0],[1,2]],[[1],[4]],[[4],[5]],[[5],[13]],[[7],[6,8,11]],[[8],[14]]]},{"latin":"Sanguis Dómini nostri Iesu Christi custódiat ánimam meam in vitam ætérnam. Amen.","english":"The Blood of our Lord Jesus Christ preserve my soul unto life everlasting. Amen.","links":[[[0],[0,1]],[[1],[4]],[[2],[3]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[9]],[[7],[8]],[[8],[10]],[[9],[11]],[[10],[12]],[[11],[13]]]},{"latin":"Et sinistra supponens Patenam Calici, reverenter sumit totum Sanguinem cum particula. Quo sumpto, si qui sunt communicandi, eos communicet, antequam se purificet","english":"Then he receives all the Precious Blood, together with the Particle.","links":[[[0],[0]],[[6],[1,2]],[[7],[3]],[[8],[6]],[[9],[7,8]],[[10],[10]]]},{"latin":"Quod ore súmpsimus, Dómine, pura mente capiámus: et de múnere temporáli fiat nobis remédium sempitérnum.","english":"Grant, O Lord, that what we have taken with our mouth, we may receive with a pure mind; and from a temporal gift may it become to us an eternal remedy.","links":[[[0],[4]],[[1],[8,9,10]],[[2],[5,6,7]],[[3],[2]],[[4],[16]],[[5],[14,17]],[[6],[11,12,13]],[[7],[18]],[[8],[19]],[[9],[22]],[[10],[21]],[[11],[23,24,25]],[[12],[27]],[[13],[30]],[[14],[29]]]},{"latin":"Interim porrigit Calicem ministro, qui infundit in eo parum vini, quo se purificat: deinde prosequitur:","english":"Then he holds out the Chalice to the server -- in Solemn Masses to the deacon -- who pours wine into it for the first ablution, then the priest proceeds:","links":[[[0],[0]],[[1],[1,2,3]],[[2],[5]],[[3],[8]],[[4],[15]],[[5],[16]],[[6],[18]],[[7],[19]],[[9],[17]],[[10,11,12],[20,21,22,23]],[[13],[24]],[[14],[25,26,27]]]},{"latin":"Corpus tuum, Dómine, quod sumpsi, et Sanguis, quem potávi, adhǽreat viscéribus meis: et præsta; ut in me non remáneat scélerum mácula, quem pura et sancta refecérunt sacraménta: Qui vivis et regnas in sǽcula sæculórum. Amen.","english":"May Thy Body, O Lord, which I have received, and Thy Blood which I have drunk, cleave to my bowels; and grant that no stain of sin may remain in me, who have been fed with this pure and holy Sacrament; Who livest and reignest for ever and ever. Amen.","links":[[[0],[2]],[[1],[1]],[[2],[4]],[[3],[5]],[[4],[6,7,8]],[[5],[9]],[[6],[10,11]],[[7],[12]],[[8],[13,14,15]],[[9],[0,16]],[[10],[19]],[[11],[18]],[[12],[20]],[[13],[21]],[[14],[22]],[[15],[29]],[[16],[30]],[[17],[23]],[[18],[27,28]],[[19],[26]],[[20],[24]],[[21],[31]],[[22],[37]],[[23],[38]],[[24],[39]],[[25],[32,33,34]],[[26],[40]],[[27],[41]],[[28],[42]],[[29],[43]],[[30],[44]],[[31,32,33],[45,46,47,48]],[[34],[49]]]},{"latin":"Abluit et extergit digitos, ac sumit ablutionem: extergit os et Calicem, quem, plicato Corporali, operit et collocat in Altari ut prius: deinde prosequitur Missam.","english":"The priest then washes his fingers and receives the second ablution. Then he covers the chalice and folding the corporal, places it on the chalice, as at the beginning of Mass, and goes to the right side of the altar to say the prayers from the Missal.","links":[[[0],[0,1,2,3]],[[1],[6]],[[3],[5]],[[5],[7]],[[6],[10]],[[10],[15]],[[11],[21]],[[12],[17]],[[13],[19]],[[14],[11,12,13]],[[16],[20]],[[19],[25]],[[20],[28]]]},{"latin":"Dicto, post ultimam Orationem, S. Dóminus vobíscum. M. Et cum spíritu tuo. dicit pro Missæ qualitate, vel Ite, Missa est, vel Benedicámus Dómino. Deo grátias.","english":"He turns to the people and says: P. The Lord be with you. S. And with thy spirit.","links":[[[5],[8,9]],[[6],[10,11,12]],[[8],[14]],[[9],[15]],[[10],[17]],[[11],[16]]]},{"latin":"Benedícat vos omnípotens Deus, et versus ad populum, semel tantum benedícens, etiam in Missis sollemnibus; In Missa Pontificali ter benedicitur, ut in Pontificali habetur. Deinde prosequitur: Pater, et Fílius, ✠ et Spíritus Sanctus. ℟. Amen.","english":"P. May almighty God the Father, Son, ✠ and Holy Ghost, bless you. S. Amen.","links":[[[0],[0,9]],[[1],[10]],[[2],[1]],[[3],[2]],[[26],[4]],[[28],[5]],[[29],[6]],[[30],[7]],[[31],[8]],[[32],[12]]]},{"latin":"S. Ave María, grátia plena, Dóminus tecum, benedícta tu in muliéribus et benedíctus fructus ventris tui, Iesus. O. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen. S. Ave María, grátia plena, Dóminus tecum, benedícta tu in muliéribus et benedíctus fructus ventris tui, Iesus. O. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen. S. Ave María, grátia plena, Dóminus tecum, benedícta tu in muliéribus et benedíctus fructus ventris tui, Iesus. O. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen. O. Salve Regína, Mater misericórdiæ, vita, dulcédo, et spes nostra, salve. Ad te clamámus, éxsules fílii Evæ. Ad te suspirámus geméntes et flentes in hac lacrymárum valle. Eia ergo, Advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum ventris tui, nobis, post hoc exílium, osténde. O clemens, o pia, o dulcis Virgo Mária. S. Ora pro nobis, sancta Dei Génitrix. O. Ut digni efficiámur promissiónibus Christi. S. Orémus. Deus, refúgium nostrum et virtus, pópulum ad te clamántem propítius réspice; et intercedénte gloriósa, et immaculáta Vírgine Dei Genitríce María, cum beáto Ioseph, eius Sponso, ac beatis Apóstolis tuis Petro et Paulo, et ómnibus Sanctis, quas pro conversióne peccatórum, pro libertáte et exaltatióne sanctæ Matris Ecclésiæ, preces effúndimus, miséricors et benígnus exáudi. Per eúndem Christum Dóminum nostrum. Amen. O. Sancte Míchaël Archángele, defénde nos in prǽlio; contra nequítiam et insídias diáboli esto præsídium. Imperet illi Deus, súpplices deprecámur: tuque, Princeps milítiæ Cæléstis, sátanam aliósque spíritus malígnos, qui ad perditiónem animárum pervagántur in mundo, divína virtúte in inférnum detrúde. Amen. S. Cor Iesu sacratíssimum. O. Miserére nobis. S. Cor Iesu sacratíssimum. O. Miserére nobis. S. Cor Iesu sacratíssimum. O. Miserére nobis.","english":"To be said kneeling after the celebration of Low Mass. P. Hail Mary, full of grace; The Lord is with thee; Blessed art thou amongst women, And blessed is the fruit of thy womb, Jesus. A. Holy Mary, Mother of God, Pray for us sinners, now and at the hour of our death. Amen. P. Hail Mary, full of grace; The Lord is with thee; Blessed art thou amongst women, And blessed is the fruit of thy womb, Jesus. A. Holy Mary, Mother of God, Pray for us sinners, now and at the hour of our death. Amen. P. Hail Mary, full of grace; The Lord is with thee; Blessed art thou amongst women, And blessed is the fruit of thy womb, Jesus. A. Holy Mary, Mother of God, Pray for us sinners, now and at the hour of our death. Amen. A. Hail, holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy towards us. And after this our exile, show unto us the blessed Fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. P. Pray for us, O Holy Mother of God. O. That we may be made worthy of the promises of Christ. P. Let us pray. O God, our refuge and our strength, look down in mercy on Thy people who cry to Thee; and by the intercession of the glorious and Immaculate Virgin Mary, Mother of God, of St. Joseph her Spouse, of Thy blessed Apostles Peter and Paul, and of all the Saints, in mercy and goodness hear our prayers for the conversion of sinners, and for the liberty and exaltation of our holy Mother the Church. Through the same Christ our Lord. Amen. A. Holy Michael Archangel, defend us in the day of battle; be our safeguard against the wickedness and snares of the devil. -- May God rebuke him, we humbly pray: and do thou, Prince of the heavenly host, by the power of God thrust down to hell Satan and all wicked spirits, who wander through the world for the ruin of souls. Amen. P. Most Sacred Heart of Jesus, A. Have mercy upon us. P. Most Sacred Heart of Jesus, A. Have mercy upon us. P. Most Sacred Heart of Jesus, A. Have mercy upon us.","links":[[[0],[11]],[[1],[12]],[[2],[14,15]],[[3],[13]],[[4],[17]],[[5],[18,19,20]],[[6],[21,22]],[[7],[23]],[[8],[24]],[[9],[25]],[[10],[26]],[[11],[27,28]],[[12],[30]],[[13],[31,33]],[[14],[32]],[[15],[34]],[[17],[36]],[[18],[37]],[[19],[38]],[[20],[40]],[[21],[41]],[[22],[42]],[[23],[43]],[[24],[44]],[[25],[45]],[[26],[46]],[[27],[47]],[[28],[49]],[[29],[50,52]],[[30],[51]],[[31],[53]],[[33],[55]],[[34],[56]],[[35],[58,59]],[[36],[57]],[[37],[61]],[[38],[62,63,64]],[[39],[65,66]],[[40],[67]],[[41],[68]],[[42],[69]],[[43],[70]],[[44],[71,72]],[[45],[74]],[[46],[75,77]],[[47],[76]],[[48],[78]],[[50],[80]],[[51],[81]],[[52],[82]],[[53],[84]],[[54],[85]],[[55],[86]],[[56],[87]],[[57],[88]],[[58],[89]],[[59],[90]],[[60],[91]],[[61],[93]],[[62],[94,96]],[[63],[95]],[[64],[97]],[[66],[99]],[[67],[100]],[[68],[102,103]],[[69],[101]],[[70],[105]],[[71],[106,107,108]],[[72],[109,110]],[[73],[111]],[[74],[112]],[[75],[113]],[[76],[114]],[[77],[115,116]],[[78],[118]],[[79],[119,121]],[[80],[120]],[[81],[122]],[[83],[124]],[[84],[125]],[[85],[126]],[[86],[128]],[[87],[129]],[[88],[130]],[[89],[131]],[[90],[132]],[[91],[133]],[[92],[134]],[[93],[135]],[[94],[137]],[[95],[138,140]],[[96],[139]],[[97],[141]],[[99],[143]],[[100],[145]],[[101],[146]],[[102],[148]],[[103],[150]],[[104],[152]],[[105],[153]],[[106],[155]],[[107],[149,151,154]],[[109],[156]],[[110],[157]],[[111],[158,159,160]],[[112],[162]],[[113],[163]],[[114],[165]],[[115],[166]],[[116],[167]],[[117],[168,169,170,171,173]],[[118],[174]],[[119],[175]],[[120],[176]],[[121],[177]],[[122],[178]],[[123],[181]],[[124],[179]],[[126],[183]],[[127],[186]],[[130],[187]],[[131],[190]],[[132],[188]],[[133],[191]],[[134],[192]],[[135],[182]],[[136],[193]],[[143],[194]],[[144],[195]],[[145],[197]],[[146],[198,199]],[[142],[200]],[[138],[202]],[[139],[203]],[[140],[204,206]],[[141],[205]],[[137],[207]],[[147],[208]],[[148],[209]],[[149],[210]],[[150],[211]],[[151],[212]],[[152],[213]],[[153],[214]],[[154],[215]],[[156],[217]],[[157],[218]],[[158],[219]],[[159],[221]],[[160],[224]],[[161],[222]],[[163],[226]],[[164],[231]],[[165],[227,228,229,230]],[[166],[232,233,234]],[[167],[235,236]],[[169],[238,239,240]],[[170],[242]],[[171],[244]],[[172],[243,246]],[[173],[245]],[[174],[247]],[[179,180],[248,249,250,251]],[[175],[254]],[[176],[257]],[[177],[258]],[[178],[255,256]],[[181],[259]],[[182],[262]],[[183],[265]],[[184],[266]],[[185],[267]],[[186],[268]],[[189],[269]],[[188],[270]],[[187],[272]],[[190],[273]],[[191],[274]],[[192],[275]],[[193],[276]],[[194],[277]],[[195],[278]],[[198],[279]],[[196],[280]],[[197],[281]],[[199],[282]],[[200],[283]],[[201],[284]],[[202],[285]],[[203],[287]],[[204],[289]],[[206],[297]],[[207],[299]],[[208],[301]],[[209],[303]],[[210],[305]],[[211],[306]],[[212],[307]],[[213],[310]],[[214],[311]],[[215],[313]],[[216],[296]],[[218],[291]],[[219],[292]],[[220],[293]],[[221],[294]],[[222],[314]],[[223],[316]],[[224],[317]],[[225],[319]],[[226],[318]],[[227],[320]],[[229],[322]],[[230],[323]],[[231],[324]],[[232],[325]],[[233],[326]],[[234],[327]],[[235],[329,330,331]],[[236],[335]],[[237],[337]],[[238],[338]],[[239],[339]],[[240],[342]],[[241],[332]],[[242],[334]],[[243],[343,345]],[[244],[346]],[[245],[344]],[[246],[348]],[[247],[347,349]],[[248],[350,352]],[[249],[353]],[[250],[354,355,357]],[[251],[356]],[[252],[367]],[[253],[368,369]],[[254],[371]],[[255],[370]],[[256],[372]],[[257],[377]],[[258],[379]],[[259],[381]],[[260],[373]],[[261],[374]],[[262],[376]],[[263],[361,362]],[[264],[358,359,360]],[[265],[365]],[[266],[366]],[[267],[363,364]],[[268],[382]],[[270],[386]],[[271],[388]],[[272],[384,385]],[[274],[390,391]],[[275],[392,393]],[[277],[397]],[[278],[399]],[[279],[395,396]],[[281],[401,402]],[[282],[403,404]],[[284],[408]],[[285],[410]],[[286],[406,407]],[[288],[412,413]],[[289],[414,415]]]},{"latin":"℣. Dóminus vobíscum. ℟. Et cum spíritu tuo. Et signans signo crucis primum Altare vel librum, deinde se in fronte, ore et pectore, dicit: ℣. Inítium + sancti Evangélii secúndum Ioánnem. ℟. Glória tibi, Dómine. Ioann. 1, 1-14 Iunctis manibus prosequitur: In princípio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in princípio apud Deum. Omnia per ipsum facta sunt: et sine ipso factum est nihil, quod factum est: in ipso vita erat, et vita erat lux hóminum: et lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo missus a Deo, cui nomen erat Ioánnes. Hic venit in testimónium, ut testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera, quæ illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem fílios Dei fíeri, his, qui credunt in nómine eius: qui non ex sanguínibus, neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt. Genuflectit dicens: Et Verbum caro factum est, Et surgens prosequitur: et habitávit in nobis: et vídimus glóriam eius, glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis. ℟. Deo grátias. Finito Evangelio sancti Ioannis, discedens ab Altari, pro gratiarum actione dicit Ant. Trium puerórum, cum reliquis, ut habetur in principio Missalis.","english":"P. The Lord be with you. S. And with thy spirit. He then traces the Sign of the Cross, first upon the altar, and then upon his forehead, lips, and breast, and says: The beginning + of the holy Gospel according to John ℟. Glory be to Thee, O Lord. John 1, 1-14 In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by Him, and without Him was made nothing that was made: in Him was life, and the life was the Light of men; and the Light shineth in darkness, and the darkness did not comprehend it. There was a man sent from God, whose name was John. This man came for a witness, to testify concerning the Light, that all might believe through Him. He was not the Light, but he was to testify concerning the Light. That was the true Light, which enlighteneth every man that cometh into this world. He was in the world, and the world was made by Him, and the world knew Him not. He came unto His own, and His own received Him not. But as many as received Him to them He gave power to become sons of God, to them that believe in His Name, who are born not of blood, nor of the will of the flesh, nor of the will of man, but of God. Here all kneel. And the Word was made flesh, and dwelt among us: and we saw His glory, the glory as of the Only begotten of the Father, full of grace and truth. ℟. Thanks be to God.","links":[[[0],[1]],[[1],[2,3,4]],[[2],[6]],[[3],[7]],[[4],[9]],[[5],[8]],[[7],[12]],[[8],[14]],[[9],[17]],[[10],[18]],[[11],[21]],[[14],[23]],[[15],[25]],[[16],[24]],[[17],[26]],[[18],[27]],[[19],[28]],[[20],[29]],[[21],[10,31]],[[22],[33]],[[23],[36]],[[24],[37]],[[25],[38,39]],[[26],[40]],[[27],[41]],[[28],[43,44]],[[29],[46]],[[30],[47]],[[31],[48]],[[32],[49]],[[33],[50]],[[37],[51]],[[38],[53]],[[39],[54]],[[40],[56]],[[41],[57]],[[42],[59]],[[43],[60]],[[44],[61]],[[45],[62]],[[46],[63]],[[47],[67]],[[48],[66]],[[49],[65]],[[50],[69]],[[51],[70]],[[52],[71]],[[53],[73]],[[54],[74]],[[55],[75]],[[56],[76,77]],[[57],[80]],[[58],[81]],[[59],[79]],[[60],[78]],[[61],[82]],[[62],[83]],[[63],[84]],[[64],[86]],[[65],[85]],[[66],[87]],[[67],[88]],[[68],[90]],[[69],[89]],[[70],[91]],[[71],[92]],[[72],[94]],[[73],[93]],[[74],[95]],[[75],[97]],[[76],[98]],[[77],[100]],[[78],[102]],[[79],[103]],[[80],[105]],[[81],[107]],[[82],[108]],[[83],[106]],[[84],[109]],[[85],[111]],[[86],[115]],[[87],[113]],[[88],[114]],[[89],[117]],[[90],[119]],[[91],[120]],[[92],[121]],[[93],[122]],[[94],[123]],[[95],[124]],[[96],[125]],[[97],[126]],[[98],[127,128]],[[99],[129]],[[100],[130]],[[101],[132]],[[102],[133]],[[103,104],[134]],[[105],[135]],[[106],[137]],[[107],[138]],[[108],[139]],[[109],[140,141]],[[110],[142]],[[111],[143]],[[112],[146]],[[113],[145]],[[114],[144]],[[115],[148]],[[116],[149]],[[117],[152]],[[118,119],[153]],[[120],[154]],[[121],[156]],[[122],[158]],[[123],[161]],[[124],[160]],[[125],[162]],[[126],[163]],[[127],[164]],[[128],[165]],[[129],[167]],[[130],[168]],[[131],[169]],[[132],[170]],[[133],[173]],[[134],[175]],[[135],[172]],[[136],[176]],[[137],[178]],[[138],[181]],[[139],[182]],[[140],[180]],[[141],[179]],[[142],[183]],[[143],[185]],[[144],[187]],[[145],[188]],[[146],[186]],[[147],[191]],[[148],[192,193]],[[149],[190]],[[150],[194]],[[151],[195,196]],[[152],[198]],[[153],[199]],[[154],[197]],[[155],[201,202,203]],[[156],[200]],[[157],[204]],[[158],[205]],[[159],[209]],[[160],[206,207]],[[161],[210]],[[162],[213]],[[163],[215]],[[164],[211,212]],[[165],[216,217]],[[166],[218]],[[167],[219]],[[168],[220]],[[169],[222]],[[170],[221]],[[171],[223]],[[172],[226]],[[173],[227]],[[174],[228]],[[175],[229]],[[176],[230]],[[177],[232]],[[178],[235]],[[179],[236]],[[180],[237]],[[181],[239]],[[182],[241]],[[183],[242]],[[184],[243]],[[185],[244]],[[186],[225]],[[187],[224]],[[190],[248]],[[191],[250]],[[192],[253]],[[193],[252]],[[194],[251]],[[198],[254]],[[199],[255]],[[200],[256]],[[201],[257]],[[202],[258]],[[203],[260]],[[204],[262]],[[205],[261]],[[206],[264]],[[207],[265]],[[208],[268,269]],[[209],[270]],[[210],[272]],[[211],[273]],[[212],[275]],[[213],[276]],[[214],[277]],[[215],[281]],[[216],[278]]]},{"latin":"Pláceat tibi, sancta Trínitas, obséquium servitútis meæ: et præsta; ut sacrifícium, quod óculis tuæ maiestátis indígnus óbtuli, tibi sit acceptábile, mihíque et ómnibus, pro quibus illud óbtuli, sit, te miseránte, propitiábile. Per Christum, Dóminum nostrum. Amen.","english":"May the performance of my homage be pleasing to Thee, O holy Trinity: and grant that the Sacrifice which I, though unworthy, have offered up in the sight of Thy Majesty, may be acceptable to Thee, and through Thy mercy, be a propitiation for me, and for all those for whom I have offered it. Through Christ our Lord. Amen.","links":[[[0],[0,6,7]],[[1],[8,9]],[[2],[11]],[[3],[12]],[[4],[5]],[[5],[2]],[[6],[4]],[[7],[13]],[[8],[14]],[[9],[15]],[[10],[17]],[[11],[18]],[[12],[27]],[[13],[29]],[[14],[30]],[[15],[21]],[[16],[19,22,23,24]],[[17],[34,35]],[[18],[31,32]],[[19],[33]],[[20],[43,44]],[[21],[45]],[[22],[46,47,48]],[[23],[49]],[[24],[50]],[[25],[54]],[[26],[51,52,53]],[[27],[40]],[[28],[38]],[[29],[39]],[[30],[42]],[[31],[55]],[[32],[56]],[[33],[58]],[[34],[57]],[[35],[59]]]},{"latin":"Ps 97:3","english":"Ps 97:3","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 85:9-10","english":"Ps 85:9-10","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Matt 2:2","english":"Matt 2:2","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 2:51","english":"Luke 2:51","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 12:42","english":"Luke 12:42","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 63:11","english":"Ps 63:11.","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 16:18","english":"Matt 16:18","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Sap 3:4-6","english":"Wis 3:4-6","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Matt 24:46-47","english":"Matt 24:46-47","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Luc 4:22","english":"Luke 4:22","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 20:4","english":"Ps 20:4","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 19:28-29","english":"Matt 19:28-29","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Rom 4:18","english":"Rom 4:18","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 30:17-18","english":"Ps 30:17-18","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Luc 2:26","english":"Luke 2:26","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 42:4","english":"Ps 42:4","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 64:10","english":"Ps 64:10","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioann 15:16","english":"John 15:16","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 77:29-30","english":"Ps 77:29-30","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 50:21","english":"Ps 50:21","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 2:11-12","english":"Ps 2:11-12","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 90:4-5","english":"Ps 90:4-5","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Matt 19:28","english":"Matt 19:28","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 5:2-4","english":"Ps 5:2-4","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ioann 6:52","english":"John 6:52","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 6:11","english":"Ps 6:11","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 7:2","english":"Ps 7:2","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 5:2-4","english":"Ps 5:2-4","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 8:2","english":"Ps 8:2","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 9:2-3","english":"Ps 9:2-3","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 10:8","english":"Ps 10:8","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioann 6:57","english":"John 6:57","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 11:8","english":"Ps 11:8","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 15:32","english":"Luke 15:32","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 83:4-5","english":"Ps 83:4-5","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 13:7","english":"Ps 13:7","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 14:1-2","english":"Ps 14:1-2","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 15:10","english":"Ps 15:11","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 118:4-5","english":"Ps 118:4-5","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ioann 4:13, 14","english":"Jn 4:13-14","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ioann 8:10, 11","english":"Jn 8:10-11","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 121:3-4","english":"Ps 121:3-4","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 18:13, 14","english":"Ps 18:13-14","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 19:6","english":"Ps 19:6","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioann 9:11","english":"Jn 9:11","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 1:20","english":"Matt 1:20","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioann 11:33, 35, 43, 44, 39","english":"Jn 11:33, 35, 43-44, 39","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]]]},{"latin":"Ps 22:1-2","english":"Ps 22:1-2","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"1 Cor 11:24, 25","english":"1 Cor. 11:24-25","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Ps 23:10","english":"Ps 23:10","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 24:22","english":"Ps 24:22","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Is 7:14","english":"Isa 7:14","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 118:49-50","english":"Ps 118:49-50","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 26:12","english":"Ps 26:12","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 26:12","english":"Ps 26:12","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 26:42","english":"Matt 26:42","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 34:26","english":"Ps 34:26","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 68:13-14","english":"Ps 68:13-14","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 101:13 et 14.","english":"Ps 101:13; 101:14","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Marc. 6:12-13","english":"Marc. 6:12-13","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"1 Cor 5:7-8","english":"1 Cor 5:7-8","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Luc 24:34","english":"Luke 24:34","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Col 3:1-2","english":"Col 3:1-2","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Rom 6:9","english":"Rom 6:9","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"1 Pet 2:9","english":"1 Pet 2:9","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Matt 28:18-19","english":"Matt 28:18-19","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Gal 3:27","english":"Gal 3:27","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioannes 20:27","english":"John 20:27","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"2 Tim 4:8;","english":"2 Tim 4:8;","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ioannes 10:14","english":"John 10:14","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 12:42","english":"Luke 12:42","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 16:18","english":"Matt 16:18","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 63:11","english":"Ps 63:11","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioannes 16:16","english":"John 16:16","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"1 Pet 4:13","english":"1 Pet 4:13","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Matt 13:54-55","english":"Matt 13:54-55","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Matt 10:27","english":"Matt 10:27","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioann 16:8","english":"John 16:8","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 44:8","english":"Ps 44:8","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 95:2","english":"Ps 95:2","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 32:1","english":"Ps. 32:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 95:2.","english":"Ps. 95:2.","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 67:33-34","english":"Ps 67:33-34","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Matt 24:46-47","english":"Matt 24:46-47","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ioannes 17:12-13; 17:15","english":"John 17:12-13; 17:15","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]]]},{"latin":"Ioannes 7:37-39","english":"John 7:37-39.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Act 2:2; 2:4","english":"Acts 2:2; 2:4","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Ioannes 14:26","english":"John 14:26","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioannes 15:26; 16:14","english":"John 15:26; 16:14","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Ioannes 14:27","english":"John 14:27.","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Acts 2:2 2:4","english":"Acts 2:2; 2:4","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Ioannes 14:18","english":"John 14:18","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioannes 3:8","english":"John 3:8.","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Tob 12:6","english":"Tob 12:6","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 9:2-3","english":"Ps 9:2-3","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"1 Cor 11:26-27","english":"1 Cor. 11:26-27.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Apoc 3:21","english":"Rev 3:21","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 12:6","english":"Ps. 12:6.","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 44:8","english":"Ps 44:8","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioannes 19:34","english":"John 19:34","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 15:10.","english":"Luke 15:10","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 17:3","english":"Ps. 17:3","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 20:6","english":"Ps 20:6","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 1:76","english":"Luke 1:76","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 26:4","english":"Ps. 26:4.","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Hebr 9:28","english":"Heb 9:28","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Eccli 24:47","english":"Ecclus 24:47","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 26:6","english":"Ps. 26:6","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 10:27","english":"Matt 10:27","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 12:50","english":"Matt 12:50","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 30:3","english":"Ps 30:3","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 33:9","english":"Ps 33:9","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Iac 1:27","english":"James 1:27","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 12:49","english":"Luke 12:49","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 50:21","english":"Ps 50:21","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 17:9","english":"Matt 17:9","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Prov 3:9-10","english":"Prov 3:9-10","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ioann 12:26","english":"John 12:26","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 1:48-49","english":"Luke 1:48-49","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ioann 19:27","english":"John 19:27","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Sap 16:20","english":"Wis 16:20","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Marc 10:14","english":"Mark 10:14","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 20:4","english":"Ps 20:4","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 6:33","english":"Matt 6:33","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioannes 6:56-57","english":"John 6:56-57","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 68:30-31","english":"Ps 68:30-31","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 75:12-13","english":"Ps 75:12-13","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 20:6","english":"Ps 20:6","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 95:8-9","english":"Ps 95:8-9","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Matt 16:24","english":"Matt 16:24","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Dan 5:58","english":"Dan 3:58","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Dan 3:58","english":"Dan 3:58","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Deut 32:10-12","english":"Deut 32:10-12","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Ps 118:4-5","english":"Ps 118:4-5","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Eccli 39:19","english":"Ecclus 39:19","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Phil 3:7","english":"Phil 3:7","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Cant 6:2","english":"Cant 6:2","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 118:81; 118:84; 118:86","english":"Ps 118:81; 118:84; 118:86","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]]]},{"latin":"Luc 6:38","english":"Luke 6:38","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 16:6","english":"Ps 16:6","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 5:8-10","english":"Matt 5:8-10","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"4 Esdr 2:35; 2:34","english":"4 Esdr 2:35; 2:34","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]]]},{"latin":"Marc 11:24","english":"Mark 11:24","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 21:13","english":"Matt 21:13","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioannes 10:14","english":"John 10:14","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 84:13.","english":"Ps 84:13","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 4:19-20","english":"Matt 4:19-20","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Bar 5:5; 4:36","english":"Bar 5:5; 4:36","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Ps 86:3, Luc 1:49","english":"Ps 86:3, Luc 1:49","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]]]},{"latin":"Is 35:4.","english":"Isa 35:4","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Is 7:14","english":"Isa 7:14","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 18:6-7","english":"Ps 18:6-7","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Is 7:14","english":"Isa 7:14","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ioannes 20:27","english":"John 20:27","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Isa 40:5","english":"Isa 40:5","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Ps 109:3","english":"Ps 109:3","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Matt 2:20","english":"Matt 2:20","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Luc 2:48; 2:49","english":"Luke 2:48-49","links":[[[0],[0]],[[1,3],[1]],[[2,4],[2,3]]]},{"latin":"Ioann 2:7; 2:8; 2:9; 2:10-11","english":"John 2:7-11","links":[[[0],[0]],[[1,3,5,7],[1]],[[2,4,6,8,9],[2,3]]]},{"latin":"Luc 6:18; 6:19","english":"Luke 6:18-19","links":[[[0],[0]],[[1,3],[1]],[[2,4],[2,3]]]},{"latin":"Matt 25:4-6","english":"Matt 25:4; 25:6","links":[[[0],[0]],[[1],[1,3]],[[2,3],[2,4]]]},{"latin":"Ps 88:36; 88:37-38","english":"Ps 88:36-38","links":[[[0],[0]],[[1,3],[1]],[[2,4,5],[2,3]]]},{"latin":"Ps 118:78; 118:80","english":"Ps 118:78, 80","links":[[[0],[0]],[[1,3],[1]],[[2,4],[2,3]]]},{"latin":"Ps 1:2 et 3.","english":"Ps 1:2-3","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[4],[3]]]},{"latin":"Matt 25:40; 25:34","english":"Matt 25:40, 34","links":[[[0],[0]],[[1,3],[1]],[[2,4],[2,3]]]},{"latin":"Matt 25:4-6","english":"Matt 25:4; 25:6","links":[[[0],[0]],[[1],[1,3]],[[2,3],[2,4]]]},{"latin":"Ioannes 14:9; 14:10","english":"John 14:9-10.","links":[[[0],[0]],[[1,3],[1]],[[2,4],[2,3]]]},{"latin":"Matt 25:36; 25:40","english":"Matt 25:36, 40","links":[[[0],[0]],[[1,3],[1]],[[2,4],[2,3]]]},{"latin":"Ps 118:121; 118:122; 118:128","english":"Ps 118:121-122; 118:128","links":[[[0],[0]],[[1,3],[1]],[[2],[2]],[[4],[3]],[[5],[4]],[[6],[5]]]},{"latin":"Matt 25:20; 20:21","english":"Matt 25:20-21","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[4],[3]]]},{"latin":"Ps 103:13; 103:14-15","english":"Ps 103:13-15","links":[[[0],[0]],[[1,3],[1]],[[2],[2]],[[4,5],[3]]]},{"latin":"Neh 8:10","english":"2 Esd. 8:10","links":[[[0],[0,1]],[[1],[2]],[[2],[3]]]},{"latin":"Ps 118:22; 118:24","english":"Ps 118:22, 24","links":[[[0],[0]],[[1,3],[1]],[[2],[2]],[[4],[3]]]},{"latin":"Levit 23:41; 23:43","english":"Lev 21:41, 43","links":[[[0],[0]],[[1,3],[1]],[[2],[2]],[[4],[3]]]},{"latin":"Ps 28:10; 28:11","english":"Ps 28:10-11","links":[[[0],[0]],[[1,3],[1]],[[2],[2]],[[4],[3]]]},{"latin":"Ps 88:36; 88:37-38","english":"Ps 88:36-38","links":[[[0],[0]],[[1,3],[1]],[[2,4,5],[2,3]]]},{"latin":"Zach 14:5","english":"Zach 14:5-6","links":[[[0],[0]],[[1],[1]],[[2],[2,3]]]},{"latin":"Act 7:55; 7:58-59","english":"Acts 7:56, 59-60","links":[[[0],[0]],[[1,3],[1]],[[2],[2]],[[4],[3]],[[5],[4]]]},{"latin":"Vidérunt omnes fines terræ salutáre Dei nostri.","english":"All the ends of the earth have seen the salvation by our God.","links":[[[0],[6,7]],[[1],[0]],[[2],[2]],[[3],[5]],[[4],[9]],[[5],[12]],[[6],[11]]]},{"latin":"Beáta víscera Maríæ Vírginis, quæ portavérunt ætérni Patris Fílium.","english":"Blessed is the womb of the Virgin Mary, which bore the Son of the eternal Father.","links":[[[0],[0,1]],[[1],[3]],[[2],[7]],[[3],[6]],[[4],[8]],[[5],[9]],[[6],[14]],[[7],[15]],[[8],[11]]]},{"latin":"Omnes gentes, quascúmque fecísti, vénient et adorábunt coram te, Dómine, et glorificábunt nomen tuum: quóniam magnus es tu et fáciens mirabília: tu es Deus solus, allelúia.","english":"All the nations You have made shall come and worship You, O Lord, and glorify Your Name. For You are great, and do wondrous deeds; You alone are God. Alleluia.","links":[[[0],[0]],[[1],[2]],[[2,3],[3,4,5]],[[4],[6,7]],[[5],[8]],[[6],[9]],[[8],[10]],[[9],[12]],[[10],[13]],[[11],[14]],[[12],[16]],[[13],[15]],[[14],[17]],[[15],[20]],[[16],[19]],[[17],[18]],[[18],[21]],[[19],[22]],[[20],[23,24]],[[21],[25]],[[22],[27]],[[23],[28]],[[24],[26]],[[25],[29]]]},{"latin":"Vídimus stellam eius in Oriénte, et vénimus cum munéribus adoráre Dóminum.","english":"We have seen His star in the East and have come with gifts to worship the Lord.","links":[[[0],[0,1,2]],[[1],[4]],[[2],[3]],[[3],[5]],[[4],[7]],[[5],[8]],[[6],[9,10]],[[7],[11]],[[8],[12]],[[9],[13,14]],[[10],[16]]]},{"latin":"Descéndit Iesus cum eis, et venit Názareth, et erat súbditus illis.","english":"Jesus went down with them, and came to Nazareth and was subject to them.","links":[[[0],[1,2]],[[1],[0]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[8]],[[7],[9]],[[8],[10]],[[9],[11]],[[10],[13]]]},{"latin":"Fili, quid fecísti nobis sic? ego et pater tuus doléntes quærebámus te. Et quid est, quod me quærebátis? nesciebátis, quia in his, quæ Patris mei sunt, opórtet me esse?","english":"Son, why have You done so to us? In sorrow Your father and I have been seeking You. How is it that you sought Me? Did you not know that I must be about My Father’s business?","links":[[[0],[0]],[[1],[1]],[[2],[2,3,4]],[[3],[7]],[[4],[5]],[[5],[13]],[[6],[12]],[[7],[11]],[[8],[10]],[[9],[9]],[[10],[14,15,16]],[[11],[17]],[[13],[18]],[[14],[19]],[[15],[21]],[[16],[24]],[[17],[23]],[[18],[25,26,27,28]],[[19],[29]],[[20],[33]],[[23],[35]],[[24],[34]],[[26],[31]],[[27],[30]],[[28],[32]]]},{"latin":"Fidélis servus et prudens, quem constítuit dóminus super famíliam suam: ut det illis in témpore trítici mensúram.","english":"The faithful and prudent servant whom the master will set over his household to give them their ration of grain in due time.","links":[[[0],[1]],[[1],[4]],[[2],[2]],[[3],[3]],[[4],[5]],[[5],[8,9]],[[6],[7]],[[7],[10]],[[8],[12]],[[9],[11]],[[10],[13]],[[11],[14]],[[12],[15]],[[13],[20]],[[14],[22]],[[15],[19]],[[16],[17]]]},{"latin":"Lætábitur iustus in Dómino, et sperábit in eo: et laudabúntur omnes recti corde, allelúia, allelúia.","english":"The just shall rejoice in the Lord, and shall hope in him: and all the upright in heart shall be praised, alleluia, alleluia.","links":[[[0],[2,3]],[[1],[1]],[[2],[4]],[[3],[6]],[[4],[7]],[[5],[8,9]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[18,19,20]],[[10],[13]],[[11],[15]],[[12],[17]],[[13],[21]],[[14],[22]]]},{"latin":"Tu es Petrus, et super hanc petram ædificábo Ecclésiam meam.","english":"Thou art Peter; and upon this rock I will build My Church, and the gates of hell shall not prevail against it.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]],[[7],[7,8,9]],[[8],[11]],[[9],[10]]]},{"latin":"Dicit Dóminus: Implete hýdrias aqua et ferte architriclíno. Cum gustásset architriclínus aquam vinum factam, dicit sponso: Servásti bonum vinum usque adhuc. Hoc signum fecit Iesus primum coram discípulis suis.","english":"The Lord said, Fill the jars with water and take to the chief steward. When the chief steward had tasted the water after it had become wine, he said to the bridegroom, You have kept the good wine until now. This first miracle Jesus worked in the presence of His disciples.","links":[[[0],[2]],[[1],[1]],[[2],[3]],[[3],[5]],[[4],[7]],[[5],[8]],[[6],[9]],[[7],[13]],[[8],[14]],[[9],[19]],[[10],[17]],[[11],[21]],[[12],[26]],[[13],[24,25]],[[14],[28]],[[15],[31]],[[16],[33,34]],[[17],[36]],[[18],[37]],[[19],[38]],[[20],[39]],[[21],[40]],[[22],[42]],[[23],[44]],[[24],[43]],[[25],[41]],[[26],[45,46,47,48]],[[27],[50]],[[28],[49]]]},{"latin":"Multitúdo languéntium, et qui vexabántur a spirítibus immúndis, veniébant ad eum: quia virtus de illo exíbat, et sanábat omnes.","english":"A multitude of sick, and those who were troubled with unclean spirits, came to Him; for power went forth from Him and healed all.","links":[[[0],[1]],[[1],[3]],[[2],[4]],[[3],[6]],[[4],[7,8]],[[5],[9]],[[6],[11]],[[7],[10]],[[8],[12]],[[9],[13]],[[10],[14]],[[11],[15]],[[12],[16]],[[13],[19]],[[14],[20]],[[15],[17,18]],[[16],[21]],[[17],[22]],[[18],[23]]]},{"latin":"Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus: média autem nocte clamor factus est: Ecce, sponsus venit: exíte óbviam Christo Dómino.","english":"The five wise virgins took oil in their vessels with the lamps. And at midnight there was a cry made: Behold the bridegroom cometh, go ye forth to meet Christ the Lord.","links":[[[0],[1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[8]],[[7],[7]],[[8],[9]],[[9],[11]],[[10,12],[14]],[[11],[12,13]],[[13],[18]],[[14],[19]],[[15],[16]],[[16],[20]],[[17],[22]],[[18],[23]],[[19],[24,25,26]],[[20],[28]],[[21],[29]],[[22],[31]]]},{"latin":"Et si coram homínibus torménta passi sunt, Deus tentávit eos: tamquam aurum in fornáce probávit eos, et quasi holocáusta accépit eos.","english":"For if before men they be punished, God tried them; as gold in the furnace, He proved them, and as sacrificial offerings He took them to Himself.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4,5,6],[4,5,6]],[[7],[7]],[[8],[8]],[[9],[9]],[[10],[10]],[[11],[11]],[[12],[12]],[[13],[14]],[[14],[16]],[[15],[17]],[[16],[18]],[[17],[19]],[[18],[20,21]],[[19],[23]],[[20],[24,25,26]]]},{"latin":"Beátus servus, quem, cum vénerit dóminus, invénerit vigilántem: amen, dico vobis, super ómnia bona sua constítuet eum.","english":"Blessed is that servant whom his master, when he comes, shall find watching. Amen I say to you, he will set him over all his goods.","links":[[[0],[0,1]],[[1],[3]],[[2],[4]],[[3],[7]],[[4],[9]],[[5],[6]],[[6],[11]],[[7],[12]],[[8],[13]],[[9],[15]],[[10],[16,17]],[[11],[22]],[[12],[23]],[[13],[25]],[[14],[24]],[[15],[20]],[[16],[21]]]},{"latin":"Semel iurávi in sancto meo: Semen eius in ætérnum manébit: et sedes eius sicut sol in conspéctu meo, et sicut luna perfécta in ætérnum, et testis in coelo fidélis.","english":"Once, by My holiness, have I sworn; his posterity shall continue forever; and his throne shall be like the sun before Me; like the moon, which remains forever, a faithful witness in the sky.","links":[[[0],[0]],[[1],[4,5,6]],[[2],[1]],[[3],[3]],[[4],[2]],[[5],[8]],[[6],[7]],[[8],[11]],[[9],[9,10]],[[10],[12]],[[11],[14]],[[12],[13]],[[13],[17]],[[14],[19]],[[15],[20]],[[17],[21]],[[19],[22]],[[20],[24]],[[21],[25,26]],[[23],[27]],[[25],[30]],[[26],[31]],[[27],[33]],[[28],[29]]]},{"latin":"Mirabántur omnes de his, quæ procedébant de ore Dei.","english":"All marvelled at the words that came from the mouth of God.","links":[[[0],[1]],[[1],[0]],[[2],[2]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[7]],[[7],[9]],[[8],[11]]]},{"latin":"Posuísti, Dómine, in cápite eius corónam de lápide pretióso.","english":"Thou hast set on his head, O Lord, a crown of precious stones.","links":[[[0],[0,1,2]],[[1],[7]],[[2],[3]],[[3],[5]],[[4],[4]],[[5],[9]],[[6],[10]],[[7],[12]],[[8],[11]]]},{"latin":"Amen, dico vobis: quod vos, qui reliquístis ómnia et secúti estis me, céntuplum accipiétis, et vitam ætérnam possidébitis.","english":"Amen I say to you that you, who have left all things and followed Me, shall receive a hundredfold, and shall possess life everlasting.","links":[[[0],[0]],[[1],[2]],[[2],[3,4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8,9]],[[7],[10,11]],[[8],[12]],[[9],[13]],[[11],[14]],[[12],[18]],[[13],[15,16]],[[14],[19]],[[15],[22]],[[16],[23]],[[17],[20,21]]]},{"latin":"Confundántur supérbi, quia iniúste iniquitátem fecérunt in me: ego autem in mandátis tuis exercébor, in tuis iustificatiónibus, ut non confúndar.","english":"Let the proud be put to shame for oppressing me unjustly; I will meditate on Your precepts, on Your statutes, that I be not put to shame.","links":[[[0],[0,3,4,5,6]],[[1],[2]],[[2],[7]],[[3],[10]],[[4,5],[8]],[[7],[9]],[[8],[11]],[[10],[14]],[[11],[16]],[[12],[15]],[[13],[12,13]],[[14],[17]],[[15],[18]],[[16],[19]],[[17],[20]],[[18],[23]],[[19],[21,22,24,25,26]]]},{"latin":"Contra spem in spem crédidit, ut fíeret pater multárum géntium, secúndum quod dictum est ei.","english":"Hoping against hope he believed, so that he became father of many nations, according to what was said to him.","links":[[[0],[1]],[[1],[2]],[[3],[0]],[[4],[4]],[[5],[5,6]],[[6],[8]],[[7],[9]],[[8],[11]],[[9],[12]],[[10],[13]],[[11],[15]],[[12],[17]],[[13],[16]],[[14],[18,19]]]},{"latin":"Illúmina fáciem tuam super servum tuum, et salvum me fac in tua misericórdia: Dómine, non confúndar, quóniam invocávi te.","english":"Let Your face shine upon Your servant; save me in Your kindness. O Lord, let me not be put to shame, for I call upon You.","links":[[[0],[0,3]],[[1],[2]],[[2],[1]],[[3],[4]],[[4],[6]],[[5],[5]],[[7,9],[7]],[[8],[8]],[[10],[9]],[[11],[10]],[[12],[11]],[[13],[13]],[[14],[16]],[[15],[14,15,17,18,19,20]],[[16],[21]],[[17],[23]],[[18],[24,25]]]},{"latin":"Respónsum accépit Símeon a Spíritu Sancto, non visúrum se mortem, nisi vidéret Christum Dómini.","english":"It was revealed to Simeon by the Holy Spirit that he should not see death before he had seen the Christ of the Lord.","links":[[[0,1],[0,1,2]],[[2],[4]],[[3],[5]],[[4],[8]],[[5],[7]],[[6],[12]],[[7],[13]],[[9],[14]],[[10],[15]],[[11],[16,17,18]],[[12],[20]],[[13],[23]]]},{"latin":"Qui me dignátus est ab omni plaga curáre et mamíllam meam meo péctori restitúere, ipsum ínvoco Deum vivum.","english":"I invoke Him, the living God, Who deigned to cure me of every wound, and to restore my breast to my body.","links":[[[15],[0,1]],[[14],[2]],[[16],[5]],[[17],[4]],[[0],[6]],[[2,3],[7]],[[7],[8,9]],[[1],[10]],[[4],[11]],[[5],[12]],[[6],[13]],[[8],[14]],[[13],[15,16]],[[10],[17]],[[9],[18]],[[11],[20]],[[12],[21]]]},{"latin":"Introíbo ad altáre Dei, ad Deum, qui lætíficat iuventútem meam.","english":"I will go in to the altar of God, the God of my gladness and joy.","links":[[[0],[0,1,2,3]],[[1],[4]],[[2],[6]],[[3],[8]],[[5],[10]],[[7],[13,15]],[[9],[12]]]},{"latin":"Visitásti terram et inebriásti eam, multiplicásti locupletáre eam.","english":"You have visited the land and watered it; greatly have you enriched it.","links":[[[0],[0,1,2]],[[1],[4]],[[2],[5]],[[3],[6]],[[4],[7]],[[5],[8]],[[6],[9,10,11]],[[7],[12]]]},{"latin":"Ego vos elégi de mundo, ut eátis et fructum afferátis: et fructus vester máneat.","english":"I have chosen you from the world that you should go and bear fruit, and that your fruit should remain.","links":[[[0],[0]],[[1],[3]],[[2],[1,2]],[[3],[4]],[[4],[6]],[[5],[7]],[[6],[8,9,10]],[[7],[11]],[[8],[13]],[[9],[12]],[[10],[14]],[[11],[17]],[[12],[16]],[[13],[18,19]]]},{"latin":"Manducavérunt, et saturári sunt nimis, et desidérium eórum áttulit eis Dóminus: non sunt fraudáti a desidério suo.","english":"They ate and were wholly surfeited; the Lord had brought them what they craved: they were not defrauded of that which they craved.","links":[[[0],[0,1]],[[1],[2]],[[2],[5]],[[3],[3]],[[4],[4]],[[6],[11,13]],[[7],[12]],[[8],[8,9]],[[9],[10]],[[10],[7]],[[11],[16]],[[12],[15]],[[13],[17]],[[14],[18]],[[15],[19,20,22]],[[16],[21]]]},{"latin":"Qui meditábitur in lege Dómini die ac nocte, dabit fructum suum in témpore suo.","english":"He who shall meditate day and night on the law of the Lord shall yield his fruit in due season.","links":[[[0],[0,1]],[[1],[2,3]],[[2],[7]],[[3],[9]],[[4],[12]],[[5],[4]],[[6],[5]],[[7],[6]],[[8],[13,14]],[[9],[16]],[[10],[15]],[[11],[17]],[[12],[19]]]},{"latin":"Acceptábis sacrifícium iustítiæ, oblatiónes et holocáusta, super altáre tuum, Dómine.","english":"You shall be pleased with due sacrifices, burnt offerings and holocausts on Your altar, O Lord.","links":[[[0],[0,1,2,3,4]],[[1],[6]],[[2],[5]],[[3],[7,8]],[[4],[9]],[[5],[10]],[[6],[11]],[[7],[13]],[[8],[12]],[[9],[15]]]},{"latin":"Servite Dómino in timóre, et exsultáte ei cum tremóre: apprehéndite disciplínam, ne pereátis de via iusta.","english":"Serve the Lord with fear, and rejoice before Him with trembling; embrace discipline, lest you perish from the just way.","links":[[[0],[0]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[7,8]],[[7],[9]],[[8],[10]],[[9],[11]],[[10],[12]],[[11],[13]],[[12],[14,15]],[[13],[16]],[[14],[19]],[[15],[18]]]},{"latin":"Scápulis suis obumbrábit tibi Dóminus, et sub pennis eius sperábis: scuto circúmdabit te véritas eius.","english":"With His pinions the Lord will cover you, and under His wings you shall take refuge; His faithfulness is a buckler and a shield.","links":[[[0],[2]],[[1],[1]],[[2],[5,6]],[[3],[7]],[[4],[4]],[[5],[8]],[[6],[9]],[[7],[11]],[[8],[10]],[[9],[12,13,14,15]],[[10],[20,23]],[[11],[18]],[[13],[17]],[[14],[16]]]},{"latin":"Amen, dico vobis: quod uni ex mínimis meis fecístis, mihi fecístis: veníte, benedícti Patris mei, possidéte parátum vobis regnum ab inítio sǽculi.","english":"Amen I say to you: What you did for one of these, the least of My brethren, you did for Me: come, blessed of My Father, take possession of the kingdom prepared for you from the foundation of the world.","links":[[[0],[0]],[[1],[2]],[[2],[3,4]],[[3],[5]],[[4],[9]],[[5],[10]],[[6],[11,12,13]],[[7],[14,15,16]],[[8],[6,7,8]],[[9],[20]],[[10],[17,18,19]],[[11],[21]],[[12],[22]],[[13],[25]],[[14],[24]],[[15],[26,27]],[[16],[31]],[[17],[32,33]],[[18],[30]],[[19],[34]],[[20],[36]],[[21],[39]]]},{"latin":"Vos, qui secúti estis me, sedébitis super sedes, iudicántes duódecim tribus Israël.","english":"You who have followed Me shall sit on thrones judging the twelve tribes of Israel.","links":[[[0],[0]],[[1],[1]],[[2,3],[2,3]],[[4],[4]],[[5],[5,6]],[[6],[7]],[[7],[8]],[[8],[9]],[[9],[11]],[[10],[12]],[[11],[14]]]},{"latin":"Intéllege clamórem meum: inténde voci oratiónis meæ, Rex meus et Deus meus: quóniam ad te orábo, Dómine.","english":"Attend to my sighing, heed my call for help, my King and my God! To You, I pray, O Lord.","links":[[[0],[0]],[[1],[3]],[[2],[2]],[[3],[4]],[[4],[6,7,8]],[[6],[5]],[[7],[10]],[[8],[9]],[[9],[11]],[[10],[13]],[[11],[12]],[[13],[14]],[[14],[15]],[[15],[16,17]],[[16],[19]]]},{"latin":"Panis, quem ego dédero, caro mea est pro sǽculi vita.","english":"The bread that I will give is My Flesh for the life of the world.","links":[[[0],[1]],[[1],[2]],[[2],[3]],[[3],[4,5]],[[4],[8]],[[5],[7]],[[6],[6]],[[7],[9]],[[8],[14]],[[9],[11]]]},{"latin":"Erubéscant et conturbéntur omnes inimíci mei: avertántur retrórsum, et erubéscant valde velóciter.","english":"All my enemies shall be put to shame in utter terror; they shall fall back in sudden shame.","links":[[[3],[0]],[[4],[2]],[[5],[1]],[[0],[3,4,5,6,7]],[[2],[8,9,10]],[[6],[11,12,13]],[[7],[14]],[[9],[17]],[[10],[16]]]},{"latin":"Dómine, Deus meus, in te sperávi: líbera me ab ómnibus persequéntibus me, et éripe me.","english":"O Lord my God, in You I take refuge; save me from all my pursuers and rescue me.","links":[[[0],[1]],[[1],[3]],[[2],[2]],[[3],[4]],[[4],[5]],[[5],[6,7,8]],[[6],[9]],[[7],[10]],[[8],[11]],[[9],[12]],[[10],[14]],[[11],[13]],[[12],[15]],[[13],[16]],[[14],[17]]]},{"latin":"Dómine, Dóminus noster, quam admirábile est nomen tuum in univérsa terra!","english":"O Lord, our Lord, how glorious is Your Name over all the earth!","links":[[[0],[1]],[[1],[3]],[[2],[2]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[8]],[[7],[7]],[[8],[9]],[[9],[10]],[[10],[12]]]},{"latin":"Narrábo ómnia mirabília tua: lætábor, et exsultábo in te: psallam nómini tuo, Altíssime.","english":"I will declare all Your wondrous deeds; I will be glad and exult in You; I will sing praise to Your name, Most High.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[5,6]],[[3],[4]],[[4],[7,8,9,10]],[[5],[11]],[[6],[12]],[[7],[13]],[[8],[14]],[[9],[15,16,17,18]],[[10],[21]],[[11],[20]],[[12],[22,23]]]},{"latin":"Iustus Dóminus, et iustítiam diléxit: æquitátem vidit vultus eius.","english":"The Lord is just, He loves just deeds; the upright shall see His face.","links":[[[0],[3]],[[1],[1]],[[3],[6,7]],[[4],[5]],[[5],[9]],[[6],[10,11]],[[7],[13]],[[8],[12]]]},{"latin":"Qui mandúcat meam carnem et bibit meum sánguinem, in me manet et ego in eo, dicit Dóminus.","english":"He who eats My Flesh, and drinks My Blood, abides in Me, and I in him, says the Lord.","links":[[[0],[1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[7]],[[7],[8]],[[8],[10]],[[9],[11]],[[10],[9]],[[11],[12]],[[12],[13]],[[13],[14]],[[14],[15]],[[15],[16]],[[16],[18]]]},{"latin":"Tu, Dómine, servábis nos, et custódies nos a generatióne hac in ætérnum.","english":"You, O Lord, will keep us and preserve us always from this generation.","links":[[[0],[0]],[[1],[2]],[[2],[3,4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8]],[[7],[10]],[[8],[12]],[[9],[11]],[[10,11],[9]]]},{"latin":"Opórtet te, fili, gaudére, quia frater tuus mórtuus fúerat, et revíxit: períerat, et invéntus est.","english":"You ought to rejoice, my son, for your brother was dead, and has come to life; he was lost, and is found.","links":[[[0],[1,2]],[[1],[0]],[[2],[5]],[[3],[3]],[[4],[6]],[[5],[8]],[[6],[7]],[[7],[10]],[[8],[9]],[[9],[11]],[[10],[12,13,14,15]],[[11],[17,18]],[[12],[19]],[[13],[21]],[[14],[20]]]},{"latin":"Passer invénit sibi domum, et turtur nidum, ubi repónat pullos suos: altária tua, Dómine virtútum, Rex meus, et Deus meus: beáti, qui hábitant in domo tua, in sǽculum sǽculi laudábunt te.","english":"The sparrow finds a home, and the swallow a nest in which she puts her young - Your altars, O Lord of Hosts, my King and my God! Happy they who dwell in Your house! continually they praise You.","links":[[[0],[1]],[[1],[2]],[[3],[4]],[[4],[5]],[[5],[7]],[[6],[9]],[[7],[10,11]],[[8],[13]],[[9],[15]],[[10],[14]],[[11],[17]],[[12],[16]],[[13],[19]],[[14],[20,21]],[[15],[23]],[[16],[22]],[[17],[24]],[[18],[26]],[[19],[25]],[[20],[27]],[[21],[29]],[[22],[30]],[[23],[31]],[[24],[33]],[[25],[32]],[[26,27,28],[34]],[[29],[35,36]],[[30],[37]]]},{"latin":"Quis dabit ex Sion salutáre Israël? cum avérterit Dóminus captivitátem plebis suæ, exsultábit Iacob, et lætábitur Israël.","english":"Oh, that out of Sion would come the salvation of Israel! When the Lord restores the well being of His people, then shall Jacob exult and Israel be glad.","links":[[[0],[0,1]],[[1],[5,6]],[[2],[2,3]],[[3],[4]],[[4],[8]],[[5],[10]],[[6],[11]],[[7],[14]],[[8],[13]],[[9],[16,17]],[[10],[20]],[[11],[19]],[[12],[21,22,24]],[[13],[23]],[[14],[25]],[[15],[27,28]],[[16],[26]]]},{"latin":"Dómine, quis habitábit in tabernáculo tuo? aut quis requiéscet in monte sancto tuo? Qui ingréditur sine mácula, et operátur iustítiam.","english":"Lord, who shall sojourn in Your tent? Who shall dwell on Your holy mountain? He who walks blamelessly and does justice.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[4]],[[4],[6]],[[5],[5]],[[7],[7]],[[8],[8,9]],[[9],[10]],[[10],[13]],[[11],[12]],[[12],[11]],[[13],[14,15]],[[14],[16]],[[15,16],[17]],[[17],[18]],[[18],[19]],[[19],[20]]]},{"latin":"Notas mihi fecísti vias vitæ: adimplébis me lætítia cum vultu tuo, Dómine.","english":"You will show me the path to life, You will fill me with fullness of joys in Your presence, O Lord.","links":[[[0,2],[0,1,2]],[[1],[3]],[[3],[4,5]],[[4],[6,7]],[[5],[8,9,10]],[[6],[11]],[[7],[12,13,14,15]],[[8],[16]],[[9],[18]],[[10],[17]],[[11],[20]]]},{"latin":"Tu mandásti, mandáta tua custodíri nimis: útinam dirigántur viæ meæ, ad custodiéndas iustificatiónes tuas.","english":"You have commanded that Your precepts be diligently kept. Oh, that I might be firm in the ways of keeping Your statutes!","links":[[[0],[0]],[[1],[1,2,3]],[[2],[5]],[[3],[4]],[[4],[6,8]],[[5],[7]],[[6],[9,10]],[[7],[11,12,13,14]],[[8],[16,17]],[[10],[18]],[[11],[19]],[[12],[21]],[[13],[20]]]},{"latin":"Qui bíberit aquam, quam ego dabo ei, dicit Dóminus, fiet in eo fons aquæ saliéntis in vitam ætérnam.","english":"He who drinks of the water that I will give him, says the Lord, it shall become in him a fountain of water, springing up unto life everlasting.","links":[[[0],[0,1]],[[1],[2]],[[2],[4,5]],[[3],[6]],[[4],[7]],[[5],[8,9]],[[6],[10]],[[7],[11]],[[8],[13]],[[9],[14,15,16]],[[10],[17]],[[11],[18]],[[12],[19,20]],[[13],[21,22]],[[14],[23,24]],[[15],[25]],[[16],[26]],[[17],[27]]]},{"latin":"Nemo te condemnávit, mulier? Nemo, Dómine. Nec ego te condemnábo: iam ámplius noli peccáre.","english":"Has no one condemned you, woman? No one, Lord. Neither will I condemn you; now sin no more.","links":[[[0],[0,1,2]],[[1],[4]],[[2],[3]],[[3],[5]],[[4],[6,7]],[[5],[8]],[[6],[9]],[[7],[11]],[[8],[13]],[[9],[10,12]],[[10],[14]],[[11],[16,17]],[[13],[15]]]},{"latin":"Ierúsalem, quæ ædificátur ut cívitas, cuius participátio eius in idípsum: illuc enim ascendérunt tribus, tribus Dómini, ad confiténdum nómini tuo, Dómine.","english":"Jerusalem, built as a city, with compact unity: to it the tribes go up, the tribes of the Lord, to give thanks to Your Name, O Lord.","links":[[[0],[0]],[[2],[1]],[[3],[2]],[[4],[3,4]],[[6],[7]],[[9],[6]],[[10],[8,9]],[[12],[12,13]],[[13],[10,11]],[[14],[14,15]],[[15],[16,17,18]],[[16],[19]],[[17],[20,21]],[[18],[22,24]],[[19],[23]],[[20],[26]]]},{"latin":"Ab occúltis meis munda me, Dómine: et ab aliénis parce servo tuo.","english":"Cleanse me from my unknown faults, O Lord! From wanton sin especially, restrain Your servant.","links":[[[0],[2]],[[1],[4,5]],[[2],[3]],[[3],[0]],[[4],[1]],[[5],[7]],[[7],[8]],[[8],[9,10,11]],[[9],[12]],[[10],[14]],[[11],[13]]]},{"latin":"Lætábimur in salutári tuo: et in nómine Dómini, Dei nostri, magnificábimur.","english":"May we shout for joy at Your victory and raise the standards in the Name of the Lord our God.","links":[[[0],[0,1,2,3,4]],[[1],[5]],[[2],[7]],[[3],[6]],[[4],[8]],[[5],[12]],[[6],[14]],[[7],[15,16,17]],[[8],[19]],[[9],[18]],[[10],[9,10,11]]]},{"latin":"Lutum fecit ex sputo Dóminus, et linívit óculos meos: et ábii, et lavi, et vidi, et crédidi Deo.","english":"The Lord made clay of spittle, and anointed my eyes: and I went, and I washed, and I saw, and I have believed in God.","links":[[[0],[3]],[[1],[2]],[[2],[4]],[[3],[5]],[[4],[1]],[[5],[6]],[[6],[7]],[[7],[9]],[[8],[8]],[[9],[10]],[[10],[11,12]],[[11],[13]],[[12],[14,15]],[[13],[16]],[[14],[17,18]],[[15],[19]],[[16],[20,21,22]],[[17],[24]]]},{"latin":"Ioseph, fili David, noli timére accípere Maríam cóniugem tuam: quod enim in ea natum est, de Spíritu Sancto est.","english":"Do not be afraid, Joseph, son of David, to take to you Mary your wife, for that which is begotten in her is of the Holy Spirit.","links":[[[0],[4]],[[1],[5]],[[2],[7]],[[3],[0,1]],[[4],[2,3]],[[5],[8,9,10,11]],[[6],[12]],[[7],[14]],[[8],[13]],[[9],[16,17]],[[10],[15]],[[11],[20]],[[12],[21]],[[13],[19]],[[14],[18]],[[15],[23]],[[16],[26]],[[17],[25]],[[18],[22]]]},{"latin":"Videns Dóminus flentes soróres Lázari ad monuméntum, lacrimátus est coram Iudǽis, et exclamávit: Lázare, veni foras: et pródiit ligátis mánibus et pédibus, qui fúerat quatriduánus mórtuus.","english":"The Lord, seeing the sisters of Lazarus weeping at the tomb, wept before the Jews, and cried out: Lazarus, come forth”: and he who had been dead four days came forth, bound hands and feet.","links":[[[0],[2]],[[1],[1]],[[2],[7]],[[3],[3,4]],[[4],[5,6]],[[5],[8]],[[6],[9,10]],[[7,8],[11]],[[9],[12]],[[10],[13,14]],[[11],[15]],[[12],[16,17]],[[13],[18]],[[14],[19]],[[15],[20]],[[16],[21]],[[17],[29,30]],[[18],[31]],[[19],[32]],[[20],[33]],[[21],[34]],[[22],[22,23]],[[23],[24,25]],[[24],[27,28]],[[25],[26]]]},{"latin":"Dóminus regit me, et nihil mihi déerit: in loco páscuæ ibi me collocávit: super aquam refectiónis educávit me.","english":"The Lord is my Shepherd; I shall not want. In verdant pastures He gives me repose; beside restful waters He leads me.","links":[[[0],[1]],[[1],[2,3,4]],[[4],[7]],[[5],[5]],[[6],[6,8]],[[7],[9]],[[9],[10,11]],[[11],[14]],[[12],[12,13,15]],[[13],[16]],[[14],[18]],[[15],[17]],[[16],[19,20]],[[17],[21]]]},{"latin":"Hoc corpus, quod pro vobis tradétur: hic calix novi Testaménti est in meo sánguine, dicit Dóminus: hoc fácite, quotiescúmque súmitis, in meam commemoratiónem.","english":"This is My Body, which shall be given up for you: this is the cup of the new covenant in My Blood, says the Lord; Do this as often as you receive it, in remembrance of Me.","links":[[[0],[0]],[[1],[2,3]],[[2],[4]],[[3],[9]],[[4],[10]],[[5],[5,6,7,8]],[[6],[11]],[[7],[13,14]],[[8],[17]],[[9],[18]],[[10],[12]],[[11],[19]],[[12],[20]],[[13],[21]],[[14],[22]],[[15],[24]],[[16],[26]],[[17],[25]],[[18],[27,28,29]],[[19],[30,31,32]],[[20],[33]],[[21],[35,36]],[[22],[34]]]},{"latin":"Dóminus virtútum ipse est Rex glóriæ.","english":"The Lord of Hosts, He is the King of Glory.","links":[[[0],[1]],[[1],[2,3]],[[2],[4]],[[3],[5]],[[4],[6,7]],[[5],[8,9]]]},{"latin":"Rédime me, Deus Israël, ex ómnibus angústiis meis.","english":"Redeem me, O God of Israel, from all my distress.","links":[[[0],[0]],[[1],[1]],[[2],[3]],[[3],[4,5]],[[4],[6]],[[5],[7]],[[6],[9]],[[7],[8]]]},{"latin":"Ecce, Virgo concípiet et páriet fílium: et vocábitur nomen eius Emmánuel.","english":"Behold a virgin shall be with child, and bear a Son, and shall name Him Emmanuel. P.T.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4,5,6]],[[3],[7]],[[4],[8]],[[5],[10]],[[6],[11]],[[7],[12,13]],[[9],[14]],[[10],[15]]]},{"latin":"Meménto verbi tui servo tuo, Dómine, in quo mihi spem dedísti: hæc me consoláta est in humilitáte mea.","english":"Remember Your word to Your servant, O Lord, since You have given me hope. This is my comfort in my affliction.","links":[[[0],[0]],[[1],[2]],[[2],[1]],[[3],[5]],[[4],[4]],[[5],[7]],[[6],[8]],[[8],[12]],[[9],[13]],[[10],[9,10,11]],[[11],[14]],[[12],[16]],[[13,14],[15,17]],[[15],[18]],[[16],[20]],[[17],[19]]]},{"latin":"Ne tradíderis me, Dómine, in animas persequéntium me: quóniam insurrexérunt in me testes iníqui, et mentíta est iníquitas sibi.","english":"Give me not up, O Lord, to the wishes of my foes; for false witnesses have risen up against me, and such as breathe out violence.","links":[[[0,1],[0,2,3]],[[2],[1]],[[3],[5]],[[4],[6]],[[5],[7,8]],[[6],[9,10,11]],[[8],[12]],[[9],[15,16,17]],[[10],[18]],[[11],[19]],[[12],[14]],[[13],[13]],[[14],[20]],[[15,16],[21,22,23,24]],[[17],[25]]]},{"latin":"Ne tradíderis me, Dómine, in ánimas persequéntium me: quóniam insurrexérunt in me testes iníqui, et mentíta est iníquitas sibi.","english":"Give me not up, O Lord, to the wishes of my foes; for false witnesses have risen up against me, and such as breathe out violence.","links":[[[0,1],[0,2,3]],[[2],[1]],[[3],[5]],[[4],[6]],[[5],[7,8]],[[6],[9,10,11]],[[8],[12]],[[9],[15,16,17]],[[10],[18]],[[11],[19]],[[12],[14]],[[13],[13]],[[14],[20]],[[15,16],[21,22,23,24]],[[17],[25]]]},{"latin":"Pater, si non potest hic calix transíre, nisi bibam illum: fiat volúntas tua.","english":"Father, if this cup cannot pass away, unless I drink it, Your will be done.","links":[[[0],[0]],[[1],[1]],[[2,3],[4]],[[4],[2]],[[5],[3]],[[6],[5,6]],[[7],[7]],[[8],[8,9]],[[9],[10]],[[10],[13,14]],[[11],[12]],[[12],[11]]]},{"latin":"Erubéscant et revereántur simul, qui gratulántur malis meis: induántur pudóre et reveréntia, qui malígna loquúntur advérsus me.","english":"Let them blush: and be ashamed together, who rejoice at my evils. Let them be clothed with confusion and shame, who speak great things against me.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[4,5]],[[3],[6]],[[4],[7]],[[5],[8]],[[6],[11]],[[7],[10]],[[8],[12,13,14,15]],[[9],[17]],[[10],[18]],[[11],[19]],[[12],[20]],[[13],[22,23]],[[14],[21]],[[15],[24]],[[16],[25]]]},{"latin":"Advérsum me exercebántur, qui sedébant in porta: et in me psallébant, qui bibébant vinum: ego vero oratiónem meam ad te, Dómine: tempus benepláciti, Deus, in multitúdine misericórdiæ tuæ.","english":"They that sat in the gate spoke against me: and they that drank wine made me their song. But as for me, my prayer is to thee, O Lord; for the time of thy good pleasure, O God. In the multitude of thy mercy hear me.","links":[[[0],[7]],[[1],[8]],[[2],[6]],[[3],[0,1]],[[4],[2]],[[5],[3]],[[6],[4,5]],[[7],[9]],[[9],[15]],[[10],[14,16,17]],[[11],[10,11]],[[12],[12]],[[13],[13]],[[15],[18,19,20]],[[16],[23]],[[17],[22]],[[18],[25]],[[19],[26]],[[20],[28]],[[21],[29,30,31]],[[22],[32,33,34,35]],[[23],[37]],[[24],[38]],[[25],[39,40]],[[26],[43]],[[27],[42]]]},{"latin":"Potum meum cum fletu temperábam: quia élevans allisísti me: et ego sicut fænum árui: tu autem, Dómine, in ætérnum pérmanes: tu exsúrgens miseréberis Sion, quia venit tempus miseréndi eius.","english":"I mingled my drink with weeping: for having lifted me up, thou hast thrown me down, and I am withered like grass. But thou, O Lord, remainest forever, thou shalt arise, and have mercy on Sion, for the time is come, to have mercy on it.","links":[[[0],[3]],[[1],[2]],[[2],[4]],[[3],[5]],[[4],[0,1]],[[5],[6]],[[6],[7,8,10]],[[7],[11,12,13,15]],[[8],[9,14]],[[9],[16]],[[10],[17]],[[11],[20]],[[12],[21]],[[13],[18,19]],[[14],[23]],[[15],[22]],[[16],[25]],[[18],[27]],[[19],[26]],[[20],[28]],[[21],[29,30]],[[22],[31,32,33,34]],[[23],[35]],[[24],[36]],[[25],[39,40]],[[26],[37,38]],[[27],[41,42,43,44]],[[28],[45]]]},{"latin":"Pascha nostrum immolátus est Christus, allelúia: itaque epulémur in ázymis sinceritátis et veritátis, allelúia, allelúia, allelúia.","english":"Christ our Pasch is immolated, alleluia: therefore let us feast with the unleavened bread of sincerity and truth, alleluia, alleluia, alleluia.","links":[[[0],[2]],[[1],[1]],[[2],[4]],[[3],[3]],[[4],[0]],[[5],[5]],[[6],[6]],[[7],[7,8,9]],[[8],[10]],[[9],[12,13]],[[10],[14,15]],[[11],[16]],[[12],[17]],[[13],[18]],[[14],[19]],[[15],[20]]]},{"latin":"Surréxit Dóminus, et appáruit Petro, allelúia.","english":"The Lord is risen indeed, and hath appeared to Simon.","links":[[[0],[2,3,4]],[[1],[1]],[[2],[5]],[[3],[6,7]],[[4],[8,9]]]},{"latin":"Si consurrexístis cum Christo, quæ sursum sunt quǽrite, ubi Christus est in déxtera Dei sedens, allelúia: quæ sursum sunt sápite, allelúia.","english":"If you be risen with Christ, seek the things that are above; where Christ is sitting at the right hand of God: alleluia. Mind the things that are above, allelúja.","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4]],[[3],[5]],[[4],[7,8,9]],[[5],[11]],[[6],[10]],[[7],[6]],[[8],[12]],[[9],[13]],[[10],[14]],[[11],[16]],[[12],[17,18,19]],[[13],[20,21]],[[14],[15]],[[15],[22]],[[16],[24,25,26]],[[17],[28]],[[18],[27]],[[19],[23]],[[20],[29]]]},{"latin":"Christus resúrgens ex mórtuis iam non móritur, allelúia: mors illi ultra non dominábitur, allelúia, allelúia.","english":"Christ rising again from the dead, dieth now no more, death shall no more have dominion over him, allelúja, allelúja.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4,5]],[[4],[7]],[[5],[8,9]],[[6],[6]],[[8],[10]],[[9],[16,17]],[[10,11],[12,13]],[[12],[11,14,15]],[[13],[18]],[[14],[19]]]},{"latin":"Pópulus acquisitiónis, annuntiáte virtútes eius, allelúia: qui vos de ténebris vocávit in admirábile lumen suum, allelúia.","english":"But you are a chosen generation, a kingly priesthood, a holy nation, a purchased people: that you may declare his virtues, who hath called you out of darkness into his marvellous light: allelúja.","links":[[[0,1],[12,13,14]],[[2],[15,16,17,18]],[[3],[20]],[[4],[19]],[[6],[21]],[[7],[24]],[[8],[25,26]],[[9],[27]],[[10],[22,23]],[[11],[28]],[[12],[30]],[[13],[31]],[[14],[29]],[[15],[32]]]},{"latin":"Data est mihi omnis potéstas in cœlo et in terra, allelúia: eúntes, docéte omnes gentes, baptizántes eos in nómine Patris, et Fílii, et Spíritus Sancti, allelúia, allelúia.","english":"All power is given to me in heaven and in earth. Going therefore, teach ye all nations; baptizing them in the name of the Father, and of the Son, and of the Holy Ghost, allelúja, allelúja.","links":[[[0],[3]],[[1],[2]],[[2],[4,5]],[[3],[0]],[[4],[1]],[[5],[6]],[[6],[7]],[[7],[8]],[[8],[9]],[[9],[10]],[[11],[11,12]],[[12],[13]],[[13],[15]],[[14],[16]],[[15],[17]],[[16],[18]],[[17],[19]],[[18],[20,21]],[[19],[22,23,24]],[[20],[25]],[[21],[26,27,28]],[[22],[29]],[[23],[30,31,32]],[[24],[33]],[[25],[34]],[[26],[35]]]},{"latin":"Omnes, qui in Christo baptizáti estis, Christum induístis, allelúia.","english":"For as many of you as have been baptized in Christ, have put on Christ, allelúja.","links":[[[0],[0,1,2,3,4,5]],[[2],[9]],[[3],[10]],[[4],[8]],[[5],[6,7]],[[6],[14]],[[7],[11,12,13]],[[8],[15]]]},{"latin":"Mitte manum tuam, et cognósce loca clavórum, allelúia: et noli esse incrédulus, sed fidélis, allelúia, allelúia.","english":"Put in thy hand, and know the place of the nails, alleluia; and be not faithless, but believing, alleluia, alleluia.","links":[[[0],[0,1]],[[1],[3]],[[2],[2]],[[3],[4]],[[4],[5]],[[5],[6,7]],[[6],[8,9,10]],[[7],[11]],[[8],[12]],[[9,10],[13,14]],[[11],[15]],[[12],[16]],[[13],[17]],[[14],[18]],[[15],[19]]]},{"latin":"Repósita est mihi coróna iustítiæ, quam reddet mihi Dóminus in illa die iustus iudex. Alleluia","english":"As to the rest, there is laid up for me a crown of justice, which the Lord the just judge will render to me in that day Alleluia","links":[[[0,1],[0,1,2,3,4,5,6,7]],[[2],[8,9]],[[3],[10,11]],[[4],[12,13]],[[5],[14]],[[6],[20,21]],[[7],[22,23]],[[8],[15,16]],[[9],[24]],[[10],[25]],[[11],[26]],[[12],[17,18]],[[13],[19]],[[14],[27]]]},{"latin":"Prædicábant Apóstoli ut pæniténtiam ágerent, et ungébant óleo multos ægros, et sanábant.","english":"The Apostles preached that men should do penance, and anointed with oil many that were sick, and healed them.","links":[[[0],[2]],[[1],[1]],[[2],[3]],[[3],[7]],[[4],[5,6]],[[5],[8]],[[6],[9]],[[7],[10,11]],[[8],[12]],[[9],[13,14,15]],[[10],[16]],[[11],[17]]]},{"latin":"Beáta víscera Maríæ Vírginis, quæ portavérunt ætérni Patris Fílium. Allelúia.","english":"Blessed is the womb of the Virgin Mary, which bore the Son of the eternal Father. Alleluja.","links":[[[0],[0,1]],[[1],[2,3,4]],[[2],[7]],[[3],[5,6]],[[4],[8]],[[5],[9]],[[6],[13,14]],[[7],[15]],[[8],[10,11]],[[9],[16]]]},{"latin":"Ego sum pastor bonus, allelúia: et cognósco oves meas, et cognóscunt me meæ, allelúia, allelúia.","english":"I am the good Shepherd, alleluia: and I know My sheep, and Mine know Me, allelúja, allelúja.","links":[[[0],[0]],[[1],[1]],[[2],[2,4]],[[3],[3]],[[4],[5]],[[5],[6]],[[6],[7,8]],[[7],[10]],[[8],[9]],[[9],[11]],[[10],[13]],[[11],[14]],[[12],[12]],[[13],[15]],[[14],[16]]]},{"latin":"Fidélis servus et prudens, quem constítuit dóminus super famíliam suam: ut det illis in témpore trítici mensúram. Allelúia.","english":"The faithful and prudent servant whom the master will set over his household to give them their ration of grain in due time. Allelúja.","links":[[[0],[1]],[[1],[4]],[[2],[2]],[[3],[3]],[[4],[5]],[[5],[8,9]],[[6],[6,7]],[[7],[10]],[[8],[12]],[[9],[11]],[[10],[13]],[[11],[14]],[[12],[15]],[[13],[20]],[[14],[22]],[[15],[18,19]],[[16],[16,17]],[[17],[23]]]},{"latin":"Tu es Petrus, et super hanc petram ædificábo Ecclésiam meam. Allelúia.","english":"Thou art Peter; and upon this rock I will build My Church, and the gates of hell shall not prevail against it. Allelúja.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]],[[7],[7,8,9]],[[8],[11]],[[9],[10]],[[10],[22]]]},{"latin":"Módicum, et non vidébitis me, allelúia: íterum módicum, et vidébitis me, quia vado ad Patrem, allelúia, allelúia.","english":"A little while, and now you shall not see me; and again a little while, and you shall see me: because I go to the Father, allelúja, allelúja.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[4,5,6,7]],[[3],[8]],[[4],[9]],[[6],[10,11]],[[7],[12,13,14]],[[8],[15]],[[9],[16,17,18]],[[10],[19]],[[11],[20]],[[12],[21,22]],[[13],[23]],[[14],[24,25]],[[15],[26]],[[16],[27]]]},{"latin":"Communicántes Christi passiónibus gaudéte, ut in revelatióne glóriæ eius gaudeátis exsultántes. Allelúia.","english":"But if you partake of the sufferings of Christ, rejoice that when his glory shall be revealed, you may also be glad with exceeding joy, alleluja.","links":[[[0],[0,1,2,3,4,5]],[[1],[8]],[[2],[6,7]],[[3],[9]],[[4],[10]],[[5],[11]],[[6],[14,15,16]],[[7],[13]],[[8],[12]],[[9],[17,18,19,20,21]],[[10],[22,23,24]],[[11],[25]]]},{"latin":"Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus: média autem nocte clamor factus est: Ecce, sponsus venit: exíte óbviam Christo Dómino. Allelúia.","english":"The five wise virgins took oil in their vessels with the lamps. And at midnight there was a cry made: Behold the bridegroom cometh, go ye forth to meet Christ the Lord. Alleluja.","links":[[[0],[0,1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[8]],[[7],[7]],[[8],[9]],[[9],[10,11]],[[10,12],[14]],[[11],[12]],[[13],[17,18]],[[14,15],[16,19]],[[16],[20]],[[17],[21,22]],[[18],[23]],[[19],[24,25,26]],[[20],[27,28]],[[21],[29]],[[22],[30,31]],[[23],[32]]]},{"latin":"Unde huic sapiéntia hæc et virtútes? Nonne hic est fabri fílius? Nonne mater eius dícitur María? Allelúia.","english":"How came this Man by this wisdom and miracles? Is not this the carpenter's Son? Is not His mother called Mary? Alleluia.","links":[[[0],[0]],[[1],[2,3]],[[2,3],[5,6]],[[4],[7]],[[5],[8]],[[6],[9,10]],[[7],[11]],[[9],[13]],[[10],[14]],[[11],[15,16]],[[12],[18]],[[13],[17]],[[14],[19]],[[15],[20]],[[16],[21]]]},{"latin":"Quod dico vobis in ténebris, dícite in lúmine, dicit Dóminus: et quod in aure audítis, prædicáte super tecta, allelúia.","english":"What I tell you in darkness, speak it in the light, says the Lord; and what you hear whispered, preach it on the housetops. Alleluia.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[8]],[[7],[9,10]],[[8],[11]],[[9],[12,13]],[[10],[14]],[[11],[15]],[[14],[16,17,18]],[[15],[19]],[[16],[21]],[[17],[22,23]],[[18],[24]]]},{"latin":"Cum vénerit Paráclitus Spíritus veritátis, ille árguet mundum de peccáto et de iustítia et de iudício, allelúia, allelúia.","english":"And when he is come, he will convince the world of sin, and of justice, and of judgment, alleluia, alleluia.","links":[[[0],[1]],[[1],[3,4]],[[2,3,4],[2]],[[5],[5]],[[6],[6,7]],[[7],[8,9]],[[8],[10]],[[9],[11]],[[10],[12]],[[11],[13]],[[12],[14]],[[13],[15]],[[14],[16]],[[15],[17]],[[16],[18]],[[17],[19]]]},{"latin":"Dilexísti iustítiam, et odísti iniquitátem: proptérea unxit te Deus, Deus tuus, óleo lætítiæ præ consórtibus tuis. Allelúia.","english":"You love justice and hate wickedness; therefore God, your God, has anointed you with the oil of gladness above your fellows. Alleluja.","links":[[[0],[0,1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[10,11]],[[7],[12]],[[8],[7]],[[9],[9]],[[10],[8]],[[11],[13,14,15]],[[12],[16,17]],[[13],[18]],[[14],[20]],[[15],[19]],[[16],[21]]]},{"latin":"Cantáte Dómino, allelúia: cantáte Dómino et benedícite nomen eius: bene nuntiáte de die in diem salutáre eius, allelúia, allelúia.","english":"Sing ye to the Lord and bless his name: shew forth his salvation from day to day, allelúja, allelúja.","links":[[[0],[0,1,2,3]],[[1],[4]],[[5],[5]],[[6],[6]],[[7],[8]],[[8],[7]],[[9,10],[9,10]],[[11],[13]],[[12],[14]],[[13],[15]],[[14],[16]],[[15],[12]],[[16],[11]],[[17],[17]],[[18],[18]]]},{"latin":"Tanto témpore vobíscum sum, et non cognovístis me? Philíppe, qui videt me, videt et Patrem meum, allelúia: non credis, quia ego in Patre, et Pater in me est? Allelúia, allelúia.","english":"Have I been so long a time with you, and you have not known Me? Philip, he who sees Me sees also My Father. Alleluia. Do you not believe that I am in the Father and the Father in Me? Alleluia, alleluia.","links":[[[0],[3,4]],[[1],[5,6]],[[2],[7,8]],[[3],[0,1,2]],[[4],[9]],[[5],[12]],[[6],[10,11,13]],[[7],[14]],[[8],[15]],[[9],[16,17]],[[10],[18]],[[11],[19]],[[12],[20]],[[13],[21]],[[14],[23]],[[15],[22]],[[16],[24]],[[17],[25,27]],[[18],[28]],[[19],[29]],[[20],[30]],[[21],[31,32]],[[22],[33,34]],[[23],[35]],[[24],[36,37]],[[25],[38]],[[26],[39]],[[28],[40]],[[29],[41]]]},{"latin":"Gaudéte, iusti, in Dómino, allelúia: rectos decet collaudátio, allelúia.","english":"Exult, you just, in the Lord, alleluia: praise from the upright is fitting, alleluia.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4,5]],[[4],[6]],[[5],[8,9,10]],[[6],[11,12]],[[7],[7]],[[8],[13]]]},{"latin":"Cantáte Dómino, allelúia: cantáte Dómino et benedícite nomen eius: bene nuntiáte de die in diem salutáre eius, allelúia, allelúia.","english":"Sing to the Lord, alleluia; sing to the Lord; bless His name; announce His salvation day after day, alleluia, alleluia.","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4]],[[3],[5]],[[4],[6,7,8]],[[6],[9]],[[7],[11]],[[8],[10]],[[10],[12]],[[12],[15]],[[13],[16]],[[14],[17]],[[15],[14]],[[16],[13]],[[17],[18]],[[18],[19]]]},{"latin":"Psállite Dómino, qui ascéndit super cœlos cœlórum ad Oriéntem, allelúia.","english":"Sing ye to the Lord, who mounteth above the heaven of heavens to the East, alleluia.","links":[[[0],[0,1]],[[1],[2,3,4]],[[2],[5]],[[3],[6]],[[4],[7]],[[5],[8,9]],[[6],[11]],[[7],[12]],[[8],[13,14]],[[9],[15]]]},{"latin":"Beátus servus, quem, cum vénerit dóminus, invénerit vigilántem: amen, dico vobis, super ómnia bona sua constítuet eum. Allelúia.","english":"Blessed is that servant whom his master, when he comes, shall find watching. Amen I say to you, he will set him over all his goods. Alleluia.","links":[[[0],[0,1]],[[1],[2,3]],[[2],[4]],[[3],[7]],[[4],[8,9]],[[5],[5,6]],[[6],[10,11]],[[7],[12]],[[8],[13]],[[9],[14,15]],[[10],[16,17]],[[11],[22]],[[12],[23]],[[13],[25]],[[14],[24]],[[15],[18,19,20]],[[16],[21]],[[17],[26]]]},{"latin":"Pater, cum essem cum eis, ego servábam eos, quos dedísti mihi, allelúia: nunc autem ad te vénio: non rogo, ut tollas eos de mundo, sed ut serves eos a malo, allelúia, allelúia.","english":"Father, while I was with them, I kept them whom You have given Me, alleluia; but now I am coming to You; I do not pray that You take them out of the world, but that You keep them from evil, alleluia, alleluia.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[7]],[[7],[8]],[[8],[9]],[[9],[10,11,12]],[[10],[13]],[[11],[14]],[[12],[16]],[[13],[15]],[[14],[20]],[[15],[21]],[[16],[17,18,19]],[[17],[23,24]],[[18],[22,25]],[[19],[26]],[[20],[27,28]],[[21],[29]],[[22],[30,31]],[[23],[32,33]],[[24],[34]],[[25],[35]],[[26],[36,37]],[[27],[38]],[[28],[39]],[[29],[40]],[[30],[41]],[[31],[42]]]},{"latin":"Ultimo festivitátis die dicébat Iesus: Qui in me credit, flúmina de ventre eius fluent aquæ vivæ: hoc autem dixit de Spíritu, quem acceptúri erant credéntes in eum, allelúia, allelúia.","english":"On the last day of the feast, Jesus said, He who believes in Me, from within him there shall flow rivers of living water. He said this, however, of the Spirit, Whom they who believed in Him were to receive, alleluia, alleluia.","links":[[[0],[1,2]],[[1],[5,6]],[[2],[3]],[[3],[8]],[[4],[7]],[[5],[9,10]],[[6],[12]],[[7],[13]],[[8],[11]],[[9],[20]],[[10],[14,15]],[[12],[16]],[[13],[17,18,19]],[[14],[21,23]],[[15],[22]],[[16],[26]],[[17],[27]],[[18],[24,25]],[[19],[28]],[[20],[29,30]],[[21],[31]],[[22,23],[37,38,39]],[[24],[32,33,34]],[[25],[35]],[[26],[36]],[[27],[40]],[[28],[41]]]},{"latin":"Factus est repénte de cœlo sonus, tamquam adveniéntis spíritus veheméntis, ubi erant sedéntes, allelúia: et repléti sunt omnes Spíritu Sancto, loquéntes magnália Dei, allelúia, allelúia.","english":"Suddenly there came a sound from heaven, as of a violent wind blowing, where they were sitting, alleluia: and they were all filled with the Holy Spirit, speaking of the wonderful works of God, alleluia, alleluia.","links":[[[0,1],[1,2]],[[2],[0]],[[3],[5]],[[4],[6]],[[5],[3,4]],[[6],[7]],[[7],[12]],[[8],[11]],[[9],[10]],[[10],[13]],[[11],[15]],[[12],[16]],[[13],[17]],[[14],[18]],[[15],[22]],[[16],[19,20]],[[17],[21]],[[18,19],[23,24,25,26]],[[20],[27]],[[21],[28,29,30,31]],[[22],[32,33]],[[23],[34]],[[24],[35]]]},{"latin":"Spíritus Sanctus docébit vos, allelúia: quæcúmque díxero vobis, allelúia, allelúia.","english":"The Holy Spirit will teach you, alleluia: whatever I have said to you, alleluia, alleluia.","links":[[[0],[2]],[[1],[1]],[[2],[3,4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8,9,10]],[[7],[11,12]],[[8],[13]],[[9],[14]]]},{"latin":"Spíritus qui a Patre procédit, allelúia: ille me clarificábit, allelúia, allelúia.","english":"The Spirit Who proceeds from the Father, alleluia: He will glorify Me, alleluia, alleluia.","links":[[[0],[1]],[[1],[2]],[[2],[4]],[[3],[5,6]],[[4],[3]],[[5],[7]],[[6],[8]],[[7],[11]],[[8],[9,10]],[[9],[12]],[[10],[13]]]},{"latin":"Pacem relínquo vobis, allelúia: pacem meam do vobis, allelúia, allelúia.","english":"Peace I leave with you, alleluia; My peace I give to you, alleluia, alleluia.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4]],[[3],[5]],[[4],[7]],[[5],[6]],[[6],[8,9]],[[7],[10,11]],[[8],[12]],[[9],[13]]]},{"latin":"Factus est repénte de cœlo sonus tamquam adveniéntis spíritus veheméntis, ubi erant sedéntes, allelúia: et repléti sunt omnes Spíritu Sancto, loquéntes magnália Dei, allelúia, allelúia.","english":"Suddenly there came a sound from heaven, as of a violent wind blowing, where they were sitting, alleluia: and they were all filled with the Holy Spirit, speaking of the wonderful works of God, alleluia, alleluia.","links":[[[0,1],[1,2]],[[2],[0]],[[3],[5]],[[4],[6]],[[5],[3,4]],[[6],[7]],[[7],[12]],[[8],[11]],[[9],[10]],[[10],[13]],[[11],[15]],[[12],[16]],[[13],[17]],[[14],[18]],[[15],[22]],[[16],[19,20]],[[17],[21]],[[18,19],[23,24,25,26]],[[20],[27]],[[21],[28,29,30,31]],[[22],[32,33]],[[23],[34]],[[24],[35]]]},{"latin":"Non vos relínquam órphanos: véniam ad vos íterum, allelúia: et gaudébit cor vestrum, allelúia.","english":"I will not leave you orphans; I will come to you again, alleluia: and your heart shall rejoice, alleluia.","links":[[[0],[2]],[[1],[4]],[[2],[0,1,3]],[[3],[5]],[[4],[6,7,8]],[[5],[9]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[13]],[[10],[16,17]],[[11],[15]],[[12],[14]],[[13],[18]]]},{"latin":"Spíritus, ubi vult, spirat: et vocem eius audis, allelúia, allelúia: sed nescis, unde véniat aut quo vadat, allelúia, allelúia, allelúia.","english":"The Spirit breaths where He will, and you hear His voice, alleluia, alleluia; but do not know whence He comes or where He goes, alleluia, alleluia, alleluia.","links":[[[0],[1]],[[1],[3]],[[2],[4,5]],[[3],[2]],[[4],[6]],[[5],[10]],[[6],[9]],[[7],[7,8]],[[8],[11]],[[9],[12]],[[10],[13]],[[11],[14,15,16]],[[12],[17]],[[13],[18,19]],[[14],[20]],[[15],[21]],[[16],[22,23]],[[17],[24]],[[18],[25]],[[19],[26]]]},{"latin":"Benedícimus Deum cœli et coram ómnibus vivéntibus confitébimur ei: quia fecit nobíscum misericórdiam suam.","english":"We bless the God of heaven, and before all living we will praise Him; because He has shown His mercy to us.","links":[[[0],[0,1]],[[1],[2,3]],[[2],[4,5]],[[3],[6]],[[4],[7]],[[5],[8]],[[6],[9]],[[7],[10,11,12]],[[8],[13]],[[9],[14]],[[10],[15,16,17]],[[11],[20,21]],[[12],[19]],[[13],[18]]]},{"latin":"Narrábo ómnia mirabília tua: lætábor et exsultábo in te: psallam nómini tuo, Altíssime.","english":"I will relate all thy wonders. I will be glad and rejoice in thee: I will sing to thy name, O thou most high.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[5]],[[3],[4]],[[4],[6,7,8,9]],[[5],[10]],[[6],[11]],[[7],[12]],[[8],[13]],[[9],[14,15,16]],[[10],[17,19]],[[11],[18]],[[12],[20,21,22,23]]]},{"latin":"Quotiescúmque manducábitis panem hunc et cálicem bibétis, mortem Dómini annuntiábitis, donec véniat: itaque quicúmque manducáverit panem vel bíberit calicem Dómini indígne, reus erit córporis et sánguinis Dómini, allelúia.","english":"As often as you shall eat this Bread and drink the cup, you proclaim the death of the Lord, until He comes. Therefore whoever eats this Bread or drinks the cup of the Lord unworthily, will be guilty of the Body and Blood of the Lord. Alleluia.","links":[[[0],[0,1,2]],[[1],[3,4,5]],[[2],[7]],[[3],[6]],[[4],[8]],[[5],[10,11]],[[6],[9]],[[7],[15]],[[8],[16,17,18]],[[9],[12,13]],[[10],[19]],[[11],[20,21]],[[12],[22]],[[13],[23]],[[14],[24]],[[15],[25,26]],[[16],[27]],[[17],[28]],[[18],[29,30]],[[19],[31,32,33]],[[20],[34]],[[21],[37]],[[22],[35,36]],[[23],[38,39,40]],[[24],[41]],[[25],[42]],[[26],[43,44,45]],[[27],[46]]]},{"latin":"Qui vícerit, dabo ei sedére mecum in throno meo: sicut et ego vici et sedi cum Patre meo in throno eius.","english":"He who overcomes, I will permit him to sit with Me upon My throne; as I also have overcome and have sat with My Father on His throne.","links":[[[0],[0,1]],[[1],[2]],[[2],[3,4,5]],[[3],[6]],[[4],[7,8]],[[5],[9,10]],[[6],[11]],[[7],[13]],[[8],[12]],[[9],[14]],[[10],[16]],[[11],[15]],[[12],[17,18]],[[13],[19]],[[14],[20,21]],[[15],[22]],[[16],[24]],[[17],[23]],[[18],[25]],[[19],[27]],[[20],[26]]]},{"latin":"Cantábo Dómino, qui bona tríbuit mihi: et psallam nómini Dómini altíssimi.","english":"I will sing of the Lord, He has been good to me; and I will sing to the Name of the Lord the Most High.","links":[[[0],[0,1,2]],[[1],[3,4,5]],[[2],[6]],[[3],[9]],[[4],[7,8]],[[5],[10,11]],[[6],[12]],[[7],[13,14,15]],[[8],[16,17,18]],[[9],[19,20,21]],[[10],[22,23,24]]]},{"latin":"Dilexísti iustítiam, et odísti iniquitátem: proptérea unxit te Deus, Deus tuus, óleo lætítiæ præ consórtibus tuis.","english":"You love justice and hate wickedness; therefore God, your God, has anointed you with the oil of gladness above your fellows.","links":[[[0],[0,1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[10,11]],[[7],[12]],[[8],[7]],[[9],[9]],[[10],[8]],[[11],[13,14,15]],[[12],[16,17]],[[13],[18]],[[14],[20]],[[15],[19]]]},{"latin":"Unus mílitum láncea latus eius apéruit, et contínuo exívit sanguis et aqua.","english":"One of the soldiers opened His side with a lance, and immediately there came out blood and water.","links":[[[0],[0]],[[1],[1,2,3]],[[2],[7,8,9]],[[3],[6]],[[4],[5]],[[5],[4]],[[6],[10]],[[7],[11]],[[8],[12,13,14]],[[9],[15]],[[10],[16]],[[11],[17]]]},{"latin":"Dico vobis: gáudium est Angelis Dei super uno peccatóre pœniténtiam agénte.","english":"I say to you: there is joy among the angels of God over one sinner who repents.","links":[[[0],[0,1]],[[1],[2,3]],[[2,3],[4,5,6]],[[4],[8,9]],[[5],[10,11]],[[6],[12]],[[7],[13]],[[8],[14]],[[9,10],[15,16]]]},{"latin":"Dóminus firmaméntum meum, et refúgium meum, et liberátor meus: Deus meus, adiútor meus.","english":"O Lord, my rock, my fortress, my deliverer: my God, my rock of refuge!","links":[[[0],[0,1]],[[1],[3]],[[2],[2]],[[4],[5]],[[5],[4]],[[7],[7]],[[8],[6]],[[9],[9]],[[10],[8]],[[11],[11,12,13]],[[12],[10]]]},{"latin":"Magna est glória eius in salutári tuo: glóriam et magnum decórem impónes super eum, Dómine.","english":"Great is his glory in Your victory; majesty and splendor You conferred upon him, O Lord.","links":[[[0],[0]],[[1],[1]],[[2],[3]],[[3],[2]],[[4],[4]],[[5],[6]],[[6],[5]],[[7],[7]],[[8],[8]],[[9,10],[9]],[[11],[10,11]],[[12],[12]],[[13],[13]],[[14],[14,15]]]},{"latin":"Tu, puer, Propheta Altíssimi vocaberis: præíbis enim ante fáciem Dómini paráre vias eius.","english":"You, child, shall be called the prophet of the Most High; for you shall go before the face of the Lord to prepare His ways.","links":[[[0],[0]],[[1],[1]],[[2],[5,6]],[[3],[7,8,9,10]],[[4],[2,3,4]],[[5,6],[11,12,13,14]],[[7],[15]],[[8],[16,17]],[[9],[18,19,20]],[[10],[21,22]],[[11],[24]],[[12],[23]]]},{"latin":"Unam pétii a Dómino, hanc requíram: ut inhábitem in domo Dómini ómnibus diébus vitæ meæ.","english":"One thing I ask of the Lord; this I seek: to dwell in the house of the Lord all the days of my life.","links":[[[0],[0,1]],[[1],[2,3]],[[2],[4]],[[3],[5,6]],[[4],[7]],[[5],[8,9]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[13,14]],[[10],[15,16,17]],[[11],[18]],[[12],[19,20]],[[13],[21,23]],[[14],[22]]]},{"latin":"Christus semel oblátus est ad multórum exhauriénda peccáta: secúndo sine peccáto apparébit exspectántibus se in salútem.","english":"Christ was offered once to take away the sins of many; the second time with no part in sin He will appear unto the salvation of those who await Him.","links":[[[0],[0]],[[1],[3]],[[2,3],[1,2]],[[4],[4]],[[5],[9,10]],[[6],[5,6,7]],[[7],[8]],[[8],[11,12,13]],[[9],[14,15]],[[10],[16,17,18]],[[11],[19,20,21]],[[12],[25,26,27,28]],[[13],[29]],[[14],[22]],[[15],[23,24]]]},{"latin":"Vidéte, quóniam non soli mihi laborávi, sed ómnibus exquiréntibus veritátem.","english":"See that I have not labored for myself only, but for all who seek out the truth.","links":[[[0],[0]],[[1],[1]],[[2],[4]],[[3],[8]],[[4],[6,7]],[[5],[2,3,5]],[[6],[9]],[[7],[10,11]],[[8],[12,13,14]],[[9],[15,16]]]},{"latin":"Circuíbo et immolábo in tabernáculo eius hóstiam iubilatiónis: cantábo et psalmum dicam Dómino.","english":"I will go round, and offer in His tent, sacrifices with shouts of gladness; I will sing and chant praise to the Lord.","links":[[[0],[0,1,2,3]],[[1],[4]],[[2],[5]],[[3],[6]],[[4],[8]],[[5],[7]],[[6],[9]],[[7],[10,11,12,13]],[[8],[14,15,16]],[[9],[17]],[[10,11],[18,19]],[[12],[20,21,22]]]},{"latin":"Quod dico vobis in ténebris, dícite in lúmine, dicit Dóminus: et quod in aure audítis, prædicáte super tecta.","english":"What I tell you in darkness, speak it in the light, says the Lord; and what you hear whispered, preach it on the housetops.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[8]],[[7],[9,10]],[[8],[11]],[[9],[12,13]],[[10],[14]],[[11],[15]],[[14],[16,17,18]],[[15],[19]],[[16],[21]],[[17],[22,23]]]},{"latin":"Quicúmque fécerit voluntátem Patris mei, qui in cœlis est: ipse meus frater et soror et mater est, dicit Dóminus.","english":"Whoever does the will of My Father in heaven, he is My brother and sister and mother, says the Lord.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[4,6]],[[4],[5]],[[6],[7]],[[7],[8]],[[9],[9]],[[10],[11]],[[11],[12]],[[12],[13]],[[13],[14]],[[14],[15]],[[15],[16]],[[16],[10]],[[17],[17]],[[18],[18,19]]]},{"latin":"Inclína aurem tuam, accélera, ut erípias me.","english":"Incline Your ear to me, make haste to deliver me.","links":[[[0],[0]],[[1],[2]],[[2],[1]],[[3],[5,6]],[[4],[7]],[[5],[8]],[[6],[9]]]},{"latin":"Regína mundi digníssima, María Virgo perpétua, intercéde pro nostra pace et salúte, quæ genuísti Christum Dóminum, Salvatórem ómnium.","english":"Most worthy Queen of the world, Mary ever Virgin, who have borne Christ the Lord, the Saviour of all, intercede for our peace and salvation.","links":[[[0],[2]],[[1],[3,4,5]],[[2],[0,1]],[[3],[6]],[[4],[8]],[[5],[7]],[[6],[19]],[[7],[20]],[[8],[21]],[[9],[22]],[[10],[23]],[[11],[24]],[[12],[9]],[[13],[10,11]],[[14],[12]],[[15],[13,14]],[[16],[15,16]],[[17],[17,18]]]},{"latin":"Infírmus fui, et visitástis me. Amen, amen, dico vobis: Quámdiu fecístis uni ex his frátribus meis minimis, mihi fecístis.","english":"I was sick and you visited Me: Amen, amen, I say to you, as long as you did it for one of these the least of My brethren, you did it for Me.","links":[[[0,1],[0,1,2]],[[2],[3]],[[3],[4,5]],[[4],[6]],[[5],[7]],[[6],[8]],[[7],[9,10]],[[8],[11,12]],[[9],[13,14,15]],[[10],[16,17,18]],[[11],[19,20]],[[12],[21]],[[13],[22]],[[16],[23,24,25]],[[15],[26]],[[14],[27]],[[17],[31,32]],[[18],[28,29,30]]]},{"latin":"Gustáte et vidéte, quóniam suávis est Dóminus: beátus vir, qui sperat in eo.","english":"Taste and see how good the Lord is; happy the man who takes refuge in Him.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[7]],[[6],[5,6]],[[7],[8]],[[8],[9,10]],[[9],[11]],[[10],[12,13]],[[11],[14]],[[12],[15]]]},{"latin":"Relígio munda et immaculáta apud Deum et Patrem hæc est: Visitáre pupíllos et víduas in tribulatióne eórum, et immaculátum se custodíre ab hoc sǽculo.","english":"Religion pure and undefiled before God the Father, is this: to give aid to orphans and widows in their tribulation, and to keep oneself unspotted from this world.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[7],[6,7]],[[8],[9]],[[9],[8]],[[10],[10,11,12,13]],[[11],[14]],[[12],[15]],[[13],[16]],[[14],[17]],[[15],[19]],[[16],[18]],[[17],[20]],[[18],[24]],[[19],[23]],[[20],[21,22]],[[21],[25]],[[22],[26]],[[23],[27]]]},{"latin":"Feci iudícium et iustítiam, Dómine, non calumniéntur mihi supérbi: ad ómnia mandáta tua dirigébar, omnem viam iniquitátis ódio hábui.","english":"I have fulfilled just ordinances, O Lord; let not the proud oppress me. For in all Your precepts I go forward; every false way I hate.","links":[[[0],[0,1,2]],[[1,3],[3,4]],[[4],[5,6]],[[5],[7,8]],[[6],[11]],[[7],[12]],[[8],[9,10]],[[9],[14]],[[10],[15]],[[11],[17]],[[12],[16]],[[13],[13,18,19,20]],[[14],[21]],[[15],[23]],[[16],[22]],[[17,18],[24,25]]]},{"latin":"Dómine, quinque talénta tradidísti mihi, ecce, ália quinque superlucrátus sum. Euge, serve bone et fidélis, quia in pauca fuísti fidélis, supra multa te constítuam, intra in gáudium Dómini tui.","english":"Master, you handed over to me five talents; behold, I have gained five others in addition. Well done, good and faithful servant; because you have been faithful over a few things, I will set you over many, enter into the joy of your master.","links":[[[0],[0]],[[1],[6]],[[2],[7]],[[3],[1,2,3,4]],[[4],[5]],[[5],[8]],[[6],[13]],[[7],[12]],[[8,9],[9,10,11]],[[10],[16,17]],[[11],[21]],[[12],[18]],[[13],[19]],[[14],[20]],[[15],[22]],[[16],[27]],[[17],[28,29,30]],[[18],[23,24,25]],[[19],[26]],[[20],[35]],[[21],[36]],[[22],[34]],[[23],[31,32,33]],[[24],[37]],[[25],[38]],[[26],[39,40]],[[27],[41,43]],[[28],[42]]]},{"latin":"Ignem veni míttere in terram: et quid volo, nisi ut accendátur?","english":"I have come to cast fire upon the earth, and what will I but that it be kindled?","links":[[[0],[5]],[[1],[0,1,2]],[[2],[3,4]],[[3],[6]],[[4],[7,8]],[[5],[9]],[[6],[10]],[[7],[11,12]],[[8],[13]],[[9],[14]],[[10],[15,16,17]]]},{"latin":"Acceptábis sacrificium iustítiæ, oblatiónes et holocáusta, super altáre tuum, Dómine.","english":"You shall be pleased with due sacrifices, burnt offerings and holocausts on Your altar, O Lord.","links":[[[0],[0,1,2,3,4]],[[1],[6]],[[2],[5]],[[3],[7,8]],[[4],[9]],[[5],[10]],[[6],[11]],[[7],[13]],[[8],[12]],[[9],[15]]]},{"latin":"Visiónem, quam vidístis, némini dixéritis, donec a mórtuis resúrgat Fílius hóminis.","english":"Tell the vision you have seen to no one, till the Son of Man has risen from the dead.","links":[[[0],[1,2]],[[2],[3,4,5]],[[3],[6,7,8]],[[4],[0]],[[5],[9]],[[6],[16]],[[7],[17,18]],[[8],[14,15]],[[9],[10,11]],[[10],[12,13]]]},{"latin":"Hónora Dóminum de tua substántia, et de prímitiis frugum tuárum: et implebúntur hórrea tua saturitáte, et vino torculária redundábunt.","english":"Honor the Lord with your wealth, with first fruits of all your produce. Then will your barns be filled with grain, with new wine your vats will overflow.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4]],[[4],[5]],[[6],[6]],[[7],[7,8]],[[8],[9,10,12]],[[9],[11]],[[10],[13]],[[11],[14,17,18]],[[12],[16]],[[13],[15]],[[14],[19,20]],[[15],[21]],[[16],[22,23]],[[17],[24,25]],[[18],[26,27]]]},{"latin":"Qui mihi mínistrat, me sequátur: et ubi ego sum, illic et miníster meus erit.","english":"If anyone serves Me, let him follow Me; and where I am there also shall My servant be.","links":[[[0],[0,1]],[[1],[3]],[[2],[2]],[[3],[7]],[[4],[4,5,6]],[[5],[8]],[[6],[9]],[[7],[10]],[[8],[11]],[[9],[12]],[[10],[13]],[[11],[16]],[[12],[15]],[[13],[14,17]]]},{"latin":"Beátam me dicent omnes generatiónes, quia fecit mihi magna qui potens est.","english":"All generations shall call me blessed; because He Who is mighty has done great things for me.","links":[[[0],[5]],[[1],[4]],[[2],[2,3]],[[3],[0]],[[4],[1]],[[5],[6]],[[6],[11,12]],[[7],[15,16]],[[8],[13,14]],[[9],[7,8]],[[10],[10]],[[11],[9]]]},{"latin":"De fructu óperum tuórum, Dómine, satiábitur terra: ut edúcas panem de terra, et vinum lætíficet cor hóminis: ut exhílaret fáciem in óleo, et panis cor hóminis confírmet.","english":"The earth is replete with the fruit of Your works, O Lord; You produce bread from the earth, and wine to gladden men’s hearts, so that their faces gleam with oil, and bread fortifies the hearts of men.","links":[[[0],[4]],[[1],[5,6]],[[2],[7,9]],[[3],[8]],[[4],[10,11]],[[5],[2,3]],[[6],[1]],[[8],[12,13]],[[9],[14]],[[10],[15]],[[11],[16,17]],[[12],[18]],[[13],[19]],[[14],[20,21]],[[15],[23]],[[16],[22]],[[17],[24,25]],[[18],[28]],[[19],[26,27]],[[20],[29]],[[21],[30]],[[22],[31]],[[23],[32]],[[24],[34,35]],[[25],[36,37]],[[26],[33]]]},{"latin":"Dixit Iesus matri suæ: Múlier, ecce fílius tuus: deinde dixit discípulo: Ecce mater tua. Et ex illa hora accépit eam discípulus in sua.","english":"Jesus said to His Mother, Woman, behold your son. Then He said to the disciple, Behold your mother. And from that hour the disciple took her into his home.","links":[[[0],[1]],[[1],[0]],[[2],[2,4]],[[3],[3]],[[4],[5]],[[5],[6]],[[6],[8]],[[7],[7]],[[8],[9]],[[9],[10,11]],[[10],[12,13,14]],[[11],[15]],[[12],[17]],[[13],[16]],[[14],[18]],[[15],[19]],[[16],[20]],[[17],[21]],[[18],[24]],[[19],[25]],[[20],[22,23]],[[21],[26]],[[22],[27,28]]]},{"latin":"Panem de cœlo dedísti nobis, Dómine, habéntem omne delectaméntum et omnem sapórem suavitátis.","english":"You have given us, O Lord, bread from heaven, endowed with all delights and the sweetness of every taste.","links":[[[0],[6]],[[1],[7]],[[2],[8]],[[3],[0,1,2]],[[4],[3]],[[5],[4,5]],[[6],[9,10]],[[7],[11]],[[8],[12]],[[9],[13]],[[10],[17]],[[11],[14,15,16]],[[12],[18]]]},{"latin":"Sínite párvulos veníre ad me, et ne prohibuéritis eos: tálium est enim regnum Dei.","english":"Let the little children come to Me, and do not hinder them, for of such is the kingdom of God.","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8,9]],[[7],[10]],[[8],[11]],[[9],[13,14]],[[10],[15]],[[11],[12]],[[12],[16,17]],[[13],[18,19]]]},{"latin":"Primum quǽrite regnum Dei, et ómnia adiiciéntur vobis, dicit Dóminus.","english":"Seek first the Kingdom of God; and all things shall be given you besides, says the Lord.","links":[[[0],[1]],[[1],[0]],[[2],[2,3]],[[3],[4,5]],[[4],[6]],[[5],[7,8]],[[6],[9,10,11]],[[7],[12]],[[8],[14]],[[9],[15,16]]]},{"latin":"Caro enim mea vere est cibus: et sanguis meus, vere est potus; qui mandúcat meam carnem et bibit meum sánguinem, in me manet, et ego in illo.","english":"My Flesh is food indeed, and My Blood is drink indeed. He who eats My Flesh and drinks My Blood, abides in Me and I in him.","links":[[[0],[1]],[[2],[0]],[[3],[4]],[[4],[2]],[[5],[3]],[[6],[5]],[[7],[7]],[[8],[6]],[[9],[10]],[[10],[8]],[[11],[9]],[[12],[11,12]],[[13],[13]],[[14],[14]],[[15],[15]],[[16],[16]],[[17],[17]],[[18],[18]],[[19],[19]],[[20],[21]],[[21],[22]],[[22],[20]],[[23],[23]],[[24],[24]],[[25],[25]],[[26],[26]]]},{"latin":"Dómine, memorábor iustítiæ tuæ solíus: Deus, docuísti me a iuventúte mea: et usque in senéctam et sénium, Deus, ne derelínquas me.","english":"O Lord, I will tell of Your singular justice; O God, You have taught me from my youth; and now that I am old and gray, O God, forsake me not.","links":[[[0],[0,1]],[[1],[2,3,4,5]],[[2],[8]],[[3],[6]],[[4],[7]],[[5],[9,10]],[[6],[11,12,13]],[[7],[14]],[[8],[15]],[[9],[17]],[[10],[16]],[[11],[18]],[[13],[19,20]],[[14],[21,22,23]],[[15],[24]],[[16],[25]],[[17],[26,27]],[[18,19],[28,30]],[[20],[29]]]},{"latin":"Per signum Crucis de inimícis nostris líbera nos, Deus noster.","english":"Through the sign of the Cross, deliver us from our enemies, O our God.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4,5]],[[3],[8]],[[4],[10]],[[5],[9]],[[6],[6]],[[7],[7]],[[8],[11,13]],[[9],[12]]]},{"latin":"Ego sum pauper et dolens: salus tua, Deus, suscépit me. Laudábo nomen Dei cum cantico: et magnificábo eum in laude.","english":"I am afflicted and in pain; let Your saving help, O God, protect me. I will praise the name of God in song, and I will glorify Him with thanksgiving.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4,5]],[[5,6],[6,7,8,9]],[[7],[10,11]],[[8],[12]],[[9],[13]],[[10],[14,15,16]],[[11],[17,18]],[[12],[19,20]],[[13],[21]],[[14],[22]],[[15],[23]],[[16],[24,25,26]],[[17],[27]],[[18],[28]],[[19],[29]]]},{"latin":"Vovéte et réddite Dómino, Deo vestro, omnes, qui in circúitu eius affértis múnera: terríbili, et ei qui aufert spíritum príncipum: terríbili apud omnes reges terræ.","english":"Make vows to the Lord, your God, and fulfill them; let all round about Him bring gifts to the terrible Lord Who checks the pride of princes, Who is terrible to the kings of the earth.","links":[[[0],[0,1]],[[1],[7]],[[2],[8,9]],[[3],[2,3,4]],[[4],[6]],[[5],[5]],[[6],[10,11]],[[8,9],[12,13]],[[10],[14]],[[11],[15]],[[12],[16]],[[13],[17,18,19,20]],[[16],[21]],[[17],[22]],[[18],[23,24]],[[19],[25,26]],[[20],[27,28,29]],[[21],[30]],[[23],[31,32]],[[24],[33,34,35]]]},{"latin":"Magna est glória eius in salutári tuo: glóriam et magnum deI córem ímpones super eum, Dómine.","english":"Great is his glory in Your victory; majesty and splendor You conferred upon him, O Lord.","links":[[[0],[0]],[[1],[1]],[[2],[3]],[[3],[2]],[[4],[4]],[[5],[6]],[[6],[5]],[[7],[7]],[[8],[8]],[[9,10,11],[9]],[[12],[10,11]],[[13],[12]],[[14],[13]],[[15],[14,15]]]},{"latin":"Comédite pínguia et bíbite mulsum, et míttite partes his, qui non præparavérunt sibi: sanctus enim dies Dómini est, nolíte contristári: gáudium étenim Dómini est fortitúdo nostra.","english":"Eat fat meats, and drink sweet wine, and send portions to those who have not prepared for themselves: because it is the holy day of the Lord, be not sad, for the joy of the Lord is our strength.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4]],[[4],[5,6]],[[5],[7]],[[6],[8]],[[7],[9]],[[8],[10,11]],[[9],[12]],[[10],[13,14]],[[11],[15]],[[12],[16,17]],[[13],[22]],[[14,17],[18,19,20]],[[15],[23]],[[16],[24,25,26]],[[18],[27,28]],[[19],[29]],[[20],[31,32]],[[21],[30]],[[22],[33,34,35]],[[23],[36]],[[24],[38]],[[25],[37]]]},{"latin":"Aufer a me oppróbrium et contémptum, quia mandáta tua exquisívi, Dómine: nam et testimónia tua meditátio mea est.","english":"Take away from me reproach and contempt, for I observe Your decrees, O Lord. Your decrees are my delight.","links":[[[0],[0,1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[7]],[[7],[11]],[[8],[10]],[[9],[8,9]],[[10],[12,13]],[[13],[15]],[[14],[14]],[[15],[18]],[[16],[17]],[[17],[16]]]},{"latin":"Mense séptimo festa celebrábitis, cum in tabernáculis habitáre fécerim fílios Israël, cum edúcerem eos de terra Ægýpti, ego Dóminus, Deus vester.","english":"In the seventh month you shall keep this feast, as I made the Israelites dwell in booths, when I led them out of the land of Egypt. I, the Lord, am your God.","links":[[[0],[0,1,3]],[[1],[2]],[[2],[7,8]],[[3],[4,5,6]],[[4],[9]],[[5],[15]],[[6],[16]],[[7],[14]],[[8],[10,11]],[[9,10],[12,13]],[[11],[17]],[[12],[18,19]],[[13],[20]],[[14],[21,22]],[[15],[23,24]],[[16],[25,26]],[[17],[27]],[[18],[28,29]],[[19],[32]],[[20],[30,31]]]},{"latin":"Tóllite hóstias, et introíte in átria eius: adoráte Dóminum in aula sancta eius.","english":"Bring gifts and enter His courts; worship the Lord in His holy court.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[5],[5]],[[6],[4]],[[7],[6]],[[8],[7,8]],[[9],[9]],[[10],[12]],[[11],[11]],[[12],[10]]]},{"latin":"Qui vult veníre post me, ábneget semetípsum, et tollat crucem suam, et sequátur me.","english":"He who wishes to come after Me, let him deny himself, and take up his cross, and follow Me.","links":[[[0],[0,1]],[[1],[2]],[[2],[3,4]],[[3],[5]],[[4],[6]],[[5],[7,8,9]],[[6],[10]],[[7],[11]],[[8],[12,13]],[[9],[15]],[[10],[14]],[[11],[16]],[[12],[17]],[[13],[18]]]},{"latin":"Benedícite, omnes Angeli Dómini, Dóminum: hymnum dícite et superexaltáte eum in sǽcula, allelúia.","english":"All you Angels of the Lord, bless the Lord: sing a hymn, and exalt Him above all forever.","links":[[[0],[6]],[[1],[0]],[[2],[1,2]],[[3],[3,4,5]],[[4],[7,8]],[[5],[10,11]],[[6],[9]],[[7],[12]],[[8],[13]],[[9],[14]],[[10,11],[15,16,17]]]},{"latin":"Benedícite, omnes Angeli Dómini, Dóminum: hymnum dícite et superexaltáte eum in sǽcula.","english":"All you Angels of the Lord, bless the Lord: sing a hymn, and exalt Him above all forever.","links":[[[0],[6]],[[1],[0]],[[2],[1,2]],[[3],[3,4,5]],[[4],[7,8]],[[5],[10,11]],[[6],[9]],[[7],[12]],[[8],[13]],[[9],[14]],[[10,11],[15,16,17]]]},{"latin":"Circumdúxit eam, et dócuit: et custodívit quasi pupíllam óculi sui. Sicut aquila expándit alas suas, et assúmpsit eam, atque portávit in húmeris suis. Dóminus solus dux eius fuit.","english":"He led her about and taught her, and He guarded her as the apple of His eye. As an eagle He spread His wings to receive her and bore her up on His pinions. The Lord alone was her leader.","links":[[[0],[0,1,3]],[[1],[2,6]],[[2],[4]],[[3],[5]],[[4],[7]],[[5],[8,9]],[[6],[11]],[[7],[12,13]],[[8],[14,16]],[[9],[15]],[[10],[17]],[[11],[18,19]],[[12],[20,21]],[[13],[23]],[[14],[22]],[[16],[24,25]],[[17],[26]],[[18],[27]],[[19],[28]],[[20],[31]],[[21],[33]],[[22],[32]],[[23],[34,35]],[[24],[36]],[[25],[39]],[[26],[38]],[[27],[37]]]},{"latin":"Tu mandásti mandáta tua custodíri nimis: útinam dirigántur viæ meæ, ad custodiéndas iustificatiónes tuas.","english":"You have commanded that Your precepts be diligently kept. Oh, that I might be firm in the ways of keeping Your statutes!","links":[[[0],[0]],[[1],[1,2,3]],[[2],[5]],[[3],[4]],[[4],[6,8]],[[5],[7]],[[6],[9,10]],[[7],[11,12,13,14]],[[8],[16,17]],[[10],[18]],[[11],[19]],[[12],[21]],[[13],[20]]]},{"latin":"Floréte, flores, quasi lílium, et date odórem, et frondéte in grátiam, collaudáte cánticum, et benedícite Dóminum in opéribus suis.","english":"Break forth in blossoms like the lily, and yield a smell, and bring forth leaves in grace, and praise with canticles, and bless the Lord in His works.","links":[[[0],[0,1,2,3]],[[2],[4]],[[3],[5,6]],[[4],[7]],[[5],[8]],[[6],[9,10]],[[7],[11]],[[8],[12,13,14]],[[9],[15]],[[10],[16]],[[11],[18]],[[12],[20]],[[13],[21]],[[14],[22]],[[15],[23,24]],[[16],[25]],[[17],[27]],[[18],[26]]]},{"latin":"Quæ mihi fuérunt lucra, hæc arbitrátus sum propter Christum detriménta.","english":"The things that were gain to me, these, for the sake of Christ, I have counted loss.","links":[[[0],[0,1,2]],[[1],[5,6]],[[2],[3]],[[3],[4]],[[4],[7]],[[5,6],[13,14,15]],[[7],[8,9,10,11]],[[8],[12]],[[9],[16]]]},{"latin":"Ego dilécto meo, et diléctus meus mihi, qui páscitur inter lília.","english":"I belong to my lover and my lover to me; He browses among the lilies.","links":[[[0],[0]],[[1],[4]],[[2],[3]],[[3],[5]],[[4],[7]],[[5],[6]],[[6],[8,9]],[[7],[10]],[[8],[11]],[[9],[12]],[[10],[13,14]]]},{"latin":"In salutári tuo ánima mea, et in verbum tuum sperávi: quando fácies de persequéntibus me iudícium? iníqui persecúti sunt me, ádiuva me, Dómine, Deus meus.","english":"My soul pines for Your salvation; I hope in Your word. When will You do judgment on my persecutors? The wicked persecuted me wrongfully; help me, O Lord my God!","links":[[[0],[3]],[[1],[5]],[[2],[4]],[[3],[1]],[[4],[0]],[[6],[8]],[[7],[10]],[[8],[9]],[[9],[6,7]],[[10],[11]],[[11],[12,13,14]],[[12],[16]],[[13],[18]],[[14],[17]],[[15],[15]],[[16],[19,20]],[[17,18],[21]],[[19],[22]],[[20],[24]],[[21],[25]],[[22],[26,27]],[[23],[29]],[[24],[28]]]},{"latin":"Date, et dábitur vobis: mensúram bonam et confértam et coagitátam et supereffluéntem dabunt in sinum vestrum.","english":"Give, and it shall be given to you; good measure, pressed down, shaken together, running over, shall they pour into your lap.","links":[[[0],[0]],[[1],[1]],[[2],[2,3,4,5]],[[3],[6,7]],[[4],[9]],[[5],[8]],[[7],[10,11]],[[9],[12,13]],[[11],[14,15]],[[12],[16,17,18]],[[13],[19]],[[14],[21]],[[15],[20]]]},{"latin":"Sedébit Dóminus Rex in ætérnum: Dóminus benedícet pópulo suo in pace.","english":"The Lord is enthroned as King forever; may the Lord bless His people with peace!","links":[[[0],[2,3]],[[1],[1]],[[2],[4,5]],[[4],[6]],[[5],[8,9]],[[6],[10]],[[7],[12]],[[8],[11]],[[9],[13]],[[10],[14]]]},{"latin":"Ego clamávi, quóniam exaudísti me, Deus: inclína aurem tuam et exáudi verba mea.","english":"I call upon You, for You will answer me, O God; incline Your ear to me; hear my word.","links":[[[0],[0]],[[1],[1,2,3]],[[2],[4]],[[3],[5,6,7]],[[4],[8]],[[5],[9,10]],[[6],[11]],[[7],[13]],[[8],[12]],[[10],[16]],[[11],[18]],[[12],[17]]]},{"latin":"Beáti mundo corde, quóniam ipsi Deum vidébunt; beáti pacífici, quóniam filii Dei vocabúntur: beáti, qui persecutiónem patiúntur propter iustítiam, quóniam ipsórum est regnum cœlórum.","english":"Blessed are the clean of heart, for they shall see God. Blessed are the peacemakers, for they shall be called children of God. Blessed are they who suffer persecution for justice’ sake, for theirs is the kingdom of heaven.","links":[[[0],[0,1]],[[1],[3]],[[2],[4,5]],[[3],[6]],[[4],[7]],[[5],[10]],[[6],[8,9]],[[7],[11,12]],[[8],[13,14]],[[9],[15]],[[10],[20]],[[11],[21,22]],[[12],[16,17,18,19]],[[13],[23,24]],[[14],[25,26]],[[15],[28]],[[16],[27]],[[17],[29]],[[18],[30,31]],[[19],[32]],[[20],[33]],[[21],[34]],[[22],[35,36]],[[23],[37,38]]]},{"latin":"Amen, dico vobis, quidquid orántes pétitis, crédite, quia accipiétis, et fiet vobis.","english":"Amen I say to you, all things whatever you ask for in prayer, believe that you shall receive, and it shall be done to you.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4]],[[3],[5,6,7]],[[4],[11,12]],[[5],[8,9,10]],[[6],[13]],[[7],[14]],[[8],[15,16,17]],[[9],[18]],[[10],[19,20,21,22]],[[11],[23,24]]]},{"latin":"Domus mea domus oratiónis vocábitur, dicit Dóminus: in ea omnis, qui petit, áccipit; et qui quærit, invénit; et pulsánti aperiétur.","english":"My house shall be called a house of prayer, says the Lord; in it everyone who asks receives: and he who seeks finds, and to him who knocks it shall be opened.","links":[[[0],[1]],[[1],[0]],[[2],[5,6]],[[3],[7,8]],[[4],[2,3,4]],[[5],[9]],[[6],[10,11]],[[7],[12]],[[8],[13]],[[9],[14]],[[10],[15]],[[11],[16]],[[12],[17]],[[13],[18]],[[14],[19,20]],[[15],[21]],[[16],[22]],[[17],[23]],[[18],[24,25,26,27]],[[19],[28,29,30,31]]]},{"latin":"Dóminus dabit benignitátem: et terra nostra dabit fructum suum.","english":"The Lord will give His benefits: and our land shall yield its increase.","links":[[[0],[0,1]],[[1],[2,3]],[[2],[4,5]],[[3],[6]],[[4],[8]],[[5],[7]],[[6],[9,10]],[[7],[12]],[[8],[11]]]},{"latin":"Veníte post me: fáciam vos fíeri piscatóres hóminum; at illi contínuo, relíctis rétibus, secúti sunt Dóminum.","english":"Come, follow Me, and I will make you fishers of men. And at once they left the nets, and followed the Lord.","links":[[[0],[0,1]],[[2],[2]],[[3],[3,4,5,6]],[[4],[7]],[[6],[8]],[[7],[9,10]],[[8],[11]],[[9],[14]],[[10],[12,13]],[[11],[15]],[[12],[17]],[[13,14],[19]],[[15],[20,21]]]},{"latin":"Ierúsalem, surge et sta in excélso, et vide iucunditátem, quæ véniet tibi a Deo tuo.","english":"Up, Jerusalem! stand upon the heights; and behold the joy that comes to you from your God.","links":[[[1],[0]],[[3],[2]],[[0],[1]],[[4],[3]],[[5],[4,5]],[[6],[6]],[[7],[7]],[[8],[8,9]],[[9],[10]],[[10],[11]],[[11],[12,13]],[[12],[14]],[[13],[16]],[[14],[15]]]},{"latin":"Gloriósa dicta sunt de te, María: quia fecit tibi magna qui potens est.","english":"Glorious things are said of you, O Mary, for He Who is mighty has done great things for you.","links":[[[0],[0,1]],[[1,2],[2,3]],[[3],[4]],[[4],[5]],[[5],[6,7]],[[6],[8]],[[7],[13,14]],[[8],[17,18]],[[9],[15,16]],[[10],[9,10]],[[11],[12]],[[12],[11]]]},{"latin":"Dícite: pusillánimes, confortámini et nolíte timére: ecce, Deus noster véniet et salvábit nos.","english":"Say to those who are frightened: Be strong, fear not! Here is our God, He comes to save us.","links":[[[0],[0]],[[1],[1,2,3,4,5]],[[2],[6,7]],[[4,5],[8,9]],[[6],[10]],[[7],[13]],[[8],[12]],[[9],[14,15]],[[10],[16]],[[11],[17]],[[12],[18]]]},{"latin":"Ecce, Dóminus véniet et omnes Sancti eius cum eo: et erit in die illa lux magna.","english":"Behold, the Lord shall come, and all His holy ones with Him: and there shall be in that day a great light.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4]],[[3],[5]],[[4],[6]],[[5],[8,9]],[[6],[7]],[[7],[10]],[[8],[11]],[[9],[12]],[[10],[13,14,15]],[[11],[16]],[[12],[18]],[[13],[17]],[[14],[19,21]],[[15],[20]]]},{"latin":"Exsultávit ut gigas ad curréndam viam: a summo cœlo egréssio eius, et occúrsus eius usque ad summum eius.","english":"He has rejoiced as a giant to run the way: at one end of the heavens He comes forth, and His course is to their other end.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[4,5]],[[3],[6]],[[4],[7]],[[5],[8,9]],[[6],[10]],[[7],[11,12]],[[8],[13,14,15]],[[10],[16]],[[9],[17,18]],[[11],[19]],[[12],[21]],[[13],[20]],[[15],[22,23]],[[16],[24,25,26]]]},{"latin":"Revelábitur glória Dómini: et vidébit omnis caro salutáre Dei nostri.","english":"The glory of the Lord shall be revealed, and all mankind shall see the salvation of our God.","links":[[[0],[5,6,7]],[[1],[0,1]],[[2],[2,3,4]],[[3],[8]],[[4],[11,12]],[[5],[9]],[[6],[10]],[[7],[13,14]],[[8],[15,17]],[[9],[16]]]},{"latin":"In splendóribus Sanctórum, ex útero ante lucíferum génui te.","english":"In holy splendor, before the daystar I have begotten You.","links":[[[0],[0]],[[1],[2]],[[2],[1]],[[5],[3]],[[6],[4,5]],[[7],[6,7,8]],[[8],[9]]]},{"latin":"Vídeo cœlos apértos, et Iesum stantem a dextris virtútis Dei: Dómine Iesu, accipe spíritum meum, et ne státuas illis hoc peccátum.","english":"I see the heavens opened, and Jesus standing on the right hand of the power of God: Lord Jesus receive my spirit, and do not lay this sin against them.","links":[[[0],[0,1]],[[1],[2,3]],[[2],[4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[8]],[[7],[9,10,11]],[[8],[12,13,14]],[[9],[15,16]],[[10],[17]],[[11],[18]],[[12],[19]],[[13],[21]],[[14],[20]],[[15],[22]],[[16],[23,24]],[[17],[25]],[[18],[28,29]],[[19],[26]],[[20],[27]]]},{"latin":"Tolle Púerum et Matrem eius, et vade in terram Israël: defúncti sunt enim, qui quærébant ánimam Púeri.","english":"Take the Child and His mother, and go into the land of Israel, for those who sought the Child’s life are dead.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[5]],[[4],[4]],[[5],[6]],[[6],[7]],[[7],[8]],[[8],[9,10]],[[9],[11,12]],[[10,11],[20,21]],[[12],[13]],[[13],[14,15]],[[14],[16]],[[15],[19]],[[16],[17,18]]]},{"latin":"Ego sum pastor bonus, allelúia: et cognósco oves meas, et cognóscunt me meæ, allelúia, allelúia.","english":"I am the Good Shepherd, and I know My sheep, and Mine know Me.","links":[[[0],[0]],[[1],[1]],[[2],[2,4]],[[3],[3]],[[5],[5]],[[6],[6,7]],[[7],[9]],[[8],[8]],[[9],[10]],[[10],[12]],[[11],[13]],[[12],[11]]]},{"latin":"Semel iurávi in sancto meo: Semen eius in ætérnum manébit: et sedes eius sicut sol in conspéctu meo, et sicut luna perfécta in ætérnum, et testis in coelo fidélis.","english":"Once, by My holiness, have I sworn; his posterity shall continue forever, and his throne shall be like the sun before Me; like the moon, which remains forever.","links":[[[0],[0]],[[1],[4,5,6]],[[2],[1]],[[3],[3]],[[4],[2]],[[5],[8]],[[6],[7]],[[8],[11]],[[9],[9,10]],[[10],[12]],[[11],[14]],[[12],[13]],[[13],[17]],[[14],[18,19]],[[15,16],[20]],[[17],[21]],[[19],[22]],[[20],[23,24]],[[23],[27]]]},{"latin":"Ecce, Virgo concípiet et páriet fílium: et vocábitur nomen eius Emmánuel.","english":"Behold, the virgin shall be with child and bear a Son, and shall name Him Emmanuel.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4,5,6]],[[3],[7]],[[4],[8]],[[5],[10]],[[6],[11]],[[7],[12,13]],[[9],[14]],[[10],[15]]]},{"latin":"Ecce, Virgo concípiet et páriet fílium: et vocábitur nomen eius Emmánuel.","english":"Behold, a virgin shall be with child and bear a son, and shall name Him Emmanuel.","links":[[[0],[0]],[[1],[1,2]],[[2],[3,4,5,6]],[[3],[7]],[[4],[8]],[[5],[10]],[[6],[11]],[[7],[12,13]],[[9],[14]],[[10],[15]]]},{"latin":"Mitte manum tuam, et cognósce loca clavórum, allelúia: et noli esse incrédulus, sed fidélis, allelúia, allelúia.","english":"Put in your hand and know the place of the nails, and be not unbelieving, but believing.","links":[[[0],[0,1]],[[1],[3]],[[2],[2]],[[3],[4]],[[4],[5]],[[5],[6,7]],[[6],[8,9,10]],[[8],[11]],[[9,10],[12,13]],[[11],[14]],[[12],[15]],[[13],[16]]]},{"latin":"4 Esdr 2:35; 2:34\nLux ætérna lúceat eis, Dómine:\n* Cum Sanctis tuis in ætérnum: quia pius es.\n℣. Requiem ætérnam dona eis, Dómine: et lux perpétua lúceat eis.\n* Cum Sanctis tuis in ætérnum: quia pius es.","english":"4 Esdr 2:35; 2:34\nMay light eternal shine upon them, O Lord, with Your Saints forever, for You are kind.\n℣. Grant them eternal rest, O Lord; and let perpetual light shine upon them: with Your Saints forever, for You are kind.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[7]],[[7],[8]],[[8],[9]],[[9],[10,11]],[[10],[12,13]],[[11],[14]],[[12],[16]],[[13],[15]],[[14,15],[17]],[[16],[18]],[[17],[21]],[[18],[19,20]],[[19],[25]],[[20],[24]],[[21],[22]],[[22],[23]],[[23],[26,27]],[[24],[28]],[[25],[31]],[[26],[30]],[[27],[29,32]],[[28],[33,34]],[[29],[35]],[[30],[37]],[[31],[36]],[[32,33],[38]],[[34],[39]],[[35],[42]],[[36],[40,41]]]},{"latin":"25. Cum ad altare maius pervenerint, illud ascendunt, diaconus sacram pyxidem super corporale, acolythi autem candelabra super altare deponunt. Genuflexione peracta, diaconus dimittit velum humerale et se retrahit ad latus Epistolæ; acolythi vero descendunt hinc inde, et genuflectunt in infimo gradu altaris.\n26. Tunc celebrans et subdiaconus accedunt ad altare, utroque genu adorant, illud ascendunt, et facta, una cum diacono, genuflexione, celebrans clara voce recitat, non cantat, præfationem orationis dominicse Oremus. Præceptis salutaribus moniti. Totum vero Pater noster, cum sit precatio ad Communionem, omnes præsentes, clerici et fideles, una cum celebrante, solemniter, graviter et distincte recitant, lingua latina addito quoque ab omnibus Amen. Celebrans, iunctis manibus, dicit solus:\n℣. Oremus.\nPræcéptis salutáribus móniti, et divína institutióne formǽti, audémus dícere:\nCelebrans, item iunctis manibus, et omnes præsentes prosequuntur:\n℣. Pater noster, qui es in coelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in coelo, et in terra. Panem nostrum cotidianum da nobis hodie: et dimitte nobis debita nostra, sicut et nos dimittibus debitoribus nostris. Et ne nos inducas in tentationem; sed libera nos a malo. Amen.\n27. Celebrans solus, clara et distincta voce atque manibus extensis, prosequitur:\n℣. Líbera nos, quǽsumus, Dómine, ab ómnibus malis, prætéritis, præséntibus, et futúris: et intercedénte beáta et gloriósa semper Vírgine Dei Genetríce María, cum beátis Apóstolis tuis Petro et Paulo, atque Andréa, et ómnibus Sanctis, da propítius pacem in diébus nostris: ut ope misericórdiæ tuæ adiúti, et a peccáto simus semper líberi, et ab omni perturbatióne secúri. Per eúndem Dóminum nostrum Iesum Christum Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum.\nEt ab omnibus respondetur:\n℟. Amen.\n28. Et continuo celebrans recitat, submissa voce, sequentem orationem, de more inclinatus, manibusque iunctis super altare positis:\n℣. Percéptio Córporis tui, Dómine Iesu Christe, quod ego indígnus súmere præsúmo, non mihi provéniat in iudícium et condemnatiónem: sed pro tua pietáte prosit mihi ad tutaméntum mentis, et córporis, et ad medélam percipiéndam. Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum. Amen.\n29. Turn discooperit pyxidem, et, facta genuflexione, accipit sacram particulam, et, tenens illam supra pyxidem, inclinatus et pectus percutiens, ter dicit, more solito:\n℣. Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea.\n℣. Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea.\n℣. Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea.\n30. Postea, signans se Sacramento, adiungit submissa voce:\n℣. Corpus Dómini nostri Iesu Christi custódiat ánimam meam in vitam ætérnam. Amen.\nEt sumit Corpus reverenter, ac paululum in meditatione Sacramenti quiescit.\n31. Et continuo diaconus facit confessionem. Tunc celebrans, facta genuflexione, conversus ad populum, manibus iunctis ante pectus, clara voce dicit:\n℣. Misereátur vestri omnípotens Deus, et, dimíssis peccátis vestris, perdúcat vos ad vitam ætérnam.\nOmnes respondent:\nAmen.\nCelebrans prosequitur:\n℣. Indulgéntiam, absolutiónem ✠ et remissiónem peccatórum vestrórum tríbuat vobis omnípotens et miséricors Dóminus.\nOmnes respondent:\nAmen.\n32. Deinde ad altare se convertit, genuflectit, apprehendit pyxidem, et more solito conversus ad populum, in medio altaris, dicit clara voce:\nEcce Agnus Dei, ecce qui tollit peccáta mundi.\nMox subdit:\nDómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea.\nquod iterum ac tertio repetit.\nEt procedit ad distributionem Communionis, ut supra feria V in Cena Domini, 159, n. 29, dictum est. Sacerdotes vero stolam violaceam deferunt.\n33. Dum sacra Communio distribuitur, cani potest psalmus 21 Deus meus, Deus meus; vel unum aliudve responsorium ex Matutino huius feriæ VI.\n34. Communione absoluta, celebrans digitos abluit in vase, ac purificatorio abstergit, nihil dicens; pyxidem vero in tabernaculo reponit.\n35. His completis, celebrans stans in medio altaris, habens ante se librum, a dextris et a sinistris ministros sacros, dicit pro gratiarum actione, in tono feriali et manibus iunctis, tres sequentes orationes, omnibus stantibus et Amen respondentibus.","english":"At the High Altar the Deacon places the Ciborium on a corporal, and the Celebrant and Subdeacon with double genuflections join him there. Without delay the Celebrant recites:\n℣. Let us pray.\nInstructed by Thy saving precepts, and following Thy divine institution, we make bold to say:\nWhereupon all present, clergy and faithful, recite the Pater Noster in Latin, as preparation for Communion; this recitation should be “solemn, grave, distinct.”\n℣. Our Father, who art in Heaven: hallowed be Thy name. Thy kingdom come. Thy will be done on earth as it is in Heaven. Give us this day our daily bread: and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation; but deliver us from evil. Amen.\nThe Celebrant continues alone with:\n℣. Deliver us, we beseech Thee, O Lord, from all evils, past, present, and to come; and by the intercession of the blessed and glorious ever Virgin Mary, Mother of God, and of the Holy Apostles, Peter and Paul, and of Andrew, and of all the Saints, mercifully grant peace in our days, that through the assistance of Thy mercy we may be always free from sin, and secure from all disturbance. Through the same Jesus Christ, Thy Son, our Lord, Who with Thee in the unity of the Holy Ghost liveth and reigneth God, world without end.\nAnd all answer together:\n℟. Amen.\nThe celebrant joins his hands and bows, and in a lower voice continues:\n℣. Let not the partaking of Thy Body, O Lord Jesus Christ, which I, though unworthy, presume to receive, turn to my judgment and condemnation; but let it, through Thy mercy, become a safeguard and remedy, both for soul and body; Who with God the Father, in the unity of the Holy Ghost, livest and reignest God, for ever and ever. Amen.\nHe opens the Ciborium, genuflects, and takes out a sacred particle. He then makes his Communion as usual:\n℣. Lord, I am not worthy that Thou shouldst enter under my roof; say but the word, and my soul shall be healed.\n℣. Lord, I am not worthy that Thou shouldst enter under my roof; say but the word, and my soul shall be healed.\n℣. Lord, I am not worthy that Thou shouldst enter under my roof; say but the word, and my soul shall be healed.\n℣. May the body of our Lord Jesus Christ preserve my soul unto life everlasting. Amen.\nThe Deacon then makes his confession. The Celebrant, having genuflected and turned to the people, says with hands joined before his breast, in a clear voice:\n℣. May almighty God have mercy on you, forgive you your sins, and bring you to life everlasting.\nAll answer:\nAmen.\nThe Celebrant continues:\n℣. May the almighty and merciful Lord grant you pardon, absolution, ✠ and remission of your sins.\nAll answer:\nAmen.\nHe then turns back to the altar, genuflects, takes up the Ciborium, and, turning to the people as usual, standing in the middle of the altar, says in a clear voice:\nBehold the Lamb of God, behold Him Who taketh away the sins of the world.\nHe then adds:\nLord, I am not worthy that Thou shouldst enter under my roof; say but the word, and my soul shall be healed.\nThis he repeats a second and a third time.\nHe then proceeds to distribute Communion, as described above for Holy Thursday, n. 29. The priests, however, wear a violet stole.\nWhile Holy Communion is being distributed, Psalm 21, Deus meus, Deus meus, may be sung; or some other responsory from Matins of this Friday.\nWhen Communion is finished, the Celebrant washes his fingers in a vessel and dries them with the purificator, saying nothing; and he replaces the Ciborium in the tabernacle.\nWhen this is finished, the Celebrant, standing in the middle of the altar with the book before him and the sacred ministers at his right and left, says, as an act of thanksgiving, in the ferial tone and with hands joined, the three following prayers, all standing and answering Amen.","links":[[[3],[3]],[[8],[5]],[[10],[8]],[[11],[9]],[[12],[11]],[[44],[14]],[[46],[16]],[[47],[20]],[[49],[22]],[[60],[19]],[[61],[26]],[[64],[27]],[[76],[54]],[[77],[55]],[[82],[61]],[[83],[47]],[[84],[48]],[[85],[49]],[[87],[51]],[[91],[66]],[[92],[67]],[[94],[68]],[[95],[52]],[[96,97],[57]],[[108],[28,29,30]],[[109],[35]],[[110],[34]],[[111],[31]],[[112],[36]],[[113],[39]],[[114],[40]],[[115],[37]],[[116],[41,42,43]],[[117],[44,45]],[[126],[70]],[[127],[69]],[[128],[71]],[[129],[72]],[[130],[73]],[[131],[74]],[[132],[75,76]],[[133],[78]],[[134],[77]],[[135],[81]],[[136],[80]],[[137],[79]],[[138],[84,85]],[[139],[83]],[[140],[82]],[[141],[88]],[[142],[91]],[[143],[92]],[[145],[86]],[[146],[87]],[[147],[99]],[[148],[97]],[[149],[98]],[[150],[93]],[[151],[94]],[[152],[95,96]],[[153],[100]],[[154],[101]],[[155],[102]],[[156],[104]],[[157],[103]],[[158],[105]],[[160],[106]],[[161],[107]],[[162],[108,109,110]],[[163],[112]],[[164],[113]],[[165],[116]],[[166],[115]],[[167],[114]],[[168],[117]],[[169],[118]],[[170],[119]],[[171],[120]],[[172],[121]],[[173],[122]],[[174],[123]],[[175],[124]],[[177],[126]],[[178],[128]],[[186],[127,129]],[[187],[130]],[[188],[131]],[[189],[132,133]],[[190],[135,136]],[[191],[137]],[[192],[138]],[[193],[139]],[[194],[140]],[[195],[141]],[[196],[142]],[[197],[143,144]],[[198],[145]],[[199],[146,147,148]],[[200],[151]],[[201],[152]],[[202],[153]],[[203],[154]],[[204],[155]],[[205],[159]],[[206],[157,158]],[[207],[156]],[[208],[160,161]],[[209],[163]],[[210],[164]],[[212],[165]],[[213],[166]],[[214],[167]],[[215],[168]],[[216],[170]],[[217],[171,172]],[[218],[173]],[[219],[174,175]],[[220],[177]],[[221],[176]],[[222],[178]],[[223],[179]],[[224],[181]],[[225],[180]],[[226],[182]],[[227,230],[183,184,185]],[[228],[188]],[[229],[187]],[[232],[194]],[[233],[195]],[[234],[189,190,191]],[[235],[192]],[[236],[193]],[[237],[196]],[[238],[198]],[[239],[199]],[[240],[200]],[[241],[197]],[[242],[201]],[[243],[203]],[[244],[209]],[[245],[208]],[[246],[204]],[[247],[205]],[[248],[207]],[[249],[206]],[[250],[210]],[[251],[211,212]],[[252],[220]],[[253],[221]],[[254],[222]],[[255],[213]],[[256],[215]],[[257],[219]],[[258],[218]],[[259],[223]],[[260,261,262,263],[224,225,226]],[[264],[227]],[[266],[228]],[[267],[229,230]],[[268],[231]],[[272],[233]],[[273],[244]],[[274],[242]],[[275],[243]],[[280],[238]],[[281],[235,236]],[[282],[234]],[[286],[247,248]],[[287],[251]],[[288],[250]],[[289],[252,253]],[[290],[254]],[[291],[255]],[[292],[256]],[[293],[257]],[[294],[258,259]],[[295],[261,262]],[[296],[260]],[[297],[246]],[[298],[265]],[[299],[245,263]],[[301],[266]],[[302],[267]],[[303],[268]],[[304],[269]],[[305],[272]],[[306],[273]],[[307],[274]],[[308],[270,271,275]],[[311],[276,277]],[[312],[282]],[[313],[283]],[[314],[284]],[[315],[278]],[[317],[279]],[[319],[285]],[[320],[297]],[[321],[298]],[[322],[299]],[[323],[286]],[[324],[287]],[[325],[288,289]],[[326],[290]],[[327],[292]],[[328],[296]],[[329],[295]],[[330],[300]],[[331,332,333,334],[301,302,303,304]],[[335],[305]],[[338],[307]],[[339],[309]],[[340],[311]],[[341,342],[310]],[[343],[312,313]],[[344],[315]],[[345],[316]],[[346],[317,318]],[[356],[319,320,321,322,323]],[[359],[324]],[[360],[327]],[[361],[325,326]],[[362],[328]],[[363],[329]],[[364],[330,331,332]],[[365],[333]],[[366],[335]],[[367],[334]],[[368],[337]],[[370],[336]],[[371],[338,339]],[[372],[340]],[[373],[343,344,345]],[[374],[342]],[[375],[341]],[[376],[346]],[[377],[349]],[[378],[347,348]],[[379],[350]],[[380],[351]],[[381],[352,353,354]],[[382],[355]],[[383],[357]],[[384],[356]],[[385],[359]],[[387],[358]],[[388],[360,361]],[[389],[362]],[[390],[365,366,367]],[[391],[364]],[[392],[363]],[[393],[368]],[[394],[371]],[[395],[369,370]],[[396],[372]],[[397],[373]],[[398],[374,375,376]],[[399],[377]],[[400],[379]],[[401],[378]],[[402],[381]],[[404],[380]],[[405],[382,383]],[[406],[384]],[[407],[387,388,389]],[[408],[386]],[[409],[385]],[[418],[391,392]],[[419],[395]],[[420],[394]],[[421],[396]],[[422],[397]],[[423],[390,398]],[[424],[400]],[[425],[399]],[[426],[401]],[[427],[402]],[[428],[403]],[[429],[404]],[[442],[407]],[[443],[406]],[[444],[408]],[[445],[409,410]],[[447],[411,412]],[[448,449],[413,414]],[[450],[415,416]],[[451],[417]],[[452],[418,419]],[[453],[422]],[[454],[423]],[[455],[424]],[[456],[425,426]],[[457],[428,429]],[[458],[430]],[[459],[420,421]],[[460],[431,434,435]],[[461],[436,437]],[[462],[432]],[[463],[433]],[[464],[442]],[[465],[438]],[[466],[441]],[[467],[440]],[[468],[443]],[[469],[444,445]],[[471],[446]],[[472],[447]],[[473],[448]],[[474],[449]],[[475],[450]],[[476],[452]],[[477],[453]],[[478],[462]],[[479],[463]],[[480],[464]],[[481],[465]],[[482],[468]],[[483],[466,467]],[[484],[454,460]],[[485],[461]],[[486],[455,456]],[[487],[457]],[[488],[458]],[[489],[459]],[[490],[469]],[[491],[470]],[[492],[471]],[[494],[472,473]],[[495],[476]],[[496],[478]],[[498],[474,475]],[[499],[479]],[[500],[480,481]],[[501],[483]],[[502],[484]],[[503,504],[489,490]],[[505],[485]],[[506],[486]],[[507],[488]],[[508],[492]],[[509],[494]],[[510],[497]],[[511],[498]],[[512],[501]],[[513],[502]],[[514],[503]],[[515],[504,505]],[[516],[506,507]],[[517],[508,509]],[[518],[510]],[[519],[511,512]],[[520],[513,514]],[[521],[515,516,517]],[[522],[518,519]],[[523],[520]],[[524],[521]],[[525],[524]],[[526],[522,523]],[[527],[525]],[[528],[526]],[[529],[527,528,529]],[[530],[530]],[[531],[532]],[[532],[531]],[[533],[534]],[[535],[533]],[[536],[535,536]],[[537],[537]],[[538],[540,541,542]],[[539],[539]],[[540],[538]],[[541],[543]],[[542],[546,547]],[[543],[548]],[[544],[549,550,551]],[[545],[544,545]],[[546],[552,553]],[[547],[554]],[[548],[555]],[[549],[556]],[[550],[557]],[[551],[558]],[[552],[560]],[[553,554,555,556,557],[562,563]],[[559],[564]],[[560],[565]],[[561,562],[559]],[[563],[567]],[[564],[568]],[[565],[572]],[[566],[571]],[[567],[569,570]],[[569],[573]],[[570],[574]],[[571],[575]],[[572],[576,577,578]],[[573],[587]],[[574],[585,586]],[[575],[579]],[[576],[580]],[[577],[581]],[[578],[582]],[[579],[583]],[[580],[584]],[[581],[588]],[[582],[589]],[[583],[590]],[[584],[591]],[[585],[592]],[[586],[593]],[[587],[595]],[[588,589],[596]],[[591],[598]],[[592],[597,599,600]],[[593],[602]],[[594],[605]],[[595],[603]],[[596],[606]],[[597],[608]],[[598],[609]],[[599],[614]],[[600],[610,611]],[[601],[616]],[[602],[615]],[[603],[621]],[[604],[617,618]],[[605],[622]],[[606],[624]],[[607],[619]],[[609],[626]],[[610],[625,627,628]],[[611],[630]],[[612],[631]],[[613],[632]],[[614],[634]],[[615],[637]],[[616],[638]],[[617],[641]],[[618],[642]],[[619],[640]],[[621],[649]],[[622],[650]],[[624],[651]],[[625,626],[644,645,646]],[[627],[652]],[[628],[653,654]],[[629],[657]],[[630],[655,656]],[[631],[658]],[[632],[659,661]],[[633],[660]],[[634],[662]],[[635],[664]],[[636],[665]],[[637],[667]],[[638],[668]],[[639],[669]],[[640],[670]],[[641],[671]],[[642],[672]],[[643],[674]],[[644],[673]]]},{"latin":"Eccli 36:18","english":"Eccli 36:18","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Da pacem, Dómine, sustinéntibus te, ut prophétæ tui fidéles inveniántur: exáudi preces servi tui et plebis tuæ Israël","english":"Give peace, O Lord, to those who have hoped in You, and let Your Prophets be proved true. Hear the prayers of Your servant, and of Your people Israel.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[5,6,7,8]],[[4],[10]],[[5],[12]],[[6],[14]],[[7],[13]],[[8],[17]],[[9],[15,16]],[[10],[18]],[[11],[20]],[[12],[23]],[[13],[22]],[[14],[24]],[[15],[27]],[[16],[26]],[[17],[28]]]},{"latin":"Ps 121:1","english":"Ps 121:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Lætátus sum in his, quæ dicta sunt mihi: in domum Dómini íbimus.","english":"I rejoiced because they said to me, We will go up to the house of the Lord.","links":[[[0,1],[0,1]],[[2,3],[2]],[[5],[4]],[[7],[5,6]],[[8],[11]],[[9],[13]],[[10],[16]],[[11],[7,8,9]]]},{"latin":"Ps 102:20","english":"Ps 102:20","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Benedícite Dóminum, omnes Angeli eius: poténtes virtúte, qui fácitis verbum eius, ad audiéndam vocem sermónum eius.","english":"Bless the Lord, all you His Angels, you mighty in strength, who do His bidding, obeying His spoken word.","links":[[[0],[0]],[[1],[2]],[[2],[3]],[[3],[6]],[[4],[5]],[[5],[8]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[14]],[[10],[13]],[[12],[15]],[[13],[18]],[[14],[17]],[[15],[16]]]},{"latin":"Ps 102:1","english":"Ps 102:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Benedic, ánima mea, Dómino: et ómnia, quæ intra me sunt, nómini sancto eius.","english":"Bless the Lord, O my soul; and, all my being, bless His holy name.","links":[[[0],[0]],[[1],[5]],[[2],[4]],[[3],[1,2]],[[4],[6]],[[5],[7]],[[7],[8]],[[8],[9]],[[10],[13]],[[11],[12]],[[12],[11]]]},{"latin":"Bénedic, ánima mea, Dómino: et ómnia, quæ intra me sunt, nómini sancto eius.","english":"Bless the Lord, O my soul; and, all my being, bless His holy name.","links":[[[0],[0]],[[1],[5]],[[2],[4]],[[3],[1,2]],[[4],[6]],[[5],[7]],[[7],[8]],[[8],[9]],[[10],[13]],[[11],[12]],[[12],[11]]]},{"latin":"Cant 4:8-9.","english":"Song 4:8-9","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Veni de Líbano, sponsa mea, veni de Líbano, veni: vulnerásti cor meum, soror mea sponsa, vulnerásti cor meum.","english":"Come from Lebanon, My bride, come from Lebanon, come! You have ravished My Heart, My sister, My bride; you have ravished My Heart.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[4]],[[4],[3]],[[5],[5]],[[6],[6]],[[7],[7]],[[8],[8]],[[9],[10,11]],[[10],[13]],[[11],[12]],[[12],[15]],[[13],[14]],[[14],[17]],[[15],[19,20]],[[16],[22]],[[17],[21]]]},{"latin":"Ps 112:1","english":"Ps 112:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Laudáte, púeri, Dóminum: laudáte nomen Dómini.","english":"Praise the Lord, you children, praise the name of the Lord.","links":[[[0],[0]],[[1],[4]],[[2],[2]],[[3],[5]],[[4],[7]],[[5],[10]]]},{"latin":"Salus pópuli ego sum, dicit Dóminus: de quacúmque tribulatióne clamáverint ad me, exáudiam eos: et ero illórum Dóminus in perpétuum.","english":"I am the salvation of the people, says the Lord; in whatever tribulation they shall cry to Me, I will hear them; and I will be their Lord forever.","links":[[[0],[3]],[[1],[6]],[[2],[0]],[[3],[1]],[[4],[7]],[[5],[9]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[14,15]],[[10],[16]],[[11],[17]],[[12],[18,19,20]],[[13],[21]],[[14],[22]],[[15],[23,24,25]],[[16],[26]],[[17],[27]],[[19],[28]]]},{"latin":"Salus pópuli ego sum, dicit Dóminus: de quacúmque tribulatióne clamáverint ad me, exáudiam eos: et ero illórum Dóminus in perpétuum","english":"I am the salvation of the people, says the Lord; in whatever tribulation they shall cry to Me, I will hear them; and I will be their Lord forever.","links":[[[0],[3]],[[1],[6]],[[2],[0]],[[3],[1]],[[4],[7]],[[5],[9]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[14,15]],[[10],[16]],[[11],[17]],[[12],[18,19,20]],[[13],[21]],[[14],[22]],[[15],[23,24,25]],[[16],[26]],[[17],[27]],[[19],[28]]]},{"latin":"Salus pópuli ego sum, dicit Dóminus: de quacúmque tribulatióne clamáverint ad me, exáudiam eos: et ero illórum Dóminus in perpétuum","english":"I am the salvation of the people, says the Lord. From whatever tribulation they shall cry to Me, I will hear them; and I will be their Lord forever.","links":[[[0],[3]],[[1],[6]],[[2],[0]],[[3],[1]],[[4],[7]],[[5],[9]],[[6],[10]],[[7],[11]],[[8],[12]],[[9],[14,15]],[[10],[16]],[[11],[17]],[[12],[18,19,20]],[[13],[21]],[[14],[22]],[[15],[23,24,25]],[[16],[26]],[[17],[27]],[[19],[28]]]},{"latin":"Ps 77:1","english":"Ps 77:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Attendite, pópule meus, legem meam: inclináte aurem vestram in verba oris mei.","english":"Hearken, My people, to My teaching; incline your ears to the words of My mouth.","links":[[[0],[0]],[[1],[2]],[[2],[1]],[[3],[5]],[[4],[4]],[[5],[6]],[[6],[8]],[[7],[7]],[[8],[9]],[[9],[11]],[[10],[14]],[[11],[13]]]},{"latin":"Ps 36:30-31","english":"Ps 36:30-31","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Os iusti meditábitur sapiéntiam, et lingua eius loquétur iudícium: lex Dei eius in corde ipsíus.","english":"The mouth of the just man tells of wisdom, and his tongue utters what is right. The law of his God is in his heart.","links":[[[0],[1]],[[1],[4,5]],[[2],[6]],[[3],[8]],[[4],[9]],[[5],[11]],[[6],[10]],[[7],[12]],[[8],[13,14,15]],[[9],[17]],[[10],[20]],[[11],[19]],[[12],[22]],[[13],[24]],[[14],[23]]]},{"latin":"Gaudeámus omnes in Dómino, diem festum celebrántes sub honóre beátæ Maríæ Vírginis: de cuius sollemnitáte gaudent Angeli et colláudant Fílium Dei.","english":"Let us all rejoice in the Lord, keeping a feastday in honor of the Blessed Virgin Mary, for whose celebration the angels rejoice and unite in praising the Son of God.","links":[[[0],[0,1,3]],[[1],[2]],[[2],[4]],[[3],[6]],[[4,5],[9]],[[6],[7]],[[7],[10]],[[8],[11]],[[9],[14]],[[10],[16]],[[11],[15]],[[12],[17]],[[13],[18]],[[14],[19]],[[15],[22]],[[16],[21]],[[17],[23]],[[18],[24,25,26]],[[19],[28]],[[20],[30]]]},{"latin":"Ps 44:2","english":"Ps 44:2","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Eructávit cor meum verbum bonum: dico ego ópera mea Regi.","english":"My heart overflows with a goodly theme; as I sing my ode to the King.","links":[[[0],[2]],[[1],[1]],[[2],[0]],[[3],[6]],[[4],[5]],[[5],[9]],[[6],[8]],[[7],[11]],[[8],[10]],[[9],[14]]]},{"latin":"Ps 118:75; 118:120","english":"Ps 118:75; 118:120","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Cognóvi, Dómine, quia ǽquitas iudícia tua, et in veritáte tua humiliásti me: confíge timóre tuo carnes meas, a mandátis tuis tímui.","english":"I know, O Lord, that Your ordinances are just, and in Your faithfulness You have afflicted me. Pierce my flesh with Your fear; I fear Your ordinances.","links":[[[0],[0,1]],[[1],[2,3]],[[2],[4]],[[3],[8]],[[4],[6]],[[5],[5]],[[6],[9]],[[7],[10]],[[8],[12]],[[9],[11]],[[10],[14,15]],[[11],[16]],[[12],[17]],[[13],[22]],[[14],[21]],[[15],[19]],[[16],[18]],[[18],[26]],[[19],[25]],[[20],[23,24]]]},{"latin":"Ps 118:1","english":"Ps 118:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Beáti immaculáti in via: qui ámbulant in lege Dómini.","english":"Happy are they whose way is blameless, who walk in the law of the Lord.","links":[[[0],[0]],[[1],[6]],[[3],[4]],[[4],[7]],[[5],[8]],[[6],[9]],[[7],[11]],[[8],[14]]]},{"latin":"Eccli 42:15-16.","english":"Ecclus 42:15-16","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"In sermónibus Dómini ópera eius: sol illúminans per ómnia respéxit, et glória Dómini plenum est opus eius.","english":"At the Lord’s word were His works brought into being. As the rising sun is clear to all, so the glory of the Lord shines upon all His works.","links":[[[0],[0]],[[1],[3]],[[2],[2]],[[3],[6]],[[4],[5]],[[5],[13]],[[6],[12]],[[7],[16]],[[8],[17]],[[9],[14,15]],[[10],[18]],[[11],[20]],[[12],[23]],[[13],[24]],[[15],[28]],[[16],[27]]]},{"latin":"Ps 95:1","english":"Ps 95:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Cantáte Dómino cánticum novum: cantáte Dómino, omnis terra.","english":"Sing to the Lord a new song; sing to the Lord, all you lands.","links":[[[0],[0]],[[1],[3]],[[2],[6]],[[3],[5]],[[4],[7]],[[5],[10]],[[6],[11]],[[7],[13]]]},{"latin":"Dan 3:31; 31:29; 31:35","english":"Dan 3:31; 3:29; 3:35","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]]]},{"latin":"Omnia, quæ fecísti nobis, Dómine, in vero iudício fecísti, quia peccávimus tibi et mandátis tuis non obœdívimus: sed da glóriam nómini tuo, et fac nobíscum secúndum multitúdinem misericórdiæ tuæ.","english":"All that You have done to us, O Lord, You have done in true judgment; because we have sinned against You, and we have not obeyed your commandments; but give glory to Your name, and deal with us according to the multitude of Your mercy.","links":[[[0],[0]],[[1],[1]],[[2],[3,4]],[[3],[6]],[[4],[7,8]],[[5],[12]],[[6],[13]],[[7],[14]],[[8],[10,11]],[[9],[15]],[[10],[17,18]],[[11],[20]],[[12],[21]],[[13],[27]],[[14],[26]],[[15],[24]],[[16],[25]],[[17],[28]],[[18],[29]],[[19],[30]],[[20],[33]],[[21],[32]],[[22],[34]],[[23],[35]],[[24],[36,37]],[[25],[38,39]],[[26],[41]],[[27],[44]],[[28],[43]]]},{"latin":"Ioann 21:15-17","english":"John 21:15-17","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Si díligis me, Simon Petre, pasce agnos meos, pasce oves meas.","english":"If thou lovest me, Simon Peter, feed my lambs, feed my sheep.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[6]],[[6],[8]],[[7],[7]],[[8],[9]],[[9],[11]],[[10],[10]]]},{"latin":"Ps 29:2","english":"Ps 29:2","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Exaltábo te, Dómine, quóniam suscepísti me, nec delectásti inimícos meos super me.","english":"I will extol thee, O Lord, for thou hast upheld me: and hast not made my enemies to rejoice over me.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[4,5]],[[3],[6]],[[4],[8,9]],[[5],[10]],[[6],[11,13]],[[7],[14,18]],[[8],[16]],[[9],[15]],[[10],[19]],[[11],[20]]]},{"latin":"Dilexísti iustítiam, et odísti iniquitátem: proptérea unxit te Deus, Deus tuus, óleo lætítiæ præ consórtibus tuis.","english":"Thou hast loved justice, and hated iniquity: therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows.","links":[[[0],[0,1,2]],[[1],[3]],[[2],[4]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[11,12]],[[7],[13]],[[8],[8]],[[9],[10]],[[10],[9]],[[11],[16]],[[12],[18]],[[13],[19]],[[14],[21]],[[15],[20]]]},{"latin":"Eructávit cor meum verbum bonum: dico ego ópera mea Regi.","english":"My heart hath uttered a good word I speak my works to the king.","links":[[[0],[3]],[[1],[1]],[[2],[0]],[[3],[6]],[[4],[5]],[[5],[8]],[[6],[7]],[[7],[10]],[[8],[9]],[[9],[13]]]},{"latin":"Cant 2:3.","english":"Cant 2:3","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Sub umbra illíus, quem desideráveram, sedi: et fructus eius dulcis gútturi meo.","english":"I rest in His shadow Whom I desire, and His fruit is sweet to my mouth.","links":[[[0],[2]],[[1],[4]],[[2],[3]],[[3],[5]],[[4],[6,7]],[[5],[0,1]],[[6],[8]],[[7],[10]],[[8],[9]],[[9],[12]],[[10],[15]],[[11],[14]]]},{"latin":"Ps 83:2-3","english":"Ps 83:2-3","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Esth 13:9; 13:10-11","english":"Esth 13:9-11","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[5],[3]]]},{"latin":"In voluntáte tua, Dómine, univérsa sunt pósita, et non est, qui possit resístere voluntáti tuæ: tu enim fecísti ómnia, cœlum et terram et univérsa, quæ cœli ámbitu continéntur: Dominus universórum tu es","english":"In Your will are all things, O Lord, and there is none that can resist Your will; for You have made all things, heaven and earth, and all things that are under the cope of heaven. You are Lord of all.","links":[[[0],[0]],[[1],[2]],[[2],[1]],[[3],[6,7]],[[4],[4,5]],[[5],[3]],[[7],[8]],[[8],[11]],[[9],[9,10]],[[10],[12]],[[11],[13]],[[12],[14]],[[13],[16]],[[14],[15]],[[15],[18]],[[16],[17]],[[17],[19,20]],[[18],[21,22]],[[19],[23]],[[20],[24]],[[21],[25]],[[22],[26]],[[23],[27,28]],[[24],[29]],[[25],[35]],[[26],[33]],[[27],[30,31]],[[28],[38]],[[29],[39,40]],[[30],[36]],[[31],[37]]]},{"latin":"In voluntáte tua, Dómine, univérsa sunt pósita, et non est, qui possit resístere voluntáti tuæ: tu enim fecísti ómnia, cœlum et terram et univérsa, quæ cœli ámbitu continéntur: Dominus universórum tu es.","english":"In Your will are all things, O Lord, and there is none that can resist Your will; for You have made all things, heaven and earth, and all things that are under the cope of heaven. You are Lord of all.","links":[[[0],[0]],[[1],[2]],[[2],[1]],[[3],[6,7]],[[4],[4,5]],[[5],[3]],[[7],[8]],[[8],[11]],[[9],[9,10]],[[10],[12]],[[11],[13]],[[12],[14]],[[13],[16]],[[14],[15]],[[15],[18]],[[16],[17]],[[17],[19,20]],[[18],[21,22]],[[19],[23]],[[20],[24]],[[21],[25]],[[22],[26]],[[23],[27,28]],[[24],[29]],[[25],[35]],[[26],[33]],[[27],[30,31]],[[28],[38]],[[29],[39,40]],[[30],[36]],[[31],[37]]]},{"latin":"Ps 91:13-14","english":"Ps 91:13-14","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Iustus ut palma florébit: sicut cedrus Líbani multiplicábitur: plantátus in domo Dómini: in átriis domus Dei nostri.","english":"The just man shall flourish like the palm tree, like a cedar of Lebanon shall he grow: planted in the house of the Lord, in the courts of the house of our God.","links":[[[0],[1,2]],[[1],[5]],[[2],[7,8]],[[3],[3,4]],[[4],[9]],[[5],[11]],[[6],[13]],[[7],[14,16]],[[8],[17]],[[9],[18]],[[10],[20]],[[11],[23]],[[12],[24]],[[13],[26]],[[14],[29]],[[15],[32]],[[16],[31]]]},{"latin":"Ps 91:2","english":"Ps 91:2","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Bonum est confitéri Dómino: et psállere nómini tuo, Altíssime.","english":"It is good to give thanks to the Lord, to sing praise to Your name, Most High.","links":[[[0],[2]],[[1],[1]],[[2],[4,5]],[[3],[8]],[[5],[10,11]],[[6],[14]],[[7],[13]],[[8],[15,16]]]},{"latin":"Eccli 18:12-13","english":"Sir 18:12-13","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Miserátio hóminis circa próximum: misericórdia autem Dei super omnem carnem. Qui misericórdiam habet, docet et érudit quasi pastor gregem suum.","english":"Man may be merciful to his fellow man, but God’s mercy reaches all flesh. He has mercy, teaches and guides, as a shepherd does his flock.","links":[[[0],[2,3]],[[1],[0]],[[2],[4]],[[3],[6,7]],[[4],[10]],[[5],[8]],[[6],[9]],[[7],[11]],[[8],[12]],[[9],[13]],[[10],[14]],[[11],[16]],[[12],[15]],[[13],[17]],[[14],[18]],[[15],[19]],[[16],[20]],[[17],[22]],[[18],[25]],[[19],[24]]]},{"latin":"Ps 1:1","english":"Ps 1:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Beátus vir, qui non ábiit in consílio impiórum, et in via peccatórum non stetit, et in cáthedra pestiléntiæ non sedit.","english":"Happy the man who follows not the counsel of the wicked nor walks in the way of sinners, nor sits in the company of the insolent.","links":[[[0],[0]],[[1],[2]],[[2],[3]],[[3],[5]],[[4],[4]],[[6],[7]],[[7],[10]],[[8],[11]],[[10],[15]],[[11],[17]],[[13],[12]],[[14],[18]],[[16],[22]],[[17],[25]],[[19],[19]]]},{"latin":"Ps 131:9-10.","english":"Ps 131:9-10.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Sacerdótes tui, Dómine, induántur iustítiam, et sancti tui exsúltent. Propter David servum tuum non avértas fáciem christi tui.","english":"May Your priests, O Lord, be clothed with justice; let Your faithful ones shout merrily for joy. For the sake of David Your servant, reject not the plea of Your anointed.","links":[[[0],[0]],[[1],[1]],[[2],[3,4]],[[3],[5,6]],[[4],[8]],[[5],[9]],[[6],[11,12]],[[7],[10]],[[8],[13,14,15,16]],[[9],[17,18,19,20]],[[10],[21]],[[11],[23]],[[12],[22]],[[13],[25]],[[14],[24]],[[15],[27]],[[16],[30]],[[17],[29]]]},{"latin":"Ps 131:1","english":"Ps 131:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Meménto, Dómine, David, et omnis mansuetúdinis eius:","english":"Remember, O Lord, David and all his meekness.","links":[[[0],[0]],[[1],[1,2]],[[2],[3]],[[3],[4]],[[4],[5]],[[5],[7]],[[6],[6]]]},{"latin":"Apoc 5:12; 1:6","english":"Apoc 5:12; 1:6","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Dignus est Agnus, qui occísus est, accípere virtútem, et divinitátem, et sapiéntiam, et fortitúdinem, et honórem. Ipsi glória et impérium in sǽcula sæculórum.","english":"Worthy is the Lamb Who was slain to receive power, and divinity, and wisdom, and strength, and honor. To Him belong glory and dominion forever and ever.","links":[[[0],[0]],[[1],[1]],[[2],[3]],[[3],[4]],[[4],[6]],[[5],[5]],[[6],[7,8]],[[7],[9]],[[8],[10]],[[9],[11]],[[10],[12]],[[11],[13]],[[12],[14]],[[13],[15]],[[14],[16]],[[15],[17]],[[16],[18,19]],[[17],[21]],[[18],[22]],[[19],[23]],[[21],[24]],[[22],[26]]]},{"latin":"Ps 71:1","english":"Ps 71:1","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Deus, iudícium tuum Regi da: et iustítiam tuam Fílio Regis.","english":"O God, with Your judgment endow the King and with Your justice, the King's son.","links":[[[0],[0,1]],[[1],[4]],[[2],[3]],[[3],[7]],[[4],[5]],[[5],[8]],[[6],[11]],[[7],[10]],[[8],[14]],[[9],[13]]]},{"latin":"Ps 129:3-4","english":"Ps 129:3-4","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Si iniquitátes observáveris, Dómine: Dómine, quis sustinébit? quia apud te propitiátio est, Deus Israël.","english":"If You, O Lord, mark iniquities, Lord, who can stand? But with You is forgiveness, O God of Israel.","links":[[[0],[0]],[[1],[5]],[[2],[1,4]],[[3],[2,3]],[[4],[6]],[[5],[7]],[[6],[8,9]],[[7],[10]],[[8],[11]],[[9],[12]],[[10],[14]],[[11],[13]],[[12],[16]],[[13],[18]]]},{"latin":"Ps 129:1-2","english":"Ps 129:1-2","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"De profúndis clamávi ad te, Dómine: Dómine, exáudi vocem meam.","english":"Out of the depths I cry to You, O Lord; Lord, hear my voice!","links":[[[0],[0,1]],[[1],[3]],[[2],[4,5]],[[3],[6]],[[4],[7]],[[5],[8,9]],[[6],[10]],[[7],[11]],[[8],[13]],[[9],[12]]]},{"latin":"Ps 138:17","english":"Ps 138:17","links":[[[0],[0]],[[1],[1]],[[2],[2]]]},{"latin":"Mihi autem nimis honoráti sunt amíci tui, Deus: nimis confortátus est principátus eórum.","english":"To me, Your friends, O God, are made exceedingly honorable; their principality is exceedingly strengthened.","links":[[[0],[0,1]],[[2],[8]],[[3],[9]],[[4],[6]],[[5],[3]],[[6],[2]],[[7],[4,5]],[[8],[13]],[[9],[14]],[[10],[12]],[[11],[11]],[[12],[10]]]},{"latin":"Ps 138:1-2.","english":"Ps 138:1-2","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Dómine, probásti me et cognovísti me: tu cognovísti sessiónem meam et resurrectiónem meam.","english":"O Lord, You have probed me and You know me; You know when I sit and when I stand.","links":[[[0],[0,1]],[[1],[3,4]],[[2],[5]],[[3],[6]],[[4],[8]],[[5],[9]],[[6],[10]],[[7],[11]],[[8],[14]],[[10],[15]],[[11],[18]]]},{"latin":"Sedulius","english":"Sedulius","links":[[[0],[0]]]},{"latin":"Salve, sancta parens, eníxa puérpera Regem: qui cælum terrámque regit in sǽcula sæculórum.","english":"Hail, holy Mother, who in childbirth brought forth the King Who rules heaven and earth world without end.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[4,5]],[[4],[6,7]],[[5],[9]],[[6],[10]],[[7],[12]],[[8],[13,14]],[[9],[11]],[[11],[15]],[[12],[16,17]]]},{"latin":"Postea dicit: Orémus, et Orationes, unam aut plures, ut ordo Officii postulat. Sequitur Epistola, Graduale, Tractus, vel Allelúia cum Versu, aut Sequentia, prout Tempus aut qualitas Missæ postulat.","english":"The Collects mean the collected prayers of all the faithful assisting at the Holy Sacrifice. Raising his voice, his hands, and his sentiments to God, the priest excites the faithful to unite their prayers with his.","links":[]},{"latin":"Per eúndem Dóminum nostrum Iesum Christum Fílium tuum, qui tecum vivit et regnat in unitáte Spíritus Sancti, Deus, per ómnia sǽcula sæculórum.","english":"Through the same Jesus Christ, thy Son, Our Lord, Who liveth and reigneth with thee in the unity of the Holy Ghost, God, world without end.","links":[[[0],[0]],[[1],[2]],[[2],[8]],[[3],[7]],[[4],[3]],[[5],[4]],[[6],[6]],[[7],[5]],[[8],[9]],[[9],[13,14]],[[10],[10]],[[11],[11]],[[12],[12]],[[13],[15]],[[14],[17]],[[15],[21]],[[16],[20]],[[17],[22]],[[20],[23]],[[21],[24,25]]]},{"latin":"Famíliam tuam, quǽsumus, Dómine, contínua pietáte custódi: ut a cunctis adversitátibus, te protegénte, sit líbera, et in bonis áctibus tuo nómini sit devóta.","english":"Guard Your household, we beseech You, O Lord, with unceasing care, that under Your protection it may be free from all harm and serve You by good deeds.","links":[[[0],[2]],[[1],[1]],[[2],[3,4]],[[3],[6,7]],[[4],[9]],[[5],[10]],[[6],[0]],[[7],[11]],[[9],[20]],[[10],[21]],[[11],[13]],[[12],[14]],[[13],[16,17]],[[14],[18]],[[15],[22]],[[17],[26]],[[18],[27]],[[19],[24]],[[22],[23]]]},{"latin":"Omnípotens et miséricors Deus, univérsa nobis adversántia propitiátus exclúde: ut mente et córpore páriter expedíti, quæ tua sunt, líberis méntibus exsequámur.","english":"Almighty and merciful God, graciously keep away from us all misfortune, that, unhampered in soul and body, we may perform with peaceful minds the works that are Yours.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[9]],[[5],[8]],[[6],[10]],[[7],[4]],[[8],[5,6]],[[9],[11]],[[10],[14]],[[11],[15]],[[12],[16]],[[13],[12]],[[15],[25]],[[16],[27]],[[17],[26]],[[18],[21]],[[19],[22]],[[20],[17,18,19]]]},{"latin":"Largíre, quǽsumus, Dómine, fidélibus tuis indulgéntiam placátus et pacem: ut páriter ab ómnibus mundéntur offénsis, et secúra tibi mente desérviant.","english":"O Lord, we beseech You, graciously grant Your faithful forgiveness and peace, that they may be cleansed of all sin and serve You with minds free from care.","links":[[[0],[6]],[[1],[2,3]],[[2],[1]],[[3],[8]],[[4],[7]],[[5],[9]],[[6],[5]],[[7],[10]],[[8],[11]],[[9],[12]],[[11],[17]],[[12],[18]],[[13],[14,15,16]],[[14],[19]],[[15],[20]],[[16],[25]],[[17],[22]],[[18],[24]],[[19],[21]]]},{"latin":"Deus, refúgium nostrum et virtus: adésto piis Ecclésiæ tuæ précibus, auctor ipse pietátis, et præsta; ut, quod fidéliter pétimus, efficáciter consequámur.","english":"O God, our refuge and our strength, the very source of holiness, heed the devout prayers of Your Church, and grant that what we seek in faith we may obtain in fact.","links":[[[0],[1]],[[1],[3]],[[2],[2]],[[3],[4]],[[4],[6]],[[5],[12]],[[6],[14]],[[7],[18]],[[8],[17]],[[9],[15]],[[10],[9]],[[12],[11]],[[13],[19]],[[14],[20]],[[15],[21]],[[16],[22]],[[17],[25,26]],[[18],[23,24]],[[19],[30,31]],[[20],[27,28,29]]]},{"latin":"Dírigat corda nostra, quǽsumus, Dómine, tuæ miseratiónis operátio: quia tibi sine te placére non póssumus.","english":"May the working of Your mercy, we beseech You, O Lord, guide our hearts, for without You, we cannot please You.","links":[[[0],[11]],[[1],[13]],[[2],[12]],[[3],[6,7]],[[4],[9,10]],[[5],[4]],[[6],[5]],[[7],[1,2,3]],[[8],[14]],[[9],[20]],[[10],[15]],[[11],[16]],[[12],[19]],[[14],[17,18]]]},{"latin":"Commemoratio S. Remigii Episcopi et Confessoris","english":"Commemoration St. Remigius, Bishop and Confessor","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]]]},{"latin":"v. Da, quǽsumus, omnípotens Deus: ut beáti Remígii Confessóris tui atque Pontíficis veneránda solémnitas, et devotiónem nobis áugeat et salútem.","english":"v. Grant, we beseech thee, almighty God, that the venerable feast of Remigius thy blessed Confessor and Bishop may increase our devotion and promote our salvation.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[14]],[[7],[12]],[[8],[15]],[[9],[13]],[[10],[16]],[[11],[17]],[[12],[9]],[[13],[10]],[[15],[21]],[[16],[20]],[[17],[18,19]],[[18],[22]],[[19],[25]]]},{"latin":"Deus, qui ineffábili providéntia sanctos Angelos tuos ad nostram custódiam míttere dignáris: largíre supplícibus tuis; et eórum semper protectióne deféndi, et ætérna societáte gaudére.","english":"O God, Who in Your wondrous providence graciously send Your Angels to watch over us, grant that we who pray to You may be ever under their protection and may rejoice in their unending companionship.","links":[[[0],[1]],[[1],[2]],[[2],[5]],[[3],[6]],[[5],[10]],[[6],[9]],[[7],[11]],[[8],[14]],[[9],[12,13]],[[10],[8]],[[11],[7]],[[12],[15]],[[13],[17,18,19]],[[14],[20,21]],[[15],[28]],[[16],[26]],[[17],[24]],[[18],[27]],[[19],[23,25]],[[21],[33]],[[22],[34]],[[23],[29,30]]]},{"latin":"Dómine, qui dixísti: Nisi efficiámini sicut párvuli, non intrábitis in regnum cœlórum: da nobis, quǽsumus: ita sanctæ Teresiæ Vírginis in humilitáte et simplicitáte cordis vestígia sectári, ut præmia consequámur ætérna.","english":"O Lord, Who said: Unless you become as little children, you shall not enter into the Kingdom of Heaven, grant us, we beseech You, so to follow the footsteps of blessed Theresa, the Virgin, in humility and simplicity of heart that we may obtain everlasting rewards.","links":[[[0],[0,1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[6]],[[5],[7]],[[6],[8,9]],[[7],[12]],[[8],[11,13]],[[9],[14]],[[10],[16]],[[11],[18]],[[12],[19]],[[13],[20]],[[14],[21,22,23]],[[15],[24]],[[16],[30]],[[17],[31]],[[18],[33]],[[19],[34]],[[20],[35]],[[21],[36]],[[22],[37]],[[23],[39]],[[24],[28]],[[25],[26]],[[26],[40]],[[27],[45]],[[28],[41,42,43]],[[29],[44]]]},{"latin":"Commemoratio Ss. Placidi et Sociorum Martyrum","english":"Commemoration Sts. Placidus and Companions Martyrs","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]]]},{"latin":"Deus, qui nos concédis sanctórum Mártyrum tuórum Plácidi et Sociórum eius natalítia cólere: da nobis in ætérna beatitúdine de eórum societáte gaudére.","english":"O God, Who permits us to celebrate the anniversary of the death of Your holy Martyrs, Placid and his companions, grant that we may enjoy their companionship in everlasting happiness.","links":[[[0],[1]],[[1],[2]],[[2],[4]],[[3],[3]],[[4],[14]],[[5],[15]],[[6],[13]],[[7],[16]],[[8],[17]],[[9],[19]],[[10],[18]],[[11],[8,11]],[[12],[6]],[[13],[20]],[[15],[27]],[[16],[28]],[[17],[29]],[[19],[25]],[[20],[26]],[[21],[23,24]]]},{"latin":"Deinde osculatur Altare in medio, et versus ad populum dicit:\n℣. Dóminus vobíscum.\n℟. Et cum spíritu tuo.\nPostea dicit: Orémus, et Orationes, unam aut plures, ut ordo Officii postulat. Sequitur Epistola, Graduale, Tractus, vel Allelúia cum Versu, aut Sequentia, prout Tempus aut qualitas Missæ postulat.\nOrémus.\nSancti Brunónis Confessóris tui, quǽsumus, Dómine, intercessiónibus adiuvémur: ut, qui maiestátem tuam gráviter delinquéndo offéndimus, eius méritis et précibus, nostrórum delictórum véniam consequámur.\nPer Dóminum nostrum Iesum Christum, Fílium tuum: qui tecum vivit et regnat in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum.\n℟. Amen.","english":"Then the priest kisses the altar, and turning to the people says:\n℣. The Lord be with you.\n℟. And with thy spirit.\nThe Collects mean the collected prayers of all the faithful assisting at the Holy Sacrifice. Raising his voice, his hands, and his sentiments to God, the priest excites the faithful to unite their prayers with his.\nLet us pray.\nMay we be aided by the intercession of St. Bruno, Your Confessor, we beseech You, O\nLord; that we, who have grievously offended Your Majesty by sin, may, by his merits and prayers, obtain forgiveness for our offenses.\nThrough Jesus Christ, thy Son our Lord, Who liveth and reigneth with thee, in the unity of the Holy Ghost, God, world without end.\n℟. Amen.","links":[[[0],[0]],[[1],[3]],[[2],[5]],[[5],[6]],[[6],[7]],[[7],[8]],[[8],[10]],[[9],[11]],[[10],[12,13]],[[11],[14,15,16]],[[12],[17]],[[13],[18]],[[14],[20]],[[15],[19]],[[44],[57,58,59]],[[45],[68]],[[46],[69]],[[47],[71]],[[48],[70]],[[49],[72,73]],[[50],[75,76]],[[51],[66]],[[52],[60,61,62,63]],[[53],[77]],[[54],[79]],[[55],[83]],[[56],[81]],[[57],[84]],[[58],[86]],[[59],[82]],[[60],[89]],[[61],[90]],[[62],[91]],[[63],[92]],[[64],[96]],[[65],[97]],[[66],[94]],[[67],[87,88,93]],[[68],[98]],[[69],[104]],[[70],[103]],[[71],[99]],[[72],[100]],[[73],[102]],[[74],[101]],[[75],[105]],[[76],[109,110]],[[77],[106]],[[78],[107]],[[79],[108]],[[80],[111]],[[81],[113]],[[82],[117]],[[83],[116]],[[84],[118]],[[87],[119]],[[88],[120,121]],[[89],[122]]]},{"latin":"Deus, cuius Unigénitus per vitam, mortem et resurrectiónem suam nobis salútis ætérnæ præmia comparávit: concéde, quǽsumus; ut, hæc mystéria sacratíssimo beátæ Maríæ Vírginis Rosário recoléntes, et imitémur, quod cóntinent, et quod promíttunt, assequámur.","english":"O God, Whose only-begotten Son, by His life, death and resurrection, has merited for us the grace of eternal salvation, grant, we beseech You, that, meditating on those mysteries in the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise.","links":[[[0],[1]],[[1],[2]],[[2],[3,4,5]],[[3],[6]],[[4],[8]],[[5],[9]],[[6],[10]],[[7],[11]],[[8],[7]],[[9],[15]],[[10],[20]],[[11],[19]],[[12],[17]],[[13],[12,13]],[[14],[21]],[[15],[22,23]],[[16],[25]],[[17],[28]],[[18],[29]],[[19],[32,33]],[[20],[37]],[[21],[39]],[[22],[38]],[[23],[34]],[[24],[26,27]],[[26],[41,42]],[[27],[43]],[[28],[45]],[[29],[46]],[[30],[48]],[[31],[50]],[[32],[47]]]},{"latin":"Commemoratio S. Marci Papæ Confessoris","english":"Commemoration St. Mark, Pope and Confessor","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[5]]]},{"latin":"v. Da, quǽsumus, omnípotens Deus: ut beáti N. Confessóris tui atque Pontíficis veneránda solémnitas, et devotiónem nobis áugeat et salútem.","english":"v. Grant, we beseech thee, almighty God, that the venerable feast of N. thy blessed Confessor and Bishop may increase our devotion and promote our salvation.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[5]],[[4],[6]],[[5],[7]],[[6],[14]],[[7],[12]],[[8],[15]],[[9],[13]],[[10],[16]],[[11],[17]],[[12],[9]],[[13],[10]],[[15],[21]],[[16],[20]],[[17],[18,19]],[[18],[22]],[[19],[25]]]},{"latin":"Dómine, Deus noster, qui beátæ Birgíttæ per Fílium tuum unigénitum secreta cœléstia revelásti: ipsíus pia intercessióne da nobis, fámulis tuis; in revelatióne sempitérna glóriæ tuæ gaudére lætántes.","english":"O Lord, our God, Who through your only-begotten Son revealed secrets to blessed Bridget, grant that through her kind intercession, we, Your servants, may rejoice and be glad in the revelation of Your eternal glory.","links":[[[0],[0,1]],[[1],[3]],[[2],[2]],[[3],[4]],[[4],[13]],[[5],[14]],[[6],[5]],[[7],[9]],[[8],[6]],[[9],[7,8]],[[10],[11]],[[12],[10]],[[13],[18]],[[14],[19]],[[15],[20]],[[16],[15]],[[17],[21]],[[18],[23]],[[19],[22]],[[20],[29]],[[21],[31]],[[22],[34]],[[23],[35]],[[24],[33]],[[25],[24,25]],[[26],[26,27,28]]]},{"latin":"Commemoratio Ss. Sergii, Bacchi, Marcelli et Apuleii Martyrum","english":"Commemoration Sts. Sergius, Bacchus, Marcellus and Apuleius, Martyrs","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]],[[7],[7]]]},{"latin":"Sanctórum Martyrum tuórum nos, Dómine, Sérgii, Bacchi, Marcélli et Apuléii beáta mérita prosequántur: et tuo semper fáciant amóre fervéntes.","english":"May the blessed merits of Your holy Martyrs, Sergius, Bacchus, Marcellus and Apuleius, continually benefit us, O Lord, and make us ever fervent in Your love.","links":[[[0],[6]],[[1],[7]],[[2],[5]],[[3],[15]],[[4],[16,17]],[[5],[8]],[[6],[9]],[[7],[10]],[[8],[11]],[[9],[12]],[[10],[2]],[[11],[3]],[[12],[0,13,14]],[[13],[18]],[[14],[24]],[[15],[21]],[[16],[19]],[[17],[25]],[[18],[22]]]},{"latin":"Deus, qui beátum Ioánnem Confessórem tuum ad fidem in géntibus propagándam mirabíliter excitáre dignátus es, ac per eum in erudiéndis fidélibus novam in Ecclésia tua famíliam congregásti: da nobis fámulis tuis; ita eius institútis profícere, ut prǽmia consequámur ætérna.","english":"O God, Who in a wondrous way graciously urged blessed John, Your Confessor, to propagate Your faith among the pagans, and through him brought together a new religious family in Your Church for the education of the faithful, grant Your servants so to profit by his teaching that we may reach everlasting rewards.","links":[[[0],[1]],[[1],[2]],[[2],[9]],[[3],[10]],[[4],[12]],[[5],[11]],[[6],[13]],[[7],[16]],[[8],[17]],[[9],[19]],[[10],[14]],[[11],[4,5,6]],[[12],[8]],[[13],[7]],[[15],[20]],[[16],[21]],[[17],[22]],[[19],[34]],[[20],[37]],[[21],[26]],[[23],[31]],[[24],[30]],[[25],[28]],[[26],[23,24]],[[27],[38]],[[29],[40]],[[30],[39]],[[31],[41]],[[32],[45]],[[33],[46]],[[34],[42,43]],[[35],[47]],[[36],[52]],[[37],[48,49,50]],[[38],[51]]]},{"latin":"Commemoratio S. Dionysii Epíscopi, Rustici et Eleutherii Martyrum","english":"Commemoration Sts. Denis, Bishop, Rusticus et Eleutherius, Martyrs","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]],[[7],[7]]]},{"latin":"Deus, qui hodiérna die beátum Dionýsium, Mártyrem tuum atque Pontíficem, virtúte constantiæ in passióne roborásti, quique illi, ad prædicándum géntibus glóriam tuam, Rústicum et Eleuthérium sociáre dignátus es: tríbue nobis, quǽsumus; eórum imitatióne, pro amóre tuo próspera mundi despícere, et nulla eius advérsa formidáre.","english":"O God, Who on this day strengthened blessed Dionysius, Your Martyr and Bishop, with the power to be steadfast in his suffering, and were pleased to join with him Rusticus and Eleutherius to preach Your glory to the pagans, grant us, we beseech You, out of love for You, to despise the favors of this world and to fear not its enmity.","links":[[[0],[1]],[[1],[2]],[[2],[4]],[[3],[5]],[[4],[7]],[[5],[8]],[[6],[10]],[[7],[9]],[[8],[11]],[[9],[12]],[[10],[15]],[[11],[18]],[[12],[19]],[[13],[21]],[[14],[6]],[[15],[22]],[[16],[28]],[[17],[32]],[[18],[33]],[[19],[38]],[[20],[35]],[[21],[34]],[[22],[29]],[[23],[30]],[[24],[31]],[[25],[26]],[[26],[24]],[[28],[39]],[[29],[40]],[[30],[41,42]],[[33],[44,45]],[[34],[46]],[[35],[48]],[[36],[52]],[[37],[55]],[[38],[50]],[[39],[56]],[[40],[59]],[[41],[60]],[[42],[61]],[[43],[57,58]]]},{"latin":"Dómine Iesu Christe, veræ humilitátis et exémplar et prǽmium: quǽsumus; ut, sicut beátum Francíscum in terréni honóris contémptu imitatórem tui gloriósum effecísti, ita nos eiúsdem imitatiónis et glóriæ tríbuas esse consórtes:","english":"O Lord Jesus Christ, model of true humility and its reward, we beseech Thee, that as Thou made blessed Francis one of Thy glorious imitators by his contempt for earthly honors, grant us to follow his example and to share in his glory.","links":[[[0],[0,1]],[[1],[2]],[[2],[3]],[[3],[6]],[[4],[7]],[[5],[8]],[[6],[4]],[[8],[10]],[[9],[11,12]],[[10],[14]],[[11],[15]],[[12],[18]],[[13],[19]],[[15],[29]],[[16],[30]],[[17],[27]],[[18],[24]],[[19],[22]],[[20],[23]],[[21],[16,17]],[[23],[32]],[[25],[36]],[[26],[37]],[[27],[42]],[[28],[31]],[[30],[38,39]]]},{"latin":"Commemoratio Maternitatis Beatæ Mariæ Virginis","english":"Commemoration Maternitatis Beatæ Mariæ Virginis","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]]]},{"latin":"Deus, qui de beátæ Maríæ Vírginis útero Verbum tuum, Angelo nuntiánte, carnem suscípere voluísti: præsta supplícibus tuis; ut, qui vere eam Genitrícem Dei crédimus, eius apud te intercessiónibus adiuvémur.","english":"O God, Who, by the message of an Angel, willed to take flesh in the womb of the Blessed Virgin Mary, grant that we, your suppliants, who believe her to be truly the Mother of God, may be helped by her intercession with You.","links":[[[0],[1]],[[1],[2]],[[3],[18]],[[4],[20]],[[5],[19]],[[6],[15]],[[9],[8]],[[10],[5]],[[11],[12]],[[12],[10,11]],[[13],[9]],[[14],[21]],[[15],[25]],[[16],[24]],[[17],[22]],[[18],[26]],[[19],[31]],[[20],[28]],[[21],[33]],[[22],[35]],[[23],[27]],[[24],[40]],[[25],[42]],[[26],[43]],[[27],[41]],[[28],[36,37,38]]]},{"latin":"Deus, qui beátum regem Eduárdum Confessórem tuum æternitátis glória coronásti: fac nos, quǽsumus; ita eum venerári in terris, ut cum eo regnáre possímus in cœlis.","english":"O God, Who crowned blessed King Edward with the glory of eternity, grant us, we beseech You, so to venerate him on earth that we may be worthy to reign with him in heaven.","links":[[[0],[1]],[[1],[2]],[[2],[4]],[[3],[5]],[[4],[6]],[[7],[11]],[[8],[9]],[[9],[3]],[[10],[12]],[[11],[13]],[[12],[14,15,16]],[[13],[17]],[[14],[20]],[[15],[18,19]],[[16],[21]],[[17],[22]],[[18],[23]],[[19],[30]],[[20],[31]],[[21],[28,29]],[[22],[24,25,26,27]],[[23],[32]],[[24],[33]]]},{"latin":"Deus, qui nos cónspicis ex nostra infirmitáte defícere: ad amórem tuum nos misericórditer per Sanctórum tuórum exémpla restáura.","english":"O God, Who behold how we fail in our weakness, mercifully restore us to Your love through the examples of Your Saints.","links":[[[0],[1]],[[1],[2]],[[2],[5]],[[3],[3]],[[4],[7]],[[5],[8]],[[6],[9]],[[7],[6]],[[8],[13]],[[9],[15]],[[10],[14]],[[11],[12]],[[12],[10]],[[13],[16]],[[14],[21]],[[15],[20]],[[16],[18]],[[17],[11]]]},{"latin":"Exáudi nos, Deus, salutáris noster: ut sicut de beátæ Terésiæ Vírginis tuæ festivitáte gaudémus; ita cæléstis eius doctrínæ pábulo nutriámur, et piæ devotiónis erudiámur afféctu.","english":"Hear us, O God, our Savior, that as we rejoice in the feast of Blessed Teresa, Your Virgin, so we may be fed with the food of her heavenly teaching and be instructed in the affection of pious devotion.","links":[[[0],[0]],[[1],[1]],[[2],[2,3]],[[3],[5]],[[4],[4]],[[5],[6]],[[6],[7]],[[7],[10]],[[8],[14]],[[9],[15]],[[10],[17]],[[11],[16]],[[12],[12]],[[13],[8,9]],[[14],[18]],[[15],[28]],[[16],[27]],[[17],[29]],[[18],[25]],[[19],[19,20,21,22]],[[20],[30]],[[21],[37]],[[22],[38]],[[23],[31,32]],[[24],[35]]]},{"latin":"Deus, qui beátam Hedwígem a sǽculi pompa ad húmilem tuæ Crucis sequélam toto corde transíre docuísti: concéde; ut eius méritis et exémplo discámus peritúras mundi calcáre delícias, et in ampléxu tuæ Crucis ómnia nobis adversántia superáre:","english":"O God, Who taught blessed Hedwig to forsake worldly vanities that she might with her whole heart humbly follow Your cross, grant that, through her merits and example, we may learn to renounce the perishable delights of the world and, by embracing Your cross, overcome all things opposed to us.","links":[[[0],[1]],[[1],[2]],[[2],[4]],[[3],[5]],[[5],[8]],[[6],[9]],[[7],[6]],[[8],[17]],[[9],[19]],[[10],[20]],[[11],[18]],[[12],[15]],[[13],[16]],[[14],[7]],[[15],[3]],[[16],[21]],[[17],[22]],[[18],[24]],[[19],[25]],[[20],[26]],[[21],[27]],[[22],[28,29,30]],[[23],[34]],[[24],[38]],[[25],[32]],[[26],[35]],[[27],[39]],[[28],[40]],[[29],[41]],[[30],[42]],[[31],[43]],[[32],[45,46]],[[33],[48,49]],[[34],[47]],[[35],[44]]]},{"latin":"Dómine Iesu Christe, qui investigábiles divítias Cordis tui beátæ Margarítæ Maríæ Vírgini mirabíliter revelásti: da nobis eius méritis et imitatióne; ut, te in ómnibus et super ómnia diligéntes, iugem in eódem Corde tuo mansiónem habére mereámur:","english":"O Lord Jesus Christ, Who wondrously revealed the unsearchable riches of Your Heart to blessed Margaret Mary, the Virgin, grant us, by her merits and through imitating her, to love You in all things and above all things, so that we may be found worthy to possess a lasting dwelling place in Your Heart itself.","links":[[[0],[0,1]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[8]],[[5],[9]],[[6],[12]],[[7],[11]],[[8],[14]],[[9],[15]],[[10],[16]],[[11],[18]],[[12],[5]],[[13],[6]],[[14],[19]],[[15],[20]],[[16],[22]],[[17],[23]],[[18],[24]],[[19],[26]],[[20],[39]],[[21],[30]],[[22],[31]],[[23],[32,33]],[[24],[34]],[[25],[35]],[[26],[36,37]],[[27],[29]],[[28],[48]],[[29],[51]],[[30],[54]],[[31],[53]],[[32],[52]],[[33],[49,50]],[[34],[45,46]],[[35],[40,41,42,43,44]]]},{"latin":"Commemoratio S. Lucæ Evangelistæ","english":"Commemoration St. Luke the Evangelist","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[4]]]},{"latin":"Intervéniat pro nobis, quǽsumus, Dómine, sanctus tuus Lucas Evangélista: qui crucis mortificatiónem iúgiter in suo córpore, pro tui nóminis honóre, portávit.","english":"O Lord, we beseech You, that Luke, Your holy Evangelist, who for the honor of Your name bore continually in his body the suffering of the cross, may intercede in our behalf.","links":[[[0],[27,28]],[[1],[29]],[[2],[30]],[[3],[2,3,4]],[[4],[0,1]],[[5],[8]],[[6],[7]],[[7],[6]],[[8],[9]],[[9],[10]],[[10],[26]],[[11],[23]],[[12],[18]],[[13],[19]],[[14],[20]],[[15],[21]],[[16],[11]],[[17],[15]],[[18],[16]],[[19],[13]],[[20],[17]]]},{"latin":"Deus, qui beátum Petrum Confessórem tuum admirábilis pœniténtiæ et altíssimæ contemplatiónis múnere illustráre dignátus es: da nobis, quǽsumus; ut, eius suffragántibus méritis, carne mortificáti, facílius cœléstia capiámus.","english":"O God, Who graciously made blessed Peter, Your Confessor, glorious by the gift of remarkable penance and sublime contemplation, grant, we beseech You, that, by the merit of his prayers, we may the more easily understand the things of heaven by curbing our passions.","links":[[[0],[1]],[[1],[2]],[[2],[5]],[[3],[6]],[[4],[8]],[[5],[7]],[[6],[14]],[[7],[15]],[[8],[16]],[[9],[17]],[[10],[18]],[[11],[12]],[[12],[4,9]],[[13],[3]],[[15],[19]],[[17],[20,21,22]],[[18],[23]],[[19],[28]],[[20],[29]],[[21],[26]],[[22],[43]],[[23],[41]],[[24],[34]],[[25],[39]],[[26],[30,31,35]]]},{"latin":"Da, quǽsumus, omnípotens Deus: ut, sancti Ioánnis Confessóris exémplo in sciéntia Sanctórum proficiéntes atque áliis misericórdiam exhibéntes; eius méritis, indulgéntiam apud te consequámur.","english":"Grant, we beseech You, almighty God, that by following the example of blessed John, Your Confessor, we may advance in a knowledge of holiness and, by showing pity for others, obtain Your forgiveness through his merits","links":[[[0],[0]],[[1],[1,2]],[[2],[4]],[[3],[5]],[[4],[6]],[[5],[12]],[[6],[13]],[[7],[15]],[[8],[10]],[[9],[19]],[[10],[21]],[[11],[23]],[[12],[7,8,16,17,18]],[[13],[24]],[[14],[29]],[[15],[27]],[[16],[25,26]],[[17],[34]],[[18],[35]],[[19],[32]],[[21],[31]],[[22],[30]]]},{"latin":"Commemoratio S. Hilarionis Abbatis","english":"Commemoration St. Hilarion, Abbot","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]]]},{"latin":"Intercéssio nos, quǽsumus, Dómine, beáti Hilariónis Abbátis comméndet: ut, quod nostris méritis non valémus, eius patrocínio assequámur.","english":"May the intercession of the blessed Abbot Hilarion, commend us to You, O Lord, so that through his merits we may obtain that which we cannot accomplish by our own.","links":[[[0],[2]],[[1],[9]],[[3],[12,13]],[[4],[5]],[[5],[7]],[[6],[6]],[[7],[8]],[[8],[14,15]],[[9],[22,23]],[[10],[28,29]],[[12],[25]],[[13],[26]],[[14],[17]],[[15],[18]],[[16],[20,21]]]},{"latin":"Commemoratio Ss. Ursulæ et Sociarum Virg. et Mart.","english":"Commemoration Ss. Ursula and Companions, Virg. and Mart.","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]],[[6],[6]],[[7],[7]]]},{"latin":"Da nobis, quǽsumus, Dómine Deus noster, sanctárum Vírginum et Mártyrum tuárum Ursulæ et Sociárum palmas incessábili devotióne venerári: ut quas digna mente non póssumus celebráre, humílibus saltem frequentémus obséquiis.","english":"Grant, we beseech thee, O Lord our God, that we may never cease devoutly to venerate the triumphs of thy holy Virgins and Martyrs Ursula and her companions: that, though we cannot worthily shew forth their praises, yet we may continually honour them with lowly service.","links":[[[0],[0]],[[2],[1,2]],[[3],[4,5]],[[4],[7]],[[5],[6]],[[6],[20]],[[7],[21]],[[8],[22]],[[9],[23]],[[10],[19]],[[11],[24]],[[12],[25]],[[13],[27]],[[14],[17]],[[15],[11,12]],[[16],[13]],[[17],[14,15]],[[18],[28]],[[19],[35]],[[20],[32]],[[22],[31]],[[24],[33,34]],[[25],[44]],[[27],[40,41]],[[28],[45]]]},{"latin":"Deus, qui beátum Antónium Maríam Confessórem tuum atque Pontíficem, apostólicis virtútibus sublimásti, et per eum novas in Ecclésia clericórum ac vírginum famílias collegísti: concéde, quǽsumus; ut, eius dirigéntibus mónitis ac suffragántibus méritis, animárum salútem quǽrere iúgiter studeámus.","english":"O God, Who glorified blessed Anthony Mary, Your Confessor and Bishop, because of his zeal for souls, and through him established in the Church new households of men and women religious, we beseech You to grant that, with his counsels as a guide, and through the merits of his prayers, we may continually apply ourselves to seeking the salvation of souls.","links":[[[0],[1]],[[1],[2]],[[2],[4]],[[3],[5]],[[4],[6]],[[5],[8]],[[6],[7]],[[7],[9]],[[8],[10]],[[11],[3]],[[12],[17]],[[13],[18]],[[14],[19]],[[15],[24]],[[16],[21]],[[17],[23]],[[18],[27]],[[19],[28]],[[20],[29]],[[21],[25]],[[22],[20]],[[23],[35]],[[24],[31,32,33]],[[25],[36]],[[26],[38]],[[27],[42]],[[28],[39]],[[29],[43]],[[30],[44]],[[31],[46]],[[32],[60]],[[33],[58]],[[34],[56]],[[35],[52]],[[36],[50,51,53,54]]]},{"latin":"Deus, qui beátum Raphaélem Archángelum Tobíæ fámulo tuo cómitem dedísti in via: concéde nobis fámulis tuis; ut eiúsdem semper protegámur custódia et muniámur auxílio.","english":"O God, Who gave blessed Raphael the Archangel as a traveling companion to Your servant Tobias, grant us, Your servants, ever to be protected by his guardianship and by his help.","links":[[[0],[1]],[[1],[2]],[[2],[4]],[[3],[5]],[[4],[7]],[[5],[15]],[[6],[14]],[[7],[13]],[[8],[11]],[[9],[3]],[[11],[10]],[[12],[16]],[[13],[17]],[[14],[19]],[[15],[18]],[[17],[25,29]],[[18],[20]],[[19],[22,23]],[[20],[26]],[[21],[27]],[[23],[30]]]},{"latin":"Omnípotens sempitérne Deus, qui in dilécto Fílio tuo, universórum Rege, ómnia instauráre voluísti: concéde propítius; ut cunctæ famíliæ géntium, peccáti vúlnere disgregátæ, eius suavissímo subdántur império:","english":"Almighty and eternal God, Who willed to restore all things in Your beloved Son, the King of the Universe, graciously grant that the peoples of the earth torn asunder by the wound of sin, may submit to His most gentle rule.","links":[[[0],[0]],[[1],[2]],[[2],[3]],[[3],[4]],[[4],[10]],[[5],[12]],[[6],[13]],[[7],[11]],[[8],[18]],[[9],[15]],[[10],[8,9]],[[11],[6,7]],[[12],[5]],[[13],[20]],[[14],[19]],[[15],[21]],[[17],[23]],[[18],[26]],[[19],[33]],[[20],[31]],[[21],[27,28]],[[22],[37]],[[23],[38,39]],[[24],[34,35]],[[25],[40]]]},{"latin":"Commemoratio S. Evaristi Papæ et Martyris","english":"Commemoration St. Evaristus, Pope and Martyr","links":[[[0],[0]],[[1],[1]],[[2],[2]],[[3],[3]],[[4],[4]],[[5],[5]]]},{"latin":"Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Evarístum Mártyrem tuum atque Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.","english":"Look forgivingly on thy flock, Eternal Shepherd, and keep it in thy constant protection, by the intercession of blessed Evaristus thy Martyr and Sovereign Pontiff, whom thou didst constitute Shepherd of the whole Church.","links":[[[0],[4]],[[1],[3]],[[2],[6]],[[3],[5]],[[4],[1]],[[5],[0]],[[6],[7]],[[7],[14]],[[8],[18]],[[9],[19]],[[10],[21]],[[11],[20]],[[12],[22]],[[13],[23]],[[14],[24]],[[15],[12]],[[16],[13]],[[17],[8]],[[18],[25]],[[19],[32]],[[20],[33]],[[21],[27,28]],[[23],[29]]]},{"latin":"Deus, qui nos per beátos Apóstolos tuos Simónem et Iudam ad agnitiónem tui nóminis veníre tribuísti: da nobis eórum glóriam sempitérnam et proficiéndo celebráre, et celebrándo profícere.","english":"O God, Who have given us a way of coming to know Your name through Your blessed Apostles Simon and Jude, grant us to honor their everlasting glory by becoming more holy and to become more holy by honoring it.","links":[[[0],[1]],[[1],[2]],[[2],[5]],[[3],[14]],[[4],[16]],[[5],[17]],[[6],[15]],[[7],[18]],[[8],[19]],[[9],[20]],[[10],[10]],[[11],[11]],[[12],[12]],[[13],[13]],[[14],[9]],[[15],[3,4]],[[16],[21]],[[17],[22]],[[18],[25]],[[19],[27]],[[20],[26]],[[21],[32]],[[22],[28,29,30,31]],[[23],[23,24]],[[25],[37,38]],[[26],[33,34,35,36]]]},{"latin":"Concéde nos fámulos tuos, quǽsumus, Dómine Deus, perpétua mentis et córporis sanitáte gaudére: et, gloriósa beátæ Maríæ semper Vírginis intercessióne, a præsénti liberári tristítia, et ætérna pérfrui lætítia.","english":"Grant us, Your servants, O Lord God, we beseech You, to enjoy lasting health of mind and body; and by the intercession of glorious and blessed Mary, ever Virgin, may we be delivered from present sorrow and partake to the full of eternal happiness.","links":[[[0],[0]],[[1],[1]],[[2],[3]],[[3],[2]],[[4],[7,8,9]],[[5],[4,5]],[[6],[6]],[[7],[12]],[[8],[15]],[[9],[16]],[[10],[17]],[[11],[13]],[[12],[10,11]],[[13],[18]],[[14],[23]],[[15],[25]],[[16],[26]],[[17],[27]],[[18],[28]],[[19],[21]],[[20],[33]],[[21],[34]],[[22],[29,30,31,32]],[[23],[35]],[[24],[36]],[[25],[42]],[[26],[37]],[[27],[43]]]},{"latin":"Caríssime: Víduas honóra, quæ vere víduæ sunt. Si qua autem vídua fílios aut nepótes habet, discat primum domum suam régere, et mútuam vicem réddere paréntibus: hoc enim accéptum est coram Deo. Quæ autem vere vídua est et desoláta, speret in Deum, et instet obsecratiónibus et oratiónibus nocte ac die. Nam quæ in delíciis est, vivens mórtua est. Et hoc prǽcipe, ut irreprehensíbiles sint. Si quis autem suórum, et máxime domesticórum curam non habet, fidem negávit, et est infidéli detérior. Vídua eligátur non minus sexagínta annórum, quæ fúerit uníus viri uxor, in opéribus bonis testimónium habens, si fílios educávit, si hospítio recépit, si sanctórum pedes lavit, si tribulatiónem patiéntibus subministrávit, si omne opus bonum subsecúta est.","english":"Dearly beloved: Honor widows, that are widows indeed. But if any widow have children or grandchildren, let her learn first to govern her own house, and to make a return of duty to her parents: for this is acceptable before God. But she that is a widow indeed and desolate, let her trust in God, and continue in prayers and supplications night and day. For she that liveth in pleasures, is dead while she is living. And this give in charge, that they may be blameless. But if any man have not care of his own, and especially of those of his house, he hath denied the faith, and is worse than an infidel. Let a widow be chosen of no less than threescore years of age, who hath been the wife of one husband, having testimony for her good words, if she have brought up children, if she have received to harbor, if she have washed the saints’ feet, if she have ministered to them that suffer tribulation, if she have diligently followed every good work.","links":[[[0],[0,1]],[[1],[3]],[[2],[2]],[[3],[4]],[[4],[7]],[[5],[6]],[[6],[5]],[[7],[9]],[[8],[10]],[[9],[8]],[[10],[11]],[[11],[13]],[[12],[14]],[[13],[15]],[[14],[12]],[[15],[16,17,18]],[[16],[19]],[[17],[24]],[[18],[22,23]],[[19],[20,21]],[[20],[25]],[[21],[30,31]],[[22],[28,29]],[[23],[26,27]],[[24],[32,33,34]],[[25],[36]],[[26],[35]],[[27],[38]],[[28],[37]],[[29],[39]],[[30],[40]],[[31],[42,43]],[[32],[41]],[[33],[47]],[[34],[45,46]],[[35],[44]],[[36],[48]],[[37],[49]],[[38],[50,51,52]],[[39],[53]],[[40],[54]],[[41],[55]],[[42],[56,57]],[[43],[60]],[[44],[59]],[[45],[58]],[[46],[61]],[[47],[62]],[[48],[63]],[[49],[64]],[[50],[65,66]],[[51],[68]],[[52],[69]],[[53],[67]],[[54],[72,73,74,75]],[[55],[71]],[[56],[70]],[[57],[76]],[[58],[77]],[[59],[78,79,80]],[[60],[81]],[[61],[85]],[[62],[82,83,84]],[[63],[87]],[[64],[88,89]],[[65],[86]],[[66],[93,94,95]],[[67],[96]],[[68],[97]],[[69],[98,99,100,101,102]],[[70],[92]],[[71],[91]],[[72],[90]],[[73],[106,107]],[[74],[103,104,105]],[[75],[108]],[[76],[109]],[[77],[112,113]],[[78],[110,111]],[[79],[115,116]],[[80],[114,117,118,119]],[[81],[120]],[[82],[121,122]],[[83],[123]],[[84],[124,125,126]],[[85],[127]],[[86],[128,129]],[[87],[133]],[[88],[134]],[[89],[130,131,132]],[[90],[137,138]],[[91],[140]],[[92],[139]],[[93],[136]],[[94],[135]],[[95],[141]],[[96],[146]],[[97],[142,143,144,145]],[[98],[147]],[[99],[152]],[[100],[148,149,150,151]],[[101],[153]],[[102],[157,158]],[[103],[159]],[[104],[154,155,156]],[[105],[160]],[[106],[168]],[[107],[165,166,167]],[[108],[161,162,163,164]],[[109],[169]],[[110],[174]],[[111],[176]],[[112],[175]],[[113],[170,172,173]],[[114],[171]]]},{"latin":"Fratres: Habéntes administratiónem iuxta quod misericórdiam consecúti sumus, non defícimus, sed abdicámus occúlta dedécoris, non ambulántes in astútia, neque adulterántes verbum Dei, sed in manifestatióne veritátis commendántes nosmetípsos ad omnem consciéntiam hóminum coram Deo. Quod si étiam opértum est Evangélium nostrum: in iis, qui péreunt, est opértum: in quibus Deus huius sǽculi excæcávit mentes infidélium, ut non fúlgeat illis illuminátio Evangélii glóriæ Christi, qui est imágo Dei. Non enim nosmetípsos prædicámus, sed Iesum Christum Dóminum nostrum: nos autem servos vestros per Iesum: quóniam Deus, qui dixit de ténebris lucem splendéscere, ipse illúxit in córdibus nostris ad illuminatiónem sciéntiæ claritátis Dei, in fácie Christi Iesu. Omnia enim propter vos: ut grátia abúndans, per multos in gratiárum actione, abúndet in glóriam Dei. Propter quod non deficimus: sed licet is, qui foris est, noster homo corrumpátur: tamen is, qui intus est, renovatur de die in diem. Id enim, quod in præsenti est momentáneum et leve tribulatiónis nostræ, supra modum in sublimitáte ætérnum glóriæ pondus operátur in nobis, non contemplántibus nobis quæ vidéntur, sed quæ non vidéntur. Quæ enim vidéntur, temporália sunt: quæ autem non vidéntur, ætérna sunt.","english":"Brethren: Discharging this ministry in accordance with the mercy shown us, we do not lose heart. On the contrary, we renounce those practices which shame conceals, we avoid unscrupulous conduct, we do not corrupt the word of God; but making known the truth, we commend ourselves to every man’s conscience in the sight of God. And if our Gospel also is veiled, it is veiled only to those who are perishing. In their case, the god of this world has blinded their unbelieving minds, that they should not see the light of the Gospel of the glory of Christ, Who is the image of God. For we preach not of ourselves, but Jesus Christ as Lord, and ourselves merely as your servants in Jesus. For God, Who commanded light to shine out of darkness, has shone in our hearts to give enlightenment concerning the knowledge of the glory of God, shining on the face of Christ Jesus. For all things are for your sakes, so that the grace which abounds through the many may cause thanksgiving to abound to the glory of God. Wherefore we do not lose heart. On the contrary, even though our outer man is decaying, yet our inner man is being renewed day by day. For our present light affliction, which is for the moment, prepares for us an eternal weight of glory that is beyond all measure; while we look not at the things that are seen, but at the things that are not seen. For the things that are seen are temporal, but the things that are not seen are eternal.","links":[[[0],[0]],[[1,2],[1,2,3]],[[3,4],[4,5,6]],[[5],[7,8]],[[6,7],[9,10]],[[8,9],[11,12,13,14,15]],[[10],[16,17,18]],[[11],[19,20]],[[12,13],[21,22,23,24,25]],[[14,15,16,17],[26,27,28,29]],[[18,19,20,21],[30,31,32,33,34,35,36,37]],[[22,23,24,25,26,27],[38,39,40,41,42,43,44,45]],[[28,29,30,31],[46,47,48,49]],[[32,33],[50,51,52,53,54]],[[34,35],[55,56]],[[36],[59]],[[37,38],[60,61]],[[39,40],[57,58]],[[41,42,43,44],[65,66,67,68,69,70]],[[45,46],[62,63,64]],[[47,48],[71,72,73]],[[49,50,51],[74,75,76,77,78]],[[52],[79,80]],[[53,54],[81,82,83]],[[55],[84]],[[56,57,58],[85,86,87,88]],[[59,60,61,62],[89,90,91,92,93,94,95,96,97,98]],[[63,64,65,66],[99,100,101,102,103,104]],[[67,68,69,70],[105,106,107,108,109,110]],[[71,72,73,74,75],[111,112,113,114,115]],[[76,77,78,79],[116,117,118,119,120,121]],[[80,81],[122,123]],[[82],[124]],[[83],[125]],[[84,85,86,87,88,89],[126,127,128,129,130,131,132,133]],[[90,91,92,93,94],[134,135,136,137,138]],[[95,96,97,98,99],[139,140,141,142,143,144,145,146,147,148,149]],[[100,101,102,103],[150,151,152,153,154,155,156]],[[104,105],[157,158,159]],[[106,107],[160,161,162,163]],[[108,109,110],[164,165,166,167,168,169]],[[111,112],[170,171,172]],[[113,114,115],[173,174,175]],[[116],[176,177]],[[117,118,119],[178,179,180,181,182]],[[120,121],[183]],[[122,123],[184,185,186,187,188]],[[124],[189,190,191]],[[125,126,127,128,129,130,131,132],[192,193,194,195,196,197,198]],[[133,134,135,136,137,138],[199,200,201,202,203,204,205]],[[139,140,141,142],[206,207,208]],[[143,144,145,146,147,148,149,150,151,152,153],[209,210,211,212,213,214,215,216,217,218]],[[161,162,163],[219,220,221]],[[158,159,160],[222,223,224,225,226]],[[154,155,156,157],[227,228,229,230,231]],[[164,165,166],[232,233,234,235]],[[167,168],[236,237,238,239,240,241]],[[169],[242]],[[170,171,172],[243,244,245,246,247,248,249]],[[173,174,175],[250,251,252,253,254,255]],[[176,177],[256,257]],[[178,179],[258,259,260]],[[180,181],[261,262,263,264]],[[182,183],[265,266]]]},{"latin":"Caríssimi: Senióres, qui in vobis sunt, obsécro consénior et testis Christi passiónum, qui et eius, quæ in futúro revelánda est, glóriæ communicátor: páscite qui in vobis est gregem Dei, providéntes non coácte, sed spontánee secúndum Deum, neque turpis lucri grátia, sed voluntárie; neque ut dominántes in cleris, sed forma facti gregis ex ánimo. Et, cum apparúerit princeps pastórum, percipiétis immarcescíbilem glóriæ corónam. Deus autem omnis grátiæ, qui vocávit nos in ætérnam suam glóriam in Christo Iesu, módicum passos ipse perfíciet, confirmábit solidabítque. Ipsi glória et impérium in sǽcula sæculórum. Amen.","english":"Dearly beloved brethren: The ancients therefore that are among you, I beseech, who am myself also an ancient, and a witness of the sufferings of Christ: as also a partaker of that glory which is to be revealed in time to come: Feed the flock of God which is among you, taking care of it, not by constraint, but willingly, according to God: not for filthy lucre's sake, but voluntarily: Neither as lording it over the clergy, but being made a pattern of the flock from the heart. And when the prince of pastors shall appear, you shall receive a never fading crown of glory. But the God of all grace, who hath called us into his eternal glory in Christ Jesus, after you have suffered a little, will himself perfect you, and confirm you, and establish you. To him be glory and empire for ever and ever. Amen.","links":[[[0],[0,1,2]],[[1],[3,4]],[[2],[6]],[[3],[8]],[[4],[9]],[[5],[7]],[[6],[10,11]],[[7],[12,13,14,15,16,17]],[[8],[18]],[[9],[19,20]],[[10],[24,25]],[[11],[21,22,23]],[[12],[26]],[[13],[27]],[[14],[31]],[[15],[33]],[[16],[38]],[[17],[39,40,41]],[[18],[35,36,37]],[[19],[34]],[[20],[32]],[[21],[28,29,30]],[[22],[42]],[[23],[47]],[[24],[49]],[[25],[50]],[[26],[48]],[[27],[43,44]],[[28],[45,46]],[[29],[51,52,53,54]],[[30],[55]],[[31],[56,57]],[[32],[58]],[[33],[59]],[[34],[60,61]],[[35],[62]],[[36],[63]],[[37],[65]],[[38],[66]],[[39],[64,67]],[[40],[68]],[[41],[69]],[[42],[70]],[[43],[71]],[[44],[72,73]],[[45],[74]],[[46],[75,76]],[[47],[77]],[[48],[80,81]],[[49],[78,79]],[[50],[82,83,84]],[[51],[85]],[[52],[86,87]],[[53],[88]],[[54],[89]],[[55],[94,95]],[[56],[90,91]],[[57],[92,93]],[[58],[96,97,98]],[[59],[99,100,101]],[[60],[103,104]],[[61],[102]],[[62],[106,107]],[[63],[105]],[[64],[108,109]],[[65],[110]],[[66],[111]],[[67],[112,113]],[[68],[114]],[[69],[115]],[[70],[117]],[[71],[116]],[[72],[118]],[[73],[119]],[[74],[120]],[[75],[121]],[[76],[126,127]],[[77],[122,123,124,125]],[[78],[129]],[[79],[128,130,131]],[[80],[132,133,134]],[[81],[135,136,137]],[[82],[138,139]],[[83],[140,141]],[[84],[142]],[[85],[143]],[[86],[144]],[[87],[145,146]],[[88],[147]],[[89],[148]]]}];

confirmedCorrespondenceSpecs.push(...(window.AD_ALTARE_WORD_MATCH_OVERRIDES || []));

function contextualPhraseRules(key, context = {}) {
  const rules = [];
  const tokens = context.tokens || [];
  const spiritusSanctusTokens = tokens.filter(token => token.key === 'spiritus' || token.key === 'sanctus');
  const hasSpiritus = spiritusSanctusTokens.some(token => token.key === 'spiritus');
  const hasSanctus = spiritusSanctusTokens.some(token => token.key === 'sanctus');

  if ((key === 'spiritus' || key === 'sanctus') && hasSpiritus && hasSanctus) {
    const replacement = spiritusSanctusTokens.slice(0,2).map(token => token.form).join(' ');
    [
      'together with the Holy Ghost',
      'together with the Holy Spirit',
      'in the unity of the Holy Ghost',
      'in the unity of the Holy Spirit',
      'of the Holy Ghost',
      'of the Holy Spirit',
      'to the Holy Ghost',
      'to the Holy Spirit',
      'by the Holy Ghost',
      'by the Holy Spirit',
      'with the Holy Ghost',
      'with the Holy Spirit',
      'in the Holy Ghost',
      'in the Holy Spirit',
      'of the Spirit',
      'the Holy Ghost',
      'the Holy Spirit',
      'Holy Ghost',
      'Holy Spirit'
    ].forEach(term => {
      rules.push({pattern:englishPatternForPhrase(term),replacement,useRuleReplacement:true});
    });
  }

  return rules;
}

function contextualEnglishRules(key, forms = []) {
  const studyWord = studyWordForKey(key);
  const dictionaryEntry = dictionaryEntryForKey(key);
  const terms = [
    ...(interlinearEnglishTerms[key] || []),
    ...forms.flatMap(form => interlinearFormEnglishTerms[normalizeWord(form)] || []),
    ...splitEnglishHints(dictionaryEntry?.meaning),
    ...splitEnglishHints(studyWord.meaning)
  ];

  return terms
    .filter((value,index,array) => value && value.length <= 42 && array.findIndex(item => item.toLocaleLowerCase() === value.toLocaleLowerCase()) === index)
    .sort((a,b) => b.length - a.length)
    .map(term => ({
      pattern:englishPatternForPhrase(term),
      replacement:key
    }));
}

function formSpecificEnglishRules(key, forms = []) {
  const entry = vocabularyLexicon[key];
  if (!entry?.englishRules?.length || !forms.length) return [];
  const visibleForms = new Set(forms.map(form => normalizeWord(form)).filter(Boolean));
  return entry.englishRules.filter(rule => visibleForms.has(normalizeWord(rule.replacement)));
}

function dictionaryEnglishRules(key) {
  const entry = dictionaryEntryForKey(key);
  if (!entry) return [];
  const candidates = [...splitEnglishHints(entry.context),...splitEnglishHints(entry.meaning)]
    .filter((value,index,array) => array.findIndex(item => item.toLocaleLowerCase() === value.toLocaleLowerCase()) === index)
    .sort((a,b) => b.length - a.length);
  return candidates.map(candidate => ({
    pattern:englishPatternForPhrase(candidate),
    replacement:key,
    matchCase:true
  }));
}

function generatedEnglishRules(key) {
  const entry = generatedLexicon.entries?.[key];
  if (!entry) return [];
  const primaryTerms = [
    ...splitEnglishHints(entry.meaning),
    ...splitEnglishHints(entry.context)
  ];
  const terms = [
    ...primaryTerms,
    ...(entry.englishTerms || [])
  ].filter((value,index,array) => value && value.length <= 42 && array.findIndex(item => item.toLocaleLowerCase() === value.toLocaleLowerCase()) === index)
    .sort((a,b) => {
      const primaryA = primaryTerms.some(term => term.toLocaleLowerCase() === a.toLocaleLowerCase()) ? 0 : 1;
      const primaryB = primaryTerms.some(term => term.toLocaleLowerCase() === b.toLocaleLowerCase()) ? 0 : 1;
      return primaryA - primaryB || b.length - a.length;
    })
    .slice(0,16);
  const replacement = entry.forms?.[0] || entry.lemma || key;
  return terms.map(term => ({
    pattern:englishPatternForPhrase(term),
    replacement,
    matchCase:true
  }));
}

function secondaryEnglishRules(key) {
  const studyWord = studyWordForKey(key);
  const terms = [
    ...splitEnglishHints(studyWord.meaning),
    ...splitEnglishHints(studyWord.context)
  ];

  if (key.length > 1) terms.push(key);
  if (studyWord.lemma && studyWord.lemma.length <= 24) terms.push(studyWord.lemma.split(/[,\s]+/)[0]);

  return terms
    .filter((value,index,array) => value && value.length <= 36 && array.findIndex(item => item.toLocaleLowerCase() === value.toLocaleLowerCase()) === index)
    .map(term => ({
      pattern:englishPatternForPhrase(term),
      replacement:studyWord.form || key,
      matchCase:true
    }));
}

function storedAlignmentRules(key,context = {}) {
  const visibleSurfaces = context.surfaces || new Set();
  return state.alignments
    .filter(alignment =>
      alignment.key === key &&
      (!visibleSurfaces.size || visibleSurfaces.has(alignment.latinSurface))
    )
    .sort((a,b) => b.englishPhrase.length - a.englishPhrase.length)
    .map(alignment => ({
      pattern:englishPatternForPhrase(alignment.englishPhrase),
      replacement:alignment.latinForm,
      matchCase:false,
      useRuleReplacement:true,
      userAssigned:true
    }));
}

function mergeEnglishRules(rules) {
  const seen = new Set();
  return rules.filter(rule => {
    const signature = `${rule.pattern.source}/${rule.pattern.flags}/${rule.replacement}`;
    if (seen.has(signature)) return false;
    seen.add(signature);
    return true;
  });
}

function activeEnglishEntries(allowedKeys = null) {
  if (state.mode === 'follow' || state.mode === 'latin') return [];
  const keySet = allowedKeys instanceof Set ? allowedKeys : allowedKeys?.keys;
  const surfaceSet = allowedKeys?.surfaces || null;
  const formsByKey = allowedKeys?.formsByKey || new Map();
  const strictSurfaceKeys = new Set(['a','ab','ad','aut','autem','cum','de','et','ex','in','ne','non','per','pro','sed','si','sine','sub','ut']);
  return [...new Set([...state.learning,...state.known])]
    .filter(key => !keySet || keySet.has(key))
    .filter(key => !strictSurfaceKeys.has(key) || !surfaceSet || surfaceSet.has(key))
    .map(key => {
    const replacements = formsByKey.get(key) || [studyWordForKey(key).form || key];
    const rules = mergeEnglishRules([
      ...storedAlignmentRules(key,allowedKeys),
      ...contextualPhraseRules(key,allowedKeys),
      ...formSpecificEnglishRules(key,replacements),
      ...contextualEnglishRules(key,replacements),
      ...dictionaryEnglishRules(key),
      ...generatedEnglishRules(key),
      ...secondaryEnglishRules(key)
    ]);
    return rules.length ? {key,englishRules:rules,replacements,hasSpiritusInContext:formsByKey.has('spiritus')} : null;
  }).filter(Boolean);
}

function latinContextInText(text) {
  const keys = new Set();
  const surfaces = new Set();
  const formsByKey = new Map();
  const tokens = [];
  String(text || '').split(/(\s+)/).forEach(piece => {
    const clean = normalizeWord(piece);
    if (clean) {
      const form = cleanVisibleForm(piece) || clean;
      const key = vocabularyKeyForWord(clean);
      surfaces.add(clean);
      keys.add(key);
      if (!formsByKey.has(key)) formsByKey.set(key,[]);
      formsByKey.get(key).push(form);
      tokens.push({key,form,surface:clean});
    }
  });
  return {keys,surfaces,formsByKey,tokens};
}

function correspondenceWordTokens(text) {
  const source = String(text ?? '');
  const marker = source.match(/^(\s*(?:[℣℟]|[PSM])\.\s*)/u);
  const offset = marker?.[1]?.length || 0;
  const body = source.slice(offset);
  const pattern = /[\p{L}\p{M}]+(?:['’][\p{L}\p{M}]+)?|\d+/gu;
  return [...body.matchAll(pattern)].map((match,index) => ({
    index,
    text:match[0],
    start:offset + match.index,
    end:offset + match.index + match[0].length
  }));
}

function correspondenceTextKey(text) {
  return correspondenceWordTokens(text).map(token => normalizeWord(token.text)).join(' ');
}

const confirmedCorrespondenceMap = new Map(confirmedCorrespondenceSpecs.map((spec,index) => [
  `${correspondenceTextKey(spec.latin)}||${correspondenceTextKey(spec.english)}`,
  {...spec,id:`confirmed-${index + 1}`}
]));

const reviewedTrailingRubricTranslations = new Map([
  [
    'Finito Evangelio sancti Ioannis, discedens ab Altari, pro gratiarum actione dicit Ant. Trium puerórum, cum reliquis, ut habetur in principio Missalis.',
    'When the Gospel of St. John is finished, departing from the altar, he says as thanksgiving the Antiphon of the Three Children, with the remaining prayers, as found at the beginning of the Missal.'
  ]
]);

function englishPhraseTokenGroup(tokens,phrase) {
  const phraseTokens = correspondenceWordTokens(phrase).map(token => normalizeWord(token.text));
  if (!phraseTokens.length) return null;
  const sourceTokens = tokens.map(token => normalizeWord(token.text));
  for (let start = 0; start <= sourceTokens.length - phraseTokens.length; start += 1) {
    if (phraseTokens.every((token,index) => sourceTokens[start + index] === token)) {
      return phraseTokens.map((_token,index) => start + index);
    }
  }
  return null;
}

const helperAbsorbingLatinForms = new Set([
  'deus','dei','deo','deum',
  'dominus','domini','domino','dominum',
  'eiusdem',
  'filius','filii','filio','filium',
  'nomen','nomine','nomini','nominis',
  'pater','patris','patri','patre','patrem',
  'spiritus'
]);

function expandReviewedEnglishGroup(surface,group,englishTokens) {
  const ordered = [...new Set(group)].sort((a,b) => a - b);
  if (!ordered.length) return ordered;
  if (!helperAbsorbingLatinForms.has(surface)) return ordered;
  const end = ordered[ordered.length - 1];
  const candidates = interlinearFormEnglishTerms[surface] || [];
  for (const candidate of candidates) {
    const candidateTokens = correspondenceWordTokens(candidate).map(token => normalizeWord(token.text));
    const start = end - candidateTokens.length + 1;
    if (start < 0) continue;
    const actual = englishTokens.slice(start,end + 1).map(token => normalizeWord(token.text));
    if (candidateTokens.every((token,index) => token === actual[index])) {
      return candidateTokens.map((_token,index) => start + index);
    }
  }
  const start = ordered[0];
  const article = normalizeWord(englishTokens[start - 1]?.text);
  if (['the','a','an'].includes(article)) return [start - 1,...ordered];
  return ordered;
}

function confirmedCorrespondenceFor(latinText,englishText) {
  const key = `${correspondenceTextKey(latinText)}||${correspondenceTextKey(englishText)}`;
  const spec = confirmedCorrespondenceMap.get(key);
  if (!spec) return null;
  const latinTokens = correspondenceWordTokens(latinText);
  const englishTokens = correspondenceWordTokens(englishText);
  // A raw link's first element is normally a single Latin token index. It can
  // also be an array of indices when several Latin words share one English
  // phrase with no separate word-for-word counterpart of their own (e.g. an
  // idiom like "et in saecula saeculorum" -> "world without end", where "et"
  // and "in" have no distinct English word). All indices in the group render
  // with the SAME correspondence id, so hovering/tapping any of them
  // highlights the same shared English phrase instead of nothing.
  const links = spec.links.flatMap((rawLink,index) => {
    const [latinIndexOrIndices,...englishGroups] = rawLink;
    const latinIndices = Array.isArray(latinIndexOrIndices) ? latinIndexOrIndices : [latinIndexOrIndices];
    const id = `${spec.id}-${index + 1}`;
    return latinIndices.map(latinIndex => {
      const latinToken = latinTokens[latinIndex];
      if (!latinToken) return null;
      let groups = englishGroups
        .map(group => [...new Set(group)].filter(tokenIndex => englishTokens[tokenIndex]))
        .filter(group => group.length);
      const surface = normalizeWord(latinToken.text);
      const userOverride = [...state.alignments].reverse().find(alignment =>
        alignment.key === vocabularyKeyForWord(latinToken.text) &&
        alignment.latinSurface === surface
      );
      const userGroup = userOverride && englishPhraseTokenGroup(englishTokens,userOverride.englishPhrase);
      if (userGroup?.length) groups = [userGroup];
      else groups = groups.map(group => expandReviewedEnglishGroup(surface,group,englishTokens));
      return {
        id,
        latinIndex,
        key:vocabularyKeyForWord(latinToken.text),
        surface,
        form:latinToken.text,
        englishGroups:groups
      };
    }).filter(Boolean);
  });
  return {spec,latinTokens,englishTokens,links};
}

function strongPhraseRanges(text,useFineReviewedBreaks = false) {
  const source = String(text ?? '');
  // Reviewed correspondence maps are indexed against the original strong
  // punctuation clauses.  Comma-splitting those clauses here can make one
  // reviewed English span overlap the next one, duplicating words on screen.
  // Keep reviewed mappings on their certified clause boundaries; the
  // visual-only fallback may still use the finer comma segmentation.
  const parts = useFineReviewedBreaks ? alignmentPhraseParts(source) : splitStrongPhrases(source);
  if (parts.length <= 1) return [{text:source.trim(),start:0,end:source.length}];
  const ranges = [];
  let cursor = 0;
  parts.forEach(part => {
    const start = source.indexOf(part,cursor);
    if (start < 0) return;
    const end = start + part.length;
    ranges.push({text:part,start,end});
    cursor = end;
  });
  return ranges.length ? ranges : [{text:source.trim(),start:0,end:source.length}];
}

function alignmentPhraseParts(text) {
  return splitStrongPhrases(text).flatMap(part =>
    phraseWordCount(part) > 32 ? splitCommaPhrases(part) : [part]
  );
}

function clauseIndexForToken(token,ranges) {
  const index = ranges.findIndex(range => token.start >= range.start && token.end <= range.end);
  return index < 0 ? Math.max(0,ranges.length - 1) : index;
}

function tokenBoundsForClauseSpan(tokens,ranges,startClause,endClause) {
  const indices = tokens
    .filter(token => {
      const clause = clauseIndexForToken(token,ranges);
      return clause >= startClause && clause <= endClause;
    })
    .map(token => token.index);
  if (!indices.length) return null;
  return {start:Math.min(...indices),end:Math.max(...indices)};
}

// Long reviewed readings used to render as one enormous row. Latin and English
// then wrapped independently, so corresponding sentences drifted far apart.
// Use the reviewed token links to group punctuation-delimited clauses into
// monotonic bilingual rows. Local word-order differences remain inside a row;
// genuinely crossing clauses are merged so neither language is reordered.
function confirmedAlignedPhraseSegments(latinText,englishText,lineIndex = 0) {
  const correspondence = confirmedCorrespondenceFor(latinText,englishText);
  if (!correspondence) return null;
  const trailingRubric = [...reviewedTrailingRubricTranslations.entries()].find(([latin]) =>
    String(latinText).trimEnd().endsWith(latin)
  );
  if (trailingRubric) {
    const [rubricLatin,rubricEnglish] = trailingRubric;
    const rubricStart = String(latinText).lastIndexOf(rubricLatin);
    const prayerLatin = String(latinText).slice(0,rubricStart).trim();
    const prayerLatinTokenCount = correspondenceWordTokens(prayerLatin).length;
    const prayerLinks = correspondence.spec.links.map(rawLink => {
      const [latinIndexOrIndices,...englishGroups] = rawLink;
      const latinIndices = (Array.isArray(latinIndexOrIndices) ? latinIndexOrIndices : [latinIndexOrIndices])
        .filter(index => index < prayerLatinTokenCount);
      return latinIndices.length ? [latinIndices,...englishGroups] : null;
    }).filter(Boolean);
    const prayerKey = `${correspondenceTextKey(prayerLatin)}||${correspondenceTextKey(englishText)}`;
    if (!confirmedCorrespondenceMap.has(prayerKey)) {
      confirmedCorrespondenceMap.set(prayerKey,{
        latin:prayerLatin,
        english:englishText,
        links:prayerLinks,
        id:`${correspondence.spec.id}-prayer`
      });
    }
    const prayerRows = confirmedAlignedPhraseSegments(prayerLatin,englishText,lineIndex) || [{
      latin:prayerLatin,
      english:englishText,
      lineIndex,
      phraseIndex:0
    }];
    return [
      ...prayerRows,
      {latin:rubricLatin,english:rubricEnglish,lineIndex,phraseIndex:prayerRows.length}
    ];
  }
  // These two long fixed prayers have several semantic units separated only
  // by commas in one language. Finer reviewed boundaries keep their two
  // columns together on a phone; other reviewed texts retain strong-only
  // boundaries to avoid turning local word-order crossings into duplicates.
  const useFineReviewedBreaks = [
    'Súscipe, sancta Trínitas,',
    'Súpplices te rogámus, omnípotens Deus:'
  ].some(prefix => String(latinText).trimStart().startsWith(prefix));
  const latinRanges = strongPhraseRanges(latinText,useFineReviewedBreaks);
  const englishRanges = strongPhraseRanges(englishText,useFineReviewedBreaks);
  if (latinRanges.length <= 1 && englishRanges.length <= 1) return null;

  const latinClauseForToken = correspondence.latinTokens.map(token => clauseIndexForToken(token,latinRanges));
  const englishClauseForToken = correspondence.englishTokens.map(token => clauseIndexForToken(token,englishRanges));
  const linkedEnglishClauses = Array.from({length:latinRanges.length},() => new Set());

  correspondence.spec.links.forEach(rawLink => {
    const [latinIndexOrIndices,...englishGroups] = rawLink;
    const latinIndices = Array.isArray(latinIndexOrIndices) ? latinIndexOrIndices : [latinIndexOrIndices];
    const englishIndices = englishGroups.flat();
    latinIndices.forEach(latinTokenIndex => {
      const latinClause = latinClauseForToken[latinTokenIndex];
      if (latinClause == null) return;
      englishIndices.forEach(englishTokenIndex => {
        const englishClause = englishClauseForToken[englishTokenIndex];
        if (englishClause != null) linkedEnglishClauses[latinClause].add(englishClause);
      });
    });
  });

  const nearestEnglishClause = latinClause => {
    for (let distance = 1; distance < latinRanges.length; distance += 1) {
      const before = linkedEnglishClauses[latinClause - distance];
      if (before?.size) return Math.max(...before);
      const after = linkedEnglishClauses[latinClause + distance];
      if (after?.size) return Math.min(...after);
    }
    return Math.min(englishRanges.length - 1,Math.round(
      latinClause * Math.max(0,englishRanges.length - 1) / Math.max(1,latinRanges.length - 1)
    ));
  };

  const clauseRows = latinRanges.map((_range,latinClause) => {
    const linked = [...linkedEnglishClauses[latinClause]];
    const fallback = nearestEnglishClause(latinClause);
    return {
      latinStart:latinClause,
      latinEnd:latinClause,
      englishStart:linked.length ? Math.min(...linked) : fallback,
      englishEnd:linked.length ? Math.max(...linked) : fallback
    };
  });

  const rows = [];
  clauseRows.forEach(row => {
    const previous = rows[rows.length - 1];
    if (previous && row.englishStart <= previous.englishEnd) {
      previous.latinEnd = row.latinEnd;
      previous.englishStart = Math.min(previous.englishStart,row.englishStart);
      previous.englishEnd = Math.max(previous.englishEnd,row.englishEnd);
    } else {
      rows.push({...row});
    }
  });
  if (rows.length <= 1) return null;

  rows[0].englishStart = 0;
  for (let index = 0; index < rows.length - 1; index += 1) {
    rows[index].englishEnd = Math.max(rows[index].englishEnd,rows[index + 1].englishStart - 1);
  }
  rows[rows.length - 1].englishEnd = englishRanges.length - 1;

  return rows.map((row,phraseIndex) => {
    const latinStart = latinRanges[row.latinStart].start;
    const latinEnd = latinRanges[row.latinEnd].end;
    const englishStart = englishRanges[row.englishStart].start;
    const englishEnd = englishRanges[row.englishEnd].end;
    const latin = String(latinText).slice(latinStart,latinEnd).trim();
    const english = String(englishText).slice(englishStart,englishEnd).trim();
    const latinBounds = tokenBoundsForClauseSpan(
      correspondence.latinTokens,latinRanges,row.latinStart,row.latinEnd
    );
    const englishBounds = tokenBoundsForClauseSpan(
      correspondence.englishTokens,englishRanges,row.englishStart,row.englishEnd
    );
    if (!latinBounds || !englishBounds) return {latin,english,lineIndex,phraseIndex};

    const links = correspondence.spec.links.map(rawLink => {
      const [latinIndexOrIndices,...englishGroups] = rawLink;
      const latinIndices = (Array.isArray(latinIndexOrIndices) ? latinIndexOrIndices : [latinIndexOrIndices])
        .filter(index => index >= latinBounds.start && index <= latinBounds.end)
        .map(index => index - latinBounds.start);
      if (!latinIndices.length) return null;
      const groups = englishGroups
        .map(group => group
          .filter(index => index >= englishBounds.start && index <= englishBounds.end)
          .map(index => index - englishBounds.start))
        .filter(group => group.length);
      return groups.length ? [latinIndices,...groups] : null;
    }).filter(Boolean);

    const derivedKey = `${correspondenceTextKey(latin)}||${correspondenceTextKey(english)}`;
    if (!confirmedCorrespondenceMap.has(derivedKey)) {
      confirmedCorrespondenceMap.set(derivedKey,{
        latin,
        english,
        links,
        id:`${correspondence.spec.id}-row-${phraseIndex + 1}`
      });
    }
    return {latin,english,lineIndex,phraseIndex};
  });
}

function correspondenceDomId(context,id) {
  return context ? `${context}:${id}` : id;
}

function confirmedEnglishMarkup(text,latinText,correspondenceContext = '') {
  const correspondence = confirmedCorrespondenceFor(latinText,text);
  if (!correspondence) return null;
  const assignments = new Map();

  correspondence.links.forEach(link => {
    const status = wordStatus(link.key);
    link.englishGroups.forEach((group,groupIndex) => {
      const anchor = Math.min(...group);
      group.forEach(tokenIndex => assignments.set(tokenIndex,{
        link,
        status,
        groupIndex,
        anchor,
        omit:status === 'known' && tokenIndex !== anchor
      }));
    });
  });

  let cursor = 0;
  let html = '';
  correspondence.englishTokens.forEach((token,tokenIndex) => {
    const assignment = assignments.get(tokenIndex);
    const gap = String(text).slice(cursor,token.start);
    if (!assignment) {
      html += escapeHtml(gap + token.text);
    } else if (assignment.omit) {
      // The matching Latin form is inserted once at this group's first English token.
    } else {
      const shown = assignment.status === 'known' ? assignment.link.form : token.text;
      const classes = ['english-word','correspondence-word'];
      if (assignment.status) classes.push(`${assignment.status}-word`);
      const correspondenceId = correspondenceDomId(correspondenceContext,assignment.link.id);
      html += `${escapeHtml(gap)}<span class="${classes.join(' ')}" data-lemma="${escapeHtml(assignment.link.key)}" data-correspondence="${escapeHtml(correspondenceId)}">${escapeHtml(shown)}</span>`;
    }
    cursor = token.end;
  });
  html += escapeHtml(String(text).slice(cursor));
  return html;
}

function persistVocabulary() {
  state.learning = [...new Set(state.learning)].filter(key => key && !state.known.includes(key));
  state.known = [...new Set(state.known)].filter(Boolean);
  state.saved = state.learning.map(studyWordForKey);
  localStorage.setItem('ad-altare-learning',JSON.stringify(state.learning));
  localStorage.setItem('ad-altare-known',JSON.stringify(state.known));
  localStorage.setItem('ad-altare-saved',JSON.stringify(state.saved));
}

function persistAlignments() {
  localStorage.setItem('ad-altare-alignments',JSON.stringify(state.alignments));
}

function refreshVocabularyMarkup() {
  const y = scrollY;
  renderMass();
  scrollTo({top:y});
}

function latinMarkup(text,editContext = '',englishText = '') {
  const displayText = normalizeSingleCrossPlacement(text);
  if (state.mode === 'follow') return escapeHtml(displayText);
  const correspondence = confirmedCorrespondenceFor(displayText,normalizeSingleCrossPlacement(englishText));
  const correspondenceByLatinIndex = new Map((correspondence?.links || []).map(link => [link.latinIndex,link]));
  let lineIndex = 0;
  let tokenIndex = 0;
  return displayText.split(/(\s+)/).map(piece => {
    if (/^\s+$/.test(piece)) {
      const lineBreaks = (piece.match(/\n/g) || []).length;
      if (lineBreaks) {
        lineIndex += lineBreaks;
        tokenIndex = 0;
      }
      return piece;
    }
    if (/^(?:[PSM]\.|[℣℟]\.)$/u.test(piece)) return escapeHtml(piece);
    const clean = normalizeWord(piece);
    if (!clean) return escapeHtml(piece);
    const key = vocabularyKeyForWord(clean);
    const status = wordStatus(key);
    const classes = ['word'];
    const currentTokenIndex = tokenIndex++;
    const correspondenceLink = correspondenceByLatinIndex.get(currentTokenIndex);
    const showStudyMarks = !state.editorActive && state.mode !== 'follow' && state.mode !== 'latin';
    if (showStudyMarks && (state.explored.has(clean) || state.explored.has(key))) classes.push('explored');
    if (showStudyMarks && status) classes.push(`${status}-word`);
    if (state.editorActive) classes.push('alignment-latin-word');
    const editAttributes = state.editorActive
      ? ` data-edit-context="${escapeHtml(editContext)}" data-edit-line="${lineIndex}" data-edit-token="${currentTokenIndex}"`
      : '';
    const correspondenceAttributes = correspondenceLink && !state.editorActive
      ? ` data-correspondence="${escapeHtml(correspondenceDomId(editContext,correspondenceLink.id))}"`
      : '';
    return `<button class="${classes.join(' ')}" data-word="${escapeHtml(clean)}" data-lemma="${escapeHtml(key)}" data-form="${escapeHtml(piece)}"${editAttributes}${correspondenceAttributes}>${escapeHtml(piece)}</button>`;
  }).join('');
}

function editableEnglishLineMarkup(text,editContext,lineIndex) {
  const marker = String(text ?? '').match(/^(\s*(?:[℣℟]\.|[PSM]\.)\s*)/u);
  const prefix = marker?.[1] || '';
  const body = String(text ?? '').slice(prefix.length);
  let tokenIndex = 0;
  const bodyMarkup = body.split(/([A-Za-zÀ-ÖØ-öø-ÿ]+(?:['’][A-Za-zÀ-ÖØ-öø-ÿ]+)?|\d+)/g).map(piece => {
    if (!piece || !/^(?:[A-Za-zÀ-ÖØ-öø-ÿ]+(?:['’][A-Za-zÀ-ÖØ-öø-ÿ]+)?|\d+)$/.test(piece)) return escapeHtml(piece);
    const currentTokenIndex = tokenIndex++;
    return `<button type="button" class="alignment-english-word" data-edit-context="${escapeHtml(editContext)}" data-edit-line="${lineIndex}" data-edit-token="${currentTokenIndex}">${escapeHtml(piece)}</button>`;
  }).join('');
  return `${escapeHtml(prefix)}${bodyMarkup}`;
}

function editableEnglishMarkup(text,editContext = '') {
  return String(text ?? '').split('\n')
    .map((line,lineIndex) => editableEnglishLineMarkup(line,editContext,lineIndex))
    .join('\n');
}

function englishMarkupLine(text, latinText = '',correspondenceContext = '') {
  const confirmedMarkup = confirmedEnglishMarkup(String(text ?? ''),String(latinText ?? ''),correspondenceContext);
  if (confirmedMarkup !== null) return confirmedMarkup;
  // Release-safety rule: an English word may be highlighted or replaced only
  // when this exact Latin/English sentence has a reviewed correspondence map.
  // Dictionary-based guessing is useful for the word card, but it is not safe
  // for interlinear display because Latin and English word order often differ.
  return escapeHtml(String(text ?? ''));
}

function englishMarkup(text, latinText = '', editContext = '') {
  const displayText = normalizeSingleCrossPlacement(text);
  if (state.editorActive && state.mode === 'learn') return editableEnglishMarkup(displayText,editContext);
  if (state.mode === 'follow') return escapeHtml(displayText);
  const englishLines = String(displayText ?? '').split('\n');
  const latinLines = String(latinText ?? '').split('\n');
  if (englishLines.length === 1 && latinLines.length <= 1) return englishMarkupLine(displayText,latinText,editContext);
  return englishLines.map((line,index) => englishMarkupLine(line,latinLines[index] || '',`${editContext}:${index}`)).join('\n');
}


function isInstructionLine(latinLine, englishLine) {
  const la = String(latinLine != null ? latinLine : '').trim();
  const en = String(englishLine != null ? englishLine : '').trim();
  if (!la && !en) return false;
  const marker = /^(S\.|M\.|P\.|\u2123\.|\u211f\.|O\.|A\.)\s/;
  const laLow = la.toLowerCase();
  const enLow = en.toLowerCase();
  const laStarts = [
    'deinde','postea','tunc','interim','qua finita','quibus finitis','sequitur','si vero',
    'sacerdos dicit','sacerdos repetit','sacerdos submissa','signat se','iungit manus',
    'iunctis manibus prosequitur','discooperit','submittit','et pronuntians','et signans',
    'et erigit se','cum ipsa','extendens manus','extendit manus','dicto,','dicta antiphona',
    'finito evangelio','osculatur altare','minister, seu','or\u00e9mus, ei ascendens',
    'cooperit calicem','ponit hostiam','accipit ambabus','genuflectit,'
  ];
  const enStartsStrong = [
    'here he','the priest ','the server ','the deacon','the subdeacon',
    'kneeling','bowing','signing himself','standing','rising','turning','genuflecting',
    'uncovering','after pronouncing','after saluting','after the elevation'
  ];
  const laIsRubric = !!la && !marker.test(la) && !/^tunc venit iesus/i.test(la) && laStarts.some(function(s){ return laLow.indexOf(s) === 0; });
  const enThenRe = /^then\s+(he\b|the priest\b|the celebrant\b|the deacon\b|the server\b|his hands\b)/i;
  const enIsRubric = !!en && !marker.test(en) && (enStartsStrong.some(function(s){ return enLow.indexOf(s) === 0; }) || enThenRe.test(en));
  return laIsRubric || enIsRubric;
}

function renderMass() {
  if (!sections.length) sections = missingMassSections($('#datePicker')?.value || computerDateISO());
  $('#massText').innerHTML = sections.map(section => `
    <section class="mass-section" id="${section.id}" data-section="${section.id}">
      <header class="section-heading"><h2>${escapeHtml(section.title)}</h2><span>${escapeHtml(section.part)}</span></header>
      ${section.rubric ? `<p class="rubric">${escapeHtml(section.rubric)}</p>` : ''}
      ${section.blocks.map((block,blockIndex) => {
        const phraseSegments = pairedLineSegments(block.la,block.en);
        return `
        <div class="prayer-block${block.response ? ' response' : ''}">
          ${phraseSegments.map((segment,segmentIndex) => {
            const editContext = `${section.id}:${blockIndex}:${segment.lineIndex}:${segment.phraseIndex}`;
            const firstPhrase = segmentIndex === 0;
            const lastPhrase = segmentIndex === phraseSegments.length - 1;
            const instructionLine = isInstructionLine(segment.latin,segment.english);
            return `
          <div class="phrase-pair${instructionLine ? ' instruction-line' : ''}">
            <div class="language latin">${firstPhrase ? '<span class="language-label">Latin</span>' : ''}<p class="latin-copy">${latinMarkup(segment.latin,editContext,segment.english)}</p>${lastPhrase && block.ref ? `<small class="verse-ref">${escapeHtml(block.ref)}</small>` : ''}</div>
            <div class="language english">${firstPhrase ? '<span class="language-label">English</span>' : ''}<p class="english-copy">${englishMarkup(segment.english,segment.latin,editContext)}</p>${lastPhrase && block.ref ? `<small class="verse-ref">${escapeHtml(block.ref)}</small>` : ''}</div>
          </div>`;
          }).join('')}
        </div>`;
      }).join('')}
    </section>`).join('');
  renderNavigation();
  updateProgress();
}

function renderNavigation() {
  const links = sections.map(section => {
    const label = section.navTitle || section.title;
    return `<a class="section-link" href="#${escapeHtml(section.id)}" data-target="${escapeHtml(section.id)}" title="${escapeHtml(section.title)}">${escapeHtml(label)}</a>`;
  }).join('');
  $('#sectionNav').innerHTML = links;
  $('#desktopNav').innerHTML = links;
}

function selectedAlignmentEnglishButtons() {
  return $$('.alignment-english-word.alignment-english-selected')
    .sort((a,b) => Number(a.dataset.editToken) - Number(b.dataset.editToken));
}

function selectedAlignmentEnglishPhrase() {
  return selectedAlignmentEnglishButtons().map(button => button.textContent.trim()).filter(Boolean).join(' ');
}

function resetAlignmentSelection(updateControls = true) {
  state.alignmentLatin = null;
  state.alignmentEnglishAnchor = null;
  state.alignmentEnglishStart = null;
  state.alignmentEnglishEnd = null;
  $$('.alignment-latin-selected').forEach(element => element.classList.remove('alignment-latin-selected'));
  $$('.alignment-english-selected').forEach(element => element.classList.remove('alignment-english-selected'));
  if (updateControls) updateAlignmentEditorControls();
}

function updateAlignmentEditorControls() {
  const controls = $('#alignmentEditorControls');
  if (!controls) return;
  const available = state.mode === 'learn' && state.editorUnlocked;
  controls.hidden = !available;
  $('#alignmentEditButton').hidden = !available;
  $('#alignmentEditButton').disabled = state.editorActive;
  $('#alignmentEditButton').classList.toggle('active',state.editorActive);
  $('#alignmentEditButton').textContent = state.editorActive ? 'Editing' : 'Edit';
  $('#alignmentAssignButton').hidden = !state.editorActive;
  $('#alignmentFinishedButton').hidden = !state.editorActive;

  const phrase = selectedAlignmentEnglishPhrase();
  $('#alignmentAssignButton').disabled = !(state.alignmentLatin && phrase);
  $('#alignmentEditorStatus').textContent = state.editorActive
    ? `${state.alignmentLatin?.form || 'Choose Latin'} → ${phrase || 'choose English'}`
    : '';
}

function unlockAlignmentEditor() {
  if (state.mode !== 'learn') return;
  state.editorUnlocked = true;
  updateAlignmentEditorControls();
  showToast('Private Edit button unlocked');
}

function beginAlignmentEditing() {
  if (state.mode !== 'learn') return;
  state.editorActive = true;
  document.body.classList.add('alignment-editing');
  if ($('#wordDialog').open) $('#wordDialog').close();
  resetAlignmentSelection(false);
  renderMass();
  updateAlignmentEditorControls();
  showToast('Choose one Latin word, then the matching English word or words');
}

function updateAlignmentSelectionStyles() {
  const latin = state.alignmentLatin;
  $$('.alignment-latin-word').forEach(button => {
    const selected = latin &&
      button.dataset.editContext === latin.context &&
      Number(button.dataset.editLine) === latin.line &&
      Number(button.dataset.editToken) === latin.token;
    button.classList.toggle('alignment-latin-selected',Boolean(selected));
  });

  const anchor = state.alignmentEnglishAnchor;
  $$('.alignment-english-word').forEach(button => {
    const token = Number(button.dataset.editToken);
    const selected = anchor &&
      button.dataset.editContext === anchor.context &&
      Number(button.dataset.editLine) === anchor.line &&
      token >= state.alignmentEnglishStart &&
      token <= state.alignmentEnglishEnd;
    button.classList.toggle('alignment-english-selected',Boolean(selected));
  });
  updateAlignmentEditorControls();
}

function selectAlignmentLatin(button) {
  state.alignmentLatin = {
    key:button.dataset.lemma,
    form:cleanVisibleForm(button.dataset.form) || button.textContent.trim(),
    surface:normalizeWord(button.dataset.word || button.textContent),
    context:button.dataset.editContext,
    line:Number(button.dataset.editLine),
    token:Number(button.dataset.editToken)
  };
  state.alignmentEnglishAnchor = null;
  state.alignmentEnglishStart = null;
  state.alignmentEnglishEnd = null;
  updateAlignmentSelectionStyles();
  showToast(`${state.alignmentLatin.form} selected — now choose its English word or phrase`);
}

function selectAlignmentEnglish(button) {
  if (!state.alignmentLatin) {
    showToast('Choose the Latin word first');
    return;
  }
  if (button.dataset.editContext !== state.alignmentLatin.context) {
    showToast('Choose the English meaning beside that Latin passage');
    return;
  }

  const context = button.dataset.editContext;
  const line = Number(button.dataset.editLine);
  const token = Number(button.dataset.editToken);
  if (!state.alignmentEnglishAnchor ||
      state.alignmentEnglishAnchor.context !== context ||
      state.alignmentEnglishAnchor.line !== line) {
    state.alignmentEnglishAnchor = {context,line,token};
    state.alignmentEnglishStart = token;
    state.alignmentEnglishEnd = token;
  } else {
    state.alignmentEnglishStart = Math.min(state.alignmentEnglishAnchor.token,token);
    state.alignmentEnglishEnd = Math.max(state.alignmentEnglishAnchor.token,token);
  }
  updateAlignmentSelectionStyles();
}

function assignSelectedAlignment() {
  const latin = state.alignmentLatin;
  const englishPhrase = selectedAlignmentEnglishPhrase();
  if (!latin || !englishPhrase) {
    showToast('Choose one Latin word and its English word or phrase');
    return;
  }

  const matchingIndex = state.alignments.findIndex(alignment =>
    alignment.key === latin.key &&
    alignment.latinSurface === latin.surface &&
    alignment.englishPhrase.toLocaleLowerCase() === englishPhrase.toLocaleLowerCase()
  );
  const alignment = {
    key:latin.key,
    latinForm:latin.form,
    latinSurface:latin.surface,
    englishPhrase,
    updatedAt:new Date().toISOString()
  };
  if (matchingIndex >= 0) state.alignments[matchingIndex] = alignment;
  else state.alignments.push(alignment);
  persistAlignments();
  showToast(`Assigned ${latin.form} to “${englishPhrase}”`);
  resetAlignmentSelection();
}

function finishAlignmentEditing() {
  persistAlignments();
  state.editorActive = false;
  state.editorUnlocked = false;
  document.body.classList.remove('alignment-editing');
  resetAlignmentSelection(false);
  renderMass();
  updateAlignmentEditorControls();
  showToast('Assignments saved — Learn mode is back to normal');
}

function setMode(mode) {
  const previousMode = state.mode;
  if (mode !== 'learn') {
    state.editorActive = false;
    state.editorUnlocked = false;
    document.body.classList.remove('alignment-editing');
    resetAlignmentSelection(false);
  }
  state.mode = mode;
  localStorage.setItem('ad-altare-mode',mode);
  document.body.classList.toggle('mode-learn',mode === 'learn');
  document.body.classList.toggle('mode-latin',mode === 'latin');
  document.body.classList.toggle('mode-progress',mode === 'progress');
  $$('.mode').forEach(button => {
    const active = button.dataset.mode === mode;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  if (sections.length && previousMode !== mode) {
    const y = scrollY;
    renderMass();
    scrollTo({top:y});
  }
  updateAlignmentEditorControls();
  if (mode === 'learn') showToast('Tap any Latin word to explore it');
  if (mode === 'progress') showToast('Showing English with learned Latin');
}

function openWord(button) {
  const surfaceKey = button.dataset.word;
  const entry = buildWordEntry(surfaceKey,button.dataset.form);
  state.activeWord = entry;
  state.explored.add(surfaceKey);
  state.explored.add(entry.key);
  localStorage.setItem('ad-altare-explored',JSON.stringify([...state.explored]));
  button.classList.add('explored');
  $('#wordForm').textContent = entry.lemma || entry.form;
  $('#wordGrammar').textContent = entry.grammar;
  $('#wordPronunciation').textContent = entry.pronunciation;
  $('#wordMeaning').textContent = entry.meaning;
  $('#wordLemma').textContent = entry.display || entry.lemma;
  $('#wordContext').textContent = entry.context;
  const numEl = $('#wordNumber');
  if (numEl) numEl.textContent = entry.num || '—';
  updateWordButtons();
  updateProgress();
  $('#wordDialog').showModal();
}

function updateWordButtons() {
  const key = state.activeWord?.key;
  const learning = key && state.learning.includes(key);
  const known = key && state.known.includes(key);
  $('#learnWordButton').classList.toggle('active',Boolean(learning));
  $('#knowWordButton').classList.toggle('active',Boolean(known));
  $('#learnWordButton').textContent = learning ? 'In Learning' : 'Add this to Learn';
  $('#knowWordButton').textContent = known ? 'Learned' : 'I know this';
}

function markLearningKey(key,{toast = true,rerender = true} = {}) {
  if (!key) return;
  state.known = state.known.filter(item => item !== key);
  if (!state.learning.includes(key)) state.learning.push(key);
  persistVocabulary();
  if (toast) showToast(`${studyWordForKey(key).lemma || key} added to Learning`);
  if (rerender) refreshVocabularyMarkup();
  updateWordButtons();
  updateSavedCount();
}

function markKnownKey(key,{toast = true,rerender = true} = {}) {
  if (!key) return;
  state.learning = state.learning.filter(item => item !== key);
  if (!state.known.includes(key)) state.known.push(key);
  persistVocabulary();
  if (toast) showToast(`${studyWordForKey(key).lemma || key} moved to Learned`);
  if (rerender) refreshVocabularyMarkup();
  updateWordButtons();
  updateSavedCount();
}

function addActiveWordToLearning() {
  if (state.activeWord) markLearningKey(state.activeWord.key);
}

function markActiveWordKnown() {
  if (state.activeWord) markKnownKey(state.activeWord.key);
}

function updateSavedCount() { $('#savedCount').textContent = state.learning.length + state.known.length; }

async function loadYearLibrary(year) {
  const key = String(year);
  if (importedYears.has(key)) return;
  importedYears.add(key);
  const bundledLibrary = bundledMassLibraries[key];
  if (bundledLibrary?.dates) {
    Object.assign(importedMasses, bundledLibrary.dates);
    return;
  }
  try {
    const response = await fetch(`data/masses-${key}.json`, { cache:'no-cache' });
    if (!response.ok) throw new Error(`No local Mass library for ${key}`);
    const library = await response.json();
    Object.assign(importedMasses, library.dates || {});
  } catch {
    // Keep the embedded fallback and the honest "not installed" message.
  }
}

function getMassForDate(value) {
  return importedMasses[value] || embeddedMasses[value] || null;
}

function updateProgress() {
  const visibleUnique = new Set($$('.word').map(button => button.dataset.lemma || button.dataset.word));
  const learnedVisible = [...state.known].filter(word => visibleUnique.has(word)).length;
  const percent = visibleUnique.size ? Math.min(100,Math.round(learnedVisible / visibleUnique.size * 100)) : 0;
  $('#progressRing').style.setProperty('--progress',percent);
  $('#learnedPercent').textContent = `${percent}%`;
  $('#progressRing span').textContent = 'learned';
  $('#exploredCount').textContent = state.learning.length || state.known.length
    ? `${state.learning.length} learning · ${state.known.length} learned.`
    : 'Tap Latin words to begin.';
}

function applyMassForDate(value) {
  if (state.editorActive) resetAlignmentSelection(false);
  const installed = getMassForDate(value);
  if (installed) {
    currentMass = installed;
    sections = installed.sections;
    $('#dataNote').hidden = true;
    $('#dataNote').textContent = '';
  } else {
    currentMass = {
      title:'Daily Mass import needed',
      latinTitle:'Calendarium Missalis inserendum',
      meta:'1962 calendar · date selected',
      vestment:null,
      sections:missingMassSections(value)
    };
    sections = currentMass.sections;
    $('#dataNote').hidden = false;
    $('#dataNote').textContent = 'The app read your computer/date selection correctly, but this date is not in the installed Mass library yet.';
  }

  $('#feastTitle').textContent = currentMass.title;
  $('#feastLatin').textContent = currentMass.latinTitle;
  $('#liturgicalMeta').innerHTML = currentMass.vestment
    ? `<span class="vestment ${currentMass.vestment}"></span> ${currentMass.meta}`
    : currentMass.meta;
  renderMass();
  updateReadingPosition();
}

function openPractice() {
  state.cardIndex = 0;
  state.cardRevealed = false;
  const cards = practiceWords();
  const hasWords = cards.length > 0;
  $('#practiceEmpty').hidden = hasWords;
  $('#flashcard').hidden = !hasWords;
  $('#cardActions').hidden = true;
  if (hasWords) renderCard();
  $('#practiceDialog').showModal();
}

function practiceWords() {
  return state.learning.map(studyWordForKey);
}

function renderCard() {
  const cards = practiceWords();
  if (!cards.length) {
    $('#practiceEmpty').hidden = false;
    $('#flashcard').hidden = true;
    $('#cardActions').hidden = true;
    return;
  }
  state.cardIndex %= cards.length;
  const word = cards[state.cardIndex];
  $('#cardProgress').textContent = `Word ${state.cardIndex + 1} of ${cards.length}`;
  $('#cardFront').innerHTML = state.cardRevealed ? `${escapeHtml(word.meaning)}<small>${escapeHtml(word.form)} · ${escapeHtml(word.lemma)}</small>` : escapeHtml(word.form);
  $('.flip-hint').textContent = state.cardRevealed ? word.grammar : 'Tap to reveal';
  $('#cardActions').hidden = !state.cardRevealed;
}

function flipCard() {
  if (!practiceWords().length || state.cardRevealed) return;
  state.cardRevealed = true;
  renderCard();
}

function nextCard(score = 'again') {
  const cards = practiceWords();
  if (!cards.length) return renderCard();
  const word = cards[state.cardIndex % cards.length];
  if (score === 'known') markKnownKey(word.key,{toast:true,rerender:true});
  else state.cardIndex = (state.cardIndex + 1) % cards.length;
  state.cardRevealed = false;
  renderCard();
}

async function updateDate(value) {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return;
  $('#datePicker').value = value;
  $('#dateWeekday').textContent = date.toLocaleDateString('en-US',{weekday:'long'});
  $('#dateLabel').textContent = date.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  await loadYearLibrary(date.getFullYear());
  applyMassForDate(value);
}

function stepDate(amount) {
  const current = new Date(`${$('#datePicker').value}T12:00:00`);
  current.setDate(current.getDate() + amount);
  updateDate(current.toISOString().slice(0,10));
}

function updateReadingPosition() {
  const max = document.documentElement.scrollHeight - innerHeight;
  $('#readingProgress').style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
  let current = sections[0].id;
  for (const section of $$('.mass-section')) {
    if (section.getBoundingClientRect().top < 190) current = section.id;
  }
  $$('.section-link').forEach(link => link.classList.toggle('active',link.dataset.target === current));
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'),2200);
}

async function toggleWakeLock(enabled) {
  if (!('wakeLock' in navigator)) {
    $('#wakeToggle').checked = false;
    showToast('Screen wake is not supported by this browser');
    return;
  }
  try {
    if (enabled) {
      state.wakeLock = await navigator.wakeLock.request('screen');
      showToast('Screen will stay awake during Mass');
    } else if (state.wakeLock) {
      await state.wakeLock.release();
      state.wakeLock = null;
    }
  } catch { showToast('Could not keep the screen awake'); }
}

function clearCorrespondenceHover(scope = $('#massText')) {
  if (!scope) return;
  scope.querySelectorAll('.english-word.correspondence-hover, .english-word.correspondence-learning-hover, .english-word.correspondence-known-hover')
    .forEach(word => word.classList.remove('correspondence-hover','correspondence-learning-hover','correspondence-known-hover'));
}

function showCorrespondenceHover(latinWord) {
  if (!latinWord || state.mode !== 'learn' || state.editorActive) return;
  const correspondenceId = latinWord.dataset.correspondence;
  const phrasePair = latinWord.closest('.phrase-pair');
  if (!correspondenceId || !phrasePair) return;
  clearCorrespondenceHover(phrasePair);
  const hoverClass = latinWord.classList.contains('known-word')
    ? 'correspondence-known-hover'
    : latinWord.classList.contains('learning-word')
      ? 'correspondence-learning-hover'
      : 'correspondence-hover';
  phrasePair.querySelectorAll('.english-word[data-correspondence]').forEach(englishWord => {
    if (englishWord.dataset.correspondence === correspondenceId) englishWord.classList.add(hoverClass);
  });
}

function bindEvents() {
  $$('.mode').forEach(button => button.addEventListener('click',() => setMode(button.dataset.mode)));
  $('#editorSecret').addEventListener('click',unlockAlignmentEditor);
  $('#alignmentEditButton').addEventListener('click',beginAlignmentEditing);
  $('#alignmentAssignButton').addEventListener('click',assignSelectedAlignment);
  $('#alignmentFinishedButton').addEventListener('click',finishAlignmentEditing);
  $('#massText').addEventListener('pointerover',event => {
    const word = event.target.closest('.word[data-correspondence]');
    if (!word || word.contains(event.relatedTarget)) return;
    showCorrespondenceHover(word);
  });
  $('#massText').addEventListener('pointerout',event => {
    const word = event.target.closest('.word[data-correspondence]');
    if (!word || word.contains(event.relatedTarget)) return;
    clearCorrespondenceHover(word.closest('.phrase-pair'));
  });
  $('#massText').addEventListener('focusin',event => showCorrespondenceHover(event.target.closest('.word[data-correspondence]')));
  $('#massText').addEventListener('focusout',event => clearCorrespondenceHover(event.target.closest('.phrase-pair')));
  $('#massText').addEventListener('click',event => {
    const englishWord = event.target.closest('.alignment-english-word');
    if (englishWord && state.editorActive) {
      selectAlignmentEnglish(englishWord);
      return;
    }
    const word = event.target.closest('.word');
    if (word && state.mode === 'learn') {
      if (state.editorActive) selectAlignmentLatin(word);
      else openWord(word);
    }
  });
  $('#learnWordButton').addEventListener('click',addActiveWordToLearning);
  $('#knowWordButton').addEventListener('click',markActiveWordKnown);
  $('#vocabButton').addEventListener('click',openPractice);
  $('#practiceButton').addEventListener('click',openPractice);
  $('#closePractice').addEventListener('click',() => $('#practiceDialog').close());
  $('#flashcard').addEventListener('click',flipCard);
  $('#flashcard').addEventListener('keydown',event => { if (event.key === 'Enter' || event.key === ' ') flipCard(); });
  $$('#cardActions button').forEach(button => button.addEventListener('click',() => nextCard(button.dataset.score)));
  $('#dateButton').addEventListener('click',() => { if ($('#datePicker').showPicker) $('#datePicker').showPicker(); else $('#datePicker').click(); });
  $('#datePicker').addEventListener('change',event => updateDate(event.target.value));
  $('#previousDay').addEventListener('click',() => stepDate(-1));
  $('#nextDay').addEventListener('click',() => stepDate(1));
  $('#todayButton').addEventListener('click',() => { updateDate(computerDateISO()); scrollTo({top:0,behavior:'smooth'}); });
  $('#massSelect').addEventListener('change',() => showToast('Mass of the Day selected'));
  $('#settingsButton').addEventListener('click',() => {
    $('#settingsPanel').classList.add('open');
    $('#settingsPanel').setAttribute('aria-hidden','false');
    $('#settingsButton').setAttribute('aria-expanded','true');
  });
  $('#closeSettings').addEventListener('click',() => {
    $('#settingsPanel').classList.remove('open');
    $('#settingsPanel').setAttribute('aria-hidden','true');
    $('#settingsButton').setAttribute('aria-expanded','false');
  });
  $('#fontSize').addEventListener('input',event => document.documentElement.style.setProperty('--latin-size',`${event.target.value}px`));
  $('#dimToggle').addEventListener('change',event => document.body.classList.toggle('dim',event.target.checked));
  $('#wakeToggle').addEventListener('change',event => toggleWakeLock(event.target.checked));
  document.addEventListener('scroll',updateReadingPosition,{passive:true});
}

function migrateSavedWords() {
  if (!state.learning.length && state.saved.length) {
    state.learning = state.saved.map(word => vocabularyKeyForWord(word.key || word.form || word.lemma)).filter(Boolean);
  }
  persistVocabulary();
}

async function init() {
  const versionLabel = $('#appVersion');
  if (versionLabel) versionLabel.textContent = `Ad Altare Beta · ${APP_VERSION}`;
  migrateSavedWords();
  bindEvents();
  setMode(state.mode);
  updateSavedCount();
  await updateDate(computerDateISO());
  updateReadingPosition();
}

init();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}
