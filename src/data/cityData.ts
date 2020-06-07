export enum AvailableCity {
  Anaheim = 'Anaheim',
}

const phatEmailString = `
Anaheim	hsidhu@anaheim.net,dbarnes@anaheim.net,jbrandman@anaheim.net,jmoreno@anaheim.net,lkring@anaheim.net,sfaessel@anaheim.net,toneil@anaheim.net,cityattorneysoffice@anaheim.net,citymanager@anaheim.net,cityclerk@anaheim.net,financeadministration@anaheim.net
Antioch	swright@ci.antioch.ca.us,jmotts@ci.antioch.ca.us,mwilson@ci.antioch.ca.us,lthorpe@ci.antioch.ca.us,logorchock@ci.antioch.ca.us,tlsmith@ci.antioch.ca.us,rbernal@ci.antioch.ca.us,asimonsen@ci.antioch.ca.us,jdavis@ci.antioch.ca.us
Burbank	sspringer@burbankca.gov,bfrutos@burbankca.gov,egabel-luddy@burbankca.gov,tmmurphy@burbankca.gov,jtalamantes@burbankca.gov,aalbano@burbankca.gov,jhess@burbankca.gov,zmullins@burbankca.gov,kpalmer@burbankca.gov
Bakersfield	mayor@bakersfieldcity.us,city_council@bakersfieldcity.us,city_council@bakersfieldcity.us,city_council@bakersfieldcity.us,city_council@bakersfieldcity.us,city_council@bakersfieldcity.us,city_council@bakersfieldcity.us,city_council@bakersfieldcity.us,admatt@bakersfieldcity.us,admmgr@bakersfieldcity.us,cityclerk@bakersfieldcity.us,webmaster@bakersfieldcity.us
Berkeley	jarreguin@cityofberkeley.info,mayor@cityofberkeley.info,rkesarwani@cityofberkeley.info,cdavila@cityofberkeley.info,bbartlett@cityofberkeley.info,kharrison@cityofberkeley.info,shahn@cityofberkeley.info,swengraf@cityofberkeley.info,rrobinson@cityofberkeley.info,ldroste@cityofberkeley.info,attorney@cityofberkeley.info,auditor@cityofberkeley.info,manager@cityofberkeley.info,clerk@cityofberkeley.info,finance@cityofberkeley.info
Carlsbad	matt.hall@carlsbadca.gov,keith.blackburn@carlsbadca.gov,cori.schumacher@carlsbadca.gov,priya.bhat-patel@carlsbadca.gov,council@carlsbadca.gov,attorney@carlsbadca.gov,manager@carlsbadca.gov,clerk@carlsbadca.gov,treasurer@carlsbadca.gov
Chula Vista	msalas@chulavistaca.gov,jmccann@chulavistaca.gov,jmgalvez@chulavistaca.gov,spadilla@chulavistaca.gov,mdiaz@chulavistaca.gov,ggoogins@chulavistaca.gov,cityclerk@chulavistaca.gov
Clovis	drewb@cityofclovis.com,josef@cityofclovis.com,lynnea@cityofclovis.com,bobw@cityofclovis.com,vongm@ci.clovis.ca.us,davidw@cityofclovis.com,lukes@cityofclovis.com,johnh@cityofclovis.com,jays@cityofclovis.com
Costa Mesa	katrina.foley@costamesaca.gov,john.stephens@costamesaca.gov,allan.mansoor@costamesaca.gov,andrea.marr@costamesaca.gov,sandra.genis@costamesaca.gov,manuel.chavez@costamesaca.gov,arlis.reynolds@costamesaca.gov,kimberly.barlow@costamesaca.gov,cityclerk@costamesaca.gov,brenda.green@costamesaca.gov,jennifer.king@costamesaca.gov
Concord	tim.mcgallian@cityofconcord.org,laura.hoffmeister@cityofconcord.org,carlyn.obringer@cityofconcord.org,dominic.aliano@cityofconcord.org,edi.birsan@cityofconcord.org,susanne.brown@cityofconcord.org,valerie.barone@cityofconcord.org,cityclerk@cityofconcord.org
Compton	ajabrown@comptoncity.org,contactmayor@comptoncity.org,mchambers@comptoncity.org,igalvan@comptoncity.org,tmccoy@comptoncity.org,esharif@comptoncity.org,dbrown@comptoncity.org,ccornwell@comptoncity.org,agodwin@comptoncity.org,contactcityclerk@comptoncity.org,rking@comptoncity.org,dsanders@comptoncity.org
Corona	jim.steiner@coronaca.gov,jacque.casillas@coronaca.gov,wes.speake@coronaca.gov,jason.scott@coronaca.gov,dean.derleth@coronaca.gov,cityclerk@coronaca.gov,chad.willardson@coronaca.gov
Davis	blee@cityofdavis.org,gpartida@cityofdavis.org,warnold@cityofdavis.org,dcarson@cityofdavis.org,lucasf@cityofdavis.org,harriet.steiner@bbklaw.com,cmoweb@cityofdavis.org,clerkweb@cityofdavis.org,financeweb@cityofdavis.org
Daly City	citycouncil@dalycity.org,citycouncil@dalycity.org,citycouncil@dalycity.org,citycouncil@dalycity.org,citycouncil@dalycity.org,cityclerk@dalycity.org
Downey	bpacheco@downeyca.org,sashton@downeyca.org,rrodriguez@downeyca.org,cfrometa@downeyca.org,asaab@downeyca.org
Escondido	pmcnamara@escondido.org,cmartinez@escondido.org
Elk Grove	stevely@elkgrovecity.org,phume@elkgrovecity.org,dsuen@elkgrovecity.org,sdetrick@elkgrovecity.org,snguyen@elkgrovecity.org,cityclerk@elkgrovecity.org,snarayan@elkgrovecity.org
El Cajon	citymanager@cityofelcajon.us,acortez@cityofelcajon.us,cschoen@cityofelcajon.us
El Monte	aquintero@elmonteca.gov,mmorales@elmonteca.gov,jancona@elmonteca.gov,vmartinezmuela@ci.el-monte.ca.us,jvelasco@elmonteca.gov,amartinez@elmonteca.gov,cityclerk@ci.el-monte.ca.us,finance@elmonteca.gov
Fairfield	hprice@fairfield.ca.gov,pbertani@fairfield.ca.gov,cct707@aol.com,cmoy@fairfield.ca.gov,rvaccaro@fairfield.ca.gov,cmo@fairfield.ca.gov,klrees@fairfield.ca.gov,bchua@fairfield.ca.gov
Fontana	awarren@fontana.org,jarmendarez@fontana.org,jroberts@fontana.org,jsandoval@fontana.org,pwcothran@fontana.org,mdenny@fontana.org,tlewis@fontana.org,jkoehlerbrooks@fontana.org
Fremont	lmei@fremont.gov,rsalwan@fremont.gov,tkeng@fremont.gov,jkassan@fremont.gov,yshao@fremont.gov,vbacon@fremont.gov,cof@fremont.gov,cclerk@fremont.gov,finance@fremont.gov
Fullerton	jenniferf@cityoffullerton.com,jflory@cityoffullerton.com,jesuss@cityoffullerton.com,bwwhitaker@live.com,ahmadz@cityoffullerton.com,kdomer@cityoffullerton.com,citymanager@cityoffullerton.com,cityclerksoffice@cityoffullerton.com
Garden Grove	stevej@ggcity.org,joneill@ggcity.org,georgeb@ggcity.org,thuhan@ggcity.org,phatb@ggcity.org,stephaniek@ggcity.org,kimn@ggcity.org,cityclerk@ggcity.org,citymanager@ggcity.org,finance@ggcity.org
Glendale	vagajanian@glendaleca.gov,anajarian@glendaleca.gov,pdevine@glendaleca.gov,akassakhian@glendaleca.gov,dbrotman@glendaleca.gov,ybeers@glendaleca.gov,aadjemian@glendaleca.gov,rmanoukian@glendaleca.gov
Hayward	barbara.halliday@hayward-ca.gov,francisco.zermeno@hayward-ca.gov,al.mendall@hayward-ca.gov,sara.lamnin@hayward-ca.gov,elisa.marquez@hayward-ca.gov,mark.salinas@hayward-ca.gov,aisha.wahab@hayward-ca.gov,city.manager@hayward-ca.gov,miriam.lens@hayward-ca.gov,dustin.claussen@hayward-ca.gov
Huntington Beach	lyn.semeta@surfcity-hb.org,jill.hardy@surfcity-hb.org,patrick.brenden@surfcity-hb.org,kim.carr@surfcity-hb.org,barbara.delgleize@surfcity-hb.org,erik.peterson@surfcity-hb.org,mike.posey@surfcity-hb.org,robin.estanislau@surfcity-hb.org,paulina.flores@surfcity-hb.org
Irvine	christinashea@cityofirvine.org,christina@christinashea.com,michaelcarroll@cityofirvine.org,melissafox@cityofirvine.org,info@votemelissafox.com,farrahkhan@cityofirvine.org,anthonykuo@cityofirvine.org,anthony@anthonykuo.org
Inglewood	mayor@cityofinglewood.org,gdotson@cityofinglewood.org,apadilla@cityofinglewood.org,emorales@cityofinglewood.org,rfranklin@cityofinglewood.org,yhorton@cityofinglewood.org,dlesparza@cityofinglewood.org
Jurupa Valley	akelly@jurupavalley.org,lbarajas@jurupavalley.org,cbarajas@jurupavalley.org,mgoodland@jurupavalley.org,bberkson@jurupavalley.org,rbutler@jurupavalley.org,vwasko@jurupavalley.org,ccardenas@jurupavalley.org
Lancaster	rrparris@cityoflancasterca.org,mcrist@cityoflancasterca.org,rmalhi@cityoflancasterca.org,kmann@cityoflancasterca.org,ddorris@cityoflancasterca.org,pstatsmann@cityoflancasterca.org
Los Angeles	mayor.garcetti@lacity.org,councilmember.cedillo@lacity.org,councilmember.krekorian@lacity.org,councilmember.blumenfield@lacity.org,david.ryu@lacity.org,paul.koretz@lacity.org,councilmember.martinez@lacity.org,councilmember.rodriguez@lacity.org,councilmember.harris-dawson@lacity.org,councilmember.price@lacity.org,councilmember.wesson@lacity.org,councilmember.bonin@lacity.org,councilmember.lee@lacity.org,councilmember.ofarrell@lacity.org,councilmember.huizar@lacity.org,councilmember.buscaino@lacity.org,controller.galperin@lacity.org,richard.llewellyn@lacity.org,cityclerk@lacity.org
Long Beach	mayor@longbeach.gov,district1@longbeach.gov,district2@longbeach.gov,district3@longbeach.gov,district4@longbeach.gov,district5@longbeach.gov,district6@longbeach.gov,district7@longbeach.gov,district8@longbeach.gov,district9@longbeach.gov,citymanager@longbeach.gov,cityclerk@longbeach.gov,john.gross@lobgbeach.gov
Modesto	mayor@modestogov.com,mgrewal@modestogov.com,tmadrigal@modestogov.com,kahyou@modestogov.com,bzoslocki@modestogov.com,jkenoyer@modestogov.com,dridenour@modestogov.com,joelopez@modestogov.com,slopez@modestogov.com,dachristensen@modestogov.com
Moreno Valley	yxstiang@moval.org,victoriab@moval.org,carlat@moval.org,davidma@moval.org,ulisesc@moval.org,cmoffice@moval.org,cityclerk@moval.org,marshalle@moval.org
Murrieta	gwunderlich@murrietaca.gov,svinton@murrietaca.gov,jingram@murrietaca.gov,kseyarto@murrietaca.gov,cwhite@murrietaca.gov,ssmith@murrietaca.gov,ksummers@murrietaca.gov,jcarcamo@murrietaca.gov
Norwalk	jperez@norwalkca.gov,tayala@norwalkca.gov,rramirez@norwalkca.gov,mlrios@norwalkca.gov,avalencia@norwalkca.gov,administration@norwalkca.gov,clerk@norwalkca.gov,finance@norwalkca.gov
Oakland	officeofthemayor@oaklandnet.com,atlarge@oaklandca.gov,dkalb@oaklandca.gov,nfbas@oaklandca.gov,lmcelhaney@oaklandca.gov,district4@oaklandca.gov,ngallo@oaklandca.gov,district6@oaklandca.gov,lreid@oaklandnet.com,cityadministratorsoffice@oaklandca.gov,cityclerk@oaklandnet.com,jmsegura@oaklandca.gov
Oceanside	pweiss@oceansideca.org,jfeller@oceansideca.org,esanchez@oceansideca.org,crodriguez@oceansideca.org,rkeim@oceansideca.org,citymanager@oceansideca.org,cityclerk@oceansideca.org,treasurer@oceansideca.org
Ontario	pleon@ontarioca.gov.,ddorstporada@ci.ontario.ca.us,awapner@ontarioca.gov,jbowman@ontarioca.gov,sochoa@ontarioca.gov,recordsmanagement@ontario.ca.gov
Orange	mayor@markamurphy.com,councilinfo@cityoforange.org,councilinfo@cityoforange.org,councilinfo@cityoforange.org,councilinfo@cityoforange.org,cminfo@cityoforange.org,pcoleman@cityoforange.org,rmoya@cityoforange.org
Oxnard	tim.flynn@oxnard.org,carmen.ramirez@oxnard.org,perellobert@gmail.com,oscar.madrigal@oxnard.org,bryan.macdonald@oxnard.org,gabriela.basua@oxnard.org,vianeyforoxnard@gmail.com,alexander.nguyen@oxnard.org,cityclerk@oxnard.org,kevin.riper@oxnard.org
Pasadena	ttornek@cityofpasadena.net,thampton@cityofpasadena.net,district1@cityofpasadena.net,mmcaustin@cityofpasadena.net,johnjkennedy@cityofpasadena.net,gmasuda@cityofpasadena.net,vgordo@cityofpasadena.net,smadison@cityofpasadena.net,awilson@cityofpasadena.net,smermell@cityofpasadena.net,mjomsky@cityofpasadena.net
Palmdale	shofbauer@cityofpalmdale.org,rloa@cityofpalmdale.org,abishop@cityofpalmdale.org,jcarrillo@cityofpalmdale.org,lbettencourt@cityofpalmdale.org,jjmurphy@cityofpalmdale.org,cityclerk@cityofpalmdale.org
Pomona	tim_sandoval@ci.pomona.ca.us,rubio_gonzalez@ci.pomona.ca.us,victor_preciado@ci.pomona.ca.us,nora_garcia@ci.pomona.ca.us,elizabeth_ontiveros-cole@ci.pomona.ca.us,steve_lustro@ci.pomona.ca.us,robert_torres@ci.pomona.ca.us,james_makshanoff@ci.pomona.ca.us,rosalia_butler@ci.pomona.ca.us
Rancho Cucamonga	council@cityofrc.us,council@cityofrc.us,council@cityofrc.us,council@cityofrc.us,council@cityofrc.us,john.gillison@cityofrc.us,city.clerk@cityofrc.us,tamara.layne@cityofrc.us
Rialto	drobertson@rialtoca.gov,edscott@rialtoca.gov,jbaca@rialtoca.gov,rtrujillo@rialtoca.gov,acarrizales@rialtoca.gov,cityclerk@rialtoca.gov,bmcgee@rialtoca.gov
Richmond	tom.butt@intres.com,ben_choi@ci.richmond.ca.us,natbates@comcast.net,eduardo_martinez@ci.richmond.ca.us,demnlus_johnson@ci.richmond.ca.us,jael_myrick@ci.richmond.ca.us,melvin_willis@ci.richmond.ca.us,laura_snideman@ci.richmond.ca.us,cityclerkdept@ci.richmond.ca.us,belinda_brown@ci.richmond.ca.us
Riverside	2mayor@riversideca.gov,asmelendrez@riversideca.gov,azelinka@riversideca.gov,city_clerk@riversideca.gov,ggeuss@riversideca.gov,kmartinez@riversideca.gov,cconder@riversideca.gov,ppitchford@riversideca.gov,eedwards@riversideca.gov,asmelendrez@riversideca.gov,rfierro@riversideca.gov,cconder@riversideca.gov,gplascencia@riversideca.gov,jperry@riversideca.gov,shemenway@riversideca.gov
Roseville	jallard@roseville.ca.us,kbernasconi@roseville.ca.us,salvord@roseville.ca.us,bhoudesheldt@roseville.ca.us,proccucci@roseville.ca.us,citymanager@roseville.ca.us,cityclerk@roseville.ca.us,finance@roseville.ca.us
Sacramento	jsharris@cityofsacramento.org,aashby@cityofsacramento.org,awarren@cityofsacramento.org,shansen@cityofsacramento.org,jschenirer@cityofsacramento.org,rjennings@cityofsacramento.org,lcarr@cityofsacramento.org,hchan@cityofsacramento.org,clerk@cityofsacramento.org,fin@cityofsacramento.org
Salinas	salinasmayor@ci.salinas.ca.us,district1@ci.salinas.ca.us,district2@ci.salinas.ca.us,district3@ci.salinas.ca.us,district4@ci.salinas.ca.us,district5@ci.salinas.ca.us,district6@ci.salinas.ca.us,cmwebmail@ci.salinas.ca.us,cityclerkwebmail@ci.salinas.ca.us,finwebmail@ci.salinas.ca.us
San Bernardino	mayor@sbcity.org,theodorepsanchez@gmail.com,council@sbcity.org,council@sbcity.org,council@sbcity.org,council@sbcity.org,bessine@bessinerichard.com,mullvihill@csusb.edu,ledoux_te@sbcity.org,espinoza_pa@sbcity.org
San Diego	kevinfaulconer@sandiego.gov,cityattorney@sandiego.gov,barbarabry@sandiego.gov,jennifercampbell@sandiego.gov,christopherward@sandiego.gov,monicamontgomery@sandiego.gov,markkersey@sandiego.gov,chriscate@sandiego.gov,scottsherman@sandiego.gov,vivianmoreno@sandiego.gov,georgettegomez@sandiego.gov
San Jose	mayoremail@sanjoseca.gov,district1@sanjoseca.gov,district2@sanjoseca.gov,district3@sanjoseca.gov,district4@sanjoseca.gov,district5@sanjoseca.gov,district6@sanjoseca.gov,district7@sanjoseca.gov,district8@sanjoseca.gov,district9@sanjoseca.gov,district10@sanjoseca.gov,webmaster.manager@sanjoseca.gov,city.clerk@sanjoseca.gov,finance@sanjoseca.gov
San Francisco	mayorlondonbreed@sfgov.org,jose.cisneros@sfgov.org,sandra.fewer@sfgov.org,catherine.stefani@sfgov.org,aaron.peskin@sfgov.org,gordon.mar@sfgov.org,dean.preston@sfgov.org,matt.haney@sfgov.org,norman.yee@sfgov.org,mandelmanstaff@sfgov.org,hillary.ronen@sfgov.org,shamann.walton@sfgov.org,ahsha.safai@sfgov.org
San Marcos	rjones@san-marcos.net,sjenkins@san-marcos.net,mnunez@san-marcos.net,jpetrek@san-marcos.net,rwalton@san-marcos.net,jgriffin@san-marcos.net,pscollick@san-marcos.net,lfowler@san-marcos.net
San Mateo	jgoethals@cityofsanmateo.org,erodriguez@cityofsanmateo.org,rbonilla@cityofsanmateo.org,alee@cityofsanmateo.org,dpapan@cityofsanmateo.org,citymanager@cityofsanmateo.org,clerk@cityofsanmateo.org,rlee@cityofsanmateo.org
Santa Ana	mpulido@santa-ana.org,vsarmiento@santa-ana.org,dpenaloza@santa-ana.org,jsolorio@santa-ana.org,pbacerra@santa-ana.org,jvillegas@santa-ana.org,nmendoza@santa-ana.org,kridge@santa-ana.org,cityclerks@santa-ana.org,budgetoffice@santa-ana.org,kdowns@santa-ana.org
Santa Barbara	cmurillo@santabarbaraca.gov,algutierrez@santabarbaraca.gov,mjordan@santabarbaraca.gov,ogutierrez@santabarbaraca.gov,ksneddon@santabarbaraca.gov,efriedman@santabarbaraca.gov,mharmon@santabarbaraca.gov,pcasey@santabarbaraca.gov,gpeirce@santabarbaraca.gov,jtomaszewski@santabarbaraca.gov
Santa Clara	lgillmor@ggarealestate.com,kwatanabe@santaclaraca.gov,rchahal@santaclaraca.gov,khardy@santaclaraca.gov,toneill@santaclaraca.gov,ddavis@santaclaraca.gov,manager@santaclaraca.gov,clerk@santaclaraca.gov,finance@santaclaraca.gov
Santa Clarita	csmyth@santa-clarita.com,bmiranda@santa-clarita.com,bkellar@santa-clarita.com,lweste@santa-clarita.com,mmclean@santa-clarita.com,kstriplin@santa-clarita.com,mcusick@santa-clarita.com,cmagana@santa-clarita.com
Santa Maria	apatino@ci.santa-maria.ca.us,gsoto@cityofsantamaria.org,ewaterfield@cityofsantamaria.org,mmoats@cityofsantamaria.org,mcordero@cityofsantamaria.org,jstilwell@cityofsantamaria.org,prodriguez@ci.santa-maria.ca.us,mharvey@cityofsantamaria.org
Santa Rosa	tschwedhelm@srcity.org,vfleming@srcity.org,rdowd@srcity.org,eolivares@srcity.org,crogers@srcity.org,jsawyer@srcity.org,hjtibbetts@srcity.org,cmoffice@srcity.org,cityclerk@srcity.org,cmcbride@srcity.org
Simi Valley	kmashburn@simivalley.org,mjudge@simivalley.org,dcavanaugh@simivalley.org,rluevanos@simivalley.org,elitster@simivalley.org,bgabler@simivalley.org,cityclerk@simivalley.org,jtoney@simivalley.org
Stockton	mayor@stocktonca.gov,dist1@stocktonca.gov,dist2@stocktonca.gov,dist3@stocktonca.gov,dist4@stocktonca.gov,dist5@stocktonca.gov,dist6@stocktonca.gov,karen.costa@stocktonca.gov,city.clerk@stocktonca.gov,matt.paulin2@stocktonca.gov
Sunnyvale	kleincouncil@sunnyvale.ca.gov,smithcouncil@sunnyvale.ca.gov,larssoncouncil@sunnyvale.ca.gov,hendrickscouncil@sunnyvale.ca.gov,meltoncouncil@sunnyvale.ca.gov,goldmancouncil@sunnyvale.ca.gov,fongcouncil@sunnyvale.ca.gov,council@ci.sunnyvale.ca.us,citymgr@sunnyvale.ca.gov,cityclerk@sunnyvale.ca.gov,finance@sunnyvale.ca.gov
Temecula	james.stewart@citycouncil.org,maryann.edwards@citycouncil.org,mnaggar@citycouncil.org,matt.rahn@citycouncil.org,zak.schwank@temeculaca.gov,aaron.adams@temeculaca.gov,randi.johl@temeculaca.gov,jennifer.hennessy@temeculaca.gov
Thousand Oaks	aadam@toaks.org,claudia4slowgrowth@roadrunner.com,bengler@toaks.org,ejones@toaks.org,citymanager@toaks.org,apowers@toaks.org,crodriguez@toaks.org,cityclerk@toaks.org,finance@toaks.org
Torrance	pfurey@torranceca.gov,tgoodrich@torranceca.gov,hashcraft@torranceca.gov,gchen@torranceca.gov,amattucci@torranceca.gov,skalani@torranceca.gov,mgriffiths@torranceca.gov,citymanager@torrnet.com,rpoirier@torranceca.gov,finance@torranceca.gov
Tustin	cpuckett@tustinca.org,abernstein@tustinca.org,lclark@tustinca.org,alumbard@tustinca.org,bcooper@tustinca.org,citymanager@tustinca.org,eyasuda@tustinca.org,cityclerk@tustinca.org,jleisz@tustinca.org
West Covina	tony.wu@westcovina.org,llopez-viado@westcovina.org,jshewmaker@westcovina.org,dcastellanos@westcovina.org,lloyd.johnson@westcovina.org,carmanydavid@gmail.com,lsherrick@westcovina.org,rbird@westcovina.org
Vacaville	ron.rowlett@cityofvacaville.com,raymond.beaty@cityofvacaville.com,dilenna.harris@cityofvacaville.com,mitch.mashburn@cityofvacaville.com,nolan.sullivan@cityofvacaville.com,aaron.busch@cityofvacaville.com,mthornbrugh@ci.vacaville.ca.us,dawn.leonardini@cityofvacaville.com
Vallejo	bob.sampayan@cityofvallejo.net,hermie.sunga@cityofvallejo.net,hakeem.brown@cityofvallejo.net,pippin.dew@cityofvallejo.net,rozzana.verder-aliga@cityofvallejo.net,katy.miessner@cityofvallejo.net,robert.mcconnell@cityofvallejo.net,michelle.straub@cityofvallejo.net,dawn.abrahamson@cityofvallejo.net,rekha.nayar@cityofvallejo.net
Victorville	ggarcia@victorvilleca.gov,rramerizdean@victorvilleca.gov,jcox@victorvilleca.gov,bagomez@victorvilleca.gov,dsjones@victorvilleca.gov,kmetzler@victorvilleca.gov,cityclerk@victorvilleca.gov,mamunoz@victorvilleca.gov
Visalia	bob.link@visalia.city,steve.nelsen@visalia.city,greg.collins@visalia.city,phil.cox@visalia.city,brian.poochigian@visalia.city,randy.groom@visalia.city,fin.online@visalia.city
Ventura	mlavere@cityofventura.ca.gov,srubalcava@cityofventura.ca.gov,cheitmann@cityofventura.ca.gov,enasarenko@cityofventura.ca.gov,lbrown@cityofventura.ca.gov,jfriedman@cityofventura.ca.gov,citymanager@cityofventura.ca.gov,cityclerk@cityofventura.ca.gov,mcoon@cityofventura.ca.gov
Atlanta	cebell@atlantaga.gov,sagabriel@atlantaga.gov
Austin	steve.adler@austintexas.gov,natasha.madison@austintexas.gov,delia.garza@austintexas.gov,sabino.renteria@austintexas.gov,greg.casar@austintexas.gov,ann.kitchen@austintexas.gov,jimmy.flannigan@austintexas.gov,leslie.pool@austintexas.gov,paige.ellis@austintexas.gov,kathie.tovo@austintexas.gov,alison.alter@austintexas.gov,budgetqa@austintexas.gov
Baltimore	mayor@baltimorecity.gov,councilpresident@baltimorecity.gov,zeke.cohen@baltimorecity.gov,danielle.mccray@baltimorecity.gov,ryan.dorsey@baltimorecity.gov,bill.henry@baltimorecity.gov,isaac.schleifer@baltimorecity.gov,sharon.middleton@baltimorecity.gov,leon.pinkett@baltimorecity.gov,kristerfer.burnett@baltimorecity.gov,john.bullock@baltimorecity.gov,edward.reisinger@baltimorecity.gov,eric.costello@baltimorecity.gov,robert.stokes@baltimorecity.gov,shannon.sneed@baltimorecity.gov,marypat.clarke@baltimorecity.gov
Boston	mayor@boston.gov,city.council@boston.gov,kim@kimjaney.org,a.e.george@boston.gov,michael.f.flaherty@boston.gov,michelle.wu@boston.gov,lydia.edwards@boston.gov,ed.flynn@boston.gov,frank.baker@boston.gov,andrea.campbell@boston.gov,ricardo.arroyo@boston.gov,matthew.omalley@boston.gov,kenzie.bok@boston.gov,liz.breadon@boston.gov
Boulder	brocketta@bouldercolorado.gov,friendr@bouldercolorado.gov,josephj@bouldercolorado.gov,naglem@bouldercolorado.gov,swetlika@bouldercolorado.gov,wallachm@bouldercolorado.gov,youngm@bouldercolorado.gov,weavers@bouldercolorado.gov,yatesb@bouldercolorado.gov,council@bouldercolorado.gov,homeownership@bouldercolorado.gov
Cambridge	council@cambridgema.gov,citymanager@cambridgema.gov,mayor@cambridgema.gov
Charlotte	mayor@charlottenc.gov,julie.eiselt@charlottenc.gov,james.mitchell@charlottenc.gov,braxton.winston@charlottenc.gov,dimple.ajmera@charlottenc.gov,larken.egleston@charlottenc.gov,malcolm.graham@ci.charlotte.nc.us,victoria.watlington@charlottenc.gov,renee.johnson@charlottenc.gov,matt.newton@charlottenc.gov,tariq.bokhari@charlottenc.gov,edriggs@charlottenc.gov,marcus.jones@charlottenc.gov
Chicago	ward01@cityofchicago.org,ward02@cityofchicago.org,ward03@cityofchicago.org,ward04@cityofchicago.org,ward05@cityofchicago.org,ward06@cityofchicago.org,ward07@cityofchicago.org,ward08@cityofchicago.org,ward09@cityofchicago.org,ward10@cityofchicago.org,ward11@cityofchicago.org,ward12@cityofchicago.org,ward13@cityofchicago.org,ward14@cityofchicago.org,ward15@cityofchicago.org,ward16@cityofchicago.org,ward17@cityofchicago.org,ward18@cityofchicago.org,ward19@cityofchicago.org,ward20@cityofchicago.org,ward21@cityofchicago.org,ward22@cityofchicago.org,ward23@cityofchicago.org,ward24@cityofchicago.org,ward26@cityofchicago.org,ward27@cityofchicago.org,ward28@cityofchicago.org,ward29@cityofchicago.org,ward30@cityofchicago.org,ward31@cityofchicago.org,ward32@cityofchicago.org,ward33@cityofchicago.org,ward34@cityofchicago.org,ward35@cityofchicago.org,ward36@cityofchicago.org,ward37@cityofchicago.org,ward38@cityofchicago.org,ward39@cityofchicago.org,ward40@cityofchicago.org,ward41@cityofchicago.org,ward42@cityofchicago.org,ward43@cityofchicago.org,ward44@cityofchicago.org,ward45@cityofchicago.org,ward46@cityofchicago.org,ward47@cityofchicago.org,ward48@cityofchicago.org,ward49@cityofchicago.org,ward50@cityofchicago.org
Columbus	zgdavidson@columbus.gov,lmcapobianco@columbus.gov,kaellingsen@columbus.gov,jwcarmean@columbus.gov,dfriendfoster@columbus.gov,gmames@columbus.gov,kbmccain@columbus.gov,hnmiller@columbus.gov,tyharden@columbus.gov,cenewman@columbus.gov,jdcarter@columbus.gov,ljfrank@columbus.gov,nnharper@columbus.gov,cgwilliams@columbus.gov,311@columbus.gov,evremy@columbus.gov,ecbrown@columbus.gov,prtyson@columbus.gov,sdfavor@columbus.gov,mjbrown@columbus.gov,sghardin@columbus.gov,radorans@columbus.gov,zmklein@columbus.gov
Columbia	ward6@como.gov,mayor@como.gov,ward2@como.gov,ward3@como.gov,ward4@como.gov,ward5@como.gov,ward1@como.gov
Cleveland	bgriffin@clevelandcitycouncil.org,bjones@clevelandcitycouncil.org,mpolensek@clevelandcitycouncil.org,kconwell@clevelandcitycouncil.org,ahairston@clevelandcitycouncil.org,bmooney@clevelandcitycouncil.org,abrancatelli@clevelandcitycouncil.org,kkelley@clevelandcitycouncil.org,cflanagan@clevelandcitycouncil.org,jsantana@clevelandcitycouncil.org,mzone@clevelandcitycouncil.org,bkazy@clevelandcitycouncil.org,cslife@clevelandcitycouncil.org
Dallas	eric.johnson@dallascityhall.com,chad.west@dallascityhall.com,adam.medrano@dallascityhall.com,casey.thomas@dallascityhall.com,carolyn.kingarnold@dallascityhall.com,jaime.resendez@dallascityhall.com,omar.narvaez@dallascityhall.com,adam.bazaldua@dallascityhall.com,tennell.atkins@dallascityhall.com,paula.blackmon@dallascityhall.com,adam.mcgough@dallascityhall.com,lee.kleinman@dallascityhall.com,cara.mendelsohn@dallascityhall.com,david.blewett@dallascityhall.com,jennifer.gates@dallascityhall.com
Denver	governorpolis@state.co.us,districtone@denvergov.org,kevin.flynn@denvergov.org,jamie.torres@denvergov.org,kendra.black@denvergov.org,denvercouncil5@denvergov.org,paul.kashmann@denvergov.org,jolon.clark@denvergov.org,christopher.herndon@denvergov.org,lisa.calderon@denvergov.org,chris.hinds@denvergov.org,stacie.gilmore@denvergov.org,kniechatlarge@denvergov.org,ortegaatlarge@denvergov.org,dpdrecruiting@denvergov.org,dsdinfo@denvergov.org
Grand Rapids	mayor@grcity.us,comptroller@grcity.us,joconnor@grcity.us,kreppart@grcity.us,jdjones@grcity.us,mysasi@grcity.us,slenear@grcity.us,nmoody@grcity.us,manager@grcity.us,cityatty@grcity.us,meastman@grcity.us,asnow@grcity.us,communitydev@grcity.us,inclusion@grcity.us,rachelhood@house.mi.gov,davidlagrand@house.mi.gov
Louisville	greg.fischer@louisvilleky.gov,attorney.general@ag.ky.gov,jessica.green@louisvilleky.gov,barbara.shanklin@louisvilleky.gov,keisha.dorsey@louisvilleky.gov,barbara.sextonsmith@louisvilleky.gov,donna.purvis@louisvilleky.gov,david.james@louisvilleky.gov,paula.mccraney@louisvilleky.gov,brandon.coan@louisvilleky.gov,bill.hollander@louisvilleky.gov,pat.mulvihill@louisvilleky.gov,kevin.kramer@louisvilleky.gov,rick.blackwell@louisvilleky.gov,mark.fox@louisvilleky.gov,cindi.fowler@louisvilleky.gov,kevin.triplett@louisvilleky.gov,scott.reed@louisvilleky.gov,markus.winkler@louisvilleky.gov,marilyn.parker@louisvilleky.gov,anthony.piagentini@louisvilleky.gov,stuart.benson@louisvilleky.gov,nicole.george@louisvilleky.gov,robin.engel@louisvilleky.gov,james.peden@louisvilleky.gov,madonna.flood@louisvilleky.gov,david.yates@louisvilleky.gov,brent.ackerson@louisvilleky.gov
Indianapolis	vop.osili@indy.gov,zach@adamsonforindy.com,leroy.robinson@indy.gov,keith.potts@indy.gov,dan.boots@indy.gov,ethan.evans2@indy.gov,ali.brown@indy.gov,crista.carlino@indy.gov,john.barth@indy.gov,monroe.gray@indy.gov,william.oliver@indy.gov,maggie.lewis@indy.gov,blake.johnson@indy.gov,keith.graves@indy.gov,lakeisha.jackson@indy.gov,jessica.mccormick@indy.gov,kristin.jones@indy.gov,michael-paul.hart@indy.gov,david.ray@indy.gov,jasonhollidayccc20@gmail.com,frank.mascari@indy.gov,jared.evans@indy.gov,paul.anneed23@gmail.com,mike.dilk424@gmail.com,brian.mowery@indy.gov
Houston	mayor@houstontx.gov,atlarge1@houstontx.gov,atlarge2@houstontx.gov,atlarge3@houstontx.gov,atlarge4@houstontx.gov,atlarge5@houstontx.gov,districta@houstontx.gov,districtb@houstontx.gov,districtc@houstontx.gov,districtd@houstontx.gov,districte@houstontx.gov,districtf@houstontx.gov,districtg@houstontx.gov,districth@houstontx.gov,districti@houstontx.gov,districtj@houstontx.gov,districtk@houstontx.gov,citysecretary@houstontx.gov,controllers@houstontx.gov,finance.director@houstontx.gov
Nashville	john.cooper@nashville.gov,jim.shulman@nashville.gov,bob.mendes@nashville.gov,sharon.hurt@nashville.gov,burkley.allen@nashville.gov,steve.glover@nashville.gov,zulfat.suara@nashville.gov,jonathan.hall@nashville.gov,kyonzte.toombs@nashville.gov,jennifer.gamble@nashville.gov,robert.swope@nashville.gov,sean.parker@nashville.gov,brett.withers@nashville.gov,emily.benedict@nashville.gov,nancy.vanreece@nashville.gov,tonya.hancock@nashville.gov,zach.young@nashville.gov,larry.hagar@nashville.gov,erin.evans@nashville.gov,russ.bradford@nashville.gov,kevin.rhoten@nashville.gov,jeff.syracuse@nashville.gov,ginny.welsch@nashville.gov,colby.sledge@nashville.gov,thomas.cash@nashville.gov,freddie.oconnell@nashville.gov,marycarolyn.roberts@nashville.gov,brandon.taylor@nashville.gov,gloria.hausser@nashville.gov,thom.druffel@nashville.gov,kathleen.murphy@nashville.gov,russ.pulley@nashville.gov,courtney.johnston@nashville.gov,bob.nash@nashville.gov,tanaka.vercher@nashville.gov,delishia.porterfield@nashville.gov,sandra.sepulveda@nashville.gov,john.rutherford@nashville.gov,joy.styles@nashville.gov,antoinette.lee@nashville.gov,angie.henderson@nashville.gov,dave.rosenberg@nashville.gov
Milwaukee	cavalier.johnson2@milwaukee.gov,ahamil@milwaukee.gov,nkovac@milwaukee.gov,rjbauma@milwaukee.gov,ald05@milwaukee.gov,mcoggs@milwaukee.gov,khalif.rainey@milwaukee.gov,chantia.lewis@milwaukee.gov,mmurph@milwaukee.gov,mark.borkowski@milwaukee.gov,joseg.perez@milwaukee.gov,scott.spiker@milwaukee.gov,marina@milwaukee.gov,russell.stamper@milwaukee.gov
Newark	barakara@ci.newark.nj.us,ramosa@ci.newark.nj.us,amadora@ci.newark.nj.us,gonzalezc@ci.newark.nj.us,osbornee@ci.newark.nj.us,jamesjoh@ci.newark.nj.us,mccallumjo@ci.newark.nj.us,mciverl@ci.newark.nj.us,quintanal@ci.newark.nj.us,crumpm@ci.newark.nj.us,joseg.perez@milwaukee.gov,scott.spiker@milwaukee.gov,marina@milwaukee.gov,russell.stamper@milwaukee.gov
New York	action@comptroller.nyc.gov,chin@council.nyc.gov,district2@council.nyc.gov,speakerjohnson@council.nyc.gov,kpowers@council.nyc.gov,bkallos@benkallos.com,helen@helenrosenthal.com,district7@council.nyc.gov,dayala@council.nyc.gov,d09perkins@council.nyc.gov,yrodriguez@council.nyc.gov,district11@council.nyc.gov,andy.king@council.nyc.gov,mgjonaj@council.nyc.gov,fcabrera@council.nyc.gov,rtorres@council.nyc.gov,district16bronx@council.nyc.gov,salamanca@council.nyc.gov,rdiaz@council.nyc.gov,district19@council.nyc.gov,pkoo@council.nyc.gov,fmoya@council.nyc.gov,bgrodenchik@council.nyc.gov,rlancman@council.nyc.gov,dromm@council.nyc.gov,jvanbramer@council.nyc.gov,adams@council.nyc.gov,koslowitz@council.nyc.gov,district30@council.nyc.gov,drichards@council.nyc.gov,eulrich@council.nyc.gov,slevin@council.nyc.gov,areynoso@council.nyc.gov,lcumbo@council.nyc.gov,district36@council.nyc.gov,info38@council.nyc.gov,lander@council.nyc.gov,meugene@council.nyc.gov,district41@council.nyc.gov,askjb@council.nyc.gov,askkalman@council.nyc.gov,district45@council.nyc.gov,amaisel@council.nyc.gov,mtreyger@council.nyc.gov,cdeutsch@council.nyc.gov,drose@council.nyc.gov,smatteo@council.nyc.gov,borelli@council.nyc.gov
Orlando	buddy.dyer@orlando.gov,tony.ortiz@orlando.gov,jim.gray@orlando.gov,robert.stuart@orlando.gov,regina.hill@orlando.gov,patty.sheehan@orlando.gov,bakari.burns@orlando.gov
Oklahoma	mayor@okc.gov,citymanager@okc.gov,ward1@okc.gov,ward2@okc.gov,ward3@okc.gov,ward4@okc.gov,ward5@okc.gov,ward6@okc.gov,ward7@okc.gov,ward8@okc.gov
Philadelphia	james.kenney@phila.gov,mark.squilla@phila.gov,kenyatta.johnson@phila.gov,jamie.gauthier@phila.gov,curtis.jones@phila.gov,darrell.clarke@phila.gov,bobby@bobbyhenon.com,maria.q.sanchez@phila.gov,cindy.bass@phila.gov,cherelle.parker@phila.gov,brian.oneill@phila.gov,kendra.brooks@phila.gov,allan.domb@phila.gov,derek.green@phila.gov,katherine.gilmore.richardson@phila.gov,helen.gym@phila.gov,david.oh@phila.gov,isaiah.thomas@phila.gov
Phoenix	mayor.gallego@phoenix.gov,council.district.1@phoenix.gov,council.district.2@phoenix.gov,council.district.3@phoenix.gov,council.district.4@phoenix.gov,council.district.5@phoenix.gov,council.district.6@phoenix.gov,council.district.7@phoenix.gov,council.district.8@phoenix.gov
Pittsburgh	theresa.kail-smith@pittsburghpa.gov,brosha.tkacheva@pittsburghpa.gov,district5@pittsburghpa.gov,district7@pittsburghpa.gov,erika.strassburger@pittsburghpa.gov,emilie.yonan@pittsburghpa.gov,reverend.burgess@pittsburghpa.gov,daniel.wood@pittsburghpa.gov,curt.conrad@pittsburghpa.gov,blake.plavchak@pittsburghpa.gov,kim.salinetro@pittsburghpa.gov,sally.stadelman@pittsburghpa.gov
Portland	mayorwheeler@portlandoregon.gov,amanda@portlandoregon.gov,chloe@portlandoregon.gov,joann@portlandoregon.gov,auditorhullcaballero@portlandoregon.gov,ipr@portlandoregon.gov,ombudsman@portlandoregon.gov,ppbpio@portlandoregon.gov,sonia.schmanski@portlandoregon.gov,toni.anderson@portlandoregon.gov,andrew.bryans@portlandoregon.gov
Raleigh	buddy.dyer@orlando.gov,tony.ortiz@orlando.gov,jim.gray@orlando.gov,robert.stuart@orlando.gov,regina.hill@orlando.gov,patty.sheehan@orlando.gov,bakari.burns@orlando.gov
Reno	mayor@reno.gov,reesed@reno.gov,brekhusj@reno.gov,duerrn@reno.gov,delgadoo@reno.gov,weberb@reno.gov,jardonn@reno.gov
Tucson	mayor.romero@tucsonaz.gov,ward1@tucsonaz.gov,ward2@tucsonaz.gov,ward3@tucsonaz.gov,ward4@tucsonaz.gov,ward5@tucsonaz.gov,ward6@tucsonaz.gov
Salt Lake City	mayor@slc.gov,james.rogers@slcgov.com,andrew.johnston@slcgov.com,chris.wharton@slcgov.com,ana.valdemoros@slcgov.com,darin.mano@slcgov.com,dan.dugan@slcgov.com,amy.fowler@slcgov.com
San Antonio	mayor@sanantonio.gov,roberto.trevino@sanantonio.gov,jada.andrews-sullivan@sanantonio.gov,rebecca.viagran@sanantonio.gov,adrianarocha.garcia@sanantonio.gov,shirley.gonzales@sanantonio.gov,melissacabello.havrda@sanantonio.gov,ana.sandoval@sanantonio.gov,manny.pelaez@sanantonio.gov,john.courage@sanantonio.gov,clayton.perry@sanantonio.gov,citymanager@sanantonio.gov,tina.flores@sanantonio.gov,troy.elliott@sanantonio.gov
Seattle	jenny.durkan@seattle.gov,council@seattle.gov,lisa.herbold@seattle.gov,tammy.morales@seattle.gov,kshama.sawant@seattle.gov,alex.pedersen@seattle.gov,debora.juarez@seattle.gov,dan.strauss@seattle.gov,andrew.lewis@seattle.gov,teresa.mosqueda@seattle.gov,lorena.gonzalez@seattle.gov
St. Paul	mayor@ci.stpaul.mn.us,joan.phillips@ci.stpaul.mn.us,ward2@ci.stpaul.mn.us,ward4@ci.stpaul.mn.us,ward3@ci.stpaul.mn.us,ward1@ci.stpaul.mn.us,ward5@ci.stpaul.mn.us,ward6@ci.stpaul.mn.us,ward7@ci.stpaul.mn.us
`

// eslint-disable-next-line
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const cityToEmails: Record<string, Array<string>> = phatEmailString
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .reduce((acc, [cityName, emailsCSV]) => {
    if (emailsCSV == null) {
      console.warn(`emails missing for ${cityName}`)
      return acc
    }
    // @ts-ignore
    acc[cityName] = emailsCSV
      .split(',')
      .map((email) => email.trim())
      .filter((email) => EMAIL_REGEX.test(email))
    return acc
  }, {})

export const getEmailsForCity = (city: string) => {
  return cityToEmails[city]
}
