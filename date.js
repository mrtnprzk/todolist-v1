module.exports = function() {

    //setting right format of date
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    return today.toLocaleDateString("en-US", options);
} 