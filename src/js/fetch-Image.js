import axios from "axios";
export default  class  NewsApiService {
    constructor() {
        this.saerchQuery = '';
        this.page = 1;
        this.perPage = 5;
    }

    fetchHits() {
            const KEY = '34849127-969aa955091248fba76eeb517'
            const url = "https://pixabay.com/api/"
            return axios.get(`${url}?key=${KEY}&q=${this.saerchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`)
           
        }
        

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

        setTotal(total) {
            this.totalPages = total;
        }}
    






















