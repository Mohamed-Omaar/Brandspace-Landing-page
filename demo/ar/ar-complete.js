(() => {
  const extra = {
    /* Shell / navigation / metadata */
    'Grow':'النمو','Manage':'الإدارة','Plan':'التخطيط','Library':'المكتبة','Posts':'المنشورات','Organise':'التنظيم',
    'AI workspace':'مساحة الذكاء الاصطناعي','Measure':'القياس','Workflow':'سير العمل','Platform overview':'نظرة عامة على المنصة',
    'Security':'الأمان','AI infrastructure':'بنية الذكاء الاصطناعي','Content manager':'إدارة المحتوى','Create account':'إنشاء حساب',
    'Reset password':'إعادة تعيين كلمة المرور','Choose a workspace':'اختر مساحة عمل','Legal':'قانوني','Trust':'الثقة','System status':'حالة النظام',
    'Current page':'الصفحة الحالية','Context:':'السياق:','Add knowledge':'إضافة معرفة','English version':'النسخة الإنجليزية',

    /* Social / content */
    'Instagram Business':'إنستغرام للأعمال','Facebook Page':'صفحة فيسبوك','LinkedIn Company':'شركة لينكدإن',
    'Instagram':'إنستغرام','LinkedIn':'لينكدإن','Facebook':'فيسبوك','TikTok':'تيك توك','YouTube':'يوتيوب',
    'OpenAI':'أوبن إيه آي','Anthropic':'أنثروبيك','Google':'جوجل','Stripe':'سترايب',
    'Studio Reel':'ريل الاستوديو','Meet the team':'تعرّف على الفريق','Founder stories':'قصص المؤسس','March education series':'سلسلة مارس التوعوية',
    'Brand photography':'صور العلامة','Product videos':'فيديوهات المنتجات','Logos & marks':'الشعارات والعلامات',
    'Launch story series':'سلسلة قصص الإطلاق','Customer question carousel':'كاروسيل أسئلة العملاء','Behind-the-scenes Reel':'ريل خلف الكواليس',
    'Monthly performance':'الأداء الشهري','Campaign summary':'ملخص الحملة','Channel comparison':'مقارنة القنوات',
    'Waiting for you':'بانتظارك','Changes requested':'تم طلب تعديلات','Approved today':'تم الاعتماد اليوم',
    'Voice & tone':'الصوت والنبرة','Colours & typography':'الألوان والخطوط','Logos & media':'الشعارات والوسائط',
    'A focused working area with clear status and next actions.':'مساحة عمل مركزة بحالة واضحة وخطوات تالية محددة.',
    'Connected to your workspace, permissions and brand settings.':'مرتبطة بمساحة عملك وصلاحياتك وإعدادات علامتك.',
    'Designed now; production data arrives in its approved build phase.':'التصميم جاهز الآن، وتصل بيانات الإنتاج في مرحلة البناء المعتمدة.',
    'A new collection, built for the pace of real life. Thoughtful details, simple choices, and a little more room to breathe.':'مجموعة جديدة صُممت لإيقاع الحياة اليومية. تفاصيل مدروسة، خيارات بسيطة، ومساحة أكبر للراحة.',
    '12 recommendations':'12 توصية','4 changes previewed':'تمت معاينة 4 تعديلات','6 drafts created':'تم إنشاء 6 مسودات','4 channels':'4 قنوات',
    'NEW':'جديد','CHAPTER':'فصل','BUILT':'صُمم','WITH':'بـ','CARE':'عناية','THREE':'ثلاث','IDEAS':'أفكار',
    'BEHIND':'خلف','THE':'الـ','SCENES':'الكواليس','WEEKEND':'نهاية الأسبوع','OFFER':'عرض','MARCH':'مارس','RECAP':'ملخص',
    'MEET':'تعرّف على','TEAM':'الفريق','QUICK':'سريع','GUIDE':'دليل',
    'Mar':'مارس','Jan':'يناير',

    /* Roles, permissions, billing, settings */
    'Full workspace control':'تحكم كامل في مساحة العمل','18 permissions':'18 صلاحية',
    'Everything except billing and ownership':'كل شيء باستثناء الفوترة والملكية','15 permissions':'15 صلاحية',
    'Create, edit and schedule content':'إنشاء المحتوى وتعديله وجدولته','8 permissions':'8 صلاحيات',
    'Review and approve assigned content':'مراجعة المحتوى المعيّن واعتماده','4 permissions':'4 صلاحيات',
    'Analyst':'محلل','View analytics and reports':'عرض التحليلات والتقارير','3 permissions':'3 صلاحيات',
    'Custom role':'دور مخصص','Build the exact access you need':'أنشئ الصلاحيات التي تحتاجها بدقة','Configure':'تهيئة',
    'Subscription':'الاشتراك','Prices awaiting owner decision':'الأسعار بانتظار قرار المالك','Current plan':'الخطة الحالية',
    'Not configured yet':'لم تتم تهيئتها بعد',
    'The entitlement engine is ready. Plan names, prices, quotas and trial terms stay empty until you approve them.':'محرك الاستحقاقات جاهز. تظل أسماء الخطط والأسعار والحدود وشروط التجربة فارغة حتى اعتمادها.',
    'Configure in Control Center':'تهيئة من مركز التحكم','This cycle':'هذه الدورة','Usage':'الاستخدام','Scheduled posts':'المنشورات المجدولة',
    'Team members':'أعضاء الفريق','Storage':'التخزين','Workspace settings':'إعدادات مساحة العمل','Save changes':'حفظ التغييرات',
    'General':'عام','Danger zone':'منطقة حساسة','Workspace name':'اسم مساحة العمل','Timezone':'المنطقة الزمنية',
    'Riyadh · GMT+3':'الرياض · توقيت GMT+3','Workspace description':'وصف مساحة العمل','Our shared marketing workspace.':'مساحة العمل التسويقية المشتركة لفريقنا.',
    'Weekly summary':'الملخص الأسبوعي','Receive a calm summary every Monday':'استلم ملخصًا واضحًا كل يوم اثنين',
    'Publishing alerts':'تنبيهات النشر','Know when a post succeeds or needs attention':'اعرف عندما ينجح المنشور أو يحتاج مراجعة',
    'Approval reminders':'تذكيرات الموافقة','Remind reviewers before deadlines':'ذكّر المراجعين قبل المواعيد النهائية',
    'Inter Bold':'Inter — عريض','64 px':'64 بكسل',

    /* Admin / records */
    'AI model registry':'سجل نماذج الذكاء الاصطناعي','AI usage & margin':'استخدام وهامش الذكاء الاصطناعي',
    'record':'سجل','Operational':'يعمل','Secondary configuration':'إعدادات ثانوية','Previous version':'الإصدار السابق','Locked':'مقفل',
    'Acme Studio':'استوديو أكمي','North Star':'نورث ستار','Luma Retail':'لوما ريتيل','Nova Labs':'نوفا لابس','Orbit Coffee':'أوربت كوفي','Mono Design':'مونو ديزاين',
    'Maha Ahmed':'مها أحمد','Omar Youssef':'عمر يوسف','Lina Nasser':'لينا ناصر','Khaled Adel':'خالد عادل','Sara Samir':'سارة سمير',
    'Mohamed Mostafa':'محمد مصطفى','Sara Ahmed':'سارة أحمد','Youssef Khaled':'يوسف خالد',
    '24 · 3 trials this week':'24 · 3 تجارب هذا الأسبوع','↑ 3 this month':'↑ 3 هذا الشهر',
    'Active · 18 members':'نشط · 18 عضوًا','Trial · 6 members':'تجريبي · 6 أعضاء','Active · 11 members':'نشط · 11 عضوًا',
    '12 today':'12 اليوم','3 awaiting review':'3 بانتظار المراجعة','3 admins':'3 مديرين','Since Jan 2026':'منذ يناير 2026',
    '4 platforms':'4 منصات','Middle East':'الشرق الأوسط','12 Jan 2026':'12 يناير 2026','8 minutes ago':'منذ 8 دقائق',

    /* Public website preview */
    'Calendar, campaigns and approvals.':'التقويم والحملات والموافقات.','Copilot, composer and Design Studio.':'المساعد ومحرر المنشورات واستوديو التصميم.',
    'Every connected social channel.':'كل قنوات التواصل المتصلة.','Learn':'تعلّم','Analytics, reports and recommendations.':'التحليلات والتقارير والتوصيات.',
    'Collaborate':'تعاون','Roles, teams and review flows.':'الأدوار والفرق ومسارات المراجعة.','Brand kit across every tool.':'هوية العلامة عبر كل أداة.',
    'Notify me':'أبلغني','Start exploring':'ابدأ الاستكشاف','Back home':'العودة للرئيسية','Page preview':'معاينة الصفحة',
    'Connect your stack.':'اربط أدواتك.','Designed as one product.':'مصمم كمنتج واحد.','Configuration pending':'التهيئة معلقة',
    'Plan details from Control Center':'تفاصيل الخطة من مركز التحكم','No invented prices or quotas':'لا توجد أسعار أو حدود افتراضية','Full entitlement resolution':'تطبيق كامل للاستحقاقات',
    'Focused experience':'تجربة مركزة','Bilingual by design':'مصمم لدعم لغتين','Clear next actions':'خطوات تالية واضحة','Responsive everywhere':'متجاوب على كل الشاشات',
    'Accessible interactions':'تفاعلات سهلة الوصول','Brand-led visuals':'مرئيات تقودها الهوية','A representative final layout for this public page.':'تصور نهائي ممثل لهذه الصفحة العامة.',

    /* Product map */
    'Tenant isolation, RBAC, sessions, audit and tests':'عزل العملاء، التحكم في الصلاحيات، الجلسات، التدقيق والاختبارات',
    'Configuration, secrets, providers, models and health':'الإعدادات والأسرار والمزوّدون والنماذج وحالة النظام',
    'Workspaces, invitations, team, roles and settings':'مساحات العمل والدعوات والفريق والأدوار والإعدادات',
    'Approved shell, components and responsive direction':'الهيكل والمكونات واتجاه التجاوب المعتمد',
    'Plans, subscriptions, credits and billing':'الخطط والاشتراكات والرصيد والفوترة',
    'Brand profile, voice, goals and brand kit':'ملف العلامة وصوتها وأهدافها وهويتها',
    'Calendar, posts, campaigns, media and approvals':'التقويم والمنشورات والحملات والوسائط والموافقات',
    'Copilot, composer, image and design workflows':'المساعد ومحرر المنشورات ومسارات الصور والتصميم',
    'OAuth accounts, scheduling and safe retries':'حسابات OAuth والجدولة وإعادة المحاولة الآمنة',
    'Channel ingestion, dashboards and reports':'جمع بيانات القنوات ولوحات المعلومات والتقارير',
    'Rules, notifications and recurring workflows':'القواعد والإشعارات ومسارات العمل المتكررة',
    'Email, payments, KMS, rate limits and production':'البريد والمدفوعات وKMS وحدود الطلبات وبيئة الإنتاج',
    'Full product vision':'الرؤية الكاملة للمنتج','Every surface, in one map':'كل واجهات المنتج في خريطة واحدة',
    'This preview shows the final intended experience. “Preview” screens demonstrate the design before their production backend phase.':'تعرض هذه المعاينة التجربة النهائية المستهدفة. شاشات «المعاينة» توضح التصميم قبل مرحلة بناء الخلفية الإنتاجية.',
    'Ready foundations':'أساسات جاهزة','Core product':'المنتج الأساسي','Next build phases':'مراحل البناء التالية','Scale & launch':'التوسع والإطلاق','Later phases':'مراحل لاحقة',
    'How to review':'طريقة المراجعة','Switch between all three experiences':'تنقل بين التجارب الثلاث',
    'Everything a business uses to plan, create, publish and measure.':'كل ما تستخدمه الشركة للتخطيط والإنشاء والنشر والقياس.',
    'Everything you use to manage the platform, customers and configuration.':'كل ما تحتاجه لإدارة المنصة والعملاء والإعدادات.',
    'The full marketing, pricing, resources and account experience.':'تجربة التسويق والأسعار والموارد والحساب بالكامل.',

    /* Brand Brain residuals */
    '12 facts · complete':'12 معلومة · مكتمل','4 segments · complete':'4 شرائح · مكتمل','6 active offers':'6 عروض نشطة','8 approved':'8 معتمدة','Q4 memory':'ذاكرة الربع الرابع',
    '+14 this month':'+14 هذا الشهر','3 areas need attention':'3 مناطق تحتاج مراجعة','12 items':'12 عنصرًا','4 segments':'4 شرائح','6 offers':'6 عروض',
    '9 facts':'9 حقائق','17 rules':'17 قاعدة','3 profiles':'3 ملفات','4 pending':'4 معلقة','28 terms':'28 مصطلحًا','AR + EN':'عربي + إنجليزي',
    'Brand Guidelines 2026.pdf':'دليل الهوية 2026.pdf','Services & Offers.docx':'الخدمات والعروض.docx','Company Profile.pdf':'ملف الشركة.pdf','Customer FAQ':'الأسئلة الشائعة للعملاء',
    '24 pages · processed':'24 صفحة · تمت المعالجة','18 sections · processed':'18 قسمًا · تمت المعالجة','31 pages · processed':'31 صفحة · تمت المعالجة','42 entries · structured':'42 إدخالًا · منظمة',
    'pages':'صفحات','sections':'أقسام','entries':'إدخالات','structured':'منظمة','terms':'مصطلحات','rules':'قواعد','profiles':'ملفات','facts':'حقائق','segments':'شرائح','offers':'عروض','items':'عناصر',

    /* Drawer / contextual actions */
    'Ask Copilot about ':'اسأل المساعد عن ','Ask Copilot about':'اسأل المساعد عن','Context':'السياق',
    'Add knowledge':'إضافة معرفة'
  };

  const words = {
    'members':'أعضاء','member':'عضو','admins':'مديرون','trials':'تجارب','trial':'تجريبي','recommendations':'توصيات','changes':'تعديلات','drafts':'مسودات',
    'permissions':'صلاحيات','platforms':'منصات','channels':'قنوات','today':'اليوم','month':'الشهر','week':'الأسبوع','days':'أيام','minutes':'دقائق',
    'configured':'مهيأة','pending':'معلق','current':'حالي','future':'مستقبلي','preview':'معاينة','record':'سجل','version':'إصدار',
    'Monday':'الاثنين','Tuesday':'الثلاثاء','Wednesday':'الأربعاء','Thursday':'الخميس','Friday':'الجمعة','Saturday':'السبت','Sunday':'الأحد'
  };

  const replacements = Object.entries(extra).sort((a,b)=>b[0].length-a[0].length);
  const wordReplacements = Object.entries(words).sort((a,b)=>b[0].length-a[0].length);

  const preserveExact = new Set(['BrandSpace','brandspace.cc','EN','GMT+3','OAuth','KMS']);
  function translate(value){
    if(!value || typeof value !== 'string') return value;
    const trimmed=value.trim();
    if(preserveExact.has(trimmed) || /^[@\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(trimmed) || /^https?:\/\//.test(trimmed)) return value;
    let out=value;
    for(const [en,ar] of replacements) if(out.includes(en)) out=out.split(en).join(ar);
    if(/[A-Za-z]{3,}/.test(out)){
      for(const [en,ar] of wordReplacements){
        const esc=en.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
        out=out.replace(new RegExp(`\\b${esc}\\b`,'gi'),ar);
      }
    }
    return out;
  }

  function translateTree(root){
    if(!root) return;
    const doc=root.ownerDocument||document;
    if(root.nodeType===Node.TEXT_NODE){
      const p=root.parentElement;
      if(p?.closest?.('.brand') || p?.classList?.contains('site-chip')) return;
      const next=translate(root.nodeValue); if(next!==root.nodeValue) root.nodeValue=next; return;
    }
    if(root.nodeType!==Node.ELEMENT_NODE && root.nodeType!==Node.DOCUMENT_NODE && root.nodeType!==Node.DOCUMENT_FRAGMENT_NODE) return;
    const walker=doc.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    for(const node of nodes){
      const p=node.parentElement;
      if(!p || ['SCRIPT','STYLE','NOSCRIPT'].includes(p.tagName) || p.closest('.brand') || p.classList.contains('site-chip')) continue;
      const next=translate(node.nodeValue); if(next!==node.nodeValue) node.nodeValue=next;
    }
    if(root.querySelectorAll){
      root.querySelectorAll('[placeholder],[aria-label],[title],input[value]').forEach(el=>{
        for(const attr of ['placeholder','aria-label','title','value']){
          if(!el.hasAttribute(attr)) continue;
          if(el.classList.contains('language-button')) continue;
          const old=el.getAttribute(attr),next=translate(old); if(next!==old) el.setAttribute(attr,next);
        }
      });
    }
  }

  function localizeRuntimeData(){
    try{
      Object.values(experiences).forEach(exp=>{
        exp.name=translate(exp.name); exp.role=translate(exp.role);
        exp.groups.forEach(group=>{ group[0]=translate(group[0]); group[1].forEach(item=>{item[2]=translate(item[2]);if(item[3])item[3]=translate(item[3]);}); });
      });
      Object.keys(meta).forEach(k=>{meta[k]=meta[k].map(translate);});
      if(typeof postData==='object') Object.values(postData).forEach(row=>{for(let i=0;i<row.length;i++) if(typeof row[i]==='string') row[i]=translate(row[i]);});
    }catch(e){}
  }

  function forceStaticArabic(doc=document){
    const brand=doc.querySelector('.brand-name');
    if(brand){brand.textContent='BrandSpace';brand.lang='en';brand.dir='ltr';}
    const profile=doc.querySelector('.profile-copy strong'); if(profile) profile.textContent='محمد';
    const lang=doc.querySelector('#languageButton'); if(lang){lang.textContent='EN';lang.setAttribute('aria-label','الانتقال إلى النسخة الإنجليزية');}
    translateTree(doc.body);
  }

  function wireFrame(frame){
    if(!frame || frame.__completeArabicWired) return;
    frame.__completeArabicWired=true;
    const apply=()=>{
      try{
        const doc=frame.contentDocument; if(!doc?.body) return;
        translateTree(doc.body);
        if(!doc.__completeArabicObserver){
          doc.__completeArabicObserver=true;
          new MutationObserver(ms=>ms.forEach(m=>{if(m.type==='characterData')translateTree(m.target);m.addedNodes.forEach(translateTree);})).observe(doc.body,{childList:true,subtree:true,characterData:true});
        }
      }catch(e){}
    };
    frame.addEventListener('load',apply); setTimeout(apply,100); setTimeout(apply,450);
  }

  localizeRuntimeData();
  try{render();}catch(e){}
  forceStaticArabic();
  document.querySelectorAll('iframe.brand-brain-route').forEach(wireFrame);

  if(!document.__completeArabicObserver){
    document.__completeArabicObserver=true;
    new MutationObserver(ms=>{
      for(const m of ms){
        if(m.type==='characterData') translateTree(m.target);
        m.addedNodes.forEach(n=>{translateTree(n);if(n.nodeType===1){if(n.matches?.('iframe.brand-brain-route'))wireFrame(n);n.querySelectorAll?.('iframe.brand-brain-route').forEach(wireFrame);}});
      }
      const brand=document.querySelector('.brand-name'); if(brand && brand.textContent!=='BrandSpace') brand.textContent='BrandSpace';
    }).observe(document.body,{childList:true,subtree:true,characterData:true});
  }

  setTimeout(forceStaticArabic,80);
  setTimeout(forceStaticArabic,300);
})();
