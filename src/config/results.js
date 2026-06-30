const asset = (name) => `./public/assets/ructipng/${name}.png`;

export const results = {
  LEADER: {
    id: "LEADER",
    name: "领导",
    english: "LEADER",
    levels: { school: "high", food: "high", social: "high", study: "high" },
    description: "LEADER计划当年就是因为有你才叫LEADER计划，上人大就是为了当leader，大学四年你的人生简直是全能ACE：能学、能玩、能吃、能爱，ddl来了你能扛，活动来了你能上，饭局来了你也不缺席。请问这个世界上还有什么是你不会的？",
    blessing: "祝你未来的人生依然充满精力，也依然有带着众人向前的勇气。愿你继续发光，也记得偶尔把自己放在第一位。",
    imagePlaceholder: asset("LEADER")
  },
  EATER: {
    id: "EATER",
    name: "老吃家",
    english: "EATER",
    levels: { school: "high", food: "high", social: "high", study: "low" },
    description: "你不是在吃饭，就是在去吃饭的路上。北区、东区、品园、中区，哪个窗口稳定，哪个档口踩雷，哪个饭点人最少，你心里都有一张人大美食热力图，中国人民吃饭大学，有你才能吃好饭。",
    blessing: "祝你未来走到哪里，都能吃到热乎的饭，少吃点鸭子的腿，多遇到对味的人。愿你越嚼越香，有滋有味。",
    imagePlaceholder: asset("EATER")
  },
  HEDGEHOG: {
    id: "HEDGEHOG",
    name: "小刺猬",
    english: "HEDGEHOG",
    levels: { school: "low", food: "high", social: "low", study: "high" },
    description: "你是一只草丛的小刺猬，安安静静地存在在RUC的一个角落，不一定爱热闹，也不一定爱表达，但你有自己的节奏、自己的边界、自己的小宇宙。靠近你的人会发现：刺下面其实是很柔软的一颗心。",
    blessing: "愿你一路坚硬，也一路柔软。",
    imagePlaceholder: asset("HEDGEHOG")
  },
  RUCAT: {
    id: "RUCAT",
    name: "人咪",
    english: "RUCAT",
    levels: { school: "high", food: "low", social: "high", study: "low" },
    description: "小猫，小猫，你是一只可爱的小猫。在公教，在品园，在每一个美好的地方，最爱的事是趁没人的时候出来晒太阳。你看起来懒懒的，其实很会感受生活；你不一定时时刻刻冲锋，但你总能找到让自己舒服的一小块阳光。",
    blessing: "祝你以后也能找到属于自己的小窝，吃得安心，睡得踏实，被世界温柔摸摸头。",
    imagePlaceholder: asset("RUCAT")
  },
  MODEL: {
    id: "MODEL",
    name: "国表社栋",
    english: "MODEL",
    levels: { school: "high", food: "low", social: "high", study: "high" },
    description: "国表社栋，说的就是你，身上有一种老派的风格。你身上有一种稳定优秀感。别人还在纠结要不要开始，你已经把事情推进到了第三版；别人还在说随便，你已经把表格、材料、汇报和人生规划都安排得明明白白。",
    blessing: "祝你未来继续优秀，也继续自由。愿你不只成为别人眼里的标准答案，也成为自己心里最喜欢的那个人。",
    imagePlaceholder: asset("MODEL")
  },
  MOM: {
    id: "MOM",
    name: "鹿宝妈",
    english: "MOM",
    levels: { school: "high", food: "low", social: "low", study: "low" },
    description: "人北清师的发明者，全网最大民间招生办，会溺爱鹿大一切的鹿宝妈。别管对你怎么样，鹿大这孩子就是好，QS拿来当厕纸用，要看就看A+学科。你骂可以，别人骂不行；你吐槽可以，外人不许插嘴。还好鹿大有你，一生有你。",
    blessing: "祝你永远保有这份热烈又可爱的偏爱。愿你带着人大给你的底气出发，也带着自己的温柔走向更大的世界。",
    imagePlaceholder: asset("MOM")
  },
  DEFENDER: {
    id: "DEFENDER",
    name: "答辩人",
    english: "SHIT-MAKER",
    levels: { school: "high", food: "low", social: "low", study: "high" },
    description: "你是答辩人，是学术热爱者。课程汇报、论文开题、实习面试，每次你都carry全场。你可能嘴上说“我要完了”，手上却还在改“最终版3.0”。你不一定热爱学术，但你真的很会把痛苦做成成果。",
    blessing: "祝你未来被世界温柔通过。愿你所有努力都有回声，所有答辩都顺利上岸。",
    imagePlaceholder: asset("SHIT-MAKER")
  },
  DOVE: {
    id: "DOVE",
    name: "明德鸽",
    english: "DOVE",
    levels: { school: "high", food: "high", social: "low", study: "low" },
    description: "你是明德广场的鸽子，人大校园里最自由的生物。每天起床吃点东西，然后自由飞翔。下辈子我要是能活成你就好了。",
    blessing: "祝你继续自由飞翔，偶尔降落也很好。愿你以后不用被ddl追着跑，也能慢慢飞到想去的地方。",
    imagePlaceholder: asset("DOVE")
  },
  JUST_RUCER_1: {
    id: "JUST_RUCER_1",
    name: "人大人",
    english: "JUST RUCER",
    levels: { school: "low", food: "high", social: "high", study: "high" },
    description: "恭喜你获得“你只是个人大人”人格。不要不舒服，只是个人大人就够了。吃过北区的椰子鸡，路过东风的草房，学过脱了皮的TOPE，在一些普通的日子里，成为了珍贵的自己。归来，你可以继续做最好的自己。",
    blessing: "祝福你前程似锦，祝福你晴空万里。常回家看看，仅是一个人大人就好。",
    imagePlaceholder: asset("RUCER")
  },
  SPEAKER: {
    id: "SPEAKER",
    name: "小喇叭",
    english: "SPEAKER",
    levels: { school: "low", food: "high", social: "high", study: "low" },
    description: "深夜在小喇叭跟人对骂，白天刷小红书艾特全寝出征。你是人大信息基础设施，八卦集散地，哪个学院有活动，哪个群又热闹了，哪里有瓜，哪里有局，你总能以神秘速度抵达现场。",
    blessing: "祝你未来永远有人可聊，有事可讲，有热闹可奔赴，也永远被人真诚惦记。",
    imagePlaceholder: asset("SPEAKER")
  },
  KFCER: {
    id: "KFCER",
    name: "吮指鸡",
    english: "KFCER",
    levels: { school: "high", food: "high", social: "low", study: "high" },
    description: "来学校的第一年，你在求是石旁合照，冥冥之中暗示了你在人大的命运：吃。人大校园里靠美食和意志力双重续命之人。别人崩溃靠倾诉，你崩溃靠疯狂星期四。你看起来不声不响，其实已经默默把饭吃了、书看了、任务做了。",
    blessing: "祝你未来无论多忙，都能好好吃饭。愿你既有啃下难题的韧劲，也有奖励自己一顿好饭的快乐。",
    imagePlaceholder: asset("KFCER")
  },
  JUST_RUCER_2: {
    id: "JUST_RUCER_2",
    name: "人大人",
    english: "JUST RUCER",
    levels: { school: "low", food: "high", social: "low", study: "low" },
    description: "恭喜你获得“你只是个人大人”人格。不要不舒服，只是个人大人就够了。吃过北区的椰子鸡，路过东风的草房，学过脱了皮的TOPE，在一些普通的日子里，成为了珍贵的自己。归来，你可以继续做最好的自己。",
    blessing: "祝福你前程似锦，祝福你晴空万里。常回家看看，只是一个人大人就好。",
    imagePlaceholder: asset("RUCER")
  },
  FDUER: {
    id: "FDUER",
    name: "复旦栋梁",
    english: "FDUER",
    levels: { school: "low", food: "low", social: "high", study: "high" },
    description: "不会是某校派来的卧底吧？人大峨眉峰，会平等地吐槽所有RUC的地方，但其实也挺爱的，RUC的辱追粉，非你莫属了。你偶尔说“这地方不行”，手上却把履历刷得很漂亮；你心在远方，但青春里也确实有一块地方留给了人大。",
    blessing: "祝你奔向更远的地方时，也能记得自己从哪里出发。愿你既有不满足的野心，也有回头看时的温柔。",
    imagePlaceholder: asset("FDUER")
  },
  REDNOTER: {
    id: "REDNOTER",
    name: "大红人",
    english: "REDNOTER",
    levels: { school: "low", food: "low", social: "high", study: "low" },
    description: "小红书简介挂着RUC本硕，学校里无人不知晓。你可能不是最卷的，也不是最爱吃的，但你一定是最会出现的。活动现场有你，朋友圈有你，合照边缘有你，甚至别人聊天时也会突然提到你。",
    blessing: "祝你未来继续闪亮登场，也拥有真正属于自己的舞台。愿你被更多人看见，也被真正懂你的人珍惜。",
    imagePlaceholder: asset("REDNOTER")
  },
  GOD: {
    id: "GOD",
    name: "学神",
    english: "GOD",
    levels: { school: "low", food: "low", social: "low", study: "high" },
    description: "你不是来上大学的，你是来给大学一点小小震撼的。别人还在问“这节课考不考”，你已经在思考这个问题背后的理论脉络。你不一定高调，也不一定爱社交，但只要进入学习状态，就像明德楼自动亮灯，安静但强大。",
    blessing: "祝你未来继续向上生长，也别忘了偶尔抬头看看风景。愿你的聪明有用武之地，你的努力有温柔回报。",
    imagePlaceholder: asset("GOD")
  },
  MOUSE: {
    id: "MOUSE",
    name: "鼠鼠",
    english: "MOUSE",
    levels: { school: "low", food: "low", social: "low", study: "low" },
    description: "阴暗地爬行在明德地下，阴暗地爬行在东风，阴暗地爬行在北区食堂一楼，阴暗地爬行在集体浴室，阴暗地遇到不冲厕所的人……但鼠鼠不是废物，鼠鼠只是太累了。能活到毕业，已经是一场伟大的胜利。",
    blessing: "再幸运一点好吗。愿你以后少一点被催促，多一点被理解；少一点阴暗爬行，多一点阳光照进来。慢慢来，也可以抵达很远的地方。",
    imagePlaceholder: asset("MOUSE")
  },
  TONGXIAN: {
    id: "TONGXIAN",
    name: "通县人",
    english: "TONGXIANER",
    isEasterEgg: true,
    levels: null,
    description: "通县人来凑什么热闹？明年毕业再来测。",
    blessing: "祝你未来每一次奔赴都不再辛苦，每一段路都有人同行。",
    imagePlaceholder: asset("TONGXIAN")
  }
};
