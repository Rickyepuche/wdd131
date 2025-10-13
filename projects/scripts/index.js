document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".navigation");
    const toggleButton = document.querySelector("#menu");

    // Create overlay element
    const overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);

    // Toggle menu and overlay
    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        toggleButton.classList.toggle("show");
        overlay.classList.toggle("show");
    });

    // Close menu when clicking overlay
    overlay.addEventListener("click", () => {
        navLinks.classList.remove("show");
        toggleButton.classList.remove("show");
        overlay.classList.remove("show");
    });

    const subscribeBtn = document.querySelector(".subscribe-button a");
    const thirdSection = document.querySelector(".third-section-container");

    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", (e) => {
        if (
            window.location.pathname === "projects/index.html" ||
            window.location.pathname === "projects/index.html"
        ) {
            // If we're already on index page, just scroll
            e.preventDefault();
            thirdSection?.scrollIntoView({ behavior: "smooth" });
        } else {
            // If we're on another page, let the navigation happen
            // The scroll will be handled after page load
        }
        });
    }

  // Add this to handle scroll after navigation
    if (window.location.search.includes("scroll=subscribe")) {
        thirdSection?.scrollIntoView({ behavior: "smooth" });
    }

    (function () {
        function getPageName() {
        const path = location.pathname.replace(/\\/g, "/");
        const parts = path.split("/").filter(Boolean);
        if (parts.length === 0) return "home";
        const last = parts[parts.length - 1].toLowerCase();
        if (last === "index.html" || last === "index") return "index";
        if (last.includes("articles")) return "articles";
        if (last.includes("subscribe")) return "subscribe";
        if (last.includes("blog")) return "blog";
        // fallback: filename without extension
        return last.split(".")[0] || "unknown";
        }

    const pageName = getPageName();

        // expose for scripts and CSS selectors
        document.documentElement.setAttribute("data-page", pageName);
        if (document.body) document.body.dataset.page = pageName;
        window.pageName = pageName;

        // optional debug
        console.log("pageName:", pageName);
    })();

    fetch("./data/blogs.json")
        .then((response) => response.json())
        .then((data) => {
        if (!Array.isArray(data) || data.length === 0) return;

        // keep existing featured + recent rendering for the index page
        // This also handles the case when there's only one blog post
        const last = data.length - 1;
        const blogPostLast = data[last];
        const imageContainer1 = document.getElementById("upper-image-container1");
        if (imageContainer1) {
            imageContainer1.href = `blog.html?post=${last}`;
            const img = document.createElement("img");
            img.src = blogPostLast.image;
            img.alt = blogPostLast.tag || "";
            img.loading = "lazy"; // Add lazy loading
            imageContainer1.appendChild(img);
        }

        const upperTimeStamp1 = document.querySelector("#upper-time-stamp1");
        const upperTimeStamp2 = document.querySelector("#upper-time-stamp2");
        if (upperTimeStamp1) {
            const tag = document.createElement("p");
            tag.textContent = blogPostLast.tag || "";
            upperTimeStamp1.appendChild(tag);
        }
        if (upperTimeStamp2) {
            const uniqueId = document.createElement("p");
            uniqueId.textContent = blogPostLast.uniqueId || "";
            upperTimeStamp2.appendChild(uniqueId);
        }

        const upperTopicContainer = document.querySelector(
            "#upper-content-topic"
        );
        const upperDesContainer = document.querySelector("#upper-content-des");
        if (upperTopicContainer) {
            const topic = document.createElement("a");
            topic.textContent = blogPostLast.topic || "";
            topic.href = `blog.html?post=${last}`;
            upperTopicContainer.appendChild(topic);
        }
        if (upperDesContainer) {
            const des = document.createElement("p");
            des.textContent = blogPostLast.description || "";
            upperDesContainer.appendChild(des);
        }

        const second = data.length - 2;
        if (second >= 0) {
            const blogPostSecond = data[second];
            const imageContainer2 = document.getElementById(
            "lower-image-container"
            );
            if (imageContainer2) {
            imageContainer2.href = `blog.html?post=${second}`;
            const img = document.createElement("img");
            img.src = blogPostSecond.image;
            img.alt = blogPostSecond.tag || "";
            img.loading = "lazy"; // Add lazy loading
            imageContainer2.appendChild(img);
            }

            const lowerTimeStamp1 = document.querySelector("#lower-time-stamp1");
            const lowerTimeStamp2 = document.querySelector("#lower-time-stamp2");
            if (lowerTimeStamp1) {
            const tag = document.createElement("p");
            tag.textContent = blogPostSecond.tag || "";
            lowerTimeStamp1.appendChild(tag);
            }
            if (lowerTimeStamp2) {
            const uniqueId = document.createElement("p");
            uniqueId.textContent = blogPostSecond.uniqueId || "";
            lowerTimeStamp2.appendChild(uniqueId);
            }

            const lowerTopicContainer = document.querySelector(
            "#lower-content-topic"
            );
            const lowerDesContainer = document.querySelector("#lower-content-des");
            if (lowerTopicContainer) {
            const topic = document.createElement("a");
            topic.textContent = blogPostSecond.topic || "";
            topic.href = `blog.html?post=${second}`;
            lowerTopicContainer.appendChild(topic);
            }
            if (lowerDesContainer) {
            const des = document.createElement("p");
            des.textContent = blogPostSecond.description || "";
            lowerDesContainer.appendChild(des);
            }
        }

      // i did this: create simple filtered arrays using array.filter so you have named arrays you asked for
      const allArticles = data;
      const cultureArticle = allArticles.filter((post) => (post.tag || "").toLowerCase() === "culture");
      const technologyArticle = allArticles.filter((post) => (post.tag || "").toLowerCase() === "technology");
      const peopleArticle = allArticles.filter((post) => (post.tag || "").toLowerCase() === "people");
      const lifestyleArticle = allArticles.filter((post) => (post.tag || "").toLowerCase() === "lifestyle");

        function renderArticlesList(postsArray) {
            const articlesContainer = document.querySelector(".articles");
            const articleHeading = document.querySelector("#article-heading");
            if (!articlesContainer) return;

            articlesContainer.innerHTML = "";

            if (!postsArray || postsArray.length === 0) {
            if (articleHeading) articleHeading.textContent = "No articles";
            const noEl = document.createElement("p");
            noEl.textContent = "No articles found for this category.";
            articlesContainer.appendChild(noEl);
            return;
            }

            if (articleHeading) articleHeading.textContent = postsArray[0].tag;

            const frag = document.createDocumentFragment();

            for (let i = postsArray.length - 1; i >= 0; i--) {
            const blogPost = postsArray[i];

            const idx = allArticles.indexOf(blogPost);
            if (idx < 0) continue; 

            const smallContainer = document.createElement("a");
            smallContainer.href = `blog.html?post=${idx}`;
            smallContainer.className = "particular-article";

            const undersmallContainer = document.createElement("div");
            undersmallContainer.className = "particular-article-container";

            const imgWrap = document.createElement("div");
            imgWrap.className = "article-image";
            if (blogPost.image) {
                const img = document.createElement("img");
                img.src = blogPost.image;
                img.alt = blogPost.tag || "";
                img.loading = "lazy"; // Add lazy loading
                imgWrap.appendChild(img);
            }

            const tsWrap = document.createElement("div");
            tsWrap.className = "article-timestamp";
            const ts1 = document.createElement("div");
            ts1.className = "article-timestamp-p";
            ts1.textContent = blogPost.tag || "";
            const ts2 = document.createElement("div");
            ts2.className = "article-timestamp-p";
            ts2.textContent = blogPost.uniqueId || "";
            tsWrap.appendChild(ts1);
            tsWrap.appendChild(ts2);

            const contentWrap = document.createElement("div");
            contentWrap.className = "article-content";
            const title = document.createElement("div");
            title.className = "article-content-header";
            const titleText = document.createElement("h4");
            titleText.textContent = blogPost.topic || "";
            title.appendChild(titleText);
            const summary = document.createElement("div");
            summary.className = "article-content-p";
            const summaryText = document.createElement("p");
            summaryText.textContent = blogPost.description || "";
            summary.appendChild(summaryText);
            contentWrap.appendChild(title);
            contentWrap.appendChild(summary);

            undersmallContainer.appendChild(imgWrap);
            undersmallContainer.appendChild(tsWrap);
            undersmallContainer.appendChild(contentWrap);

            smallContainer.appendChild(undersmallContainer);
            frag.appendChild(smallContainer);
            }

            articlesContainer.appendChild(frag);
        }

        function getTagFromHref(href) {
            try {
            const url = new URL(href, location.origin);
            return (url.searchParams.get("tag") || "all").toLowerCase();
            } catch (e) {
            return "all";
            }
        }

        function arrayForTag(tag) {
            const t = (tag || "all").toLowerCase();
            if (t === "culture") return cultureArticle;
            if (t === "technology") return technologyArticle;
            if (t === "people") return peopleArticle;
            if (t === "lifestyle") return lifestyleArticle;
            // 'all' or unknown -> full array
            return allArticles;
        }

        if (window.pageName === "articles") {
            const params = new URLSearchParams(location.search);
            const initialTag = (params.get("tag") || "all").toLowerCase();
            renderArticlesList(arrayForTag(initialTag));

            document.querySelectorAll(".navigation a").forEach((anchor) => {
            anchor.addEventListener("click", (ev) => {
                ev.preventDefault();

                const clickedTag = getTagFromHref(anchor.getAttribute("href"));
                history.replaceState(
                null,
                "",
                `/articles.html?tag=${encodeURIComponent(clickedTag)}`
                );

                renderArticlesList(arrayForTag(clickedTag));
            });
            });
        }
    

      const main2Container = document.querySelector(".second-section-content-main-2-content");
        if (main2Container) {
            function debounce(fn, wait) {
            let t;
            return (...args) => {
                clearTimeout(t);
                t = setTimeout(() => fn(...args), wait);
            };
            }

            function renderSmallItems() {
            let num = 8;
            if (window.innerWidth < 920 && window.innerWidth > 766) {
                num = 5;
            }

            main2Container.innerHTML = "";

            const frag = document.createDocumentFragment();
            const start = data.length - 3;
            const end = Math.max(0, start - (num - 3));
            for (let i = start; i >= end; i--) {
                const blogPost = data[i];
                const smallContainer = document.createElement("a");
                smallContainer.href = `blog.html?post=${i}`;
                smallContainer.className = "main-2-content-item-container-link";
                const undersmallContainer = document.createElement("div");
                undersmallContainer.className = "main-2-content-item-container";
                smallContainer.appendChild(undersmallContainer);

                const imgWrap = document.createElement("div");
                imgWrap.className = "main-2-content-item-image";
                const img = document.createElement("img");
                img.src = blogPost.image;
                img.alt = blogPost.tag || "";
                img.loading = "lazy"; 
                imgWrap.appendChild(img);

                const tsWrap = document.createElement("div");
                tsWrap.className = "main-2-content-item-timestamp";
                const ts1 = document.createElement("div");
                ts1.className = "main-2-time-stamp";
                ts1.textContent = blogPost.tag || "";
                const ts2 = document.createElement("div");
                ts2.className = "main-2-time-stamp";
                ts2.textContent = blogPost.uniqueId || "";
                tsWrap.appendChild(ts1);
                tsWrap.appendChild(ts2);

                const contentWrap = document.createElement("div");
                contentWrap.className = "main-2-content-item-content";
                const title = document.createElement("div");
                title.className = "main-2-content-item-content-header";
                const titleText = document.createElement("h4");
                titleText.textContent = blogPost.topic || "";
                title.appendChild(titleText);
                const summary = document.createElement("div");
                summary.className = "main-2-content-item-content-content";

                const summaryText = document.createElement("p");
                summaryText.textContent = blogPost.description || "";
                summary.appendChild(summaryText);
                contentWrap.appendChild(title);
                contentWrap.appendChild(summary);

                undersmallContainer.appendChild(imgWrap);
                undersmallContainer.appendChild(tsWrap);
                undersmallContainer.appendChild(contentWrap);

                frag.appendChild(smallContainer);
            }

            main2Container.appendChild(frag);
            }

        // initial render
        renderSmallItems();

        const cultureArticle = data.filter((blogpost) => blogpost.tag === "culture");
        const lifestyleArticle = data.filter((blogpost) => blogpost.tag === "lifestyle");
        const peopleArticle = data.filter((blogpost) => blogpost.tag === "people");
        const technologyArticle = data.filter((blogpost) => blogpost.tag === "technology");

        document.querySelector("#culture-click")?.addEventListener("click", (event) => {
            window.location.href = "articles.html?tag=culture";
          });

        document.querySelector("#lifestyle-click")?.addEventListener("click", (event) => {
            window.location.href = "articles.html?tag=lifestyle";
          });

        document.querySelector("#people-click")?.addEventListener("click", (event) => {
                window.location.href = "articles.html?tag=people";
            });

        document.querySelector("#technology-click")?.addEventListener("click", (event) => {
                window.location.href = "articles.html?tag=technology";
            });
        }

        if (window.pageName === "blog") {
            const params = new URLSearchParams(location.search);
            const postParam = params.get("post");
            const post = Number.isInteger(Number(postParam))
            ? parseInt(postParam, 10)
            : NaN;
            renderBlog(data, post);
        }

        function renderBlog(data, post) {
            const blogPost = data[post];

            const blogImageContainer = document.querySelector(".main-blog-img");
            const mainBlogTimestamp1 = document.querySelector(
            "#main-blog-timestamp1"
            );
            const mainBlogTimestamp2 = document.querySelector(
            "#main-blog-timestamp2"
            );
            const mainBlogTopic = document.querySelector(".main-blog-top-topic h2");
            const mainBlogDescription = document.querySelector(
            ".main-blog-top-description h3"
            );
            const mainBlogParagraph = document.querySelector(
            ".main-blog-paragragh p"
            );

            if (!blogImageContainer || !mainBlogTopic) {
            console.error("Blog page: required DOM elements missing");
            return;
            }

        
            blogImageContainer.innerHTML = "";
            if (blogPost && blogPost.image) {
                const blogImageEl = document.createElement("img");
                blogImageEl.src = blogPost.image;
                blogImageEl.alt = blogPost.tag || "";
                blogImageEl.loading = "eager"; 
                blogImageContainer.appendChild(blogImageEl);
            }

            if (mainBlogTimestamp1)
            mainBlogTimestamp1.textContent = blogPost.tag || "";
            if (mainBlogTimestamp2)
            mainBlogTimestamp2.textContent = blogPost.uniqueId || "";
            if (mainBlogTopic) mainBlogTopic.textContent = blogPost.topic || "";
            if (mainBlogDescription)
            mainBlogDescription.textContent = blogPost.description || "";
            if (mainBlogParagraph)
            mainBlogParagraph.textContent = blogPost.content || "";
        }

        const reviewForm = document.querySelector("#review-form"); 
        if (reviewForm) {
            let subscribeCount = parseInt(localStorage.getItem('subscribeCount')) || 0;
            
            reviewForm.addEventListener("submit", function(e) {
                e.preventDefault(); 
                
                subscribeCount++;
                localStorage.setItem('subscribeCount', subscribeCount);
                console.log('Subscriptions:', subscribeCount);
                
                reviewForm.submit();
            });
        }

        const allArticle = document.querySelectorAll('a[href*="blog.html"]');
        let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

        allArticle.forEach(article => {
            article.addEventListener('click', function() {
                clickCount++;
                localStorage.setItem('clickCount', clickCount);
                console.log('Article clicks:', clickCount);
            });
        });
    })
    .catch((err) => console.error("Error loading JSON:", err));
});

let now = new Date();
let year = now.getFullYear();
document.querySelector("#currentYear").textContent = year;
let date = now.toLocaleString();
document.querySelector("#lastModified").textContent = date;
