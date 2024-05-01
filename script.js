const API_KEY = '7f5970fb117445a1983684adf1ec5059';

let currentPage = 1;
let currentCategory = null;
let currentKeyword = null;
let isLoading = false;
let lastArticleCount = 0;

function fetchNews(isSearching){
    if(isLoading) return;
    isLoading = true;
    let url;
    if(isSearching) {
        const keyword = document.getElementById('searchKeyword').value;
        url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}&page=${currentPage}`;
    } else {
        const category = currentCategory || document.getElementById('category').value;
        url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&page=${currentPage}`;
    }


    fetch(url).then(response => response.json()).then(data => {
        const newsContainer = document.getElementById('newsContainer');
        if (currentPage === 1) {
            newsContainer.innerHTML = '';
        }


        const articlesWithImage = data.articles.filter(article => article.urlToImage);

        if(articlesWithImage.length === 0 || articlesWithImage.length === lastArticleCount) {
            displayNoMoreNews();
            return;
        }

        lastArticleCount = articlesWithImage.length

        articlesWithImage.foreach(article => {
            const newsItem = `
                <div class="newsItem">
                    <div class="newsImage">
                        <img src="${article.urlToImage}"
                        alt="${article.title}">
                    
            `
        })

    })
}