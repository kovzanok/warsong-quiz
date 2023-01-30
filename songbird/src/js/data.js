const unitsData = [
  [
    {
      name: "Утер",
      nameEng: "Uther",
      description:
        "Первый паладин из Ордена Серебряной Длани, который повел свой орден на битву против Орды во времена Второй Войны. ",
      image: "./src/img/unit_pic/training/uther.jpg",
      audio: "./src/sound/training/uther.mp3",
    },
    {
      name: "Тралл",
      nameEng: "Thrall",
      description: `Единственный сын Дуротана, вождя клана Северных Волков, и его жены Драки. Несмотря на то, что с раннего детства он остался сиротой и попал к людям в рабство, ему суждено было стать вождём Орды.`,
      image: "./src/img/unit_pic/training/trall.jpg",
      audio: "./src/sound/training/thrall.mp3",
    },
    {
      name: "Джайна",
      nameEng: "Jaina",
      description: `Одна из величайших волшебниц этого мира. Когда-то, бывшая подруга принца Артеса, Джайна своими глазами видела падение Лордерона.`,
      image: "./src/img/unit_pic/training/jaina.jpg",
      audio: "./src/sound/training/jaina.mp3",
    },
    {
      name: "Иллидан",
      nameEng: "Illidan",
      description:
        "Брат близнец Малфуриона. После связи с Легионом так же известен как Иллидан Предатель.",
      image: "./src/img/unit_pic/training/illidan.jpg",
      audio: "./src/sound/training/illidan.mp3",
    },
    {
      name: "Кел'Тузед",
      nameEng: "Kel'Thuzad",
      description:
        "Маг Даларана и бывший член совета Кирин-Тора, увлекавшийся некромантией.",
      image: "./src/img/unit_pic/training/keltuzad.jpg",
      audio: "./src/sound/training/keltuzad.mp3",
    },
    {
      name: "Рексар",
      nameEng: "Rexxar",
      description:
        "Рексар - сын Леорокса, вождя племени Мок'Натал, что жило в тесной долине в Острогорье и вело постоянные воины с обитавшими тут кланами огров. ",
      image: "./src/img/unit_pic/training/rexxar.jpg",
      audio: "./src/sound/training/rexxar.mp3",
    },
    {
      fractionLogo: "./src/img/fraction_logo/question.jpg",
    },
  ],
  [
    {
      name: "Пехотинец",
      nameEng: "Footman",
      description:
        "Cильный и выносливый горожанин Азерота, который добровольно пришел в армию Альянса для защиты своих земель.",
      image: "./src/img/unit_pic/humans/footman.jpg",
      audio: "./src/sound/humans/footman.mp3",
    },
    {
      name: "Артас",
      nameEng: "Arthas",
      description: `Сын короля Теренаса Менетила II, наследный принц Лордерона и рыцарь Серебряной Длани. Позже главный слуга Нер'Зула и его первый Рыцарь Смерти.`,
      image: "./src/img/unit_pic/humans/arthas.png",
      audio: "./src/sound/humans/arthas.mp3",
    },
    {
      name: "Волшебница",
      nameEng: "Sorceress",
      description: `Маги-женщины, посылаемые магократами Даларана для слежения за опасными битвами магов. Они используют свои тайные знания для помощи Альянсу, когда человечество находится в опасности.`,
      image: "./src/img/unit_pic/humans/sorceress.png",
      audio: "./src/sound/humans/sorceress.mp3",
    },
    {
      name: "Работник",
      nameEng: "Peasant",
      description:
        "Работников выбирали из трудолюбивых и крепких горожан, которые жили в различных королевствах Лордерона. Добывая золото и дерево для армии, они являются основой Альянса. ",
      image: "./src/img/unit_pic/humans/peasant.jpg",
      audio: "./src/sound/humans/peasant.mp3",
    },
    {
      name: "Стрелок",
      nameEng: "Rifleman",
      description:
        "Храбрые дворфийские стрелки верно защищают свое горное королевство Каз-Модан, однако они снова были вызваны Альянсом.",
      image: "./src/img/unit_pic/humans/rifleman.jpg",
      audio: "./src/sound/humans/rifleman.mp3",
    },
    {
      name: "Мурадин",
      nameEng: "Muradin",
      description:
        "Герой Альянса, младший брат Короля Магни Бронзоборода и старший брат известного исследователя Бранна.",
      image: "./src/img/unit_pic/humans/muradin.png",
      audio: "./src/sound/humans/muradin.mp3",
    },
    {
      fractionLogo: "./src/img/fraction_logo/humans.png",
    },
  ],
  [
    {
      name: "Послушник",
      nameEng: "Acolyte",
      description:
        "Люди, отдавшие себя во власть Нер'зула и Плети. Эти озлобленные фанатичные мужчины и женщины не остановятся ни перед чем для исполнения воли короля лича и хранят тайну Культа проклятых.",
      image: "./src/img/unit_pic/undead/acolyte.jpg",
      audio: "./src/sound/undead/acolyte.mp3",
    },
    {
      name: "Анубарак",
      nameEng: "Anub'arak",
      description: `Представитель древней расы нерубианцев, издревле обитавших в Нортренде. За долгие столетия, проведенные пауками на материке, они основали свое собственное королевство - город-государство Азол-Неруб.`,
      image: "./src/img/unit_pic/undead/anub.jpg",
      audio: "./src/sound/undead/anub.mp3",
    },
    {
      name: "Вурдалак",
      nameEng: "Ghoul",
      description: `Основные работники Плети. Эти разлагающиеся трупы когда-то были зомби, которые теперь окончательно стали «настоящей нежитью».`,
      image: "./src/img/unit_pic/undead/ghoul.jpg",
      audio: "./src/sound/undead/ghoul.mp3",
    },
    {
      name: "Мясник",
      nameEng: "Abomination",
      description:
        "Скрученные и изуродованные тела, состоящие из нескольких мертвых конечностей и тел разных трупов.",
      image: "./src/img/unit_pic/undead/abomination.jpg",
      audio: "./src/sound/undead/abomination.mp3",
    },
    {
      name: "Повелитель ужаса",
      nameEng: "Dreadlord",
      description:
        "Невероятно сильные демоны, которые однажды служили демону Кил'джедену как самые доверенные лейтенанты в его войске.",
      image: "./src/img/unit_pic/undead/dreadlord.jpg",
      audio: "./src/sound/undead/dreadlord.mp3",
    },
    {
      name: "Могильщик",
      nameEng: "Crypt Fiend",
      description:
        "Крупные мумифицированные существа, явившиеся результатом воскрешения нерубианов (потомки акиров). Их низкие тела поддерживаются шестью веретенообразными паучьими конечностями, а торс похож на человеческий.",
      image: "./src/img/unit_pic/undead/crypt.jpg",
      audio: "./src/sound/undead/crypt.mp3",
    },
    {
      fractionLogo: "./src/img/fraction_logo/undead.png",
    },
  ],
  [
    {
      name: "Дриада",
      nameEng: "Dryad",
      description:
        "Очаровательные дриады являются детьми полубога ночных эльфов, Кенариуса. Эти резвые и игривые существа отдаленно напоминают кентавров, но их тела больше приспособлены для жилья в лесу.",
      image: "./src/img/unit_pic/elves/dryad.jpg",
      audio: "./src/sound/elves/dryad.mp3",
    },
    {
      name: "Друид-медведь",
      nameEng: "Druid of the Claw",
      description: `Эти древние друиды поклоняются тотему медведа и используют его силу для защиты их сообщества от внешней угрозы.`,
      image: "./src/img/unit_pic/elves/bear.jpg",
      audio: "./src/sound/elves/bear.mp3",
    },
    {
      name: "Друид-ворон",
      nameEng: "Druid of the Talon",
      description: `Эти друиды поклоняются тотему ворона. Их роль в сообществе - разведка и сбор информации. Они умеют превращаться в воронов, чтобы разведывать и доставлять приказы удаленным группам войск. `,
      image: "./src/img/unit_pic/elves/talon.jpg",
      audio: "./src/sound/elves/talon.mp3",
    },
    {
      name: "Майев",
      nameEng: "Maiev",
      description:
        "Майев,вместе со своим младшим братом Джеродом,сыграла ключевую роль в борьбе против Пылающего Легиона во время войны Древних.В результате,Майев стала стражником предателя Иллидана Свирепого.",
      image: "./src/img/unit_pic/elves/maev.jpg",
      audio: "./src/sound/elves/maev.mp3",
    },
    {
      name: "Лучница",
      nameEng: "Archer",
      description:
        "Первое звание в армии Смотрящих. Эти смелые воительницы являются меткими лучниками и скрываются в лесах Калидора для получения преимущества. ",
      image: "./src/img/unit_pic/elves/archer.png",
      audio: "./src/sound/elves/archer.mp3",
    },
    {
      name: "Малфурион",
      nameEng: "Malfurion",
      description:
        "Брат близнец Иллидана, величайший и один из самых мощных в мире друидов.",
      image: "./src/img/unit_pic/elves/malfurion.jpg",
      audio: "./src/sound/elves/malfurion.mp3",
    },
    {
      fractionLogo: "./src/img/fraction_logo/elves.png",
    },
  ],
  [
    {
      name: "Рубака",
      nameEng: "Grunt",
      description:
        "Это первая и последняя линия обороны Орды. Эти могучие воины вооружены массивными боевыми топорами и демонстрируют собой всю дикость и коварство их расы.",
      image: "./src/img/unit_pic/horde/grunt.jpg",
      audio: "./src/sound/horde/grunt.mp3",
    },
    {
      name: "Кэрн Кровавый Рог",
      nameEng: "Cairne Bloodhoof",
      description: `Мудрый вождь минотавров во времена III войны. Объединился с ордой Тралла.`,
      image: "./src/img/unit_pic/horde/cairne.jpg",
      audio: "./src/sound/horde/cairne.mp3",
    },
    {
      name: "Раб",
      nameEng: "Peon",
      description: `Звание раба означает самое низкое положение среди орков. Обладая также самыми низкими навыками среди орков, эти собаки выполняют всю черную орочью работу, такую как сбор древесины и добыча золота.`,
      image: "./src/img/unit_pic/horde/peon.jpg",
      audio: "./src/sound/horde/peon.mp3",
    },
    {
      name: "Гром Задира",
      nameEng: "Grommash Hellscream",
      description:
        "Вождь орочьего клана Боевых Топоров. Известен своей вспыльчивостью и громким голосом, что особенно сильно выражается, когда он кричит. Из-за этого Гром и получил своё прозвище— «Адский Крик».",
      image: "./src/img/unit_pic/horde/grom.jpg",
      audio: "./src/sound/horde/grom.mp3",
    },
    {
      name: "Шаман",
      nameEng: "Shaman",
      description:
        "Под предводительством Тралла ораки снова открыли в себе способности к шаманизмую В попытках избавить Орду от демочнической порчи Тралл запретил использование черной магии и некромантии.",
      image: "./src/img/unit_pic/horde/shaman.jpg",
      audio: "./src/sound/horde/shaman.mp3",
    },
    {
      name: "Охотник за головами",
      nameEng: "Troll Headhunter",
      description:
        "Это бесправные тролли-дикари северного Лордерона снова обязались предоставить их услуги Орде. Эти коварные воины с детства обучаются охоте, слежению и ловле самых опасных диких зверей с помощью ловушек.",
      image: "./src/img/unit_pic/horde/troll.jpg",
      audio: "./src/sound/horde/troll.mp3",
    },
    {
      fractionLogo: "./src/img/fraction_logo/horde.jpg",
    },
  ],
  [
    {
      name: "Пандарен Пивовар",
      nameEng: "Pandaren Brewmaster",
      description:
        "Родом из скрытной империи Пандарен, могущественные пивовары путешествуют по миру в поисках экзотического эля и лучших спиртных напитков.",
      image: "./src/img/unit_pic/neutral/panda.jpg",
      audio: "./src/sound/neutral/panda.mp3",
    },
    {
      name: "Разрушитель",
      nameEng: "Pit Lord",
      description: `Грозный демонический воин, один вид которого повергает противников в ужас. Один из из лордов Пылающего Легиона.`,
      image: "./src/img/unit_pic/neutral/pit.jpg",
      audio: "./src/sound/neutral/pit.mp3",
    },
    {
      name: "Алхимик",
      nameEng: "Alchemist",
      description: `В этой необычной паре хозяин гоблин едет на спине своего раба-огра. Несмотря на то, что огр прошел ряд химических «обработок», огр иногда демонстрирует признаки независимости и даже откровенного неповиновения.`,
      image: "./src/img/unit_pic/neutral/alch.jpg",
      audio: "./src/sound/neutral/alch.mp3",
    },
    {
      name: "Механик",
      nameEng: "Tinker",
      description:
        "Гоблин-механик, достигший небывалого мастерства в своем ремесле.",
      image: "./src/img/unit_pic/neutral/tinker.jpg",
      audio: "./src/sound/neutral/tinker.mp3",
    },
    {
      name: "Королева змей",
      nameEng: "Naga Sea Witch",
      description:
        "Грозная колдунья из народа наг.",
      image: "./src/img/unit_pic/neutral/naga.jpg",
      audio: "./src/sound/neutral/naga.mp3",
    },
    {
      name: "Повелитель огня",
      nameEng: "Firelord",
      description:
        "Повелители Огня — разумные элементали, более сложные и могущественные существа, чем лишенные разума водные элементали, которых маги Альянса призывают к битве.",
      image: "./src/img/unit_pic/neutral/fire.jpg",
      audio: "./src/sound/neutral/fire.mp3",
    },
    {
      fractionLogo: "./src/img/fraction_logo/neutral.jpg",
    },
  ],
];

export default unitsData;
