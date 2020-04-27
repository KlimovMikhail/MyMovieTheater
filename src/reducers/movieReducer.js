import * as constants from "../constants";

const initialState = {
  movies: [],
<<<<<<< HEAD
  genres: [],
  sessions: [],
  rooms: []
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_MOVIE:
      const genres = Object.values(action.payload.movie).reduce((acc, item) => {
        if (item.genre && item.genre.length) {
          item.genre.forEach((elem) => {
            if (elem && !acc.includes(elem.trim())) {
              acc.push(elem.trim())
            }
          });
        }
        return acc;
      }, [])
      return {
        ...state,
        movies: Object.values(action.payload.movie),
        genres
      };

    case constants.SET_SESSIONS:

      const sortedSession = action.payload.sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) {
          return 1;
        }
        if (new Date(a.date) < new Date(b.date)) {
          return -1;
        }
        return 0;
      });

      const sortedSessionDate = sortedSession.reduce((acc, item) => {
        if (!acc.length) {
          acc.push([]);
        }

        const lastElem = acc[acc.length - 1];
        const lastElemDate = lastElem.length ? lastElem[0].date.split("T")[0] : null;
        const itemDate = item.date.split("T")[0];
        const differentDates = +new Date(lastElemDate) !== +new Date(itemDate);

        if (lastElem.length && differentDates) {
          return [...acc, [item]];
        }

        acc[acc.length - 1].push(item);

        return acc;
      }, []);
      console.log("sortedSessionDate", sortedSessionDate)
      return {
        ...state,
        sessions: sortedSessionDate
      }

    case constants.SET_ROOMS:

      return {
        ...state,
        rooms: action.payload
      }
      
    default: return state
  }
};

=======
  isLoading: false,
  error: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOADING:
      return {
        ...state,
        isLoading: true
      }
    case constants.SET_MOVIE:
      return {
        ...state,
        movies: Object.values(action.payload.movie),
        isLoading: false 
      }
    case constants.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default: return state
  }
};
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
