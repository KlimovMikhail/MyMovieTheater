// import * as constants from "../constants";

// const initialState = {
//   sessions: [],
// };

// export const sessions = (state = initialState, action) => {
//   switch (action.type) {
//     case constants.SET_SESSIONS:

//       const sortedSession = action.payload.sort((a, b) => {
//         if (new Date(a.date) > new Date(b.date)) {
//           return 1;
//         }
//         if (new Date(a.date) < new Date(b.date)) {
//           return -1;
//         }
//         return 0;
//       });

//        const sortedSessionDate = sortedSession.reduce((acc, item) => {
//         if (!acc.length) {
//           acc.push([]);
//         }

//         const lastElem = acc[acc.length - 1];
//         const lastElemDate = lastElem.length ? lastElem[0].date.split("T")[0] : null;
//         const itemDate = item.date.split("T")[0];
//         const differentDates = +new Date(lastElemDate) !== +new Date(itemDate);

//         if (lastElem.length && differentDates) {
//           return [...acc, [item]];
//         }

//         acc[acc.length - 1].push(item);

//         return acc;
//       }, []);
//       console.log("sortedSessionDate", sortedSessionDate)
//       return {
//         ...state,
//         sessions: sortedSessionDate
//       }

//     case constants.SET_ROOMS:
  
//       const sessionsByRoom = state.sessions.map(item => {
//         return item.map(elem => ({
//           ...elem, room: action.payload.find(room => room._id === elem.room).name
//         }));
//       });

//       return {
//         ...state,
//         sessions: sessionsByRoom
//       }
//     default: return state
//   }
// };

