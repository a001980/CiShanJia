/*
粉丝福利红包
活动链接：https://wqs.jd.com/sns/202109/22/fansactiveall/index.html?qwer=<活动id>
环境变量：jd_fansDraw_activityUrl // 活动链接
        jd_fansDraw_Notify // 是否推送通知（true/false），默认不推送

注：活动非百分百中奖，请勿重复运行

*/

const $ = new Env('粉丝福利红包')
const jdCookie = require('./jdCookie')
const common = require('./function/jdCommon')
const notify = require('./function/sendJDNotify')

var version_='jsjiami.com.v7';const IiilI1i1=iI1Illli;(function(l1illii,lIIIi1ll,i1II1il,illII1il,l1illill,il1IliII,llI1ilii){return l1illii=l1illii>>0x9,il1IliII='hs',llI1ilii='hs',function(I1iiil1l,lI1l1l1,lilliI11,l11lI1I1,ill1l1Ii){const ii1lIlli=iI1Illli;l11lI1I1='tfi',il1IliII=l11lI1I1+il1IliII,ill1l1Ii='up',llI1ilii+=ill1l1Ii,il1IliII=lilliI11(il1IliII),llI1ilii=lilliI11(llI1ilii),lilliI11=0x0;const I1iIllIl=I1iiil1l();while(!![]&&--illII1il+lI1l1l1){try{l11lI1I1=-parseInt(ii1lIlli(0x339,'gpV!'))/0x1+parseInt(ii1lIlli(0x2ad,'^NNI'))/0x2*(-parseInt(ii1lIlli(0x2a2,'%c5d'))/0x3)+-parseInt(ii1lIlli(0x1d6,'^NNI'))/0x4*(-parseInt(ii1lIlli(0x2e2,'4^fp'))/0x5)+parseInt(ii1lIlli(0x20a,'$uZg'))/0x6+parseInt(ii1lIlli(0x2ca,'zwmc'))/0x7*(parseInt(ii1lIlli(0x32c,'CL2i'))/0x8)+-parseInt(ii1lIlli(0x2a5,'fB0l'))/0x9+parseInt(ii1lIlli(0x28d,'EnKh'))/0xa;}catch(IiiII1iI){l11lI1I1=lilliI11;}finally{ill1l1Ii=I1iIllIl[il1IliII]();if(l1illii<=illII1il)lilliI11?l1illill?l11lI1I1=ill1l1Ii:l1illill=ill1l1Ii:lilliI11=ill1l1Ii;else{if(lilliI11==l1illill['replace'](/[peDgbkIVuQwylRrExNAWK=]/g,'')){if(l11lI1I1===lI1l1l1){I1iIllIl['un'+il1IliII](ill1l1Ii);break;}I1iIllIl[llI1ilii](ill1l1Ii);}}}}}(i1II1il,lIIIi1ll,function(li1ililI,ilIli1ii,IIli1IIi,I11ii1,I1li1lI1,Il1IlIll,iIIliI1i){return ilIli1ii='\x73\x70\x6c\x69\x74',li1ililI=arguments[0x0],li1ililI=li1ililI[ilIli1ii](''),IIli1IIi=`\x72\x65\x76\x65\x72\x73\x65`,li1ililI=li1ililI[IIli1IIi]('\x76'),I11ii1=`\x6a\x6f\x69\x6e`,(0x13b022,li1ililI[I11ii1](''));});}(0x18a00,0x287ad,IIiIiilI,0xc7),IIiIiilI)&&(version_=IIiIiilI);const activityUrl=process[IiilI1i1(0x254,']kvi')][IiilI1i1(0x236,'Q0gx')]||'',isNotify=process[IiilI1i1(0x2dd,'gpV!')][IiilI1i1(0x268,'FlR5')]===IiilI1i1(0x33e,'!RXX'),appCode=IiilI1i1(0x30e,'Os@$');let cookie='';const cookiesArr=Object[IiilI1i1(0x325,'U0pH')](jdCookie)[IiilI1i1(0x304,'Lm1$')](lIIli1l1=>jdCookie[lIIli1l1])[IiilI1i1(0x2b3,'^lH$')](lIliilIi=>lIliilIi);!cookiesArr[0x0]&&($[IiilI1i1(0x2a8,'&04T')]($[IiilI1i1(0x2f7,'uP9@')],IiilI1i1(0x301,'TR9s')),process[IiilI1i1(0x261,'in0@')](0x1));!(async()=>{const liill1II=IiilI1i1,Illii1I1={'FXuhb':liill1II(0x1d4,'Lm1$'),'jIIJr':function(li1i1iii,lI1i1iI){return li1i1iii!=lI1i1iI;},'cjZER':function(illli1,l1lliiII){return illli1-l1lliiII;},'GiAiL':liill1II(0x31e,'&jlL'),'xzisK':liill1II(0x29d,'%cxa'),'FAkIe':liill1II(0x23a,'&SPB'),'vZtgm':function(IIil11li,l1lii1Ii){return IIil11li===l1lii1Ii;},'syjjW':liill1II(0x336,'fB0l'),'VARSn':liill1II(0x2b8,'uP9@'),'UHehb':liill1II(0x1d8,'%c5d'),'KjznQ':liill1II(0x23b,'Lm1$'),'NBzfX':function(l11ilII1,i1iiilll){return l11ilII1+i1iiilll;},'UHbfg':liill1II(0x205,'x7)6'),'RSIUs':function(iiI11IiI,iIIiIll){return iiI11IiI<iIIiIll;},'HgItr':function(IllillII,iIlil11){return IllillII!==iIlil11;},'kqAyc':liill1II(0x260,'k[7@'),'cReNG':liill1II(0x29a,'DKPD'),'lehWV':function(IiillI11,IlIliill){return IiillI11+IlIliill;},'NSCQe':function(ili1Ill1){return ili1Ill1();},'dbJiq':function(Illi1IIi,iI1II){return Illi1IIi(iI1II);},'RIiol':liill1II(0x215,'^lH$'),'sMbvQ':function(IlI11Ii1,l11liI1i){return IlI11Ii1===l11liI1i;},'esDhV':liill1II(0x267,'k[7@')};if(!activityUrl){console[liill1II(0x2bb,']kvi')](Illii1I1[liill1II(0x2c2,'DKPD')]);return;}const iIiI1Iil=common[liill1II(0x290,'%cxa')](activityUrl);if(!iIiI1Iil){console[liill1II(0x28b,'#v]^')](Illii1I1[liill1II(0x280,'ZjLm')]);return;}$[liill1II(0x328,'YV8L')]=activityUrl;const I1i1iI1l=iIiI1Iil[liill1II(0x25c,'Lm1$')];if(!I1i1iI1l[liill1II(0x326,'Lm1$')](Illii1I1[liill1II(0x2f3,'aZAT')])){if(Illii1I1[liill1II(0x1e8,'1mI[')](Illii1I1[liill1II(0x32f,'#0eJ')],Illii1I1[liill1II(0x2c1,'Lm1$')]))Ill1lili[liill1II(0x200,'CL2i')](liill1II(0x342,'SlqZ')),ii1I1lll[liill1II(0x310,'&%JB')]=!![];else{$[liill1II(0x293,'n#En')]=common[liill1II(0x1d2,'I*Vo')](activityUrl,Illii1I1[liill1II(0x2b1,'&04T')]);if(!$[liill1II(0x1f5,'^NNI')]){console[liill1II(0x1d0,'fB0l')](Illii1I1[liill1II(0x2c6,'vQmF')]);return;}}}notify[liill1II(0x2ea,'&SPB')]({'title':$[liill1II(0x289,'&%JB')]}),console[liill1II(0x20e,'!RXX')](Illii1I1[liill1II(0x1fe,'Cya6')](Illii1I1[liill1II(0x27f,'zwmc')],activityUrl));for(let ill1l1l1=0x0;Illii1I1[liill1II(0x2bf,'fB0l')](ill1l1l1,cookiesArr[liill1II(0x1e3,'x7)6')]);ill1l1l1++){if(Illii1I1[liill1II(0x30f,'$uZg')](Illii1I1[liill1II(0x1e9,'Os@$')],Illii1I1[liill1II(0x335,'&%JB')])){const iiilIi1i=i1iIliIl[liill1II(0x2ce,'$uZg')][I1i1llI][Illii1I1[liill1II(0x2f6,'n#En')]];Illii1I1[liill1II(0x24d,'07xs')](iilII1i,Illii1I1[liill1II(0x299,'&SPB')](iilIliiI[liill1II(0x2fd,'fB0l')][liill1II(0x211,'#v]^')],0x1))?I1liiii1+=iiilIi1i+'，':illIi1II+=''+iiilIi1i;}else{const ilI1I1II=Illii1I1[liill1II(0x1f7,'CL2i')][liill1II(0x27e,')dkr')]('|');let li1I1ili=0x0;while(!![]){switch(ilI1I1II[li1I1ili++]){case'0':console[liill1II(0x22b,'%cxa')](liill1II(0x2ff,'4^fp')+$[liill1II(0x26f,'4^fp')]+'】'+($[liill1II(0x24c,'Cya6')]||$[liill1II(0x214,'uGE)')])+liill1II(0x302,'&jlL'));continue;case'1':$[liill1II(0x272,')dkr')]=Illii1I1[liill1II(0x285,'qzGn')](ill1l1l1,0x1);continue;case'2':await Illii1I1[liill1II(0x28e,'YV8L')](Main);continue;case'3':$['UA']=common[liill1II(0x226,'^NNI')]($[liill1II(0x333,'&%JB')]);continue;case'4':$[liill1II(0x2ac,'$uZg')]=Illii1I1[liill1II(0x274,'&%JB')](decodeURIComponent,common[liill1II(0x221,'Nyiu')](cookie,Illii1I1[liill1II(0x1dd,'3tR)')]));continue;case'5':$[liill1II(0x1db,'n#En')]=notify[liill1II(0x2fa,'1mI[')]($[liill1II(0x2ec,'x7)6')],$[liill1II(0x2c5,'U0pH')]);continue;case'6':cookie=cookiesArr[ill1l1l1];continue;case'7':$[liill1II(0x245,'TR9s')]='';continue;}break;}}}if(isNotify&&notify[liill1II(0x288,'^NNI')]()){if(Illii1I1[liill1II(0x313,'xnRn')](Illii1I1[liill1II(0x327,'Q0gx')],Illii1I1[liill1II(0x1de,'uP9@')]))notify[liill1II(0x2d8,'in0@')](Illii1I1[liill1II(0x24a,'EnKh')](notify[liill1II(0x321,'CL2i')],liill1II(0x237,'x7)6')+$[liill1II(0x1dc,'uP9@')])),await notify[liill1II(0x2a6,'%cxa')]();else{const iI1i1lIl=IiIi1ii1[liill1II(0x216,'^lH$')][l1I1i1il][Illii1I1[liill1II(0x241,'gpV!')]];Illii1I1[liill1II(0x20b,'CL2i')](iii1iiIl,Illii1I1[liill1II(0x229,')dkr')](liI1I11I[liill1II(0x240,'kT*k')][liill1II(0x332,'^lH$')],0x1))?l1IllI1+=iI1i1lIl+'，':IIl1Ilii+=''+iI1i1lIl;}}})()[IiilI1i1(0x1cc,'Os@$')](l1iilIlI=>$[IiilI1i1(0x32d,'xnRn')](l1iilIlI))[IiilI1i1(0x1e5,'97fN')](()=>$[IiilI1i1(0x30c,'%cxa')]());function iI1Illli(_0x546f14,_0x214767){const _0x48926d=IIiIiilI();return iI1Illli=function(_0x1a8232,_0x4a3ffa){_0x1a8232=_0x1a8232-0x1c9;let _0x51ce16=_0x48926d[_0x1a8232];if(iI1Illli['VvkKZS']===undefined){var _0x2c9078=function(_0x5dd241){const _0x5bd35f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x473350='',_0x1e528c='';for(let _0x54eb2e=0x0,_0x401a8a,_0x3ce03c,_0x4b0a53=0x0;_0x3ce03c=_0x5dd241['charAt'](_0x4b0a53++);~_0x3ce03c&&(_0x401a8a=_0x54eb2e%0x4?_0x401a8a*0x40+_0x3ce03c:_0x3ce03c,_0x54eb2e++%0x4)?_0x473350+=String['fromCharCode'](0xff&_0x401a8a>>(-0x2*_0x54eb2e&0x6)):0x0){_0x3ce03c=_0x5bd35f['indexOf'](_0x3ce03c);}for(let _0xa6192d=0x0,_0x10b553=_0x473350['length'];_0xa6192d<_0x10b553;_0xa6192d++){_0x1e528c+='%'+('00'+_0x473350['charCodeAt'](_0xa6192d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1e528c);};const _0x483671=function(_0x443962,_0x1146ad){let _0xa33ac1=[],_0x48d9c2=0x0,_0x388ca2,_0x5484ce='';_0x443962=_0x2c9078(_0x443962);let _0x5cacc2;for(_0x5cacc2=0x0;_0x5cacc2<0x100;_0x5cacc2++){_0xa33ac1[_0x5cacc2]=_0x5cacc2;}for(_0x5cacc2=0x0;_0x5cacc2<0x100;_0x5cacc2++){_0x48d9c2=(_0x48d9c2+_0xa33ac1[_0x5cacc2]+_0x1146ad['charCodeAt'](_0x5cacc2%_0x1146ad['length']))%0x100,_0x388ca2=_0xa33ac1[_0x5cacc2],_0xa33ac1[_0x5cacc2]=_0xa33ac1[_0x48d9c2],_0xa33ac1[_0x48d9c2]=_0x388ca2;}_0x5cacc2=0x0,_0x48d9c2=0x0;for(let _0x4f9969=0x0;_0x4f9969<_0x443962['length'];_0x4f9969++){_0x5cacc2=(_0x5cacc2+0x1)%0x100,_0x48d9c2=(_0x48d9c2+_0xa33ac1[_0x5cacc2])%0x100,_0x388ca2=_0xa33ac1[_0x5cacc2],_0xa33ac1[_0x5cacc2]=_0xa33ac1[_0x48d9c2],_0xa33ac1[_0x48d9c2]=_0x388ca2,_0x5484ce+=String['fromCharCode'](_0x443962['charCodeAt'](_0x4f9969)^_0xa33ac1[(_0xa33ac1[_0x5cacc2]+_0xa33ac1[_0x48d9c2])%0x100]);}return _0x5484ce;};iI1Illli['SrLOmb']=_0x483671,_0x546f14=arguments,iI1Illli['VvkKZS']=!![];}const _0x1552cc=_0x48926d[0x0],_0x473abc=_0x1a8232+_0x1552cc,_0xa19285=_0x546f14[_0x473abc];return!_0xa19285?(iI1Illli['LkdlCu']===undefined&&(iI1Illli['LkdlCu']=!![]),_0x51ce16=iI1Illli['SrLOmb'](_0x51ce16,_0x4a3ffa),_0x546f14[_0x473abc]=_0x51ce16):_0x51ce16=_0xa19285,_0x51ce16;},iI1Illli(_0x546f14,_0x214767);}async function Main(){const I11i1iil=IiilI1i1,lIIlllll={'XOMPI':function(lI1Iii){return lI1Iii();},'MELMJ':function(illlilI1,lII1lI1I){return illlilI1===lII1lI1I;},'XSeDm':function(iIlIilII,l1I1i1i){return iIlIilII(l1I1i1i);},'zYMjE':I11i1iil(0x2f4,'1mI['),'HjuoR':I11i1iil(0x1cb,'Nyiu'),'Tfejj':function(lllilI1I,IIlililI){return lllilI1I(IIlililI);},'sHefi':I11i1iil(0x1f4,']kvi'),'pXJEO':function(IilIi1l1,Illl11ii){return IilIi1l1!==Illl11ii;},'cjjed':I11i1iil(0x1ee,'myB]'),'TOjLZ':I11i1iil(0x33f,'%c5d'),'okCLT':I11i1iil(0x253,'&jlL')};$[I11i1iil(0x315,'myB]')]=![],await lIIlllll[I11i1iil(0x246,'4^fp')](getLoginStatus);if($[I11i1iil(0x2b6,'qzGn')])return;if($[I11i1iil(0x340,'I*Vo')]){lIIlllll[I11i1iil(0x2bc,'%c5d')]($[I11i1iil(0x2cf,'n#En')],0x1)&&await lIIlllll[I11i1iil(0x26e,'YV8L')](sendRequest,lIIlllll[I11i1iil(0x2f8,']kvi')]);await lIIlllll[I11i1iil(0x2d6,'SlqZ')](sendRequest,lIIlllll[I11i1iil(0x208,'^lH$')]);if($[I11i1iil(0x219,')dkr')])return;await lIIlllll[I11i1iil(0x2ae,'Q0gx')](sendRequest,lIIlllll[I11i1iil(0x224,'uGE)')]);}else lIIlllll[I11i1iil(0x322,'Os@$')](lIIlllll[I11i1iil(0x317,'Nyiu')],lIIlllll[I11i1iil(0x1eb,'$uZg')])?await lIIlllll[I11i1iil(0x1c9,'ZjLm')](sendRequest,lIIlllll[I11i1iil(0x225,')dkr')]):IiIIii1I+=''+Illi1I11;}function sendRequest(IilI11i1){const lll1iI1=IiilI1i1,lI1illl={'tZLva':lll1iI1(0x344,')dkr'),'lbnhE':function(iiill11i,iiiilll){return iiill11i===iiiilll;},'BWtEO':lll1iI1(0x32a,'SlqZ'),'nkufz':function(ll1iill1,lIlIIii1){return ll1iill1(lIlIIii1);},'wgWhw':function(lIiIi1lI,IlI1i1Il){return lIiIi1lI(IlI1i1Il);},'ToyWq':lll1iI1(0x323,'^NNI'),'XhMTm':lll1iI1(0x31c,'3tR)'),'lKglJ':lll1iI1(0x2c8,'n#En'),'oUpTJ':function(IIiI11li,il11l1II){return IIiI11li<il11l1II;},'TukRk':lll1iI1(0x329,'#0eJ'),'eWTHM':function(i1iIiIII,l1iIIll1){return i1iIiIII!=l1iIIll1;},'HnPfS':function(iI1lIii,lI1li1i1){return iI1lIii-lI1li1i1;},'TOdei':function(lli1IIl1,llllIiii){return lli1IIl1+llllIiii;},'uHNLk':function(IilIlI1I,l11iIii){return IilIlI1I!==l11iIii;},'uaFSp':lll1iI1(0x2b2,'myB]'),'eMDzU':lll1iI1(0x316,'in0@'),'MTdra':lll1iI1(0x1f0,'TR9s'),'NLQSY':lll1iI1(0x1f3,'1mI['),'ezFqz':lll1iI1(0x2da,'&jlL'),'smGCv':lll1iI1(0x1d7,'vQmF'),'xjpeZ':lll1iI1(0x265,'&jlL'),'Dqgnd':lll1iI1(0x2c4,'fB0l'),'MClRP':function(iIiI1IlI,iiIlI11l){return iIiI1IlI===iiIlI11l;},'VXYOa':function(ll1IIIl1,l11Iilii){return ll1IIIl1<l11Iilii;},'umMWZ':function(i1Ili,IIiil1){return i1Ili!=IIiil1;},'McbKd':function(i1illIl1,l1iil1lI){return i1illIl1-l1iil1lI;},'XeePt':lll1iI1(0x231,'fB0l'),'wbftY':function(ii1lliil,ilIlIlll){return ii1lliil+ilIlIlll;},'dSwdQ':lll1iI1(0x2c9,'&SPB'),'Vigtf':lll1iI1(0x2dc,'CL2i'),'AIlSd':function(iiIIIi11,l1lIil1i){return iiIIIi11!==l1lIil1i;},'PjfKR':lll1iI1(0x2e9,'^lH$'),'SyrrT':function(IIli1lI,l1IiIl1){return IIli1lI(l1IiIl1);},'jJBGG':function(Ili1iiii,IlI11Il){return Ili1iiii===IlI11Il;},'DkUDI':lll1iI1(0x250,'5g!K'),'ZQXxi':lll1iI1(0x25a,'&%JB'),'BGghJ':lll1iI1(0x29b,'EnKh'),'ywJbe':lll1iI1(0x243,'%c5d'),'AAKET':lll1iI1(0x262,'EnKh'),'WnONx':lll1iI1(0x29c,'DKPD'),'jrqrn':lll1iI1(0x2c7,'FlR5'),'GGWJL':lll1iI1(0x330,'fB0l'),'TnRDV':lll1iI1(0x220,'n#En'),'hknpz':lll1iI1(0x311,'^NNI'),'bWCCX':lll1iI1(0x263,'#v]^')};return new Promise(async Ill111iI=>{const illliii1=lll1iI1,lili1iIl={'ulUlO':function(l11l1i1i,lllliliI){const ilI1II1i=iI1Illli;return lI1illl[ilI1II1i(0x31b,'x7)6')](l11l1i1i,lllliliI);},'JURJd':lI1illl[illliii1(0x2b7,'FlR5')],'svuxU':function(lIiiii1l,illi1il1){const iill1l1i=illliii1;return lI1illl[iill1l1i(0x21f,'Nyiu')](lIiiii1l,illi1il1);},'dUOGp':function(ilIIIli,I1iiillI){const I1llI1l1=illliii1;return lI1illl[I1llI1l1(0x235,'in0@')](ilIIIli,I1iiillI);},'bQtoc':function(lllIill1,lIiliI1){const iliiiiIi=illliii1;return lI1illl[iliiiiIi(0x2f1,'k[7@')](lllIill1,lIiliI1);},'lWeIZ':function(IIl1I1ii,I1IiI1iI){const iiI1Il11=illliii1;return lI1illl[iiI1Il11(0x1e2,'#v]^')](IIl1I1ii,I1IiI1iI);},'dOsVR':lI1illl[illliii1(0x22e,'4^fp')],'pmSGC':lI1illl[illliii1(0x2fc,'DKPD')]},IllllIII={'url':illliii1(0x275,'Os@$')+IilI11i1+illliii1(0x1f8,'k[7@')+($[illliii1(0x287,'YV8L')]||'')+illliii1(0x26b,'in0@')+($[illliii1(0x2de,'^lH$')]||'')+illliii1(0x2cb,'4^fp')+Date[illliii1(0x2e1,'YV8L')]()+illliii1(0x1ca,'$uZg')+IilI11i1+illliii1(0x26d,'Q0gx')+appCode,'headers':{'Accept':lI1illl[illliii1(0x31f,'SlqZ')],'Accept-Encoding':lI1illl[illliii1(0x2ee,'07xs')],'Accept-Language':lI1illl[illliii1(0x20f,'I*Vo')],'Sec-Fetch-Site':lI1illl[illliii1(0x31a,'TR9s')],'Sec-Fetch-Mode':lI1illl[illliii1(0x282,'&SPB')],'Sec-Fetch-Dest':lI1illl[illliii1(0x341,'!RXX')],'Connection':lI1illl[illliii1(0x27d,'Nyiu')],'Cookie':cookie,'Host':lI1illl[illliii1(0x300,'&SPB')],'Referer':lI1illl[illliii1(0x2db,'myB]')],'User-Agent':$['UA']}};$[illliii1(0x248,'fB0l')](IllllIII,(ll1llIil,l1i1il1I,IIii1ill)=>{const lI11lIIl=illliii1,lll1ill1={'pAiru':lI1illl[lI11lIIl(0x2e3,'in0@')]};try{if(ll1llIil){if(lI1illl[lI11lIIl(0x203,']kvi')](lI1illl[lI11lIIl(0x2e8,'%cxa')],lI1illl[lI11lIIl(0x1e0,'97fN')]))console[lI11lIIl(0x303,'YV8L')](lI1illl[lI11lIIl(0x281,'zwmc')](String,ll1llIil));else{let iIlI111='';for(let Iiil1ll=0x0;lili1iIl[lI11lIIl(0x30d,'xnRn')](Iiil1ll,l1iI1iil[lI11lIIl(0x1fd,'^NNI')][lI11lIIl(0x32b,'Q0gx')]);Iiil1ll++){const II1lI1iI=llIiliI1[lI11lIIl(0x2fd,'fB0l')][Iiil1ll][lili1iIl[lI11lIIl(0x238,'Cya6')]];lili1iIl[lI11lIIl(0x22f,'5g!K')](Iiil1ll,lili1iIl[lI11lIIl(0x23f,'&SPB')](l1iillll[lI11lIIl(0x2a0,'%cxa')][lI11lIIl(0x1cd,'xnRn')],0x1))?iIlI111+=II1lI1iI+'，':iIlI111+=''+II1lI1iI;}I11lI1I1[lI11lIIl(0x21a,'%c5d')](lI11lIIl(0x320,']kvi')+iIlI111+'\x0a'),iiIl1IIl[lI11lIIl(0x2f9,'I*Vo')](lili1iIl[lI11lIIl(0x270,'#0eJ')](ilIiillI[lI11lIIl(0x30a,'&jlL')],lI11lIIl(0x206,'07xs')+iIlI111));}}else{const lIiIIIII=lI1illl[lI11lIIl(0x2d4,'aZAT')](handleResponseData,IIii1ill);if(lIiIIIII)switch(IilI11i1){case lI1illl[lI11lIIl(0x25f,'vQmF')]:$[lI11lIIl(0x2d7,'k[7@')]=lIiIIIII[lI11lIIl(0x2e7,'&04T')],$[lI11lIIl(0x1ed,'&jlL')]=lIiIIIII[lI11lIIl(0x25d,'EnKh')];break;case lI1illl[lI11lIIl(0x1ce,'Q0gx')]:if(lI1illl[lI11lIIl(0x27a,'CL2i')]($[lI11lIIl(0x26f,'4^fp')],0x1)){if(lI1illl[lI11lIIl(0x22a,'vQmF')](lI1illl[lI11lIIl(0x2e5,'&%JB')],lI1illl[lI11lIIl(0x2c3,'k[7@')])){let llIlIi11='';for(let IlI1lIl1=0x0;lI1illl[lI11lIIl(0x2cd,'!RXX')](IlI1lIl1,lIiIIIII[lI11lIIl(0x1fa,'I*Vo')][lI11lIIl(0x211,'#v]^')]);IlI1lIl1++){const i1iIIlIi=lIiIIIII[lI11lIIl(0x27c,'%c5d')][IlI1lIl1][lI1illl[lI11lIIl(0x2f5,'I*Vo')]];lI1illl[lI11lIIl(0x30b,'fB0l')](IlI1lIl1,lI1illl[lI11lIIl(0x278,'CL2i')](lIiIIIII[lI11lIIl(0x239,'Q0gx')][lI11lIIl(0x2cc,'$uZg')],0x1))?llIlIi11+=i1iIIlIi+'，':llIlIi11+=''+i1iIIlIi;}console[lI11lIIl(0x276,'FlR5')](lI11lIIl(0x29e,'&SPB')+llIlIi11+'\x0a'),notify[lI11lIIl(0x1d5,'EnKh')](lI1illl[lI11lIIl(0x252,'uGE)')](notify[lI11lIIl(0x319,'07xs')],lI11lIIl(0x251,'vQmF')+llIlIi11));}else l11lIlI1+=l11iiI1i+'，';}lI1illl[lI11lIIl(0x244,'Nyiu')](lIiIIIII[lI11lIIl(0x2f2,'07xs')],0x1)&&(lI1illl[lI11lIIl(0x31d,'!RXX')](lI1illl[lI11lIIl(0x207,'3tR)')],lI1illl[lI11lIIl(0x2ab,'x7)6')])?(lIIlIllI=iI1iII1I[lI11lIIl(0x1d9,'&%JB')](iii1l1II),lili1iIl[lI11lIIl(0x23c,'&jlL')](IIlii11[lI11lIIl(0x2d2,'&SPB')],'0')&&(iii11II1[lI11lIIl(0x305,'07xs')](lili1iIl[lI11lIIl(0x26c,'fB0l')]),llI1lii[lI11lIIl(0x312,'k[7@')][lI11lIIl(0x242,')dkr')](lili1iIl[lI11lIIl(0x28f,'zwmc')]),iliiiil1[lI11lIIl(0x212,'Lm1$')]=!![])):(console[lI11lIIl(0x2d9,'3tR)')](lI1illl[lI11lIIl(0x297,'DKPD')]),$[lI11lIIl(0x283,'x7)6')][lI11lIIl(0x28c,'%c5d')](lI1illl[lI11lIIl(0x33d,'Nyiu')]),$[lI11lIIl(0x296,'!RXX')]=!![]));break;case lI1illl[lI11lIIl(0x337,']kvi')]:lI1illl[lI11lIIl(0x269,')dkr')](lIiIIIII[lI11lIIl(0x309,'SlqZ')],0x0)?(console[lI11lIIl(0x314,'&jlL')](lI1illl[lI11lIIl(0x2fe,'gpV!')]),$[lI11lIIl(0x22c,'$uZg')][lI11lIIl(0x1ef,'Q0gx')](lI1illl[lI11lIIl(0x292,'Q0gx')])):(console[lI11lIIl(0x24e,'Cya6')](lI1illl[lI11lIIl(0x1d3,'fB0l')]),$[lI11lIIl(0x228,'EnKh')][lI11lIIl(0x32e,'Os@$')](lI1illl[lI11lIIl(0x2ba,'x7)6')]));break;case lI1illl[lI11lIIl(0x20c,'gpV!')]:if(lIiIIIII[lI11lIIl(0x2d1,'EnKh')]){if(lI1illl[lI11lIIl(0x2df,'&04T')]($[lI11lIIl(0x272,')dkr')],0x1)){let lIliiIiI='';for(let ll1lilIl=0x0;lI1illl[lI11lIIl(0x202,'myB]')](ll1lilIl,lIiIIIII[lI11lIIl(0x2a1,'&04T')][lI11lIIl(0x249,'uGE)')]);ll1lilIl++){const i1IiiiI1=lIiIIIII[lI11lIIl(0x232,'uGE)')][ll1lilIl][lI1illl[lI11lIIl(0x2c0,'Cya6')]];if(lI1illl[lI11lIIl(0x24b,'&%JB')](ll1lilIl,lI1illl[lI11lIIl(0x26a,'97fN')](lIiIIIII[lI11lIIl(0x232,'uGE)')][lI11lIIl(0x308,'&%JB')],0x1))){if(lI1illl[lI11lIIl(0x227,'Q0gx')](lI1illl[lI11lIIl(0x25b,'aZAT')],lI1illl[lI11lIIl(0x2d0,'^lH$')]))lIliiIiI+=i1IiiiI1+'，';else{iIIIII[lI11lIIl(0x1ec,'SlqZ')](lll1ill1[lI11lIIl(0x1cf,'&jlL')]);return;}}else lIliiIiI+=''+i1IiiiI1;}console[lI11lIIl(0x21b,'&%JB')](lI11lIIl(0x33a,'zwmc')+lIliiIiI+'\x0a'),notify[lI11lIIl(0x298,'3tR)')](lI1illl[lI11lIIl(0x2bd,'zwmc')](notify[lI11lIIl(0x286,'I*Vo')],lI11lIIl(0x222,'EnKh')+lIliiIiI));}console[lI11lIIl(0x233,'1mI[')](lI1illl[lI11lIIl(0x23d,'Q0gx')]),$[lI11lIIl(0x23e,'%cxa')][lI11lIIl(0x1df,'DKPD')](lI1illl[lI11lIIl(0x2d3,'3tR)')]);}else console[lI11lIIl(0x295,'uGE)')](lI1illl[lI11lIIl(0x279,'I*Vo')]),$[lI11lIIl(0x23e,'%cxa')][lI11lIIl(0x218,'^lH$')](lI1illl[lI11lIIl(0x234,'x7)6')]);}else console[lI11lIIl(0x2e0,'#0eJ')](IIii1ill);}}catch(lilIi1ll){lI1illl[lI11lIIl(0x1da,'Cya6')](lI1illl[lI11lIIl(0x2f0,'5g!K')],lI1illl[lI11lIIl(0x25e,']kvi')])?$[lI11lIIl(0x1e6,'I*Vo')](lilIi1ll,l1i1il1I):lllilii=l11llil[lI11lIIl(0x334,'fB0l')](il1iIl[0x2]);}finally{lI1illl[lI11lIIl(0x2a3,'aZAT')](lI1illl[lI11lIIl(0x306,'Os@$')],lI1illl[lI11lIIl(0x1f1,'Lm1$')])?iIIIlIil+=Ii1IIiiI+'，':lI1illl[lI11lIIl(0x1fb,'myB]')](Ill111iI,IIii1ill);}});});}function IIiIiilI(){const iiIII1=(function(){return[...[version_,'lkxVjrysQwjippaImgiW.RecpoxKmNw.bvDE7AuI==','W6pdSmkBwmkfd29X','W44iW70','pCojW6/dGmo+lG','dGC1WQRcNa','iCoEW6JdNCoV','yh5cFCol','WQxcGxSrW50','WPxdU8oykSky','es/cVdOPsdu','cINdImkOWOW','fSksWQy4pq','BKeJoKO','zCk6W6NcINO','w2ddSgP+lry','WR0smmokW4lcPe1FmfVcLGBcVW','hIZdNW','5P2O5OM45lQA','yxCugNO','W6JcOJ4JWRO','n2PV','WP/cHx0QW6W4Bq','aSotW4DHW6q','xCkWW7C','W4HPsW','W50+WQuoW71PzG','WRW4gmoDW5C','WQNdGmoujCks','W6pcTbZcUW0','WOZcJhG3W4i','lCoXW4HyW7elEa','WQhdGND7FG','WQZcJ2yxW7S','gZpcVJmNrG','v0XVWPtdVW','W6ZcPXPaW5W','WRGdjSoyW5m','BmoQFCorWPG','WQRcR8onW5tdO1frW4VdRSoTeCke','tSkMWQhcOw8','tMpdTxvI','C8o0rCoaWOK','j8k0WPOzlW','W7NdGg/dOWddP8kMWRxdV3iKaSo+lHXxCmk6cmkGWOS','W4asWQddLgK','t0HtCmor','W4/cG3hdRa','W5hcG0BdUSoR','W6exWQ/dP3BcNSk+CCkZzmoEg1K','W6VdH2/dSa3dNq','4PY0W5/OTyRLJjVMLBxMLOS','rCkixYWo','rLTbWRRdKW','n35FWQnd','W6j9W6PpWROVaow8QEwMTUocN+s4JEs4O+I1RUwnUq','edFcVIu0','44kN5O+P56sG44gj6kYJ5yw16i2g5y2/hCkSwc4IWO8','AmoVWP3dP0ZdVGS','W4PPwW','WPvpxW','ECoYua','omkKqmocza','otT4WOldN8oyWQxdRSoTlX0nw8okumoNWOiqhG','W6pcMHxcSdpcNG','t8kmW7G','iCkQW5NcUqpcUNu','u358WOJdUW','WOFdUM1B','W67dU8kRWOVcLa','bCk9rCk8dKpcNCkcEeW','gColW4JdK8o4','W7ZcLblcPXxcG8kq','W6Sju2RdHCoytWZdOq','vgtdOhjAjbC','W6JdMSkCWPhcIG','lSkQW5a','CeS+kxdcRw4','5Bs66AoK5y6c6l2S56s55yUO','BCkCWO1jzq','W5VcTMtdT8ohmIFdL07dNSo+WQy9wSkb','DSoYwCohWPGZkW','W6bxvrBcRa','W5pcKsDQW4u','aZBdNCk/WQ9jWRCtvbBdPSk2WPJcHSkjxYadWPddVJ4','fbOlWRlcVq','4PUIW6xORydLHOxLR7ZKUP3LV4tOP6hNMiVNJjZLOP3LJBhPHA3LKyRLH4xOVBFOOAJOHRZMNla','F8kUW6VcPL0','5RAq5yMY5AwD5zgr7760','W7NcRayVWQXsea','gmkwBmomEq','W60nghldMmkPwaBdOtddQmoOvmo7aqbXDKXjea','b8o3p8kBo0zg','h8o5l8ky','WPfatmobtaDSW7u','W6FdPmo3W516','W4DLsmkZWQLxW6rhWO0ciG','qSkpW6jOreKwFmkBuW','x8kKW4RcV2y','W67dSSoDW5jyW5C','WQ7dTvTSW78efmoyustcGLe','W7FdUmkzWQlcQrC','dSkNxG','qSkMW7PRAq','ruPAWQNdHI4','W6PpwCkVWRa','WPhcGxaMW50+','W5RcJb7cPqNcL8ktW5W','rKHAWRpdKW','W6tcJJRcRIq','BePpWOZdHq','W6xcLLRdG8o3','ugT1W47dPwtdMsGWDeZcHwi','yZqVW6Oicc8Pi13dUCkE','5REQ5yMP5AAP5zo/77+D','amoPWPzwEcNcIG','W6fOCYdcOW','q8kIWOnEya','fsaWWPS','WQldUmocB8o3','W7ueWR/dR3tcKSkjz8kuDa','jHusWRtcMG','5lQr5lU15P6b5yMV5zM/6l+p5zUf56U65Pw65OYj','vSkOCIaG','4PUEAEIVU+wGMowgK+AIT+w+HEATSoEHVUEzLUMqGUApGa','gWaWWOxdVa','D8oFW6ldGSoKiWtcN3VdGx8meYW8z1qnW7fgWOGHdMynEt7cM8oZW44hW7tcMM4oxG','F8kdWOjEEmook8keoSo8gIHfww3dLSkWBSoGW6ZdOW'],...(function(){return[...['c8kVuSoQxG','W7FdSSkqWOdcRW0','W5RdV8o+W6fb','mSkeW57cVXm','wKzp','WQqnmW','W7mcWR/dK3dcL8kTF8kVCCowefNdKmkF','rurVWOpdGa','WOT+xCoeqWznW6n/W5m','WPddUCovmCkjdeFdJComW45jkGK','WQHmsZtcMCkzytFdRY/dUW','8l2nOXtPOAhLJyhMI73LIQu','WPldPCoRrW','W7/cNGNcPci','W70sWPz1Ca','zhvvA8osnCkp','W4dcGwJdOmonWRRcJwxdLdBdGq','iaRdKCkIWRO','W4tcKvJdOCoT','ECkWFW','W69lEdLB','6lsB5yYE5PwS5PAg','b8ogWQDIxG','W6NcRbbcW5ad','nCoiW6HfW6C','W4T1yH14rJ0','W7GiWQZdG3dcIq','Ef51vmoy','W77dR37dTHq','a8k/z8oWvq','5lIh5lUg5PYg5yIX5zUg6l6i5zUx56Ua5Psq5O+A','bCoJW6VdQ8oq','uCkgW6S','jmk3W5JcOXlcKw8e','BLednhC','W6tdVSol','5Bwf6Ak/6l+D','WQHesCoMAW','iCohW6X0W6i','W6ZdH2VdPIBdMCkXWQtdU3qGfCoVkHPBBCk1hmkW','W4/cQgRdP8oXpwRdJGNdGSo/W7W7wmkCkmo1b0lcQW','W70BcwNdL8kFwbRdHsq','ySkzWOa','W7NcKq0vWO4','bNtdPMHFFG','WO/dT8okw8o/','W6qvWQldVgC','ufKLk3y','W6tcT1ZdTSoy','W6WkfhRdHa','W4yyWQjFqW','W59nBIJcPWFdNSkglSkVwciIWOrZW7pcT8kdjfRcHmk8WQuPWOBcOvNdSmkvmcPVlYVcTmkOW6KHWQzPqhi','W7BcRa8','WR0ZWR1sDSkzWPG','vxGofKm','W4FcUgxdUmoR','ACkhE2Hc','5RA+5yMH5ysB5y+g776+','h+ocJEA0JowiM+wMQ+wsNoobJG','bYldVSkEWQy','WRxcJMSUW7S','x1PeWQ/dKtpcIq','z8kzWRJcKSk6DbxcP2dcTb9f','W7dcIIerWRS','fNv+WRXD','WPpdK3JdR8o5WPVcS34','dt0I','W5uMWOddG1y','5lQv5lID5P6E5yQG5zMt6l6x5zQS56MT5PwR5O6k','aCoPWOTcBsy','WOTfrSoDAXzN','n8o4WOf3BW','lCkmcCkEW5VcOKfm','WO3cKeeXW4a4','WO3cLNC7W4W','W67dUmouW7bEW40','WPVcJwy','dsjLa1JdVSoK','WO/dVCoP','W6pcKbW','WPTLAd9xqqa','aIldISk+WRm','W7FdUmkz','A8kHWRnKta','yNvdAmkEm8kgsCk/W5i','ACktWPnVBSo+iCkok8oddsfewq','W6/JGPNMTORLI7JLPQVLKQJJGju','4PQWW4pOR6FLHzdLRQhKUzlLV5ZOPl/NMlhNJ47LOQBLJA/PHR3LKQxLHkZOVBVOORdOHRxMNkW','c8k3cCkkW7W','esjpp14','W7SDe1xdOa','W4/dLmoFW6D8','WOJdRmoci8kCdMe','hsnwnLG','W6tcIfRcJ8os','WO/dUMq','pmojW7ldLmoRirC','W6m/WR1jnSkuWRHdCmkm','WQW8WPuHW5K','wCkdWQpcVwS','ACktWPm','CMzoWRBdLq','cmknbCkwW7a','W6tdMM0','W6dcSZHuW54','WOambmonW6u','W6JdS8oSW5nnW5hdQmkbx8kcwc4ZlSoza8oNBSoplxOUta','WO/JG5NMTyxLIO3LNPtLNkVJGzi','W4ipWOPZFW','W7ldPCoAW49j','hcBcUbGNrt8AW6VdTadcUCkA','4PMydUIVMowJHUwgOoAHN+w8HUAVPEEHOUEyTowmJ+MfPq','lSksW5lcHdW','W7hdUSo0W7zA','WO7dShbnuhBcQG','haNcNXi+','W5VcVYtdIfq','ffXSWRPB','gcb0','WOtdQmoNrCkPsNWzWQjiW7qqlSkYWQ95ga','ySkuWOLera','W5LqEtpcMLZcNmom','WRayWO01W5K','sN8/rdZcS8o6rMNcMmkPnq','uuXC','fmkAaSklW6hcQW','WONdRmozb8kR','W7RcKJBcGb0'],...(function(){return['W6yZWRTsvCkuWRLp','F8ouFSo5WO8','W6q1WR8','WRegp8oBW48','4P2MW5xOT7dLJllML57MLla','WOlJG7RMTi/LIy/LP4hLKkZJGkS','lmkWcmkjW7W','jmkKW5NcVGFcPhe/W6VdGx/dNG','W47cTh0','amoTWPfgCq','E8kKWP0hWOWkusivW6O7','WR5iW6e','EmkJBIrlwGfxWQZdSSoaBSocW6OazSoq','i8kOdSkgW41VoeJdHSoduCkp','6lAP5yYi5PAB5PAF','oCkqWPqapG','WOHpw8ofvWjKW6m','WOpdU8oEpSkjlgRdHG','W73cS2ZdPmoi','W5ZcHu3cSmoM','DfpdVKL4','WQ0ApCoF','WP/dOCkCe8kZrx7dISkpW7jnkG5VwCkOW50dWRC','bCo4WPfvANtdGmoRgM3dHNFdJtfyW6agW7Gs','WPO0WQW/W6i','6Aoe5yYt5OQN5yMs','W7ZcQHa','u0NdHvD1','ESkht35ADwRdUSohafldQdZdHmovW4lcMSow','eITIg08','W6b/BJDW','W64rn8ooW5JcPhHrmHldGu7cQCkYW5CNqgtdKvXtW64','uMzBWPBdPa','WQtdSmoSW4fvWOldT8k2c8kcxWeriSojd8kS','W75vwCkEWRi','WOe5WQqaW6G','u8koW6rUxq','W4pdLfn36k+g5Rgt5AE+6lwj776l6k6e5Qcg5P6l57YZ6lsR6yAa6k2A','fYDOfNi','k8kiu8oLCq','W6VcNthcVJy','amk6uSo5ruhdLSkBAWJcP0pdJZRdPwjMth5rtCkFEvPJtHFcJYtcRedcMqenW63cGmkNjc1u','FmkmDW','jCkDWQyklW','W5lcRtG9WPO','W7eDWO3dT3G','W7BcOqyZWOW','x2fdWRJdVa','WPpdOmoNt8oG','wSkyWRvOvW','dtLGgN4','WOtcICkDwmkG','oYK8WRldMG','WR/cQSkkwmk9','eI7cOsCG','W6JcRa1wW4umjG','omkjq8ozFW','W57cLwH5nW','W7CiWQxdSMFcLCkj','W4DLsmkZWQLxW6rhWPeu','W7SDcu3dHmkfxWldQYu','W6hcNHBcSG','W6rEFq/cNG','aCoJWOi','WOxdU8o2','W5tcSmkbymoowttdJmo6W7v1ls8','W6HvF8klWRO','WQhcRmkSECke','WPpdThfnvetcVqa','W7GiWQW','W6FdRCo1W4rw','AhnsCCofo8kEwCkaW5m','pMT+','fmkqcW','eJKSWO7cHchcHW','ESkuqY4Y','bZpdNmkSWQjZWPuFtGVdTCk9WPG','gZBcIHaC','lSkLmsHtbLzoW7/dOSkwzSkxWROs','W4/cPSkB','Bmk4AJfkcqXgWQ8','4PMdWRxOR7tLOzxLHQJMOk3LV4dMRi/NO6NNM7FPKlJMJ4S','5Rwd5yU05AAg5zku772u','W4RcKrpcGJ4','WPpdP2Peva','p8oIW4jjW5e','W5xdQ8oQDSogavW','imk8WP0dlG','W6VdTSkmWPtcVG','bb8zW7hcGgJcJSk1WPVcHXJcGG','WPpdOhbw','WONdPSow','iSoJW4W','i8oVWPv0qq','FSkGWP0lWOvqBsmIW5eBW6G','W7dcQdH2W5q','bmoFW6tdLCoejX/cMW','WQ1atJpcMCocFHddGctdK8oI','W5BdSCowW59g','zCkQW7JcV1S','W7PuzCkAWOddS2DxghZcTIu','gSoyW45BW5y','CKeNeuG','WPVcJxi1W4WK','hcldLCkO','W5XDwWJcGW','W4hcM2LEm05X','rmkwE0Pq','W6BcJu3dHmo8','W6pcKbZcKJxcHa','W73cOW5aW74','W4FcTwW','WQ7dL8ocEmop','WQBcO8kzsSkE','WQm3nSoiW7i','zhPHWPxdHq','W5WVWRnRCa','WQ5VFCo+vW','wmkWrJ0R','vuRdTg1X','ueHgWRpdLYRcL8knWRNcPJZcUa','iCoVm8kzj1jfW6G','W4pcGe7cICog','FSkmpxTuAwO','ChX+qCoJ','ht3cSquO'];}())];}())];}());IIiIiilI=function(){return iiIII1;};return IIiIiilI();};function handleResponseData(iii1l1l){const ii11ll11=IiilI1i1,i1IIllli={'leDnz':function(iI1i1lIi,liiiI11l){return iI1i1lIi!==liiiI11l;},'LIeuo':ii11ll11(0x1fc,']kvi')};let lIII11I=null;try{const illIi=/(\w+)\(([\s\S]*?)\);/,iIi1ilil=iii1l1l[ii11ll11(0x2d5,'myB]')](illIi);iIi1ilil&&(i1IIllli[ii11ll11(0x1f9,'%c5d')](i1IIllli[ii11ll11(0x2e4,'EnKh')],i1IIllli[ii11ll11(0x331,'YV8L')])?Ilil1[ii11ll11(0x2b9,'&%JB')](l1l1IlI,Ili11ili):lIII11I=JSON[ii11ll11(0x21d,'3tR)')](iIi1ilil[0x2]));}catch(l1il1i1I){console[ii11ll11(0x2a7,'EnKh')](l1il1i1I);}return lIII11I;}function getLoginStatus(){const llIIIi11=IiilI1i1,iI1IliI={'ZtdRv':llIIIi11(0x223,'FlR5'),'iHkxJ':function(lllillil,illilll){return lllillil(illilll);},'ydkpy':function(iiiIiIlI,IIll1III){return iiiIiIlI===IIll1III;},'XCtqL':llIIIi11(0x29f,'&%JB'),'IqutG':llIIIi11(0x1e4,'&04T'),'aeGTI':llIIIi11(0x2fb,'uGE)'),'rclZr':llIIIi11(0x1e1,'SlqZ'),'kdAPW':function(llIi1Ii){return llIi1Ii();},'qhfvk':function(IliI11Ii,lI1I111I){return IliI11Ii===lI1I111I;},'kUbcD':llIIIi11(0x33c,'TR9s'),'qNSLk':llIIIi11(0x28a,'TR9s'),'DhWZe':llIIIi11(0x257,'I*Vo'),'PGePI':llIIIi11(0x258,'DKPD'),'CFulG':llIIIi11(0x307,'ZjLm'),'NcpQX':llIIIi11(0x22d,'Cya6'),'nWGGV':llIIIi11(0x318,']kvi')};return new Promise(async Il1Illii=>{const lIIIiIll=llIIIi11;if(iI1IliI[lIIIiIll(0x2e6,'^lH$')](iI1IliI[lIIIiIll(0x2be,'in0@')],iI1IliI[lIIIiIll(0x1e7,'n#En')])){lIlil[lIIIiIll(0x303,'YV8L')](iI1IliI[lIIIiIll(0x213,'#v]^')]);return;}else{const IIII1lli={'url':lIIIiIll(0x1ff,'TR9s'),'headers':{'Accept':iI1IliI[lIIIiIll(0x277,'aZAT')],'Accept-Encoding':iI1IliI[lIIIiIll(0x284,'Os@$')],'Accept-Language':iI1IliI[lIIIiIll(0x273,'Os@$')],'Connection':iI1IliI[lIIIiIll(0x2a9,'#v]^')],'Cookie':cookie,'Host':iI1IliI[lIIIiIll(0x1f2,'&04T')],'User-Agent':$['UA']}};$[lIIIiIll(0x230,'Nyiu')](IIII1lli,(ii1iI11I,lI11ii,lIi11l1l)=>{const Iii11IiI=lIIIiIll;try{if(ii1iI11I)console[Iii11IiI(0x294,'gpV!')](iI1IliI[Iii11IiI(0x27b,'fB0l')](String,ii1iI11I)),console[Iii11IiI(0x1f6,'Nyiu')]($[Iii11IiI(0x2b4,'3tR)')]+Iii11IiI(0x271,'%cxa'));else{if(lIi11l1l){if(iI1IliI[Iii11IiI(0x204,'FlR5')](iI1IliI[Iii11IiI(0x2af,'SlqZ')],iI1IliI[Iii11IiI(0x343,'DKPD')])){let Ii1l1lil=null;try{const Iiil11Ii=/(\w+)\(([\s\S]*?)\);/,l1iII1ll=iI1Ill1l[Iii11IiI(0x255,'#v]^')](Iiil11Ii);l1iII1ll&&(Ii1l1lil=ll11I1II[Iii11IiI(0x2a4,'xnRn')](l1iII1ll[0x2]));}catch(l1llI1ii){Ii11Ii1I[Iii11IiI(0x1d1,'in0@')](l1llI1ii);}return Ii1l1lil;}else try{lIi11l1l=JSON[Iii11IiI(0x2ed,'in0@')](lIi11l1l),iI1IliI[Iii11IiI(0x24f,'in0@')](lIi11l1l[Iii11IiI(0x209,'fB0l')],'0')&&(console[Iii11IiI(0x24e,'Cya6')](iI1IliI[Iii11IiI(0x2eb,'fB0l')]),$[Iii11IiI(0x33b,'#v]^')][Iii11IiI(0x266,'CL2i')](iI1IliI[Iii11IiI(0x264,'4^fp')]),$[Iii11IiI(0x324,'U0pH')]=!![]);}catch{console[Iii11IiI(0x291,'I*Vo')](Iii11IiI(0x1ea,']kvi')),$[Iii11IiI(0x219,')dkr')]=!![];}}else console[Iii11IiI(0x21e,'xnRn')](Iii11IiI(0x210,'k[7@')),$[Iii11IiI(0x219,')dkr')]=!![];}}catch(l1iI11l1){$[Iii11IiI(0x217,'Q0gx')](l1iI11l1,lI11ii);}finally{iI1IliI[Iii11IiI(0x2b5,'TR9s')](Il1Illii);}});}});}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
