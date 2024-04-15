import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/",
  endPoint: {
    "characters": "character",
    "locations": "location",
    "episodes": "episode",
  },

  character:[],
  loading: true,
  error: {
    message: null,
  },
});

