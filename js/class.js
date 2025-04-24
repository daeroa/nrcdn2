function deterministicHash(name) {
		    let hash = 0;
		    for (let i = 0; i < name.length; i++) {
		        hash = (hash << 5) - hash + name.charCodeAt(i);
		        hash |= 0;
		    }
		    return Math.abs(hash);
		}
		
		function createSeededRandom(seed) {
		    return function() {
		        seed = (seed * 9797 + 100193) % 233280;
		        return seed / 233280;
		    };
		}
		
		// 数据配置
		const africaLevels = [
		    {
		        name: '农场主',
		        history: '掌握庄园所有权，拥有最高权力和财富',
		        intros: [
		            '每天无所事事，就知道坐享其成收租金',
		            '今天随机挑选幸运奴隶表演胸口碎大石',
		            '坐在别墅阳台，喝着红酒，看美美哒夕阳',
		            '庄园里奴隶的生死，只在我一念之间',
		            '哎呀，你怎么知道我每天数钱数到手抽筋呀'
		        ]
		    },
		    {
		        name: '监工',
		        history: '农场主亲信，主要监督奴隶工作',
		        intros: [
		            '每天优哉游哉地监督奴隶摘棉花',
		            '今天的下午茶是奴隶闻不到的仰望星空派',
		            '享受的伙食待遇比奴隶好不知道多少倍',
		            '每周汇报重点：如何用奴隶血泪写诗朗诵',
		            '不听话？铜哨子吵死你，皮鞭子抽死你'
		        ]
		    },
		    {
		        name: '奴隶',
		        history: '无人身自由，被迫从事体力劳动',
		        intros: [
		            '手茧厚到可以表演空手接白刃',
		            '凌晨三点，全自动人形棉花收割机，启动',
		            '最大的愿望是吃顿饱饭',
		            '碎布条收集进度99%',
		            '每天被监工呼来来来来来，喝去去去去去'
		        ]
		    },
		    {
		        name: '黑奴',
		        history: '最低等的奴隶，从事最危险工作',
		        intros: [
		            '免费体验健身房VIP套餐：太阳棉花浴',
		            '擦汗舞姿不够优美？获得监工爱的拍拍',
		            '脚上的镣铐迟早送我破伤风啊',
		            '牛棚星空房，附赠天然淋浴系统',
		            '请假已驳回：烧到39度不影响摘棉花哦'
		        ]
		    },
		    {
		        name: '佃户',
		        history: '租种土地的农民，收成交大部分地租',
		        intros: [
		            '攒钱进度：0/1000E（土地贷了解一下）',
		            '给孩子的礼物：迷你锄头套装',
		            '一代传三代的祖传锄头正在申请非遗保护',
		            '天天梦想攒钱把农场主砸死',
		            '冬天生存指南：呼吸减肥法+光合作用'
		        ]
		    }
		];
		
		const indiaLevels = [
		    {
		        name: '婆罗门',
		        history: '祭司贵族，掌握宗教和知识权力',
		        intros: [
		            '今天主持祭祀不小心又收了头大象',
		            '经典注释权≈宇宙级VIP修改权限',
		            '每天定时穿着白袍在神庙长廊走秀',
		            '吃贡品吃到痛风，真是甜蜜的烦恼哟',
		            '在刹帝利行礼的时候思考：今晚吃什么'
		        ]
		    },
		    {
		        name: '刹帝利',
		        history: '军事行政贵族，负责统治管理',
		        intros: [
		            '战象座驾已升级真皮座椅+星空顶',
		            '军事决策就像选盲盒一样刺激',
		            '我的黄金佩剑可是镶嵌宝石的',
		            '地方官员定期进贡搞得不好意思了',
		            '上百名仆人VS我一个人'
		        ]
		    },
		    {
		        name: '吠舍',
		        history: '平民阶层，从事工商业生产',
		        intros: [
		            '祖传店铺必杀技：买香料送衣服',
		            '商队生存指南：如何在沙漠找WIFI',
		            '婚礼预算：清空三代人财产',
		            '神庙捐款自动扣费服务已开通',
		            '遇土匪时大喊：我老板是刹帝利！'
		        ]
		    },
		    {
		        name: '首陀罗',
		        history: '地位最低，无任何权利，专为高级种姓服役',
		        intros: [
		            '闪现技能满级，躲避攻击点满',
		            '吃饭？我们靠光合作用（战术后仰）',
		            '孩子教育规划：垃圾桶分类速成班',
		            '跑到垃圾桶旁边睡结果垃圾桶长脚跑了',
		            '今日KPI：活着（0/1）'
		        ]
		    }
		];
		
		export function rank(name) {
		    const hash = deterministicHash(name);
		    const rand = createSeededRandom(hash);
		    
		    // 非洲等级计算
		    const africaIndex = Math.floor(rand() * africaLevels.length);
		    const africa = africaLevels[africaIndex];
		    const africaIntro = africa.intros[Math.floor(rand() * africa.intros.length)];
		    
		    // 印度等级计算
		    const indiaIndex = Math.floor(rand() * indiaLevels.length);
		    const india = indiaLevels[indiaIndex];
		    const indiaIntro = india.intros[Math.floor(rand() * india.intros.length)];
		    
		    // 更新显示
        /*
		    document.getElementById('result').classList.remove('hidden');
		    document.getElementById('africaTitle').textContent = africa.name;
		    document.getElementById('africaHistory').textContent = `${africa.history}`;
		    document.getElementById('africaIntro').textContent = africaIntro;
		    
		    document.getElementById('indiaTitle').textContent = india.name;
		    document.getElementById('indiaHistory').textContent = `${india.history}`;
		    document.getElementById('indiaIntro').textContent = indiaIntro;
        */
        // @ts-ignore
        return {
          "aName":`${africa.name}`,
          "aHist":`${africa.history}`,
          "aIntr":`${africaIntro}`,
          "iName":`${india.name}`,
          "iHist":`${india.history}`,
          "iIntr":`${indiaIntro}`
        }
		}
