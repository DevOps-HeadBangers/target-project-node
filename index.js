// Code for Milestone 2
function inc(p, q) {
    if (q == undefined) q = 1; // check for q
    if (p < 0) // check for p
    {
        p = -p;
    }
    return p + q / q;
}

module.exports = inc