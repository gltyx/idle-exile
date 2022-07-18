/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Recruit Guardian": "招募守护者",
    "Recruit Hierophant": "招募教皇",
    "Recruit Inquisitor": "招募审判官",
    "Recruit Juggernaut": "招募剑圣",
    "Recruit Melvin": "招募梅尔文",
    "Recruit Necromancer": "招募死灵法师",
    "Recruit Occultist": "招募神秘学家",
    "Recruit Pathfinder": "招募探路者",
    "Recruit Raider": "招募掠夺者",
    "Recruit Saboteur": "招募破坏者",
    "Recruit Slayer": "招募杀手",
    "Recruit The Artificer": "招募工匠",
    "Recruit The Singularity": "招募奇点",
    "Recruit Trickster": "招募骗子",
    "Reddit:": "Reddit:",
    "Redeemer's Exalted Orb": "救赎者的尊贵宝珠",
    "Redeemer's Exalted Orb:": "救赎者的尊贵宝珠：",
    "Regal Orb:": "富豪宝珠：",
    "Reroll Ascendant": "重投上升",
    "Reroll Assassin": "重投刺客",
    "Reroll Berserker": "重投狂战士",
    "Reroll Champion": "重投冠军",
    "Reroll Chieftain": "重投酋长",
    "Reroll Deadeye": "重投死眼",
    "Reroll Elementalist": "重投元素使",
    "Reroll Gladiator": "重卷角斗士",
    "Reroll Guardian": "重投守护者",
    "Reroll Hierophant": "重投圣职者",
    "Reroll Inquisitor": "重投审判官",
    "Reroll Juggernaut": "重投主宰",
    "Reroll Melvin": "重卷梅尔文",
    "Reroll Necromancer": "重投死灵法师",
    "Reroll Occultist": "重投神秘主义者",
    "Reroll Pathfinder": "重投探路者",
    "Reroll Raider": "重投攻略",
    "Reroll Saboteur": "重卷破坏者",
    "Reroll Slayer": "重投杀手",
    "Reroll Trickster": "重投骗子",
    "Research +2 Gem Wand": "研究 +2 宝石魔杖",
    "Research 21/20% Gem": "研究 21/20% 宝石",
    "Research 30% Vaal Regalia": "研究 30% Vaal Regalia",
    "Research a crafting method to unlock it.": "研究一种制作方法来解锁它。",
    "Research Chaos Helmet": "研究混沌头盔",
    "Research Cold Helmet": "研究冷盔",
    "Research Cost:": "研究费用：",
    "Research Fire Helmet": "研究消防头盔",
    "Research Flask": "研究烧瓶",
    "Research Helmet Enchant": "研究头盔附魔",
    "Research Lightning Helmet": "研究闪电头盔",
    "Resonators & Fossils": "谐振器和化石",
    "Resonators:": "谐振器：",
    "Rune Charm": "符文护身符",
    "Saboteur": "破坏者",
    "Sale Price: 10 Chaos": "售价：10混沌",
    "Sale Price: 100 Chaos": "售价：100混沌",
    "Sale Price: 25 Chaos": "售价：25混沌",
    "Sale Price: 250 Chaos": "售价：250混沌",
    "Sale Price: 40 Chaos": "售价：40混沌",
    "Sale Price: 50 Chaos": "售价：50混沌",
    "Scorched:": "烧焦：",
    "Sell Currency": "卖出货币",
    "Serrated:": "锯齿状：",
    "Shuddering:": "颤栗：",
    "Silver Coin:": "银币：",
    "Simple Sextant:": "简单的六分仪：",
    "Slayer": "杀手",
    "Socketed Attacks have -15 to Total Mana Cost": "插槽攻击的总法力消耗 -15",
    "Socketed Gems have 15% reduced Mana Reservation": "此物品上的宝石的魔力保留降低 15%",
    "Spend Sulphite to traverse the mines.": "花费亚硫酸盐来穿越矿井。",
    "Stacked Deck:": "堆叠甲板：",
    "Sulphite Cost:": "亚硫酸盐成本：",
    "The Artificer": "工匠",
    "The goal is to dominate the economy within a league by recruiting players to your guild.": "目标是通过招募玩家加入你的公会来主导联盟内的经济。",
    "The hideout warrior.": "隐匿战士。",
    "The Singularity": "奇点",
    "Theorycrafting (Upgrade Efficiency: x": "理论制造（升级效率：x",
    "This project is not in any way affiliated with Grinding Gear Games or Path of Exile. It's a fan-made web game.": "该项目与 Grinding Gear Games 或流放之路没有任何关联。这是一个粉丝制作的网页游戏。",
    "timeline": "时间线",
    "Titanium Spirit Shield": "钛灵盾",
    "Toggle the slider to sell your currency.": "切换滑块以出售您的货币。",
    "Total": "总计",
    "Total Crafted:": "总制作：",
    "Total Mirrored:": "总镜像：",
    "Total Sulphite:": "总亚硫酸盐：",
    "trending_up": "趋势向上",
    "Trickster": "骗子",
    "Upgrade": "升级",
    "Use Crusader's Exalted Orb": "使用十字军的尊贵宝珠",
    "Use Hunter's Exalted Orb": "使用猎人的尊贵宝珠",
    "Use Redeemer's Exalted Orb": "使用救赎者的尊贵宝珠",
    "Use the resources that the guild farms to produce high valued items.": "使用公会农场的资源来生产高价值的物品。",
    "Use Warlord's Exalted Orb": "使用督军的尊贵宝珠",
    "Vaal Orb:": "瓦尔宝珠：",
    "Warlord's Exalted Orb": "督军的尊贵宝珠",
    "Warlord's Exalted Orb:": "督军的尊贵宝珠：",
    "Welcome, Exile": "欢迎，流放者",
    "You can apply an additional Curse": "您可以应用额外的诅咒",
    "Raider": "掠夺者",
    "Recover 5% of Energy Shield when you Block": "格挡时恢复 5% 的能量护盾",
    "Recruit Ascendant": "招募上升者",
    "Recruit Assassin": "招募刺客",
    "Recruit Berserker": "招募狂战士",
    "Recruit Champion": "招募冠军",
    "Recruit Chieftain": "招募酋长",
    "Recruit Deadeye": "招募死神",
    "Recruit Elementalist": "招募元素师",
    "Recruit Exiles, Delvers, Currency Flippers, and Crafters. Dominate the economy and upgrade your guild members.": "招募流放者、挖掘者、货币翻转者和工匠。主宰经济并升级您的公会成员。",
    "Recruit Gladiator": "招募角斗士",
    "Links": "链接",
    "Links:": "链接：",
    "Lucent:": "朗讯：",
    "Main": "主要的",
    "Map currency upgrades give a global boost to Efficiency, but also when consumed every 0.5 seconds provide an increased drop rate of currency.": "地图货币升级可提高全球效率，但每 0.5 秒消耗一次时，货币的掉落率也会提高。",
    "Material Design Lite": "材料设计精简版",
    "Metallic:": "金属：",
    "Mirror Fee:": "镜像费：",
    "Mirror of Kalandra:": "卡兰德拉之镜：",
    "Morbid Suit": "病态套装",
    "Necromancer": "死灵法师",
    "Occultist": "神秘主义者",
    "Oos-PoE": "OO-PoE",
    "Orb of Alchemy:": "炼金术宝珠：",
    "Orb of Alteration:": "改变之球：",
    "Orb of Annulment:": "废止宝珠：",
    "Orb of Augmentation:": "增强宝珠：",
    "Orb of Chance:": "机会之球：",
    "Orb of Fusing:": "融合宝珠：",
    "Orb of Regret:": "遗憾之珠：",
    "Orb of Scouring:": "精炼之球：",
    "Orb of Transmutation:": "蜕变宝珠：",
    "Pathfinder": "探路者",
    "Perfect:": "完美的：",
    "Play Time:": "播放时间：",
    "Potent:": "强效：",
    "Powerful:": "强大的：",
    "Prime Sextant:": "主六分仪：",
    "Prime:": "主要的：",
    "Primitive:": "原始：",
    "Prismatic:": "棱镜：",
    "Pristine:": "原始：",
    "Quad Stash Tab Required": "需要 Quad Stash 选项卡",
    "Fossils:": "化石：",
    "Frigid:": "寒冷：",
    "Gear": "齿轮",
    "Gear Crafting": "齿轮制作",
    "Gemcutter's Prism:": "宝石切割者棱镜：",
    "General": "一般的",
    "General Mechanics Info:": "一般力学信息：",
    "gesture": "手势",
    "Gladiator": "角斗士",
    "Glassblower's Bauble:": "吹玻璃工的小玩意：",
    "Guardian": "监护人",
    "Guild": "公会",
    "help_outline": "帮助大纲",
    "Hierophant": "教皇",
    "home": "家",
    "Hunter's Exalted Orb": "猎人的尊贵宝珠",
    "Hunter's Exalted Orb:": "猎人的尊贵宝珠：",
    "Idle Exile": "空闲流放",
    "Idle Exile is an incremental game based within the Path of Exile universe.": "Idle Exile 是一款基于流放之路宇宙的增量游戏。",
    "Info": "信息",
    "Inquisitor": "审判官",
    "Instagram:": "Instagram：",
    "It's the start of a new league in Path of Exile, you decide to create a guild with the sole intention of sharing resources and growing as a team.": "这是流放之路新联盟的开始，您决定创建一个公会，其唯一目的是共享资源并作为一个团队成长。",
    "Items are mirrored every 60 seconds, the mirror fee increases by 5 Exalted every time.": "物品每60秒镜像一次，每次镜像费用增加5声望。",
    "Jagged:": "锯齿状：",
    "Jewelled Foil": "宝石箔",
    "Jeweller's Orb:": "珠宝商的宝珠：",
    "Juggernaut": "剑圣",
    "Level:": "等级：",
    "error": "错误",
    "Eternal Orb:": "永恒宝珠：",
    "Exalted": "尊贵的",
    "Exalted Orb:": "尊贵宝珠：",
    "Exile Efficiency is added to Upgrade Efficiency when rolling for currency. Increasing your Efficiency generates more currency.": "当滚动货币时，流放效率被添加到升级效率中。提高效率会产生更多货币。",
    "EXP:": "经验：",
    "face": "脸",
    "Faceted:": "刻面：",
    "Flask": "烧瓶",
    "Flipping": "翻转",
    "Elementalist": "元素师",
    "Enchanted Helmet": "魔法头盔",
    "Enchanted:": "附魔：",
    "Enemies you Kill Explode, dealing 3% of their Life as Physical Damage": "你杀死的敌人会爆炸，造成 3% 生命的物理伤害",
    "Delve Stash Tab Required": "需要 Delve Stash 选项卡",
    "Delvin' Melvin": "德尔文'梅尔文",
    "Delving": "钻研",
    "Dense:": "稠密：",
    "Description": "描述",
    "Divine Orb:": "神圣宝珠：",
    "Efficiency": "效率",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Efficiency:": "效果：",
    "Energy Shield: ": "能量护盾：",
    "Flipping Speed Multiplier: ": "翻转速度乘数：",
    "Quality: ": "质量：",
    "Levels: ": "等级：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);