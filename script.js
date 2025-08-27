// 温泉スクラップブック JavaScript

// 検索機能
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const onsenGrid = document.getElementById("onsenGrid");
    
    if (searchInput && onsenGrid) {
        const onsenCards = onsenGrid.querySelectorAll(".onsen-card");
        
        searchInput.addEventListener("input", function() {
            const searchTerm = this.value.toLowerCase();
            
            onsenCards.forEach(card => {
                const name = card.dataset.name.toLowerCase();
                if (name.includes(searchTerm)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});

// フィルター機能
function filterByRating(minRating) {
    const onsenCards = document.querySelectorAll(".onsen-card");
    
    onsenCards.forEach(card => {
        const cleanliness = parseInt(card.dataset.cleanliness);
        const relax = parseInt(card.dataset.relax);
        const manga = parseInt(card.dataset.manga);
        const avgRating = (cleanliness + relax + manga) / 3;
        
        if (avgRating >= minRating) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
    
    // フィルターボタンのアクティブ状態
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

function filterByFeature(feature) {
    const onsenCards = document.querySelectorAll(".onsen-card");
    
    onsenCards.forEach(card => {
        if (feature === "tsubo_bath" && card.dataset.tsubo === "1") {
            card.style.display = "block";
        } else if (feature === "strawberry_milk" && card.dataset.milk === "1") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
    
    // フィルターボタンのアクティブ状態
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

function clearFilters() {
    const onsenCards = document.querySelectorAll(".onsen-card");
    
    onsenCards.forEach(card => {
        card.style.display = "block";
    });
    
    // 検索入力もクリア
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.value = "";
    }
    
    // フィルターボタンのアクティブ状態をクリア
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

// スムーズスクロール
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

// 画像の遅延読み込み
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[data-src]");
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});