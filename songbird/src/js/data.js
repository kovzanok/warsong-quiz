const unitsData = {
  ru: [
    [
      {
        name: "Утер",
        nameEng: "Паладин",
        description:
          "Первый паладин из Ордена Серебряной Длани, который повел свой орден на битву против Орды во времена Второй Войны. ",
        image: "./src/img/unit_pic/training/uther.jpg",
        audio: "./src/sound/ru/training/uther.mp3",
      },
      {
        name: "Тралл",
        nameEng: "Шаман",
        description: `Единственный сын Дуротана, вождя клана Северных Волков, и его жены Драки. Несмотря на то, что с раннего детства он остался сиротой и попал к людям в рабство, ему суждено было стать вождём Орды.`,
        image: "./src/img/unit_pic/training/trall.jpg",
        audio: "./src/sound/ru/training/thrall.mp3",
      },
      {
        name: "Джайна",
        nameEng: "Маг",
        description: `Одна из величайших волшебниц этого мира. Когда-то, бывшая подруга принца Артеса, Джайна своими глазами видела падение Лордерона.`,
        image: "./src/img/unit_pic/training/jaina.jpg",
        audio: "./src/sound/ru/training/jaina.mp3",
      },
      {
        name: "Иллидан",
        nameEng: "Охотник на демонов",
        description:
          "Брат близнец Малфуриона. После связи с Легионом так же известен как Иллидан Предатель.",
        image: "./src/img/unit_pic/training/illidan.jpg",
        audio: "./src/sound/ru/training/illidan.mp3",
      },
      {
        name: "Кел'Тузед",
        nameEng: "Лич",
        description:
          "Маг Даларана и бывший член совета Кирин-Тора, увлекавшийся некромантией.",
        image: "./src/img/unit_pic/training/keltuzad.jpg",
        audio: "./src/sound/ru/training/keltuzad.mp3",
      },
      {
        name: "Рексар",
        nameEng: "Повелитель зверей",
        description:
          "Рексар - сын Леорокса, вождя племени Мок'Натал, что жило в тесной долине в Острогорье и вело постоянные воины с обитавшими тут кланами огров. ",
        image: "./src/img/unit_pic/training/rexxar.jpg",
        audio: "./src/sound/ru/training/rexxar.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/question.jpg",
      },
    ],
    [
      {
        name: "Пехотинец",
        nameEng: "Человек",
        description:
          "Cильный и выносливый горожанин Азерота, который добровольно пришел в армию Альянса для защиты своих земель.",
        image: "./src/img/unit_pic/humans/footman.jpg",
        audio: "./src/sound/ru/humans/footman.mp3",
      },
      {
        name: "Артас",
        nameEng: "Паладин",
        description: `Сын короля Теренаса Менетила II, наследный принц Лордерона и рыцарь Серебряной Длани. Позже главный слуга Нер'Зула и его первый Рыцарь Смерти.`,
        image: "./src/img/unit_pic/humans/arthas.png",
        audio: "./src/sound/ru/humans/arthas.mp3",
      },
      {
        name: "Волшебница",
        nameEng: "Эльф",
        description: `Маги-женщины, посылаемые магократами Даларана для слежения за опасными битвами магов. Они используют свои тайные знания для помощи Альянсу, когда человечество находится в опасности.`,
        image: "./src/img/unit_pic/humans/sorceress.png",
        audio: "./src/sound/ru/humans/sorceress.mp3",
      },
      {
        name: "Работник",
        nameEng: "Человек",
        description:
          "Работников выбирали из трудолюбивых и крепких горожан, которые жили в различных королевствах Лордерона. Добывая золото и дерево для армии, они являются основой Альянса. ",
        image: "./src/img/unit_pic/humans/peasant.jpg",
        audio: "./src/sound/ru/humans/peasant.mp3",
      },
      {
        name: "Стрелок",
        nameEng: "Дворф",
        description:
          "Храбрые дворфийские стрелки верно защищают свое горное королевство Каз-Модан, однако они снова были вызваны Альянсом.",
        image: "./src/img/unit_pic/humans/rifleman.jpg",
        audio: "./src/sound/ru/humans/rifleman.mp3",
      },
      {
        name: "Мурадин",
        nameEng: "Горный Король",
        description:
          "Герой Альянса, младший брат Короля Магни Бронзоборода и старший брат известного исследователя Бранна.",
        image: "./src/img/unit_pic/humans/muradin.png",
        audio: "./src/sound/ru/humans/muradin.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/humans.png",
      },
    ],
    [
      {
        name: "Послушник",
        nameEng: "Человек",
        description:
          "Люди, отдавшие себя во власть Нер'зула и Плети. Эти озлобленные фанатичные мужчины и женщины не остановятся ни перед чем для исполнения воли короля лича и хранят тайну Культа проклятых.",
        image: "./src/img/unit_pic/undead/acolyte.jpg",
        audio: "./src/sound/ru/undead/acolyte.mp3",
      },
      {
        name: "Анубарак",
        nameEng: "Повелитель могил",
        description: `Представитель древней расы нерубианцев, издревле обитавших в Нортренде. За долгие столетия, проведенные пауками на материке, они основали свое собственное королевство - город-государство Азол-Неруб.`,
        image: "./src/img/unit_pic/undead/anub.jpg",
        audio: "./src/sound/ru/undead/anub.mp3",
      },
      {
        name: "Вурдалак",
        nameEng: "Нежить",
        description: `Основные работники Плети. Эти разлагающиеся трупы когда-то были зомби, которые теперь окончательно стали «настоящей нежитью».`,
        image: "./src/img/unit_pic/undead/ghoul.jpg",
        audio: "./src/sound/ru/undead/ghoul.mp3",
      },
      {
        name: "Мясник",
        nameEng: "Нежить",
        description:
          "Скрученные и изуродованные тела, состоящие из нескольких мертвых конечностей и тел разных трупов.",
        image: "./src/img/unit_pic/undead/abomination.jpg",
        audio: "./src/sound/ru/undead/abomination.mp3",
      },
      {
        name: "Повелитель ужаса",
        nameEng: "Демон",
        description:
          "Невероятно сильные демоны, которые однажды служили демону Кил'джедену как самые доверенные лейтенанты в его войске.",
        image: "./src/img/unit_pic/undead/dreadlord.jpg",
        audio: "./src/sound/ru/undead/dreadlord.mp3",
      },
      {
        name: "Могильщик",
        nameEng: "Нежить",
        description:
          "Крупные мумифицированные существа, явившиеся результатом воскрешения нерубианов (потомки акиров). Их низкие тела поддерживаются шестью веретенообразными паучьими конечностями, а торс похож на человеческий.",
        image: "./src/img/unit_pic/undead/crypt.jpg",
        audio: "./src/sound/ru/undead/crypt.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/undead.png",
      },
    ],
    [
      {
        name: "Дриада",
        nameEng: "Дриада",
        description:
          "Очаровательные дриады являются детьми полубога ночных эльфов, Кенария. Эти резвые и игривые существа отдаленно напоминают кентавров, но их тела больше приспособлены для жилья в лесу.",
        image: "./src/img/unit_pic/elves/dryad.jpg",
        audio: "./src/sound/ru/elves/dryad.mp3",
      },
      {
        name: "Друид-медведь",
        nameEng: "Ночной эльф",
        description: `Эти древние друиды поклоняются тотему медведа и используют его силу для защиты их сообщества от внешней угрозы.`,
        image: "./src/img/unit_pic/elves/bear.jpg",
        audio: "./src/sound/ru/elves/bear.mp3",
      },
      {
        name: "Друид-ворон",
        nameEng: "Ночной эльф",
        description: `Эти друиды поклоняются тотему ворона. Их роль в сообществе - разведка и сбор информации. Они умеют превращаться в воронов, чтобы разведывать и доставлять приказы удаленным группам войск. `,
        image: "./src/img/unit_pic/elves/talon.jpg",
        audio: "./src/sound/ru/elves/talon.mp3",
      },
      {
        name: "Майев",
        nameEng: "Смотрящая в ночь",
        description:
          "Майев,вместе со своим младшим братом Джеродом,сыграла ключевую роль в борьбе против Пылающего Легиона во время войны Древних.В результате,Майев стала стражником предателя Иллидана Свирепого.",
        image: "./src/img/unit_pic/elves/maev.jpg",
        audio: "./src/sound/ru/elves/maev.mp3",
      },
      {
        name: "Лучница",
        nameEng: "Ночной эльф",
        description:
          "Первое звание в армии Смотрящих. Эти смелые воительницы являются меткими лучниками и скрываются в лесах Калимдора для получения преимущества. ",
        image: "./src/img/unit_pic/elves/archer.png",
        audio: "./src/sound/ru/elves/archer.mp3",
      },
      {
        name: "Малфурион",
        nameEng: "Друид",
        description:
          "Брат близнец Иллидана, величайший и один из самых мощных в мире друидов.",
        image: "./src/img/unit_pic/elves/malfurion.jpg",
        audio: "./src/sound/ru/elves/malfurion.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/elves.png",
      },
    ],
    [
      {
        name: "Рубака",
        nameEng: "Орк",
        description:
          "Это первая и последняя линия обороны Орды. Эти могучие воины вооружены массивными боевыми топорами и демонстрируют собой всю дикость и коварство их расы.",
        image: "./src/img/unit_pic/horde/grunt.jpg",
        audio: "./src/sound/ru/horde/grunt.mp3",
      },
      {
        name: "Кэрн Кровавый Рог",
        nameEng: "Вождь минотавров",
        description: `Мудрый вождь минотавров во времена III войны. Объединился с ордой Тралла.`,
        image: "./src/img/unit_pic/horde/cairne.jpg",
        audio: "./src/sound/ru/horde/cairne.mp3",
      },
      {
        name: "Раб",
        nameEng: "Орк",
        description: `Звание раба означает самое низкое положение среди орков. Обладая также самыми низкими навыками среди орков, эти собаки выполняют всю черную орочью работу, такую как сбор древесины и добыча золота.`,
        image: "./src/img/unit_pic/horde/peon.jpg",
        audio: "./src/sound/ru/horde/peon.mp3",
      },
      {
        name: "Гром Задира",
        nameEng: "Мастер клинка",
        description:
          "Вождь орочьего клана Боевых Топоров. Известен своей вспыльчивостью и громким голосом, что особенно сильно выражается, когда он кричит. Из-за этого Гром и получил своё прозвище— «Адский Крик».",
        image: "./src/img/unit_pic/horde/grom.jpg",
        audio: "./src/sound/ru/horde/grom.mp3",
      },
      {
        name: "Шаман",
        nameEng: "Орк",
        description:
          "Под предводительством Тралла ораки снова открыли в себе способности к шаманизмую В попытках избавить Орду от демочнической порчи Тралл запретил использование черной магии и некромантии.",
        image: "./src/img/unit_pic/horde/shaman.jpg",
        audio: "./src/sound/ru/horde/shaman.mp3",
      },
      {
        name: "Охотник за головами",
        nameEng: "Тролль",
        description:
          "Тролли-дикари северного Лордерона снова обязались предоставить свою верность Орде. Эти коварные воины с детства обучаются охоте, слежению и ловле самых опасных диких зверей с помощью ловушек.",
        image: "./src/img/unit_pic/horde/troll.jpg",
        audio: "./src/sound/ru/horde/troll.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/horde.jpg",
      },
    ],
    [
      {
        name: "Пандарен Пивовар",
        nameEng: "Пандарен",
        description:
          "Родом из скрытной империи Пандарен, могущественные пивовары путешествуют по миру в поисках экзотического эля и лучших спиртных напитков.",
        image: "./src/img/unit_pic/neutral/panda.jpg",
        audio: "./src/sound/ru/neutral/panda.mp3",
      },
      {
        name: "Разрушитель",
        nameEng: "Демон",
        description: `Грозный демонический воин, один вид которого повергает противников в ужас. Один из из лордов Пылающего Легиона.`,
        image: "./src/img/unit_pic/neutral/pit.jpg",
        audio: "./src/sound/ru/neutral/pit.mp3",
      },
      {
        name: "Алхимик",
        nameEng: "Гоблин",
        description: `В этой необычной паре хозяин гоблин едет на спине своего раба-огра. Несмотря на то, что огр прошел ряд химических «обработок», огр иногда демонстрирует признаки независимости и даже откровенного неповиновения.`,
        image: "./src/img/unit_pic/neutral/alch.jpg",
        audio: "./src/sound/ru/neutral/alch.mp3",
      },
      {
        name: "Механик",
        nameEng: "Гоблин",
        description:
          "Гоблин-механик, достигший небывалого мастерства в своем ремесле.",
        image: "./src/img/unit_pic/neutral/tinker.jpg",
        audio: "./src/sound/ru/neutral/tinker.mp3",
      },
      {
        name: "Королева змей",
        nameEng: "Нага",
        description: "Грозная колдунья из народа наг.",
        image: "./src/img/unit_pic/neutral/naga.jpg",
        audio: "./src/sound/ru/neutral/naga.mp3",
      },
      {
        name: "Повелитель огня",
        nameEng: "Элементаль",
        description:
          "Повелители Огня — разумные элементали, более сложные и могущественные существа, чем лишенные разума водные элементали, которых маги Альянса призывают к битве.",
        image: "./src/img/unit_pic/neutral/fire.jpg",
        audio: "./src/sound/ru/neutral/fire.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/neutral.jpg",
      },
    ],
  ],
  en: [
    [
      {
        name: "Uther",
        nameEng: "Paladin",
        description:
          "The first paladin of the Order of the Silver Hand, who led his order to battle against the Horde during the Second War.",
        image: "./src/img/unit_pic/training/uther.jpg",
        audio: "./src/sound/en/training/uther.mp3",
      },
      {
        name: "Thrall",
        nameEng: "Shaman",
        description: `He was the only son of Durotan, the leader of the Northern Wolves clan, and his wife Draka. Despite the fact that from early childhood he was orphaned and fell into slavery to people, he was destined to become the leader of the Horde.`,
        image: "./src/img/unit_pic/training/trall.jpg",
        audio: "./src/sound/en/training/thrall.mp3",
      },
      {
        name: "Jaina",
        nameEng: "Mage",
        description: `One of the greatest sorceresses of this world. Once, a former friend of Prince Artes, Jaina saw with her own eyes the fall of Lordaeron.`,
        image: "./src/img/unit_pic/training/jaina.jpg",
        audio: "./src/sound/en/training/jaina.mp3",
      },
      {
        name: "Illidan",
        nameEng: "Demon hunter",
        description:
          "He is the twin brother of Malfurion. After his association with the Legion, he is also known as Illidan the Traitor.",
        image: "./src/img/unit_pic/training/illidan.jpg",
        audio: "./src/sound/en/training/illidan.mp3",
      },
      {
        name: "Kel'Thuzad",
        nameEng: "Lich",
        description:
          "Mage of Dalarana and a former member of the Council of Kirin-Torah who was fond of necromancy.",
        image: "./src/img/unit_pic/training/keltuzad.jpg",
        audio: "./src/sound/en/training/keltuzad.mp3",
      },
      {
        name: "Rexxar",
        nameEng: "Beastmaster",
        description:
          "Rexar is the son of Leorox, the leader of the Mok'Natal tribe, who lived in a cramped valley in Blade's Edge Mountains and led constant warriors with the ogres clans that lived here.",
        image: "./src/img/unit_pic/training/rexxar.jpg",
        audio: "./src/sound/en/training/rexxar.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/question.jpg",
      },
    ],
    [
      {
        name: "Footman",
        nameEng: "Human",
        description:
          "A powerful and hardy townsman of Azeroth, who voluntarily joined the Alliance Army to defend his lands.",
        image: "./src/img/unit_pic/humans/footman.jpg",
        audio: "./src/sound/en/humans/footman.mp3",
      },
      {
        name: "Arthas",
        nameEng: "Paladin",
        description: `He was the son of King Terenas Menetil II, Crown Prince of Lordaeron and Knight of Silver Dlany. Later, Ner'Zul's chief servant and his first Death Knight.`,
        image: "./src/img/unit_pic/humans/arthas.png",
        audio: "./src/sound/en/humans/arthas.mp3",
      },
      {
        name: "Sorceress",
        nameEng: "Elf",
        description: `Female mages sent by Dalaran's magocrats to spy on dangerous mage battles. They use their secret knowledge to help the Alliance when humanity is in danger.`,
        image: "./src/img/unit_pic/humans/sorceress.png",
        audio: "./src/sound/en/humans/sorceress.mp3",
      },
      {
        name: "Peasant",
        nameEng: "Human",
        description:
          "Workers were chosen from hard-working and sturdy townspeople who lived in the various kingdoms of Lordaeron. Mining gold and wood for the army, they are the backbone of the Alliance.",
        image: "./src/img/unit_pic/humans/peasant.jpg",
        audio: "./src/sound/en/humans/peasant.mp3",
      },
      {
        name: "Rifleman",
        nameEng: "Dwarf",
        description:
          "Brave Dwarven riflemen faithfully defend their mountain kingdom of Kaz-Modan, but they were again summoned by the Alliance.",
        image: "./src/img/unit_pic/humans/rifleman.jpg",
        audio: "./src/sound/en/humans/rifleman.mp3",
      },
      {
        name: "Muradin",
        nameEng: "Mountain King",
        description:
          "Hero of the Alliance, younger brother of King Magni Bronzebeard and older brother of the famous explorer Brann.",
        image: "./src/img/unit_pic/humans/muradin.png",
        audio: "./src/sound/en/humans/muradin.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/humans.png",
      },
    ],
    [
      {
        name: "Acolyte",
        nameEng: "Human",
        description:
          "People who gave themselves over to the power of Ner'zul and the Scourge. These embittered fanatical men and women will stop at nothing to fulfill the will of the Lich King and keep the secret of the Cult of the Damned.",
        image: "./src/img/unit_pic/undead/acolyte.jpg",
        audio: "./src/sound/en/undead/acolyte.mp3",
      },
      {
        name: "Anub'arak",
        nameEng: "Crypt Lord",
        description: `A representative of the ancient race of Nerubians, who have lived in Northrend since ancient times. For many centuries spent by spiders on the mainland, they founded their own kingdom - the city-state of Azol-Nerub.`,
        image: "./src/img/unit_pic/undead/anub.jpg",
        audio: "./src/sound/en/undead/anub.mp3",
      },
      {
        name: "Ghoul",
        nameEng: "Undead",
        description: `The main manpower of the Scourge. These decomposing corpses were once zombies that have now finally become "true undead."`,
        image: "./src/img/unit_pic/undead/ghoul.jpg",
        audio: "./src/sound/en/undead/ghoul.mp3",
      },
      {
        name: "Abomination",
        nameEng: "Undead",
        description:
          "Twisted and mutilated bodies consisting of several dead limbs and the bodies of different corpses.",
        image: "./src/img/unit_pic/undead/abomination.jpg",
        audio: "./src/sound/en/undead/abomination.mp3",
      },
      {
        name: "Dreadlord",
        nameEng: "Demon",
        description:
          "Incredibly powerful demons who once served the demon Kil'jeden as the most trusted lieutenants in his army.",
        image: "./src/img/unit_pic/undead/dreadlord.jpg",
        audio: "./src/sound/en/undead/dreadlord.mp3",
      },
      {
        name: "Crypt Fiend",
        nameEng: "Undead",
        description:
          "Large mummified creatures resulting from the resurrection of the Nerubians (descendants of the Akir). Their low bodies are supported by six spindle-shaped spider limbs, and the torso is similar to that of a human.",
        image: "./src/img/unit_pic/undead/crypt.jpg",
        audio: "./src/sound/en/undead/crypt.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/undead.png",
      },
    ],
    [
      {
        name: "Dryad",
        nameEng: "Dryad",
        description:
          "The charming dryads are the children of the night elves demigod, Kenarius. These frisky and playful creatures vaguely resemble centaurs, but their bodies are more adapted for living in the forest.",
        image: "./src/img/unit_pic/elves/dryad.jpg",
        audio: "./src/sound/en/elves/dryad.mp3",
      },
      {
        name: "Druid of the Claw",
        nameEng: "Night elf",
        description: `These ancient druids worship the bear's totem and use its power to protect their community from an external threat.`,
        image: "./src/img/unit_pic/elves/bear.jpg",
        audio: "./src/sound/en/elves/bear.mp3",
      },
      {
        name: "Druid of the Talon",
        nameEng: "Night elf",
        description: `These druids worship the totem of the raven. Their role in the community is intelligence and information gathering. They are able to turn into ravens to scout and deliver orders to remote groups of troops.`,
        image: "./src/img/unit_pic/elves/talon.jpg",
        audio: "./src/sound/en/elves/talon.mp3",
      },
      {
        name: "Maiev",
        nameEng: "Warden",
        description:
          "Mayev, along with her younger brother Jerod, played a key role in the fight against the Burning Legion during the War of the Ancients.As a result, Mayev became the guardian of the traitor Illidan the Fierce.",
        image: "./src/img/unit_pic/elves/maev.jpg",
        audio: "./src/sound/en/elves/maev.mp3",
      },
      {
        name: "Archer",
        nameEng: "Night elf",
        description:
          "First rank in the Army of the Overseers. These brave warriors are accurate archers and hide in the forests of Calimdor for an advantage. ",
        image: "./src/img/unit_pic/elves/archer.png",
        audio: "./src/sound/en/elves/archer.mp3",
      },
      {
        name: "Malfurion",
        nameEng: "Druid",
        description:
          "The twin brother of Illidan, the greatest and one of the world's most powerful druids.",
        image: "./src/img/unit_pic/elves/malfurion.jpg",
        audio: "./src/sound/en/elves/malfurion.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/elves.png",
      },
    ],
    [
      {
        name: "Grunt",
        nameEng: "Orc",
        description:
          "This is the first and last line of defense of the Horde. These mighty warriors are armed with massive battle axes and demonstrate the savagery and cunning of their race.",
        image: "./src/img/unit_pic/horde/grunt.jpg",
        audio: "./src/sound/en/horde/grunt.mp3",
      },
      {
        name: "Cairne Bloodhoof",
        nameEng: "Tauren Chieftain",
        description: `The wise chief of the Minotaurs during the Third War. He allied himself with Thrall's horde.`,
        image: "./src/img/unit_pic/horde/cairne.jpg",
        audio: "./src/sound/en/horde/cairne.mp3",
      },
      {
        name: "Peon",
        nameEng: "Orc",
        description: `The title of peon means the lowest position among the orcs. With also the lowest skills among orcs, these dogs do all the black orochi work, such as collecting wood and mining gold.`,
        image: "./src/img/unit_pic/horde/peon.jpg",
        audio: "./src/sound/en/horde/peon.mp3",
      },
      {
        name: "Grommash Hellscream",
        nameEng: "Blademaster",
        description: `Chief of the Clan of Battle Axes. He is known for his short temper and loud voice, which is especially pronounced when he screams. Because of this, Thunder got its nickname - "Hell's Scream.`,
        image: "./src/img/unit_pic/horde/grom.jpg",
        audio: "./src/sound/en/horde/grom.mp3",
      },
      {
        name: "Shaman",
        nameEng: "Orc",
        description:
          "Under the leadership of Thrall, the orcs rediscovered their abilities for shamanism In an attempt to rid the Horde of demonic corruption, Thrall banned the use of black magic and necromancy.",
        image: "./src/img/unit_pic/horde/shaman.jpg",
        audio: "./src/sound/en/horde/shaman.mp3",
      },
      {
        name: "Troll Headhunter",
        nameEng: "Troll",
        description:
          "Savage trolls of northern Lordaeron who again pledged themselves to the Horde. These treacherous warriors from childhood are trained to hunt, track and catch the most dangerous wild animals with the help of traps.",
        image: "./src/img/unit_pic/horde/troll.jpg",
        audio: "./src/sound/en/horde/troll.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/horde.jpg",
      },
    ],
    [
      {
        name: "Pandaren Brewmaster",
        nameEng: "Pandaren",
        description:
          "Hailing from the secretive Pandaren Empire, powerful brewers travel the world in search of exotic ale and the best spirits.",
        image: "./src/img/unit_pic/neutral/panda.jpg",
        audio: "./src/sound/en/neutral/panda.mp3",
      },
      {
        name: "Pit Lord",
        nameEng: "Demon",
        description: `A formidable demonic warrior, one kind of which plunges opponents into horror. One of the lords of the Burning Legion.`,
        image: "./src/img/unit_pic/neutral/pit.jpg",
        audio: "./src/sound/en/neutral/pit.mp3",
      },
      {
        name: "Alchemist",
        nameEng: "Goblin",
        description: `In this unusual pair, the master goblin rides on the back of his ogre slave. Despite the fact that the ogre has undergone a number of chemical "treatments", the ogre sometimes shows signs of independence and even outright disobedience.`,
        image: "./src/img/unit_pic/neutral/alch.jpg",
        audio: "./src/sound/en/neutral/alch.mp3",
      },
      {
        name: "Tinker",
        nameEng: "Goblin",
        description:
          "A goblin mechanic who has achieved unprecedented skill in his craft.",
        image: "./src/img/unit_pic/neutral/tinker.jpg",
        audio: "./src/sound/en/neutral/tinker.mp3",
      },
      {
        name: "Naga Sea Witch",
        nameEng: "Naga",
        description: "A formidable sorceress of the Nag people.",
        image: "./src/img/unit_pic/neutral/naga.jpg",
        audio: "./src/sound/en/neutral/naga.mp3",
      },
      {
        name: "Firelord",
        nameEng: "Elemental",
        description:
          "The Fire Lords are sentient elementals, more complex and powerful beings than the mindless aquatic elementals that alliance mages summon to battle.",
        image: "./src/img/unit_pic/neutral/fire.jpg",
        audio: "./src/sound/en/neutral/fire.mp3",
      },
      {
        fractionLogo: "./src/img/fraction_logo/neutral.jpg",
      },
    ],
  ],
};

export default unitsData;
