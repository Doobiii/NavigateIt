// // export const fetchData = async (src, dest) => {
// //   console.log(src, dest);
// //   const res = await fetch(
// //     `https://driving-directions1.p.rapidapi.com/get-directions`,
// //     {
// //       method: "GET",
// //       params: {
// //         origin: "New York, NY",
// //         destination: "Los Angeles, CA",
// //         distance_units: "auto",
// //         avoid_routes: "tolls,ferries",
// //         country: "us",
// //       },
// //       headers: {
// //         "x-rapidapi-key": "03310ac5a1mshc56d58f3dc85688p1ec37fjsn6ae07523a123",
// //         "x-rapidapi-host": "driving-directions1.p.rapidapi.com",
// //       },
// //     },
// //   );
// //   return res;
// // };

// import axios from "axios";
// export const fetchData = async (src, dest) => {
//   console.log(src, dest);
//   const url = new URL(
//     "http://driving-directions1.p.rapidapi.com/get-directions",
//   );
//   //   console.log(url);
//   url.searchParams.append("origin", src);
//   url.searchParams.append("destination", dest);
//   // Uncomment and add more parameters if needed
//   url.searchParams.append("distance_units", "auto");
//   url.searchParams.append("avoid_routes", "tolls,ferries");
//   url.searchParams.append("country", "us");
//   //   console.log(url);

//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "03310ac5a1mshc56d58f3dc85688p1ec37fjsn6ae07523a123",
//       "x-rapidapi-host": "driving-directions1.p.rapidapi.com",
//     },
//   });

//   //   if (!res.ok) {
//   //     throw new Error(`HTTP error! Status: ${res.status}`);
//   //   }

//   //   const data = await res.json(); // Assuming response is JSON, adjust accordingly

//   //   return data; // Return the parsed data
// };
// try {
//   const response = await axios.request(fetchData(src, dest));
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

export const fetchData = async (src, dest) => {
  try {
    const url = new URL(
      "https://driving-directions1.p.rapidapi.com/get-directions",
    );
    url.searchParams.append("origin", src);
    url.searchParams.append("destination", dest);
    url.searchParams.append("distance_units", "auto");
    url.searchParams.append("avoid_routes", "tolls,ferries");
    url.searchParams.append("country", "us");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": import.meta.env.VITE_API_HOST,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status:===> ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:--->", error);
    throw error;
  }
};
