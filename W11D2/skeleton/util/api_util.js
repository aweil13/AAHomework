

 export const fetchSearchGiphys = (searchTerm) => {
   return $.ajax({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=avAhQ2SRrwMT5MoXsS3iTFiWwKQC03k9&limit=2" 
    });
}

 