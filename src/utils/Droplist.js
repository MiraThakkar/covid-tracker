import React from "react";
export default {

    dropDown: function() {

        var Data     = ['this', 'example', 'isnt', 'funny'],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };


        return <select>{Data.map(MakeItem)}</select>;

    }

};