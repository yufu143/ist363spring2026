const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWU2ZWI3NWM5NmUyZjU0ZGU2ZDE4YTFhZmExMjhiNSIsIm5iZiI6MTc3NTMxNzMyMC4yNDg5OTk4LCJzdWIiOiI2OWQxMzE0OGNiZDFmMTkyNDMwYjg2OTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vxuFpHNCOBmm5-7lHw3xOsWJw7GumTIcIDEWnl9RUws");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.themoviedb.org/3/trending/tv/week?language=en-US", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));