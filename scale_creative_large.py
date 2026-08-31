from pathlib import Path
import re

path = Path('index.html')
source = path.read_text(encoding='utf-8')

new_css = r'''
  /* CREATIVE STUDIO SIZE BOOST */
  @media (min-width: 1100px){
    .creative-stage{
      max-width:1080px;
      min-height:450px;
      gap:24px;
    }
    .product-card{
      width:220px;
      height:260px;
      flex:0 0 220px;
      padding:20px;
    }
    .arrow-flow{
      width:150px;
      height:150px;
      flex:0 0 150px;
    }
    .creative-ai-orb{
      width:92px;
      height:92px;
    }
    .creative-ai-label{
      font-size:18px;
    }
    .creative-ai-status{
      top:calc(50% + 62px);
      font-size:8px;
    }
    .creative-out{
      gap:14px;
    }
    .creative-mini{
      width:136px;
      height:210px;
      flex:0 0 136px;
    }
    .creative-stage.reveal{
      transform:translateY(30px) scale(1.08);
    }
    .creative-stage.reveal.in-view{
      transform:translateY(0) scale(1.14);
    }
    .creative-stage-note{
      margin-top:14px;
    }
  }
  @media (min-width: 681px) and (max-width: 1099px){
    .creative-stage{
      max-width:960px;
      min-height:400px;
      gap:18px;
    }
    .product-card{
      width:200px;
      height:238px;
      flex:0 0 200px;
    }
    .arrow-flow{
      width:132px;
      height:132px;
      flex:0 0 132px;
    }
    .creative-ai-orb{
      width:82px;
      height:82px;
    }
    .creative-mini{
      width:124px;
      height:194px;
      flex:0 0 124px;
    }
    .creative-stage.reveal.in-view{
      transform:translateY(0) scale(1.08);
    }
  }
'''

pattern = re.compile(r'\n\s*/\* CREATIVE STUDIO SIZE BOOST \*/.*?(?=\n</style>)', re.S)
if pattern.search(source):
    source = pattern.sub('\n' + new_css.rstrip(), source, count=1)
else:
    source = source.replace('</style>', new_css + '\n</style>', 1)

path.write_text(source, encoding='utf-8')
