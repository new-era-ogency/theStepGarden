"use strict";

/**
 * IMAGE ASSET MAP — hero, страви, напої, галерея (URL або локальні assets).
 */
/** @type {Readonly<Record<string, string>>} */
var IMAGE_ASSETS = {
  "hero_bg": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
  "about_image": "https://images.unsplash.com/photo-1550961391-ca8e58c5d5e4?auto=format&fit=crop&w=1200&q=82",
  "og_default": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=82",
  "dish_chicken_shawarma_photo": "https://images.unsplash.com/photo-1572445278854-945c221e5765?auto=format&fit=crop&w=900&q=80",
  "dish_pork_shawarma_photo": "https://images.unsplash.com/photo-1676300181905-09766d8d9745?auto=format&fit=crop&w=900&q=80",
  "dish_chicken_burger_photo": "https://images.unsplash.com/photo-1565299585323-38d876b0865f?auto=format&fit=crop&w=900&q=80",
  "dish_french_fries_photo": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
  "dish_country_potatoes_photo": "https://images.unsplash.com/photo-1623238916360-7ca36411f16b?auto=format&fit=crop&w=900&q=80",
  "dish_potato_dippers_photo": "https://images.unsplash.com/photo-1585100420148-b148335f0b31?auto=format&fit=crop&w=900&q=80",
  "dish_shashlik_chicken_photo": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=900&q=80",
  "dish_shashlik_pork_photo": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  "dish_caesar_chicken_photo": "https://images.unsplash.com/photo-1546793660972-ed97ebeb8d74?auto=format&fit=crop&w=900&q=80",
  "dish_caesar_shrimp_photo": "https://images.unsplash.com/photo-1551248429-40975aa6de71?auto=format&fit=crop&w=900&q=80",
  "drink_sprite_can_photo": "https://images.unsplash.com/photo-1622483767028-9662fb12eb13?auto=format&fit=crop&w=900&q=80",
  "drink_cola_can_photo": "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=80",
  "drink_schweppes_can_photo": "https://images.unsplash.com/photo-1581636625402-4470f35c5956?auto=format&fit=crop&w=900&q=80",
  "drink_redbull_photo": "https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?auto=format&fit=crop&w=900&q=80",
  "drink_redbull_sugarfree_photo": "https://images.unsplash.com/photo-1532634735-319a4c092a9c?auto=format&fit=crop&w=900&q=80",
  "drink_juice_carton_photo": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
  "drink_beer_corona_photo": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80",
  "drink_beer_blanche_photo": "https://images.unsplash.com/photo-1532635372-8158c786a487?auto=format&fit=crop&w=900&q=80",
  "drink_wine_white_photo": "https://images.unsplash.com/photo-1547592458-892b6ea50e20?auto=format&fit=crop&w=900&q=80",
  "gallery_01": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  "gallery_02": "https://images.unsplash.com/photo-1550961391-ca8e58c5d5e4?auto=format&fit=crop&w=900&q=80",
  "gallery_03": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80",
  "gallery_04": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  "gallery_05": "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=80",
  "gallery_06": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  "gallery_07": "https://images.unsplash.com/photo-1447933601403-0c6688cbabf7?auto=format&fit=crop&w=900&q=80",
  "gallery_08": "https://images.unsplash.com/photo-1551218807049-983bd198ed9f?auto=format&fit=crop&w=900&q=80",
  "gallery_09": "https://images.unsplash.com/photo-1572116469696-31de0ffa17dc?auto=format&fit=crop&w=900&q=80",
  "gallery_10": "https://images.unsplash.com/photo-1498654896293-e815dc794afd?auto=format&fit=crop&w=900&q=80"
};

/**
 * UA (основа) · BG · EN строки й переклади меню для BG/EN (UA із MENU_ITEMS).
 * @type {Record<string, any>}
 */
var LANG_DATA = {"STRINGS":{"uk":{"metaTitle":"The Step Garden — gastrobar Urban Jungle (Болгарія)","metaDesc":"The Step Garden: меню закладу в Болгарії (Софія / Варна). Ціни в євро (EUR). Мови: UA · BG · EN.","skipLink":"До основного вмісту","navDeskAria":"Розділи сайту (десктоп)","langGroupAria":"Мова сайту","heroBannerAria":"Головний банер","menuTabsAria":"Категорії меню","navMobSections":"Мобільні розділи","navDockAria":"Нижня панель навігації","burgerOpen":"Меню","drawerClose":"Закрити меню","brandShortAria":"The Step Garden — на головну","brandHomeAria":"The Step Garden — на початок","navHome":"Головна","navAbout":"Про нас","navMenu":"Меню","navGallery":"Галерея","navContact":"Контакти","dockAbout":"Про нас","dockMenu":"Їжа","dockGallery":"Фото","dockContact":"Зв'язок","reserveNav":"Забронювати","reserveDrawer":"Забронювати стіл","reserveHero":"Забронювати столик","menuHero":"Меню","scrollDown":"Вниз","heroKicker":"Gastrobar · Urban Jungle · Болгарія","scrollAboutAria":"Прокрутити до блоку про нас","heroTagline":"Там, де місто зустрічається з дикою природою","aboutLabel":"Наша історія","aboutTitle":"Сад у серці міста — Софія чи Варна","aboutP1":"The Step Garden зібрав urban jungle: зелень, камінь, тепле світло й увага до деталей на столі.","aboutP2":"Локація в Болгарії — Софія або Варна (актуальну адресу й бронь дивіться в Instagram @the.step.garden).","aboutP3":"Закуски на грилі, салати й напої — сезонне меню та чесні порції.","aboutFoot":"Усі ціни на сайті — у євро (EUR).","aboutLink":"До меню","aboutImgAlt":"Інтер’єр The Step Garden — urban jungle","sinceBadge":"З 2024","menuLabel":"Гастрономія","menuTitle":"Меню The Step Garden","menuIntro":"Категорії: шаурма, бургери, картопля, шашлик, салати, холодні напої, соки, пиво та біле вино.","tabShawarma":"Шаурма","tabBurgers":"Бургери","tabPotato":"Картопля","tabShashlik":"Шашлик","tabSalads":"Салати","tabColdDrinks":"Холодні напої","tabJuice":"Соки","tabBeer":"Пиво","tabWineWhite":"Біле вино","galleryLabel":"Атмосфера","galleryTitle":"Сад на столі й у деталях","galleryIntro":"Світло, текстури, напої та сервіс — короткий візуальний настрій закладу.","contactLabel":"Контакти","contactTitle":"The Step Garden","contactIntro":"Графік, адреса в Болгарії, телефон +359 … та Instagram — перед візитом або бронюванням.","hoursTitle":"Час роботи","hoursCaption":"Таблиця годин роботи","addrTitle":"Адреса","copyBtn":"Скопіювати адресу","copyOk":"Адресу скопійовано.","copyLiveOk":"Адресу скопійовано (оголошення для скрінрідера).","copyFail":"Скопіюйте текст вручну.","phoneTitle":"Телефон","socialTitle":"Instagram","routeBtn":"Маршрут у карті","mapNote":"Карта зосереджена на Софії; точний пін або Варна — у профілі @the.step.garden.","mapIframeTitle":"Карта Google","footerRights":"Усі права захищено","lightboxClose":"Закрити","lightboxAria":"Збільшене зображення з галереї","schemaDesc":"Гастробар у Болгарії: меню, напої та зелений інтер’єр (Софія / Варна).","schemaCuisine1":"Європейська","schemaCuisine2":"Авторська","schemaReserve":"Забронювати столик","jsonLdReserve":"Забронювати столик","addressLine":"Болгарія — Софія / Варна (уточнюйте в Instagram @the.step.garden)","hoursMonFri":"Понеділок – П’ятниця","hoursSat":"Субота","hoursSun":"Неділя","badgeNew":"Новинка","badgeChef":"Вибір шефа","badgePopular":"Хіт","pricePrefixFrom":"від"},"bg":{"metaTitle":"The Step Garden — гастробар Urban Jungle, България","metaDesc":"Меню, салати и напитъци; цени в евро (EUR). Езици: UA · BG · EN.","skipLink":"Към основното съдържание","navDeskAria":"Раздели (десктоп)","langGroupAria":"Език на сайта","heroBannerAria":"Главен банер","menuTabsAria":"Категории меню","navMobSections":"Мобилни раздели","navDockAria":"Долна лента за навигация","burgerOpen":"Меню","drawerClose":"Затвори","brandShortAria":"The Step Garden — начало","brandHomeAria":"The Step Garden — горе на страницата","navHome":"Начало","navAbout":"За нас","navMenu":"Меню","navGallery":"Галерия","navContact":"Контакти","dockAbout":"За нас","dockMenu":"Храна","dockGallery":"Снимки","dockContact":"Контакти","reserveNav":"Резервация","reserveDrawer":"Резервирай маса","reserveHero":"Резервирай","menuHero":"Меню","scrollDown":"Надолу","heroKicker":"Gastrobar · Urban Jungle · България","scrollAboutAria":"Превъртане към секция за нас","heroTagline":"Където градът среща дивата природа","aboutLabel":"Нашата история","aboutTitle":"Градина в сърцето на града — София или Варна","aboutP1":"The Step Garden събира urban jungle: зеленина, камък, топла светлина и внимание към детайла.","aboutP2":"Реалната локация в България — София или Варна; вижте Instagram @the.step.garden.","aboutP3":"Ястия на грил, салати и напитки — ясни порции в евро (EUR).","aboutFoot":"Цените в менюто са в евро (EUR).","aboutLink":"Към менюто","aboutImgAlt":"Интериор The Step Garden","sinceBadge":"От 2024","menuLabel":"Гастрономия","menuTitle":"Меню The Step Garden","menuIntro":"Шаурма, бургери, картофи, шишчета, салати, студени напои, сокове, бира и бяло вино.","tabShawarma":"Шаурма","tabBurgers":"Бургери","tabPotato":"Картофи","tabShashlik":"Шишчета","tabSalads":"Салати","tabColdDrinks":"Студени напитки","tabJuice":"Сокове","tabBeer":"Бира","tabWineWhite":"Бяло вино","galleryLabel":"Атмосфера","galleryTitle":"Атмосферата на градината","galleryIntro":"Светлина, текстури, напитки и сервиз.","contactLabel":"Контакти","contactTitle":"The Step Garden","contactIntro":"Работно време, адрес в България, телефон +359 … и Instagram преди посещение.","hoursTitle":"Работно време","hoursCaption":"Часово разписание","addrTitle":"Адрес","copyBtn":"Копирай адреса","copyOk":"Адресът е копиран.","copyLiveOk":"Адресът е копиран (потвърждение за четци на екрана).","copyFail":"Копирайте ръчно.","phoneTitle":"Телефон","socialTitle":"Instagram","routeBtn":"Маршрут","mapNote":"Картата е към центъра на София; точен адрес или Варна — в Instagram.","mapIframeTitle":"Карта","footerRights":"Всички права запазени","lightboxClose":"Затвори","lightboxAria":"Увеличена снимка","schemaDesc":"Гастробар в България: меню, напитки и urban jungle интериор.","schemaCuisine1":"Европейска","schemaCuisine2":"Авторска","schemaReserve":"Резервирай маса","jsonLdReserve":"Резервирай маса","addressLine":"България — София / Варна (уточнявайте в Instagram @the.step.garden)","hoursMonFri":"Понеделник – Петък","hoursSat":"Събота","hoursSun":"Неделя","badgeNew":"Новинка","badgeChef":"Избор на готвача","badgePopular":"Хит","pricePrefixFrom":"от"},"en":{"metaTitle":"The Step Garden — Urban Jungle gastrobar, Bulgaria","metaDesc":"Menu in euros (EUR). Languages: Ukrainian, Bulgarian, English.","skipLink":"Skip to main content","navDeskAria":"Site sections (desktop)","langGroupAria":"Site language","heroBannerAria":"Hero banner","menuTabsAria":"Menu categories","navMobSections":"Mobile sections","navDockAria":"Bottom quick navigation","burgerOpen":"Menu","drawerClose":"Close menu","brandShortAria":"The Step Garden — home","brandHomeAria":"The Step Garden — scroll to top","navHome":"Home","navAbout":"About","navMenu":"Menu","navGallery":"Gallery","navContact":"Contact","dockAbout":"About","dockMenu":"Food","dockGallery":"Photos","dockContact":"Contact","reserveNav":"Book a table","reserveDrawer":"Reserve a table","reserveHero":"Book a table","menuHero":"Menu","scrollDown":"Scroll","heroKicker":"Gastrobar · Urban Jungle · Bulgaria","scrollAboutAria":"Scroll to the About section","heroTagline":"Where the city meets the wild","aboutLabel":"Our story","aboutTitle":"A garden in Sofia — or Varna","aboutP1":"We shaped an intimate urban jungle — greenery, honest materials and warm evening light.","aboutP2":"Serving Bulgaria’s coast or capital: confirm Sofia versus Varna on Instagram @the.step.garden.","aboutP3":"Grilled dishes, salads & drinks — clear portions, prices in euro.","aboutFoot":"Listed prices use euro (EUR).","aboutLink":"Browse the menu","aboutImgAlt":"Interior of The Step Garden","sinceBadge":"Since 2024","menuLabel":"Gastronomy","menuTitle":"The Step Garden menu","menuIntro":"Shawarma, burgers, potatoes, skewers, salads, cold drinks, juices, beer and white wine.","tabShawarma":"Shawarma","tabBurgers":"Burgers","tabPotato":"Potatoes","tabShashlik":"Shashlik","tabSalads":"Salads","tabColdDrinks":"Cold drinks","tabJuice":"Juices","tabBeer":"Beer","tabWineWhite":"White wine","galleryLabel":"Atmosphere","galleryTitle":"Garden details & light","galleryIntro":"Ambience — plants, warm light, service moments.","contactLabel":"Contact","contactTitle":"The Step Garden","contactIntro":"Hours, Bulgarian address, +359 phone placeholder, and Instagram before you visit.","hoursTitle":"Opening hours","hoursCaption":"Opening hours table","addrTitle":"Address","copyBtn":"Copy address","copyOk":"Address copied.","copyLiveOk":"Announcement: address copied.","copyFail":"Copy manually.","phoneTitle":"Phone","socialTitle":"Instagram","routeBtn":"Directions","mapNote":"Map pins central Sofia — cross-check venue city on Instagram.","mapIframeTitle":"Map","footerRights":"All rights reserved","lightboxClose":"Close viewer","lightboxAria":"Expanded gallery photograph","schemaDesc":"Urban Jungle gastrobar in Bulgaria (Sofia / Varna) with authored food & drinks.","schemaCuisine1":"European","schemaCuisine2":"Contemporary","schemaReserve":"Book a table","jsonLdReserve":"Book a table","addressLine":"Bulgaria — Sofia / Varna (confirm on Instagram @the.step.garden)","hoursMonFri":"Monday – Friday","hoursSat":"Saturday","hoursSun":"Sunday","badgeNew":"New","badgeChef":"Chef’s pick","badgePopular":"Popular","pricePrefixFrom":"from"}},"MENU_TR":{"bg":{"sw-chicken":{"name":"Пилешко шаурма","ingredientLine":"лайсани домати · салата · питче · мариновано пилешко · сос"},"sw-pork":{"name":"Свинско шаурма","ingredientLine":"домати · салата · питче · маринована свинина · сос по избор · 500 г порция"},"bu-chicken-burger":{"name":"Бургер пилешко","ingredientLine":"кашкавал · салата айсберг · бриош · домашни картофи · сос"},"pot-fries":{"name":"Пържени картофи","ingredientLine":"картофи · малко сол · 250 г"},"pot-country":{"name":"Картофи по селски","ingredientLine":"накъцани картофи · билки · масло или олио · 250 г"},"pot-dippers":{"name":"Картофени дипери","ingredientLine":"дълбоко пържени · сос по избор · 200 г"},"sk-chicken":{"name":"Пилешко шишче","ingredientLine":"мариновано пилешко · лук · 100 г"},"sk-pork":{"name":"Свинско шишче","ingredientLine":"маринована свинина · билки · лук · 100 г"},"sal-caesar-chicken":{"name":"Салата „Цезар“ с пилешко","ingredientLine":"айсберг · пилешко · пармезан · цезар сос · крутони · чери домати"},"sal-caesar-shrimp":{"name":"Салата „Цезар“ със скариди","ingredientLine":"ромен · темпура скариди · пармезан · крутони · цезар"},"cd-sprite":{"name":"Спрайт","ingredientLine":"газирана напитка · 330 ml"},"cd-cola":{"name":"Кока-Кола","ingredientLine":"газирана напитка · 330 ml"},"cd-schweppes":{"name":"Швепс","ingredientLine":"газирана напитка · 330 ml"},"cd-rb-classic":{"name":"Red Bull Classic","ingredientLine":"енергиен напиток · 330 ml"},"cd-rb-ns":{"name":"Red Bull без захар","ingredientLine":"енергиен напиток · 330 ml"},"jv-apple":{"name":"Сок ябълка 150 ml","ingredientLine":"ябълков сок · 150 ml"},"jv-orange":{"name":"Сок портокал 150 ml","ingredientLine":"портокалов сок · 150 ml"},"jv-cherry":{"name":"Сок череша 150 ml","ingredientLine":"черешов сок · 150 ml"},"beer-corona":{"name":"Бира Корона","ingredientLine":"Corona Extra · 0,33 l"},"beer-blanche":{"name":"Бланш бира","ingredientLine":"Kronenbourg 1664 Blanc · 0,33 l — уточнете промо цена при бара"},"ww-poesie":{"name":"Poesie Pinot Grigio 150 ml","ingredientLine":"бяло вино Италия · чаша 150 ml"},"ww-fumees":{"name":"Fumees Blanches 150 ml","ingredientLine":"ароматно бяло · чаша 150 ml"},"ww-janta":{"name":"Janta Jucia Toscana Bianco Castellani 150 ml","ingredientLine":"тоскано бьянко · чаша 150 ml"},"ww-rongopai":{"name":"Rongopai Sauvignon Blanc 150 ml","ingredientLine":"Нова Зеландия · Sauvignon Blanc · 150 ml"},"ww-babich":{"name":"Babich Sauvignon Blanc 150 ml","ingredientLine":"Нова Зеландия · Sauvignon Blanc · 150 ml"}},"en":{"sw-chicken":{"name":"Chicken shawarma","ingredientLine":"warm flatbread · grilled chicken · salad · sauces · 500 g"},"sw-pork":{"name":"Pork shawarma","ingredientLine":"marinated pork · vegetables · lavash wrap · pickles · 500 g"},"bu-chicken-burger":{"name":"Chicken burger","ingredientLine":"brioche bun · chicken patty · cheese · lettuce · fries · dip"},"pot-fries":{"name":"French fries","ingredientLine":"crispy fries · pinch of salt · 250 g"},"pot-country":{"name":"Country-style potatoes","ingredientLine":"roasted wedges · paprika herbs · onion · 250 g"},"pot-dippers":{"name":"Potato dippers","ingredientLine":"thick wedges · dipping sauce optional · 200 g"},"sk-chicken":{"name":"Chicken shashlik","ingredientLine":"grilled chicken cubes · marinated · onion garnish · 100 g"},"sk-pork":{"name":"Pork shashlik","ingredientLine":"grilled pork cubes · charcoal notes · herb garnish · 100 g"},"sal-caesar-chicken":{"name":"Caesar salad with chicken","ingredientLine":"romaine · grilled chicken · parmesan · Caesar dressing · croutons"},"sal-caesar-shrimp":{"name":"Caesar salad with shrimp","ingredientLine":"romaine · fried shrimp · parmesan · croutons · Caesar dressing"},"cd-sprite":{"name":"Sprite","ingredientLine":"Chilled canned soft drink · 330 ml"},"cd-cola":{"name":"Coca-Cola","ingredientLine":"Chilled canned soft drink · 330 ml"},"cd-schweppes":{"name":"Schweppes","ingredientLine":"Chilled canned soft drink · 330 ml"},"cd-rb-classic":{"name":"Red Bull Classic","ingredientLine":"Energy drink · chilled · 330 ml"},"cd-rb-ns":{"name":"Red Bull Sugarfree","ingredientLine":"Energy drink · no sugar · 330 ml"},"jv-apple":{"name":"Apple juice 150 ml","ingredientLine":"Single-serve carton · chilled · 150 ml"},"jv-orange":{"name":"Orange juice 150 ml","ingredientLine":"Carton juice · chilled · 150 ml"},"jv-cherry":{"name":"Cherry juice 150 ml","ingredientLine":"Carton juice · chilled · 150 ml"},"beer-corona":{"name":"Corona Extra","ingredientLine":"Mexican pale lager · bottle 330 ml"},"beer-blanche":{"name":"Blanche beer (1664 Blanc)","ingredientLine":"Wheat beer · 330 ml — ask at bar for current promo pricing"},"ww-poesie":{"name":"Poesie Pinot Grigio 150 ml","ingredientLine":"White wine Italy · poured glass · 150 ml"},"ww-fumees":{"name":"Fumees Blanches 150 ml","ingredientLine":"Aromatic white blend · glass · 150 ml"},"ww-janta":{"name":"Janta Jucia Toscana Bianco Castellani 150 ml","ingredientLine":"Tuscany bianco pour · glass · 150 ml"},"ww-rongopai":{"name":"Rongopai Sauvignon Blanc 150 ml","ingredientLine":"New Zealand Sauvignon Blanc · 150 ml"},"ww-babich":{"name":"Babich Sauvignon Blanc 150 ml","ingredientLine":"New Zealand Sauvignon Blanc · 150 ml"}}},"GALLERY_ALT":{"bg":{"g-01":"Изглед към салона с топла светлина","g-02":"Голям план маса между растения","g-03":"Височки край бар плота","g-04":"Поднесено основно ястие","g-05":"Подредени предястия","g-06":"Коктейл с билки и цитрос","g-07":"Подправки върху камък","g-08":"Зимен напитков бар","g-09":"Кът до прозореца","g-10":"Маса с цветя"},"en":{"g-01":"Dining room panorama with soft lighting","g-02":"Vertical vignette amid plants","g-03":"High tops near the bar","g-04":"Plated mains from the kitchen","g-05":"Line-up of grazing plates","g-06":"Garden-forward cocktail garnish","g-07":"Spices and herbs over stone","g-08":"Festive mulled pours","g-09":"Window lounge seating","g-10":"Table nestled in fresh blooms"}}};

var MENU_ITEMS = [
  {
    "id": "sw-chicken",
    "name": "Шаурма з куркою",
    "weight": "500 г",
    "ingredients": [
      "пітта",
      "курятина гриль",
      "салат",
      "соус"
    ],
    "price": 9.39,
    "image": "https://images.unsplash.com/photo-1572445278854-945c221e5765?auto=format&fit=crop&w=900&q=80",
    "category": "shawarma"
  },
  {
    "id": "sw-pork",
    "name": "Шаурма зі свининою",
    "weight": "500 г",
    "ingredients": [
      "пітта",
      "маринована свинина",
      "овочі",
      "соус"
    ],
    "price": 11.39,
    "image": "https://images.unsplash.com/photo-1676300181905-09766d8d9745?auto=format&fit=crop&w=900&q=80",
    "category": "shawarma"
  },
  {
    "id": "bu-chicken-burger",
    "name": "Бургер з куркою",
    "weight": "~420 г",
    "ingredients": [
      "бріош",
      "котлета куряча",
      "сир",
      "салат",
      "соус"
    ],
    "price": 9.39,
    "image": "https://images.unsplash.com/photo-1565299585323-38d876b0865f?auto=format&fit=crop&w=900&q=80",
    "category": "burgers"
  },
  {
    "id": "pot-fries",
    "name": "Картопля фрі",
    "weight": "250 г",
    "ingredients": [
      "картопля",
      "родзинки солі"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    "category": "potato"
  },
  {
    "id": "pot-country",
    "name": "Картопля по-селянськи",
    "weight": "250 г",
    "ingredients": [
      "клубки картоплі",
      "паприка",
      "трави"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1623238916360-7ca36411f16b?auto=format&fit=crop&w=900&q=80",
    "category": "potato"
  },
  {
    "id": "pot-dippers",
    "name": "Картопляні діпери",
    "weight": "200 г",
    "ingredients": [
      "тостові клинці",
      "сос до діпів"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1585100420148-b148335f0b31?auto=format&fit=crop&w=900&q=80",
    "category": "potato"
  },
  {
    "id": "sk-chicken",
    "name": "Шашлик з курки",
    "weight": "100 г",
    "ingredients": [
      "мариноване філе",
      "гриль",
      "цибуля"
    ],
    "price": 3,
    "image": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=900&q=80",
    "category": "shashlik"
  },
  {
    "id": "sk-pork",
    "name": "Шашлик зі свинини",
    "weight": "100 г",
    "ingredients": [
      "лангет або шия",
      "маринад",
      "трави"
    ],
    "price": 4.3,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
    "category": "shashlik"
  },
  {
    "id": "sal-caesar-chicken",
    "name": "Салат Цезар з куркою",
    "weight": "~340 г",
    "ingredients": [
      "ромен",
      "курка гриль",
      "пармезан",
      "крутон",
      "соус Caesar"
    ],
    "price": 7,
    "image": "https://images.unsplash.com/photo-1546793660972-ed97ebeb8d74?auto=format&fit=crop&w=900&q=80",
    "category": "salads"
  },
  {
    "id": "sal-caesar-shrimp",
    "name": "Салат Цезар з креветкою",
    "weight": "~340 г",
    "ingredients": [
      "ромен",
      "креветка",
      "пармезан",
      "крутон",
      "соус Caesar"
    ],
    "price": 9,
    "image": "https://images.unsplash.com/photo-1551248429-40975aa6de71?auto=format&fit=crop&w=900&q=80",
    "category": "salads"
  },
  {
    "id": "cd-sprite",
    "name": "Спрайт",
    "weight": "330 мл",
    "ingredients": [
      "газований напій",
      "холодний"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1622483767028-9662fb12eb13?auto=format&fit=crop&w=900&q=80",
    "category": "cold_drinks"
  },
  {
    "id": "cd-cola",
    "name": "Кока-Кола",
    "weight": "330 мл",
    "ingredients": [
      "газований напій",
      "холодний"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=80",
    "category": "cold_drinks"
  },
  {
    "id": "cd-schweppes",
    "name": "Швепс",
    "weight": "330 мл",
    "ingredients": [
      "газований напій",
      "холодний"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1581636625402-4470f35c5956?auto=format&fit=crop&w=900&q=80",
    "category": "cold_drinks"
  },
  {
    "id": "cd-rb-classic",
    "name": "Red Bull Classic",
    "weight": "330 мл",
    "ingredients": [
      "енергетик"
    ],
    "price": 3,
    "image": "https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?auto=format&fit=crop&w=900&q=80",
    "category": "cold_drinks"
  },
  {
    "id": "cd-rb-ns",
    "name": "Red Bull без цукру",
    "weight": "330 мл",
    "ingredients": [
      "енергетик",
      "без цукру"
    ],
    "price": 3,
    "image": "https://images.unsplash.com/photo-1532634735-319a4c092a9c?auto=format&fit=crop&w=900&q=80",
    "category": "cold_drinks"
  },
  {
    "id": "jv-apple",
    "name": "Сік яблучний",
    "weight": "150 мл",
    "ingredients": [
      "яблучний сік",
      "пакет"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
    "category": "juice"
  },
  {
    "id": "jv-orange",
    "name": "Сік апельсиновий",
    "weight": "150 мл",
    "ingredients": [
      "апельсиновий сік",
      "пакет"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
    "category": "juice"
  },
  {
    "id": "jv-cherry",
    "name": "Сік вишневий",
    "weight": "150 мл",
    "ingredients": [
      "вишневий сік",
      "пакет"
    ],
    "price": 2.33,
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
    "category": "juice"
  },
  {
    "id": "beer-corona",
    "name": "Пиво Corona Extra",
    "weight": "0,33 л",
    "ingredients": [
      "легке світле",
      "пляшка"
    ],
    "price": 3.69,
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80",
    "category": "beer"
  },
  {
    "id": "beer-blanche",
    "name": "Пиво Blanche (1664 Blanc)",
    "weight": "0,33 л",
    "ingredients": [
      "пшеничне",
      "пляшка",
      "уточніть ціну в барі"
    ],
    "price": 0,
    "image": "https://images.unsplash.com/photo-1532635372-8158c786a487?auto=format&fit=crop&w=900&q=80",
    "category": "beer"
  },
  {
    "id": "ww-poesie",
    "name": "Вино Poesie Pinot Grigio",
    "weight": "150 мл",
    "ingredients": [
      "скло",
      "Італія",
      "біле сухе"
    ],
    "price": 3.33,
    "image": "https://images.unsplash.com/photo-1547592458-892b6ea50e20?auto=format&fit=crop&w=900&q=80",
    "category": "wine_white"
  },
  {
    "id": "ww-fumees",
    "name": "Вино Fumees Blanches",
    "weight": "150 мл",
    "ingredients": [
      "скло",
      "ароматне біле"
    ],
    "price": 4.6,
    "image": "https://images.unsplash.com/photo-1547592458-892b6ea50e20?auto=format&fit=crop&w=900&q=80",
    "category": "wine_white"
  },
  {
    "id": "ww-janta",
    "name": "Вино Janta Jucia Toscana Bianco Castellani",
    "weight": "150 мл",
    "ingredients": [
      "Тоскана",
      "біле",
      "скло"
    ],
    "price": 3,
    "image": "https://images.unsplash.com/photo-1547592458-892b6ea50e20?auto=format&fit=crop&w=900&q=80",
    "category": "wine_white"
  },
  {
    "id": "ww-rongopai",
    "name": "Вино Rongopai Sauvignon Blanc",
    "weight": "150 мл",
    "ingredients": [
      "Нова Зеландія",
      "Sauvignon Blanc"
    ],
    "price": 4.6,
    "image": "https://images.unsplash.com/photo-1547592458-892b6ea50e20?auto=format&fit=crop&w=900&q=80",
    "category": "wine_white"
  },
  {
    "id": "ww-babich",
    "name": "Вино Babich Sauvignon Blanc",
    "weight": "150 мл",
    "ingredients": [
      "Нова Зеландія",
      "Sauvignon Blanc"
    ],
    "price": 7.5,
    "image": "https://images.unsplash.com/photo-1547592458-892b6ea50e20?auto=format&fit=crop&w=900&q=80",
    "category": "wine_white"
  }
];

var GALLERY_DATA = [
  {
    "id": "g-01",
    "src": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    "alt": "Панорама залу з м’яким світлом",
    "layout": "tall"
  },
  {
    "id": "g-02",
    "src": "https://images.unsplash.com/photo-1550961391-ca8e58c5d5e4?auto=format&fit=crop&w=900&q=80",
    "alt": "Вертикальний стіл серед зелені",
    "layout": "wide"
  },
  {
    "id": "g-03",
    "src": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80",
    "alt": "Високі столики біля бару",
    "layout": "square"
  },
  {
    "id": "g-04",
    "src": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    "alt": "Подання страв з основного меню",
    "layout": "tall"
  },
  {
    "id": "g-05",
    "src": "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=80",
    "alt": "Закуски в ряд",
    "layout": "square"
  },
  {
    "id": "g-06",
    "src": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    "alt": "Деталі коктейлю й зелені",
    "layout": "wide"
  },
  {
    "id": "g-07",
    "src": "https://images.unsplash.com/photo-1447933601403-0c6688cbabf7?auto=format&fit=crop&w=900&q=80",
    "alt": "Трави на камені",
    "layout": "tall"
  },
  {
    "id": "g-08",
    "src": "https://images.unsplash.com/photo-1551218807049-983bd198ed9f?auto=format&fit=crop&w=900&q=80",
    "alt": "Затишний бар з напоями",
    "layout": "square"
  },
  {
    "id": "g-09",
    "src": "https://images.unsplash.com/photo-1572116469696-31de0ffa17dc?auto=format&fit=crop&w=900&q=80",
    "alt": "Світло біля вікна",
    "layout": "wide"
  },
  {
    "id": "g-10",
    "src": "https://images.unsplash.com/photo-1498654896293-e815dc794afd?auto=format&fit=crop&w=900&q=80",
    "alt": "Стіл серед квітів",
    "layout": "tall"
  }
];
(function () {
  "use strict";

  /**
   * Глобальное состояние и константы (верхний уровень замыкания приложения).
   * @readonly
   */
  var SITE_BRAIN = Object.freeze({
    storageLangKey: "tsg-locale-v2",
    navSectionIds: ["hero", "about", "menu", "gallery", "contact"],
    langBar: ["uk", "bg", "en"],
    scrollLookup: 110,
  });

  /** @typedef {"uk"|"bg"|"en"} Lang */
  /** Текущий язык интерфейса (пишется только через updateUI / старт загрузки). */
  /** @type {Lang} */
  var CURRENT_LANG = /** @type {Lang} */ ("uk");

  /** @returns {Record<string, any> | null} */
  function readL10n() {
    return LANG_DATA && LANG_DATA.STRINGS && LANG_DATA.STRINGS.uk ? LANG_DATA : null;
  }
  var L10N = readL10n();

  var SITE_CORE = {
    name: "The Step Garden",
    mapQuery: "42.697708,23.321868",
    phoneDisplay: "+359 XX XXX XXX",
    phoneHref: "tel:+359000000001",
    email: "hello@thestepgarden.bg",
    social: {
      instagram: "https://www.instagram.com/the.step.garden/",
    },
  };

  /** @param {unknown} raw @returns {Lang} */
  function normalizeLang(raw) {
    var r = String(raw || "")
      .toLowerCase()
      .trim();
    if (r === "ua") return "uk";
    if (r === "uk" || r === "bg" || r === "en") return r;
    return "uk";
  }

  /** @returns {Lang} */
  function readStoredLang() {
    try {
      return normalizeLang(
        window.localStorage.getItem(SITE_BRAIN.storageLangKey),
      );
    } catch {
      return "uk";
    }
  }

  /** @param {Lang} lang */
  function persistLang(lang) {
    try {
      window.localStorage.setItem(SITE_BRAIN.storageLangKey, lang);
    } catch (_) {}
  }

  /** @param {Lang} lang */
  function getSiteData(lang) {
    return siteBundle(normalizeLang(lang));
  }

  /** @param {Lang} lc */
  function syncDocumentChrome(lc) {
    var lang = normalizeLang(lc);
    var s = stringsOf(lang);
    if (!s) return;
    document.documentElement.setAttribute(
      "lang",
      lang === "uk" ? "uk" : lang,
    );
    document.title = s.metaTitle;

    /** @type {HTMLElement | null} */
    var md = qs('meta[name="description"]');
    if (md) md.setAttribute("content", s.metaDesc);

    var ogTitle = qs('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", s.metaTitle);
    var ogDesc = qs('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", s.metaDesc);

    var twTitle = qs('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", s.metaTitle);
    var twDesc = qs('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", s.metaDesc);

    /** @type {HTMLMetaElement | null} */
    var ogIm = qs('meta[property="og:image"]');
    if (ogIm && typeof IMAGE_ASSETS !== "undefined" && IMAGE_ASSETS.og_default) {
      ogIm.setAttribute("content", IMAGE_ASSETS.og_default);
    }

    /** @type {HTMLAnchorElement | null} */
    var skipEl = qs("a.skip-link");
    if (skipEl && s.skipLink) skipEl.textContent = s.skipLink;

    /** @type {HTMLElement | null} */
    var lbWrap = qs("#tsg-lightbox");
    /** @type {HTMLButtonElement | null} */
    var lbBtn = qs("#tsg-lightbox-close");
    if (lbWrap && s.lightboxAria) lbWrap.setAttribute("aria-label", s.lightboxAria);
    if (lbBtn && s.lightboxClose) lbBtn.setAttribute("aria-label", s.lightboxClose);

    /** @type {HTMLElement | null} */
    var jsonEl = qs("#tsg-jsonld");
    if (jsonEl) jsonEl.textContent = JSON.stringify(buildRestaurantJsonLd(lang), null, 2);
  }

  /** @param {Lang} lc */
  function buildRestaurantJsonLd(lc) {
    var n = normalizeLang(lc);
    var st = stringsOf(n);
    var site = siteBundle(n);
    var menuSections = [];
    /** @type {string[]} */
    var order = [
      "shawarma",
      "burgers",
      "potato",
      "shashlik",
      "salads",
      "cold_drinks",
      "juice",
      "beer",
      "wine_white",
    ];
    for (var si = 0; si < order.length; si++) {
      var cat = order[si];
      /** @type {Record<string, string | undefined>} */
      var lab = st
        ? {
            shawarma: st.tabShawarma,
            burgers: st.tabBurgers,
            potato: st.tabPotato,
            shashlik: st.tabShashlik,
            salads: st.tabSalads,
            cold_drinks: st.tabColdDrinks,
            juice: st.tabJuice,
            beer: st.tabBeer,
            wine_white: st.tabWineWhite,
          }
        : {};
      var secName = (st && lab[cat]) || cat;
      var itemsInCat = MENU_ITEMS.filter(function (m) {
        return m.category === cat;
      }).map(function (item) {
        var tr = dishTrRow(n, item.id);
        var nm = (tr && tr.name) || item.name;
        var ing =
          (tr && tr.ingredientLine) || item.ingredients.join(", ");
        /** @type {Record<string, any>} */
        var off = {
          "@type": "Offer",
          priceCurrency: "EUR",
        };
        off.price =
          item.priceFrom === true
            ? "from ".concat(Number(item.price).toFixed(2))
            : Number(item.price).toFixed(2);
        /** @type {Record<string, any>} */
        var mi = {
          "@type": "MenuItem",
          "@id": "https://thestepgarden.example/menu#".concat(item.id),
          name: nm,
          description: ing,
          offers: off,
        };
        return mi;
      });
      menuSections.push({
        "@type": "MenuSection",
        name: secName,
        hasMenuItem: itemsInCat,
      });
    }

    /** @type {Record<string, any>} */
    var root = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": "https://thestepgarden.example/#business",
      name: SITE_CORE.name,
      url: "https://thestepgarden.example/",
      telephone: SITE_CORE.phoneDisplay,
      description: st ? st.schemaDesc : "",
      servesCuisine: st
        ? [st.schemaCuisine1, st.schemaCuisine2]
        : ["European", "Contemporary"],
      image:
        typeof IMAGE_ASSETS !== "undefined" &&
        IMAGE_ASSETS.og_default
          ? [IMAGE_ASSETS.og_default]
          : [],
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: "Sofia",
        addressCountry: "BG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 42.697708,
        longitude: 23.321868,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "24:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "22:00",
        },
      ],
      potentialAction: {
        "@type": "ReserveAction",
        name: st ? st.schemaReserve || st.jsonLdReserve : "",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "mailto:" + SITE_CORE.email,
        },
      },
      sameAs: [SITE_CORE.social.instagram],
      hasMenu: {
        "@type": "Menu",
        name: SITE_CORE.name.concat(" ").concat(st ? st.menuTitle : ""),
        description: st ? st.menuIntro : "",
        hasMenuSection: menuSections,
      },
    };
    return root;
  }

  /** @param {Lang} lang */
  function stringsOf(lang) {
    var lc = normalizeLang(lang);
    if (!L10N || !L10N.STRINGS || !L10N.STRINGS.uk) return null;
    return L10N.STRINGS[lc] || L10N.STRINGS.uk;
  }

  /** @param {Lang} lang */
  function siteHours(lang) {
    var s = stringsOf(lang);
    if (!s) return SITE_CORE.fallbackHours;
    return [
      { days: s.hoursMonFri, time: "08:00 – 23:00" },
      { days: s.hoursSat, time: "10:00 – 24:00" },
      { days: s.hoursSun, time: "10:00 – 22:00" },
    ];
  }

  SITE_CORE.fallbackHours = [
    { days: "Пн–Пт", time: "08:00 – 23:00" },
    { days: "Сб", time: "10:00 – 24:00" },
    { days: "Нд", time: "10:00 – 22:00" },
  ];

  /** @param {Lang} lc */
  function menuTabs(lc) {
    var s = stringsOf(lc);
    if (!s) return [{ id: "shawarma", label: "…" }];
    return [
      { id: "shawarma", label: s.tabShawarma },
      { id: "burgers", label: s.tabBurgers },
      { id: "potato", label: s.tabPotato },
      { id: "shashlik", label: s.tabShashlik },
      { id: "salads", label: s.tabSalads },
      { id: "cold_drinks", label: s.tabColdDrinks },
      { id: "juice", label: s.tabJuice },
      { id: "beer", label: s.tabBeer },
      { id: "wine_white", label: s.tabWineWhite },
    ];
  }

  /** @param {Lang} lc */
  function navLinks(lc) {
    var s = stringsOf(lc);
    if (!s) return [];
    return [
      { id: "hero", label: s.navHome, href: "#hero" },
      { id: "about", label: s.navAbout, href: "#about" },
      { id: "menu", label: s.navMenu, href: "#menu" },
      { id: "gallery", label: s.navGallery, href: "#gallery" },
      { id: "contact", label: s.navContact, href: "#contact" },
    ];
  }

  /** @param {Lang} lc */
  function siteBundle(lc) {
    var s = stringsOf(lc);
    var addr =
      (s && s.addressLine) ||
      "Болгарія — Софія / Варна (Instagram @the.step.garden)";
    return {
      name: SITE_CORE.name,
      address: addr,
      mapQuery: SITE_CORE.mapQuery,
      phoneDisplay: SITE_CORE.phoneDisplay,
      phoneHref: SITE_CORE.phoneHref,
      email: SITE_CORE.email,
      hours: siteHours(lc),
      social: SITE_CORE.social,
    };
  }

  /** @param {Lang} lc @param {string} id */
  function dishTrRow(lc, id) {
    if (!L10N || !L10N.MENU_TR || lc === "uk") return null;
    var row = L10N.MENU_TR[lc] && L10N.MENU_TR[lc][id];
    return row || null;
  }

  /** @param {Lang} lc @param {typeof GALLERY_DATA[0]} item */
  function galleryCaption(lc, item) {
    if (lc === "uk") return item.alt;
    var byId =
      L10N &&
      L10N.GALLERY_ALT &&
      L10N.GALLERY_ALT[lc] &&
      L10N.GALLERY_ALT[lc][item.id];
    if (typeof byId === "string" && byId) return byId;
    var enAlt =
      L10N &&
      L10N.GALLERY_ALT &&
      L10N.GALLERY_ALT.en &&
      L10N.GALLERY_ALT.en[item.id];
    return typeof enAlt === "string" && enAlt ? enAlt : item.alt;
  }

  /** @param {Lang} lc */
  function mapHl(lc) {
    return lc === "bg" ? "bg" : lc === "en" ? "en" : "uk";
  }

  /** @returns {HTMLElement | null} */
  function qs(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }

  /** @returns {HTMLElement[]} */
  function qsa(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  /** @returns {boolean} */
  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /** @returns {string} */
  function eurFmtFallback(n) {
    return "".concat(Number(n).toFixed(2), "\u00A0€");
  }

  /** @param {Lang} lc @param {number} n */
  function priceFmt(lc, n) {
    var loc =
      lc === "uk"
        ? "uk-UA"
        : lc === "bg"
          ? "bg-BG"
          : "en-GB";
    try {
      return new Intl.NumberFormat(loc, {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(n);
    } catch {
      return eurFmtFallback(n);
    }
  }

  /** @param {Lang} lc @param {Record<string, any>} item */
  function dishPriceDisplay(lc, item) {
    var amt = priceFmt(lc, /** @type {number} */ (item.price));
    if (!item.priceFrom) return amt;
    var s = stringsOf(lc);
    var pfx = s && s.pricePrefixFrom ? s.pricePrefixFrom : "";
    return pfx ? "".concat(pfx, "\u00A0").concat(amt) : amt;
  }

  /** @param {Lang} lc @param {string} [badge] */
  function badgeLabel(lc, badge) {
    var s = stringsOf(lc);
    if (!s || !badge) return "";
    if (badge === "New") return s.badgeNew;
    if (badge === "Chef's Pick") return s.badgeChef;
    if (badge === "Popular") return s.badgePopular;
    return "";
  }

  /** @param {string} s */
  function esc(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }



  function copyPlainTextFallback(text) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }

  /** @param {Lang} lc @param {typeof MENU_ITEMS[0]} item */
  function dishHtml(lc, item) {
    var tr = dishTrRow(lc, item.id);
    var name = (tr && tr.name) || item.name;
    var ingLine =
      (tr && tr.ingredientLine) || item.ingredients.join(" · ");
    var weight = (tr && tr.weight) || item.weight;
    var badge = item.badge
      ? '<span class="absolute left-4 top-4 rounded-full bg-tsg-gold px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-tsg-deep">'.concat(
          esc(badgeLabel(lc, item.badge)),
          "</span>",
        )
      : "";
    return (
      '<article class="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(197,160,89,0.18)] bg-[rgba(33,58,46,0.58)] shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-[14px]">' +
      '<div class="relative aspect-video w-full overflow-hidden">' +
      '<img src="'.concat(
        esc(item.image),
        '" alt="',
        esc(name),
        '" class="h-full w-full object-cover transition duration-[550ms] group-hover/card:scale-105" loading="lazy" decoding="async" />',
      ) +
      '<div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>' +
      badge +
      "</div>" +
      '<div class="flex flex-1 flex-col gap-3 px-5 pb-5 pt-5">' +
      '<header class="flex items-start justify-between gap-4">' +
      '<h3 class="min-w-0 flex-1 font-serif text-lg leading-snug text-tsg-off-white line-clamp-2">'.concat(
        esc(name),
        "</h3>",
      ) +
      '<span class="shrink-0 font-sans text-xs font-semibold uppercase tracking-wide text-tsg-muted-cream">'.concat(
        esc(weight),
        "</span>",
      ) +
      "</header>" +
      '<p class="line-clamp-2 font-sans text-[13px] leading-snug md:text-[0.8125rem] text-[rgba(184,176,160,0.78)]">'.concat(
        esc(ingLine),
        "</p>",
      ) +
      '<div class="mt-auto flex justify-end">' +
      '<p class="font-sans text-xl font-semibold text-tsg-gold">'.concat(
        dishPriceDisplay(lc, item),
        "</p>",
      ) +
      "</div>" +
      "</div></article>"
    );
  }

  /** @param {string} layout */
  function aspectClass(layout) {
    if (layout === "tall") return "aspect-[3/4]";
    if (layout === "wide") return "aspect-video";
    return "aspect-square";
  }

  /** @param {Lang} lc @param {typeof GALLERY_DATA[0]} item @param {number} i */
  function galleryFig(lc, item, i) {
    var motion =
      prefersReducedMotion() === true
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8";
    var cap = galleryCaption(lc, item);
    var sLb = stringsOf(lc);
    var lbAria =
      sLb && sLb.lightboxAria
        ? esc(cap).concat(" — ").concat(esc(sLb.lightboxAria))
        : esc(cap);
    return (
      '<figure class="gallery-item mb-4 break-inside-avoid motion-safe:transition-all motion-safe:duration-[650ms] motion-safe:ease-out '.concat(
        motion,
        '" data-gallery-index="',
        String(i),
        '">',
      ) +
      '<div class="group relative overflow-hidden rounded-2xl border border-transparent shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.04] transition duration-[420ms] ease-out hover:-translate-y-0.5 hover:border-[rgba(197,160,89,0.45)]">' +
      '<div class="relative w-full overflow-hidden rounded-2xl '.concat(
        aspectClass(item.layout),
        '">',
      ) +
      '<img src="'.concat(
        esc(item.src),
        '" alt="',
        esc(cap),
        '" class="pointer-events-none h-full w-full object-cover brightness-95 saturate-[1.02] contrast-[1.02] duration-[560ms] group-hover:scale-105 group-hover:brightness-[0.85]" loading="lazy" />',
      ) +
      '<div class="pointer-events-none absolute inset-0 opacity-70 mix-blend-soft-light bg-gradient-to-br from-transparent via-transparent to-tsg-deep/80"></div>' +
      '<div class="pointer-events-none absolute inset-0 bg-black/0 transition duration-[450ms] group-hover:bg-black/15"></div>' +
      '<div class="pointer-events-none absolute inset-0 flex items-center justify-center">' +
      '<svg class="pointer-events-none h-14 w-14 text-tsg-off-white opacity-0 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition duration-300 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">' +
      '<circle cx="10.5" cy="10.5" r="5.75" /><path stroke-linecap="round" d="m16 16 4 4" /><circle cx="10.5" cy="10.5" r="2.65" opacity="0.35" />' +
      "</svg>" +
      "</div>" +
      '<button type="button" tabindex="0" class="gallery-open absolute inset-0 z-[5] rounded-2xl bg-transparent cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-tsg-gold outline-offset-2"' +
      ' data-tsg-gallery-open ' +
      'data-tsg-gallery-src="' +
      esc(item.src) +
      '" data-tsg-gallery-alt="' +
      esc(cap) +
      '" aria-label="' +
      lbAria +
      '"></button></div>' +
      '<figcaption class="sr-only">'.concat(
        esc(cap),
        "</figcaption>",
      ) +
      "</div></figure>"
    );
  }

  /** @returns {string} */
  function mapEmbedLc(lc) {
    var q = encodeURIComponent(SITE_CORE.mapQuery);
    var hl = mapHl(lc);
    return "https://www.google.com/maps?q=".concat(
      q,
      "&z=15&hl=",
      hl,
      "&output=embed",
    );
  }

  /** @returns {string} */
  function directionsUrl() {
    return "https://www.google.com/maps/dir/?api=1&destination=".concat(
      encodeURIComponent(SITE_CORE.mapQuery),
    );
  }

  /** @returns {string} */
  function dockSvg(slug) {
    switch (slug) {
      case "about":
        return '<svg width="21" height="21" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" d="M5 21V11l7-5 7 5v10M15 21v-7H9v7"/></svg>';
      case "menu":
        return '<svg width="21" height="21" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="1.35" d="M5 21V9l8-6 8 6v12M14 21h-6"/></svg>';
      case "gallery":
        return '<svg width="21" height="21" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="1.28" d="M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/><circle cx="9.5" cy="9.5" r="1.25" fill="currentColor"/><path stroke="currentColor" stroke-width="1.2" d="m4 17 6.5-7 4 4 8-9"/></svg>';
      default:
        return '<svg width="21" height="21" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="1.3" d="M4 6h16v11h-10l-6 4V6z"/></svg>';
    }
  }

  /** @returns {string} */
  function buildShell(lang) {
    var lc = normalizeLang(lang);
    var s = stringsOf(lc);
    if (!s) return "";
    var SITE = siteBundle(lc);
    var NAV_LINKS = navLinks(lc);
    var MENU_TABS_LOC = menuTabs(lc);

    function dockShort(id) {
      if (id === "about") return s.dockAbout;
      if (id === "menu") return s.dockMenu;
      if (id === "gallery") return s.dockGallery;
      return s.dockContact;
    }

    var langBtns = SITE_BRAIN.langBar.map(function (code) {
      var lbl = code === "uk" ? "UA" : code.toUpperCase();
      var pressed = lc === code ? "true" : "false";
      var cls =
        lc === code
          ? "bg-tsg-gold text-tsg-deep"
          : "text-tsg-muted-cream hover:text-tsg-off-white";
      return '<button type="button" data-tsg-lang="'.concat(
        esc(code),
        '" aria-pressed="',
        pressed,
        '" class="rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide ',
        cls,
        '">',
        esc(lbl),
        "</button>",
      );
    }).join("");

    var embed = mapEmbedLc(lc);
    var dir = directionsUrl();
    var hrs = SITE.hours
      .map(function (slot) {
        return '<tr><th scope="row" class="py-3 pr-4 align-top font-medium text-tsg-off-white sm:w-[54%]">'.concat(
          esc(slot.days),
          "</th><td class=\"py-3 align-top text-tsg-muted-cream\">",
          esc(slot.time),
          "</td></tr>",
        );
      })
      .join("");
    var tabs = MENU_TABS_LOC.map(function (t) {
      var active = t.id === "shawarma";
      return '<button type="button" role="tab" tabindex="'.concat(
          active ? "0" : "-1",
          '" id="menu-tab-',
          t.id,
          '" data-menu-tab="',
          t.id,
          '" aria-selected="',
          active ? "true" : "false",
          '" aria-controls="menu-grid" class="relative isolate whitespace-nowrap overflow-hidden rounded-full px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] transition-colors md:text-[0.875rem] ',
          active
            ? "text-tsg-deep bg-tsg-gold shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "text-tsg-gold hover:text-tsg-gold-hover border border-tsg-gold/45",
          '"><span class="relative z-10">',
          esc(t.label),
          "</span></button>",
        );
    }).join("");
    var deskNav = NAV_LINKS.slice(1)
      .map(function (l) {
        return '<li><a href="'.concat(
          l.href,
          '" data-nav-desktop class="nav-link rounded-full px-4 py-2 font-sans text-[0.8rem] font-medium uppercase tracking-[0.13em] text-tsg-off-white xl:text-[0.813rem] hover:text-tsg-gold-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-tsg-gold outline-offset-4" data-nav-id="',
          l.id,
          '">',
          esc(l.label),
          "</a></li>",
        );
      })
      .join("");
    var mobLinks = NAV_LINKS.map(function (l) {
      return '<a href="'.concat(
        l.href,
        '" class="js-scroll-nav min-h-[52px] rounded-2xl border border-white/[0.07] px-5 py-[0.9375rem] font-sans text-sm font-semibold uppercase tracking-[0.14em] text-tsg-off-white hover:border-tsg-gold/55 hover:bg-white/[0.04] hover:text-tsg-gold" data-nav-id="',
        l.id,
        '">',
        esc(l.label),
        "</a>",
      );
    }).join("");
    var dockBtns = NAV_LINKS.slice(1)
      .map(function (l) {
        return '<button type="button" data-dock-hash="'.concat(
          l.href,
          '" class="dock-btn flex flex-1 flex-col items-center gap-1 rounded-full px-1 py-2 motion-safe:transition-colors text-tsg-muted-cream hover:text-tsg-off-white" data-nav-id="',
          l.id,
          '">',
          dockSvg(l.id),
          '<span class="font-sans text-[9px] font-semibold uppercase tracking-[0.08em] sm:text-[10px]">',
          esc(dockShort(l.id)),
          "</span></button>",
        );
      })
      .join("");
    var drawerBlock =
      '<div id="mob-overlay" class="fixed inset-0 z-[620] hidden bg-[rgba(26,48,38,0.96)] backdrop-blur-md lg:hidden" aria-hidden="true"></div>' +
      '<div id="mobile-nav-drawer" class="fixed inset-y-0 right-0 z-[621] hidden w-[min(100%,408px)] flex-col overflow-y-auto border-l border-[rgba(197,160,89,0.18)] bg-[rgba(26,48,38,0.995)] px-8 pb-10 pt-10 shadow-[0_26px_60px_rgba(0,0,0,0.52)] lg:hidden" role="dialog" aria-modal="true" aria-labelledby="drawer-title">' +
      '<div class="flex items-start justify-between gap-5">' +
      '<p id="drawer-title" class="font-serif text-2xl text-tsg-off-white">'.concat(esc(SITE.name), "</p>") +
      '<button type="button" id="mob-close" aria-label="'.concat(
        esc(s.drawerClose),
        '" class="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-tsg-gold/45">✕</button></div><div class="mt-6 flex flex-wrap gap-1" role="group" aria-label="',
      ) +
      esc(s.langGroupAria) +
      '">' +
      langBtns +
      '</div>' +
      '<nav aria-label="'.concat(
        esc(s.navMobSections),
        '" class="mt-11 flex flex-1 flex-col gap-3">',
      ) +
      mobLinks +
      '</nav>' +
      '<a href="#contact" class="js-scroll-nav mt-auto inline-flex min-h-[52px] shrink-0 w-full items-center justify-center rounded-full bg-tsg-gold font-sans text-sm font-semibold uppercase tracking-[0.14em] text-tsg-deep hover:bg-tsg-gold-hover mt-10">' +
      esc(s.reserveDrawer) +
      "</a></div>" +
      '<nav aria-label="'.concat(
        esc(s.navDockAria),
        '" class="fixed bottom-5 left-1/2 z-[480] flex w-[min(100vw-22px,420px)] -translate-x-1/2 pb-[calc(env(safe-area-inset-bottom,0px)+4px)] lg:hidden">',
      ) +
      '<div class="flex w-full items-stretch rounded-full border border-[rgba(197,160,89,0.16)] bg-[rgba(33,58,46,0.92)] px-2 py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">' +
      dockBtns +
      "</div></nav><main>";
    var shellMain =
      '<section id="hero" role="banner" aria-label="' +
      esc(s.heroBannerAria) +
      '" class="relative flex min-h-svh w-full items-center justify-center overflow-hidden"><img src="' +
      esc(typeof IMAGE_ASSETS !== "undefined" ? IMAGE_ASSETS.hero_bg : "") +
      '" alt="" class="absolute inset-0 h-full w-full object-cover" fetchpriority="high" decoding="async" /><div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-[#1A302699]"></div><div class="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-20 text-center md:px-10"><p class="mb-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-tsg-gold md:text-sm">' +
      esc(s.heroKicker) +
      '</p><h1 class="font-serif text-[2.625rem] font-light leading-[1.1] tracking-tight text-tsg-off-white md:text-6xl lg:text-7xl xl:text-8xl">The Step Garden</h1><p class="mt-5 max-w-md font-sans text-base font-light tracking-wide text-tsg-muted-cream md:text-lg">' +
      esc(s.heroTagline) +
      '</p><div class="mt-10 flex w-full max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center"><a href="#contact" class="js-scroll-nav inline-flex h-12 w-full min-w-[200px] items-center justify-center rounded-full bg-tsg-gold px-8 font-sans text-sm font-semibold uppercase tracking-wider text-tsg-deep shadow-[0_8px_40px_rgba(0,0,0,0.35)] hover:bg-tsg-gold-hover sm:w-auto">' +
      esc(s.reserveHero) +
      '</a><a href="#menu" class="js-scroll-nav inline-flex h-12 w-full min-w-[200px] items-center justify-center rounded-full border border-tsg-gold/80 px-8 font-sans text-sm font-medium uppercase tracking-wider hover:border-tsg-gold sm:w-auto">' +
      esc(s.menuHero) +
      '</a></div></div><a href="#about" class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-tsg-off-white/80" aria-label="' +
      esc(s.scrollAboutAria) +
      '"><span class="font-sans text-[10px] uppercase tracking-[0.2em]">' +
      esc(s.scrollDown) +
      '</span><span class="scroll-indicator-chevron"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/></svg></span></a></section><div id="main-content" tabindex="-1">' +
      '<section id="about" aria-labelledby="about-heading" class="border-t border-white/[0.08] bg-tsg-deep"><div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-[4.5rem] md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20 xl:py-[7.5rem]"><article class="order-2 flex flex-col justify-center space-y-8 lg:order-1"><p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-tsg-gold">' +
      esc(s.aboutLabel) +
      '</p><h2 id="about-heading" class="font-serif text-[2rem] leading-tight text-tsg-off-white md:text-[2.5rem] lg:text-[3.25rem]">' +
      esc(s.aboutTitle) +
      '</h2><div class="space-y-6 font-sans text-[0.9375rem] leading-relaxed md:text-base text-tsg-muted-cream"><p class="text-tsg-off-white/90">' +
      esc(s.aboutP1) +
      '</p><p>' +
      esc(s.aboutP2) +
      '</p><p>' +
      esc(s.aboutP3) +
      '</p></div><p class="font-sans text-sm text-tsg-muted-cream">' +
      esc(s.aboutFoot) +
      '</p><p><a href="#menu" class="js-scroll-nav inline-flex items-center gap-1 font-sans text-sm font-medium uppercase tracking-wider text-tsg-gold hover:text-tsg-gold-hover">' +
      esc(s.aboutLink) +
      '<span aria-hidden="true">→</span></a></p></article><div class="order-1 lg:order-2"><div class="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-sm border border-[rgba(197,160,89,0.25)] lg:mx-0 lg:mr-12 lg:max-w-none shadow-[8px_8px_0_0_rgba(197,160,89,0.25)]"><img src="' +
      esc(typeof IMAGE_ASSETS !== "undefined" ? IMAGE_ASSETS.about_image : "") +
      '" alt="' +
      esc(s.aboutImgAlt) +
      '" class="h-full w-full object-cover"/><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.28)_85%)]"></div><span class="absolute bottom-4 left-4 rounded-full border border-[rgba(197,160,89,0.18)] bg-[rgba(33,58,46,0.55)] px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] backdrop-blur-md">' +
      esc(s.sinceBadge) +
      '</span></div></div></div></section>' +
      '<section id="menu" aria-labelledby="menu-heading" class="border-t border-white/[0.12] bg-tsg-deep">' +
      '<div class="mx-auto max-w-7xl px-6 py-[4.5rem] md:px-12 lg:px-20 xl:py-[7.5rem]"><header class="max-w-3xl space-y-4"><p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-tsg-gold">' +
      esc(s.menuLabel) +
      '</p><h2 id="menu-heading" class="font-serif text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-tight text-tsg-off-white">' +
      esc(s.menuTitle) +
      '</h2><p class="font-sans text-sm md:text-base text-tsg-muted-cream leading-relaxed max-w-xl">' +
      esc(s.menuIntro) +
      '</p></header><div class="mt-10 lg:mt-14 flex gap-3 overflow-x-auto pb-4 menu-tablist" role="tablist" aria-label="' +
      esc(s.menuTabsAria) +
      '">' +
      tabs +
      '</div><div id="menu-grid" role="tabpanel" aria-labelledby="menu-tab-shawarma" class="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(280px,100%),1fr))]"></div></div></section>' +
      '<section id="gallery" aria-labelledby="gallery-heading" class="border-t border-white/[0.12] bg-[#15261e]"><div class="mx-auto max-w-7xl px-6 py-[4.5rem] md:px-12 lg:px-20 xl:py-[7.5rem]"><header class="max-w-3xl space-y-4"><p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-tsg-gold">' +
      esc(s.galleryLabel) +
      '</p><h2 id="gallery-heading" class="font-serif text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] text-tsg-off-white">' +
      esc(s.galleryTitle) +
      '</h2><p class="font-sans text-sm md:text-base text-tsg-muted-cream leading-relaxed">' +
      esc(s.galleryIntro) +
      '</p></header><div class="gallery-columns mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">' +
      GALLERY_DATA.map(function (g, i) {
        return galleryFig(lc, g, i);
      }).join("") +
      "</div></div></section>" +
      '<footer id="contact" aria-labelledby="contact-heading" class="relative border-t border-white/[0.12] bg-[#132119]">' +
      '<div class="mx-auto flex max-w-7xl flex-col px-6 py-[4.25rem] md:px-12 lg:gap-24 lg:px-20 xl:py-[7.25rem]">' +
      '<div class="grid gap-16 lg:grid-cols-[minmax(280px,1fr)_minmax(340px,0.94fr)] lg:gap-20">' +
      '<section aria-label="' +
      esc(s.navContact) +
      '" class="space-y-9">' +
      '<header class="space-y-4"><p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-tsg-gold">' +
      esc(s.contactLabel) +
      '</p>' +
      '<h2 id="contact-heading" class="font-serif text-[2rem] md:text-[2.75rem] leading-tight text-tsg-off-white">' +
      esc(SITE.name) +
      '</h2><p class="font-sans text-sm text-tsg-muted-cream max-w-xl">' +
      esc(s.contactIntro) +
      "</p></header>" +
      '<div class="space-y-3 rounded-2xl border border-[rgba(197,160,89,0.18)] bg-[rgba(33,58,46,0.54)] px-6 py-6 backdrop-blur-md"><h3 class="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-tsg-muted-cream">' +
      esc(s.hoursTitle) +
      "</h3>" +
      '<table class="w-full"><caption class="sr-only">' +
      esc(s.hoursCaption) +
      '</caption><tbody class="divide-y divide-white/[0.07]">' +
      hrs +
      "</tbody></table></div>" +
      '<div class="space-y-7">' +
      '<div><h3 class="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-tsg-muted-cream">' +
      esc(s.addrTitle) +
      '</h3>' +
      '<p class="font-sans text-base text-tsg-off-white" id="site-address-readable">' +
      esc(SITE.address) +
      '</p>' +
      '<button type="button" id="copy-address" class="mt-4 inline-flex min-h-[48px] items-center rounded-full border border-tsg-gold/45 px-6 py-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] hover:border-tsg-gold hover:bg-white/[0.04]">' +
      esc(s.copyBtn) +
      '</button>' +
      '<p class="mt-3 font-sans text-xs text-tsg-muted-cream" id="copy-hint"></p>' +
      '<p id="copy-live" class="sr-only" aria-live="polite"></p></div>' +
      '<div><h3 class="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-tsg-muted-cream">' +
      esc(s.phoneTitle) +
      '</h3>' +
      '<a href="' +
      SITE.phoneHref +
      '" class="font-serif text-2xl lg:text-[1.45rem] tracking-tight text-tsg-gold hover:text-tsg-gold-hover">' +
      esc(SITE.phoneDisplay) +
      "</a></div>" +
      '<div aria-labelledby="social-h"><h3 id="social-h" class="text-[0.7rem] mb-4 font-semibold uppercase tracking-[0.18em] text-tsg-muted-cream">' +
      esc(s.socialTitle) +
      "</h3>" +
      '<div class="flex flex-wrap gap-6">' +
      '<a href="' +
      esc(SITE.social.instagram) +
      '" target="_blank" rel="noreferrer noopener" class="inline-flex h-14 min-w-[132px] items-center justify-center gap-2 rounded-full border border-white/[0.12] px-5 text-[0.688rem] font-semibold uppercase tracking-[0.15em] hover:border-tsg-gold/65 hover:text-tsg-gold hover:-translate-y-0.5">' +
      '<svg width="21" height="21" fill="none" aria-hidden="true"><rect x="3.65" y="3.65" width="16.7" height="16.7" rx="5" stroke="currentColor" stroke-width="1.45"/><circle cx="12" cy="12" r="4.3" stroke="currentColor" stroke-width="1.45"/><circle cx="16" cy="8" r="0.8" fill="currentColor"/></svg> Instagram</a>' +
      "</div></div></section>" +
      '<div class="flex flex-col gap-5 lg:sticky lg:top-28">' +
      '<div class="relative overflow-hidden rounded-2xl border border-[rgba(197,160,89,0.22)]">' +
      '<iframe title="' +
      esc(s.mapIframeTitle) +
      '" loading="lazy" class="map-frame h-[260px] w-full lg:h-[380px] grayscale-[32%] contrast-[1.12]" src="' +
      embed +
      '"></iframe>' +
      '<a href="' +
      dir +
      '" target="_blank" rel="noreferrer" class="absolute bottom-8 left-1/2 inline-flex min-h-[52px] max-w-[240px] w-[calc(100%-3rem)] -translate-x-1/2 transform items-center justify-center rounded-full bg-tsg-gold px-6 text-[0.7rem] font-semibold uppercase text-tsg-deep hover:bg-tsg-gold-hover">' +
      esc(s.routeBtn) +
      "</a></div>" +
      '<p class="text-xs text-tsg-muted-cream">' +
      esc(s.mapNote) +
      "</p></div></div>" +
      '<div class="mt-14 border-t border-white/[0.1] pb-16 pt-10 text-center xl:pb-10"><p class="font-sans text-xs uppercase tracking-[0.17em] text-tsg-muted-cream">© ' +
      String(new Date().getFullYear()) +
      " The Step Garden · " +
      esc(s.footerRights) +
      ' · <a href="mailto:' +
      esc(SITE.email) +
      '" class="text-tsg-off-white underline decoration-tsg-gold underline-offset-[6px]">' +
      esc(SITE.email) +
      "</a></p></div></div></footer></div></main>";
    var headerBlock =
      ""
        .concat(
          '<header id="site-header" class="fixed inset-x-0 top-0 z-[500] border-b border-transparent motion-safe:transition-[background,border-color,box-shadow] motion-safe:duration-300"><div class="mx-auto flex h-[var(--site-nav-height,76px)] max-w-7xl items-center gap-4 px-4 sm:px-6 md:gap-8 md:px-12 lg:px-20"><button type="button" data-scroll-top class="hidden cursor-pointer rounded-xl px-3 py-2 text-left font-serif text-[0.9375rem] uppercase tracking-[0.16em] text-tsg-off-white hover:text-tsg-gold lg:inline lg:text-[1.05rem]" aria-label="',
          esc(s.brandHomeAria),
          '">The Step Garden</button><button type="button" data-scroll-top class="inline-flex cursor-pointer lg:hidden" aria-label="',
          esc(s.brandShortAria),
          '"><span class="font-serif text-lg leading-none tracking-[0.12em] text-tsg-off-white">TS<span class="text-tsg-gold">.</span>G</span></button><nav class="hidden flex-1 justify-center lg:flex" aria-label="',
          esc(s.navDeskAria),
          '"><ul class="flex flex-wrap items-center justify-center gap-2">',
        )
        .concat(
          deskNav,
          '</ul></nav><div class="hidden shrink-0 items-center gap-0.5 rounded-full border border-tsg-gold/25 bg-white/[0.03] p-0.5 md:flex" role="group" aria-label="',
          esc(s.langGroupAria),
          '">',
          langBtns,
          '</div><div class="ml-auto flex shrink-0 items-center gap-2 sm:gap-3"><a href="#contact" class="js-scroll-nav rounded-full bg-tsg-gold px-[1rem] py-2.5 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-tsg-deep shadow-[0_8px_26px_rgba(0,0,0,0.32)] hover:bg-tsg-gold-hover xl:px-[1.125rem] xl:text-[0.725rem]">',
          esc(s.reserveNav),
          '</a><button type="button" id="mob-toggle" aria-expanded="false" aria-controls="mobile-nav-drawer" aria-label="',
          esc(s.burgerOpen),
          '" class="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-tsg-gold/35 bg-white/[0.03] text-tsg-off-white lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="1.55" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg></button></div></div></header>',
        );
    return headerBlock + drawerBlock + shellMain;
  }

  var activeCat = /** @type {string} */ ("shawarma");

  /** @param {string} cat @param {Lang} lang */
  function renderMenu(cat, lang) {
    activeCat = cat;
    var wrap = qs("#menu-grid");
    if (!wrap) return;
    var lc = normalizeLang(lang);
    var filtered = MENU_ITEMS.filter(function (m) {
      return m.category === cat;
    });
    wrap.innerHTML = filtered
      .map(function (m) {
        return dishHtml(lc, m);
      })
      .join("");
    wrap.setAttribute("aria-labelledby", "menu-tab-".concat(cat));
  }

  /** @param {string} navId */
  function setNavActive(navId) {
    qsa(".nav-link[data-nav-id]").forEach(function (el) {
      var id = el.getAttribute("data-nav-id");
      if (id === navId) {
        el.classList.add("text-tsg-gold");
        el.setAttribute("aria-current", "page");
      } else {
        el.classList.remove("text-tsg-gold");
        el.removeAttribute("aria-current");
      }
    });
    qsa(".dock-btn[data-nav-id]").forEach(function (btn) {
      var id = btn.getAttribute("data-nav-id");
      btn.setAttribute(
        "aria-current",
        id === navId ? "page" : "false",
      );
      btn.classList.toggle("text-tsg-gold", id === navId);
      btn.classList.toggle(
        "drop-shadow-[0_0_9px_rgba(197,160,89,0.35)]",
        id === navId,
      );
      btn.classList.toggle(
        "text-tsg-muted-cream hover:text-tsg-off-white",
        id !== navId,
      );
    });
    qsa(".js-scroll-nav[data-nav-id]").forEach(function (mob) {
      var id = mob.getAttribute("data-nav-id");
      if (id === navId) mob.setAttribute("aria-current", "page");
      else mob.removeAttribute("aria-current");
    });
  }

  /** @returns {string} */
  function spySection() {
    var y = window.scrollY || document.documentElement.scrollTop;
    var ids = SITE_BRAIN.navSectionIds;
    var current = "hero";
    if (y < 64) {
      current = "hero";
    } else {
      var cursor = y + SITE_BRAIN.scrollLookup;
      for (var i = 1; i < ids.length; i++) {
        /** @type {HTMLElement | null} */
        var node = document.getElementById(ids[i]);
        if (
          node &&
          cursor >= node.offsetTop - 12
        ) {
          current = ids[i];
        }
      }
    }
    setNavActive(current);
    /** @type {HTMLElement | null} */
    var head = qs("#site-header");
    if (head) {
      head.classList.toggle(
        "border-b border-white/[0.08]",
        y > 72,
      );
      head.classList.toggle(
        "bg-[rgba(26,48,38,0.92)]",
        y > 72,
      );
      head.classList.toggle("backdrop-blur-md", y > 72);
      head.classList.toggle(
        "shadow-[0_10px_40px_rgba(0,0,0,0.28)]",
        y > 72,
      );
    }
    return current;
  }

  /** @param {HTMLElement} drawer @param {HTMLElement} overlay */
  function attachDrawer(drawer, overlay) {
    var toggle = qs("#mob-toggle");
    /** @returns {HTMLElement | null} */
    function closeBtn() {
      return qs("#mob-close");
    }
    function openMob() {
      drawer.classList.remove("hidden");
      drawer.classList.add("flex");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      toggle && toggle.setAttribute("aria-expanded", "true");
      var c = closeBtn();
      setTimeout(function () {
        return c && c.focus();
      }, 50);
      window.addEventListener("keydown", onEsc);
    }
    function closeMob() {
      drawer.classList.add("hidden");
      drawer.classList.remove("flex");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
      toggle && toggle.setAttribute("aria-expanded", "false");
      window.removeEventListener("keydown", onEsc);
    }
    /** @param {KeyboardEvent} e */
    function onEsc(e) {
      if (e.key === "Escape") closeMob();
    }
    toggle &&
      toggle.addEventListener("click", function () {
        if (drawer.classList.contains("hidden")) openMob();
        else closeMob();
      });
    overlay.addEventListener("click", closeMob);
    drawer.querySelector("#mob-close") &&
      drawer
        .querySelector("#mob-close")
        /** @type {HTMLElement} */
        .addEventListener("click", closeMob);
    return closeMob;
  }

  /**
   * Вкладки меню: делегирование click и keydown на контейнер `[role="tablist"]`
   * после рендера; порядок категорий и id берутся из DOM, не из кэша menuTabs.
   * @param {HTMLElement} tablist
   * @param {Lang} menuLang
   */
  function bindTabs(tablist, menuLang) {
    var lc = normalizeLang(menuLang);

    /** @returns {string[]} */
    function tabIdsFromDom() {
      return qsa('[role="tab"][data-menu-tab]', tablist)
        .map(function (t) {
          return t.getAttribute("data-menu-tab") || "";
        })
        .filter(Boolean);
    }

    /** @param {string} cat @param {boolean} [focus] */
    function activate(cat, focus) {
      var tabs = qsa('[role="tab"]', tablist);
      tabs.forEach(function (t) {
        var id = t.getAttribute("data-menu-tab") || "";
        var on = id === cat;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        t.classList.remove(
          "text-tsg-deep",
          "tab-active",
          "bg-tsg-gold",
          "shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
          "border",
          "border-tsg-gold/45",
          "hover:text-tsg-gold-hover",
        );
        t.classList.add("rounded-full");
        if (on) {
          t.classList.add(
            "text-tsg-deep",
            "bg-tsg-gold",
            "shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
          );
          t.classList.remove("border", "border-tsg-gold/45");
        } else {
          t.classList.add(
            "text-tsg-gold",
            "hover:text-tsg-gold-hover",
            "border",
            "border-tsg-gold/45",
          );
        }
      });
      renderMenu(cat, lc);
      if (focus !== false) {
        var el = qs("#menu-tab-".concat(cat));
        el &&
          typeof el.focus === "function" &&
          el.focus({ preventScroll: true });
      }
    }

    tablist.addEventListener("click", function (e) {
      var el = /** @type {EventTarget} */ (e.target);
      var node = el instanceof Element ? el : null;
      var t = node
        ? node.closest('[role="tab"][data-menu-tab]')
        : null;
      if (!t || !tablist.contains(t)) return;
      activate(t.getAttribute("data-menu-tab") || "", true);
    });

    tablist.addEventListener("keydown", function (e) {
      var ids = tabIdsFromDom();
      if (!ids.length) return;
      var ix = ids.indexOf(activeCat);
      if (ix < 0) ix = 0;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        var d = e.key === "ArrowRight" ? 1 : -1;
        var next = ids[(ix + d + ids.length) % ids.length];
        activate(next, true);
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        activate(ids[0], true);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        activate(ids[ids.length - 1], true);
      }
    });

    activate("shawarma", false);
  }

  function galleryIo() {
    if (prefersReducedMotion()) {
      qsa(".gallery-item").forEach(function (el) {
        el.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting)
            /** @type {HTMLElement} */ (en.target).classList.add(
              "opacity-100",
              "translate-y-0",
            );
        });
      },
      {
        threshold: 0.08,
        rootMargin: "-10%",
      },
    );
    qsa(".gallery-item").forEach(function (el) {
      return io.observe(el);
    });
  }

  /** @type {HTMLElement | null} */
  var mount = qs("#tsg-root");
  if (!mount) return;

  /** Lenis экземпляр (глобально, не пересоздаётся при смене языка). */
  /** @type {any} */
  var lenisInstance = null;
  var lightboxPriorFocus = /** @type {HTMLElement | null} */ (null);

  function openLightbox(fullSrc, altText) {
    var wrap = qs("#tsg-lightbox");
    var im = /** @type {HTMLImageElement | null} */ (qs("#tsg-lightbox-img"));
    var closeBtn = qs("#tsg-lightbox-close");
    if (!wrap || !im) return;
    lightboxPriorFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    im.src = fullSrc || "";
    im.alt = altText || "";
    wrap.classList.remove("hidden");
    wrap.classList.add("flex");
    wrap.setAttribute("aria-hidden", "false");
    document.body.classList.add("tsg-lb-open");
    if (lenisInstance && typeof lenisInstance.stop === "function") {
      lenisInstance.stop();
    }
    if (closeBtn && typeof closeBtn.focus === "function") closeBtn.focus();
  }

  function closeLightbox() {
    var wrap = qs("#tsg-lightbox");
    var im = /** @type {HTMLImageElement | null} */ (qs("#tsg-lightbox-img"));
    if (!wrap) return;
    wrap.classList.add("hidden");
    wrap.classList.remove("flex");
    wrap.setAttribute("aria-hidden", "true");
    document.body.classList.remove("tsg-lb-open");
    if (im) {
      im.removeAttribute("src");
      im.alt = "";
    }
    if (lenisInstance && typeof lenisInstance.start === "function") {
      lenisInstance.start();
    }
    if (
      lightboxPriorFocus &&
      typeof lightboxPriorFocus.focus === "function"
    ) {
      lightboxPriorFocus.focus();
    }
    lightboxPriorFocus = null;
  }

  var lightboxDocBound = false;
  function bindLightboxDocumentOnce() {
    if (lightboxDocBound) return;
    lightboxDocBound = true;
    document.addEventListener("click", function (e) {
      var lb = qs("#tsg-lightbox");
      if (!lb || lb.classList.contains("hidden")) return;
      var t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest("#tsg-lightbox-close")) {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (t === lb) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      var lb = qs("#tsg-lightbox");
      if (!lb || lb.classList.contains("hidden")) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    });
  }

  bindLightboxDocumentOnce();

  var scrollSpyQueued = false;
  function queueScrollSpy() {
    if (scrollSpyQueued) return;
    scrollSpyQueued = true;
    requestAnimationFrame(function () {
      spySection();
      scrollSpyQueued = false;
    });
  }

  if (!prefersReducedMotion()) {
    var LenisCtor =
      typeof window !== "undefined" ? window.Lenis : undefined;
    if (typeof LenisCtor === "function") {
      document.documentElement.classList.add("lenis");
      lenisInstance = new LenisCtor({
        duration: 1.06,
        smoothWheel: true,
      });
      lenisInstance.on("scroll", queueScrollSpy);
      function lenisFrame(t) {
        lenisInstance.raf(t);
        requestAnimationFrame(lenisFrame);
      }
      requestAnimationFrame(lenisFrame);
    }
  }
  if (!lenisInstance) {
    window.addEventListener("scroll", queueScrollSpy, { passive: true });
  }

  /** @type {() => void} */
  var closeMobFnRef = function () {};
  var mountClickBound = false;

  function copyAddressHandler() {
    var s = stringsOf(CURRENT_LANG);
    var addrEl = qs("#site-address-readable");
    var text =
      (addrEl && addrEl.textContent.trim()) ||
      getSiteData(CURRENT_LANG).address;
    var copyHint = qs("#copy-hint");
    var copyLive = qs("#copy-live");
    var done = function () {
      if (s && copyHint) copyHint.textContent = s.copyOk;
      if (s && copyLive) copyLive.textContent = s.copyLiveOk;
      setTimeout(function () {
        if (copyLive) copyLive.textContent = "";
      }, 3000);
    };
    var fail = function () {
      if (s && copyHint) copyHint.textContent = s.copyFail;
    };
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        if (copyPlainTextFallback(text)) done();
        else fail();
      });
      return;
    }
    if (copyPlainTextFallback(text)) done();
    else fail();
  }

  function initInteractiveUi() {
    /** @type {HTMLElement | null} */
    var drawer = qs("#mobile-nav-drawer");
    /** @type {HTMLElement | null} */
    var overlay = qs("#mob-overlay");
    closeMobFnRef =
      drawer && overlay ? attachDrawer(drawer, overlay) : function () {};

    var tablistRoot = qs('[role="tablist"]');
    if (tablistRoot) bindTabs(tablistRoot, CURRENT_LANG);

    if (!mountClickBound) {
      mountClickBound = true;
      /** Делегирование: язык, якоря, копирование адреса, док — без прямых listener на каждой кнопке. */
      mount.addEventListener("click", function (e) {
        var topBtn = e.target.closest("[data-scroll-top]");
        if (topBtn) {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion() ? "auto" : "smooth",
          });
          history.replaceState(null, "", "#hero");
          setNavActive("hero");
          return;
        }
        var gl = e.target.closest("[data-tsg-gallery-open]");
        if (gl && mount.contains(gl)) {
          e.preventDefault();
          var gsrc = gl.getAttribute("data-tsg-gallery-src");
          var galt = gl.getAttribute("data-tsg-gallery-alt") || "";
          if (gsrc) openLightbox(gsrc, galt);
          return;
        }
        var langBtn = e.target.closest("[data-tsg-lang]");
        if (langBtn) {
          e.preventDefault();
          updateUI(langBtn.getAttribute("data-tsg-lang") || "uk");
          return;
        }
        if (e.target.closest("#copy-address")) {
          e.preventDefault();
          copyAddressHandler();
          return;
        }
        var dock = e.target.closest(".dock-btn");
        if (dock) {
          var h = dock.getAttribute("data-dock-hash");
          if (!h || h.charAt(0) !== "#") return;
          var sid = h.slice(1);
          /** @type {HTMLElement | null} */
          var tgt = document.getElementById(sid);
          if (tgt && !prefersReducedMotion())
            tgt.scrollIntoView({ behavior: "smooth", block: "start" });
          else tgt && tgt.scrollIntoView({ block: "start" });
          return;
        }
        if (e.target.closest(".js-scroll-nav")) {
          setTimeout(closeMobFnRef, 0);
        }
      });
    }
  }

  /**
   * Центральный цикл языка/UI: язык документа → метаданные → перерисовка shell → заново навесить UX.
   * @param {unknown} raw
   */
  function updateUI(raw) {
    var lang = normalizeLang(raw);
    CURRENT_LANG = lang;
    persistLang(lang);
    document.documentElement.setAttribute(
      "lang",
      lang === "uk" ? "uk" : lang,
    );
    syncDocumentChrome(lang);
    var html = buildShell(lang);
    if (!html) return;
    document.body.style.overflow = "";
    mount.innerHTML = html;
    initInteractiveUi();
    galleryIo();
    /** @type {HTMLElement | null} */
    var iframeMap = qs(".map-frame");
    if (iframeMap && prefersReducedMotion())
      iframeMap.classList.remove("grayscale-[32%]", "contrast-[1.12]");
    spySection();
  }

  updateUI(readStoredLang());
})();
