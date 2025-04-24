const luckData = {
    // 运势描述库（可继续扩充）
    fortunes: [
      "紫气东来，福星高照",
      "波澜不惊，稳步前行", 
      "机遇暗藏，伺机而动",
      "贵人相助，事半功倍",
      "小心谨慎，防微杜渐",
      "桃花朵朵，人际和谐",
      "财源广进，投资有利",
      "专注事业，晋升有望",
      "健康为本，劳逸结合",
      "出行顺利，远方有喜",
      "学习进步，考试顺利",
      "家庭和睦，其乐融融",
      "左右逢源，游刃有余",
      "塞翁失马，焉知非福",
      "云开月明，豁然开朗",
      "时运不济，韬光养晦"
    ],
    
    // 宜事项库
    shouldDo: [
      "签约合作", "投资理财", "表白求婚",
      "出差旅行", "健身运动", "学习充电",
      "购置新衣", "拜访贵人", "装修房屋",
      "项目启动", "团队建设", "慈善捐赠",
      "探望长辈", "艺术创作", "探望长辈"
    ],
    
    // 忌事项库
    avoidDo: [
      "冲动消费", "熬夜加班", "与人争执",
      "危险运动", "重大决策", "搬家迁居",
      "投资借贷", "暴饮暴食", "远行出海",
      "购置大件", "美容整形", "法律诉讼",
      "攀比炫耀", "孤注一掷", "代人担保"
    ]
  };
  
export function getluck(username) {
    const today = new Date();
    const baseSeed = hashCode(username + today.toISOString().slice(0,10));
    
    // 为不同部分生成独立种子
    const luck = {
      date: `${today.getFullYear()} ${String(today.getMonth()+1).padStart(2,'0')} ${String(today.getDate()).padStart(2,'0')}`,
      wealth: Math.floor(seededRandom(baseSeed + 1)() * 100),
      love: Math.floor(seededRandom(baseSeed + 2)() * 100),
      career: Math.floor(seededRandom(baseSeed + 3)() * 100),
      fortune: luckData.fortunes[Math.floor(seededRandom(baseSeed + 4)() * luckData.fortunes.length)],
      should: shuffle(luckData.shouldDo, seededRandom(baseSeed + 5)).slice(0,3),
      avoid: shuffle(luckData.avoidDo, seededRandom(baseSeed + 6)).slice(0,3) // 修复点1：独立种子
    };
  
    // 评级计算优化
    const total = luck.wealth + luck.love + luck.career;
    luck.rating = '★'.repeat(Math.round(total / 60)).padEnd(5, '☆');
   
    return `
  【${luck.date}】${username}的今日运势：
  🌸 综合运势：${luck.fortune}
  💰 财运指数：${luck.wealth}（${getProgressBar(luck.wealth)}）
  💖 桃花指数：${luck.love}（${getProgressBar(luck.love)}）
  💼 事业指数：${luck.career}（${getProgressBar(luck.career)}）
  ⭐ 综合评级：${luck.rating}
  
  ✅ 宜：${luck.should.join('、')}
  ❌ 忌：${luck.avoid.join('、')}
  `.trim();
}
  
// 辅助函数
function hashCode(str) {
    return str.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
  
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return () => (x - Math.floor(x));
}
  
function shuffle(arr, rand) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
  
function getProgressBar(value) {
    const filled = '█'.repeat(Math.round(value/10));
    return filled.padEnd(10, '░') + ` ${value}%`;
}
