const getReviews = async () => {
    const response = await fetch('/api/recensioni');
    return await response.json();
};

const getReviewById = async (id) => {
    const response = await fetch(`/api/recensioni/${id}`);
    return await response.json();
};

const getFilms = async () => {
    const response = await fetch('/api/film');
    return await response.json();
};

const getNews = async () => {
    const response = await fetch('/api/segnalazioni');
    return await response.json();
};

const addReview = async (review) => {
    const response = await fetch('/api/recensioni', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    return await response.json();
};

export {
    getReviews,
    getReviewById,
    getFilms,
    getNews,
    addReview
};
