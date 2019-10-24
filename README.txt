# WordApp
Ovo je klijent aplikacija koja broji reci.
Radjen je kao Angular 8 single page app, 
aplikacija je podesena da gadja WordApp servis koji je kada se pokrene na lokalnom iis sreveru na lokaciji http://localhost:55468.
Stoga je potrebno da  servis bude aktivan i da radi u lokalu kako bi i sam klijent mogao da radi,
u samom servisu je podeseno da se pokrece na ovom portu prilikom startovaja pa izmena  konfiguracije nije potrebna.
Takodje za rad aplikcije lokalno je potrebno imati intsliran Node.js i da bi se stratovala potrebno je uneti  komandu u Node.js console-u 
ng serve --open, a prethodno se iz konzole pozicionirati na folder WordAppAngular u kojoj je sama aplikacija.
Aplikacija ce se podici na portu 4200 localhost server.
