from pathlib import Path

path = Path('index.html')
source = path.read_text(encoding='utf-8')
marker = '/* CREATIVE STUDIO SIZE BOOST */'
if marker in source:
    raise SystemExit(0)

css = r'''
  /* CREATIVE STUDIO SIZE BOOST */
  @media (min-width: 881px){
    .creative-stage{
      max-width:960px;
      min-height:390px;
    }
    .creative-stage.reveal{
      transform:translateY(30px) scale(1.04);
    }
    .creative-stage.reveal.in-view{
      transform:translateY(0) scale(1.08);
    }
    .creative-stage-note{
      margin-top:12px;
    }
  }
  @media (min-width: 681px) and (max-width: 880px){
    .creative-stage.reveal.in-view{
      transform:translateY(0) scale(1.04);
    }
  }
'''

if '</style>' not in source:
    raise SystemExit('Could not find </style>')

source = source.replace('</style>', css + '\n</style>', 1)
path.write_text(source, encoding='utf-8')
