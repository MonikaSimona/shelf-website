import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CardData } from "../../../components/Home/CollectionItemCard";
import { Params } from "../../../components/Home/Collections/Collection";
import { SearchValues } from "../../../components/Search/Search";
import { setNoSuchTerm } from "../helperSlice/helperSlice";
const movies: CardData[] = [];
const tvshows: CardData[] = [
  {
    type: "tvshows",
    imageSrc:
      "https://media.comicbook.com/2021/05/loki-1269834.jpeg?auto=webp&width=864&height=1280&crop=864:1280,smart",
    title: "Loki",
    subtitle: "Marvel Studios",
    review:
      "A delightful diversion from the MCU as we know it, Loki successfully sees star Tom Hiddleston leap from beloved villain to endearing antihero -- with a little help from Owen Wilson -- in a series that's as off-kilter, charming, and vaguely dangerous as the demigod himself. ",
    date: "21.06.2021",
    reviewer: "monika",
  },
  {
    type: "tvshows",
    imageSrc:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpceOhkOM43O1-czOGBiyaz76nEO3uPh325sQUSmAxKwvQeQ_2",
    title: "Mare of Easttown",
    subtitle: "HBO",
    review:
      "Mare of Easttown (Sky Atlantic) is a millefeuille of misery, as exquisitely layered and as moreish as the real thing. In rural Pennsylvania, we meet a small-town cop, Mare Sheehan (Kate Winslet). World-weariness, the weight of professional responsibility and – we discover later, although the clues are there – family tragedy show in every line of her body, every heavy step she takes. She rarely smiles. She is not surly or grumpy – she just doesn’t have the energy for anything else, after doing her job and taking care of her family.Life takes out of Mare more than it puts in – especially since 19-year-old Katy Bailey, the drug-addicted daughter of Mare’s high-school friend Dawn, disappeared a year ago. If you can have a defining performance this late in a career, this is surely Winslet’s. She is absolutely wonderful – and ably supported by the rest of the cast.. ",
    date: "21.06.2021",
    reviewer: "monika",
  },
];
const books: CardData[] = [
  {
    type: "books",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/I/918TvCMQO4L.jpg",
    title: "The Mysterious Affair at Styles",
    subtitle: "Agatha Christie",
    review:
      "      The Mysterious Affair at Styles is Agatha Christie’s debut novel, published in 1920, and the first featuring her detective, Hercule Poirot. By any standards it is an assured and well written debut novel and, considering the period it was written, it is also remarkably undated. Apparently, Agatha Christie was challenged by her sister to write a detective story, for which I am eternally grateful, as this was her offering. Like one of the characters in this novel, Agatha worked in the dispensary of a local hospital and gained a knowledge of poisons, which she used in her novel. She also saw the arrival of Belgian refugees during WWI, which gave her detective his background.. ",
    date: "12.08.2021",
    reviewer: "jane",
  },
  {
    type: "books",
    imageSrc: "https://fadutown.com/wp-content/uploads/2020/08/81YOuOGFCJL.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    subtitle: "J.K.Rowling",
    review:
      "A rewarding read, a classic for children.The Philosopher’s Stone is the first in J.K. Rowling’s Harry Potter series of seven novels that have made her the most successful literary author of all time, selling in excess of 400 million copies world-wide. The books are read and enjoyed by children and adults alike and have also been made into hugely popular films.   Do the Harry Potter books live up to the hype? When I first began reading the Philosopher’s stone I was immediately struck by how good - and laugh-out-loud funny - the humour was. You usually need to read a Terry Pratchett novel to ensure constant laughter throughout but Rowling has managed to infuse this book with a lovely wit and charm that will both amuse and delight adults and children. Here is an example, with the ending being particularly good",
    date: "21.06.2021",
    reviewer: "monika",
  },
  {
    type: "books",
    imageSrc: "https://fadutown.com/wp-content/uploads/2020/08/81YOuOGFCJL.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    subtitle: "J.K.Rowling",
    review:
      "A rewarding read, a classic for children.The Philosopher’s Stone is the first in J.K. Rowling’s Harry Potter series of seven novels that have made her the most successful literary author of all time, selling in excess of 400 million copies world-wide. The books are read and enjoyed by children and adults alike and have also been made into hugely popular films.   Do the Harry Potter books live up to the hype? When I first began reading the Philosopher’s stone I was immediately struck by how good - and laugh-out-loud funny - the humour was. You usually need to read a Terry Pratchett novel to ensure constant laughter throughout but Rowling has managed to infuse this book with a lovely wit and charm that will both amuse and delight adults and children. Here is an example, with the ending being particularly good",
    date: "21.06.2021",
    reviewer: "monika",
  },
];
export const reviewItemsSlice = createSlice({
  name: "reviewItems",
  initialState: books,
  reducers: {
    getAllItems: (state: CardData[], action: PayloadAction<Params>) => {
      console.log("getAllitems", action.payload.type);
      if (action.payload.type === "books") {
        state = books;
      } else if (action.payload.type === "tvshows") {
        state = tvshows;
      } else {
        state = movies;
      }
      return state;
    },
    filterItems: (state: CardData[], action: PayloadAction<SearchValues>) => {
      let filtered;
      if (action.payload.type === "books") {
        filtered = books;
      } else if (action.payload.type === "tvshows") {
        filtered = tvshows;
      } else {
        filtered = movies;
      }
      const searchOption = action.payload.option;
      const searchTerm = action.payload.searchTerm;
      if (searchOption === "title") {
        filtered = filtered.filter((review) =>
          review.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (searchOption === "author" || searchOption === "studio") {
        filtered = filtered.filter((review) =>
          review.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        filtered = filtered.filter((review) =>
          review.reviewer.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      state = filtered;

      return state;
    },
  },
  extraReducers: (builder) => {},
});

export const { getAllItems, filterItems } = reviewItemsSlice.actions;

export default reviewItemsSlice.reducer;
