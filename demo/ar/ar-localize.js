(() => {
  document.documentElement.lang = 'ar';
  document.documentElement.dir = 'rtl';
  document.title = 'BrandSpace — المعاينة الكاملة للمنتج';

  const phrases = {
    'Complete Product Preview':'المعاينة الكاملة للمنتج',
    'Customer app':'تطبيق العميل',
    'Control center':'مركز التحكم',
    'Public website':'الموقع العام',
    'Business workspace':'مساحة عمل للشركة',
    'Platform owner':'مالك المنصة',
    'Website visitor':'زائر الموقع',
    'Workspace owner':'مالك مساحة العمل',
    'Preview experience':'تجربة معاينة',
    'Workspace detail':'تفاصيل مساحة العمل',
    'Workspace picker':'اختيار مساحة العمل',
    'Workspace access':'صلاحيات مساحة العمل',
    'Workspace admin':'مدير مساحة العمل',
    'Workspace':'مساحة العمل',
    'Entry flows':'مسارات الدخول',
    'Customer access':'دخول العميل',
    'Platform access':'دخول المنصة',
    'Good morning, Mohamed':'صباح الخير، محمد',
    'Overview':'نظرة عامة',
    'Content calendar':'تقويم المحتوى',
    'Posts library':'مكتبة المنشورات',
    'Create post':'إنشاء منشور',
    'Design studio':'استوديو التصميم',
    'Campaigns':'الحملات',
    'Media library':'مكتبة الوسائط',
    'AI Copilot':'المساعد الذكي',
    'Content ideas':'أفكار المحتوى',
    'Analytics':'التحليلات',
    'Reports':'التقارير',
    'Social accounts':'حسابات التواصل',
    'Approvals':'الموافقات',
    'Roles & permissions':'الأدوار والصلاحيات',
    'Brand kit':'هوية العلامة',
    'Brand Brain':'عقل العلامة',
    'Brand intelligence':'ذكاء العلامة',
    'Plan & usage':'الخطة والاستخدام',
    'Settings':'الإعدادات',
    'Customer sign in':'تسجيل دخول العميل',
    'Password reset':'إعادة تعيين كلمة المرور',
    'Accept invitation':'قبول الدعوة',
    'No workspace':'لا توجد مساحة عمل',
    'Platform':'المنصة',
    'Commercial':'تجاري',
    'AI & providers':'الذكاء الاصطناعي والمزوّدون',
    'Operations':'العمليات',
    'Access':'الدخول',
    'Workspaces':'مساحات العمل',
    'Customers':'العملاء',
    'Support mode':'وضع الدعم',
    'Plans':'الخطط',
    'Entitlements':'الاستحقاقات',
    'Billing':'الفوترة',
    'Credits':'الرصيد',
    'Credit ledger':'سجل الرصيد',
    'Providers':'المزوّدون',
    'AI models':'نماذج الذكاء الاصطناعي',
    'Model registry':'سجل النماذج',
    'Routing':'التوجيه',
    'Task routing':'توجيه المهام',
    'AI usage':'استخدام الذكاء الاصطناعي',
    'Usage & margin':'الاستخدام والهامش',
    'Configuration':'الإعدادات المركزية',
    'Secrets':'الأسرار',
    'Secret vault':'خزنة الأسرار',
    'Feature flags':'مفاتيح المزايا',
    'Audit log':'سجل التدقيق',
    'System health':'حالة النظام',
    'Website content':'محتوى الموقع',
    'Admin sign in':'تسجيل دخول الإدارة',
    'MFA verification':'التحقق بخطوتين',
    'Website':'الموقع',
    'Home':'الرئيسية',
    'Features':'المزايا',
    'Calendar':'التقويم',
    'Publishing':'النشر',
    'Explore':'استكشف',
    'Templates':'القوالب',
    'Integrations':'التكاملات',
    'Pricing':'الأسعار',
    'Resources':'الموارد',
    'About':'عن BrandSpace',
    'Contact':'تواصل معنا',
    'Account':'الحساب',
    'Sign in':'تسجيل الدخول',
    'Start free':'ابدأ مجانًا',
    'Legal & trust':'القانون والثقة',
    'Privacy':'الخصوصية',
    'Terms':'الشروط',
    'Status':'الحالة',
    'Product blueprint':'مخطط المنتج',
    'Every page & feature':'كل صفحة وميزة',
    'Product map':'خريطة المنتج',
    'Search anything':'ابحث عن أي شيء',
    'Search pages and features…':'ابحث في الصفحات والمزايا…',
    'Type to search · Enter to open · Esc to close':'اكتب للبحث · Enter للفتح · Esc للإغلاق',
    'Notifications':'الإشعارات',
    'Open navigation':'فتح القائمة',
    'Close navigation':'إغلاق القائمة',
    'Collapse sidebar':'طي القائمة الجانبية',
    'Primary navigation':'التنقل الرئيسي',
    'BrandSpace home':'الصفحة الرئيسية لـ BrandSpace',
    'Your week at a glance':'أسبوعك بنظرة واحدة',
    'Everything your brand needs, in one calm place.':'كل ما تحتاجه علامتك، في مكان واحد منظم.',
    'Plan, create, collaborate and publish across every channel—with your AI marketing team beside you.':'خطط وأنشئ وتعاون وانشر عبر كل القنوات، ومعك فريقك التسويقي المدعوم بالذكاء الاصطناعي.',
    'Create a post':'أنشئ منشورًا',
    'Open calendar':'افتح التقويم',
    'Performance this month':'أداء هذا الشهر',
    'Engagement is up 18.4%':'التفاعل ارتفع 18.4%',
    'Next to publish':'التالي للنشر',
    'Collection launch · Today 09:00':'إطلاق المجموعة · اليوم 09:00',
    'Scheduled':'مجدول',
    '4 this week':'4 هذا الأسبوع',
    'In review':'قيد المراجعة',
    'Needs attention':'يحتاج مراجعة',
    'Published':'منشور',
    'Across 4 channels':'عبر 4 قنوات',
    'AI credits':'رصيد الذكاء الاصطناعي',
    'Resets in 12 days':'يتجدد خلال 12 يومًا',
    'Upcoming':'القادم',
    'Next on your calendar':'التالي في تقويمك',
    'View all →':'عرض الكل ←',
    'New collection launch':'إطلاق المجموعة الجديدة',
    'Founder story':'قصة المؤسس',
    'Three useful tips':'ثلاث نصائح مفيدة',
    'Today, 09:00':'اليوم، 09:00',
    'Tomorrow, 13:30':'غدًا، 13:30',
    'Friday, 18:00':'الجمعة، 18:00',
    'Ready':'جاهز',
    'Review':'مراجعة',
    'Copilot':'المساعد الذكي',
    'Continue creating':'واصل الإنشاء',
    'Generate ideas':'ولّد أفكارًا',
    'From your brand goals':'انطلاقًا من أهداف علامتك',
    'Write a post':'اكتب منشورًا',
    'With live preview':'مع معاينة مباشرة',
    'Create a design':'أنشئ تصميمًا',
    'From a template':'من قالب',
    'Ask Copilot':'اسأل المساعد',
    'Plan your next move':'خطط لخطوتك التالية',
    'Content planning':'تخطيط المحتوى',
    'March 2026':'مارس 2026',
    'Month':'شهر',
    'Week':'أسبوع',
    'Agenda':'الأجندة',
    'All channels':'كل القنوات',
    'All campaigns':'كل الحملات',
    'All statuses':'كل الحالات',
    '+ Create post':'+ إنشاء منشور',
    'MON':'الاثنين',
    'TUE':'الثلاثاء',
    'WED':'الأربعاء',
    'THU':'الخميس',
    'FRI':'الجمعة',
    'SAT':'السبت',
    'SUN':'الأحد',
    'Three tips':'ثلاث نصائح',
    'Collection launch':'إطلاق المجموعة',
    'Studio reel':'ريل الاستوديو',
    'Weekend offer':'عرض نهاية الأسبوع',
    'Monthly recap':'ملخص الشهر',
    'Content library':'مكتبة المحتوى',
    'All posts':'كل المنشورات',
    'All · 28':'الكل · 28',
    'Drafts · 4':'المسودات · 4',
    'Review · 3':'المراجعة · 3',
    'Scheduled · 12':'المجدولة · 12',
    'Published · 9':'المنشورة · 9',
    'Search posts':'ابحث في المنشورات',
    'Channels':'القنوات',
    'Newest first':'الأحدث أولًا',
    'Draft':'مسودة',
    'Team story':'قصة الفريق',
    'Product guide':'دليل المنتج',
    'Live preview':'معاينة مباشرة',
    'Feed':'المنشورات',
    'Story':'ستوري',
    'Sample Brand':'العلامة التجريبية',
    'A new collection, built for the pace of real life. Thoughtful details, simple choices…':'مجموعة جديدة صُممت لإيقاع الحياة الحقيقي. تفاصيل مدروسة، وخيارات أبسط…',
    'Writing with you':'يكتب معك',
    'What would you like to improve?':'ما الذي تريد تحسينه؟',
    'Make it shorter':'اجعله أقصر',
    'Change tone':'غيّر النبرة',
    'Add hashtags':'أضف هاشتاقات',
    'Translate to Arabic':'ترجم إلى العربية',
    'Suggested caption':'نص مقترح',
    'A considered new collection, made for real life—simple, useful and built to last.':'مجموعة جديدة مدروسة للحياة اليومية—بسيطة، عملية ومصممة لتدوم.',
    'Use this':'استخدم هذا',
    'Ask Copilot…':'اسأل المساعد…',
    'Saved just now':'تم الحفظ الآن',
    'New post':'منشور جديد',
    'Publish to':'النشر على',
    'Caption':'النص',
    'Media':'الوسائط',
    '+ Add':'+ إضافة',
    'Campaign':'الحملة',
    'Publish':'النشر',
    'Spring collection':'مجموعة الربيع',
    'Save draft':'حفظ كمسودة',
    'Schedule post':'جدولة المنشور',
    'Design':'التصميم',
    'Collection launch — square':'إطلاق المجموعة — مربع',
    'Preview':'معاينة',
    'Export':'تصدير',
    'Uploads':'الملفات المرفوعة',
    'Photos':'الصور',
    'Elements':'العناصر',
    'Text':'النص',
    'Brand':'العلامة',
    'Brand templates':'قوالب العلامة',
    'Make space for better ideas.':'افسح مساحة لأفكار أفضل.',
    'One calm place to plan, create and publish.':'مكان واحد منظم للتخطيط والإنشاء والنشر.',
    'Properties':'الخصائص',
    'Typeface':'الخط',
    'Size':'الحجم',
    'Alignment':'المحاذاة',
    'Left aligned':'محاذاة لليسار',
    'Opacity':'الشفافية',
    'Layers':'الطبقات',
    'Headline':'العنوان',
    'Supporting line':'النص المساند',
    'Background':'الخلفية',
    'Future product preview':'معاينة مستقبلية للمنتج',
    'Keep every launch, offer and always-on series organised.':'نظّم كل إطلاق وعرض وسلسلة محتوى مستمرة.',
    'Your approved photos, videos, logos and brand assets in one place.':'صورك وفيديوهاتك وشعاراتك وملفات علامتك المعتمدة في مكان واحد.',
    'Turn your brand goals, trends and past performance into useful ideas.':'حوّل أهداف علامتك والترندات والأداء السابق إلى أفكار مفيدة.',
    'Build clean reports for your team and decision-makers.':'أنشئ تقارير واضحة لفريقك وصنّاع القرار.',
    'Connect channels securely and control where BrandSpace can publish.':'اربط القنوات بأمان وتحكم في أماكن النشر من BrandSpace.',
    'Review content, leave context and keep publishing moving.':'راجع المحتوى وأضف ملاحظاتك وحافظ على سير النشر.',
    'Give every tool the same voice, colours and creative rules.':'امنح كل أداة نفس صوت العلامة وألوانها وقواعدها الإبداعية.',
    'Interactive preview':'معاينة تفاعلية',
    'Your AI marketing team':'فريقك التسويقي بالذكاء الاصطناعي',
    'What should we make next?':'ماذا نصنع بعد ذلك؟',
    'Copilot understands your brand, calendar and goals—then previews every proposed change before applying it.':'المساعد يفهم علامتك وتقويمك وأهدافك، ثم يعرض أي تغيير مقترح قبل تطبيقه.',
    'Start a conversation':'ابدأ محادثة',
    'View ideas':'عرض الأفكار',
    'Plan next week for me':'خطط لي الأسبوع القادم',
    '7 posts · 4 channels · ready to review':'7 منشورات · 4 قنوات · جاهزة للمراجعة',
    'Nothing publishes silently':'لا يتم نشر أي شيء دون علمك',
    'You approve every external action':'أنت توافق على كل إجراء خارجي',
    'Recent conversations':'المحادثات الأخيرة',
    'Continue where you left off':'واصل من حيث توقفت',
    'March content plan':'خطة محتوى مارس',
    'Improve launch campaign':'تحسين حملة الإطلاق',
    'Turn report into posts':'حوّل التقرير إلى منشورات',
    'Performance':'الأداء',
    'Last 30 days':'آخر 30 يومًا',
    'Reach':'الوصول',
    'Engagement':'التفاعل',
    'Followers':'المتابعون',
    'Trend':'الاتجاه',
    'Content performance':'أداء المحتوى',
    'Audience':'الجمهور',
    'Channel mix':'توزيع القنوات',
    'Name':'الاسم',
    'Role / Plan':'الدور / الخطة',
    'Last active':'آخر نشاط',
    'Today':'اليوم',
    'Team':'الفريق',
    '+ Invite member':'+ دعوة عضو',
    'Owner':'المالك',
    'Content creator':'منشئ محتوى',
    'Reviewer':'مراجع',
    'Active':'نشط',
    'Invited':'تمت دعوته',
    'Access control':'التحكم في الوصول',
    '+ Create role':'+ إنشاء دور',
    'Post details':'تفاصيل المنشور',
    'A polished preview of the real detail page. Review, edit, reschedule or open the item in its library context.':'معاينة مصقولة لصفحة التفاصيل الفعلية. راجع أو عدّل أو أعد الجدولة أو افتح العنصر داخل مكتبته.',
    'Channel':'القناة',
    'Publish date':'موعد النشر',
    'Approval':'الموافقة',
    'View in library':'عرض في المكتبة',
    'Edit post':'تعديل المنشور',
    'AI marketing team':'فريق التسويق بالذكاء الاصطناعي',
    'What would you like to move forward?':'ما الذي تريد العمل عليه الآن؟',
    'I understand the page you are on. I can explain it, improve its content, plan next steps or prepare a reviewable action—nothing is applied without your confirmation.':'أفهم الصفحة التي تعمل عليها. أستطيع شرحها وتحسين محتواها والتخطيط للخطوات التالية أو إعداد إجراء قابل للمراجعة—ولا يتم تطبيق شيء دون تأكيدك.',
    'Plan next week':'خطط للأسبوع القادم',
    'Draft a reviewable calendar':'أنشئ تقويمًا قابلًا للمراجعة',
    'Improve this page':'حسّن هذه الصفحة',
    'Preview every change':'عاين كل تغيير',
    'Use analytics':'استخدم التحليلات',
    'Find what to repeat':'اكتشف ما يستحق التكرار',
    'Create campaign':'أنشئ حملة',
    'Ideas to deliverables':'من الأفكار إلى التنفيذ',
    'Interactive preview — production logic arrives in its approved phase.':'معاينة تفاعلية — وظائف الإنتاج ستصل في مرحلتها المعتمدة.',
    'Platform control center':'مركز تحكم المنصة',
    'One clear view of the whole business.':'رؤية واضحة لكل أعمال المنصة.',
    'Customers, configuration, AI costs, platform health and sensitive operations—without reaching for a code release.':'العملاء والإعدادات وتكاليف الذكاء الاصطناعي وحالة المنصة والعمليات الحساسة—بدون الحاجة لإصدار برمجي.',
    'View workspaces':'عرض مساحات العمل',
    'Platform status':'حالة المنصة',
    'All systems operational':'كل الأنظمة تعمل',
    'Active workspaces':'مساحات العمل النشطة',
    'Workspaces':'مساحات العمل',
    'Active users':'المستخدمون النشطون',
    'Across all tenants':'عبر كل العملاء',
    'AI margin':'هامش الذكاء الاصطناعي',
    'Target 60%':'الهدف 60%',
    'Open alerts':'تنبيهات مفتوحة',
    'No critical issues':'لا توجد مشاكل حرجة',
    'Recent workspaces':'أحدث مساحات العمل',
    'Needs attention':'يحتاج متابعة',
    'Provider latency':'زمن استجابة المزوّد',
    'One warning':'تحذير واحد',
    'Security events':'أحداث الأمان',
    'Config drafts':'مسودات الإعدادات',
    'Support mode':'وضع الدعم',
    'No active sessions':'لا توجد جلسات نشطة',
    'Customer management':'إدارة العملاء',
    '+ Create workspace':'+ إنشاء مساحة عمل',
    'Search workspaces':'ابحث في مساحات العمل',
    'Plan':'الخطة',
    'Accounts':'الحسابات',
    'Customer directory':'دليل العملاء',
    'Audited, time-limited and read-only workspace assistance.':'مساعدة خاضعة للتدقيق، محددة المدة وللقراءة فقط.',
    'Start support session':'بدء جلسة دعم',
    'Configure product tiers without hard-coded prices or allowances.':'إدارة مستويات المنتج دون أسعار أو حدود ثابتة في الكود.',
    'Create plan draft':'إنشاء مسودة خطة',
    'Resolve features, limits and workspace overrides in one trace.':'تتبّع المزايا والحدود والاستثناءات لمساحة العمل في مكان واحد.',
    'Preview resolution':'معاينة النتيجة',
    'Subscriptions, invoices, payments and lifecycle events.':'الاشتراكات والفواتير والمدفوعات ودورة حياتها.',
    'Connect provider':'ربط مزوّد',
    'Immutable credit movements with idempotent operations.':'حركات رصيد غير قابلة للتعديل وعمليات آمنة من التكرار.',
    'Add manual adjustment':'إضافة تسوية يدوية',
    'Manage AI, storage, email, payment and social adapters.':'إدارة مزوّدي الذكاء الاصطناعي والتخزين والبريد والدفع والتواصل.',
    'Add provider':'إضافة مزوّد',
    'Model capabilities, costs, quality and availability.':'قدرات النماذج وتكاليفها وجودتها وتوفرها.',
    'Register model':'تسجيل نموذج',
    'Choose providers and models by task, language and fallback.':'اختيار المزوّدين والنماذج حسب المهمة واللغة وخيارات الاستبدال.',
    'Create route':'إنشاء مسار',
    'Compare actual provider cost with credits charged.':'مقارنة تكلفة المزوّد الفعلية بالرصيد المحسوب.',
    'View cost detail':'عرض تفاصيل التكلفة',
    'Versioned platform settings with validate, activate and rollback.':'إعدادات منصة بإصدارات مع التحقق والتفعيل والرجوع.',
    'Create draft':'إنشاء مسودة',
    'Encrypted references with rotation and no reveal action.':'مراجع مشفرة قابلة للتدوير بدون إمكانية كشف القيمة.',
    'Add secret':'إضافة سر',
    'Control availability by environment, plan and workspace.':'التحكم في الإتاحة حسب البيئة والخطة ومساحة العمل.',
    'Create flag':'إنشاء مفتاح ميزة',
    'Append-only evidence for sensitive platform operations.':'سجل أدلة غير قابل للتعديل للعمليات الحساسة.',
    'Export filtered log':'تصدير السجل المفلتر',
    'Providers, workers, queues, databases and delivery status.':'حالة المزوّدين والعمليات الخلفية والطوابير وقواعد البيانات والتسليم.',
    'Run diagnostics':'تشغيل الفحص',
    'Edit public pages, navigation and announcements without a deploy.':'تعديل صفحات الموقع والتنقل والإعلانات بدون نشر برمجي.',
    'Create content draft':'إنشاء مسودة محتوى',
    'Your AI marketing team':'فريقك التسويقي بالذكاء الاصطناعي',
    'Make space for better marketing.':'افسح مساحة لتسويق أفضل.',
    'Plan, create, collaborate, publish and learn—all from one calm workspace built around your brand.':'خطط وأنشئ وتعاون وانشر وتعلّم—كل ذلك من مساحة عمل واحدة مبنية حول علامتك.',
    'Explore features':'استكشف المزايا',
    'Everything connected':'كل شيء متصل',
    'From first idea to final report.':'من أول فكرة حتى التقرير النهائي.',
    'Stay on-brand':'حافظ على هوية العلامة',
    'One workspace. Every marketing job.':'مساحة واحدة لكل مهام التسويق.',
    'Explore the complete BrandSpace toolkit.':'استكشف أدوات BrandSpace المتكاملة.',
    'Your AI marketing team.':'فريقك التسويقي بالذكاء الاصطناعي.',
    'From ideas to approved work—always with you in control.':'من الأفكار إلى عمل معتمد—وأنت المتحكم دائمًا.',
    'See the whole story.':'شاهد الصورة كاملة.',
    'A content calendar designed around posts, not empty dates.':'تقويم محتوى مصمم حول المنشورات، لا مجرد تواريخ فارغة.',
    'Publish with confidence.':'انشر بثقة.',
    'One reviewable flow for every connected channel.':'مسار واحد قابل للمراجعة لكل قناة متصلة.',
    'Know what moved the brand.':'اعرف ما الذي حرّك أداء العلامة.',
    'Clear performance without drowning in dashboards.':'أداء واضح دون الغرق في لوحات الأرقام.',
    'Start on-brand.':'ابدأ بهوية صحيحة.',
    'Useful templates shaped by your own brand kit.':'قوالب مفيدة مبنية على هوية علامتك.',
    'Connect the tools you already use.':'اربط الأدوات التي تستخدمها بالفعل.',
    'Social channels, AI providers, storage, email and payments.':'قنوات التواصل ومزوّدو الذكاء الاصطناعي والتخزين والبريد والمدفوعات.',
    'Simple plans that grow with you.':'خطط بسيطة تنمو معك.',
    'Prices appear here after the owner approves the commercial model.':'تظهر الأسعار هنا بعد اعتماد المالك للنموذج التجاري.',
    'Ideas worth using.':'أفكار تستحق الاستخدام.',
    'Guides, product updates and practical marketing thinking.':'أدلة وتحديثات المنتج وأفكار تسويقية عملية.',
    'We are making space for better marketing.':'نحن نصنع مساحة لتسويق أفضل.',
    'BrandSpace gives small teams the structure and intelligence of a full marketing department.':'BrandSpace يمنح الفرق الصغيرة تنظيم وذكاء قسم تسويق متكامل.',
    'Talk to BrandSpace.':'تحدث مع BrandSpace.',
    'Tell us what you are building and what your team needs.':'أخبرنا ما الذي تبنيه وما الذي يحتاجه فريقك.',
    'Welcome back.':'مرحبًا بعودتك.',
    'Sign in to your BrandSpace workspace.':'سجّل الدخول إلى مساحة عمل BrandSpace.',
    'Build your marketing space.':'أنشئ مساحتك التسويقية.',
    'Create your workspace and bring the team with you.':'أنشئ مساحة عملك وأضف فريقك.',
    'Privacy without surprises.':'خصوصية بلا مفاجآت.',
    'A clear account of what BrandSpace stores, why and for how long.':'توضيح مباشر لما يخزنه BrandSpace ولماذا ولمدة كم.',
    'Clear terms for a serious platform.':'شروط واضحة لمنصة احترافية.',
    'The rules for accounts, subscriptions, content and acceptable use.':'قواعد الحسابات والاشتراكات والمحتوى والاستخدام المقبول.',
    'BrandSpace is operational.':'BrandSpace يعمل بشكل طبيعي.',
    'Live visibility into the app, publishing, AI providers and background workers.':'متابعة مباشرة للتطبيق والنشر ومزوّدي الذكاء الاصطناعي والعمليات الخلفية.',
    'Welcome back':'مرحبًا بعودتك',
    'Sign in to continue to your workspace.':'سجّل الدخول للمتابعة إلى مساحة عملك.',
    'Email address':'البريد الإلكتروني',
    'Password':'كلمة المرور',
    'Reset your password':'إعادة تعيين كلمة المرور',
    'We’ll send a secure reset link if the account exists.':'سنرسل رابطًا آمنًا لإعادة التعيين إذا كان الحساب موجودًا.',
    'Send reset link':'إرسال رابط إعادة التعيين',
    'Platform access':'دخول المنصة',
    'Sign in to the isolated Control Center.':'سجّل الدخول إلى مركز التحكم المعزول.',
    'Admin email':'بريد الإدارة',
    'Continue':'متابعة',
    'Verify it’s you':'تأكد من هويتك',
    'Enter the six-digit code from your authenticator.':'أدخل الرمز المكون من 6 أرقام من تطبيق المصادقة.',
    'Authentication code':'رمز المصادقة',
    'Verify code':'تحقق من الرمز',
    'Secure preview · Separate customer and platform sessions':'معاينة آمنة · جلسات منفصلة للعميل والمنصة',
    'Choose where to work':'اختر مساحة العمل',
    'You belong to two workspaces.':'أنت عضو في مساحتي عمل.',
    'You’ve been invited':'لديك دعوة',
    'Join Sample Brand as a Content creator.':'انضم إلى العلامة التجريبية كمنشئ محتوى.',
    'Invitation expires in 4 days':'تنتهي الدعوة خلال 4 أيام',
    'Your account is ready':'حسابك جاهز',
    'Ask an owner for an invitation or create a new workspace.':'اطلب دعوة من مالك مساحة أو أنشئ مساحة عمل جديدة.',
    'No workspace memberships yet':'لا توجد عضويات في مساحات عمل بعد',
    'Create workspace':'إنشاء مساحة عمل',
    'Customer overview':'نظرة عامة على العميل',
    'Enter support mode':'الدخول إلى وضع الدعم',
    'Members':'الأعضاء',
    'Connected accounts':'الحسابات المتصلة',
    'Lifecycle':'دورة الحياة',
    'Workspace details':'تفاصيل مساحة العمل',
    'Region':'المنطقة',
    'Created':'تاريخ الإنشاء',
    'Last activity':'آخر نشاط',
    'Safety':'الأمان',
    'Support access':'وصول الدعم',
    'Read-only, time-limited and visible in the customer’s activity log. No impersonation.':'للقراءة فقط، محدد المدة ويظهر في سجل نشاط العميل. بدون انتحال.',
    'Start audited session':'بدء جلسة خاضعة للتدقيق',
    'Foundation & security':'الأساسات والأمان',
    'Platform control center':'مركز تحكم المنصة',
    'Customer core':'أساسيات العميل',
    'Visual system':'النظام البصري',
    'Commercial engine':'المحرك التجاري',
    'Brand onboarding':'تهيئة العلامة',
    'Content workspace':'مساحة المحتوى',
    'AI creation':'الإنشاء بالذكاء الاصطناعي',
    'Social publishing':'النشر الاجتماعي',
    'Automation':'الأتمتة',
    'Launch hardening':'تجهيز الإطلاق',
    'Built / in progress':'منجز / قيد التنفيذ',
    'Next':'التالي',
    'Later':'لاحقًا',
    'Preview / demo data':'بيانات معاينة / تجريبية',
    'Your brand,':'علامتك،',
    'remembered.':'في الذاكرة.',
    'Brand Brain is the living knowledge layer behind every strategy, caption and recommendation. Review what BrandSpace knows, fix what is missing and approve what it learns.':'عقل العلامة هو طبقة المعرفة الحية خلف كل استراتيجية ونص وتوصية. راجع ما يعرفه BrandSpace، أكمل الناقص واعتمد ما يتعلمه.',
    'Brand intelligence':'ذكاء العلامة',
    'Identity':'الهوية',
    'facts · complete':'معلومة · مكتمل',
    'segments · complete':'شرائح · مكتمل',
    'Offers':'العروض',
    'active offers':'عروض نشطة',
    'Voice':'الصوت',
    'AR + EN · active':'عربي + إنجليزي · نشط',
    'Learnings':'التعلّمات',
    'approved':'معتمدة',
    'Strategy':'الاستراتيجية',
    'memory':'ذاكرة',
    'Brand Brain completion':'اكتمال عقل العلامة',
    'Strong foundation':'أساس قوي',
    'Knowledge items':'عناصر المعرفة',
    'this month':'هذا الشهر',
    'Source documents':'المستندات المصدرية',
    'All processed':'تمت معالجتها',
    'areas need attention':'مناطق تحتاج مراجعة',
    'Competitor context is incomplete, one offer has not been reviewed recently, and your Arabic glossary needs 4 confirmations.':'معلومات المنافسين غير مكتملة، وهناك عرض لم تتم مراجعته مؤخرًا، كما يحتاج قاموسك العربي إلى 4 تأكيدات.',
    'What BrandSpace knows':'ما الذي يعرفه BrandSpace',
    'Structured, reviewable and versioned knowledge.':'معرفة منظمة، قابلة للمراجعة ولها إصدارات.',
    'Click any card to preview the detail view.':'اضغط على أي بطاقة لمعاينة التفاصيل.',
    'Tone of Voice':'نبرة الصوت',
    'Products & Offers':'المنتجات والعروض',
    'Proof Points':'نقاط الإثبات',
    'Do / Don’t':'افعل / لا تفعل',
    'Competitors':'المنافسون',
    'Glossary':'المصطلحات',
    'Complete':'مكتمل',
    'Needs review':'يحتاج مراجعة',
    'pending':'معلقة',
    'Brand Intelligence':'ذكاء العلامة',
    'AI suggestion':'اقتراح بالذكاء الاصطناعي',
    'Recent learning':'تعلّم حديث',
    'Educational content is outperforming promotional content.':'المحتوى التوعوي يتفوق على المحتوى الترويجي.',
    'Across the latest approved performance signals, educational posts are generating stronger engagement. BrandSpace suggests increasing their share in the next strategy cycle.':'وفقًا لأحدث مؤشرات الأداء المعتمدة، تحقق المنشورات التوعوية تفاعلًا أعلى. يقترح BrandSpace زيادة نسبتها في دورة الاستراتيجية القادمة.',
    'Review suggestion':'مراجعة الاقتراح',
    'Dismiss for now':'تجاهل الآن',
    'Knowledge health':'صحة المعرفة',
    'One offer may be outdated.':'قد يكون أحد العروض قديمًا.',
    'The “Summer Package” has not been confirmed recently. BrandSpace will not silently update it — an owner or approved editor must review the source.':'لم يتم تأكيد «الباقة الصيفية» مؤخرًا. لن يحدّثها BrandSpace تلقائيًا—يجب أن يراجعها مالك أو محرر معتمد.',
    'Knowledge sources':'مصادر المعرفة',
    '+ Upload':'+ رفع ملف',
    'processed':'تمت المعالجة',
    'Ready':'جاهز',
    'Brand Brain context':'سياق عقل العلامة',
    'I found 3 knowledge areas that could make your next strategy more accurate. Want to review them?':'وجدت 3 مناطق معرفية يمكن أن تجعل استراتيجيتك القادمة أدق. هل تريد مراجعتها؟',
    'The core facts that define who the brand is and how it should be positioned.':'الحقائق الأساسية التي تحدد ماهية العلامة وكيف يجب تموضعها.',
    'Audience segments and the needs, motivations and objections that shape communication.':'شرائح الجمهور والاحتياجات والدوافع والاعتراضات التي تشكل التواصل.',
    'How the brand sounds in Arabic and English, including examples and language rules.':'كيف تبدو نبرة العلامة بالعربية والإنجليزية، مع أمثلة وقواعد لغوية.',
    'Products and services BrandSpace can reference when planning strategy or generating content.':'المنتجات والخدمات التي يمكن لـBrandSpace الرجوع إليها عند التخطيط أو إنشاء المحتوى.',
    'Approved evidence and reasons to believe that AI may safely use in communication.':'أدلة معتمدة وأسباب موثوقة يمكن للذكاء الاصطناعي استخدامها بأمان.',
    'Explicit constraints that keep generated content aligned with the brand.':'قواعد واضحة تحافظ على توافق المحتوى الناتج مع العلامة.',
    'Competitive context that helps strategy and positioning stay differentiated.':'سياق تنافسي يساعد الاستراتيجية والتموضع على البقاء مميزين.',
    'Approved naming, spelling and translation rules that protect consistency across languages.':'قواعد معتمدة للتسمية والكتابة والترجمة تحافظ على الاتساق بين اللغات.',
    'Active · Version 4':'نشط · الإصدار 4',
    'English':'الإنجليزية',
    'Arabic':'العربية',
    'Brand context used by AI':'سياق العلامة المستخدم بواسطة الذكاء الاصطناعي',
    'Every AI output can cite the exact Brand Brain items and versions it used.':'يمكن لكل مخرج من الذكاء الاصطناعي الإشارة إلى عناصر عقل العلامة وإصداراتها التي استخدمها.'
  };

  const generic = {
    'Future':'مستقبلي','Current':'حالي','Built':'منجز','Phase':'مرحلة','Preview':'معاينة','Active':'نشط','Archived':'مؤرشف','Trial':'تجريبي','Trialing':'فترة تجريبية','Past due':'متأخر الدفع','Suspended':'موقوف','Growth':'نمو','Scale':'توسع','Starter':'بداية','Production':'إنتاج','Staging':'تجريبي','Role':'الدور','Member':'عضو','Description':'الوصف','Permission':'الصلاحية','Read only':'قراءة فقط','Create':'إنشاء','Edit':'تعديل','Delete':'حذف','Save':'حفظ','Cancel':'إلغاء','Close':'إغلاق','Open':'فتح','Back':'رجوع','Next':'التالي','Previous':'السابق','Search':'بحث','Filter':'تصفية','All':'الكل','Status':'الحالة','Date':'التاريخ','Time':'الوقت','Language':'اللغة','English':'الإنجليزية','Arabic':'العربية'
  };

  const replacements = Object.entries(phrases).sort((a,b)=>b[0].length-a[0].length);
  const genericReplacements = Object.entries(generic).sort((a,b)=>b[0].length-a[0].length);

  function translateString(value){
    if(!value || typeof value !== 'string') return value;
    let out = value;
    for(const [en,ar] of replacements) if(out.includes(en)) out = out.split(en).join(ar);
    if(/[A-Za-z]{3,}/.test(out)){
      for(const [en,ar] of genericReplacements) out = out.replace(new RegExp(`\\b${en.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')}\\b`,'g'),ar);
    }
    return out;
  }

  function translateNode(root){
    if(!root) return;
    if(root.nodeType === Node.TEXT_NODE){
      const t = translateString(root.nodeValue);
      if(t !== root.nodeValue) root.nodeValue = t;
      return;
    }
    if(root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
    if(root.nodeType === Node.ELEMENT_NODE){
      for(const attr of ['placeholder','aria-label','title']){
        if(root.hasAttribute?.(attr)){
          const old = root.getAttribute(attr), next = translateString(old);
          if(next !== old) root.setAttribute(attr,next);
        }
      }
    }
    const walker = (root.ownerDocument || document).createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    for(const n of nodes){
      const p=n.parentElement;
      if(p && ['SCRIPT','STYLE','NOSCRIPT'].includes(p.tagName)) continue;
      const t=translateString(n.nodeValue); if(t!==n.nodeValue)n.nodeValue=t;
    }
    if(root.querySelectorAll){
      root.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{
        for(const attr of ['placeholder','aria-label','title']) if(el.hasAttribute(attr)){
          const old=el.getAttribute(attr),next=translateString(old);if(next!==old)el.setAttribute(attr,next);
        }
      });
    }
  }

  function localizeExperienceData(){
    try{
      Object.values(experiences).forEach(exp=>{
        exp.name=translateString(exp.name); exp.role=translateString(exp.role);
        exp.groups.forEach(group=>{
          group[0]=translateString(group[0]);
          group[1].forEach(item=>{ item[2]=translateString(item[2]); if(item[3]) item[3]=translateString(item[3]); });
        });
      });
      Object.keys(meta).forEach(k=>{ meta[k]=meta[k].map(translateString); });
      state.lang='ar';
    }catch(e){}
  }

  function observeDocument(doc){
    if(!doc || !doc.body || doc.__brandspaceArabicObserver) return;
    doc.__brandspaceArabicObserver=true;
    translateNode(doc.body);
    const obs=new MutationObserver(mutations=>{
      for(const m of mutations){
        if(m.type==='characterData') translateNode(m.target);
        m.addedNodes.forEach(n=>{
          translateNode(n);
          if(n.nodeType===1 && n.matches?.('iframe.brand-brain-route')) wireBrainFrame(n);
          if(n.nodeType===1) n.querySelectorAll?.('iframe.brand-brain-route').forEach(wireBrainFrame);
        });
      }
    });
    obs.observe(doc.body,{childList:true,subtree:true,characterData:true});
  }

  function injectBrainArabic(doc){
    if(!doc || !doc.documentElement) return;
    doc.documentElement.lang='ar'; doc.documentElement.dir='rtl';
    if(!doc.getElementById('arabicBrainFont')){
      const link=doc.createElement('link');link.id='arabicBrainFont';link.rel='stylesheet';link.href='https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap';doc.head.appendChild(link);
      const style=doc.createElement('style');style.textContent=`html,body,button,input,textarea,select{font-family:"Cairo","Noto Sans Arabic",Tahoma,Arial,sans-serif!important}body{direction:rtl!important}.page-head,.card,.intel,.source,.detail-panel{text-align:right}.page-head h1,h2,h3,b,strong{letter-spacing:0!important}.node{direction:rtl}.node:before{margin-right:0;margin-left:7px}.detail-panel{inset:0 auto 0 0!important;transform:translateX(-105%)!important}.detail-panel.open{transform:none!important}`;doc.head.appendChild(style);
    }
    observeDocument(doc);
    translateNode(doc.body);
  }

  function wireBrainFrame(frame){
    if(!frame || frame.__arabicWired) return;
    frame.__arabicWired=true;
    const apply=()=>{try{injectBrainArabic(frame.contentDocument)}catch(e){}};
    frame.addEventListener('load',apply);
    setTimeout(apply,120);
  }

  localizeExperienceData();
  try{ render(); }catch(e){}
  observeDocument(document);
  document.querySelectorAll('iframe.brand-brain-route').forEach(wireBrainFrame);

  const oldLang=document.getElementById('languageButton');
  if(oldLang){
    const fresh=oldLang.cloneNode(true);
    fresh.textContent='EN';
    fresh.setAttribute('aria-label','English version');
    oldLang.replaceWith(fresh);
    fresh.addEventListener('click',()=>{ window.location.href='../'; });
  }

  translateNode(document.body);
})();
