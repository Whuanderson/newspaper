document.addEventListener("DOMContentLoaded", function () {
  const newspaperContainer = document.querySelector(".newspaper-container");
  const newsItems = document.querySelectorAll(".noticia");
  const mainHeadline = document.querySelector(".manchete-container");
  const backButtons = document.querySelectorAll(".back-button");
  const articles = document.querySelectorAll(".full-article");

  function showArticle(articleId) {
    articles.forEach((article) => {
      article.classList.remove("active");
    });

    const selectedArticle = document.getElementById(`article-${articleId}`);
    if (selectedArticle) {
      selectedArticle.classList.add("active");
    }

    newspaperContainer.classList.add("flipped");
  }

  newsItems.forEach((item) => {
    item.addEventListener("click", function () {
      const articleId = this.getAttribute("data-article");
      showArticle(articleId);
    });
  });

  mainHeadline.addEventListener("click", function () {
    const articleId = this.getAttribute("data-article");
    showArticle(articleId);
  });

  backButtons.forEach((button) => {
    button.addEventListener("click", function () {
      newspaperContainer.classList.remove("flipped");

      setTimeout(() => {
        articles.forEach((article) => {
          article.classList.remove("active");
        });
      }, 1000);
    });
  });

  newsItems.forEach((item) => {
    item.addEventListener("click", playPageTurnSound);
  });

  mainHeadline.addEventListener("click", playPageTurnSound);
  backButtons.forEach((button) => {
    button.addEventListener("click", playPageTurnSound);
  });
});
