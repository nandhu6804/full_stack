//in promiseinsta.js, we implemented only post creation,like,comment
//task: implement share,unshare,unpost,unlike,uncomment

async function likeCode(flag) {
    return new Promise((like) => {
        if (flag) {
            like("Liked the Post Successfully");
        }
        else {
            like("Unliked the Post Successfully");
        }
    });
}

async function commentCode(flag) {
    return new Promise((commentPosted) => {
        if (flag) {
            commentPosted("Comment Posted Successfully in the Post");
        }
        else {
            commentPosted("Comment Removed Successfully from the Post");
        }
    });
}

async function sharePost(flag) {
    return new Promise((share) => {
        if (flag) {
            share("Post Shared Successfully");
        } else {
            share("Post Unshared Successfully");
        }
    });
}

async function unsharePost(flag) {
    return new Promise((unshare) => {
        if (flag) {
            unshare("Post Unshared Successfully");
        }
        else {
            unshare("Post Shared Successfully");
        }
    });
}

/*async function unlikePost(flag) {
    return new Promise((unshare) => {
        if (flag) {
            unlike("Post Unliked Successfully");
        }
        else {
            unlike("Post Liked Successfully");
        }
    });
}

async function uncommentPost(flag) {
    return new Promise((uncomment) => {
        if (flag) {
            uncomment("Post Uncommented Successfully");
        }
        else {
            uncomment("Post Commented Successfully");
        }
    });
}*/

async function createPost() {
    let postFlag = true;
    let likeFlag = true;
    let commentFlag = true;
    let shareFlag = true;
    var post = new Promise((cPost) => {
        cPost("Post Created Successfully");
    });
    var [posts, comment, like, share] = await Promise.all([post, commentCode(commentFlag), likeCode(likeFlag), sharePost(shareFlag)]);
    console.log(posts);
    console.log(comment);
    console.log(like);
    console.log(share);

    var [unlike, uncomment, unshare] = await Promise.all([likeCode(!likeFlag), commentCode(!commentFlag), unsharePost(shareFlag)]);
    console.log(unlike);
    console.log(uncomment);
    console.log(unshare);
}
createPost();



