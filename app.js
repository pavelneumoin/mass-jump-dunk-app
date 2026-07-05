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
  ["FoodSafety.gov: cooking temperatures", "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures", "Безопасные температуры для птицы, мяса, рыбы и остатков."],
];

const TECHNIQUE_DETAILS = [
  {
    match: ["подтяг"],
    title: "Подтягивания",
    setup: "Хват чуть шире плеч, большой палец закрывает перекладину. Сначала опусти плечи от ушей и напряги пресс.",
    execution: "Тяни грудь к перекладине, локти веди вниз и назад. Вверху подбородок выше перекладины, вниз опускайся подконтрольно.",
    mistakes: "Рывок ногами, половина амплитуды, расслабленные лопатки внизу, шея вперед.",
    video: "https://www.nsca.com/education/videos/exercise-technique-the-pull-up/",
    videoLabel: "NSCA: pull-up",
  },
  {
    match: ["брусь", "отжимания на брусьях"],
    title: "Брусья",
    setup: "Плечи вниз, грудь открыта, корпус слегка вперед. Если плечи ноют, амплитуду уменьши и работай с резинкой.",
    execution: "Опускайся медленно до комфортной глубины, локти не разводи резко в стороны. Вверх дави ладонями в брусья.",
    mistakes: "Провал плеч к ушам, слишком глубокий низ через боль, резкий отскок, расслабленный корпус.",
    video: "https://www.youtube.com/watch?v=2z8JmcrW-As",
    videoLabel: "Calisthenicmovement: dip",
  },
  {
    match: ["горизонтальная тяга", "тяга на низком"],
    title: "Горизонтальная тяга",
    setup: "Тело одной линией, пятки на земле или ноги выше для усложнения. Лопатки сначала назад-вниз.",
    execution: "Тяни грудь к перекладине, пауза 1 сек сверху, опускайся без падения. Чем ниже перекладина и выше ноги, тем тяжелее.",
    mistakes: "Таз провисает, подбородок тянется вместо груди, нет паузы сверху.",
    video: "https://www.youtube.com/watch?v=jTaIMXRT6qY",
    videoLabel: "Catalyst: inverted row",
  },
  {
    match: ["pike", "стойка у стены", "жим блина над головой"],
    title: "Вертикальный жим плечами",
    setup: "Ребра вниз, пресс напряжен. Для pike push-up таз высоко, голова идет между рук, кисти устойчиво.",
    execution: "Опускайся под контролем, локти не разъезжаются слишком широко. Вверх дави пол от себя.",
    mistakes: "Прогиб в пояснице, обычное отжимание вместо вертикального угла, боль в плечах.",
    video: "https://www.nasm.org/resource-center/exercise-library/pike-push-up",
    videoLabel: "NASM: pike push-up",
  },
  {
    match: ["болгар", "выпады", "высокие шаги"],
    title: "Одноногие упражнения",
    setup: "Стопа полностью на опоре, колено идет по линии второго-третьего пальца стопы, таз не разворачивается.",
    execution: "Вниз медленно 2-3 сек, вверх толкайся рабочей ногой. Держи корпус высоким и не подпрыгивай второй ногой.",
    mistakes: "Колено валится внутрь, слишком узкая постановка, отталкивание задней ногой.",
    video: "https://www.nasm.org/resource-center/exercise-library/bulgarian-split-squat",
    videoLabel: "NASM: Bulgarian split squat",
  },
  {
    match: ["румынская", "задняя цепь", "good morning"],
    title: "Хип-хиндж / румынская тяга",
    setup: "Стопы под тазом, колени мягкие, спина длинная. Блин или рюкзак держи близко к телу.",
    execution: "Таз назад, корпус наклоняется из бедра. Остановись, когда чувствуешь растяжение задней поверхности бедра, затем веди таз вперед.",
    mistakes: "Круглая поясница, присед вместо наклона, рывок весом, потеря напряжения пресса.",
    video: "https://www.nasm.org/resource-center/exercise-library/dumbbell-romanian-deadlift",
    videoLabel: "NASM: Romanian deadlift",
  },
  {
    match: ["face pull", "разведения на заднюю"],
    title: "Задняя дельта и лопатки",
    setup: "Резинка на уровне лица, корпус высокий, ребра вниз. Начни с легкого натяжения.",
    execution: "Тяни к лицу, локти высоко, в конце разведи кисти наружу. Движение плавное, без раскачки.",
    mistakes: "Плечи к ушам, прогиб поясницы, слишком тяжелая резинка.",
    video: "https://www.nasm.org/resource-center/exercise-library/face-pull",
    videoLabel: "NASM: face pull",
  },
  {
    match: ["махи", "подъем блина перед"],
    title: "Махи на дельты",
    setup: "Легкий вес, корпус высокий, лопатки не зажимай. Локоть чуть согнут.",
    execution: "Поднимай до уровня плеч, думай не “вверх”, а “в стороны”. Опускай медленно, без броска.",
    mistakes: "Шраги, рывок корпусом, слишком тяжелый вес, кисть выше локтя.",
    video: "https://www.acefitness.org/resources/everyone/exercise-library/26/lateral-raise/",
    videoLabel: "ACE: lateral raise",
  },
  {
    match: ["прыж", "approach", "drop landing"],
    title: "Прыжок и приземление",
    setup: "Прыжки делай только свежим. Стопы под тазом, корпус собран, руки работают агрессивно.",
    execution: "Каждая попытка максимальная, отдых полный. Приземление тихое: стопа-колено-таз амортизируют вместе.",
    mistakes: "Прыгать до усталости, шумное приземление, колени внутрь, мало отдыха между попытками.",
    video: "https://jr.nba.com/video/vertical-jump-to-stick/",
    videoLabel: "NBA Jr.: landing",
  },
  {
    match: ["икр", "носки", "tibialis"],
    title: "Голень и стопа",
    setup: "Держись за опору, стопы прямо. Для икр работай в полной амплитуде, для tibialis тяни носки к себе.",
    execution: "Пауза 1 сек сверху, вниз медленно. Лучше чистые 15 повторов, чем 30 пружинок.",
    mistakes: "Завал стоп наружу, половина амплитуды, спешка, боль в ахилле.",
    video: "https://blog.nasm.org/calf-workouts",
    videoLabel: "NASM: calf raise",
  },
];

const VIDEO_LIBRARY = [
  ["Подтягивание", "NSCA показывает строгую технику pull-up. Смотреть перед тяжелыми днями A и E.", "https://www.nsca.com/education/videos/exercise-technique-the-pull-up/"],
  ["Подтягивание с резинкой", "NASM: вариант для набора чистых повторов, если полного веса пока много.", "https://www.nasm.org/resource-center/exercise-library/band-assisted-pull-up"],
  ["Брусья", "Подробная техника параллельных брусьев: плечи вниз, контроль глубины, без провала.", "https://www.youtube.com/watch?v=2z8JmcrW-As"],
  ["Pike push-up", "NASM: вертикальный жим плечами без штанги, база для сильных дельт.", "https://www.nasm.org/resource-center/exercise-library/pike-push-up"],
  ["Болгарский сплит-присед", "NASM: одноногая сила для прыжка и устойчивых коленей.", "https://www.nasm.org/resource-center/exercise-library/bulgarian-split-squat"],
  ["Румынская тяга", "NASM: хип-хиндж и задняя цепь, чтобы прыгать сильнее и беречь поясницу.", "https://www.nasm.org/resource-center/exercise-library/dumbbell-romanian-deadlift"],
  ["Face pull", "NASM: задняя дельта и здоровье плеч при большом объеме турников.", "https://www.nasm.org/resource-center/exercise-library/face-pull"],
  ["Вертикальный прыжок с фиксацией", "NBA Jr.: приземление и контроль после прыжка.", "https://jr.nba.com/video/vertical-jump-to-stick/"],
  ["Box jump", "NASM: механика прыжка и приземления, если на площадке есть безопасная тумба.", "https://www.nasm.org/resource-center/exercise-library/box-jumps"],
];

const RECIPES = [
  {
    title: "Курица + рис на 3 дня",
    meta: "6 порций · база обеда · примерно 650-850 ккал на порцию",
    ingredients: "Куриная грудка/бедро 1.2 кг, рис 600 г сухого, оливковое масло 40-60 г, соль, перец, паприка, овощи.",
    steps: [
      "Рис промой, залей водой 1:1.8, посоли и вари 15-18 минут. Оставь под крышкой еще 10 минут.",
      "Курицу нарежь крупно, посоли, добавь паприку и немного масла. Жарь партиями или запеки 22-28 минут при 200 C.",
      "Разложи по контейнерам: рис, курица, овощи. Масло добавляй в контейнер после готовки, так легче добрать калории.",
      "Безопасность: птицу доводи до 74 C внутри или готовь до полностью безопасной готовности без розового центра.",
    ],
  },
  {
    title: "Говядина + паста",
    meta: "2-3 порции · ужин после тяжелого верха",
    ingredients: "Фарш/кусочки говядины 500 г, паста 300 г сухой, томаты/соус, сыр 40-60 г, оливковое масло.",
    steps: [
      "Пасту вари до al dente, воду не сливай полностью: оставь 100 мл для соуса.",
      "Говядину обжарь 7-10 минут, добавь томаты, соль, чеснок, туши еще 5-8 минут.",
      "Смешай с пастой, добавь сыр и масло. Если вес стоит, увеличь пасту на 30-50 г сухого продукта.",
    ],
  },
  {
    title: "Овсянка для набора",
    meta: "1 порция · завтрак · 800-1000 ккал при полной версии",
    ingredients: "Овсянка 100 г, молоко 400 мл, банан, арахисовая паста 25-35 г, мед, протеин по желанию.",
    steps: [
      "Овсянку вари на молоке 5-7 минут или залей на ночь в контейнер.",
      "Добавь банан, пасту, мед. Протеин вмешивай после готовки, когда каша чуть остыла.",
      "Если утром тяжело есть много, делай жидкую версию: больше молока и пробить блендером.",
    ],
  },
  {
    title: "Творожный наборный перекус",
    meta: "1 порция · перед сном или между делами",
    ingredients: "Творог 250 г, греческий йогурт 150 г, ягоды/банан, мед, орехи 25-35 г.",
    steps: [
      "Смешай творог с йогуртом, чтобы было легче есть.",
      "Добавь фрукт и орехи. Если нужно больше калорий, добавь хлебец/тост или ложку пасты.",
      "Это не десерт ради десерта, а способ стабильно закрывать белок.",
    ],
  },
  {
    title: "Лосось/скумбрия + картофель",
    meta: "2 порции · жиры, омега-3, восстановление",
    ingredients: "Рыба 400-500 г, картофель 700-900 г, салат, масло, лимон, соль.",
    steps: [
      "Картофель нарежь, посоли, запеки 35-45 минут при 200 C.",
      "Рыбу посоли, добавь лимон, запеки 12-18 минут в зависимости от толщины.",
      "Ориентир безопасности для рыбы: 63 C внутри или мякоть легко разделяется вилкой.",
    ],
  },
  {
    title: "Сэндвич до тренировки",
    meta: "10 минут · когда нет времени на нормальный прием",
    ingredients: "Хлеб 2-4 ломтика, индейка/курица/тунец, сыр, йогуртовый соус, банан или сок.",
    steps: [
      "Собери сэндвич без большого количества жирного соуса, чтобы не было тяжести на баскетболе.",
      "Ешь за 60-120 минут до тренировки. Если времени меньше, оставь банан/сок и йогурт.",
      "После тренировки обязательно добери большой прием еды, иначе набор будет буксовать.",
    ],
  },
];

let state = loadState();
let selectedWorkout = "A";
let timerSeconds = 120;
let timerRemaining = 120;
let timerId = null;
let backupHandle = null;
let backupWriteTimer = null;

const BACKUP_DB_NAME = "massJumpBackup.v1";
const BACKUP_STORE = "handles";
const BACKUP_KEY = "statsFile";

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
    backupLastSaved: "",
    backupFileName: "",
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
  queueBackupWrite();
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
  document.body.dataset.activeTab = document.querySelector(".tab-button.is-active")?.dataset.tab || "today";
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
  renderBackupStatus();
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
  document.getElementById("quickWater").value = log.water ?? "";
  document.getElementById("quickEnergy").value = log.energy ?? "";
  document.getElementById("quickPain").value = log.pain ?? "";
  document.getElementById("quickBasketball").value = log.basketball ?? "";
  document.getElementById("quickWin").value = log.win ?? "";
  document.getElementById("quickObstacle").value = log.obstacle ?? "";
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
          ${block.exercises.map(([name, sets, note]) => exerciseDetailMarkup(name, sets, note)).join("")}
        </section>
      `).join("")}
    </div>
    ${includeCompleteButton ? `<button class="action-button complete-workout" type="button"><i data-lucide="check"></i><span>Закрыть тренировку</span></button>` : ""}
  `;
}

function exerciseDetailMarkup(name, sets, note) {
  const guide = techniqueFor(name);
  const cue = exerciseCue(name);
  const video = guide?.video
    ? `<a class="video-link" href="${guide.video}" target="_blank" rel="noreferrer"><i data-lucide="play-circle"></i><span>${guide.videoLabel || "Видео"}</span></a>`
    : "";

  return `
    <details class="exercise-detail">
      <summary>
        <span class="exercise-main">
          <strong>${name}</strong>
          <small>${note}</small>
        </span>
        <span class="set-chip">${sets}</span>
      </summary>
      <div class="exercise-body">
        <div class="cue-grid">
          <div class="cue-box"><strong>Настройка</strong><p>${guide?.setup || "Подбери вариант, в котором можешь держать чистую амплитуду и контроль корпуса."}</p></div>
          <div class="cue-box"><strong>Как делать</strong><p>${guide?.execution || cue}</p></div>
          <div class="cue-box"><strong>Не делай</strong><p>${guide?.mistakes || "Не гонись за повтором, если техника развалилась или появилась острая боль."}</p></div>
        </div>
        ${video}
      </div>
    </details>
  `;
}

function techniqueFor(name) {
  const lower = name.toLowerCase();
  return TECHNIQUE_DETAILS.find((guide) => guide.match.some((term) => lower.includes(term)));
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
  document.getElementById("recipeList").innerHTML = RECIPES.map((recipe) => `
    <details class="recipe-item">
      <summary>
        <strong>${recipe.title}</strong>
        <p>${recipe.meta}</p>
      </summary>
      <p><strong>Ингредиенты:</strong> ${recipe.ingredients}</p>
      <ol class="recipe-steps">
        ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </details>
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
  renderInsights();
  drawChart();
}

function renderInsights() {
  const element = document.getElementById("insightCards");
  if (!element) return;

  const today = todayISO();
  const lastSeven = Array.from({ length: 7 }, (_, index) => state.logs[addDays(today, -index)] || {});
  const macros = calcMacros();
  const avgWeight = average(lastSeven.map((log) => log.weight));
  const avgProtein = average(lastSeven.map((log) => log.protein));
  const avgCalories = average(lastSeven.map((log) => log.calories));
  const avgSleep = average(lastSeven.map((log) => log.sleep));
  const avgPain = average(lastSeven.map((log) => log.pain));
  const completed = lastSeven.filter((log) => CHECKS.filter(([key]) => log[key]).length >= 5).length;

  const latestMetric = [...state.metrics].sort((a, b) => b.date.localeCompare(a.date))[0];
  const advice = [];
  if (avgProtein && avgProtein < macros.protein * 0.9) advice.push("Белок ниже цели: добавь творог, йогурт, мясо или протеин.");
  if (avgCalories && avgCalories < macros.calories * 0.92) advice.push("Калорий мало для экстремального набора: добавь рис, пасту, масло или сэндвич.");
  if (avgSleep && avgSleep < 7.2) advice.push("Сон режет рост и прыжок: цель 7.5-9 ч или дневной добор.");
  if (avgPain && avgPain >= 4) advice.push("Боль высокая: снизь прыжки и объем на 30-50%, проверь технику.");
  if (!advice.length) advice.push("База выглядит ровно. Держи ритм и записывай честные комментарии.");

  element.innerHTML = [
    ["Средний вес", avgWeight ? `${avgWeight.toFixed(1)} кг` : "нет", latestMetric?.weight ? `Последний замер: ${latestMetric.weight} кг` : "Взвешивайся утром."],
    ["Белок 7 дней", avgProtein ? `${Math.round(avgProtein)} г` : "нет", `Цель: около ${macros.protein} г/день.`],
    ["Сон 7 дней", avgSleep ? `${avgSleep.toFixed(1)} ч` : "нет", "Росту нужен сон, не только подходы."],
    ["Закрыто дней", `${completed}/7`, advice[0]],
  ].map(([label, value, text]) => `
    <article class="insight-card">
      <span class="mini-label">${label}</span>
      <strong>${value}</strong>
      <p>${text}</p>
    </article>
  `).join("");
}

function average(values) {
  const clean = values.map(Number).filter((value) => Number.isFinite(value) && value > 0);
  if (!clean.length) return null;
  return clean.reduce((sum, value) => sum + value, 0) / clean.length;
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
  document.getElementById("videoLibrary").innerHTML = VIDEO_LIBRARY.map(([title, text, url]) => `
    <div class="video-item">
      <strong>${title}</strong>
      <div>
        <p>${text}</p>
        <a class="source-link" href="${url}" target="_blank" rel="noreferrer"><i data-lucide="external-link"></i><span>Открыть видео</span></a>
      </div>
    </div>
  `).join("");
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
  log.water = valueOrBlank("quickWater");
  log.energy = valueOrBlank("quickEnergy");
  log.pain = valueOrBlank("quickPain");
  log.basketball = valueOrBlank("quickBasketball");
  log.win = document.getElementById("quickWin").value.trim();
  log.obstacle = document.getElementById("quickObstacle").value.trim();
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

function serializeState() {
  return JSON.stringify({
    app: "mass-jump-dunk-app",
    version: 2,
    exportedAt: new Date().toISOString(),
    state,
  }, null, 2);
}

function downloadState() {
  const blob = new Blob([serializeState()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mass-jump-statistics-${todayISO()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function queueBackupWrite() {
  if (!backupHandle) return;
  clearTimeout(backupWriteTimer);
  backupWriteTimer = setTimeout(() => {
    writeBackupFile(false).catch(() => renderBackupStatus("Не удалось обновить файл. Нажми «Файл на ПК» и разреши доступ снова."));
  }, 700);
}

async function writeBackupFile(manual = true) {
  if (!backupHandle) {
    if (manual) downloadState();
    return;
  }
  const permission = await verifyBackupPermission(backupHandle, manual);
  if (!permission) {
    if (manual) downloadState();
    return;
  }
  const writable = await backupHandle.createWritable();
  await writable.write(serializeState());
  await writable.close();
  state.backupLastSaved = new Date().toISOString();
  state.backupFileName = backupHandle.name || state.backupFileName || "mass-jump-statistics.json";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderBackupStatus("Файл статистики обновлен.");
}

async function verifyBackupPermission(handle, request) {
  if (!handle?.queryPermission) return false;
  const options = { mode: "readwrite" };
  if ((await handle.queryPermission(options)) === "granted") return true;
  if (request && (await handle.requestPermission(options)) === "granted") return true;
  return false;
}

async function connectBackupFile() {
  if (!window.showSaveFilePicker) {
    renderBackupStatus("Этот браузер не умеет постоянно писать в выбранный файл. Скачаю JSON-копию обычным экспортом.");
    downloadState();
    return;
  }
  backupHandle = await window.showSaveFilePicker({
    suggestedName: "mass-jump-statistics.json",
    types: [
      {
        description: "JSON statistics",
        accept: { "application/json": [".json"] },
      },
    ],
  });
  await storeBackupHandle(backupHandle);
  await writeBackupFile(true);
}

function renderBackupStatus(message = "") {
  const element = document.getElementById("backupStatus");
  if (!element) return;
  const saved = state.backupLastSaved
    ? new Date(state.backupLastSaved).toLocaleString("ru-RU")
    : "еще не было";
  const file = state.backupFileName || (backupHandle?.name ?? "");
  const api = window.showSaveFilePicker ? "На ПК в Chrome можно подключить JSON-файл." : "В этом браузере доступен ручной экспорт/импорт JSON.";
  element.textContent = message || `${api} Браузерное сохранение активно. Файл: ${file || "не подключен"}. Последняя копия: ${saved}.`;
}

function openBackupDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(BACKUP_DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(BACKUP_STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storeBackupHandle(handle) {
  const db = await openBackupDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(BACKUP_STORE, "readwrite");
    tx.objectStore(BACKUP_STORE).put(handle, BACKUP_KEY);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function loadBackupHandle() {
  if (!window.showSaveFilePicker || !window.indexedDB) return;
  try {
    const db = await openBackupDb();
    backupHandle = await new Promise((resolve, reject) => {
      const tx = db.transaction(BACKUP_STORE, "readonly");
      const request = tx.objectStore(BACKUP_STORE).get(BACKUP_KEY);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
    db.close();
    if (backupHandle?.name) state.backupFileName = backupHandle.name;
    renderBackupStatus();
  } catch {
    renderBackupStatus();
  }
}

function importStateFromFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const imported = parsed.state || parsed;
      if (!imported.logs || !imported.metrics) throw new Error("bad format");
      state = {
        ...loadState(),
        ...imported,
        logs: imported.logs || {},
        metrics: imported.metrics || [],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      renderAll();
      renderBackupStatus("Импорт выполнен. Проверь последние записи.");
    } catch {
      renderBackupStatus("Не получилось импортировать файл: нужен JSON-экспорт этого приложения.");
    }
  };
  reader.readAsText(file);
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
      document.body.dataset.activeTab = tabButton.dataset.tab;
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  document.getElementById("connectBackupFile").addEventListener("click", () => {
    connectBackupFile().catch(() => renderBackupStatus("Файл не подключен. Можно попробовать еще раз или сделать обычный экспорт."));
  });
  document.getElementById("saveBackupNow").addEventListener("click", () => {
    writeBackupFile(true).catch(() => renderBackupStatus("Не удалось сохранить копию. Сделай экспорт JSON."));
  });
  document.getElementById("exportData").addEventListener("click", downloadState);
  document.getElementById("importData").addEventListener("click", () => document.getElementById("importFileInput").click());
  document.getElementById("importFileInput").addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    if (file) importStateFromFile(file);
    event.target.value = "";
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
loadBackupHandle();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The app still works without offline caching.
    });
  });
}
