type commentsDataType = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    fullName: string;
    username: string;
  };
};

type commentsType = {
  comments: commentsDataType[];
};

export default async function Comments() {
  const res = await fetch("https://dummyjson.com/comments");
  const commentsData: commentsType = await res.json();

  console.log(commentsData.comments);

  return (
    <div className="max-w-3xl h-screen">
      <div>
        <h1 className="font-bold text-3xl text-black">CommentList</h1>
      </div>
      <div>
        <div>
          {commentsData.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div>
                  <h1>Comment: {comment.body}</h1>
                  <h3>Like:{comment.likes}</h3>
                  <h3>post: {comment.postId}</h3>
                </div>

                <div className="flex flex-col">
                  <p>Name: {comment.user.fullName}</p>
                  <span>UserName: {comment.user.username}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
