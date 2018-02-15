export default function(state = null, action) {
    if (!state) {
        return [
            { title: "Harry Potter", pages: 142 },
            { title: "Who Dat", pages: 542 },
            { title: "Huh", pages: 324},
            { title: "Is this a book?", pages: 82 }
        ];
    }

    return state;
}