export interface CommentState {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
}

export interface AddCommentRequestBody {
  prayerId: number;
  body: string;
  created: string;
}
