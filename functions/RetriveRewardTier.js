// This function is the endpoint's request handler.
exports = function(request, response) {
    const {points, tier, limit} = request.query;
  
    const search = {};
    
    if(points) {
        search.points = {$eq: points};
    }
    
    if(tier) {
        search.tier = {$eq: tier};
    }

    const doc = context.services.get("mongodb-atlas").db("Soulofox").collection("DailyRewardTier").find(search).limit(parseInt(limit));

    return doc;
};
