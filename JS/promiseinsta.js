async function likeCode() {
    return new Promise((like) => {
        like("Liked the Post Successfully")
    })
}

async function commentCode() {
    return new Promise((commentPosted) => {
        commentPosted("Comment Posted Successfully in the Post")
    })
}

async function createPost() {
    var post = new Promise((cPost) => {
        cPost("Post Created Successfully");
    })
    //var [posts, comment, like] = await Promise.all(post,commentCode(),likeCode())
    //var [posts, comment, like] = Promise.all(post,commentCode(),likeCode())
    //TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
    //var [posts, comment, like] = await Promise.all([post,commentCode,likeCode])
    //output:Promise { 'Post Created Successfully' }[AsyncFunction: commentCode][AsyncFunction: likeCode]
    var [posts, comment, like] = await Promise.all([post, commentCode(), likeCode()])
    console.log(post)
    console.log(comment)
    console.log(like)
}
createPost()