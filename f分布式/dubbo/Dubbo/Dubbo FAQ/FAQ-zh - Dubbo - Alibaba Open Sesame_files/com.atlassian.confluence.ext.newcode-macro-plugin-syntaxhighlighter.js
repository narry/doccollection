/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.??? (January 10 2011)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('K M;I(M)1Q 2q("2c\'t 4h M 4C 29 4c 4F 4S");(6(){6 r(f,e){I(!M.1O(f))1Q 48("3R 16 4P");K a=f.1r;f=M(f.1k,t(f)+(e||""));I(a)f.1r={1k:a.1k,1b:a.1b?a.1b.1a(0):N};H f}6 t(f){H(f.1E?"g":"")+(f.4L?"i":"")+(f.4I?"m":"")+(f.4w?"x":"")+(f.3Z?"y":"")}6 B(f,e,a,b){K c=u.L,d,g,h;v=R;4z{O(;c--;){h=u[c];I(a&h.4f&&(!h.2l||h.2l.W(b))){h.2p.11=e;I((g=h.2p.X(f))&&g.P===e){d={4g:h.2i.W(b,g,a),1H:g};1S}}}}4B(i){1Q i}5v{v=12}H d}6 p(f,e,a){I(2X.Z.19)H f.19(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1F,c=0,d,g;I(M.1O(f)){I(e!==1h)1Q 48("2c\'t 5t 5p 5r 5s 5y 16 5G 5F");H r(f)}I(v)1Q 2q("2c\'t W 4c M 5D 5o 5n 58 5a");e=e||"";O(d={2y:12,1b:[],2K:6(h){H e.19(h)>-1},36:6(h){e+=h}};c<f.L;)I(g=B(f,c,b,d)){a.T(g.4g);c+=g.1H[0].L||1}Y I(g=n.X.W(z[b],f.1a(c))){a.T(g[0]);c+=g[0].L}Y{g=f.37(c);I(g==="[")b=M.2s;Y I(g==="]")b=M.1F;a.T(g);c++}a=16(a.1K(""),n.Q.W(e,w,""));a.1r={1k:f,1b:d.2y?d.1b:N};H a};M.3p="1.5.0";M.2s=1;M.1F=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^57]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=12,u=[],n={X:16.Z.X,1w:16.Z.1w,1H:1s.Z.1H,Q:1s.Z.Q,1g:1s.Z.1g},x=n.X.W(/()??/,"")[1]===1h,D=6(){K f=/^/g;n.1w.W(f,"");H!f.11}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.11}(),E=16.Z.3Z!==1h,z={};z[M.2s]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\2f-2g-f]{2}|u[\\2f-2g-f]{4}|c[A-40-z]|[\\s\\S]))/;z[M.1F]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\2f-2g-f]{2}|u[\\2f-2g-f]{4}|c[A-40-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1f=6(f,e,a,b){u.T({2p:r(f,"g"+(E?"y":"")),2i:e,4f:a||M.1F,2l:b||N})};M.2m=6(f,e){K a=f+"/"+(e||"");H M.2m[a]||(M.2m[a]=M(f,e))};M.3m=6(f){H r(f,"g")};M.5k=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.5l=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.11=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.4k=6(){M.1f=6(){1Q 2q("2c\'t 5e 1f 5g 4k")}};M.1O=6(f){H 5h.Z.1z.W(f)==="[2J 16]"};M.3e=6(f,e,a,b){O(K c=r(e,"g"),d=-1,g;g=c.X(f);){a.W(b,g,++d,f,c);c.11===g.P&&c.11++}I(e.1E)e.11=0};M.5q=6(f,e){H 6 a(b,c){K d=e[c].1D?e[c]:{1D:e[c]},g=r(d.1D,"g"),h=[],i;O(i=0;i<b.L;i++)M.3e(b[i],g,6(k){h.T(d.3d?k[d.3d]||"":k[0])});H c===e.L-1||!h.L?h:a(h,c+1)}([f],0)};16.Z.1t=6(f,e){H J.X(e[0])};16.Z.W=6(f,e){H J.X(e)};16.Z.X=6(f){K e=n.X.1t(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=16(J.1k,n.Q.W(t(J),"g",""));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1h)e[c]=1h})}I(J.1r&&J.1r.1b)O(K b=1;b<e.L;b++)I(a=J.1r.1b[b-1])e[a]=e[b];!D&&J.1E&&!e[0].L&&J.11>e.P&&J.11--}H e};I(!D)16.Z.1w=6(f){(f=n.X.W(J,f))&&J.1E&&!f[0].L&&J.11>f.P&&J.11--;H!!f};1s.Z.1H=6(f){M.1O(f)||(f=16(f));I(f.1E){K e=n.1H.1t(J,14);f.11=0;H e}H f.X(J)};1s.Z.Q=6(f,e){K a=M.1O(f),b,c;I(a&&1m e.5f()==="3M"&&e.19("${")===-1&&y)H n.Q.1t(J,14);I(a){I(f.1r)b=f.1r.1b}Y f+="";I(1m e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1e 1s(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1E)f.11=14[14.L-2]+14[0].L;H e.1t(N,14)});Y{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(g,h,i){I(h)5i(h){28"$":H"$";28"&":H d[0];28"`":H d[d.L-1].1a(0,d[d.L-2]);28"\'":H d[d.L-1].1a(d[d.L-2]+d[0].L);5j:i="";h=+h;I(!h)H g;O(;h>d.L-3;){i=1s.Z.1a.W(h,-1)+i;h=1N.3U(h/10)}H(h?d[h]||"":"$")+i}Y{h=+i;I(h<=d.L-3)H d[h];h=b?p(b,i):-1;H h>-1?d[h+1]:g}})})}I(a&&f.1E)f.11=0;H c};1s.Z.1g=6(f,e){I(!M.1O(f))H n.1g.1t(J,14);K a=J+"",b=[],c=0,d,g;I(e===1h||+e<0)e=5c;Y{e=1N.3U(+e);I(!e)H[]}O(f=M.3m(f);d=f.X(a);){I(f.11>c){b.T(a.1a(c,d.P));d.L>1&&d.P<a.L&&2X.Z.T.1t(b,d.1a(1));g=d[0].L;c=f.11;I(b.L>=e)1S}f.11===d.P&&f.11++}I(c===a.L){I(!n.1w.W(f,"")||g)b.T("")}Y b.T(a.1a(c));H b.L>e?b.1a(0,e):b};M.1f(/\\(\\?#[^)]*\\)/,6(f){H n.1w.W(A,f.2G.1a(f.P+f[0].L))?"":"(?:)"});M.1f(/\\((?!\\?)/,6(){J.1b.T(N);H"("});M.1f(/\\(\\?<([$\\w]+)>/,6(f){J.1b.T(f[1]);J.2y=R;H"("});M.1f(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.1b,f[1]);H e>-1?"\\\\"+(e+1)+(4e(f.2G.37(f.P+f[0].L))?"":"(?:)"):f[0]});M.1f(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1f(/^\\(\\?([5b]+)\\)/,6(f){J.36(f[1]);H""});M.1f(/(?:\\s+|#.*)+/,6(f){H n.1w.W(A,f.2G.1a(f.P+f[0].L))?"":"(?:)"},M.1F,6(){H J.2K("x")});M.1f(/\\./,6(){H"[\\\\s\\\\S]"},M.1F,6(){H J.2K("s")})})();1m 2e!="1h"&&(2e.M=M);K 1y=6(){6 r(a,b){a.1l.19(b)!=-1||(a.1l+=" "+b)}6 t(a){H a.19("33")==0?a:"33"+a}6 B(a){H e.22.2V[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3O:[a.2F],g={"#":"1d",".":"1l"}[b.1n(0,1)]||"3j",h,i;h=g!="3j"?b.1n(1):b.5C();I((a[g]||"").19(h)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 29 a)c[d]=a[d];O(d 29 b)c[d]=b[d];H c}6 w(a,b,c,d){6 g(h){h=h||1L.5B;I(!h.1I){h.1I=h.5A;h.2Z=6(){J.5E=12}}c.W(d||1L,h)}a.3I?a.3I("5I"+b,g):a.5H(b,g,12)}6 A(a,b){K c=e.22.2L,d=N;I(c==N){c={};O(K g 29 e.1U){K h=e.1U[g];d=h.5z;I(d!=N){h.1V=g.51();O(h=0;h<d.L;h++)c[d[h]]=g}}e.22.2L=c}d=e.1U[c[a]];d==N&&b!=12&&1L.1Y(e.13.1q.1Y+(e.13.1q.3s+a));H d}6 v(a,b){O(K c=a.1g("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1K("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1A;");a=a.Q(/ {2,}/g,6(c){O(K d="",g=0;g<c.L-1;g++)d+=e.13.1X;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2k;| )+/,6(g){d=g;H""});I(c.L==0)H d;H d+\'<15 1i="\'+b+\'">\'+c+"</15>"});H a}6 n(a,b){a.1g("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(g){I(g.19("\\t")==-1)H g;O(K h=0;(h=g.19("\\t"))!=-1;)g=g.1n(0,h)+c.1n(0,b-h%b)+g.1n(h+1,g.L);H g})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,g=[],h=b.2D?b.2D:c;(d=b.1D.X(a))!=N;){K i=h(d,b);I(1m i=="3M")i=[1e e.2u(i,d.P,b.1W)];g=g.1T(i)}H g}6 E(a){K b=/(.*)((&1J;|&1A;).*)/;H a.Q(e.3F.3T,6(c){K d="",g=N;I(g=b.X(c)){c=g[1];d=g[2]}g=c.25(0,c.19("<"));c=c.25(c.19("<"),c.L);d+=c;H\'<a 2j="\'+g+\'">\'+g+"</a>"+d})}6 z(){O(K a=1B.3a("1j"),b=[],c=0;c<a.L;c++)a[c].3R=="21"&&b.T(a[c]);H b}6 f(a){a=a.1I;K b=p(a,".21",R);a=p(a,".32",R);K c=1B.4d("3S");I(!(!a||!b||p(a,"3S"))){B(b.1d);r(b,"1k");O(K d=a.3O,g=[],h=0;h<d.L;h++)g.T(d[h].5u||d[h].5x);g=g.1K("\\r");c.3E(1B.5w(g));a.3E(c);c.2n();c.3P();w(c,"5J",6(){c.2F.4M(c);b.1l=b.1l.Q("1k","")})}}I(1m 3D!="1h"&&1m M=="1h")M=3D("M").M;K e={2T:{"1i-26":"","24-1u":1,"2I-1u-2H":12,1R:N,1o:N,"3Y-45":R,"3X-23":4,1v:R,17:R,"35-15":R,2W:12,"4n-4j":R,2N:12,"1x-1j":12},13:{1X:"&2k;",2v:R,46:12,4a:12,3c:"4A",1q:{20:"4D 1k",2E:"?",1Y:"1y\\n\\n",3s:"4r\'t 4q 1C O: ",3V:"4t 4u\'t 4v O 1x-1j 4x: ",3b:\'<!4G 1x 4U "-//4T//3q 4W 1.0 4X//4R" "1M://2B.3z.3x/4K/3w/3q/3w-4O.4Z"><1x 4N="1M://2B.3z.3x/4J/4Q"><3y><4Y 1M-4V="4H-4s" 4y="2A/1x; 4E=55-8" /><1o>77 1y</1o></3y><3L 1P="2a-74:6A,6y,6v,6E-6L;6K-2b:#6H;2b:#6J;2a-23:6I;2A-3C:3B;"><U 1P="2A-3C:3B;3v-3i:1.6G;"><U 1P="2a-23:6P-6O;">1y</U><U 1P="2a-23:.6N;3v-6M:6F;"><U>3p 3.0.6x (5K 6u 3r)</U><U><a 2j="1M://3o.2C/1y" 1I="3f" 1P="2b:#3Q">1M://3o.2C/1y</a></U><U>6z 15 6R 6D.</U><U>6C 6B-3r 6Q 6U.</U></U><U>75 76 78 J 1j, 79 <a 2j="34://2B.72.2C/6V-73/6T?6S=6W-6X&71=70" 1P="2b:#3Q">6Z</a> 3G <2R/>6Y 6s 60!</U></U></3L></1x>\'}},22:{2L:N,2V:{}},1U:{},3F:{5Z:/\\/\\*[\\s\\S]*?\\*\\//2h,5Y:/\\/\\/.*$/2h,5X:/#.*$/2h,61:/"([^\\\\"\\n]|\\\\.)*"/g,62:/\'([^\\\\\'\\n]|\\\\.)*\'/g,65:1e M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3J"),64:1e M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3J"),63:/(&1A;|<)!--[\\s\\S]*?--(&1J;|>)/2h,3T:/(5V|1M|34):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?/g,5N:{18:/(&1A;|<)\\?=?/g,1c:/\\?(&1J;|>)/g},5M:{18:/(&1A;|<)%=?/g,1c:/%(&1J;|>)/g},5L:{18:/(&1A;|<)\\s*1j.*?(&1J;|>)/2S,1c:/(&1A;|<)\\/\\s*1j\\s*(&1J;|>)/2S}},17:{1G:6(a){6 b(i,k){H e.17.2M(i,k,e.13.1q[k])}O(K c=\'<U 1i="17">\',d=e.17.2z,g=d.31,h=0;h<g.L;h++)c+=(d[g[h]].1G||b)(a,g[h]);c+="</U>";H c},2M:6(a,b,c){H\'<38><a 2j="#" 1i="6t 5P\'+b+" "+b+\'">\'+c+"</a></38>"},2i:6(a){K b=a.1I,c=b.1l||"";b=B(p(b,".21",R).1d);K d=6(g){H(g=16(g+"5Q(\\\\w+)").X(c))?g[1]:N}("5U");b&&d&&e.17.2z[d].2x(b);a.2Z()},2z:{31:["20","2E"],20:{1G:6(a){I(a.V("2W")!=R)H"";K b=a.V("1o");H e.17.2M(a,"20",b?b:e.13.1q.20)},2x:6(a){a=1B.5S(t(a.1d));a.1l=a.1l.Q("3W","")}},2E:{2x:6(){K a="67=0";a+=", 18="+(3h.39-3k)/2+", 3i="+(3h.3l-3g)/2+", 39=3k, 3l=3g";a=a.Q(/^,/,"");a=1L.6m("","3f",a);a.2n();K b=a.1B;b.6l(e.13.1q.3b);b.6k();a.2n()}}}},3K:6(a,b){K c;I(b)c=[b];Y{c=1B.3a(e.13.3c);O(K d=[],g=0;g<c.L;g++)d.T(c[g]);c=d}c=c;d=[];I(e.13.2v)c=c.1T(z());I(c.L===0)H d;O(g=0;g<c.L;g++){O(K h=c[g],i=a,k=c[g].1l,j=47 0,l={},m=1e M("^\\\\[(?<2r>(.*?))\\\\]$"),s=1e M("(?<26>[\\\\w-]+)\\\\s*:\\\\s*(?<1Z>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.1Z.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1w(o)){o=m.X(o);o=o.2r.L>0?o.2r.1g(/\\s*,\\s*/):[]}l[j.26]=o}h={1I:h,1p:C(i,l)};h.1p.1C!=N&&d.T(h)}H d},1R:6(a,b){K c=J.3K(a,b),d=N,g=e.13;I(c.L!==0)O(K h=0;h<c.L;h++){b=c[h];K i=b.1I,k=b.1p,j=k.1C,l;I(j!=N){I(k["1x-1j"]=="R"||e.2T["1x-1j"]==R){d=1e e.4p(j);j="6o"}Y I(d=A(j))d=1e d;Y 6r;l=i.3H;I(g.2v){l=l;K m=x(l),s=12;I(m.19("<![6q[")==0){m=m.25(9);s=R}K o=m.L;I(m.19("]]\\>")==o-3){m=m.25(0,o-3);s=R}l=s?m:l}I((i.1o||"")!="")k.1o=i.1o;k.1C=j;d.2Q(k);b=d.2O(l);I((i.1d||"")!="")b.1d=i.1d;i.2F.6p(b,i)}}},2t:6(a){w(1L,"4h",6(){e.1R(a)})}};e.2t=e.2t;e.1R=e.1R;e.2u=6(a,b,c){J.1Z=a;J.P=b;J.L=a.L;J.1W=c;J.1V=N};e.2u.Z.1z=6(){H J.1Z};e.4p=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,g=1e e.1U.6i,h=J,i="2O 1G 2Q".1g(" ");I(c!=N){d=1e c;O(K k=0;k<i.L;k++)(6(){K j=i[k];h[j]=6(){H g[j].1t(g,14)}})();d.2d==N?1L.1Y(e.13.1q.1Y+(e.13.1q.3V+a)):g.2P.T({1D:d.2d.15,2D:6(j){O(K l=j.15,m=[],s=d.2P,o=j.P+j.18.L,F=d.2d,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1T(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1T(q)}I(F.1c!=N&&j.1c!=N){q=y(j.1c,F.1c);b(q,j.P+j[0].6h(j.1c));m=m.1T(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.44=6(){};e.44.Z={V:6(a,b){K c=J.1p[a];c=c==N?b:c;K d={"R":R,"12":12}[c];H d==N?c:d},3A:6(a){H 1B.4d(a)},42:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1m a[d]=="2J")c=c.1T(y(b,a[d]));H J.4b(c.69(D))},4b:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,g=b+1;g<a.L&&a[b]!==N;g++){K h=a[g];I(h!==N)I(h.P>d)1S;Y I(h.P==c.P&&h.L>c.L)a[b]=N;Y I(h.P>=c.P&&h.P<d)a[g]=N}H a},43:6(a){K b=[],c=2o(J.V("24-1u"));v(a,6(d,g){b.T(g+c)});H b},49:6(a){K b=J.V("1R",[]);I(1m b!="2J"&&b.T==N)b=[b];a:{a=a.1z();K c=47 0;O(c=c=1N.68(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1S a}b=-1}H b!=-1},2w:6(a,b,c){a=["1u","6c"+b,"P"+a,"6d"+(b%2==0?1:2).1z()];J.49(b)&&a.T("6g");b==0&&a.T("1S");H\'<U 1i="\'+a.1K(" ")+\'">\'+c+"</U>"},2Y:6(a,b){K c="",d=a.1g("\\n").L,g=2o(J.V("24-1u")),h=J.V("2I-1u-2H");I(h==R)h=(g+d-1).1z().L;Y I(4e(h)==R)h=0;O(K i=0;i<d;i++){K k=b?b[i]:g+i,j;I(k==0)j=e.13.1X;Y{j=h;O(K l=k.1z();l.L<j;)l="0"+l;j=l}a=j;c+=J.2w(i,k,a)}H c},4i:6(a,b){a=x(a);K c=a.1g("\\n");J.V("2I-1u-2H");K d=2o(J.V("24-1u"));a="";O(K g=J.V("1C"),h=0;h<c.L;h++){K i=c[h],k=/^(&2k;|\\s)+/.X(i),j=N,l=b?b[h]:d+h;I(k!=N){j=k[0].1z();i=i.1n(j.L);j=j.Q(" ",e.13.1X)}i=x(i);I(i.L==0)i=e.13.1X;a+=J.2w(h,l,(j!=N?\'<15 1i="\'+g+\' 6e">\'+j+"</15>":"")+i)}H a},30:6(a){H a?"<41>"+a+"</41>":""},4m:6(a,b){6 c(l){H(l=l?l.1V||h:h)?l+" ":""}O(K d=0,g="",h=J.V("1C",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);g+=u(a.1n(d,k.P-d),j+"4o")+u(k.1Z,j+k.1W);d=k.P+k.L+(k.6w||0)}}g+=u(a.1n(d),c()+"4o");H g},1G:6(a){K b="",c=["21"],d;I(J.V("2N")==R)J.1p.17=J.1p.1v=12;1l="21";J.V("2W")==R&&c.T("3W");I((1v=J.V("1v"))==12)c.T("6f");c.T(J.V("1i-26"));c.T(J.V("1C"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("3X-23");I(J.V("3Y-45")==R)a=n(a,b);Y{O(K g="",h=0;h<b;h++)g+=" ";a=a.Q(/\\t/g,g)}a=a;a:{b=a=a;g=/<2R\\s*\\/?>|&1A;2R\\s*\\/?&1J;/2S;I(e.13.46==R)b=b.Q(g,"\\n");I(e.13.4a==R)b=b.Q(g,"");b=b.1g("\\n");g=/^\\s*/;h=6a;O(K i=0;i<b.L&&h>0;i++){K k=b[i];I(x(k).L!=0){k=g.X(k);I(k==N){a=a;1S a}h=1N.6b(k[0].L,h)}}I(h>0)O(i=0;i<b.L;i++)b[i]=b[i].1n(h);a=b.1K("\\n")}I(1v)d=J.43(a);b=J.42(J.2P,a);b=J.4m(a,b);b=J.4i(b,d);I(J.V("4n-4j"))b=E(b);1m 2U!="1h"&&2U.4l&&2U.4l.1H(/6n/)&&c.T("6j");H b=\'<U 1d="\'+t(J.1d)+\'" 1i="\'+c.1K(" ")+\'">\'+(J.V("17")?e.17.1G(J):"")+\'<3u 66="0" 5R="0" 5T="0">\'+J.30(J.V("1o"))+"<3t><3N>"+(1v?\'<27 1i="1v">\'+J.2Y(a)+"</27>":"")+\'<27 1i="15"><U 1i="32" 1o="5O: 5W-3n 3G 3P 15">\'+b+"</U></27></3N></3t></3u></U>"},2O:6(a){I(a===N)a="";J.15=a;K b=J.3A("U");b.3H=J.1G(a);J.V("17")&&w(p(b,".17"),"3n",e.17.2i);J.V("35-15")&&w(p(b,".15"),"59",f);H b},2Q:6(a){J.1d=""+1N.52(1N.53()*5d).1z();e.22.2V[t(J.1d)]=J;J.1p=C(e.2T,a||{});I(J.V("2N")==R)J.1p.17=J.1p.1v=12},5m:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},54:6(a){J.2d={18:{1D:a.18,1W:"1j"},1c:{1D:a.1c,1W:"1j"},15:1e M("(?<18>"+a.18.1k+")(?<15>.*?)(?<1c>"+a.1c.1k+")","56")}}};H e}();1m 2e!="1h"&&(2e.1y=1y);',62,444,'||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||push|div|getParam|call|exec|else|prototype||lastIndex|false|config|arguments|code|RegExp|toolbar|left|indexOf|slice|captureNames|right|id|new|addToken|split|undefined|class|script|source|className|typeof|substr|title|params|strings|_xregexp|String|apply|line|gutter|test|html|SyntaxHighlighter|toString|lt|document|brush|regex|global|OUTSIDE_CLASS|getHtml|match|target|gt|join|window|http|Math|isRegExp|style|throw|highlight|break|concat|brushes|brushName|css|space|alert|value|expandSource|syntaxhighlighter|vars|size|first|substring|name|td|case|in|font|color|can|htmlScript|exports|dA|Fa|gm|handler|href|nbsp|trigger|cache|focus|parseInt|pattern|Error|values|INSIDE_CLASS|all|Match|useScriptTags|getLineHtml|execute|hasNamedCapture|items|text|www|com|func|help|parentNode|input|numbers|pad|object|hasFlag|discoveredBrushes|getButtonHtml|light|getDiv|regexList|init|br|gi|defaults|navigator|highlighters|collapse|Array|getLineNumbersHtml|preventDefault|getTitleHtml|list|container|highlighter_|https|quick|setFlag|charAt|span|width|getElementsByTagName|aboutDialog|tagName|backref|iterate|_blank|250|screen|top|nodeName|500|height|copyAsGlobal|click|alexgorbatchev|version|DTD|2010|noBrush|tbody|table|margin|xhtml1|org|head|w3|create|center|align|require|appendChild|regexLib|to|innerHTML|attachEvent|gs|findElements|body|string|tr|childNodes|select|005896|type|textarea|url|floor|brushNotHtmlScript|collapsed|tab|smart|sticky|Za|caption|findMatches|figureOutLineNumbers|Highlighter|tabs|bloggerMode|void|TypeError|isLineHighlighted|stripBrs|removeNestedMatches|the|createElement|isNaN|scope|output|load|getCodeLinesHtml|links|freezeTokens|userAgent|getMatchesHtml|auto|plain|HtmlScript|find|Can|Type|Brush|wasn|configured|extended|option|content|try|pre|catch|twice|expand|charset|same|DOCTYPE|Content|multiline|1999|TR|ignoreCase|removeChild|xmlns|transitional|expected|xhtml|EN|frame|W3C|PUBLIC|equiv|XHTML|Transitional|meta|dtd||toLowerCase|round|random|forHtmlScript|utf|sgi|gimy|definition|dblclick|functions|imsx|Infinity|1E6|run|valueOf|after|Object|switch|default|escape|execAt|getKeywords|token|within|flags|matchChain|when|constructing|supply|innerText|finally|createTextNode|textContent|one|aliases|srcElement|event|toUpperCase|constructor|returnValue|another|from|addEventListener|on|blur|July|scriptScriptTags|aspScriptTags|phpScriptTags|Hint|command_|_|cellpadding|getElementById|cellspacing|command|ftp|double|singleLinePerlComments|singleLineCComments|multiLineCComments|active|doubleQuotedString|singleQuotedString|xmlComments|multiLineSingleQuotedString|multiLineDoubleQuotedString|border|scrollbars|max|sort|1E3|min|number|alt|spaces|nogutter|highlighted|lastIndexOf|Xml|ie|close|write|open|MSIE|htmlscript|replaceChild|CDATA|continue|development|toolbar_item|02|Helvetica|offset|83|Arial|JavaScript|Geneva|2004|Copyright|highlighter|sans|3em|5em|fff|1em|000|background|serif|bottom|75em|large|xx|Alex|syntax|cmd|webscr|Gorbatchev|cgi|_s|xclick|keep|donate|2930402|hosted_button_id|paypal|bin|family|If|you|About|like|please'.split('|'),0,{}))

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3 u={8:{}};u.8={A:4(c,k,l,m,n,o){4 d(a,b){2 a!=1?a:b}4 f(a){2 a!=1?a.E():1}c=c.I(":");3 g=c[0],e={};t={"r":K};M=1;5=8.5;9(3 j R c)e[c[j]]="r";k=f(d(k,5.C));l=f(d(l,5.D));m=f(d(m,5.s));o=f(d(o,5.Q));n=f(d(n,5["x-y"]));2{P:g,C:d(t[e.O],k),D:d(t[e.N],l),s:d({"r":r}[e.s],m),"x-y":d(4(a,b){9(3 h=T S("^"+b+"\\\\[(?<q>\\\\w+)\\\\]$","U"),i=1,p=0;p<a.7;p++)6((i=h.J(a[p]))!=1)2 i.q;2 1}(c,"G"),n)}},F:4(c,k,l,m,n,o){4 d(){9(3 a=H,b=0;b<a.7;b++)6(a[b]!==1){6(z a[b]=="L"&&a[b]!="")2 a[b]+"";6(z a[b]=="X"&&a[b].q!="")2 a[b].q+""}2 1}4 f(a,b,h){h=12.13(h);9(3 i=0;i<h.7;i++)h[i].V("15")==b&&a.Y(h[i])}3 g=[];f(g,c,"Z");f(g,c,"W");6(g.7!==0)9(c=0;c<g.7;c++){3 e=g[c],j=d(e.B["14"],e.10,e.B.v,e.v);6(j!==1){j=u.8.A(j,k,l,m,n,o);8.11(j,e)}}}};',62,68,'|null|return|var|function|defaults|if|length|SyntaxHighlighter|for|||||||||||||||||value|true|collapse|reverse|dp|language||first|line|typeof|parseParams|attributes|gutter|toolbar|toString|HighlightAll|firstline|arguments|split|exec|false|string|result|nocontrols|nogutter|brush|ruler|in|XRegExp|new|gi|getAttribute|textarea|object|push|pre|className|highlight|document|getElementsByTagName|class|name'.split('|'),0,{}))

AJS.toInit( function() {
	try {
		if (window.SyntaxHighlighter && window.SyntaxHighlighter.config) {
			var contextRoot = (document.getElementById("confluence-context-path").content || "");
			var clipboardUrl =  contextRoot + '/s/1.9.10/_/download/resources/com.atlassian.confluence.ext.newcode-macro-plugin:clipboard/clipboard.swf';
		    window.SyntaxHighlighter.config.clipboardSwf = clipboardUrl;
		}
		window.SyntaxHighlighter.highlight();
	} catch (err) {
		AJS.log(err);
	}
});

