import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CardData } from "../../../components/Home/CollectionItemCard";
const data: CardData[] = [
  {
    type: "book",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/I/918TvCMQO4L.jpg",
    title: "The Mysterious Affara at Styles",
    subtitle: "Agatha Christie",
    review:
      "      The Mysterious Affair at Styles is Agatha Christie’s debut novel, published in 1920, and the first featuring her detective, Hercule Poirot. By any standards it is an assured and well written debut novel and, considering the period it was written, it is also remarkably undated. Apparently, Agatha Christie was challenged by her sister to write a detective story, for which I am eternally grateful, as this was her offering. Like one of the characters in this novel, Agatha worked in the dispensary of a local hospital and gained a knowledge of poisons, which she used in her novel. She also saw the arrival of Belgian refugees during WWI, which gave her detective his background.. ",
    date: "12.08.2021",
    reviewer: "jane",
  },
  {
    type: "book",
    imageSrc: "https://fadutown.com/wp-content/uploads/2020/08/81YOuOGFCJL.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    subtitle: "J.K.Rowling",
    review:
      "A rewarding read, a classic for children.The Philosopher’s Stone is the first in J.K. Rowling’s Harry Potter series of seven novels that have made her the most successful literary author of all time, selling in excess of 400 million copies world-wide. The books are read and enjoyed by children and adults alike and have also been made into hugely popular films.   Do the Harry Potter books live up to the hype? When I first began reading the Philosopher’s stone I was immediately struck by how good - and laugh-out-loud funny - the humour was. You usually need to read a Terry Pratchett novel to ensure constant laughter throughout but Rowling has managed to infuse this book with a lovely wit and charm that will both amuse and delight adults and children. Here is an example, with the ending being particularly good",
    date: "21.06.2021",
    reviewer: "monika",
  },
];
export const booksSlice = createSlice({
  name: "books",
  initialState: data,
  reducers: {},
  extraReducers: (builder) => {},
});

export default booksSlice.reducer;
