from pathlib import Path
import re

INDEX = Path("index.html")
text = INDEX.read_text(encoding="utf-8")

new_css = r'''  /* ============================= CREATIVE PREVIEW (BrandSpace Minimal) ============================= */
  .creative-stage{
    position:relative;
    min-height:350px;
    height:auto;
    max-width:880px;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:18px;
    perspective:1000px;
    isolation:isolate;
  }
  .creative-stage::before{
    content:'';
    position:absolute;
    width:610px;
    height:300px;
    border-radius:50%;
    background:
      radial-gradient(circle at 34% 50%,rgba(255,221,21,.07),transparent 48%),
      radial-gradient(circle at 68% 48%,rgba(121,53,254,.075),transparent 50%);
    filter:blur(10px);
    pointer-events:none;
    z-index:-2;
  }
  .creative-stage::after{
    content:'';
    position:absolute;
    inset:38px 5%;
    background-image:radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px);
    background-size:24px 24px;
    -webkit-mask-image:linear-gradient(90deg,transparent,black 24%,black 76%,transparent);
            mask-image:linear-gradient(90deg,transparent,black 24%,black 76%,transparent);
    opacity:.13;
    pointer-events:none;
    z-index:-3;
  }

  .creative-stage-badge{
    position:absolute;
    top:15px;
    left:50%;
    transform:translateX(-50%);
    display:inline-flex;
    align-items:center;
    gap:7px;
    padding:6px 10px;
    border-radius:999px;
    border:1px solid var(--border);
    background:rgba(13,13,15,.72);
    backdrop-filter:blur(8px);
    font-family:var(--font-mono);
    font-size:8px;
    letter-spacing:.08em;
    color:var(--text-3);
    white-space:nowrap;
  }
  .creative-stage-badge b{font-weight:500;color:var(--accent);}

  .product-card{
    width:182px;
    height:212px;
    flex:0 0 182px;
    border-radius:18px;
    background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.012));
    border:1px solid var(--border);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:20px;
    position:relative;
    overflow:hidden;
    z-index:2;
    box-shadow:0 22px 52px rgba(0,0,0,.42);
    will-change:transform;
  }
  .product-card::before{
    content:'';
    position:absolute;
    inset:-1px;
    background:radial-gradient(170px circle at 50% 15%,rgba(255,221,21,.09),transparent 62%);
    pointer-events:none;
  }
  .creative-brand-logo-wrap{
    width:58px;
    height:58px;
    border-radius:16px;
    display:grid;
    place-items:center;
    background:rgba(255,255,255,.035);
    border:1px solid rgba(255,255,255,.075);
    box-shadow:0 12px 30px rgba(0,0,0,.28),0 0 26px rgba(255,221,21,.07);
    position:relative;
    z-index:2;
    margin-bottom:13px;
  }
  .creative-brand-logo{
    width:46px;
    height:46px;
    object-fit:contain;
    border-radius:12px;
    filter:drop-shadow(0 0 12px rgba(255,221,21,.14));
  }
  .creative-brand-name{
    position:relative;
    z-index:2;
    font-family:var(--font-display);
    font-size:15px;
    font-weight:700;
    color:var(--text-1);
    margin-bottom:5px;
  }
  .creative-brand-label{
    position:relative;
    z-index:2;
    font-family:var(--font-mono);
    font-size:8px;
    letter-spacing:.08em;
    color:var(--text-3);
    margin-bottom:16px;
  }
  .creative-brief-chip{
    position:relative;
    z-index:2;
    width:100%;
    padding:9px 10px;
    border-radius:10px;
    border:1px solid rgba(255,255,255,.065);
    background:rgba(255,255,255,.024);
    text-align:center;
    font-size:10.5px;
    font-weight:600;
    color:var(--text-2);
  }

  .arrow-flow{
    width:122px;
    height:122px;
    flex:0 0 122px;
    margin:0;
    position:relative;
    display:grid;
    place-items:center;
    z-index:3;
    color:inherit;
  }
  .creative-stage:hover .arrow-flow{color:inherit;filter:none;}
  .creative-ai-line{
    position:absolute;
    left:-32px;
    right:-32px;
    top:50%;
    height:1px;
    transform:translateY(-50%);
    background:linear-gradient(90deg,rgba(255,221,21,.06),rgba(255,221,21,.74) 36%,rgba(121,53,254,.72) 66%,rgba(121,53,254,.06));
    z-index:-1;
    overflow:hidden;
  }
  .creative-ai-line::after{
    content:'';
    position:absolute;
    top:-2px;
    width:20px;
    height:5px;
    border-radius:10px;
    background:linear-gradient(90deg,transparent,#fff,var(--accent),transparent);
    filter:drop-shadow(0 0 6px var(--accent));
    animation:creativeSignal 2.8s ease-in-out infinite;
  }
  @keyframes creativeSignal{
    0%{left:-22px;opacity:0;}
    15%,85%{opacity:1;}
    100%{left:calc(100% + 2px);opacity:0;}
  }
  .creative-ai-orb{
    width:74px;
    height:74px;
    border-radius:50%;
    display:grid;
    place-items:center;
    position:relative;
    background:radial-gradient(circle at 36% 30%,rgba(255,221,21,.12),rgba(15,15,18,.97) 62%);
    border:1px solid rgba(255,221,21,.4);
    box-shadow:0 0 0 7px rgba(255,221,21,.02),0 0 32px rgba(255,221,21,.09);
  }
  .creative-ai-orb::before,
  .creative-ai-orb::after{
    content:'';
    position:absolute;
    border-radius:50%;
    border:1px solid transparent;
    pointer-events:none;
  }
  .creative-ai-orb::before{
    inset:-13px;
    border-top-color:rgba(255,221,21,.34);
    border-right-color:rgba(121,53,254,.26);
    animation:creativeOrbit 8s linear infinite;
  }
  .creative-ai-orb::after{
    inset:-24px;
    border-bottom-color:rgba(121,53,254,.16);
    border-left-color:rgba(255,221,21,.12);
    animation:creativeOrbit 13s linear infinite reverse;
  }
  @keyframes creativeOrbit{to{transform:rotate(360deg);}}
  .creative-ai-label{
    font-family:var(--font-display);
    font-size:16px;
    font-weight:800;
    color:var(--text-1);
  }
  .creative-ai-dot{
    position:absolute;
    top:calc(50% + 49px);
    left:50%;
    width:5px;
    height:5px;
    transform:translateX(-50%);
    border-radius:50%;
    background:var(--accent);
    box-shadow:0 0 8px var(--accent);
    animation:creativeBlink 1.7s ease-in-out infinite;
  }
  @keyframes creativeBlink{50%{opacity:.32;transform:translateX(-50%) scale(.75);}}

  .creative-out{
    display:flex;
    align-items:center;
    gap:12px;
    z-index:2;
    perspective:800px;
  }
  .creative-mini{
    width:112px;
    height:172px;
    flex:0 0 112px;
    border-radius:14px;
    border:1px solid var(--border);
    background:linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.012));
    display:flex;
    align-items:stretch;
    padding:9px;
    box-shadow:0 16px 32px rgba(0,0,0,.36);
    will-change:transform;
    overflow:hidden;
    transition:border-color .3s ease,box-shadow .3s ease,background .3s ease;
  }
  .creative-mini:hover{
    border-color:rgba(255,221,21,.2);
    background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.016));
    box-shadow:0 20px 40px rgba(0,0,0,.44),0 0 22px rgba(255,221,21,.03);
  }
  .creative-mini-float{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    animation:creativeFloat 6s ease-in-out infinite;
  }
  .creative-mini.c1 .creative-mini-float{animation-delay:0s;}
  .creative-mini.c2 .creative-mini-float{animation-delay:.65s;}
  .creative-mini.c3 .creative-mini-float{animation-delay:1.3s;}
  @keyframes creativeFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-4px);}}

  .creative-preview{
    position:relative;
    flex:1;
    overflow:hidden;
    border-radius:9px;
    border:1px solid rgba(255,255,255,.055);
    background:#0d0d10;
  }
  .creative-preview::before{
    content:'';
    position:absolute;
    width:92px;
    height:92px;
    border-radius:50%;
    filter:blur(4px);
    opacity:.72;
  }
  .c1 .creative-preview::before{
    right:-36px;
    bottom:-30px;
    background:radial-gradient(circle,var(--accent),rgba(255,221,21,0) 68%);
  }
  .c2 .creative-preview::before{
    left:-34px;
    bottom:-22px;
    background:radial-gradient(circle,var(--violet),rgba(121,53,254,0) 68%);
  }
  .c3 .creative-preview::before{
    right:-32px;
    top:-22px;
    background:radial-gradient(circle,var(--teal),rgba(63,214,196,0) 68%);
  }
  .creative-preview::after{
    content:'';
    position:absolute;
    left:13px;
    right:-28px;
    bottom:-31px;
    height:72px;
    border-radius:60% 20% 0 0;
    transform:rotate(-10deg);
    border-top:1px solid rgba(255,255,255,.08);
    background:linear-gradient(120deg,rgba(255,255,255,.035),transparent 70%);
  }
  .creative-preview-logo{
    position:absolute;
    top:9px;
    left:9px;
    width:19px;
    height:19px;
    border-radius:5px;
    object-fit:contain;
    z-index:2;
  }
  .creative-preview-lines{
    position:absolute;
    left:9px;
    right:9px;
    bottom:10px;
    display:flex;
    flex-direction:column;
    gap:5px;
    z-index:2;
  }
  .creative-preview-lines i{
    display:block;
    height:3px;
    border-radius:4px;
    background:rgba(255,255,255,.16);
  }
  .creative-preview-lines i:first-child{width:62%;}
  .creative-preview-lines i:last-child{width:40%;}
  .creative-mini-meta{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:6px;
    padding:9px 2px 1px;
  }
  .creative-mini span.creative-format{
    font-size:9px;
    font-family:var(--font-mono);
    letter-spacing:.07em;
    color:rgba(255,255,255,.72);
  }
  .creative-format-dot{
    width:5px;
    height:5px;
    border-radius:50%;
    background:var(--accent);
    box-shadow:0 0 8px rgba(255,221,21,.42);
  }
  .c2 .creative-format-dot{background:var(--violet);box-shadow:0 0 8px rgba(121,53,254,.45);}
  .c3 .creative-format-dot{background:var(--teal);box-shadow:0 0 8px rgba(63,214,196,.4);}

  @media(max-width:860px){
    .creative-stage{gap:12px;}
    .product-card{width:164px;flex-basis:164px;}
    .arrow-flow{width:92px;flex-basis:92px;}
    .creative-mini{width:101px;flex-basis:101px;height:160px;}
  }
  @media(max-width:700px){
    .creative-stage{
      flex-direction:column;
      min-height:0;
      gap:18px;
      padding:48px 0 12px;
    }
    .creative-stage-badge{top:4px;}
    .product-card{width:min(100%,290px);height:190px;flex:0 0 auto;}
    .arrow-flow{width:78px;height:78px;flex:0 0 78px;}
    .creative-ai-line{display:none;}
    .creative-ai-orb{width:60px;height:60px;}
    .creative-ai-dot{top:calc(50% + 39px);}
    .creative-out{gap:8px;max-width:100%;}
    .creative-mini{width:91px;flex-basis:91px;height:145px;padding:7px;}
    .creative-preview-logo{width:16px;height:16px;top:7px;left:7px;}
  }
  @media(max-width:350px){
    .creative-mini{width:83px;flex-basis:83px;}
  }

'''

new_html = r'''  <!-- ============================= CREATIVE STUDIO PREVIEW ============================= -->
  <section aria-label="AI Creative Studio preview">
    <div class="wrap">
      <div class="section-head center" style="margin-left:auto;margin-right:auto;">
        <span class="section-tag">AI CREATIVE STUDIO</span>
        <h2>One idea. <span class="grad">Every format.</span></h2>
        <p>Give BrandSpace one creative direction and let AI adapt it into polished content for every channel.</p>
      </div>

      <div class="creative-stage reveal" id="creativeStage">
        <div class="creative-stage-badge"><span>1 IDEA</span><b>→</b><span>3 FORMATS</span></div>

        <div class="product-card" id="prodCard">
          <div class="creative-brand-logo-wrap">
            <img class="creative-brand-logo" src="logo.png" alt="BrandSpace logo">
          </div>
          <div class="creative-brand-name">BrandSpace</div>
          <div class="creative-brand-label">YOUR BRAND</div>
          <div class="creative-brief-chip">Launch campaign</div>
        </div>

        <div class="arrow-flow" aria-hidden="true" id="creativeArrow">
          <div class="creative-ai-line"></div>
          <div class="creative-ai-orb"><span class="creative-ai-label">AI</span></div>
          <span class="creative-ai-dot"></span>
        </div>

        <div class="creative-out" aria-label="Generated creative formats">
          <div class="creative-mini c1">
            <div class="creative-mini-float">
              <div class="creative-preview">
                <img class="creative-preview-logo" src="logo.png" alt="">
                <div class="creative-preview-lines" aria-hidden="true"><i></i><i></i></div>
              </div>
              <div class="creative-mini-meta"><span class="creative-format">POST</span><i class="creative-format-dot"></i></div>
            </div>
          </div>

          <div class="creative-mini c2">
            <div class="creative-mini-float">
              <div class="creative-preview">
                <img class="creative-preview-logo" src="logo.png" alt="">
                <div class="creative-preview-lines" aria-hidden="true"><i></i><i></i></div>
              </div>
              <div class="creative-mini-meta"><span class="creative-format">STORY</span><i class="creative-format-dot"></i></div>
            </div>
          </div>

          <div class="creative-mini c3">
            <div class="creative-mini-float">
              <div class="creative-preview">
                <img class="creative-preview-logo" src="logo.png" alt="">
                <div class="creative-preview-lines" aria-hidden="true"><i></i><i></i></div>
              </div>
              <div class="creative-mini-meta"><span class="creative-format">AD</span><i class="creative-format-dot"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

'''

css_pattern = re.compile(
    r"\s*/\* ============================= CREATIVE PREVIEW \(Parallax Enhanced\) ============================= \*/.*?(?=\s*/\* ============================= ANALYTICS PREVIEW ============================= \*/)",
    re.S,
)
html_pattern = re.compile(
    r"\s*<!-- ============================= CREATIVE STUDIO PREVIEW ============================= -->.*?(?=\s*<!-- ============================= ANALYTICS PREVIEW ============================= -->)",
    re.S,
)

text, css_count = css_pattern.subn("\n" + new_css, text, count=1)
text, html_count = html_pattern.subn("\n" + new_html, text, count=1)

if css_count != 1 or html_count != 1:
    raise SystemExit(f"Patch failed: css={css_count}, html={html_count}")

INDEX.write_text(text, encoding="utf-8")

# Remove temporary automation files in the same commit.
for temporary in [Path("patch_creative.py"), Path(".github/workflows/patch-creative-studio.yml")]:
    if temporary.exists():
        temporary.unlink()
