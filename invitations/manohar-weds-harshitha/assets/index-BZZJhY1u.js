import{r as n,j as e}from"./index-CSqz49Uk.js";const D=(...t)=>t.filter((s,a,i)=>!!s&&s.trim()!==""&&i.indexOf(s)===a).join(" ").trim();const I=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const T=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,a,i)=>i?i.toUpperCase():a.toLowerCase());const M=t=>{const s=T(t);return s.charAt(0).toUpperCase()+s.slice(1)};var B={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const F=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};const $=n.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:m="",children:o,iconNode:c,...l},u)=>n.createElement("svg",{ref:u,...B,width:s,height:s,stroke:t,strokeWidth:i?Number(a)*24/Number(s):a,className:D("lucide",m),...!o&&!F(l)&&{"aria-hidden":"true"},...l},[...c.map(([b,p])=>n.createElement(b,p)),...Array.isArray(o)?o:[o]]));const E=(t,s)=>{const a=n.forwardRef(({className:i,...m},o)=>n.createElement($,{ref:o,iconNode:s,className:D(`lucide-${I(M(t))}`,`lucide-${t}`,i),...m}));return a.displayName=M(t),a};const P=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],H=E("navigation",P);const L=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],O=E("volume-2",L);const W=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],G=E("volume-x",W);
const V=new Date("2026-11-11T09:20:00+05:30").getTime();
function R(){const t=Math.max(0,V-Date.now());return[Math.floor(t/864e5),Math.floor(t/36e5%24),Math.floor(t/6e4%60),Math.floor(t/1e3%60)]}
function J(){
  const[t,s]=n.useState(R);
  return n.useEffect(()=>{const a=setInterval(()=>s(R()),1e3);return()=>clearInterval(a)},[]),
  e.jsx("div",{className:"countdown","aria-label":"Wedding countdown",children:[
    {label:"DAYS",sub:"Days"},
    {label:"HOURS",sub:"Hours"},
    {label:"MINS",sub:"Mins"},
    {label:"SECS",sub:"Secs"}
  ].map((a,i)=>e.jsxs("div",{className:"countdown-item",children:[
    e.jsx("div",{className:"countdown-number font-cinzel font-semibold",children:String(t[i]).padStart(2,"0")}),
    e.jsx("span",{className:"font-cinzel text-xs tracking-wider",children:a.label})
  ]},a.sub))})
}
function _({revealed:t,onRevealed:s}){
  const a=n.useRef(null),i=n.useRef(null),m=n.useRef(!1),o=n.useRef(null),[c,l]=n.useState(!1),u=n.useRef(null),
  b=n.useCallback(()=>{t||(m.current=!1,l(!0),s(),u.current=setTimeout(()=>l(!1),2800))},[t,s]);
  n.useEffect(()=>{
    const r=a.current,x=i.current;if(!r||!x||t)return;
    function d(){
      if(!r||!x)return;
      const f=x.getBoundingClientRect(),N=window.devicePixelRatio||1;
      r.width=Math.round(f.width*N),r.height=Math.round(f.height*N);
      const g=r.getContext("2d");if(!g)return;
      g.scale(N,N);
      const j=g.createLinearGradient(0,0,f.width,f.height);
      j.addColorStop(0,"#5c0f14"),j.addColorStop(.25,"#8b1e24"),j.addColorStop(.5,"#b3262d"),j.addColorStop(.75,"#8b1e24"),j.addColorStop(1,"#4a0b10"),
      g.fillStyle=j,g.fillRect(0,0,f.width,f.height),
      g.fillStyle="#f8d7a8",g.font='600 13px "Cinzel", "Rozha One", serif',
      g.textAlign="center",g.textBaseline="middle",
      g.fillText("✦  SCRATCH TO REVEAL DATE  ✦",f.width/2,f.height/2)
    }
    d();
    const w=new ResizeObserver(d);w.observe(x);
    let h=!1;return document.fonts.ready.then(()=>{h||d()}),()=>{h=!0,w.disconnect()}
  },[t]),
  n.useEffect(()=>()=>{u.current&&clearTimeout(u.current)},[]);
  function p(r){
    const x=a.current;if(!x||!m.current||t)return;
    const d=x.getContext("2d");if(!d)return;
    const w=x.getBoundingClientRect(),h={x:r.clientX-w.left,y:r.clientY-w.top},f=o.current||h;
    d.globalCompositeOperation="destination-out",d.lineWidth=56,d.lineCap="round",d.beginPath(),d.moveTo(f.x,f.y),d.lineTo(h.x,h.y),d.stroke(),d.beginPath(),d.arc(h.x,h.y,28,0,Math.PI*2),d.fill(),o.current=h
  }
  function z(){
    m.current=!1,o.current=null;
    const r=a.current,x=r?.getContext("2d");if(!r||!x||t)return;
    const d=x.getImageData(0,0,r.width,r.height).data;
    let w=0,h=0;
    for(let f=3;f<d.length;f+=160)h+=1,d[f]<60&&(w+=1);
    h&&w/h>.45&&b()
  }
  return e.jsxs("div",{className:"scratch-wrapper",children:[
    e.jsxs("div",{ref:i,className:"scratch-card",children:[
      e.jsxs("div",{className:"scratch-date",children:[
        e.jsx("p",{className:"font-cinzel text-xs tracking-[0.25em] text-[#5C0F14]/80 uppercase",children:"WEDNESDAY • ಬುಧವಾರ"}),
        e.jsx("strong",{className:"font-cinzel text-xl sm:text-2xl text-rose font-bold tracking-wider mt-1",children:"11-11-2026"}),
        e.jsx("span",{className:"font-kannada text-xs text-foreground/80 mt-1 font-medium",children:"Kengal, Channapatna • ಕೆಂಗಲ್, ಚನ್ನಪಟ್ಟಣ"})
      ]}),
      !t&&e.jsx("canvas",{ref:a,role:"button",tabIndex:0,"aria-label":"Scratch to reveal the wedding date, or press Enter",onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),b())},onPointerDown:r=>{r.currentTarget.setPointerCapture(r.pointerId),m.current=!0,p(r)},onPointerMove:p,onPointerUp:z,onPointerCancel:z})
    ]}),
    c&&e.jsx("div",{className:"confetti-container","aria-hidden":"true",children:Array.from({length:45},(r,x)=>e.jsx("span",{style:{"--confetti-x":`${x*71%700-350}px`,"--confetti-rotate":`${x*47}deg`,background:["#f9c8d9","#f4a3bf","#e87aa3","#c75a85","#d8b88f"][x%5],animationDelay:`${x%5*.06}s`}},x))})
  ]})
}
function U({className:t="",children:s,...a}){return e.jsx("span",{className:`directions-button ${t}`,...a,children:s})}
const Y="./img/maroonenvelop-DVcZBctQ.png",v="./img/MH-lgo.png",A="./img/ganesh-idol-TubyYjSJ.png",Z="./img/g-envelope-bg-B_YE_ECq.png",
q=({onOpen:t,opening:s})=>e.jsxs("div",{className:"min-h-screen w-full flex flex-col items-center justify-center relative bg-[#FCF8F2] px-6 overflow-hidden",children:[
  e.jsx("img",{src:Z,alt:"",className:"absolute inset-0 w-full h-full object-cover pointer-events-none"}),
  e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream/40 pointer-events-none"}),
  e.jsx("span",{className:"absolute top-6 left-6 text-3xl opacity-70 animate-drift pointer-events-none",children:"🪷"}),
  e.jsx("span",{className:"absolute bottom-8 left-10 text-3xl opacity-70 animate-drift pointer-events-none",style:{animationDelay:"2s"},children:"🌿"}),
  e.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center max-w-md w-full text-center",children:[
    e.jsx("div",{className:`mb-6 transition-all duration-500 ${s?"opacity-0 scale-95":"animate-fade-up"}`,children:e.jsx("img",{src:A,alt:"Lord Ganesha",className:"w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto drop-shadow-md animate-shimmer"})}),
    e.jsxs("button",{onClick:t,"aria-label":"Open invitation",className:`relative group transition-transform duration-500 hover:scale-105 active:scale-95 ${s?"animate-envelope-open":"animate-fade-up delay-100"}`,style:{perspective:"1000px"},children:[
      e.jsx("img",{src:Y,alt:"Wedding invitation envelope",className:"w-[280px] sm:w-[340px] md:w-[380px] h-auto drop-shadow-2xl"}),
      e.jsx("span",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("img",{src:v,alt:"Manohar & Harshitha wax seal monogram",className:"w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover drop-shadow-lg group-hover:rotate-12 transition-transform duration-500"})})
    ]}),
    e.jsxs("div",{className:`mt-8 text-center transition-all duration-500 ${s?"opacity-0 translate-y-4 pointer-events-none":"animate-fade-up delay-200"}`,children:[
      e.jsx("h1",{className:"font-royal-sub text-xl sm:text-2xl text-rose-deep font-bold tracking-[0.22em]",children:"YOU'RE INVITED"}),
      e.jsxs("p",{className:"mt-2 text-rose font-royal-script text-5xl sm:text-6xl font-normal",children:[e.jsx("span",{className:"font-royal-capital-a",children:"M"}),"anohar & Harshitha"]}),
      e.jsx("p",{className:"mt-1 font-kannada text-rose-deep/90 text-base sm:text-lg font-semibold",children:"ಮನೋಹರ್ & ಹರ್ಷಿತಾ"}),
      e.jsx("p",{className:"mt-3 font-royal-body text-foreground/85 tracking-wide text-xs sm:text-sm font-medium",children:"Tap the envelope to open our invitation"})
    ]})
  ]})
]});
const S="./img/g-welcome-bg-BCda9f2G.png",K="./img/g-shiva-parvati-D5GA8Xot.png",ee="./img/reception-couple.png",te="./img/04-CC6lrDGi.png",k="./img/wedding-hero-BBfn2Y6k.jpg",re="./img/g-haldi-bg-CB-4YaJG.png",ce="./img/g-wedding-bg-8_wipKLl.png",fe="./img/family.png";

const GALLERY_ITEMS=[
  {
    src:"./img/WhatsApp%20Image%202026-10-30%20at%208.57.31%20PM.jpeg",
    tag:"DIVINE BLESSINGS • ದೈವಿಕ ಆಶೀರ್ವಾದ",
    titleEn:"Lord Shiva & Goddess Parvati",
    titleKn:"ಶ್ರೀ ಶಿವ-ಪಾರ್ವತಿಯರ ದೈವಿಕ ಆಶೀರ್ವಾದ"
  },
  {
    src:"./img/WhatsApp%20Image%202026-10-30%20at%208.56.21%20PM.jpeg",
    tag:"SACRED UNION • ಪವಿತ್ರ ಬಂಧನ",
    titleEn:"Sacred Bond Blessed by Mahadev & Parvati",
    titleKn:"ಪವಿತ್ರ ಬಂಧನಕ್ಕೆ ಆದಿ ದಂಪತಿಗಳ ಕೃಪೆ"
  },
  {
    src:"./img/WhatsApp%20Image%202026-10-29%20at%208.32.03%20PM.jpeg",
    tag:"ROYAL MONOGRAM • ಶುಭ ಲಾಂಛನ",
    titleEn:"Manohar & Harshitha — Couple Monogram",
    titleKn:"ಮನೋಹರ್ ಮತ್ತು ಹರ್ಷಿತಾ — ಶುಭ ವಿವಾಹ ಲಾಂಛನ"
  }
];

function pe(){
  const[t,s]=n.useState(0),a=n.useRef(null);
  n.useEffect(()=>{
    const c=setInterval(()=>s(l=>(l+1)%GALLERY_ITEMS.length),3200);
    return()=>clearInterval(c);
  },[]);
  const i=()=>s(c=>(c-1+GALLERY_ITEMS.length)%GALLERY_ITEMS.length),
  m=()=>s(c=>(c+1)%GALLERY_ITEMS.length);
  return e.jsxs("div",{className:"w-full flex flex-col items-center",children:[
    e.jsx("div",{className:"gallery-card-frame",onTouchStart:c=>{a.current=c.touches[0]?.clientX??null},onTouchEnd:c=>{if(a.current===null)return;const l=(c.changedTouches[0]?.clientX??a.current)-a.current;Math.abs(l)>40&&(l>0?i():m());a.current=null},children:
      e.jsxs("div",{className:"gallery-viewport",children:[
        GALLERY_ITEMS.map((c,l)=>e.jsxs("div",{className:`gallery-slide ${l===t?"is-active":""}`,"aria-hidden":l!==t,children:[
          e.jsx("img",{src:c.src,alt:"",className:"gallery-slide-bg"}),
          e.jsx("img",{src:c.src,alt:c.titleEn,className:"gallery-slide-img"}),
          e.jsxs("div",{className:"gallery-caption-bar",children:[
            e.jsx("p",{className:"font-royal-sub text-[11px] tracking-[0.18em] text-amber-200 font-bold",style:{color:"#FDE68A"},children:c.tag}),
            e.jsx("h3",{className:"font-royal-title text-base sm:text-lg font-bold text-white mt-0.5",style:{color:"#FFF8EE"},children:c.titleEn}),
            e.jsx("p",{className:"font-kannada text-xs sm:text-sm font-semibold text-amber-100 mt-0.5",style:{color:"#FEF3C7"},children:c.titleKn})
          ]})
        ]},c.src)),
        e.jsx("button",{type:"button",onClick:i,"aria-label":"Previous slide",className:"gallery-nav-btn gallery-nav-prev",children:"❮"}),
        e.jsx("button",{type:"button",onClick:m,"aria-label":"Next slide",className:"gallery-nav-btn gallery-nav-next",children:"❯"})
      ]})
    }),
    e.jsx("div",{className:"gallery-dots",children:GALLERY_ITEMS.map((c,l)=>e.jsx("button",{type:"button",onClick:()=>s(l),"aria-label":`Show slide ${l+1}`,className:`gallery-dot ${l===t?"is-active":""}`},l))}),
    e.jsx("div",{className:"gallery-thumbs",children:GALLERY_ITEMS.map((c,l)=>e.jsx("button",{type:"button",onClick:()=>s(l),"aria-label":c.titleEn,className:`gallery-thumb ${l===t?"is-active":""}`,children:e.jsx("img",{src:c.src,alt:c.titleEn})},l))})
  ]});
}

const de=()=>{
  const[t,s]=n.useState(!1),[a,i]=n.useState({}),m=n.useRef(null),o=n.useRef(null);
  return n.useEffect(()=>{
    const c=new IntersectionObserver(l=>{l.forEach(u=>{if(u.isIntersecting){const b=u.target.getAttribute("data-id");b&&i(p=>({...p,[b]:!0}))}})},{threshold:.15});
    return m.current&&c.observe(m.current),o.current&&c.observe(o.current),()=>c.disconnect();
  },[]),
  e.jsxs("main",{className:"relative bg-[#FCF8F2] min-h-screen text-rose-deep overflow-hidden select-none animate-fade-in",children:[
    e.jsx("div",{className:"fixed inset-0 pointer-events-none opacity-[0.08] z-0 mix-blend-overlay",children:e.jsx("img",{src:S,alt:"",className:"w-full h-full object-cover"})}),

    // 1. HERO SECTION — Every text first in English, then in Kannada
    e.jsxs("section",{ref:m,"data-id":"welcome",className:"relative min-h-screen w-full flex flex-col items-center justify-between py-12 px-6 bg-cover bg-center overflow-hidden z-10",style:{backgroundImage:`url(${S})`},children:[
      e.jsx("div",{className:"absolute inset-0 bg-[#FCF8F2]/10 pointer-events-none"}),
      e.jsxs("div",{className:"absolute top-0 left-0 right-0 z-20 flex justify-between px-4 sm:px-12 pointer-events-none",children:[
        e.jsxs("div",{className:"flex gap-4 sm:gap-8 items-start",children:[
          e.jsxs("div",{className:"flex flex-col items-center animate-bell-swing origin-top",style:{animationDelay:"0.2s"},children:[e.jsx("div",{className:"w-0.5 h-16 sm:h-28 bg-amber-700/40"}),e.jsx(C,{className:"w-10 h-10 sm:w-16 sm:h-16 text-amber-700 drop-shadow-md"})]}),
          e.jsxs("div",{className:"flex flex-col items-center animate-bell-swing origin-top",style:{animationDelay:"0.8s"},children:[e.jsx("div",{className:"w-0.5 h-10 sm:h-20 bg-amber-700/40"}),e.jsx(C,{className:"w-8 h-8 sm:w-12 sm:h-12 text-amber-700 drop-shadow-md"})]})
        ]}),
        e.jsxs("div",{className:"flex gap-4 sm:gap-8 items-start",children:[
          e.jsxs("div",{className:"flex flex-col items-center animate-bell-swing origin-top",style:{animationDelay:"0.5s"},children:[e.jsx("div",{className:"w-0.5 h-12 sm:h-22 bg-amber-700/40"}),e.jsx(C,{className:"w-9 h-9 sm:w-14 sm:h-14 text-amber-700 drop-shadow-md"})]}),
          e.jsxs("div",{className:"flex flex-col items-center animate-bell-swing origin-top",style:{animationDelay:"1.1s"},children:[e.jsx("div",{className:"w-0.5 h-20 sm:h-32 bg-amber-700/40"}),e.jsx(C,{className:"w-10 h-10 sm:w-16 sm:h-16 text-amber-700 drop-shadow-md"})]})
        ]})
      ]}),
      e.jsxs("div",{className:"relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center mt-12 sm:mt-16",children:[
        // Top Deity Invocations: First English, Then Kannada
        e.jsxs("div",{className:"mb-5 animate-fade-up flex flex-col items-center",children:[
          e.jsx("img",{src:A,alt:"Lord Ganesha",width:80,height:80,className:"mx-auto h-20 w-20 sm:h-24 sm:h-24 object-contain drop-shadow-md animate-shimmer"}),
          e.jsxs("div",{className:"bg-[#FCF8F2]/95 border border-gold-soft px-6 py-3 rounded-2xl shadow-sm inline-flex flex-col items-center gap-1 mt-3",children:[
            e.jsx("p",{className:"font-royal-sub text-xs sm:text-sm tracking-[0.12em] text-[#5C0F14] font-bold",children:"|| Shree Male Mahadeshwara Krupe ||"}),
            e.jsx("p",{className:"font-royal-sub text-xs sm:text-sm tracking-[0.12em] text-[#5C0F14] font-bold",children:"|| Shree Umathooru Urkateshwari Krupe ||"}),
            e.jsx("div",{className:"w-16 h-px bg-gold-soft/70 my-1"}),
            e.jsx("p",{className:"font-kannada text-xs sm:text-sm text-[#5C0F14] font-bold tracking-wide",children:"🙏 ॥ ಶ್ರೀ ಮಲೆ ಮಹದೇಶ್ವರ ಕೃಪೆ ॥ 🙏"}),
            e.jsx("p",{className:"font-kannada text-xs sm:text-sm text-[#5C0F14] font-bold tracking-wide",children:"🙏 ॥ ಶ್ರೀ ಉಮ್ಮತ್ತೂರು ಊರುಕಾಟೇಶ್ವರಿ ಕೃಪೆ ॥ 🙏"})
          ]})
        ]}),

        // Main Invitation Card: First English, Then Kannada
        e.jsxs("div",{className:"max-w-lg mx-auto bg-[#FCF8F2]/95 border-2 border-gold-soft p-6 rounded-2xl mb-6 shadow-elegant animate-fade-up delay-200 backdrop-blur-sm",children:[
          e.jsx("h2",{className:"font-royal-title text-lg sm:text-xl text-[#5C0F14] font-bold tracking-[0.14em] uppercase",children:"💐 WEDDING INVITATION 💐"}),
          e.jsx("p",{className:"font-kannada text-base sm:text-lg text-[#5C0F14] font-bold mt-1",children:"💐 ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ 💐"}),
          e.jsx("div",{className:"w-20 h-px bg-gold-soft mx-auto my-3"}),
          e.jsx("p",{className:"font-royal-body text-sm sm:text-base text-foreground/90 font-medium leading-relaxed",children:
            "We warmly welcome you to join us on this auspicious occasion and bless the couple as they embark on their journey of togetherness."
          }),
          e.jsx("div",{className:"w-14 h-px bg-gold-soft/60 mx-auto my-3"}),
          e.jsx("p",{className:"font-kannada text-sm sm:text-base text-rose-deep font-medium leading-relaxed",children:
            "ಹಿರಿಯರ ಆಶೀರ್ವಾದ ಹಾಗೂ ದೇವರ ಕೃಪೆಯೊಂದಿಗೆ, ನಮ್ಮ ಮನೆಯ ಶುಭ ಸಮಾರಂಭಕ್ಕೆ ಆಗಮಿಸಿ, ನವಜೋಡಿಗಳು ತಮ್ಮ ಜೀವನದ ಹೊಸ ಪಯಣವನ್ನು ಆರಂಭಿಸುವ ಈ ಮಂಗಳಕರ ಸಂದರ್ಭದಲ್ಲಿ ತಮ್ಮ ಆಶೀರ್ವಾದವನ್ನು ನೀಡಿ ಹರಸಬೇಕೆಂದು ಹೃತ್ಪೂರ್ವಕವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ."
          })
        ]}),

        // Couple Details: Groom First, Bride Second — Each with English first, then Kannada
        e.jsxs("div",{className:"mt-4 flex flex-col items-center w-full",children:[
          // 1. The Groom: Manohar M
          e.jsxs("div",{className:"flex flex-col items-center max-w-lg px-2",children:[
            e.jsx("span",{className:"font-royal-sub text-xs tracking-[0.22em] text-amber-800 font-bold uppercase mb-1 animate-fade-up delay-300",children:"THE GROOM • ವರ"}),
            e.jsx("h1",{className:"animate-fade-up delay-400",children:
              e.jsx("span",{className:"font-royal-title text-3xl sm:text-5xl text-rose font-bold tracking-wide drop-shadow-sm hover:scale-105 transition-transform duration-500 block",children:"Manohar M"})
            }),
            e.jsx("p",{className:"font-kannada text-lg sm:text-xl text-[#5C0F14] font-bold mt-1 animate-fade-up delay-400",children:"ಚಿ.ರಾ. ಮನೋಹರ್ ಎಂ."}),
            e.jsxs("div",{className:"mt-2 text-xs sm:text-sm text-foreground/90 tracking-wide leading-relaxed animate-fade-up delay-500 text-center space-y-1",children:[
              e.jsx("p",{className:"font-royal-body font-semibold text-rose-deep text-sm sm:text-base",children:"S/o Smt. K. Sudhamani and Late Dr. S.E. Mahadevappa"}),
              e.jsx("p",{className:"font-kannada font-semibold text-rose-deep text-sm sm:text-base",children:"ಶ್ರೀಮತಿ ಕೆ. ಸುಧಾಮಣಿ ಹಾಗೂ ದಿವಂಗತ ಡಾ. ಎಸ್.ಇ. ಮಹದೇವಪ್ಪ ಅವರ ಸುಪುತ್ರ."})
            ]})
          ]}),

          // weds divider
          e.jsxs("div",{className:"my-5 flex items-center justify-center gap-3 animate-fade-up delay-500",children:[
            e.jsx("span",{className:"h-px w-14 bg-gold-soft/70"}),
            e.jsx("span",{className:"font-royal-script text-3xl sm:text-4xl text-amber-700 italic",children:"weds"}),
            e.jsx("span",{className:"h-px w-14 bg-gold-soft/70"})
          ]}),

          // 2. The Bride: Harshitha MK
          e.jsxs("div",{className:"flex flex-col items-center max-w-lg px-2",children:[
            e.jsx("span",{className:"font-royal-sub text-xs tracking-[0.22em] text-amber-800 font-bold uppercase mb-1 animate-fade-up delay-500",children:"THE BRIDE • ವಧು"}),
            e.jsx("h1",{className:"animate-fade-up delay-500",children:
              e.jsx("span",{className:"font-royal-title text-3xl sm:text-5xl text-rose font-bold tracking-wide drop-shadow-sm hover:scale-105 transition-transform duration-500 block",children:"Harshitha MK"})
            }),
            e.jsx("p",{className:"font-kannada text-lg sm:text-xl text-[#5C0F14] font-bold mt-1 animate-fade-up delay-500",children:"ಚಿ. ಸೌ. ಹರ್ಷಿತಾ ಎಂ.ಕೆ."}),
            e.jsxs("div",{className:"mt-2 text-xs sm:text-sm text-foreground/90 tracking-wide leading-relaxed animate-fade-up delay-700 text-center space-y-1",children:[
              e.jsx("p",{className:"font-royal-body font-semibold text-rose-deep text-sm sm:text-base",children:"D/o Smt. Manjula Murthy and Sri M.S. Keshavamurthy"}),
              e.jsx("p",{className:"font-kannada font-semibold text-rose-deep text-sm sm:text-base",children:"ಶ್ರೀಮತಿ ಮಂಜುಳಾ ಮೂರ್ತಿ ಹಾಗೂ ಶ್ರೀ ಎಂ.ಎಸ್. ಕೇಶವಮೂರ್ತಿ ಅವರ ಸುಪುತ್ರಿ."})
            ]})
          ]})
        ]})
      ]}),
      e.jsx("div",{className:"relative z-10 w-full max-w-[280px] sm:max-w-[340px] mt-8 flex justify-center items-end animate-fade-up delay-1000",children:
        e.jsx("img",{src:K,alt:"Divine blessings illustration",className:"w-full h-auto object-contain drop-shadow-xl select-none"})
      })
    ]}),

    // 2. PARENTS' BLESSINGS SECTION (Using /img/family.png in a Royal Gold Portrait Card)
    e.jsxs("section",{className:"relative py-20 px-6 bg-[#FAF6F0] border-t border-gold-soft/30 z-10 overflow-hidden",children:[
      e.jsx("img",{src:k,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"}),
      e.jsxs("div",{className:"relative max-w-2xl mx-auto text-center z-10 flex flex-col items-center",children:[
        e.jsx("p",{className:"font-royal-sub text-xs tracking-[0.22em] text-amber-800 uppercase font-bold",children:"PARENTS' BLESSINGS • ತಂದೆ-ತಾಯಿಯವರ ಆಶೀರ್ವಾದ"}),
        e.jsx("h2",{className:"font-royal-title text-2xl sm:text-4xl text-rose-deep font-bold mt-1",children:"With the Eternal Blessings of Parents"}),
        e.jsx("p",{className:"font-kannada text-base sm:text-lg text-[#5C0F14] font-bold mt-1",children:"ಪ್ರೀತಿಯ ತಂದೆ-ತಾಯಿಯವರ ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ"}),
        e.jsx(y,{}),
        e.jsxs("div",{className:"relative mt-2 mb-6 p-3 rounded-3xl bg-gradient-gold shadow-gold max-w-[280px] sm:max-w-[340px] w-full mx-auto",style:{background:"linear-gradient(135deg, #d4af37 0%, #FFF8EE 50%, #aa7c11 100%)"},children:[
          e.jsx("div",{className:"rounded-2xl overflow-hidden border-2 border-[#5C0F14]/20 bg-[#FCF8F2] shadow-elegant",children:
            e.jsx("img",{src:fe,alt:"Parents Blessings",className:"w-full h-auto object-cover"})
          })
        ]}),
        e.jsxs("div",{className:"bg-[#FCF8F2]/95 border-2 border-gold-soft p-6 rounded-2xl shadow-elegant max-w-xl w-full space-y-2",children:[
          e.jsx("h3",{className:"font-royal-title text-lg sm:text-xl text-[#5C0F14] font-bold",children:"Smt. K. Sudhamani & Late Dr. S.E. Mahadevappa"}),
          e.jsx("p",{className:"font-kannada text-base sm:text-lg text-rose-deep font-bold",children:"ಶ್ರೀಮತಿ ಕೆ. ಸುಧಾಮಣಿ ಹಾಗೂ ದಿವಂಗತ ಡಾ. ಎಸ್.ಇ. ಮಹದೇವಪ್ಪ"}),
          e.jsx("div",{className:"w-16 h-px bg-gold-soft mx-auto my-2"}),
          e.jsx("p",{className:"font-royal-body italic text-xs sm:text-sm text-foreground/85 leading-relaxed",children:"\"May the eternal love, values, and divine blessings of our beloved parents forever guide and bless this sacred union.\""}),
          e.jsx("p",{className:"font-kannada text-xs sm:text-sm text-rose-deep/90 font-medium leading-relaxed",children:"\"ತಂದೆ-ತಾಯಿಯವರ ಪ್ರೀತಿ, ಸಂಸ್ಕಾರ ಹಾಗೂ ಆಶೀರ್ವಾದಗಳು ನವಜೋಡಿಯ ಜೀವನ ಪಯಣದಲ್ಲಿ ಸದಾ ದಾರಿದೀಪವಾಗಿರಲಿ.\""})
        ]})
      ]})
    ]}),

    // 3. SACRED BLESSINGS & COUPLE MONOGRAM AUTO-SLIDING GALLERY SECTION
    e.jsxs("section",{className:"relative py-20 px-4 sm:px-6 bg-[#FCF8F2] border-t border-gold-soft/30 z-10 overflow-hidden",children:[
      e.jsx("img",{src:S,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"}),
      e.jsxs("div",{className:"relative max-w-3xl mx-auto text-center z-10 flex flex-col items-center",children:[
        e.jsx("p",{className:"font-royal-sub text-xs tracking-[0.22em] text-amber-800 uppercase font-bold",children:"DIVINE GRACE & ROYAL CREST • ದೈವಿಕ ಕೃಪೆ ಮತ್ತು ಲಾಂಛನ"}),
        e.jsx("h2",{className:"font-royal-title text-2xl sm:text-4xl text-rose-deep font-bold mt-1",children:"Sacred Blessings & Couple Gallery"}),
        e.jsx("p",{className:"font-kannada text-base sm:text-lg text-[#5C0F14] font-bold mt-1",children:"ಶಿವ-ಪಾರ್ವತಿಯರ ಆಶೀರ್ವಾದ ಮತ್ತು ಶುಭ ವಿವಾಹ ಲಾಂಛನ"}),
        e.jsx(y,{}),
        e.jsx(pe,{})
      ]})
    ]}),

    // 4. SAVE THE DATE
    e.jsxs("section",{className:"relative py-20 px-6 bg-cream border-y border-gold-soft/30 z-10",children:[
      e.jsx("img",{src:k,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"}),
      e.jsxs("div",{className:"relative max-w-3xl mx-auto text-center z-10",children:[
        e.jsx("h2",{className:"font-royal-sub text-lg sm:text-xl text-rose-deep tracking-[0.2em] mb-1 font-bold",children:"SAVE THE DATE"}),
        e.jsx("p",{className:"font-royal-body text-sm sm:text-base text-rose-deep/90 font-medium",children:"Scratch below to reveal our wedding date"}),
        e.jsx("p",{className:"font-kannada text-xs sm:text-sm text-rose-deep/85 font-medium mt-0.5",children:"ವಿವಾಹದ ದಿನಾಂಕವನ್ನು ನೋಡಲು ಕೆಳಗೆ ಸ್ಕ್ರ್ಯಾಚ್ ಮಾಡಿ"}),
        e.jsx(y,{}),
        e.jsx("div",{className:"mb-10 mt-8",children:e.jsx(_,{revealed:t,onRevealed:()=>s(!0)})}),
        e.jsx("div",{className:`transition-all duration-1000 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-8 pointer-events-none h-0 overflow-hidden"}`,"aria-hidden":!t,children:e.jsx(J,{})})
      ]})
    ]}),

    // 5. EVENTS SCHEDULE (3 Events: Haldi, Reception, Wedding — First English, Then Kannada)
    e.jsx("section",{className:"relative py-20 px-4 sm:px-6 bg-[#FCF8F2] z-10",children:
      e.jsxs("div",{className:"max-w-4xl mx-auto",children:[
        e.jsxs("div",{className:"text-center mb-16",children:[
          e.jsx("h2",{className:"font-royal-title text-3xl sm:text-4xl text-rose-deep font-bold tracking-wide",children:"EVENTS SCHEDULE"}),
          e.jsx("p",{className:"font-kannada text-lg sm:text-xl text-[#5C0F14] font-bold mt-1",children:"ಶುಭ ಸಮಾರಂಭಗಳ ವಿವರ"}),
          e.jsx("p",{className:"font-royal-sub text-xs tracking-[0.22em] text-rose-deep/80 mt-1 font-semibold",children:"CELEBRATE WITH US"}),
          e.jsx(y,{}),
          e.jsx("p",{className:"font-royal-body text-sm sm:text-base text-foreground/85 mt-1 font-semibold",children:"09-11-2026 • 11-11-2026 • 12-11-2026"})
        ]}),
        e.jsxs("div",{className:"space-y-16",children:[
          // Event 1: HALDI CEREMONY (09-11-2026, Monday, 7:00 PM)
          e.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-gold-soft bg-white p-6 sm:p-12 shadow-elegant hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[550px] isolate",children:[
            e.jsx("img",{src:re,alt:"",className:"absolute inset-0 w-full h-full object-cover z-0 pointer-events-none scale-[1.06] origin-center"}),
            e.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden mix-blend-color-burn z-10",children:Array.from({length:15}).map((c,l)=>e.jsx("div",{className:"absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-400 opacity-60 animate-turmeric",style:{left:`${l*37%100}%`,top:`${10+l*23%80}%`,animationDelay:`${l*7%30/10}s`,animationDuration:`${2.5+l*11%30/10}s`}},l))}),
            e.jsxs("div",{className:"relative top-4 z-10 text-center flex flex-col items-center w-full mx-auto bg-white/75 backdrop-blur-md border border-white/60 p-5 sm:p-6 rounded-3xl shadow-elegant mt-12 sm:mt-16",children:[
              e.jsx("img",{src:v,alt:"MH Monogram",className:"w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mx-auto mb-2 shadow-sm"}),
              e.jsx("p",{className:"font-royal-body italic text-amber-800 text-sm font-semibold tracking-wide",children:"#HaldiCeremony"}),
              e.jsx("h2",{className:"font-royal-title text-2xl sm:text-3xl tracking-wide font-bold text-amber-900 leading-tight mt-1",children:"💛 HALDI CEREMONY 💛"}),
              e.jsx("p",{className:"font-kannada text-lg sm:text-xl font-bold text-amber-900 mt-1",children:"💛 ಅರಿಶಿನ ಶಾಸ್ತ್ರ ಸಮಾರಂಭ 💛"}),
              e.jsx("div",{className:"w-20 h-px bg-gold-soft/70 my-3.5"}),
              // English Date & Time First, Kannada Second
              e.jsxs("div",{className:"inline-flex flex-col items-center justify-center bg-amber-500/15 border border-amber-600/35 px-6 py-3 rounded-2xl text-amber-950 shadow-soft space-y-1",style:{color:"#5C0F14"},children:[
                e.jsx("p",{className:"font-royal-body text-xs sm:text-sm font-bold",children:"Date: 09-11-2026, Monday | Timings: 7:00 PM"}),
                e.jsx("p",{className:"font-kannada text-sm sm:text-base font-bold",children:"ದಿನಾಂಕ: 09-11-2026, ಸೋಮವಾರ | ಸಮಯ: ಸಂಜೆ 7:00 ಗಂಟೆಗೆ"})
              ]}),
              // English Venue First, Kannada Venue Second
              e.jsxs("div",{className:"mt-4 space-y-1.5 text-center",children:[
                e.jsx("p",{className:"font-royal-body text-xs sm:text-sm font-semibold text-[#5C0F14]",children:"Haldi Address: # 427, Sudha Mahal, 17th Cross, 10th Main, Alanahalli Layout, Lalitha Mahal Nagara, Mysuru."}),
                e.jsx("p",{className:"font-kannada text-xs sm:text-sm font-bold text-foreground/90 leading-relaxed",children:"ಸ್ಥಳದ ವಿಳಾಸ: ನಂ. 427, ಸುಧಾ ಮಹಲ್, 17ನೇ ಕ್ರಾಸ್, 10ನೇ ಮೇನ್, ಅಲನಹಳ್ಳಿ ಲೇಔಟ್, ಲಲಿತ ಮಹಲ್ ನಗರ, ಮೈಸೂರು."})
              ]})
            ]}),
            e.jsx("div",{className:"relative z-10 w-full max-w-[220px] sm:max-w-[260px] mx-auto mt-8 flex justify-center items-end self-end",children:
              e.jsx("img",{src:"./img/haldi-groom.png",alt:"Haldi Ceremony",className:"w-full h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"})
            })
          ]}),

          // Event 2: WEDDING RECEPTION (12-11-2026, Thursday, 12:00 PM onwards)
          e.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-gold-soft bg-white p-6 sm:p-12 shadow-elegant hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[550px] isolate",children:[
            e.jsx("img",{src:"./img/reception-bg.png",alt:"",className:"absolute inset-0 w-full h-full object-cover z-0 pointer-events-none scale-[1.06] origin-center filter brightness-95"}),
            e.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden z-10",children:Array.from({length:6}).map((c,l)=>e.jsx("div",{className:"absolute animate-float-petal opacity-75",style:{left:`${15+l*27%75}%`,animationDuration:`${10+l*4%7}s`,animationDelay:`${l*5%4}s`},children:e.jsx("span",{className:"text-xl sm:text-2xl opacity-70",children:"✨"})},l))}),
            e.jsxs("div",{className:"relative z-10 text-center flex flex-col items-center w-full mx-auto bg-white/75 backdrop-blur-md border border-white/60 p-5 sm:p-6 rounded-3xl shadow-elegant mt-12 sm:mt-16",children:[
              e.jsx("img",{src:v,alt:"MH Monogram",className:"w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mx-auto mb-2 shadow-sm"}),
              e.jsx("p",{className:"font-royal-body italic text-[#5C0F14] text-sm font-semibold tracking-wide",style:{color:"#5C0F14"},children:"#WeddingReception"}),
              e.jsx("h2",{className:"font-royal-title text-2xl sm:text-3xl tracking-wide font-bold text-[#5C0F14] leading-tight mt-1",style:{color:"#5C0F14"},children:"💐 WEDDING RECEPTION 💐"}),
              e.jsx("p",{className:"font-kannada text-lg sm:text-xl font-bold text-[#5C0F14] mt-1",children:"💐 ವಿವಾಹ ಆರತಕ್ಷತೆ 💐"}),
              e.jsx("div",{className:"w-20 h-px bg-gold-soft/70 my-3.5"}),
              // English Date & Time First, Kannada Second
              e.jsxs("div",{className:"inline-flex flex-col items-center justify-center bg-amber-500/15 border border-amber-600/35 px-6 py-3 rounded-2xl text-amber-950 shadow-soft space-y-1",style:{color:"#5C0F14"},children:[
                e.jsx("p",{className:"font-royal-body text-xs sm:text-sm font-bold",children:"Date: 12-11-2026, Thursday | Timings: 12:00 PM onwards"}),
                e.jsx("p",{className:"font-kannada text-sm sm:text-base font-bold",children:"ದಿನಾಂಕ: 12-11-2026, ಗುರುವಾರ | ಸಮಯ: ಮಧ್ಯಾಹ್ನ 12:00 ಗಂಟೆಯಿಂದ"})
              ]}),
              // English Venue First, Kannada Venue Second
              e.jsxs("div",{className:"mt-4 space-y-1.5 text-center",children:[
                e.jsx("p",{className:"font-royal-body text-xs sm:text-sm font-bold text-[#5C0F14]",children:"Reception Venue: Lalitha Mahal Palace, Mysuru."}),
                e.jsx("p",{className:"font-kannada text-sm sm:text-base font-bold text-foreground/90 leading-relaxed",children:"ಸ್ಥಳ: ಲಲಿತ ಮಹಲ್ ಅರಮನೆ, ಮೈಸೂರು."})
              ]})
            ]}),
            e.jsx("div",{className:"relative z-10 w-full max-w-[220px] sm:max-w-[260px] mx-auto mt-8 flex justify-center items-end self-end",children:
              e.jsx("img",{src:ee,alt:"Wedding Reception Couple",className:"w-full h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"})
            })
          ]}),

          // Event 3: WEDDING CEREMONY (11-11-2026, Wednesday, 9:20 AM to 10:40 AM, Dhanur Lagna)
          e.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-gold-soft bg-white text-cream p-6 sm:p-12 shadow-elegant hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[560px] isolate",children:[
            e.jsx("img",{src:ce,alt:"",className:"absolute inset-0 w-full h-full object-cover z-0 pointer-events-none scale-[1.06] origin-center"}),
            e.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden z-10",children:Array.from({length:6}).map((c,l)=>e.jsx("div",{className:"absolute animate-float-petal opacity-75",style:{left:`${10+l*29%80}%`,animationDuration:`${12+l*3%8}s`,animationDelay:`${l*7%5}s`},children:e.jsx("span",{className:"text-xl sm:text-2xl opacity-70",children:"🌸"})},l))}),
            e.jsxs("div",{className:"relative z-10 text-center flex flex-col items-center w-full mx-auto bg-white/75 backdrop-blur-md border border-white/60 p-5 sm:p-6 rounded-3xl shadow-elegant mt-12 sm:mt-16",children:[
              e.jsx("img",{src:v,alt:"MH Monogram",className:"w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mx-auto mb-2 shadow-sm"}),
              e.jsx("p",{className:"font-royal-body italic text-[#5C0F14] text-sm font-semibold tracking-wide",style:{color:"#5C0F14"},children:"#WeddingCeremony"}),
              e.jsx("h2",{className:"font-royal-title text-2xl sm:text-3xl tracking-wide font-bold text-[#5C0F14] leading-tight mt-1",style:{color:"#5C0F14"},children:"🙏 WEDDING CEREMONY 🙏"}),
              e.jsx("p",{className:"font-kannada text-lg sm:text-xl font-bold text-[#5C0F14] mt-1",children:"🙏 ಶುಭ ವಿವಾಹ ಮಹೋತ್ಸವ 🙏"}),
              e.jsx("div",{className:"w-20 h-px bg-gold-soft/70 my-3.5"}),
              // English Date, Time & Lagna First, Kannada Second
              e.jsxs("div",{className:"inline-flex flex-col items-center justify-center bg-amber-500/15 border border-amber-600/35 px-6 py-3 rounded-2xl text-amber-950 shadow-soft space-y-1",style:{color:"#5C0F14"},children:[
                e.jsx("p",{className:"font-royal-body text-xs sm:text-sm font-bold",children:"Date: 11-11-2026, Wednesday | Timings: 9:20 AM to 10:40 AM"}),
                e.jsx("p",{className:"font-royal-body text-xs sm:text-sm font-bold text-amber-900",children:"Lagna: Dhanur Lagna"}),
                e.jsx("div",{className:"w-16 h-px bg-gold-soft/60 my-1"}),
                e.jsx("p",{className:"font-kannada text-sm sm:text-base font-bold",children:"ದಿನಾಂಕ: 11-11-2026, ಬುಧವಾರ | ಸಮಯ: ಬೆಳಿಗ್ಗೆ 9:20 ರಿಂದ 10:40 ರವರೆಗೆ"}),
                e.jsx("p",{className:"font-kannada text-sm sm:text-base font-bold text-amber-900",children:"ಲಗ್ನ: ಧನುರ್ ಲಗ್ನ"})
              ]}),
              // English Venue First, Kannada Venue Second
              e.jsxs("div",{className:"mt-4 space-y-1.5 text-center",children:[
                e.jsx("p",{className:"font-royal-body text-xs sm:text-sm font-bold text-[#5C0F14]",children:"Wedding Venue: Sri Thimmamma Dasegowda Kalyana Mantapa, B.M. Road, Kengal, Channapatna Taluk, Bengaluru Dakshina District."}),
                e.jsx("p",{className:"font-kannada text-xs sm:text-sm font-bold text-foreground/90 leading-relaxed",children:"ವಿವಾಹದ ಸ್ಥಳ: ಶ್ರೀ ತಿಮ್ಮಮ್ಮ ದಾಸೇಗೌಡ ಕಲ್ಯಾಣ ಮಂಟಪ, ಬಿ.ಎಂ. ರಸ್ತೆ, ಕೆಂಗಲ್, ಚನ್ನಪಟ್ಟಣ ತಾಲ್ಲೂಕು, ಬೆಂಗಳೂರು ದಕ್ಷಿಣ ಜಿಲ್ಲೆ."})
              ]})
            ]}),
            e.jsx("div",{className:"relative z-10 w-full max-w-[200px] sm:max-w-[240px] mx-auto mt-8 flex justify-center items-end self-end",children:
              e.jsx("img",{src:te,alt:"Wedding Couple Ceremony",className:"w-full h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"})
            })
          ]})
        ]})
      ]})
    }),

    // 6. WISHES & POETIC QUOTE SECTION (First English, Then Kannada)
    e.jsxs("section",{className:"relative py-20 px-4 sm:px-6 bg-cream text-center z-10 border-t border-gold-soft/30",children:[
      e.jsx("img",{src:k,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"}),
      e.jsxs("div",{className:"relative max-w-2xl mx-auto z-10",children:[
        e.jsx("p",{className:"font-royal-sub text-xs tracking-[0.22em] text-rose-deep/80 uppercase font-semibold",children:"WITH BEST WISHES AND BLESSINGS"}),
        e.jsx("h2",{className:"font-royal-title text-2xl sm:text-4xl text-rose-deep font-semibold mt-1",children:"All Family Members and Relatives"}),
        e.jsx(y,{}),
        e.jsxs("div",{className:"mb-4 px-2 space-y-1.5",children:[
          e.jsx("p",{className:"font-kannada text-base sm:text-lg text-rose-deep leading-relaxed font-bold",children:"💜 ಶುಭ ಹಾರೈಕೆಗಳು ಹಾಗೂ ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ,"}),
          e.jsx("p",{className:"font-kannada text-base sm:text-lg text-foreground/90 font-semibold",children:"ಕುಟುಂಬದ ಎಲ್ಲಾ ಸದಸ್ಯರು ಹಾಗೂ ಬಂಧುಬಳಗದವರು."})
        ]}),

        // Divider
        e.jsx("div",{className:"w-16 h-px bg-gold-soft/60 mx-auto my-7"}),

        // Poetic Quote Card: First English, Then Kannada
        e.jsxs("div",{className:"bg-[#FCF8F2]/95 border-2 border-gold-soft p-6 rounded-2xl shadow-elegant space-y-3",children:[
          e.jsx("p",{className:"font-royal-title text-base sm:text-lg text-[#5C0F14] font-bold leading-relaxed",children:
            "💜 Two hearts, one soul, one beautiful journey forever. 💜"
          }),
          e.jsx("div",{className:"w-14 h-px bg-gold-soft mx-auto"}),
          e.jsxs("p",{className:"font-kannada text-base sm:text-lg text-[#5C0F14] font-bold leading-relaxed",children:[
            "💜 ಎರಡು ಹೃದಯಗಳು, ಒಂದೇ ಆತ್ಮ,",
            e.jsx("br",{}),
            "ಪ್ರೀತಿ ಮತ್ತು ಅನುರಾಗದಿಂದ ಕೂಡಿದ",
            e.jsx("br",{}),
            "ಎಂದೆಂದಿಗೂ ಸುಂದರವಾದ ಪಯಣ. 💜"
          ]})
        ]})
      ]})
    ]}),

    // 7. VENUES & MAPS (First English, Then Kannada)
    e.jsxs("section",{className:"relative py-20 px-6 bg-[#FAF6F0] z-10 border-t border-gold-soft/30",children:[
      e.jsx("div",{className:"absolute inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none",style:{backgroundImage:`url(${k})`}}),
      e.jsxs("div",{className:"relative max-w-4xl mx-auto text-center z-10 space-y-16",children:[
        // Wedding Venue Map
        e.jsxs("div",{children:[
          e.jsx("p",{className:"font-royal-sub text-xs text-rose-deep/80 tracking-[0.22em] uppercase font-semibold",children:"WEDDING VENUE • ವಿವಾಹದ ಸ್ಥಳ"}),
          e.jsx("h2",{className:"font-royal-title text-2xl sm:text-4xl text-rose-deep mt-2 font-semibold",children:"Sri Thimmamma Dasegowda Kalyana Mantapa"}),
          e.jsx(y,{}),
          e.jsxs("div",{className:"max-w-xl mx-auto leading-relaxed space-y-1.5",children:[
            e.jsx("p",{className:"font-royal-body font-bold text-rose-deep text-sm sm:text-base",children:"📍 Sri Thimmamma Dasegowda Kalyana Mantapa, B.M. Road, Kengal, Channapatna Taluk, Bengaluru Dakshina District"}),
            e.jsx("p",{className:"font-kannada font-bold text-foreground/90 text-sm sm:text-base leading-relaxed",children:"📍 ಶ್ರೀ ತಿಮ್ಮಮ್ಮ ದಾಸೇಗೌಡ ಕಲ್ಯಾಣ ಮಂಟಪ, ಬಿ.ಎಂ. ರಸ್ತೆ, ಕೆಂಗಲ್, ಚನ್ನಪಟ್ಟಣ ತಾಲ್ಲೂಕು, ಬೆಂಗಳೂರು ದಕ್ಷಿಣ ಜಿಲ್ಲೆ"})
          ]}),
          e.jsx("div",{className:"mt-8 rounded-3xl overflow-hidden border border-gold-soft shadow-elegant max-w-2xl mx-auto",children:
            e.jsx("iframe",{title:"Sri Thimmamma Dasegowda Kalyana Mantapa map",src:"https://www.google.com/maps?q=Sri+Thimmamma+Dasegowda+Kalyana+Mantapa+B.M.+Road+Kengal+Channapatna&output=embed",className:"w-full h-[300px] sm:h-[340px]",loading:"lazy"})
          }),
          e.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=Sri+Thimmamma+Dasegowda+Kalyana+Mantapa+B.M.+Road+Kengal+Channapatna",target:"_blank",rel:"noreferrer",className:"inline-block mt-6",children:
            e.jsxs(U,{className:"gradient-gold text-white border-0 hover:opacity-90 rounded-full px-8 shadow-gold font-royal-body text-xs font-semibold tracking-wider",children:[
              e.jsx(H,{className:"mr-2 h-4 w-4"}),
              "Get Directions (Wedding Venue)"
            ]})
          })
        ]}),

        // Reception Venue Map
        e.jsxs("div",{children:[
          e.jsx("p",{className:"font-royal-sub text-xs text-rose-deep/80 tracking-[0.22em] uppercase font-semibold",children:"RECEPTION VENUE • ಆರತಕ್ಷತೆ ಸ್ಥಳ"}),
          e.jsx("h2",{className:"font-royal-title text-2xl sm:text-4xl text-rose-deep mt-2 font-semibold",children:"Lalitha Mahal Palace, Mysuru"}),
          e.jsx(y,{}),
          e.jsxs("div",{className:"max-w-xl mx-auto leading-relaxed space-y-1.5",children:[
            e.jsx("p",{className:"font-royal-body font-bold text-rose-deep text-sm sm:text-base",children:"📍 Lalitha Mahal Palace, Mysuru (12-11-2026, Thursday, 12:00 PM onwards)"}),
            e.jsx("p",{className:"font-kannada font-bold text-foreground/90 text-sm sm:text-base leading-relaxed",children:"📍 ಲಲಿತ ಮಹಲ್ ಅರಮನೆ, ಮೈಸೂರು (12-11-2026, ಗುರುವಾರ, ಮಧ್ಯಾಹ್ನ 12:00 ಗಂಟೆಯಿಂದ)"})
          ]}),
          e.jsx("div",{className:"mt-8 rounded-3xl overflow-hidden border border-gold-soft shadow-elegant max-w-2xl mx-auto",children:
            e.jsx("iframe",{title:"Lalitha Mahal Palace Mysuru map",src:"https://www.google.com/maps?q=Lalitha+Mahal+Palace+Mysuru&output=embed",className:"w-full h-[300px] sm:h-[340px]",loading:"lazy"})
          }),
          e.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=Lalitha+Mahal+Palace+Mysuru",target:"_blank",rel:"noreferrer",className:"inline-block mt-6",children:
            e.jsxs(U,{className:"gradient-gold text-white border-0 hover:opacity-90 rounded-full px-8 shadow-gold font-royal-body text-xs font-semibold tracking-wider",children:[
              e.jsx(H,{className:"mr-2 h-4 w-4"}),
              "Get Directions (Reception Venue)"
            ]})
          })
        ]})
      ]})
    ]}),

    // 8. FOOTER
    e.jsxs("footer",{className:"relative bg-gradient-to-b from-[#3A050B] to-[#5C0F14] text-cream py-16 px-6 text-center z-10 border-t-2 border-gold-soft/40",children:[
      e.jsx("div",{className:"absolute inset-0 bg-black/10 pointer-events-none"}),
      e.jsx("p",{className:"font-royal-sub text-xs tracking-[0.3em] text-amber-200 font-semibold",style:{color:"#FDE68A"},children:"WITH LOVE"}),
      e.jsx("h3",{className:"font-royal-script text-4xl sm:text-5xl text-amber-200 mt-2 font-normal",style:{color:"#FDE68A"},children:"Manohar & Harshitha"}),
      e.jsx("p",{className:"font-kannada text-base sm:text-lg text-amber-100 mt-1 font-semibold",style:{color:"#FEF3C7"},children:"ಚಿ.ರಾ. ಮನೋಹರ್ ಎಂ. & ಚಿ. ಸೌ. ಹರ್ಷಿತಾ ಎಂ.ಕೆ."}),
      e.jsxs("div",{className:"my-5 flex items-center justify-center gap-3",children:[
        e.jsx("span",{className:"h-px w-12 bg-gold-soft/50"}),
        e.jsx("span",{className:"text-2xl font-emoji",children:"💜"}),
        e.jsx("span",{className:"h-px w-12 bg-gold-soft/50"})
      ]}),
      e.jsx("p",{className:"font-royal-body text-xs sm:text-sm text-amber-100 font-medium",style:{color:"#FFF8EE"},children:"Haldi: 09-11-2026 • Wedding: 11-11-2026 • Reception: 12-11-2026"}),
      e.jsx("p",{className:"font-kannada text-xs sm:text-sm text-amber-200 mt-1.5 font-normal",style:{color:"#FDE68A"},children:"ಅರಿಶಿನ ಶಾಸ್ತ್ರ: 09-11-2026 • ವಿವಾಹ: 11-11-2026 • ಆರತಕ್ಷತೆ: 12-11-2026"}),
      e.jsx("p",{className:"mt-3.5 font-royal-sub text-xs tracking-[0.2em] text-amber-300 font-bold",style:{color:"#FDE68A"},children:"#ManoharWedsHarshitha"})
    ]})
  ]});
};

const y=()=>e.jsxs("div",{className:"my-5 flex items-center justify-center gap-3",children:[e.jsx("span",{className:"h-px w-16 bg-gold-soft"}),e.jsx("span",{className:"text-amber-600 text-lg font-emoji",children:"❀"}),e.jsx("span",{className:"h-px w-16 bg-gold-soft"})]});
const C=({className:t})=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:t,xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"11.25",y:"1",width:"1.5",height:"4",rx:"0.5"}),e.jsx("path",{d:"M12 5C8.13401 5 5 8.13401 5 12V16H19V12C19 8.13401 15.866 5 12 5Z"}),e.jsx("path",{d:"M4 16.5C4 16.2239 4.22386 16 4.5 16H19.5C19.7761 16 20 16.2239 20 16.5V18H4V16.5Z"}),e.jsx("circle",{cx:"12",cy:"20",r:"2"})]});
const me=()=>e.jsxs(n.Fragment,{children:[e.jsx("style",{children:`
  @keyframes butterfly-fly {
    0%   { transform: translate(-10vw, 60vh) rotate(-8deg) scale(1); }
    20%  { transform: translate(20vw, 35vh) rotate(6deg)  scale(1.05); }
    40%  { transform: translate(45vw, 55vh) rotate(-4deg) scale(0.95); }
    60%  { transform: translate(65vw, 25vh) rotate(8deg)  scale(1.1); }
    80%  { transform: translate(85vw, 45vh) rotate(-6deg) scale(1); }
    100% { transform: translate(110vw, 30vh) rotate(4deg) scale(1); }
  }
  @keyframes butterfly-flap {
    0%, 100% { transform: scaleX(1); }
    50%      { transform: scaleX(0.55); }
  }
  .butterfly-path {
    position: fixed;
    top: 0; left: 0;
    z-index: 40;
    pointer-events: none;
    animation: butterfly-fly 18s linear infinite;
    will-change: transform;
  }
  .butterfly-wings {
    display: inline-block;
    animation: butterfly-flap 0.25s ease-in-out infinite;
    transform-origin: center;
  }
`}),e.jsx("div",{className:"butterfly-path","aria-hidden":!0,children:e.jsx("span",{className:"butterfly-wings",children:e.jsx("svg",{width:"38",height:"32",viewBox:"0 0 64 52",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{children:[e.jsx("ellipse",{cx:"32",cy:"26",rx:"1.6",ry:"11",fill:"#1f2937"}),e.jsx("circle",{cx:"32",cy:"14",r:"2.2",fill:"#1f2937"}),e.jsx("path",{d:"M32 13 C 29 8, 27 6, 25 5",stroke:"#1f2937",strokeWidth:"1",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M32 13 C 35 8, 37 6, 39 5",stroke:"#1f2937",strokeWidth:"1",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M30 22 C 10 10, 2 22, 6 32 C 10 42, 24 38, 30 30 Z",fill:"#3b82f6",opacity:"0.95"}),e.jsx("path",{d:"M30 30 C 18 38, 10 44, 14 48 C 20 50, 28 42, 30 36 Z",fill:"#60a5fa",opacity:"0.95"}),e.jsx("path",{d:"M34 22 C 54 10, 62 22, 58 32 C 54 42, 40 38, 34 30 Z",fill:"#3b82f6",opacity:"0.95"}),e.jsx("path",{d:"M34 30 C 46 38, 54 44, 50 48 C 44 50, 36 42, 34 36 Z",fill:"#60a5fa",opacity:"0.95"}),e.jsx("circle",{cx:"14",cy:"26",r:"1.6",fill:"#fff",opacity:"0.85"}),e.jsx("circle",{cx:"50",cy:"26",r:"1.6",fill:"#fff",opacity:"0.85"})]})})})})]});
function xe(){return e.jsx("div",{className:"pointer-events-none fixed inset-0 z-10 overflow-hidden","aria-hidden":"true",children:Array.from({length:24},(t,s)=>{const a=22+s*17%26,i=s%2===0?"falling-daisy-DWyrh5i3.png":"falling-rose-petal-CzrX2ZBd.png";return e.jsx("div",{className:"absolute animate-float-petal",style:{left:`${(s*43+11)%100}%`,top:"-10vh",animationDuration:`${12+s*7%14}s`,animationDelay:`${s*13%100/10}s`,transform:`rotate(${s*37}deg)`,filter:"drop-shadow(0 2px 4px hsl(var(--ink) / 0.18))"},children:e.jsx("img",{src:`./img/${i}`,alt:"",width:a,height:a,style:{width:a,height:a,objectFit:"contain"}})},s)})})}
function he(){
  const[t,s]=n.useState(!1),[a,i]=n.useState(!1),[m,o]=n.useState(!1),c=n.useRef(null),l=n.useRef(null);
  n.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]);
  function u(){a||(i(!0),c.current&&(c.current.volume=.45,c.current.play().catch(()=>o(!0))),l.current=setTimeout(()=>{s(!0),window.scrollTo({top:0})},900))}
  function b(){const p=c.current;p&&(m?p.play().then(()=>o(!1)).catch(()=>o(!0)):(p.pause(),o(!0)))}
  return e.jsxs("div",{className:"relative",children:[
    e.jsx(xe,{}),
    e.jsx("audio",{ref:c,src:"./audio/background.mp3",preload:"none",loop:!0}),
    t?e.jsxs(e.Fragment,{children:[e.jsx(me,{}),e.jsx(de,{})]}):e.jsx(q,{onOpen:u,opening:a}),
    (a||t)&&e.jsx("button",{type:"button","aria-label":m?"Unmute background music":"Mute background music","aria-pressed":!m,onClick:b,className:"music-toggle",children:m?e.jsx(G,{size:20}):e.jsx(O,{size:20})})
  ]});
}
export{he as component};
