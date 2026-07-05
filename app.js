const STORAGE_KEY = "massJumpDiscipline.v1";
const PROGRAM_START_DATE = "2026-07-06";

const CHECKS = [
  ["workout", "Тренировка", "Выполнить главный блок или честно заменить восстановлением"],
  ["protein", "Белок", "Добрать дневную норму без пропусков"],
  ["calories", "Калории", "Есть в плюс, не надеяться на один ужин"],
  ["water", "Вода + соль", "2.8-3.8 л воды, в жару и баскетбол больше"],
  ["sleep", "Сон", "7.5-9 часов или дневной добор 20-30 минут"],
  ["supps", "Добавки", "Креатин и базовая схема без мегадоз"],
  ["mobility", "Суставы", "Плечи, голеностоп, бедра, 8-12 минут"],
];

const PHASES = [
  {
    weeks: "1-2",
    title: "База и техника",
    text: "Учишь движения, подбираешь резинки и вес блинов, оставляешь 2 повтора в запасе. Прыжки только свежими ногами.",
  },
  {
    weeks: "3-5",
    title: "Объем и мясо",
    text: "Основной набор: больше рабочих подходов на спину, плечи и руки. Последний подход изоляции можно вести почти до отказа.",
  },
  {
    weeks: "6-7",
    title: "Сила + взрыв",
    text: "Верх тяжелее, прыжки качественнее. Меньше мусорных повторов, больше скорости и полного отдыха между прыжками.",
  },
  {
    weeks: "8",
    title: "Тест и закрепление",
    text: "Объем ниже на 30-40%, тестируешь вес, подтягивания, брусья и вертикальный прыжок. Суставы должны выйти живыми.",
  },
];

const WORKOUTS = [
  {
    code: "A",
    day: "День 1",
    title: "Спина + бицепс + короткий прыжок",
    duration: "75-95 мин",
    intensity: "RPE 8",
    focus: ["широчайшие", "верх спины", "бицепс", "хват", "прыжок без усталости"],
    summary: "Главный день тяги. Если подтягиваний мало, используй резинку и копи чистые повторы.",
    blocks: [
      {
        name: "Разогрев",
        exercises: [
          ["Суставная разминка плеч/локтей/кистей", "6 мин", "круги, легкие висы, раскрытие грудного отдела"],
          ["Лопаточные подтягивания", "3x8", "не сгибай локти, двигай только лопатками"],
          ["Пого-прыжки на месте", "3x15", "легко, как пружина, без утомления"],
        ],
      },
      {
        name: "Сила тяги",
        exercises: [
          ["Подтягивания / подтягивания с резинкой", "5x5-8", "когда все 5 подходов по 8 чисто, добавь 2.5-5 кг"],
          ["Горизонтальная тяга на низком турнике", "4x10-15", "грудь к перекладине, пауза 1 сек сверху"],
          ["Тяга блина в наклоне", "4x10-12", "локти назад, поясница нейтрально"],
          ["Тяга резинки сверху одной рукой", "3x12-16", "локоть в карман, растяни широчайшую"],
        ],
      },
      {
        name: "Плечи сзади + руки",
        exercises: [
          ["Face pull резинкой", "4x15-25", "тяни к лицу, локти высоко"],
          ["Сгибания на бицепс резинкой или блином", "4x10-15", "последние 2 повтора тяжелые, корпус не качать"],
          ["Молотковые сгибания резинкой", "3x12-18", "предплечье и брахиалис для объема руки"],
          ["Фермерская переноска блинов", "4x30-45 сек", "корпус высокий, лопатки вниз"],
        ],
      },
    ],
  },
  {
    code: "B",
    day: "День 2",
    title: "Баскетбол + ноги для прыжка",
    duration: "60-85 мин + баскетбол",
    intensity: "RPE 7-8",
    focus: ["вертикальный прыжок", "одна нога", "икры", "задняя цепь", "кор"],
    summary: "Прыжки идут до тяжелых ног. Если баскетбол сегодня очень жесткий, оставь только блок прыжка и голень.",
    blocks: [
      {
        name: "Прыжковый праймер",
        exercises: [
          ["Прыжок с места вверх", "5x3", "полный отдых 60-90 сек, каждый повтор максимальный"],
          ["Подход к кольцу 2-3 шага", "8x1", "замеряй лучший касание/высоту, останавливайся при падении качества"],
          ["Прыжок в длину", "4x3", "мягкое приземление, колени по линии носков"],
        ],
      },
      {
        name: "Сила ног без тяжелой штанги",
        exercises: [
          ["Болгарский сплит-присед с блином", "4x8-12/нога", "глубина до контроля таза, не заваливай колено"],
          ["Высокие шаги на тумбу/лавку", "4x8-10/нога", "толкайся рабочей ногой, не подпрыгивай второй"],
          ["Румынская тяга с блином/рюкзаком", "4x10-12", "таз назад, растяжение задней поверхности бедра"],
          ["Нордические опускания или сгибания с резинкой", "3x4-8", "медленно вниз, помогай руками"],
        ],
      },
      {
        name: "Пружины и корпус",
        exercises: [
          ["Подъемы на носки", "5x12-20", "пауза сверху и полная амплитуда"],
          ["Tibialis raises у стены", "4x15-25", "носок к себе, голень горит"],
          ["Планка боковая", "3x35-55 сек/сторона", "ребра вниз, таз не падает"],
        ],
      },
    ],
  },
  {
    code: "C",
    day: "День 3",
    title: "Плечи + грудь + трицепс",
    duration: "70-90 мин",
    intensity: "RPE 8-9",
    focus: ["дельты", "трицепс", "грудь", "стабильность плеча"],
    summary: "День визуального верха. Плечи и руки получают много качественного объема.",
    blocks: [
      {
        name: "Разогрев плеч",
        exercises: [
          ["Внешняя ротация резинкой", "3x15/сторона", "локоть прижат, движение без боли"],
          ["Отжимания лопатками", "3x12", "локти прямые, только лопатки"],
          ["Легкие махи в стороны", "2x20", "наполнить плечи кровью"],
        ],
      },
      {
        name: "Жимовая база",
        exercises: [
          ["Брусья / брусья с резинкой", "5x5-10", "плечи вниз, корпус слегка вперед"],
          ["Pike push-up / стойка у стены прогрессия", "5x5-10", "голова между рук, шея нейтрально"],
          ["Отжимания с резинкой или блином", "4x10-20", "1-2 повтора в запасе"],
          ["Жим блина над головой", "4x8-12", "ребра вниз, не прогибай поясницу"],
        ],
      },
      {
        name: "Дельты и трицепс",
        exercises: [
          ["Махи в стороны резинкой/блинами", "5x12-25", "локоть чуть выше кисти, без рывка"],
          ["Разведения на заднюю дельту", "4x15-25", "лопатки не зажимать"],
          ["Французское разгибание резинкой", "4x12-20", "локти смотрят вперед"],
          ["Узкие отжимания", "3xмакс-2", "остановись за 2 повтора до развала техники"],
        ],
      },
    ],
  },
  {
    code: "D",
    day: "День 4",
    title: "Баскетбол + восстановительный верх",
    duration: "35-55 мин + баскетбол",
    intensity: "RPE 6-7",
    focus: ["кровь в мышцы", "осанка", "лопатки", "мобилити", "баскетбол"],
    summary: "Баскетбол закрывает кардио. Силовой блок легкий: он помогает расти, но не убивает ноги.",
    blocks: [
      {
        name: "Перед баскетболом",
        exercises: [
          ["Динамика бедра и голеностопа", "8 мин", "выпады, голеностоп, легкие ускорения"],
          ["Прыжки к кольцу", "6x1", "только если ноги свежие"],
          ["Плечевая активация резинкой", "2x20", "face pull и внешняя ротация"],
        ],
      },
      {
        name: "После или отдельно",
        exercises: [
          ["Тяга резинки к поясу", "4x20", "памп спины, без отказа"],
          ["Разведения в стороны", "4x20", "дельты должны налиться, суставы не болеть"],
          ["Сгибание + разгибание рук суперсет", "4x15+15", "минимум отдыха, чистая амплитуда"],
          ["Растяжка сгибателей бедра и икр", "8 мин", "спокойное дыхание"],
        ],
      },
    ],
  },
  {
    code: "E",
    day: "День 5",
    title: "Тяжелый верх: подтягивания + брусья",
    duration: "80-100 мин",
    intensity: "RPE 8-9",
    focus: ["сила", "спина", "грудь", "плечи", "руки"],
    summary: "Самый силовой день верха. Записывай вес блинов и повторы, здесь рождается прогресс.",
    blocks: [
      {
        name: "Тяжелые пары",
        exercises: [
          ["Подтягивания с весом / медленные без веса", "6x3-6", "отдых 2-3 мин, без дерганий"],
          ["Брусья с весом / медленные без веса", "6x4-8", "глубина только без боли в плечах"],
          ["Горизонтальная тяга ноги выше", "4x8-12", "жесткий корпус"],
        ],
      },
      {
        name: "Добор массы",
        exercises: [
          ["Отжимания с резинкой", "4x12-18", "контролируй низ 2 сек"],
          ["Тяга блина к подбородку широким хватом", "3x10-14", "если плечо спорит, замени махами"],
          ["Подъем блина перед собой", "3x12-15", "не выше уровня глаз"],
          ["Face pull", "4x20", "здоровье плеча важнее веса"],
        ],
      },
      {
        name: "Руки",
        exercises: [
          ["Бицепс 21 или обычные сгибания", "3 раунда", "7 низ + 7 верх + 7 полных"],
          ["Разгибание на трицепс резинкой", "4x12-20", "пауза в полном разгибании"],
          ["Вис на турнике", "3xмакс", "хват, плечи вниз"],
        ],
      },
    ],
  },
  {
    code: "F",
    day: "День 6",
    title: "Полное тело + руки + прыжок",
    duration: "70-90 мин",
    intensity: "RPE 7-8",
    focus: ["объем", "слабые места", "ноги умеренно", "прыжок", "памп"],
    summary: "Контрольный объем недели. Не превращай в мясорубку: качество выше героизма.",
    blocks: [
      {
        name: "Прыжок",
        exercises: [
          ["Прыжки на одной ноге вперед", "3x4/нога", "низкая амплитуда, мягкое приземление"],
          ["Approach jump", "6x1", "выбери лучший разбег, полный отдых"],
          ["Drop landing с низкой опоры", "3x3", "только приземление, учишь тормозить"],
        ],
      },
      {
        name: "Объем по кругу",
        exercises: [
          ["Подтягивания", "8 минут EMOM", "каждую минуту 3-6 чистых повторов"],
          ["Отжимания на брусьях", "4x8-12", "не в отказ"],
          ["Выпады назад с блином", "3x10/нога", "контроль таза"],
          ["Румынская тяга с блином", "3x12", "задняя цепь для прыжка"],
        ],
      },
      {
        name: "Финишер рук и плеч",
        exercises: [
          ["Махи в стороны", "4x20", "короткий отдых 45-60 сек"],
          ["Сгибания резинкой", "4x15-20", "памп"],
          ["Разгибания резинкой", "4x15-20", "памп"],
          ["Hollow hold", "4x25-40 сек", "кор для передачи силы"],
        ],
      },
    ],
  },
  {
    code: "R",
    day: "День 7",
    title: "Восстановление + подготовка еды",
    duration: "30-45 мин",
    intensity: "RPE 3-4",
    focus: ["сон", "мобилити", "еда", "суставы", "замеры"],
    summary: "Рост идет не только на площадке. Сегодня закрываешь питание, сон и суставы.",
    blocks: [
      {
        name: "Восстановление",
        exercises: [
          ["Прогулка", "25-40 мин", "легкий темп, без цели вспотеть"],
          ["Мобилити бедра/голеностопа/грудного отдела", "15 мин", "медленно, без боли"],
          ["Легкие висы", "4x20-40 сек", "разгрузить плечи и спину"],
        ],
      },
      {
        name: "Подготовка",
        exercises: [
          ["Сварить крупу/пасту", "2-3 дня", "рис, гречка, макароны из твердых сортов"],
          ["Белок", "2-3 дня", "курица, индейка, говядина, рыба, творог"],
          ["Замеры", "10 мин", "вес, талия, прыжок раз в неделю"],
        ],
      },
    ],
  },
];

const PROGRESSION_RULES = [
  "Главное правило: сначала добавляй повторы до верхней границы диапазона, потом добавляй 2.5-5 кг блинами или усложняй рычаг.",
  "Для массы держи большинство подходов в зоне 6-15 повторов, изоляцию плеч и рук 12-25 повторов.",
  "На последнем подходе базовых движений оставляй 1-2 повтора в запасе. В отказ можно иногда вести махи, бицепс и трицепс.",
  "Прыжки не тренируются в усталость: если высота падает или приземление шумное, блок закончен.",
  "Если локти, плечи, колени или ахилл болят острее 3/10, снижай объем на 30-50% и убирай прыжки до спокойного состояния.",
  "Баскетбол считается кардио. В дни сильной индивидуальной тренировки не добавляй беговые интервалы.",
];

const MAINTENANCE_RULES = [
  "После 8 недель оставь 3 силовые тренировки: тяга, жим, полное тело. Прыжок 1-2 коротких блока по 12-18 качественных попыток.",
  "Калории опусти до поддержки или небольшого плюса: примерно минус 250-400 ккал от набора, если вес растет слишком быстро.",
  "В рабочем режиме цель: не терять силу, держать белок, спать. Новый жесткий блок можно запускать после 4-6 недель спокойного режима.",
];

const MEALS = [
  ["Завтрак", "Овсянка 100 г + молоко 350-400 мл + банан + 2-3 яйца + 20-30 г ореховой пасты."],
  ["Перекус", "Греческий йогурт или творог 250-300 г + ягоды/мед + горсть орехов."],
  ["Обед", "Рис/гречка/паста 120-160 г сухого продукта + курица/индейка/говядина 200-250 г + овощи + оливковое масло."],
  ["До тренировки", "Банан + кефир/йогурт или большой сэндвич с индейкой/сыром. За 60-120 минут."],
  ["Ужин", "Картофель/рис/паста + рыба/говядина/курица 220-260 г + салат. После тренировки не экономь углеводы."],
  ["Перед сном", "Творог 200-250 г или кефир + фрукт. Помогает добрать белок и не просыпаться голодным."],
];

const GROCERIES = [
  "овсянка", "рис", "гречка", "паста", "картофель", "бананы", "ягоды", "молоко", "кефир",
  "греческий йогурт", "творог", "яйца", "курица", "индейка", "говядина", "лосось/скумбрия",
  "тунец", "сыр", "оливковое масло", "орехи", "арахисовая паста", "овощи", "фрукты",
  "цельнозерновой хлеб", "сывороточный протеин",
];

const NUTRITION_RULES = [
  "Цель на первые 14 дней: плюс 0.25-0.75 кг в неделю по среднему весу за 7 дней.",
  "Если средний вес стоит 10-14 дней, добавь 200 ккал: проще всего рис, паста, хлеб, масло, йогурт или орехи.",
  "Если талия растет быстрее 1 см в неделю и прыжок падает, убери 100-200 ккал из жиров/сладкого, но белок не режь.",
  "На баскетбольные дни добавь 40-80 г углеводов: банан, сок, рис, хлеб, сухофрукты.",
  "Взвешивайся утром 4-7 раз в неделю, смотри среднее, а не один случайный день.",
];

const SUPPLEMENTS = [
  ["Креатин моногидрат", "5 г каждый день с едой или напитком. Загрузка не обязательна. Пей воду. При болезни почек сначала врач."],
  ["Сывороточный протеин", "Только если не добираешь белок едой. 25-35 г порция после тренировки или в любой удобный прием."],
  ["Витамин D3", "Лучше после анализа 25(OH)D. Без высоких доз: обсуди профилактическую дозу 1000-2000 МЕ/день, особенно зимой/при малом солнце."],
  ["Омега-3", "Если жирная рыба меньше 2 раз в неделю: ориентир 1 г EPA+DHA/день. Осторожно при антикоагулянтах и проблемах свертывания."],
  ["Магний", "200-400 мг вечером в форме цитрата/глицината, если сон, судороги или напряжение. При болезни почек не начинать без врача."],
  ["Коллаген + витамин C", "Опционально перед прыжками: 10-15 г коллагена/желатина + 100-200 мг витамина C за 30-60 минут."],
  ["Мультивитамин", "Можно низкодозный 3-4 раза в неделю вместо набора отдельных банок. Не заменяет еду и анализы."],
];

const HAIR_PLAN = [
  "Запланируй дерматолога/трихолога: важно понять тип выпадения, а не просто пить витамины.",
  "Базовые анализы для обсуждения: общий анализ крови, ферритин/железо, TSH и свободный T4, 25(OH)D, B12/фолат, цинк; по симптомам врач добавит гормоны.",
  "Не принимай железо, цинк, селен, витамин A и высокие дозы биотина без подтвержденного дефицита.",
  "Обсуди с врачом рабочие варианты при мужском типе выпадения: миноксидил 5%, финастерид и лечение кожи головы, если есть зуд/перхоть.",
  "Белок, сон и отсутствие жесткого дефицита калорий важны: экстремальная сушка и стресс могут усиливать выпадение.",
];

const AVOID_LIST = [
  "Не используй анаболики, SARMs и гормональные схемы ради двух месяцев набора.",
  "Не делай плиометрику до отказа и не прыгай через боль в ахилле, колене или пояснице.",
  "Не режь жиры слишком низко: для мужчины на наборе держи хотя бы 80-100 г жиров в день.",
  "Не заменяй нормальную еду гейнерами. Сначала рис, мясо, молочка, яйца, масла, фрукты.",
  "Не обещай себе идеальную неделю. Нужна закрываемость 80-90%, а не один героический день.",
];

const EXERCISES = [
  ["Подтягивания", "Старт из активных плеч: лопатки вниз, грудь к перекладине, подбородок выше. Если техника ломается, бери резинку. Для массы лучше чистые 5-8, чем 12 рывков.", "Ошибки: раскачка, шея вперед, полуповторы."],
  ["Брусья", "Плечи опущены, локти идут назад, корпус слегка вперед. Глубина только до положения без боли. Вес добавляй после уверенных 5x10.", "Если плечо спорит, уменьши глубину или замени отжиманиями с резинкой."],
  ["Pike push-up", "Таз высоко, голова идет между рук, локти под контролем. Это главный уличный жим для плеч.", "Не превращай движение в обычное отжимание."],
  ["Болгарский сплит-присед", "Передняя стопа стоит устойчиво, колено идет по линии носка, таз ровный. Держи блин у груди или в руках.", "Дает ноги для прыжка без тяжелой штанги."],
  ["Румынская тяга с блином", "Мягкие колени, таз назад, спина длинная. Думай не о наклоне, а о растяжении задней поверхности бедра.", "Остановись, если поясница берет движение на себя."],
  ["Face pull", "Резинка на уровне лица, тяни к переносице, локти высоко, в конце разведи кисти. Это страховка плеч при большом объеме турников.", "Делай часто и легко."],
  ["Махи в стороны", "Легкий вес, плавный подъем до уровня плеча, локоть чуть выше кисти. Для дельт важна накопленная работа.", "Не дергай корпусом ради тяжелого блина."],
  ["Approach jump", "2-3 быстрых шага, предпоследний шаг длиннее, руки назад-вперед, отталкивание агрессивное. Отдых полный.", "Записывай лучший касание/ориентир."],
  ["Пого-прыжки", "Маленькие быстрые прыжки с жесткой стопой. Колени почти прямые, контакт с землей короткий.", "Если ахилл ноет, убери и делай голень спокойно."],
  ["Tibialis raises", "Спиной к стене, пятки на полу, носки тянешь к себе. Укрепляет переднюю голень для приземлений и торможений.", "Жжение нормально, резкая боль нет."],
  ["Горизонтальная тяга", "Тело как доска, тяни грудь к перекладине, лопатки назад-вниз. Чем выше ноги, тем тяжелее.", "Отлично добивает спину, когда подтягивания уже просели."],
  ["Вис на турнике", "Плечи активные, ребра вниз, дыхание спокойное. Можно делать в конце для хвата и разгрузки.", "Не провисай в болезненном плече."],
];

const SOURCES = [
  ["ISSN: protein and exercise", "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8", "Белок для адаптации к силовым нагрузкам и распределение по приемам."],
  ["ISSN: creatine safety and efficacy", "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z", "Креатин 3-5 г/день как практический протокол поддержки запасов."],
  ["ACSM: resistance training progression", "https://pubmed.ncbi.nlm.nih.gov/19204579/", "Частота, диапазоны повторов, прогрессия нагрузки в силовой тренировке."],
  ["NSCA: plyometric exercises", "https://www.nsca.com/education/articles/kinetic-select/plyometric-exercises/", "Плиометрика лучше низкой частотой и качественными малоповторными сетами."],
  ["AAD: hair loss diagnosis and treatment", "https://www.aad.org/public/diseases/hair-loss/treatment/diagnosis-treat", "Добавки для волос только при дефицитах; диагностика у дерматолога."],
  ["Creatine and hair loss RCT", "https://pubmed.ncbi.nlm.nih.gov/40265319/", "12-недельное РКИ не нашло отличий в DHT и параметрах волос между креатином и плацебо."],
];

let state = loadState();
let selectedWorkout = "A";
let timerSeconds = 120;
let timerRemaining = 120;
let timerId = null;

function todayISO() {
  return toISO(new Date());
}

function toISO(date) {
  const tzOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - tzOffset).toISOString().slice(0, 10);
}

function parseISO(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function addDays(iso, days) {
  const date = parseISO(iso);
  date.setDate(date.getDate() + days);
  return toISO(date);
}

function dayDiff(a, b) {
  return Math.floor((parseISO(a) - parseISO(b)) / 86400000);
}

function loadState() {
  const fallback = {
    startDate: PROGRAM_START_DATE,
    bodyWeight: 90,
    logs: {},
    metrics: [],
    programStartDateApplied: PROGRAM_START_DATE,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = { ...fallback, ...JSON.parse(raw) };
    if (!parsed.programStartDateApplied && parsed.startDate < PROGRAM_START_DATE) {
      parsed.startDate = PROGRAM_START_DATE;
      parsed.programStartDateApplied = PROGRAM_START_DATE;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getLog(iso = todayISO()) {
  if (!state.logs[iso]) state.logs[iso] = {};
  return state.logs[iso];
}

function getBlockInfo(iso = todayISO()) {
  const actualDiff = dayDiff(iso, state.startDate);
  const diff = Math.max(0, actualDiff);
  const rawWeek = actualDiff < 0 ? 0 : Math.floor(diff / 7) + 1;
  const week = Math.min(rawWeek, 8);
  const dayIndex = diff % 7;
  return {
    diff,
    actualDiff,
    started: actualDiff >= 0,
    daysUntilStart: Math.max(0, -actualDiff),
    rawWeek,
    week,
    dayIndex,
    workout: WORKOUTS[dayIndex] || WORKOUTS[0],
    phase: getPhase(week),
  };
}

function getPhase(week) {
  if (week <= 2) return PHASES[0];
  if (week <= 5) return PHASES[1];
  if (week <= 7) return PHASES[2];
  return PHASES[3];
}

function calcMacros(weight = state.bodyWeight) {
  const bmr = 10 * weight + 6.25 * 190 - 5 * 33 + 5;
  const calories = Math.round((bmr * 1.75 + 350) / 50) * 50;
  const protein = Math.round(weight * 2);
  const fat = Math.round(weight * 1.05);
  const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);
  return { calories, protein, fat, carbs };
}

function formatDate(iso) {
  return parseISO(iso).toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function renderAll() {
  const info = getBlockInfo();
  document.getElementById("profileWeight").textContent = Number(state.bodyWeight).toFixed(state.bodyWeight % 1 ? 1 : 0);
  document.getElementById("phaseBadge").textContent = !info.started
    ? "Старт 06.07"
    : info.rawWeek > 8
      ? "После блока"
      : `Неделя ${info.week}`;
  renderToday();
  renderTraining();
  renderNutrition();
  renderSupplements();
  renderMetrics();
  renderLibrary();
  renderTimer();
  if (window.lucide) window.lucide.createIcons();
}

function renderToday() {
  const iso = todayISO();
  const log = getLog(iso);
  const info = getBlockInfo(iso);
  const macros = calcMacros();
  document.getElementById("todayMeta").textContent = !info.started
    ? `${formatDate(iso)} · старт ${formatDate(state.startDate)}`
    : `${formatDate(iso)} · неделя ${info.rawWeek > 8 ? "после блока" : info.week}`;
  document.getElementById("todayTitle").textContent = !info.started
    ? info.daysUntilStart === 1 ? "Завтра старт" : `До старта ${info.daysUntilStart} дн.`
    : "План дня";

  const workout = info.rawWeek > 8 ? getMaintenanceWorkout(info.dayIndex) : info.workout;
  document.getElementById("todayWorkout").innerHTML = workoutMarkup(workout, true);

  const checklist = document.getElementById("dailyChecklist");
  checklist.innerHTML = CHECKS.map(([key, title, hint]) => `
    <label class="check-item">
      <input type="checkbox" data-check="${key}" ${log[key] ? "checked" : ""} />
      <span><strong>${title}</strong><span>${hint}</span></span>
    </label>
  `).join("");

  const done = CHECKS.filter(([key]) => log[key]).length;
  document.getElementById("dailyScore").textContent = `${done}/${CHECKS.length}`;
  const progressDays = info.started ? Math.min(56, info.diff + 1) : 0;
  document.getElementById("blockProgress").textContent = `${Math.min(100, Math.round(progressDays / 56 * 100))}%`;
  document.getElementById("streakCount").textContent = `${calcStreak()} дней`;
  document.getElementById("completedDays").textContent = `${countCompletedDays()} закрыто`;

  document.getElementById("quickWeight").value = log.weight ?? "";
  document.getElementById("quickProtein").value = log.protein ?? macros.protein;
  document.getElementById("quickCalories").value = log.calories ?? macros.calories;
  document.getElementById("quickSleep").value = log.sleep ?? "";
  document.getElementById("quickNote").value = log.note ?? "";
  renderHeatmap();
}

function workoutMarkup(workout, includeCompleteButton = false) {
  return `
    <div class="workout-hero">
      <div>
        <p class="eyebrow">${workout.day} · ${workout.duration} · ${workout.intensity}</p>
        <h3>${workout.title}</h3>
        <p>${workout.summary}</p>
      </div>
      <div class="focus-tags">${workout.focus.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </div>
    <div class="block-list">
      ${workout.blocks.map((block) => `
        <section class="workout-block">
          <h4>${block.name}</h4>
          ${block.exercises.map(([name, sets, note]) => `
            <div class="exercise-row">
              <div><strong>${name}</strong><small>${note}</small></div>
              <div><span class="set-chip">${sets}</span></div>
              <div><small>${exerciseCue(name)}</small></div>
            </div>
          `).join("")}
        </section>
      `).join("")}
    </div>
    ${includeCompleteButton ? `<button class="action-button complete-workout" type="button"><i data-lucide="check"></i><span>Закрыть тренировку</span></button>` : ""}
  `;
}

function exerciseCue(name) {
  if (name.toLowerCase().includes("прыж")) return "Качество выше количества: полный отдых, тихое приземление.";
  if (name.toLowerCase().includes("резин")) return "Натяжение держи весь повтор, не бросай обратную фазу.";
  if (name.toLowerCase().includes("блин")) return "Запиши вес блина и чистые повторы.";
  if (name.toLowerCase().includes("подтяг")) return "Если подбородок не проходит перекладину, повтор не засчитывай.";
  if (name.toLowerCase().includes("брусь")) return "Плечо не должно щелкать или ныть.";
  return "Движение чистое, последние повторы тяжелые, но управляемые.";
}

function getMaintenanceWorkout(dayIndex) {
  const base = [WORKOUTS[0], WORKOUTS[2], WORKOUTS[4], WORKOUTS[6], WORKOUTS[1], WORKOUTS[3], WORKOUTS[6]][dayIndex];
  return {
    ...base,
    day: "Поддержка",
    duration: "45-70 мин",
    intensity: "RPE 7",
    summary: "Режим после 8 недель: держишь силу и питание без экстремального объема.",
  };
}

function renderHeatmap() {
  const heatmap = document.getElementById("heatmap");
  const today = todayISO();
  heatmap.innerHTML = Array.from({ length: 56 }, (_, i) => {
    const iso = addDays(state.startDate, i);
    const log = state.logs[iso] || {};
    const done = CHECKS.filter(([key]) => log[key]).length >= 5;
    return `<span class="day-cell ${done ? "is-done" : ""} ${iso === today ? "is-today" : ""}" title="${iso}">${i + 1}</span>`;
  }).join("");
}

function calcStreak() {
  let streak = 0;
  let cursor = todayISO();
  while (true) {
    const log = state.logs[cursor] || {};
    const done = CHECKS.filter(([key]) => log[key]).length >= 5;
    if (!done) break;
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

function countCompletedDays() {
  return Array.from({ length: 56 }, (_, i) => addDays(state.startDate, i))
    .filter((iso) => {
      const log = state.logs[iso] || {};
      return CHECKS.filter(([key]) => log[key]).length >= 5;
    }).length;
}

function renderTraining() {
  const info = getBlockInfo();
  document.getElementById("startDate").value = state.startDate;
  document.getElementById("bodyWeight").value = state.bodyWeight;

  document.getElementById("phaseGrid").innerHTML = PHASES.map((phase) => `
    <article class="phase-card ${phase === info.phase ? "is-active" : ""}">
      <p class="eyebrow">Недели ${phase.weeks}</p>
      <h3>${phase.title}</h3>
      <p>${phase.text}</p>
    </article>
  `).join("");

  document.getElementById("scheduleStrip").innerHTML = WORKOUTS.map((workout, index) => `
    <button class="schedule-day ${index === info.dayIndex ? "is-today" : ""}" data-select-workout="${workout.code}" type="button">
      <span>${workout.day}</span>
      <strong>${workout.title}</strong>
      <span>${workout.duration}</span>
    </button>
  `).join("");

  document.getElementById("workoutSelector").innerHTML = WORKOUTS.map((workout) => `
    <button type="button" data-select-workout="${workout.code}" class="${workout.code === selectedWorkout ? "is-active" : ""}">${workout.code}</button>
  `).join("");

  const workout = WORKOUTS.find((item) => item.code === selectedWorkout) || WORKOUTS[0];
  document.getElementById("selectedWorkoutTitle").textContent = workout.title;
  document.getElementById("selectedWorkoutDetails").innerHTML = workoutMarkup(workout, false);
  document.getElementById("progressionRules").innerHTML = PROGRESSION_RULES.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("maintenanceRules").innerHTML = MAINTENANCE_RULES.map((item) => `<li>${item}</li>`).join("");
}

function renderNutrition() {
  const macros = calcMacros();
  document.getElementById("macroPill").textContent = `${macros.calories} ккал`;
  document.getElementById("macroCards").innerHTML = [
    ["Калории", `${macros.calories}`, "ккал"],
    ["Белок", `${macros.protein}`, "г"],
    ["Жиры", `${macros.fat}`, "г"],
    ["Углеводы", `${macros.carbs}`, "г"],
  ].map(([title, value, unit]) => `
    <div class="macro-card">
      <span class="mini-label">${title}</span>
      <strong>${value}</strong>
      <span>${unit}</span>
    </div>
  `).join("");
  document.getElementById("macroNote").textContent =
    "Это агрессивный старт под твои 90 кг, 190 см и частые тренировки. Через 10-14 дней корректируй по среднему весу и талии.";
  document.getElementById("mealList").innerHTML = MEALS.map(([title, text]) => `
    <div class="meal-item"><strong>${title}</strong><p>${text}</p></div>
  `).join("");
  document.getElementById("groceryList").innerHTML = GROCERIES.map((item) => `<span>${item}</span>`).join("");
  document.getElementById("nutritionRules").innerHTML = NUTRITION_RULES.map((item) => `<li>${item}</li>`).join("");
}

function renderSupplements() {
  document.getElementById("supplementTable").innerHTML = SUPPLEMENTS.map(([name, text]) => `
    <div class="supplement-row"><strong>${name}</strong><p>${text}</p></div>
  `).join("");
  document.getElementById("hairPlan").innerHTML = HAIR_PLAN.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("avoidList").innerHTML = AVOID_LIST.map((item) => `<li>${item}</li>`).join("");
}

function renderMetrics() {
  document.getElementById("metricDate").value = todayISO();
  const rows = [...state.metrics].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 12);
  document.getElementById("metricRows").innerHTML = rows.length
    ? rows.map((row) => `
      <tr>
        <td>${row.date}</td>
        <td>${row.weight || ""}</td>
        <td>${row.waist || ""}</td>
        <td>${row.jump || ""}</td>
        <td>${row.pullups || ""}</td>
        <td>${row.dips || ""}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="6">Пока нет замеров. Первый лучше сделать утром: вес, талия, прыжок, максимум подтягиваний и брусьев.</td></tr>`;
  drawChart();
}

function drawChart() {
  const canvas = document.getElementById("metricChart");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f4f7f5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const data = [...state.metrics]
    .sort((a, b) => a.date.localeCompare(b.date))
    .filter((item) => item.weight || item.jump)
    .slice(-16);

  ctx.fillStyle = "#65707c";
  ctx.font = "24px Segoe UI, sans-serif";

  if (data.length < 2) {
    ctx.fillText("Добавь минимум два замера, и здесь появится тренд веса и прыжка.", 36, 76);
    return;
  }

  const pad = 58;
  const width = canvas.width - pad * 2;
  const height = canvas.height - pad * 2;
  const weights = data.map((d) => Number(d.weight)).filter(Boolean);
  const jumps = data.map((d) => Number(d.jump)).filter(Boolean);
  const weightRange = range(weights);
  const jumpRange = range(jumps);

  drawGrid(ctx, pad, width, height);
  drawLine(ctx, data, "weight", weightRange, "#167255", pad, width, height);
  drawLine(ctx, data, "jump", jumpRange, "#ef6a32", pad, width, height);

  ctx.fillStyle = "#17191c";
  ctx.font = "22px Segoe UI, sans-serif";
  ctx.fillText("Вес", pad, 32);
  ctx.fillStyle = "#167255";
  ctx.fillRect(pad + 54, 18, 28, 8);
  ctx.fillStyle = "#17191c";
  ctx.fillText("Прыжок", pad + 110, 32);
  ctx.fillStyle = "#ef6a32";
  ctx.fillRect(pad + 204, 18, 28, 8);
}

function range(values) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (!Number.isFinite(min) || !Number.isFinite(max)) return [0, 1];
  if (min === max) return [min - 1, max + 1];
  return [min - (max - min) * 0.18, max + (max - min) * 0.18];
}

function drawGrid(ctx, pad, width, height) {
  ctx.strokeStyle = "#dfe6df";
  ctx.lineWidth = 2;
  for (let i = 0; i <= 4; i += 1) {
    const y = pad + (height / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(pad + width, y);
    ctx.stroke();
  }
}

function drawLine(ctx, data, key, [min, max], color, pad, width, height) {
  const points = data
    .map((item, index) => {
      const value = Number(item[key]);
      if (!value) return null;
      const x = pad + (width / Math.max(1, data.length - 1)) * index;
      const y = pad + height - ((value - min) / (max - min)) * height;
      return [x, y];
    })
    .filter(Boolean);

  if (points.length < 2) return;

  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = color;
  points.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
  });
}

function renderLibrary() {
  document.getElementById("exerciseLibrary").innerHTML = EXERCISES.map(([title, text, note]) => `
    <article class="exercise-card">
      <p class="eyebrow">Техника</p>
      <h3>${title}</h3>
      <p>${text}</p>
      <small>${note}</small>
    </article>
  `).join("");
  document.getElementById("sourceList").innerHTML = SOURCES.map(([title, url, text]) => `
    <div class="source-item">
      <a href="${url}" target="_blank" rel="noreferrer">${title}</a>
      <p>${text}</p>
    </div>
  `).join("");
}

function saveQuickLog() {
  const iso = todayISO();
  const log = getLog(iso);
  log.weight = valueOrBlank("quickWeight");
  log.protein = valueOrBlank("quickProtein");
  log.calories = valueOrBlank("quickCalories");
  log.sleep = valueOrBlank("quickSleep");
  log.note = document.getElementById("quickNote").value.trim();
  if (log.weight) state.bodyWeight = Number(log.weight);
  saveState();
  renderAll();
}

function saveMetric() {
  const metric = {
    date: document.getElementById("metricDate").value || todayISO(),
    weight: valueOrBlank("metricWeight"),
    waist: valueOrBlank("metricWaist"),
    jump: valueOrBlank("metricJump"),
    pullups: valueOrBlank("metricPullups"),
    dips: valueOrBlank("metricDips"),
  };
  const existingIndex = state.metrics.findIndex((item) => item.date === metric.date);
  if (existingIndex >= 0) state.metrics[existingIndex] = { ...state.metrics[existingIndex], ...metric };
  else state.metrics.push(metric);
  if (metric.weight) state.bodyWeight = Number(metric.weight);
  saveState();
  renderAll();
}

function valueOrBlank(id) {
  const value = document.getElementById(id).value;
  return value === "" ? "" : Number(value);
}

function renderTimer() {
  const minutes = Math.floor(timerRemaining / 60).toString().padStart(2, "0");
  const seconds = (timerRemaining % 60).toString().padStart(2, "0");
  document.getElementById("timerDisplay").textContent = `${minutes}:${seconds}`;
  const icon = document.querySelector("#timerStart i");
  if (icon) icon.setAttribute("data-lucide", timerId ? "pause" : "play");
}

function startPauseTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    renderTimer();
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  timerId = setInterval(() => {
    timerRemaining -= 1;
    if (timerRemaining <= 0) {
      clearInterval(timerId);
      timerId = null;
      timerRemaining = timerSeconds;
      document.body.animate([{ filter: "brightness(1)" }, { filter: "brightness(1.08)" }, { filter: "brightness(1)" }], { duration: 700 });
    }
    renderTimer();
    if (window.lucide) window.lucide.createIcons();
  }, 1000);
  renderTimer();
  if (window.lucide) window.lucide.createIcons();
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timerRemaining = timerSeconds;
  renderTimer();
  if (window.lucide) window.lucide.createIcons();
}

function changeTimer(delta) {
  timerSeconds = Math.min(300, Math.max(30, timerSeconds + delta));
  timerRemaining = timerSeconds;
  resetTimer();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-tab]");
    if (tabButton) {
      document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("is-active"));
      document.querySelectorAll(".tab-page").forEach((page) => page.classList.remove("is-active"));
      tabButton.classList.add("is-active");
      document.getElementById(tabButton.dataset.tab).classList.add("is-active");
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    const select = event.target.closest("[data-select-workout]");
    if (select) {
      selectedWorkout = select.dataset.selectWorkout;
      renderTraining();
      return;
    }

    if (event.target.closest(".complete-workout")) {
      const log = getLog();
      log.workout = true;
      saveState();
      renderAll();
    }
  });

  document.addEventListener("change", (event) => {
    const check = event.target.closest("[data-check]");
    if (check) {
      const log = getLog();
      log[check.dataset.check] = check.checked;
      saveState();
      renderAll();
      return;
    }

    if (event.target.id === "startDate") {
      state.startDate = event.target.value || todayISO();
      saveState();
      renderAll();
      return;
    }

    if (event.target.id === "bodyWeight") {
      state.bodyWeight = Number(event.target.value || 90);
      saveState();
      renderAll();
    }
  });

  document.getElementById("saveQuickLog").addEventListener("click", saveQuickLog);
  document.getElementById("quickLogForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveQuickLog();
  });
  document.getElementById("saveMetric").addEventListener("click", saveMetric);
  document.getElementById("metricForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveMetric();
  });
  document.getElementById("printPlan").addEventListener("click", () => window.print());
  document.getElementById("timerStart").addEventListener("click", startPauseTimer);
  document.getElementById("timerReset").addEventListener("click", resetTimer);
  document.getElementById("timerPlus").addEventListener("click", () => changeTimer(30));
  document.getElementById("timerMinus").addEventListener("click", () => changeTimer(-30));

  document.getElementById("exportData").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mass-jump-discipline-${todayISO()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("resetData").addEventListener("click", () => {
    if (!confirm("Сбросить все отметки и замеры?")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = loadState();
    renderAll();
  });
}

bindEvents();
renderAll();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The app still works without offline caching.
    });
  });
}
