(()=>{var{widget:n}=figma,{AutoLayout:i,Image:o,Frame:h,useSyncedState:r,Input:l,Text:f}=n,e=[{key:"roboto",src:"https://typographica.org/wp-content/uploads/2011/10/Roboto-weights.png"},{key:"nimbus",src:"https://st.1001fonts.net/img/illustrations/n/i/nimbus-sans-l-font-1-big.png"},{key:"aspergit",src:"https://st.1001fonts.net/img/illustrations/a/s/aspergit-font-2-big.png"},{key:"reverie",src:"https://st.1001fonts.net/img/illustrations/a/s/aspergit-font-1-big.png"},{key:"texgyreheros",src:"https://st.1001fonts.net/img/illustrations/t/e/texgyreheros-font-1-big.png"}];function u(){let[a,c]=r("font",""),[s,g]=r("selectedIndex",1);return e.map(t=>figma.widget.h(o,{key:t.key,src:t.src,width:100,height:100})),figma.widget.h(i,{direction:"vertical",spacing:10,width:600,height:600},figma.widget.h(l,{value:a,placeholder:"Type name",onTextEditEnd:t=>{c(t.characters);let p=e.findIndex(d=>d.key.toString()===t.characters);g(p)},fontSize:16,fill:"#7f1d1d",width:200,inputFrameProps:{fill:"#fee2e2",stroke:"#b91c1c",cornerRadius:16,padding:20},inputBehavior:"wrap"}),s>=0&&figma.widget.h(h,{fill:{type:"image",src:e[s].src},width:200,height:100}),figma.widget.h(f,{fill:"#000000"}," Recommended Fonts "),figma.widget.h(i,{direction:"horizontal",spacing:10,width:"fill-parent"},e.map(t=>figma.widget.h(o,{key:t.key,src:t.src,width:200,height:100}))))}n.register(u);})();
