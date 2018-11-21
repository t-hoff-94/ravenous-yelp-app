const apiKey = 'ORJFV1PBMcH_BeZ4PITqdz887CZGlwYDkzFeffVD8f7Hgdc09imE5cK-NQZFoHtriUkTvw_U3wB01MOd8lAkF73eQ_csb6WXtApMUu15yWRT21_92XUTiY5Oboz1W3Yx';

const Yelp = {
  search(term,location,sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }).then((response)=>{
      return response.json();
    }).then((jsonResponse)=> {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business)=> {
          console.log(business)
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        })
      }
    });
  }
}

export default Yelp;
