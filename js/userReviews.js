fetch("../js/userReviews.json")
.then(res => {
    console.log(JSON.stringify(res.nombre));
})