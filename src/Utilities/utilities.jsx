export const getFloorName = (index) => {
    if (index === 0) {
        return 'Ground Floor';
    }

    let toCheck = index % 100;
    let suffix = index + 'th'
    
    if (toCheck % 10 === 1 && toCheck % 100 !== 11) {
        suffix = index + 'st';
    }
    else if (toCheck % 10 === 2 && toCheck % 100 !== 12) {
        suffix = index + 'nd';
    }
    else if (toCheck % 10 === 3 && toCheck % 100 !== 13) {
        suffix = index + 'rd';
    }

    return suffix;
}