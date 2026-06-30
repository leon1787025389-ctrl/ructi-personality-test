export const questions = [
  {
    id: "school_1",
    dimension: "school",
    title: "招生季，你在小红书刷到一篇帖子：",
    scene: "“RUC也算Top3？不会是什么野鸡大学吧？”评论区已经吵成一片，你准备怎么办？",
    options: [
      { id: "A", text: "鹿宝妈火速出征：“野鸡？教育部直属、985、211、双一流了解一下。鹿大只是退出野鸡排行，仍是枝头凤凰。”", scores: { school: 1 }, tags: { mom: 1 } },
      { id: "B", text: "理性但阴阳：“是否Top3可以讨论，野鸡大学就不必要了。互联网发言也需要一点基本检索能力。”", scores: { school: 1 }, tags: { model: 1 } },
      { id: "C", text: "转发给朋友：“笑死，尼鹿又被互联网开除top3籍了。”", scores: {}, tags: { speaker: 1 } },
      { id: "D", text: "直接划走：“我对这种优绩主义的战斗都过敏。”", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "school_2",
    dimension: "school",
    title: "某大凤突然锐评R大学生",
    scene: "“R大学生不行，混吃。”全场空气凝固，你的第一反应是？",
    options: [
      { id: "A", text: "精神上先打一套鹿大拳：可以批评，但不能把一群学生按在地上扫射。", scores: { school: 1 }, tags: { mom: 1 } },
      { id: "B", text: "冷静录音，准备发网上谴责。", scores: { school: 1 }, tags: { model: 1 } },
      { id: "C", text: "偷偷低头发群：“速来，讲座现场大凤破防。”", scores: {}, tags: { speaker: 1 } },
      { id: "D", text: "默默缩小存在感：“别骂了别骂了，我只是来混学分的。”", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "school_3",
    dimension: "school",
    title: "以下都是R大的好老师。",
    scene: "你好感度最高的是谁？",
    options: [
      { id: "A", text: "阿祚", scores: { school: 1, food: 1 }, tags: { eater: 1 } },
      { id: "B", text: "阿刚", scores: { school: 1 }, tags: { mom: 1 } },
      { id: "C", text: "阿马", scores: { school: 1 }, tags: { model: 1 } },
      { id: "D", text: "阿林", scores: {}, tags: { fduer: 1 } },
      { id: "E", text: "没有。我是个冷漠的人。", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "food_1",
    dimension: "food",
    title: "你突然得知：",
    scene: "你最爱的“鹅腿阿姨”，其实卖的是鸭腿。你的第一反应是？",
    options: [
      { id: "A", text: "“鸭腿怎么了？我爱的是那口味道，不是户口本上的物种。”", scores: { food: 1 }, tags: { eater: 1 } },
      { id: "B", text: "“我需要冷静一下。我的青春、我的排队、我的鹅生观，都受到了冲击。”", scores: { food: 1 }, tags: { kfcer: 1 } },
      { id: "C", text: "“所以R大食堂自研鹅腿，才是真正的技术路线。”", scores: { food: 1, school: 1 }, tags: { mom: 1 } },
      { id: "D", text: "“塌吧，塌吧，反正我已经不相信任何饭了。”", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "food_2",
    dimension: "food",
    title: "北区食堂突然宣布：",
    scene: "“今日限量供应人大自研烤鹅腿”你准备怎么办？",
    options: [
      { id: "A", text: "提前十分钟到场排队，顺便给朋友实时播报库存。", scores: { food: 1 }, tags: { eater: 1 } },
      { id: "B", text: "“都让开，我要亲自检验鹿大突破鹅腿卡脖子技术的成果。”", scores: { food: 1, school: 1 }, tags: { mom: 1 } },
      { id: "C", text: "等别人先吃完评价，再决定要不要出门。", scores: {}, tags: { rucat: 1 } },
      { id: "D", text: "“排队？不了，我宁愿回宿舍吃面包。”", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "food_3",
    dimension: "food",
    title: "毕业前最后一次饭局，朋友说：",
    scene: "“今天必须吃点有纪念意义的。”你会选择？",
    options: [
      { id: "A", text: "“听我的，按人大美食路线走。”", scores: { food: 1 }, tags: { eater: 1 } },
      { id: "B", text: "“点炸鸡/烤腿/奶茶，毕业可以悲伤，但嘴不能受委屈。”", scores: { food: 1 }, tags: { kfcer: 1 } },
      { id: "C", text: "“我主要负责拍照发朋友圈，你们负责点菜。”", scores: {}, tags: { rednoter: 1 } },
      { id: "D", text: "“我不挑，能坐下就行。”", scores: {}, tags: { rucat: 1 } }
    ]
  },
  {
    id: "social_1",
    dimension: "social",
    title: "你正在刷人大小红书，突然刷到一篇热帖：",
    scene: "“求问RUC到底值不值得来？评论区欢迎真实就读体验。”下面已经出现了学长学姐、准大一、路人、辱追粉和招生办精神股东。你准备怎么办？",
    options: [
      { id: "A", text: "立刻写一大段真实体验：学习、食堂、宿舍、老师、就业、情绪价值，全都安排上。", scores: { social: 1 }, tags: { rednoter: 1 } },
      { id: "B", text: "不急着评论，先把帖子转给朋友：“速来，这个评论区有点精彩。”", scores: { social: 1 }, tags: { speaker: 1 } },
      { id: "C", text: "默默收藏，想看大家怎么说，但不想留下互联网脚印。", scores: {}, tags: { rucat: 1 } },
      { id: "D", text: "划走。我的建议是：别在小红书上寻找大学真相。", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "social_2",
    dimension: "social",
    title: "你打开RUC小喇叭/树洞，看到一条匿名投稿：",
    scene: "“有没有人知道某学院某活动到底怎么回事？”评论区已经开始拼图、辟谣、补充、吃瓜。你会？",
    options: [
      { id: "A", text: "迅速整合信息：“目前已知1、2、3，未知4，大家先别急着审判。”", scores: { social: 1 }, tags: { speaker: 1 } },
      { id: "B", text: "立刻私聊消息源：“这个事真的假的？有无前情提要？”", scores: { social: 1 }, tags: { rednoter: 1 } },
      { id: "C", text: "潜水看完，默默退出。知道太多并不一定快乐。", scores: {}, tags: { hedgehog: 1 } },
      { id: "D", text: "看不懂，退出。匿名论坛的信息密度让我CPU过载。", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "social_3",
    dimension: "social",
    title: "学生组织/班委/项目组突然在群里发消息：",
    scene: "“今晚需要几个人临时帮忙，最好能联系到各班同学/老师/场地/物料。”群里沉默了三分钟。你会？",
    options: [
      { id: "A", text: "直接接管：“我来拉群，我来对接，我知道找谁。”", scores: { social: 1 }, tags: { leader: 1 } },
      { id: "B", text: "先不当负责人，但立刻提供三个人名、两个联系方式和一个可行方案。", scores: { social: 1 }, tags: { speaker: 1 } },
      { id: "C", text: "很想帮，但想到要和十个人沟通，开始默默后退。", scores: {}, tags: { rucat: 1 } },
      { id: "D", text: "假装没看见。不是不善良，是我的社交电量只剩1%。", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "study_1",
    dimension: "study",
    title: "毕业论文提交前夜，你打开文档，发现文件名已经变成：",
    scene: "“最终版”“最终版2”“最终真版”“这个真交”“杀了我吧版”。你会？",
    options: [
      { id: "A", text: "逐条检查目录、注释、参考文献、格式，甚至还导出PDF看了一遍。", scores: { study: 1 }, tags: { model: 1 } },
      { id: "B", text: "一边崩溃一边改：“我不知道我在写什么，但我知道我还能再救一下。”", scores: { study: 1 }, tags: { defender: 1 } },
      { id: "C", text: "打开文档，沉默三分钟，关闭文档，开始刷手机。", scores: {}, tags: { dove: 1 } },
      { id: "D", text: "把文件名改成“随便吧”，然后阴暗地爬去睡觉。", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "study_2",
    dimension: "study",
    title: "小组作业截止前一天，群里突然安静得像立德楼凌晨三点。",
    scene: "你准备怎么办？",
    options: [
      { id: "A", text: "直接拉表分工、催进度、整合材料：“不管了，我来救。”", scores: { study: 1 }, tags: { leader: 1 } },
      { id: "B", text: "默默打开PPT和Word，把没人做的部分补上：“我恨，但我做。”", scores: { study: 1 }, tags: { defender: 1 } },
      { id: "C", text: "在群里发一句：“大家现在进度怎么样啦？”然后等待奇迹。", scores: {}, tags: { just_rucer: 1 } },
      { id: "D", text: "假装没看见，祈祷另一个倒霉蛋先站出来。", scores: {}, tags: { dove: 1 } }
    ]
  },
  {
    id: "study_3",
    dimension: "study",
    title: "毕业论文答辩现场，老师微笑着说：",
    scene: "“这个问题我简单问一下。”你知道，事情不简单。你会？",
    options: [
      { id: "A", text: "稳住，先感谢老师，再开始分点回答，像已经预判过这个问题。", scores: { study: 1 }, tags: { god: 1, model: 1 } },
      { id: "B", text: "大脑空白三秒，但嘴已经开始自动生成：“谢谢老师，这个问题非常重要……”", scores: { study: 1 }, tags: { defender: 1 } },
      { id: "C", text: "开始反思人生：“我为什么要写这个题，我为什么要来这里。”", scores: {}, tags: { dove: 1 } },
      { id: "D", text: "灵魂离席，只剩肉体在答辩现场点头。", scores: {}, tags: { mouse: 1 } }
    ]
  },
  {
    id: "easter_1",
    title: "如果可以不离开RUC，你最想住在",
    scene: "",
    options: [
      { id: "A", text: "必须是品园/知行CBD。", scores: {}, tags: {} },
      { id: "B", text: "离不开东风楼，东风是我的白月光。", scores: {}, tags: {} },
      { id: "C", text: "想住在干净的静园，就这么一辈子就好。", scores: {}, tags: {} },
      { id: "D", text: "大运河畔，通州校区，北京最美，世界一流。", scores: {}, tags: { tongxian: 1 }, isEasterEgg: true }
    ]
  }
];
