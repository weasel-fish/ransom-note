function buildHistogram(array) {
    let histogram = {}

    for(let i = 0; i < array.length; i++) {
        histogram[array[i]] = histogram[array[i]] + 1 || 1
    }

    return histogram
}

function canBuildNote(magazine, note) {
    let histogram = buildHistogram(magazine)

    for(let i = 0; i < note.length; i++) {
        if(histogram[note[i]]) {
            histogram[note[i]] -= 1
        } else {
            return false
        }
    }

    return true
}