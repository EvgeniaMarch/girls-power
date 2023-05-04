const bcrypt = require("bcrypt");
const { User, Question } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate(
      [
        {
          login: "Petya",
          password: await bcrypt.hash("123", 10),
          email: "petya@mail.ru",
          score: 0,
          Question: [
            {
              user_id: 1,
              title: "Великие женщины",
              question:
                "Первая в мире женщина-космонавт, Герой Советского Союза, кандидат технических наук, профессор и 10-й космонавт мира.",
              answer: "Валентина Терешкова",
              score: 100,
            },
            {
              user_id: 1,
              title: "Великие женщины",
              question:
                "В 20 лет  она занималась тем, что ухаживала за нищими, обездоленными, больными и прокаженными. Эта женщина, изменившая мир в лучшую сторону, получила Нобелевскую премию мира, а также была причислена к лику блаженных католической церкви.  В одиночку она основала Конгрегацию Милосердия.",
              answer: "Мать Тереза",
              score: 200,
            },
            {
              user_id: 1,
              title: "Великие женщины",
              question:
                "Фактически первая женщина-премьер-министр со столь высоким авторитетом, способностью руководить страной и всесторонне участвовать во всех политических и экономических процессах. При ней экономика страны росла в три раза быстрее обычного, а сама она стала образцом женщины-политика, дав шанс пробиться в высшие эшелоны власти многим другим представительницам женского пола.",
              answer: "Маргарет Тэтчер",
              score: 300,
            },
            {
              user_id: 1,
              title: "Великие женщины",
              question:
                "Она является первой женщиной — нобелевским лауреатом в истории. Совместно с мужем является первооткрывательницей радиоактивности￼и открыла элементы радий  и полоний",
              answer: "Мария Кюри",
              score: 400,
            },
            {
              user_id: 1,
              title: "Великие женщины",
              question:
                "Она являлась популярной в 1930—1940-е годы актрисой кино. Но неожиданно увлекалась новыми способами кодировки сигналов. Оставив карьеру, она полностью ушла в науку, и в результате разработала такой способ передачи данных, который невозможно было заглушить с помощью помех. Ее изобретение спасло множество кораблей флота США во время Второй мировой, а потом легло в основу технологий Wi-Fi и Bluetooth.",
              answer: "Хеди Ламарр",
              score: 500,
            },
            {
              user_id: 1,
              title: "Великие неженщины",
              question:
                "Русский поэт, драматург и прозаик, заложивший основы русского реалистического направления, он был очарован французским языком, за что получил от своих сверстников прозвище «Француз».",
              answer: "Александр Пушкин",
              score: 100,
            },
            {
              user_id: 1,
              title: "Великие неженщины",
              question:
                "Русский революционер, крупный теоретик марксизма, государственный деятель, создатель Российской социал-демократической рабочей партии (большевиков), главный организатор и руководитель Октябрьской революции.",
              answer: "Владимир Ленин",
              score: 200,
            },
            {
              user_id: 1,
              title: "Великие неженщины",
              question:
                "Он наиболее известен как основатель психоанализа, который оказал значительное влияние на психологию, медицину, социологию XX века. Он является создателем теории эдипова комплекса.",
              answer: "Зигмунд Фрейд",
              score: 300,
            },
            {
              user_id: 1,
              title: "Великие неженщины",
              question:
                "Президент ЮАР один из самых известных активистов в борьбе за права человека в период существования апартеида, за что 27 лет сидел в тюрьме. Лауреат Нобелевской премии мира.",
              answer: "Нельсон Мандела",
              score: 400,
            },
            {
              user_id: 1,
              title: "Великие неженщины",
              question:
                "Русский этнограф, антрополог, биолог и путешественник, изучавший коренное население Юго-Восточной Азии, Австралии, в том числе папуасов северо-восточного берега Новой Гвинеи",
              answer: "Миклухо-Маклай",
              score: 500,
            },
            {
              user_id: 1,
              title: "Интересные факты о животных",
              question:
                "Какое животное может двигать глазами в разных направлениях одновременно.",
              answer: "Хамелеон",
              score: 100,
            },
            {
              user_id: 1,
              title: "Интересные факты о животных",
              question: "Единственная собака, у которой язык не розовый.",
              answer: "Чау-Чау",
              score: 200,
            },
            {
              user_id: 1,
              title: "Интересные факты о животных",
              question:
                "Самец данного вида птиц “предлагает” руку и сердце самке, даря ей камень. Если она принимает его, то кладет этот подарок в свое гнездо.",
              answer: "Пингвин",
              score: 300,
            },
            {
              user_id: 1,
              title: "Интересные факты о животных",
              question:
                "Их красивый цвет получается от водорослей, диатомеи и мелких ракообразных, которых они едят, и которые богаты каротином.",
              answer: "Пингвин",
              score: 400,
            },
            {
              user_id: 1,
              title: "Интересные факты о животных",
              question:
                "Какое животное не имеет голосовых связок, поэтому они не может “говорить?",
              answer: "Жираф",
              score: 500,
            },
            {
              user_id: 1,
              title: "Космос",
              question: "Их в космосе больше, чем песчинок на Земле.",
              answer: "Звезды",
              score: 100,
            },
            {
              user_id: 1,
              title: "Космос",
              question:
                "Первый человек, побывавший в открытом космосе — советский космонавт. Как его зовут?",
              answer: "Алексей Леонов",
              score: 200,
            },
            {
              user_id: 1,
              title: "Космос",
              question:
                "Это превосходит нашу планету по размерам в 300 тысяч раз. Примерно такая же разница в размерах у арбуза и сливы.",
              answer: "Солнце",
              score: 300,
            },
            {
              user_id: 1,
              title: "Космос",
              question:
                "Эта планета совершила только один оборот вокруг Солнца с момента своего открытия.",
              answer: "Нептун",
              score: 400,
            },
            {
              user_id: 1,
              title: "Космос",
              question:
                "Самая яркая звезда в космосе, она ярче Солнца примерно в 22 раза.",
              answer: "Сириус",
              score: 500,
            },
            {
              user_id: 1,
              title: "Эмоджи ребусы",
              question:
                "🍎🌳🙅⬇️",
              answer: "Яблоко от яблони недалеко падает",
              score: 100,
            },
            {
              user_id: 1,
              title: "Эмоджи ребусы",
              question:
                "💩👉🏻👑",
              answer: "Из грязи в князи",
              score: 200,
            },
            {
              user_id: 1,
              title: "Эмоджи ребусы",
              question:
                "🧊🛳💥",
              answer: "Титаник",
              score: 300,
            },
            {
              user_id: 1,
              title: "Эмоджи ребусы",
              question:
                "☁️🔨",
              answer: "Достучатся до небес",
              score: 400,
            },
            {
              user_id: 1,
              title: "Эмоджи ребусы",
              question:
                "🎱🛣 6️⃣0️⃣",
              answer: "Трасса 60",
              score: 500,
            },
          ],
        },
      ],
      {
        include: [Question],
      }
    );
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};
