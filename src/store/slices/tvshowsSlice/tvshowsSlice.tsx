import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CardData } from "../../../components/Home/CollectionItemCard";

const data: CardData[] = [
  {
    type: "tvshow",
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
    type: "tvshow",
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
export const tvshowsSlice = createSlice({
  name: "tvshows",
  initialState: data,
  reducers: {},
  extraReducers: (builder) => {},
});

export default tvshowsSlice.reducer;
