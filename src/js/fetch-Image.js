
export default  class  NewsApiService {
    constructor() {
        this.saerchQuery = '';
        this.page = 1;
        this.perPage = 40;
    }

    fetchHits() {
            const KEY = '34849127-969aa955091248fba76eeb517'
            const url = "https://pixabay.com/api/"
        return   fetch(`${url}?key=${KEY}&q=${this.saerchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`)
           .then(r => r.json())
           .then(data => {
            this.increment();
            return data.hits;
           })}

increment() {
    this.page += 1;
}
resetPage() {
             this.page = 1;
         }



        get query() {
return this.saerchQuery;
        }
        set query(newQuery) {
this.saerchQuery = newQuery;
        }
        }
    










// const axios = require('axios');

// async function fetchImages(imageSearch, page) {
//   try {
//     const response = await axios.get(
//       `https://pixabay.com/api/?key=29856627-9b7b630dedd46d7774f360de0&q=${imageSearch}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
//     );
//     const result = await response;
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export { fetchImages };













//  import axios from 'axios';
// export { fetchImages };


// async function fetchImages() {
//     await axios.get('https://pixabay.com/api/', {
// 		params: {
// 			key: "31198912-785fc91d0a48dd5c6d0fb52b2",
// 			q: qery,
// 			image_type: "photo",
// 			orientation: "horizontal",
// 			safesearch: true,
// 			page: 1,
// 			per_page: 40
// 		}
// 	}).then(data => {
//         console.log(data)
//     })
// }


// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const KEY = '25766392-01b12b6ed5ab34bc2910d9c3e';

// async function fetchImages(query, page, perPage) {
//   const response = await axios.get(
//     `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
//   );
//   return response;
// }

// ===============================================================================================================================================

// export default  class  NewsApiService {
//     constructor() {
//         this.saerchQuery = '';
//         this.page = 1;
//         this.perPage = 5;
//     }

//     fetchArticles() {
//         const options = {
//             headres: {
//                 Authoriazation: '25766392-01b12b6ed5ab34bc2910d9c3e',
//             },
//         };
//         const URL = `https://pixabay.com/api/`;
//         const response = `&q=${this.saerchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;


//         return fetch(response, options)
//     .then(r => r.json()).then(data => {
//         this.incrementPage();
//         return data.articles;
//     })
//     }
//     incrementPage() {
//         this.page += 1;
//     }
//     resetPage() {
//         this.page = 1;
//     }
    
// get query() {
//     return this.saerchQuery
// };
// set query(newQuery) {
//     this.saerchQuery = newQuery;
// }
// }