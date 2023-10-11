-- CreateTable
CREATE TABLE "movies_entity" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Year" TEXT NOT NULL,
    "Rated" TEXT NOT NULL,
    "Released" TEXT NOT NULL,
    "Runtime" TEXT NOT NULL,
    "Genre" TEXT NOT NULL,
    "Director" TEXT NOT NULL,
    "Writer" TEXT NOT NULL,
    "Actors" TEXT NOT NULL,
    "Plot" TEXT NOT NULL,
    "Language" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "Awards" TEXT NOT NULL,
    "Poster" TEXT NOT NULL,
    "Metascore" TEXT NOT NULL,
    "imdbRating" TEXT NOT NULL,
    "imdbVotes" TEXT NOT NULL,
    "imdbID" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Response" TEXT NOT NULL,
    "totalSeasons" TEXT,
    "Images" TEXT[],

    CONSTRAINT "movies_entity_pkey" PRIMARY KEY ("id")
);
