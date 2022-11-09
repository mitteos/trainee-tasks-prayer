import {RootState} from "src/store/store";

export const selectCommentsByPrayerId = (prayerId?: number) => {
	return (state: RootState) => state.comment.comments?.filter(com => com.prayerId === prayerId)
}
