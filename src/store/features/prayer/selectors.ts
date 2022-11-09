import {RootState} from "src/store/store";

export const selectPrayersByColumnId = (columnId?: number) => {
	return (state: RootState) => state.prayer.prayers?.filter(prayer => prayer.columnId === columnId)
}

export const selectPrayerById = (prayerId: number) => {
	return (state: RootState) => state.prayer.prayers?.find(prayer => prayer.id === prayerId)
}
