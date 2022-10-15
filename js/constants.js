// ИСХОДНЫЕ ДАННЫЕ

// рандомные заголовки
const RANDOM_TITLES = [
  'независимые с представлении экономической',
  'акционеры независимые',
  'независимых анафеме стремлении',
  'экономическая нашей ясность не',
  'требует решений зарубежных внешне',
  'способы кадровой обстановки',
  'форм зависимости проекта',
  'дальнейших воздействия принимаемых постоянное',
  'и повестка на в',
  'равным предложений предложений',
  'способы повысить концепция',
  'богатый богатый концептуальных и',
  'организации экономическая современные',
  'позиции преданы классическом',
  'быть внедрение что',
  'по формировании высокое',
  'отраслям реализации классическом так',
  'обстановки распределены жизни',
  'внедрение уровня для классическом',
  'опыт но концепция очевидна',
  'предложений внедрение что независимых',
  'компаний анализа высокую',
  'уклада очевидна серии не',
  'граница проект по',
  'базовые самодостаточных внедрение',
  'нашей но требует нашей',
  'с сложно для',
  'однозначно глубокомысленных деятельности современные',
  'экономической глубокомысленных',
  'задания пользовательский',
  'по источников повысить',
  'по способы внешне воздействия',
  'очевидна фракционных сложно',
  'распределены реализации от сложившейся',
  'для и независимых качество',
  'и базе в',
  'компаний позиции разнообразный внедрение',
  'и современные',
  'общественного выполнить сложно обстановки',
  'классическом поведения',
  'реализации их наше',
  'в принципов нашей реплицированные',
  'равным разнообразный а',
  'разногласий постоянное с',
  'способствует а в',
  'требует исследований представлении',
  'позволяет подготовке',
  'информационнопропагандистское пользователей деятельности дальнейших',
  'позиции базе принципов',
  'материальнотехнической стремлении'
];

// рандомные описания
const RANDOM_DESCRIPTION = [
  'информационнопропагандистское как принимаемых очевидна международной способы обстановки современных внедрение внедрение предопределяет концепция внедрение анафеме исключительно в также специалистов а с особенности предложений с для специалистов концепция оставляет',
  'мы будущего как опыт воздействия дня стремлении компаний воздействия исследований независимых зарубежных не нашей подвергнуты с их жизни высококачественный с задача методик представлении как внедрение фракционных направлений исключительно предложений общественного концепция материальнотехнической так выводы своём востребованность особенности исследования говорит пользователей способы',
  'исследований форм образом банальные выводы выводы показаться высококачественный в задача кадров разработке высокотехнологичная независимые классическом внедрение дальнейших способствует зависимости реализации так исследований пользователей с методик сложно исследований оставляет способы',
  'анафеме сложившейся внедрение богатый сказать международной задача особенности ясность высококачественный их реализации',
  'решений развития интернетаналитики разногласий современных решений формирования новых задания нашей допускает что социальноориентированный проект внедрение анафеме и что нашей качество технологии от предложений принципов в вне исключительно и перспектив проекта дело базы уровня качество внедрение',
  'интернетаналитики не внедрение разногласий стремлении по преданы ассоциативно их задача как целесообразности крупнейших преданы допускает предложений выводы постоянное нас допускает обеспечивает выводы жизни преданы воздействия опыт',
  'выводы задача современных уклада в от высокотехнологичная показаться принимаемых качество способствует формирования базы равным рассуждений опыт анафеме воздействия базе преданы может исследований концепция по своём выводы',
  'в и с улучшить от сказать способы и вне методик подвергнуты достигли предполагает национальный кругу новых обеспечение своём деятельности достигли разногласий анализа банальные оставляет деятельности технологии же очевидна разработке и достигли задания важные очевидна шанса зарубежных учётом реализации',
  'с выводы кадровой обучения что новых независимых уровня организационной методик развития и равным востребованность разногласий выводы опыт качество сегодняшнего',
  'ясность решений для с улучшить опыт концепция форм компаний материальнотехнической позволяет реализации обстановки забывают новая в мы с проект в очевидна сказать фракционных анафеме важные однозначно безусловно информационнопропагандистское своём',
  'современные очевидна должны так лишь современных с принципов интернетаналитики от реализации способы принимаемых',
  'методик серии а реализации а позиции так также важные говорит граница обстановки уровня фракционных мы сложившейся обстановки международной способствует благоприятных учётом стремлении сложившейся дальнейших в своём сложившейся дня',
  'интернетаналитики предпосылки пользовательский позиционных массового позиционных общественного от сценарии реализации решений дня сценарии стремлении сложно концепция сложившейся материальнотехнической развития концептуальных методик наше методик требует концепция источников рассуждений',
  'способы зарубежных зарубежных и от предложений концептуальных что исследований внедрение современные может безусловно неопровержимые реализации дело самодостаточных преданы высокотехнологичная достигли сегодняшнего сказать концепция анафеме опыт исключительно такого',
  'реализации равным в выполнить задания базовые учётом внедрение но выводы разработке кадров и особенности граница стремлении дальнейших проект не зарубежных технологии современные сценарии независимые на принципов воздействия сложившейся что высокотехнологичная',
  'принимаемых синтетически общественного анализа распределены инициированные способы нашей деятельности отраслям деятельности реализации учётом с очевидна нашей форм опыт опыт постоянное акционеры их в',
  'выводы улучшить и дня модель для очевидна кадровой внедрение как исследования реплицированные забывают безусловно пользователей современных высокое в своём',
  'кадров должны добавляют но внедрение также исключительно и качество предполагает способствует классическом будущего уровня будущего отраслям в внешне решений',
  'новая технологии поведения форм независимые показаться информационнопропагандистское позиционных общественного сценарии национальный массового неопровержимые показаться сложившейся ясность оставляет базы сложно фракционных участия предпосылки независимые высокое требует проекта мы новых с в не',
  'системы обучения материальнотехнической высокотехнологичная зависимых качество социальноориентированный методик представлении наше формировании опыт реализации стремлении общественного от предопределяет решений важные и материальнотехнической позиционных и дня банальные общественного отраслям',
  'позволяет технологии подготовке безусловно кадровой анализа неопровержимые предложений способы разнообразный очевидна кадровой информационнопропагандистское позиционных вне ясность будущего на формировании лишь как предполагает способствует преданы перспектив системы добавляют разногласий формировании',
  'уклада разработке новых обеспечение дня их реализации экономическая реплицированные предполагает в представлении проекта востребованность будущего и наше кадровой',
  'общественного методик выводы в независимые так не подвергнуты информационнопропагандистское анафеме очевидна сценарии дело серии в самодостаточных разнообразный пользователей поведения по ясность предпосылки исследований базе новая глубокомысленных анафеме кадровой своём ясность для же современные в позиции материальнотехнической кадров по',
  'с в рассуждений сложившейся безусловно современных широкому также исследований современных для что с добавляют упускаем качество анафеме предопределяет нашей ассоциативно',
  'проекта ясность современные выводы организации участие сегодняшнего на в реализации но пользователей крупнейших реализации для разногласий реализации должны граница источников такого новых общественного богатый',
  'разработке реализации акционеры реализации в от что так сделанные и зависимых нашей особенности внешне решений достигли что направлений зарубежных реализации опыт подвергнуты нашей с',
  'сделанные нам решений стремлении преданы качество интернетаналитики целесообразности информационнопропагандистское очевидна и что реализации принципов подвергнуты позиции но с благоприятных глубокомысленных решений предопределяет показаться базе ассоциативно способствует позиции',
  'пользовательский ясность кадровой курс ассоциативно банальные современные обеспечивает целесообразности повестка для опыт исследования новых современных преданы подготовке предполагает целой новая анализа проект',
  'обеспечение независимых предопределяет предполагает с уровня быть и достигли неопровержимые также кадров участие позиции глубокомысленных информационнопропагандистское и граница принимаемых так особенности как благоприятных воздействия подготовке предполагает широкому перспектив же курс лишь общественного',
  'позиции предложений социальноориентированный способы шанса выполнить а говорит внедрение информационнопропагандистское дня современных способствует благоприятных подвергнуты исследований обучения предполагает',
  'предпосылки дело перспектив стремлении очевидна также своём деятельности предложений независимые модель',
  'сегодняшнего по высокотехнологичная технологии сложившейся классическом нам направлений глубокомысленных так курс показаться методик по дело так внедрение особенности форм',
  'сделанные зависимости опыт современные современные кругу не способствует развития допускает способы на базовые обстановки классическом компаний востребованность массового богатый с востребованность позиции такого общественного их общественного',
  'позиции учётом качество современных граница особенности очевидна нашей может представлении в также разработке внешне внедрение сложившейся системы разработке шанса интернетаналитики дальнейших в деятельности концепция новых самодостаточных дальнейших такого предложений исследований учётом для',
  'качество на самодостаточных международной высокотехнологичная представлении анафеме на упускаем добавляют стремлении деятельности своём внешне независимые ясность массового подвергнуты дня обеспечение предложений',
  'форм прототип прототип реплицированные базе обстановки концепция с лишь уклада поведения сложно преданы международной',
  'почему как нашей концепция предложений высококачественный но позиции требует подготовке фракционных очевидна проект целесообразности высокотехнологичная внедрение обучения своём современные прототип методик новых концепция исследований',
  'форм повестка анафеме но на независимых концепция модель сложившейся высококачественный базы высокое улучшить достигли в сказать информационнопропагандистское говорит выводы задача уровня качество крупнейших информационнопропагандистское',
  'высококачественный методик методик нашей подготовке развития сценарии способы и для задания нашей достигли нашей а воздействия уклада участие классическом забывают вне отраслям будущего методик',
  'концепция от стремлении по сложно также международной говорит независимые такого сказать исключительно повысить ясность ассоциативно опыт задания материальнотехнической современные сложно подготовке такого шанса информационнопропагандистское образом выводы быть же прототип обстановки добавляют добавляют сложившейся обстановки ясность почему для проект сложившейся сценарии в',
  'должны как общественного благоприятных как высококачественный задания концепция международной независимые и зависимости преданы участия анафеме целесообразности анафеме дело ясность базовые инициированные в подготовке от',
  'своём качество социальноориентированный и экономической способы уклада создаёт важные кадровой деятельности постоянное учётом в своём решений проекта методик но кругу независимых дело крупнейших выводы в повестка нас обеспечивает очевидна',
  'мы современные распределены способствует воздействия не жизни в независимые наше внешне банальные проект методик и высокое от учётом распределены предполагает',
  'международной уровня реализации достигли решений лишь прототип высокотехнологичная независимые внешне может уровня нашей нам качество обстановки предложений забывают уровня новых специалистов классическом целесообразности и развития',
  'вне массового банальные с исключительно формировании компаний реплицированные экономической создаёт и внедрение что национальный от предложений рассуждений методик предопределяет рассуждений рассуждений анализа концепция сложно показаться обеспечивает так разработке в глубокомысленных принципов кругу и социальноориентированный принципов',
  'почему подготовке требует проект уровня реплицированные современных широкому в сложившейся позиции преданы дальнейших что же по национальный зарубежных международной уровня внедрение но по',
  'а общественного в разнообразный современных нам участия сложно методик современные реализации решений проект форм базовые решений ассоциативно предопределяет задания источников но специалистов новая в модель курс',
  'сложившейся преданы общественного обучения способствует стремлении современные стремлении очевидна требует граница анализа в фракционных разногласий отраслям концептуальных воздействия экономической уровня решений сценарии как целесообразности высококачественный новая с высокотехнологичная ассоциативно повестка инициированные направлений на',
  'и развития принимаемых реализации методик своём показаться от как массового уклада позволяет не методик по акционеры концепция развития общественного от',
  'преданы специалистов на что деятельности методик серии внедрение классическом уровня методик кадровой и однозначно качество способствует опыт сказать дальнейших формировании решений реализации решений своём'
];

// диапазон цен
const PRICE_RANGE = {min: 1, max: 50, factor: 1000};

// тип жилища
const HOUSING_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

// диапазон количетсва комнат
const ROOMS_RANGE = {min: 1, max: 8};

// диапазон количетсва гостей
const GUESTS_RANGE = {min: 1, max: 15};

// время заезда/выезда
const CHECK_TIMING = ['12:00', '13:00', '14:00'];

// дополнительно
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

// фотографии
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// диапазон координат
const LAT_RANGE = {min: 35.65000, max: 35.70000, digits: 5};
const LNG_RANGE = {min: 39.70000, max: 139.80000, digits: 5};

export {
  RANDOM_TITLES,
  RANDOM_DESCRIPTION,
  PRICE_RANGE,
  HOUSING_TYPE,
  ROOMS_RANGE,
  GUESTS_RANGE,
  CHECK_TIMING,
  FEATURES,
  PHOTOS,
  LAT_RANGE,
  LNG_RANGE
};
