var movies = [
    {
        id: 1,
        title: "Abominable",
        genre: "Animation, Comedy, Adventure, Fantasy",
        synopsis: "After discovering a Yeti on the roof of her apartment building, teenage Yi and her two friends embark on an epic quest to reunite the magical creature with his family. But to do so, they must stay one step ahead of a wealthy financier and a determined zoologist who want to capture the beast for their own gain.",
        show: [{date: "10/02/2019", cinema: 1}, {date: "10/02/2019", cinema: 2}, {date: "10/02/2019", cinema: 3}, {date: "10/02/2019", cinema: 4},
                {date: "10/03/2019", cinema: 1}, {date: "10/03/2019", cinema: 4}, {date: "10/04/2019", cinema: 2}, {date: "10/04/2019", cinema: 1},
                {date: "10/05/2019", cinema: 2}],
        duration: "1hr 37mins",
        rating: 4,
        ticketPrice: 250,
        contentRating: "pg",
        imgUrl: "assets/images/movies/Abominable.jpg"
    },

    {
        id: 2,
        title: "Ad Astra",
        genre: "Mystery & Suspense, Science Fiction, Fantasy",
        synopsis: "Astronaut Roy McBride (Brad Pitt) travels to the outer edges of the solar system to find his missing father and unravel a mystery that threatens the survival of our planet. His journey will uncover secrets that challenge the nature of human existence and our place in the cosmos.",
        show: [{date: "10/03/2019", cinema: 2}, {date: "10/03/2019", cinema: 3}, {date: "10/04/2019", cinema: 2}, {date: "10/04/2019", cinema: 4},
                {date: "10/05/2019", cinema: 1}, {date: "10/05/2019", cinema: 3}, {date: "10/05/2019", cinema: 4},
                {date: "10/06/2019", cinema: 2}, {date: "10/06/2019", cinema: 3}],
        duration: "2hr 4mins",
        rating: 3,
        ticketPrice: 250,
        contentRating: "pg",
        imgUrl: "assets/images/movies/Ad_Astra.jpg"
    },

    {
        id: 3,
        title: "Ang Henerasyong Sumuko sa Love",
        genre: "Comedy, Romance",
        synopsis: "It tells the story of different teenagers who have different priorities and encounter different challenges as they enter adult life.",
        show: [{date: "10/06/2019", cinema: 1}, {date: "10/06/2019", cinema: 4}, {date: "10/07/2019", cinema: 1}, {date: "10/07/2019", cinema: 2},
                {date: "10/08/2019", cinema: 1}, {date: "10/08/2019", cinema: 3}, {date: "10/09/2019", cinema: 1}],
        duration: "1hr 40mins",
        rating: 3,
        ticketPrice: 250,
        contentRating: "pg",
        imgUrl: "assets/images/movies/ang_henerasyong_sumuko_sa_love.jpg"
    },

    {
        id: 4,
        title: "Edward",
        genre: "Coming of Age",
        synopsis: "A public hospital serves as a witness to a young boy’s rite of passage when he is stuck to take care of his ailing father. Caught in a place where life itself is in limbo, the boy treats the hospital grounds as his playground, not knowing that it will be his source of liberation in the end.",
        show: [{date: "10/09/2019", cinema: 3}, {date: "10/10/2019", cinema: 2}, {date: "10/10/2019", cinema: 3}, {date: "10/11/2019", cinema: 2},
                {date: "10/12/2019", cinema: 2}, {date: "10/12/2019", cinema: 3}, {date: "10/14/2019", cinema: 2}],
        duration: "1hr 22mins",
        rating: 2,
        ticketPrice: 250,
        contentRating: "r13",
        imgUrl: "assets/images/movies/Edward.jpg"
    },

    {
        id: 5,
        title: "It 2",
        genre: "Horror",
        synopsis: "Evil resurfaces in Derry as director Andy Muschietti reunites the Losers Club in a return to where it all began with \"IT Chapter Two\", the conclusion to the highest-grossing horror film of all time. Twenty-seven years after the Losers Club defeated Pennywise, he has returned to terrorize the town of Derry once more. Now adults, the Losers have long since gone their separate ways. However, kids are disappearing again, so Mike, the only one of the group to remain in their hometown, calls the others home. Damaged by the experiences of their past, they must each conquer their deepest fears to destroy Pennywise once and for all...putting them directly in the path of the clown that has become deadlier than ever.",
        show: [{date: "10/10/2019", cinema: 1}, {date: "10/11/2019", cinema: 1}, {date: "10/12/2019", cinema: 1}, {date: "10/15/2019", cinema: 1},
                {date: "10/13/2019", cinema: 2}, {date: "10/13/2019", cinema: 3}, {date: "10/13/2019", cinema: 4}, {date: "10/15/2019", cinema: 3},
                {date: "10/15/2019", cinema: 4}, {date: "10/16/2019", cinema: 1}, {date: "10/16/2019", cinema: 3}],
        duration: "2hr 50mins",
        rating: 3,
        ticketPrice: 250,
        contentRating: "r16",
        imgUrl: "assets/images/movies/it_2.jpg"
    },

    {
        id: 6,
        title: "Joker",
        genre: "Action, Adventure, Drama, Mystery & Suspense",
        synopsis: "\"Joker\" centers around the iconic arch nemesis and is an original, standalone fictional story not seen before on the big screen. Phillips' exploration of Arthur Fleck, who is indelibly portrayed by Joaquin Phoenix, is of a man struggling to find his way in Gotham's fracturedsociety. A clown-for-hire by day, he aspires to be a stand-up comic at night...but finds the joke always seems to be on him. Caught in a cyclical existence between apathy and cruelty, Arthur makes one bad decision that brings about a chain reaction of escalating events in this gritty character study.",
        show: [{date: "10/13/2019", cinema: 1}, {date: "10/14/2019", cinema: 1}, {date: "10/15/2019", cinema: 2}, {date: "10/16/2019", cinema: 2},
                {date: "10/16/2019", cinema: 4}, {date: "10/17/2019", cinema: 1}, {date: "10/17/2019", cinema: 2}, {date: "10/17/2019", cinema: 3},
                {date: "10/17/2019", cinema: 4}, {date: "10/18/2019", cinema: 1}, {date: "10/18/2019", cinema: 2}, {date: "10/18/2019", cinema: 3},
                {date: "10/19/2019", cinema: 1}, {date: "10/19/2019", cinema: 3}, {date: "10/19/2019", cinema: 4}],
        duration: "2hr 2mins",
        rating: 5,
        ticketPrice: 250,
        contentRating: "r16",
        imgUrl: "assets/images/movies/joker.jpg"
    },

    {
        id: 7,
        title: "One Piece: Stampede",
        genre: "Anime, Action, Adventure, Fantasy",
        synopsis: "The world's boldest buccaneers set sail for the great Pirate Festival, where the Straw Hats join a mad-dash race to find Gol D.Roger's treasure. There's just one little problem. An old member of Roger's crew has a sinister score to settle. All bets are off when the most iconic pirates of One Piece history band together for a swashbuckling showdown, the likes of which have never been seen!",
        show: [{date: "10/09/2019", cinema: 4}, {date: "10/10/2019", cinema: 4}, {date: "10/11/2019", cinema: 3}, {date: "10/11/2019", cinema: 4},
                {date: "10/12/2019", cinema: 4}, {date: "10/14/2019", cinema: 3}, {date: "10/14/2019", cinema: 4}],
        duration: "1hr 41mins",
        rating: 4,
        ticketPrice: 250,
        contentRating: "r13",
        imgUrl: "assets/images/movies/one_piece.jpg"
    },

    {
        id: 8,
        title: "Rambo: Last Blood",
        genre: "Action, Adventure, Mystery & Suspense",
        synopsis: "Almost four decades after he drew first blood, Sylvester Stallone is back as one of the greatest action heroes of all time, John Rambo. Now, Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission. A deadly journey of vengeance, RAMBO: LAST BLOOD marks the last chapter of the legendary series.",
        show: [{date: "10/18/2019", cinema: 4}, {date: "10/19/2019", cinema: 2}, {date: "10/20/2019", cinema: 1}, {date: "10/20/2019", cinema: 2},
                {date: "10/20/2019", cinema: 4}, {date: "10/21/2019", cinema: 1}, {date: "10/21/2019", cinema: 2}, {date: "10/22/2019", cinema: 1},
                {date: "10/22/2019", cinema: 3}],
        duration: "1hr 29mins",
        rating: 4,
        ticketPrice: 250,
        contentRating: "r16",
        imgUrl: "assets/images/movies/rambo_last_blood.jpg"
    },

    {
        id: 9,
        title: "The Panti Sisters",
        genre: "Comedy",
        synopsis: "A terminally ill father offers P100 million to the first of his three gay sons who can give him grandchild.",
        show: [{date: "10/20/2019", cinema: 3}, {date: "10/21/2019", cinema: 3}, {date: "10/21/2019", cinema: 4},
                {date: "10/22/2019", cinema: 2}, {date: "10/22/2019", cinema: 4}],
        duration: "1hr 48mins",
        rating: 3,
        ticketPrice: 200,
        contentRating: "pg",
        imgUrl: "assets/images/movies/the_panti_sisters.jpg"
    },

]
