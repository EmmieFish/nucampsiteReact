export const validateCommentForm = (values) => {
    const errors = {};

    // if (!values.rating || values.rating === "Select...") {
    //     errors.rating = "Required";
    // }

    //commenting this out because I set the default rating value to 5 for 'marketing'

    if (values.author.length < 2) {
        errors.author = "Must be at least 2 characters.";
    } else if (values.author.length > 15) {
        errors.author = "Must be 15 characters or less.";
    }

    // if (!values.commentText) {
    //     errors.commentText = "Required";
    // }

    //again, letting the customer be lazy and only type their name and no comment.

    return errors;
};
