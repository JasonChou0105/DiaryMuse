export default function Home() {
    const movies = [
        {
          title: "Gut (2012)",
          genres: "Drama|Horror|Thriller",
          reviewRating: "3.9",
          runTime: "91 min",
          plot: "Directed by Elias. With Jason Vail, Nicholas Wilder, Sarah Schoofs, Kirstianna Mueller. Family man Tom has seen something he can't forget, a mysterious video with an ugly secret that soon spreads into his daily life and threatens to dismantle everything around him.",
          cast: "Jason Vail|Nicholas Wilder|Sarah Schoofs|Kirstianna Mueller|Kaitlyn Mueller|Angie Bullaro|Ria Burns-Wilder|Miles Joris-Peyrafitte|Karl Pfeiffer|Leisa Haddad|Misty Gonzalez|Jordan Sariego|Christine Kadets|Deborah J. Atuk|J. Brett Rose",
          language: "English"
        },
        {
          title: "The Haunting of Mia Moss (2017)",
          genres: "Horror",
          reviewRating: "",
          runTime: "",
          plot: "Directed by Jake Zelch. With Nicola Fiore, Brinke Stevens, Curtis Carnahan, Jake Zelch.",
          cast: "Nicola Fiore|Brinke Stevens|Curtis Carnahan|Jake Zelch|Haley Bordelon|Asalee Biagioli|Emily Christina|Erin Felts|Jerri Gerth|Dustin Hubbard|Justin Isom Jr.|Erik Kommer|Mackenzie Lampkin-Isom|Ben Milke|Destinie Orndoff",
          language: "English"
        },
        {
          title: "Sleepwalking (2017)",
          genres: "Horror",
          reviewRating: "",
          runTime: "",
          plot: "Directed by David Briggs. With Alysia Topol, Anthony Makela, Kelsi Ashley, Patrick J. Carew.",
          cast: "Alysia Topol|Anthony Makela|Kelsi Ashley|Patrick J. Carew|Chiv Chivaul|Starlotte Dresen|Melanie Durette|Emilie Overton|Corey Pascall|Lindsay Primeau|Trish Rainone|Tammy-lynn Wilcox",
          language: "English"
        },
        {
          title: "Treasure Chest of Horrors II (2013)",
          genres: "Comedy|Horror|Thriller",
          reviewRating: "3.7",
          runTime: "82 min",
          plot: "Directed by M. Kelley, Shawn C. Phillips, Alex Powers. With Veronica Ricci, Nicholas Adam Clark, James Cullen Bressack, Nick Waugh. Mona Screamalot, along with her crazy family, prepares you for six short horror films from deep within her trashy treasure chest. This anthology features party killers, giant killer babies, an angry murderous child, a bacterial infection like no other, a murderous cross dresser,a killer in the woods, and Satan. Oh yeah, don't forget the buckets of blood.",
          cast: "Veronica Ricci|Nicholas Adam Clark|James Cullen Bressack|Nick Waugh|Shawn C. Phillips|Brent Buser|Miles Dougal|Joseph Frantz|M. Kelley|Brendan Mitchell|Joben Penuliar|Ethan Phillips|Kim Phillips|Stephen Phillips|Alex Powers",
          language: "English"
        },
        {
          title: "Infidus (2015)",
          genres: "Crime|Drama|Horror",
          reviewRating: "5.8",
          runTime: "80 min",
          plot: "Directed by Giulio De Santi. With Bonini Mino, Massimo Caratelli, Maurizio Zaffino, Stefania Bonini. In the suburbs of Rome, two disparate lives with only desire for vengeance and redemption in common find their destinies intertwined. Massimo's mind is plagued with images of his wife's violent death at the hands of a criminal gang involved in the production of snuff films. With every memory of the woman he loved replaced by unforgettable images of her horrific final moments, Massimo sees only ...",
          cast: "Bonini Mino|Massimo Caratelli|Maurizio Zaffino|Stefania Bonini|Andrea Di Spirito|Walter Montano|Cristiano Mazzacane|Simone Paternosto|Adrian Baigus|Domenico Deltreppo|Manolo Di Rocco|Stefania Caratelli|Christian Riva|Domenico Vagnati|Roberta Abatiello",
          language: "Italian"
        },
        {
          title: "Flesh Freaks (2016)",
          genres: "Horror",
          reviewRating: "",
          runTime: "",
          plot: "Directed by Brad Sykes. With Melantha Blackthorne, Tim Kincaid, Mickaela Brown, Mike Darnell. A man must survive a grotesque experiment that is turning people into creatures.",
          cast: "Melantha Blackthorne|Tim Kincaid|Mickaela Brown|Mike Darnell|Mike Jones|Toni Kincaid|Tommy Wisecarver|Eric Scott Jenkins|Alex Tan",
          language: "English"
        },
        {
          title: "Porno (2019)",
          genres: "Comedy|Horror",
          reviewRating: "5.4",
          runTime: "97 min",
          plot: "Directed by Keola Racela. With Kira Powell, Jesse LaTourette, Ruben Pla, Noah Fearnley. A group of teenagers in a secluded town discover an old, haunted movie theater and are forced to fight off an ancient evil.",
          cast: "Kira Powell|Jesse LaTourette|Ruben Pla|Noah Fearnley|Hayley Griffith|Elise Neal|Jeremiah Watkins|Veronica Gallegos|Chris M. Campell|Cory Carlson|Hollis W. Kimbrell|Maddox Mayeux|Matthew Caruso",
          language: "English"
        },
        {
          title: "The Night Watchmen (2017)",
          genres: "Comedy|Horror",
          reviewRating: "5.7",
          runTime: "78 min",
          plot: "Directed by Mitchell Altieri. With Michael Johnson, Dan D'Annunzio, Evan Hara, Jeremy Sisto. A group of bumbling night watchmen must fight off zombies that have invaded the local office building they guard.",
          cast: "Michael Johnson|Dan D'Annunzio|Evan Hara|Jeremy Sisto|Rachel G. Fox|Victor Cruz|Kara Luiz|Sarah McDaniel|Linda K. Preece|Robert Decker",
          language: "English"
        },
        {
          title: "Virus of the Dead (2018)",
          genres: "Horror",
          reviewRating: "4.2",
          runTime: "120 min",
          plot: "Directed by various directors. With Chandra Lee Schwartz, Emily Marie Palmer, Tom Comet, Michael D. Kehoe. A post-apocalyptic anthology exploring the chaos, horror, and struggles to survive in a world ravaged by a viral outbreak turning humans into zombies.",
          cast: "Chandra Lee Schwartz|Emily Marie Palmer|Tom Comet|Michael D. Kehoe|Joseph Black|David Martin|Christopher Tellez|Maximilian Heller|Taylor Regan|Austin Spitler|Corey Thompson|Cliff McDonald",
          language: "English"
        },
        {
          title: "Hell House LLC (2015)",
          genres: "Horror|Mystery|Thriller",
          reviewRating: "6.1",
          runTime: "93 min",
          plot: "Directed by Stephen Cognetti. With Gore Abrams, Alice Bahlke, Danny Bellini, Theodore Bouloukos. Five years after an unexplained disaster at a Halloween haunted house attraction, a documentary crew investigates what went wrong.",
          cast: "Gore Abrams|Alice Bahlke|Danny Bellini|Theodore Bouloukos|Jillian Geurts|Zach Chassler|Russell Newell|Doris G. Williams",
          language: "English"
        },
        {
          title: "The Last Drive-In with Joe Bob Briggs (2018)",
          genres: "Horror",
          reviewRating: "7.7",
          runTime: "60 min",
          plot: "Directed by Joe Bob Briggs. Hosted by Joe Bob Briggs, this horror movie series takes viewers on a wild ride through cult films with insightful commentary and interviews.",
          cast: "Joe Bob Briggs|Darcy the Mail Girl|John Bloom",
          language: "English"
        },
        {
          title: "The Evil Within (2017)",
          genres: "Drama|Horror|Mystery",
          reviewRating: "4.7",
          runTime: "97 min",
          plot: "Directed by Andrew Getty. With Michael Berryman, Sean Patrick Flanery, Diane Ladd, Jennifer Blanc-Biehn. A mentally-challenged man is caught in a nightmare when he is forced to confront his dark and disturbing past.",
          cast: "Michael Berryman|Sean Patrick Flanery|Diane Ladd|Jennifer Blanc-Biehn|AnnaLynne McCord|Bryan Callen|Brandon Spink|Bill Moseley",
          language: "English"
        },
        {
          title: "The Devil's Rejects (2005)",
          genres: "Horror|Thriller",
          reviewRating: "6.9",
          runTime: "108 min",
          plot: "Directed by Rob Zombie. With Sid Haig, Sheri Moon Zombie, Bill Moseley, Ken Foree. The murderous, backwoods Firefly family takes to the road after a series of brutal murders leaves a trail of blood. Meanwhile, law enforcement closes in on them.",
          cast: "Sid Haig|Sheri Moon Zombie|Bill Moseley|Ken Foree|William Forsythe|Danny Trejo|Matthew McGrory|Michael Berryman",
          language: "English"
        },
        {
          title: "The Wretched (2019)",
          genres: "Horror|Thriller",
          reviewRating: "6.1",
          runTime: "95 min",
          plot: "Directed by Brett Pierce, Drew T. Pierce. With John-Paul Howard, Piper Curda, Zach Gowen, Kevin Bigley. A rebellious teenage boy is sent to live with his father for the summer, where he becomes friends with a mysterious neighbor. But strange things begin to happen when the boy starts to suspect the neighbor is hiding a dark secret.",
          cast: "John-Paul Howard|Piper Curda|Zach Gowen|Kevin Bigley|Joel Courtney|Nina Siemaszko|Lillian Solange Beaudoin",
          language: "English"
        },
        {
          title: "Banshee Chapter (2013)",
          genres: "Horror|Thriller",
          reviewRating: "5.6",
          runTime: "94 min",
          plot: "Directed by Blair Erickson. With Katia Winter, Ted Levine, Michael McMillian, Jenny Gabrielle. A journalist searches for her friend who was missing for two years. She learns that her friend was involved in a government experiment that altered the way she perceives reality.",
          cast: "Katia Winter|Ted Levine|Michael McMillian|Jenny Gabrielle|Christopher Denham|Brandon P. Bell|Bruce Jennings|Steve Hanks|Nick Searcy|Betsy Baker",
          language: "English"
        },
        {
          title: "The Autopsy of Jane Doe (2016)",
          genres: "Horror|Mystery|Thriller",
          reviewRating: "6.8",
          runTime: "86 min",
          plot: "Directed by André Øvredal. With Emile Hirsch, Brian Cox, Ophelia Lovibond, Michael McElhatton. A father and son team of coroners are pulled into a complex mystery while attempting to identify the body of a young woman who was found buried in a basement.",
          cast: "Emile Hirsch|Brian Cox|Ophelia Lovibond|Michael McElhatton|Olwen Fouéré|Toby Jones",
          language: "English"
        },
        {
          title: "The Girl with All the Gifts (2016)",
          genres: "Drama|Horror|Thriller",
          reviewRating: "6.6",
          runTime: "113 min",
          plot: "Directed by Colm McCarthy. With Gemma Arterton, Glenn Close, Paddy Considine, Sennia Nanua. A scientist and a teacher living in a dystopian society are trying to protect a special young girl who is the key to humanity's survival.",
          cast: "Gemma Arterton|Glenn Close|Paddy Considine|Sennia Nanua|Fisayo Akinade|Anastasia Hille|Dominic Applewhite|Zaraah Abrahams|Paul Kaye",
          language: "English"
        },
        {
          title: "The Blackcoat's Daughter (2015)",
          genres: "Horror|Thriller",
          reviewRating: "5.7",
          runTime: "93 min",
          plot: "Directed by Oz Perkins. With Emma Roberts, Kiernan Shipka, Lucy Boynton, Lauren Holly. A deeply disturbed teenager is left behind at her boarding school over winter break, where she begins to experience strange and disturbing events.",
          cast: "Emma Roberts|Kiernan Shipka|Lucy Boynton|Lauren Holly|James Remar|Greg Lutz|John Magaro",
          language: "English"
        },
        {
          title: "The Evil Dead (1981)",
          genres: "Horror",
          reviewRating: "7.5",
          runTime: "85 min",
          plot: "Directed by Sam Raimi. With Bruce Campbell, Ellen Sandweiss, Richard DeManincor, Betsy Baker. Five friends travel to a cabin in the woods, where they unknowingly release a deadly force that turns them against each other.",
          cast: "Bruce Campbell|Ellen Sandweiss|Richard DeManincor|Betsy Baker|Hal Delrich|Sarah York|Elizabeth Blackmar",
          language: "English"
        },
        {
          title: "Tucker & Dale vs. Evil (2010)",
          genres: "Comedy|Horror",
          reviewRating: "7.5",
          runTime: "89 min",
          plot: "Directed by Eli Craig. With Alan Tudyk, Tyler Labine, Katrina Bowden, Jesse Moss. Two hillbillies are mistaken for killers by a group of college students camping near their cabin.",
          cast: "Alan Tudyk|Tyler Labine|Katrina Bowden|Jesse Moss|Chelan Simmons|Brandon Jay McLaren|Philip Granger|David Reale|Raoul Max Trujillo",
          language: "English"
        }
      ];
      
    return (
        <div className="">

        </div>
    )
}