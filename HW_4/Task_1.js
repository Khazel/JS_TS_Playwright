const scores =  {
    programming: 88,
    design: 74,
    jurispundence: false,
    relational_DB: 92,
    computerGraphics: "submitted",
    patterns: 65,
    philosophy: "transferred",
    network: 81,

    cleanUp: function(){
        for (let param in scores)
        {
            if (typeof scores[param] !== 'number' && typeof scores[param] !== 'function')
            {
                delete scores[param];
            }
        }
    }
};
scores.cleanUp();
console.log(scores);